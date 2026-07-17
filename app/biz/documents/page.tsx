import { BizHeader, BizFooter } from "../_chrome/BizChrome";
import { LIB_CSS } from "../_chrome/libStyles";
import { CarouselInit } from "../_chrome/CarouselInit";
import {
  getDocuments,
  docCategory,
  docCategoryEn,
  docLines,
  docThumbnail,
  type MicroCmsDocument,
} from "@/lib/microcms";

// お役立ち資料一覧（資料ライブラリ型）。共通スタイルは _chrome/libStyles.ts（archive と共有）。
// データソースは microCMS「documents」（スキーマ: docs/microcms-documents-schema.md）。
// CMS が空のうちは下記サンプル（FALLBACK_*）を表示する。

type DocItem = {
  title: string;
  points: string[];
  thumbLabel: string;
  thumb?: string;
  href: string;
};

type Promo = {
  eyebrow: string;
  heading: string;
  btnLabel: string;
  href: string;
  thumbLabel: string;
  thumb?: string;
  recos: string[];
};

type Category = { name: string; en: string; docs: DocItem[] };

// ---- フォールバック（CMS未入稿時のサンプル） ----
const FALLBACK_PROMO: Promo = {
  eyebrow: "バイテックBizが3分でわかる！",
  heading: "サービス紹介資料",
  btnLabel: "無料で資料を受け取る",
  href: "/doc-a",
  thumbLabel: "SERVICE DECK",
  recos: ["バイテックBizについて知りたい", "AI研修の進め方を知りたい", "導入事例を知りたい"],
};

const FALLBACK_PICKUPS: DocItem[] = [
  { title: "【保存版】生成AI研修 導入完全ガイド", points: ["研修設計から現場定着までの進め方を体系化", "失敗しない社内展開のチェックリスト付き", "主要4つの研修タイプを比較表で収録"], thumbLabel: "DOCUMENT", href: "/doc-a" },
  { title: "製造業のAI活用 事例集（5社）", points: ["現場業務の自動化で工数を大幅削減", "導入前後の効果をデータで掲載", "進め方のポイントを解説"], thumbLabel: "CASE BOOK", href: "/doc-a" },
  { title: "はじめての生成AI活用スタートガイド", points: ["何から始めるかを3ステップで整理", "つまずきやすい落とし穴も解説", "すぐ使えるテンプレート付き"], thumbLabel: "GUIDE", href: "/doc-a" },
];

const FALLBACK_CATEGORIES: Category[] = [
  {
    name: "サービス概要",
    en: "Service",
    docs: [
      { title: "バイテックBiz サービス紹介資料", points: ["研修タイプ・料金・進め方を網羅", "3分でわかる全体像"], thumbLabel: "SERVICE", href: "/doc-a" },
      { title: "研修プラン比較ガイド", points: ["4つの研修タイプを比較表で整理", "自社に合うプランの選び方"], thumbLabel: "SERVICE", href: "/doc-a" },
      { title: "導入事例集（5社）", points: ["業種別の活用・成果をまとめて紹介", "導入前後の比較データ"], thumbLabel: "CASE", href: "/doc-a" },
      { title: "生成AI研修 導入完全ガイド", points: ["研修設計から現場定着までの進め方", "社内展開チェックリスト付き"], thumbLabel: "GUIDE", href: "/doc-a" },
      { title: "料金・お見積りのご案内", points: ["プラン別の料金体系", "お見積りの流れ"], thumbLabel: "PRICE", href: "/doc-a" },
      { title: "よくあるご質問（FAQ）集", points: ["導入前の疑問をまとめて解消", "検討時のチェックポイント"], thumbLabel: "FAQ", href: "/doc-a" },
    ],
  },
  {
    name: "AI活用ノウハウ",
    en: "Knowledge",
    docs: [
      { title: "はじめての生成AI活用スタートガイド", points: ["何から始めるかを3ステップで整理", "つまずきやすい落とし穴も解説"], thumbLabel: "GUIDE", href: "/doc-a" },
      { title: "業務で差がつくプロンプト設計の基本", points: ["すぐ使えるテンプレート付き", "職種別の活用例を掲載"], thumbLabel: "GUIDE", href: "/doc-a" },
      { title: "全社展開を成功させる社内ルールの作り方", points: ["情報漏えい・誤情報への対策", "運用フローのサンプル"], thumbLabel: "GUIDE", href: "/doc-a" },
      { title: "研修の効果を測る評価設計ハンドブック", points: ["理解度チェックの作り方", "定着までのフォロー例"], thumbLabel: "GUIDE", href: "/doc-a" },
      { title: "職種別・生成AI活用アイデア集", points: ["営業/管理/開発など網羅", "そのまま使える活用例"], thumbLabel: "GUIDE", href: "/doc-a" },
      { title: "経営層向け：AI人材育成の投資判断ガイド", points: ["費用対効果の考え方", "導入ロードマップ例"], thumbLabel: "GUIDE", href: "/doc-a" },
    ],
  },
];

