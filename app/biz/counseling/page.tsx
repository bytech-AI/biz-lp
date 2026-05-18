'use client'

import Script from 'next/script'

export default function CounselingPage() {
  return (
    <>
      <link rel="stylesheet" href="/biz/assets/css/style.min.css" />
      <style dangerouslySetInnerHTML={{ __html: `
        body {
          font-family: var(--font-noto-jp), sans-serif;
          color: #333;
          background: #f5f7fa url(/biz/assets/img/common/dots.png) repeat;
          margin: 0;
          padding: 0;
        }
        .csl-header-wrap {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1100px;
          margin: 0 auto;
          padding: 16px 40px;
        }
        .csl-header__logo img {
          height: 28px;
          filter: brightness(0) saturate(100%) invert(15%) sepia(30%) saturate(1500%) hue-rotate(190deg) brightness(90%);
        }
        .csl-header__nav {
          display: flex;
          gap: 4px;
          align-items: center;
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.7);
          border-radius: 50px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
          padding: 4px;
        }
        .csl-header__nav a {
          color: #333;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          padding: 12px 20px;
          border-radius: 40px;
          border: 1px solid transparent;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .csl-header__nav a.btn-outline:hover {
          background: #f0f2f5;
          border-color: #fff;
          box-shadow: 4px 4px 8px rgba(0,0,0,0.06), -2px -2px 6px rgba(255,255,255,0.8);
        }
        .csl-header__nav a.btn-fill {
          background: linear-gradient(135deg, #1a6fb5, #2a9fd6);
          color: #fff;
          border: none;
          box-shadow: 0 2px 8px rgba(26, 111, 181, 0.3);
        }
        .csl-header__nav a.btn-fill:hover {
          opacity: 0.9;
          box-shadow: 0 4px 12px rgba(26, 111, 181, 0.4);
        }
        .csl-main {
          max-width: 1100px;
          margin: 60px auto;
          padding: 0 20px;
          display: flex;
          gap: 40px;
          align-items: flex-start;
        }
        @media (max-width: 768px) {
          .csl-main {
            flex-direction: column;
            margin: 30px auto;
          }
          .csl-header-wrap {
            padding: 12px 16px;
          }
          .csl-header__nav a {
            font-size: 12px;
            padding: 6px 12px;
          }
        }
        .csl-content {
          flex: 1;
        }
        .csl-content__title {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1.5;
        }
        .csl-content__desc {
          font-size: 15px;
          line-height: 1.8;
          margin-bottom: 30px;
        }
        .csl-content__image {
          width: 100%;
          height: auto;
        }
        .csl-calendar {
          width: 100%;
          max-width: 480px;
          flex-shrink: 0;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.1);
          padding: 24px;
          position: sticky;
          top: 30px;
          min-height: 600px;
        }
        @media (max-width: 768px) {
          .csl-calendar {
            max-width: 100%;
            position: static;
          }
        }
        .csl-footer {
          background: #1a2e50;
          color: #fff;
          text-align: center;
          padding: 30px 20px;
          font-size: 13px;
        }
        .csl-footer a {
          color: #fff;
          text-decoration: none;
        }
        .csl-footer__logo {
          margin-bottom: 16px;
        }
        .csl-footer__logo img {
          height: 24px;
        }
      ` }} />

      <div className="csl-header-wrap">
        <div className="csl-header__logo">
          <a href="/biz/">
            <img src="https://bytech.jp/biz/wp-content/uploads/2024/08/グループ-16110.svg" alt="バイテックBiz" />
          </a>
        </div>
        <nav className="csl-header__nav">
          <a href="/biz/" className="btn-outline">トップページ</a>
          <a href="/biz/doc-a/" className="btn-fill">資料をダウンロード</a>
        </nav>
      </div>

      <main className="csl-main">
        <div className="csl-content">
          <h1 className="csl-content__title">社内でのAI活用に関する<br />ご質問・ご相談を承ります。</h1>
          <p className="csl-content__desc">当日はZoomにて約1時間のセッションを行います。<br />社内でのAI活用方法や学ぶべき内容など、課題やお悩みに合わせた解決策をご提案します。</p>
          <img src="https://bytech.jp/biz/wp-content/uploads/2025/08/formグラフィック.svg" alt="個別相談予約フォーム" className="csl-content__image" />
        </div>

        <div className="csl-calendar">
          <div id="timerex_calendar" data-url="https://timerex.net/s/customer-success_06a3/23196089"></div>
        </div>
      </main>

      <footer className="csl-footer">
        <div className="csl-footer__logo">
          <a href="/biz/">
            <img src="https://bytech.jp/biz/wp-content/uploads/2024/08/グループ-16110.svg" alt="バイテックBiz" />
          </a>
        </div>
        <p>&copy; 2025 バイテックBiz All Rights Reserved.</p>
      </footer>

      <Script src="https://asset.timerex.net/js/embed.js" strategy="afterInteractive" />
      <Script id="timerex-init" strategy="afterInteractive">
        {`TimerexCalendar({
          'disable_logo': true,
          'primary_color': '#4A8CCE',
          'disable_title_hyperlink': true
        });`}
      </Script>
    </>
  )
}
