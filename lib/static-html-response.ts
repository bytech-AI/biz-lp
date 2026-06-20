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

// 全ページ共通: 見出しウェイト統一 (h2=900 / h3=800)。<head> 末尾に一度だけ注入。
const HEADING_WEIGHT_STYLE =
  '<style id="bt-heading-weight">h2{font-weight:900!important}h3{font-weight:800!important}</style>';

function injectHeadingWeight(html: string) {
  if (html.includes("bt-heading-weight")) {
    return html;
  }
  return html.includes("</head>")
    ? html.replace("</head>", `${HEADING_WEIGHT_STYLE}</head>`)
    : `${HEADING_WEIGHT_STYLE}${html}`;
}

// 解析タグ（GTM + Ahrefs）。<head> 直後に注入する。geek / career は除外（biz は別ルートなので対象外）。
// 既に同じものがあるページ（旧マスター系は GTM 内包済み）には、無いものだけ足す。
const ANALYTICS_EXCLUDE = ["geek-static", "career-static"];
const GTM_HTML =
  "\n<!-- Google Tag Manager -->\n" +
  "<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-K6HH9C2F');</script>\n" +
  "<!-- End Google Tag Manager -->\n";
const AHREFS_HTML =
  '<script src="https://analytics.ahrefs.com/analytics.js" data-key="aZ898U8dJ/4/mdj4DgCDyg" async></script>\n';
const GTM_NOSCRIPT =
  '\n<!-- Google Tag Manager (noscript) -->\n' +
  '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K6HH9C2F" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>\n' +
  "<!-- End Google Tag Manager (noscript) -->\n";

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

function injectAnalytics(html: string, relativePath: string) {
  if (ANALYTICS_EXCLUDE.some((p) => relativePath.startsWith(p))) {
    return html;
  }
  let out = html;
  // <head>: GTM(本体) + Ahrefs（無いものだけ）
  let headAdd = "";
  if (!html.includes("GTM-K6HH9C2F")) {
    headAdd += GTM_HTML;
  }
  if (!html.includes("analytics.ahrefs.com")) {
    headAdd += AHREFS_HTML;
  }
  if (headAdd) {
    const headTag = out.match(/<head[^>]*>/i);
    if (headTag) {
      const idx = out.indexOf(headTag[0]) + headTag[0].length;
      out = out.slice(0, idx) + headAdd + out.slice(idx);
    }
  }
  // <body> 直後: GTM noscript（無ければ）
  if (!html.includes("ns.html?id=GTM-K6HH9C2F")) {
    const bodyTag = out.match(/<body[^>]*>/i);
    if (bodyTag) {
      const idx = out.indexOf(bodyTag[0]) + bodyTag[0].length;
      out = out.slice(0, idx) + GTM_NOSCRIPT + out.slice(idx);
    }
  }
  return out;
}

export async function staticHtmlResponse(relativePath: string) {
  const [html, chrome] = await Promise.all([readStaticHtml(relativePath), loadChrome()]);
  const out = injectHeadingWeight(injectAnalytics(injectChrome(html, chrome), relativePath));
  return new Response(out, { headers });
}
