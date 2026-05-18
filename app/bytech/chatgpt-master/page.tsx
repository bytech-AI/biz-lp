'use client'

import Script from 'next/script'

export default function ChatgptMasterPage() {
  return (
    <>
      <link rel="icon" type="image/png" href="/bytech/assets/images/favicon.png" />
      <link rel="apple-touch-icon" href="/bytech/assets/images/favicon.png" />
      <style dangerouslySetInnerHTML={{ __html: `
    /* ===== CSS Custom Properties ===== */
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
    .highlight-box { background: var(--color-primary); color: #fff; display: inline-block; padding: 2px 12px; border-radius: 4px; }
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

    /* ===== Header ===== */
    .header {
      position: fixed; top: 0; left: 0; right: 0; z-index: 900;
      background: rgba(255,255,255,0.98); backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(0,0,0,0.06);
      height: 70px; display: flex; align-items: center;
    }
    .header__inner {
      max-width: var(--max-width); margin: 0 auto; padding: 0 24px;
      width: 100%; display: flex; align-items: center; gap: 40px;
    }
    .header__logo img { height: 36px; width: auto; }
    .header__nav { display: flex; align-items: center; gap: 32px; margin-left: auto; }
    .header__nav__list { display: flex; align-items: center; gap: 28px; }
    .header__nav__list li { position: relative; }
    .header__nav__list a { font-size: 13px; font-weight: 500; color: var(--color-text); transition: color 0.2s; white-space: nowrap; }
    .header__nav__list a:hover { color: var(--color-primary); }
    .header__nav__cta { display: flex; gap: 10px; }
    .header__cta-btn {
      padding: 10px 20px; border-radius: 50px; font-size: 13px; font-weight: 700;
      display: inline-flex; align-items: center; white-space: nowrap;
    }
    .header__cta-btn--outline { border: 2px solid var(--color-primary); color: var(--color-primary); }
    .header__cta-btn--fill { background: var(--color-primary); color: #fff; }
    .header__hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; }
    .header__hamburger span { width: 24px; height: 2px; background: var(--color-text); transition: all 0.3s; display: block; }
    @media (max-width: 1024px) { .header__nav__list { display: none; } }
    @media (max-width: 768px) {
      .header__hamburger { display: flex; margin-left: auto; }
      .header__nav__cta { display: none; }
    }

    /* ===== Section Header Common ===== */
    .sec-header { text-align: center; margin-bottom: 56px; }
    .sec-header__tag {
      font-family: var(--font-en); font-size: 13px; font-weight: 700;
      color: var(--color-primary); letter-spacing: 0.15em; margin-bottom: 8px; display: block;
    }
    .sec-header__ttl { font-size: clamp(22px, 3.5vw, 34px); font-weight: 900; line-height: 1.4; }
    .sec-header__sub { font-size: 15px; color: var(--color-text-light); margin-top: 12px; line-height: 1.8; }

    /* ===== Hero / FV ===== */
    .course-hero {
      padding-top: 70px;
      background: linear-gradient(135deg, #e8e4ff 0%, #d5ccff 40%, #c4b8ff 100%);
      position: relative; overflow: hidden;
    }
    .course-hero__inner {
      max-width: var(--max-width); margin: 0 auto; padding: 60px 24px 80px;
      display: flex; align-items: center; gap: 48px;
    }
    .course-hero__content { flex: 1; }
    .course-hero__badge {
      display: inline-block; background: var(--color-primary); color: #fff;
      padding: 4px 14px; font-size: 14px; font-weight: 700; border-radius: 4px;
      margin-bottom: 16px;
    }
    .course-hero__ttl {
      font-size: clamp(28px, 4vw, 44px); font-weight: 900; line-height: 1.3;
      color: var(--color-dark); margin-bottom: 24px;
    }
    .course-hero__meta {
      display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 32px;
    }
    .course-hero__meta-item {
      display: flex; align-items: center; gap: 8px;
    }
    .course-hero__meta-label {
      display: inline-block; background: var(--color-primary); color: #fff;
      padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 700;
      white-space: nowrap;
    }
    .course-hero__meta-value { font-size: 15px; font-weight: 700; color: var(--color-dark); }
    .course-hero__image { flex: 1; max-width: 500px; }
    .course-hero__image img { border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); }
    @media (max-width: 768px) {
      .course-hero__inner { flex-direction: column; padding: 40px 24px 48px; gap: 32px; }
      .course-hero__image { max-width: 100%; }
    }

    /* ===== About ===== */
    .about { padding: 80px 0; background: var(--color-white); }
    .about__inner { max-width: var(--max-width); margin: 0 auto; padding: 0 24px; }
    .about__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
    .about__text h3 {
      font-size: clamp(20px, 2.5vw, 28px); font-weight: 900; line-height: 1.5;
      margin-bottom: 20px;
    }
    .about__text p { font-size: 15px; line-height: 1.9; color: var(--color-text-light); }
    .about__features {
      display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 32px;
    }
    .about__feature-card {
      background: var(--color-bg-purple-light); border-radius: var(--radius);
      padding: 20px; text-align: center;
    }
    .about__feature-card svg { width: 32px; height: 32px; fill: var(--color-primary); margin-bottom: 8px; }
    .about__feature-card p { font-size: 14px; font-weight: 700; line-height: 1.5; }
    .about__image img { border-radius: var(--radius-lg); }
    @media (max-width: 768px) {
      .about__grid { grid-template-columns: 1fr; }
    }

    /* ===== Recommend ===== */
    .recommend {
      padding: 60px 0; background: var(--color-bg-purple-light);
    }
    .recommend__inner { max-width: var(--max-width); margin: 0 auto; padding: 0 24px; }
    .recommend__divider {
      text-align: center; margin-bottom: 24px;
      font-family: var(--font-en); font-size: 13px; font-weight: 700;
      color: var(--color-primary); letter-spacing: 0.15em;
    }
    .recommend__ttl { text-align: center; font-size: clamp(20px, 3vw, 28px); font-weight: 900; margin-bottom: 32px; }
    .recommend__cards {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
    }
    .recommend__card {
      background: var(--color-white); border-radius: var(--radius);
      padding: 28px 24px; text-align: center; box-shadow: var(--shadow);
      font-size: 15px; font-weight: 700; line-height: 1.8;
    }
    .recommend__card .hl {
      background: var(--color-primary); color: #fff; padding: 2px 10px;
      border-radius: 4px; display: inline;
    }
    @media (max-width: 768px) {
      .recommend__cards { grid-template-columns: 1fr; }
    }

    /* ===== Curriculum ===== */
    .curriculum { padding: 80px 0; background: var(--color-white); }
    .curriculum__inner { max-width: var(--max-width); margin: 0 auto; padding: 0 24px; }
    .curriculum__header { text-align: center; margin-bottom: 48px; }
    .curriculum__header .tag {
      font-family: var(--font-en); font-size: 13px; font-weight: 700;
      color: var(--color-primary); letter-spacing: 0.15em; display: block; margin-bottom: 8px;
    }
    .curriculum__header h2 { font-size: clamp(22px, 3.5vw, 34px); font-weight: 900; }

    .chapter {
      margin-bottom: 32px; background: #fff;
    }
    .chapter__inner {
      display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: start;
    }
    /* Left: Carousel */
    .chapter__carousel {
      position: relative; border-radius: 16px; overflow: hidden;
      background: var(--color-bg-purple-light);
    }
    .chapter__carousel-track { position: relative; aspect-ratio: 4/3; }
    .chapter__carousel-track img {
      position: absolute; inset: 0; width: 100%; height: 100%;
      object-fit: cover; display: none;
    }
    .chapter__carousel-track img.is-active { display: block; }
    .chapter__carousel-arrow {
      position: absolute; top: 50%; transform: translateY(-50%);
      width: 32px; height: 32px; border: none;
      background: none; color: var(--color-primary); font-size: 28px;
      cursor: pointer; z-index: 2; line-height: 1;
    }
    .chapter__carousel-arrow--prev { left: -36px; }
    .chapter__carousel-arrow--next { right: -36px; }
    .chapter__carousel-dots {
      display: flex; justify-content: center; gap: 8px; padding: 12px 0;
    }
    .chapter__carousel-dot {
      width: 8px; height: 8px; border-radius: 50%; border: none; padding: 0;
      background: #ccc; cursor: pointer;
    }
    .chapter__carousel-dot.is-active { background: #333; }
    /* Right: Info + Lessons */
    .chapter__content {}
    .chapter__title {
      font-size: clamp(18px, 2.5vw, 24px); font-weight: 900; line-height: 1.4; margin-bottom: 8px;
    }
    .chapter__meta {
      font-size: 14px; color: var(--color-text); font-weight: 700; margin-bottom: 20px;
    }
    .chapter__lessons { list-style: none; padding: 0; margin: 0; }
    .chapter__lessons li {
      padding: 12px 16px; border: 1px solid #eee; border-radius: 8px;
      font-size: 14px; color: var(--color-text); margin-bottom: 8px;
      background: #fff;
    }
    .chapter__lessons li:last-child { margin-bottom: 0; }
    @media (max-width: 768px) {
      .chapter__inner { grid-template-columns: 1fr; gap: 20px; }
      .chapter__carousel-arrow--prev { left: 4px; background: rgba(255,255,255,0.7); border-radius: 50%; width: 28px; height: 28px; font-size: 18px; display: flex; align-items: center; justify-content: center; }
      .chapter__carousel-arrow--next { right: 4px; background: rgba(255,255,255,0.7); border-radius: 50%; width: 28px; height: 28px; font-size: 18px; display: flex; align-items: center; justify-content: center; }
    }

    /* ===== Skills Section (Exercises) ===== */
    .exercises { padding: 60px 0; background: var(--color-bg-light); }
    .exercises__inner { max-width: var(--max-width); margin: 0 auto; padding: 0 24px; }
    .exercise-group {
      margin-bottom: 24px; border: 1px solid #e5e5e5;
      border-radius: var(--radius-lg); overflow: hidden; background: #fff;
    }
    .exercise-group__header {
      display: flex; align-items: center; gap: 20px;
      padding: 20px 28px; cursor: pointer;
    }
    .exercise-group__header:hover { background: var(--color-bg-purple-light); }
    .exercise-group__thumb {
      width: 120px; height: 68px; border-radius: 8px; overflow: hidden; flex-shrink: 0;
    }
    .exercise-group__thumb img { width: 100%; height: 100%; object-fit: cover; }
    .exercise-group__info { flex: 1; }
    .exercise-group__title { font-size: 16px; font-weight: 900; margin-bottom: 4px; }
    .exercise-group__meta { font-size: 13px; color: var(--color-text-light); }
    .exercise-group__note { font-size: 12px; color: #999; margin-top: 2px; }
    .exercise-group__toggle {
      width: 36px; height: 36px; border-radius: 50%;
      background: var(--color-bg-purple-light); display: flex;
      align-items: center; justify-content: center; flex-shrink: 0;
      transition: transform 0.3s;
    }
    .exercise-group__toggle svg { width: 16px; height: 16px; fill: var(--color-primary); transition: transform 0.3s; }
    .exercise-group.is-open .exercise-group__toggle svg { transform: rotate(180deg); }
    .exercise-group.is-open .exercise-group__toggle { background: var(--color-primary); }
    .exercise-group.is-open .exercise-group__toggle svg { fill: #fff; }
    .exercise-group__body { max-height: 0; overflow: hidden; transition: max-height 0.4s ease; }
    .exercise-group.is-open .exercise-group__body { max-height: 2000px; }
    .exercise-group__lessons { padding: 0 28px 24px; padding-left: 168px; }
    .exercise-group__lessons li {
      padding: 8px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px;
    }
    .exercise-group__lessons li:last-child { border-bottom: none; }
    @media (max-width: 768px) {
      .exercise-group__header { padding: 16px 20px; gap: 12px; }
      .exercise-group__thumb { width: 80px; height: 45px; }
      .exercise-group__title { font-size: 14px; }
      .exercise-group__lessons { padding-left: 20px; padding-right: 20px; }
    }

    /* ===== Tools ===== */
    .tools-section {
      padding: 60px 0; background: var(--color-bg-purple-light);
    }
    .tools-section__inner {
      max-width: 900px; margin: 0 auto; padding: 0 24px;
      display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center;
    }
    .tools-section__text h3 { font-size: clamp(18px, 2.5vw, 24px); font-weight: 900; margin-bottom: 20px; line-height: 1.5; }
    .tools-section__text p { font-size: 14px; color: var(--color-text-light); margin-bottom: 16px; }
    .tools-section__list { font-size: 14px; line-height: 2; }
    .tools-section__list strong { display: block; font-weight: 700; margin-top: 8px; }
    .tools-section__image img { border-radius: var(--radius); }
    @media (max-width: 768px) {
      .tools-section__inner { grid-template-columns: 1fr; }
    }

    /* ===== Testimonials ===== */
    .testimonials { padding: 80px 0; background: var(--color-white); }
    .testimonials__inner { max-width: var(--max-width); margin: 0 auto; padding: 0 24px; }
    .testimonials__header { text-align: center; margin-bottom: 48px; }
    .testimonials__header h2 { font-size: clamp(20px, 3vw, 30px); font-weight: 900; line-height: 1.5; }
    .testimonials__grid {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
    }
    .testimonials__card {
      border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow);
    }
    .testimonials__card img { width: 100%; display: block; }
    @media (max-width: 768px) {
      .testimonials__grid { grid-template-columns: 1fr; max-width: 400px; margin: 0 auto; }
    }

    /* ===== CTA Mid ===== */
    .cta-mid {
      padding: 60px 0; background: var(--color-bg-purple-light); text-align: center;
    }
    .cta-mid__inner { max-width: 700px; margin: 0 auto; padding: 0 24px; }
    .cta-mid h2 { font-size: clamp(20px, 3vw, 28px); font-weight: 900; margin-bottom: 24px; }
    .cta-mid__img { display: block; max-width: 600px; margin: 0 auto 16px; }
    .cta-mid__img img { width: 100%; border-radius: var(--radius); }
    .cta-mid__note { font-size: 12px; color: #999; }

    /* ===== FAQ ===== */
    .faq { padding: 80px 0; background: var(--color-white); }
    .faq__inner { max-width: 800px; margin: 0 auto; padding: 0 24px; }
    .faq__item {
      border: 1px solid #e5e5e5; border-radius: var(--radius);
      margin-bottom: 12px; overflow: hidden; background: #fff;
    }
    .faq__question {
      display: flex; align-items: center; gap: 16px;
      padding: 20px 24px; cursor: pointer; font-weight: 700; font-size: 15px;
      transition: background 0.2s;
    }
    .faq__question:hover { background: var(--color-bg-purple-light); }
    .faq__q-icon {
      width: 32px; height: 32px; border-radius: 50%;
      background: var(--color-primary); color: #fff;
      display: flex; align-items: center; justify-content: center;
      font-family: var(--font-en); font-weight: 900; font-size: 14px;
      flex-shrink: 0;
    }
    .faq__q-text { flex: 1; }
    .faq__arrow {
      width: 24px; height: 24px; flex-shrink: 0;
      transition: transform 0.3s;
    }
    .faq__arrow svg { width: 100%; height: 100%; fill: var(--color-primary); }
    .faq__item.is-open .faq__arrow { transform: rotate(180deg); }
    .faq__answer {
      max-height: 0; overflow: hidden; transition: max-height 0.4s ease;
    }
    .faq__item.is-open .faq__answer { max-height: 500px; }
    .faq__answer__inner {
      padding: 0 24px 20px 72px; font-size: 14px; line-height: 1.9;
      color: var(--color-text-light);
    }
    .faq__answer__inner a { color: var(--color-primary); text-decoration: underline; }
    @media (max-width: 768px) {
      .faq__answer__inner { padding-left: 24px; }
    }

    /* ===== CTA Final ===== */
    .cta-final {
      padding: 80px 0;
      background: linear-gradient(135deg, var(--color-primary) 0%, #7c5cfc 100%);
      color: #fff; text-align: center;
    }
    .cta-final__inner { max-width: 800px; margin: 0 auto; padding: 0 24px; }
    .cta-final__lead { font-size: 15px; margin-bottom: 12px; opacity: 0.9; }
    .cta-final h2 { font-size: clamp(22px, 3.5vw, 34px); font-weight: 900; margin-bottom: 16px; line-height: 1.5; }
    .cta-final__points {
      display: flex; justify-content: center; gap: 24px; margin-bottom: 32px; flex-wrap: wrap;
    }
    .cta-final__point {
      font-size: 14px; font-weight: 700;
      padding: 8px 16px; background: rgba(255,255,255,0.15); border-radius: 50px;
    }
    .cta-final__btn-area { margin-bottom: 24px; }
    .cta-final__img { display: block; max-width: 500px; margin: 0 auto 16px; }
    .cta-final__img img { width: 100%; }
    .cta-final__note { font-size: 12px; opacity: 0.7; }

    /* ===== Footer ===== */
    .footer { background: var(--color-dark); color: rgba(255,255,255,0.8); }
    .footer__main { padding: 60px 0 40px; }
    .footer__inner { max-width: var(--max-width); margin: 0 auto; padding: 0 24px; }
    .footer__grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; }
    .footer__brand__logo img { height: 32px; width: auto; filter: brightness(0) invert(1); margin-bottom: 16px; }
    .footer__brand__catch { font-size: 14px; margin-bottom: 20px; line-height: 1.8; }
    .footer__brand__cta a {
      display: inline-block; padding: 10px 24px; border-radius: 50px;
      background: var(--color-primary); color: #fff; font-size: 13px; font-weight: 700;
      transition: background 0.2s;
    }
    .footer__brand__cta a:hover { background: var(--color-primary-dark); }
    .footer__col__ttl { font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.4); letter-spacing: 0.1em; margin-bottom: 16px; }
    .footer__col__list { display: flex; flex-direction: column; gap: 10px; }
    .footer__col__list li a { font-size: 13px; color: rgba(255,255,255,0.7); transition: color 0.2s; }
    .footer__col__list li a:hover { color: #fff; }
    .footer__bottom {
      border-top: 1px solid rgba(255,255,255,0.08); padding: 20px 0; text-align: center;
    }
    .footer__bottom p { font-size: 12px; color: rgba(255,255,255,0.3); }
    @media (max-width: 768px) {
      .footer__grid { grid-template-columns: 1fr 1fr; gap: 32px; }
      .footer__brand { grid-column: 1 / -1; }
    }
    @media (max-width: 480px) { .footer__grid { grid-template-columns: 1fr; } }

    /* ===== Fadein ===== */
    .fadein { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
    .fadein.is-visible { opacity: 1; transform: translateY(0); }
` }} />


{/* ===== Header ===== */}
<header className="header">
  <div className="header__inner">
    <a href="/bytech" className="header__logo">
      <img src="/bytech/assets/images/chatgpt/生成AIロゴ黒.svg" alt="バイテック生成AI" />
    </a>
    <nav className="header__nav">
      <ul className="header__nav__list">
        <li><a href="/bytech">トップ</a></li>
        <li><a href="#course">コース概要</a></li>
        <li><a href="#curriculum">講座一覧</a></li>
        <li><a href="#exercises">スキル証明課題</a></li>
        <li><a href="#faq">よくある質問</a></li>
      </ul>
      <div className="header__nav__cta">
        <a href="https://generative-ai.bytech.jp/counseling/" className="header__cta-btn header__cta-btn--outline" target="_blank">資料請求</a>
        <a href="https://generative-ai.bytech.jp/counseling/" className="header__cta-btn header__cta-btn--fill" target="_blank">無料カウンセリング</a>
      </div>
    </nav>
    <div className="header__hamburger" onClick={(e) => { (e.currentTarget as HTMLElement).classList.toggle('is-open') }}>
      <span></span><span></span><span></span>
    </div>
  </div>
</header>

{/* ===== Hero ===== */}
<section className="course-hero">
  <div className="course-hero__inner">
    <div className="course-hero__content">
      <span className="course-hero__badge">ChatGPTマスターコース</span>
      <h1 className="course-hero__ttl">今日から仕事が変わる、<br />ChatGPT活用スキルを習得</h1>
      <div className="course-hero__meta">
        <div className="course-hero__meta-item">
          <span className="course-hero__meta-label">視聴時間</span>
          <span className="course-hero__meta-value">約5.3時間</span>
        </div>
        <div className="course-hero__meta-item">
          <span className="course-hero__meta-label">教材ボリューム</span>
          <span className="course-hero__meta-value">全8チャプター | 45レッスン</span>
        </div>
        <div className="course-hero__meta-item">
          <span className="course-hero__meta-label">スキル証明課題</span>
          <span className="course-hero__meta-value">初級~上級 | 24課題</span>
        </div>
      </div>
    </div>
    <div className="course-hero__image">
      <img src="/bytech/assets/images/chatgpt/CGマスター_FV直下-1024x617.webp" alt="ChatGPTマスターコース" />
    </div>
  </div>
</section>

{/* ===== About ===== */}
<section className="about u-section fadein" id="course">
  <div className="about__inner">
    <div className="sec-header">
      <span className="sec-header__tag">ABOUT</span>
      <h2 className="sec-header__ttl">ChatGPTマスターコースとは?</h2>
    </div>
    <div className="about__grid">
      <div className="about__text">
        <h3>ChatGPTを<span className="mark-purple">「使えるから、使いこなせる。」</span><br />にアップデートするコース</h3>
        <p>ChatGPTの基本操作から、プロンプト設計、メール・資料・アイデア出しからZapier・MCPとの連携など実務応用まで体系的に学ぶコースです。テンプレに頼らず、自分の業務にあわせてカスタマイズできる使い方を習得します。</p>
        <div className="about__features">
          <div className="about__feature-card">
            <svg viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M496 224c-79.59 0-144 64.41-144 144s64.41 144 144 144 144-64.41 144-144-64.41-144-144-144zm64 150.29c0 5.34-4.37 9.71-9.71 9.71h-60.57c-5.34 0-9.71-4.37-9.71-9.71v-76.57c0-5.34 4.37-9.71 9.71-9.71h12.57c5.34 0 9.71 4.37 9.71 9.71V352h38.29c5.34 0 9.71 4.37 9.71 9.71v12.58zM496 192c5.4 0 10.72.33 16 .81V144c0-25.6-22.4-48-48-48h-80V48c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h395.12c28.6-20.09 63.35-32 100.88-32zM320 96H192V64h128v32zm6.82 224H208c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h291.43C327.1 423.96 320 396.82 320 368c0-16.66 2.48-32.72 6.82-48z"/></svg>
            <p>業務だけじゃなく<br />副業でも活かせる</p>
          </div>
          <div className="about__feature-card">
            <svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"/></svg>
            <p>実践を想定した<br />演習ワーク</p>
          </div>
          <div className="about__feature-card">
            <svg viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg"><path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"/></svg>
            <p>初心者でも安心の<br />教材構成</p>
          </div>
          <div className="about__feature-card">
            <svg viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"/></svg>
            <p>合計5.3時間の<br />教材視聴時間</p>
          </div>
        </div>
      </div>
      <div className="about__image">
        <img src="/bytech/assets/images/chatgpt/CGマスター_FV直下-1024x617.webp" alt="ChatGPTマスターコース概要" />
      </div>
    </div>
  </div>
</section>

{/* ===== Recommend ===== */}
<section className="recommend fadein">
  <div className="recommend__inner">
    <div className="recommend__divider">RECOMMEND</div>
    <h3 className="recommend__ttl">こんな方にオススメです</h3>
    <div className="recommend__cards">
      <div className="recommend__card">
        まずは<span className="hl">ChatGPTの基礎</span>から<br />マスターしたい方
      </div>
      <div className="recommend__card">
        <span className="hl">社内のツール制限で</span><br />ChatGPTしか使えない方
      </div>
      <div className="recommend__card">
        ChatGPTを活用した<br /><span className="hl">AI副業に興味</span>がある方
      </div>
    </div>
  </div>
</section>

{/* ===== Curriculum ===== */}
<section className="curriculum fadein" id="curriculum">
  <div className="curriculum__inner">
    <div className="curriculum__header">
      <span className="tag">- 講座一覧 -</span>
      <h2>ChatGPTマスターコース｜講座一覧</h2>
    </div>

    {/* Chapter 1 */}
    <div className="chapter fadein">
      <div className="chapter__inner">
        <div className="chapter__carousel" data-carousel>
          <div className="chapter__carousel-track">
            <img src="/bytech/assets/images/chatgpt/C1-L1-3.webp" alt="" className="is-active" />
            <img src="/bytech/assets/images/chatgpt/C1-L1-2.webp" alt="" />
          </div>
          <button className="chapter__carousel-arrow chapter__carousel-arrow--prev">&#x276E;</button>
          <button className="chapter__carousel-arrow chapter__carousel-arrow--next">&#x276F;</button>
          <div className="chapter__carousel-dots"><button className="chapter__carousel-dot is-active"></button><button className="chapter__carousel-dot"></button></div>
        </div>
        <div className="chapter__content">
          <div className="chapter__title">チャプター1：ChatGPTの基礎と驚異の進化</div>
          <div className="chapter__meta">全1レッスン｜視聴時間：5分</div>
          <ul className="chapter__lessons"><li>レッスン1：ユニット概要</li></ul>
        </div>
      </div>
    </div>

    {/* Chapter 2 */}
    <div className="chapter fadein">
      <div className="chapter__inner">
        <div className="chapter__carousel" data-carousel>
          <div className="chapter__carousel-track">
            <img src="/bytech/assets/images/chatgpt/C2-L1-1.webp" alt="" className="is-active" />
            <img src="/bytech/assets/images/chatgpt/C2-L1-2.webp" alt="" />
          </div>
          <button className="chapter__carousel-arrow chapter__carousel-arrow--prev">&#x276E;</button>
          <button className="chapter__carousel-arrow chapter__carousel-arrow--next">&#x276F;</button>
          <div className="chapter__carousel-dots"><button className="chapter__carousel-dot is-active"></button><button className="chapter__carousel-dot"></button></div>
        </div>
        <div className="chapter__content">
          <div className="chapter__title">チャプター2：無料版で極める！最新機能の徹底活用術</div>
          <div className="chapter__meta">全2レッスン｜視聴時間：12分</div>
          <ul className="chapter__lessons"><li>レッスン1：無料版ChatGPTの登録と基本操作</li><li>レッスン2：わずか4ヶ月で激変！最新アップデートとChatGPTの全体像</li></ul>
        </div>
      </div>
    </div>

    {/* Chapter 3 */}
    <div className="chapter fadein">
      <div className="chapter__inner">
        <div className="chapter__carousel" data-carousel>
          <div className="chapter__carousel-track">
            <img src="/bytech/assets/images/chatgpt/スクリーンショット-2025-12-05-18.38.18-scaled.webp" alt="" className="is-active" />
            <img src="/bytech/assets/images/chatgpt/C3-L4-2.webp" alt="" />
          </div>
          <button className="chapter__carousel-arrow chapter__carousel-arrow--prev">&#x276E;</button>
          <button className="chapter__carousel-arrow chapter__carousel-arrow--next">&#x276F;</button>
          <div className="chapter__carousel-dots"><button className="chapter__carousel-dot is-active"></button><button className="chapter__carousel-dot"></button></div>
        </div>
        <div className="chapter__content">
          <div className="chapter__title">チャプター3：日常を劇的に変える！設定・アプリ・音声活用術</div>
          <div className="chapter__meta">全4レッスン｜視聴時間：29分</div>
          <ul className="chapter__lessons"><li>レッスン1：無料版ChatGPTの登録と基本操作</li><li>レッスン2：無料版で思考力を倍増！賢い「推論」機能の実践</li><li>レッスン3：無料版で情報収集の質を革命！「ディープリサーチ」徹底活用</li><li>レッスン4：無料版で画像クリエイターに！「ネイティブ画像生成」の新常識</li></ul>
        </div>
      </div>
    </div>

    {/* Chapter 4 */}
    <div className="chapter fadein">
      <div className="chapter__inner">
        <div className="chapter__carousel" data-carousel>
          <div className="chapter__carousel-track">
            <img src="/bytech/assets/images/chatgpt/スクリーンショット-2025-12-05-18.40.25-scaled.webp" alt="" className="is-active" />
            <img src="/bytech/assets/images/chatgpt/C4-L2-1-1.webp" alt="" />
          </div>
          <button className="chapter__carousel-arrow chapter__carousel-arrow--prev">&#x276E;</button>
          <button className="chapter__carousel-arrow chapter__carousel-arrow--next">&#x276F;</button>
          <div className="chapter__carousel-dots"><button className="chapter__carousel-dot is-active"></button><button className="chapter__carousel-dot"></button></div>
        </div>
        <div className="chapter__content">
          <div className="chapter__title">チャプター4：有料版で解き放つ！ChatGPT活用の新境地</div>
          <div className="chapter__meta">全2レッスン｜視聴時間：21分</div>
          <ul className="chapter__lessons"><li>レッスン1：安心して使いこなす！データ学習とチャット履歴の管理術</li><li>レッスン2：手間なしAIコミュニケーション！音声入力とアドバンスドボイスモード</li></ul>
        </div>
      </div>
    </div>

    {/* Chapter 5 */}
    <div className="chapter fadein">
      <div className="chapter__inner">
        <div className="chapter__carousel" data-carousel>
          <div className="chapter__carousel-track">
            <img src="/bytech/assets/images/chatgpt/スクリーンショット-2025-12-05-18.57.24-scaled.webp" alt="" className="is-active" />
            <img src="/bytech/assets/images/chatgpt/C5-L3-1.webp" alt="" />
          </div>
          <button className="chapter__carousel-arrow chapter__carousel-arrow--prev">&#x276E;</button>
          <button className="chapter__carousel-arrow chapter__carousel-arrow--next">&#x276F;</button>
          <div className="chapter__carousel-dots"><button className="chapter__carousel-dot is-active"></button><button className="chapter__carousel-dot"></button></div>
        </div>
        <div className="chapter__content">
          <div className="chapter__title">チャプター5：ChatGPTを「使いこなす」実践応用術(1)</div>
          <div className="chapter__meta">全4レッスン｜視聴時間：35分</div>
          <ul className="chapter__lessons"><li>レッスン1：有料版のモデル選択と高度な推論・画像処理</li><li>レッスン2：GPTs作成マスター！自分専用AIアシスタントの設計と構築</li><li>レッスン3：最先端AIクリエーション！Soraによる動画・画像生成</li><li>レッスン4：プロプラン限定！AIエージェント「オペレーター」と連携機能</li></ul>
        </div>
      </div>
    </div>

    {/* Chapter 6 */}
    <div className="chapter fadein">
      <div className="chapter__inner">
        <div className="chapter__carousel" data-carousel>
          <div className="chapter__carousel-track">
            <img src="/bytech/assets/images/chatgpt/C6-L1-3.webp" alt="" className="is-active" />
            <img src="/bytech/assets/images/chatgpt/C6-L1-2.webp" alt="" />
          </div>
          <button className="chapter__carousel-arrow chapter__carousel-arrow--prev">&#x276E;</button>
          <button className="chapter__carousel-arrow chapter__carousel-arrow--next">&#x276F;</button>
          <div className="chapter__carousel-dots"><button className="chapter__carousel-dot is-active"></button><button className="chapter__carousel-dot"></button></div>
        </div>
        <div className="chapter__content">
          <div className="chapter__title">チャプター6：ChatGPTを「使いこなす」実践応用術(2)</div>
          <div className="chapter__meta">全2レッスン｜視聴時間：13分</div>
          <ul className="chapter__lessons"><li>レッスン1：AIを最大限に引き出す！プロンプトエンジニアリングの極意</li><li>レッスン2：業務を自動化・効率化！ChatGPTと他AIツール連携の最適戦略</li></ul>
        </div>
      </div>
    </div>

    {/* Chapter 7 */}
    <div className="chapter fadein">
      <div className="chapter__inner">
        <div className="chapter__carousel" data-carousel>
          <div className="chapter__carousel-track">
            <img src="/bytech/assets/images/chatgpt/スクリーンショット-2025-12-05-18.54.14-scaled.webp" alt="" className="is-active" />
            <img src="/bytech/assets/images/chatgpt/C7-L3-2.webp" alt="" />
          </div>
          <button className="chapter__carousel-arrow chapter__carousel-arrow--prev">&#x276E;</button>
          <button className="chapter__carousel-arrow chapter__carousel-arrow--next">&#x276F;</button>
          <div className="chapter__carousel-dots"><button className="chapter__carousel-dot is-active"></button><button className="chapter__carousel-dot"></button></div>
        </div>
        <div className="chapter__content">
          <div className="chapter__title">チャプター7：ChatGPTプロンプト 最強フレーズ活用術</div>
          <div className="chapter__meta">全10レッスン｜視聴時間：1.1時間</div>
          <ul className="chapter__lessons"><li>レッスン1：たった一言でChatGPTの回答精度を劇的に変える方法</li><li>レッスン2：思考プロセスを明らかにして、ChatGPTを自由自在に操る</li><li>レッスン3：「A to Zで思考して」で広範囲なトピックを体系的に網羅する</li><li>レッスン4：ChatGPTの自己評価を促す</li><li>レッスン5：曖昧な回答を解消！ChatGPTから的確な情報を引き出す2つの戦略</li><li>レッスン6：過去の会話をリセットし、新たな議論へ導く</li><li>レッスン7：客観的視点から問題を深掘り！「メタ認知を使って」</li><li>レッスン8：「ラテラルシンキングを用いて」で人間を超える無限のアイデアを生み出す</li><li>レッスン9：コマンド一つで効率化！「特定の合図で改善案を出して修正」</li><li>レッスン10：「仮説と反証のプロセスで」で高解像度なアイデアを生む</li></ul>
        </div>
      </div>
    </div>

    {/* Chapter 8 */}
    <div className="chapter fadein">
      <div className="chapter__inner">
        <div className="chapter__carousel" data-carousel>
          <div className="chapter__carousel-track">
            <img src="/bytech/assets/images/chatgpt/スクリーンショット-2025-12-05-18.48.10-scaled.webp" alt="" className="is-active" />
            <img src="/bytech/assets/images/chatgpt/C8-L9-1.webp" alt="" />
          </div>
          <button className="chapter__carousel-arrow chapter__carousel-arrow--prev">&#x276E;</button>
          <button className="chapter__carousel-arrow chapter__carousel-arrow--next">&#x276F;</button>
          <div className="chapter__carousel-dots"><button className="chapter__carousel-dot is-active"></button><button className="chapter__carousel-dot"></button></div>
        </div>
        <div className="chapter__content">
          <div className="chapter__title">チャプター8：あらゆる業務を網羅！ChatGPT実践活用事例</div>
          <div className="chapter__meta">全20レッスン｜視聴時間：2.2時間</div>
          <ul className="chapter__lessons"><li>レッスン1：思考・企画・ブレインストーミングを加速する対話術</li><li>レッスン2：Webサイト・SNS戦略と運用【Webサイト分析】</li><li>レッスン3：【論文・PDF読解】100ページの専門論文を5分で理解し、プレゼン資料を作成</li><li>レッスン4：実務で役立つドキュメント・コンテンツ生成術</li><li>レッスン5：ビジネスデータ分析とインサイト抽出</li><li>レッスン6：実務で役立つドキュメント・コンテンツ生成術</li><li>レッスン7：日常業務・個人利用をスマートに</li><li>レッスン8：究極のパーソナライズ【カスタムGPTs作成】</li><li>レッスン9：プレゼン資料の添削</li><li>レッスン10：【API連携の自動化】ZapierのGPTsで業務フローを構築</li><li>レッスン11：【コードデバッグ＆解説】意味不明なエラーメッセージの原因を特定し、修正する</li><li>レッスン12：【契約書ドラフティング】箇条書きの要件から法的に堅牢な契約書を作成</li><li>レッスン13：【採用面接の高度化】候補者の職務経歴書から、能力を見抜くための質問を生成</li><li>レッスン14：【カスタマーサポート改善】問い合わせログからFAQとオペレーター研修資料を作成</li><li>レッスン15：【ドキュメント作成】ホワイトボードの写真から、整形された議事録を生成</li><li>レッスン16：【教育コンテンツ作成】「中学生にもわかるように」という制約で専門知識を解説する</li><li>レッスン17：【開発・技術業務の効率化】架空のAPIのレスポンスを生成し、フロントエンド開発を先行させる</li><li>レッスン18：【パーソナルファイナンス】レシートの写真を読み取らせ、家計簿データを作成</li><li>レッスン19：【究極のパーソナライズ】自分の過去の文章を学習させ、「自分AI」を作る</li><li>レッスン20：ChatGPTの真価を引き出す！外部ツール連携（MCP）の設定と活用法</li></ul>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ===== Skill Exercises ===== */}
<section className="exercises fadein" id="exercises">
  <div className="exercises__inner">
    <div className="sec-header">
      <span className="sec-header__tag">SKILL CERTIFICATION</span>
      <h2 className="sec-header__ttl">スキル証明課題</h2>
    </div>

    {/* Beginner */}
    <div className="exercise-group">
      <div className="exercise-group__header" onClick={(e) => { const parent = (e.currentTarget as HTMLElement).closest('.exercise-group'); if (parent) parent.classList.toggle('is-open'); }}>
        <div className="exercise-group__thumb"><img src="/bytech/assets/images/chatgpt/初級課題2-2-1024x576-1.webp" alt="初級課題" /></div>
        <div className="exercise-group__info">
          <div className="exercise-group__title">スキル証明課題：初級編</div>
          <div className="exercise-group__meta">全8課題｜実施時間：4.2時間</div>
          <div className="exercise-group__note">※受講生の平均時間で算出しています</div>
        </div>
        <div className="exercise-group__toggle"><svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg></div>
      </div>
      <div className="chapter__body">
        <ul className="exercise-group__lessons">
          <li>課題1：壁打ちパートナーと作る「今の仕事の棚卸し」</li>
          <li>課題2：よくある「業務のつまずき」から作る自己解決マニュアル</li>
          <li>課題3：Searchを使った「自社・業界のざっくり市場リサーチ」</li>
          <li>課題4：PDF資料の「かみ砕き要約」とQ&amp;A集</li>
          <li>課題5：手書きメモの「会議メモ整理シート」</li>
          <li>課題6：会議録からの「タスク抽出＆フォローメール草案」</li>
          <li>課題7：プレゼン用 DALL-E 素材の「コンセプト設計シート」</li>
          <li>課題8：社外発信の「リスクチェックと改善案メモ」</li>
        </ul>
      </div>
    </div>

    {/* Intermediate */}
    <div className="exercise-group">
      <div className="exercise-group__header" onClick={(e) => { const parent = (e.currentTarget as HTMLElement).closest('.exercise-group'); if (parent) parent.classList.toggle('is-open'); }}>
        <div className="exercise-group__thumb"><img src="/bytech/assets/images/chatgpt/中級課題2-1024x576-1.webp" alt="中級課題" /></div>
        <div className="exercise-group__info">
          <div className="exercise-group__title">スキル証明課題：中級編</div>
          <div className="exercise-group__meta">全8課題｜実施時間：5.6時間</div>
          <div className="exercise-group__note">※受講生の平均時間で算出しています</div>
        </div>
        <div className="exercise-group__toggle"><svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg></div>
      </div>
      <div className="chapter__body">
        <ul className="exercise-group__lessons">
          <li>課題1：働き方を崩さない「会議設計とスケジュールルール」</li>
          <li>課題2：Canvasで作る「提案資料ストーリーライン改善」</li>
          <li>課題3：アンケートCSVからの「インサイトレポート」</li>
          <li>課題4：ターゲット別「教育カリキュラム設計」</li>
          <li>課題5：採用面接の「質問設計と深掘りフロー」</li>
          <li>課題6：ブログ記事の「SEO構成＋下書き＋レビュー」</li>
          <li>課題7：架空サービス紹介ページの「現状診断＆改善案シート」</li>
          <li>課題8：業務委託契約書の「ドラフト＆リスクチェック」</li>
        </ul>
      </div>
    </div>

    {/* Advanced */}
    <div className="exercise-group">
      <div className="exercise-group__header" onClick={(e) => { const parent = (e.currentTarget as HTMLElement).closest('.exercise-group'); if (parent) parent.classList.toggle('is-open'); }}>
        <div className="exercise-group__thumb"><img src="/bytech/assets/images/chatgpt/上級課題1-1024x576-1.webp" alt="上級課題" /></div>
        <div className="exercise-group__info">
          <div className="exercise-group__title">スキル証明課題：上級編</div>
          <div className="exercise-group__meta">全8課題｜実施時間：7.4時間</div>
          <div className="exercise-group__note">※受講生の平均時間で算出しています</div>
        </div>
        <div className="exercise-group__toggle"><svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg></div>
      </div>
      <div className="chapter__body">
        <ul className="exercise-group__lessons">
          <li>課題1：自分専用「My GPT」設計書</li>
          <li>課題2：社内規定Q&amp;A Botの「ナレッジ設計」</li>
          <li>課題3：Drive連携の「過去資料リサーチワークフロー」</li>
          <li>課題4：Canvasで作る「長文マニュアルの章立て＆執筆ガイド」</li>
          <li>課題5：チーム共有用「業務標準化GPT」の設計</li>
          <li>課題6：売上データ＋ニュースによる「市場分析レポート」</li>
          <li>課題7：高性能モデルを使った「戦略立案ミニプロジェクト」</li>
          <li>課題8：自分の「プロンプト・ライブラリ」の体系化</li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* ===== Tools ===== */}
