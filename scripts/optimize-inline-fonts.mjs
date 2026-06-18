import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { basename, join } from "node:path";
import { get } from "node:https";
import { execFileSync } from "node:child_process";

const pages = ["public/plan-static/index.html"];
const shouldDownload = process.argv.includes("--download");

function readDecl(block, prop) {
  const match = block.match(new RegExp(`${prop}\\s*:\\s*([^;]+)`, "i"));
  return match?.[1]?.trim() ?? "";
}

function readUrl(src) {
  const match = src.match(/url\((['"]?)(.*?)\1\)/i);
  return match?.[2] ?? "";
}

function pageAssetUrl(page, url) {
  if (!url.startsWith("http")) return url;
  const parsed = new URL(url);
  return `/${page.replace(/^public\//, "").replace(/\/index\.html$/, "")}/files/${basename(parsed.pathname)}${parsed.hash}`;
}

function pageAssetPath(page, url) {
  const parsed = new URL(url);
  return join(page.replace(/\/index\.html$/, ""), "files", basename(parsed.pathname));
}

function localSrc(page, src) {
  const url = readUrl(src);
  if (!url.startsWith("http")) return src;
  return src.replace(url, pageAssetUrl(page, url));
}

function weightRange(weights) {
  const numeric = [...weights].map(Number).filter(Number.isFinite).sort((a, b) => a - b);
  if (numeric.length === 0) return [...weights][0] ?? "400";
  return numeric[0] === numeric.at(-1) ? `${numeric[0]}` : `${numeric[0]} ${numeric.at(-1)}`;
}

function buildBlock(group) {
  const lines = [
    "@font-face{",
    `font-family:${group.family};`,
    `font-style:${group.style};`,
    `font-weight:${weightRange(group.weights)};`,
  ];

  if (group.display) lines.push(`font-display:${group.display};`);
  lines.push(`src:${localSrc(group.page, group.src)};`);
  if (group.range) lines.push(`unicode-range:${group.range};`);
  lines.push("}");
  return lines.join("");
}

async function download(url, target) {
  if (existsSync(target)) return;
  await mkdir(join(target, ".."), { recursive: true });
  await new Promise((resolve, reject) => {
    get(url, (response) => {
      if (response.statusCode !== 200) {
        response.resume();
        reject(new Error(`${response.statusCode} ${url}`));
        return;
      }
      const chunks = [];
      response.on("data", (chunk) => chunks.push(chunk));
      response.on("end", async () => {
        try {
          await writeFile(target, Buffer.concat(chunks));
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    }).on("error", reject);
  });
}

for (const page of pages) {
  const html = await readFile(page, "utf8");
  const groups = new Map();
  const urls = new Map();
  const sources = [html];

  if (shouldDownload) {
    try {
      sources.push(execFileSync("git", ["show", `HEAD:${page}`], { encoding: "utf8" }));
    } catch {
      // The current HTML is still sufficient when the file is not present in git.
    }
  }

  for (const source of sources) {
    for (const match of source.matchAll(/https:\/\/[^)'"\s]+(?:#[^)'"\s]+)?/g)) {
      const url = match[0];
      if (/\.(woff2?|ttf|eot|svg)(?:[#?].*)?$/i.test(url)) {
        urls.set(url, pageAssetPath(page, url));
      }
    }
  }

  for (const match of html.matchAll(/@font-face\s*{[\s\S]*?}/g)) {
    const block = match[0];
    const family = readDecl(block, "font-family");
    const style = readDecl(block, "font-style") || "normal";
    const weight = readDecl(block, "font-weight") || "400";
    const display = readDecl(block, "font-display");
    const src = readDecl(block, "src");
    const range = readDecl(block, "unicode-range");
    const url = readUrl(src);

    if (url.startsWith("http")) {
      urls.set(url, pageAssetPath(page, url));
    }

    const key = [family, style, localSrc(page, src), range].join("\u0000");
    const group = groups.get(key) ?? { page, family, style, display, src, range, weights: new Set() };
    group.weights.add(weight);
    groups.set(key, group);
  }

  const fontCss = [...groups.values()].map(buildBlock).join("");
  let nextHtml = html;
  for (const url of urls.keys()) {
    nextHtml = nextHtml.replaceAll(url, pageAssetUrl(page, url));
  }
  nextHtml = nextHtml.replace(/@font-face\s*{[\s\S]*?}/g, "");
  nextHtml = nextHtml.replace(/(<style\b[^>]*>)/i, `$1${fontCss}`);
  await writeFile(page, nextHtml);

  if (shouldDownload) {
    for (const [url, target] of urls) {
      await download(url, target);
    }
  }

  console.log(`${page}: ${Buffer.byteLength(html)} -> ${Buffer.byteLength(nextHtml)} bytes, ${groups.size} font faces`);
}