// ---- CMS → 表示モデル変換 ----
function toDocItem(doc: MicroCmsDocument): DocItem {
  return {
    title: doc.title,
    points: docLines(doc.points),
    thumbLabel: doc.thumbLabel || "DOCUMENT",
    thumb: docThumbnail(doc) || undefined,
    href: doc.formUrl || "/doc-a",
  };
}

function buildView(cms: MicroCmsDocument[]): {
  promo: Promo;
  pickups: DocItem[];
  categories: Category[];
} {
  const hero = cms.find((d) => d.isHero) || cms[0];
  const promo: Promo = {
    eyebrow: hero.eyebrow || "無料でダウンロードいただけます",
    heading: hero.title,
    btnLabel: "無料で資料を受け取る",
    href: hero.formUrl || "/doc-a",
    thumbLabel: hero.thumbLabel || "DOCUMENT",
    thumb: docThumbnail(hero) || undefined,
    recos: docLines(hero.recos),
  };

  const pickups = cms.filter((d) => d.isPickup).map(toDocItem);

  // カテゴリ別にグルーピング（出現順を維持）
  const categories: Category[] = [];
  for (const doc of cms) {
    const name = docCategory(doc);
    let cat = categories.find((c) => c.name === name);
    if (!cat) {
      cat = { name, en: docCategoryEn(name), docs: [] };
      categories.push(cat);
    }
    cat.docs.push(toDocItem(doc));
  }

  return { promo, pickups, categories };
}

function DlIcon() {
  return <span className="dl-ico" aria-hidden="true" />;
}
function Caret() {
  return <span className="dl-caret" aria-hidden="true" />;
}

function Thumb({ label, thumb, title }: { label: string; thumb?: string; title: string }) {
  return thumb ? <img src={thumb} alt={title} /> : <span className="dl-thumb-label">{label}</span>;
}

