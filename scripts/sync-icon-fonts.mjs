import { mkdir, copyFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

const pages = [
  "support-static",
  "privacy-policy-static",
  "refund-policy-static",
  "specified_commercial-static",
  "system-requirements-static",
  "membership-terms-static",
];

const faSolidFiles = ["fa-solid-900.eot", "fa-solid-900.woff2", "fa-solid-900.woff", "fa-solid-900.ttf", "fa-solid-900.svg"];
const faBrandsFiles = ["fa-brands-400.eot", "fa-brands-400.woff2", "fa-brands-400.woff", "fa-brands-400.ttf", "fa-brands-400.svg"];
const eiconsFiles = ["eicons.eot", "eicons.woff2", "eicons.woff", "eicons.ttf", "eicons.svg"];

const faBrandsBase = "https://use.fontawesome.com/releases/v5.15.3/webfonts";
const eiconsBase = "https://www.wilpf.org/wp-content/plugins/elementor/assets/lib/eicons/fonts";

async function download(url, destination) {
  if (existsSync(destination)) return;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${response.status} ${url}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(destination, buffer);
}

async function ensureFile(source, destination) {
  await mkdir(join(destination, ".."), { recursive: true });
  await copyFile(source, destination);
}

const sourceSupportDir = join("public", "support-static");
const sourcePlanDir = join("public", "plan-static");

for (const page of pages) {
  await mkdir(join("public", page, "webfonts"), { recursive: true });
  await mkdir(join("public", page, "fonts"), { recursive: true });
}

for (const file of faSolidFiles) {
  const source = join(sourcePlanDir, "files", file);
  for (const page of pages) {
    await ensureFile(source, join("public", page, "webfonts", file));
  }
}

for (const file of faBrandsFiles) {
  const url = `${faBrandsBase}/${file}`;
  const supportTarget = join(sourceSupportDir, "webfonts", file);
  await download(url, supportTarget);
  for (const page of pages) {
    await ensureFile(supportTarget, join("public", page, "webfonts", file));
  }
}

for (const file of eiconsFiles) {
  const url = `${eiconsBase}/${file}`;
  const supportTarget = join(sourceSupportDir, "fonts", file);
  await download(url, supportTarget);
  for (const page of pages) {
    await ensureFile(supportTarget, join("public", page, "fonts", file));
  }
}

console.log("icon fonts synchronized");
