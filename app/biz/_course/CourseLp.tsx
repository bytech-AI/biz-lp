import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { BizFooter, BizHeader } from "../_chrome/BizChrome";
import { COURSES } from "./courses";
import "./course.css";

// ── biz 研修コース個別ページの共通テンプレート。
//    各コース（/chat-gpt-training, /gemini-training …）は CourseData を渡すだけで生成する。
//    biz配下はハイドレーション不使用のため、開閉/タブ/stuck はネイティブ<script>で動かす。

export type CurriculumCard = { no: string; cat: string; catNoWrap?: boolean; thumb?: string; h: string; tags: string[]; d: string };
export type CurriculumStep = { no: string; label: string; cards: CurriculumCard[] };
export type Lesson = { no: number; title: string; ch: number; time: string | null; body?: string[] };
export type SpecItem = { ja: string; value: ReactNode };
export type AboutCard = { no: string; h: string; thumb?: string; d: string };
export type RecCard = { h: string; d: string };
export type Plan = { name: string; amount: string; unit: string };
export type Faq = { q: string; a: string };

export type CourseData = {
  slug: string;
  courseName: string;
  hero: {
    /** FVグラデーション（使用ツールのブランドカラーベース）。CSSのbackground値をそのまま指定 */
    background: string;
    eyebrow: string;
    title: string;
    tag: string;
    toolLabel: string;
    toolLogo: string;
    toolAlt: string;
    visual: string;
    visualAlt: string;
    /** 長い見出しを1行にしたいコース用（テキスト列を広く・ビジュアルを小さく） */
    wideTitle?: boolean;
    /** PCでアイブロウコピーを1行表示するコース用 */
    nowrapEyebrow?: boolean;
    /** PCでヒーロービジュアルを少し小さく表示するコース用 */
    compactVisual?: boolean;
  };
  docHref: string;
  // 共通部分（subLead / cards / plans / subsidy / faqs / curriculum.sub）は
  // 省略時に下部の DEFAULT_* が使われる。コース固有で変えたい時だけ指定する。
  about: { title: string; lead: string; subLead?: ReactNode; cards?: AboutCard[] };
  spec: SpecItem[];
  recommend: { sub: ReactNode; cards: RecCard[]; nowrapSub?: boolean };
  curriculum: { sub?: ReactNode; steps: CurriculumStep[] };
  lessons: {
    learnHours: string;
    freeHours: string;
    chapterCount?: number;
    lessonCount?: number;
    items: Lesson[];
  };
  plans?: { lead: string; primary: Plan[]; single: Plan };
  subsidy?: { title: string; image: string; imageAlt: string };
  /** 助成金未対応コースは true にすると助成金セクションを非表示 */
  noSubsidy?: boolean;
  faqs?: Faq[];
};

const REC_AVATARS = ["a", "b", "c", "d"] as const;

// ── コース共通のデフォルト（各ページで省略時に使用） ──
export const DEFAULT_ABOUT_SUBLEAD: ReactNode = (
  <>
    ツールの使い方で終わらせず、<br />
    <span className="ct-about__mark">現場の成果につなげる力</span>を身につける
  </>
);

export const DEFAULT_ABOUT_CARDS: AboutCard[] = [
  {
    no: "01",
    h: "基礎から学べるので\nAI未経験でも安心",
    d: "生成AIの仕組みやプロンプトの基本など、業務活用に必要な土台を体系的に習得。AIに触れたことがない方でも、無理なく実務レベルまで到達できます。",
  },
  {
    no: "02",
    h: "自社の業務に合わせた\n実践的なカリキュラム",
    d: "実際の業務課題やよく使う資料をもとに、現場ですぐ使えるユースケースへ落とし込み。学んで終わりではなく、成果につながる活用法が身につきます。",
  },
  {
    no: "03",
    h: "研修後も伴走する\n手厚いサポート体制",
    d: "専任のコンサルタントが伴走し、つまずきをフォロー。研修後も社内でAI活用が定着するまで支援するため、一過性で終わらせません。",
  },
];

export const DEFAULT_CURRICULUM_SUB: ReactNode = (
  <>
    生成AIを実務で成果につなげるための<br />
    <em>『3つのステップ』</em>
  </>
);

