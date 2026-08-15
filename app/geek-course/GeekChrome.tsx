/* eslint-disable @next/next/no-html-link-for-pages --
   geek は proxy でホスト別に配信しており（geek.bytech.jp/ → /geek）、next/link の
   クライアント遷移だと apex 側の "/" に解決されうる。確実に geek トップへ飛ばすため素の <a> を使う。 */
// geek.bytech.jp の共通ヘッダー/フッター。
// public/geek-static/index.html のマークアップをそのままReactへ移したもの。
// スタイルは geek の既存CSS（common/header/footer）をそのまま読み込んで当てる。

type NavChild = { href: string; label: string; desc: string; thumb: string };
type NavItem = { href: string; ja: string; en: string; external?: boolean; sub?: NavChild[] };

function SubMenuLink({ c }: { c: NavChild }) {
  return (
    <a href={c.href}>
      <span className="header__submenu-thumb">
        <img src={c.thumb} alt="" width={1400} height={863} loading="lazy" decoding="async" />
      </span>
      <span className="header__submenu-body">
        <span className="header__submenu-title">{c.label}</span>
        <span className="header__submenu-desc">{c.desc}</span>
      </span>
    </a>
  );
}

const NAV: NavItem[] = [
  {
    href: "/#course",
    ja: "コース",
    en: "Course",
    sub: [
      {
        href: "/engineer-course",
        label: "Claude Code エンジニアコース",
        desc: "オンライン ／ 履修期間 2〜6ヶ月",
        thumb: "/geek-static/files/course-hero-engineer.webp",
      },
    ],
  },
  { href: "/#price", ja: "料金", en: "Price" },
  { href: "/#results", ja: "受講生実績", en: "Results" },
  { href: "/#voice", ja: "受講生の声", en: "Voice" },
  { href: "/record", ja: "ClaudeCode実録", en: "Record" },
  { href: "/#faq", ja: "よくある質問", en: "FAQ" },
  { href: "/#blog", ja: "記事一覧", en: "Articles" },
];

/** ドロワー開閉と追従ヘッダーの表示切替（geek静的ページと同じ挙動） */
export const GEEK_CHROME_SCRIPT = `(function(){
  var di=document.querySelector('.drawer-icon'),dc=document.querySelector('.drawer-content');
  if(di&&dc){
    di.addEventListener('click',function(){di.classList.toggle('is-active');dc.classList.toggle('is-active');});
    document.querySelectorAll('.drawer-menu a').forEach(function(a){a.addEventListener('click',function(){di.classList.remove('is-active');dc.classList.remove('is-active');});});
  }
  var fixed=document.querySelector('.header__content.fixed'),hdr=document.querySelector('header');
  if(fixed&&hdr){
    function onScroll(){ if(hdr.getBoundingClientRect().top<0){fixed.classList.add('act');}else{fixed.classList.remove('act');} }
    window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  }
})();`;

export function GeekStyles() {
  return (
    <>
      {/* geek静的ページと同じ日本語フォント（サブセット済みの可変Noto Sans JP）。
          これが無いと端末標準フォントにフォールバックし、TOPと字面がズレる。 */}
      <style>{`@font-face{font-family:"Noto Sans JP";src:url(/bytech/fonts/NotoSansJP_VF-s.p.09a7lksm~5qfk.woff2) format("woff2");font-display:swap;font-weight:100 900;font-style:normal;}`}</style>
      {/* 英字見出し用の Outfit（ヘッダーのPROBLEM/COURSE等） */}
      <link rel="stylesheet" href="/geek-static/files/css2(1)" />
      <link rel="stylesheet" href="/geek-static/files/common.css?v=20260815com4" />
      <link rel="stylesheet" href="/geek-static/files/header.css?v=20260815nav" />
      <link rel="stylesheet" href="/geek-static/files/footer.css?v=20260704d" />
    </>
  );
}

/**
 * geekの共通ヘッダー。
 * withFixed=false で追従ヘッダーを出さない（コースLPはページ内ナビが追従するため、
 * 2枚が重なるのを避ける）。
 */
export function GeekHeader({ withFixed = true }: { withFixed?: boolean }) {
  return (
    <header>
      <div className="inner u-inner-full">
        <div className="header__content">
          <div className="header__logo">
            <a href="/">
              <img src="/geek-assets/geek_logo2.svg" alt="バイテックGEEK" style={{ height: 42, width: "auto" }} />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__menu">
              {NAV.map((n) => (
                <li key={n.href} className={n.sub ? "has-sub" : undefined}>
                  <a href={n.href} {...(n.external ? { target: "_blank", rel: "noopener" } : {})}>
                    <span className="header__menu-ja">{n.ja}</span>
                    <span className="header__menu-en">{n.en}</span>
                  </a>
                  {n.sub && (
                    <ul className="header__submenu">
                      {n.sub.map((c) => (
                        <li key={c.href}><SubMenuLink c={c} /></li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="header__reserve">
              <a href="/#counseling">無料カウンセリング予約</a>
            </div>
          </nav>
          {/* drawer-menu */}
          <div className="drawer-icon">
            <div className="drawer-icon__bars">
              <div className="drawer-icon__bar1" />
              <div className="drawer-icon__bar2" />
            </div>
          </div>
          <div className="drawer-content">
            <ul className="drawer-menu">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} {...(n.external ? { target: "_blank", rel: "noopener" } : {})}>{n.ja}</a>
                  {n.sub && (
                    <ul className="drawer-submenu">
                      {n.sub.map((c) => (
                        <li key={c.href}><SubMenuLink c={c} /></li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="drawer__reserve">
              <a href="/#counseling" className="c-btn">無料カウンセリング予約</a>
            </div>
          </div>
        </div>

        {withFixed && (
        <div className="header__content fixed pc">
          <div className="header__logo">
            <a href="/">
              <img src="/geek-assets/geek_logo2.svg" alt="バイテックGEEK" style={{ height: 42, width: "auto" }} />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__menu">
              {NAV.map((n) => (
                <li key={n.href} className={n.sub ? "has-sub" : undefined}>
                  <a href={n.href} {...(n.external ? { target: "_blank", rel: "noopener" } : {})}>
                    <span className="header__menu-ja">{n.ja}</span>
                    <span className="header__menu-en">{n.en}</span>
                  </a>
                  {n.sub && (
                    <ul className="header__submenu">
                      {n.sub.map((c) => (
                        <li key={c.href}><SubMenuLink c={c} /></li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="header__reserve">
              <a href="/#counseling">カウンセリング予約</a>
            </div>
          </nav>
        </div>
        )}
      </div>
    </header>
  );
}

export function GeekFooter() {
  return (
    <footer>
      <div className="inner">
        <div className="footer__content">
          <div className="footer__catch">
            <p className="footer__catch-text">明日から、AI開発が<br />あなたの日常に。</p>
          </div>
          <div className="footer__nav">
            <ul className="footer__menu">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} {...(n.external ? { target: "_blank", rel: "noopener" } : {})}>{n.ja}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__info">
            <div className="foote__logo">
              <img src="/geek-assets/geek_logo_w2.svg" alt="バイテックGEEK" style={{ height: 32, width: "auto" }} />
            </div>
            <p className="footer__copyright"> Copyright 株式会社AI棒</p>
          </div>
          <ul className="footer__submenu">
            <li><a href="/privacy-policy">プライバシーポリシー</a></li>
            <li><a href="/membership-terms">会員規約</a></li>
            <li><a href="/specified_commercial">特定商取引法</a></li>
            <li><a href="https://ai-bou.co.jp" target="_blank" rel="noopener">運営会社</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
