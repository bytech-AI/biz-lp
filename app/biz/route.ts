import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getNews, newsPath } from "@/lib/microcms";
import { COURSES } from "./_course/courses";
import { getAllSeminars } from "./seminars/data";
export const runtime = "nodejs";
export const revalidate = 300;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// publishedAt(ISO) → "YYYY.MM.DD"。保存値の日付部分をそのまま使い、TZずれを避ける。
function formatNewsDate(iso?: string) {
  if (!iso) return "";
  return iso.slice(0, 10).replace(/-/g, ".");
}

const SITE_TITLE = "【公式】バイテックBiz｜企業向け生成AI研修";
const SITE_DESCRIPTION =
  "業務の自動化を当たり前にする、個別コンサル型の法人向けAI研修｜バイテックBiz";

// LLMO/SEO: トップFAQ(index_faq)から FAQPage JSON-LD を生成。
// 表示中のQ&Aをそのままソースにするので、schemaと表示が常に一致する。
function buildTopFaqSchema(html: string) {
  const re =
    /index_faq__question">([\s\S]*?)<span[\s\S]*?index_faq__answer"><p>([\s\S]*?)<\/p>/g;
  const strip = (s: string) =>
    s
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
      .trim();
  const qa: { q: string; a: string }[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const q = strip(m[1]);
    const a = strip(m[2]);
    if (q && a) qa.push({ q, a });
  }
  if (qa.length === 0) return "";
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: { "@type": "Answer", text: x.a },
    })),
  };
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

// LLMO/SEO: 提供サービスの Service スキーマ（既存 Organization を provider として参照）。
const SERVICE_SCHEMA = `<script type="application/ld+json">${JSON.stringify(
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "バイテックBiz",
    serviceType: "法人向け生成AI研修",
    provider: { "@id": "https://biz.bytech.jp/#organization" },
    areaServed: "JP",
    url: "https://biz.bytech.jp/",
    description:
      "業務の自動化を当たり前にする、個別コンサル型の法人向けAI研修。専任のAIコンサルタントが伴走し、ツールの使い方で終わらず数字にインパクトを出す業務改善までを支援します。",
  },
)}</script>`;