export const DEFAULT_PLANS = {
  lead: "3つの研修プランでの受講が可能です。",
  primary: [
    { name: "AI効率化研修", amount: "200,000", unit: "円〜／名" },
    { name: "AI自動化研修", amount: "300,000", unit: "円〜／名" },
  ],
  single: { name: "eラーニング", amount: "100,000", unit: "円〜／名" },
};

export const DEFAULT_SUBSIDY = {
  title: "助成金活用で、実質負担はここまで下がる",
  image: "/biz/assets/img/course/subsidy.svg",
  imageAlt:
    "助成金活用で研修費用は1人当たり最大75%OFF（AI効率化研修 200,000円→実質50,000円／AI自動化研修 300,000円→実質150,000円）",
};

export const DEFAULT_FAQS: Faq[] = [
  {
    q: "AI未経験・初心者でも受講できますか？",
    a: "はい、まったく問題ありません。多くの受講者が生成AI未経験からのスタートですが、基礎から丁寧に学べるため、業務で活用できるレベルまでしっかりとスキルアップできます。",
  },
  {
    q: "研修の期間や回数はどのくらいですか？",
    a: "貴社の目的や受講人数に合わせて設計します。まずは無料個別相談で現状をヒアリングし、最適な期間・回数のプランをご提案します。",
  },
  {
    q: "オンラインと対面、どちらにも対応していますか？",
    a: "はい、オンライン・対面・ハイブリッドのいずれにも対応しています。貴社の働き方や拠点に合わせて実施形態を選べます。",
  },
  {
    q: "自社の業務に合わせたカリキュラムにできますか？",
    a: "はい、可能です。実際の業務課題やよく使う資料をもとに、現場ですぐ使えるユースケースに落とし込んでカリキュラムをカスタマイズします。",
  },
  {
    q: "助成金は活用できますか？",
    a: "はい、弊社提携のパートナー社労士を紹介させていただきます。助成金活用チェックシートご記入後、申請が問題ない企業様に助成金活用のご案内を実施しています。",
  },
  {
    q: "研修終了後もサポートはありますか？",
    a: "はい、サポート期間終了後も社内でのAI活用が定着するまで伴走します。つまずいたポイントもフォローし、安心して活用を進められます。",
  },
];

// ── ネイティブ<script>（コース共通・データ非依存） ──
const HEADER_LOGO_SCRIPT = `(function(){
  var img=document.querySelector('.top-header__logo img');
  var hero=document.querySelector('.ct-hero');
  if(!img||!hero)return;
  var DARK='/biz/assets/img/common/hd-logo-dark.svg', WHITE='/biz/assets/img/common/hd-logo.svg';
  function upd(){ img.src = window.pageYOffset > (hero.offsetHeight - 88) ? DARK : WHITE; }
  upd();
  window.addEventListener('scroll',upd,{passive:true});
  window.addEventListener('resize',upd,{passive:true});
})();`;

const PAGENAV_STUCK_SCRIPT = `(function(){
  var nav=document.querySelector('.ct-pagenav');
  if(!nav)return;
  function upd(){ nav.classList.toggle('is-stuck', nav.getBoundingClientRect().top<=0.5); }
  upd();
  window.addEventListener('scroll',upd,{passive:true});
  window.addEventListener('resize',upd,{passive:true});
})();`;

const CURRICULUM_TAB_SCRIPT = `(function(){
  var tabs=[].slice.call(document.querySelectorAll('.ct-cur__tab'));
  var steps=[].slice.call(document.querySelectorAll('.ct-cur__step'));
  if(!tabs.length)return;
  tabs.forEach(function(t){
    t.addEventListener('click',function(){
      var i=+t.getAttribute('data-cur-tab');
      tabs.forEach(function(x,xi){x.classList.toggle('is-active',xi===i);x.setAttribute('aria-selected',xi===i?'true':'false');});
      steps.forEach(function(s,si){s.classList.toggle('is-active',si===i);});
    });
  });
})();`;

const CLIST_SCRIPT = `(function(){
  document.querySelectorAll('.ct-clist__row').forEach(function(r){
    r.addEventListener('click',function(){
      var it=r.closest('.ct-clist__item'); if(!it)return;
      var open=it.classList.toggle('active');
      r.setAttribute('aria-expanded',open?'true':'false');
    });
  });
})();`;

const FAQ_SCRIPT = `(function(){document.querySelectorAll('.index_faq__question').forEach(function(q){q.addEventListener('click',function(){var it=q.closest('.index_faq__item');if(it)it.classList.toggle('active');});});})();`;

