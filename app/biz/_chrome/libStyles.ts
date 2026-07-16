// 資料一覧(documents)・セミナーアーカイブ一覧(archive)で共通利用する「資料ライブラリ型」スタイル。
// 両ページで同一デザインにするため、CSSはここに一元化する（片方を変えれば両方に反映）。
// 方針: 角丸は弱め(パネル6px / ボタン・バッジ4px)、ドロップシャドウは無し(境界は1pxボーダーで表現)。
// アイコンは background-image(data-URI SVG)。globals.css の .biz-root *{all:revert} がインラインSVGの
// d/stroke を初期化して不可視化するため、<path>依存を避け背景画像で描画している。
export const LIB_CSS = `
        html { scroll-behavior: smooth; }
        body { font-family: var(--font-noto-jp), sans-serif; color: #2a2f3a; background: #eef1f6; margin: 0; padding: 0; }

        .dl-topbar { background: #fff; padding-top: 88px; }
        .dl-breadcrumb { background: #fff; max-width: 1200px; margin: 0 auto; padding: 14px 40px; font-size: 12px; font-weight: 700; color: #8a93a3; }
        .dl-breadcrumb a { color: #2a5a9b; text-decoration: none; }
        .dl-breadcrumb a:hover { text-decoration: underline; }

        /* ヒーロー帯（フルブリード） */
        .dl-hero { background: #2c5c9c; width: 100%; }
        .dl-hero__inner { max-width: 1200px; margin: 0 auto; padding: 26px 40px; display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 44px; align-items: center; }
        .dl-hero__title { color: #fff; font-size: 40px; font-weight: 800; margin: 0 0 18px; letter-spacing: .02em; }
        .dl-hero__desc { color: #d7e2f1; font-size: 15px; line-height: 2; margin: 0; }

        /* 販促カード */
        .dl-promo { background: #fff; border: 1px solid #dfe4ec; border-radius: 6px; padding: 18px 22px; }
        .dl-promo__top { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; align-items: center; }
        .dl-promo__eyebrow { font-size: 15px; font-weight: 800; color: #1a2e50; margin: 0 0 10px; padding-bottom: 10px; border-bottom: 1px solid #e6eaf0; }
        .dl-promo__heading { font-size: 23px; font-weight: 800; color: #1a2e50; margin: 0 0 12px; }
        .dl-promo__btn { display: flex; align-items: center; justify-content: center; gap: 10px; background: linear-gradient(135deg, #e83e8c, #d6266f); color: #fff; font-size: 16px; font-weight: 800; padding: 13px 18px; border-radius: 4px; text-decoration: none; }
        .dl-promo__btn:hover { opacity: .93; }
        .dl-promo__img { aspect-ratio: 16/9; overflow: hidden; background: linear-gradient(135deg, #eef3f9, #dbe6f3); border-radius: 4px; display: flex; align-items: center; justify-content: center; color: #9db8d2; font-family: "Futura","Futura Medium",sans-serif; letter-spacing: .1em; font-size: 12px; font-weight: 700; }
        .dl-promo__img img { width: 100%; height: 100%; object-fit: contain; }
        .dl-promo__reco { display: flex; flex-direction: column; align-items: flex-start; gap: 10px; margin-top: 14px; padding-top: 14px; border-top: 1px solid #e6eaf0; }
.dl-promo__reco-label { margin-bottom: 2px; }
        .dl-promo__reco-label { font-size: 14px; font-weight: 800; color: #1a2e50; }
        .dl-promo__reco-item { display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 700; color: #33507a; line-height: 1.4; }
        .dl-check { flex-shrink: 0; width: 20px; height: 20px; background: center/contain no-repeat url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Ccircle cx='10' cy='10' r='10' fill='%232c5c9c'/%3E%3Cpath d='M5.5 10.5l3 3 6-6.5' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"); }

        /* カテゴリナビ帯 */
        .dl-nav { background: #f6f8fb; border-bottom: 1px solid #e6eaf0; position: sticky; top: 0; z-index: 50; }
        .dl-nav__inner { max-width: 1200px; margin: 0 auto; display: flex; justify-content: center; flex-wrap: wrap; gap: 44px; padding: 16px 40px; }
        .dl-nav a { display: inline-flex; align-items: center; gap: 7px; color: #2a2f3a; font-size: 16px; font-weight: 800; text-decoration: none; }
        .dl-nav a:hover { color: #2c5c9c; }

        /* セクション */
        .dl-wrap { max-width: 1200px; margin: 0 auto; padding: 0 40px; }
        .dl-sec { margin-top: 58px; scroll-margin-top: 76px; }
        .dl-sec-title { text-align: center; font-size: 25px; font-weight: 800; margin: 0 0 4px; }
        .dl-sec-title__en { display: block; text-align: center; font-family: "Futura","Futura Medium",sans-serif; font-size: 11px; letter-spacing: .18em; color: #9fb0c6; font-weight: 700; margin-bottom: 26px; }

        /* 共通: 要点チェックリスト / ボタン */
        .dl-points { list-style: none; margin: 0; padding: 0; display: grid; gap: 9px; }
        .dl-points li { position: relative; padding-left: 26px; font-size: 14px; line-height: 1.6; color: #4a5568; }
        .dl-points li::before { content: ""; position: absolute; left: 0; top: 2px; width: 17px; height: 17px; background: center/contain no-repeat url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Ccircle cx='10' cy='10' r='10' fill='%232c5c9c'/%3E%3Cpath d='M5.5 10.5l3 3 6-6.5' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"); }
        .dl-points--sm li { padding-left: 24px; font-size: 12.5px; }
        .dl-points--sm li::before { top: 2px; width: 15px; height: 15px; }
        .dl-btn { display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg, #e83e8c, #d6266f); color: #fff; font-size: 15px; font-weight: 800; padding: 13px 28px; border-radius: 4px; text-decoration: none; transition: opacity .25s ease; }
        .dl-btn:hover { opacity: .9; }
        .dl-btn--block { display: flex; justify-content: center; padding: 12px; font-size: 14px; }
        .dl-thumb-label { color: #a7bcd4; font-family: "Futura","Futura Medium",sans-serif; letter-spacing: .12em; font-size: 13px; font-weight: 700; }
        .dl-ico { display: inline-block; width: 1.05em; height: 1.05em; flex-shrink: 0; vertical-align: middle; background: center/contain no-repeat url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3v12'/%3E%3Cpath d='M8 11l4 4 4-4'/%3E%3Cpath d='M4 21h16'/%3E%3C/svg%3E"); }
        .dl-caret { display: inline-block; width: 0.85em; height: 0.85em; flex-shrink: 0; vertical-align: middle; background: center/contain no-repeat url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' fill='none' stroke='%239aa7b8' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2 4l4 4 4-4'/%3E%3C/svg%3E"); }

        /* ピックアップ カルーセル */
        .dl-car { position: relative; padding: 0 46px; }
        .dl-car__vp { overflow-x: auto; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
        .dl-car__vp::-webkit-scrollbar { display: none; }
        .dl-car__track { display: flex; }
        .dl-car__slide { flex: 0 0 100%; scroll-snap-align: start; box-sizing: border-box; padding: 6px; }
        .dl-car__arrow { position: absolute; top: 50%; transform: translateY(-50%); width: 44px; height: 44px; border-radius: 50%; border: 1px solid #dfe4ec; background: #fff; cursor: pointer; font-size: 20px; color: #2c5c9c; display: flex; align-items: center; justify-content: center; z-index: 2; transition: opacity .2s ease; }
        .dl-car__arrow:disabled { opacity: .35; cursor: default; }
        .dl-car__arrow--prev { left: 0; }
        .dl-car__arrow--next { right: 0; }
        .dl-car__dots { display: flex; justify-content: center; gap: 9px; margin-top: 18px; }
        .dl-car__dot { width: 9px; height: 9px; border-radius: 50%; border: none; background: #c7d2e0; cursor: pointer; padding: 0; }
        .dl-car__dot.is-active { background: #2c5c9c; }

        .dl-pickup { background: #fff; border: 1px solid #dfe4ec; border-radius: 6px; display: grid; grid-template-columns: 320px 1fr; gap: 30px; padding: 28px; align-items: center; }
        .dl-pickup__thumb { aspect-ratio: 16/9; overflow: hidden; background: linear-gradient(135deg, #eaf1f8, #d7e5f3); border-radius: 6px; display: flex; align-items: center; justify-content: center; }
        .dl-pickup__thumb img { width: 100%; height: 100%; object-fit: contain; }
        .dl-pickup__badge { display: inline-block; background: #eaf3fb; color: #2c5c9c; font-size: 11px; font-weight: 800; padding: 5px 12px; border-radius: 4px; margin-bottom: 12px; }
        .dl-pickup__title { font-size: 22px; font-weight: 800; line-height: 1.5; margin: 0 0 16px; }
        .dl-pickup .dl-btn { margin-top: 6px; }

        /* カテゴリグリッド */
        .dl-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .dl-card { background: #fff; border: 1px solid #dfe4ec; border-radius: 6px; overflow: hidden; display: flex; flex-direction: column; transition: transform .2s ease, border-color .2s ease; }
        .dl-card:hover { transform: translateY(-3px); border-color: #b9c8dc; }
        .dl-card__thumb { aspect-ratio: 16/9; background: linear-gradient(135deg, #f0f4f9, #e0e9f3); display: flex; align-items: center; justify-content: center; }
        .dl-card__thumb img { width: 100%; height: 100%; object-fit: contain; }
        .dl-card__body { padding: 18px 18px 20px; display: flex; flex-direction: column; flex: 1; }
        .dl-card__title { font-size: 15px; font-weight: 700; line-height: 1.55; margin: 0 0 12px; }
        .dl-card__body .dl-points { margin-bottom: 16px; flex: 1; }

        /* 下部CTA */
        .dl-cta { max-width: 1200px; margin: 64px auto 0; padding: 0 40px; }
        .dl-cta__inner { background: linear-gradient(135deg, #2c5c9c, #2a9fd6); color: #fff; border-radius: 6px; padding: 42px; text-align: center; }
        .dl-cta__title { font-size: 24px; font-weight: 800; margin: 0 0 10px; }
        .dl-cta__desc { font-size: 14px; line-height: 1.8; margin: 0 0 22px; color: #eaf4fc; }
        .dl-cta__btn { display: inline-block; background: linear-gradient(135deg, #e83e8c, #d6266f); color: #fff; font-size: 15px; font-weight: 800; padding: 15px 40px; border-radius: 4px; text-decoration: none; box-shadow: 0 6px 18px rgba(214,38,111,.3); }
        .dl-foot-space { height: 70px; }

        @media (max-width: 960px) {
          .dl-hero__inner { grid-template-columns: 1fr; gap: 26px; }
          .dl-promo__top { grid-template-columns: 1fr; }
          .dl-pickup { grid-template-columns: 1fr; }
          .dl-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .dl-hero__inner, .dl-wrap, .dl-cta, .dl-breadcrumb, .dl-nav__inner { padding-left: 18px; padding-right: 18px; }
          .dl-hero__title { font-size: 30px; }
          .dl-nav__inner { gap: 22px; }
          .dl-grid { grid-template-columns: 1fr; }
          .dl-car { padding: 0 8px; }
          .dl-car__arrow { display: none; }
        }
`;