// トップの静的HTMLとCSSのデプロイタイミングがずれても、メガメニューが崩れないための必須スタイル。
const HEADER_MEGA_MENU_STYLE = `<style id="biz-header-mega-menu-style">
.top-nav-caret{display:inline-block;width:8px;height:6px;margin-left:5px;vertical-align:middle;background:center/contain no-repeat url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23555555'/%3E%3C/svg%3E")}
.top-nav-item{position:relative;align-self:stretch;display:flex;align-items:center}.top-nav-item>.top-nav-link{display:flex;align-items:center;height:100%;box-sizing:border-box}.top-nav-item>.top-nav-link .top-nav-caret{transition:transform .2s ease}.top-nav-item:hover>.top-nav-link,.top-nav-item:focus-within>.top-nav-link{background:rgba(0,0,0,.04)}.top-nav-item:hover>.top-nav-link .top-nav-caret,.top-nav-item:focus-within>.top-nav-link .top-nav-caret{transform:rotate(180deg)}
.top-mega-menu{position:absolute;top:calc(100% + 13px);right:-150px;width:min(560px,calc(100vw - 48px));padding:22px;box-sizing:border-box;background:rgba(255,255,255,.98);border:1px solid rgba(26,111,181,.13);border-radius:4px;box-shadow:0 20px 55px rgba(22,32,46,.18);opacity:0;visibility:hidden;pointer-events:none;transform:translateY(-7px);transition:opacity .2s ease,transform .2s ease,visibility .2s ease}.top-mega-menu:before{content:"";position:absolute;right:0;bottom:100%;width:100%;height:14px}.top-nav-item:hover .top-mega-menu,.top-nav-item:focus-within .top-mega-menu{opacity:1;visibility:visible;pointer-events:auto;transform:translateY(0)}
.top-header__nav .top-mega-menu--left{left:-120px;right:auto;width:min(1060px,calc(100vw - 48px))!important;max-width:none}.top-mega-menu--left .top-mega-menu__grid{grid-template-columns:repeat(4,1fr);grid-auto-rows:1fr}.top-header__nav .top-mega-menu__card--course{display:flex;flex-direction:column;align-items:flex-start;gap:8px;min-height:132px;box-sizing:border-box}.top-mega-menu__logo{display:flex;align-items:center;justify-content:center;flex:0 0 auto;width:46px;height:30px}.top-mega-menu__logo img{display:block;width:auto;height:auto;max-width:100%;max-height:26px;object-fit:contain}.top-mega-menu__card-body{display:flex;min-width:0;flex-direction:column}
.top-mega-menu__eyebrow{display:block;margin-bottom:5px;color:#1a6fb5;font-family:"Futura","Futura Medium",var(--font-jost),sans-serif;font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase}.top-mega-menu__heading{margin:0;color:#16202e;font-size:18px;font-weight:700;line-height:1.45}.top-mega-menu__desc{margin:5px 0 16px;color:#687386;font-size:12px;line-height:1.7}.top-mega-menu__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.top-header__nav .top-mega-menu__card{display:block;min-width:0;padding:10px;color:#26364a;background:#f5f8fc;border:1px solid #e7edf5;border-radius:2px;white-space:normal;transition:border-color .2s ease,background .2s ease,transform .2s ease}.top-header__nav .top-mega-menu__card:hover{background:#fff;border-color:#9ec7e8;transform:translateY(-2px)}
.top-mega-menu__thumb{display:block;aspect-ratio:16/9;overflow:hidden;margin-bottom:9px;background:#eaf1f8;border-radius:0}.top-mega-menu__thumb img{display:block;width:100%;height:100%;object-fit:contain}.top-mega-menu__card-title{display:block;margin-bottom:4px;color:#173e6c;font-size:12px;font-weight:700;line-height:1.5}.top-mega-menu__card-desc{display:block;color:#687386;font-size:10px;font-weight:500;line-height:1.55}.top-mega-menu__all{display:flex!important;align-items:center;justify-content:flex-end;gap:10px;margin-top:16px;padding:0!important;color:#126eb4!important;font-size:12px!important;font-weight:700!important}.top-mega-menu__all:after{content:"";width:7px;height:7px;border-top:1.5px solid currentColor;border-right:1.5px solid currentColor;transform:rotate(45deg)}
@media(max-width:1080px){.top-nav-item{display:block;align-self:auto}.top-nav-item>.top-nav-link{height:auto}.top-nav-item>.top-nav-link .top-nav-caret{display:none}.top-mega-menu{display:none}}
</style>`;

const COURSE_MEGA_MENU = `<div class="top-nav-item"><a href="/chat-gpt-training" class="top-nav-link">研修プログラム<span class="top-nav-caret" aria-hidden="true"></span></a><div class="top-mega-menu top-mega-menu--left" aria-label="研修プログラム一覧"><span class="top-mega-menu__eyebrow">Courses</span><p class="top-mega-menu__heading">AI研修プログラム一覧</p><p class="top-mega-menu__desc">目的・使用ツールから選べる法人向けAI研修コース。</p><div class="top-mega-menu__grid">${COURSES.map((course) => `<a class="top-mega-menu__card top-mega-menu__card--course" href="/${escapeHtml(course.slug)}"><span class="top-mega-menu__logo"><img src="${escapeHtml(course.logo)}" alt="" loading="lazy"></span><span class="top-mega-menu__card-body"><span class="top-mega-menu__card-title">${escapeHtml(course.name)}</span><span class="top-mega-menu__card-desc">${escapeHtml(course.desc)}</span></span></a>`).join("")}</div></div></div>`;

const FAQ_CATEGORY_STYLE = `<style id="biz-faq-category-style">
.index_faq__groups{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;align-items:start}
.index_faq__group{padding:24px;background:#fff;border:1px solid #dce6f1;box-shadow:0 10px 28px rgba(25,53,86,.06)}
.index_faq__group-head{display:flex;align-items:center;gap:12px;margin:0 0 16px;padding-bottom:14px;border-bottom:1px solid #e5ebf2}
.index_faq__group-num{display:flex;align-items:center;justify-content:center;flex:0 0 32px;width:32px;height:32px;background:#1a6fb5;color:#fff;font-family:var(--font-montserrat),sans-serif;font-size:12px;font-weight:700;letter-spacing:.08em}
.index_faq__group-title{margin:0;color:#17243a;font-size:1.7rem;font-weight:800;letter-spacing:.02em}
.index_faq__group .index_faq__item{margin:0;border-bottom:1px solid #e7edf4}
.index_faq__group .index_faq__item:last-child{border-bottom:0}
.index_faq__group .index_faq__question{padding:17px 34px 17px 38px;background:transparent;font-size:1.35rem;letter-spacing:.03em}
.index_faq__group .index_faq__question:hover,.index_faq__group .index_faq__item.active .index_faq__question{background:#f3f7fb}
.index_faq__group .index_faq__question::before{left:8px;width:19px;height:19px}
.index_faq__group .index_faq__answer p{padding:5px 12px 18px 38px}
@media(max-width:767px){.index_faq__groups{grid-template-columns:1fr;gap:16px}.index_faq__group{padding:17px 14px}.index_faq__group-head{margin-bottom:8px}.index_faq__group-title{font-size:1.55rem}.index_faq__group .index_faq__question{padding-right:24px}}
</style>`;

