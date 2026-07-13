import Script from 'next/script'
import Link from 'next/link'

export default function PlanPage() {
  return (
    <>
      {/* ===== ANALYTICS (GTM) ===== */}
      <Script id="gtm-base" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-K6HH9C2F');` }} />
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K6HH9C2F" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
      </noscript>

      <link rel="icon" type="image/png" href="/bytech/assets/images/favicon.png" />
      <link rel="apple-touch-icon" href="/bytech/assets/images/favicon.png" />
      <style dangerouslySetInnerHTML={{ __html: `    /* ===== CSS Custom Properties ===== */
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

    /* ===== Reset ===== */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: var(--font-jp); color: var(--color-text); background: var(--color-white); line-height: 1.7; font-size: 15px; }
    img { max-width: 100%; height: auto; vertical-align: middle; }
    a { color: inherit; text-decoration: none; }
    ul, ol { list-style: none; }
    button { cursor: pointer; border: none; background: none; font-family: inherit; }

    /* ===== Utility ===== */
    .u-inner { max-width: var(--max-width); margin: 0 auto; padding: 0 24px; }
    .u-section { padding: 80px 0; }
    .u-section-sm { padding: 60px 0; }
    .mark-purple { color: var(--color-primary); }
    .sp-only { display: none; }
    @media (max-width: 768px) { .pc-only { display: none !important; } .sp-only { display: block !important; } }

    /* ===== Buttons ===== */
    .btn-primary {
      display: inline-flex; align-items: center; justify-content: center;
      background: linear-gradient(135deg, var(--color-accent) 0%, #ffb800 100%);
      color: var(--color-dark); font-weight: 700; font-size: 16px;
      padding: 16px 40px; border-radius: 50px;
      box-shadow: 0 4px 20px rgba(255,212,100,0.5);
      transition: transform 0.2s, box-shadow 0.2s; gap: 8px;
    }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(255,212,100,0.6); }
    .btn-purple {
      display: inline-flex; align-items: center; justify-content: center;
      background: var(--color-primary); color: #fff;
      font-weight: 700; font-size: 16px; padding: 16px 40px; border-radius: 50px;
      transition: all 0.2s; gap: 8px; box-shadow: 0 4px 20px rgba(83,58,252,0.35);
    }
    .btn-purple:hover { background: var(--color-primary-dark); transform: translateY(-2px); }

    /* ===== Sticky CTA ===== */
    .sticky-cta {
      position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
      z-index: 1000; display: flex; gap: 12px; padding: 0 16px;
      opacity: 0; transition: opacity 0.3s; pointer-events: none;
    }
    .sticky-cta.is-visible { opacity: 1; pointer-events: auto; }
    .sticky-cta a {
      display: flex; align-items: center; justify-content: center;
      padding: 14px 28px; border-radius: 50px; font-weight: 700; font-size: 14px;
      box-shadow: var(--shadow-lg); white-space: nowrap;
    }
    .sticky-cta .btn-cta-main {
      background: linear-gradient(135deg, #ffd464 0%, #ffb800 100%);
      color: var(--color-dark);
    }
    .sticky-cta .btn-cta-sub { background: var(--color-dark); color: #fff; }

    /* ===== Header: 共有 bytech.css の .header スタイルを使用（topと同じ） ===== */

    /* ===== Section Header Common ===== */
    .sec-header { text-align: center; margin-bottom: 56px; }
    .sec-header__tag {
      font-family: var(--font-en); font-size: 13px; font-weight: 700;
      color: var(--color-primary); letter-spacing: 0.15em; margin-bottom: 8px; display: block;
    }
    .sec-header__ttl { font-size: clamp(22px, 3.5vw, 34px); font-weight: 900; line-height: 1.4; }
    .sec-header__sub { font-size: 15px; color: var(--color-text-light); margin-top: 12px; line-height: 1.8; }

    /* ===== Hero ===== */
    .plan-hero {
      padding-top: 70px;
      background: linear-gradient(135deg, #e8e4ff 0%, #d5ccff 40%, #c4b8ff 100%);
      text-align: center; padding-bottom: 60px;
    }
    .plan-hero__inner {
      max-width: var(--max-width); margin: 0 auto; padding: 60px 24px 0;
    }
    .plan-hero__breadcrumb {
      font-size: 12px; color: rgba(0,0,0,0.5); margin-bottom: 40px; text-align: left;
    }
    .plan-hero__breadcrumb a { color: rgba(0,0,0,0.5); }
    .plan-hero__breadcrumb a:hover { color: var(--color-primary); }
    .plan-hero h1 {
      font-size: clamp(28px, 4vw, 44px); font-weight: 900; line-height: 1.4;
      color: var(--color-dark); margin-bottom: 16px;
    }
    .plan-hero p {
      font-size: clamp(14px, 1.6vw, 17px); color: var(--color-text);
    }

    /* ===== Plan Cards Section ===== */
    .plan-section { padding: 80px 0 60px; }
    .plan-section .sec-header__sub-text {
      text-align: center; font-size: 15px; color: var(--color-text-light); margin-bottom: 40px;
    }
    .plan-tag {
      font-family: var(--font-en); font-size: 13px; font-weight: 700;
      color: var(--color-primary); letter-spacing: 0.15em; text-align: center;
      display: block; margin-bottom: 32px;
    }

    /* Plan Tabs (Mobile) */
    .plan-tabs {
      display: none;
    }
    @media (max-width: 768px) {
      .plan-tabs {
        display: flex; justify-content: center; gap: 0; margin-bottom: 24px;
      }
      .plan-tabs button {
        flex: 1; max-width: 180px; padding: 12px 20px; font-size: 14px; font-weight: 700;
        border: 2px solid var(--color-primary); color: var(--color-primary);
        background: #fff; transition: all 0.3s; cursor: pointer;
      }
      .plan-tabs button:first-child { border-radius: 50px 0 0 50px; }
      .plan-tabs button:last-child { border-radius: 0 50px 50px 0; }
      .plan-tabs button.active {
        background: var(--color-primary); color: #fff;
      }
    }

    /* Plan Cards Grid */
    .plan-cards {
      display: grid; grid-template-columns: 1fr 1fr; gap: 32px;
      max-width: 1000px; margin: 0 auto;
    }
    @media (max-width: 768px) {
      .plan-cards { grid-template-columns: 1fr; gap: 24px; }
      .plan-card.is-hidden { display: none; }
    }

    .plan-card {
      background: #fff; border-radius: var(--radius-lg); overflow: hidden;
      box-shadow: var(--shadow); border: 2px solid #eee; transition: transform 0.3s;
    }
    .plan-card:hover { transform: translateY(-4px); }
    .plan-card--lite .plan-card__header { background: linear-gradient(135deg, #f8f7ff, #eee8ff); }
    .plan-card--pro .plan-card__header { background: linear-gradient(135deg, #fff7e0, #fff0c8); }
    .plan-card--pro { border-color: var(--color-primary); }

    .plan-card__header {
      padding: 32px 24px 24px; text-align: center;
    }
    .plan-card__icon { width: 80px; height: auto; margin-bottom: 12px; }
    .plan-card__name {
      font-family: var(--font-en); font-size: 24px; font-weight: 900;
      color: var(--color-dark); letter-spacing: 0.05em;
    }
    .plan-card__name-jp {
      font-size: 13px; color: var(--color-text-light); margin-bottom: 12px;
    }
    .plan-card__target {
      display: inline-block; background: var(--color-bg-purple-light);
      padding: 6px 16px; border-radius: 50px; font-size: 14px; font-weight: 700;
    }
    .plan-card__target .hl { color: var(--color-accent-pink); }

    .plan-card__body { padding: 24px; }
    .plan-card__price-img { text-align: center; margin-bottom: 16px; }
    .plan-card__price-img img { max-width: 100%; }
    .plan-card__detail-img { text-align: center; margin-bottom: 20px; }
    .plan-card__detail-img img { max-width: 100%; }

    .plan-card__divider {
      display: flex; align-items: center; gap: 12px; margin: 20px 0; font-size: 13px; color: var(--color-text-light);
    }
    .plan-card__divider::before, .plan-card__divider::after {
      content: ''; flex: 1; height: 1px; background: #ddd;
    }

    .plan-card__services { text-align: center; margin-bottom: 20px; }
    .plan-card__services img { max-width: 100%; }

    .plan-card__cta { text-align: center; padding-bottom: 8px; }
    .plan-card__cta a {
      display: inline-flex; align-items: center; justify-content: center; gap: 8px;
      background: var(--color-primary); color: #fff; font-weight: 700; font-size: 15px;
      padding: 14px 36px; border-radius: 50px; transition: all 0.2s;
      box-shadow: 0 4px 16px rgba(83,58,252,0.3);
    }
    .plan-card__cta a:hover { background: var(--color-primary-dark); transform: translateY(-2px); }
    .plan-card__cta a svg {
      width: 8px; height: 14px; fill: #fff;
    }

    /* ===== Payment Methods ===== */
    .payment-section {
      padding: 60px 0; background: var(--color-bg-light);
    }
    .payment-section h3 {
      text-align: center; font-size: clamp(18px, 2.5vw, 24px); font-weight: 900;
      margin-bottom: 40px; color: var(--color-dark);
    }
    .payment-methods {
      display: grid; grid-template-columns: 1fr 1fr; gap: 24px;
      max-width: 700px; margin: 0 auto 32px;
    }
    .payment-method {
      background: #fff; border-radius: var(--radius); padding: 24px;
      text-align: center; box-shadow: var(--shadow);
    }
    .payment-method__title {
      font-size: 18px; font-weight: 900; color: var(--color-dark); margin-bottom: 8px;
    }
    .payment-method__note { font-size: 12px; color: var(--color-text-light); }
    .payment-brands { text-align: center; }
    .payment-brands img { max-width: 500px; }
    @media (max-width: 600px) {
      .payment-methods { grid-template-columns: 1fr; }
    }

    /* ===== CTA Banner Section ===== */
    .cta-banner-section {
      padding: 60px 0; background: var(--color-bg-purple-light); text-align: center;
    }
    .cta-banner-section h2 {
      font-size: clamp(20px, 3vw, 30px); font-weight: 900; color: var(--color-dark);
      margin-bottom: 24px;
    }
    .cta-banner-section .cta-img { max-width: 700px; margin: 0 auto 12px; }
    .cta-banner-section .cta-img a { display: block; }
    .cta-banner-section .cta-img img { width: 100%; border-radius: var(--radius); }
    .cta-banner-section .cta-note {
      font-size: 12px; color: var(--color-text-light);
    }

    /* ===== Subsidy Section ===== */
    .subsidy-section {
      padding: 80px 0; background: var(--color-bg-light);
    }
    .subsidy-section h2 {
      text-align: center; font-size: clamp(20px, 3vw, 30px); font-weight: 900;
      line-height: 1.5; margin-bottom: 16px; color: var(--color-dark);
    }
    .subsidy-section h2 .hl { color: #583FFD; }
    .subsidy-section .subsidy-sub {
      text-align: center; font-size: 14px; color: var(--color-text-light); margin-bottom: 40px;
    }
    .subsidy-grid {
      display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start;
      max-width: 1000px; margin: 0 auto;
    }
    .subsidy-info h4 {
      font-size: 20px; font-weight: 900; color: var(--color-dark);
      margin-bottom: 16px; padding-bottom: 12px; border-bottom: 3px solid var(--color-primary);
      display: inline-block;
    }
    .subsidy-info p { font-size: 14px; line-height: 1.9; margin-bottom: 16px; }
    .subsidy-info .note { font-size: 11px; color: var(--color-text-light); line-height: 1.7; }
    .subsidy-image { text-align: center; }
    .subsidy-image img { max-width: 100%; }
    @media (max-width: 768px) {
      .subsidy-grid { grid-template-columns: 1fr; }
      .subsidy-image { order: -1; }
    }

    /* ===== Training Details ===== */
    .training-section {
      padding: 60px 0; background: var(--color-bg-light);
    }
    .training-section h3 {
      font-size: clamp(18px, 2.5vw, 24px); font-weight: 900; color: var(--color-dark);
      margin-bottom: 16px;
    }
    .training-section p { font-size: 14px; line-height: 1.9; margin-bottom: 20px; }
    .training-detail { max-width: 900px; margin: 0 auto; }
    .training-detail h4 {
      font-size: 16px; font-weight: 900; color: var(--color-primary); margin-bottom: 8px;
      margin-top: 20px;
    }
    .training-detail .note { font-size: 12px; color: var(--color-text-light); }
    .training-curriculum {
      display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 20px;
    }
    .training-curriculum-box {
      background: #fff; border-radius: var(--radius); padding: 20px;
      font-size: 13px; line-height: 1.9;
    }
    .training-curriculum-box strong { display: block; margin-bottom: 8px; font-size: 14px; }
    @media (max-width: 768px) {
      .training-curriculum { grid-template-columns: 1fr; }
    }

    /* ===== Features Section ===== */
    .features-section {
      padding: 80px 0; background: var(--color-bg-purple-light);
    }
    .features-section .features-lead {
      text-align: center; font-size: 14px; color: var(--color-primary); font-weight: 700;
      margin-bottom: 8px;
    }
    .features-section .features-sub-lead {
      text-align: center; font-size: 18px; font-weight: 900; color: var(--color-primary);
      margin-bottom: 8px;
    }
    .features-section h2 {
      text-align: center; font-size: clamp(20px, 3vw, 30px); font-weight: 900;
      color: var(--color-dark); margin-bottom: 48px;
    }
    .feature-cards { display: flex; flex-direction: column; gap: 32px; max-width: 1000px; margin: 0 auto; }
    .feature-card {
      background: #fff; border-radius: var(--radius-lg); overflow: hidden;
      box-shadow: var(--shadow); display: grid; grid-template-columns: 1fr 1fr; gap: 0;
    }
    .feature-card__img { overflow: hidden; }
    .feature-card__img img { width: 100%; height: 100%; object-fit: cover; }
    .feature-card__content {
      padding: 32px; display: flex; flex-direction: column; justify-content: center;
    }
    .feature-card__content h3 {
      font-size: 20px; font-weight: 900; color: var(--color-dark);
      margin-bottom: 4px; padding-bottom: 12px; border-bottom: 2px solid var(--color-primary);
    }
    .feature-card__content p { font-size: 14px; line-height: 1.9; margin-top: 12px; }
    @media (max-width: 768px) {
      .feature-card { grid-template-columns: 1fr; }
      .feature-card__content { padding: 24px; }
    }

    /* ===== Comparison Table ===== */
    .comparison-section {
      padding: 60px 0; background: var(--color-bg-purple-light);
    }
    .comparison-section h2 {
      text-align: center; font-size: clamp(20px, 3vw, 28px); font-weight: 900;
      color: var(--color-dark); margin-bottom: 40px;
    }
    .comparison-section .comparison-img {
      max-width: 900px; margin: 0 auto; text-align: center;
    }
    .comparison-section .comparison-img img { width: 100%; }

    /* ===== Testimonials Carousel ===== */
    .testimonials-section { padding: 80px 0; background: #fff; }
    .testimonials-section h2 {
      text-align: center; font-size: clamp(20px, 3vw, 28px); font-weight: 900;
      color: var(--color-dark); margin-bottom: 12px;
    }
    .testimonials-section .testimonials-lead {
      text-align: center; font-size: 14px; color: var(--color-text-light); margin-bottom: 40px;
    }
    .testimonials-carousel {
      overflow-x: auto; display: flex; gap: 16px; padding: 8px 0 16px;
      scroll-snap-type: x mandatory; cursor: grab;
      -webkit-overflow-scrolling: touch;
    }
    .testimonials-carousel::-webkit-scrollbar { display: none; }
    .testimonials-carousel .slide {
      flex: 0 0 320px; scroll-snap-align: start;
    }
    .testimonials-carousel .slide img {
      width: 100%; border-radius: var(--radius); box-shadow: var(--shadow);
    }
    @media (max-width: 768px) {
      .testimonials-carousel .slide { flex: 0 0 280px; }
    }

    /* ===== FAQ Section ===== */
    .faq-section {
      padding: 80px 0; background: var(--color-bg-light);
    }
    .faq-section h2 {
      text-align: center; font-size: clamp(20px, 3vw, 28px); font-weight: 900;
      color: var(--color-dark); margin-bottom: 8px;
    }
    .faq-tag {
      font-family: var(--font-en); font-size: 13px; font-weight: 700;
      color: var(--color-primary); letter-spacing: 0.15em; text-align: center;
      display: block; margin-bottom: 40px;
    }
    .faq-category { max-width: 800px; margin: 0 auto 40px; }
    .faq-category h3 {
      font-size: 18px; font-weight: 900; margin-bottom: 16px;
    }
    .faq-category h3 .hl { color: var(--color-primary); font-size: 1.2em; }
    .faq-item {
      background: #fff; border-radius: var(--radius); margin-bottom: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05); overflow: hidden;
    }
    .faq-question {
      width: 100%; text-align: left; padding: 18px 48px 18px 20px; font-size: 15px;
      font-weight: 700; color: var(--color-dark); cursor: pointer;
      position: relative; display: flex; align-items: center; gap: 12px;
      background: #fff; transition: background 0.2s;
    }
    .faq-question:hover { background: #fafafa; }
    .faq-question .q-icon {
      width: 28px; height: 28px; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center;
      color: var(--color-primary); font-family: var(--font-en); font-weight: 900;
      font-size: 16px;
    }
    .faq-question::after {
      content: ''; position: absolute; right: 20px; top: 50%; transform: translateY(-50%) rotate(0deg);
      width: 10px; height: 10px; border-right: 2px solid var(--color-primary);
      border-bottom: 2px solid var(--color-primary);
      transform: translateY(-50%) rotate(45deg); transition: transform 0.3s;
    }
    .faq-item.is-open .faq-question::after {
      transform: translateY(-30%) rotate(-135deg);
    }
    .faq-answer {
      max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out;
      padding: 0 20px; font-size: 14px; line-height: 1.9; color: var(--color-text-light);
    }
    .faq-answer__inner { padding: 0 0 20px 40px; }

    /* ===== CTA Final Section ===== */
    .cta-final {
      padding: 80px 0; text-align: center; position: relative; overflow: hidden;
      background: linear-gradient(135deg, var(--color-dark) 0%, #2a2244 100%);
      color: #fff;
    }
    .cta-final::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
      background: linear-gradient(135deg, rgba(83,58,252,0.15), transparent);
    }
    .cta-final .cta-final__inner { position: relative; z-index: 1; }
    .cta-final .cta-lead {
      font-size: 15px; color: rgba(255,255,255,0.7); margin-bottom: 8px;
    }
    .cta-final h2 {
      font-size: clamp(22px, 3.5vw, 34px); font-weight: 900; margin-bottom: 24px;
    }
    .cta-final .cta-graphic { max-width: 700px; margin: 0 auto 32px; }
    .cta-final .cta-graphic img { width: 100%; }

    .cta-points { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 900px; margin: 0 auto 40px; }
    .cta-point {
      background: rgba(255,255,255,0.08); border-radius: var(--radius); padding: 20px;
      backdrop-filter: blur(8px);
    }
    .cta-point img {
      width: 100%; height: 160px; object-fit: cover; border-radius: 8px; margin-bottom: 12px;
    }
    .cta-point .point-label {
      font-family: var(--font-en); font-size: 11px; color: var(--color-accent);
      letter-spacing: 0.15em; font-weight: 700; margin-bottom: 4px;
    }
    .cta-point h3 { font-size: 14px; font-weight: 700; }
    .cta-final .cta-btn-wrap { margin-top: 16px; }
    .cta-final .cta-btn-wrap img { max-width: 500px; }
    @media (max-width: 768px) {
      .cta-points { grid-template-columns: 1fr; max-width: 360px; }
    }

    /* ===== Footer ===== */
    .footer { background: var(--color-dark); color: rgba(255,255,255,0.8); }
    .footer__main { padding: 60px 0 40px; }
    .footer__inner { max-width: var(--max-width); margin: 0 auto; padding: 0 24px; }
    .footer__grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; }
    .footer__brand__logo img { height: 32px; width: auto; filter: brightness(0) invert(1); margin-bottom: 16px; }
    .footer__brand__catch { font-size: 14px; margin-bottom: 20px; line-height: 1.8; }
    .footer__brand__cta a {
      display: inline-flex; align-items: center; justify-content: center;
      background: linear-gradient(135deg, #ffd464 0%, #ffb800 100%);
      color: var(--color-dark); font-weight: 700; font-size: 13px;
      padding: 10px 24px; border-radius: 50px; transition: all 0.2s;
    }
    .footer__brand__cta a:hover { transform: translateY(-2px); }
    .footer__col__ttl { font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.4); letter-spacing: 0.1em; margin-bottom: 16px; }
    .footer__col__list { display: flex; flex-direction: column; gap: 10px; }
    .footer__col__list li a { font-size: 13px; color: rgba(255,255,255,0.7); transition: color 0.2s; }
    .footer__col__list li a:hover { color: #fff; }
    .footer__bottom {
      border-top: 1px solid rgba(255,255,255,0.08);
      padding: 20px 0; text-align: center;
    }
    .footer__bottom p { font-size: 12px; color: rgba(255,255,255,0.3); }
    @media (max-width: 768px) {
      .footer__grid { grid-template-columns: 1fr 1fr; gap: 32px; }
      .footer__brand { grid-column: 1 / -1; }
    }
    @media (max-width: 480px) { .footer__grid { grid-template-columns: 1fr; } }

    /* ===== Fadein Animation ===== */
    .fadein { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease-out, transform 0.7s ease-out; }
    .fadein.is-visible { opacity: 1; transform: translateY(0); }
` }} />


{/* ===== HEADER ===== */}
<header className="header">
  <div className="header__inner">
    {/* ロゴ + ナビ カード */}
    <div className="header__bar">
      <div className="header__logo">
        <a href="/bytech">
          <img src="/bytech/assets/images/logo-black.svg" alt="バイテック生成AI" />
        </a>
      </div>
      <nav className="header__nav">
        <ul className="header__nav__list">
          <li><a href="/support">サポート詳細</a></li>
          <li className="has-mega">
            <a href="/#courses">コース一覧</a>
            <div className="header__mega" role="menu" aria-label="コース一覧">
              <div className="header__mega__intro">
                <div className="header__mega__image">
                  <img src="/bytech/assets/images/mega-course-bg.webp" alt="" />
                </div>
                <div className="header__mega__heading">
                  <div className="header__mega__ttl">コース一覧</div>
                  <div className="header__mega__sub">COURSES</div>
                </div>
              </div>
              <div className="header__mega__grid">
                <a className="header__mega__card" href="/chatgpt-master">
                  <span className="header__mega__card-label">ChatGPTマスターコース</span>
                  <span className="header__mega__arrow" aria-hidden="true">›</span>
                </a>
                <a className="header__mega__card" href="/gemini-master">
                  <span className="header__mega__card-label">Geminiマスターコース</span>
                  <span className="header__mega__arrow" aria-hidden="true">›</span>
                </a>
                <a className="header__mega__card" href="/copilot-master">
                  <span className="header__mega__card-label">Copilotマスターコース</span>
                  <span className="header__mega__arrow" aria-hidden="true">›</span>
                </a>
                <a className="header__mega__card" href="/dify-master">
                  <span className="header__mega__card-label">Difyマスターコース</span>
                  <span className="header__mega__arrow" aria-hidden="true">›</span>
                </a>
                <a className="header__mega__card" href="/notebooklm-master">
                  <span className="header__mega__card-label">NotebookLMマスターコース</span>
                  <span className="header__mega__arrow" aria-hidden="true">›</span>
                </a>
                <a className="header__mega__card" href="/claude-master">
                  <span className="header__mega__card-label">Claudeマスターコース</span>
                  <span className="header__mega__arrow" aria-hidden="true">›</span>
                </a>
                <a className="header__mega__card" href="/business-worker">
                  <span className="header__mega__card-label">ビジネスワーカーコース</span>
                  <span className="header__mega__arrow" aria-hidden="true">›</span>
                </a>
                <a className="header__mega__card" href="/ai-writer">
                  <span className="header__mega__card-label">AIウェブライターコース</span>
                  <span className="header__mega__arrow" aria-hidden="true">›</span>
                </a>
                <a className="header__mega__card" href="/ai-image-creator">
                  <span className="header__mega__card-label">AI画像クリエイターコース</span>
                  <span className="header__mega__arrow" aria-hidden="true">›</span>
                </a>
                <a className="header__mega__card" href="/ai-movie-creator">
                  <span className="header__mega__card-label">AI動画クリエイターコース</span>
                  <span className="header__mega__arrow" aria-hidden="true">›</span>
                </a>
                <a className="header__mega__card" href="/generative-ai-passport">
                  <span className="header__mega__card-label">生成AIパスポートコース</span>
                  <span className="header__mega__arrow" aria-hidden="true">›</span>
                </a>
              </div>
            </div>
          </li>
          <li><a href="/plan">料金プラン</a></li>
          <li><a href="https://bytech.jp/blog/category/interview/" target="_blank">受講生インタビュー</a></li>
          <li><a href="#faq">よくある質問</a></li>
          <li className="header__nav__divider" aria-hidden="true" />
          <li><a href="https://biz.bytech.jp/" target="_blank">法人研修 ↗</a></li>
        </ul>
      </nav>

      {/* CTAボタン（SVG画像＋パルスアニメ） */}
      <a href="/counseling" className="header__cta">
        <img src="/bytech/assets/images/cta-consultation.svg" alt="まずは無料で相談してみる" />
      </a>

      {/* ハンバーガーボタン（SP用） */}
      <button className="header__hamburger" id="headerHamburger" aria-label="メニューを開く" aria-expanded="false">
        <span /><span /><span />
      </button>
    </div>

    {/* SP ドロワーナビ */}
    <nav className="header__nav-drawer" id="headerNavDrawer" aria-hidden="true">
      <ul className="header__nav-drawer__list">
        <li><a href="/support">サポート詳細</a></li>
        <li className="header__nav-drawer__item">
          <button className="header__nav-drawer__toggle">コース一覧 <span className="arrow">▼</span></button>
          <ul className="header__nav-drawer__sub">
            <li><a href="/chatgpt-master">ChatGPTマスターコース</a></li>
            <li><a href="/gemini-master">Geminiマスターコース</a></li>
            <li><a href="/copilot-master">Copilotマスターコース</a></li>
            <li><a href="/dify-master">DIfyマスターコース</a></li>
            <li><a href="/notebooklm-master">NotebookLMマスターコース</a></li>
            <li><a href="/business-worker">ビジネスワーカーコース</a></li>
            <li><a href="/ai-writer">AIウェブライターコース</a></li>
            <li><a href="/ai-image-creator">AI画像クリエイターコース</a></li>
            <li><a href="/ai-movie-creator">AI動画クリエイターコース</a></li>
            <li><a href="/generative-ai-passport">生成AIパスポート試験対策コース</a></li>
          </ul>
        </li>
        <li><a href="/plan">料金プラン</a></li>
        <li><a href="https://bytech.jp/blog/category/interview/">受講生インタビュー</a></li>
        <li><a href="#faq">よくある質問</a></li>
      </ul>
    </nav>
  </div>
</header>

{/* ===== HERO ===== */}
<section className="plan-hero">
  <div className="plan-hero__inner">
    <div className="plan-hero__breadcrumb">
      <Link href="/">HOME</Link> &#8227; 料金プラン
    </div>
    <h1>バイテックの料金・プラン</h1>
    <p>受講目的や不安なポイントに合わせた2つのプランをご用意しております</p>
  </div>
</section>

{/* ===== PLAN CARDS ===== */}
<section className="plan-section" id="plans">
  <div className="u-inner">
    <div className="sec-header fadein">
      <span className="sec-header__tag">PLAN</span>
      <h2 className="sec-header__ttl">バイテックの料金・プラン</h2>
      <p className="sec-header__sub">LITEプラン・PROプランの2つのプランを提供しています</p>
    </div>

    {/* Mobile Tabs */}
    <div className="plan-tabs">
      <button className="active" data-plan="lite">LITEプラン</button>
      <button data-plan="pro">PROプラン</button>
    </div>

    <div className="plan-cards fadein">
      {/* LITE PLAN */}
      <div className="plan-card plan-card--lite" data-plan-card="lite">
        <div className="plan-card__header">
          <img src="/bytech/assets/images/plan/LITE.svg" alt="LITE PLAN" className="plan-card__icon" />
          <div className="plan-card__name">LITE PLAN</div>
          <div className="plan-card__name-jp">ライトプラン</div>
          <div className="plan-card__target"><span className="hl">自分のペース</span>で学習したい方向け</div>
        </div>
        <div className="plan-card__body">
          <div className="plan-card__price-img">
            <img src="/bytech/assets/images/plan/lite_plan.svg" alt="LITEプラン 178,000円" />
          </div>
          <div className="plan-card__detail-img">
            <img src="/bytech/assets/images/plan/lite_plan2.svg" alt="LITEプラン料金詳細" />
          </div>
          <div className="plan-card__divider">このプランで受けれるサービス</div>
          <div className="plan-card__services">
            <img src="/bytech/assets/images/plan/LITE.svg" alt="LITEプラン 受けれるサービス" />
          </div>
          <div className="plan-card__cta">
            <a href="https://form.run/@ds-form">
              <svg viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"/></svg>
              今すぐ受講を申し込む
            </a>
          </div>
        </div>
      </div>

      {/* PRO PLAN */}
      <div className="plan-card plan-card--pro" data-plan-card="pro">
        <div className="plan-card__header">
          <img src="/bytech/assets/images/plan/PRO.svg" alt="PRO PLAN" className="plan-card__icon" />
          <div className="plan-card__name">PRO PLAN</div>
          <div className="plan-card__name-jp">プロプラン</div>
          <div className="plan-card__target"><span className="hl">専任のAIメンター</span>が伴走サポート</div>
        </div>
        <div className="plan-card__body">
          <div className="plan-card__price-img">
            <img src="/bytech/assets/images/plan/298000.svg" alt="PROプラン 298,000円" />
          </div>
          <div className="plan-card__detail-img">
            <img src="/bytech/assets/images/plan/pro料金詳細.svg" alt="PROプラン料金詳細" />
          </div>
          <div className="plan-card__divider">このプランで受けれるサービス</div>
          <div className="plan-card__services">
            <img src="/bytech/assets/images/plan/PRO.svg" alt="PROプラン 受けれるサービス" />
          </div>
          <div className="plan-card__cta">
            <a href="/counseling">
              <svg viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"/></svg>
              まずは無料相談を予約する
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ===== PAYMENT METHODS ===== */}
<section className="payment-section fadein">
  <div className="u-inner">
    <h3>お支払い方法は、2種類ご用意しています</h3>
    <div className="payment-methods">
      <div className="payment-method">
        <div className="payment-method__title">銀行振込</div>
        <p className="payment-method__note">※ご一括の場合のみ銀行振込を受け付けております。</p>
      </div>
      <div className="payment-method">
        <div className="payment-method__title">クレジットカード</div>
        <p className="payment-method__note">※分割回数、金利はカード会社によって異なります。</p>
      </div>
    </div>
    <div className="payment-brands">
      <img src="/bytech/assets/images/plan/グループ-1099.svg" alt="VISA / Mastercard / JCB / AMEX / Diners" />
    </div>
  </div>
</section>

{/* ===== CTA BANNER (Mid) ===== */}
<section className="cta-banner-section fadein">
  <div className="u-inner">
    <h2>迷ったら無料カウンセリングへ</h2>
    <div className="cta-img">
      <a href="/counseling">
        <img src="/bytech/assets/images/plan/CTA_無料説明会-3-1024x233.webp" alt="無料説明会に申し込む" />
      </a>
    </div>
    <p className="cta-note">※ 無理な勧誘は行っていません。</p>
  </div>
</section>

{/* ===== SUBSIDY SECTION ===== */}
<section className="subsidy-section fadein" id="subsidy">
  <div className="u-inner">
    <h2>バイテックは<br /><span className="hl">厚生労働省の「人材開発支援助成金」</span>の申請が可能です。</h2>
    <p className="subsidy-sub">法人契約でお一人での受講の方は&quot;個人研修プラン&quot;のご案内が可能なので、ご相談ください！</p>
    <div className="subsidy-grid">
      <div className="subsidy-info">
        <h4>人材開発支援助成金とは</h4>
        <p>従業員に<strong>新しい知識や技術</strong>を身につけさせるための教育・研修にかかる費用の一部を、<strong>国が負担してくれる</strong>仕組みです。この助成金を活用することで、<strong>企業は自社の負担</strong>を抑えながら、従業員のスキル向上に取り組むことができます。</p>
        <p className="note">※本補助金の交付を保証するものではございません。本記載内容は、令和5年6月26日時点で厚生労働省から公表されている資料をもとに作成しております。実際に助成金を申請される際は、必ず厚生労働省のホームページ等で最新の情報をご確認ください。</p>
      </div>
      <div className="subsidy-image">
        <img src="/bytech/assets/images/plan/助成金活用イメージ.svg" alt="助成金活用イメージ" />
      </div>
    </div>
  </div>
</section>

{/* ===== TRAINING DETAILS ===== */}
<section className="training-section fadein">
  <div className="u-inner">
    <div className="training-detail">
      <h3>バイテックAI活用研修</h3>
      <p>AIを実務に落とし込むための実践型研修です。<strong>ChatGPTなどの生成AIツール</strong>を使い、資料作成、メール・企画書作成、リサーチ、データ整理など<strong>日常業務の生産性を高める具体的な手法</strong>を演習中心で習得。</p>

      <h4>訓練実施方法</h4>
      <p>eラーニングとオンラインによるライブ研修を組み合わせたブレンディッドラーニング形式で実施します。</p>

      <h4>訓練形式</h4>
      <p>合計18時間（eラーニング: 13.3時間、オンライン研修: 8時間）</p>

      <h4>受講費用</h4>
      <p>298,000円（税抜）/ 1名様あたり<br />内訳： eラーニング 148,000円、オンライン研修 150,000円</p>

      <h4>訓練の内容</h4>
      <p className="note">※ 受講コースはカスタマイズできますので、ご相談ください。</p>

      <div className="training-curriculum">
        <div className="training-curriculum-box">
          <strong>eラーニング</strong>
          1：ChatGPTマスターコース｜5.3時間<br />
          2：ビジネスワーカーコース｜8時間
        </div>
        <div className="training-curriculum-box">
          <strong>オンライン研修</strong>
          第1回：業務の棚卸・フローの言語化(前半)｜1時間<br />
          第2回：業務の棚卸・フローの言語化(後半)｜1時間<br />
          第3回：AI業務活用課題の実施(前半)｜1時間<br />
          第4回：AI業務活用課題の実施(後半)｜1時間<br />
          第5回：既存業務への導入実践(前半)｜1時間<br />
          第6回：既存業務への導入実践(後半)｜1時間<br />
          第7回：業務での運用モニタリング(前半)｜1時間<br />
          第8回：業務での運用モニタリング(後半)｜1時間
        </div>
      </div>
    </div>
  </div>
</section>

{/* ===== FEATURES SECTION ===== */}
<section className="features-section fadein">
  <div className="u-inner">
    <p className="features-lead">&#x5c; なんと無期限！ずーっと学べてこんなにお得！／</p>
    <p className="features-sub-lead">追加料金なしでずっと使える！</p>
    <h2>カリキュラム・コミュニティ・案件斡旋サポート</h2>

    <div className="feature-cards">
      {/* Feature 1: Curriculum */}
      <div className="feature-card fadein">
        <div className="feature-card__img">
          <img src="/bytech/assets/images/plan/1_特徴-1024x421.webp" alt="カリキュラムの無期限視聴" />
        </div>
        <div className="feature-card__content">
          <h3>カリキュラムの無期限視聴</h3>
          <p><strong>約600以上</strong>の最新のAIスキルが学べるカリキュラムを<strong>無期限で��聴可能！</strong>追加教材も見れるので常に最新のAIスキルが学べる！</p>
        </div>
      </div>

      {/* Feature 2: Community */}
      <div className="feature-card fadein">
        <div className="feature-card__img">
          <img src="/bytech/assets/images/plan/2_b-crew-1-1024x421.webp" alt="コミュニティの参加" />
        </div>
        <div className="feature-card__content">
          <h3>コミュニティの参加</h3>
          <p>様々なコンテンツの体験や横の繋がりを作れるバイテックのコミュニティサービス「b-Crew」へ永年無料で参加が可能！</p>
        </div>
      </div>

      {/* Feature 3: Job Matching */}
      <div className="feature-card fadein">
        <div className="feature-card__img">
          <img src="/bytech/assets/images/plan/b-works2-1024x640.webp" alt="案件斡旋サポートの活用" />
        </div>
        <div className="feature-card__content">
          <h3>案件斡旋サポートの活用</h3>
          <p>AIライティングからプロンプトエンジニア・AI講師まで<strong>様々なAI副業案件</strong>をマッチングする「b-Works」の使用が可能！</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ===== COMPARISON TABLE ===== */}
