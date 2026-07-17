// biz サブページ共通のヘッダー/フッター。TOP(biz-top-static)と同一のマークアップを再現し、
// 該当CSS(public/biz/assets/css/style.css の .top-header* / .footer*)を移植して内包する。
// TOPは静的HTML・当ページ群はReactのため、Reactページ間で共有できるコンポーネントとして提供する。
//
// - ヘッダーは position:fixed のガラスnav（テキストは #333 で明背景でも可読）。ロゴは明背景ページ用に
//   ダーク版で固定（TOPはヒーロー上でwhite→dark切替だが、当ページ群は常時明背景のためダーク固定）。
// - 本文がヘッダー下に潜らないよう、利用ページ側で先頭要素に padding-top を確保すること（BIZ_HEADER_OFFSET 参照）。
// - モバイルのハンバーガー開閉は軽量 vanilla（TOPの scripts.js は jQuery/slick 依存の重量物のため移植せず自前）。
// - フッターCSSの rem(html:62.5%基準=10px) は当ページ群に 62.5% 指定が無いため px 換算済み。

const CHROME_CSS = `
/* ===== Footer ===== */
.footer { background: #16202E; color: #fff; padding: 50px 0 20px; }
.footer__inner { max-width: 1200px; margin: 0 auto 30px; display: grid; grid-template-columns: 1.2fr 1fr 1fr 1fr; gap: 50px; }
.footer__col--lead { display: flex; align-items: flex-start; }
.footer__lead { font-size: clamp(18px, 2.6vw, 28px); font-weight: 700; line-height: 1.5; }
.footer__title { font-size: 14px; color: #3A82CA; font-weight: 700; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.2); }
.footer__title--service { margin-top: 40px; }
.footer__list { list-style: none; padding: 0; margin: 0; }
.footer__list li { margin-bottom: 12px; }
.footer__list li a { color: #d1d8e8; font-size: 14px; text-decoration: none; transition: opacity 0.2s ease; }
.footer__list li a:hover { opacity: 0.6; }
.footer__bottom { max-width: 1200px; margin: 0 auto; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.2); display: flex; justify-content: space-between; align-items: center; }
.footer__logo { width: 110px; }
.footer__copy { font-size: 10px; color: #b8c0ce; }
@media (max-width: 1100px){
  .footer__inner { grid-template-columns: 1fr; gap: 20px; padding-left: 5vw; padding-right: 5vw; }
  .footer__bottom { padding-left: 5vw; padding-right: 5vw; }
}

/* ===== Top Header ===== */
.top-header-wrap { position: fixed; top: 0; left: 50%; transform: translateX(-50%); width: 100%; z-index: 1000; display: flex; align-items: center; justify-content: space-between; max-width: 1400px; margin: 0 auto; padding: 16px 40px; box-sizing: border-box; }
.top-header__logo { flex-shrink: 0; width: clamp(80px, 8vw, 120px); }
.top-header__logo img { width: 100%; height: auto; display: block; }
.top-header__nav { display: flex; gap: 4px; align-items: center; background: rgba(255,255,255,0.6); border: 1px solid rgba(255,255,255,0.7); border-radius: 50px; backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); box-shadow: 0 4px 24px rgba(0,0,0,0.06); padding: 4px 4px 4px 16px; }
.top-header__nav a { color: #333; text-decoration: none; font-size: 13px; font-weight: 600; padding: 10px 10px; border-radius: 40px; border: 1px solid transparent; transition: all 0.3s ease; white-space: nowrap; }
.top-header__nav a.top-nav-link:hover { background: rgba(0,0,0,0.04); }
.top-nav-caret { display: inline-block; width: 8px; height: 6px; margin-left: 5px; vertical-align: middle; background: center/contain no-repeat url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23555555'/%3E%3C/svg%3E"); }
.top-nav-item { position: relative; align-self: stretch; display: flex; align-items: center; }
.top-nav-item > .top-nav-link { display: flex; align-items: center; height: 100%; box-sizing: border-box; }
.top-nav-item > .top-nav-link .top-nav-caret { transition: transform 0.2s ease; }
.top-nav-item:hover > .top-nav-link,
.top-nav-item:focus-within > .top-nav-link { background: rgba(0,0,0,0.04); }
.top-nav-item:hover > .top-nav-link .top-nav-caret,
.top-nav-item:focus-within > .top-nav-link .top-nav-caret { transform: rotate(180deg); }
.top-mega-menu { position: absolute; top: calc(100% + 13px); right: -150px; width: min(560px, calc(100vw - 48px)); padding: 22px; box-sizing: border-box; background: rgba(255,255,255,0.98); border: 1px solid rgba(26,111,181,0.13); border-radius: 4px; box-shadow: 0 20px 55px rgba(22,32,46,0.18); opacity: 0; visibility: hidden; pointer-events: none; transform: translateY(-7px); transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease; }
.top-mega-menu::before { content: ""; position: absolute; right: 0; bottom: 100%; width: 100%; height: 14px; }
.top-nav-item:hover .top-mega-menu,
.top-nav-item:focus-within .top-mega-menu { opacity: 1; visibility: visible; pointer-events: auto; transform: translateY(0); }
.top-mega-menu__eyebrow { display: block; margin-bottom: 5px; color: #1a6fb5; font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; }
.top-mega-menu__heading { margin: 0; color: #16202e; font-size: 18px; font-weight: 700; line-height: 1.45; }
.top-mega-menu__desc { margin: 5px 0 16px; color: #687386; font-size: 12px; line-height: 1.7; }
.top-mega-menu__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
.top-header__nav .top-mega-menu__card { display: block; min-width: 0; padding: 10px; color: #26364a; background: #f5f8fc; border: 1px solid #e7edf5; border-radius: 2px; white-space: normal; transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease; }
.top-header__nav .top-mega-menu__card:hover { background: #fff; border-color: #9ec7e8; transform: translateY(-2px); }
.top-mega-menu__thumb { display: block; aspect-ratio: 16/9; overflow: hidden; margin-bottom: 9px; background: #eaf1f8; border-radius: 0; }
.top-mega-menu__thumb img { display: block; width: 100%; height: 100%; object-fit: contain; }
.top-mega-menu__card-title { display: block; margin-bottom: 4px; color: #173e6c; font-size: 12px; font-weight: 700; line-height: 1.5; }
.top-mega-menu__card-desc { display: block; color: #687386; font-size: 10px; font-weight: 500; line-height: 1.55; }
.top-header__nav .top-mega-menu__all { display: flex; align-items: center; justify-content: flex-end; gap: 7px; margin-top: 13px; padding: 7px 1px 0; color: #1a6fb5; font-size: 12px; border-radius: 0; }
.top-mega-menu__all::after { content: ""; width: 7px; height: 7px; border-top: 1.5px solid currentColor; border-right: 1.5px solid currentColor; transform: rotate(45deg); }
.top-header__nav a.btn-outline { margin-left: 4px; border: 1px solid #ccc; background: #fff; }
.top-header__nav a.btn-outline:hover { background: #f0f2f5; border-color: #bbb; box-shadow: 4px 4px 8px rgba(0,0,0,0.06), -2px -2px 6px rgba(255,255,255,0.8); }
.top-header__nav a.btn-fill { background: linear-gradient(135deg, #1a6fb5, #2a9fd6); color: #fff; border: none; box-shadow: 0 2px 8px rgba(26,111,181,0.3); }
.top-header__nav a.btn-fill:hover { opacity: 0.9; box-shadow: 0 4px 12px rgba(26,111,181,0.4); }
.top-header__hamburger { display: none; }
.top-header__overlay { display: none; }
@media (max-width: 768px){
  .top-header-wrap { padding: 12px 16px; }
  .top-header__hamburger { display: flex; flex-direction: column; justify-content: center; gap: 5px; width: 40px; height: 40px; padding: 8px; background: rgba(255,255,255,0.7); border: 1px solid rgba(255,255,255,0.8); border-radius: 10px; backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); cursor: pointer; z-index: 1002; flex-shrink: 0; }
  .top-header__hamburger span { display: block; width: 100%; height: 2px; background: #333; border-radius: 2px; transition: transform 0.3s ease, opacity 0.3s ease; }
  .top-header__hamburger.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .top-header__hamburger.active span:nth-child(2) { opacity: 0; }
  .top-header__hamburger.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
  .top-header__overlay { display: block; position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 999; opacity: 0; pointer-events: none; transition: opacity 0.3s ease; }
  .top-header__overlay.active { opacity: 1; pointer-events: auto; }
  .top-header__nav { position: fixed; top: 0; right: -280px; width: 280px; height: 100dvh; flex-direction: column; align-items: stretch; gap: 0; padding: 80px 20px 30px; background: #fff; border-radius: 0; border: none; box-shadow: -4px 0 24px rgba(0,0,0,0.1); backdrop-filter: none; overflow-y: auto; z-index: 1001; transition: right 0.3s ease; }
  .top-header__nav.active { right: 0; }
  .top-header__nav a { font-size: 15px; padding: 14px 12px; border-radius: 8px; border-bottom: 1px solid #eee; white-space: normal; }
  .top-header__nav a:last-child { border-bottom: none; }
  .top-header__nav a.btn-outline { margin-left: 0; margin-top: 16px; text-align: center; border: 1px solid #ccc; }
  .top-header__nav a.btn-fill { margin-top: 8px; text-align: center; }
  .top-nav-item { display: block; align-self: auto; }
  .top-nav-item > .top-nav-link { height: auto; }
  .top-nav-item:hover > .top-nav-link .top-nav-caret,
  .top-nav-item:focus-within > .top-nav-link .top-nav-caret { transform: none; }
  .top-mega-menu { display: none; }
}
`;