<section className="tools-section fadein">
  <div className="tools-section__inner">
    <div className="tools-section__text">
      <h3>ChatGPTマスターコース<br />講座内での使用ツールについて</h3>
      <p>当講座は以下のツールを使用します。</p>
      <div className="tools-section__list">
        <strong>【メインツール】</strong>
        - ChatGPT<br />
        - GPTs<br />
        - Sora<br />
        <strong>【サブツール】</strong>
        - Zapier<br />
        - GAS
      </div>
    </div>
    <div className="tools-section__image">
      <img src="/bytech/assets/images/chatgpt/CGマスター-1-1024x614.webp" alt="使用ツール" />
    </div>
  </div>
</section>

{/* ===== CTA Mid ===== */}
<section className="cta-mid fadein">
  <div className="cta-mid__inner">
    <h2>自分に合ったChatGPTの<br />活用方法が知れる！</h2>
    <a href="https://generative-ai.bytech.jp/counseling/" className="cta-mid__img" target="_blank">
      <img src="/bytech/assets/images/chatgpt/CTA_無料説明会-3-1024x233.webp" alt="無料説明会に申し込む" />
    </a>
    <p className="cta-mid__note">※ 無理な勧誘は行っていません。</p>
  </div>
</section>

{/* ===== Testimonials ===== */}
<section className="testimonials fadein">
  <div className="testimonials__inner">
    <div className="testimonials__header">
      <h2><span className="mark-purple">未経験から</span><br />ChatGPTを活用して<br />業務効率化・副業に成功した皆様</h2>
    </div>
    <div className="testimonials__grid">
      <div className="testimonials__card">
        <img src="/bytech/assets/images/chatgpt/青山さん-1.webp" alt="受講生の声1" />
      </div>
      <div className="testimonials__card">
        <img src="/bytech/assets/images/chatgpt/青山さん-2.webp" alt="受講生の声2" />
      </div>
      <div className="testimonials__card">
        <img src="/bytech/assets/images/chatgpt/青山さん.webp" alt="受講生の声3" />
      </div>
    </div>
  </div>