<section className="comparison-section fadein">
  <div className="u-inner">
    <h2>他AIスクールと比べてこんなにお得</h2>
    <div className="comparison-img">
      <img src="/bytech/assets/images/plan/比較表-1.svg" alt="他AIスクールとの比較表" />
    </div>
  </div>
</section>

{/* ===== TESTIMONIALS ===== */}
<section className="testimonials-section fadein">
  <div className="u-inner">
    <p className="testimonials-lead">これまでに、2000人以上の生成AI技術の習得をサポート</p>
    <h2>たくさんの嬉しいコメントをいただいております</h2>
  </div>
  <div className="testimonials-carousel" style={{ 'paddingLeft': 'calc((100vw - 1200px) / 2 + 24px)' }}>
    <div className="slide"><img src="/bytech/assets/images/plan/青山さん-1.webp" alt="青山さん 受講生の声" /></div>
    <div className="slide"><img src="/bytech/assets/images/plan/田村さん-2048x2033.webp" alt="田村さん 受講生の声" /></div>
    <div className="slide"><img src="/bytech/assets/images/plan/鈴木さん-2048x2027.webp" alt="鈴木さん 受講生の声" /></div>
    <div className="slide"><img src="/bytech/assets/images/plan/遠藤さん-2048x2035.webp" alt="遠藤さん 受講生の声" /></div>
    <div className="slide"><img src="/bytech/assets/images/plan/青山さん-1-1-2048x2030.webp" alt="青山さん 受講生の声" /></div>
  </div>