function DocCard({ doc }: { doc: DocItem }) {
  return (
    <article className="dl-card">
      <div className="dl-card__thumb">
        <Thumb label={doc.thumbLabel} thumb={doc.thumb} title={doc.title} />
      </div>
      <div className="dl-card__body">
        <h3 className="dl-card__title">{doc.title}</h3>
        <ul className="dl-points dl-points--sm">
          {doc.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
        <a className="dl-btn dl-btn--block" href={doc.href}>資料を受け取る<DlIcon /></a>
      </div>
    </article>
  );
}

export default async function DocumentsPage() {
  const cms = await getDocuments();
  const { promo, pickups, categories } =
    cms.length > 0
      ? buildView(cms)
      : { promo: FALLBACK_PROMO, pickups: FALLBACK_PICKUPS, categories: FALLBACK_CATEGORIES };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: LIB_CSS }} />
      <BizHeader />

      <div className="dl-topbar">
        <nav className="dl-breadcrumb">
          <a href="/">トップ</a> &nbsp;&gt;&nbsp; お役立ち資料
        </nav>
      </div>

      {/* ヒーロー帯 */}
      <section className="dl-hero">
        <div className="dl-hero__inner">
          <div>
            <h1 className="dl-hero__title">お役立ち資料</h1>
            <p className="dl-hero__desc">
              科学的なAI人材育成を実現するための資料を<br />
              無料で配布しています。<br />
              フォームにご入力いただいたメールアドレスに<br />
              資料を送付いたします。
            </p>
          </div>
          <div className="dl-promo">
            <div className="dl-promo__top">
              <div>
                <p className="dl-promo__eyebrow">{promo.eyebrow}</p>
                <p className="dl-promo__heading">{promo.heading}</p>
                <a className="dl-promo__btn" href={promo.href}>{promo.btnLabel}<DlIcon /></a>
              </div>
              <div className="dl-promo__img">
                <Thumb label={promo.thumbLabel} thumb={promo.thumb} title={promo.heading} />
              </div>
            </div>
            {promo.recos.length > 0 && (
              <div className="dl-promo__reco">
                <span className="dl-promo__reco-label">こんな方におすすめです</span>
                {promo.recos.map((r, i) => (
                  <span className="dl-promo__reco-item" key={i}><span className="dl-check" />{r}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* カテゴリナビ */}
      <nav className="dl-nav">
        <div className="dl-nav__inner">
          {pickups.length > 0 && <a href="#pickup">ピックアップ<Caret /></a>}
          {categories.map((cat, i) => (
            <a href={`#cat-${i}`} key={cat.name}>{cat.name}<Caret /></a>
          ))}
        </div>
      </nav>

      {/* ピックアップ（カルーセル） */}
      {pickups.length > 0 && (
        <section className="dl-wrap dl-sec" id="pickup">
          <h2 className="dl-sec-title">ピックアップ</h2>
          <span className="dl-sec-title__en">Pick Up</span>
          <div className="dl-car" data-dl-carousel>
            <button className="dl-car__arrow dl-car__arrow--prev" aria-label="前へ">‹</button>
            <div className="dl-car__vp">
              <div className="dl-car__track">
                {pickups.map((doc, i) => (
                  <div className="dl-car__slide" key={i}>
                    <div className="dl-pickup">
                      <div className="dl-pickup__thumb">
                        <Thumb label={doc.thumbLabel} thumb={doc.thumb} title={doc.title} />
                      </div>
                      <div>
                        <span className="dl-pickup__badge">おすすめ</span>
                        <h3 className="dl-pickup__title">{doc.title}</h3>
                        <ul className="dl-points">
                          {doc.points.map((p, j) => (
                            <li key={j}>{p}</li>
                          ))}
                        </ul>
                        <a className="dl-btn" href={doc.href}>資料を受け取る<DlIcon /></a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="dl-car__arrow dl-car__arrow--next" aria-label="次へ">›</button>
            <div className="dl-car__dots">
              {pickups.map((_, i) => (
                <button className={`dl-car__dot${i === 0 ? " is-active" : ""}`} key={i} aria-label={`${i + 1}枚目`} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* カテゴリ別グリッド */}
      {categories.map((cat, i) => (
        <section className="dl-wrap dl-sec" id={`cat-${i}`} key={cat.name}>
          <h2 className="dl-sec-title">{cat.name}</h2>
          <span className="dl-sec-title__en">{cat.en}</span>
          <div className="dl-grid">
            {cat.docs.map((doc, j) => (
              <DocCard doc={doc} key={j} />
            ))}
          </div>
        </section>
      ))}

      {/* 下部CTA */}
      <section className="dl-cta">
        <div className="dl-cta__inner">
          <p className="dl-cta__title">まずは無料個別相談から</p>
          <p className="dl-cta__desc">貴社の課題に合わせた研修プランや資料のご案内をいたします。お気軽にご相談ください。</p>
          <a className="dl-cta__btn" href="/counseling">無料個別相談を予約する</a>
        </div>
      </section>

      <div className="dl-foot-space" />
      <BizFooter />

      <CarouselInit />
    </>
  );
}
