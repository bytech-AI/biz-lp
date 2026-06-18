import { readFile } from "node:fs/promises";
import { join } from "node:path";

const isDev = process.env.NODE_ENV !== "production";

const htmlCache = new Map<string, Promise<string>>();

const headers = {
  "content-type": "text/html; charset=utf-8",
  "cache-control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
};

// 共通ヘッダー/フッターのプレースホルダ。ページ HTML にこのコメントがある箇所だけ差し込む。
// counseling / サンクス等、プレースホルダを置かないページは無変更で配信される。
const HEADER_PLACEHOLDER = "<!--SHARED_HEADER-->";
const FOOTER_PLACEHOLDER = "<!--SHARED_FOOTER-->";
const CHROME_CSS_LINK = '<link rel="stylesheet" href="/_shared/site-chrome.css">';

function readPublic(relativePath: string) {
  return readFile(join(process.cwd(), "public", relativePath), "utf8");
}

function readStaticHtml(relativePath: string) {
  if (isDev) {
    return readPublic(relativePath);
  }

  const cached = htmlCache.get(relativePath);
  if (cached) {
    return cached;
  }

  const html = readPublic(relativePath);
  htmlCache.set(relativePath, html);
  return html;
}

let chromeCache: Promise<{ header: string; footer: string }> | null = null;

function loadChrome() {
  if (!isDev && chromeCache) {
    return chromeCache;
  }

  const chrome = Promise.all([
    readPublic("_shared/header.html").catch(() => ""),
    readPublic("_shared/footer.html").catch(() => ""),
  ]).then(([header, footer]) => ({ header, footer }));

  if (!isDev) {
    chromeCache = chrome;
  }
  return chrome;
}

function injectChrome(html: string, chrome: { header: string; footer: string }) {
  const needsHeader = html.includes(HEADER_PLACEHOLDER);
  const needsFooter = html.includes(FOOTER_PLACEHOLDER);
  if (!needsHeader && !needsFooter) {
    return html;
  }

  let out = html;
  if (needsHeader) {
    out = out.replace(HEADER_PLACEHOLDER, chrome.header);
  }
  if (needsFooter) {
    out = out.replace(FOOTER_PLACEHOLDER, chrome.footer);
  }

  // 共通 chrome 用 CSS を <head> に一度だけ差し込む
  if (!out.includes(CHROME_CSS_LINK)) {
    out = out.includes("</head>")
      ? out.replace("</head>", `${CHROME_CSS_LINK}</head>`)
      : `${CHROME_CSS_LINK}${out}`;
  }
  return out;
}

export async function staticHtmlResponse(relativePath: string) {
  const [html, chrome] = await Promise.all([readStaticHtml(relativePath), loadChrome()]);
  return new Response(injectChrome(html, chrome), { headers });
}
