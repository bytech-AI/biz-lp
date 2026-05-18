'use client'

export default function RefundPolicyPage() {
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
        .pg-card h2 { font-size: 18px; font-weight: 700; margin: 36px 0 12px; }
        .pg-card p, .pg-card li { font-size: 15px; line-height: 2; }
        .pg-card p { margin-bottom: 16px; }
        .pg-card ul { list-style: disc; padding-left: 1.5em; margin-bottom: 16px; }
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
        <a href="/biz/">TOP</a> <span>&rsaquo; 返金ポリシー</span>
      </nav>
      <div className="pg-hero">
        <h1 className="pg-hero__title">返金ポリシー</h1>
        <p className="pg-hero__subtitle">Refund Policy</p>
        <hr className="pg-hero__line" />
      </div>
      <main className="pg-card">

        <h2>第1条（適用範囲）</h2>
        <p>本ポリシーは、当社が法人のお客様向けに提供する対面・オンライン研修サービスおよび付随するコンテンツに適用されます。</p>

        <h2>第2条（顧客都合によるキャンセル）</h2>
        <ul>
          <li>研修実施日の15営業日前までのご連絡：全額返金</li>
          <li>14〜8営業日前のご連絡：受講料の50%をキャンセル料として徴収し、残額を返金</li>
          <li>7営業日前以降のご連絡・当日不参加：100%をキャンセル料として徴収、返金なし</li>
        </ul>

        <h2>第3条（受講人数の減少）</h2>
        <p>お申込後の受講人数の減少についても、上記第2条のキャンセル規定を適用します。</p>

        <h2>第4条（企業都合による中止・延期）</h2>
        <p>当社の都合で研修を中止した場合は全額返金いたします。延期の場合は、振替日程へのご参加または全額返金のいずれかをお選びいただけます。</p>

        <h2>第5条（オンライン教材・オンデマンド配信）</h2>
        <p>ID・パスワード発行後、または視聴開始後のキャンセル・返金には応じかねます。</p>

        <h2>第6条（返金方法）</h2>
        <p>返金時は所定の手続き完了後、原則としてお振込みにて対応いたします。振込手数料はお客様のご負担となります。</p>
      </main>
      <footer className="pg-footer">
        <div className="pg-footer__logo"><a href="/biz/"><img src="https://bytech.jp/biz/wp-content/uploads/2024/08/グループ-16110.svg" alt="バイテックBiz" /></a></div>
        <p>&copy; 2025 バイテックBiz All Rights Reserved.</p>
      </footer>
    </>
  )
}