// ハンバーガー開閉（軽量 vanilla）。Next16 は inline next/script が壊れるためネイティブ<script>で読み込む。
const HAMBURGER_JS = `(function(){
  var h=document.querySelector('.top-header__hamburger');
  var n=document.querySelector('.top-header__nav');
  var o=document.querySelector('.top-header__overlay');
  if(!h||!n||!o)return;
  function close(){h.classList.remove('active');n.classList.remove('active');o.classList.remove('active');document.documentElement.style.overflow='';}
  h.addEventListener('click',function(){
    if(n.classList.contains('active')){close();}
    else{h.classList.add('active');n.classList.add('active');o.classList.add('active');document.documentElement.style.overflow='hidden';}
  });
  o.addEventListener('click',close);
  n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){if(window.innerWidth<=768)close();});});
})();`;

// 固定ヘッダー分の本文オフセット（利用ページの先頭要素に padding-top で確保する目安）。
export const BIZ_HEADER_OFFSET = 92;

export function BizHeader() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CHROME_CSS }} />
      <div className="top-header-wrap">
        <div className="top-header__logo">
          <a href="/"><img src="/biz/assets/img/common/hd-logo-dark.svg" alt="バイテックBiz" /></a>
        </div>
        <button className="top-header__hamburger" aria-label="メニューを開く"><span></span><span></span><span></span></button>
        <div className="top-header__overlay"></div>
        <nav className="top-header__nav">
          <a href="/#course" className="top-nav-link">研修一覧</a>
          <a href="/#feature" className="top-nav-link">3つの特徴</a>
          <a href="/#works" className="top-nav-link">導入事例</a>
          <a href="/news" className="top-nav-link">お知らせ</a>
          <div className="top-nav-item">
            <a href="/archive" className="top-nav-link">アーカイブ<span className="top-nav-caret" aria-hidden="true" /></a>
            <div className="top-mega-menu" aria-label="セミナーアーカイブの内容">
              <span className="top-mega-menu__eyebrow">Seminar Archive</span>
              <p className="top-mega-menu__heading">実務に活かせるAIセミナー</p>
              <p className="top-mega-menu__desc">過去に開催したセミナーを、テーマや気になる課題から探せます。</p>
              <div className="top-mega-menu__grid">
                <a className="top-mega-menu__card" href="/seminars/seminar-6"><span className="top-mega-menu__thumb"><img src="/biz/assets/img/seminars/seminar-6.webp" alt="" /></span><span className="top-mega-menu__card-title">CodexでLP制作</span><span className="top-mega-menu__card-desc">制作からネット公開まで</span></a>
                <a className="top-mega-menu__card" href="/seminars/seminar-5"><span className="top-mega-menu__thumb"><img src="/biz/assets/img/seminars/seminar-5.webp" alt="" /></span><span className="top-mega-menu__card-title">Codexで資料制作</span><span className="top-mega-menu__card-desc">伝わるプレゼンを効率化</span></a>
                <a className="top-mega-menu__card" href="/seminars/seminar-4"><span className="top-mega-menu__thumb"><img src="/biz/assets/img/seminars/seminar-4.webp" alt="" /></span><span className="top-mega-menu__card-title">Geminiで画像量産</span><span className="top-mega-menu__card-desc">スプレッドシートで効率化</span></a>
              </div>
              <a className="top-mega-menu__all" href="/archive">セミナーをすべて見る</a>
            </div>
          </div>
          <div className="top-nav-item">
            <a href="/documents" className="top-nav-link">お役立ち資料<span className="top-nav-caret" aria-hidden="true" /></a>
            <div className="top-mega-menu" aria-label="お役立ち資料の内容">
              <span className="top-mega-menu__eyebrow">Useful Documents</span>
              <p className="top-mega-menu__heading">AI人材育成に役立つ無料資料</p>
              <p className="top-mega-menu__desc">研修の検討から社内活用まで、目的に合う資料を選べます。</p>
              <div className="top-mega-menu__grid">
                <a className="top-mega-menu__card" href="/documents#pickup"><span className="top-mega-menu__card-title">ピックアップ</span><span className="top-mega-menu__card-desc">まず読んでほしい注目資料</span></a>
                <a className="top-mega-menu__card" href="/documents#cat-0"><span className="top-mega-menu__card-title">サービス概要</span><span className="top-mega-menu__card-desc">プラン・料金・導入事例</span></a>
                <a className="top-mega-menu__card" href="/documents#cat-1"><span className="top-mega-menu__card-title">AI活用ノウハウ</span><span className="top-mega-menu__card-desc">実践ガイド・テンプレート</span></a>
              </div>
              <a className="top-mega-menu__all" href="/documents">資料をすべて見る</a>
            </div>
          </div>
          <a href="/#faq" className="top-nav-link">よくある質問</a>
          <a href="/doc-a" className="btn-outline">資料をダウンロード</a>
          <a href="/counseling" className="btn-fill">無料個別相談を予約する</a>
        </nav>
      </div>
      <script dangerouslySetInnerHTML={{ __html: HAMBURGER_JS }} />
    </>
  );
}