const PAGENAV_LINKS = [
  { href: "#about", label: "研修とは" },
  { href: "#recommend", label: "おすすめの組織・チーム" },
  { href: "#curriculum", label: "研修概要" },
  { href: "#curriculum-list", label: "カリキュラム詳細" },
  { href: "#price", label: "対応研修プラン" },
  { href: "#faq", label: "よくあるご質問" },
];

export function CourseLp({ data }: { data: CourseData }) {
  const d = data;
  const aboutSubLead = d.about.subLead ?? DEFAULT_ABOUT_SUBLEAD;
  const aboutCards = d.about.cards ?? DEFAULT_ABOUT_CARDS;
  const curriculumSub = d.curriculum.sub ?? DEFAULT_CURRICULUM_SUB;
  const plans = d.plans ?? DEFAULT_PLANS;
  const subsidy = d.subsidy ?? DEFAULT_SUBSIDY;
  const faqs = d.faqs ?? DEFAULT_FAQS;
  const chapterCount = d.lessons.chapterCount ?? d.lessons.items.length;
  const lessonCount =
    d.lessons.lessonCount ??
    d.lessons.items.reduce((total, lesson) => total + lesson.ch, 0);
  const avatarSheet = `/biz/assets/img/course/avatars/${d.slug.replace(/-training$/, "")}.webp`;

  // ── 構造化データ（Course / FAQPage / BreadcrumbList）。SEOリッチリザルト＆AI検索の抽出用。
  const url = `https://biz.bytech.jp/${d.slug}`;
  const priceNum = (s: string) => s.replace(/[^0-9]/g, "");
  const offers = [...plans.primary, plans.single].map((p) => ({
    "@type": "Offer",
    name: p.name,
    price: priceNum(p.amount),
    priceCurrency: "JPY",
    category: p.unit.replace(/^[／/]/, ""),
  }));
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        name: d.courseName,
        description: d.about.lead,
        url,
        inLanguage: "ja",
        provider: {
          "@type": "Organization",
          "@id": "https://biz.bytech.jp/#organization",
          name: "バイテックBiz",
          url: "https://biz.bytech.jp/",
        },
        offers,
        hasCourseInstance: [
          {
            "@type": "CourseInstance",
            name: d.courseName,
            courseMode: ["Online", "Onsite"],
            inLanguage: "ja",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "トップ", item: "https://biz.bytech.jp/" },
          { "@type": "ListItem", position: 2, name: d.courseName, item: url },
        ],
      },
    ],
  };

  return (
    <>
      {/* 構造化データ（Course / FAQPage / BreadcrumbList） */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BizHeader />

      <main className="ct-page">
        {/* ============ FV / ヒーロー ============ */}
        <section className={`ct-hero${d.hero.wideTitle ? " ct-hero--wide" : ""}`} style={{ background: d.hero.background }}>
          <div className="ct-hero__inner">
            <div className="ct-hero__body">
              <nav className="ct-breadcrumb ct-breadcrumb--hero" aria-label="パンくず">
                <Link href="/">トップ</Link>
                <span>›</span>
                <span>{d.courseName}</span>
              </nav>
              <p className={`ct-hero__eyebrow${d.hero.nowrapEyebrow ? " ct-hero__eyebrow--nowrap" : ""}`}>
                {d.hero.eyebrow}
              </p>
              <h1 className="ct-hero__title">{d.hero.title}</h1>
              <span className="ct-hero__tag">{d.hero.tag}</span>

              <div className="ct-hero__tools">
                <span className="ct-hero__tools-label">{d.hero.toolLabel}</span>
                <span className="ct-hero__tool">
                  <img src={d.hero.toolLogo} alt={d.hero.toolAlt} />
                </span>
              </div>
            </div>

            <div className={`ct-hero__visual${d.hero.compactVisual ? " ct-hero__visual--compact" : ""}`}>
              <img src={d.hero.visual} alt={d.hero.visualAlt} />
            </div>
          </div>
        </section>

        {/* FV直下のページ内ナビ（stuck時に左へロゴが下りてくる） */}
        <nav className="ct-pagenav" aria-label="ページ内ナビゲーション">
          <div className="ct-pagenav__inner">
            <Link className="ct-pagenav__brand" href="/" aria-label="バイテックBiz トップ">
              <img src="/biz/assets/img/common/hd-logo.svg" alt="バイテックBiz" />
            </Link>
            <ul className="ct-pagenav__list">
              {PAGENAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>
                    {l.href === "#about" ? `${d.courseName}とは` : l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a className="ct-pagenav__cta" href={d.docHref}>
              資料ダウンロード
              <span className="ct-pagenav__cta-ico" aria-hidden="true" />
            </a>
          </div>
        </nav>

        {/* ============ 研修とは？ ============ */}
        <section className="ct-about" id="about">
          <div className="ct-about__head">
            <p className="ct-about__eyebrow">バイテック法人AI研修の</p>
            <h2 className="ct-about__title">{d.about.title}</h2>
            <div className="ct-about__bar" aria-hidden="true" />
            <p className="ct-about__sub">{aboutSubLead}</p>
            <p className="ct-about__lead">{d.about.lead}</p>
          </div>

          {/* 研修サマリー */}
          <div className="ct-spec">
            {d.spec.map((s) => (
              <div className="ct-spec__card" key={s.ja}>
                <div className="ct-spec__label">
                  <span className="ct-spec__ja">{s.ja}</span>
                </div>
                <div className="ct-spec__value">{s.value}</div>
              </div>
            ))}
          </div>

          <div className="ct-about__grid">
            {aboutCards.map((c) => (
              <div className="ct-about__card" key={c.no}>
                <span className="ct-about__num">{c.no}</span>
                <h3 className="ct-about__card-h" style={{ whiteSpace: "pre-line" }}>{c.h}</h3>
                <div className="ct-about__illust" aria-hidden="true">
                  {c.thumb ? <img src={c.thumb} alt="" loading="lazy" /> : "IMAGE"}
                </div>
                <p className="ct-about__desc">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 研修受講後の姿（ワイヤー） */}
        <section className="ct-wire ct-wire--alt" id="after" hidden>
          <div className="ct-wire__inner">
            <span className="ct-wire__flag">WIRE / 研修受講後の姿</span>
            <p className="ct-wire__eyebrow">AFTER_</p>
            <h2 className="ct-wire__title">研修を受けると、こう変わる</h2>
            <p className="ct-wire__lead">Before → After で受講後の状態を見せるブロック。（ダミー）</p>
            <div className="ct-ba">
              <div className="ct-card">
                <span className="ct-card__label">Before</span>
                <div className="ct-ph ct-ph--line" />
                <div className="ct-ph ct-ph--line" />
                <div className="ct-ph ct-ph--line is-50" />
              </div>
              <div className="ct-ba__arrow" aria-hidden="true">→</div>
              <div className="ct-card">
                <span className="ct-card__label">After</span>
                <div className="ct-ph ct-ph--line" />
                <div className="ct-ph ct-ph--line" />
                <div className="ct-ph ct-ph--line is-50" />
              </div>
            </div>
          </div>
        </section>

        {/* おすすめの組織・チーム */}
        <section className="ct-rec" id="recommend">
          <div className="ct-rec__head">
            <p className="ct-rec__eyebrow">{d.courseName}が</p>
            <h2 className="ct-rec__title">おすすめの組織・チーム</h2>
            <div className="ct-rec__bar" aria-hidden="true" />
            <p className={`ct-rec__sub${d.recommend.nowrapSub ? " ct-rec__sub--nowrap" : ""}`}>
              {d.recommend.sub}
            </p>
          </div>
          <div className="ct-rec__grid">
            {d.recommend.cards.map((c, i) => (
              <div className="ct-rec__card" key={c.h}>
                <span
                  className={`ct-rec__avatar ct-rec__avatar--${REC_AVATARS[i % 4]}`}
                  style={{ backgroundImage: `url("${avatarSheet}")` }}
                  aria-hidden="true"
                />
                <div>
                  <p className="ct-rec__card-h">{c.h}</p>
                  <p className="ct-rec__card-desc">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 研修概要（STEP型・タブ） */}
        <section className="ct-cur" id="curriculum">
          <div className="ct-cur__head">
            <p className="ct-cur__eyebrow">{d.courseName}の</p>
            <h2 className="ct-cur__title">研修概要</h2>
            <div className="ct-cur__bar" aria-hidden="true" />
            <p className="ct-cur__sub">{curriculumSub}</p>
          </div>
          <div className="ct-cur__inner">
            <div className="ct-cur__tabs" role="tablist" aria-label="研修ステップ">
              {d.curriculum.steps.map((step, i) => (
                <button
                  key={step.no}
                  type="button"
                  className={`ct-cur__tab${i === 0 ? " is-active" : ""}`}
                  data-cur-tab={i}
                  role="tab"
                  aria-selected={i === 0 ? "true" : "false"}
                >
                  <span className="ct-cur__tab-no">{step.no}</span>
                  <span className="ct-cur__tab-label">{step.label}</span>
                </button>
              ))}
            </div>

            <div className="ct-cur__steps">
              {d.curriculum.steps.map((step, i) => (
                <div className={`ct-cur__step${i === 0 ? " is-active" : ""}`} key={step.no}>
                  <div className="ct-cur__step-head">
                    <span className="ct-cur__step-no">{step.no}</span>
                    <span className="ct-cur__step-label">{step.label}</span>
                  </div>
                  <div className={`ct-cur__panel${step.cards.length >= 3 ? " ct-cur__panel--3" : ""}`}>
                    {step.cards.map((c) => (
                      <div className="ct-cur__card" key={c.no}>
                        <div className="ct-cur__card-head">
                          <span className="ct-cur__card-no">{c.no}</span>
                          <span className={`ct-cur__card-cat${c.catNoWrap ? " is-nowrap" : ""}`}>{c.cat}</span>
                        </div>
                        <div className="ct-cur__thumb" aria-hidden="true">
                          {c.thumb ? <Image src={c.thumb} alt="" width={1280} height={720} /> : "IMAGE"}
                        </div>
                        <p className="ct-cur__card-h">{c.h}</p>
                        <div className="ct-cur__tags">
                          {c.tags.map((t) => (
                            <span className="ct-cur__tag" key={t}>{t}</span>
                          ))}
                        </div>
                        <p className="ct-cur__desc">{c.d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* カリキュラム詳細（アコーディオン） */}
        <section className="ct-clist" id="curriculum-list">
          <div className="ct-clist__head">
            <p className="ct-clist__eyebrow">{d.courseName}の</p>
            <h2 className="ct-clist__title">カリキュラム詳細</h2>
            <div className="ct-clist__bar" aria-hidden="true" />
            <p className="ct-clist__count">
              全{chapterCount}チャプター｜{lessonCount}レッスン
            </p>
            <div className="ct-clist__meta">
              <span className="ct-clist__meta-item">
                <span className="ct-clist__meta-pill">学習時間</span>約<b>{d.lessons.learnHours}</b>時間
              </span>
            </div>
          </div>
          <div className="ct-clist__list">
            {d.lessons.items.map((l) => (
              <div className="ct-clist__item" key={l.no}>
                <button className="ct-clist__row" type="button" aria-expanded="false">
                  <span className="ct-clist__no">{l.no}</span>
                  <span className="ct-clist__title-txt">{l.title}</span>
                  <span className="ct-clist__pills">
                    <span className="ct-clist__pill ct-clist__pill--ch">全{l.ch}レッスン</span>
                    {l.time && (
                      <span className="ct-clist__pill ct-clist__pill--time">{l.time}</span>
                    )}
                  </span>
                  <span className="ct-clist__toggle" aria-hidden="true" />
                </button>
                <div className="ct-clist__body">
                  <div className="ct-clist__body-inner">
                    {l.body && l.body.length > 0 ? (
                      <ul className="ct-clist__chapters">
                        {l.body.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="ct-clist__body-lead">内容は準備中です。</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 対応研修プラン */}
        <section className="ct-wire" id="price">
          <div className="ct-plan__head">
            <p className="ct-about__eyebrow">{d.courseName.replace("研修", "")}を学べる</p>
            <h2 className="ct-about__title">対応研修プラン</h2>
            <p className="ct-plan__lead">{plans.lead}</p>
          </div>
          <div className="ct-price">
            {plans.primary.map((p) => (
              <div className="ct-price__card" key={p.name}>
                <p className="ct-price__name">{p.name}</p>
                <p className="ct-price__amount">
                  {p.amount}<small>{p.unit}</small>
                </p>
              </div>
            ))}
          </div>
          <div className="ct-price ct-price--single">
            <div className="ct-price__card">
              <p className="ct-price__name">{plans.single.name}</p>
              <p className="ct-price__amount">
                {plans.single.amount}<small>{plans.single.unit}</small>
              </p>
            </div>
          </div>
        </section>

        {/* 助成金活用（助成金未対応コースは非表示） */}
        {!d.noSubsidy && (
          <section className="ct-wire" id="subsidy" style={{ paddingTop: 0 }}>
            <p className="ct-bubble">さらに</p>
            <h3 className="ct-subsidy-title">{subsidy.title}</h3>
            <div className="ct-subsidy-img">
              <img src={subsidy.image} alt={subsidy.imageAlt} />
            </div>
          </section>
        )}

        {/* 稟議・決裁支援（一旦非表示。復活時は hidden を外す） */}
        <section className="ct-ringi" id="ringi" hidden>
          <div className="ct-ringi__inner">
            <div className="ct-ringi__body">
              <span className="ct-ringi__eyebrow">稟議・決裁サポート</span>
              <h2 className="ct-ringi__title">
                社内の稟議・決裁も、<em>そのまま通せる資料</em>をご用意
              </h2>
              <p className="ct-ringi__lead">
                研修導入の意思決定に必要な提案資料を無料でお渡しします。課題やゴールから逆算した内容で、
                社内承認をスムーズに進められます。（内容はダミー）
              </p>
              <ul className="ct-ringi__points">
                <li>費用対効果・導入効果を整理した提案パート</li>
                <li>助成金活用による実質負担の説明</li>
                <li>導入スケジュール・進め方のサンプル</li>
              </ul>
              <div className="ct-ringi__btns">
                <a className="ct-ringi__btn ct-ringi__btn--fill" href={d.docHref}>
                  稟議用の資料をダウンロード
                  <span className="ct-hero__cta-arrow" aria-hidden="true" />
                </a>
                <a className="ct-ringi__btn ct-ringi__btn--text" href="/counseling">
                  相談しながら決めたい方はこちら →
                </a>
              </div>
            </div>
            <div className="ct-ringi__visual">
              <img src="/biz/assets/img/wp/biz-doc-cover.webp" alt="バイテックBiz 稟議用資料" loading="lazy" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="index_faq" id="faq">
          <div className="index_faq__inner">
            <div className="index_faq__head">
              <p className="index_faq__eyebrow">FAQ_</p>
              <h2 className="index_faq__heading">よくあるご質問</h2>
              <a className="index_faq__all index_faq__all--pc" href="/faq">
                <span className="index_faq__all-ico" aria-hidden="true" />
                よくある質問一覧を見る
              </a>
            </div>
            <div className="index_faq__list">
              {faqs.map((f) => (
                <div className="index_faq__item" key={f.q}>
                  <button className="index_faq__question" type="button">
                    {f.q}
                    <span className="index_faq__arrow" />
                  </button>
                  <div className="index_faq__answer">
                    <p>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
            <a className="index_faq__all index_faq__all--sp" href="/faq">
              <span className="index_faq__all-ico" aria-hidden="true" />
              よくある質問一覧を見る
            </a>
          </div>
        </section>

        {/* 他にもおすすめの研修コース（FAQの後・内部リンク導線／出口導線） */}
        <section className="ct-more" id="more-courses">
          <div className="ct-more__head">
            <p className="ct-about__eyebrow">目的・ツールに合わせて選べる</p>
            <h2 className="ct-about__title">研修プログラム一覧</h2>
          </div>
          <div className="ct-more__grid">
            {COURSES.filter((c) => c.slug !== d.slug).map((c) => (
              <Link key={c.slug} className="ct-more__card" href={`/${c.slug}`} style={{ ["--ct-accent" as string]: c.color }}>
                <span className="ct-more__logo"><img src={c.logo} alt="" loading="lazy" /></span>
                <span className="ct-more__body">
                  <span className="ct-more__name">{c.name}</span>
                  <span className="ct-more__desc">{c.desc}</span>
                </span>
                <span className="ct-more__arrow" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </section>
      </main>

      <script dangerouslySetInnerHTML={{ __html: HEADER_LOGO_SCRIPT }} />
      <script dangerouslySetInnerHTML={{ __html: PAGENAV_STUCK_SCRIPT }} />
      <script dangerouslySetInnerHTML={{ __html: CURRICULUM_TAB_SCRIPT }} />
      <script dangerouslySetInnerHTML={{ __html: CLIST_SCRIPT }} />
      <script dangerouslySetInnerHTML={{ __html: FAQ_SCRIPT }} />

      <BizFooter />
    </>
  );
}
