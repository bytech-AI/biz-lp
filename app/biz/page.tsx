export default function BizPage() {
  return (
    <>
      {/* <picture>はAVIFを優先表示するため、プリロードもAVIFに一致させる
          （WebPプリロードだと使われず無駄になり、実際に使うAVIFが非優先で遅延しLCP悪化していた） */}
      <link
        rel="preload"
        as="image"
        type="image/avif"
        href="/biz/assets/img/index/biz_fv-768.avif"
        imageSrcSet="/biz/assets/img/index/biz_fv-480.avif 480w, /biz/assets/img/index/biz_fv-768.avif 768w, /biz/assets/img/index/biz_fv-1280.avif 1280w"
        imageSizes="100vw"
        fetchPriority="high"
      />
      <link rel="stylesheet" href="/biz/assets/css/style.css" />
      {/* Below-the-fold stylesheets: load async via media="print" → swap to "all" on load */}
      <link rel="stylesheet" href="/biz/assets/css/endless-river.css" media="print" data-async-css="1" />
      <link rel="stylesheet" href="/biz/assets/slick/slick.css" media="print" data-async-css="1" />
      <link rel="stylesheet" href="/biz/assets/slick/slick-theme.css" media="print" data-async-css="1" />
      <script dangerouslySetInnerHTML={{ __html: `
        document.querySelectorAll('link[data-async-css]').forEach(function(l){
          l.addEventListener('load', function(){ l.media = 'all'; }, { once: true });
          if (l.sheet) l.media = 'all';
        });
      ` }} />
      <style dangerouslySetInnerHTML={{ __html: `
        /* Show above-the-fold hero immediately — bypass fadein JS dependency for LCP */
        .hero .fadein {
          opacity: 1 !important;
          transform: none !important;
          transition: none !important;
        }
        /* === AIR Design-style sticky right-side download form === */
        @media (min-width: 1081px) {
          /* Constrain sticky header so it never sits under the right rail */
          .top-header-wrap {
            left: 0 !important;
            right: 320px !important;
            transform: none !important;
            max-width: none !important;
            width: auto !important;
          }
          /* Center hero text/CTA within the visible (non-rail) area */
          .hero__catch {
            width: 100% !important;
            justify-content: center !important;
            text-align: center !important;
          }
          .hero__form { display: none !important; }
          /* Reserve space for the fixed rail and shift body content left */
          body { padding-right: 320px; }
          .right-form-fixed {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            width: 320px;
            background: #fff;
            box-shadow: 0 -20px 15px 0 rgb(0 0 0 / 10%);
            overflow-y: auto;
            scrollbar-width: thin;
            z-index: 100;
            box-sizing: border-box;
            white-space: nowrap;
          }
          .right-form-fixed::-webkit-scrollbar { width: 6px; }
          .right-form-fixed::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.15); border-radius: 3px; }
          /* Footer keeps its full width but stays under the rail */
          .footer { margin-right: -320px; position: relative; z-index: 1; }
          .top-header-wrap { z-index: 1000 !important; }
          .right-form-fixed .fv_form {
            padding: 24px 14px 80px 14px;
          }
          .right-form-fixed .form_header {
            display: flex;
            align-items: center;
            gap: 10px;
            margin: 0 0 16px;
          }
          .right-form-fixed .form_header__text { flex: 1; min-width: 0; }
          .right-form-fixed .form_eyebrow {
            color: #D4215F;
            font-size: 12px;
            font-weight: 700;
            text-align: left;
            margin: 0 0 4px;
            white-space: nowrap;
            letter-spacing: 0.02em;
            line-height: 1.3;
          }
          .right-form-fixed .form_title {
            color: #323232;
            font-size: 22px;
            text-align: left;
            margin: 0;
            padding-top: 0;
            white-space: nowrap;
            font-weight: 800;
            line-height: 1.25;
          }
          .right-form-fixed .form_cover {
            display: block;
            width: 95px;
            height: auto;
            flex-shrink: 0;
            border-radius: 2px;
            box-shadow: none;
            background: transparent;
          }
          .right-form-fixed .formrun-embed {
            white-space: normal;
            min-width: 0;
            border: 0 !important;
            box-shadow: none !important;
            background: transparent !important;
          }
          .right-form-fixed .formrun-embed > div,
          .right-form-fixed .formrun-embed iframe,
          .right-form-fixed .formrun-embed form {
            border: 0 !important;
            box-shadow: none !important;
            background: transparent !important;
          }
        }
        @media (max-width: 1080px) {
          .right-form-fixed { display: none; }
        }
        /* 研修コースのeラーニング/オンライン研修見出し帯の角丸を無くす
           （外部style.cssはimmutableキャッシュで即時反映されないためインラインで上書き） */
        .index_course__section-title { border-radius: 0 !important; }
      ` }} />

      <div className="top-header-wrap">
        <div className="top-header__logo">
          <a href="index.html"><img loading="lazy" src="/biz/assets/img/common/hd-logo.svg" alt="バイテックBiz" id="top-logo" data-white="/biz/assets/img/common/hd-logo.svg" data-dark="/biz/assets/img/common/hd-logo-dark.svg" /></a>
        </div>
        <button className="top-header__hamburger" aria-label="メニューを開く">
          <span></span><span></span><span></span>
        </button>
        <div className="top-header__overlay"></div>
        <nav className="top-header__nav">
          <a href="index.html" className="top-nav-link">バイテックBizとは</a>
          <a href="#feature" className="top-nav-link">3つの特徴</a>
          <a href="#courses" className="top-nav-link">導入事例</a>
          <a href="#faq" className="top-nav-link">よくある質問</a>
          <a href="/biz/doc-a" className="btn-outline">資料をダウンロード</a>
          <a href="/biz/counseling" className="btn-fill">無料個別相談を予約する</a>
        </nav>
      </div>

      <main className="main">
        <section className="hero" id="hero">
          <div className="hero__l-main-img__img">
            <picture>
              <source
                type="image/avif"
                srcSet="/biz/assets/img/index/biz_fv-480.avif 480w, /biz/assets/img/index/biz_fv-768.avif 768w, /biz/assets/img/index/biz_fv-1280.avif 1280w"
                sizes="(min-width: 768px) 100vw, 100vw"
              />
              <source
                type="image/webp"
                srcSet="/biz/assets/img/index/biz_fv-480.webp 480w, /biz/assets/img/index/biz_fv-768.webp 768w, /biz/assets/img/index/biz_fv-1280.webp 1280w"
                sizes="(min-width: 768px) 100vw, 100vw"
              />
              <img
                src="/biz/assets/img/index/biz_fv-768.webp"
                alt=""
                decoding="async"
                loading="eager"
                fetchPriority="high"
                width={1280}
                height={720}
              />
            </picture>
          </div>
          <div className="hero__catch">
            <div>
              <p className="txt typesquare_option fadein">AI活用<span>が</span>現場の当たり前<span>になる</span></p>
              <h1 className="hero__ttl font-jp fadein">
                <span className="hero_txt01">成果直結のハンズオン型</span>
                <span className="hero_txt02">生成AI研修</span>
              </h1>
              <div className="hero__label__logo fadein delay-time02">
                <picture>
                  <source type="image/webp" srcSet="/biz/assets/img/index/hero_lavel_mdl.webp" />
                  <img decoding="async" loading="lazy" src="/biz/assets/img/index/hero_lavel_mdl.png" alt="" />
                </picture>
              </div>
              <div className="hero__cta fadein delay-time03">
                <a href="./download" className="hero__cta-btn hero__cta-btn--outline">
                  <span className="hero__cta-btn__label">まずは資料をダウンロード</span>
                  <span className="hero__cta-btn__main">資料をダウンロードする</span>
                </a>
                <a href="/biz/counseling" className="hero__cta-btn hero__cta-btn--fill">
                  <span className="hero__cta-btn__label">まずは話を聞いてみたい</span>
                  <span className="hero__cta-btn__main">無料相談を予約する</span>
                </a>
              </div>
              <p className="hero__element__txt fadein delay-time03">
                ※1 2025年1月20日から2025年11月20日の間にバイテック受講者へのアンケート調査を元に当社作成。<br />
                ※2 2025年1月から2025年11月の受講生のデータを元に当社作成。
              </p>
            </div>
          </div>
          <div className="hero__deco-pc section-ttl sp-none">
            <div className="maskTxt fadein delay-time05">
              <span className="font_en ttl_en1">
                <img loading="lazy" src="/biz/assets/img/txt-hero_logo.svg" alt="" />
              </span>
            </div>
          </div>
        </section>

        <section className="index_about">
          <div className="index_about__inner u-inner">
            <div className="index_about__box">
              <div className="index_about__desc">
                <p className="index_about__logo fadein">
                  <span className="index_about__head__sub"><img loading="lazy" src="/biz/assets/img/index/index_about_logo_img.svg" alt="" /></span>
                  <span className="index_about__head__main">とは？</span>
                </p>
                <h2 className="index_about__title">最短で学びを成果に変える<br /><span className="mark_b">企業向け生成AI研修</span></h2>
                <p className="index_about__txt">社内・チームの生成AI導入の促進と結果を出すためのカリキュラムとサポートチームを提供</p>
              </div>
              <div className="index_about__img">
                <img loading="lazy" src="/biz/assets/img/index/img_about_r.svg" alt="" />
              </div>
            </div>
            <div className="index_about__feature__box">
              <ul className="index_about__feature__box_item">
                <li className="index_about__feature__box_item__list fadein delay-time02">
                  <h3 className="content_ttl">社内の業務効率化を狙う</h3>
                  <p className="content_txt">9割の方が初心者から生成AIを駆使して業務の遂行ができるようになります。</p>
                  <div className="content_box">
                    <div className="content_box_item">
                      <span className="sub">今まで人が行っていた<br />バックオフィス業務</span>
                      <span className="num font-en">90</span>
                      <span className="perc font-en">%</span>
                      <span className="sub2">削減</span>
                    </div>
                    <p className="repo">※2025年5月時点 / 自社調べ</p>
                  </div>
                </li>
                <li className="index_about__feature__box_item__list fadein delay-time03">
                  <h3 className="content_ttl">生成AIを利益に直結させる</h3>
                  <p className="content_txt">単なる業務の効率化だけでなく数字にもインパクトを出すための研修を行います。</p>
                  <div className="content_box">
                    <div className="content_box_item">
                      <span className="sub">従業員<br />1人あたり収益</span>
                      <span className="num font-en">218</span>
                      <span className="perc font-en">%</span>
                      <span className="sub2">増加</span>
                    </div>
                    <p className="repo">※2025年5月時点 / 自社調べ</p>
                  </div>
                </li>
                <li className="index_about__feature__box_item__list fadein delay-time04">
                  <h3 className="content_ttl">他者との差別化を図る</h3>
                  <p className="content_txt">まだ遅くない、AI駆動での事業推進が組織で実現できる研修サポートを実施します。</p>
                  <div className="content_box">
                    <div className="content_box_item">
                      <span className="sub">新規事業の<br />開発スピード</span>
                      <span className="num font-en">40</span>
                      <span className="perc font-en">%</span>
                      <span className="sub2">削減</span>
                    </div>
                    <p className="repo">※2025年5月時点 / 自社調べ</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="index_compare">
          <div className="index_compare__inner u-inner">
            <h2 className="index_compare__title fadein">
              <span className="index_compare__title--sub">バイテックBizでは</span>
              ＼このような課題を<br className="sp-only" />解決しています！／
            </h2>
            <div className="index_compare__wrap">
              {/* BEFORE */}
              <div className="index_compare__box index_compare__box--before fadein">
                <h3 className="index_compare__heading font-en">BEFORE</h3>
                <ul className="index_compare__list">
                  <li>一部の人間しかAIを使えてない状態</li>
                  <li>単純な業務効率化までしか実施できていない</li>
                  <li>深い業務課題に対しての活用方法が分からない</li>
                </ul>
              </div>
              {/* Arrow */}
              <div className="index_compare__arrow">
                <span className="index_compare__icon">≫</span>
                <span className="index_compare__icon">≫</span>
                <span className="index_compare__icon">≫</span>
              </div>
              {/* AFTER */}
              <div className="index_compare__box index_compare__box--after fadein">
                <h3 className="index_compare__heading font-en">AFTER</h3>
                <ul className="index_compare__list bg-b">
                  <li>組織、チーム全体で<strong>業務に生成AIを活用</strong></li>
                  <li>AIを活用した<strong>ワークフローの自動化も実現</strong></li>
                  <li><strong>MCP連携</strong>でツール横断の業務効率化</li>
                </ul>
              </div>
            </div>
            <h3 className="index_compare__title ttl-h3 fadein">
              <span className="index_compare__title--sub">サービス利用後に</span>
              できるようになること
            </h3>

            <style dangerouslySetInnerHTML={{ __html: `
              .index_compare__slider .slick-prev,
              .index_compare__slider .slick-next {
                z-index: 2;
                width: 44px;
                height: 44px;
              }
              .index_compare__slider .slick-prev:before,
              .index_compare__slider .slick-next:before {
                font-size: 40px;
                color: #2e599b;
                opacity: 1;
              }
              .index_compare__slider .slick-prev:hover:before,
              .index_compare__slider .slick-next:hover:before { opacity: 0.7; }
              .index_compare__slider .slick-prev { left: 15px; }
              .index_compare__slider .slick-next { right: 15px; }
              @media (max-width: 768px) {
                .index_compare__slider .slick-prev,
                .index_compare__slider .slick-next { display: none !important; }
              }
            ` }} />
            <div className="index_compare__slider">
              <ul className="index_compare__slider__list">
                <li className="index_compare__slider__list__item"><img loading="lazy" src="/biz/assets/img/index/img_index_compare_s01.png" alt="" /></li>
                <li className="index_compare__slider__list__item"><img loading="lazy" src="/biz/assets/img/index/img_index_compare_s02.png" alt="" /></li>
                <li className="index_compare__slider__list__item"><img loading="lazy" src="/biz/assets/img/index/img_index_compare_s03.png" alt="" /></li>
                <li className="index_compare__slider__list__item"><img loading="lazy" src="/biz/assets/img/index/img_index_compare_s04.png" alt="" /></li>
                <li className="index_compare__slider__list__item"><img loading="lazy" src="/biz/assets/img/index/img_index_compare_s05.png" alt="" /></li>
                <li className="index_compare__slider__list__item"><img loading="lazy" src="/biz/assets/img/index/img_index_compare_s06.png" alt="" /></li>
                <li className="index_compare__slider__list__item"><img loading="lazy" src="/biz/assets/img/index/img_index_compare_s07.png" alt="" /></li>
                <li className="index_compare__slider__list__item"><img loading="lazy" src="/biz/assets/img/index/img_index_compare_s09.png" alt="" /></li>
                <li className="index_compare__slider__list__item"><img loading="lazy" src="/biz/assets/img/index/img_index_compare_s10.png" alt="" /></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="index_solution">
          <div className="index_solution__inner u-inner">
            <div className="index_solution__lead">
              <span className="index_solution__small fadein">組織やチームで…</span>
              <h2 className="index_solution__title fadein delay-time02">
                なんとなく <span>生成AI</span>を<br className="sp-only" /><span>使わせて</span>いませんか？
              </h2>
            </div>
            <div className="index_solution__visual">
              <img loading="lazy" src="/biz/assets/img/index/img_index_soltion_bg.jpg" alt="" className="index_solution__bg" />
              <div className="index_solution__icons">
                <div className="index_solution__icon fadein delay-time03">
                  <p>AI研修を<br />受けさせた</p>
                  <img loading="lazy" src="/biz/assets/img/index/icon_help.svg" alt="" className="index_solution__icon-svg" />
                </div>
                <div className="index_solution__icon fadein delay-time04">
                  <p>無料のAI<br />セミナーを受講</p>
                  <img loading="lazy" src="/biz/assets/img/index/icon_meeting.svg" alt="" className="index_solution__icon-svg" />
                </div>
                <div className="index_solution__icon fadein delay-time05">
                  <p>ひとまず<br />部署にAIを導入</p>
                  <img loading="lazy" src="/biz/assets/img/index/icon_group.svg" alt="" className="index_solution__icon-svg" />
                </div>
              </div>
              <div className="index_solution__text">
                <p className="index_solution__main">業務への応用が分からない</p>
                <p className="index_solution__sub">ほとんどの企業、組織がこの状態に陥っています。</p>
              </div>
            </div>
            <div className="index_solution__reason">
              <span className="index_solution__reason-badge fadein delay-time06">その<br />理由は</span>
              <p className="index_solution__reason-text fadein delay-time07">
                ゴールや課題から逆算した<br />
                <strong>{'『AIの組み合わせと活用法を知らないから』'}</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="index_solution-hero">
          <div className="index_solution-hero__bg"></div>
          <div className="index_solution-hero__inner u-inner">
            <p className="index_solution-hero__lead-sm">貴社に今必要なのは</p>
            <h2 className="index_solution-hero__title">
              <span className="index_solution-hero__tag">自社の課題に最適化した</span><br />
              <span className="index_solution-hero__tag">組織でのAI活用力</span>
            </h2>
            <div className="index_solution-hero__img">
              <img loading="lazy" src="/biz/assets/img/index/img_index_solution-hero_bg.jpg" alt="AIを活用する組織のイメージ" />
            </div>
            <p className="index_solution-hero__lead">
              AI駆動でクリティカルな課題解決ができる組織作りを目指せる生成AI研修
            </p>
            <div className="index_solution-hero__logo">
              <img loading="lazy" src="/biz/assets/img/common/hd-logo.svg" alt="Bytech Biz" />
            </div>
          </div>
        </section>

        <section className="cta-double">
          <div className="cta-double__inner u-inner">
            <h2 className="cta-double__title fadein">社内のAI導入で確実に<br />成果を出すならバイテックBiz</h2>

            <div className="cta-double__wrap">
              {/* Box Left */}
              <div className="cta-card fadein delay-time02">
                <p className="cta-card__label">まずは資料をダウンロード</p>
                <div className="cta-card__body">
                  <div className="cta-card__media l-img">
                    <img loading="lazy" src="/biz/assets/img/index/index_cta_l_img.png" alt="" />
                  </div>
                  <div className="cta-card__cta">
                    <p className="cta-card__text">これでバイテックBizがまる分かり</p>
                    <a href="/biz/doc-a" className="c-btn c-btn--outline">資料をダウンロードする</a>
                  </div>
                </div>
              </div>

              {/* Box Right */}
              <div className="cta-card fadein delay-time04">
                <p className="cta-card__label cta-card__label--blue">まずは話を聞いてみたい</p>
                <div className="cta-card__body">
                  <div className="cta-card__media">
                    <img loading="lazy" src="/biz/assets/img/index/cta_image.svg" alt="" />
                  </div>
                  <div className="cta-card__cta">
                    <p className="cta-card__text">AI活用でのお困り事、ご相談ください</p>
                    <a href="/biz/counseling" className="c-btn c-btn--fill">無料相談を予約する</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <style dangerouslySetInnerHTML={{ __html: `
          /* === /biz 研修タイプ section (WP biz-static 刷新) === */
          .biz-plan .index_plan__inner {
            max-width: 1320px;
            padding-left: 24px;
            padding-right: 24px;
          }
          .biz-plan .index_plan__cards {
            grid-template-columns: repeat(4, 1fr);
            /* !important で旧style.cssのモバイル用 gap:0 を打ち消す */
            gap: 14px !important;
            align-items: stretch;
          }
          @media (max-width: 1100px) {
            .biz-plan .index_plan__cards { grid-template-columns: 1fr 1fr; }
          }
          @media (max-width: 680px) {
            .biz-plan .index_plan__cards { grid-template-columns: 1fr; }
          }
          .biz-plan .index_plan__card {
            /* !important で旧style.cssのモバイル用カルーセル規則(.index_plan__card{display:none})を打ち消す */
            display: flex !important;
            flex-direction: column;
            border: 2px solid #2e6dc4;
            border-radius: 6px;
            padding: 0 0 24px;
            overflow: hidden;
            box-shadow: 0 0 10px -4px rgba(0, 0, 0, 0.5);
          }
          .biz-plan .index_plan__card-title {
            background: #2e6dc4;
            border-radius: 0;
            margin: 0 0 0;
            padding: 14px 16px;
            font-size: 1.8rem;
            letter-spacing: 0.06em;
          }
          .biz-plan .index_plan__card-img {
            margin: 0;
            border-radius: 0;
          }
          .biz-plan .index_plan__card-img img { aspect-ratio: 1024 / 450; object-fit: cover; }
          .biz-plan .index_plan__card-body { padding: 22px 22px 0; display: flex; flex-direction: column; flex: 1; }
          .biz-plan .index_plan__card-desc {
            font-size: 1.4rem;
            line-height: 1.75;
            margin-bottom: 18px;
          }
          .biz-plan .index_plan__spec {
            list-style: none;
            padding: 0;
            margin: 0 0 18px;
          }
          .biz-plan .index_plan__spec li {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            padding: 10px 0;
            border-bottom: 1px solid rgba(46, 109, 196, 0.45);
          }
          .biz-plan .index_plan__spec-key {
            font-size: 1.3rem;
            font-weight: 600;
            color: #000;
            white-space: nowrap;
          }
          .biz-plan .index_plan__spec-val {
            font-size: 1.5rem;
            font-weight: 800;
            color: #333;
            text-align: center;
          }
          .biz-plan .index_plan__spec-val .index_plan__price {
            font-size: 2.2rem;
            color: #333;
            font-family: inherit;
          }
          .biz-plan .index_plan__spec-val .yen { font-size: 0.65em; font-weight: 800; margin-left: 2px; }
          .biz-plan .index_plan__spec-val .per { font-size: 0.6em; font-weight: 700; margin-left: 2px; }
          .biz-plan .index_plan__subsidy {
            background: #2e6dc4;
            border-radius: 6px;
            padding: 10px 14px;
            margin-bottom: 0;
          }
          .biz-plan .index_plan__subsidy-label {
            color: #fff;
            text-align: center;
            font-size: 1.6rem;
            font-weight: 700;
            margin-bottom: 8px;
          }
          .biz-plan .index_plan__subsidy-text {
            color: #333;
            font-size: 1.4rem;
            font-weight: 700;
            line-height: 1.5;
          }
          .biz-plan .index_plan__recommend {
            background: #2e6dc4;
            border-radius: 4px;
            padding: 14px;
            margin-top: auto;
          }
          .biz-plan .index_plan__recommend-label {
            color: #fff;
            text-align: center;
            font-size: 1.6rem;
            font-weight: 700;
            margin-bottom: 12px;
          }
          .biz-plan .index_plan__recommend ul {
            list-style: none;
            padding: 4px 2px 0;
            background: transparent;
          }
          .biz-plan .index_plan__recommend ul li {
            position: relative;
            padding-left: 28px;
            font-size: 1.35rem;
            line-height: 1.6;
            font-weight: 500;
            color: #fff;
            margin-bottom: 12px;
          }
          .biz-plan .index_plan__recommend ul li:last-child { margin-bottom: 0; }
          .biz-plan .index_plan__recommend ul li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 3px;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            border: 2px solid #fff;
            box-sizing: border-box;
          }
          .biz-plan .index_plan__recommend ul li::after {
            content: "";
            position: absolute;
            left: 6px;
            top: 6px;
            width: 5px;
            height: 9px;
            border: solid #fff;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
            box-sizing: border-box;
          }
        ` }} />

        <section className="index_plan biz-plan" id="plan">
          <div className="index_plan__inner u-inner">
            <h2 className="index_plan__title fadein"><em>バイテックBizの研修タイプ</em></h2>
            <p className="index_plan__desc fadein delay-time03">バイテックBizの法人向けAI研修では、企業様の抱えられている課題に合わせて、4タイプの研修形式を用意しております。</p>

            <div className="index_plan__cards">
              {/* eラーニング形式 */}
              <div className="index_plan__card fadein delay-time04">
                <h4 className="index_plan__card-title">eラーニング形式</h4>
                <div className="index_plan__card-img">
                  <img loading="lazy" src="/biz/assets/img/index/plan_elearning.webp" alt="eラーニング形式" />
                </div>
                <div className="index_plan__card-body">
                  <p className="index_plan__card-desc">オンデマンド方式の動画コンテンツを通じて、各職種で即戦力となるデジタル人材を育成します。</p>
                  <ul className="index_plan__spec">
                    <li><span className="index_plan__spec-key">実施方法</span><span className="index_plan__spec-val">専用LMSを使った学習<br />(オンライン)</span></li>
                  </ul>
                  <div className="index_plan__recommend">
                    <p className="index_plan__recommend-label">こんな企業におすすめ</p>
                    <ul>
                      <li>新入社員・若手社員のデジタルスキルをスピーディーに底上げしたい</li>
                      <li>時間・場所の制約を受けずに、全社員へ均一な学習機会を提供したい</li>
                      <li>拠点や部署が分散しており、対面研修の実施コストを抑えたい</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 講座形式 */}
              <div className="index_plan__card fadein delay-time05">
                <h4 className="index_plan__card-title">講座形式</h4>
                <div className="index_plan__card-img">
                  <img loading="lazy" src="/biz/assets/img/index/plan_lecture.webp" alt="講座形式" />
                </div>
                <div className="index_plan__card-body">
                  <p className="index_plan__card-desc">専門講師によるリアルタイム講義で、短期間で全社・部門でのAI活用スキルを底上げします。</p>
                  <ul className="index_plan__spec">
                    <li><span className="index_plan__spec-key">実施方法</span><span className="index_plan__spec-val">リアルタイムでの講座学習<br />(オンライン/オフライン)</span></li>
                  </ul>
                  <div className="index_plan__recommend">
                    <p className="index_plan__recommend-label">こんな企業におすすめ</p>
                    <ul>
                      <li>専門講師から体系的にインプットさせ、社内の知識レベルを揃えたい</li>
                      <li>質疑応答を通じて、自己学習だけでは解消しにくい疑問まで解決させたい</li>
                      <li>部署横断で同じカリキュラムを受講させ、全社のAIリテラシーを引き上げたい</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* ワークショップ形式 */}
              <div className="index_plan__card fadein delay-time06">
                <h4 className="index_plan__card-title">ワークショップ形式</h4>
                <div className="index_plan__card-img">
                  <img loading="lazy" src="/biz/assets/img/index/plan_workshop.webp" alt="ワークショップ形式" />
                </div>
                <div className="index_plan__card-body">
                  <p className="index_plan__card-desc">グループ演習と双方向ディスカッションを通じて、各職種で即戦力となるAI人材を育成します。</p>
                  <ul className="index_plan__spec">
                    <li><span className="index_plan__spec-key">実施方法</span><span className="index_plan__spec-val">グループ双方向型<br />(オンライン/オフライン)</span></li>
                  </ul>
                  <div className="index_plan__recommend">
                    <p className="index_plan__recommend-label">こんな企業におすすめ</p>
                    <ul>
                      <li>学んだ知識を「自社業務にどう使うか」まで落とし込ませたい</li>
                      <li>部門・チーム単位で議論しながら、AI活用のユースケースを発掘したい</li>
                      <li>受け身ではなく、手を動かしながら定着させる実践型研修を導入したい</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* ハンズオン形式 */}
              <div className="index_plan__card fadein delay-time06">
                <h4 className="index_plan__card-title">ハンズオン形式</h4>
                <div className="index_plan__card-img">
                  <img loading="lazy" src="/biz/assets/img/index/plan_handson.webp" alt="ハンズオン形式" />
                </div>
                <div className="index_plan__card-body">
                  <p className="index_plan__card-desc">専任講師のサポートを通じて、最短で効率化から自動化までのAI活用スキルを身に付けます。</p>
                  <ul className="index_plan__spec">
                    <li><span className="index_plan__spec-key">実施方法</span><span className="index_plan__spec-val">1on1でのマンツーマン<br />(オンライン)</span></li>
                  </ul>
                  <div className="index_plan__recommend">
                    <p className="index_plan__recommend-label">こんな企業におすすめ</p>
                    <ul>
                      <li>経営層・管理職など、個別の業務に直結したAI活用支援を受けたい</li>
                      <li>自社の機密情報や独自業務に踏み込んだ、オーダーメイドの伴走を求めている</li>
                      <li>AI活用推進のリーダーや内製化担当を、短期間で育成したい</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="index_course" id="course">
          <div className="index_course__inner">
            <p className="index_course__eyebrow font-en fadein">COURSE</p>
            <h2 className="index_course__heading fadein delay-time02">バイテックBizの研修コース</h2>
            <div className="index_course__tabs fadein delay-time03">
              <button className="index_course__tab active" data-tab="handson">AI活用ハンズオン研修</button>
              <button className="index_course__tab" data-tab="creative">AI業務自動化研修【クリエイティブ】</button>
              <button className="index_course__tab" data-tab="nocode">AI業務自動化研修【ノーコード開発】</button>
            </div>

            {/* AI活用ハンズオン研修 */}
            <div className="index_course__panel active" id="panel-handson">
              <div className="index_course__content">
                <h3 className="index_course__title">AI活用ハンズオン研修</h3>
                <p className="index_course__desc">本研修は、生成AIを業務で使いこなしたいビジネスパーソンを対象に、基本操作から高度な活用まで体系的に習得するプログラムです。</p>
                <p className="index_course__desc">主要な生成AIツールの特性や使い分けの理解から始まり、文章生成・要約・情報整理・複雑な思考支援といったAIの強みを活かした実務活用を実践的に学びます。業務別のプロンプト設計、ドキュメント分析・要約・レポート生成、情報収集やアイデア出しの効率化など、現場で即戦力となるスキルを習得します。</p>
                <p className="index_course__desc">あわせて、AIと協働しながら業務自動化や簡易なツール開発に取り組む手法にも触れ、非エンジニアの方でも自らの業務改善へ踏み出せるきっかけを提供します。</p>
                <p className="index_course__desc">AIを活用する上での情報セキュリティやリスク管理の考え方も押さえ、安心して業務に導入できる実践力を身につけることを目指します。</p>
                <h4 className="index_course__subtitle">訓練内容</h4>
                <ul className="index_course__list">
                  <li><strong>受講対象者</strong>：新任担当者、中堅層</li>
                  <li><strong>目的</strong>：AI技術を活用した業務効率化、スキル向上</li>
                  <li><strong>受講方法</strong>：同時双方向型</li>
                  <li><strong>訓練時間</strong>：1時間×10日（合計10時間）</li>
                  <li><strong>研修費</strong>：300,000円(税別)</li>
                </ul>
                <div className="index_course__curriculum">
                  <div className="index_course__section">
                    <h4 className="index_course__section-title index_course__section-title--ol">オンライン研修</h4>
                    <div className="index_course__grid">
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>業務の細部・フローの言語化（前半）｜1H</div>
                        <div className="index_course__lessons"><p>自分の業務を「AIに伝えられる言葉」に変換するための基礎を習得。担当業務の洗い出しと、フロー図・手順書への落とし込み方を実践します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>業務の細部・フローの言語化（後半）｜1H</div>
                        <div className="index_course__lessons"><p>前回の内容を深化させ、例外処理や判断基準まで含めた精度の高い業務言語化を完成させます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>AI業務活用課題の実施（前半）｜1H</div>
                        <div className="index_course__lessons"><p>言語化した業務に生成AIを実際に組み込み、自分の職場で使える活用案を設計。文章作成・データ分析・既存の業務ワークフローの気改善を具体的に検討します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>AI業務活用課題の実施（後半）｜1H</div>
                        <div className="index_course__lessons"><p>設計した活用案を実際に動かし、成果と課題を検証。うまくいかないポイントへの対処法と改善サイクルの回し方を学びます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>導入ワークショップ（前半）｜1H</div>
                        <div className="index_course__lessons"><p>生成AIを職場・チームに広げるための導入戦略を策定。情報管理・セキュリティルールの整備も含め、周囲への説明方法と巻き込み方を実践的に習得します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>導入ワークショップ（後半）｜1H</div>
                        <div className="index_course__lessons"><p>これまでの学びを実務に落とし込む実践フェーズ。実際の業務データや案件を使い、生成AIと共に作業する体験を積みます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>AI業務活用の実践ラーニング（前半）｜1H</div>
                        <div className="index_course__lessons"><p>生成AI活用の効果を数値で捉え、継続改善するための仕組みを構築。KPI設定・振り返りサイクル・品質チェックの方法を習得します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>AI業務活用の実践ラーニング（後半）｜1H</div>
                        <div className="index_course__lessons"><p>生成AIを活用した情報整理と、業務別プロンプトの最適化を実践。再現性の高い指示設計で、日常業務への定着を図ります。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>実務実装&amp;改善フィードバック(前半)｜1H</div>
                        <div className="index_course__lessons"><p>生成AIを実際の現場に組み込み、業務の中でしっかりと機能するか理想とするアウトプットが出力されるかの状態を確認しながら改善していきます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>実務実装&amp;改善フィードバック(後半)｜1H</div>
                        <div className="index_course__lessons"><p>これまで設計・構築した成果物に対して講師・受講生からフィードバックを受け、完成度を高めます。改善視点と自己評価力も養います。</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI業務自動化研修【AIクリエイティブ活用コース】 */}
            <div className="index_course__panel" id="panel-creative">
              <div className="index_course__content">
                <h3 className="index_course__title">AI業務自動化研修</h3>
                <p className="index_course__subtitle-course">【AIクリエイティブ活用コース】</p>
                <p className="index_course__desc">本研修は、生成AIを業務で活用し、画像・動画等のクリエイティブ制作を効率化・内製化したいビジネスパーソンを対象に、基本操作から高度な実務活用まで体系的に習得するプログラムです</p>
                <p className="index_course__desc">主要な画像・動画生成AIツールの特性や使い分けの理解から始まり、プロンプト設計による意図に沿ったクリエイティブ生成、画像の編集・加工、動画の生成・仕上げといった、AIの強みを活かした実務活用を実践的に学びます。業務別のクリエイティブ制作（広告・販促物、SNSコンテンツ、提案・プレゼン資料等）におけるプロンプト設計、素材の編集・高品質化、ブランドガイドラインに沿った成果物の制作など、現場で即戦力となる専門的技能を習得します。</p>
                <h4 className="index_course__subtitle">訓練内容</h4>
                <ul className="index_course__list">
                  <li><strong>受講対象者</strong>：新任担当者、中堅層</li>
                  <li><strong>目的</strong>：画像・動画AI技術を活用した業務効率化スキル向上</li>
                  <li><strong>受講方法</strong>：ブレンディッドラーニング形式（eラーニングとオンラインによる同時双方向型ライブ研修の組み合わせ）</li>
                  <li><strong>訓練時間</strong>：合計22時間48分（eラーニング: 13時間48分、オンライン研修: 9時間）</li>
                  <li><strong>研修費</strong>：300,000円(税別)</li>
                </ul>
                <div className="index_course__curriculum">
                  <div className="index_course__section">
                    <h4 className="index_course__section-title index_course__section-title--el">eラーニング</h4>
                    <div className="index_course__grid">
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>1, 生成AIの仕組みと活用シーンを理解する</div>
                        <div className="index_course__lessons"><p>生成AIがどのように画像や文章を作り出すのか、基本的な仕組みをやさしく解説。ビジネスや日常での具体的な活用シーンを知り、全体像をつかみます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>2, プロンプトの基本と画像生成の基礎を学ぶ</div>
                        <div className="index_course__lessons"><p>AIに指示を出す「プロンプト」の書き方の基本を習得。実際に画像を生成しながら、思い通りの結果を引き出す第一歩を体験します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>3, 思い通りの画像を生成するプロンプト設計を学ぶ</div>
                        <div className="index_course__lessons"><p>狙ったイメージを正確に出力するためのプロンプト設計テクニックを学習。語順や要素の組み合わせ方を理解し、再現性の高い指示を作れるようになります。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>4, 構図・スタイル・色味のコントロール方法を習得する</div>
                        <div className="index_course__lessons"><p>画像の構図や画風、カラートーンを自在に調整する方法を習得。細かなニュアンスまでコントロールし、完成度の高いビジュアルを作り出します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>5, Midjourney / Stable Diffusion などの使い方を学ぶ</div>
                        <div className="index_course__lessons"><p>代表的な画像生成ツールの操作方法を実践的に習得。それぞれの特徴や得意分野を理解し、目的に合わせて使いこなせるようになります。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>6, 用途に応じたツールの使い分けを理解する</div>
                        <div className="index_course__lessons"><p>数ある生成AIツールの中から、目的やシーンに最適なものを選ぶ判断力を養成。無駄なく効率的に成果を出すための使い分けを学びます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>7, Canvaなどで画像を編集・加工する</div>
                        <div className="index_course__lessons"><p>生成した画像をCanvaなどのツールでさらに編集・加工する方法を習得。文字入れやレイアウト調整で、実用的なデザインに仕上げます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>8, 背景除去・合成・高画質化などの実践技術を学ぶ</div>
                        <div className="index_course__lessons"><p>背景の切り抜きや画像合成、画質アップなどの実践的な編集技術を学習。素材を組み合わせてクオリティの高い成果物を制作します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>9, 動画生成AIの仕組みと活用事例を理解する</div>
                        <div className="index_course__lessons"><p>動画を自動生成するAIの仕組みを基礎から理解。広告やSNSなど実際の活用事例を通じて、動画生成AIの可能性を体感します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>10, プロンプトと素材から動画を生成する基本を学ぶ</div>
                        <div className="index_course__lessons"><p>テキストや画像素材から動画を生み出す基本操作を習得。プロンプトの組み立て方を学び、初めてでも動画制作にチャレンジできます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>11, Runway / Pika / Luma AI などの使い方を学ぶ</div>
                        <div className="index_course__lessons"><p>主要な動画生成ツールの使い方を実践的に習得。各ツールの強みを理解し、表現したい映像に合わせて選んで活用できるようになります。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>12, テキスト・画像から動画を生成する方法を習得する</div>
                        <div className="index_course__lessons"><p>文章や1枚の画像をもとに動画を作り出す手法を習得。静止素材に動きを加え、印象的なモーションコンテンツへと変換します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>13, 画像・動画を組み合わせたコンテンツを制作する</div>
                        <div className="index_course__lessons"><p>生成した画像と動画を組み合わせ、一つの作品としてまとめる制作スキルを習得。複数の素材を統合し表現の幅を広げます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>14, SNS投稿・広告・プレゼン資料など実務に活用する</div>
                        <div className="index_course__lessons"><p>学んだスキルをSNS投稿や広告、プレゼン資料など実際の業務に応用。成果につながるアウトプットの作り方を実践的に学びます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>15, 著作権・利用規約・商用利用のルールを理解する</div>
                        <div className="index_course__lessons"><p>生成AIを使う上で欠かせない著作権や利用規約、商用利用の注意点を学習。トラブルを避け、安心して活用するための知識を身につけます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>16, 安全に活用するためのリスクと対策を学ぶ</div>
                        <div className="index_course__lessons"><p>情報漏えいや誤情報などAI活用に潜むリスクを理解し、その対策を習得。安全かつ責任を持ってAIを使いこなす姿勢を養います。</p></div>
                      </div>
                    </div>
                  </div>
                  <p className="index_course__plus">＋</p>
                  <div className="index_course__section">
                    <h4 className="index_course__section-title index_course__section-title--ol">オンライン研修</h4>
                    <div className="index_course__grid">
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第1回： 業務の棚卸し・クリエイティブ課題の言語化</div>
                        <div className="index_course__lessons"><p>現在の業務を洗い出し、どこにAIを活かせるかを整理。漠然とした課題を具体的な言葉に落とし込み、取り組むべきテーマを明確にします。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第2回： AIを業務で活用するための準備</div>
                        <div className="index_course__lessons"><p>AIを実務に導入する前の環境づくりや心構えを整える回。必要なツールや前提知識をそろえ、スムーズに活用へ移行できる土台を築きます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第3回： AI業務活用課題の実施（前半）</div>
                        <div className="index_course__lessons"><p>言語化した課題に対し、実際にAIを使って取り組む前半パート。基本的なアプローチを試しながら、業務適用の感覚をつかんでいきます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第4回： AI業務活用課題の実施（後半）</div>
                        <div className="index_course__lessons"><p>前半で着手した課題をさらに深掘りし、実践を進める後半パート。試行錯誤を重ねながら、より実用的な活用方法へと磨き上げます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第5回： 導入ワークショップ（前半）</div>
                        <div className="index_course__lessons"><p>チームや現場へのAI導入を見据えたワークショップの前半。実際の業務シーンを想定し、参加型で活用の進め方を体験的に学びます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第6回： 導入ワークショップ（後半）</div>
                        <div className="index_course__lessons"><p>前半に続く導入ワークショップの後半パート。具体的な導入プランを練り上げ、現場で実行できるレベルまで落とし込んでいきます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第7回： AI業務活用の実践ラーニング（前半）</div>
                        <div className="index_course__lessons"><p>実際の業務に近いケースでAI活用を実践する前半。学んだ知識を手を動かしながら定着させ、成果につながるスキルを養います。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第8回： AI業務活用の実践ラーニング（後半）</div>
                        <div className="index_course__lessons"><p>前半で培ったスキルをさらに応用する実践ラーニングの後半。より複雑な業務にも対応できる力を身につけ、自走できる状態を目指します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第9回： 実務実装&amp;改善フィードバック</div>
                        <div className="index_course__lessons"><p>これまでの学びを実際の業務へ本格的に実装する総仕上げの回。成果を振り返り、改善のフィードバックを通じて継続的な活用につなげます。</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI業務自動化研修【AIノーコード開発コース】 */}
            <div className="index_course__panel" id="panel-nocode">
              <div className="index_course__content">
                <h3 className="index_course__title">AI業務自動化研修</h3>
                <p className="index_course__subtitle-course">【AIノーコード開発コース】</p>
                <p className="index_course__desc">本研修は、Difyを使ってAIアプリケーションやエージェントをノーコード・ローコードで構築したいビジネスパーソン・エンジニアを対象に、基本操作から実務レベルの業務自動化まで、初級から上級へ段階的に習得するプログラムです。</p>
                <p className="index_course__desc">主要LLMとの接続設定やプロンプト設計といった基礎の習得から始まり、チャットボットなどのシンプルなAIアプリ構築を通じてDifyを使いこなす土台を固めます。最終的には、複数のAIエージェントが協調するマルチエージェント設計を学び、社内業務フローを丸ごと自動化するシステムの設計・運用までを習得します。</p>
                <h4 className="index_course__subtitle">訓練内容</h4>
                <ul className="index_course__list">
                  <li><strong>受講対象者</strong>：新任担当者、中堅層</li>
                  <li><strong>目的</strong>：AI開発ツールを活用した業務効率化、スキル向上</li>
                  <li><strong>受講方法</strong>：ブレンディッドラーニング形式（eラーニングとオンラインによる同時双方向型ライブ研修の組み合わせ）</li>
                  <li><strong>訓練時間</strong>：合計21時間49分（eラーニング: 12時間49分、オンライン研修: 9時間）</li>
                  <li><strong>研修費</strong>：300,000円(税別)</li>
                </ul>
                <div className="index_course__curriculum">
                  <div className="index_course__section">
                    <h4 className="index_course__section-title index_course__section-title--el">eラーニング</h4>
                    <div className="index_course__grid">
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>1. ノーコード自動化の全体像とMakeの仕組みを理解する</div>
                        <div className="index_course__lessons"><p>Makeで何ができるのかを把握し、シナリオ・モジュール・トリガーといった基本構造を理解。自動化を自分で組み立てる土台を固めます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>2. GmailとSlackを連携し、通知を自動化する</div>
                        <div className="index_course__lessons"><p>メール受信をトリガーに、内容を自動でSlackへ通知するフローを構築。実務に近い形で外部サービス連携の流れを習得します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>3. 日付計算を使った定期通知の仕組みを作る</div>
                        <div className="index_course__lessons"><p>締切までの残り日数などを計算し、Slackへ定期的に自動通知する仕組みを作成。実用的な自動化パターンを身につけます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>4. Difyの基本操作とLLM接続設定を習得する</div>
                        <div className="index_course__lessons"><p>画面構成や基本操作を理解し、主要LLMとの接続設定を行う。Difyを使いこなすための基礎をしっかり固めます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>5. ワークフローで複数ステップの処理を設計する</div>
                        <div className="index_course__lessons"><p>条件分岐やデータの受け渡しを組み合わせるワークフロー機能を習得。複雑な業務処理を自動化する設計力を養います。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>6. チャットフローで対話型AIアプリを構築する</div>
                        <div className="index_course__lessons"><p>会話形式で動作するチャットフローの作り方を習得。ユーザーとの対話を通じて動く、実用的なAIアプリを構築します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>7. ナレッジを作成し、RAGの土台を構築する</div>
                        <div className="index_course__lessons"><p>独自の資料やデータをナレッジとして登録する方法を学習。回答に根拠を持たせるRAGの基盤を構築します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>8. ツールを組み込みAIアプリの機能を拡張する</div>
                        <div className="index_course__lessons"><p>Difyに用意された各種ツールをアプリに組み込む方法を習得。標準機能と連携させ、できることの幅を広げます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>9. ナレッジ検索の精度を向上させる</div>
                        <div className="index_course__lessons"><p>チャンク設定や検索方式を調整し、ナレッジ検索の精度を高める手法を習得。狙った情報を正確に引き出す力を養います。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>10. プロンプト・パラメータでモデルの精度を高める</div>
                        <div className="index_course__lessons"><p>プロンプトやパラメータを最適化し、AIの回答精度を引き上げる手法を学習。出力の質を安定させるコツを身につけます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>11. FAQチャットボットを構築する</div>
                        <div className="index_course__lessons"><p>よくある質問に自動応答するFAQチャットボットを構築。学んだ基礎を組み合わせ、初めての実践アプリを完成させます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>12. カスタム関数で独自処理を実装する</div>
                        <div className="index_course__lessons"><p>独自のカスタム関数を実装し、標準機能では難しい処理を実現。一歩踏み込んだカスタマイズの方法を体験します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>13. MCPサーバーで外部生成AIツールと連携する</div>
                        <div className="index_course__lessons"><p>MCPサーバーを介してDifyと外部AIツールを連携させる。ツール同士をつなぎ、活用の幅を大きく広げます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>14. DifyでレシートOCR自動登録システムを構築する</div>
                        <div className="index_course__lessons"><p>LINE・Make・Difyを組み合わせ、レシートを読み取り自動登録するシステムを構築。複数ツール連携の実力を磨きます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>15. マルチエージェントでnote記事を自動生成する</div>
                        <div className="index_course__lessons"><p>複数のAIエージェントが協調して記事を自動生成する仕組みを設計。マルチエージェント構築の実践力を身につけます。</p></div>
                      </div>
                    </div>
                  </div>
                  <p className="index_course__plus">＋</p>
                  <div className="index_course__section">
                    <h4 className="index_course__section-title index_course__section-title--ol">オンライン研修</h4>
                    <div className="index_course__grid">
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第1回： 業務の棚卸し・自動化したい業務課題の言語化</div>
                        <div className="index_course__lessons"><p>現在の業務を洗い出し、どこにAIを活かせるかを整理。漠然とした課題を具体的な言葉に落とし込み、取り組むべきテーマを明確にします。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第2回： AIを業務で活用するための準備</div>
                        <div className="index_course__lessons"><p>AIを実務に導入する前の環境づくりや心構えを整える回。必要なツールや前提知識をそろえ、スムーズに活用へ移行できる土台を築きます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第3回： AI業務活用課題の実施（前半）</div>
                        <div className="index_course__lessons"><p>言語化した課題に対し、実際にAIを使って取り組む前半パート。基本的なアプローチを試しながら、業務適用の感覚をつかんでいきます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第4回： AI業務活用課題の実施（後半）</div>
                        <div className="index_course__lessons"><p>前半で着手した課題をさらに深掘りし、実践を進める後半パート。試行錯誤を重ねながら、より実用的な活用方法へと磨き上げます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第5回： 導入ワークショップ（前半）</div>
                        <div className="index_course__lessons"><p>チームや現場へのAI導入を見据えたワークショップの前半。実際の業務シーンを想定し、参加型で活用の進め方を体験的に学びます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第6回： 導入ワークショップ（後半）</div>
                        <div className="index_course__lessons"><p>前半に続く導入ワークショップの後半パート。具体的な導入プランを練り上げ、現場で実行できるレベルまで落とし込んでいきます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第7回： AI業務活用の実践ラーニング（前半）</div>
                        <div className="index_course__lessons"><p>実際の業務に近いケースでAI活用を実践する前半。学んだ知識を手を動かしながら定着させ、成果につながるスキルを養います。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第8回： AI業務活用の実践ラーニング（後半）</div>
                        <div className="index_course__lessons"><p>前半で培ったスキルをさらに応用する実践ラーニングの後半。より複雑な業務にも対応できる力を身につけ、自走できる状態を目指します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第9回： 実務実装&amp;改善フィードバック</div>
                        <div className="index_course__lessons"><p>これまでの学びを実際の業務へ本格的に実装する総仕上げの回。成果を振り返り、改善のフィードバックを通じて継続的な活用につなげます。</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="index_feature">
          <div className="index_feature__inner u-inner">
            {/* ヘッダー */}
            <div className="index_feature__head">
              <p className="index_feature__eyebrow font-en fadein">Feature_</p>
              <h2 className="index_feature__title fadein delay-time02"><span>AI導入を絶対に失敗させない</span>バイテックBizの3つの特徴</h2>
            </div>
            {/* 3つのカード一覧 */}
            <ul className="index_feature__list">
              <li className="index_feature__item index_feature__item--01">
                <a href="#i_feature01">
                  <div className="index_feature__overlay"></div>
                  <div className="index_feature__content">
                    <div className="index_feature__body">
                      <p className="index_feature__num">01</p>
                      <p className="index_feature__text">
                        課題・ゴールに合わせた<br />オーダーメイドカリキュラム
                      </p>
                    </div>
                    <span className="index_feature__arrow"></span>
                  </div>
                </a>
              </li>
              <li className="index_feature__item index_feature__item--02">
                <a href="#i_feature02">
                  <div className="index_feature__overlay"></div>
                  <div className="index_feature__content">
                    <div className="index_feature__body">
                      <p className="index_feature__num">02</p>
                      <p className="index_feature__text">
                        各領域の専門家達による<br />マンツーマンサポート
                      </p>
                    </div>
                    <span className="index_feature__arrow"></span>
                  </div>
                </a>
              </li>
              <li className="index_feature__item index_feature__item--03">
                <a href="#i_feature03">
                  <div className="index_feature__overlay"></div>
                  <div className="index_feature__content">
                    <div className="index_feature__body">
                      <p className="index_feature__num">03</p>
                      <p className="index_feature__text">
                        個人のAI活用で終わらない<br />組織横断での研修プログラム
                      </p>
                    </div>
                    <span className="index_feature__arrow"></span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* ========== 01 ========== */}
          <div id="i_feature01" className="index_feature__detail index_feature__detail--01">
            <div className="index_feature__detail__inner u-inner">
              <div className="index_feature__detail__text fadein">
                <p className="index_feature__label"><span className="font-en">01</span>分かったで終わらせない</p>
                <h3 className="index_feature__heading"><span>リアルな実務を想定した</span>実践型カリキュラム</h3>
                <p className="index_feature__desc">バイテックBizでは、既存の業務でのベーシックな課題から部門別での課題まで実務を想定した学習を提供しています。初心者でも迷わず最短で課題解決・ゴールに必要なAIスキルの習得が可能です。</p>
              </div>
              <div className="index_feature__detail__image fadein delay-time02">
                <img loading="lazy" src="/biz/assets/img/index/img_index_feature_001.png" alt="課題・ゴールに合わせたオーダーメイドカリキュラム" />
              </div>
            </div>
          </div>
          <div className="index_feature__section index_feature__section--01">
            <div className="index_feature__section__box fadein">
              <div className="index_feature__section__inner u-inner">
                <div className="index_feature__section__text">
                  <h3 className="index_feature__section__heading">
                    <span>100種類以上のリアルな業務を</span><br />
                    想定した実践課題
                  </h3>
                </div>
              </div>
              <div className="index_feature__section__image"></div>
            </div>
            <div className="index_feature__section__slider fadein delay-time02">
              <ul className="index_feature__section__slider__list">
                <li className="index_feature__section__slider__list__item"><img loading="lazy" src="/biz/assets/img/index/img_index_feature_slider01.jpg" alt="" /></li>
                <li className="index_feature__section__slider__list__item"><img loading="lazy" src="/biz/assets/img/index/img_index_feature_slider02.jpg" alt="" /></li>
                <li className="index_feature__section__slider__list__item"><img loading="lazy" src="/biz/assets/img/index/img_index_feature_slider03.jpg" alt="" /></li>
                <li className="index_feature__section__slider__list__item"><img loading="lazy" src="/biz/assets/img/index/img_index_feature_slider04.jpg" alt="" /></li>
                <li className="index_feature__section__slider__list__item"><img loading="lazy" src="/biz/assets/img/index/img_index_feature_slider05.jpg" alt="" /></li>
                <li className="index_feature__section__slider__list__item"><img loading="lazy" src="/biz/assets/img/index/img_index_feature_slider06.jpg" alt="" /></li>
                <li className="index_feature__section__slider__list__item"><img loading="lazy" src="/biz/assets/img/index/img_index_feature_slider07.jpg" alt="" /></li>
              </ul>
            </div>
          </div>

          {/* ========== 02 ========== */}
          <div id="i_feature02" className="index_feature__detail index_feature__detail--02">
            <div className="index_feature__detail__inner u-inner">
              <div className="index_feature__detail__text fadein">
                <p className="index_feature__label"><span className="font-en">02</span>あらゆる課題に対応する</p>
                <h3 className="index_feature__heading"><span>各AI領域の専門家達による</span>複数名での手厚いサポート</h3>
                <p className="index_feature__desc">様々な業務課題が存在するからこそ、複数名体制でのサポートが必要となります。あらゆる角度からのフィードバックやアドバイスで、組織・チームをゴールまで導きます。</p>
              </div>
              <div className="index_feature__detail__image fadein delay-time02">
                <img loading="lazy" src="/biz/assets/img/index/img_index_feature_002.png" alt="各AI領域の専門家達による複数名での伴走型サポート" />
              </div>
            </div>
          </div>
          <div className="index_feature__section index_feature__section--02">
            <div className="index_feature__section__box index_feature__section__box--02 fadein">
              <div className="index_feature__section__inner u-inner">
                <div className="index_feature__section__text">
                  <h3 className="index_feature__section__heading">専門家が連携して解決<br />万全のサポート体制</h3>
                  <p className="index_feature__section__desc">
                    <span className="num font-en">feature1</span>
                    バイテックBizでは、研修進捗を管理する研修マネージャー、課題解決を支援する専任AIコンサルチーム、
                    そして日々の疑問に答えるAI専門のテクニカルサポートの複数名体制で支援。
                  </p>
                </div>
                <div className="index_feature__section__image index_feature__section__image--02"></div>
              </div>
            </div>
            <div className="index_feature__section__slider fadein delay-time02">
              <h3 className="index_feature__section__heading head__02"><span>確かな経験と各領域に特化した</span>AIコンサルタント</h3>
              <ul className="index_feature__section__slider__list">
                <li className="index_feature__section__slider__list__item"><img loading="lazy" src="/biz/assets/img/index/instructor/instructor_05.webp" alt="池田 義国" /></li>
                <li className="index_feature__section__slider__list__item"><img loading="lazy" src="/biz/assets/img/index/instructor/instructor_06.webp" alt="那須 太陽" /></li>
                <li className="index_feature__section__slider__list__item"><img loading="lazy" src="/biz/assets/img/index/instructor/instructor_01.webp" alt="後藤 暁子" /></li>
                <li className="index_feature__section__slider__list__item"><img loading="lazy" src="/biz/assets/img/index/instructor/instructor_04.webp" alt="野口 侑渡" /></li>
                <li className="index_feature__section__slider__list__item"><img loading="lazy" src="/biz/assets/img/index/instructor/instructor_02.webp" alt="椿 明人" /></li>
                <li className="index_feature__section__slider__list__item"><img loading="lazy" src="/biz/assets/img/index/instructor/instructor_03.webp" alt="田中 省吾" /></li>
              </ul>
            </div>
          </div>

          {/* ========== 03 ========== */}
          <div id="i_feature03" className="index_feature__detail index_feature__detail--03">
            <div className="index_feature__detail__inner u-inner">
              <div className="index_feature__detail__text fadein">
                <p className="index_feature__label"><span className="font-en">03</span>個人のAI活用で終わらない</p>
                <h3 className="index_feature__heading">チーム全体で実施する<span>組織横断型の研修プログラム</span></h3>
                <p className="index_feature__desc">バイテックBizの学びは、個々の習得を部署・チームの壁を越えて連鎖させ、全社でAIを当たり前にすることがゴールです。個人の「できた」を組織の競争力に変えるまで、我々がサポートします。</p>
              </div>
              <div className="index_feature__detail__image fadein delay-time02">
                <img loading="lazy" src="/biz/assets/img/index/img_index_feature_003.png" alt="チーム全体で実施する組織横断型の研修プログラム" />
              </div>
            </div>
          </div>
          <div className="index_feature__section index_feature__section--03">
            <div className="index_feature__section__box fadein">
              <div className="index_feature__section__inner u-inner">
                <div className="index_feature__section__text">
                  <h3 className="index_feature__section__heading head__03">PDCAサイクルで<br /><span>最短でAI導入</span>を事業成長に</h3>
                </div>
              </div>
              <div className="index_feature__section__image"><img loading="lazy" src="/biz/assets/img/index/img_index_feature_003_02.png" alt="" /></div>
            </div>
          </div>
        </section>

        <section className="index_benefits">
          <div className="index_benefits__inner u-inner">
            <h2 className="index_benefits__title font-en fadein">BENEFITS</h2>
            <p className="index_benefits__subtitle fadein delay-time02">バイテックBizの導入効果</p>
            <div className="index_benefits__list index_benefits__slider">
              {/* 1 */}
              <div className="index_benefits__item fadein delay-time03">
                <div className="index_benefits__item__image">
                  <img loading="lazy" src="/biz/assets/img/index/img_index_benefits_01.svg" alt="AI活用前後" />
                </div>
                <h3 className="index_benefits__item__heading">ルーティン業務・雑務を90%削減</h3>
                <p className="index_benefits__item__text">
                  申請チェック、データ突合、定型メール作成、レポ整形をテンプレ化して自動処理。<br />
                  担当は確認と承認のみ――ムダな待ちと再作業を排除します。
                </p>
              </div>
              {/* 2 */}
              <div className="index_benefits__item fadein delay-time04">
                <div className="index_benefits__item__image">
                  <img loading="lazy" src="/biz/assets/img/index/img_index_benefits_02.svg" alt="AI活用率" />
                </div>
                <h3 className="index_benefits__item__heading">組織・チーム内での<br className="pc-only" />AI活用の定着</h3>
                <p className="index_benefits__item__text">
                  AIの使用ガイドライン構築から業務フローの中で最適な生成AIを導入することで、<br />
                  活用のしやすさと数字へのインパクトを出します。
                </p>
              </div>
              {/* 3 */}
              <div className="index_benefits__item fadein delay-time05">
                <div className="index_benefits__item__image">
                  <img loading="lazy" src="/biz/assets/img/index/img_index_benefits_03.svg" alt="生産性向上" />
                </div>
                <h3 className="index_benefits__item__heading">チーム・組織の<br className="pc-only" />生産性70%向上</h3>
                <p className="index_benefits__item__text">
                  定型入力・転記・確認を自動化。<br />
                  差分レビューに一本化してボトルネックを解消し、生産性を向上。
                </p>
              </div>
            </div>
            <p className="index_benefits__attn">
              ※1 2025年1月20日から2025年7月20日の間にバイテック業務活用コース受講者へのアンケート調査を元に当社作成。<br />
              ※2 2025年1月から2025年7月の受講生のデータを元に当社作成。<br />
              ※3 2024年4月から2025年4月のバイテック業務活用コースのデータを元に当社作成。<br />
              ※4 2024年7月から2025年7月の卒業生のデータを元に当社作成。
            </p>
          </div>
        </section>

        <section className="index_works">
          <div className="index_works__inner u-inner">
            <p className="index_works__eyebrow font-en fadein">Works_</p>
            <h2 className="index_works__heading fadein delay-time02">導入事例</h2>
            <div className="index_works__section__slider fadein delay-time02">
              <ul className="index_works__section__slider__list">
                <li className="index_works__section__slider__list__item"><img loading="lazy" src="/biz/assets/img/index/img_index_works_s01.jpg" alt="" /></li>
                <li className="index_works__section__slider__list__item"><img loading="lazy" src="/biz/assets/img/index/img_index_works_s02.jpg" alt="" /></li>
                <li className="index_works__section__slider__list__item"><img loading="lazy" src="/biz/assets/img/index/img_index_works_s03.jpg" alt="" /></li>
                <li className="index_works__section__slider__list__item"><img loading="lazy" src="/biz/assets/img/index/img_index_works_s04.jpg" alt="" /></li>
                <li className="index_works__section__slider__list__item"><img loading="lazy" src="/biz/assets/img/index/img_index_works_s05.jpg" alt="" /></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="index_flow">
          <div className="index_flow__inner u-inner">
            <p className="index_flow__eyebrow font-en fadein">Flow_</p>
            <h2 className="index_flow__heading fadein delay-time02">導入までの流れ</h2>
            <div className="index_flow__list">
              {/* STEP 1 */}
              <div className="index_flow__item fadein delay-time03">
                <p className="index_flow__item__number">01</p>
                <h3 className="index_flow__item__title">無料個別相談を予約</h3>
                <div className="index_flow__item__icon"><img loading="lazy" src="/biz/assets/img/index/index_flow__item__icon_01.png" alt="" /></div>
                <p className="index_flow__item__text">
                  まずは無料の個別相談をご予約ください
                </p>
              </div>
              <div className="index_flow__arrow"></div>
              {/* STEP 2 */}
              <div className="index_flow__item fadein delay-time03">
                <p className="index_flow__item__number">02</p>
                <h3 className="index_flow__item__title">ヒアリング・ご提案</h3>
                <div className="index_flow__item__icon"><img loading="lazy" src="/biz/assets/img/index/index_flow__item__icon_02.png" alt="" /></div>
                <p className="index_flow__item__text">
                  現状をヒアリングし、AI活用レベルに合わせた研修プランを提案します
                </p>
              </div>
              <div className="index_flow__arrow"></div>
              {/* STEP 3 */}
              <div className="index_flow__item fadein delay-time04">
                <p className="index_flow__item__number">03</p>
                <h3 className="index_flow__item__title">お見積もり</h3>
                {/* TODO: お見積もり用イラストに差し替え（暫定でicon_04を流用） */}
                <div className="index_flow__item__icon"><img loading="lazy" src="/biz/assets/img/index/index_flow__item__icon_04.png" alt="" /></div>
                <p className="index_flow__item__text">
                  お見積もりの確認後、ご決済から最短7日後から研修をスタートすることができます。
                </p>
              </div>
              <div className="index_flow__arrow"></div>
              {/* STEP 4 */}
              <div className="index_flow__item fadein delay-time05">
                <p className="index_flow__item__number">04</p>
                <h3 className="index_flow__item__title">研修スタート</h3>
                <div className="index_flow__item__icon"><img loading="lazy" src="/biz/assets/img/index/index_flow__item__icon_03.png" alt="" /></div>
                <p className="index_flow__item__text">
                  チャットサポート等を活用して分からないところは即座に解消しながら実際に研修を進めていきます。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="index_faq">
          <div className="index_faq__inner u-inner">
            <p className="index_faq__eyebrow font-en fadein">FAQ_</p>
            <h2 className="index_faq__heading fadein delay-time02">よくあるご質問</h2>
            <div className="index_faq__item fadein delay-time03">
              <button className="index_faq__question">他社の生成AI研修サービスとの違いは何ですか？<span className="index_faq__arrow"></span></button>
              <div className="index_faq__answer">
                <p>組織・チームの課題やゴールに最適化したサポートチームを作る点です。<br />
                  一般的な研修が概念学習に偏りがちな中、本研修は「単なる効率化ではなく、数字にインパクトを出す」に特化。<br />
                  個人単位でAIスキルを上げるだけではチーム・組織単位でのAXは不可能ですので、バイテックBizなら失敗しない生成AI導入研修が可能です。</p>
              </div>
            </div>
            <div className="index_faq__item fadein delay-time04">
              <button className="index_faq__question">バイテック生成AIとは何が違うんですか？<span className="index_faq__arrow"></span></button>
              <div className="index_faq__answer">
                <p>弊社運営の個人向けのバイテック生成AIは業務活用から副業まで様々なAIの活用ニーズに対応したオンラインスクールとなっております。対してBizでは業務・事業にのみ特化しており専任のAIコンサルタントが3人担当としてつかせていただき、サポートさせていただきます。</p>
              </div>
            </div>
            <div className="index_faq__item fadein delay-time05">
              <button className="index_faq__question">初心者でも研修について行けますか？<span className="index_faq__arrow"></span></button>
              <div className="index_faq__answer">
                <p>はい、まったく問題ありません。<br />
                  多くの受講者が生成AI未経験からのスタートですが、基礎から丁寧に学べるため、業務で活用できるレベルまでしっかりとスキルアップできます。</p>
              </div>
            </div>
            <div className="index_faq__item fadein delay-time06">
              <button className="index_faq__question">分からないことがあった時にサポートなどはありますか？<span className="index_faq__arrow"></span></button>
              <div className="index_faq__answer">
                <p>無制限のチャットと月1回の全体面談と月2回の個人面談で、学習をしっかりサポートします。<br />
                  いつでも質問できるチャットに加え、各領域に特化した専属コンサルタントが月2回のオンライン面談と課題レビューを実施。つまずいたポイントも丁寧にフォローし、安心して学びを進められます。</p>
              </div>
            </div>
            <div className="index_faq__item fadein delay-time07">
              <button className="index_faq__question">研修終了後も相談できますか？<span className="index_faq__arrow"></span></button>
              <div className="index_faq__answer">
                <p>はい、マンツーマンでのサポート期間終了後も1年間は社内のAI活用の定着までの伴走サポートはさせていただきますので、ご安心ください。</p>
              </div>
            </div>
            <div className="index_faq__item fadein delay-time08">
              <button className="index_faq__question">社内の決済を通すためのサポートはありますか？<span className="index_faq__arrow"></span></button>
              <div className="index_faq__answer">
                <p>はい、ございます。バイテックBizの特徴の一つでもある、決済のサポートでは、課題や会社・組織が求めている事から逆算して必要な提案資料作成のサポートを行っています。こちらの決済サポートは無料となっておりますので、ぜひお気軽にご活用ください。</p>
              </div>
            </div>
            <div className="index_faq__item fadein delay-time09">
              <button className="index_faq__question">お支払い方法をおしえてください。<span className="index_faq__arrow"></span></button>
              <div className="index_faq__answer">
                <p>お支払い方法は銀行振込とクレジットカード決済でのお支払いが可能です。</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <aside className="right-form-fixed" id="rightFormFixed">
        <div className="fv_form">
          <div className="form_header">
            <div className="form_header__text">
              <p className="form_eyebrow">導入事例や料金プランが分かる</p>
              <h3 className="form_title">資料ダウンロード</h3>
            </div>
            <img className="form_cover" src="/biz/assets/img/wp/biz-doc-cover.webp" alt="バイテックBiz サービス概要資料" width={390} height={512} loading="lazy" />
          </div>
          <div className="formrun-embed" data-formrun-form="@biz-org-fv" data-formrun-redirect="true"></div>
        </div>
      </aside>

      <footer className="footer" id="pageFooter">
        <div className="footer__inner">
          <div className="footer__col footer__col--lead">
            <p className="footer__lead">
              生成AI活用を、<br />
              現場の当たり前に。
            </p>
          </div>
          <div className="footer__col">
            <p className="footer__title">バイテックBizについて</p>
            <ul className="footer__list">
              <li><a href="#">バイテックBizとは</a></li>
              <li><a href="#">3つの特徴</a></li>
              <li><a href="#">導入事例</a></li>
              <li><a href="#">よくある質問</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <p className="footer__title">サポート</p>
            <ul className="footer__list">
              <li><a href="./user-terms/">利用規約</a></li>
              <li><a href="./specified_commercial/">特定商取引法に関する表示</a></li>
              <li><a href="./system-requirements/">システム要件</a></li>
              <li><a href="./refund-policy/">返金ポリシー</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <p className="footer__title">会社情報</p>
            <ul className="footer__list">
              <li><a href="https://ai-bou.co.jp" target="_blank" rel="noopener">会社概要</a></li>
              <li><a href="./privacy-policy/">プライバシーポリシー</a></li>
            </ul>
            <p className="footer__title footer__title--service">サービス</p>
            <ul className="footer__list">
              <li><a href="#">個人向けAIスクール【バイテック】</a></li>
              <li><a href="#">オウンドメディア【b-Net】</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <img loading="lazy" src="/biz/assets/img/common/ft-logo_w.svg" alt="footer logo" className="footer__logo" />
          <p className="footer__copy">2025 株式会社AI棒</p>
        </div>
      </footer>

      {/* External Scripts — ネイティブ<script defer>でDOM順に実行（next/scriptはNext16でinline評価が壊れ全スクリプト未実行になるため不使用）。revealFx は main.js 内で定義されるため別ファイル参照は削除。 */}
      <script defer src="/biz/assets/js/jquery-3.7.1.min.js" />
      <script defer src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js" />
      <script defer src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js" />
      <script defer src="/biz/assets/slick/slick.min.js" />
      <script defer src="/biz/assets/js/anime.min.js" />
      <script defer src="/biz/assets/js/scrollMonitor.js" />
      <script defer src="/biz/assets/js/main.js" />
      <script defer src="/biz/assets/js/scripts.js" />
      {/* サイド固定フォーム(#rightFormFixed)のみ。formrun SDK を読み込む。 */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function(){
          var s = document.createElement('script');
          s.src = 'https://sdk.form.run/js/v2/embed.js';
          s.async = true;
          document.body.appendChild(s);
        })();
      ` }} />
      <script dangerouslySetInnerHTML={{ __html: `
        (function(){
          var rail = document.getElementById('rightFormFixed');
          var footer = document.getElementById('pageFooter');
          if (!rail || !footer) return;
          var ticking = false;
          function update(){
            ticking = false;
            var footerTop = footer.getBoundingClientRect().top;
            var viewportH = window.innerHeight;
            if (footerTop < viewportH) {
              rail.style.bottom = (viewportH - footerTop) + 'px';
            } else {
              rail.style.bottom = '0px';
            }
          }
          function onScroll(){
            if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
          }
          window.addEventListener('scroll', onScroll, { passive: true });
          window.addEventListener('resize', onScroll);
          update();
        })();
      ` }} />
      <script dangerouslySetInnerHTML={{ __html: `
        (function(){
          var logo = document.getElementById('top-logo');
          var threshold = 100;
          window.addEventListener('scroll', function(){
            if(window.scrollY > threshold){
              logo.src = logo.dataset.dark;
            } else {
              logo.src = logo.dataset.white;
            }
          });
        })();
      ` }} />
    </>
  )
}
