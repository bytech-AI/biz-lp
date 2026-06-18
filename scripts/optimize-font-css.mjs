import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { basename, join } from "node:path";
import { get } from "node:https";
import { execFileSync } from "node:child_process";

const fontCssFiles = [
  "public/support-static/files/notosansjp.css",
  "public/support-static/files/roboto.css",
  "public/support-static/files/robotoslab.css",
  "public/support-static/files/reemkufi.css",
  "public/support-static/files/reemkufifun.css",
];

const shouldDownload = process.argv.includes("--download");

function readDecl(block, prop) {
  const match = block.match(new RegExp(`${prop}\\s*:\\s*([^;]+)`, "i"));
  return match?.[1]?.trim() ?? "";
}

function readUrl(src) {
  const match = src.match(/url\((['"]?)(.*?)\1\)/i);
  return match?.[2] ?? "";
}

function localSrc(src) {
  const url = readUrl(src);
  if (!url.startsWith("http")) return src;
  return src.replace(url, basename(new URL(url).pathname));
}

function weightRange(weights) {
  const numeric = [...weights].map(Number).filter(Number.isFinite).sort((a, b) => a - b);
  if (numeric.length === 0) return [...weights][0] ?? "400";
  return numeric[0] === numeric.at(-1) ? `${numeric[0]}` : `${numeric[0]} ${numeric.at(-1)}`;
}

function buildBlock(group) {
  const lines = [
    "@font-face {",
    `  font-family: ${group.family};`,
    `  font-style: ${group.style};`,
    `  font-weight: ${weightRange(group.weights)};`,
  ];

  if (group.display) lines.push(`  font-display: ${group.display};`);
  lines.push(`  src: ${localSrc(group.src)};`);
  if (group.range) lines.push(`  unicode-range: ${group.range};`);
  lines.push("}");
  return lines.join("\n");
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

for (const file of fontCssFiles) {
  const css = await readFile(file, "utf8");
  const groups = new Map();
  const urls = new Map();
  const sources = [css];

  if (shouldDownload) {
    try {
      sources.push(execFileSync("git", ["show", `HEAD:${file}`], { encoding: "utf8" }));
    } catch {
      // The current CSS is still sufficient when the file is not present in git.
    }
  }

  for (const source of sources) {
    for (const match of source.matchAll(/@font-face\s*{[\s\S]*?}/g)) {
    const block = match[0];
    const family = readDecl(block, "font-family");
    const style = readDecl(block, "font-style") || "normal";
    const weight = readDecl(block, "font-weight") || "400";
    const display = readDecl(block, "font-display");
    const src = readDecl(block, "src");
    const range = readDecl(block, "unicode-range");
    const url = readUrl(src);

    if (url.startsWith("http")) {
      urls.set(url, join(file.replace(/\/[^/]+$/, ""), basename(new URL(url).pathname)));
    }
    }
  }

  for (const match of css.matchAll(/@font-face\s*{[\s\S]*?}/g)) {
    const block = match[0];
    const family = readDecl(block, "font-family");
    const style = readDecl(block, "font-style") || "normal";
    const weight = readDecl(block, "font-weight") || "400";
    const display = readDecl(block, "font-display");
    const src = readDecl(block, "src");
    const range = readDecl(block, "unicode-range");

    const key = [family, style, localSrc(src), range].join("\u0000");
    const group = groups.get(key) ?? { family, style, display, src, range, weights: new Set() };
    group.weights.add(weight);
    groups.set(key, group);
  }

  const rootVars = css.match(/:root\s*{[\s\S]*?}\s*$/)?.[0]?.trim();
  const nextCss = [...groups.values()].map(buildBlock).join("\n") + (rootVars ? `\n${rootVars}\n` : "\n");
  await writeFile(file, nextCss);

  if (shouldDownload) {
    for (const [url, target] of urls) {
      await download(url, target);
    }
  }

  console.log(`${file}: ${Buffer.byteLength(css)} -> ${Buffer.byteLength(nextCss)} bytes, ${groups.size} font faces`);
}
