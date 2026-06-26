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

// Elementor image-carousel を CSS scroll-snap で動かす（Swiper 非依存）。
// 旧WP origin (generative-ai.bytech.jp) 停止で Elementor frontend.js が swiper の
// webpack チャンクを動的ロードできず全カルーセルが初期化されなくなったため、
// Swiper を使わず CSS のスクロールスナップ＋極小JS（矢印/ドット/autoplay）で代替する。
// レイアウト・スワイプは CSS が担い、Swiper(143KB) への依存を排除して軽量化する。
// data-settings から slides_to_show / navigation / autoplay 等を読み Elementor 挙動を再現。
const CAROUSEL_FIX_SCRIPT = `<style id="bt-carousel-css">
.bt-snap{position:relative}
.bt-snap>.swiper-wrapper{display:flex!important;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none;-ms-overflow-style:none;transform:none!important}
.bt-snap>.swiper-wrapper::-webkit-scrollbar{width:0;height:0;display:none}
.bt-snap>.swiper-wrapper>.swiper-slide{scroll-snap-align:start;flex:0 0 var(--bt-basis,100%)!important;width:var(--bt-basis,100%)!important;max-width:var(--bt-basis,100%);margin:0!important}
.bt-nonav>.swiper-pagination,.bt-nonav>.elementor-swiper-button{display:none!important}
</style><script id="bt-carousel-fix">(function(){
function per(s){return window.innerWidth<=767?(parseInt(s.slides_to_show_mobile||s.slides_to_show||1,10)||1):(parseInt(s.slides_to_show||1,10)||1);}
function setup(w){
var c=w.querySelector('.elementor-image-carousel-wrapper');if(!c||c.__bt)return;
var track=c.querySelector('.swiper-wrapper');if(!track)return;c.__bt=1;
var s={};try{s=JSON.parse(w.getAttribute('data-settings')||'{}');}catch(e){}
track.querySelectorAll('.swiper-slide-duplicate').forEach(function(d){d.remove();});
track.removeAttribute('style');
var slides=[].slice.call(track.children).filter(function(n){return n.classList&&n.classList.contains('swiper-slide');});
slides.forEach(function(sl){sl.removeAttribute('style');['swiper-slide-active','swiper-slide-next','swiper-slide-prev','swiper-slide-visible','swiper-slide-fully-visible'].forEach(function(x){sl.classList.remove(x);});});
c.classList.remove('swiper-initialized','swiper-backface-hidden');
c.querySelectorAll('img.swiper-lazy[data-src]').forEach(function(im){im.src=im.getAttribute('data-src');im.classList.remove('swiper-lazy');});
c.classList.add('bt-snap');
function basis(){track.style.setProperty('--bt-basis',(100/per(s))+'%');}basis();
var pg=c.querySelector('.swiper-pagination');
var dots=pg?[].slice.call(pg.querySelectorAll('.swiper-pagination-bullet')):[];
var nx=c.querySelector('.elementor-swiper-button-next'),pv=c.querySelector('.elementor-swiper-button-prev');
function sw(){return slides[0]?slides[0].getBoundingClientRect().width:track.clientWidth;}
function idx(){return Math.round(track.scrollLeft/Math.max(1,sw()));}
function maxi(){return Math.max(0,slides.length-per(s));}
function go(i,sm){i=Math.max(0,Math.min(maxi(),i));track.scrollTo({left:i*sw(),behavior:sm?'smooth':'auto'});}
function sync(){var i=idx();dots.forEach(function(d,di){d.classList.toggle('swiper-pagination-bullet-active',di===i);});if(pv)pv.classList.toggle('swiper-button-disabled',i<=0);if(nx)nx.classList.toggle('swiper-button-disabled',i>=maxi());}
// 全スライドが収まりスクロール不可な時はナビ(ドット/矢印)を隠す。PC幅で枚数が表示数以下のケース等。
function updateNav(){c.classList.toggle('bt-nonav',track.scrollWidth<=track.clientWidth+2);}
var ap=s.autoplay==='yes',delay=parseInt(s.autoplay_speed||5000,10)||5000,timer=null,dead=false;
function tick(){var i=idx();go(i>=maxi()?0:i+1,true);}
function play(){if(ap&&!dead&&!timer&&maxi()>0)timer=setInterval(tick,delay);}
function pause(){if(timer){clearInterval(timer);timer=null;}}
function kill(){dead=true;pause();}
dots.forEach(function(d,di){d.addEventListener('click',function(){go(di,true);kill();});});
if(nx)nx.addEventListener('click',function(e){e.preventDefault();go(idx()+1,true);kill();});
if(pv)pv.addEventListener('click',function(e){e.preventDefault();go(idx()-1,true);kill();});
var raf;track.addEventListener('scroll',function(){if(raf)cancelAnimationFrame(raf);raf=requestAnimationFrame(sync);},{passive:true});
var rz;window.addEventListener('resize',function(){clearTimeout(rz);rz=setTimeout(function(){basis();go(idx(),false);updateNav();sync();if(ap){if(maxi()>0)play();else pause();}},150);});
if(ap){play();if(s.pause_on_hover!=='no'){c.addEventListener('mouseenter',pause);c.addEventListener('mouseleave',play);}if(s.pause_on_interaction!=='no'){['pointerdown','touchstart','wheel'].forEach(function(ev){track.addEventListener(ev,kill,{passive:true});});}}
updateNav();sync();
}
function run(){document.querySelectorAll('.elementor-widget-image-carousel').forEach(setup);}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();</script>`;

