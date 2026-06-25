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

// レンダーブロッキングな JS を非ブロック化。
// 方針: jQuery を含む全ての同期外部script を defer 化する。defer は「パース後・
// 文書順で実行」なので、jQuery→Elementor/eael ハンドラ→… の依存順序がそのまま保たれ、
// メニュー/FAQ 等の挙動は不変のままレンダーブロックだけ解消できる。
// ただし jQuery を同期利用するインラインJS（id=jquery-js-after / eael-inline-js 等）は
// パース時に走ると defer された jQuery 未定義で壊れるため、DOMContentLoaded 包みにして
// 全 defer script の後で実行させる。token_create(Pinterest) は async のまま。
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

export async function staticHtmlResponse(relativePath: string) {
  const [html, chrome] = await Promise.all([readStaticHtml(relativePath), loadChrome()]);
  const out = optimizeBlockingJs(
    injectCarouselFix(
      injectHeadingWeight(injectAnalytics(injectChrome(html, chrome), relativePath)),
    ),
  );
  return new Response(out, { headers });
}