</section>

{/* ===== FAQ ===== */}
<section className="faq-section fadein" id="faq">
  <div className="u-inner">
    <h2>料金・プランに関する質問</h2>
    <span className="faq-tag">FAQ</span>

    {/* Plan FAQ */}
    <div className="faq-category">
      <h3><span className="hl">プラン</span>について</h3>

      <div className="faq-item">
        <button className="faq-question">
          <span className="q-icon">Q</span>
          LITEプランとPROプランの違いは？
        </button>
        <div className="faq-answer">
          <div className="faq-answer__inner">
            <p>LITEプランは学習カリキュラムとチャットサポートのみのプランになります。PROプランはマンツーマンサポートと案件サポートがある手厚いプランとなります。</p>
          </div>
        </div>
      </div>

      <div className="faq-item">
        <button className="faq-question">
          <span className="q-icon">Q</span>
          LITEプランからPROプランへの乗り換えはできますか？
        </button>
        <div className="faq-answer">
          <div className="faq-answer__inner">
            <p>はい、可能です。乗り換え手数料が＋3万円かかってしまいますが、途中でのPROプラン移行は可能となっております。</p>
          </div>
        </div>
      </div>

      <div className="faq-item">
        <button className="faq-question">
          <span className="q-icon">Q</span>
          案件獲得保証プランは必ず案件を取れますか？
        </button>
        <div className="faq-answer">
          <div className="faq-answer__inner">
            <p>はい、しっかりと学習計画と実践課題をこなしていただければ、案件獲得は可能です。また、当スクールでは「b-Works」という案件斡旋サポートがあるので、在学・卒業後必ず案件の共有もさせていただきます</p>
          </div>
        </div>
      </div>

      <div className="faq-item">
        <button className="faq-question">
          <span className="q-icon">Q</span>
          サポートの延長プランはありますか？
        </button>
        <div className="faq-answer">
          <div className="faq-answer__inner">
            <p>はい、チャットサポートのみ・マンツーマンサポートのみ・チャット＋マンツーマンサポートの3つの延長プランがございます。</p>
          </div>
        </div>
      </div>

      <div className="faq-item">
        <button className="faq-question">
          <span className="q-icon">Q</span>
          どちらのプランもカリキュラムはずっと見れますか？
        </button>
        <div className="faq-answer">
          <div className="faq-answer__inner">
            <p>はい、LITEプランもPROプランも学習カリキュラムは新しく追加された教材、アップデートされた教材含めて無期限視聴可能です。</p>
          </div>
        </div>
      </div>
    </div>

    {/* Pricing FAQ */}
    <div className="faq-category">
      <h3><span className="hl">料金</span>について</h3>

      <div className="faq-item">
        <button className="faq-question">
          <span className="q-icon">Q</span>
          キャンペーン等はありますか？
        </button>
        <div className="faq-answer">
          <div className="faq-answer__inner">
            <p>はい、定期的にキャンペーンは開催しておりますので、サービスページをご確認ください。</p>
          </div>
        </div>
      </div>

      <div className="faq-item">
        <button className="faq-question">
          <span className="q-icon">Q</span>
          今後値上げの予定はありますか？
        </button>
        <div className="faq-answer">
          <div className="faq-answer__inner">
            <p>はい、サービスの拡充やサポートの強化等をしておりますので、予告なしに値上げすることがございます。</p>
          </div>
        </div>
      </div>

      <div className="faq-item">
        <button className="faq-question">
          <span className="q-icon">Q</span>
          なぜ他のAIスクールよりも安いのでしょうか？
        </button>
        <div className="faq-answer">
          <div className="faq-answer__inner">
            <p>社内のオペレーション業務の半分以上をAIで代替していることにより、提供価格を下げることが可能となっております。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ===== CTA FINAL ===== */}