// Swiper(143KB) は image-carousel 専用で、上の scroll-snap 化で不要になるため配信時に剥がす。
function stripSwiperLib(html: string) {
  return html.replace(/<script\b[^>]*\bid="swiper-js"[^>]*><\/script>/g, "");
}

function injectCarouselFix(html: string) {
  if (html.includes("bt-carousel-fix") || !html.includes("elementor-widget-image-carousel")) {
    return html;
  }
  const stripped = stripSwiperLib(html);
  return stripped.includes("</body>")
    ? stripped.replace("</body>", `${CAROUSEL_FIX_SCRIPT}</body>`)
    : `${stripped}${CAROUSEL_FIX_SCRIPT}`;
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

// 共有ヘッダー(public/_shared)を使うページでは、可視のメニューは共有chromeの
// 自前 vanilla JS が担っており、WP/Elementor/jQuery の menu/HFE JS は旧ヘッダー（非表示）の
// 残骸で不要。残る WP-JS 依存の可視機能は「FAQ(eael)アコーディオン」と「スクロール連動
// (#footerCta 浮遊CTA / reading-progress / scroll-to-top / js-header色)」のみ。
// そこで WP/Elementor/jQuery JS を全削除し、それらの挙動だけ軽量 vanilla で再現する。
// → メインスレッドを占有していた大量JSが消え LCP/TBT が大幅改善（見た目・挙動は不変）。
const WP_JS_IDS =
  "jquery-core-js|jquery-migrate-js|jquery-ui-core-js|font-awesome-4-shim-js|astra-theme-js-js|eael-general-js|eael-\\d+-js|elementor-webpack-runtime-js|elementor-frontend-modules-js|elementor-frontend-js|hfe-frontend-js-js|swiper-js";
const WP_INLINE_IDS = "jquery-js-after|eael-inline-js";

const INTERACTIVE_VANILLA = `<script id="bt-interactive">(function(){
function ready(fn){if(document.readyState!=='loading')fn();else document.addEventListener('DOMContentLoaded',fn);}
ready(function(){
  // FAQ(eael)アコーディオン再現: クリックで他を閉じ対象をトグル
  var heads=[].slice.call(document.querySelectorAll('.eael-accordion-header'));
  function cont(h){var c=h.nextElementSibling;return (c&&c.classList&&c.classList.contains('eael-accordion-content'))?c:null;}
  heads.forEach(function(h){var c=cont(h);if(c)c.style.display='none';h.classList.remove('active','show-this');});
  heads.forEach(function(h){h.addEventListener('click',function(e){e.preventDefault();
    var willOpen=!h.classList.contains('active');
    heads.forEach(function(o){o.classList.remove('active','show-this');var oc=cont(o);if(oc)oc.style.display='none';});
    if(willOpen){h.classList.add('active','show-this');var c=cont(h);if(c)c.style.display='block';}
  });});
  // スクロール連動: #footerCta(浮遊CTA) / reading-progress / scroll-to-top / .js-header色
  var fc=document.getElementById('footerCta');
  var bar=document.querySelector('.hfe-reading-progress-bar');
  var stt=document.querySelector('.hfe-scroll-to-top-wrap');
  var jsHeader=document.querySelector('.js-header');
  var fv=document.querySelector('.fv');
  function onScroll(){
    var y=window.pageYOffset||document.documentElement.scrollTop||0;
    if(fc){if(y>=200){fc.classList.remove('DownMove');fc.classList.add('UpMove');}else if(fc.classList.contains('UpMove')){fc.classList.remove('UpMove');fc.classList.add('DownMove');}}
    if(bar){var d=document.documentElement.scrollHeight-window.innerHeight;bar.style.width=(d?(y/d*100):0)+'%';}
    if(stt){stt.style.display=y<100?'none':'';}
    if(jsHeader&&fv){if(fv.offsetHeight<y)jsHeader.classList.add('change-color');else jsHeader.classList.remove('change-color');}
  }
  if(stt)stt.addEventListener('click',function(e){e.preventDefault();window.scrollTo({top:0,behavior:'smooth'});});
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
});
})();</script>`;

const JS_STRIP_EXCLUDE = ["career-static", "geek-static"];

function stripWpJsAndReproduce(html: string) {
  let out = html
    .replace(new RegExp(`<script\\b[^>]*\\bid="(?:${WP_JS_IDS})"[^>]*></script>`, "g"), "")
    .replace(new RegExp(`<script\\b[^>]*\\bid="(?:${WP_INLINE_IDS})"[^>]*>[\\s\\S]*?</script>`, "g"), "");
  out = out.includes("</body>")
    ? out.replace("</body>", `${INTERACTIVE_VANILLA}</body>`)
    : `${out}${INTERACTIVE_VANILLA}`;
  return out;
}

// 共有ヘッダー(可視メニューが vanilla)かつ WP jQuery を積むページのみ全削除可。
// 共有ヘッダー未使用(counseling 等)や別デザイン(career/geek)は従来の defer 化に留める。
function optimizeJs(html: string, relativePath: string) {
  const usesSharedChrome = html.includes("bt-site-header");
  const hasWpJq = /jquery\.min\.js/.test(html);
  const excluded = JS_STRIP_EXCLUDE.some((p) => relativePath.startsWith(p));
  if (usesSharedChrome && hasWpJq && !excluded) {
    return stripWpJsAndReproduce(html);
  }
  return optimizeBlockingJs(html);
}

// レンダーブロッキングな JS を非ブロック化（共有ヘッダー未使用ページ向けフォールバック）。
// jQuery を含む全同期外部scriptを defer 化（文書順実行で依存順序を保持）、jQuery を
// 同期利用するインラインは DOMContentLoaded 包みで defer 後に実行。
function optimizeBlockingJs(html: string) {
  let out = html;
  // Pinterest タグは async（トラッキングなので非ブロックで十分）
  out = out.replace(/<script(\s+src="[^"]*\/token_create\.js")\s*>/g, "<script async$1>");
  // async/defer の付いていない外部script を全て defer（文書順実行で依存順序を保持）
  out = out.replace(
    /<script\b(?![^>]*\b(?:async|defer)\b)([^>]*\bsrc="[^"]*"[^>]*)>/g,
    "<script defer$1>",
  );
  // jQuery を同期利用するインラインJS を DOMContentLoaded 包みにして defer 後に実行
  out = out.replace(
    /(<script\b(?![^>]*\bsrc=)[^>]*>)([\s\S]*?)(<\/script>)/g,
    (full, open, bodyJs, close) => {
      if (open.includes("bt-carousel-fix")) return full; // 自前注入はそのまま
      if (!/jQuery|[^A-Za-z0-9_.]\$\s*\(/.test(bodyJs)) return full;
      if (bodyJs.includes("DOMContentLoaded")) return full;
      return `${open}document.addEventListener("DOMContentLoaded",function(){${bodyJs}\n});${close}`;
    },
  );
  return out;
}

// LCP 改善: FVヒーローの背景画像(.course-fv の CSS background-image)を高優先 preload。
// CSS background はブラウザの preload スキャナで先読みされず、CSSOM構築→レイアウト後に
// やっと取得開始するため低速回線でLCPが大幅に遅れる。明示 preload で取得を最優先化する。
// 見た目は不変（同じ画像を早く取りに行くだけ）。
function injectLcpPreload(html: string) {
  if (html.includes('rel="preload" as="image"')) {
    return html;
  }
  const idMatch =
    html.match(/class="[^"]*\belementor-element-(\w+)\b[^"]*\bcourse-fv\b[^"]*"/) ||
    html.match(/class="[^"]*\bcourse-fv\b[^"]*\belementor-element-(\w+)\b[^"]*"/);
  if (!idMatch) {
    return html;
  }
  const bgRe = new RegExp(
    "elementor-element-" + idMatch[1] + "[^{]*\\{[^}]*?background-image:\\s*url\\(\\s*\"?([^\")]+\\.(?:webp|jpe?g|png))\"?\\s*\\)",
    "i",
  );
  const bg = html.match(bgRe);
  if (!bg) {
    return html;
  }
  const url = bg[1].replace(/&quot;/g, "").trim();
  const link = `<link rel="preload" as="image" href="${url}" fetchpriority="high">`;
  const headTag = html.match(/<head[^>]*>/i);
  if (!headTag) {
    return `${link}${html}`;
  }
  const idx = html.indexOf(headTag[0]) + headTag[0].length;
  return html.slice(0, idx) + link + html.slice(idx);
}

// ローカルに保存された旧GTMコンテナ(js / js(1) / js(2) / gtm.js, 計~1.7MB)を削除。
// これらは WP エクスポート時に焼き付いた静止スナップショットで、同じコンテナ
// (GTM-K6HH9C2F) をライブのGTM(googletagmanager.com/gtm.js)が別途取得するため完全に
// 重複（二重計測の原因にもなっていた）。低速回線で帯域を占有しヒーロー画像(LCP)を
// 遅らせていた主因。ライブGTMが在るページでのみ削除し計測は維持する。
function stripStaleGtm(html: string) {
  if (!html.includes("googletagmanager.com/gtm.js")) {
    return html;
  }
  return html.replace(
    /<script\b[^>]*\bsrc="[^"]*\/(?:js|js\(1\)|js\(2\)|gtm\.js)"[^>]*><\/script>/g,
    "",
  );
}

// Google Fonts(@import) のレンダーブロック解消。
// CSS の @import は描画前に必ず取得され render-blocking（低速回線で~780ms）。
// preconnect ＋ 非同期 <link>(media=print onload) に置換しクリティカルパスから外す。
// 既に display=swap 付きなのでテキストはフォールバックで即表示→Work Sansへ差し替え。
function optimizeFonts(html: string) {
  return html.replace(
    /<style[^>]*>@import url\(['"]?(https:\/\/fonts\.googleapis\.com\/css2[^'")]+)['"]?\);?<\/style>/g,
    (_m, url) =>
      `<link rel="preconnect" href="https://fonts.googleapis.com">` +
      `<link rel="stylesheet" href="${url}" media="print" onload="this.media='all';this.onload=null">` +
      `<noscript><link rel="stylesheet" href="${url}"></noscript>`,
  );
}

// Pinterest タグ(token_create.js + core.js + main.<hash>.js, 計~120KB, pintrk/epik)を削除。
// ユーザー承認済み。インラインで pintrk() を呼ぶ箇所は無いため副作用なし。
function stripPinterest(html: string) {
  return html.replace(
    /<script\b[^>]*\bsrc="[^"]*\/(?:token_create\.js|core\.js|main\.[0-9a-f]+\.js)"[^>]*><\/script>/g,
    "",
  );
}

// ローカルに焼き付いた旧Clarity(clarity.js 27KB + mz1ijhnnae)を削除。
// 実際のセッション録画は GTM の Microsoft Clarity タグ(www.clarity.ms/tag/mz1ijhnnae)が
// 担っており、ローカルの2本は同一プロジェクトの重複コピー（initiator解析で確認）。
// 二重ロード/二重計測を解消し初期負荷を軽くする（録画はGTM側で維持）。
// ※GTM経由のClarityを「初回操作まで遅延」するには GTM側でタグのトリガーをスクロール等に
//   変更する必要がある（コードからは制御不可）。
function delayClarity(html: string) {
  return html.replace(
    /<script\b[^>]*\bsrc="[^"]*\/(?:clarity\.js|mz1ijhnnae)"[^>]*><\/script>/g,
    "",
  );
}

