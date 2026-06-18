import { existsSync, readdirSync, readFileSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { basename, extname, join } from "node:path";

const staticPageDirs = [
  "support-static",
  "plan-static",
  "privacy-policy-static",
  "refund-policy-static",
  "specified_commercial-static",
  "system-requirements-static",
  "membership-terms-static",
];

const legalStaticPageDirs = new Set([
  "privacy-policy-static",
  "refund-policy-static",
  "specified_commercial-static",
  "system-requirements-static",
  "membership-terms-static",
]);

const files = staticPageDirs.map((dir) => `public/${dir}/index.html`);

const scriptIdPattern =
  /<script\b[^>]*id=["'](?:elementor|astra-theme-js|eael|hfe-|jquery-ui|swiper)[^"']*["'][\s\S]*?<\/script>/gi;
const removableScriptNamePattern =
  /(?:analytics\.js|clarity\.js|core\.js|core\.min\.js|eael-[^"']*|f\.txt|f\(1\)\.txt|f\(2\)\.txt|frontend\(1\)\.min\.js|frontend-modules\.min\.js|frontend\.js|frontend\.min\.js|general\.min\.js|gtm\.js|jquery-migrate\.min\.js|jquery\.min\.js|js(?:\(1\)|\(2\))?|main\.948ee93e\.js|mz1ijhnnae|swiper\.min\.js|token_create\.js|v4-shims\.min\.js|webpack\.runtime\.min\.js|winback\.js)/;
const scriptSrcPattern = new RegExp(
  String.raw`<script\b[^>]*src=["'][^"']*${removableScriptNamePattern.source}[^"']*["'][^>]*>\s*<\/script>`,
  "gi",
);
const deviceModePattern =
  /<span\b[^>]*id=["']elementor-device-mode["'][\s\S]*?<\/span>/gi;
const scrollPerformanceStyle = `<style id="static-scroll-performance-css">
.lpb-element[data-settings*="position&quot;:&quot;fixed&quot;"] {
  transform: none !important;
  backface-visibility: visible;
  contain: paint;
  isolation: isolate;
  will-change: auto;
}

.lpb-192 .lpb-element.lpb-element-57590b8 {
  --position: relative !important;
  position: relative !important;
  inset: auto !important;
  transform: none !important;
  backface-visibility: visible;
  contain: layout paint;
  width: 100%;
}
</style>`;

const legalScrollPerformanceStyle = `<style id="static-scroll-performance-css">
html,
body {
  scroll-behavior: auto !important;
}

[data-lpb-type="site-page"] > .lpb-element[data-settings*="position&quot;:&quot;fixed&quot;"],
.lpb-192 .lpb-element.lpb-element-57590b8 {
  transform: none !important;
  backface-visibility: visible !important;
  contain: layout paint style;
  isolation: isolate;
  will-change: auto !important;
}

[data-lpb-type="site-page"] > .lpb-element[data-settings*="position&quot;:&quot;fixed&quot;"] {
  --position: absolute !important;
  position: absolute !important;
  top: 0 !important;
  right: 0 !important;
  left: 0 !important;
  width: 100%;
}

[data-lpb-type="site-page"] > .lpb-element[data-settings*="position&quot;:&quot;fixed&quot;"] *,
.lpb-192 .lpb-element.lpb-element-57590b8 *,
.lpb-5877 .lpb-element.lpb-element-66f5954 img,
.footer-cta {
  animation: none !important;
  transition: none !important;
}

[data-lpb-type="site-page"] *,
[data-lpb-type="site-page"] *::before,
[data-lpb-type="site-page"] *::after {
  animation-duration: 0s !important;
  animation-delay: 0s !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0s !important;
  transition-delay: 0s !important;
}

.lpb-192 .lpb-element.lpb-element-57590b8 {
  --position: relative !important;
  position: relative !important;
  inset: auto !important;
  width: 100%;
}

[data-lpb-type="site-page"] > .lpb-element:not(:first-child),
.lpb-3547 {
  content-visibility: auto;
  contain-intrinsic-size: 800px;
}
</style>`;

const staticRoots = staticPageDirs.map((dir) => `public/${dir}`);
const textExtensions = new Set([".css", ".html", ".js"]);

const names = [
  ["header-footer-elementor.css", "site-header-footer.css"],
  ["header-footer-lpb.css", "site-header-footer.css"],
  ["elementor-icons.min.css", "builder-icons.min.css"],
  ["lpb-icons.min.css", "builder-icons.min.css"],
];

const removableAssets = new Set([
  "analytics.js",
  "clarity.js",
  "core.js",
  "core.min.js",
  "eael-8030.js",
  "f.txt",
  "f(1).txt",
  "f(2).txt",
  "frontend(1).min.js",
  "frontend-modules.min.js",
  "frontend.js",
  "frontend.min.js",
  "general.min.js",
  "gtm.js",
  "jquery-migrate.min.js",
  "jquery.min.js",
  "js",
  "js(1)",
  "js(2)",
  "lazyload.min.js",
  "main.948ee93e.js",
  "swiper.min.js",
  "token_create.js",
  "v4-shims.min.js",
  "webpack.runtime.min.js",
  "winback.js",
]);

const replacements = [
  [/elementor/g, "lpb"],
  [/Elementor/g, "StaticBuilder"],
  [/ELEMENTOR/g, "STATIC_BUILDER"],
  [/eael/g, "faqUi"],
  [/EAEL/g, "FAQ_UI"],
  [/hfe/g, "siteNav"],
  [/HFE/g, "SITE_NAV"],
  [/astra/g, "baseTheme"],
  [/Astra/g, "BaseTheme"],
  [/ASTRA/g, "BASE_THEME"],
  [/woocommerce/g, "commerce"],
  [/WooCommerce/g, "Commerce"],
  [/wp-content/g, "site-assets"],
  [/wp-admin/g, "site-admin"],
  [/wp-includes/g, "site-includes"],
  [/wp-json/g, "site-json"],
  [/wp-/g, "site-"],
  [/--wp--/g, "--site--"],
];

function listTextFiles(root) {
  const results = [];
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    for (const entry of readdirSync(current, { withFileTypes: true })) {
      const path = join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(path);
      } else if (textExtensions.has(extname(entry.name))) {
        results.push(path);
      }
    }
  }

  return results;
}

function localizeUploads(html, page) {
  const assetDir = join("public", page, "files");
  const assets = new Map();

  for (const name of readdirSync(assetDir)) {
    assets.set(name, `/${page}/files/${name}`);
  }

  return html.replace(
    /https:\\?\/\\?\/generative-ai\.bytech\.jp\\?\/wp-content\\?\/uploads\\?\/[^"')\s<>]+/g,
    (url) => {
      const normalized = url.replace(/\\\//g, "/");
      const assetName = basename(decodeURIComponent(normalized));
      return assets.get(assetName) ?? "";
    },
  );
}

function removeStyleBlocks(html, shouldRemove) {
  return html.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, (block) =>
    shouldRemove(block) ? "" : block,
  );
}

function cleanLegalCustomCss(html) {
  return html.replace(
    /<style\b[^>]*id=["']site-custom-css["'][^>]*>([\s\S]*?)<\/style>/i,
    (_block, css) => {
      let output = css
        .replace(
          /\/\* FV1_CTA \*\/[\s\S]*?@keyframes button-anime\s*\{\s*0%[\s\S]*?100%\s*\{[\s\S]*?\}\s*\}\s*/i,
          "",
        )
        .replace(/animation:\s*button-anime\s+2s\s+linear\s+infinite;?/gi, "animation: none;")
        .replace(/@keyframes\s+button-anime\s*\{[\s\S]*?\}\s*/gi, "")
        .replace(/\n:root\s*\{\s*--cs-navy:[\s\S]*$/i, "\n");

      return `<style id="site-custom-css">${output.trim()}\n</style>`;
    },
  );
}

function cleanHtml(file, html) {
  const page = file.match(/^public\/([^/]+-static)\/index\.html$/)?.[1];

  html = html
    .replace(scriptIdPattern, "")
    .replace(scriptSrcPattern, "")
    .replace(deviceModePattern, "")
    .replace(/<script\b[^>]*id=["']jquery[^"']*["'][\s\S]*?<\/script>/gi, "")
    .replace(/<script\b[^>]*>\s*var localize =[\s\S]*?<\/script>/gi, "")
    .replace(/<script\b[^>]*src=["']data:text\/javascript[^"']*["'][\s\S]*?<\/script>/gi, "")
    .replace(/<!-- Google Tag Manager -->[\s\S]*?<!-- End Google Tag Manager -->/gi, "")
    .replace(/<!-- Google Tag Manager \(noscript\) -->[\s\S]*?<!-- End Google Tag Manager \(noscript\) -->/gi, "")
    .replace(/<script\b[^>]*>\s*\(function\(w,d,s,l,i\)\{[\s\S]*?googletagmanager[\s\S]*?<\/script>/gi, "")
    .replace(/<script\b[^>]*>\s*\(function\(a,e,b,f,g,c,d\)\{[\s\S]*?clarity[\s\S]*?<\/script>/gi, "")
    .replace(/<script\b[^>]*>\s*\/\(trident\|msie\)\/i\.test\(navigator\.userAgent\)[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*(?:wp-json|xmlrpc|\/feed\/|comments\/feed|oembed|EditURI|shortlink)[^>]*>/gi, "")
    .replace(/<link\b[^>]*wp-content\/plugins\/elementor[^>]*>/gi, "")
    .replace(/<link\b[^>]*wp-content\/uploads\/elementor[^>]*>/gi, "")
    .replace(/<style\b[^>]*(?:data-rc-|monica|felo)[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<style\b[^>]*>\s*@import url\('https:\/\/fonts\.googleapis\.com\/css2\?family=Work\+Sans[\s\S]*?<\/style>/gi, "");

  html = removeStyleBlocks(html, (block) => /felo--|_monica-theme|root-container-[A-Za-z0-9]/i.test(block));

  if (legalStaticPageDirs.has(page)) {
    html = cleanLegalCustomCss(html);
  }

  html = html
    .replace(/\sdata-qb-installed=["'][^"']*["']/gi, "")
    .replace(/\smonica-(?:id|version)=["'][^"']*["']/gi, "")
    .replace(/<meta\b[^>]*http-equiv=["']origin-trial["'][^>]*>/gi, "")
    .replace(/<script\b[^>]*type=["']speculationrules["'][\s\S]*?<\/script>/gi, "")
    .replace(/<script\b[^>]*id=["']rocket-[^"']*["'][\s\S]*?<\/script>/gi, "")
    .replace(/<div\b[^>]*id=["']ebis_tag_checker["'][\s\S]*?<\/template><\/div>/gi, "")
    .replace(/<div\b[^>]*id=["']clarity-live-widget-container["'][\s\S]*?<\/div>/gi, "");

  html = html.replace(/<style\b[^>]*id=["']static-scroll-performance-css["'][\s\S]*?<\/style>/gi, "");
  const performanceStyle = legalStaticPageDirs.has(page)
    ? legalScrollPerformanceStyle
    : scrollPerformanceStyle;
  if (/<\/head>/i.test(html)) {
    html = html.replace(/<\/head>/i, `${performanceStyle}\n</head>`);
  } else {
    html = html.replace(/(<body\b[^>]*>)/i, `$1\n${performanceStyle}`);
  }

  if (page) {
    html = localizeUploads(html, page);
  }

  return html;
}

function applyReplacements(content) {
  let output = content;
  for (const [pattern, replacement] of replacements) {
    output = output.replace(pattern, replacement);
  }

  for (const [from, to] of names) {
    output = output.replaceAll(from, to);
  }

  return output;
}

function normalizeHtmlAttributes(html) {
  return html.replace(/([a-zA-Z:-]+)=""([^"]*?)""/g, '$1="$2"');
}

for (const root of staticRoots) {
  const filesDir = join(root, "files");
  for (const [from, to] of names) {
    const fromPath = join(filesDir, from);
    const toPath = join(filesDir, to);
    if (existsSync(fromPath) && !existsSync(toPath)) {
      renameSync(fromPath, toPath);
    }
  }

  for (const asset of removableAssets) {
    const assetPath = join(filesDir, asset);
    if (existsSync(assetPath)) {
      rmSync(assetPath);
    }
  }
}

for (const file of files) {
  let html = readFileSync(file, "utf8");

  html = normalizeHtmlAttributes(applyReplacements(cleanHtml(file, html)));

  writeFileSync(file, html);
}

for (const root of staticRoots) {
  for (const file of listTextFiles(root)) {
    const content = readFileSync(file, "utf8");
    writeFileSync(file, applyReplacements(content));
  }
}
