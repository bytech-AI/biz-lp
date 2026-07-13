// お役立ち資料の一覧ページ。資料データは後日差し替えるためプレースホルダー。
// 実データ投入時は DOCUMENTS 配列を差し替え、thumb を実サムネイル画像に置換する。
const DOCUMENTS = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  category: "お役立ち資料",
  title: "資料タイトルが入ります",
  description:
    "資料の概要説明テキストがここに入ります。内容は後日差し替え予定のプレースホルダーです。",
}));

export default function DocumentsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        body { font-family: var(--font-noto-jp), sans-serif; color: #333; background: #f5f7fa url(/biz/assets/img/common/dots.png) repeat; margin: 0; padding: 0; }
        .pg-header-wrap { position: sticky; top: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between; max-width: 1100px; margin: 0 auto; padding: 16px 40px; }
        .pg-header__logo img { height: 28px; filter: brightness(0) saturate(100%) invert(15%) sepia(30%) saturate(1500%) hue-rotate(190deg) brightness(90%); }
        .pg-header__nav { display: flex; gap: 4px; align-items: center; background: rgba(255,255,255,0.6); border: 1px solid rgba(255,255,255,0.7); border-radius: 50px; backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); box-shadow: 0 4px 24px rgba(0,0,0,0.06); padding: 4px; }
        .pg-header__nav a { color: #333; text-decoration: none; font-size: 14px; font-weight: 600; padding: 12px 20px; border-radius: 40px; border: 1px solid transparent; transition: all .3s ease; white-space: nowrap; }
        .pg-header__nav a.btn-outline:hover { background: #f0f2f5; border-color: #fff; }
        .pg-header__nav a.btn-fill { background: linear-gradient(135deg, #1a6fb5, #2a9fd6); color: #fff; border: none; box-shadow: 0 2px 8px rgba(26,111,181,0.3); }
        .pg-header__nav a.btn-fill:hover { opacity: 0.9; }
        .pg-breadcrumb { max-width: 1100px; margin: 30px auto 0; padding: 0 40px; font-size: 13px; }
        .pg-breadcrumb a { color: #2a5a9b; text-decoration: none; }
        .pg-breadcrumb a:hover { text-decoration: underline; }
        .pg-breadcrumb span { color: #666; }
        .pg-hero { max-width: 1100px; margin: 0 auto; padding: 30px 40px 0; }
        .pg-hero__title { font-size: 32px; font-weight: 800; margin: 0 0 8px; }
        .pg-hero__subtitle { font-size: 16px; color: #aaa; font-weight: 400; margin: 0 0 20px; font-family: "Futura", "Futura Medium", sans-serif; }
        .pg-hero__line { border: none; border-top: 1px solid #ddd; margin: 0; }
        .pg-list { max-width: 1100px; margin: 30px auto; padding: 0 40px 60px; }
        .pg-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
        .doc-card { background: #fff; border-radius: 14px; overflow: hidden; box-shadow: 0 6px 24px rgba(0,0,0,0.06); display: flex; flex-direction: column; transition: transform .25s ease, box-shadow .25s ease; }
        .doc-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.1); }
        .doc-card__thumb { aspect-ratio: 4/3; background: linear-gradient(135deg, #eaf1f8, #dbe7f3); display: flex; align-items: center; justify-content: center; color: #9db8d2; font-size: 13px; font-weight: 700; letter-spacing: .06em; }
        .doc-card__body { padding: 18px 20px 22px; display: flex; flex-direction: column; flex: 1; }
        .doc-card__cat { display: inline-block; align-self: flex-start; background: #eaf3fb; color: #1a6fb5; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 20px; margin-bottom: 10px; }
        .doc-card__title { font-size: 16px; font-weight: 700; line-height: 1.5; margin: 0 0 8px; }
        .doc-card__desc { font-size: 13px; color: #666; line-height: 1.7; margin: 0 0 16px; flex: 1; }
        .doc-card__btn { display: block; text-align: center; background: linear-gradient(135deg, #1a6fb5, #2a9fd6); color: #fff; font-size: 14px; font-weight: 700; padding: 12px; border-radius: 8px; text-decoration: none; transition: opacity .3s ease; }
        .doc-card__btn:hover { opacity: .9; }
        .pg-empty { grid-column: 1 / -1; text-align: center; color: #999; padding: 40px 0; }
        .pg-footer { background: #1a2e50; color: #fff; text-align: center; padding: 30px 20px; font-size: 13px; }
        .pg-footer a { color: #fff; text-decoration: none; }
        .pg-footer__logo { margin-bottom: 16px; }
        .pg-footer__logo img { height: 24px; }
        @media (max-width: 900px) { .pg-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .pg-grid { grid-template-columns: 1fr; gap: 20px; } .pg-hero, .pg-list, .pg-breadcrumb { padding-left: 20px; padding-right: 20px; } .pg-header-wrap { padding: 12px 16px; } }
      ` }} />

      <div className="pg-header-wrap">
        <div className="pg-header__logo"><a href="/"><img src="/biz/assets/img/wp/グループ-16110.svg" alt="バイテックBiz" /></a></div>
        <nav className="pg-header__nav">
          <a href="/" className="btn-outline">トップページ</a>
          <a href="/counseling" className="btn-fill">無料個別相談を予約する</a>
        </nav>
      </div>
      <nav className="pg-breadcrumb">
        <a href="/">TOP</a> <span>&rsaquo; お役立ち資料</span>
      </nav>
      <div className="pg-hero">
        <h1 className="pg-hero__title">お役立ち資料</h1>
        <p className="pg-hero__subtitle">Documents</p>
        <hr className="pg-hero__line" />
      </div>
      <main className="pg-list">
        <div className="pg-grid">
          {DOCUMENTS.map((d) => (
            <article className="doc-card" key={d.id}>
              <div className="doc-card__thumb">NO IMAGE</div>
              <div className="doc-card__body">
                <span className="doc-card__cat">{d.category}</span>
                <h2 className="doc-card__title">{d.title}</h2>
                <p className="doc-card__desc">{d.description}</p>
                <a className="doc-card__btn" href="/doc-a">ダウンロードする</a>
              </div>
            </article>
          ))}
        </div>
      </main>
      <footer className="pg-footer">
        <div className="pg-footer__logo"><a href="/"><img src="/biz/assets/img/wp/グループ-16110.svg" alt="バイテックBiz" /></a></div>
        <p>&copy; 2025 株式会社AI棒 All Rights Reserved.</p>
      </footer>
    </>
  );
}