export function BizFooter() {
  return (
    <footer className="footer" id="pageFooter">
      <div className="footer__inner">
        <div className="footer__col footer__col--lead">
          <p className="footer__lead">生成AI活用を、<br />現場の当たり前に。</p>
        </div>
        <div className="footer__col">
          <p className="footer__title">バイテックBizについて</p>
          <ul className="footer__list">
            <li><a href="/#about">バイテックBizとは</a></li>
            <li><a href="/#course">研修一覧</a></li>
            <li><a href="/#feature">3つの特徴</a></li>
            <li><a href="/#works">導入事例</a></li>
            <li><a href="/#faq">よくある質問</a></li>
            <li><a href="/documents">お役立ち資料</a></li>
            <li><a href="/archive">セミナーアーカイブ</a></li>
            <li><a href="/news">お知らせ</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <p className="footer__title">サポート</p>
          <ul className="footer__list">
            <li><a href="/user-terms/">利用規約</a></li>
            <li><a href="/specified_commercial/">特定商取引法に関する表示</a></li>
            <li><a href="/system-requirements/">システム要件</a></li>
            <li><a href="/refund-policy/">返金ポリシー</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <p className="footer__title">会社情報</p>
          <ul className="footer__list">
            <li><a href="https://ai-bou.co.jp" target="_blank" rel="noopener">会社概要</a></li>
            <li><a href="/privacy-policy/">プライバシーポリシー</a></li>
          </ul>
          <p className="footer__title footer__title--service">サービス</p>
          <ul className="footer__list">
            <li><a href="#">個人向けAIスクール【バイテック】</a></li>
            <li><a href="https://biz.bytech.jp/blog/" target="_blank" rel="noopener">オウンドメディア【バイテックBLOG Biz】</a></li>
            <li><a href="https://ai-bou.co.jp/ai-sanbo" target="_blank" rel="noopener">企業向けAI顧問サービス【AI参謀】</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <img loading="lazy" src="/biz/assets/img/common/ft-logo_w.svg" alt="footer logo" className="footer__logo" />
        <p className="footer__copy">2025 株式会社AI棒</p>
      </div>
    </footer>
  );
}