</section>

{/* ===== CTA Mid 2 ===== */}
<section className="cta-mid fadein">
  <div className="cta-mid__inner">
    <h2>自分に合ったChatGPTの<br />活用方法が知れる！</h2>
    <a href="https://generative-ai.bytech.jp/counseling/" className="cta-mid__img" target="_blank">
      <img src="/bytech/assets/images/chatgpt/CTA_無料説明会-3-1024x233.webp" alt="無料説明会に申し込む" />
    </a>
    <p className="cta-mid__note">※ 無理な勧誘は行っていません。</p>
  </div>
</section>

{/* ===== FAQ ===== */}
<section className="faq fadein" id="faq">
  <div className="faq__inner">
    <div className="sec-header">
      <span className="sec-header__tag">FAQ</span>
      <h2 className="sec-header__ttl">ChatGPTマスターコースに<br />関するよくある質問</h2>
    </div>

    <div className="faq__item">
      <div className="faq__question" onClick={(e) => { const parent = (e.currentTarget as HTMLElement).closest('.faq__item'); if (parent) parent.classList.toggle('is-open'); }}>
        <div className="faq__q-icon">Q</div>
        <div className="faq__q-text">具体的に何ができるようになりますか?</div>
        <div className="faq__arrow"><svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg></div>
      </div>
      <div className="faq__answer">
        <div className="faq__answer__inner">ChatGPTを活用して、日々のメール業務・調査・分析・資料の構成作成などの業務を効率化することが可能です。</div>
      </div>
    </div>

    <div className="faq__item">
      <div className="faq__question" onClick={(e) => { const parent = (e.currentTarget as HTMLElement).closest('.faq__item'); if (parent) parent.classList.toggle('is-open'); }}>
        <div className="faq__q-icon">Q</div>
        <div className="faq__q-text">各コースは1つずつ購入しないと見れないですか?</div>
        <div className="faq__arrow"><svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg></div>
      </div>
      <div className="faq__answer">
        <div className="faq__answer__inner">いいえ、バイテックではよくある1コース買い切り型ではなく、<a href="https://generative-ai.bytech.jp/plan/" target="_blank">LITE・PRO</a>のどちらかのプランで入会いただいた方には全てのコースを無期限で視聴ができる形でのサービス提供をしております。</div>
      </div>
    </div>

    <div className="faq__item">
      <div className="faq__question" onClick={(e) => { const parent = (e.currentTarget as HTMLElement).closest('.faq__item'); if (parent) parent.classList.toggle('is-open'); }}>
        <div className="faq__q-icon">Q</div>
        <div className="faq__q-text">ChatGPTは課金した方がいいですか?</div>
        <div className="faq__arrow"><svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg></div>
      </div>
      <div className="faq__answer">
        <div className="faq__answer__inner">はい、無料での使い方もレッスン内にありますが、有料で使用していただく前提のカリキュラムとなっておりますので、このタイミングで課金してレッスンに臨んでいただけたらと思います。</div>
      </div>
    </div>

    <div className="faq__item">
      <div className="faq__question" onClick={(e) => { const parent = (e.currentTarget as HTMLElement).closest('.faq__item'); if (parent) parent.classList.toggle('is-open'); }}>
        <div className="faq__q-icon">Q</div>
        <div className="faq__q-text">ChatGPTとGeminiで迷っています</div>
        <div className="faq__arrow"><svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg></div>
      </div>
      <div className="faq__answer">
        <div className="faq__answer__inner">現状Google関連のツールを使って業務などを行なっているのであれば<a href="https://gemini.google.com/?hl=ja" target="_blank">Gemini</a>でもいいかもしれません。画像や動画もNanobananaやVeoが非常に進化しており、クリエイティブの領域でも強くなってきています。<a href="https://chatgpt.com/" target="_blank">ChatGPT</a>は会話形式でのアウトプットが非常に強いので、もし迷われている方は、一度無料カウンセリングでご相談ください。</div>
      </div>
    </div>

    <div className="faq__item">
      <div className="faq__question" onClick={(e) => { const parent = (e.currentTarget as HTMLElement).closest('.faq__item'); if (parent) parent.classList.toggle('is-open'); }}>
        <div className="faq__q-icon">Q</div>
        <div className="faq__q-text">全くAIに触ったことがないのですが、ついていけますか?</div>
        <div className="faq__arrow"><svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg></div>
      </div>
      <div className="faq__answer">
        <div className="faq__answer__inner">はい、ChatGPTは多くのAIツールの中でも非常にシンプルで使いやすいAIツールなので、初心者の方でも安心して学習いただけます。</div>
      </div>
    </div>
  </div>