// support 限定: ローカルの render-blocking CSS を <style> インライン化し、
// クリティカルパス上の CSS 往復（21本 / 低速4Gで~4.9s）を完全に消す（Lighthouse 推奨の「インライン化」）。
// インライン時、相対 url() が文書 base 基準になり壊れるため、各CSSの配置dir基準で絶対パス化する。
// 使用中CSSをそのままインライン＝全スタイルが初回描画時に揃うので CLS は発生しない。
// 外部CSS(Google Fonts 等)や既に非同期化済み(media=print/onload)の link は対象外。
const cssFileCache = new Map<string, string>();

function absolutizeCssUrls(css: string, baseDir: string): string {
  return css.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/g, (m, quote: string, raw: string) => {
    const u = raw.trim();
    if (/^(?:https?:|data:|\/|#)/.test(u)) {
      return m;
    }
    return `url(${quote}${baseDir}${u}${quote})`;
  });
}

async function readInlineCss(href: string): Promise<string | null> {
  const clean = href.split(/[?#]/)[0];
  if (!clean.startsWith("/support-static/") && !clean.startsWith("/_shared/")) {
    return null;
  }
  const cached = cssFileCache.get(clean);
  if (cached !== undefined) {
    return cached;
  }
  try {
    const css = await readPublic(clean.slice(1));
    const baseDir = clean.slice(0, clean.lastIndexOf("/") + 1);
    // </style> がCSS内に現れた場合のみ無害化（通常は発生しない）
    const out = absolutizeCssUrls(css, baseDir).replace(/<\/style/gi, "<\\/style");
    if (!isDev) {
      cssFileCache.set(clean, out);
    }
    return out;
  } catch {
    return null;
  }
}

async function inlineBlockingCss(html: string, relativePath: string): Promise<string> {
  if (!relativePath.startsWith("support-static")) {
    return html;
  }
  const tags = Array.from(new Set(html.match(/<link\b[^>]*\brel="stylesheet"[^>]*>/g) ?? []));
  for (const tag of tags) {
    if (/\bonload=/.test(tag) || /\bmedia="print"/.test(tag)) {
      continue; // 非同期化済み(フォント等)はそのまま
    }
    const href = tag.match(/\bhref="([^"]*)"/)?.[1];
    if (!href) {
      continue;
    }
    const css = await readInlineCss(href);
    if (css == null) {
      continue;
    }
    html = html.split(tag).join(`<style>${css}</style>`);
  }
  return html;
}

export async function staticHtmlResponse(relativePath: string) {
  const [html, chrome] = await Promise.all([readStaticHtml(relativePath), loadChrome()]);
  const out = await inlineBlockingCss(
    optimizeFonts(
      injectLcpPreload(
        delayClarity(
        stripPinterest(
          stripStaleGtm(
            optimizeJs(
              injectCarouselFix(
                injectHeadingWeight(injectAnalytics(injectChrome(html, chrome), relativePath)),
              ),
              relativePath,
            ),
          ),
        ),
        ),
      ),
    ),
    relativePath,
  );
  return new Response(out, { headers });
}
