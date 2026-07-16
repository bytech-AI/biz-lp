import { getAllSeminars } from "../seminars/data";
import { BizHeader, BizFooter } from "../_chrome/BizChrome";
import { LIB_CSS } from "../_chrome/libStyles";
import { CarouselInit } from "../_chrome/CarouselInit";

// セミナーアーカイブ一覧。デザインは資料一覧(documents)と共通（_chrome/libStyles.ts）。
// 各セミナーは申込制（申込後に視聴URLをメール配布）。カードは個別ページ /seminars/[slug] へ遷移。

function DlIcon() {
  return <span className="dl-ico" aria-hidden="true" />;
}
function Caret() {
  return <span className="dl-caret" aria-hidden="true" />;
}

export default function ArchivePage() {
  const seminars = getAllSeminars();
  // ピックアップは登録順に依存せず、開催日の新しいウェビナーアーカイブを最大3件表示。
  const latestSeminars = [...seminars].sort((a, b) => b.date.localeCompare(a.date));
  const featured = latestSeminars[0];
  const pickups = latestSeminars.slice(0, 3);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: LIB_CSS }} />
      <BizHeader />

      <div className="dl-topbar">
        <nav className="dl-breadcrumb">
          <a href="/">トップ</a> &nbsp;&gt;&nbsp; セミナーアーカイブ
        </nav>
      </div>

      {/* ヒーロー帯 */}
      <section className="dl-hero">
        <div className="dl-hero__inner">
          <div>
            <h1 className="dl-hero__title">セミナーアーカイブ</h1>
            <p className="dl-hero__desc">
              過去に開催したAI活用セミナーを<br />
              アーカイブで配信しています。<br />
              お申し込みいただいたメールアドレスに<br />
              視聴用URLをお送りいたします。
            </p>
          </div>
          {featured && (
            <div className="dl-promo">
              <div className="dl-promo__top">
                <div>
                  <p className="dl-promo__eyebrow">いま注目のセミナー</p>
                  <p className="dl-promo__heading">{featured.title}</p>
                  <a className="dl-promo__btn" href={`/seminars/${featured.slug}`}>視聴申し込みをする<DlIcon /></a>
                </div>
                <div className="dl-promo__img">
                  {featured.thumb ? <img src={featured.thumb} alt={featured.title} /> : <span className="dl-thumb-label">{featured.thumbLabel}</span>}
                </div>
              </div>
              <div className="dl-promo__reco">
                <span className="dl-promo__reco-label">こんな方におすすめ</span>
                {featured.recommendedFor.slice(0, 2).map((r, i) => (
                  <span className="dl-promo__reco-item" key={i}><span className="dl-check" />{r}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ナビ */}
      <nav className="dl-nav">
        <div className="dl-nav__inner">
          <a href="#pickup">ピックアップ<Caret /></a>
          <a href="#list">AIツール活用<Caret /></a>
        </div>
      </nav>

      {/* ピックアップ（カルーセル） */}
      <section className="dl-wrap dl-sec" id="pickup">
        <h2 className="dl-sec-title">ピックアップ</h2>
        <span className="dl-sec-title__en">Pick Up</span>
        <div className="dl-car" data-dl-carousel>
          <button className="dl-car__arrow dl-car__arrow--prev" aria-label="前へ">‹</button>
          <div className="dl-car__vp">
            <div className="dl-car__track">
              {pickups.map((s) => (
                <div className="dl-car__slide" key={s.slug}>
                  <div className="dl-pickup">
                    <div className="dl-pickup__thumb">
                      {s.thumb ? <img src={s.thumb} alt={s.title} /> : <span className="dl-thumb-label">{s.thumbLabel}</span>}
                    </div>
                    <div>
                      <span className="dl-pickup__badge">アーカイブ配信中</span>
                      <h3 className="dl-pickup__title">{s.title}</h3>
                      <ul className="dl-points">
                        {s.recommendedFor.slice(0, 3).map((p, j) => (
                          <li key={j}>{p}</li>
                        ))}
                      </ul>
                      <a className="dl-btn" href={`/seminars/${s.slug}`}>視聴申し込みをする<DlIcon /></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="dl-car__arrow dl-car__arrow--next" aria-label="次へ">›</button>
          <div className="dl-car__dots">
            {pickups.map((s, i) => (
              <button className={`dl-car__dot${i === 0 ? " is-active" : ""}`} key={s.slug} aria-label={`${i + 1}枚目`} />
            ))}
          </div>
        </div>
      </section>

      {/* セミナー一覧グリッド */}
      <section className="dl-wrap dl-sec" id="list">
        <h2 className="dl-sec-title">AIツール活用</h2>
        <span className="dl-sec-title__en">Tool</span>
        <div className="dl-grid">
          {seminars.map((s) => (
            <article className="dl-card" key={s.slug}>
              <a className="dl-card__thumb" href={`/seminars/${s.slug}`}>
                {s.thumb ? <img src={s.thumb} alt={s.title} /> : <span className="dl-thumb-label">{s.thumbLabel}</span>}
              </a>
              <div className="dl-card__body">
                <h3 className="dl-card__title">{s.title}</h3>
                <ul className="dl-points dl-points--sm">
                  <li>視聴時間 {s.duration}</li>
                  {s.cardPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <a className="dl-btn dl-btn--block" href={`/seminars/${s.slug}`}>視聴申し込みをする<DlIcon /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

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