</section>

{/* ===== CTA Final ===== */}
<section className="cta-final fadein">
  <div className="cta-final__inner">
    <p className="cta-final__lead">生成AIを副業や業務に活用するための疑問や不安を解消できる！</p>
    <h2>無料カウンセリングを毎日開催中！</h2>
    <div className="cta-final__points">
      <div className="cta-final__point">受講前の悩みや不安を気軽に相談できる</div>
      <div className="cta-final__point">あなたに合った生成AIの活用方法を知れる</div>
      <div className="cta-final__point">生成AIを活用した副業でのマネタイズについて知れる</div>
    </div>
    <div className="cta-final__btn-area">
      <a href="https://generative-ai.bytech.jp/counseling/" className="cta-final__img" target="_blank">
        <img src="/bytech/assets/images/chatgpt/CTA_無料説明会-3-1024x233.webp" alt="無料説明会に申し込む" />
      </a>
    </div>
    <p className="cta-final__note">※ 無理な勧誘は行っていません。</p>
  </div>
</section>

{/* ===== Footer ===== */}
<footer className="footer">
  <div className="footer__main">
    <div className="footer__inner">
      <div className="footer__grid">
        <div className="footer__brand">
          <div className="footer__brand__logo">
            <img src="/bytech/assets/images/chatgpt/生成AIロゴ黒.svg" alt="バイテック生成AI" />
          </div>
          <p className="footer__brand__catch">最短4ヶ月で、<br />生成AI活用のプロに。</p>
          <div className="footer__brand__cta">
            <a href="https://generative-ai.bytech.jp/counseling/" target="_blank">無料カウンセリングに申し込む</a>
          </div>
        </div>
        <div>
          <div className="footer__col__ttl">コース一覧 - 主要AI別</div>
          <ul className="footer__col__list">
            <li><a href="https://generative-ai.bytech.jp/chatgpt-master/" target="_blank">ChatGPTマスターコース</a></li>
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
          <div className="footer__col__ttl" style={{ 'marginTop': '24px' }}>会社情報</div>
          <ul className="footer__col__list">
            <li><a href="https://www.librex.co.jp/" target="_blank">会社概要</a></li>
            <li><a href="https://generative-ai.bytech.jp/privacy-policy/" target="_blank">プライバシーポリシー</a></li>
          </ul>
          <div className="footer__col__ttl" style={{ 'marginTop': '24px' }}>関連サービス</div>
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