<section className="cta-final fadein">
  <div className="u-inner cta-final__inner">
    <p className="cta-lead">生成AI技術を副業や業務に活用するための疑問や不安を解消できる！</p>
    <h2>無料個別カウンセリングを毎日開催中！</h2>
    <div className="cta-graphic">
      <img src="/bytech/assets/images/plan/グループ-9076.svg" alt="CTA訴求" />
    </div>

    <div className="cta-points">
      <div className="cta-point">
        <img src="/bytech/assets/images/plan/u2146712749_Japanese_businesswoman_in_a_modern_office_meeting_d1df5e80-1c79-42b5-9f75-aab5e097996f_3-1024x683.webp" alt="POINT1" />
        <div className="point-label">POINT1</div>
        <h3>受講前の悩みや不安を気軽に相談できる</h3>
      </div>
      <div className="cta-point">
        <img src="/bytech/assets/images/plan/u2146712749_Japanese_woman_studying_at_a_bright_home_office_d_46d380c8-51ff-4213-8940-9cb994febce9_0-1024x683.webp" alt="POINT2" />
        <div className="point-label">POINT2</div>
        <h3>あなたに合った生成AIの活用方法を知れる</h3>
      </div>
      <div className="cta-point">
        <img src="/bytech/assets/images/plan/u2146712749_Japanese_young_professional_discovering_personali_5d4efb6e-0ea7-4193-be6d-d5e12a9cbfea_1-1024x683.webp" alt="POINT3" />
        <div className="point-label">POINT3</div>
        <h3>生成AIを活用した副業でのマネタイズについて知れる</h3>
      </div>
    </div>

    <div className="cta-btn-wrap">
      <a href="/counseling">
        <img src="/bytech/assets/images/plan/CTA_無料説明会-3-1024x233.webp" alt="無料説明会に申し込む" />
      </a>
    </div>
  </div>