const FAQ_CATEGORY_SCRIPT = `<script id="biz-faq-category-script">(function(){
var inner=document.querySelector('.index_faq__inner');
if(!inner||inner.querySelector('.index_faq__groups'))return;
var items=[].slice.call(inner.querySelectorAll(':scope > .index_faq__item'));
if(items.length<7)return;
var groups=[
  {title:'研修内容について',items:items.slice(0,3)},
  {title:'サポートについて',items:items.slice(3,5)},
  {title:'導入・ご契約について',items:items.slice(5,6)},
  {title:'研修費用・お支払いについて',items:items.slice(6,7)}
];
var wrap=document.createElement('div');wrap.className='index_faq__groups';
groups.forEach(function(group,index){
  var section=document.createElement('section');section.className='index_faq__group';
  var head=document.createElement('div');head.className='index_faq__group-head';
  var num=document.createElement('span');num.className='index_faq__group-num';num.textContent=String(index+1).padStart(2,'0');
  var title=document.createElement('h3');title.className='index_faq__group-title';title.textContent=group.title;
  head.appendChild(num);head.appendChild(title);section.appendChild(head);
  group.items.forEach(function(item){section.appendChild(item);});wrap.appendChild(section);
});
inner.appendChild(wrap);
})();</script>`;

// FAQとフッターの間に差し込むニュースパート（左:見出し＋全件導線／右:白カード一覧）。背景白。
const NEWS_SECTION_STYLE = `<style id="biz-news-section-style">
.index-news{background:#fff;padding:clamp(50px,6vw,84px) 20px}
.index-news .index-news__inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:minmax(260px,340px) 1fr;gap:clamp(28px,4vw,64px);align-items:start}
.index-news__eyebrow{margin:0 0 6px;color:#2e599b;font-family:"Futura","Futura Medium",sans-serif;font-size:clamp(1.2rem,1.5vw,1.4rem);font-weight:500;letter-spacing:.12em}
.index-news__heading{margin:0 0 22px;color:#16202e;font-size:clamp(2rem,2.6vw,2.6rem);font-weight:800;letter-spacing:.02em}
.index-news__all{display:inline-flex;align-items:center;gap:12px;color:#16202e;font-size:14px;font-weight:700;text-decoration:none}
.index-news__all-ico{position:relative;flex:0 0 auto;width:28px;height:28px;border-radius:50%;background:#16202e}
.index-news__all-ico:after{content:"";position:absolute;top:50%;left:45%;width:6px;height:6px;border-top:2px solid #fff;border-right:2px solid #fff;transform:translate(-50%,-50%) rotate(45deg)}
.index-news__all:hover{opacity:.8}
.index-news__list{display:flex;flex-direction:column;gap:14px}
.index-news__item{display:flex;align-items:center;gap:28px;padding:20px 30px;background:#fff;border:1px solid #e7e7e7;border-radius:6px;text-decoration:none;transition:transform .2s ease,border-color .2s ease}
.index-news__item:hover{transform:translateY(-2px);border-color:#c9d2dd}
.index-news__date{flex:0 0 auto;color:#8a93a3;font-size:14px;font-weight:600;font-variant-numeric:tabular-nums;letter-spacing:.02em}
.index-news__title{color:#16202e;font-size:15px;font-weight:700;line-height:1.6;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}
.index-news__all--sp{display:none}
@media(max-width:860px){.index-news .index-news__inner{grid-template-columns:1fr;gap:22px}.index-news__item{flex-direction:column;align-items:flex-start;gap:6px;padding:16px 18px}.index-news__title{font-size:14px}.index-news__all--pc{display:none}.index-news__all--sp{display:inline-flex;justify-self:center;margin-top:8px}}
</style>`;

