import Script from 'next/script'

export default function DocAPage() {
  return (
    <>
      <link rel="stylesheet" href="/biz/assets/slick/slick.css" />
      <link rel="stylesheet" href="/biz/assets/slick/slick-theme.css" />
      <style dangerouslySetInnerHTML={{ __html: `
        body {
          font-family: var(--font-noto-jp), sans-serif;
          color: #333;
          background: #f5f7fa url(/biz/assets/img/common/dots.png) repeat;
          margin: 0;
          padding: 0;
        }
        .doc-header-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1100px;
          margin: 0 auto;
          padding: 16px 40px;
        }
        .doc-header__logo img {
          height: 28px;
          filter: brightness(0) saturate(100%) invert(15%) sepia(30%) saturate(1500%) hue-rotate(190deg) brightness(90%);
        }
        .doc-header__nav {
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
        .doc-header__nav a {
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
        .doc-header__nav a.btn-outline:hover {
          background: #f0f2f5;
          border-color: #fff;
          box-shadow: 4px 4px 8px rgba(0,0,0,0.06), -2px -2px 6px rgba(255,255,255,0.8);
        }
        .doc-header__nav a.btn-fill {
          background: linear-gradient(135deg, #1a6fb5, #2a9fd6);
          color: #fff;
          border: none;
          box-shadow: 0 2px 8px rgba(26, 111, 181, 0.3);
        }
        .doc-header__nav a.btn-fill:hover {
          opacity: 0.9;
          box-shadow: 0 4px 12px rgba(26, 111, 181, 0.4);
        }
        .doc-main {
          max-width: 1100px;
          margin: 60px auto;
          padding: 0 20px;
          display: flex;
          gap: 40px;
          align-items: flex-start;
        }
        @media (max-width: 768px) {
          .doc-main {
            flex-direction: column;
            margin: 30px auto;
          }
        }
        .doc-content {
          flex: 1;
          min-width: 0;
          overflow: hidden;
        }
        .doc-content__eyebrow {
          color: #2a5a9b;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.08em;
          margin-bottom: 8px;
        }
        .doc-content__title {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 24px;
          line-height: 1.4;
        }
        .doc-content__image {
          width: 100%;
          border-radius: 8px;
          margin-bottom: 24px;
        }
        .doc-content__desc {
          font-size: 15px;
          line-height: 1.8;
          margin-bottom: 30px;
        }
        .doc-content__subtitle {
          font-size: 22px;
          font-weight: 800;
          color: #0a7ac2;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 3px dashed #0a7ac2;
        }
        .doc-content__list-wrap {
          background: #fff;
          border-radius: 8px;
          padding: 30px 30px 30px 40px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          margin-bottom: 30px;
        }
        .doc-content__list {
          list-style: none;
          padding: 0;
          margin: 0;
          counter-reset: item;
        }
        .doc-content__list li {
          font-size: 16px;
          font-weight: 600;
          line-height: 2.2;
          counter-increment: item;
        }
        .doc-content__list li::before {
          content: counter(item) ". ";
          font-weight: 700;
        }
        .doc-content__carousel {
          margin-bottom: 30px;
        }
        .doc-content__carousel img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 8px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
        }
        /* slick初期化前は最初の1枚だけ表示（巨大画像/8枚スタックのチラつき防止） */
        .doc-carousel:not(.slick-initialized) > div:not(:first-child) {
          display: none;
        }
        .doc-content__carousel .slick-dots {
          bottom: -30px;
        }
        .doc-content__carousel .slick-dots li button:before {
          font-size: 10px;
          color: #1a2e50;
        }
        .doc-content__carousel .slick-prev,
        .doc-content__carousel .slick-next {
          z-index: 2;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.92);
          border-radius: 50%;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.18);
        }
        .doc-content__carousel .slick-prev { left: 12px; }
        .doc-content__carousel .slick-next { right: 12px; }
        .doc-content__carousel .slick-prev:hover,
        .doc-content__carousel .slick-next:hover {
          background: #fff;
        }
        .doc-content__carousel .slick-prev:before,
        .doc-content__carousel .slick-next:before {
          color: #1a2e50;
          font-size: 22px;
          opacity: 1;
        }
        .doc-form {
          width: 100%;
          max-width: 420px;
          flex-shrink: 0;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.1);
          padding: 30px 24px;
          position: sticky;
          top: 30px;
        }
        @media (max-width: 768px) {
          .doc-form {
            max-width: 100%;
            position: static;
          }
        }
        .doc-form__title {
          font-size: 20px;
          font-weight: 800;
          text-align: center;
          margin-bottom: 20px;
        }
        .doc-form .formrun-embed {
          min-height: 500px;
          width: 100%;
          display: block;
        }
        .doc-form .formrun-embed iframe {
          border: 0 !important;
        }
        .doc-footer {
          background: #1a2e50;
          color: #fff;
          text-align: center;
          padding: 30px 20px;
          font-size: 13px;
        }
        .doc-footer a {
          color: #fff;
          text-decoration: none;
        }
        .doc-footer__logo {
          margin-bottom: 16px;
        }
        .doc-footer__logo img {
          height: 24px;
        }
      ` }} />

      <div className="doc-header-wrap">
        <div className="doc-header__logo">
          <a href="/biz/">
            <img src="/biz/assets/img/wp/グループ-16110.svg" alt="バイテックBiz" />
          </a>
        </div>
        <nav className="doc-header__nav">
          <a href="/biz/" className="btn-outline">トップページ</a>
          <a href="/biz/counseling" className="btn-fill">無料個別相談を予約する</a>
        </nav>
      </div>

      <main className="doc-main">
        <div className="doc-content">
          <p className="doc-content__eyebrow">Download _</p>
          <h1 className="doc-content__title">3分でわかるバイテックBiz</h1>
          <img src="/biz/assets/img/wp/Certificate-MockUp-02-2-1024x683.webp" alt="バイテックBiz資料サムネ" className="doc-content__image" />
          <p className="doc-content__desc">ハンズオン型法人AI研修サービスバイテックBizを紹介する「サービス概要資料」となります！</p>
          <h2 className="doc-content__subtitle">この資料で分かること</h2>
          <div className="doc-content__list-wrap">
            <ol className="doc-content__list">
              <li>現在の生成AI</li>
              <li>生成AI導入の課題</li>
              <li>バイテックのアプローチ</li>
              <li>カリキュラム</li>
              <li>バイテックのサポート</li>
              <li>料金プラン</li>
              <li>ご支援の流れ</li>
              <li>弊社コンサルタントのご紹介</li>
              <li>会社概要</li>
            </ol>
          </div>
          <div className="doc-content__carousel">
            <div className="doc-carousel">
              <div><img src="/biz/assets/img/wp/スクリーンショット-2025-12-20-18.13.33_1-1-2048x1154.webp" alt="スライド1" /></div>
              <div><img src="/biz/assets/img/wp/スクリーンショット-2025-12-20-18.41.41_6-2048x1153.webp" alt="スライド2" /></div>
              <div><img src="/biz/assets/img/wp/スクリーンショット-2025-12-20-18.13.42_2-1-2048x1153.webp" alt="スライド3" /></div>
              <div><img src="/biz/assets/img/wp/スクリーンショット-2025-12-20-18.41.53_7-2048x1148.webp" alt="スライド4" /></div>
              <div><img src="/biz/assets/img/wp/スクリーンショット-2025-12-20-18.13.53_5-2048x1146.webp" alt="スライド5" /></div>
              <div><img src="/biz/assets/img/wp/スクリーンショット-2025-12-20-18.42.12_3-2048x1153.webp" alt="スライド6" /></div>
              <div><img src="/biz/assets/img/wp/スクリーンショット-2025-12-20-18.42.25_4-2048x1158.webp" alt="スライド7" /></div>
              <div><img src="/biz/assets/img/wp/スクリーンショット-2025-12-20-18.42.37_8-1-2048x1152.webp" alt="スライド8" /></div>
            </div>
          </div>
        </div>

        <div className="doc-form">
          <p className="doc-form__title">資料ダウンロード</p>
          <div className="formrun-embed" data-formrun-form="@document-1" data-formrun-redirect="true"></div>
        </div>
      </main>

      <footer className="doc-footer">
        <div className="doc-footer__logo">
          <a href="/biz/">
            <img src="/biz/assets/img/wp/グループ-16110.svg" alt="バイテックBiz" />
          </a>
        </div>
        <p>&copy; 2025 バイテックBiz All Rights Reserved.</p>
      </footer>

      <Script src="https://sdk.form.run/js/v2/embed.js" strategy="afterInteractive" />
      {/* jQuery→slick→初期化 を順番にロード。afterInteractive は実行順序を保証せず、
          slick.min.js(ローカル) が jQuery(外部CDN) より先に実行されると $.fn.slick が
          登録されずカルーセルが初期化されないため、依存順にチェーンする。 */}
      <Script id="doc-carousel-loader" strategy="afterInteractive">
        {`(function(){
          function load(src, cb){ var s=document.createElement('script'); s.src=src; s.onload=cb; document.body.appendChild(s); }
          load('https://code.jquery.com/jquery-3.7.1.min.js', function(){
            load('/biz/assets/slick/slick.min.js', function(){
              window.jQuery(function(){
                window.jQuery('.doc-carousel').slick({
                  autoplay: true, dots: true, arrows: true,
                  slidesToShow: 1, speed: 500, autoplaySpeed: 5000
                });
              });
            });
          });
        })();`}
      </Script>
    </>
  )
}