</section>

{/* ===== FOOTER ===== */}
<footer className="footer">
  <div className="footer__main">
    <div className="footer__inner">
      <div className="footer__grid">
        <div className="footer__brand">
          <div className="footer__brand__logo">
            <img src="/bytech/assets/images/plan/生成AIロゴ黒.svg" alt="バイテック生成AI" />
          </div>
          <p className="footer__brand__catch">最短2ヶ月で、<br />生成AI活用のプロに。</p>
          <div className="footer__brand__cta">
            <a href="/counseling">無料カウンセリングに申し込む</a>
          </div>
        </div>
        <div>
          <div className="footer__col__ttl">コース一覧 - 主要AI別</div>
          <ul className="footer__col__list">
            <li><a href="/chatgpt-master">ChatGPTマスターコース</a></li>
            <li><a href="/gemini-master">Geminiマスターコース</a></li>
            <li><a href="/copilot-master">Copilotマスターコース</a></li>
            <li><a href="/dify-master">Difyマスターコース</a></li>
            <li><a href="/notebooklm-master">NotebookLMマスターコース</a></li>
          </ul>
        </div>
        <div>
          <div className="footer__col__ttl">コース一覧 - 目的別</div>
          <ul className="footer__col__list">
            <li><a href="/ai-writer">AIウェブライターコース</a></li>
            <li><a href="/ai-movie-creator">AI動画クリエイターコース</a></li>
            <li><a href="/ai-image-creator">AI画像クリエイターコース</a></li>
            <li><a href="/business-worker">ビジネスワーカーコース</a></li>
            <li><a href="/generative-ai-passport">生成AIパスポートコース</a></li>
          </ul>
        </div>
        <div>
          <div className="footer__col__ttl">サポート</div>
          <ul className="footer__col__list">
            <li><a href="/membership-terms">会員規約</a></li>
            <li><a href="/refund-policy">返金ポリシー</a></li>
            <li><a href="https://generative-ai.bytech.jp/job-membership-terms/" target="_blank">案件獲得保証プラン利用規約</a></li>
            <li><a href="/specified_commercial">特定商取引法に関する表示</a></li>
            <li><a href="/system-requirements">システム要件</a></li>
          </ul>
          <div className="footer__col__ttl" style={{ 'marginTop': '24px' }}>会社情報</div>
          <ul className="footer__col__list">
            <li><a href="https://www.librex.co.jp/" target="_blank">会社概要</a></li>
            <li><a href="/privacy-policy">プライバシーポリシー</a></li>
          </ul>
          <div className="footer__col__ttl" style={{ 'marginTop': '24px' }}>関連サービス</div>
          <ul className="footer__col__list">
            <li><a href="https://biz.bytech.jp/" target="_blank">法人向けAI研修【バイテックBiz】&#8599;</a></li>
            <li><a href="https://bytech.jp/blog/" target="_blank">個人向けAIメディア【バイテックBLOG】&#8599;</a></li>
            <li><a href="https://biz.bytech.jp/blog/" target="_blank">企業向けAIメディア【バイテックBLOG Biz】&#8599;</a></li>
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