// セミナーアーカイブ紹介セクション（トップ「お知らせ」の上に差し込む）。
// 開催予定(UPCOMING)は運用していないため、最新アーカイブを左の大カード・残りを右のリストに。
const SEMINAR_SECTION_STYLE = `<style id="biz-seminar-section-style">
.index-sem{margin:0;background:linear-gradient(160deg,#204aa8 0%,#12307a 100%);color:#fff;padding:clamp(50px,6vw,84px) 20px}
.index-sem__inner{max-width:1200px;margin:0 auto}
.index-sem__head{margin:0 0 34px}
.index-sem__eyebrow{margin:0 0 8px;font-family:"Futura","Futura Medium",sans-serif;font-size:clamp(1.2rem,1.5vw,1.4rem);font-weight:500;letter-spacing:.16em;opacity:.92}
.index-sem__heading{margin:0;font-size:clamp(2.2rem,2.8vw,3rem);font-weight:900;letter-spacing:.03em}
.index-sem__grid{display:grid;grid-template-columns:minmax(0,.92fr) minmax(0,1.08fr);gap:clamp(28px,4vw,48px);align-items:stretch}
.index-sem__col{display:flex;flex-direction:column;min-width:0}
.index-sem__label{margin:0 0 16px;font-family:"Futura","Futura Medium",sans-serif;font-size:13px;font-weight:500;letter-spacing:.18em;opacity:.92}
.index-sem__feature{display:flex;flex-direction:column;flex:1 1 auto;text-decoration:none;color:inherit}
.index-sem__feature-thumb{position:relative;display:block;flex:1 1 auto;min-height:190px;overflow:hidden;background:#dce6f4}
.index-sem__feature-thumb img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .35s ease}
.index-sem__feature:hover .index-sem__feature-thumb img{transform:scale(1.04)}
.index-sem__badge{position:absolute;left:14px;top:14px;background:rgba(0,0,0,.55);color:#fff;font-size:12px;font-weight:700;padding:6px 12px;border-radius:999px}
.index-sem__feature-body{display:block;flex:0 0 auto;margin-top:16px}
.index-sem__feature-title{display:block;margin-top:8px;font-size:clamp(1.7rem,1.6vw,2rem);font-weight:800;line-height:1.6}
.index-sem__feature:hover .index-sem__feature-title{text-decoration:underline;text-underline-offset:3px}
.index-sem__list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:14px}
.index-sem__row{display:grid;grid-template-columns:150px minmax(0,1fr);gap:18px;align-items:center;padding:14px;border-radius:10px;background:rgba(255,255,255,.10);text-decoration:none;color:inherit;transition:background .2s ease}
.index-sem__row:hover{background:rgba(255,255,255,.18)}
.index-sem__row-thumb{aspect-ratio:16/9;overflow:hidden;background:#dce6f4}
.index-sem__row-thumb img{width:100%;height:100%;object-fit:cover;display:block}
.index-sem__row-title{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;margin-top:6px;font-size:15px;font-weight:800;line-height:1.6}
.index-sem__meta{display:flex;align-items:center;gap:12px;font-size:12px}
.index-sem__date{font-variant-numeric:tabular-nums;letter-spacing:.02em;opacity:.9}
.index-sem__tag{font-weight:700;opacity:.95}
.index-sem__ph{display:flex;align-items:center;justify-content:center;width:100%;height:100%;font:800 13px/1.3 "Futura","Futura Medium",sans-serif;letter-spacing:.06em;color:#2b58a6;background:#e6edf6;text-align:center;padding:8px}
.index-sem__all{display:inline-flex;align-items:center;gap:14px;margin-top:20px;color:#fff;font-size:15px;font-weight:700;text-decoration:none}
.index-sem__all:hover{opacity:.85}
.index-sem__all-ico{position:relative;flex:0 0 auto;width:44px;height:44px;border-radius:50%;background:#16202e}
.index-sem__all-ico:after{content:"";position:absolute;top:50%;left:44%;width:8px;height:8px;border-top:2px solid #fff;border-right:2px solid #fff;transform:translate(-50%,-50%) rotate(45deg)}
.index-sem__all--sp{display:none}
@media(max-width:860px){.index-sem__grid{grid-template-columns:1fr;gap:32px}.index-sem__feature{flex:none}.index-sem__feature-thumb{flex:none;aspect-ratio:16/10;min-height:0}.index-sem__all{width:100%;justify-content:center}.index-sem__all--pc{display:none}.index-sem__all--sp{display:inline-flex}}
@media(max-width:520px){.index-sem__row{grid-template-columns:112px minmax(0,1fr);gap:12px;padding:10px}.index-sem__row-title{font-size:14px}}
</style>`;

