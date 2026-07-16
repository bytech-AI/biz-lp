import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-static";

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
  html = html.replace(
    'href="./download" class="hero__cta-sp__btn hero__cta-sp__btn--fill"',
    'href="/doc-a" class="hero__cta-sp__btn hero__cta-sp__btn--fill"',
  );
  html = html.replace(
    '<span class="mark_b">企業向け生成AI研修</span>',
    '<span class="mark_b">個別コンサル型AI研修</span>',
  );
  html = html.replace("</head>", `${FAQ_CATEGORY_STYLE}</head>`);
  html = html.replace("</body>", `${FAQ_CATEGORY_SCRIPT}</body>`);
  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=0, must-revalidate",
    },
  });
}
