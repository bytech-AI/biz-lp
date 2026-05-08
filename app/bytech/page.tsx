'use client'

import Script from 'next/script'

export default function BytechPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap" rel="stylesheet" />

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
      --color-green: #217346;
      --font-jp: 'Noto Sans JP', sans-serif;
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
    .u-section { padding: 80px 0 0; }
    .u-section-sm { padding: 60px 0; }
    .mark-purple { color: var(--color-primary); }
    .highlight-box { background: var(--color-primary); color: #fff; display: inline-block; padding: 2px 12px; }
    .sp-only { display: none; }
    @media (max-width: 768px) { .pc-only { display: none !important; } .sp-only { display: block !important; } }

    /* ===== Buttons ===== */
    .btn-primary {
      display: inline-flex; align-items: center; justify-content: center;
      background: #ffcd57;
      color: #1e293b; font-weight: 700; font-size: 16px;
      padding: 20px 40px; border-radius: 50px;
      box-shadow: 0 4px 20px rgba(255,205,87,0.5);
      transition: transform 0.2s, box-shadow 0.2s; gap: 8px;
    }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(255,205,87,0.6); }
    .btn-outline {
      display: inline-flex; align-items: center; justify-content: center;
      border: 2px solid var(--color-primary); color: var(--color-primary);
      font-weight: 700; font-size: 15px; padding: 14px 36px; border-radius: 50px;
      transition: all 0.2s; gap: 8px;
    }
    .btn-outline:hover { background: var(--color-primary); color: #fff; }
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
      background: linear-gradient(135deg, var(--color-accent) 0%, #ffb800 100%);
      color: var(--color-dark);
    }
    .sticky-cta .btn-cta-sub { background: var(--color-dark); color: #fff; }

    /* ===== Header ===== */
    .header {
      position: fixed; top: 0; left: 0; right: 0; z-index: 9999;
      background: transparent;
    }
    .header__inner {
      max-width: 1300px; margin: 0 auto; padding: 10px 20px;
      width: 100%; display: flex; align-items: center;
    }
    /* ロゴ+ナビ のカード（border-radius + 軽いシャドウ） */
    .header__bar {
      flex: 1; display: flex; align-items: center;
      background: #fff; border-radius: 10px;
      box-shadow: 0 0 10px 0 rgba(0,0,0,0.21);
      padding: 8px 20px;
      gap: 0;
    }
    /* ロゴ */
    .header__logo { flex-shrink: 0; width: 15%; min-width: 120px; margin-left: 40px; }
    .header__logo a { display: block; }
    .header__logo img { width: 55%; height: auto; display: block; }
    /* ナビ */
    .header__nav { display: flex; align-items: center; flex: 1; }
    .header__nav__list { display: flex; align-items: center; list-style: none; margin: 0; padding: 0; }
    .header__nav__list li { position: relative; }
    .header__nav__list a {
      display: block; padding: 15px 10px;
      font-size: 14px; font-weight: 600; color: var(--color-text);
      transition: color 0.2s; white-space: nowrap;
      letter-spacing: 0.03em;
    }
    .header__nav__list a:hover { color: var(--color-primary); }
    /* ドロップダウン */
    .header__dropdown {
      display: none; position: absolute; top: 100%; left: -16px;
      background: #fff; border-radius: var(--radius);
      box-shadow: var(--shadow-lg); padding: 12px 0; min-width: 240px; z-index: 100;
    }
    .header__dropdown a { display: block; padding: 8px 20px; font-size: 13px; }
    .header__dropdown a:hover { background: var(--color-bg-purple-light); }
    .header__nav__list li:hover .header__dropdown { display: block; }
    .header__nav__divider { width: 1px; height: 16px; background: #ccc; margin: 0 8px; flex-shrink: 0; }
    /* ヘッダー CTA ボタン（SVG画像＋パルスアニメ） */
    .header__cta { display: block; flex-shrink: 0; margin-left: auto; }
    .header__cta img {
      height: 46px; width: auto; display: block;
      animation: header-cta-pulse 2s linear infinite;
    }
    @keyframes header-cta-pulse {
      0%, 20%, 100% { transform: scale(1); }
      10% { transform: scale(1.05); }
    }
    /* ハンバーガー（SP） */
    .header__hamburger { display: none; flex-direction: column; justify-content: center; gap: 6px; cursor: pointer; padding: 8px; background: none; border: none; margin-left: auto; flex-shrink: 0; }
    .header__hamburger span { width: 22px; height: 2px; background: var(--color-text); transition: all 0.3s; display: block; }
    /* モバイルナビドロワー */
    .header__nav-drawer { display: none; position: absolute; top: 100%; left: 0; right: 0; background: #fff; z-index: 9998; box-shadow: 0 4px 10px rgba(0,0,0,0.12); }
    .header__nav-drawer.is-open { display: block; }
    .header__nav-drawer__list { list-style: none; margin: 0; padding: 4px 0 8px; }
    .header__nav-drawer__list li { border-bottom: 1px solid #f0f0f0; }
    .header__nav-drawer__list li:last-child { border-bottom: none; }
    .header__nav-drawer__list > li > a { display: block; padding: 10px 20px; font-size: 13px; font-weight: 500; color: var(--color-text); }
    .header__nav-drawer__sub { display: none; background: #f9f9ff; padding: 4px 0; }
    .header__nav-drawer__sub a { display: block; padding: 8px 20px 8px 32px; font-size: 12px; color: #555; }
    .header__nav-drawer__toggle { width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 10px 20px; font-size: 13px; font-weight: 500; color: var(--color-text); background: none; border: none; cursor: pointer; text-align: left; }
    .header__nav-drawer__toggle .arrow { font-size: 10px; transition: transform 0.2s; }
    .header__nav-drawer__item.is-open .header__nav-drawer__sub { display: block; }
    .header__nav-drawer__item.is-open .arrow { transform: rotate(180deg); }
    @media (max-width: 1024px) {
      .header__nav__list { display: none; }
    }
    @media (max-width: 767px) {
      /* フラットな白背景バーに変更（角丸・シャドウなし） */
      .header { background: #fff; box-shadow: 0 0 10px 0 rgba(0,0,0,0.21); max-width: 100%; }
      .header__inner { padding: 0; max-width: 100%; }
      .header__bar { border-radius: 0; box-shadow: none; padding: 5px 10px 5px 0; background: transparent; overflow: hidden; }
      /* ロゴ: 136px固定幅、画像は66%（≈90px）、左余白20px */
      .header__logo { width: 136px; min-width: 136px; margin-left: 0; }
      .header__logo img { width: 66%; margin-left: 20px; }
      /* ナビ非表示 */
      .header__nav { display: none; }
      /* ハンバーガーを表示 */
      .header__hamburger { display: flex; }
      /* ヘッダーCTA非表示 */
      .header__cta { display: none; }
    }

    /* ===== Hero ===== */

    /* 表示切り替えユーティリティ */
    @media (min-width: 1025px) { .hide-pc  { display: none !important; } }
    @media (max-width: 1024px) and (min-width: 768px) { .hide-tablet { display: none !important; } }
    @media (max-width: 767px)  { .hide-sp  { display: none !important; } }

    /* セクション全体 */
    .hero {
      display: flex; flex-direction: column; justify-content: center;
      min-height: 550px; position: relative; overflow: hidden;
      background-color: var(--color-primary);
      padding: 70px 0 30px;
    }
    /* 下部グラデーションオーバーレイ */
    .hero::before {
      content: ''; position: absolute; inset: 0;
      background-image: linear-gradient(360deg, #00000085 0%, rgba(255,255,255,0) 30%);
      z-index: 1; pointer-events: none;
    }
    /* 背景画像 */
    .hero__bg {
      position: absolute; inset: 0;
      width: 100%; height: 100%;
      object-fit: cover; object-position: right top;
      display: block; z-index: 0;
    }

    /* max-width 1100px の中央寄せラッパー */
    .hero__inner {
      width: 100%; max-width: 1100px;
      margin: 0 auto; display: flex; flex-direction: column;
    }

    /* ── PC専用コンテンツ（タブレット・SP非表示） ── */
    .hero__body-pc {
      display: flex; flex-direction: column; align-items: flex-start;
      margin-top: 80px; position: relative; z-index: 2; width: 100%;
    }

    /* ── SP・タブレット専用コンテンツ（PC非表示） ── */
    .hero__body-sp {
      display: flex; flex-direction: column; align-items: center;
      position: relative; z-index: 2; width: 100%;
    }

    /* 見出し共通 */
    .hero__heading {
      font-family: "Noto Sans JP", sans-serif;
      font-size: 50px; font-weight: 900; line-height: 1.2;
      letter-spacing: 0.05em; color: #fff; margin: 0; display: block;
    }
    /* 行1: テキストシャドウあり */
    .hero__heading-line1 { margin-top: 20px; text-shadow: 0 0 12px rgba(0,0,0,0.48); }
    /* 行2: 紫ボックス、テキストシャドウなし */
    .hero__heading-line2 { margin-top: 10px; }
    .hero__heading-line2 .highlight { background-color: #533AFC; padding: 1px 10px; }
    /* 行3: テキストシャドウあり */
    .hero__heading-line3 { margin-top: 5px; text-shadow: 0 0 12px rgba(0,0,0,0.48); }
    /* 小さい文字（・や助詞「を」） */
    .hero__heading .sm { font-size: 0.8em; }
    /* 強調数字「2」 */
    .hero__heading .lg { font-size: 1.4em; }

    /* SP見出し（テキストシャドウが若干異なる） */
    .hero__heading--sp { text-shadow: 0 0 7px rgba(0,0,0,0.61); }
    .hero__heading--sp.hero__heading-line2 { text-shadow: none; }
    /* SP専用：紫背景ハイライト（参考サイト再現） */
    .hero__heading-sp-highlight { background-color: #533AFC; padding: 1px 0 1px 10px; display: inline; }

    /* サブテキスト */
    .hero__sub {
      font-family: Arial, sans-serif;
      font-size: 20px; font-weight: 600; line-height: 1.4;
      letter-spacing: 0.05em; text-shadow: 0 0 12px rgba(0,0,0,0.48);
      color: #fff; margin: 25px 0 0;
    }

    .hero-cta-wrapper{
      margin-top: 30px;
    }

    /* 統計バッジ */
    .hero__badges { margin: 30px 0 0; padding-right: 500px; }
    .hero__badges img { width: 80%; display: block; }

    /* CTAボタン */
    .hero__cta { display: block; padding-right: 700px; }
    .hero__cta img { width: 100%; display: block; animation: header-cta-pulse 2s linear infinite; }

    /* 注釈テキスト */
    .hero__note {
      font-family: "Noto Sans JP", sans-serif;
      font-size: 12px; font-weight: 400; color: #fff;
      line-height: 1.8; margin: 40px 0 30px;
    }

    /* SP・タブレット用バッジ */
    .hero__badges-sp { margin: 30px 0 0; padding-right: 500px; }
    .hero__badges-sp img { width: 80%; display: block; }

    /* SP・タブレット用CTA */
    .hero__cta-sp { display: block; padding-right: 520px; margin-top: 40px; }
    .hero__cta-sp img { width: 100%; display: block; border-radius: 0; animation: header-cta-pulse 2s linear infinite; }

    /* SP注釈テキスト */
    .hero__note-sp {
      font-family: "Noto Sans JP", sans-serif;
      font-size: 12px; font-weight: 400; color: #fff;
      line-height: 1.8; margin-top: 20px;
    }

    /* タブレット (768px〜1024px) */
    @media (max-width: 1024px) {
      .hero { min-height: 750px; padding: 0 30px; }
      .hero__heading { font-size: 45px; }
      .hero__badges-sp { margin: 20px 0 0; padding-right: 0; }
      .hero__badges-sp img { width: 60%; }
      .hero__cta-sp { padding-right: 200px; }
    }

    /* モバイル (max-width: 767px) */
    @media (max-width: 767px) {
      .hero {
        min-height: 480px;
        padding: 130px 10px 20px;
        margin-top: 0;
        justify-content: flex-start;
        background-image: url('/bytech/assets/images/Gemini_Generated_Image_vu6vv2vu6vv2vu6v.webp');
        background-position: -25px -15px;
        background-repeat: no-repeat;
        background-size: 470px auto;
      }
      .hero::before {
        background-image: linear-gradient(360deg, #000 40%, rgba(255,255,255,0) 70%);
        opacity: 0.5;
      }
      /* SP: <img>ベースの背景は使わずCSS背景に切替 */
      .hero__bg { display: none; }
      .hero__inner { align-items: flex-start; padding: 0; }
      .hero__body-sp {
        align-items: flex-start;
        text-align: start;
        width: 100%;
      }
      /* SP widgets: elementor-widget-container相当のラッパー構造 */
      .hero__sp-widget {
        align-self: flex-start;
        width: 100%;
      }
      .hero__sp-widget--logo { margin-top: 20px; width: 55%; }
      .hero__sp-widget--line1 { margin-top: 15px; }
      .hero__sp-widget--line2 { margin-top: 7px; }
      .hero__sp-widget--line3 { margin-top: 7px; }
      .hero__sp-widget--stats { margin-top: 20px; width: 80%; }
      .hero__sp-widget--notes { margin-top: 10px; }
      .hero__logo-sp { width: 100%; }
      .hero__logo-sp img { width: 100%; height: auto; display: block; }
      .hero__heading--sp,
      .hero__heading--sp.hero__heading-line1,
      .hero__heading--sp.hero__heading-line2,
      .hero__heading--sp.hero__heading-line3 { font-size: 26px; font-weight: 800; margin: 0; }
      .hero__heading--sp.hero__heading-line2 { font-size: 25px; }
      .hero__stats-sp { width: 100%; }
      .hero__stats-sp img { width: 100%; height: auto; display: block; }
      .hero__note-sp {
        font-size: 8px;
        margin: 0;
        line-height: 1.6;
        text-align: start;
      }
      .hero__cta-sp { padding-right: 0; }
    }
      
    
    /* ===== Section Header Common ===== */
    .plan-header { text-align: center; margin: 20px auto 50px; position: relative; overflow: hidden; }
    .plan-header::before {
      content: ''; position: absolute; inset: 0;
      background-image: url('/bytech/assets/images/plan.svg');
      background-position: center 30px; background-repeat: no-repeat; background-size: 0% auto;
      opacity: 0.03; pointer-events: none; z-index: 0;
      width:400px; height: auto; top: -60px; left: 50%; transform: translateX(-50%);
    }
    .plan-header__tag {
      font-family: "Reem Kufi", sans-serif;
      font-weight: 700; letter-spacing: 0.05em; color: var(--color-accent);
      text-align: center; margin: 5px 0 0; display: block;
    }
    .plan-header__ttl { font-size: clamp(22px, 3.5vw, 34px); font-weight: 900; line-height: 1.4; }
    .plan-header__sub { font-size: 15px; color: var(--color-text-light); margin-top: 12px; line-height: 1.8; }

    /* ===== Consultation Form (mobile only) ===== */
    .consult-form-section {
      display: none;
      background: #fff;
      padding: 20px 0;
    }
    @media (max-width: 767px) {
      .consult-form-section { display: block; }
    }
    .consult-form__heading {
      font-family: "Noto Sans JP", sans-serif;
      font-size: 25px; font-weight: 600; letter-spacing: 0.03em;
      color: #000; text-align: center; margin: 0 0 0;
    }
    .consult-form__subheading {
      font-family: "Noto Sans JP", sans-serif;
      font-size: 16px; font-weight: 600; letter-spacing: 0.03em;
      text-align: center; margin: 10px 0 0; color: #000;
    }
    .consult-form__subheading .accent { color: #533AFC; }

    /* ── cs-wrapper: CSS変数 ── */
    .consult-form-section {
      --cs-navy: #0B1D3A;
      --cs-blue: #533AFC;
      --cs-blue-dark: #3D28D4;
      --cs-blue-light: #EEEAFF;
      --cs-accent: #00B4D8;
      --cs-green: #10B981;
      --cs-green-light: #ECFDF5;
      --cs-red: #EF4444;
      --cs-card: #FFFFFF;
      --cs-text: #1A2638;
      --cs-text-sub: #5E7082;
      --cs-border: #E2E8F0;
      --cs-gray: #F4F6F9;
      --radius: 12px;
      --shadow: 0 4px 20px rgba(0,30,80,0.08);
    }
    /* ── cs-wrapper本体 ── */
    .cs-wrapper { max-width: 440px; margin: 0 auto; padding: 0 14px; font-family: "Noto Sans JP", sans-serif; }
    .cs-header { text-align: center; padding: 20px 0 14px; }
    .cs-progress { display: flex; align-items: center; justify-content: center; margin: 0 0 16px; }
    .cs-step { display: flex; flex-direction: column; align-items: center; flex: 1; z-index: 2; }
    .cs-dot { width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; background: var(--cs-gray); color: var(--cs-text-sub); border: 2px solid var(--cs-border); transition: all 0.4s; }
    .cs-step.active .cs-dot { background: var(--cs-blue); color: #fff; border-color: var(--cs-blue); box-shadow: 0 0 0 4px rgba(83,58,252,0.15); animation: 2s ease-in-out infinite csDotPulse; }
    .cs-step.done .cs-dot { background: var(--cs-green); color: #fff; border-color: var(--cs-green); animation: none; }
    .cs-step.done .cs-dot-num { display: none; }
    .cs-step.done .cs-dot::after { content: '✓'; font-size: 13px; }
    @keyframes csDotPulse { 0%,100% { box-shadow: 0 0 0 4px rgba(83,58,252,0.15); } 50% { box-shadow: 0 0 0 7px rgba(83,58,252,0.07); } }
    .cs-dot-label { font-size: 10px; font-weight: 600; color: var(--cs-text-sub); margin-top: 4px; white-space: nowrap; }
    .cs-step.active .cs-dot-label, .cs-step.done .cs-dot-label { color: var(--cs-blue); }
    .cs-conn { flex: 0.4; height: 2px; background: var(--cs-border); margin-bottom: 18px; border-radius: 1px; overflow: hidden; }
    .cs-conn-fill { height: 100%; width: 0%; background: linear-gradient(90deg, var(--cs-green), var(--cs-blue)); transition: width 0.5s; }
    .cs-conn.filled .cs-conn-fill { width: 100%; }
    .cs-conn.half .cs-conn-fill { width: 50%; }
    .cs-card { background: var(--cs-card); border-radius: var(--radius); box-shadow: var(--shadow); overflow: hidden; }
    .cs-card-accent { height: 3px; background: linear-gradient(90deg, var(--cs-navy), var(--cs-blue)); }
    .cs-card-body { padding: 24px 20px; }
    .cs-panel { display: none; animation: 0.3s ease-out csFade; }
    .cs-panel.active { display: block; }
    @keyframes csFade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
    .cs-day-toggle { display: flex; background: var(--cs-gray); border-radius: 10px; padding: 4px; margin-bottom: 20px; }
    .cs-day-btn { flex: 1; padding: 12px 8px; text-align: center; border: none; border-radius: 8px; background: transparent; font-family: inherit; font-size: 14px; font-weight: 600; color: var(--cs-text-sub); cursor: pointer; transition: all 0.25s; }
    .cs-day-btn.active { background: var(--cs-blue); color: #fff; box-shadow: 0 2px 8px rgba(83,58,252,0.3); }
    .cs-day-btn:not(.active):hover { background: rgba(83,58,252,0.08); color: var(--cs-blue); }
    .cs-day-btn .cs-day-label { display: block; font-size: 11px; font-weight: 500; opacity: 0.8; margin-top: 2px; }
    .cs-day-btn.active .cs-day-label { opacity: 1; }
    .cs-slots { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
    .cs-slot { border: 2px solid var(--cs-border); border-radius: 10px; padding: 14px 6px; text-align: center; cursor: pointer; transition: all 0.2s; background: var(--cs-card); }
    .cs-slot:hover { border-color: #c4b9fd; transform: translateY(-1px); }
    .cs-slot.selected { border-color: var(--cs-blue); background: var(--cs-blue-light); box-shadow: 0 0 0 3px rgba(83,58,252,0.12); }
    .cs-slot-time { font-size: 20px; font-weight: 600; color: var(--cs-text); letter-spacing: -0.5px; }
    .cs-slot.selected .cs-slot-time { color: var(--cs-blue); }
    .cs-cap { font-size: 10px; font-weight: 700; margin-top: 4px; padding: 1px 6px; border-radius: 4px; display: inline-block; }
    .cs-cap-ok { background: #e6f9ee; color: #059669; }
    .cs-cap-few { background: #fff7e6; color: #d97706; }
    .cs-cap-last { background: #fee2e2; color: #dc2626; }
    .cs-no-slots { text-align: center; padding: 28px 16px; color: var(--cs-text-sub); grid-column: span 3; }
    .cs-no-slots p { font-size: 14px; margin-bottom: 4px; }
    .cs-no-slots small { font-size: 12px; }
    .cs-skeleton { height: 72px; border-radius: 10px; background: linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%); background-size: 200% 100%; animation: 1.5s infinite csSkeletonAnim; }
    @keyframes csSkeletonAnim { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
    .cs-time-bar { display: flex; align-items: center; gap: 8px; background: var(--cs-blue-light); color: var(--cs-blue); font-size: 13px; font-weight: 600; padding: 10px 14px; border-radius: 8px; margin-bottom: 20px; border-left: 3px solid var(--cs-blue); }
    .cs-time-bar svg { width: 16px; height: 16px; flex-shrink: 0; }
    .cs-field { margin-bottom: 16px; }
    .cs-label { display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: var(--cs-text); margin-bottom: 5px; }
    .cs-req { font-size: 9px; font-weight: 700; color: #fff; background: var(--cs-red); padding: 1px 5px; border-radius: 3px; }
    .cs-input { width: 100%; padding: 12px 14px; font-size: 15px; font-family: inherit; color: var(--cs-text); background: var(--cs-gray); border: 2px solid transparent; border-radius: 8px; outline: none; transition: all 0.2s; -webkit-appearance: none; }
    .cs-input:focus { background: #fff; border-color: var(--cs-blue); box-shadow: 0 0 0 3px rgba(83,58,252,0.1); }
    .cs-input.error { border-color: var(--cs-red); background: #fef2f2; }
    .cs-input::placeholder { color: #a0aec0; }
    .cs-err { font-size: 11px; color: var(--cs-red); margin-top: 3px; display: none; }
    .cs-err.show { display: block; }
    .cs-btn-row { display: flex; gap: 8px; margin-top: 24px; }
    .cs-btn { flex: 1; padding: 14px 16px; font-size: 15px; font-family: inherit; font-weight: 700; border: none; border-radius: 8px; cursor: pointer; transition: all 0.2s; -webkit-appearance: none; }
    .cs-btn:active { transform: scale(0.98); }
    .cs-btn-next { background: var(--cs-blue); color: #fff; box-shadow: 0 2px 8px rgba(83,58,252,0.25); }
    .cs-btn-next:hover { background: var(--cs-blue-dark); }
    .cs-btn-next:disabled { background: #b0c4de; box-shadow: none; cursor: not-allowed; }
    .cs-btn-back { background: var(--cs-gray); color: var(--cs-text-sub); flex: 0.4; }
    .cs-btn-back:hover { background: var(--cs-border); }
    .cs-btn-submit { background: linear-gradient(135deg, var(--cs-navy), var(--cs-blue)); color: #fff; box-shadow: 0 4px 16px rgba(83,58,252,0.25); position: relative; overflow: hidden; }
    .cs-btn-submit:hover { box-shadow: 0 6px 20px rgba(83,58,252,0.35); transform: translateY(-1px); }
    .cs-btn-submit:active { transform: translateY(0) scale(0.98); }
    .cs-btn-submit::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent); transform: translateX(-100%); animation: 3s infinite csShine; }
    @keyframes csShine { 0% { transform: translateX(-100%); } 30%, 100% { transform: translateX(100%); } }
    .cs-btn .cs-spinner { display: none; width: 18px; height: 18px; border: 2px solid rgba(255,255,255,0.3); border-top-color: #fff; border-radius: 50%; animation: 0.6s linear infinite csSpin; margin: 0 auto; }
    .cs-btn.loading .cs-btn-text { display: none; }
    .cs-btn.loading .cs-spinner { display: inline-block; }
    @keyframes csSpin { to { transform: rotate(360deg); } }
    .cs-counter { text-align: center; font-size: 11px; color: var(--cs-text-sub); margin-top: 12px; }
    .cs-view-all { text-align: center; margin-top: 14px; }
    .cs-view-all a { display: inline-flex; align-items: center; gap: 5px; color: var(--cs-blue); font-size: 13px; font-weight: 600; text-decoration: none; padding: 8px 18px; border: 1.5px solid var(--cs-blue); border-radius: 24px; transition: all 0.2s; }
    .cs-view-all a:hover { background: var(--cs-blue-light); }
    .cs-view-all a svg { width: 14px; height: 14px; }
    @media (max-width: 380px) {
      .cs-wrapper { padding: 0 10px; }
      .cs-card-body { padding: 20px 16px; }
      .cs-slots { grid-template-columns: repeat(2, 1fr); }
      .cs-no-slots { grid-column: span 2; }
      .cs-slot-time { font-size: 18px; }
    }

    /* ===== SP Popup Modal (SP only) ===== */
    .sp-popup-overlay {
      display: none;
      position: fixed; inset: 0;
      background: rgba(0,0,0,0.75);
      z-index: 99999;
      align-items: center;
      justify-content: center;
      padding: 16px;
    }
    .sp-popup-overlay.is-active { display: flex; }
    .sp-popup-modal {
      position: relative;
      background: #fff;
      border-radius: 12px;
      width: 100%;
      max-width: 340px;
      overflow: hidden;
      box-shadow: 0 8px 40px rgba(0,0,0,0.35);
    }
    .sp-popup-close {
      position: absolute;
      top: 8px; right: 8px;
      width: 28px; height: 28px;
      background: rgba(0,0,0,0.55);
      border: none;
      border-radius: 50%;
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      line-height: 1;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      z-index: 2;
      padding: 0;
    }
    .sp-popup-image { width: 100%; }
    .sp-popup-image img { display: block; width: 100%; height: auto; }
    .sp-popup-body {
      padding: 20px 20px 24px;
      text-align: center;
    }
    .sp-popup-sub {
      font-size: 13px;
      font-weight: 700;
      color: #191722;
      margin-bottom: 4px;
      letter-spacing: 0.05em;
    }
    .sp-popup-heading {
      font-size: 32px;
      font-weight: 900;
      color: #191722;
      line-height: 1.2;
      margin: 0 0 18px;
      letter-spacing: 0.02em;
    }
    .sp-popup-badge {
      display: block;
      font-size: 11px;
      font-weight: 700;
      color: #4caf50;
      letter-spacing: 0.05em;
      margin-bottom: 8px;
    }
    .sp-popup-line-btn {
      display: block;
      background: #06c755;
      color: #fff;
      border-radius: 6px;
      padding: 14px 20px;
      font-size: 18px;
      font-weight: 700;
      text-decoration: none;
      text-align: center;
      margin-bottom: 18px;
      letter-spacing: 0.05em;
      box-shadow: 0 4px 16px rgba(6,199,85,0.35);
    }
    .sp-popup-line-inner {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
    .sp-popup-line-icon {
      width: 28px; height: 28px;
      background: #fff;
      border-radius: 6px;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .sp-popup-line-icon svg { width: 22px; height: 22px; }
    .sp-popup-footer { text-align: center; }
    .sp-popup-footer img { height: 28px; width: auto; display: block; margin: 0 auto 6px; }
    .sp-popup-footer p { font-size: 10px; color: #888; margin: 0; }
    @media (min-width: 768px) {
      .sp-popup-overlay { display: none !important; }
    }

    /* ── cs-wrapper: Step3 confirmation ── */
    .cs-confirm { margin-bottom: 16px; }
    .cs-confirm__heading { font-size: 11px; font-weight: 700; color: var(--cs-text-sub); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; padding-bottom: 5px; border-bottom: 1px solid var(--cs-border); }
    .cs-confirm__row { display: flex; justify-content: space-between; padding: 6px 0; font-size: 14px; }
    .cs-confirm__label { color: var(--cs-text-sub); }
    .cs-confirm__value { font-weight: 600; }
    .cs-confirm__value--email { word-break: break-all; }
    .cs-privacy { text-align: center; font-size: 11px; color: var(--cs-text-sub); margin-top: 12px; line-height: 1.5; }
    .cs-privacy a { color: var(--cs-blue); text-decoration: underline; }

    /* ===== Student Voices (Carousel) ===== */
    .voices {
      background: #342696; position: relative; 
          --background-overlay: '';

      padding: 30px 70px 50px;
    }
    @media (max-width: 1024px) {
      .voices { padding: 30px 30px 50px; }
    }
    @media (max-width: 767px) {
      .voices {
        margin-top: 0;
        padding: 40px 20px 30px;
        background-image: url('/bytech/assets/images/cta_bg.svg');
        background-size: cover;
        background-position: center center;
      }
    }
    .voices__overlay {
      position: absolute; inset: 0; pointer-events: none; z-index: 0;
    }
    @media (max-width: 767px) {
      .voices__overlay { background: rgba(52, 38, 150, 0.5); }
    }
    .voices__inner { position: relative; z-index: 1; margin: -70px 0 0; }
    .voices__heading-sp {
      display: none; color: #fff; font-size: 20px; font-weight: 600;
      font-family: "Noto Sans JP", sans-serif;
      text-align: center; line-height: 1.6em; letter-spacing: 0.05em; margin: 0;
    }
    .voices__underline-sp { display: none; text-align: center; margin: 10px 0 0; }
    .voices__underline-sp img { width: 100%; height: auto; display: block; }
    @media (max-width: 767px) {
      .voices__heading-sp { display: block; }
      .voices__underline-sp { display: block; }
    }
    .voices__carousel-wrap { position: relative; }
    .voices__carousel {
      display: flex; gap: 15px;
      overflow-x: auto; scroll-snap-type: x mandatory;
      padding-bottom: 20px; cursor: grab;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }
    .voices__carousel::-webkit-scrollbar { display: none; }
    .voices__item {
      flex: 0 0 calc(25% - 12px); scroll-snap-align: start;
    }
    @media (max-width: 1024px) {
      .voices__item { flex: 0 0 calc(33.333% - 10px); }
    }
    @media (max-width: 767px) {
      .voices__inner { margin-top: 0; }
      .voices__carousel-wrap { padding: 0 40px; }
      .voices__item { flex: 0 0 100%; scroll-snap-align: start; }
      .voices__carousel { gap: 15px; padding-bottom: 0; margin-top: 20px; }
    }
    .voices__item img {
      width: 100%; display: block;
      border: 3px solid #fff; border-radius: 5px;
    }
    .voices__btn {
      position: absolute; top: 50%; transform: translateY(-50%);
      width: 40px; height: 40px; background: rgba(255,255,255,0.2);
      border: none; border-radius: 50%; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      z-index: 2; transition: background 0.2s;
    }
    .voices__btn:hover { background: rgba(255,255,255,0.4); }
    .voices__btn--prev { left: -50px; }
    .voices__btn--next { right: -50px; }
    @media (max-width: 767px) {
      .voices__btn {
        display: inline-flex;
        background: transparent;
        width: auto; height: auto;
        padding: 0;
      }
      .voices__btn:hover { background: transparent; }
      .voices__btn--prev { left: 10px; }
      .voices__btn--next { right: 10px; }
    }
    .voices__btn svg { width: 27px; height: 27px; fill: #fff; }
    .voices__dots {
      display: flex; justify-content: center; gap: 6px; margin-top: 16px;
    }
    .voices__dot {
      width: 5px; height: 5px; border-radius: 50%;
      background: #fff; opacity: 0.5; cursor: pointer;
      border: none; padding: 0; transition: opacity 0.2s;
    }
    .voices__dot.active { opacity: 1; }
    @media (max-width: 767px) {
      .voices__dots { gap: 4px; margin-top: 16px; }
      .voices__dot { width: 6px; height: 6px; }
    }

    /* ===== About SP Stats (adb3ee1 — SP only) ===== */
    .about-sp-stats {
      display: none;
    }
    @media (max-width: 767px) {
      .about-sp-stats {
        display: block;
        position: relative;
        background-color: #353535;
        background-image: url('/bytech/assets/images/背景-1.svg');
        background-repeat: no-repeat;
        background-size: cover;
        margin-top: 40px;
        padding: 35px 0 85px;
        overflow: hidden;
      }
      /* white overlay at opacity 0.9 */
      .about-sp-stats::before {
        content: '';
        position: absolute;
        inset: 0;
        background-color: #fff;
        opacity: 0.9;
        pointer-events: none;
        z-index: 0;
      }
      .about-sp-stats__inner {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      }
      /* divider: solid black 1px, 90% width, 5px vertical padding */
      .about-sp-stats__divider-wrap {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 5px 0;
      }
      .about-sp-stats__divider {
        width: 90%;
        border: none;
        border-top: 1px solid #000;
        margin: 0;
      }
      /* heading: 20px on SP (reduced from 32px desktop) */
      .about-sp-stats__heading {
        font-family: "Noto Sans JP", sans-serif;
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 0.05em;
        color: #191722;
        text-align: center;
        line-height: 1.6;
        margin: 0;
        padding: 0;
      }
      .about-sp-stats__heading .accent {
        font-size: 1.4em;
        color: #583FFD;
      }
      /* KV image: margin-top 10px on SP */
      .about-sp-stats__kv {
        width: 100%;
        margin-top: 10px;
        box-sizing: border-box;
      }
      .about-sp-stats__kv img {
        width: 100%;
        height: auto;
        display: block;
      }
      /* photos: stacked (100% width each) on SP */
      .about-sp-stats__photo {
        width: 100%;
      }
      .about-sp-stats__photo--first {
        margin: 10px 5px 0 0;
      }
      .about-sp-stats__photo--second {
        margin: -10px 0 0 5px;
      }
      .about-sp-stats__photo img {
        width: 100%;
        height: auto;
        display: block;
      }
      /* tilt shape divider bottom, height 60px */
      .about-sp-stats__shape {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        z-index: 2;
      }
      .about-sp-stats__shape svg {
        display: block;
        width: calc(200% + 1.3px);
        height: 60px;
        transform: translateX(-50%) rotateY(180deg);
      }
      .about-sp-stats__shape .shape-fill {
        fill: #342696;
      }
    }

    /* ===== Campaign Banner ===== */
    .campaign-banner {
      background: #fff;
      padding: 50px 0;
    }
    .campaign-banner__inner {
      max-width: 1300px;
      margin: 0 auto;
      padding: 0 40px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 0;
    }
    .campaign-banner__media {
      width: auto;
      max-width: 55%;
      flex-shrink: 0;
      flex-grow: 0;
    }
    .campaign-banner__link {
      display: block;
      width: 100%;
    }
    .campaign-banner__image {
      display: block;
      width: 100%;
      height: auto;
      border: 1px solid #dadada;
    }
    .campaign-banner__content {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 50px;
      padding-left: 40px;
    }
    @media (max-width: 1024px) {
      .campaign-banner__inner { padding: 0 24px; }
      .campaign-banner__media { width: 50%; max-width: 50%; }
    }
    @media (max-width: 767px) {
      .campaign-banner { padding: 30px 16px; }
      .campaign-banner__inner { flex-direction: column; }
      .campaign-banner__media { width: 100%; max-width: 100%; }
      .campaign-banner__content { padding-left: 0; padding-top: 24px; width: 100%; }
    }

    /* ===== About Section ===== */
    .about {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 140px 24px 200px;
      background: #fff;
      position: relative;
    }
    .about::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url('/bytech/assets/images/パス-36596.svg');
      background-position: auto;
      background-repeat: no-repeat;
      background-size: 100% auto;
      opacity: 0.03;
      pointer-events: none;
      z-index: 0;
    }
    .about > * { position: relative; z-index: 1; }
    .about__card > * { position: relative; z-index: 1; }
    .about__card {
      width: 70%;
      max-width: 1100px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 0 12px 0 rgba(0,0,0,.38);
      padding: 40px 50px 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }

    .about__card::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 10px;
      background-image: url('/bytech/assets/images/背景ipad-scaled.webp');
      background-position: 0 0;
      background-repeat: no-repeat;
      background-size: 100% auto;
      opacity: 0.1;
      pointer-events: none;
      z-index: 0;
    }
    /* floating badge above card */
    .about__badge {
      width: 30%;
      min-width: 200px;
      max-width: 320px;
      margin-top: -80px;
      margin-bottom: 0;
      z-index: 1;
      text-align: center;
    }
    .about__badge img { width: 100%; height: auto; display: block; }
    /* two-column row: heading (left) + no1 badge (right) */
    .about__body {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0 40px;
      margin-top: 50px;
      width: 100%;
    }
    .about__body-left {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .about__body-text {
      display: flex;
      flex-direction: column;
    }
    .about__heading-main {
      font-family: "Noto Sans JP", sans-serif;
      font-size: 24px;
      font-weight: 600;
      color: #191722;
      letter-spacing: .07em;
      line-height: 1.6;
      margin: 0;
      text-align: center;
    }
    .about__heading-highlight {
      font-family: "Noto Sans JP", sans-serif;
      font-size: 34px;
      font-weight: 600;
      color: #fff;
      letter-spacing: .05em;
      line-height: 1.4;
      margin: 10px 0 0;
      background: var(--color-primary);
      display: inline-block;
      padding: 4px 14px;
    }
    .about__sub {
      font-family: "Noto Sans JP", sans-serif;
      text-align: center;
      font-size: 22px;
      font-weight: 600;
      color: #191722;
      letter-spacing: .05em;
      margin: 12px 0 0;
    }
    .about__body-right {
      flex-shrink: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .about__no1 {
      width: 50%;
      min-width: 140px;
      
    }
    .about__no1 img { width: 100%; height: auto; display: block; }
    .about__no1-sp { display: none; }
    /* KV image */
    .about__kv {
      width: 50%;
      max-width: 700px;
      margin-top: 40px;
    }
    .about__kv img { width: 100%; height: auto; display: block; border-radius: var(--radius); }
    .about__note {
      font-size: 11px;
      color: var(--color-text-light);
      margin-top: 24px;
      text-align: center;
    }
    @media (max-width: 1024px) {
      .about { padding: 120px 24px 5px; }
      .about__card { padding: 40px 30px 50px; }
      .about__heading-main { font-size: 20px; }
      .about__heading-highlight { font-size: 28px; }
      .about__sub { font-size: 18px; }
    }
    @media (max-width: 767px) {
      .about { padding: 100px 16px 5px; }
      .about::before { background-size: 100% auto; background-position: 0 0; }
      .about__card { padding: 20px 30px 30px; }
      .about__badge { width: 55%; min-width: unset; max-width: unset; margin-top: -30px; }
      .about__body { flex-direction: column; gap: 0; margin-top: 20px; }
      .about__body-left { flex-direction: column; align-items: center; }
      .about__body-text { margin-top: 25px; align-items: center; }
      .about__heading-main { font-size: 14px; letter-spacing: 0.08em; text-align: center; }
      .about__heading-highlight { font-size: 19px; }
      .about__sub { font-size: 17px; }
      .about__body-right { display: none; }
      .about__no1-sp { width: 50%; display: block; }
      .about__no1-sp img { width: 100%; height: auto; display: block; }
      .about__kv { width: 90%; margin-top: 20px; }
      .about__note { font-size: 9px; padding: 0 0 0 10px; text-align: start; margin-top: 12px; }
    }

    /* ===== Problem Section ===== */
    #problem {
      padding: 80px 0;
      background: #fff;
      position: relative;
      overflow: hidden;
    }
    .problem__bg-text {
      position: absolute;
      top: 0; left: 50%;
      transform: translateX(-50%);
      font-family: "Reem Kufi", sans-serif;
      font-size: clamp(80px, 15vw, 200px);
      font-weight: 900;
      color: rgba(0,0,0,0.03);
      white-space: nowrap;
      pointer-events: none;
      z-index: 0;
    }
    .problem__inner {
      max-width: var(--max-width);
      margin: 0 auto;
      padding: 0 24px;
      position: relative;
      z-index: 1;
    }
    .problem__inner::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url('/bytech/assets/images/problem.svg');
      background-position: top center;
      background-repeat: no-repeat;
      background-size: 50% auto;
      opacity: 0.05;
      pointer-events: none;
      z-index: 0;
      margin-top: -20px;
    }
    .problem__inner > * { position: relative; z-index: 1; }
    .problem__head {
      text-align: center;
      margin-bottom: 56px;
    }
    .problem__h2 {
      font-size: clamp(24px, 4vw, 32px);
      font-weight: 900;
      line-height: 1.5;
    }
    .problem__h2-sp {
      display: none;
    }
    .problem__label {
      margin-top: 8px;
      font-size: 13px;
      color: var(--color-accent);    
      font-family: "Reem Kufi", Sans-serif;
      font-weight: bold;
      letter-spacing: .05em;
    }
    .problem__body {
      display: flex;
      align-items: center;
      gap: 48px;
      max-width: 1000px;
      margin: 0 auto;
    }
    .problem__illust {
      flex: 0 0 40%;
      max-width: 360px;
    }
    .problem__illust img {
      width: 100%;
    }
    .problem__list {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    .problem__item {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      font-size: clamp(15px, 2.5vw, 18px);
      line-height: 1.6;
      font-weight: 700;
    }
    .problem__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    .problem__icon svg {
      width: 28px;
      height: 28px;
    }
    .problem__item-text .hl {
      color: #D4215F;
      font-weight: 700;
    }
    .problem__bottom {
      /* PC: transparent wrapper — no visual change */
    }
    .problem__arrow {
      text-align: center;
      margin: 48px 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .problem__arrow-img { display: block; width: auto; height: auto; }
    .problem__cta {
      text-align: center;
    }
    .problem__badge {
      display: inline-block;
      background: var(--color-primary);
      color: #fff;
      font-size: clamp(22px, 3.5vw, 32px);
      font-weight: 900;
      padding: 2px 32px;
      margin-bottom: 16px;
    }
    .problem__subtitle-pc {
      font-size: clamp(20px, 3vw, 30px);
      font-weight: 900;
      line-height: 1.5;
      display: block;

    }
    .problem__subtitle-pc span {
      background: var(--color-primary);
      color: #fff;
      padding: 4px 12px;
    }
    .problem__subtitle-sp {
      display: none;
    }

    @media (max-width: 767px) {
      #problem {
        padding: 20px 0 15px;
        background-image: url('/bytech/assets/images/problem.svg');
        background-repeat: no-repeat;
        background-size: 466px auto;
        background-position: center center;
        background-blend-mode: normal;
      }
      #problem::before {
        content: '';
        position: absolute;
        inset: 0;
        background-color: #fff;
        opacity: 0.95;
        pointer-events: none;
        z-index: 0;
      }
      .problem__bg-text { display: none; }
      .problem__inner::before { background-size: 466px auto; }
      .problem__head { margin-bottom: 0; }
      .problem__h2 { display: none; }
      .problem__h2-sp {
        display: block;
        font-size: 25px;
        font-weight: 900;
        line-height: 1.5;
        text-align: center;
      }
      .problem__h2-sp .accent { color: #533AFC; }
      .problem__icon { width: 22px; height: 22px; flex-shrink: 0; margin-top: 2px; }
      .problem__icon svg { width: 22px; height: 22px; }
      .problem__label {
        font-size: 13px;
        color: var(--color-accent);    
        font-family: "Reem Kufi", Sans-serif;
        font-weight: 700;
        letter-spacing: .05em;
    
      }
      .problem__body {
        flex-direction: column;
        gap: 0;
        margin-top: 0;
      }
      .problem__illust {
        flex: unset;
        max-width: unset;
        width: 80%;
        padding: 0 15px;
        margin: 10px auto 0;
      }
      .problem__list {
        margin-top: 20px;
        width: 100%;
        margin-left: 0;
        padding: 0 15px;
        gap: 16px;
      }
      .problem__item {
        font-size: 15px;
        line-height: 1.2em;
      }
      .problem__item-text .hl {
        background: none;
        color: #D4215F;
      }
      /* SP: arrow + cta wrapper — white background, no dark overlay */
      .problem__bottom {
        text-align: center;
        margin-top: 30px;
      }
      .problem__arrow { margin: 0 0 16px; }
      /* "バイテックなら" — blue rect bg, white text, matching element-354ec61 */
      .problem__badge {
        display: inline;
        background: #583FFD;
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 0.05em;
        padding: 5px 10px;
        border-radius: 0;
        margin-bottom: 0;
      }
      .problem__subtitle-pc { display: none; }
      /* SP subtitle — matching element-5297cb8 */
      .problem__subtitle-sp {
        display: block;
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 0.05em;
        color: #191722;
        text-align: center;
        margin-top: 5px;
      }
      .problem__subtitle-sp span {
        background: #583FFD;
        color: #fff;
        padding: 5px 10px;
      }
    }

    /* ===== Environment Section ===== */
    #environment {
      background: #191722;
      padding-top: 110px;
      padding-bottom: -1080px;
      position: relative;
      height: 1100px;
    }

    /* Triangle shape divider (top) */
    .env__shape-top {
      position: absolute;
      top: -1px; left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;
      z-index: 1;
    }
    .env__shape-top svg {
      display: block;
      width: calc(100% + 2px);
      margin-left: -1px;
    }

    /* ── 3af9416e outer wrapper ── */
    .env3af {
      max-width: 1200px;
      margin: 40px auto 0;
      padding: 0 24px;
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      box-sizing: border-box;
    }

    /* ── 86fc962: heading block ── */
    .env3af__head {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 30px 0;
    }
    /* desktop h2 (84e1b66) */
    .env3af__h2 {
      font-family: "Noto Sans JP", sans-serif;
      font-size: 32px;
      font-weight: 600;
      color: #fff;
      letter-spacing: 0.03em;
      line-height: 1.4;
      margin: 0;
    }
    /* mobile h2 (f345ac3) — hidden on desktop */
    .env3af__h2-mobile {
      display: none;
      font-family: "Noto Sans JP", sans-serif;
      font-size: 28px;
      font-weight: 600;
      color: #fff;
      letter-spacing: 0.03em;
      line-height: 1.4;
      margin: 0;
    }
    /* ENVIRONMENT label (f942961) */
    .env3af__label {
      font-family: "Reem Kufi", sans-serif;
      font-size: 16px;
      font-weight: 700;
      color: var(--color-accent);
      letter-spacing: 0.05em;
      margin: 10px 0 0;
    }

    /* ── 3eda783: unique box ── */
    .env3af__body {
      width: 100%;
      max-width: 1000px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 15px;
      box-sizing: border-box;
    }

    /* slash dividers (67b4bce / 68206a1) */
    .env3af__divider {
      width: 80%;
      height: 10px;
      margin: 15px auto;
      background-image: repeating-linear-gradient(
        -60deg,
        transparent, transparent 6px,
        #B4A481 6px, #B4A481 9px
      );
    }

    /* path-36598.svg — desktop only (c6b2bd6) */
    .env3af__deco-desktop {
      width: 80%;
      height: auto;
      display: block;
      margin: 0 auto;
    }
    /* group-20914.svg — mobile only (21cf8a9) */
    .env3af__deco-mobile {
      display: none;
      width: 180px;
      height: auto;
    }

    /* 6fb2cab8: "あなた専用のカリキュラムとサポートで" */
    .env3af__sub1 {
      font-family: "Noto Sans JP", sans-serif;
      font-size: 28px;
      font-weight: 600;
      color: #fff;
      letter-spacing: 0.05em;
      line-height: 1.3em;
      text-align: center;
      margin: 0;
      padding: 40px 0 0;
    }
    /* 84e12ea: "最短で学びを成果に変える" */
    .env3af__sub2 {
      font-family: "Noto Sans JP", sans-serif;
      font-size: 28px;
      font-weight: 600;
      color: #fff;
      letter-spacing: 0.05em;
      line-height: 1.3em;
      text-align: center;
      margin: 0;
      padding: 5px 0 0;
    }

    /* ── 7910406: 3 images row ── */
    .env3af__images {
      width: 100%;
      max-width: 1000px;
      margin: 25px auto 0;
      display: flex;
      flex-direction: row;
      gap: 0;
    }
    .env3af__img {
      width: 45%;
      display: flex;
      align-items: center;
    }
    .env3af__img img {
      width: 100%;
      height: auto;
      display: block;
    }
    .env3af__sep {
      width: 8%;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 45px;
      padding: 10px 0 15px;
    }
    .env3af__sep img {
      display: block;
      height: auto;
      max-width: 24px;
    }

    /* ── responsive ── */
    @media (max-width: 767px) {
      #environment { padding-top: 60px; padding-bottom: 200px; }
      .env3af__h2 { display: none; }
      .env3af__h2-mobile { display: block; }
      .env3af__deco-desktop { display: none; }
      .env3af__deco-mobile { display: block; }
      .env3af__sub1, .env3af__sub2 { font-size: 17px; }
      .env3af__images { flex-direction: column; align-items: center; }
      .env3af__img { width: 90%; }
      .env3af__sep { width: auto; transform: rotate(90deg); padding: 8px 0; }
    }
    @media (max-width: 1024px) { .env__arrow { width: 4%; position: absolute; } }
   
    /* Mentor card overlapping block */
    .env__mentor-wrap {
      position: relative;
      bottom: -210px;
      left: 0;
      right: 0;
      z-index: 3;
      padding: 0 24px;
      margin-top: -100px;
    }
    .env__mentor {
      position:absolute;
      max-width: 1000px;
      margin: 0 auto;
      background: #fff;
      margin-top: -130px;
      box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 90px 40px 60px;
      text-align: center;
      position: relative;
    }
    .env__mentor-shape-top {
      position: absolute;
      top: -50px;
      left: auto;
      width: 150px;
      height: 80px;
      line-height: 0;
      overflow: hidden;
      direction: ltr;
    }
    .env__mentor-shape-top svg {
      display: block;
      width: calc(100% + 1.3px);
      height: 80px;
    }
    .env__mentor-shape-fill {
      fill: #191722;
    }
    /* PC: frame wrapper is neutral */
    .env__mentor-heading-frame { }
    .env__mentor-heading {
      display: block;
      max-width: 550px;
      height: auto;
      margin: 0 0 8px;
    }
    .env__mentor-sub {
      font-family: "Noto Sans JP", sans-serif;
      font-size: clamp(16px, 1.4vw, 14px);
      font-weight: 700;
      color: #000;
      line-height: 1.8;
      margin: 0 0 40px;
    }
    .env__mentor-grid {
      width: 100%;
      max-width: 900px;
      margin-bottom: 40px;
    }
    .env__mentor-grid-img {
      width: 100%;
      height: auto;
      display: block;
    }
    /* PC: show PC image, hide SP image */
    .env__mentor-grid-img--sp { display: none; }
    .env__mentor-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 180px;
    }
    .env__mentor-photo {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: 10px;
    }
    .env__mentor-photo img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .env__mentor-name {
      font-family: "Noto Sans JP", sans-serif;
      font-size: 15px;
      font-weight: 600;
      color: #191722;
      letter-spacing: 0.05em;
      margin: 0 0 4px;
    }
    .env__mentor-tag {
      font-family: "Noto Sans JP", sans-serif;
      font-size: 11px;
      font-weight: 500;
      color: #555;
      letter-spacing: 0.02em;
      line-height: 1.5;
    }
    .env__mentor-cta {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      max-width: 400px;
    }
    .env__mentor-cta-note {
      font-size: 12px;
      color: #555;
      margin: 0;
    }
    .env__mentor-cta-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: var(--color-accent);
      color: #191722;
      font-family: "Noto Sans JP", sans-serif;
      font-size: 16px;
      font-weight: 600;
      padding: 16px 36px;
      border-radius: 50px;
      text-decoration: none;
      letter-spacing: 0.04em;
      transition: opacity 0.2s;
    }
    .env__mentor-cta-btn:hover { opacity: 0.85; }
    .env__mentor-cta img { animation: header-cta-pulse 2s linear infinite; }
    .env__mentor-cta-btn svg {
      flex-shrink: 0;
    }
    .env__arrow-wrap {
      text-align: center;
      margin: 310px 0 20px;
      position: relative;
      z-index: 20;
    }
    .env__arrow {
      display: block;
      margin: 0 auto;
      width: auto;
      height: 50px;
    }
    @media (max-width: 767px) {
      #environment {
        padding-top: 60px;
        padding-bottom: 200px;
      }
      .env__mentor-wrap {
        bottom: -120px;
        margin-top: 0;
      }
      .env__mentor {
        padding: 70px 15px 50px;
      }
      .env__mentor-shape-top svg {
        height: 40px;
      }
      /* SP: fix arrow shape (reference: width calc(10%+1.3px), height 20px) */
      .env__mentor::before {
        width: calc(10% + 1.3px);
        height: 20px;
        top: -19px;
      }
      /* SP: decorative corner-bracket frame around heading */
      .env__mentor-heading-frame {
        width: 100%;
        padding: 18px 20px;
        margin-bottom: 8px;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Crect x='0.5' y='0.5' width='99' height='99' fill='none' stroke='%23191722' stroke-width='0.6'/%3E%3Cpath d='M0.5 16 L0.5 0.5 L16 0.5' stroke='%23191722' stroke-width='2' fill='none' stroke-linecap='square'/%3E%3Cpath d='M84 0.5 L99.5 0.5 L99.5 16' stroke='%23191722' stroke-width='2' fill='none' stroke-linecap='square'/%3E%3Cpath d='M0.5 84 L0.5 99.5 L16 99.5' stroke='%23191722' stroke-width='2' fill='none' stroke-linecap='square'/%3E%3Cpath d='M84 99.5 L99.5 99.5 L99.5 84' stroke='%23191722' stroke-width='2' fill='none' stroke-linecap='square'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      /* SP: heading font size matches reference 360c519 mobile CSS */
      .env__mentor-heading {
        font-size: 22px;
        line-height: 1.7em;
        letter-spacing: 0.04em;
        margin: 0;
        max-width: 100%;
      }
      .env__mentor-card {
        width: 140px;
      }
      .env__mentor-photo {
        width: 90px;
        height: 90px;
      }
      /* SP: swap mentor grid images */
      .env__mentor-grid-img--pc { display: none; }
      .env__mentor-grid-img--sp { display: block; }
      .env__img-sep-legacy {
        flex-direction: column;
        gap: 16px;
      }
      .env__img-sep {
        transform: rotate(90deg);
        width: 30px;
      }
      .env__arrow { width: 8%;  position: absolute; } 
    }

    
    /* ===== If You Had AI Skills (e7cb04a + d392fac) ===== */

    /* e7cb04a: outer section wrapper */
    .voice-section {
      padding: 40px 0 50px;
      background-image: url('/bytech/assets/images/cta_bg.svg');
      background-repeat: no-repeat;
      background-size: cover;
      margin-top: 20px;
      position: relative;
    }
    .voice-section__inner {
      max-width: 1600px;
      margin: 0 auto;
      padding: 0 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    /* 6eae7bf: heading block — PC: absolute at top of voice-section, straddling boundary; SP: static flow below about-sp-stats */
    .voice-section__heading {
      text-align: center;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      width: 100%;
      padding-bottom: 0;
    }
    /* f9f7624: tiny arrow deco — 0.8% desktop */
    .voice-section__arrow {
      display: block;
      margin: 0 auto;
      width: 0.7%;
      height: auto;
    }
    /* bbb0535: "2ヶ月でこう変わる" SVG — 45% desktop, margin-top 40px */
    .voice-section__ttl-deco {
      display: block;
      margin: 40px auto 0;
      width: 40%;
      height: auto;
    }
    /* a6eb53f: "If you had AI utilization skills" — Reem Kufi 12px */
    .voice-section__en {
      font-family: "Reem Kufi", sans-serif;
      font-size: 12px;
      font-weight: 500;
      color: #000;
      letter-spacing: .05em;
      margin-top: 6px;
      text-align: center;
    }

    /* d392fac: carousel section — background same as voice-section (already covered) */
    .voice-carousel-section {
      width: 100%;
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    /* 8abba32: carousel wrap — margin-top 20px, padding 0 desktop */
    .voice-carousel-wrap {
      position: relative;
      width: 100%;
      padding: 0 50px;
      margin-top: 20px;
    }
    /* 6f3df4d: image carousel */
    .voice-carousel {
      overflow: hidden;
    }
    .voice-carousel__track {
      display: flex;
      gap: 15px;
      will-change: transform;
    }
    /* 4 slides visible (slides_to_show: 4) */
    .voice-card {
      flex: 0 0 calc(25% - 11.25px);
      
      box-shadow: 0 0 8px 0 rgba(0,0,0,.21);
      overflow: hidden;
      scroll-snap-align: start;
      flex-shrink: 0;
    }
    .voice-card img {
      width: 100%;
      height: 100%;
      display: block;
    }
    /* 7e2f1b0: disclaimer — Noto Sans JP 12px 300, white, center, margin-top 15px */
    .voice-section__disclaimer {
      font-family: "Noto Sans JP", sans-serif;
      font-size: 12px;
      font-weight: 300;
      line-height: 13px;
      letter-spacing: .05em;
      color: #fff;
      text-align: center;
      margin-top: 15px;
      padding: 0 24px;
    }
    /* 347e5ba: CTA button — #533afc bg, white border 2px, border-radius 100px */
    .voice-section__cta {
      margin-top: 30px;
      text-align: center;
    }
    .voice-section__cta-btn {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      background-color: #533afc;
      font-family: "Noto Sans JP", sans-serif;
      font-size: 22px;
      font-weight: 600;
      letter-spacing: .03em;
      color: #fff;
      border: 2px solid #fff;
      border-radius: 100px;
      padding: 8px 30px;
      text-decoration: none;
      transition: background-color 0.2s, color 0.2s;
    }
    .voice-section__cta-btn:hover { background-color: #fff; color: #533afc; }
    .voice-section__cta-btn svg { fill: #fff; width: 16px; height: 16px; flex-shrink: 0; }
    .voice-section__cta-btn:hover svg { fill: #533afc; }

    /* nav buttons — #ffd464, inside carousel */
    .voice-carousel__btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 42px;
      height: 42px;
      background: transparent;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
    }
    .voice-carousel__btn:hover { opacity: 0.85; }
    .voice-carousel__btn--prev { left: 4px; }
    .voice-carousel__btn--next { right: 4px; }
    .voice-carousel__btn svg { width: 27px; height: 27px; fill: var(--color-accent); }

    /* pagination dots */
    .voice-carousel__pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      margin-top: 12px;
    }
    .voice-carousel__dot {
      width: 5px; height: 5px;
      border-radius: 50%;
      background: #fff;
      opacity: 0.5;
      border: none;
      padding: 0;
      cursor: pointer;
      transition: opacity 0.2s;
      flex-shrink: 0;
    }
    .voice-carousel__dot.is-active { opacity: 1; }

    @media (max-width: 1024px) {
      .voice-carousel-wrap { padding: 0 40px; }
      .voice-card { flex: 0 0 calc(33.333% - 10px); }
    }

    /* ===== SP overrides (mobile only) ===== */
    @media (max-width: 767px) {
      /* e7cb04a: no outer padding on SP — carousel section uses its own width */
      .voice-section { padding: 0; }
      /* Remove inner padding so carousel-section can be truly full-width */
      .voice-section__inner { padding: 0; }

      /* 6eae7bf: heading block — SP: static flow, below about-sp-stats__shape */
      .voice-section__heading { position: static; transform: none; left: auto; width: 100%; padding: 40px 16px 0; }


      /* f9f7624: arrow 3% on mobile */
      .voice-section__arrow { width: 3%; }

      /* bbb0535: 90% width, margin-top 60px on mobile */
      .voice-section__ttl-deco { width: 90%; margin-top: 60px; }

      /* a6eb53f: 11px on mobile */
      .voice-section__en { font-size: 11px; }

      /* d392fac: margin-top 20px, no extra padding */
      .voice-carousel-section { margin-top: 20px; padding: 0; }

      /* 8abba32: width 80%, centered, padding 15px top 35px bottom 15px sides */
      .voice-carousel-wrap {
        width: 80%;
        margin: 0 auto;
        padding: 15px 15px 35px;
      }

      /* 6f3df4d: padding-bottom 10px */
      .voice-carousel { padding-bottom: 10px; gap: 15px; }

      /* SP: 1枚表示 */
      .voice-card { flex: 0 0 100%; }


      /* 7e2f1b0: 10px on mobile */
      .voice-section__disclaimer { font-size: 10px; margin-top: 10px; padding: 0 15px; }

      /* 347e5ba: font 18px, padding 15px 30px, margin-top 20px */
      .voice-section__cta { margin-top: 20px; }
      .voice-section__cta-btn { font-size: 18px; padding: 15px 30px; border-width: 2px; }
    }

    /* ===== Features / 5 Reasons ===== */
    .features { padding-top: 50px;  background: #fff; }
    .features__inner {  margin-top: 400px; }
    .features__background { background: #fafafa;  margin-top: 450px; padding: 24px 24px; }
    .reason-head { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 30px 0; position: relative; overflow: hidden; margin-bottom: 0; }
    .reason-head::before { content: ''; position: absolute; inset: 0; background-image: url('/bytech/assets/images/REASON.svg'); background-position: center center; background-repeat: no-repeat; background-size: 50% auto; opacity: 0.03; pointer-events: none; z-index: 0; }
    .reason-head > * { position: relative; z-index: 1; }
    .reason-head__ttl { font-family: "Noto Sans JP", sans-serif; font-size: 32px; font-weight: 600; letter-spacing: 0.05em; color: #000; line-height: 1.5; margin: 0; }
    .reason-head__ttl span { color: #533AFC; }
    .reason-head__sub { font-family: "Reem Kufi", sans-serif; font-weight: 700; font-size: 16px; letter-spacing: 0.05em; color: var(--color-accent); margin: 5px 0 0; }
    @media (max-width: 767px) {
      .reason-head__ttl { font-size: 20px; }
      .reason-head__sub { font-size: 12px; }
    }

    .reason-list { display: flex; flex-direction: column; margin: 20px auto 0px; max-width: 1100px; }

    /* reason-item: column layout — row inside, sub-cards below */
    .reason-item { display: flex; flex-direction: column; padding: 50px 0 40px; }
    .reason-item__row { display: flex; flex-direction: row; column-gap: 20px; align-items: center; }
    .reason-item--rev .reason-item__row { flex-direction: row-reverse; }

    /* Left text column */
    .reason-item__text { flex: 0 0 50%; display: flex; flex-direction: column; }
    .reason-item__badge-row { display: flex; flex-direction: row; align-items: center; gap: 20px; }
    .reason-item__num-badge {
      display: inline-flex; align-items: center; justify-content: center;
      width: 45px; height: 45px; flex-shrink: 0;
      background: #533AFC; color: #fff;
      font-family: "Reem Kufi", sans-serif; font-size: 28px; font-weight: 700;
    }
    .reason-item__label { font-family: "Noto Sans JP", sans-serif; font-size: 27px; font-weight: 700; line-height: 1.3em; letter-spacing: 0.03em; color: #191722; }
    .reason-item__divider-img { width: 80%; height: auto; margin-top: 10px; display: block; }
    .reason-item__h3 { font-family: "Noto Sans JP", sans-serif; font-size: 27px; font-weight: 600; line-height: 1.6em; letter-spacing: 0.03em; color: #191722; margin: 10px 0 0; }
    .reason-item__h3 span { background: #191722; color: #fff; padding: 0px 5px; margin-right: 3px; display: inline; }
    .reason-item__body { font-family: "Noto Sans JP", sans-serif; font-size: 15px; font-weight: 500; line-height: 1.8em; letter-spacing: 0.05em; color: #191722; margin: 20px 0 0; }

    /* Right image column */
    .reason-item__img { flex: 1 1 auto; }
    .reason-item__img img { width: 100%; height: auto; display: block; }

    /* Sub-cards — full width below the row (6695355) */
    .reason-item__sub { display: flex; flex-direction: column; gap: 40px; margin-top: 40px; }
    .reason-sub__card { display: flex; flex-direction: column; background: #fff; padding: 30px 30px 30px 50px; }
    .reason-sub__card-ttl { font-family: "Noto Sans JP", sans-serif; font-size: 25px; font-weight: 700; line-height: 1.4em; letter-spacing: 0.05em; color: #333; margin: 0; }
    .reason-sub__card-ttl--mobile { display: none; }
    .reason-sub__card-body { font-family: "Noto Sans JP", sans-serif; font-size: 15px; font-weight: 500; line-height: 2em; letter-spacing: 0.05em; color: #333; margin: 5px 0 0; padding: 0 50px 0 0; }
    .reason-sub__card-progress { width: 19%; height: auto; display: block; margin: 15px 10px 0 0; align-self: flex-end; }

    /* Course cards slider (f704322 — Reason 1) */
    .course-slider { position: relative; width: 100%; min-height: 200px; height: auto; display: flex; flex-wrap: nowrap; overflow-x: scroll; column-gap: 15px; margin: 5px 0 0; padding-bottom: 8px; }
    .course-slider::-webkit-scrollbar { height: 4px; }
    .course-slider::-webkit-scrollbar-thumb { background: #767676; border-radius: 2px; }
    .course-slider__col { padding: 10px 0 0 5px; flex: 0 0 auto; max-width: 100%; height: 100%; }
    .course-card-sp { width: 260px; height: auto; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 5px rgba(0,0,0,0.2); }
    .course-card-sp__img { width: 100%; display: block; height: auto; }
    .course-card-sp__body { width: 100%; height: 200px; padding: 25px 15px 15px; background: #fff; box-sizing: border-box; }
    .course-card-sp__title { font-size: 16px; font-weight: 700; line-height: 125%; letter-spacing: 0.05em; color: #333; }
    .course-card-sp__sub { margin-top: 5px; font-size: 12px; font-weight: 700; line-height: 125%; letter-spacing: 0.05em; color: #333; }
    .course-card-sp__desc { font-size: 12px; margin-top: 15px; line-height: 150%; letter-spacing: 0.01em; color: #333; }

    /* Reason 2 sub-card (5dce8ce / 5aa8955 / 84e6641) */
    .r2-sub { display: flex; flex-direction: column; gap: 0; background: #fff; margin-top: 30px; padding: 30px 30px 30px 40px; }
    .r2-sub__overlay {
      border-radius: 5px; overflow: hidden; padding: 20px 0;
      position: relative;
      background-image: url('/bytech/assets/images/Dify-1-1.webp');
      background-size: cover; background-position: center;
    }
    .r2-sub__overlay::before {
      content: ''; position: absolute; inset: 0;
      background: linear-gradient(125deg, #000 45%, #fff 100%);
      opacity: 0.66;
    }
    .r2-sub__overlay-ttl {
      font-family: "Noto Sans JP", sans-serif; font-size: 25px; font-weight: 600;
      line-height: 1.4em; letter-spacing: 0.05em; color: #fff;
      text-align: center; position: relative; z-index: 1; margin: 0;
    }
    .r2-sub__carousel { margin-top: 30px; position: relative; }
    .r2-sub__viewport { overflow: hidden; }
    .r2-sub__slides { display: flex; }
    .r2-sub__slide { flex: 0 0 33.333%; min-width: 0; padding: 0 5px; box-sizing: border-box; }
    .r2-sub__slide img { width: 100%; height: auto; display: block; }
    .r2-sub__btn { position: absolute; top: 50%; transform: translateY(-50%); background: transparent; border: none; border-radius: 50%; width: 72px; height: 72px; display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 2; padding: 0; }
    .r2-sub__btn--prev { left: -18px; }
    .r2-sub__btn--next { right: -18px; }
    .r2-sub__btn svg { width: 28px; height: 28px; fill: none; }
    .r2-sub__dots { display: flex; justify-content: center; gap: 6px; margin-top: 16px; }
    .r2-sub__dot { width: 8px; height: 8px; border-radius: 50%; background: #ccc; border: none; padding: 0; cursor: pointer; transition: background 0.2s; }
    .r2-sub__dot--active { background: #888; }
    @media (max-width: 767px) {
      .r2-sub__slide { flex: 0 0 100%; }
      .r2-sub__btn { width: 60px; height: 60px; }
      .r2-sub__btn--prev { left: -10px; }
      .r2-sub__btn--next { right: -10px; }
    }
    @media (max-width: 767px) {
      .r2-sub { padding: 20px; }
      .r2-sub__slide { flex: 0 0 100%; }
    }

    /* Reason 4 sub-card (0f3e499) */
    .r4-sub { display: flex; flex-direction: column; background: #fff; margin-top: 30px; padding: 30px 50px 30px 50px; text-align: center; }
    .r4-sub__ttl { font-family: "Noto Sans JP", sans-serif; font-size: 25px; font-weight: 700; line-height: 1.4em; letter-spacing: 0.05em; color: #333; margin: 0; }
    .r4-sub__ttl span { color: #533AFC; }
    .r4-sub__ttl--mobile { display: none; }
    .r4-sub__body { font-family: "Noto Sans JP", sans-serif; font-size: 16px; font-weight: 500; line-height: 1.6em; letter-spacing: 0.05em; color: #333; margin: 5px 0 0; }
    .r4-sub__img-desktop { width: 100%; height: auto; display: block; margin: 20px 0 0; }
    .r4-sub__img-mobile { display: none; width: 100%; height: auto; margin: 20px 0 0; }
    .r4-sub__note { font-family: "Noto Sans JP", sans-serif; font-size: 13px; font-weight: 400; line-height: 1.8em; letter-spacing: 0.05em; color: #191722; margin-top: -20px; text-align: left; }

    /* Reason 5 sub-section (16068b5) */
    .r5-sub { display: flex; flex-direction: column; margin-top: 30px; padding: 30px 50px 30px 50px; background-color: #fff; }
    .r5-sub__ttl { font-family: "Noto Sans JP", sans-serif; font-size: 25px; font-weight: 700; line-height: 1.4em; letter-spacing: 0.05em; color: #333; text-align: center; margin: 0; }
    .r5-sub__ttl--mobile { display: none; font-family: "Noto Sans JP", sans-serif; font-size: 20px; font-weight: 700; line-height: 1.4em; letter-spacing: 0.05em; color: #333; text-align: center; margin: 0; }
    .r5-sub__body { font-family: "Noto Sans JP", sans-serif; font-size: 16px; font-weight: 500; line-height: 2em; letter-spacing: 0.05em; color: #333; margin: 5px 0 0; text-align: center; }
    .r5-sub__content-img { width: 79%; height: auto; display: block; margin: 20px auto 0; }
    .r5-sub__content-img--mobile { display: none; width: 79%; height: auto; margin: 20px auto 0; }
    .r5-sub__note { font-family: "Noto Sans JP", sans-serif; font-size: 13px; font-weight: 400; line-height: 1.8em; color: #191722; margin: 20px 0 0; }
    .r5-sub__webinar { display: flex; flex-direction: column; margin-top: 50px; }
    .r5-sub__webinar-label { width: 40%; height: auto; display: block; margin: 10px auto 0; }
    .r5-carousel { position: relative; margin-top: 15px; }
    .r5-carousel__viewport { overflow: hidden; }
    .r5-carousel__track { display: flex; }
    .r5-carousel__slide { flex: 0 0 33.333%; min-width: 0; padding: 0 5px; box-sizing: border-box; }
    .r5-carousel__slide img { width: 100%; height: auto; display: block; border-radius: 4px; }
    .r5-carousel__btn { position: absolute; top: 50%; transform: translateY(-50%); background: transparent; border: none; border-radius: 50%; width: 72px; height: 72px; display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 2; padding: 0; }
    .r5-carousel__btn--prev { left: -18px; }
    .r5-carousel__btn--next { right: -18px; }
    .r5-carousel__btn svg { width: 28px; height: 28px; fill: none; }
    .r5-carousel__dots { display: flex; justify-content: center; gap: 6px; margin-top: 16px; }
    .r5-carousel__dot { width: 8px; height: 8px; border-radius: 50%; background: #ccc; border: none; padding: 0; cursor: pointer; transition: background 0.2s; }
    .r5-carousel__dot--active { background: #888; }
    @media (max-width: 767px) {
      .r5-carousel__slide { flex: 0 0 100%; }
      .r5-carousel__btn { width: 60px; height: 60px; }
      .r5-carousel__btn--prev { left: -10px; }
      .r5-carousel__btn--next { right: -10px; }
    }
    @media (max-width: 767px) {
      .r4-sub { padding: 20px; }
      .r4-sub__ttl { display: none; }
      .r4-sub__ttl--mobile { display: block; font-family: "Noto Sans JP", sans-serif; font-size: 18px; font-weight: 700; line-height: 1.4em; letter-spacing: 0.05em; color: #333; margin: 0; }
      .r4-sub__body { display: none; }
      .r4-sub__img-desktop { display: none; }
      .r4-sub__img-mobile { display: block; }
      .r5-sub { padding: 20px; }
      .r5-sub__ttl { display: none; }
      .r5-sub__ttl--mobile { display: block; }
      .r5-sub__body { display: none; }
      .r5-sub__content-img { display: none; }
      .r5-sub__content-img--mobile { display: block; }
    }

    /* Reason 3 sub-card (6cade3e / 60c79f5 / 20f36a6) */
    .r3-sub { display: flex; flex-direction: column; background: #fff; margin-top: 30px; padding: 40px 50px 30px 50px; }
    .r3-sub__ttl { font-family: "Noto Sans JP", sans-serif; font-size: 25px; font-weight: 700; line-height: 1.4em; letter-spacing: 0.05em; color: #333; margin: 0; }
    .r3-sub__ttl--mobile { display: none; }
    .r3-sub__body { font-family: "Noto Sans JP", sans-serif; font-size: 15px; font-weight: 500; line-height: 2em; letter-spacing: 0.05em; color: #333; margin: 5px 0 0; }
    .r3-sub__carousel { margin-top: 20px; position: relative; }
    .r3-sub__viewport { overflow: hidden; }
    .r3-sub__slides { display: flex; }
    .r3-sub__slide { flex: 0 0 33.333%; min-width: 0; padding: 0 5px; box-sizing: border-box; }
    .r3-sub__slide img { width: 100%; height: auto; display: block; }
    .r3-sub__btn { position: absolute; top: 50%; transform: translateY(-50%); background: transparent; border: none; border-radius: 50%; width: 72px; height: 72px; display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 2; padding: 0; }
    .r3-sub__btn--prev { left: -18px; }
    .r3-sub__btn--next { right: -18px; }
    .r3-sub__btn svg { width: 28px; height: 28px; fill: none; }
    .r3-sub__dots { display: flex; justify-content: center; gap: 6px; margin-top: 16px; }
    .r3-sub__dot { width: 8px; height: 8px; border-radius: 50%; background: #ccc; border: none; padding: 0; cursor: pointer; transition: background 0.2s; }
    .r3-sub__dot--active { background: #888; }
    @media (max-width: 767px) {
      .r3-sub__slide { flex: 0 0 100%; }
      .r3-sub__btn { width: 60px; height: 60px; }
      .r3-sub__btn--prev { left: -10px; }
      .r3-sub__btn--next { right: -10px; }
    }
    @media (max-width: 767px) {
      .r3-sub { padding: 20px; }
      .r3-sub__ttl { display: none; }
      .r3-sub__ttl--mobile { display: block; font-family: "Noto Sans JP", sans-serif; font-size: 18px; font-weight: 700; line-height: 1.4em; letter-spacing: 0.05em; color: #333; margin: 0; }
      .r3-sub__slide { flex: 0 0 100%; }
    }

    .reason-divider { border: none; border-top: 1.4px solid #E6E6E6; margin: 0; }

    @media (max-width: 1024px) {
      .reason-item__label { font-size: 22px; }
      .reason-item__h3 { font-size: 22px; }
    }
    @media (max-width: 767px) {
      .reason-item { padding: 40px 0 20px; }
      .reason-item__row { flex-direction: column; }
      .reason-item--rev .reason-item__row { flex-direction: column; }
      .reason-item__text { flex: none; width: 100%; }
      .reason-item__img { width: 100%; margin-top: 20px; }
      .reason-item__label { font-size: 16px; }
      .reason-item__h3 { font-size: 18px; }
      .reason-sub__card { padding: 20px; }
      .reason-sub__card-ttl { display: none; }
      .reason-sub__card-ttl--mobile { display: block; font-family: "Noto Sans JP", sans-serif; font-size: 18px; font-weight: 700; line-height: 1.5em; letter-spacing: 0.05em; color: #333; margin: 0; }
      .reason-sub__card-body { padding: 0; font-size: 14px; }
      .reason-sub__card-progress { width: 60%; margin: 10px 0 0 0; align-self: flex-start; }
    }

    /* ===== CTA Banner (3ab2f36) ===== */
    .cta-banner {
      background-color: #533afc;
      background-image: url('/bytech/assets/images/cta_bg.svg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      padding: 50px 0;
    }
    .cta-banner__inner {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0;
    }
    .cta-banner__ttl {
      font-family: "Noto Sans JP", sans-serif;
      font-size: 25px;
      font-weight: 600;
      letter-spacing: 0.05em;
      color: #fff;
      text-align: center;
      margin: 0;
    }
    .cta-banner__img-wrap {
      margin-top: 0;
      padding: 20px 320px;
      width: 100%;
      box-sizing: border-box;
    }
    .cta-banner__img-wrap a {
      display: block;
    }
    .cta-banner__img-wrap img {
      animation: header-cta-pulse 2s linear infinite;
      width: 100%;
      height: auto;
      display: block;
    }
    .cta-banner__note {
      font-family: "Noto Sans JP", sans-serif;
      font-size: 11px;
      font-weight: 400;
      color: #fff;
      text-align: center;
      margin: 0;
    }
    @media (max-width: 1024px) and (min-width: 768px) {
      .cta-banner__img-wrap { padding: 0 200px; }
      .cta-banner__ttl { font-size: 18px; }
    }
    @media (max-width: 767px) {
      .cta-banner { padding: 30px 0; margin-top: 0; }
      .cta-banner__ttl { font-size: 18px; }
      .cta-banner__img-wrap { padding: 0; margin: 20px 0 10px; }
    }

    /* ===== Curriculum (5c8ef166) ===== */
    .curriculum { padding: 50px 0 60px; background: #fff; }
    .curriculum__inner { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

    /* --- Section header (a46a309) --- */
    .curric-head {
      display: flex; flex-direction: column; align-items: center; text-align: center;
      padding: 30px 0; position: relative; overflow: hidden;
    }
    .curric-head::before {
      content: ''; position: absolute; inset: 0;
      background-image: url('/bytech/assets/images/CURRICULUM.svg');
      background-position: center 30px; background-repeat: no-repeat; background-size: 60% auto;
      opacity: 0.03; pointer-events: none; z-index: 0;
    }
    .curric-head > * { position: relative; z-index: 1; }
    .curric-head__ttl {
      font-family: "Noto Sans JP", sans-serif; font-size: 32px; font-weight: 600;
      letter-spacing: 0.05em; color: #333; margin: 0;
    }
    .curric-head__tag {
      font-family: "Reem Kufi", sans-serif; font-weight: 700;
      letter-spacing: 0.05em; color: var(--color-accent); margin-top: 5px;
    }
    /* desktop+tablet description */
    .curric-head__desc {
      font-family: "Noto Sans JP", sans-serif; font-size: 16px; font-weight: 700;
      letter-spacing: 0.07em; color: #333; margin-top: 10px;
    }
    .curric-head__desc span { color: #583ffd; font-size: 22px;}
    .curric-head__note {
      font-family: "Noto Sans JP", sans-serif; font-size: 14px; font-weight: 500;
      letter-spacing: 0.07em; color: #292525; margin: 0;
    }
    /* mobile-only description */
    .curric-head__desc--sp { display: none; }
    .curric-head__note--sp { display: none; }

    /* --- Panels container (148a266) --- */
    .curric-panels { display: flex; flex-direction: column; margin-top: 50px; gap: 0; }

    /* --- Panel top row (47e93b5) --- */
    .curric-panel__top {
      display: flex; flex-direction: row; align-items: flex-start;
    }

    /* Badge column (cc39a43) */
    .curric-panel__badge {
      height: 50px; 
      width: auto; 
      flex-shrink: 0; align-self: center;
      margin: 0px 15px 0px 5px;
      display: flex; align-items: center; justify-content: center;
      
    }
    .curric-panel__badge svg { width: 35px; height: auto; }

    /* Meta column (fa1f57b) */
    .curric-panel__meta {
      display: flex; flex-direction: column; flex: 1; min-width: 0;
    }

    /* Label divider (bc6ecac: line_text divider, element-align-left) */
    .curric-panel__label-row { display: flex; align-items: center; width: 100%; }
    .curric-panel__label {
      font-family: "Noto Sans JP", sans-serif; font-size: 13px; font-weight: 700;
      color: #533AFC; white-space: nowrap; flex-shrink: 0;
    }
    .curric-panel__label-line {
      flex: 1; height: 1px; background: #533AFC; margin-left: 15px;
    }

    /* Heading (74d932f: 28px 800 #191722) */
    .curric-panel__heading {
      font-family: "Noto Sans JP", sans-serif; font-size: 28px; font-weight: 600;
      letter-spacing: 0.03em; color: #191722; margin: 0; margin-top: 0px; line-height: 1.4;
    }
    .curric-panel__heading--sp { display: none; }

    /* --- Cards scroll row (73913a9) --- */
    .curric-cards {
      display: flex; flex-direction: row; flex-wrap: nowrap;
      overflow-x: auto; gap: 10px;
      margin-top: 20px; padding-bottom: 30px;

    }
    .curric-cards::-webkit-scrollbar { height: 4px; }
    .curric-cards::-webkit-scrollbar-thumb { background: #767676; border-radius: 2px; }

    /* Panel spacing: add top margin to 2nd and 3rd panels */
    .curric-panel + .curric-panel { margin-top: 40px; }

    /* --- Course card (a0cb2f1) --- */
    .curric-card {
      flex: 1 0 285px; 
      max-width: 285px;
      height: 466px;
      border: 1px solid #e3e3e3; border-radius: 10px; overflow: hidden;
      display: flex; flex-direction: column; background: #fff;

    }
    .curric-card img.curric-card__thumb { width: 100%; height: auto; display: block; }
    .curric-card__body {
      padding: 15px 10px 30px; display: flex; flex-direction: column; flex: 1;
    }
    .curric-card__name {
      font-family: "Noto Sans JP", sans-serif; font-size: 18px; font-weight: 700;
      letter-spacing: 0.03em; color: #191722; margin: 0;
    }
    .curric-card__chapters {
      font-family: "Noto Sans JP", sans-serif; font-size: 14px; font-weight: 600;
      color: #191722; margin: 0;
    }
    .curric-card__desc-wrap { min-height: 120px; margin-top: 10px; flex: 1; }
    .curric-card__desc {
      font-family: "Noto Sans JP", sans-serif; font-size: 13px; font-weight: 400;
      line-height: 22px; letter-spacing: 0.03em; color: #191722; margin: 0;
    }
    .curric-card__btn {
      display: block; text-align: center; margin-top: 8px;
      background: #fff; color: #533afc; border: 2px solid #533afc;
      border-radius: 100px; font-family: "Noto Sans JP", sans-serif;
      font-size: 15px; font-weight: 700; letter-spacing: 0.03em;
      padding: 12px 25px; text-decoration: none; cursor: pointer;
      transition: background 0.2s, color 0.2s;
    }
    .curric-card__btn:hover { background: #533afc; color: #fff; }
    .curric-card__btn--coming {
      display: block; text-align: center; margin-top: 8px;
      background: #e8e8e8; color: #999; border: 2px solid #e8e8e8;
      border-radius: 100px; font-family: "Noto Sans JP", sans-serif;
      font-size: 15px; font-weight: 700; letter-spacing: 0.03em;
      padding: 12px 25px; cursor: default; pointer-events: none;
    }

    /* Responsive */
    @media (max-width: 1024px) and (min-width: 768px) {
      .curric-panel__badge { margin-left: 0; }
      .curric-panel__heading { font-size: 16px; }
    }
    @media (max-width: 767px) {
      .curriculum { padding: 20px 0 30px; }
      .curric-panels { margin-top: 30px; }
      .curric-head__desc { display: none; }
      .curric-head__note { display: none; }
      .curric-head__desc--sp {
        display: block; font-family: "Noto Sans JP", sans-serif;
        font-size: 12px; font-weight: 700; letter-spacing: 0.07em; color: #333;
        text-align: start; margin-top: 10px; padding: 0 15px;
      }
      .curric-head__desc--sp span { font-size: 1.3em; color: #533afc; }
      .curric-head__note--sp {
        display: block; font-family: "Noto Sans JP", sans-serif;
        font-size: 11px; font-weight: 500; letter-spacing: 0.07em; color: #292525;
        text-align: start; margin: 0; padding: 0 15px;
      }
      .curric-panel__badge { margin-left: 0; width: 40px; }
      .curric-panel__badge svg { width: 28px; }
      .curric-panel__heading { font-size: 16px; margin-top: -8px; }
      .curric-panel__heading--sp { display: block; }
      .curric-panel__heading--pc { display: none; }
      .curric-cards {
        flex-direction: column;
        overflow-x: visible;
        flex-wrap: nowrap;
        gap: 15px;
        padding-bottom: 0;
      }
      .curric-card {
        flex: none;
        width: 100%;
        max-width: 100%;
      }
    }

    /* ===== Skills (9e279e9) ===== */
    .skills-section {
      position: relative;
      background-color: #6822ff;
      background-image: url('/bytech/assets/images/Dify-1-1.webp');
      background-position: center center;
      background-size: cover;
      padding: 90px 0 50px;
    }
    /* 背景オーバーレイ (opacity 0.8) */
    .skills-section::after {
      content: '';
      position: absolute; inset: 0;
      background: linear-gradient(150deg, #000 20%, #fff 100%);
      opacity: 0.8;
      pointer-events: none;
      z-index: 0;
    }
    /* 上部三角シェイプ (elementor-shape-top: triangle) */
    .skills-section__shape {
      position: absolute; top: 0; left: 0; right: 0;
      width: calc(100% + 1.3px); height: 80px;
      overflow: hidden; line-height: 0; z-index: 2;
    }
    .skills-section__shape svg {
      display: block; width: calc(100% + 1.3px); height: 80px;
      position: relative; left: 50%; transform: translateX(-50%);
    }
    .skills-section__shape .shape-fill { fill: #fff; }

    /* 内部コンテンツは z-index:1 で重ねる */
    .skills-section__inner {
      position: relative; z-index: 1;
      max-width: 1100px; margin: 0 auto; padding: 0;
    }

    /* 見出し (6aea1c3) */
    .skills-section__ttl {
      font-family: "Noto Sans JP", sans-serif;
      font-size: 32px; font-weight: 600;
      letter-spacing: 0.05em; color: #fff;
      text-align: center; margin: 0; padding-top: 30px; line-height: 1.5;
    }

    /* SKILLS タグ (9f35c43) */
    .skills-section__tag {
      font-family: "Reem Kufi", sans-serif;
      font-weight: 700; letter-spacing: 0.05em; color: var(--color-accent);
      text-align: center; margin: 5px 0 0; display: block;
    }

    /* カルーセルラッパー */
    .skills-carousel {
      position: relative;
      margin-top: 25px;
      padding: 0 12px 10px;   /* 左右に矢印ぶんのスペース */
      width: 100%;
    }
    /* ビューポート: カードを2枚分だけ見せる */
    .skills-carousel__viewport {
      overflow: hidden;
    }
    /* トラック: 各カード幅 + gap をpxで計算してJSがtransform */
    .skills-carousel__track {
      display: flex;
      gap: 20px;
      transition: transform 0.4s ease;
    }
    /* 1カード = (100% - gap×1) / 2 */
    .skills-carousel__slide {
      flex: 0 0 calc(50% - 10px);
      min-width: 0;
    }
    .skills-carousel__slide img {
      width: 100%; height: auto; display: block; 
    }
    /* 矢印ボタン: paddingの外側に配置 */
    .skills-carousel__btn {
      position: absolute; top: calc(50% - 20px); transform: translateY(-50%);
      width: 40px; height: 40px;
      background: none; border: none; cursor: pointer;
      z-index: 3; padding: 0;
      display: flex; align-items: center; justify-content: center;
    }
    .skills-carousel__btn svg { fill: var(--color-accent); width: 28px; height: 28px; }
    .skills-carousel__btn--prev { left: 4px; }
    .skills-carousel__btn--next { right: 4px; }
    /* ページネーションドット */
    .skills-carousel__dots {
      display: flex; justify-content: center; gap: 10px; margin-top: 20px;
    }
    .skills-carousel__dot {
      width: 6px; height: 6px; border-radius: 50%;
      background: rgba(255,255,255,0.4); border: none; cursor: pointer; padding: 0;
    }
    .skills-carousel__dot.is-active { background: var(--color-accent); }

    @media (max-width: 767px) {
      .skills-section__ttl { font-size: 30px; }
      .skills-section__tag { font-size: 14px; }
      .skills-carousel__slide { flex: 0 0 100%; }
    }

    /* ===== Plan ===== */
    .plan { padding: 80px 0; background: var(--color-bg-light); }
    .plan__inner { max-width: var(--max-width); margin: 0 auto; padding: 0 24px; }
    .plan__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: start; margin-top: 40px; max-width: 1000px; margin-left: auto; margin-right: auto; }
    .plan-card {
      border-radius: 10px; background: #fff; border: 2px solid #c7c0ff;
      padding: 40px 50px; display: flex; flex-direction: column; align-items: center; text-align: center;
    }
    .plan-card--pro { border-color: var(--color-primary); }
    .plan-card__logo { width: 46px; height: auto; object-fit: contain; margin: 0 auto 0 0; }
    .plan-card__en-name {
      font-family: var(--font-en); 
      color: var(--color-text); margin: 16px auto 0 0;
      font-size: 28px;
      font-weight: 500;
      letter-spacing: .03em;
    }
    .plan-card__ja-name { font-size: 14px; color: var(--color-text-light); margin: 0 auto 8px 0; display: block; }
    .plan-card__tagline {
      width: 100%; background: #f8f8f8; padding: 12px 20px;
      display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 0 4px;
      font-size: 20px; font-weight: 700; color: var(--color-text);
    }
    .plan-card__tagline-em { color: #D4215F; }
    .plan-card__tagline-em--pro { color: var(--color-primary); }
    .plan-card__price-area {
      width: 100%; display: flex; flex-direction: column;
      align-items: center; margin-top: 35px; padding: 0 20px;
    }
    .plan-card__price-img { width: 100%; height: auto; display: block; }
    .plan-card__price-img-month { width: auto; height: 23px; display: block; margin-top: 20px; }
    .plan-card__price-img-sub { width: 100%; height: auto; display: block; margin-top: 20px; }
    .plan-card__price-img + .plan-card__price-img { margin-top: 20px; }
    .plan-card__services-divider {
      display: flex; align-items: center; gap: 12px; margin: 24px 0; width: 100%;
    }
    .plan-card__services-divider::before, .plan-card__services-divider::after {
      content: ''; flex: 1; height: 2px; background: var(--color-primary);
    }
    .plan-card__services-divider span { 
      color: var(--color-primary); 
      white-space: nowrap; 
      font-family: "Noto Sans JP", Sans-serif;
      font-size: 16px;
      font-weight: 600;
      }
    .plan-card__services-img { width: 85%; height: auto; display: block; margin-bottom: 28px; }
    .plan-card__cta {
      display: flex; align-items: center; justify-content: center; gap: 8px;
      text-align: center; padding: 15px; border-radius: 50px;
      font-weight: 900; font-size: 16px; transition: opacity 0.2s; width: 100%; text-decoration: none;
    }
    .plan-card__cta::after { content: '>'; }
    .plan-card__cta--lite { background: #ff0355; color: #fff; border: none; font-size: 20px;}
    .plan-card__cta--lite:hover { opacity: 0.9; }
    .plan-card__cta--pro,
    .plan-card__cta--blue,
    .plan__detail-link {
      background: var(--color-primary); color: #fff; border: none; font-size: 20px;
    }
    .plan-card__cta--pro:hover,
    .plan-card__cta--blue:hover,
    .plan__detail-link:hover { opacity: 0.9; }
    .plan__note { margin-top: 24px; font-size: 13px; color: var(--color-text-light); text-align: center; }
    .plan__payment {
      margin-top: 48px; padding: 48px 32px; 
      border-radius: var(--radius-lg); text-align: center;
     border: 1px solid #DBDBDB;
    }
    .plan__payment h3 { font-size: clamp(18px, 3vw, 24px); font-weight: 900; margin-bottom: 32px; }
    .plan__payment__methods { display: flex; justify-content: center; gap: 0px; flex-wrap: wrap; margin-bottom: 32px; }
    .plan__payment__method { text-align: center; flex: 1; max-width: 320px; }
    .plan__payment__method__name {
    display: inline-block; 
      font-weight: 900; font-size: 18px;
      background: var(--color-primary); color: #fff;
      margin-bottom: 12px;
      width: 240px;
      height: 38px;
      line-height: 38px;
      border-radius: 5px 5px 5px 5px;
    }
    .plan__payment__method__note { font-size: 12px; color: var(--color-text-light); }
    .plan__payment__cards {
      display: flex; justify-content: center; margin-top: 24px;
    }
    .plan__payment__cards img { max-width: 480px; width: 100%; height: auto; }
    @media (max-width: 768px) { .plan__grid { grid-template-columns: 1fr; } }

    /* ===== Plan SP payment ===== */
    @media (max-width: 767px) {
      .plan__payment {
        margin-top: 32px;
        padding: 24px 20px;
        background: #fff;
        border: 1px solid #e8e8ee;
        border-radius: 16px;
      }
      .plan__payment h3 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 20px;
        text-align: center;
        line-height: 1.6;
      }
      .plan__payment__methods {
        flex-direction: column;
        gap: 0;
        margin-bottom: 0;
      }
      .plan__payment__method {
        max-width: 100%;
        width: 100%;
        margin-bottom: 16px;
      }
      .plan__payment__method__name {
        display: block;
        width: 100%;
        padding: 14px 0;
        font-size: 18px;
        font-weight: 900;
        border-radius: 8px;
        margin-bottom: 8px;
        text-align: center;
      }
      .plan__payment__method__note {
        font-size: 11px;
        color: var(--color-text-light);
        text-align: center;
      }
      .plan__payment__cards {
        margin-top: 20px;
      }
      .plan__payment__cards img {
        max-width: 260px;
      }
    }

    /* ===== Plan detail link (PC) ===== */
    .plan__detail-link-wrap {
      display: flex;
      justify-content: center;
      margin-top: 40px;
    }
    .plan__detail-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 16px 40px;
      font-weight: 700;
      border-radius: 50px;
      text-decoration: none;
      transition: opacity 0.2s;
    }
    .plan__detail-link__icon {
      width: 16px;
      height: 16px;
      fill: #fff;
      flex-shrink: 0;
    }
    @media (max-width: 767px) {
      .plan__detail-link-wrap { display: none; }
    }

    /* ===== Plan SP detail button ===== */
    .plan__sp-detail-btn-wrap { display: none; }
    @media (max-width: 767px) {
      .plan__sp-detail-btn-wrap {
        display: block;
        margin-top: 24px;
      }
      .plan__sp-detail-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        width: 100%;
        padding: 16px 20px;
        background: #583FFD;
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        border-radius: 50px;
        text-decoration: none;
      }
      .plan__sp-detail-btn__arrow {
        font-size: 18px;
        font-weight: 400;
        line-height: 1;
      }
    }

    /* ===== Plan SP tabs ===== */
    .plan__sp-tabs { display: none; }
    @media (max-width: 767px) {
      .plan__grid { display: none; }
      .plan__sp-tabs { display: block; margin-top: 24px; }
      .plan__tab-radio { display: none; }

      /* タブ全体のシャドウ */
      .plan__sp-tabs { box-shadow: 0 0 10px 0 rgba(0,0,0,.32); }

      /* タブバー — ボーダー・背景なし、アイテム直置き */
      .plan__tab-bar {
        display: flex;
        background: transparent;
        border: none;
        border-radius: 0;
        padding: 0;
        gap: 0;
        margin-bottom: 0;
      }

      /* タブラベル（非アクティブ） */
      .plan__tab-label {
        flex: 1;
        text-align: center;
        padding: 12px 8px;
        font-size: 15px;
        font-weight: 700;
        font-family: "Noto Sans JP", sans-serif;
        border-radius: 0;
        cursor: pointer;
        background: #f1f1f1;
        color: #333;
        transition: background 0.15s, color 0.15s;
      }

      /* タブラベル（アクティブ） */
      .plan__sp-tabs:has(#plan-tab-lite:checked) .plan__tab-label--lite,
      .plan__sp-tabs:has(#plan-tab-pro:checked) .plan__tab-label--pro {
        background: #533afc;
        color: #fff;
      }

      .plan__sp-tabs:has(#plan-tab-lite:checked) .plan__tab-panel--pro { display: none; }
      .plan__sp-tabs:has(#plan-tab-pro:checked) .plan__tab-panel--lite { display: none; }

      /* タブコンテンツエリアのシャドウ */
      .plan__tab-panels { box-shadow: 0 0 67px -43px rgba(0,0,0,.5); }

      /* プランカード — SP上部角丸なし・パディング調整 */
      .plan__sp-tabs .plan-card {
        border-radius: 0 0 10px 10px;
        padding: 50px 15px 40px;
      }

      /* ロゴ */
      .plan__sp-tabs .plan-card__logo { width: 12%; }

      /* ENタイトル */
      .plan__sp-tabs .plan-card__en-name {
        font-weight: 700;
        margin: 15px 0 0;
      }

      /* JAサブタイトル */
      .plan__sp-tabs .plan-card__ja-name {
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.03em;
        color: #191722;
        margin: -5px 0 0;
      }

      /* キャッチ（タグライン） */
      .plan__sp-tabs .plan-card__tagline {
        padding: 0;
        margin-top: 15px;
        font-weight: 800;
        letter-spacing: 0.05em;
        color: #191722;
      }

      /* 月額画像（2枚目）を50%・透明度0.7 */
      .plan__sp-tabs .plan-card__price-area .plan-card__price-img:nth-child(2) {
        width: 50%;
        opacity: 0.7;
      }

      /* サービス一覧画像をセンタリング */
      .plan__sp-tabs .plan-card__services-img { margin: 20px auto 28px; }

      /* CTAボタン */
      .plan__sp-tabs .plan-card__cta {
        font-weight: 800;
        letter-spacing: 0.08em;
        border-radius: 100px;
        padding: 15px 35px 15px 45px;
        margin-top: 50px;
      }
    }

    /* ===== Interview ===== */
    .interview { padding: 70px 0; }
    .interview__inner { max-width: var(--max-width); margin: 0 auto; padding: 0 24px; }
    .interview__grid {
      display: flex; flex-direction: row; flex-wrap: wrap; gap: 20px;
      margin-top: 20px; margin-bottom: 48px;
      max-width: 1140px; margin-left: auto; margin-right: auto;
    }
    .interview-header { text-align: center; margin: 20px auto 50px; position: relative; overflow: hidden; }
    .interview-header::before {
      content: ''; position: absolute; inset: 0;
      background-image: url('/bytech/assets/images/パス-36612.svg');
      background-position: center 30px; background-repeat: no-repeat; background-size: 60% auto;
      opacity: 0.03; pointer-events: none; z-index: 0;
      width:900px; height: auto; top: -50px; left: 50%; transform: translateX(-50%);
    }
    .interview-header__tag {
      font-family: "Reem Kufi", sans-serif;
      font-weight: 700; letter-spacing: 0.05em; color: var(--color-accent);
      text-align: center; margin: 5px 0 0; display: block;
    }
    .interview-header__ttl { font-size: clamp(22px, 3.5vw, 34px); font-weight: 900; line-height: 1.4; }
    .interview-header__sub { font-size: 15px; color: var(--color-text-light); margin-top: 12px; line-height: 1.8; }

    .interview-card { flex: 1 0 0; min-width: 0; display: flex; flex-direction: column; }
    .interview-card__thumb { display: block; overflow: hidden; }
    .interview-card__thumb img {
      width: 100%; height: auto; display: block;
      transition: transform 0.3s ease;
    }
    .interview-card__thumb:hover img { transform: scale(0.95); }
    .interview-card__body { margin-top: 20px; flex: 1; min-height: 100px; }
    .interview-card__ttl {
      font-family: "Noto Sans JP", sans-serif;
      font-size: 18px; font-weight: 600;
      line-height: 25px; letter-spacing: 0.03em;
      color: #191722; margin: 0;
      min-height: 100px;
    }
    .interview-card__divider { height: 1px; background: #e0e0e0; margin: 15px 0; }
    .interview-card__profile {
      display: flex; flex-direction: row;
      align-items: center; gap: 20px;
      
    }
    .interview-card__avatar {
      width: 60px; height: 60px; border-radius: 50%;
      overflow: hidden; flex-shrink: 0;
    }
    .interview-card__avatar img { width: 100%; height: 100%; object-fit: cover; }
    .interview-card__meta {
      font-family: "Noto Sans JP", sans-serif;
      font-size: 16px; font-weight: 700;
      line-height: 25px; letter-spacing: 0.03em;
      color: #191722;
    }
    .interview__more { text-align: center; }
    @media (max-width: 767px) {
      .interview { padding: 30px 0; }
      .interview__grid { flex-direction: column; margin-top: 10px; }
      .interview-card + .interview-card { margin-top: 50px; }
      .interview-card__profile { gap: 10px; }
    }

    /* ===== Flow ===== */
    .flow { padding: 70px 0 60px;}
    .flow__inner { max-width: var(--max-width); margin: 0 auto; padding: 0 24px; }
    .flow__header {
      text-align: center; padding: 30px 0; position: relative; overflow: hidden;
    }
    .flow__header::before {
      content: ''; position: absolute; inset: 0;
      background-image: url('/bytech/assets/images/パス-36613.svg');
      background-position: center center; background-repeat: no-repeat;
      background-size: 30% ; opacity: 0.03; pointer-events: none;
      
    }
    .flow__ttl {
      font-family: "Noto Sans JP", sans-serif; font-size: 32px; font-weight: 600;
      letter-spacing: 0.05em; color: #191722; margin: 0; position: relative; z-index: 1;
    }
    .flow__ttl--sp { display: none; }
    .flow__tag {
      font-family: "Reem Kufi", sans-serif; font-weight: 700; font-size: 16px;
      letter-spacing: 0.05em; color: var(--color-accent); margin-top: 5px;
      position: relative; z-index: 1; display: block;
    }
    .flow__steps {
      display: flex; flex-direction: row; align-items: center;
      gap: 0 10px; margin-top: 20px;
    }
    .flow__step { flex: 1 0 0; min-width: 0; }
    .flow__step img {
      width: 100%; height: auto; display: block;
      box-shadow: 0 0 10px 0 rgba(0,0,0,0.14); border-radius: 5px;
    }
    .flow__arrow { flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
    .flow__arrow img { width: 15px; height: auto; display: block; margin: 0 10px; }
    .flow__decoration { margin-top: 30px; }
    .flow__decoration img { width: 100%; height: auto; display: block; }
    .flow__cta { margin-top: 50px; padding: 0 350px; }
    .flow__cta a { display: block; }
    .flow__cta img { width: 100%; height: auto; display: block; animation: header-cta-pulse 2s linear infinite; }
    @media (max-width: 1024px) and (min-width: 768px) {
      .flow__cta { padding: 0 200px; }
    }
    @media (max-width: 767px) {
      .flow { padding: 30px 0; }
      .flow__ttl { display: none; }
      .flow__ttl--sp { display: block; font-size: 25px; }
      .flow__steps { flex-direction: column; gap: 10px 0; padding: 0 15px; }
      .flow__step { width: 100%; flex: unset; }
      .flow__arrow img { width: 15%; transform: rotate(90deg); }
      .flow__decoration { display: none; }
      .flow__cta { margin: 40px 0 10px; padding: 0; }
    }

    /* ===== FAQ ===== */
    .faq { padding: 50px 0; background: #f6f6f6; }
    .faq__inner { max-width: 750px; margin: 0 auto; padding: 0 24px; }
    .faq__header {
      text-align: center; padding: 30px 0; position: relative; overflow: hidden;
    }
    .faq__header::before {
      content: ''; position: absolute; inset: 0;
      background-image: url('/bytech/assets/images/パス-36614.svg');
      background-position: center center; background-repeat: no-repeat;
      background-size: 130px auto; opacity: 0.03; pointer-events: none;
    }
    .faq__ttl {
      font-family: "Noto Sans JP", sans-serif; font-size: 32px; font-weight: 600;
      letter-spacing: 0.05em; color: #000; margin: 0; position: relative; z-index: 1;
    }
    .faq__tag {
      font-family: "Reem Kufi", sans-serif; font-weight: 700; font-size: 16px;
      letter-spacing: 0.05em; color: var(--color-accent); margin-top: 5px;
      position: relative; z-index: 1; display: block;
    }
    .faq__groups { display: flex; flex-direction: column; }
    .faq__group { margin-top: 20px; }
    .faq__group:first-child { margin-top: 10px; }
    .faq__group__ttl {
      font-family: "Noto Sans JP", sans-serif; font-size: 18px; font-weight: 600;
      letter-spacing: 0.05em; color: #000; text-align: center; margin: 0;
      padding-bottom: 18px;
    }
    .faq__group__ttl span {
          color:  var(--color-primary);
    font-size: 1.2em;
    }
    .faq__list { display: flex; flex-direction: column; margin-top: 0; }
    .faq__item { margin-bottom: 5px; }
    .faq__item__q {
      display: flex; align-items: center; gap: 10px; padding: 16px 18px;
      cursor: pointer; background: #fff; border: none; width: 100%;
      text-align: left; transition: opacity 0.2s;
    }
    .faq__item__q:hover { opacity: 0.75; }
    .faq__item__q-icon { flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
    .faq__item__q-icon svg { width: 17px; height: 17px; fill: #533afc; }
    .faq__item__q-text {
      flex: 1; font-family: "Noto Sans JP", sans-serif; font-size: 15px; font-weight: 400;
      letter-spacing: 0.07em; line-height: 1.4em; color: #000;
    }
    .faq__item__q-toggle {
      flex-shrink: 0; display: flex; align-items: center; justify-content: center;
      margin-left: auto; color: #533afc; transition: color 0.2s, transform 0.3s;
      transform: rotate(-90deg); 
      
    }
    .faq__item__q-toggle svg { width: 20px; height: 20px; fill: currentColor; }
    .faq__item.is-open .faq__item__q-toggle { color: var(--color-accent); transform: rotate(0deg); }
    .faq__item__a {
      background: #fff; padding: 0 18px; max-height: 0; overflow: hidden;
      transition: max-height 0.3s ease, padding 0.3s;
      font-family: "Noto Sans JP", sans-serif; font-size: 15px;
      letter-spacing: 0.05em; line-height: 1.7; color: #333;
    }
    .faq__item.is-open .faq__item__a { max-height: 600px; padding: 0 18px 18px; }
    @media (max-width: 767px) {
      .faq { padding: 50px 0; }
      .faq__inner { padding: 0 15px; }
      .faq__ttl { font-size: 25px; }
    }

    /* ===== CTA Section ===== */
    .cta-section {
      padding: 80px 0;
      background: linear-gradient(135deg, var(--color-primary) 0%, #3b25d4 100%);
      text-align: center;
    }
    .cta-section__inner { max-width: 700px; margin: 0 auto; padding: 0 24px; }
    .cta-section__tag {
      font-family: var(--font-en); font-size: 12px; color: rgba(255,255,255,0.6);
      letter-spacing: 0.2em; margin-bottom: 16px;
    }
    .cta-section__ttl {
      font-size: clamp(24px, 4vw, 40px); font-weight: 900; color: #fff;
      line-height: 1.4; margin-bottom: 20px;
    }
    .cta-section__ttl .accent { color: var(--color-accent); }
    .cta-section__sub { font-size: 15px; color: rgba(255,255,255,0.8); margin-bottom: 36px; line-height: 1.8; }
    .cta-section__img { max-width: 600px; margin: 0 auto 32px; border-radius: var(--radius); overflow: hidden; }
    .cta-section__img img { width: 100%; }
    .cta-section__btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
    .cta-section__note { margin-top: 16px; font-size: 12px; color: rgba(255,255,255,0.5); }

    /* ===== Footer ===== */
    /* ===== Footer ===== */
    .footer { background: #1a1723; color: #fff; }
    .footer__main { padding: 56px 0 0; }
    .footer__inner { max-width: 1200px; margin: 0 auto; padding: 0 40px; }
    /* Top body: tagline + nav */
    .footer__body {
      display: flex; flex-direction: row; align-items: flex-start; gap: 0;
      padding-bottom: 48px;
    }
    .footer__tagline {
      flex: 0 0 22%; font-size: 26px; font-weight: 700;
      color: #fff; line-height: 1.6; margin: 0; letter-spacing: 0.03em;
    }
    /* Nav area */
    .footer__nav {
      flex: 1; display: flex; flex-direction: row; gap: 0; align-items: flex-start;
    }
    .footer__nav-col { flex: 1; padding-right: 24px; }
    .footer__nav-col--courses { flex: 0 0 46%; }
    /* Section title */
    .footer__nav-section-ttl {
      font-size: 16px; font-weight: 700; color: #735fff; letter-spacing: 0.05em; margin: 0;
    }
    .footer__nav-divider { height: 0.5px; background: rgba(255,255,255,0.2); margin: 6px 0 10px; }
    /* Two sub-columns inside courses */
    .footer__nav-sub-cols { display: flex; flex-direction: row; gap: 16px; }
    .footer__nav-sub-col { flex: 1; }
    .footer__nav-sub-ttl {
      font-size: 13px; font-weight: 700; color: var(--color-accent); margin: 0 0 8px;
    }
    /* Link lists */
    .footer__nav-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
    .footer__nav-list li a {
      font-size: 13px; font-weight: 500; color: #fff; text-decoration: none; transition: color 0.2s;
    }
    .footer__nav-list li a:hover { color: rgba(255,255,255,0.6); }
    /* Support/company extra section spacing */
    .footer__nav-section-ttl + .footer__nav-divider + .footer__nav-list + .footer__nav-section-ttl { margin-top: 20px; }
    .footer__nav-col--company .footer__nav-section-ttl ~ .footer__nav-section-ttl { margin-top: 20px; }
    /* Bottom bar: divider + logo + copyright */
    .footer__bottom-bar {
      display: flex; flex-direction: row; align-items: center; justify-content: space-between;
      border-top: 1px solid rgba(255,255,255,0.15); padding: 20px 0;
    }
    .footer__logo-link { display: flex; flex-direction: column; gap: 2px; text-decoration: none; }
    .footer__logo-img { width: 110px; height: auto; display: block; }
    .footer__logo-sub { font-size: 10px; font-weight: 700; color: rgba(255,255,255,0.5); letter-spacing: 0.15em; margin: 2px 0 0; }
    .footer__copyright { font-size: 13px; color: #fff; margin: 0; letter-spacing: 0.05em; }
    /* Bottom fine print */
    .footer__bottom { border-top: 1px solid rgba(255,255,255,0.08); padding: 16px 0; text-align: center; }
    .footer__bottom p { font-size: 11px; color: rgba(255,255,255,0.3); margin: 0; }
    /* Responsive */
    @media (max-width: 1024px) {
      .footer__tagline { flex: 0 0 20%; font-size: 22px; }
      .footer__nav-col--courses { flex: 0 0 44%; }
    }
    @media (max-width: 767px) {
      .footer__main { padding: 36px 0 0; }
      .footer__inner { padding: 0 20px; }
      .footer__body { flex-direction: column; gap: 28px; padding-bottom: 32px; }
      .footer__tagline { font-size: 20px; }
      .footer__nav { flex-direction: column; gap: 24px; }
      .footer__nav-col--courses { flex: unset; width: 100%; }
      .footer__nav-col { padding-right: 0; }
      .footer__bottom-bar { flex-direction: column; align-items: flex-start; gap: 10px; }
      .footer__copyright { font-size: 12px; }
    }

        /* Fixed mobile CTA */
    .fixed-footer-cta {
      position: fixed; bottom: 0; left: 0; right: 0; z-index: 9999;
      opacity: 0; visibility: hidden; transform: translateY(20px);
      transition: all 0.3s ease; display: none;
    }
    .fixed-footer-cta.is-visible { opacity: 1; visibility: visible; transform: translateY(0); }
    .fixed-footer-cta__link { display: block; animation: 2s linear infinite button-anime; }
    .fixed-footer-cta__link img { width: 100%; height: auto; display: block; }
    @keyframes button-anime {
      0%, 20%, 100% { transform: scale(1); }
      10% { transform: scale(1.05); }
    }
    @media (max-width: 1024px) and (min-width: 768px) {
      .footer__inner { padding: 0 20px; }
      .footer__tagline { font-size: 28px; line-height: 1.4em; }
    }
    @media (max-width: 767px) {
      .footer__inner { padding: 0 15px; }
      .footer__main { padding: 30px 0; }
      .footer__row { flex-direction: column; gap: 25px; }
      .footer__content { flex-direction: column; order: 0; width: 100%; }
      .footer__tagline { width: 100%; font-size: 18px; margin-bottom: 20px; }
      .footer__nav-cols { flex-direction: column; gap: 20px; }
      .footer__nav-col-courses { flex: unset; width: 100%; }
      .footer__logo-area { width: 100%; padding: 0; margin-top: 10px; }
      .footer__logo-row { flex-direction: column; align-items: flex-start; gap: 10px; }
      .footer__copyright { text-align: left; letter-spacing: 0.15em; }
      .fixed-footer-cta { display: none !important; }
    }

    /* ===== Animation ===== */
    .fadein { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
    .fadein.is-visible { opacity: 1; transform: translateY(0); }
    .fadein.delay-1 { transition-delay: 0.1s; }
    .fadein.delay-2 { transition-delay: 0.2s; }
    .fadein.delay-3 { transition-delay: 0.3s; }
      `}} />

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
                <li><a href="https://generative-ai.bytech.jp/support/" target="_blank">サポート詳細</a></li>
                <li>
                  <a href="#courses">コース一覧</a>
                  <div className="header__dropdown">
                    <a href="https://generative-ai.bytech.jp/chatgpt-master/" target="_blank">ChatGPTマスターコース</a>
                    <a href="https://generative-ai.bytech.jp/gemini-master/" target="_blank">Geminiマスターコース</a>
                    <a href="https://generative-ai.bytech.jp/copilot-master/" target="_blank">Copilotマスターコース</a>
                    <a href="https://generative-ai.bytech.jp/dify-master/" target="_blank">Difyマスターコース</a>
                    <a href="https://generative-ai.bytech.jp/notebooklm-master/" target="_blank">NotebookLMマスターコース</a>
                    <a href="https://generative-ai.bytech.jp/business-worker/" target="_blank">ビジネスワーカーコース</a>
                    <a href="https://generative-ai.bytech.jp/ai-writer/" target="_blank">AIウェブライターコース</a>
                    <a href="https://generative-ai.bytech.jp/ai-image-creator/" target="_blank">AI画像クリエイターコース</a>
                    <a href="https://generative-ai.bytech.jp/ai-movie-creator/" target="_blank">AI動画クリエイターコース</a>
                    <a href="https://generative-ai.bytech.jp/generative-ai-passport/" target="_blank">生成AIパスポート試験対策コース</a>
                  </div>
                </li>
                <li><a href="https://generative-ai.bytech.jp/plan/" target="_blank">料金プラン</a></li>
                <li><a href="https://bytech.jp/blog/category/interview/" target="_blank">受講生インタビュー</a></li>
                <li><a href="#faq">よくある質問</a></li>
                <li className="header__nav__divider" aria-hidden="true" />
                <li><a href="https://bytech.jp/biz" target="_blank">法人研修 ↗</a></li>
              </ul>
            </nav>

            {/* CTAボタン（SVG画像＋パルスアニメ） */}
            <a href="https://generative-ai.bytech.jp/counseling/" target="_blank" className="header__cta">
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
              <li><a href="https://generative-ai.bytech.jp/support/">サポート詳細</a></li>
              <li className="header__nav-drawer__item">
                <button className="header__nav-drawer__toggle">コース一覧 <span className="arrow">▼</span></button>
                <ul className="header__nav-drawer__sub">
                  <li><a href="https://generative-ai.bytech.jp/chatgpt-master/">ChatGPTマスターコース</a></li>
                  <li><a href="https://generative-ai.bytech.jp/gemini-master/">Geminiマスターコース</a></li>
                  <li><a href="https://generative-ai.bytech.jp/copilot-master/">Copilotマスターコース</a></li>
                  <li><a href="https://generative-ai.bytech.jp/dify-master/">DIfyマスターコース</a></li>
                  <li><a href="https://generative-ai.bytech.jp/notebooklm-master/">NotebookLMマスターコース</a></li>
                  <li><a href="https://generative-ai.bytech.jp/business-worker/">ビジネスワーカーコース</a></li>
                  <li><a href="https://generative-ai.bytech.jp/ai-writer/">AIウェブライターコース</a></li>
                  <li><a href="https://generative-ai.bytech.jp/ai-image-creator/">AI画像クリエイターコース</a></li>
                  <li><a href="https://generative-ai.bytech.jp/ai-movie-creator/">AI動画クリエイターコース</a></li>
                  <li><a href="https://generative-ai.bytech.jp/generative-ai-passport/">生成AIパスポート試験対策コース</a></li>
                </ul>
              </li>
              <li><a href="https://generative-ai.bytech.jp/plan/">料金プラン</a></li>
              <li><a href="https://bytech.jp/blog/category/interview/">受講生インタビュー</a></li>
              <li><a href="#faq">よくある質問</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="hero">
        {/* 背景画像: PC=合成画像(女性+紫BG) / SP=女性のみ縦長 */}
        <picture>
          <source media="(min-width: 769px)" srcSet="/bytech/assets/images/hero-bg-from-generative-ai.bytech.jp.webp" />
          <img src="/bytech/assets/images/Gemini_Generated_Image_vu6vv2vu6vv2vu6v.webp" alt="" className="hero__bg" />
        </picture>

        <div className="hero__inner">

          {/* ── PC専用コンテンツ（タブレット・SP非表示） ── */}
          <div className="hero__body-pc hide-tablet hide-sp">
            {/* 見出し 1行目: 最短2ヶ月で、 */}
            <h2 className="hero__heading hero__heading-line1">
              未経験から最短<span className="lg">2</span>ヶ月で、
            </h2>

            {/* 見出し 2行目: 年収・キャリアを上げる（紫ボックス） */}
            <h2 className="hero__heading hero__heading-line2">
              <span className="highlight">稼げるAIスキル<span className="sm"></span><span className="sm">を</span>武器に。</span>
            </h2>

            {/* サブテキスト */}
            <p className="hero__sub">成果直結の実践型オンラインAIスクール</p>

            {/* 統計バッジ（SP非表示） */}
            <div className="hero__badges hide-sp">
              <img src="/bytech/assets/images/stats-badge-bar.svg" alt="案件獲得率95% 受講生満足度96% カリキュラム数600以上" />
            </div>

            {/* CTAボタン */}
            <div className="hero-cta-wrapper">
              <a href="https://generative-ai.bytech.jp/counseling/" target="_blank" className="hero__cta">
                <img src="/bytech/assets/images/plan/cta-setsumeikai-3.webp" alt="無料カウンセリングで相談する" />
              </a>
            </div>
            {/* 注釈 */}
            <p className="hero__note">
              ※1_2025年1月~8月受講生・卒業生300名へのアンケート調査　※2_2025年1月~8月受講生・卒業生300名へのアンケート調査　※3_2024年4月~2025年4月受講生・卒業生合計で算出
            </p>
          </div>

          {/* ── SP・タブレット専用コンテンツ（PC非表示） ── */}
          <div className="hero__body-sp hide-pc">
            {/* ロゴ（SP・タブレット表示） */}
            <div className="hero__sp-widget hero__sp-widget--logo">
              <div className="hero__logo-sp">
                <img src="/bytech/assets/images/group-18733-1.svg" alt="バイテック生成AI" />
              </div>
            </div>

            {/* 見出し 1行目 */}
            <div className="hero__sp-widget hero__sp-widget--line1">
              <h2 className="hero__heading hero__heading--sp hero__heading-line1">
                未経験から最短<span className="lg">2</span>ヶ月で、
              </h2>
            </div>

            {/* 見出し 2行目（紫背景） */}
            <div className="hero__sp-widget hero__sp-widget--line2">
              <h2 className="hero__heading hero__heading--sp hero__heading-line2">
                <span className="hero__heading-sp-highlight">稼げるAIスキル<span className="sm">を</span>武器に。</span>
              </h2>
            </div>

            {/* 統計バッジ（SP専用・タブレット非表示） */}
            <div className="hero__sp-widget hero__sp-widget--stats hide-tablet">
              <div className="hero__stats-sp">
                <img src="/bytech/assets/images/group-18722.svg" alt="案件獲得率95% 受講生満足度96% カリキュラム数600以上" />
              </div>
            </div>

            {/* 注釈 */}
            <div className="hero__sp-widget hero__sp-widget--notes">
              <p className="hero__note-sp">
                ※1_2025年1月~8月受講生・卒業生300名へのアンケート調査<br />
                ※2_2025年1月~8月受講生・卒業生300名へのアンケート調査<br />
                ※3_2024年4月~2025年4月受講生・卒業生合計で算出
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ===== CONSULTATION FORM (mobile only) ===== */}
      <section className="consult-form-section">
        <h2 className="consult-form__heading">まずは無料で相談！</h2>
        <h3 className="consult-form__subheading">▼ <span className="accent">今日、明日</span>の空き枠を確認する ▼</h3>
        <div className="cs-wrapper">
          <div className="cs-header"></div>
          <div className="cs-progress">
            <div className="cs-step active" data-s="1">
              <div className="cs-dot"><span className="cs-dot-num">1</span></div>
              <span className="cs-dot-label">日時選択</span>
            </div>
            <div className="cs-conn half"><div className="cs-conn-fill"></div></div>
            <div className="cs-step" data-s="2">
              <div className="cs-dot"><span className="cs-dot-num">2</span></div>
              <span className="cs-dot-label">お客様情報</span>
            </div>
            <div className="cs-conn"><div className="cs-conn-fill"></div></div>
            <div className="cs-step" data-s="3">
              <div className="cs-dot"><span className="cs-dot-num">3</span></div>
              <span className="cs-dot-label">確認・送信</span>
            </div>
          </div>
          <div className="cs-card">
            <div className="cs-card-accent"></div>
            <div className="cs-card-body">
              {/* Step 1: 日時選択 */}
              <div className="cs-panel active" id="csStep1">
                <div className="cs-day-toggle">
                  <button className="cs-day-btn active" id="csBtnToday">
                    今日<span className="cs-day-label" id="csTodayLabel"></span>
                  </button>
                  <button className="cs-day-btn" id="csBtnTomorrow">
                    明日<span className="cs-day-label" id="csTomorrowLabel"></span>
                  </button>
                </div>
                <div className="cs-slots" id="csSlots">
                  <div className="cs-skeleton"></div>
                  <div className="cs-skeleton"></div>
                  <div className="cs-skeleton"></div>
                  <div className="cs-skeleton"></div>
                  <div className="cs-skeleton"></div>
                  <div className="cs-skeleton"></div>
                </div>
                <div className="cs-btn-row">
                  <button className="cs-btn cs-btn-next" id="csBtnStep1" disabled>
                    <span className="cs-btn-text">次へ進む</span>
                  </button>
                </div>
              </div>

              {/* Step 2: お客様情報 */}
              <div className="cs-panel" id="csStep2">
                <div className="cs-time-bar">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <span id="csTimeBarText">-</span>
                </div>
                <div className="cs-field">
                  <label className="cs-label">お名前 <span className="cs-req">必須</span></label>
                  <input type="text" className="cs-input" id="csName" placeholder="例：山田 太郎" />
                  <div className="cs-err" id="csErrName">お名前を入力してください</div>
                </div>
                <div className="cs-field">
                  <label className="cs-label">メールアドレス <span className="cs-req">必須</span></label>
                  <input type="email" className="cs-input" id="csEmail" placeholder="例：taro@example.com" />
                  <div className="cs-err" id="csErrEmail">正しいメールアドレスを入力してください</div>
                </div>
                <div className="cs-field">
                  <label className="cs-label">電話番号 <span className="cs-req">必須</span></label>
                  <input type="tel" className="cs-input" id="csPhone" placeholder="例：090-1234-5678" />
                  <div className="cs-err" id="csErrPhone">電話番号を入力してください</div>
                </div>
                <div className="cs-btn-row">
                  <button className="cs-btn cs-btn-back" id="csBtnStep2Back">戻る</button>
                  <button className="cs-btn cs-btn-next" id="csBtnStep2Next"><span className="cs-btn-text">確認画面へ</span></button>
                </div>
              </div>

              {/* Step 3: 確認・送信 */}
              <div className="cs-panel" id="csStep3">
                <div className="cs-confirm">
                  <div className="cs-confirm__heading">予約内容</div>
                  <div className="cs-confirm__row"><span className="cs-confirm__label">日時</span><span className="cs-confirm__value" id="csConfTime">-</span></div>
                  <div className="cs-confirm__row"><span className="cs-confirm__label">お名前</span><span className="cs-confirm__value" id="csConfName">-</span></div>
                  <div className="cs-confirm__row"><span className="cs-confirm__label">メール</span><span className="cs-confirm__value cs-confirm__value--email" id="csConfEmail">-</span></div>
                  <div className="cs-confirm__row"><span className="cs-confirm__label">電話番号</span><span className="cs-confirm__value" id="csConfPhone">-</span></div>
                </div>
                <div className="cs-btn-row">
                  <button className="cs-btn cs-btn-back" id="csBtnStep3Back">修正する</button>
                  <button className="cs-btn cs-btn-submit" id="csBtnSubmit"><span className="cs-btn-text">この内容で予約する</span><div className="cs-spinner"></div></button>
                </div>
                <div className="cs-privacy">
                  送信いただいた情報は<a href="https://bytech.jp/biz/privacy-policy/" target="_blank">プライバシーポリシー</a>・<a href="https://bytech.jp/biz/user-terms/" target="_blank">利用規約</a>に基づき適切に管理いたします。
                </div>
              </div>
            </div>
          </div>
          <div className="cs-counter" id="csCounter">1 / 3</div>
          <div className="cs-view-all">
            <a href="https://generative-ai.bytech.jp/counseling">全ての日程を見る
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ===== STUDENT VOICES ===== */}
      <section className="voices">
        <div className="voices__overlay" />
        <div className="voices__inner">
          <h2 className="voices__heading-sp">未経験からAIスキルを<br />成果に繋げている受講生の方々</h2>
          <div className="voices__underline-sp">
            <img src="/bytech/assets/images/underline.svg" alt="" />
          </div>
          <div className="voices__carousel-wrap">
            <button className="voices__btn voices__btn--prev" type="button" aria-label="前へ">
              <svg viewBox="0 0 1000 1000" aria-hidden="true"><path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"/></svg>
            </button>
            <div className="voices__carousel" id="voicesCarousel">
              <div className="voices__item"><img src="/bytech/assets/images/artboard-5.webp" alt="受講生の声" loading="lazy" /></div>
              <div className="voices__item"><img src="/bytech/assets/images/artboard-1.webp" alt="受講生の声" loading="lazy" /></div>
              <div className="voices__item"><img src="/bytech/assets/images/artboard-6.webp" alt="受講生の声" loading="lazy" /></div>
              <div className="voices__item"><img src="/bytech/assets/images/artboard-4.webp" alt="受講生の声" loading="lazy" /></div>
              <div className="voices__item"><img src="/bytech/assets/images/artboard-19-v.webp" alt="受講生の声" loading="lazy" /></div>
              <div className="voices__item"><img src="/bytech/assets/images/artboard-7.webp" alt="受講生の声" loading="lazy" /></div>
              <div className="voices__item"><img src="/bytech/assets/images/artboard-2.webp" alt="受講生の声" loading="lazy" /></div>
              <div className="voices__item"><img src="/bytech/assets/images/artboard-20-v.webp" alt="受講生の声" loading="lazy" /></div>
              <div className="voices__item"><img src="/bytech/assets/images/artboard-3.webp" alt="受講生の声" loading="lazy" /></div>
              <div className="voices__item"><img src="/bytech/assets/images/artboard-9.webp" alt="受講生の声" loading="lazy" /></div>
              <div className="voices__item"><img src="/bytech/assets/images/artboard-8.webp" alt="受講生の声" loading="lazy" /></div>
              <div className="voices__item"><img src="/bytech/assets/images/artboard-18.webp" alt="受講生の声" loading="lazy" /></div>
              <div className="voices__item"><img src="/bytech/assets/images/artboard-10.webp" alt="受講生の声" loading="lazy" /></div>
            </div>
            <button className="voices__btn voices__btn--next" type="button" aria-label="次へ">
              <svg viewBox="0 0 1000 1000" aria-hidden="true"><path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"/></svg>
            </button>
          </div>
          <div className="voices__dots" id="voicesDots">
            <button className="voices__dot active" type="button" />
            <button className="voices__dot" type="button" />
            <button className="voices__dot" type="button" />
            <button className="voices__dot" type="button" />
            <button className="voices__dot" type="button" />
            <button className="voices__dot" type="button" />
            <button className="voices__dot" type="button" />
            <button className="voices__dot" type="button" />
            <button className="voices__dot" type="button" />
            <button className="voices__dot" type="button" />
            <button className="voices__dot" type="button" />
            <button className="voices__dot" type="button" />
            <button className="voices__dot" type="button" />
          </div>
        </div>
      </section>

      {/* ===== CAMPAIGN BANNER ===== */}
      <section className="campaign-banner">
        <div className="campaign-banner__inner">
          <div className="campaign-banner__media">
            <a
              href="https://generative-ai.bytech.jp/counseling/"
              target="_blank"
              rel="noopener noreferrer"
              className="campaign-banner__link"
            >
              <img
                src="/bytech/assets/images/2man-off-2048x991.webp"
                alt="キャンペーンのお知らせ"
                className="campaign-banner__image"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="about">
        <div className="about__card fadein">

          {/* floating badge — 9edc72a: group-20884.svg */}
          <div className="about__badge">
            <img src="/bytech/assets/images/group-20884.svg" alt="" />
          </div>

          {/* two-column body — 8094411: flex row, gap 60px, margin-top 50px */}
          <div className="about__body">

            {/* left column — 83e0441 / 3a3c346 */}
            <div className="about__body-left">
              {/* d7f5bb2: SP-only no1.svg above text */}
              <div className="about__no1-sp hide-pc hide-tablet">
                <img src="/bytech/assets/images/no1.svg" alt="AIがおすすめする生成AIスクール No.1" />
              </div>
              <div className="about__body-text">
                {/* b1a013e: 24px #191722 */}
                <h2 className="about__heading-main">
                  未経験から実践ベースでAI活用スキルを学び、
                </h2>
                {/* 92b744d: 34px #fff on primary bg */}
                <h2 className="about__heading-highlight">
                  最短で実務で使える成果に繋げる
                </h2>
                {/* 93841b4: 22px #191722 */}
                <p className="about__sub">超実践型のオンラインAIスクール</p>
              </div>
            </div>

            {/* right column — 356c516: desktop/tablet only */}
            <div className="about__body-right hide-sp">
              <div className="about__no1">
                <img
                  src="/bytech/assets/images/no1.svg"
                  alt="AIがおすすめする生成AIスクール No.1"
                />
              </div>
            </div>

          </div>

          {/* KV image */}
          <div className="about__kv">
            <img src="/bytech/assets/images/KV2.webp" alt="バイテック生成AI" loading="lazy" />
          </div>

          <p className="about__note">
            ※ 調査期間：2025年1月~2026年1月・調査会社：株式会社Librex・対象条件：ChatGPT / Gemini / Claude / Gensparkでの検索結果
          </p>

        </div>

      </section>

      {/* ===== ABOUT SP STATS (adb3ee1 — SP only) ===== */}
      <section className="about-sp-stats">
        <div className="about-sp-stats__inner">
          {/* divider top */}
          <div className="about-sp-stats__divider-wrap">
            <hr className="about-sp-stats__divider" />
          </div>
          {/* heading: 累計2500人以上の受講生の生成AI技術の習得をサポート */}
          <h2 className="about-sp-stats__heading">
            累計<span className="accent">2500</span>人以上の受講生の<br />生成AI技術の習得をサポート
          </h2>
          {/* divider bottom */}
          <div className="about-sp-stats__divider-wrap">
            <hr className="about-sp-stats__divider" />
          </div>
          {/* KV wide image */}
          <div className="about-sp-stats__kv">
            <img src="/bytech/assets/images/KV_11zon.webp" alt="" loading="lazy" />
          </div>
          {/* person photos — stacked 100% width on SP */}
          <div className="about-sp-stats__photo about-sp-stats__photo--first">
            <img src="/bytech/assets/images/ozaki-1.webp" alt="" loading="lazy" />
          </div>
          <div className="about-sp-stats__photo about-sp-stats__photo--second">
            <img src="/bytech/assets/images/iida-1.webp" alt="" loading="lazy" />
          </div>
        </div>
        {/* tilt shape divider bottom — fills with voice-section purple */}
        <div className="about-sp-stats__shape" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            
          </svg>
        </div>
        
      </section>
      {/* ===== IF YOU HAD AI SKILLS ===== */}
      {/* e7cb04a + d392fac */}
      <section className="voice-section">
        {/* e7cb04a / 6eae7bf: heading block — straddles about/voice-section boundary on PC; appears below about-sp-stats__shape on SP */}
        <div className="voice-section__heading fadein">
          <img
            src="/bytech/assets/images/yajirushi.svg"
            alt=""
            className="voice-section__arrow"
            aria-hidden="true"
          />
          <img
            src="/bytech/assets/images/2months-change.svg"
            alt="2ヶ月でこう変わる"
            className="voice-section__ttl-deco"
          />
          <p className="voice-section__en">If you had AI utilization skills</p>
        </div>
        <div className="voice-section__inner">

          

          {/* d392fac: carousel section with cta_bg */}
          <div className="voice-carousel-section">

            {/* 8abba32: carousel wrap — width 80% on mobile */}
            <div className="voice-carousel-wrap">
              <button className="voice-carousel__btn voice-carousel__btn--prev" type="button" aria-label="前へ" id="voiceCardPrev">
                <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"/></svg>
              </button>

              {/* 6f3df4d: 4-slides carousel */}
              <div className="voice-carousel" id="voiceCarouselViewport">
                <div className="voice-carousel__track" id="voiceTrack">
                  <div className="voice-card">
                    <img src="/bytech/assets/images/artboard-14-5.webp" alt="受講生の声1" loading="lazy" />
                  </div>
                  <div className="voice-card">
                    <img src="/bytech/assets/images/artboard-7-1.webp" alt="受講生の声2" loading="lazy" />
                  </div>
                  <div className="voice-card">
                    <img src="/bytech/assets/images/artboard-18-7.webp" alt="受講生の声3" loading="lazy" />
                  </div>
                  <div className="voice-card">
                    <img src="/bytech/assets/images/artboard-17-6.webp" alt="受講生の声4" loading="lazy" />
                  </div>
                  <div className="voice-card">
                    <img src="/bytech/assets/images/uehara-1-1.webp" alt="受講生の声5" loading="lazy" />
                  </div>
                  <div className="voice-card">
                    <img src="/bytech/assets/images/artboard-10-4.webp" alt="受講生の声6" loading="lazy" />
                  </div>
                  <div className="voice-card">
                    <img src="/bytech/assets/images/artboard-9-3.webp" alt="受講生の声7" loading="lazy" />
                  </div>
                </div>
              </div>

              <button className="voice-carousel__btn voice-carousel__btn--next" type="button" aria-label="次へ" id="voiceCardNext">
                <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"/></svg>
              </button>
            </div>

            {/* pagination dots — 7 slides */}
            <div className="voice-carousel__pagination" id="voiceCarouselPagination">
              <button className="voice-carousel__dot is-active" type="button" aria-label="スライド1" />
              <button className="voice-carousel__dot" type="button" aria-label="スライド2" />
              <button className="voice-carousel__dot" type="button" aria-label="スライド3" />
              <button className="voice-carousel__dot" type="button" aria-label="スライド4" />
              <button className="voice-carousel__dot" type="button" aria-label="スライド5" />
              <button className="voice-carousel__dot" type="button" aria-label="スライド6" />
              <button className="voice-carousel__dot" type="button" aria-label="スライド7" />
            </div>

            {/* 7e2f1b0: disclaimer text */}
            <p className="voice-section__disclaimer">※個人の感想・実績であり、効果を保証するものではありません</p>

            {/* 347e5ba: CTA button — flex-direction row-reverse, icon on right */}
            <div className="voice-section__cta fadein">
              <a
                href="https://bytech.jp/blog/category/interview/"
                target="_blank"
                rel="noopener noreferrer"
                className="voice-section__cta-btn"
              >
                受講生インタビューを見る
                <svg aria-hidden="true" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"/></svg>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section id="problem">

        <div className="problem__inner">
          <div className="problem__head fadein">
            {/* desktop heading */}
            <h2 className="problem__h2">こんなお悩み・課題ありませんか？</h2>
            {/* SP heading */}
            <h2 className="problem__h2-sp">こんな<br /><span className="accent">お悩み・課題</span>ありませんか？</h2>
            <p className="problem__label">PROBLEM</p>
          </div>

          <div className="problem__body fadein">
            <div className="problem__illust">
              <img src="https://generative-ai.bytech.jp/wp-content/uploads/2026/02/Isometric-man-with-laptop-working-on-sofa-at-his-house.svg" alt="お悩みイラスト" />
            </div>

            <div className="problem__list">
              <div className="problem__item">
                <span className="problem__icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs><linearGradient id="iconGrad1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#4f3bf2"/><stop offset="100%" stopColor="#523bc9"/></linearGradient></defs>
                    <circle cx="12" cy="12" r="12" fill="url(#iconGrad1)" />
                    <polyline points="18 8 10 16 6 12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="problem__item-text">ChatGPTは毎日使っているが<span className="hl">使いこなせている</span>気がしない</p>
              </div>
              <div className="problem__item">
                <span className="problem__icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs><linearGradient id="iconGrad2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#4f3bf2"/><stop offset="100%" stopColor="#523bc9"/></linearGradient></defs>
                    <circle cx="12" cy="12" r="12" fill="url(#iconGrad2)" />
                    <polyline points="18 8 10 16 6 12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="problem__item-text">欲しい回答が出ないのでAIが本当に<span className="hl">仕事で使えるか</span>疑問</p>
              </div>
              <div className="problem__item">
                <span className="problem__icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs><linearGradient id="iconGrad3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#4f3bf2"/><stop offset="100%" stopColor="#523bc9"/></linearGradient></defs>
                    <circle cx="12" cy="12" r="12" fill="url(#iconGrad3)" />
                    <polyline points="18 8 10 16 6 12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="problem__item-text">Xで情報収集はしてるが早くて<span className="hl">全く追いつけない</span></p>
              </div>
              <div className="problem__item">
                <span className="problem__icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs><linearGradient id="iconGrad4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#4f3bf2"/><stop offset="100%" stopColor="#523bc9"/></linearGradient></defs>
                    <circle cx="12" cy="12" r="12" fill="url(#iconGrad4)" />
                    <polyline points="18 8 10 16 6 12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="problem__item-text">無料セミナーに参加はしたが<span className="hl">実践レベルでは使えない</span></p>
              </div>
              <div className="problem__item">
                <span className="problem__icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs><linearGradient id="iconGrad5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#4f3bf2"/><stop offset="100%" stopColor="#523bc9"/></linearGradient></defs>
                    <circle cx="12" cy="12" r="12" fill="url(#iconGrad5)" />
                    <polyline points="18 8 10 16 6 12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="problem__item-text">AI副業の情報は<span className="hl">詐欺っぽい物ばかり</span>で不安</p>
              </div>
            </div>
          </div>

          <div className="problem__bottom">
            <div className="problem__arrow fadein">
              <img src="/bytech/assets/images/yajirushi2.svg" alt="" className="problem__arrow-img" aria-hidden="true" />
            </div>

            <div className="problem__cta fadein">
              <div className="problem__badge">バイテックなら</div>
              <h3 className="problem__subtitle-pc">
                <span>{'"あなたが欲しい"AI活用スキルを最短で習得'}</span>
              </h3>
              <p className="problem__subtitle-sp"><span>必要なAI活用スキルを最短で習得</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ENVIRONMENT ===== */}
      <section id="environment">
        {/* Triangle shape divider — white triangle cuts into dark section */}
        <div className="env__shape-top">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 73" preserveAspectRatio="none">
            <polygon points="500,73 0,0 1000,0" fill="#ffffff" />
          </svg>
        </div>

        {/* ── elementor-element-3af9416e ── */}
        <div className="env3af fadein">

          {/* 86fc962: heading block */}
          <div className="env3af__head">
            {/* 84e1b66: desktop heading */}
            <h2 className="env3af__h2">最短で成果に繋げるバイテック独自の学習環境</h2>
            {/* f345ac3: mobile heading */}
            <h2 className="env3af__h2-mobile">最短で成果に繋げる<br />バイテック独自の学習環境</h2>
            {/* f942961: ENVIRONMENT label */}
            <p className="env3af__label">ENVIRONMENT</p>
          </div>

          {/* 3eda783: unique box — dividers + deco + subheadings */}
          <div className="env3af__body">
            {/* 67b4bce: slash divider */}
            <div className="env3af__divider" />
            {/* c6b2bd6: path-36598.svg (desktop) */}
            <img
              src="/bytech/assets/images/path-36598.svg"
              alt="あなたの課題解決やゴール達成に必要な学習環境を設計"
              className="env3af__deco-desktop"
            />
            {/* 21cf8a9: group-20914.svg (mobile) */}
            <img
              src="/bytech/assets/images/group-20914.svg"
              alt="Unique"
              className="env3af__deco-mobile"
            />
            {/* 68206a1: slash divider */}
            <div className="env3af__divider" />
            {/* 6fb2cab8 */}
            <h2 className="env3af__sub1">あなた専用のカリキュラムとサポートで</h2>
            {/* 84e12ea */}
            <h2 className="env3af__sub2">最短で学びを成果に変える</h2>
          </div>

          {/* 7910406: 3 feature images with × separators */}
          <div className="env3af__images">
            {/* fc98640: グループ-20897 */}
            <div className="env3af__img">
              <img src="/bytech/assets/images/group-20897.webp" alt="600以上のカリキュラム" loading="lazy" />
            </div>
            {/* 632b683: × separator */}
            <div className="env3af__sep">
              <img src="/bytech/assets/images/×.svg" alt="×" />
            </div>
            {/* 2de6772: グループ-20895-1 */}
            <div className="env3af__img">
              <img src="/bytech/assets/images/group-20895-1.webp" alt="AI活用コンサルティング" loading="lazy" />
            </div>
            {/* 2f3b46b: × separator */}
            <div className="env3af__sep">
              <img src="/bytech/assets/images/×.svg" alt="×" />
            </div>
            {/* ff33265: グループ-20896-1 */}
            <div className="env3af__img">
              <img src="/bytech/assets/images/group-20896-1.webp" alt="100種以上の実践課題" loading="lazy" />
            </div>
          </div>

        </div>
      
        {/* Mentor card — overlaps the bottom of this section */}
        <div className="env__mentor-wrap fadein">
          <div className="env__mentor">
            <div className="env__mentor-shape-top" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path className="env__mentor-shape-fill" d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"/>
              </svg>
            </div>
            <div className="env__mentor-heading-frame">
              <img
                src="/bytech/assets/images/instructor-title.svg"
                alt="AI業界の最前線で活躍する講師陣があなたのできたらいいなを現実にします！"
                className="env__mentor-heading"
              />
            </div>
            <p className="env__mentor-sub">
              20名以上の様々な領域に特化したメンターの中から<br />
              あなたの課題とゴールに最適な専任AIメンターがゴールまで徹底サポート
            </p>

            <div className="env__mentor-grid">
              {/* PC: composite grid image */}
              <img
                src="/bytech/assets/images/instructors-1.webp"
                alt="講師陣"
                loading="lazy"
                className="env__mentor-grid-img env__mentor-grid-img--pc"
              />
              {/* SP: mobile-optimised composite image */}
              <img
                src="/bytech/assets/images/group-16191.webp"
                alt="講師陣"
                loading="lazy"
                className="env__mentor-grid-img env__mentor-grid-img--sp"
              />
            </div>

            <div className="env__mentor-cta">
              <a href="https://generative-ai.bytech.jp/counseling/" target="_blank">
                <img
                  src="/bytech/assets/images/cta-counseling.webp"
                  alt="まずは無料で相談してみる"
                  style={{display: 'block', width: '100%', maxWidth: '500px', height: 'auto'}}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="env__arrow-wrap">
          <img
            src="/bytech/assets/images/yajirushi.svg"
            alt="矢印"
            className="env__arrow"
          />
        </div>
      </section>
      

      {/* ===== 5 REASONS ===== */}
      <section className="features u-section" id="aboutus" style={{paddingTop: '340px'}}>
        <div className="features__inner">
          <div className="features__background">
          {/* Section heading */}
          <div className="reason-head fadein">
            <h2 className="reason-head__ttl">バイテックが最短で<br />実務レベルのAI人材を育成できる<br /><span>5つの理由</span></h2>
            <p className="reason-head__sub">REASON</p>
          </div>
          

          <div className="reason-list">

            {/* Reason 1 */}
            <div className="reason-item fadein">
              <div className="reason-item__row">
                <div className="reason-item__text">
                  <div className="reason-item__badge-row">
                    <span className="reason-item__num-badge">01</span>
                    <span className="reason-item__label">生涯学習が可能な</span>
                  </div>
                  <img src="/bytech/assets/images/group-18615.svg" alt="" className="reason-item__divider-img" />
                  <h3 className="reason-item__h3">受講目的に合わせて学習できる<br /><span>10コース600以上の</span>カリキュラム</h3>
                  <p className="reason-item__body">ChatGPTやGeminiなどの主要AIマスターコースからAI副業で収益化を目指せる副業コースまで、全て買い切りで無期限で見ることができます。受講生の課題や目的に合わせてカリキュラムをカスタマイズできるので、自分に必要なAI活用スキルを身につけることが可能です。</p>
                </div>
                <div className="reason-item__img">
                  <img src="/bytech/assets/images/s2-1024x716.webp" alt="600以上のカリキュラム" loading="lazy" />
                </div>
              </div>
              <div className="reason-item__sub">
                <div className="reason-sub__card">
                  {/* Desktop heading (hidden on mobile) */}
                  <h4 className="reason-sub__card-ttl">最新のAIスキルが学べるアップデートされるカリキュラム</h4>
                  {/* Mobile heading (hidden on desktop/tablet) */}
                  <h4 className="reason-sub__card-ttl--mobile"><span style={{color:'#533AFC'}}>最新のAIスキル</span>が学べる<br />アップデートされるカリキュラム</h4>
                  <p className="reason-sub__card-body">カリキュラムは毎月追加・アップデートされているので、継続して最新のカリキュラムを学習することができます。</p>
                  <img src="/bytech/assets/images/group-16195.svg" alt="" className="reason-sub__card-progress" />
                  {/* Course cards slider */}
                  <div className="course-slider">
                    <div className="course-slider__col">
                      <div className="course-card-sp">
                        <img src="/bytech/assets/images/group-16172-4.webp" alt="ChatGPTマスターコース" className="course-card-sp__img" />
                        <div className="course-card-sp__body">
                          <div className="course-card-sp__title">ChatGPTマスターコース</div>
                          <div className="course-card-sp__sub">全8チャプター｜45レッスン</div>
                          <div className="course-card-sp__desc">ChatGPTの基本操作から、プロンプト設計、メール・資料・アイデア出しからZapier・MCPとの連携など実務応用まで体系的に学ぶコースです。</div>
                        </div>
                      </div>
                    </div>
                    <div className="course-slider__col">
                      <div className="course-card-sp">
                        <img src="/bytech/assets/images/group-16203-2-1-1024x685.webp" alt="Geminiマスターコース" className="course-card-sp__img" />
                        <div className="course-card-sp__body">
                          <div className="course-card-sp__title">Claudeマスターコース</div>
                          <div className="course-card-sp__sub">全14チャプター｜81レッスン</div>
                          <div className="course-card-sp__desc">Claudeの基本操作から、思考を引き出すプロンプト設計、長文処理、業務アプリ連携、Claude Cowork・Codeを駆使したエージェント開発を学ぶコースです。</div>
                        </div>
                      </div>
                    </div>
                    <div className="course-slider__col">
                      <div className="course-card-sp">
                        <img src="/bytech/assets/images/group-16175-7.webp" alt="Geminiマスターコース" className="course-card-sp__img" />
                        <div className="course-card-sp__body">
                          <div className="course-card-sp__title">Geminiマスターコース</div>
                          <div className="course-card-sp__sub">全6チャプター｜36レッスン</div>
                          <div className="course-card-sp__desc">Gmail・スプレッドシート・スライドなど、Googleサービスと連携したGeminiの活用方法を学ぶコースです。</div>
                        </div>
                      </div>
                    </div>
                    <div className="course-slider__col">
                      <div className="course-card-sp">
                        <img src="/bytech/assets/images/group-16173-5.webp" alt="Copilotマスターコース" className="course-card-sp__img" />
                        <div className="course-card-sp__body">
                          <div className="course-card-sp__title">Copilotマスターコース</div>
                          <div className="course-card-sp__sub">全6チャプター｜48レッスン</div>
                          <div className="course-card-sp__desc">Microsoft 365に組み込まれたCopilotを使い、文書作成、資料作成、データ整理の工数を減らす実践的なスキルを身につけるコースです。</div>
                        </div>
                      </div>
                    </div>
                    <div className="course-slider__col">
                      <div className="course-card-sp">
                        <img src="/bytech/assets/images/group-16174-6.webp" alt="Difyマスターコース" className="course-card-sp__img" />
                        <div className="course-card-sp__body">
                          <div className="course-card-sp__title">Difyマスターコース</div>
                          <div className="course-card-sp__sub">全21チャプター｜82レッスン</div>
                          <div className="course-card-sp__desc">Dify(ディフィ)を活用して、申請フローや顧客管理、レポート自動化などの簡易システムを構築する方法を学ぶコースです。</div>
                        </div>
                      </div>
                    </div>
                    <div className="course-slider__col">
                      <div className="course-card-sp">
                        <img src="/bytech/assets/images/group-16176-8.webp" alt="NotebookLMマスターコース" className="course-card-sp__img" />
                        <div className="course-card-sp__body">
                          <div className="course-card-sp__title">NotebookLMマスターコース</div>
                          <div className="course-card-sp__sub">全7チャプター｜31レッスン</div>
                          <div className="course-card-sp__desc">マニュアル・議事録・企画書などの社内資料をNotebookLMに読み込ませ、質問に答えてくれるナレッジAIを構築する方法を学ぶコースです。</div>
                        </div>
                      </div>
                    </div>
                    <div className="course-slider__col">
                      <div className="course-card-sp">
                        <img src="/bytech/assets/images/group-16178-10.webp" alt="ビジネスワーカーコース" className="course-card-sp__img" />
                        <div className="course-card-sp__body">
                          <div className="course-card-sp__title">ビジネスワーカーコース</div>
                          <div className="course-card-sp__sub">全19チャプター｜92レッスン</div>
                          <div className="course-card-sp__desc">事務・営業・企画・カスタマーサクセスなど、幅広い職種で共通して役立つAI活用スキルを横断的に学ぶコースです。</div>
                        </div>
                      </div>
                    </div>
                    <div className="course-slider__col">
                      <div className="course-card-sp">
                        <img src="/bytech/assets/images/group-16169-1.webp" alt="AIウェブライターコース" className="course-card-sp__img" />
                        <div className="course-card-sp__body">
                          <div className="course-card-sp__title">AIウェブライターコース</div>
                          <div className="course-card-sp__sub">全18チャプター｜46レッスン</div>
                          <div className="course-card-sp__desc">ブログ・オウンドメディア・LP・メルマガなど、Webライティングに特化したAI活用術を学ぶコースです。</div>
                        </div>
                      </div>
                    </div>
                    <div className="course-slider__col">
                      <div className="course-card-sp">
                        <img src="/bytech/assets/images/group-16170-2.webp" alt="AI画像クリエイターコース" className="course-card-sp__img" />
                        <div className="course-card-sp__body">
                          <div className="course-card-sp__title">AI画像クリエイターコース</div>
                          <div className="course-card-sp__sub">全31チャプター｜89レッスン</div>
                          <div className="course-card-sp__desc">バナー、サムネイル、SNS用画像などを、画像生成AIで制作するスキルを身につけるコースです。</div>
                        </div>
                      </div>
                    </div>
                    <div className="course-slider__col">
                      <div className="course-card-sp">
                        <img src="/bytech/assets/images/group-16171-3.webp" alt="AI動画クリエイターコース" className="course-card-sp__img" />
                        <div className="course-card-sp__body">
                          <div className="course-card-sp__title">AI動画クリエイターコース</div>
                          <div className="course-card-sp__sub">全4チャプター｜19レッスン</div>
                          <div className="course-card-sp__desc">画像・プロンプトからイメージ通りの動画制作を実現するスキルを身につけるコースです。</div>
                        </div>
                      </div>
                    </div>
                    <div className="course-slider__col">
                      <div className="course-card-sp">
                        <img src="/bytech/assets/images/group-16177-9.webp" alt="生成AIパスポートコース" className="course-card-sp__img" />
                        <div className="course-card-sp__body">
                          <div className="course-card-sp__title">生成AIパスポートコース</div>
                          <div className="course-card-sp__sub">全15チャプター｜32レッスン</div>
                          <div className="course-card-sp__desc">生成AIパスポート試験の出題範囲を押さえながら、主要ツールの特徴やリスク、ビジネス活用のポイントを体系的に学ぶコースです。</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="reason-divider" />

            {/* Reason 2 */}
            <div className="reason-item fadein">
              <div className="reason-item__row">
                <div className="reason-item__text">
                  <div className="reason-item__badge-row">
                    <span className="reason-item__num-badge">02</span>
                    <span className="reason-item__label">ポートフォリオとして使える</span>
                  </div>
                  <img src="/bytech/assets/images/group-18615.svg" alt="" className="reason-item__divider-img" />
                  <h3 className="reason-item__h3">学びを<span>見える形の成果</span>にする<br />AI活用スキル証明課題</h3>
                  <p className="reason-item__body">バイテックのAIメンター陣がカウンセリング参加者含めた5000人以上のヒアリングをもとに制作した初級〜上級まで網羅する証明書発行課題。各主要AIコース5コース全てにスキル証明課題が設置されているので、各種ツールでできるタスクや課題解決スキルを見える形で証明することができます。</p>
                </div>
                <div className="reason-item__img">
                  <img src="/bytech/assets/images/certificate-1024x545.webp" alt="AI活用スキル証明課題" loading="lazy" />
                </div>
              </div>
              <div className="reason-item__sub">
                {/* 5dce8ce: white bg sub-card, padding 30px 30px 30px 40px */}
                <div className="r2-sub">
                  {/* 5aa8955: dark overlay box with bg image + gradient */}
                  <div className="r2-sub__overlay">
                    <h4 className="r2-sub__overlay-ttl">100種類以上のリアルな<br />業務・副業を想定した実践課題</h4>
                  </div>
                  {/* 84d3a60: image carousel, margin-top 30px */}
                  <R2Carousel />
                </div>
              </div>
            </div>

            <hr className="reason-divider" />

            {/* Reason 3 */}
            <div className="reason-item fadein">
              <div className="reason-item__row">
                <div className="reason-item__text">
                  <div className="reason-item__badge-row">
                    <span className="reason-item__num-badge">03</span>
                    <span className="reason-item__label">領域ごとに選び抜かれた</span>
                  </div>
                  <img src="/bytech/assets/images/group-18615.svg" alt="" className="reason-item__divider-img" />
                  <h3 className="reason-item__h3"><span>専属AIメンター</span>の<br />マンツーマン個別サポート</h3>
                  <p className="reason-item__body">様々な業務課題や目的が存在するからこそ、領域に特化したAIメンターが必要となります。業務でのAI活用から副業収入UP・AIフリーランスを目指す方もあなたに最適な専任メンターが最短でゴールまで導きます。</p>
                </div>
                <div className="reason-item__img">
                  <img src="/bytech/assets/images/group-20906-1024x640.webp" alt="特徴2_専任のAIメンター" loading="lazy" style={{width:'90%'}} />
                </div>
              </div>
              <div className="reason-item__sub">
                {/* 6cade3e: white bg, padding 40px 50px 30px 50px, margin-top 30px */}
                <div className="r3-sub">
                  {/* Desktop H4 (60c79f5, hidden on mobile) */}
                  <h4 className="r3-sub__ttl">業務活用から副業までサポートする採用率1.6%の精鋭メンター陣</h4>
                  {/* Mobile H4 (0bcf5ca, hidden on desktop+tablet) */}
                  <h4 className="r3-sub__ttl--mobile"><span style={{color:'#533AFC'}}>業務活用から副業</span>までサポートするバイテック精鋭メンター陣</h4>
                  <p className="r3-sub__body">ただAIを使えるではなく、使いこなしている且つ特化領域を持っているメンターのみ採用しているので、メンターの質は業界随一です。</p>
                  {/* 20f36a6: image carousel, margin-top 20px, nav arrows #FFD464 */}
                  <R3Carousel />
                </div>
              </div>
            </div>

            <hr className="reason-divider" />

            {/* Reason 4 */}
            <div className="reason-item fadein">
              <div className="reason-item__row">
                <div className="reason-item__text">
                  <div className="reason-item__badge-row">
                    <span className="reason-item__num-badge">04</span>
                    <span className="reason-item__label">最短で収益化を実現する</span>
                  </div>
                  <img src="/bytech/assets/images/group-18615.svg" alt="" className="reason-item__divider-img" />
                  <h3 className="reason-item__h3">身につけたスキルを<span style={{marginLeft:'3px'}}>仕事に変える</span><br />案件マッチングサービス「b-Works」</h3>
                  <p className="reason-item__body">AIライティングから画像・動画生成、Difyを活用したワークフローの自動化までバイテックで身につけたAI活用スキルを案件という形で存分に発揮する場を設けています。</p>
                </div>
                <div className="reason-item__img">
                  <img src="/bytech/assets/images/b-works2-1024x640.webp" alt="案件獲得マッチング機能" loading="lazy" style={{width:'90%'}} />
                </div>
              </div>
              <div className="reason-item__sub">
                {/* 0f3e499: white bg, padding 30px 50px, text-align center, margin-top 30px */}
                <div className="r4-sub">
                  {/* Desktop H4 (67e0f2b, hidden mobile) */}
                  <h4 className="r4-sub__ttl">未経験の方でも<span>挑戦できる案件のラインナップ</span></h4>
                  {/* Mobile H4 (0dfd03c, hidden desktop+tablet) */}
                  <h4 className="r4-sub__ttl--mobile">未経験の方でも<br /><span style={{color:'#533AFC'}}>挑戦できる案件ラインナップ</span></h4>
                  {/* Body text (9a7ca70, hidden mobile) */}
                  <p className="r4-sub__body">案件は定期的に更新・追加されていくので、自分に合った案件にチャレンジできます。また、90%の方が未経験から案件獲得に成功しているのでしっかりスキル習得をしていただければ最短で収益化をすることも可能です。</p>
                  {/* Desktop image (65afc44, hidden mobile) */}
                  <img src="/bytech/assets/images/b-works-features.svg" alt="掲載中の案件" className="r4-sub__img-desktop" />
                  {/* Mobile image (099006b, hidden desktop+tablet) */}
                  <img src="/bytech/assets/images/b-works-features-sp.svg" alt="b-works掲載案件_SP" className="r4-sub__img-mobile" />
                </div>
                {/* Disclaimer (3558e61) */}
                  <p className="r4-sub__note">※案件斡旋を保証するサポートではありません。必ずテスト案件を実施していただき、合格した方のみアサインされます。</p>
              </div>
            </div>

            <hr className="reason-divider" />

            {/* Reason 5 */}
            <div className="reason-item fadein">
              {/* ccad21e: テキスト列 + 画像列 の横並び行 */}
              <div className="reason-item__row">
                {/* 617c4e3: テキスト列 */}
                <div className="reason-item__text">
                  {/* fba3e92: バッジ行 */}
                  <div className="reason-item__badge-row">
                    <span className="reason-item__num-badge">05</span>
                    <span className="reason-item__label">サポート終了後も安心の</span>
                  </div>
                  {/* 2dd31c5: 区切り線 */}
                  <img src="/bytech/assets/images/group-18615.svg" alt="" className="reason-item__divider-img" />
                  {/* 6a3a136: h3 */}
                  <h3 className="reason-item__h3"><span>仲間と一緒にスキルアップ</span>ができる<br />実践型のAIコミュニティ「b-Crew」</h3>
                  {/* db08453: 本文 */}
                  <p className="reason-item__body">&quot;作って学ぶ&quot;がコンセプトの受講生や卒業生、一般のユーザーも入れる、目的や実現したいことに最適化した実践的なAIコミュニティです。受講生は永久会員としてサポート終了後もウェビナーの視聴やコンテスト・イベントの参加が可能となっています。</p>
                </div>
                {/* 6a650ff: 画像列 */}
                <div className="reason-item__img">
                  <img src="/bytech/assets/images/group-19623-1024x569.webp" alt="b-Crew" loading="lazy" />
                </div>
              </div>

              {/* 16068b5: b-Crew サブセクション（行の下に縦積み） */}
              <div className="r5-sub">
                {/* 3f05247: タイトル（モバイル非表示） */}
                <h4 className="r5-sub__ttl">継続的な学習を支援する豊富なコンテンツ</h4>
                {/* 690636e: タイトル（デスクトップ・タブレット非表示） */}
                <h4 className="r5-sub__ttl--mobile">継続的な学習を支援する<br /><span style={{color:'#533AFC'}}>豊富なコンテンツ</span></h4>
                {/* ffade09: 本文（モバイル非表示） */}
                <p className="r5-sub__body">コミュニティ内コンテンツは随時アップデートされているので、自分に合った使い方が必ず見つかるコミュニティになっています。</p>
                {/* 8c0c79c: デスクトップ画像（モバイル非表示） */}
                <img src="/bytech/assets/images/community-contents.svg" alt="コミュニティコンテンツ" className="r5-sub__content-img" />
                {/* 00546db: モバイル画像（デスクトップ・タブレット非表示） */}
                <img src="/bytech/assets/images/group-19629.svg" alt="コミュニティコンテンツSP" className="r5-sub__content-img--mobile" />
                {/* 8fbf7e7: 注記 */}
              </div>
              <p className="r5-sub__note">※コミュニティ内のイベントは今後実施予定のものもあります。</p>
                {/* 86bfb84: ウェビナー + カルーセル */}
                
              <div className="r5-sub__webinar">
                  {/* d8b40a1: ウェビナーラベル */}
                  <img src="/bytech/assets/images/premium-webinar.svg" alt="有料級ウェビナー" className="r5-sub__webinar-label" />
                  {/* 724407c: カルーセル */}
                  <R5Carousel />
                </div>
            </div>

          </div>
        </div>
        </div>
      </section>

      {/* ===== CTA BANNER (3ab2f36) ===== */}
      <section className="cta-banner">
        <div className="cta-banner__inner">
          {/* ce59709: 見出し */}
          <h2 className="cta-banner__ttl">もっとバイテックの特徴が知りたい</h2>
          {/* b9b7e9c: CTA ボタン画像 */}
          <div className="cta-banner__img-wrap">
            <a href="https://generative-ai.bytech.jp/counseling/">
              <img
                src="/bytech/assets/images/cta-setsumeikai-3.webp"
                alt="無料説明会に申し込む"
                loading="lazy"
              />
            </a>
          </div>
          {/* 98cea5f: 注記 */}
          <p className="cta-banner__note">※ 無理な勧誘は行っていません。</p>
        </div>
      </section>

      {/* ===== CURRICULUM (5c8ef166) ===== */}
      <section className="curriculum" id="courses">
        <div className="curriculum__inner">

          {/* Section header (4d7be5c2 / a46a309) */}
          <div className="curric-head">
            {/* 5ae2c55b: タイトル */}
            <h2 className="curric-head__ttl">カリキュラム一覧</h2>
            {/* 6f65f61f: サブタグ */}
            <p className="curric-head__tag">CURRICULUM</p>
            {/* e41b219 + 2aead3c: モバイル用説明 */}
            <p className="curric-head__desc--sp"><span>全600レッスン以上</span>のカリキュラムを学習し放題！</p>
            <p className="curric-head__note--sp">LITE・PROどちらかのプラン入会で学習カリキュラムはずーっと視聴可能です。</p>
            {/* 094819b + 872a9cf: デスクトップ用説明 */}
            <p className="curric-head__desc"><span>全10コース・600レッスン</span>以上の全てのカリキュラムをずーっと学習し放題！</p>
            <p className="curric-head__note">LITE・PROどちらかのプラン入会で学習カリキュラムはずーっと視聴可能です。</p>
          </div>

          {/* Panels (148a266) */}
          <div className="curric-panels">

            {/* ── Panel 1: ツール別マスターコース ── */}
            <div className="curric-panel">
              {/* 47e93b5: バッジ + メタ行 */}
              <div className="curric-panel__top">
                {/* cc39a43: "01" バッジ */}
                <div className="curric-panel__badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="77.566" height="100.356" viewBox="0 0 77.566 100.356">
                    <path d="M49.067-48.242q0,26.406-5.078,38.086-5.015,11.3-17.075,11.3T9.775-10.22Q4.761-21.265,4.761-49T9.775-87.788Q14.79-99.214,26.851-99.214q11.172,0,16.5,10.029Q49.067-78.584,49.067-48.242Zm-13.457,0q0-22.217-1.9-30.723-1.9-8.442-6.919-8.442T19.8-79.028q-1.9,8.379-1.9,30.151t1.9,30.215q1.968,8.379,6.982,8.379,4.951,0,6.855-8.315Q35.61-26.533,35.61-48.242ZM59.985-98.008H82.329V0H69.7V-86.772H59.985Z" transform="translate(-4.762 99.214)" fill="#191722" />
                  </svg>
                </div>
                {/* fa1f57b: ラベル + 見出し */}
                <div className="curric-panel__meta">
                  {/* b10fc42 (order:-99999): ラベル区切り線 */}
                  <div className="curric-panel__label-row">
                    <span className="curric-panel__label">ツール別マスターコース</span>
                    <span className="curric-panel__label-line" />
                  </div>
                  {/* 91c8233: 見出し */}
                  <h2 className="curric-panel__heading curric-panel__heading--pc">主要AIで、業務の効率化・自動化をするなら</h2>
                  <h2 className="curric-panel__heading curric-panel__heading--sp">主要AIで、業務の効率化をするなら</h2>
                </div>
              </div>

              {/* 73913a9: カードスクロール行 */}
              <div className="curric-cards">
                {/* a0cb2f1: ChatGPT */}
                <div className="curric-card">
                  <img src="/bytech/assets/images/group-16172-4-1024x685.webp" alt="ChatGPTマスターコース" className="curric-card__thumb" loading="lazy" />
                  <div className="curric-card__body">
                    <p className="curric-card__name">ChatGPTマスターコース</p>
                    <p className="curric-card__chapters">全8チャプター｜45レッスン</p>
                    <div className="curric-card__desc-wrap">
                      <p className="curric-card__desc">ChatGPTの基本操作から、プロンプト設計、メール・資料・アイデア出しからZapier・MCPとの連携など実務応用まで体系的に学ぶコースです。</p>
                    </div>
                    <a href="https://generative-ai.bytech.jp/chatgpt-master/" className="curric-card__btn">コースの詳細を見る</a>
                  </div>
                </div>
                {/* Claude */}
                <div className="curric-card">
                  <img src="/bytech/assets/images/group-16203-2-1-1024x685.webp" alt="Claudeマスターコース" className="curric-card__thumb" loading="lazy" />
                  <div className="curric-card__body">
                    <p className="curric-card__name">Claudeマスターコース</p>
                    <p className="curric-card__chapters">全14チャプター｜81レッスン</p>
                    <div className="curric-card__desc-wrap">
                      <p className="curric-card__desc">Claudeの基本操作から、思考を引き出すプロンプト設計、長文処理、業務アプリ連携、Claude Cowork・Codeを駆使したエージェント開発を学ぶコースです。</p>
                    </div>
                    <a href="https://generative-ai.bytech.jp/claude-master/" className="curric-card__btn">コースの詳細を見る</a>
                  </div>
                </div>
                {/* 0aa3371: Gemini */}
                <div className="curric-card">
                  <img src="/bytech/assets/images/group-16175-7-1024x687.webp" alt="Geminiマスターコース" className="curric-card__thumb" loading="lazy" />
                  <div className="curric-card__body">
                    <p className="curric-card__name">Geminiマスターコース</p>
                    <p className="curric-card__chapters">全6チャプター | 36レッスン</p>
                    <div className="curric-card__desc-wrap">
                      <p className="curric-card__desc">リサーチ、要約、レポート作成など&quot;調べて・まとめる&quot;作業を効率化するするスキルやGoogle関連のツールとAIを連携してエージェントを作成する応用スキルも習得します。</p>
                    </div>
                    <a href="https://generative-ai.bytech.jp/gemini-master/" className="curric-card__btn">コースの詳細を見る</a>
                  </div>
                </div>
                {/* e5e65e3: Copilot */}
                <div className="curric-card">
                  <img src="/bytech/assets/images/group-16173-5-1024x685.webp" alt="Copilotマスターコース" className="curric-card__thumb" loading="lazy" />
                  <div className="curric-card__body">
                    <p className="curric-card__name">Copilotマスターコース</p>
                    <p className="curric-card__chapters">全6チャプター | 48レッスン</p>
                    <div className="curric-card__desc-wrap">
                      <p className="curric-card__desc">Microsoft 365に組み込まれたCopilotを使い、文書作成、資料作成、データ整理の工数を減らす実践的なスキルを身につけます。</p>
                    </div>
                    <a href="https://generative-ai.bytech.jp/copilot-master/" className="curric-card__btn">コースの詳細を見る</a>
                  </div>
                </div>
                {/* c975f0f: Dify */}
                <div className="curric-card">
                  <img src="/bytech/assets/images/group-16174-6-1024x685.webp" alt="Difyマスターコース" className="curric-card__thumb" loading="lazy" />
                  <div className="curric-card__body">
                    <p className="curric-card__name">Difyマスターコース</p>
                    <p className="curric-card__chapters">全21チャプター | 82レッスン</p>
                    <div className="curric-card__desc-wrap">
                      <p className="curric-card__desc">Dify(ディフィ)を活用して、申請フローや顧客管理、レポート自動化などの簡易システムを構築する方法を学びます。エンジニアでなくても、自分の部署の業務フローを自動化することができます。</p>
                    </div>
                    <a href="https://generative-ai.bytech.jp/dify-master/" className="curric-card__btn">コースの詳細を見る</a>
                  </div>
                </div>
                {/* 24c1b75: NotebookLM */}
                <div className="curric-card">
                  <img src="/bytech/assets/images/group-16176-8-1024x685.webp" alt="NotebookLMマスターコース" className="curric-card__thumb" loading="lazy" />
                  <div className="curric-card__body">
                    <p className="curric-card__name">NotebookLMマスターコース</p>
                    <p className="curric-card__chapters">全7チャプター | 31レッスン</p>
                    <div className="curric-card__desc-wrap">
                      <p className="curric-card__desc">マニュアル・議事録・企画書などの社内資料をNotebookLMに読み込ませ、質問に答えてくれるナレッジAIを構築する方法を学びます。</p>
                    </div>
                    <a href="https://generative-ai.bytech.jp/notebooklm-master/" className="curric-card__btn">コースの詳細を見る</a>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Panel 2: AI副業・フリーランスコース ── */}
            <div className="curric-panel">
              {/* バッジ + メタ行 */}
              <div className="curric-panel__top">
                {/* "02" バッジ */}
                <div className="curric-panel__badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="98.008"  height="100.356" viewBox="0 0 98.008 100.356">
                    <path d="M49.067-48.242q0,26.406-5.078,38.086-5.015,11.3-17.075,11.3T9.775-10.22Q4.761-21.265,4.761-49T9.775-87.788Q14.79-99.214,26.851-99.214q11.172,0,16.5,10.029Q49.067-78.584,49.067-48.242Zm-13.457,0q0-22.217-1.9-30.723-1.9-8.442-6.919-8.442T19.8-79.028q-1.9,8.379-1.9,30.151t1.9,30.215q1.968,8.379,6.982,8.379,4.951,0,6.855-8.315Q35.61-26.533,35.61-48.242ZM73-66.143H60.049l-.127-3.872q0-16.06,4.824-22.6,4.888-6.6,16.377-6.6,21.646,0,21.646,23.994,0,16.187-16.187,46.655L78.774-13.9l-.381.762q-.317.635-.889,1.841h24.248V0H58.716q1.079-2.412,4.507-9.585t9.331-19.36q5.015-10.664,8.379-18.091t5.078-12.187q3.428-9.521,3.428-16.44,0-12.187-8.442-12.187-8.125,0-8.125,15.107l.063,5.586Z" transform="translate(-4.762 99.214)" fill="#191722" />
                  </svg>
                </div>
                <div className="curric-panel__meta">
                  <div className="curric-panel__label-row">
                    <span className="curric-panel__label">AI副業・フリーランスコース</span>
                    <span className="curric-panel__label-line" />
                  </div>
                  <h2 className="curric-panel__heading curric-panel__heading--pc">AIで副収入の獲得、フリーランスを目指すなら</h2>
                  <h2 className="curric-panel__heading curric-panel__heading--sp">AIで副業収入の獲得を目指すなら</h2>
                </div>
              </div>

              {/* カードスクロール行 */}
              <div className="curric-cards">
                {/* AIウェブライター */}
                <div className="curric-card">
                  <img src="/bytech/assets/images/group-16169-1-1024x685.webp" alt="AIウェブライターコース" className="curric-card__thumb" loading="lazy" />
                  <div className="curric-card__body">
                    <p className="curric-card__name">AIウェブライターコース</p>
                    <p className="curric-card__chapters">全18チャプター | 46レッスン</p>
                    <div className="curric-card__desc-wrap">
                      <p className="curric-card__desc">ブログ・オウンドメディア・LP・メルマガなど、Webライティングに特化したAI活用術を学ぶコースです。</p>
                    </div>
                    <a href="https://generative-ai.bytech.jp/ai-writer/" className="curric-card__btn">コースの詳細を見る</a>
                  </div>
                </div>
                {/* AI画像クリエイター */}
                <div className="curric-card">
                  <img src="/bytech/assets/images/group-16170-2-1024x685.webp" alt="AI画像クリエイターコース" className="curric-card__thumb" loading="lazy" />
                  <div className="curric-card__body">
                    <p className="curric-card__name">AI画像クリエイターコース</p>
                    <p className="curric-card__chapters">全31チャプター | 89レッスン</p>
                    <div className="curric-card__desc-wrap">
                      <p className="curric-card__desc">バナー、サムネイル、SNS用画像などを、画像生成AIで制作するスキルを身につけるコースです。プロンプト設計のコツや、AIで作った画像をCanva等で微調整する実務フローを学びます。</p>
                    </div>
                    <a href="https://generative-ai.bytech.jp/ai-image-creator/" className="curric-card__btn">コースの詳細を見る</a>
                  </div>
                </div>
                {/* AI動画クリエイター */}
                <div className="curric-card">
                  <img src="/bytech/assets/images/group-16171-3-1024x685.webp" alt="AI動画クリエイターコース" className="curric-card__thumb" loading="lazy" />
                  <div className="curric-card__body">
                    <p className="curric-card__name">AI動画クリエイターコース</p>
                    <p className="curric-card__chapters">全4チャプター | 19レッスン</p>
                    <div className="curric-card__desc-wrap">
                      <p className="curric-card__desc">画像・プロンプトからイメージ通りの動画制作を実現するスキルを身につけるコースです。編集スキルがなくても、画像生成スキルとプロンプトを組み合わせて&quot;見られる動画&quot;を作成するスキルを習得できます。</p>
                    </div>
                    <a href="https://generative-ai.bytech.jp/ai-movie-creator/" className="curric-card__btn">コースの詳細を見る</a>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Panel 3: 職種・部門別AI活用コース ── */}
            <div className="curric-panel">
              {/* バッジ + メタ行 */}
              <div className="curric-panel__top">
                {/* "03" バッジ */}
                <div className="curric-panel__badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="97.563" height="100.356" viewBox="0 0 97.563 100.356">
                    <path d="M49.067-48.242q0,26.406-5.078,38.086-5.015,11.3-17.075,11.3T9.775-10.22Q4.761-21.265,4.761-49T9.775-87.788Q14.79-99.214,26.851-99.214q11.172,0,16.5,10.029Q49.067-78.584,49.067-48.242Zm-13.457,0q0-22.217-1.9-30.723-1.9-8.442-6.919-8.442T19.8-79.028q-1.9,8.379-1.9,30.151t1.9,30.215q1.968,8.379,6.982,8.379,4.951,0,6.855-8.315Q35.61-26.533,35.61-48.242Zm37.9-23.486H60.938v-2.6a49.412,49.412,0,0,1,1.111-11.235,19.82,19.82,0,0,1,3.491-7.744A13.939,13.939,0,0,1,71.6-97.786a24.405,24.405,0,0,1,8.823-1.428q10.791,0,15.742,6.094t4.951,19.36q0,10.918-2.285,15.742-2.222,4.888-8.569,7.427,6.855,2.349,9.458,7.3,2.6,4.888,2.6,15.679,0,14.79-5.586,21.772T79.346,1.143q-20.186,0-20.186-23.169V-23.74a3.687,3.687,0,0,1,.063-.889H71.6q-.063,1.079-.1,1.873t-.032,1.3a13.227,13.227,0,0,0,2.19,8,7.039,7.039,0,0,0,6,2.983,8.473,8.473,0,0,0,4.221-.984,7.269,7.269,0,0,0,2.856-3.174,18.592,18.592,0,0,0,1.619-5.681,59.8,59.8,0,0,0,.508-8.442q0-8.95-2.7-12.886t-8.982-3.936a13.359,13.359,0,0,0-1.523.1l-1.9.222V-56.685H75.6q7.681,0,10.41-3.3t2.729-12.5q0-15.234-7.681-15.234-7.617,0-7.617,13.013Z" transform="translate(-4.762 99.214)" fill="#191722" />
                  </svg>
                </div>
                <div className="curric-panel__meta">
                  <div className="curric-panel__label-row">
                    <span className="curric-panel__label">職種・部門別AI活用コース</span>
                    <span className="curric-panel__label-line" />
                  </div>
                  <h2 className="curric-panel__heading curric-panel__heading--pc">職種ごとの既存業務を効率化するなら</h2>
                  <h2 className="curric-panel__heading curric-panel__heading--sp">職種ごとの既存業務を効率化するなら</h2>
                </div>
              </div>

              {/* カードスクロール行 */}
              <div className="curric-cards">
                {/* ビジネスワーカー */}
                <div className="curric-card">
                  <img src="/bytech/assets/images/group-16178-10-1024x685.webp" alt="ビジネスワーカーコース" className="curric-card__thumb" loading="lazy" />
                  <div className="curric-card__body">
                    <p className="curric-card__name">ビジネスワーカーコース</p>
                    <p className="curric-card__chapters">全19チャプター | 92レッスン</p>
                    <div className="curric-card__desc-wrap">
                      <p className="curric-card__desc">幅広い職種で共通して役立つAI活用スキルを横断的に学ぶコースです。メール作成、議事録、リサーチ、報告書、資料作成など、日々のルーチンをAIに手伝わせる具体的なパターンを紹介します。</p>
                    </div>
                    <a href="https://generative-ai.bytech.jp/business-worker/" className="curric-card__btn">コースの詳細を見る</a>
                  </div>
                </div>
                {/* 営業職 */}
                <div className="curric-card">
                  <img src="/bytech/assets/images/iPhone-14-Pro-–-135-1024x685.webp" alt="AI業務活用【営業職コース】" className="curric-card__thumb" loading="lazy" />
                  <div className="curric-card__body">
                    <p className="curric-card__name">AI業務活用【営業職コース】</p>
                    <p className="curric-card__chapters">全6チャプター | 36レッスン</p>
                    <div className="curric-card__desc-wrap">
                      <p className="curric-card__desc">Geminiをベースにした、レポート作成やスクリプト作成、商談議事録の自動生成などの今まで時間をかけたくなかった業務を効率化するスキルを身につけます。</p>
                    </div>
                    <span className="curric-card__btn--coming">Coming Soon...</span>
                  </div>
                </div>
                {/* 事務職 */}
                <div className="curric-card">
                  <img src="/bytech/assets/images/iPhone-14-Pro-–-138-1024x685.webp" alt="AI業務活用【事務職コース】" className="curric-card__thumb" loading="lazy" />
                  <div className="curric-card__body">
                    <p className="curric-card__name">AI業務活用【事務職コース】</p>
                    <p className="curric-card__chapters">全8チャプター｜45レッスン</p>
                    <div className="curric-card__desc-wrap">
                      <p className="curric-card__desc">議事録作成やExcelでの集計業務、業務マニュアルの作成など多岐にわたる事務業務の効率化スキルを身につけることができます。</p>
                    </div>
                    <span className="curric-card__btn--coming">Coming Soon...</span>
                  </div>
                </div>
                {/* 企画職 */}
                <div className="curric-card">
                  <img src="/bytech/assets/images/iPhone-14-Pro-–-137-1024x685.webp" alt="AI業務活用【企画職コース】" className="curric-card__thumb" loading="lazy" />
                  <div className="curric-card__body">
                    <p className="curric-card__name">AI業務活用【企画職コース】</p>
                    <p className="curric-card__chapters">全8チャプター｜45レッスン</p>
                    <div className="curric-card__desc-wrap">
                      <p className="curric-card__desc">新規施策アイディア出しからカスタマージャーにマップの作成、アプリモック作成まで様々な企画業務に特化したスキルを身につけることができます。</p>
                    </div>
                    <span className="curric-card__btn--coming">Coming Soon...</span>
                  </div>
                </div>
                {/* 人事職 */}
                <div className="curric-card">
                  <img src="/bytech/assets/images/iPhone-14-Pro-–-136-1024x685.webp" alt="AI業務活用【人事職コース】" className="curric-card__thumb" loading="lazy" />
                  <div className="curric-card__body">
                    <p className="curric-card__name">AI業務活用【人事職コース】</p>
                    <p className="curric-card__chapters">全8チャプター｜45レッスン</p>
                    <div className="curric-card__desc-wrap">
                      <p className="curric-card__desc">求人票作成の自動化から採用基準の策定、研修プログラムの構築など人手が必要だった採用人事周りの業務を効率化・自動化するスキルを身につけることができます。</p>
                    </div>
                    <span className="curric-card__btn--coming">Coming Soon...</span>
                  </div>
                </div>
                {/* 生成AIパスポート */}
                <div className="curric-card">
                  <img src="/bytech/assets/images/group-16177-9-1024x685.webp" alt="生成AIパスポートコース" className="curric-card__thumb" loading="lazy" />
                  <div className="curric-card__body">
                    <p className="curric-card__name">生成AIパスポートコース</p>
                    <p className="curric-card__chapters">全15チャプター｜32レッスン</p>
                    <div className="curric-card__desc-wrap">
                      <p className="curric-card__desc">生成AIパスポート試験の出題範囲を押さえながら、主要ツールの特徴やリスク、ビジネス活用のポイントを体系的に学ぶ講座です。AIリテラシーを証明したいビジネスパーソンにおすすめです。</p>
                    </div>
                    <a href="https://generative-ai.bytech.jp/generative-ai-passport/" className="curric-card__btn">コースの詳細を見る</a>
                  </div>
                </div>
              </div>
            </div>

          </div>{/* /curric-panels */}
        </div>{/* /curriculum__inner */}
      </section>

      {/* ===== SKILLS ===== */}
      {/* ===== SKILLS (9e279e9) ===== */}
      <section className="skills-section" id="skills">
        {/* 上部三角シェイプ (elementor-shape-top: triangle) */}
        <div className="skills-section__shape" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path className="shape-fill" d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z" />
          </svg>
        </div>

        <div className="skills-section__inner">
          {/* 6aea1c3: 見出し */}
          <h3 className="skills-section__ttl">AI未経験からでも<br />こんなことができるようになります</h3>
          {/* 9f35c43: SKILLS タグ */}
          <span className="skills-section__tag">SKILLS</span>

          {/* 5c5ca32 / 978f9f8: 画像カルーセル (2枚表示) */}
          <div className="skills-carousel fadein">
            {/* 前へボタン */}
            <button className="skills-carousel__btn skills-carousel__btn--prev" aria-label="前へ">
              <svg aria-hidden="true" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z" />
              </svg>
            </button>

            {/* スライドトラック */}
            <div className="skills-carousel__viewport">
              <div className="skills-carousel__track" id="skillsTrack">
                <div className="skills-carousel__slide">
                  <img src="/bytech/assets/images/CG-1-–-16.webp" alt="身につくスキル01_広告バナーデザイン" loading="lazy" />
                </div>
                <div className="skills-carousel__slide">
                  <img src="/bytech/assets/images/CG-1-–-15.webp" alt="身につくスキル02_スライドデザイン" loading="lazy" />
                </div>
                <div className="skills-carousel__slide">
                  <img src="/bytech/assets/images/CG-1-–-18.webp" alt="身につくスキル03_チャットボット制作" loading="lazy" />
                </div>
                <div className="skills-carousel__slide">
                  <img src="/bytech/assets/images/CG-1-–-17.webp" alt="身につくスキル04_AIアプリ開発" loading="lazy" />
                </div>
                <div className="skills-carousel__slide">
                  <img src="/bytech/assets/images/CG-1-–-19.webp" alt="身につくスキル05_ブログ記事制作" loading="lazy" />
                </div>
                <div className="skills-carousel__slide">
                  <img src="/bytech/assets/images/CG-1-–-14.webp" alt="身につくスキル06_GPTs制作" loading="lazy" />
                </div>
              </div>
            </div>

            {/* 次へボタン */}
            <button className="skills-carousel__btn skills-carousel__btn--next" aria-label="次へ">
              <svg aria-hidden="true" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z" />
              </svg>
            </button>

            {/* ページネーションドット (6枚) */}
            <div className="skills-carousel__dots" id="skillsDots">
              <button className="skills-carousel__dot is-active" aria-label="スライド1"></button>
              <button className="skills-carousel__dot" aria-label="スライド2"></button>
              <button className="skills-carousel__dot" aria-label="スライド3"></button>
              <button className="skills-carousel__dot" aria-label="スライド4"></button>
              <button className="skills-carousel__dot" aria-label="スライド5"></button>
              <button className="skills-carousel__dot" aria-label="スライド6"></button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PLAN ===== */}
      <section className="plan" id="plan">
        <div className="plan__inner">
          <div className="plan-header fadein">
            <h2 className="plan-header__ttl">バイテックの料金プラン</h2>
            <span className="plan-header__tag">PLAN</span>
          </div>
          <div className="plan__grid fadein">
            {/* LITE */}
            <div className="plan-card">
              <img className="plan-card__logo" src="/bytech/assets/images/LITEPLAN.svg" alt="" />
              <h3 className="plan-card__en-name">LITE PLAN</h3>
              <span className="plan-card__ja-name">ライトプラン</span>
              <div className="plan-card__tagline">
                <span className="plan-card__tagline-em">自分のペース</span>で学習したい方向け
              </div>
              <div className="plan-card__price-area">
                <img className="plan-card__price-img" src="/bytech/assets/images/17.8.svg" alt="17.8万円（税込）" />
                <img className="plan-card__price-img-month" src="/bytech/assets/images/monthly-lite.svg" alt="月額費用" />
                <img className="plan-card__price-img-sub" src="/bytech/assets/images/lite_plan2.svg" alt="料金詳細" />
              </div>
              <div className="plan-card__services-divider"><span>このプランで受けれるサービス</span></div>
              <img className="plan-card__services-img" src="/bytech/assets/images/LITE.svg" alt="LITEプランサービス内容" />
              <a href="https://form.run/@ds-form" target="_blank" className="plan-card__cta plan-card__cta--lite">今すぐ受講を申し込む</a>
            </div>
            {/* PRO */}
            <div className="plan-card plan-card--pro">
              <img className="plan-card__logo" src="/bytech/assets/images/PROPLAN.svg" alt="" />
              <h3 className="plan-card__en-name">PRO PLAN</h3>
              <span className="plan-card__ja-name">プロプラン</span>
              <div className="plan-card__tagline">
                <span className="plan-card__tagline-em">専任のAIメンター</span>が伴走サポート
              </div>
              <div className="plan-card__price-area">
                <img className="plan-card__price-img" src="/bytech/assets/images/29.8.svg" alt="29.8万円（税込）" />
                <img className="plan-card__price-img-month" src="/bytech/assets/images/pro-monthly.svg" alt="月額費用" />
                <img className="plan-card__price-img-sub" src="/bytech/assets/images/pro-pricing-detail.svg" alt="料金詳細" />
              </div>
              <div className="plan-card__services-divider"><span>このプランで受けれるサービス</span></div>
              <img className="plan-card__services-img" src="/bytech/assets/images/PRO.svg" alt="PROプランサービス内容" />
              <a href="https://generative-ai.bytech.jp/counseling/" target="_blank" className="plan-card__cta plan-card__cta--pro">まずは無料相談を予約する</a>
            </div>
          </div>
                    {/* SP: tab switching */}
          <div className="plan__sp-tabs fadein">
            <input type="radio" name="plan-tab" id="plan-tab-lite" defaultChecked className="plan__tab-radio" />
            <input type="radio" name="plan-tab" id="plan-tab-pro" className="plan__tab-radio" />
            <div className="plan__tab-bar">
              <label htmlFor="plan-tab-lite" className="plan__tab-label plan__tab-label--lite">LITEプラン</label>
              <label htmlFor="plan-tab-pro" className="plan__tab-label plan__tab-label--pro">PROプラン</label>
            </div>
            <div className="plan__tab-panels">
              {/* LITE tab panel */}
              <div className="plan__tab-panel plan__tab-panel--lite">
                <div className="plan-card">
                  <img className="plan-card__logo" src="/bytech/assets/images/LITEPLAN.svg" alt="" />
                  <h3 className="plan-card__en-name">LITE PLAN</h3>
                  <span className="plan-card__ja-name">ライトプラン</span>
                  <div className="plan-card__tagline">
                    <span className="plan-card__tagline-em">自分のペース</span>で学習したい方向け
                  </div>
                  <div className="plan-card__price-area">
                    <img className="plan-card__price-img" src="/bytech/assets/images/17.8.svg" alt="17.8万円（税込）" />
                    <img className="plan-card__price-img" src="/bytech/assets/images/monthly-lite.svg" alt="月額費用" />
                    <img className="plan-card__price-img" src="/bytech/assets/images/lite_plan2.svg" alt="料金詳細" />
                  </div>
                  <div className="plan-card__services-divider"><span>このプランで受けれるサービス</span></div>
                  <img className="plan-card__services-img" src="/bytech/assets/images/LITE.svg" alt="LITEプランサービス内容" />
                  <a href="https://form.run/@ds-form" target="_blank" className="plan-card__cta plan-card__cta--lite">今すぐ受講を申し込む</a>
                </div>
              </div>
              {/* PRO tab panel */}
              <div className="plan__tab-panel plan__tab-panel--pro">
                <div className="plan-card plan-card--pro">
                  <img className="plan-card__logo" src="/bytech/assets/images/PROPLAN.svg" alt="" />
                  <h3 className="plan-card__en-name">PRO PLAN</h3>
                  <span className="plan-card__ja-name">プロプラン</span>
                  <div className="plan-card__tagline">
                    <span className="plan-card__tagline-em plan-card__tagline-em--pro">専任のAIメンター</span>が伴走サポート
                  </div>
                  <div className="plan-card__price-area">
                    <img className="plan-card__price-img" src="/bytech/assets/images/29.8.svg" alt="29.8万円（税込）" />
                    <img className="plan-card__price-img" src="/bytech/assets/images/pro-monthly.svg" alt="月額費用" />
                    <img className="plan-card__price-img" src="/bytech/assets/images/pro-pricing-detail.svg" alt="料金詳細" />
                  </div>
                  <div className="plan-card__services-divider"><span>このプランで受けれるサービス</span></div>
                  <img className="plan-card__services-img" src="/bytech/assets/images/PRO.svg" alt="PROプランサービス内容" />
                  <a href="https://generative-ai.bytech.jp/counseling/" target="_blank" className="plan-card__cta plan-card__cta--pro">まずは無料相談を予約する</a>
                </div>
              </div>
            </div>
          </div>

                    <div className="plan__payment fadein">
            <h3>お支払い方法は、2種類ご用意しています</h3>
            <div className="plan__payment__methods">
              <div className="plan__payment__method">
                <div className="plan__payment__method__name">銀行振込</div>
                <div className="plan__payment__method__note">※ご一括の場合のみ銀行振込を受け付けております。</div>
              </div>
              <div className="plan__payment__method">
                <div className="plan__payment__method__name">クレジットカード</div>
                <div className="plan__payment__method__note">※分割回数、金利はカード会社によって異なります。</div>
              </div>
            </div>
            <div className="plan__payment__cards">
              <img src="/bytech/assets/images/card-brands.svg" alt="VISA / Mastercard / American Express / Diners Club" />
            </div>
          </div>
          <div className="plan__detail-link-wrap">
            <a href="https://generative-ai.bytech.jp/plan" className="plan__detail-link">
              料金プランの詳細を見る
              <svg className="plan__detail-link__icon" aria-hidden="true" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
              </svg>
            </a>
          </div>
          {/* SP only: plan detail link button */}
          <div className="plan__sp-detail-btn-wrap">
            <a href="https://generative-ai.bytech.jp/plan" className="plan__sp-detail-btn">
              料金プランの詳細を見る
              <span className="plan__sp-detail-btn__arrow">›</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===== CTA Banner (d0daad5) ===== */}
      <section className="cta-banner">
        <div className="cta-banner__inner">
          <h2 className="cta-banner__ttl">料金に見合ったサービスが受けれるか不安...</h2>
          <div className="cta-banner__img-wrap">
            <a href="https://generative-ai.bytech.jp/counseling/">
              <img src="/bytech/assets/images/cta-setsumeikai-3.webp" alt="無料説明会に申し込む" loading="lazy" />
            </a>
          </div>
          <p className="cta-banner__note">※ 無理な勧誘は行っていません。</p>
        </div>
      </section>

      {/* ===== INTERVIEW ===== */}
      <section className="interview" id="interview">
        <div className="interview__inner">
          <div className="interview-header fadein">
            <h2 className="interview-header__ttl">受講生インタビュー</h2>
            <span className="interview-header__tag" style={{color: '#d4a817', marginTop: '8px'}}>INTERVIEW</span>
          </div>
          <div className="interview__grid">
            {/* Card 1: 山本大輔さん */}
            <div className="interview-card fadein">
              <a href="https://bytech.jp/blog/sutudent-voice-1/" target="_blank" className="interview-card__thumb">
                <img src="/bytech/assets/images/UV-1-1-1024x576.webp" alt="山本大輔さん" loading="lazy" />
              </a>
              <div className="interview-card__body">
                <h3 className="interview-card__ttl">「社内の小さなPoCから始めて、独立へ」――38歳・元メーカー勤務の山本大輔さんが&quot;AIコンサル&quot;で月収7桁に到達するまで　　　　　　　　　</h3>
                <div className="interview-card__divider" />
                <div className="interview-card__profile">
                  <div className="interview-card__avatar">
                    <img src="/bytech/assets/images/cross-79.webp" alt="山本大輔さん" loading="lazy" />
                  </div>
                  <p className="interview-card__meta">メーカー管理職<br />山本 大輔さん</p>
                </div>
              </div>
            </div>
            {/* Card 2: 佐藤健太さん */}
            <div className="interview-card fadein delay-1">
              <a href="https://bytech.jp/blog/sutudent-voice-2/" className="interview-card__thumb">
                <img src="/bytech/assets/images/UV-2-1-1024x576.webp" alt="佐藤健太さん" loading="lazy" />
              </a>
              <div className="interview-card__body">
                <h3 className="interview-card__ttl">「&quot;削る・置き換える・任せる&quot;で定時帰りへ」――32歳・営業職の佐藤健太さんがAI活用で残業激減＆キャリア転換を実現するまで</h3>
                <div className="interview-card__divider" />
                <div className="interview-card__profile">
                  <div className="interview-card__avatar">
                    <img src="/bytech/assets/images/cross-81.webp" alt="佐藤健太さん" loading="lazy" />
                  </div>
                  <p className="interview-card__meta">メーカー営業<br />佐藤 健太さん</p>
                </div>
              </div>
            </div>
            {/* Card 3: 田中美咲さん */}
            <div className="interview-card fadein delay-2">
              <a href="https://bytech.jp/blog/sutudent-voice-3/" className="interview-card__thumb">
                <img src="/bytech/assets/images/UV-3-1-1024x576.webp" alt="田中美咲さん" loading="lazy" />
              </a>
              <div className="interview-card__body">
                <h3 className="interview-card__ttl">「&quot;型×構成作り&quot;でスピード納品」――28歳・会社員の田中美咲さんがAIライティング副業で月収30万円達成＆Kindleでストック収入を築くまで</h3>
                <div className="interview-card__divider" />
                <div className="interview-card__profile">
                  <div className="interview-card__avatar">
                    <img src="/bytech/assets/images/cross-80.webp" alt="田中美咲さん" loading="lazy" />
                  </div>
                  <p className="interview-card__meta">不動産会社事務<br />田中 美咲さん</p>
                </div>
              </div>
            </div>
          </div>
          <div className="interview__more fadein">
            <a href="https://bytech.jp/blog/category/interview/" target="_blank" className="plan-card__cta plan-card__cta--blue" style={{display: 'inline-flex', maxWidth: '360px'}}>全ての受講生インタビューを見る</a>
          </div>
        </div>
      </section>

      {/* ===== FLOW ===== */}
      <section className="flow" id="flow">
        <div className="flow__inner">
          {/* Header */}
          <div className="flow__header fadein">
            {/* desktop/tablet heading */}
            <h2 className="flow__ttl">学習スタートまでの3ステップ</h2>
            {/* mobile heading */}
            <h2 className="flow__ttl flow__ttl--sp">学習スタートまでの<br />3ステップ</h2>
            <span className="flow__tag">FLOW</span>
          </div>
          {/* Steps row */}
          <div className="flow__steps fadein">
            <div className="flow__step">
              <img src="/bytech/assets/images/group-20924-1024x528.webp" alt="STEP 01 無料カウンセリング" loading="lazy" />
            </div>
            <div className="flow__arrow">
              <img src="/bytech/assets/images/arrow.svg" alt="" aria-hidden="true" />
            </div>
            <div className="flow__step">
              <img src="/bytech/assets/images/group-20931-1024x528.webp" alt="STEP 02 受講申し込み" loading="lazy" />
            </div>
            <div className="flow__arrow">
              <img src="/bytech/assets/images/arrow.svg" alt="" aria-hidden="true" />
            </div>
            <div className="flow__step">
              <img src="/bytech/assets/images/group-20930-1024x528.webp" alt="STEP 03 学習スタート" loading="lazy" />
            </div>
          </div>
          {/* Bottom decoration (desktop only) */}
          <div className="flow__decoration fadein">
            <img src="/bytech/assets/images/group-20935.svg" alt="" aria-hidden="true" />
          </div>
          {/* CTA */}
          <div className="flow__cta fadein">
            <a href="https://generative-ai.bytech.jp/counseling/">
              <img src="/bytech/assets/images/cta-setsumeikai-3.webp" alt="無料説明会に申し込む" loading="lazy" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="faq" id="faq">
        <div className="faq__inner">
          {/* Section header */}
          <div className="faq__header fadein">
            <h2 className="faq__ttl">よくあるご質問</h2>
            <span className="faq__tag">FAQ</span>
          </div>
          {/* Q&A groups — single column */}
          <div className="faq__groups">
            {/* 無料カウンセリングについて */}
            <div className="faq__group fadein">
              <div className="faq__group__ttl"><span>無料カウンセリング</span>について</div>
              <div className="faq__list">
                <div className="faq__item">
                  <button className="faq__item__q">
                    <span className="faq__item__q-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.469 78.174"><path d="M85.742,1.367H71.436L65.527-4.687a38.028,38.028,0,0,1-21,6.055A39.281,39.281,0,0,1,17.92-8.789Q5.273-19.971,5.273-37.354q0-17.041,11.963-28.418A38.527,38.527,0,0,1,44.678-76.807,38.673,38.673,0,0,1,70.41-67.139Q84.082-55.518,84.082-36.816q0,14.648-10.791,26.025Zm-31.3-31.2L65.381-18.945a25.808,25.808,0,0,0,7.227-18.6A27.909,27.909,0,0,0,64.551-57.91a26.929,26.929,0,0,0-20.02-8.2q-12.109,0-19.922,8.2-7.861,8.154-7.861,20.654,0,12.207,8.105,19.971Q33.3-9.277,44.141-9.277a26.6,26.6,0,0,0,13.33-3.369L39.746-29.834Z" transform="translate(-5.273 76.807)" fill="#533afc"/></svg></span>
                    <span className="faq__item__q-text">カウンセリングはどんな内容ですか？</span>
                    <span className="faq__item__q-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></span>
                  </button>
                  <div className="faq__item__a">当日は、生成AIへの興味や目指すキャリアについてヒアリングした後、受講事例や講座の詳細を質疑応答を交えてご紹介します。初心者でも大歓迎ですので、お気軽にご参加ください！</div>
                </div>
                <div className="faq__item">
                  <button className="faq__item__q">
                    <span className="faq__item__q-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.469 78.174"><path d="M85.742,1.367H71.436L65.527-4.687a38.028,38.028,0,0,1-21,6.055A39.281,39.281,0,0,1,17.92-8.789Q5.273-19.971,5.273-37.354q0-17.041,11.963-28.418A38.527,38.527,0,0,1,44.678-76.807,38.673,38.673,0,0,1,70.41-67.139Q84.082-55.518,84.082-36.816q0,14.648-10.791,26.025Zm-31.3-31.2L65.381-18.945a25.808,25.808,0,0,0,7.227-18.6A27.909,27.909,0,0,0,64.551-57.91a26.929,26.929,0,0,0-20.02-8.2q-12.109,0-19.922,8.2-7.861,8.154-7.861,20.654,0,12.207,8.105,19.971Q33.3-9.277,44.141-9.277a26.6,26.6,0,0,0,13.33-3.369L39.746-29.834Z" transform="translate(-5.273 76.807)" fill="#533afc"/></svg></span>
                    <span className="faq__item__q-text">参加方法はどうすればいいですか？</span>
                    <span className="faq__item__q-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></span>
                  </button>
                  <div className="faq__item__a">当日はZoomを利用したオンライン形式でのご参加となります。所要時間は40〜60分を想定しております。</div>
                </div>
                <div className="faq__item">
                  <button className="faq__item__q">
                    <span className="faq__item__q-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.469 78.174"><path d="M85.742,1.367H71.436L65.527-4.687a38.028,38.028,0,0,1-21,6.055A39.281,39.281,0,0,1,17.92-8.789Q5.273-19.971,5.273-37.354q0-17.041,11.963-28.418A38.527,38.527,0,0,1,44.678-76.807,38.673,38.673,0,0,1,70.41-67.139Q84.082-55.518,84.082-36.816q0,14.648-10.791,26.025Zm-31.3-31.2L65.381-18.945a25.808,25.808,0,0,0,7.227-18.6A27.909,27.909,0,0,0,64.551-57.91a26.929,26.929,0,0,0-20.02-8.2q-12.109,0-19.922,8.2-7.861,8.154-7.861,20.654,0,12.207,8.105,19.971Q33.3-9.277,44.141-9.277a26.6,26.6,0,0,0,13.33-3.369L39.746-29.834Z" transform="translate(-5.273 76.807)" fill="#533afc"/></svg></span>
                    <span className="faq__item__q-text">どのコースが自分にあっているかわかりません</span>
                    <span className="faq__item__q-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></span>
                  </button>
                  <div className="faq__item__a">「無料相談」でご相談いただくことをお勧めします。ご自身でご受講を通してできるようになりたいこと・学びたいことを無料相談にてお尋ねください。最適なコースをご提案させていただきます。無料相談は<a href="https://generative-ai.bytech.jp/counseling" target="_blank" style={{color: '#533afc', textDecoration: 'underline'}}>こちら</a>よりお申し込みください。</div>
                </div>
              </div>
            </div>
            {/* カリキュラムについて */}
            <div className="faq__group fadein">
              <div className="faq__group__ttl"><span>カリキュラム</span>について</div>
              <div className="faq__list">
                <div className="faq__item">
                  <button className="faq__item__q">
                    <span className="faq__item__q-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.469 78.174"><path d="M85.742,1.367H71.436L65.527-4.687a38.028,38.028,0,0,1-21,6.055A39.281,39.281,0,0,1,17.92-8.789Q5.273-19.971,5.273-37.354q0-17.041,11.963-28.418A38.527,38.527,0,0,1,44.678-76.807,38.673,38.673,0,0,1,70.41-67.139Q84.082-55.518,84.082-36.816q0,14.648-10.791,26.025Zm-31.3-31.2L65.381-18.945a25.808,25.808,0,0,0,7.227-18.6A27.909,27.909,0,0,0,64.551-57.91a26.929,26.929,0,0,0-20.02-8.2q-12.109,0-19.922,8.2-7.861,8.154-7.861,20.654,0,12.207,8.105,19.971Q33.3-9.277,44.141-9.277a26.6,26.6,0,0,0,13.33-3.369L39.746-29.834Z" transform="translate(-5.273 76.807)" fill="#533afc"/></svg></span>
                    <span className="faq__item__q-text">講座内で習得できるスキルは？</span>
                    <span className="faq__item__q-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></span>
                  </button>
                  <div className="faq__item__a">このコースでは、生成AIの基礎から始め、ChatGPTなどのツールを使いこなすためのプロンプトエンジニアリングの技術を短期集中で学びます。未経験者でも、数週間でAIを効果的に活用する方法をマスターすることができます。</div>
                </div>
                <div className="faq__item">
                  <button className="faq__item__q">
                    <span className="faq__item__q-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.469 78.174"><path d="M85.742,1.367H71.436L65.527-4.687a38.028,38.028,0,0,1-21,6.055A39.281,39.281,0,0,1,17.92-8.789Q5.273-19.971,5.273-37.354q0-17.041,11.963-28.418A38.527,38.527,0,0,1,44.678-76.807,38.673,38.673,0,0,1,70.41-67.139Q84.082-55.518,84.082-36.816q0,14.648-10.791,26.025Zm-31.3-31.2L65.381-18.945a25.808,25.808,0,0,0,7.227-18.6A27.909,27.909,0,0,0,64.551-57.91a26.929,26.929,0,0,0-20.02-8.2q-12.109,0-19.922,8.2-7.861,8.154-7.861,20.654,0,12.207,8.105,19.971Q33.3-9.277,44.141-9.277a26.6,26.6,0,0,0,13.33-3.369L39.746-29.834Z" transform="translate(-5.273 76.807)" fill="#533afc"/></svg></span>
                    <span className="faq__item__q-text">講座カリキュラムに閲覧期限はありますか？</span>
                    <span className="faq__item__q-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></span>
                  </button>
                  <div className="faq__item__a">いいえ、一度購入していただいたカリキュラムに関しては、無期限で閲覧可能です。</div>
                </div>
                <div className="faq__item">
                  <button className="faq__item__q">
                    <span className="faq__item__q-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.469 78.174"><path d="M85.742,1.367H71.436L65.527-4.687a38.028,38.028,0,0,1-21,6.055A39.281,39.281,0,0,1,17.92-8.789Q5.273-19.971,5.273-37.354q0-17.041,11.963-28.418A38.527,38.527,0,0,1,44.678-76.807,38.673,38.673,0,0,1,70.41-67.139Q84.082-55.518,84.082-36.816q0,14.648-10.791,26.025Zm-31.3-31.2L65.381-18.945a25.808,25.808,0,0,0,7.227-18.6A27.909,27.909,0,0,0,64.551-57.91a26.929,26.929,0,0,0-20.02-8.2q-12.109,0-19.922,8.2-7.861,8.154-7.861,20.654,0,12.207,8.105,19.971Q33.3-9.277,44.141-9.277a26.6,26.6,0,0,0,13.33-3.369L39.746-29.834Z" transform="translate(-5.273 76.807)" fill="#533afc"/></svg></span>
                    <span className="faq__item__q-text">古い技術や情報の教材ではありませんか？</span>
                    <span className="faq__item__q-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></span>
                  </button>
                  <div className="faq__item__a">いいえ、バイテック生成AIでは徹底した教材管理と独自システムにより、最新のバージョンやしトレンドの技術のみを教材に掲載しておりますので、ご安心して受講下さい。</div>
                </div>
                <div className="faq__item">
                  <button className="faq__item__q">
                    <span className="faq__item__q-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.469 78.174"><path d="M85.742,1.367H71.436L65.527-4.687a38.028,38.028,0,0,1-21,6.055A39.281,39.281,0,0,1,17.92-8.789Q5.273-19.971,5.273-37.354q0-17.041,11.963-28.418A38.527,38.527,0,0,1,44.678-76.807,38.673,38.673,0,0,1,70.41-67.139Q84.082-55.518,84.082-36.816q0,14.648-10.791,26.025Zm-31.3-31.2L65.381-18.945a25.808,25.808,0,0,0,7.227-18.6A27.909,27.909,0,0,0,64.551-57.91a26.929,26.929,0,0,0-20.02-8.2q-12.109,0-19.922,8.2-7.861,8.154-7.861,20.654,0,12.207,8.105,19.971Q33.3-9.277,44.141-9.277a26.6,26.6,0,0,0,13.33-3.369L39.746-29.834Z" transform="translate(-5.273 76.807)" fill="#533afc"/></svg></span>
                    <span className="faq__item__q-text">未経験ですがカリキュラムについていけますか？</span>
                    <span className="faq__item__q-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></span>
                  </button>
                  <div className="faq__item__a">多くの方が未経験で受講されています。「メンター」と呼ばれる現役エンジニア講師が、一人ひとりの学びに合わせたマンツーマン体制でサポートしていきますのでご安心ください。</div>
                </div>
              </div>
            </div>
            {/* サポートについて */}
            <div className="faq__group fadein">
              <div className="faq__group__ttl"><span>サポート</span>について</div>
              <div className="faq__list">
                <div className="faq__item">
                  <button className="faq__item__q">
                    <span className="faq__item__q-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.469 78.174"><path d="M85.742,1.367H71.436L65.527-4.687a38.028,38.028,0,0,1-21,6.055A39.281,39.281,0,0,1,17.92-8.789Q5.273-19.971,5.273-37.354q0-17.041,11.963-28.418A38.527,38.527,0,0,1,44.678-76.807,38.673,38.673,0,0,1,70.41-67.139Q84.082-55.518,84.082-36.816q0,14.648-10.791,26.025Zm-31.3-31.2L65.381-18.945a25.808,25.808,0,0,0,7.227-18.6A27.909,27.909,0,0,0,64.551-57.91a26.929,26.929,0,0,0-20.02-8.2q-12.109,0-19.922,8.2-7.861,8.154-7.861,20.654,0,12.207,8.105,19.971Q33.3-9.277,44.141-9.277a26.6,26.6,0,0,0,13.33-3.369L39.746-29.834Z" transform="translate(-5.273 76.807)" fill="#533afc"/></svg></span>
                    <span className="faq__item__q-text">チャットサポートはどれくらいの頻度で質問できますか？</span>
                    <span className="faq__item__q-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></span>
                  </button>
                  <div className="faq__item__a">チャット相談は24H受け付けており、13時〜22時はテクニカルサポートにて即時に返答いたします。<br />サポート環境は全て個別となっておりますので、未経験の方でも安心して質問できる環境となっております。</div>
                </div>
                <div className="faq__item">
                  <button className="faq__item__q">
                    <span className="faq__item__q-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.469 78.174"><path d="M85.742,1.367H71.436L65.527-4.687a38.028,38.028,0,0,1-21,6.055A39.281,39.281,0,0,1,17.92-8.789Q5.273-19.971,5.273-37.354q0-17.041,11.963-28.418A38.527,38.527,0,0,1,44.678-76.807,38.673,38.673,0,0,1,70.41-67.139Q84.082-55.518,84.082-36.816q0,14.648-10.791,26.025Zm-31.3-31.2L65.381-18.945a25.808,25.808,0,0,0,7.227-18.6A27.909,27.909,0,0,0,64.551-57.91a26.929,26.929,0,0,0-20.02-8.2q-12.109,0-19.922,8.2-7.861,8.154-7.861,20.654,0,12.207,8.105,19.971Q33.3-9.277,44.141-9.277a26.6,26.6,0,0,0,13.33-3.369L39.746-29.834Z" transform="translate(-5.273 76.807)" fill="#533afc"/></svg></span>
                    <span className="faq__item__q-text">面談に回数制限はありますか？</span>
                    <span className="faq__item__q-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></span>
                  </button>
                  <div className="faq__item__a">オンラインの面談は原則月2回の実施になります。</div>
                </div>
                <div className="faq__item">
                  <button className="faq__item__q">
                    <span className="faq__item__q-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.469 78.174"><path d="M85.742,1.367H71.436L65.527-4.687a38.028,38.028,0,0,1-21,6.055A39.281,39.281,0,0,1,17.92-8.789Q5.273-19.971,5.273-37.354q0-17.041,11.963-28.418A38.527,38.527,0,0,1,44.678-76.807,38.673,38.673,0,0,1,70.41-67.139Q84.082-55.518,84.082-36.816q0,14.648-10.791,26.025Zm-31.3-31.2L65.381-18.945a25.808,25.808,0,0,0,7.227-18.6A27.909,27.909,0,0,0,64.551-57.91a26.929,26.929,0,0,0-20.02-8.2q-12.109,0-19.922,8.2-7.861,8.154-7.861,20.654,0,12.207,8.105,19.971Q33.3-9.277,44.141-9.277a26.6,26.6,0,0,0,13.33-3.369L39.746-29.834Z" transform="translate(-5.273 76.807)" fill="#533afc"/></svg></span>
                    <span className="faq__item__q-text">面談では何をするんですか？</span>
                    <span className="faq__item__q-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></span>
                  </button>
                  <div className="faq__item__a">オンライン面談では学習の進捗確認や進捗に合わせたロードマップの修正や次週のやるべきことのプランニングを行います。</div>
                </div>
              </div>
            </div>
            {/* 受講準備について */}
            <div className="faq__group fadein">
              <div className="faq__group__ttl"><span>受講準備</span>について</div>
              <div className="faq__list">
                <div className="faq__item">
                  <button className="faq__item__q">
                    <span className="faq__item__q-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.469 78.174"><path d="M85.742,1.367H71.436L65.527-4.687a38.028,38.028,0,0,1-21,6.055A39.281,39.281,0,0,1,17.92-8.789Q5.273-19.971,5.273-37.354q0-17.041,11.963-28.418A38.527,38.527,0,0,1,44.678-76.807,38.673,38.673,0,0,1,70.41-67.139Q84.082-55.518,84.082-36.816q0,14.648-10.791,26.025Zm-31.3-31.2L65.381-18.945a25.808,25.808,0,0,0,7.227-18.6A27.909,27.909,0,0,0,64.551-57.91a26.929,26.929,0,0,0-20.02-8.2q-12.109,0-19.922,8.2-7.861,8.154-7.861,20.654,0,12.207,8.105,19.971Q33.3-9.277,44.141-9.277a26.6,26.6,0,0,0,13.33-3.369L39.746-29.834Z" transform="translate(-5.273 76.807)" fill="#533afc"/></svg></span>
                    <span className="faq__item__q-text">受講する上で、準備するべきものはありますか？</span>
                    <span className="faq__item__q-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></span>
                  </button>
                  <div className="faq__item__a">こちらの<a href="https://generative-ai.bytech.jp/system-requirements" target="_blank" style={{color: '#533afc', textDecoration: 'underline'}}>システム要件</a>をご確認の上ご準備していただけたらと思います。</div>
                </div>
                <div className="faq__item">
                  <button className="faq__item__q">
                    <span className="faq__item__q-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.469 78.174"><path d="M85.742,1.367H71.436L65.527-4.687a38.028,38.028,0,0,1-21,6.055A39.281,39.281,0,0,1,17.92-8.789Q5.273-19.971,5.273-37.354q0-17.041,11.963-28.418A38.527,38.527,0,0,1,44.678-76.807,38.673,38.673,0,0,1,70.41-67.139Q84.082-55.518,84.082-36.816q0,14.648-10.791,26.025Zm-31.3-31.2L65.381-18.945a25.808,25.808,0,0,0,7.227-18.6A27.909,27.909,0,0,0,64.551-57.91a26.929,26.929,0,0,0-20.02-8.2q-12.109,0-19.922,8.2-7.861,8.154-7.861,20.654,0,12.207,8.105,19.971Q33.3-9.277,44.141-9.277a26.6,26.6,0,0,0,13.33-3.369L39.746-29.834Z" transform="translate(-5.273 76.807)" fill="#533afc"/></svg></span>
                    <span className="faq__item__q-text">受講生の方はどのような方が多いですか？</span>
                    <span className="faq__item__q-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></span>
                  </button>
                  <div className="faq__item__a">はい、この生成AIコースでは会社員の方に多くご受講いただいております。その中でも25代〜40代までの方が一番多いボリュームゾーンとなっております。</div>
                </div>
              </div>
            </div>
            {/* 支払い方法について */}
            <div className="faq__group fadein">
              <div className="faq__group__ttl"><span>支払い方法</span>について</div>
              <div className="faq__list">
                <div className="faq__item">
                  <button className="faq__item__q">
                    <span className="faq__item__q-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.469 78.174"><path d="M85.742,1.367H71.436L65.527-4.687a38.028,38.028,0,0,1-21,6.055A39.281,39.281,0,0,1,17.92-8.789Q5.273-19.971,5.273-37.354q0-17.041,11.963-28.418A38.527,38.527,0,0,1,44.678-76.807,38.673,38.673,0,0,1,70.41-67.139Q84.082-55.518,84.082-36.816q0,14.648-10.791,26.025Zm-31.3-31.2L65.381-18.945a25.808,25.808,0,0,0,7.227-18.6A27.909,27.909,0,0,0,64.551-57.91a26.929,26.929,0,0,0-20.02-8.2q-12.109,0-19.922,8.2-7.861,8.154-7.861,20.654,0,12.207,8.105,19.971Q33.3-9.277,44.141-9.277a26.6,26.6,0,0,0,13.33-3.369L39.746-29.834Z" transform="translate(-5.273 76.807)" fill="#533afc"/></svg></span>
                    <span className="faq__item__q-text">支払い方法は何がありますか？</span>
                    <span className="faq__item__q-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></span>
                  </button>
                  <div className="faq__item__a">支払い方法には現金振込・クレジット・デビットカード決済がございます。【MasterCard / Visa / American Express】</div>
                </div>
                <div className="faq__item">
                  <button className="faq__item__q">
                    <span className="faq__item__q-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.469 78.174"><path d="M85.742,1.367H71.436L65.527-4.687a38.028,38.028,0,0,1-21,6.055A39.281,39.281,0,0,1,17.92-8.789Q5.273-19.971,5.273-37.354q0-17.041,11.963-28.418A38.527,38.527,0,0,1,44.678-76.807,38.673,38.673,0,0,1,70.41-67.139Q84.082-55.518,84.082-36.816q0,14.648-10.791,26.025Zm-31.3-31.2L65.381-18.945a25.808,25.808,0,0,0,7.227-18.6A27.909,27.909,0,0,0,64.551-57.91a26.929,26.929,0,0,0-20.02-8.2q-12.109,0-19.922,8.2-7.861,8.154-7.861,20.654,0,12.207,8.105,19.971Q33.3-9.277,44.141-9.277a26.6,26.6,0,0,0,13.33-3.369L39.746-29.834Z" transform="translate(-5.273 76.807)" fill="#533afc"/></svg></span>
                    <span className="faq__item__q-text">分割の支払いは可能ですか？</span>
                    <span className="faq__item__q-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></span>
                  </button>
                  <div className="faq__item__a">はい、可能です。分割回数など詳しい詳細はカード会社にご確認下さい。デビットカードでの分割はできませんので、ご了承下さい。</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="footer__main">
          <div className="footer__inner">
            {/* Top: tagline + nav */}
            <div className="footer__body">
              <h2 className="footer__tagline">最短4ヶ月で、<br />生成AI活用のプロに。</h2>
              <nav className="footer__nav">
                {/* コース一覧 */}
                <div className="footer__nav-col footer__nav-col--courses">
                  <div className="footer__nav-section-ttl">コース一覧</div>
                  <div className="footer__nav-divider" />
                  <div className="footer__nav-sub-cols">
                    <div className="footer__nav-sub-col">
                      <div className="footer__nav-sub-ttl">- 主要AI別</div>
                      <ul className="footer__nav-list">
                        <li><a href="https://generative-ai.bytech.jp/chatgpt-master/">ChatGPTマスターコース</a></li>
                        <li><a href="https://generative-ai.bytech.jp/gemini-master/">Geminiマスターコース</a></li>
                        <li><a href="https://generative-ai.bytech.jp/copilot-master/">Copilotマスターコース</a></li>
                        <li><a href="https://generative-ai.bytech.jp/dify-master/">DIfyマスターコース</a></li>
                        <li><a href="https://generative-ai.bytech.jp/notebooklm-master/">NotebookLMマスターコース</a></li>
                        <li><a href="https://generative-ai.bytech.jp/claude-master/">Claudeマスターコース</a></li>
                      </ul>
                    </div>
                    <div className="footer__nav-sub-col">
                      <div className="footer__nav-sub-ttl">- 目的別</div>
                      <ul className="footer__nav-list">
                        <li><a href="https://generative-ai.bytech.jp/ai-writer/">AIウェブライターコース</a></li>
                        <li><a href="https://generative-ai.bytech.jp/ai-movie-creator/">AI動画クリエイターコース</a></li>
                        <li><a href="https://generative-ai.bytech.jp/ai-image-creator/">AI画像クリエイターコース</a></li>
                        <li><a href="https://generative-ai.bytech.jp/business-worker/">ビジネスワーカーコース</a></li>
                        <li><a href="https://generative-ai.bytech.jp/generative-ai-passport/">生成AIパスポートコース</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* サポート */}
                <div className="footer__nav-col footer__nav-col--support">
                  <div className="footer__nav-section-ttl">サポート</div>
                  <div className="footer__nav-divider" />
                  <ul className="footer__nav-list">
                    <li><a href="https://generative-ai.bytech.jp/membership-terms/">会員規約</a></li>
                    <li><a href="https://generative-ai.bytech.jp/refund-policy/">返金ポリシー</a></li>
                    <li><a href="https://generative-ai.bytech.jp/job-membership-terms/">案件獲得保証プラン利用規約</a></li>
                    <li><a href="https://generative-ai.bytech.jp/specified_commercial/">特定商取引法に関する表示</a></li>
                    <li><a href="https://generative-ai.bytech.jp/system-requirements/">システム要件</a></li>
                  </ul>
                </div>
                {/* 会社情報 + 関連サービス */}
                <div className="footer__nav-col footer__nav-col--company">
                  <div className="footer__nav-section-ttl">会社情報</div>
                  <div className="footer__nav-divider" />
                  <ul className="footer__nav-list">
                    <li><a href="https://ai-bou.co.jp">会社概要</a></li>
                    <li><a href="https://generative-ai.bytech.jp/privacy-policy/">プライバシーポリシー</a></li>
                  </ul>
                  <div className="footer__nav-section-ttl" style={{marginTop: '20px'}}>関連サービス</div>
                  <div className="footer__nav-divider" />
                  <ul className="footer__nav-list">
                    <li><a href="https://bytech.jp/biz">法人向けAI研修 【バイテックBiz】</a></li>
                    <li><a href="https://bytech.jp/blog">個人向けAIメディア【バイテックBLOG】</a></li>
                    <li><a href="https://biz.bytech.jp/blog/">企業向けAIメディア【バイテックBLOG Biz】</a></li>
                  </ul>
                </div>
              </nav>
            </div>
            {/* Bottom bar: logo + copyright */}
            <div className="footer__bottom-bar">
              <a href="https://generative-ai.bytech.jp/" className="footer__logo-link">
                <img className="footer__logo-img" src="/bytech/assets/images/logowhite.png" alt="バイテック生成AI" />
                <span className="footer__logo-sub">GENERATIVE AI</span>
              </a>
              <p className="footer__copyright">2026 株式会社AI棒</p>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__inner">
            <p>&copy; 2026 株式会社AI棒 All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* Fixed mobile CTA */}
      <div className="fixed-footer-cta" id="fixedFooterCta">
        <a className="fixed-footer-cta__link" href="https://generative-ai.bytech.jp/counseling/">
          <img src="/bytech/assets/images/cta-setsumeikai.svg" alt="無料説明会に申し込む" />
        </a>
      </div>

      {/* Inline Scripts */}
      <Script id="bytech-fadein" strategy="afterInteractive">{`
        var fadeinEls = document.querySelectorAll('.fadein');
        var observer = new IntersectionObserver(function(entries) {
          entries.forEach(function(el) {
            if (el.isIntersecting) {
              el.target.classList.add('is-visible');
              observer.unobserve(el.target);
            }
          });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        fadeinEls.forEach(function(el) { observer.observe(el); });
      `}</Script>

      <Script id="bytech-tabs" strategy="afterInteractive">{`
        document.querySelectorAll('.curriculum__tab').forEach(function(tab) {
          tab.addEventListener('click', function() {
            document.querySelectorAll('.curriculum__tab').forEach(function(t) { t.classList.remove('is-active'); });
            tab.classList.add('is-active');
            document.querySelectorAll('.curriculum__panel').forEach(function(p) { p.classList.remove('is-active'); });
            document.getElementById('panel-' + tab.dataset.panel).classList.add('is-active');
          });
        });
      `}</Script>

      <Script id="bytech-faq" strategy="afterInteractive">{`
        document.querySelectorAll('.faq__item').forEach(function(item) {
          item.querySelector('.faq__item__q').addEventListener('click', function() {
            var isOpen = item.classList.contains('is-open');
            document.querySelectorAll('.faq__item').forEach(function(i) { i.classList.remove('is-open'); });
            if (!isOpen) item.classList.add('is-open');
          });
        });
      `}</Script>

      <Script id="bytech-fixed-cta" strategy="afterInteractive">{`
        (function() {
          var cta = document.getElementById('fixedFooterCta');
          if (!cta) return;
          var showAfter = 800;
          var footer = document.querySelector('.footer');
          var updateByScroll = function() {
            if (cta.dataset.footerHidden === '1') { cta.classList.remove('is-visible'); return; }
            if (window.scrollY > showAfter) cta.classList.add('is-visible');
            else cta.classList.remove('is-visible');
          };
          updateByScroll();
          window.addEventListener('scroll', updateByScroll, { passive: true });
          if (footer && 'IntersectionObserver' in window) {
            var observer = new IntersectionObserver(function(entries) {
              entries.forEach(function(entry) {
                if (entry.isIntersecting) { cta.classList.remove('is-visible'); cta.dataset.footerHidden = '1'; }
                else { cta.dataset.footerHidden = '0'; updateByScroll(); }
              });
            }, { threshold: 0.01 });
            observer.observe(footer);
          }
        })();
      `}</Script>

      <Script id="bytech-smooth-scroll" strategy="afterInteractive">{`
        document.querySelectorAll('a[href^="#"]').forEach(function(a) {
          a.addEventListener('click', function(e) {
            var href = a.getAttribute('href');
            if (href === '#') return;
            var target = document.querySelector(href);
            if (target) {
              e.preventDefault();
              window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
            }
          });
        });
      `}</Script>

      <Script id="bytech-cs-form" strategy="afterInteractive">{`
        (function() {
          const GAS_URL    = 'https://script.google.com/macros/s/AKfycbzFK2HDxL3BwTfK2DBR8flrCIll2lr5ZyOB1W9Vy5s6V5EcAIhNc_plwDu-lFMCU__1fg/exec';
          const THANKS_URL = 'https://generative-ai.bytech.jp/thanks-1/';
          const SOURCE     = 'GEN【オーガニック/指名広告】CP2万円';
          const LP_TYPE    = 'gen';
          const ENTRY      = 'fv';
          const ROUTE_ID   = 'gen_organic_cp2';

          let csStep = 1, csSelectedStart = '', csSelectedLabel = '', csCurrentDay = 'today', csAllSlots = [];
          window.dataLayer = window.dataLayer || [];
          const DAY_NAMES = ['日','月','火','水','木','金','土'];

          function csInit() {
            const now = new Date(), tom = new Date(now); tom.setDate(now.getDate() + 1);
            const todayEl = document.getElementById('csTodayLabel');
            const tomorrowEl = document.getElementById('csTomorrowLabel');
            if (todayEl) todayEl.textContent = (now.getMonth()+1)+'/'+now.getDate()+'('+DAY_NAMES[now.getDay()]+')';
            if (tomorrowEl) tomorrowEl.textContent = (tom.getMonth()+1)+'/'+tom.getDate()+'('+DAY_NAMES[tom.getDay()]+')';
            csFetchSlots();
          }

          async function csFetchSlots() {
            try {
              const res = await fetch(GAS_URL + '?action=slots', { cache: 'no-store' });
              const text = await res.text();
              let result; try { result = JSON.parse(text); } catch(e) { csShowNoSlots('枠の取得に失敗しました'); return; }
              if (!result.success || !result.slots || result.slots.length === 0) { csShowNoSlots('現在、予約可能な枠がありません'); return; }
              csAllSlots = result.slots;
              csRenderDay();
            } catch(e) { csShowNoSlots('枠の取得に失敗しました'); }
          }

          window.csSelectDay = function(day) {
            csCurrentDay = day;
            const todayBtn = document.getElementById('csBtnToday');
            const tomorrowBtn = document.getElementById('csBtnTomorrow');
            if (todayBtn) todayBtn.classList.toggle('active', day === 'today');
            if (tomorrowBtn) tomorrowBtn.classList.toggle('active', day === 'tomorrow');
            csSelectedStart = ''; csSelectedLabel = '';
            const stepBtn = document.getElementById('csBtnStep1');
            if (stepBtn) stepBtn.disabled = true;
            csRenderDay();
          };

          function csRenderDay() {
            const container = document.getElementById('csSlots');
            if (!container) return;
            const now = new Date(), target = new Date(now);
            if (csCurrentDay === 'tomorrow') target.setDate(now.getDate() + 1);
            const tds = target.toLocaleDateString('ja-JP', { timeZone: 'Asia/Tokyo', year: 'numeric', month: '2-digit', day: '2-digit' });
            const daySlots = csAllSlots.filter(function(s) { const sd = new Date(s.startedAt); return sd.toLocaleDateString('ja-JP', { timeZone: 'Asia/Tokyo', year: 'numeric', month: '2-digit', day: '2-digit' }) === tds; });
            const futureSlots = daySlots.filter(function(s) { return new Date(s.startedAt) > new Date(now.getTime() - 30 * 60 * 1000); });
            if (futureSlots.length === 0) { csShowNoSlots(); return; }
            container.innerHTML = '';
            const stepBtn = document.getElementById('csBtnStep1');
            if (stepBtn) stepBtn.style.display = '';
            futureSlots.forEach(function(slot) {
              const d = new Date(slot.startedAt), timeStr = d.toLocaleTimeString('ja-JP', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit' });
              const cap = slot.remainingCapacity || 1;
              let badge = '';
              if (cap <= 1) badge = '<div class="cs-cap cs-cap-last">△ あと'+cap+'席</div>';
              else if (cap <= 2) badge = '<div class="cs-cap cs-cap-few">△ あと'+cap+'席</div>';
              else badge = '<div class="cs-cap cs-cap-ok">◎ 空きあり</div>';
              const div = document.createElement('div'); div.className = 'cs-slot'; div.dataset.start = slot.startedAt;
              div.innerHTML = '<div class="cs-slot-time">'+timeStr+'</div>'+badge;
              div.onclick = function() {
                document.querySelectorAll('.cs-slot').forEach(function(s) { s.classList.remove('selected'); });
                this.classList.add('selected'); csSelectedStart = slot.startedAt;
                const dayLabel = csCurrentDay === 'today' ? '今日' : '明日';
                csSelectedLabel = dayLabel+' '+(target.getMonth()+1)+'/'+target.getDate()+'('+DAY_NAMES[target.getDay()]+') '+timeStr+'〜';
                if (stepBtn) stepBtn.disabled = false;
              };
              container.appendChild(div);
            });
          }

          function csShowNoSlots(msg) {
            const container = document.getElementById('csSlots');
            if (container) container.innerHTML = '<div class="cs-no-slots"><p>'+(msg||(csCurrentDay==='today'?'本日の空き枠はありません':'明日の空き枠はありません'))+'</p><small>「全ての日程を見る」から別の日程をお選びいただけます</small></div>';
            const stepBtn = document.getElementById('csBtnStep1');
            if (stepBtn) stepBtn.style.display = 'none';
          }

          window.csGoTo = function(step) {
            if (step > csStep && csStep === 2 && !csValidate()) return;
            if (step === 2) { const el = document.getElementById('csTimeBarText'); if (el) el.textContent = csSelectedLabel; }
            if (step === 3) csPopulateConfirm();
            csStep = step; csUpdateUI();
          };

          function csUpdateUI() {
            document.querySelectorAll('.cs-panel').forEach(function(p) { p.classList.remove('active'); });
            const panel = document.getElementById('csStep'+csStep);
            if (panel) panel.classList.add('active');
            document.querySelectorAll('.cs-step').forEach(function(d) {
              const s = parseInt(d.dataset.s);
              d.classList.remove('active','done');
              if (s === csStep) d.classList.add('active');
              else if (s < csStep) d.classList.add('done');
            });
            const conns = document.querySelectorAll('.cs-conn');
            conns.forEach(function(c, i) { c.classList.remove('filled','half'); if (i+1 < csStep) c.classList.add('filled'); else if (i+1 === csStep) c.classList.add('half'); });
            const counter = document.getElementById('csCounter');
            if (counter) counter.textContent = csStep+' / 3';
            const wrapper = document.querySelector('.cs-wrapper');
            if (wrapper) wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
            const stepBtn = document.getElementById('csBtnStep1');
            if (stepBtn) stepBtn.style.display = '';
          }

          function csValidate() {
            let ok = true;
            const n = document.getElementById('csName'), e = document.getElementById('csEmail'), p = document.getElementById('csPhone');
            [n,e,p].forEach(function(f) { if (f) f.classList.remove('error'); });
            document.querySelectorAll('.cs-err').forEach(function(el) { el.classList.remove('show'); });
            if (!n || !n.value.trim()) { if (n) n.classList.add('error'); const err = document.getElementById('csErrName'); if (err) err.classList.add('show'); ok = false; }
            if (!e || !e.value.trim() || !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(e.value)) { if (e) e.classList.add('error'); const err = document.getElementById('csErrEmail'); if (err) err.classList.add('show'); ok = false; }
            if (!p || !p.value.trim()) { if (p) p.classList.add('error'); const err = document.getElementById('csErrPhone'); if (err) err.classList.add('show'); ok = false; }
            return ok;
          }

          function csPopulateConfirm() {
            const confTime = document.getElementById('csConfTime'); if (confTime) confTime.textContent = csSelectedLabel;
            const confName = document.getElementById('csConfName'); if (confName) confName.textContent = (document.getElementById('csName') || {value:''}).value;
            const confEmail = document.getElementById('csConfEmail'); if (confEmail) confEmail.textContent = (document.getElementById('csEmail') || {value:''}).value;
            const confPhone = document.getElementById('csConfPhone'); if (confPhone) confPhone.textContent = (document.getElementById('csPhone') || {value:''}).value;
          }

          window.csSubmit = async function() {
            const btn = document.getElementById('csBtnSubmit'); if (!btn) return;
            btn.classList.add('loading'); btn.disabled = true;
            try {
              const nameVal = (document.getElementById('csName') || {value:''}).value.trim();
              const emailVal = (document.getElementById('csEmail') || {value:''}).value.trim();
              const phoneVal = (document.getElementById('csPhone') || {value:''}).value.trim();
              const params = new URLSearchParams({ action:'book', started_at:csSelectedStart, name:nameVal, email:emailVal, phone:phoneVal, source:SOURCE, lp_type:LP_TYPE, entry:ENTRY, route_id:ROUTE_ID });
              const res = await fetch(GAS_URL+'?'+params, { cache:'no-store' });
              const text = await res.text();
              let result; try { result = JSON.parse(text); } catch(e) { throw new Error('Invalid response'); }
              if (result.error) { alert('エラー: '+result.error); } else { window.location.href = THANKS_URL; }
            } catch(e) { alert('通信エラーが発生しました。もう一度お試しください。'); }
            finally { btn.classList.remove('loading'); btn.disabled = false; }
          };

          document.querySelectorAll('.cs-input').forEach(function(input) {
            input.addEventListener('input', function() {
              this.classList.remove('error');
              const err = this.parentElement.querySelector('.cs-err');
              if (err) err.classList.remove('show');
            });
          });

          // Bind navigation buttons directly (avoids React synthetic event timing issues)
          var btnToday = document.getElementById('csBtnToday');
          var btnTomorrow = document.getElementById('csBtnTomorrow');
          var btnStep1 = document.getElementById('csBtnStep1');
          var btnStep2Back = document.getElementById('csBtnStep2Back');
          var btnStep2Next = document.getElementById('csBtnStep2Next');
          var btnStep3Back = document.getElementById('csBtnStep3Back');
          var btnSubmit = document.getElementById('csBtnSubmit');
          if (btnToday) btnToday.addEventListener('click', function() { window.csSelectDay('today'); });
          if (btnTomorrow) btnTomorrow.addEventListener('click', function() { window.csSelectDay('tomorrow'); });
          if (btnStep1) btnStep1.addEventListener('click', function() { window.csGoTo(2); });
          if (btnStep2Back) btnStep2Back.addEventListener('click', function() { window.csGoTo(1); });
          if (btnStep2Next) btnStep2Next.addEventListener('click', function() { window.csGoTo(3); });
          if (btnStep3Back) btnStep3Back.addEventListener('click', function() { window.csGoTo(2); });
          if (btnSubmit) btnSubmit.addEventListener('click', function() { window.csSubmit(); });

          if (document.getElementById('csSlots')) csInit();
        })();
      `}</Script>

      <Script id="bytech-hamburger" strategy="afterInteractive">{`
        (function() {
          var btn = document.getElementById('headerHamburger');
          var drawer = document.getElementById('headerNavDrawer');
          if (!btn || !drawer) return;
          btn.addEventListener('click', function() {
            var isOpen = drawer.classList.toggle('is-open');
            btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            drawer.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
          });
          // サブメニュートグル
          drawer.querySelectorAll('.header__nav-drawer__toggle').forEach(function(toggle) {
            toggle.addEventListener('click', function() {
              toggle.closest('.header__nav-drawer__item').classList.toggle('is-open');
            });
          });
          // ドロワー内リンクをクリックしたら閉じる
          drawer.querySelectorAll('a').forEach(function(a) {
            a.addEventListener('click', function() {
              drawer.classList.remove('is-open');
              btn.setAttribute('aria-expanded', 'false');
              drawer.setAttribute('aria-hidden', 'true');
            });
          });
        })();
      `}</Script>

      <Script id="bytech-skills-slider" strategy="afterInteractive">{`
        (function() {
          var track = document.getElementById('skillsTrack');
          var dotsWrap = document.getElementById('skillsDots');
          if (!track || !dotsWrap) return;

          var V = 2; /* 同時表示枚数 */
          var origSlides = Array.prototype.slice.call(track.querySelectorAll('.skills-carousel__slide'));
          var N = origSlides.length;
          var dots = Array.prototype.slice.call(dotsWrap.querySelectorAll('.skills-carousel__dot'));

          /* クローン：末尾V枚を先頭に、先頭V枚を末尾に追加 */
          var tailClones = origSlides.slice(-V).map(function(s) { return s.cloneNode(true); });
          for (var i = tailClones.length - 1; i >= 0; i--) {
            track.insertBefore(tailClones[i], track.firstChild);
          }
          origSlides.slice(0, V).forEach(function(s) { track.appendChild(s.cloneNode(true)); });

          /* pos=V が最初の本物スライド */
          var pos = V;
          var busy = false;
          var timer = null;

          function setPos(p, animated) {
            track.style.transition = animated ? 'transform 0.4s ease' : 'none';
            var slideW = track.children[0].offsetWidth + 20;
            track.style.transform = 'translateX(' + (-p * slideW) + 'px)';
          }

          function updateDots(p) {
            var dotIdx = ((p - V) % N + N) % N;
            dots.forEach(function(d, i) {
              d.classList.toggle('is-active', i === dotIdx);
            });
          }

          setPos(pos, false);
          updateDots(pos);

          function go(delta) {
            if (busy) return;
            busy = true;
            pos += delta;
            setPos(pos, true);
            updateDots(pos);
          }

          track.addEventListener('transitionend', function() {
            if (pos >= N + V) { pos -= N; setPos(pos, false); }
            if (pos < V)      { pos += N; setPos(pos, false); }
            setTimeout(function() { busy = false; }, 20);
          });

          function startTimer() {
            if (timer) clearInterval(timer);
            timer = setInterval(function() { go(1); }, 5000);
          }

          var carousel = track.closest('.skills-carousel');
          if (carousel) {
            var prevBtn = carousel.querySelector('.skills-carousel__btn--prev');
            var nextBtn = carousel.querySelector('.skills-carousel__btn--next');
            if (prevBtn) prevBtn.addEventListener('click', function() { go(-1); startTimer(); });
            if (nextBtn) nextBtn.addEventListener('click', function() { go(1);  startTimer(); });
          }

          dots.forEach(function(dot, i) {
            dot.addEventListener('click', function() {
              if (busy) return;
              busy = true;
              pos = V + i;
              setPos(pos, true);
              updateDots(pos);
              startTimer();
            });
          });

          startTimer();
        })();

        // ===== Voices Carousel (infinite loop) =====
        (function() {
          var carousel = document.getElementById('voicesCarousel');
          if (!carousel) return;
          var wrap = carousel.closest('.voices__carousel-wrap');
          var prevBtn = wrap ? wrap.querySelector('.voices__btn--prev') : null;
          var nextBtn = wrap ? wrap.querySelector('.voices__btn--next') : null;
          var dots = document.querySelectorAll('#voicesDots .voices__dot');

          // Clone all original items and prepend/append for seamless loop
          var origItems = Array.prototype.slice.call(carousel.querySelectorAll('.voices__item'));
          var total = origItems.length;
          origItems.forEach(function(item) {
            var clone = item.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            carousel.appendChild(clone);
          });
          origItems.forEach(function(item) {
            var clone = item.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            carousel.insertBefore(clone, carousel.firstChild);
          });

          function getItemWidth() {
            var el = carousel.querySelector('.voices__item');
            return el ? el.offsetWidth + 15 : 0;
          }

          function getVisibleCount() {
            if (window.innerWidth <= 767) return 1;
            if (window.innerWidth <= 1024) return 3;
            return 4;
          }

          // Start at the first real item (after the prepended clones)
          var iw = getItemWidth();
          carousel.scrollLeft = iw * total;

          var isScrolling = false;

          function scrollTo(pos) {
            isScrolling = true;
            carousel.scrollTo({ left: pos, behavior: 'smooth' });
          }

          function onScrollEnd() {
            var iw2 = getItemWidth();
            var start = iw2 * total;
            var end = iw2 * total * 2;
            if (carousel.scrollLeft < start) {
              carousel.scrollLeft = carousel.scrollLeft + iw2 * total;
            } else if (carousel.scrollLeft >= end) {
              carousel.scrollLeft = carousel.scrollLeft - iw2 * total;
            }
            isScrolling = false;
            updateDots();
          }

          var scrollEndTimer;
          carousel.addEventListener('scroll', function() {
            clearTimeout(scrollEndTimer);
            scrollEndTimer = setTimeout(onScrollEnd, 120);
            updateDots();
          }, { passive: true });

          function updateDots() {
            var iw2 = getItemWidth();
            if (!iw2) return;
            var offset = carousel.scrollLeft - iw2 * total;
            var idx = Math.round(offset / iw2) % total;
            if (idx < 0) idx += total;
            dots.forEach(function(d, i) {
              d.classList.toggle('active', i === idx);
            });
          }

          if (prevBtn) {
            prevBtn.addEventListener('click', function() {
              carousel.scrollBy({ left: -getItemWidth(), behavior: 'smooth' });
            });
          }
          if (nextBtn) {
            nextBtn.addEventListener('click', function() {
              carousel.scrollBy({ left: getItemWidth(), behavior: 'smooth' });
            });
          }

          dots.forEach(function(dot, i) {
            dot.addEventListener('click', function() {
              var iw2 = getItemWidth();
              carousel.scrollTo({ left: iw2 * total + iw2 * i, behavior: 'smooth' });
            });
          });

          // Auto-scroll
          var autoTimer;
          function startAuto() {
            autoTimer = setInterval(function() {
              carousel.scrollBy({ left: getItemWidth(), behavior: 'smooth' });
            }, 5000);
          }
          startAuto();
          carousel.addEventListener('mouseenter', function() { clearInterval(autoTimer); });
          carousel.addEventListener('mouseleave', function() { startAuto(); });
        })();

        // ===== Voice Card Carousel (infinite loop) =====
        (function() {
          var track = document.getElementById('voiceTrack');
          var prevBtn = document.getElementById('voiceCardPrev');
          var nextBtn = document.getElementById('voiceCardNext');
          if (!track) return;

          var origSlides = Array.prototype.slice.call(track.querySelectorAll('.voice-card'));
          var N = origSlides.length;
          var GAP = 15;

          // visible count by viewport
          function visibleCount() {
            return window.innerWidth <= 767 ? 1 : window.innerWidth <= 1024 ? 3 : 4;
          }
          var V = visibleCount();

          // prepend clones of last V slides
          var tailClones = origSlides.slice(-V).map(function(s) { return s.cloneNode(true); });
          for (var i = tailClones.length - 1; i >= 0; i--) {
            track.insertBefore(tailClones[i], track.firstChild);
          }
          // append clones of first V slides
          origSlides.slice(0, V).forEach(function(s) { track.appendChild(s.cloneNode(true)); });

          var pos = V; // index of first real slide
          var busy = false;
          var timer = null;

          // pagination dots
          var pagination = document.getElementById('voiceCarouselPagination');
          var dots = pagination ? Array.prototype.slice.call(pagination.querySelectorAll('.voice-carousel__dot')) : [];

          function updateDots() {
            var realIdx = ((pos - V) % N + N) % N;
            dots.forEach(function(d, i) {
              d.classList.toggle('is-active', i === realIdx);
            });
          }

          function step() {
            var card = track.children[0];
            return card.offsetWidth + GAP;
          }

          function setPos(p, animated) {
            track.style.transition = animated ? 'transform 0.4s ease' : 'none';
            track.style.transform = 'translateX(' + (-p * step()) + 'px)';
          }

          setPos(pos, false);
          updateDots();

          track.addEventListener('transitionend', function() {
            if (pos >= V + N) { pos -= N; setPos(pos, false); }
            if (pos < V)      { pos += N; setPos(pos, false); }
            updateDots();
            setTimeout(function() { busy = false; }, 20);
          });

          function go(delta) {
            if (busy) return; busy = true;
            pos += delta; setPos(pos, true);
          }

          dots.forEach(function(dot, i) {
            dot.addEventListener('click', function() {
              var realIdx = ((pos - V) % N + N) % N;
              var delta = i - realIdx;
              if (delta === 0) return;
              // take the shortest path for wrap-around
              if (delta > N / 2) delta -= N;
              if (delta < -N / 2) delta += N;
              if (busy) return; busy = true;
              pos += delta; setPos(pos, true);
              startTimer();
            });
          });

          function startTimer() {
            if (timer) clearInterval(timer);
            timer = setInterval(function() { go(1); }, 5000);
          }

          if (prevBtn) prevBtn.addEventListener('click', function() { go(-1); startTimer(); });
          if (nextBtn) nextBtn.addEventListener('click', function() { go(1); startTimer(); });
          startTimer();
        })();

        // ===== Day Toggle (consultation form) =====
        (function() {
          var btns = document.querySelectorAll('.cs-day-toggle__btn');
          btns.forEach(function(btn) {
            btn.addEventListener('click', function() {
              btns.forEach(function(b) { b.classList.remove('active'); });
              btn.classList.add('active');
            });
          });
          var slots = document.querySelectorAll('.cs-time-slot:not([disabled])');
          slots.forEach(function(slot) {
            slot.addEventListener('click', function() {
              slots.forEach(function(s) { s.classList.remove('selected'); });
              slot.classList.add('selected');
            });
          });
        })();
      `}</Script>

      {/* ===== SP POPUP MODAL (SP only, timed) ===== */}
      <div className="sp-popup-overlay" id="spPopupOverlay" aria-hidden="true" role="dialog" aria-modal="true">
        <div className="sp-popup-modal">
          <button className="sp-popup-close" id="spPopupClose" aria-label="閉じる">×</button>
          <div className="sp-popup-image">
            <img src="/bytech/assets/images/modal.png" alt="" loading="lazy" />
          </div>
          <div className="sp-popup-body">
            <p className="sp-popup-sub">あなたにぴったりの</p>
            <h2 className="sp-popup-heading">生成AI<br />活用例は？</h2>
            <span className="sp-popup-badge">簡単30秒！今すぐタップ！</span>
            <a href="https://lin.ee/YOUR_LINE_URL" className="sp-popup-line-btn" target="_blank" rel="noopener noreferrer">
              <div className="sp-popup-line-inner">
                <div className="sp-popup-line-icon">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="48" rx="10" fill="#06C755"/>
                    <path d="M40 22.4C40 15.1 33.2 9.2 24.8 9.2C16.4 9.2 9.6 15.1 9.6 22.4C9.6 28.95 15.1 34.45 22.55 35.4C23.05 35.5 23.75 35.7 23.9 36.15C24.05 36.55 24 37.2 23.95 37.6L23.65 39.35C23.55 39.75 23.3 40.85 24.8 40.2C26.3 39.55 33.45 35.05 36.6 31.45C38.75 29.15 40 26.4 40 22.4Z" fill="white"/>
                    <path d="M20.1 19.7H19.1C18.85 19.7 18.65 19.9 18.65 20.15V26.3C18.65 26.55 18.85 26.75 19.1 26.75H20.1C20.35 26.75 20.55 26.55 20.55 26.3V20.15C20.55 19.9 20.35 19.7 20.1 19.7Z" fill="#06C755"/>
                    <path d="M28.9 19.7H27.9C27.65 19.7 27.45 19.9 27.45 20.15V23.7L24.65 19.9C24.6 19.85 24.55 19.8 24.5 19.75H23.5C23.25 19.75 23.05 19.95 23.05 20.2V26.35C23.05 26.6 23.25 26.8 23.5 26.8H24.5C24.75 26.8 24.95 26.6 24.95 26.35V22.8L27.75 26.6C27.8 26.65 27.85 26.7 27.9 26.75H28.9C29.15 26.75 29.35 26.55 29.35 26.3V20.15C29.35 19.9 29.15 19.7 28.9 19.7Z" fill="#06C755"/>
                  </svg>
                </div>
                LINEでチェックする
              </div>
            </a>
            <div className="sp-popup-footer">
              <img src="/bytech/assets/images/genai-logo-black.svg" alt="byTech GENERATIVE AI" />
              <p>2026 株式会社AI棒</p>
            </div>
          </div>
        </div>
      </div>

      <Script id="bytech-sp-popup" strategy="afterInteractive">{`
        (function() {
          var DELAY_MS = 5000;
          var STORAGE_KEY = 'bytech_sp_popup_shown';
          if (window.innerWidth >= 768) return;
          if (sessionStorage.getItem(STORAGE_KEY)) return;
          setTimeout(function() {
            if (window.innerWidth >= 768) return;
            var overlay = document.getElementById('spPopupOverlay');
            var closeBtn = document.getElementById('spPopupClose');
            if (!overlay) return;
            overlay.classList.add('is-active');
            overlay.setAttribute('aria-hidden', 'false');
            sessionStorage.setItem(STORAGE_KEY, '1');
            function closePopup() {
              overlay.classList.remove('is-active');
              overlay.setAttribute('aria-hidden', 'true');
            }
            if (closeBtn) closeBtn.addEventListener('click', closePopup);
            overlay.addEventListener('click', function(e) {
              if (e.target === overlay) closePopup();
            });
            document.addEventListener('keydown', function(e) {
              if (e.key === 'Escape') closePopup();
            }, { once: true });
          }, DELAY_MS);
        })();
      `}</Script>
    </>
  )
}

import { useState, useEffect, useRef, useCallback, useMemo } from 'react'

const V = 3

function useInfiniteCarousel<T>(rawSlides: T[], slidesPerView: number = V) {
  const spv = slidesPerView
  const N = rawSlides.length
  const extended = useMemo(() => [
    ...rawSlides.slice(-spv),
    ...rawSlides,
    ...rawSlides.slice(0, spv),
  ], [rawSlides, spv])
  const [pos, setPos] = useState(spv)
  const [anim, setAnim] = useState(true)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const busyRef = useRef(false)

  const go = useCallback((delta: number) => {
    if (busyRef.current) return
    busyRef.current = true
    setAnim(true)
    setPos(prev => prev + delta)
  }, [])

  const goTo = useCallback((dotIdx: number) => {
    if (busyRef.current) return
    busyRef.current = true
    setAnim(true)
    setPos(spv + dotIdx)
  }, [spv])

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => go(1), 5000)
  }, [go])

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [startTimer])

  useEffect(() => {
    if (!anim) {
      const id = setTimeout(() => {
        setAnim(true)
        busyRef.current = false
      }, 20)
      return () => clearTimeout(id)
    }
    const id = setTimeout(() => {
      setPos(prev => {
        if (prev >= N + spv) { setAnim(false); return prev - N }
        if (prev < spv)      { setAnim(false); return prev + N }
        busyRef.current = false
        return prev
      })
    }, 420)
    return () => clearTimeout(id)
  }, [pos, anim, N])

  const dotIdx = ((pos - spv) % N + N) % N
  const slideWidthPct = 100 / spv
  const trackStyle = {
    transform: `translateX(calc(-${pos} * ${slideWidthPct.toFixed(4)}%))`,
    transition: anim ? 'transform 0.4s ease' : 'none',
  }

  return { extended, dotIdx, N, trackStyle, go, goTo, startTimer }
}

const slides = [
  '/bytech/assets/images/アートボード-–-19.png',
  '/bytech/assets/images/アートボード-–-20.png',
  '/bytech/assets/images/アートボード-–-22.png',
  '/bytech/assets/images/アートボード-–-21.png',
  '/bytech/assets/images/アートボード-–-24.png',
  '/bytech/assets/images/アートボード-–-25.png',
  '/bytech/assets/images/アートボード-–-23.png',
]

function R2Carousel() {
  const [mounted, setMounted] = useState(false)
  const [isSp, setIsSp] = useState(false)
  useEffect(() => {
    setIsSp(window.innerWidth <= 767)
    setMounted(true)
    const onResize = () => setIsSp(window.innerWidth <= 767)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  const spv = isSp ? 1 : V
  const { extended, dotIdx, N, trackStyle, go, goTo, startTimer } = useInfiniteCarousel(slides, spv)

  if (!mounted) return <div className="r2-sub__carousel" />
  return (
    <div className="r2-sub__carousel">
      <button className="r2-sub__btn r2-sub__btn--prev" aria-label="前へ" onClick={() => { go(-1); startTimer() }}>
        <svg viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1L2 8l6 7" stroke="#FFD464" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
      </button>
      <div className="r2-sub__viewport">
        <div className="r2-sub__slides" style={trackStyle}>
          {(extended as string[]).map((src, i) => (
            <div className="r2-sub__slide" key={i}>
              <img src={src} alt="実践課題" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
      <button className="r2-sub__btn r2-sub__btn--next" aria-label="次へ" onClick={() => { go(1); startTimer() }}>
        <svg viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg"><path d="M2 1l6 7-6 7" stroke="#FFD464" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
      </button>
      <div className="r2-sub__dots">
        {Array.from({ length: N }).map((_, i) => (
          <button key={i} className={`r2-sub__dot${i === dotIdx ? ' r2-sub__dot--active' : ''}`} aria-label={`スライド${i + 1}`} onClick={() => { goTo(i); startTimer() }} />
        ))}
      </div>
    </div>
  )
}

const r3Slides = [
  { src: '/bytech/assets/images/グループ-19545-1.webp', alt: 'バイテックAIメンター07_田中省吾' },
  { src: '/bytech/assets/images/グループ-19539-1.webp', alt: 'バイテックAIメンター02_池田義国' },
  { src: '/bytech/assets/images/グループ-19542-1.webp', alt: 'バイテックAIメンター05_後藤暁子' },
  { src: '/bytech/assets/images/グループ-19538-1.webp', alt: 'バイテックAIメンター01_野口侑渡' },
  { src: '/bytech/assets/images/グループ-19541-1.webp', alt: 'バイテックAIメンター04_椿明人' },
  { src: '/bytech/assets/images/グループ-19540-1.webp', alt: 'バイテックAIメンター03_木村竜太郎' },
  { src: '/bytech/assets/images/グループ-19543-1.webp', alt: 'バイテックAIメンター06_那須太陽' },
]

function R3Carousel() {
  const [mounted, setMounted] = useState(false)
  const [isSp, setIsSp] = useState(false)
  useEffect(() => {
    setIsSp(window.innerWidth <= 767)
    setMounted(true)
    const onResize = () => setIsSp(window.innerWidth <= 767)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  const spv = isSp ? 1 : V
  const { extended, dotIdx, N, trackStyle, go, goTo, startTimer } = useInfiniteCarousel(r3Slides, spv)

  if (!mounted) return <div className="r3-sub__carousel" />
  return (
    <div className="r3-sub__carousel">
      <button className="r3-sub__btn r3-sub__btn--prev" aria-label="前へ" onClick={() => { go(-1); startTimer() }}>
        <svg viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1L2 8l6 7" stroke="#FFD464" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
      </button>
      <div className="r3-sub__viewport">
        <div className="r3-sub__slides" style={trackStyle}>
          {(extended as typeof r3Slides).map((slide, i) => (
            <div className="r3-sub__slide" key={i}>
              <img src={slide.src} alt={slide.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
      <button className="r3-sub__btn r3-sub__btn--next" aria-label="次へ" onClick={() => { go(1); startTimer() }}>
        <svg viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg"><path d="M2 1l6 7-6 7" stroke="#FFD464" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
      </button>
      <div className="r3-sub__dots">
        {Array.from({ length: N }).map((_, i) => (
          <button key={i} className={`r3-sub__dot${i === dotIdx ? ' r3-sub__dot--active' : ''}`} aria-label={`スライド${i + 1}`} onClick={() => { goTo(i); startTimer() }} />
        ))}
      </div>
    </div>
  )
}

const r5Slides = [
  { src: '/bytech/assets/images/b-create2_1_11zon.webp', alt: 'b-create' },
  { src: '/bytech/assets/images/b-carrer_2_2_11zon.webp', alt: 'b-carrer' },
  { src: '/bytech/assets/images/b-biz1_3_11zon.webp', alt: 'b-biz1' },
  { src: '/bytech/assets/images/b-biz1-–-2_4.webp', alt: 'b-biz2' },
  { src: '/bytech/assets/images/b-biz1-–-1_5.webp', alt: 'b-biz3' },
]

function R5Carousel() {
  const [mounted, setMounted] = useState(false)
  const [isSp, setIsSp] = useState(false)
  useEffect(() => {
    setIsSp(window.innerWidth <= 767)
    setMounted(true)
    const onResize = () => setIsSp(window.innerWidth <= 767)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  const spv = isSp ? 1 : V
  const { extended, dotIdx, N, trackStyle, go, goTo, startTimer } = useInfiniteCarousel(r5Slides, spv)

  if (!mounted) return <div className="r5-carousel" />
  return (
    <div className="r5-carousel">
      <button className="r5-carousel__btn r5-carousel__btn--prev" aria-label="前へ" onClick={() => { go(-1); startTimer() }}>
        <svg viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1L2 8l6 7" stroke="#FFD464" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
      </button>
      <div className="r5-carousel__viewport">
        <div className="r5-carousel__track" style={trackStyle}>
          {(extended as typeof r5Slides).map((slide, i) => (
            <div className="r5-carousel__slide" key={i}>
              <img src={slide.src} alt={slide.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
      <button className="r5-carousel__btn r5-carousel__btn--next" aria-label="次へ" onClick={() => { go(1); startTimer() }}>
        <svg viewBox="0 0 10 16" xmlns="http://www.w3.org/2000/svg"><path d="M2 1l6 7-6 7" stroke="#FFD464" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
      </button>
      <div className="r5-carousel__dots">
        {Array.from({ length: N }).map((_, i) => (
          <button key={i} className={`r5-carousel__dot${i === dotIdx ? ' r5-carousel__dot--active' : ''}`} aria-label={`スライド${i + 1}`} onClick={() => { goTo(i); startTimer() }} />
        ))}
      </div>
    </div>
  )
}