{/* ===== STICKY CTA ===== */}
<div className="sticky-cta">
  <a href="/counseling" className="btn-cta-main">&#128221; 無料で相談してみる</a>
</div>

{/* ===== JAVASCRIPT ===== */}





      {/* 共有ヘッダーJS（ハンバーガー/ドロワー/メガメニュー） */}
      <Script id="bytech-lp-scripts" src="/bytech/assets/js/bytech-lp.js" strategy="afterInteractive" />

      <Script id="page-inline-script" strategy="afterInteractive">
        {`// Fadein on scroll
  const fadeinEls = document.querySelectorAll('.fadein');
  const fadeinObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        fadeinObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  fadeinEls.forEach(el => fadeinObserver.observe(el));

  // Sticky CTA visibility
  const stickyCta = document.querySelector('.sticky-cta');
  const stickyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        stickyCta.classList.add('is-visible');
      } else {
        stickyCta.classList.remove('is-visible');
      }
    });
  });
  const heroSection = document.querySelector('.plan-hero');
  if (heroSection && stickyCta) stickyObserver.observe(heroSection);

  // FAQ Accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const answer = btn.nextElementSibling;
      const isOpen = item.classList.contains('is-open');

      // Close all others in same category
      const category = item.closest('.faq-category');
      category.querySelectorAll('.faq-item.is-open').forEach(openItem => {
        openItem.classList.remove('is-open');
        openItem.querySelector('.faq-answer').style.maxHeight = '0';
      });

      if (!isOpen) {
        item.classList.add('is-open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // Plan Tabs (Mobile)
  document.querySelectorAll('.plan-tabs button').forEach(btn => {
    btn.addEventListener('click', () => {
      const plan = btn.dataset.plan;
      document.querySelectorAll('.plan-tabs button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('[data-plan-card]').forEach(card => {
        if (card.dataset.planCard === plan) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });`}
      </Script>
    </>
  )
}
