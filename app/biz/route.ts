import { readFile } from "node:fs/promises";
import { join } from "node:path";
export const runtime = "nodejs";
export const revalidate = 300;

const SITE_TITLE = "【公式】バイテックBiz｜企業向け生成AI研修";
const SITE_DESCRIPTION =
  "業務の自動化を当たり前にする、個別コンサル型の法人向けAI研修｜バイテックBiz";

// トップの静的HTMLとCSSのデプロイタイミングがずれても、メガメニューが崩れないための必須スタイル。
const HEADER_MEGA_MENU_STYLE = `<style id="biz-header-mega-menu-style">
.top-nav-caret{display:inline-block;width:8px;height:6px;margin-left:5px;vertical-align:middle;background:center/contain no-repeat url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23555555'/%3E%3C/svg%3E")}
.top-nav-item{position:relative;align-self:stretch;display:flex;align-items:center}.top-nav-item>.top-nav-link{display:flex;align-items:center;height:100%;box-sizing:border-box}.top-nav-item>.top-nav-link .top-nav-caret{transition:transform .2s ease}.top-nav-item:hover>.top-nav-link,.top-nav-item:focus-within>.top-nav-link{background:rgba(0,0,0,.04)}.top-nav-item:hover>.top-nav-link .top-nav-caret,.top-nav-item:focus-within>.top-nav-link .top-nav-caret{transform:rotate(180deg)}
.top-mega-menu{position:absolute;top:calc(100% + 13px);right:-150px;width:min(560px,calc(100vw - 48px));padding:22px;box-sizing:border-box;background:rgba(255,255,255,.98);border:1px solid rgba(26,111,181,.13);border-radius:4px;box-shadow:0 20px 55px rgba(22,32,46,.18);opacity:0;visibility:hidden;pointer-events:none;transform:translateY(-7px);transition:opacity .2s ease,transform .2s ease,visibility .2s ease}.top-mega-menu:before{content:"";position:absolute;right:0;bottom:100%;width:100%;height:14px}.top-nav-item:hover .top-mega-menu,.top-nav-item:focus-within .top-mega-menu{opacity:1;visibility:visible;pointer-events:auto;transform:translateY(0)}
.top-mega-menu__eyebrow{display:block;margin-bottom:5px;color:#1a6fb5;font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase}.top-mega-menu__heading{margin:0;color:#16202e;font-size:18px;font-weight:700;line-height:1.45}.top-mega-menu__desc{margin:5px 0 16px;color:#687386;font-size:12px;line-height:1.7}.top-mega-menu__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.top-header__nav .top-mega-menu__card{display:block;min-width:0;padding:10px;color:#26364a;background:#f5f8fc;border:1px solid #e7edf5;border-radius:2px;white-space:normal;transition:border-color .2s ease,background .2s ease,transform .2s ease}.top-header__nav .top-mega-menu__card:hover{background:#fff;border-color:#9ec7e8;transform:translateY(-2px)}
.top-mega-menu__thumb{display:block;aspect-ratio:16/9;overflow:hidden;margin-bottom:9px;background:#eaf1f8;border-radius:0}.top-mega-menu__thumb img{display:block;width:100%;height:100%;object-fit:contain}.top-mega-menu__card-title{display:block;margin-bottom:4px;color:#173e6c;font-size:12px;font-weight:700;line-height:1.5}.top-mega-menu__card-desc{display:block;color:#687386;font-size:10px;font-weight:500;line-height:1.55}.top-mega-menu__all{display:flex!important;align-items:center;justify-content:flex-end;gap:10px;margin-top:16px;padding:0!important;color:#126eb4!important;font-size:12px!important;font-weight:700!important}.top-mega-menu__all:after{content:"";width:7px;height:7px;border-top:1.5px solid currentColor;border-right:1.5px solid currentColor;transform:rotate(45deg)}
@media(max-width:1080px){.top-nav-item{display:block;align-self:auto}.top-nav-item>.top-nav-link{height:auto}.top-nav-item>.top-nav-link .top-nav-caret{display:none}.top-mega-menu{display:none}}
</style>`;

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

// biz トップ(biz.bytech.jp/)は静的HTML化して配信（React/ハイドレーション排除）。
// 実体は public/biz-top-static/index.html（scripts/build-static-biz.mjs で生成・コミット済み）。
export async function GET() {
  let html = await readFile(
    join(process.cwd(), "public", "biz-top-static", "index.html"),
    "utf8",
  );
  html = html.replaceAll(
    "/biz/assets/css/style.css",
    "/biz/assets/css/style.css?v=20260716-2",
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
    `${HEADER_MEGA_MENU_STYLE}${FAQ_CATEGORY_STYLE}</head>`,
  );
  html = html.replace("</body>", `${FAQ_CATEGORY_SCRIPT}</body>`);
  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=0, must-revalidate",
    },
  });
}