{/* ===== Sticky CTA ===== */}
<div className="sticky-cta" id="stickyCta">
  <a href="https://generative-ai.bytech.jp/counseling/" className="btn-cta-main" target="_blank">無料カウンセリングに申し込む</a>
</div>






      <Script id="page-inline-script" strategy="afterInteractive">
        {`/* Accordion for chapters */
function toggleChapter(header) {
  const parent = header.closest('.chapter') || header.closest('.exercise-group');
  if (parent) parent.classList.toggle('is-open');
}

/* Accordion for FAQ */
function toggleFaq(question) {
  const parent = question.closest('.faq__item');
  if (parent) parent.classList.toggle('is-open');
}

/* Sticky CTA */
window.addEventListener('scroll', function() {
  const sticky = document.getElementById('stickyCta');
  if (window.scrollY > 600) {
    sticky.classList.add('is-visible');
  } else {
    sticky.classList.remove('is-visible');
  }
});

/* Fadein on scroll */
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fadein').forEach(function(el) {
  observer.observe(el);
});
  // Chapter carousels
  document.querySelectorAll('[data-carousel]').forEach(function(carousel) {
    var imgs = carousel.querySelectorAll('.chapter__carousel-track img');
    var dots = carousel.querySelectorAll('.chapter__carousel-dot');
    var prev = carousel.querySelector('.chapter__carousel-arrow--prev');
    var next = carousel.querySelector('.chapter__carousel-arrow--next');
    if (imgs.length < 2) return;
    var cur = 0;
    function go(n) {
      imgs[cur].classList.remove('is-active');
      if (dots[cur]) dots[cur].classList.remove('is-active');
      cur = ((n % imgs.length) + imgs.length) % imgs.length;
      imgs[cur].classList.add('is-active');
      if (dots[cur]) dots[cur].classList.add('is-active');
    }
    if (prev) prev.addEventListener('click', function() { go(cur - 1); });
    if (next) next.addEventListener('click', function() { go(cur + 1); });
    dots.forEach(function(dot, i) {
      dot.addEventListener('click', function() { go(i); });
    });
  });`}
      </Script>
    </>
  )
}