// セミナーアーカイブのHTMLを組み立てる。開催日降順で最新を大カード・残りをリスト表示。
function buildSeminarSection() {
  const seminars = [...getAllSeminars()].sort((a, b) =>
    b.date.localeCompare(a.date),
  );
  const featured = seminars[0];
  if (!featured) return null;
  const rest = seminars.slice(1, 4);
  const fmt = (d: string) => d.replace(/\./g, "/");
  const thumb = (src: string | undefined, label: string, alt: string) =>
    src
      ? `<img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy">`
      : `<span class="index-sem__ph">${escapeHtml(label)}</span>`;
  const rows = rest
    .map(
      (s) =>
        `<li><a class="index-sem__row" href="/seminars/${escapeHtml(s.slug)}"><span class="index-sem__row-thumb">${thumb(s.thumb, s.thumbLabel, s.title)}</span><span class="index-sem__row-body"><span class="index-sem__meta"><span class="index-sem__date">${escapeHtml(fmt(s.date))}</span><span class="index-sem__tag">${escapeHtml(s.tag)}</span></span><span class="index-sem__row-title">${escapeHtml(s.title)}</span></span></a></li>`,
    )
    .join("");
  return `<section class="index-sem" aria-label="セミナーアーカイブ"><div class="index-sem__inner"><div class="index-sem__head"><p class="index-sem__eyebrow">SEMINAR_</p><h2 class="index-sem__heading">セミナーアーカイブ</h2><a class="index-sem__all index-sem__all--pc" href="/archive"><span class="index-sem__all-ico" aria-hidden="true"></span>アーカイブ一覧を見る</a></div><div class="index-sem__grid"><div class="index-sem__col"><p class="index-sem__label">LATEST</p><a class="index-sem__feature" href="/seminars/${escapeHtml(featured.slug)}"><span class="index-sem__feature-thumb">${thumb(featured.thumb, featured.thumbLabel, featured.title)}<span class="index-sem__badge">アーカイブ配信中</span></span><span class="index-sem__feature-body"><span class="index-sem__meta"><span class="index-sem__date">${escapeHtml(fmt(featured.date))}</span><span class="index-sem__tag">${escapeHtml(featured.tag)}</span></span><span class="index-sem__feature-title">${escapeHtml(featured.title)}</span></span></a></div><div class="index-sem__col"><p class="index-sem__label">ARCHIVE</p><ul class="index-sem__list">${rows}</ul></div></div><a class="index-sem__all index-sem__all--sp" href="/archive"><span class="index-sem__all-ico" aria-hidden="true"></span>アーカイブ一覧を見る</a></div></section>`;
}

// 最新ニュース(microCMS)からニュースパートのHTMLを組み立てる。0件なら null（差し込まない）。
async function buildNewsSection() {
  const news = (await getNews()).slice(0, 3);
  if (news.length === 0) return null;
  const items = news
    .map(
      (n) =>
        `<a class="index-news__item" href="${escapeHtml(newsPath(n))}"><span class="index-news__date">${escapeHtml(formatNewsDate(n.publishedAt))}</span><span class="index-news__title">${escapeHtml(n.title)}</span></a>`,
    )
    .join("");
  return `<section class="index-news"><div class="index-news__inner u-inner"><div class="index-news__head"><p class="index-news__eyebrow">NEWS_</p><h2 class="index-news__heading">お知らせ</h2><a class="index-news__all index-news__all--pc" href="/news"><span class="index-news__all-ico" aria-hidden="true"></span>全てのお知らせ</a></div><div class="index-news__list">${items}</div><a class="index-news__all index-news__all--sp" href="/news"><span class="index-news__all-ico" aria-hidden="true"></span>全てのお知らせ</a></div></section>`;
}

