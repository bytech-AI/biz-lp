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
// CMS が空のうちはヒーロー/ピックアップ/カード類を出さない（ダミーは表示しない）。

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

// カテゴリ別のデフォルトサムネ。資料側で画像未設定のとき、このカテゴリの共通サムネを使う。
const CATEGORY_THUMB: Record<string, string> = {
  サービス概要: "/biz/assets/img/documents/category-service.webp",
};

// ---- CMS → 表示モデル変換 ----
function toDocItem(doc: MicroCmsDocument, defaultThumb?: string): DocItem {
  return {
    title: doc.title,
    points: docLines(doc.points),
    thumbLabel: doc.thumbLabel || "DOCUMENT",
    thumb: docThumbnail(doc) || defaultThumb || undefined,
    href: doc.formUrl || "/doc-a",
  };
}

function buildView(cms: MicroCmsDocument[]): {
  promo: Promo | null;
  pickups: DocItem[];
  categories: Category[];
} {
  const hero = cms.find((d) => d.isHero) || cms[0];
  const promo: Promo | null = hero
    ? {
        eyebrow: hero.eyebrow || "無料でダウンロードいただけます",
        heading: hero.title,
        btnLabel: "無料で資料を受け取る",
        href: hero.formUrl || "/doc-a",
        thumbLabel: hero.thumbLabel || "DOCUMENT",
        thumb: docThumbnail(hero) || undefined,
        recos: docLines(hero.recos),
      }
    : null;

  const pickups = cms.filter((d) => d.isPickup).map((d) => toDocItem(d));

  // カテゴリ別にグルーピング（出現順を維持）
  const categories: Category[] = [];
  for (const doc of cms) {
    const name = docCategory(doc);
    let cat = categories.find((c) => c.name === name);
    if (!cat) {
      cat = { name, en: docCategoryEn(name), docs: [] };
      categories.push(cat);
    }
    cat.docs.push(toDocItem(doc, CATEGORY_THUMB[name]));
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
  const { promo, pickups, categories } = buildView(cms);

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
          {promo && (
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
          )}
        </div>
      </section>

      {/* カテゴリナビ（資料が無いときは非表示） */}
      {(pickups.length > 0 || categories.length > 0) && (
        <nav className="dl-nav">
          <div className="dl-nav__inner">
            {pickups.length > 0 && <a href="#pickup">ピックアップ<Caret /></a>}
            {categories.map((cat, i) => (
              <a href={`#cat-${i}`} key={cat.name}>{cat.name}<Caret /></a>
            ))}
          </div>
        </nav>
      )}

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
