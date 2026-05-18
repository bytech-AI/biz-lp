'use client'

import Script from 'next/script'

export default function SupportPage() {
  return (
    <>
      <link rel="icon" type="image/png" href="/bytech/assets/images/favicon.png" />
      <link rel="apple-touch-icon" href="/bytech/assets/images/favicon.png" />
      <style dangerouslySetInnerHTML={{ __html: `
    :root {
      --color-primary: #533afc;
      --color-primary-dark: #3b25d4;
      --color-dark: #191722;
      --color-dark2: #1f1f2e;
      --color-accent: #ffd464;
      --color-accent-pink: #D4215F;
      --color-text: #333;
      --color-text-light: #555;
      --color-white: #fff;
      --color-bg-light: #f6f6f6;
      --color-bg-purple-light: #f0eeff;
      --color-green: #217346;
      --font-jp: var(--font-noto-jp), 'Noto Sans JP', sans-serif;
      --font-en: 'Futura', 'Futura-Medium', 'Century Gothic', sans-serif;
      --max-width: 1200px;
      --radius: 12px;
      --radius-lg: 20px;
      --shadow: 0 4px 24px rgba(0,0,0,0.1);
      --shadow-lg: 0 8px 40px rgba(0,0,0,0.15);
    }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: var(--font-jp); color: var(--color-text); background: var(--color-white); line-height: 1.7; font-size: 15px; }
    img { max-width: 100%; height: auto; vertical-align: middle; }
    a { color: inherit; text-decoration: none; }
    ul, ol { list-style: none; }
    button { cursor: pointer; border: none; background: none; font-family: inherit; }
    .u-inner { max-width: var(--max-width); margin: 0 auto; padding: 0 24px; }
    .u-section { padding: 80px 0; }
    .u-section-sm { padding: 60px 0; }
    .mark-purple { color: var(--color-primary); }
    .highlight-box { background: var(--color-primary); color: #fff; display: inline-block; padding: 2px 12px; }
    .sp-only { display: none; }
    @media (max-width: 768px) { .pc-only { display: none !important; } .sp-only { display: block !important; } }
    .btn-primary { display: inline-flex; align-items: center; justify-content: center; background: linear-gradient(135deg, var(--color-accent) 0%, #ffb800 100%); color: var(--color-dark); font-weight: 700; font-size: 16px; padding: 16px 40px; border-radius: 50px; box-shadow: 0 4px 20px rgba(255,212,100,0.5); transition: transform 0.2s, box-shadow 0.2s; gap: 8px; }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(255,212,100,0.6); }
    .btn-purple { display: inline-flex; align-items: center; justify-content: center; background: var(--color-primary); color: #fff; font-weight: 700; font-size: 16px; padding: 16px 40px; border-radius: 50px; transition: all 0.2s; gap: 8px; box-shadow: 0 4px 20px rgba(83,58,252,0.35); }
    .btn-purple:hover { background: var(--color-primary-dark); transform: translateY(-2px); }
    .sticky-cta { position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); z-index: 1000; display: flex; gap: 12px; padding: 0 16px; opacity: 0; transition: opacity 0.3s; pointer-events: none; }
    .sticky-cta.is-visible { opacity: 1; pointer-events: auto; }
    .sticky-cta a { display: flex; align-items: center; justify-content: center; padding: 14px 28px; border-radius: 50px; font-weight: 700; font-size: 14px; box-shadow: var(--shadow-lg); white-space: nowrap; }
    .sticky-cta .btn-cta-main { background: linear-gradient(135deg, #ffd464 0%, #ffb800 100%); color: var(--color-dark); }
    .sticky-cta .btn-cta-sub { background: var(--color-dark); color: #fff; }
    .header { position: fixed; top: 0; left: 0; right: 0; z-index: 900; background: rgba(255,255,255,0.98); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(0,0,0,0.06); height: 70px; display: flex; align-items: center; }
    .header__inner { max-width: var(--max-width); margin: 0 auto; padding: 0 24px; width: 100%; display: flex; align-items: center; gap: 40px; }
    .header__logo img { height: 36px; width: auto; }
    .header__nav { display: flex; align-items: center; gap: 32px; margin-left: auto; }
    .header__nav__list { display: flex; align-items: center; gap: 28px; }
    .header__nav__list li { position: relative; }
    .header__nav__list a { font-size: 13px; font-weight: 500; color: var(--color-text); transition: color 0.2s; white-space: nowrap; }
    .header__nav__list a:hover { color: var(--color-primary); }
    .header__nav__cta { display: flex; gap: 10px; }
    .header__cta-btn { padding: 10px 20px; border-radius: 50px; font-size: 13px; font-weight: 700; display: inline-flex; align-items: center; white-space: nowrap; }
    .header__cta-btn--outline { border: 2px solid var(--color-primary); color: var(--color-primary); }
    .header__cta-btn--fill { background: var(--color-primary); color: #fff; }
    .header__hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; }
    .header__hamburger span { width: 24px; height: 2px; background: var(--color-text); transition: all 0.3s; display: block; }
    .header__dropdown { display: none; position: absolute; top: 100%; left: -16px; background: #fff; border-radius: var(--radius); box-shadow: var(--shadow-lg); padding: 12px 0; min-width: 240px; z-index: 100; }
    .header__dropdown a { display: block; padding: 8px 20px; font-size: 13px; }
    .header__dropdown a:hover { background: var(--color-bg-purple-light); }
    .header__nav__list li:hover .header__dropdown { display: block; }
    @media (max-width: 1024px) { .header__nav__list { display: none; } }
    @media (max-width: 768px) { .header__hamburger { display: flex; margin-left: auto; } .header__nav__cta { display: none; } }
    .breadcrumb { padding: 80px 0 10px; font-size: 13px; color: var(--color-text-light); }
    .breadcrumb a { color: var(--color-primary); }
    .breadcrumb a:hover { text-decoration: underline; }
    .breadcrumb__sep { margin: 0 8px; color: #ccc; }
    .support-hero { background: #1a1a1a; padding: 40px 0 60px; text-align: center; color: #fff; }
    .support-hero__title { font-size: 42px; font-weight: 900; line-height: 1.3; margin-bottom: 20px; }
    .support-hero__subtitle { font-size: 16px; font-weight: 400; color: rgba(255,255,255,0.8); max-width: 700px; margin: 0 auto; line-height: 1.8; }
    @media (max-width: 768px) { .support-hero__title { font-size: 28px; } .support-hero__subtitle { font-size: 14px; padding: 0 16px; } }
    .section-tag { display: inline-block; font-family: var(--font-en); font-size: 14px; font-weight: 700; color: var(--color-primary); letter-spacing: 0.15em; border: 2px solid var(--color-primary); padding: 4px 16px; border-radius: 50px; margin-bottom: 12px; }
    .section-title { font-size: 32px; font-weight: 900; line-height: 1.4; margin-bottom: 40px; }
    .section-title--sm { font-size: 26px; }
    @media (max-width: 768px) { .section-title { font-size: 24px; margin-bottom: 28px; } .section-title--sm { font-size: 22px; } }
    .feature-cards { background: var(--color-bg-light); padding: 80px 0; }
    .feature-cards__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 40px; }
    .feature-card { background: #fff; border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow); transition: transform 0.3s, box-shadow 0.3s; display: flex; flex-direction: column; text-decoration: none; color: var(--color-text); }
    .feature-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
    .feature-card__img { width: 100%; aspect-ratio: 568 / 726; object-fit: cover; }
    .feature-card__body { padding: 20px; flex: 1; display: flex; align-items: center; justify-content: space-between; gap: 12px; }
    .feature-card__title { font-size: 14px; font-weight: 700; line-height: 1.6; }
    .feature-card__arrow { flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; background: var(--color-primary); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 14px; }
    @media (max-width: 1024px) { .feature-cards__grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 640px) { .feature-cards__grid { grid-template-columns: 1fr; max-width: 400px; margin-left: auto; margin-right: auto; } }
    .support-overview { padding: 80px 0; text-align: center; }
    .support-overview__diagram { margin: 40px auto; max-width: 100%; }
    .support-overview__stats { display: flex; gap: 24px; justify-content: center; margin: 40px 0 24px; }
    .support-overview__stats img { width: calc(33.33% - 16px); max-width: 302px; }
    .support-overview__note { font-size: 12px; color: var(--color-text-light); text-align: center; }
    @media (max-width: 768px) { .support-overview__stats { overflow-x: auto; scroll-snap-type: x mandatory; gap: 16px; padding-bottom: 16px; justify-content: flex-start; } .support-overview__stats img { flex-shrink: 0; width: 260px; scroll-snap-align: start; } }
    .feature-detail { padding: 80px 0; }
    .feature-detail--alt { background: var(--color-bg-light); }
    .feature-detail__header { background: linear-gradient(135deg, #533afc 0%, #7b61ff 100%); border-radius: var(--radius-lg) var(--radius-lg) 0 0; padding: 32px 40px; color: #fff; }
    .feature-detail__num { font-family: var(--font-en); font-size: 64px; font-weight: 900; opacity: 0.3; line-height: 1; margin-bottom: 8px; }
    .feature-detail__label { font-size: 14px; font-weight: 500; opacity: 0.8; margin-bottom: 4px; }
    .feature-detail__title { font-size: 22px; font-weight: 900; }
    .feature-detail__body { background: #fff; border-radius: 0 0 var(--radius-lg) var(--radius-lg); padding: 40px; box-shadow: var(--shadow); }
    .feature-detail__subtitle { font-size: 26px; font-weight: 900; margin-bottom: 8px; }
    .feature-detail__subtitle .mark-purple { color: #583FFD; }
    .feature-detail__divider { width: 60px; height: 3px; background: var(--color-primary); margin: 16px 0 20px; }
    .feature-detail__desc-label { font-size: 15px; font-weight: 700; margin-bottom: 16px; color: var(--color-text); }
    .feature-detail__img { border-radius: var(--radius); margin: 24px 0; width: 100%; }
    .feature-detail__text { font-size: 15px; line-height: 1.8; color: var(--color-text); }
    .feature-detail__two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: center; margin-top: 24px; }
    @media (max-width: 768px) { .feature-detail__header { padding: 24px; } .feature-detail__num { font-size: 48px; } .feature-detail__title { font-size: 18px; } .feature-detail__body { padding: 24px; } .feature-detail__subtitle { font-size: 20px; } .feature-detail__two-col { grid-template-columns: 1fr; } }
    .instructors { padding: 60px 0; }
    .instructors__title { font-size: 26px; font-weight: 900; margin-bottom: 8px; }
    .instructors__desc { font-size: 15px; color: var(--color-text-light); margin-bottom: 24px; }
    .instructors__carousel { display: flex; gap: 24px; overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 16px; -webkit-overflow-scrolling: touch; }
    .instructors__carousel img { flex-shrink: 0; width: 210px; border-radius: var(--radius); scroll-snap-align: start; }
    .learning-flow { background: var(--color-bg-light); padding: 80px 0; text-align: center; }
    .learning-flow__title { font-size: 28px; font-weight: 900; margin-bottom: 8px; }
    .learning-flow__sub { font-size: 15px; color: var(--color-text-light); margin-bottom: 40px; }
    .learning-flow__steps { display: flex; gap: 24px; justify-content: center; text-align: left; }
    .learning-flow__step { background: #fff; border-radius: var(--radius-lg); padding: 32px 24px; flex: 1; max-width: 340px; box-shadow: var(--shadow); }
    .learning-flow__step-num { font-family: var(--font-en); font-size: 13px; font-weight: 700; color: var(--color-primary); letter-spacing: 0.1em; margin-bottom: 8px; }
    .learning-flow__step-title { font-size: 18px; font-weight: 700; margin-bottom: 12px; }
    .learning-flow__step-text { font-size: 14px; line-height: 1.7; color: var(--color-text-light); }
    @media (max-width: 768px) { .learning-flow__steps { flex-direction: column; align-items: center; } .learning-flow__step { max-width: 100%; } .learning-flow__title { font-size: 22px; } }
    .testimonials { padding: 80px 0; text-align: center; }
    .testimonials__label { font-size: 14px; color: var(--color-text-light); margin-bottom: 8px; }
    .testimonials__title { font-size: 28px; font-weight: 900; margin-bottom: 40px; }
    .testimonials__carousel { display: flex; gap: 20px; overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 20px; -webkit-overflow-scrolling: touch; }
    .testimonials__carousel img { flex-shrink: 0; width: 340px; border-radius: var(--radius); scroll-snap-align: start; }
    @media (max-width: 768px) { .testimonials__title { font-size: 22px; } .testimonials__carousel img { width: 280px; } }
    .cta-section { background: var(--color-dark); padding: 80px 0 60px; text-align: center; color: #fff; position: relative; }
    .cta-section::after { content: ''; position: absolute; bottom: -1px; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 30px solid transparent; border-right: 30px solid transparent; border-bottom: 20px solid var(--color-dark); }
    .cta-section__pre { font-size: 15px; color: rgba(255,255,255,0.7); margin-bottom: 8px; }
    .cta-section__title { font-size: 32px; font-weight: 900; margin-bottom: 32px; }
    .cta-section__img { max-width: 700px; margin: 0 auto 24px; }
    .cta-section__note { font-size: 12px; color: rgba(255,255,255,0.5); margin-top: 16px; }
    .cta-section__points { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-top: 24px; font-size: 14px; color: rgba(255,255,255,0.9); }
    @media (max-width: 768px) { .cta-section__title { font-size: 22px; } }
    .mid-cta { background: var(--color-bg-purple-light); padding: 60px 0; text-align: center; }
    .mid-cta__title { font-size: 24px; font-weight: 900; margin-bottom: 24px; }
    .mid-cta__img { max-width: 700px; margin: 0 auto; }
    .mid-cta__img a { display: block; }
    .mid-cta__note { font-size: 12px; color: var(--color-text-light); margin-top: 12px; }
    .footer { background: var(--color-dark); color: rgba(255,255,255,0.8); }
    .footer__main { padding: 60px 0 40px; }
    .footer__inner { max-width: var(--max-width); margin: 0 auto; padding: 0 24px; }
    .footer__grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; }
    .footer__brand__logo img { height: 32px; width: auto; filter: brightness(0) invert(1); margin-bottom: 16px; }
    .footer__brand__catch { font-size: 14px; margin-bottom: 20px; line-height: 1.8; }
    .footer__brand__cta a { display: inline-flex; align-items: center; background: linear-gradient(135deg, var(--color-accent) 0%, #ffb800 100%); color: var(--color-dark); font-weight: 700; font-size: 13px; padding: 12px 24px; border-radius: 50px; }
    .footer__col__ttl { font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.4); letter-spacing: 0.1em; margin-bottom: 16px; }
    .footer__col__list { display: flex; flex-direction: column; gap: 10px; }
    .footer__col__list li a { font-size: 13px; color: rgba(255,255,255,0.7); transition: color 0.2s; }
    .footer__col__list li a:hover { color: #fff; }
    .footer__bottom { border-top: 1px solid rgba(255,255,255,0.08); padding: 20px 0; text-align: center; }
    .footer__bottom p { font-size: 12px; color: rgba(255,255,255,0.3); }
    @media (max-width: 768px) { .footer__grid { grid-template-columns: 1fr 1fr; gap: 32px; } .footer__brand { grid-column: 1 / -1; } }
    @media (max-width: 480px) { .footer__grid { grid-template-columns: 1fr; } }
    .fadein { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
    .fadein.is-visible { opacity: 1; transform: translateY(0); }
      ` }} />

      {/* HEADER */}
      <header className="header">
        <div className="header__inner">
          <a href="/bytech" className="header__logo">
            <img src="/bytech/assets/images/support/生成AIロゴ黒.svg" alt="バイテック生成AI" />
          </a>
          <nav className="header__nav">
            <ul className="header__nav__list">
              <li><a href="/bytech">TOP</a></li>
              <li><a href="/bytech/support">サポート詳細</a></li>
              <li><a href="https://generative-ai.bytech.jp/counseling/" target="_blank">無料説明会</a></li>
            </ul>
            <div className="header__nav__cta">
              <a href="https://generative-ai.bytech.jp/counseling/" target="_blank" className="header__cta-btn header__cta-btn--fill">無料説明会に参加する</a>
            </div>
          </nav>
          <div className="header__hamburger">
            <span></span><span></span><span></span>
          </div>
        </div>
      </header>

      {/* BREADCRUMB */}
      <div className="breadcrumb">
        <div className="u-inner">
          <a href="/bytech">TOP</a>
          <span className="breadcrumb__sep">&#9659;</span>
          <span>サポート詳細</span>
        </div>
      </div>

      {/* HERO */}
      <section className="support-hero">
        <div className="u-inner">
          <h1 className="support-hero__title fadein">バイテックのサポート</h1>
          <p className="support-hero__subtitle fadein">生成AIスキルを有した各領域ごとの実績豊富なAI講師がゴールまで徹底マンツーマンサポート</p>
        </div>
      </section>

      {/* 4 FEATURES OVERVIEW */}
      <section className="feature-cards" id="features">
        <div className="u-inner">
          <div style={{ textAlign: 'center' }} className="fadein">
            <span className="section-tag">FEATURE</span>
            <h2 className="section-title">サポートの4つの特徴</h2>
          </div>
          <div className="feature-cards__grid">
            <a href="#feature-1" className="feature-card fadein">
              <img src="/bytech/assets/images/support/交差-48.webp" alt="マンツーマンAI導入サポート" className="feature-card__img" />
              <div className="feature-card__body">
                <h3 className="feature-card__title">最短で<span className="mark-purple">成果に直結</span>させる<br />マンツーマンAI導入サポート</h3>
                <span className="feature-card__arrow">&#9656;</span>
              </div>
            </a>
            <a href="#feature-2" className="feature-card fadein">
              <img src="/bytech/assets/images/support/交差-49.webp" alt="無制限チャットサポート" className="feature-card__img" />
              <div className="feature-card__body">
                <h3 className="feature-card__title"><span className="mark-purple">業務や案件</span>の相談もできる<br />無制限チャットサポート</h3>
                <span className="feature-card__arrow">&#9656;</span>
              </div>
            </a>
            <a href="#feature-3" className="feature-card fadein">
              <img src="/bytech/assets/images/support/交差-47.webp" alt="実務を想定した実践課題" className="feature-card__img" />
              <div className="feature-card__body">
                <h3 className="feature-card__title">知っているから<span className="mark-purple">使えるに変わる</span><br />実務を想定した実践課題</h3>
                <span className="feature-card__arrow">&#9656;</span>
              </div>
            </a>
            <a href="#feature-4" className="feature-card fadein">
              <img src="/bytech/assets/images/support/交差-51.webp" alt="案件マッチング機能b-Works" className="feature-card__img" />
              <div className="feature-card__body">
                <h3 className="feature-card__title"><span className="mark-purple">実績作りと収益化</span>を実現する<br />案件マッチング機能b-Works</h3>
                <span className="feature-card__arrow">&#9656;</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* SUPPORT OVERVIEW */}
      <section className="support-overview">
        <div className="u-inner">
          <div className="fadein">
            <span className="section-tag">SUPPORT</span>
            <h2 className="section-title">バイテックのサポートは<br />受講生の目的・ゴールに最適化</h2>
          </div>
          <div className="fadein">
            <img src="/bytech/assets/images/support/01_PC.svg" alt="バイテックの4つのサポート" className="support-overview__diagram" />
          </div>
          <div className="support-overview__stats fadein">
            <img src="/bytech/assets/images/support/グループ-9021.svg" alt="どこよりもやる多数の実践課題" />
            <img src="/bytech/assets/images/support/グループ-9018.svg" alt="圧倒的なプログラム完遂率" />
            <img src="/bytech/assets/images/support/グループ-9017.svg" alt="AIスキルで副業収入を獲得" />
          </div>
          <p className="support-overview__note fadein">※ 2025年1月~11月の受講生と卒業生のアンケートから集計</p>
        </div>
      </section>

      {/* FEATURE #1 */}
      <section className="feature-detail" id="feature-1">
        <div className="u-inner">
          <div className="fadein">
            <div className="feature-detail__header">
              <div className="feature-detail__num">01</div>
              <div className="feature-detail__label">最短で成果に直結させるマンツーマン</div>
              <div className="feature-detail__title">AI導入サポート</div>
            </div>
            <div className="feature-detail__body">
              <h3 className="feature-detail__subtitle">AI導入サポートの<span className="mark-purple">特徴</span></h3>
              <div className="feature-detail__divider"></div>
              <p className="feature-detail__desc-label">専属AI講師がゴールに合わせてプランニング</p>
              <img src="/bytech/assets/images/support/面談サポートの特徴-1.svg" alt="面談サポートの特徴" className="feature-detail__img" />
              <div className="feature-detail__two-col">
                <div>
                  <img src="/bytech/assets/images/support/スクリーンショット-2025-05-11-10.44.18-1024x576.webp" alt="サポート面談の様子" className="feature-detail__img" style={{ margin: 0, borderRadius: '12px' }} />
                </div>
                <div>
                  <p className="feature-detail__text">専属AI講師は受講生の学習ペースや達成したい目標や課題に合わせて学習メニューをプランニングしていくため、自分に必要なAIスキルを最短で身につけることができます。</p>
                </div>
              </div>
              <div className="instructors" style={{ marginTop: '40px' }}>
                <h3 className="instructors__title">バイテックの<span className="mark-purple">AI講師陣</span></h3>
                <div className="feature-detail__divider"></div>
                <p className="instructors__desc">各領域に特化した生成AIスキルを有するプロのAI講師が20名以上在籍</p>
                <div className="instructors__carousel">
                  <img src="/bytech/assets/images/support/グループ-9050.webp" alt="講師_業務活用(田中省吾)" />
                  <img src="/bytech/assets/images/support/グループ-9051.webp" alt="講師_副業活用(宮本真由美)" />
                  <img src="/bytech/assets/images/support/グループ-9054.webp" alt="講師_副業活用(木村竜太郎)" />
                  <img src="/bytech/assets/images/support/グループ-9056.webp" alt="講師_業務活用(池田義国)" />
                  <img src="/bytech/assets/images/support/グループ-9058.webp" alt="講師_副業活用(椿明人)" />
                  <img src="/bytech/assets/images/support/グループ-90032.webp" alt="講師_業務活用(夏井大輝)" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MID CTA */}
      <section className="mid-cta">
        <div className="u-inner fadein">
          <h2 className="mid-cta__title">AI人材への一歩を踏みだそう</h2>
          <div className="mid-cta__img">
            <a href="https://generative-ai.bytech.jp/counseling/" target="_blank">
              <img src="/bytech/assets/images/support/CTA_無料説明会.svg" alt="無料説明会に参加する" />
            </a>
          </div>
          <p className="mid-cta__note">※ 無理な勧誘は行っていません。</p>
        </div>
      </section>

      {/* FEATURE #2 */}
      <section className="feature-detail feature-detail--alt" id="feature-2">
        <div className="u-inner">
          <div className="fadein">
            <div className="feature-detail__header">
              <div className="feature-detail__num">02</div>
              <div className="feature-detail__label">業務や案件の相談もできる無制限</div>
              <div className="feature-detail__title">チャットサポート</div>
            </div>
            <div className="feature-detail__body">
              <h3 className="feature-detail__subtitle">チャットサポートの<span className="mark-purple">特徴</span></h3>
              <div className="feature-detail__divider"></div>
              <p className="feature-detail__desc-label">サポート内容</p>
              <p className="feature-detail__text">教材学習の疑問点や生成AIの技術的な質問、案件に関する不明点に対してテキストチャットや質問内容に合わせて編集画面を操作しながら実践的な解説を動画で収録し解説するため、とても分かりやすいというお声をいただいているサポートの一つです。</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE #3 */}
      <section className="feature-detail" id="feature-3">
        <div className="u-inner">
          <div className="fadein">
            <div className="feature-detail__header">
              <div className="feature-detail__num">03</div>
              <div className="feature-detail__label">知っているから使えるに変わる</div>
              <div className="feature-detail__title">実務を想定した実践課題</div>
            </div>
            <div className="feature-detail__body">
              <h3 className="feature-detail__subtitle">サポート内容</h3>
              <div className="feature-detail__divider"></div>
              <img src="/bytech/assets/images/support/スクリーンショット-2025-07-04-3.31.47-scaled.webp" alt="実践課題の画面" className="feature-detail__img" style={{ borderRadius: '12px' }} />
              <p className="feature-detail__text">バイテックの実践課題では、プロのAI講師からアドバイスやフィードバックが受けられます。プロンプトや生成AIツールの応用例など、独学では難しい実践的な内容をレクチャーしてくれます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE #4 */}
      <section className="feature-detail feature-detail--alt" id="feature-4">
        <div className="u-inner">
          <div className="fadein">
            <div className="feature-detail__header">
              <div className="feature-detail__num">04</div>
              <div className="feature-detail__label">実績作りと収益化を実現する</div>
              <div className="feature-detail__title">案件マッチング機能 b-Works</div>
            </div>
            <div className="feature-detail__body">
              <h3 className="feature-detail__subtitle">掲載中の案件</h3>
              <div className="feature-detail__divider"></div>
              <p className="feature-detail__text">AIライティングの案件から広告バナー制作、Dify開発まで生成AI関連の案件を多数掲載。バイテックで学んだスキルを活用して最短で収益化を実現するサポートをします。</p>
            </div>
          </div>
        </div>
      </section>

      {/* LEARNING FLOW */}
      <section className="learning-flow">
        <div className="u-inner">
          <h2 className="learning-flow__title fadein">学習の流れ</h2>
          <p className="learning-flow__sub fadein">バイテックのサポートの流れと全体像</p>
          <div className="learning-flow__steps">
            <div className="learning-flow__step fadein">
              <div className="learning-flow__step-num">STEP 01</div>
              <h3 className="learning-flow__step-title">ゴールの設定</h3>
              <p className="learning-flow__step-text">専属AI講師との面談で、あなたのゴール(副業収益化・業務効率化・スキルアップなど)を明確にし、最適な学習プランを策定します。</p>
            </div>
            <div className="learning-flow__step fadein">
              <div className="learning-flow__step-num">STEP 02</div>
              <h3 className="learning-flow__step-title">学習 &amp; 実践課題</h3>
              <p className="learning-flow__step-text">動画教材で基礎を学び、実践課題でスキルを定着。チャットサポートと面談で疑問を即解決しながら、着実にスキルを身につけます。</p>
            </div>
            <div className="learning-flow__step fadein">
              <div className="learning-flow__step-num">STEP 03</div>
              <h3 className="learning-flow__step-title">成果の実現</h3>
              <p className="learning-flow__step-text">案件マッチング機能b-Worksで実績作りと収益化を実現。業務効率化による生産性のUPを達成します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="u-inner">
          <p className="testimonials__label fadein">これまでに、2000人以上のAI学習をサポート</p>
          <h2 className="testimonials__title fadein">たくさんの嬉しいコメントをいただいております</h2>
          <div className="testimonials__carousel fadein">
            <img src="/bytech/assets/images/support/グループ-9050.webp" alt="受講生の声1" />
            <img src="/bytech/assets/images/support/グループ-9051.webp" alt="受講生の声2" />
            <img src="/bytech/assets/images/support/グループ-9054.webp" alt="受講生の声3" />
            <img src="/bytech/assets/images/support/グループ-9056.webp" alt="受講生の声4" />
            <img src="/bytech/assets/images/support/グループ-9058.webp" alt="受講生の声5" />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="u-inner">
          <p className="cta-section__pre fadein">生成AIを副業や業務に活用するための疑問や不安を解消できる！</p>
          <h2 className="cta-section__title fadein">無料オンライン説明会を毎日開催中！</h2>
          <div className="cta-section__img fadein">
            <a href="https://generative-ai.bytech.jp/counseling/" target="_blank">
              <img src="/bytech/assets/images/support/CTA_無料説明会.svg" alt="無料説明会に参加する" />
            </a>
          </div>
          <div className="cta-section__points fadein">
            <span>&#9745; 受講前の悩みや不安を気軽に相談できる</span>
            <span>&#9745; あなたに合った生成AIの活用方法を知れる</span>
            <span>&#9745; AI副業のマネタイズについて知れる</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer__main">
          <div className="footer__inner">
            <div className="footer__grid">
              <div className="footer__brand">
                <div className="footer__brand__logo">
                  <img src="/bytech/assets/images/support/生成AIロゴ黒.svg" alt="バイテック生成AI" />
                </div>
                <p className="footer__brand__catch">最短4ヶ月で、<br />生成AI活用のプロに。</p>
                <div className="footer__brand__cta">
                  <a href="https://generative-ai.bytech.jp/counseling/" target="_blank">無料カウンセリングに申し込む</a>
                </div>
              </div>
              <div>
                <div className="footer__col__ttl">コース一覧 - 主要AI別</div>
                <ul className="footer__col__list">
                  <li><a href="/bytech/chatgpt-master">ChatGPTマスターコース</a></li>
                  <li><a href="https://generative-ai.bytech.jp/gemini-master/" target="_blank">Geminiマスターコース</a></li>
                  <li><a href="https://generative-ai.bytech.jp/copilot-master/" target="_blank">Copilotマスターコース</a></li>
                  <li><a href="https://generative-ai.bytech.jp/dify-master/" target="_blank">Difyマスターコース</a></li>
                  <li><a href="https://generative-ai.bytech.jp/notebooklm-master/" target="_blank">NotebookLMマスターコース</a></li>
                </ul>
              </div>
              <div>
                <div className="footer__col__ttl">コース一覧 - 目的別</div>
                <ul className="footer__col__list">
                  <li><a href="https://generative-ai.bytech.jp/ai-writer/" target="_blank">AIウェブライターコース</a></li>
                  <li><a href="https://generative-ai.bytech.jp/ai-movie-creator/" target="_blank">AI動画クリエイターコース</a></li>
                  <li><a href="https://generative-ai.bytech.jp/ai-image-creator/" target="_blank">AI画像クリエイターコース</a></li>
                  <li><a href="https://generative-ai.bytech.jp/business-worker/" target="_blank">ビジネスワーカーコース</a></li>
                  <li><a href="https://generative-ai.bytech.jp/generative-ai-passport/" target="_blank">生成AIパスポートコース</a></li>
                </ul>
              </div>
              <div>
                <div className="footer__col__ttl">サポート</div>
                <ul className="footer__col__list">
                  <li><a href="https://generative-ai.bytech.jp/membership-terms/" target="_blank">会員規約</a></li>
                  <li><a href="https://generative-ai.bytech.jp/refund-policy/" target="_blank">返金ポリシー</a></li>
                  <li><a href="https://generative-ai.bytech.jp/job-membership-terms/" target="_blank">案件獲得保証プラン利用規約</a></li>
                  <li><a href="https://generative-ai.bytech.jp/specified_commercial/" target="_blank">特定商取引法に関する表示</a></li>
                  <li><a href="https://generative-ai.bytech.jp/system-requirements/" target="_blank">システム要件</a></li>
                </ul>
                <div className="footer__col__ttl" style={{ marginTop: '24px' }}>会社情報</div>
                <ul className="footer__col__list">
                  <li><a href="https://www.librex.co.jp/" target="_blank">会社概要</a></li>
                  <li><a href="https://generative-ai.bytech.jp/privacy-policy/" target="_blank">プライバシーポリシー</a></li>
                </ul>
                <div className="footer__col__ttl" style={{ marginTop: '24px' }}>関連サービス</div>
                <ul className="footer__col__list">
                  <li><a href="https://bytech.jp/biz" target="_blank">法人向けAI研修【バイテックBiz】</a></li>
                  <li><a href="https://bytech.jp/blog/" target="_blank">個人向けAIメディア【バイテックBLOG】</a></li>
                  <li><a href="https://biz.bytech.jp/blog/" target="_blank">企業向けAIメディア【バイテックBLOG Biz】</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__inner">
            <p>&copy; 2025 Librex Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* STICKY CTA */}
      <div className="sticky-cta" id="stickyCta">
        <a href="https://generative-ai.bytech.jp/counseling/" target="_blank" className="btn-cta-main">まずは無料カウンセリング</a>
      </div>

      <Script id="support-scripts" strategy="afterInteractive">
        {`
          // Fade In
          const fadeinEls = document.querySelectorAll('.fadein');
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(el => {
              if (el.isIntersecting) {
                el.target.classList.add('is-visible');
                observer.unobserve(el.target);
              }
            });
          }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
          fadeinEls.forEach(el => observer.observe(el));

          // Sticky CTA
          const stickyCta = document.getElementById('stickyCta');
          const updateSticky = () => {
            const scrollY = window.scrollY;
            const scrollBottom = scrollY + window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            const nearBottom = (docHeight - scrollBottom) <= 80;
            if (scrollY > 300 && !nearBottom) {
              stickyCta.classList.add('is-visible');
            } else {
              stickyCta.classList.remove('is-visible');
            }
          };
          window.addEventListener('scroll', updateSticky, { passive: true });

          // Smooth scroll
          document.querySelectorAll('a[href^="#"]').forEach(a => {
            a.addEventListener('click', (e) => {
              const href = a.getAttribute('href');
              if (href === '#') return;
              const target = document.querySelector(href);
              if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
              }
            });
          });
        `}
      </Script>
    </>
  )
}