// biz トップ(biz.bytech.jp/)は静的HTML化して配信（React/ハイドレーション排除）。
// 実体は public/biz-top-static/index.html（scripts/build-static-biz.mjs で生成・コミット済み）。
export async function GET() {
  let html = await readFile(
    join(process.cwd(), "public", "biz-top-static", "index.html"),
    "utf8",
  );
  // 日本語ページなので言語をjaに（静的書き出しの既定enを修正）。
  html = html.replace('<html lang="en"', '<html lang="ja"');
  html = html.replaceAll(
    "/biz/assets/css/style.css",
    "/biz/assets/css/style.css?v=20260717-3",
  );
  html = html.replace(
    '<nav class="top-header__nav"><a href="#course" class="top-nav-link">研修一覧</a>',
    `<nav class="top-header__nav"><a href="#course" class="top-nav-link">研修一覧</a>${COURSE_MEGA_MENU}`,
  );
  html = html.replaceAll(
    "AI人材育成に役立つ無料資料",
    "お役立ち資料",
  );
  html = html.replaceAll(
    "Gemini/notebookLM研修",
    "Gemini研修",
  );
  html = html.replaceAll(
    "ノーコード開発研修",
    "Dify研修",
  );
  html = html.replaceAll(
    'href="/no-code-training"',
    'href="/dify-training"',
  );
  html = html.replaceAll(
    "/biz/assets/img/index/plan/logo/no-code.svg",
    "/biz/assets/img/index/plan/logo/dify.svg",
  );
  html = html.replaceAll(
    "/biz/assets/img/index/plan/graphic/nocode.webp",
    "/biz/assets/img/index/plan/graphic/dify.webp",
  );
  html = html.replaceAll(
    "/biz/assets/img/index/plan/graphic/chatgpt-cg.webp",
    "/biz/assets/img/index/plan/graphic/chatgpt.webp",
  );
  html = html.replace(
    "<title>【公式】バイテックBiz</title>",
    `<title>${SITE_TITLE}</title>`,
  );
  html = html.replace(
    '<meta name="description" content="AIを最高の部下に変えるハンズオン型法人向けAI研修"/>',
    `<meta name="description" content="${SITE_DESCRIPTION}"/>`,
  );
  html = html.replace(
    '<meta property="og:title" content="【公式】バイテックBiz"/>',
    `<meta property="og:title" content="${SITE_TITLE}"/>`,
  );
  html = html.replace(
    '<meta property="og:description" content="AIを最高の部下に変えるハンズオン型法人向けAI研修"/>',
    `<meta property="og:description" content="${SITE_DESCRIPTION}"/>`,
  );
  html = html.replace(
    '<meta name="twitter:title" content="【公式】バイテックBiz"/>',
    `<meta name="twitter:title" content="${SITE_TITLE}"/>`,
  );
  html = html.replace(
    '<meta name="twitter:description" content="AIを最高の部下に変えるハンズオン型法人向けAI研修"/>',
    `<meta name="twitter:description" content="${SITE_DESCRIPTION}"/>`,
  );
  html = html.replace(
    'href="./download" class="hero__cta-sp__btn hero__cta-sp__btn--fill"',
    'href="/doc-a" class="hero__cta-sp__btn hero__cta-sp__btn--fill"',
  );
  html = html.replace(
    '<span class="mark_b">企業向け生成AI研修</span>',
    '<span class="mark_b">個別コンサル型AI研修</span>',
  );
  html = html.replace(
    "</head>",
    `${HEADER_MEGA_MENU_STYLE}${FAQ_CATEGORY_STYLE}${SEMINAR_SECTION_STYLE}${NEWS_SECTION_STYLE}${SERVICE_SCHEMA}${buildTopFaqSchema(html)}</head>`,
  );
  html = html.replace("</body>", `${FAQ_CATEGORY_SCRIPT}</body>`);
  // 「お知らせ」の上にセミナーアーカイブを差し込む（順序: SEMINAR → NEWS → footer）。
  const seminarSection = buildSeminarSection();
  const newsSection = await buildNewsSection();
  const beforeFooter = `${seminarSection ?? ""}${newsSection ?? ""}`;
  if (beforeFooter) {
    html = html.replace(
      '<footer class="footer" id="pageFooter">',
      `${beforeFooter}<footer class="footer" id="pageFooter">`,
    );
  }
  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=0, must-revalidate",
    },
  });
}
