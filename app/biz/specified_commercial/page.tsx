
export default function SpecifiedCommercialPage() {
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
        .pg-table { width: 100%; border-collapse: collapse; }
        .pg-table th, .pg-table td { padding: 16px 20px; font-size: 15px; line-height: 1.8; border-bottom: 1px solid #eee; text-align: left; vertical-align: top; }
        .pg-table th { width: 30%; font-weight: 700; background: #f8f9fb; white-space: nowrap; }
        @media (max-width:768px) { .pg-table th, .pg-table td { display: block; width: 100%; } .pg-table th { border-bottom: none; padding-bottom: 4px; } }
        .pg-footer { background: #1a2e50; color: #fff; text-align: center; padding: 30px 20px; font-size: 13px; }
        .pg-footer a { color: #fff; text-decoration: none; }
        .pg-footer__logo { margin-bottom: 16px; }
        .pg-footer__logo img { height: 24px; }
      ` }} />

      <div className="pg-header-wrap">
        <div className="pg-header__logo"><a href="/biz/"><img src="https://bytech.jp/biz/wp-content/uploads/2024/08/グループ-16110.svg" alt="バイテックBiz" /></a></div>
        <nav className="pg-header__nav">
          <a href="/biz/" className="btn-outline">トップページ</a>
          <a href="/biz/counseling" className="btn-fill">無料個別相談を予約する</a>
        </nav>
      </div>
      <nav className="pg-breadcrumb">
        <a href="/biz/">TOP</a> <span>&rsaquo; 特定商取引法に関する表示</span>
      </nav>
      <div className="pg-hero">
        <h1 className="pg-hero__title">特定商取引法に関する表示</h1>
        <p className="pg-hero__subtitle">Specified Commercial Transaction</p>
        <hr className="pg-hero__line" />
      </div>
      <main className="pg-card">
        <table className="pg-table">
          <tbody>
            <tr><th>事業者の名称</th><td>株式会社 LIBREX</td></tr>
            <tr><th>代表責任者</th><td>塩田 稜</td></tr>
            <tr><th>所在地</th><td>〒150-0021 東京都渋谷区恵比寿西2丁目4番8号ウィンド恵比寿ビル8F</td></tr>
            <tr><th>電話番号</th><td>03-4400-6693</td></tr>
            <tr><th>メールアドレス</th><td>support@bytech.jp</td></tr>
            <tr><th>受付時間</th><td>午前9時〜午後5時（土日祝日を除く）</td></tr>
            <tr><th>販売価格</th><td>研修費用は配布資料に表示</td></tr>
            <tr><th>商品代金以外の必要な代金</th><td>なし</td></tr>
            <tr><th>支払方法</th><td>銀行振込（請求書発行）/ カード決済</td></tr>
            <tr><th>支払時期</th><td>クレジット・デビットカード決済：ご注文確定後、随時処理<br />銀行振込：請求後2週間以内</td></tr>
            <tr><th>提供時期</th><td>支払手続完了後、すぐにご視聴可能</td></tr>
            <tr><th>返金ポリシー</th><td><a href="/biz/refund-policy/">返金ポリシーページ</a>をご確認ください</td></tr>
          </tbody>
        </table>
      </main>
      <footer className="pg-footer">
        <div className="pg-footer__logo"><a href="/biz/"><img src="https://bytech.jp/biz/wp-content/uploads/2024/08/グループ-16110.svg" alt="バイテックBiz" /></a></div>
        <p>&copy; 2025 バイテックBiz All Rights Reserved.</p>
      </footer>
    </>
  )
}
