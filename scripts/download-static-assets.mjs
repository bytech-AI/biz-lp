import { createWriteStream, existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { execSync } from "node:child_process";
import { basename, join } from "node:path";
import { get } from "node:https";

const pages = [
  ["public/support-static/index.html", "support-static"],
  ["public/plan-static/index.html", "plan-static"],
  ["public/privacy-policy-static/index.html", "privacy-policy-static"],
  ["public/refund-policy-static/index.html", "refund-policy-static"],
  ["public/specified_commercial-static/index.html", "specified_commercial-static"],
  ["public/system-requirements-static/index.html", "system-requirements-static"],
  ["public/membership-terms-static/index.html", "membership-terms-static"],
];

function extractUrls(gitPath) {
  const html = execSync(`git show HEAD:${gitPath}`, {
    encoding: "utf8",
    maxBuffer: 30 * 1024 * 1024,
  });

  return [
    ...new Set(
      [...html.matchAll(/https:\/\/generative-ai\.bytech\.jp\/wp-content\/(?:uploads|plugins\/elementor)\/[^"')\s<>]+/g)]
        .map((match) => match[0].replace(/&amp;/g, "&")),
    ),
  ];
}

function download(url, destination) {
  return new Promise((resolve, reject) => {
    get(encodeURI(url), (response) => {
      if ([301, 302, 303, 307, 308].includes(response.statusCode ?? 0)) {
        response.resume();
        download(new URL(response.headers.location, url).toString(), destination)
          .then(resolve, reject);
        return;
      }

      if (response.statusCode !== 200) {
        response.resume();
        reject(new Error(`${response.statusCode} ${url}`));
        return;
      }

      const file = createWriteStream(destination);
      response.pipe(file);
      file.on("finish", () => {
        file.close(resolve);
      });
      file.on("error", reject);
    }).on("error", reject);
  });
}

for (const [gitPath, page] of pages) {
  const assetDir = join("public", page, "files");
  mkdirSync(assetDir, { recursive: true });

  const existing = new Set(readdirSync(assetDir));
  const urls = extractUrls(gitPath).filter((url) => !existing.has(basename(decodeURIComponent(url))));

  console.log(`${page}: ${urls.length} missing assets`);

  for (const url of urls) {
    const filename = basename(decodeURIComponent(url));
    const destination = join(assetDir, filename);

    try {
      await download(url, destination);
      console.log(`downloaded ${page}/files/${filename}`);
    } catch (error) {
      if (existsSync(destination)) {
        rmSync(destination);
      }
      console.error(`failed ${url}`);
      console.error(error.message);
    }
  }
}
