
export default function SystemRequirementsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        body { font-family: var(--font-noto-jp), sans-serif; color: #333; background: #f5f7fa url(/biz/assets/img/common/dots.png) repeat; margin: 0; padding: 0; }
        .pg-header-wrap { position: sticky; top: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between; max-width: 1100px; margin: 0 auto; padding: 16px 40px; }
        .pg-header__logo img { height: 28px; filter: brightness(0) saturate(100%) invert(15%) sepia(30%) saturate(1500%) hue-rotate(190deg) brightness(90%); }
        .pg-header__nav { display: flex; gap: 4px; align-items: center; background: rgba(255,255,255,0.6); border: 1px solid rgba(255,255,255,0.7); border-radius: 50px; backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); box-shadow: 0 4px 24px rgba(0,0,0,0.06); padding: 4px; }
        .pg-header__nav a { color: #333; text-decoration: none; font-size: 14px; font-weight: 600; padding: 12px 20px; border-radius: 40px; border: 1px solid transparent; transition: all .3s ease; white-space: nowrap; }
        .pg-header__nav a.btn-outline:hover { background: #f0f2f5; border-color: #fff; box-shadow: 4px 4px 8px rgba(0,0,0,0.06), -2px -2px 6px rgba(255,255,255,0.8); }
        .pg-header__nav a.btn-fill { background: linear-gradient(135deg, #1a6fb5, #2a9fd6); color: #fff; border: none; box-shadow: 0 2px 8px rgba(26,111,181,0.3); }
        .pg-header__nav a.btn-fill:hover { opacity: 0.9; box-shadow: 0 4px 12px rgba(26,111,181,0.4); }
        .pg-breadcrumb { max-width: 900px; margin: 30px auto 0; padding: 0 40px; font-size: 13px; }
        .pg-breadcrumb a { color: #2a5a9b; text-decoration: none; }
        .pg-breadcrumb a:hover { text-decoration: underline; }
        .pg-breadcrumb span { color: #666; }
        .pg-hero { max-width: 900px; margin: 0 auto; padding: 30px 40px 0; }
        .pg-hero__title { font-size: 32px; font-weight: 800; margin: 0 0 8px; }
        .pg-hero__subtitle { font-size: 16px; color: #aaa; font-weight: 400; margin: 0 0 20px; font-family: "Futura", "Futura Medium", sans-serif; }
        .pg-hero__line { border: none; border-top: 1px solid #ddd; margin: 0; }
        .pg-card { max-width: 900px; margin: 30px auto; padding: 0 40px 60px; }
        @media (max-width:768px) { .pg-card { margin: 20px auto; padding: 0 20px 40px; } .pg-header-wrap { padding: 12px 16px; } }
        .pg-card h2 { font-size: 18px; font-weight: 700; margin: 36px 0 16px; color: #1a2e50; }
        .pg-card p { font-size: 15px; line-height: 1.8; margin-bottom: 16px; }
        .pg-card ul { list-style: disc; padding-left: 1.5em; margin-bottom: 20px; }
        .pg-card li { font-size: 15px; line-height: 2; }
        .pg-card .note { font-size: 13px; color: #666; margin-top: 30px; }
        .pg-footer { background: #1a2e50; color: #fff; text-align: center; padding: 30px 20px; font-size: 13px; }
        .pg-footer a { color: #fff; text-decoration: none; }
        .pg-footer__logo { margin-bottom: 16px; }
        .pg-footer__logo img { height: 24px; }
      ` }} />

      <div className="pg-header-wrap">
        <div className="pg-header__logo"><a href="/biz/"><img src="/biz/assets/img/wp/グループ-16110.svg" alt="バイテックBiz" /></a></div>
        <nav className="pg-header__nav">
          <a href="/biz/" className="btn-outline">トップページ</a>
          <a href="/biz/counseling" className="btn-fill">無料個別相談を予約する</a>
        </nav>
      </div>
      <nav className="pg-breadcrumb">
        <a href="/biz/">TOP</a> <span>&rsaquo; システム要件</span>
      </nav>
      <div className="pg-hero">
        <h1 className="pg-hero__title">システム要件</h1>
        <p className="pg-hero__subtitle">System Requirements</p>
        <hr className="pg-hero__line" />
      </div>
      <main className="pg-card">
        <p>PCとMacのデスクトップ/ラップトップなど、さまざまなデバイスやプラットフォームでバイテックBizのコースにアクセスできます。</p>

        <h2>最小システム要件</h2>
        <ul>
          <li>ブラウザー：デスクトップ/ラップトップ用の最新のChrome、Firefox、Safari、Edge、Opera</li>
          <li>インターネット接続：5 Mbps以上のブロードバンド接続</li>
        </ul>

        <h2>PCの要件</h2>
        <ul>
          <li>プラットフォーム：Windows 8.1以降（最新の更新プログラムをインストール済み）</li>
          <li>プロセッサー：1.8 GHz以上のCPU</li>
          <li>RAM：4GB以上</li>
          <li>ビデオ：グラフィック出力機能</li>
          <li>サウンド：サウンド出力機能</li>
        </ul>

        <h2>Macの要件</h2>
        <ul>
          <li>プラットフォーム：Mac OS X 10.12以上（最新まで更新をインストール済み）</li>
          <li>プロセッサー：1.8 GHz以上のCPU</li>
          <li>RAM：4GB以上</li>
          <li>ビデオ：グラフィック出力機能</li>
          <li>サウンド：サウンド出力機能</li>
        </ul>

        <p className="note">どのブラウザーを使用しているかわからない場合、お使いのシステムの詳細については、whatismybrowser.comで現在使用中のブラウザーおよびOSを確認できます。コース視聴にはGoogle Chromeの利用を推奨しております。</p>
      </main>
      <footer className="pg-footer">
        <div className="pg-footer__logo"><a href="/biz/"><img src="/biz/assets/img/wp/グループ-16110.svg" alt="バイテックBiz" /></a></div>
        <p>&copy; 2025 バイテックBiz All Rights Reserved.</p>
      </footer>
    </>
  )
}
