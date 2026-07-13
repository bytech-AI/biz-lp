// セミナー動画アーカイブの一覧ページ。動画データは後日差し替えるためプレースホルダー。
// 実データ投入時は VIDEOS 配列を差し替え、thumb を実サムネイル画像・href を視聴URLに置換する。
const VIDEOS = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  date: "2026.00.00",
  tag: "セミナー",
  title: "セミナータイトルが入ります",
  description:
    "セミナー動画の概要説明テキストがここに入ります。内容は後日差し替え予定のプレースホルダーです。",
}));

export default function ArchivePage() {
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
        .vid-card { background: #fff; border-radius: 14px; overflow: hidden; box-shadow: 0 6px 24px rgba(0,0,0,0.06); display: flex; flex-direction: column; transition: transform .25s ease, box-shadow .25s ease; }
        .vid-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.1); }
        .vid-card__thumb { position: relative; aspect-ratio: 16/9; background: linear-gradient(135deg, #223a5e, #16233b); display: flex; align-items: center; justify-content: center; }
        .vid-card__play { width: 54px; height: 54px; border-radius: 50%; background: rgba(255,255,255,0.92); display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 14px rgba(0,0,0,0.25); }
        .vid-card__play::before { content: ""; display: block; width: 0; height: 0; border-style: solid; border-width: 9px 0 9px 15px; border-color: transparent transparent transparent #1a6fb5; margin-left: 3px; }
        .vid-card__dur { position: absolute; right: 10px; bottom: 10px; background: rgba(0,0,0,0.7); color: #fff; font-size: 11px; font-weight: 600; padding: 2px 7px; border-radius: 4px; }
        .vid-card__body { padding: 16px 20px 20px; display: flex; flex-direction: column; flex: 1; }
        .vid-card__meta { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
        .vid-card__tag { background: #eaf3fb; color: #1a6fb5; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 20px; }
        .vid-card__date { font-size: 12px; color: #999; font-family: "Futura","Futura Medium",sans-serif; }
        .vid-card__title { font-size: 16px; font-weight: 700; line-height: 1.5; margin: 0 0 8px; }
        .vid-card__desc { font-size: 13px; color: #666; line-height: 1.7; margin: 0 0 16px; flex: 1; }
        .vid-card__btn { display: block; text-align: center; background: linear-gradient(135deg, #1a6fb5, #2a9fd6); color: #fff; font-size: 14px; font-weight: 700; padding: 12px; border-radius: 8px; text-decoration: none; transition: opacity .3s ease; }
        .vid-card__btn:hover { opacity: .9; }
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
        <a href="/">TOP</a> <span>&rsaquo; セミナーアーカイブ</span>
      </nav>
      <div className="pg-hero">
        <h1 className="pg-hero__title">セミナーアーカイブ</h1>
        <p className="pg-hero__subtitle">Archive</p>
        <hr className="pg-hero__line" />
      </div>
      <main className="pg-list">
        <div className="pg-grid">
          {VIDEOS.map((v) => (
            <article className="vid-card" key={v.id}>
              <div className="vid-card__thumb">
                <span className="vid-card__play" aria-hidden="true"></span>
                <span className="vid-card__dur">00:00</span>
              </div>
              <div className="vid-card__body">
                <div className="vid-card__meta">
                  <span className="vid-card__tag">{v.tag}</span>
                  <span className="vid-card__date">{v.date}</span>
                </div>
                <h2 className="vid-card__title">{v.title}</h2>
                <p className="vid-card__desc">{v.description}</p>
                <a className="vid-card__btn" href="/counseling">視聴する</a>
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
