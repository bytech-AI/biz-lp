import Script from 'next/script'

export default function BizPage() {
  return (
    <>
      <link rel="stylesheet" href="/biz/assets/css/style.css" />
      <link rel="stylesheet" href="/biz/assets/css/endless-river.css" />
      <link rel="stylesheet" href="/biz/assets/slick/slick.css" />
      <link rel="stylesheet" href="/biz/assets/slick/slick-theme.css" />

      <div className="top-header-wrap">
        <div className="top-header__logo">
          <a href="index.html"><img src="/biz/assets/img/common/hd-logo.svg" alt="バイテックBiz" id="top-logo" data-white="/biz/assets/img/common/hd-logo.svg" data-dark="/biz/assets/img/common/hd-logo-dark.svg" /></a>
        </div>
        <button className="top-header__hamburger" aria-label="メニューを開く">
          <span></span><span></span><span></span>
        </button>
        <div className="top-header__overlay"></div>
        <nav className="top-header__nav">
          <a href="index.html" className="top-nav-link">バイテックBizとは</a>
          <a href="#feature" className="top-nav-link">3つの特徴</a>
          <a href="#courses" className="top-nav-link">導入事例</a>
          <a href="#plan" className="top-nav-link">お役立ち資料</a>
          <a href="#faq" className="top-nav-link">よくある質問</a>
          <a href="https://bytech.jp/" target="_blank" rel="noopener" className="top-nav-link top-nav-link--ext">個人向けスクール</a>
          <a href="./doc-a/" className="btn-outline">資料をダウンロード</a>
          <a href="./counseling" className="btn-fill">無料個別相談を予約する</a>
        </nav>
      </div>

      <main className="main">
        <section className="hero" id="hero">
          <div className="hero__l-main-img__img">
            <picture>
              <source srcSet="/biz/assets/img/index/biz_fv-scaled.jpg" media="(min-width: 768px)" width={1280} height={720} />
              <img src="/biz/assets/img/index/biz_fv-scaled.jpg" alt="" loading="eager" width={750} height={1066} />
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
                  <source srcSet="/biz/assets/img/index/hero_lavel_mdl.png" media="(max-width: 768px)" />
                  <img src="/biz/assets/img/index/hero_lavel_mdl.png" alt="" />
                </picture>
              </div>
              <div className="hero__cta fadein delay-time03">
                <a href="./download" className="hero__cta-btn hero__cta-btn--outline">
                  <span className="hero__cta-btn__label">まずは資料をダウンロード</span>
                  <span className="hero__cta-btn__main">資料をダウンロードする</span>
                </a>
                <a href="./counseling" className="hero__cta-btn hero__cta-btn--fill">
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
          <div className="hero__form">
            <div className="hero__form-card">
              <div className="hero__form-header">
                <div className="hero__form-header__text">
                  <p className="hero__form-header__sub">導入事例や料金プランが分かる</p>
                  <p className="hero__form-header__title">資料ダウンロード</p>
                </div>
                <div className="hero__form-header__img">
                  <img src="/biz/assets/img/index/index_cta_l_img.png" alt="資料イメージ" />
                </div>
              </div>
              <div className="formrun-embed" data-formrun-form="@customer-success-azf2Fhi6yw5jcjVaWdVt" data-formrun-redirect="true"></div>
            </div>
          </div>
          <div className="hero__deco-pc section-ttl sp-none">
            <div className="maskTxt fadein delay-time05">
              <span className="font_en ttl_en1">
                <img src="/biz/assets/img/txt-hero_logo.svg" alt="" />
              </span>
            </div>
          </div>
        </section>

        <section className="index_about">
          <div className="index_about__inner u-inner">
            <div className="index_about__box">
              <div className="index_about__desc">
                <p className="index_about__logo fadein">
                  <span className="index_about__head__sub"><img src="/biz/assets/img/index/index_about_logo_img.svg" alt="" /></span>
                  <span className="index_about__head__main">とは？</span>
                </p>
                <h2 className="index_about__title">AIを最高の部下に変える<br /><span className="mark_b">ハンズオン型法人向けAI研修</span></h2>
                <p className="index_about__txt">社内・チームの生成AI導入の促進と結果を出すための貴社専用のカリキュラムとサポートチームを提供</p>
              </div>
              <div className="index_about__img">
                <img src="/biz/assets/img/index/img_about_r.svg" alt="" />
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

            <div className="index_compare__slider">
              <ul className="index_compare__slider__list">
                <li className="index_compare__slider__list__item"><img src="/biz/assets/img/index/img_index_compare_s01.png" alt="" /></li>
                <li className="index_compare__slider__list__item"><img src="/biz/assets/img/index/img_index_compare_s02.png" alt="" /></li>
                <li className="index_compare__slider__list__item"><img src="/biz/assets/img/index/img_index_compare_s03.png" alt="" /></li>
                <li className="index_compare__slider__list__item"><img src="/biz/assets/img/index/img_index_compare_s04.png" alt="" /></li>
                <li className="index_compare__slider__list__item"><img src="/biz/assets/img/index/img_index_compare_s05.png" alt="" /></li>
                <li className="index_compare__slider__list__item"><img src="/biz/assets/img/index/img_index_compare_s06.png" alt="" /></li>
                <li className="index_compare__slider__list__item"><img src="/biz/assets/img/index/img_index_compare_s07.png" alt="" /></li>
                <li className="index_compare__slider__list__item"><img src="/biz/assets/img/index/img_index_compare_s09.png" alt="" /></li>
                <li className="index_compare__slider__list__item"><img src="/biz/assets/img/index/img_index_compare_s10.png" alt="" /></li>
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
              <img src="/biz/assets/img/index/img_index_soltion_bg.jpg" alt="" className="index_solution__bg" />
              <div className="index_solution__icons">
                <div className="index_solution__icon fadein delay-time03">
                  <p>AI研修を<br />受けさせた</p>
                  <img src="/biz/assets/img/index/icon_help.svg" alt="" className="index_solution__icon-svg" />
                </div>
                <div className="index_solution__icon fadein delay-time04">
                  <p>無料のAI<br />セミナーを受講</p>
                  <img src="/biz/assets/img/index/icon_meeting.svg" alt="" className="index_solution__icon-svg" />
                </div>
                <div className="index_solution__icon fadein delay-time05">
                  <p>ひとまず<br />部署にAIを導入</p>
                  <img src="/biz/assets/img/index/icon_group.svg" alt="" className="index_solution__icon-svg" />
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
              <img src="/biz/assets/img/index/img_index_solution-hero_bg.jpg" alt="AIを活用する組織のイメージ" />
            </div>
            <p className="index_solution-hero__lead">
              AI駆動でクリティカルな課題解決ができる組織作りを目指せる生成AI研修
            </p>
            <div className="index_solution-hero__logo">
              <img src="/biz/assets/img/common/hd-logo.svg" alt="Bytech Biz" />
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
                    <img src="/biz/assets/img/index/index_cta_l_img.png" alt="" />
                  </div>
                  <div className="cta-card__cta">
                    <p className="cta-card__text">これでバイテックBizがまる分かり</p>
                    <a href="#" className="c-btn c-btn--outline">資料をダウンロードする</a>
                  </div>
                </div>
              </div>

              {/* Box Right */}
              <div className="cta-card fadein delay-time04">
                <p className="cta-card__label cta-card__label--blue">まずは話を聞いてみたい</p>
                <div className="cta-card__body">
                  <div className="cta-card__media">
                    <img src="/biz/assets/img/index/cta_image.svg" alt="" />
                  </div>
                  <div className="cta-card__cta">
                    <p className="cta-card__text">AI活用でのお困り事、ご相談ください</p>
                    <a href="#" className="c-btn c-btn--fill">無料相談を予約する</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="index_plan" id="plan">
          <div className="index_plan__inner u-inner">
            <h2 className="index_plan__title fadein"><em>バイテックBizの研修</em></h2>
            <h3 className="index_plan__subtitle fadein delay-time02">目的ごとに選べる2つの研修スタイル</h3>
            <p className="index_plan__desc fadein delay-time03">バイテックBizの法人向けAI研修では、企業様の抱えられている課題に合わせて、2つのタイプの研修を用意しております。</p>

            <div className="index_plan__tabs-sp">
              <button className="index_plan__tab-sp active" data-plan-tab="handson">ハンズオン研修</button>
              <button className="index_plan__tab-sp" data-plan-tab="elearning">eラーニング研修</button>
            </div>
            <div className="index_plan__cards">
              {/* ハンズオン研修 */}
              <div className="index_plan__card sp-active fadein delay-time04" data-plan-card="handson">
                <h4 className="index_plan__card-title">ハンズオン研修</h4>
                <div className="index_plan__card-img">
                  <img src="/biz/assets/img/index/img_plan_handson.webp" alt="ハンズオン研修" />
                </div>
                <p className="index_plan__card-desc">伴走サポートを通じて、社内・外で活躍できるAI活用のプロを育成します。受講者は6ヶ月の中で、基礎から社内の課題やクライアントの課題に対してのAI活用力を身につけることができます。</p>
                <table className="index_plan__table">
                  <tbody>
                    <tr><th>費用</th><td><strong className="index_plan__price">398,000</strong>円 /名</td></tr>
                    <tr><th>実施方法</th><td><strong>eラーニング+ライブ講義</strong></td></tr>
                    <tr><th>標準学習期間</th><td><strong>6ヶ月間</strong></td></tr>
                    <tr className="pc-only"><th>訓練時間</th><td><strong>20時間~</strong></td></tr>
                    <tr className="pc-only"><th>対応人数</th><td><strong>2名~</strong></td></tr>
                    <tr className="pc-only"><th>助成額</th><td><strong>最大75%</strong></td></tr>
                  </tbody>
                </table>
                <div className="index_plan__subsidy">
                  <p className="index_plan__subsidy-label">適用助成金</p>
                  <p className="index_plan__subsidy-text">人材開発支援助成金<br />【事業展開等リスキリング支援コース】</p>
                </div>
                <div className="index_plan__flow">
                  <p className="index_plan__flow-label">研修の流れ</p>
                  <p className="index_plan__flow-desc">受講者専用の学習管理システム（LMS）を活用し、(1)基礎学習 (2)課題の実施 (3)実務に応用の流れで最短で実践的なAI活用スキルを身につけていきます。</p>
                  <img src="/biz/assets/img/index/img_plan_flow_handson.svg" alt="ハンズオン研修の流れ" className="index_plan__flow-img" />
                </div>
                <div className="index_plan__recommend">
                  <p className="index_plan__recommend-label">こんな企業におすすめ</p>
                  <ul>
                    <li>生成AIツールの使い方の習得ではなく、社内のAI活用を推進できる人材育成をしたい。</li>
                    <li>社員一人ひとりの能力レベルや忙しさに合わせた、柔軟な研修プランを用意したい。</li>
                    <li>AI活用推進のリーダー育成を考えているが、内部に育成できるリソースがない。</li>
                  </ul>
                </div>
              </div>

              {/* eラーニング研修 */}
              <div className="index_plan__card fadein delay-time05" data-plan-card="elearning">
                <h4 className="index_plan__card-title">eラーニング研修</h4>
                <div className="index_plan__card-img">
                  <img src="/biz/assets/img/index/img_plan_elearning.webp" alt="eラーニング研修" />
                </div>
                <p className="index_plan__card-desc">オンデマンド方式の動画コンテンツを通じて、各職種で即戦力となるデジタル人材を育成します。実績証明付き課題の実施も可能なので、集団研修でも導入効果を実感することができます。</p>
                <table className="index_plan__table">
                  <tbody>
                    <tr><th>費用</th><td><strong className="index_plan__price">178,000</strong>円 /名</td></tr>
                    <tr><th>実施方法</th><td><strong>eラーニング</strong></td></tr>
                    <tr><th>標準学習期間</th><td><strong>2ヶ月間</strong></td></tr>
                    <tr className="pc-only"><th>訓練時間</th><td><strong>10時間~</strong></td></tr>
                    <tr className="pc-only"><th>対応人数</th><td><strong>4名~</strong></td></tr>
                    <tr className="pc-only"><th>助成額</th><td><strong>最大75%</strong></td></tr>
                  </tbody>
                </table>
                <div className="index_plan__subsidy">
                  <p className="index_plan__subsidy-label">適用助成金</p>
                  <p className="index_plan__subsidy-text">人材開発支援助成金<br />【事業展開等リスキリング支援コース】</p>
                </div>
                <div className="index_plan__flow">
                  <p className="index_plan__flow-label">研修の流れ</p>
                  <p className="index_plan__flow-desc">専門チームが制作した動画コンテンツを用い、映像で知識をインプットしつつ、学習管理システム（LMS）で学習状況を管理することで、目的に応じた実践的なスキルを幅広く習得可能です。</p>
                  <img src="/biz/assets/img/index/img_plan_flow_elearning.svg" alt="eラーニング研修の流れ" className="index_plan__flow-img" />
                </div>
                <div className="index_plan__recommend">
                  <p className="index_plan__recommend-label">こんな企業におすすめ</p>
                  <ul>
                    <li>見て理解できる体系的な教材を使い、新入社員・若手社員のデジタルスキルをスピーディーに底上げしたい。</li>
                    <li>時間・場所の制約を受けずに受講できる、柔軟な学習プログラムを導入したい。</li>
                    <li>映像コンテンツを使い、難しいデジタルスキルを直感的に理解・習得させたい。</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="index_course" id="course">
          <div className="index_course__inner">
            <p className="index_course__eyebrow font-en fadein">COURSE</p>
            <h2 className="index_course__heading fadein delay-time02">助成金を活用できるコースのご案内</h2>
            <div className="index_course__tabs fadein delay-time03">
              <button className="index_course__tab active" data-tab="chatgpt">ChatGPT</button>
              <button className="index_course__tab" data-tab="gemini">Gemini</button>
              <button className="index_course__tab" data-tab="copilot">Copilot</button>
              <button className="index_course__tab" data-tab="copilot-studio">Copilot Studio</button>
              <button className="index_course__tab" data-tab="notebooklm">NotebookLM</button>
              <button className="index_course__tab" data-tab="dify">Dify</button>
              <button className="index_course__tab" data-tab="claude">Claude</button>
              <button className="index_course__tab" data-tab="video-ai">動画生成AI</button>
            </div>

            {/* ChatGPT */}
            <div className="index_course__panel active" id="panel-chatgpt">
              <div className="index_course__content">
                <h3 className="index_course__title">ChatGPT業務活用研修</h3>
                <p className="index_course__desc">本研修は、ChatGPTを業務で活用したいビジネスパーソンを対象に、基礎理解から最新機能・実務レベルの応用までを体系的に学ぶプログラムです。無料版と有料版の違いを正しく理解したうえで、プロンプト設計・GPTs構築・外部ツール連携・データ分析・画像/動画生成など、現場で即戦力となる総合スキルを実践的に習得します。</p>
                <p className="index_course__desc">基本的な登録・設定・音声入力といった日常操作から、推論・リサーチ・画像生成といった応用テクニックまで、段階的に身につけることができます。さらに、GPTsによる自分専用AIアシスタントの構築や、ZapierおよびMCPを活用した業務自動化・外部ツール連携にも取り組みます。プロンプトエンジニアリングでは、思考型対話の設計法や100種類以上の実践事例を通じて、文書作成・分析・翻訳・開発など幅広い業務への応用力を養います。</p>
                <h4 className="index_course__subtitle">訓練内容</h4>
                <ul className="index_course__list">
                  <li><strong>受講対象者</strong>：新任担当者、中堅層</li>
                  <li><strong>目的</strong>：AI技術を活用した業務効率化、スキル向上</li>
                  <li><strong>受講方法</strong>：eラーニングとオンラインによるライブ研修の組み合わせ(ブレンディッドラーニング形式)</li>
                  <li><strong>訓練時間</strong>：合計16時間37分46秒（eラーニング: 4時間37分46秒、オンライン研修: 12時間）</li>
                  <li><strong>標準学習期間</strong>：6ヶ月</li>
                  <li><strong>研修費</strong>：398,000円(税別)</li>
                </ul>
                <div className="index_course__curriculum">
                  <div className="index_course__section">
                    <h4 className="index_course__section-title index_course__section-title--el">eラーニング</h4>
                    <div className="index_course__grid">
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター1：ChatGPTの基礎と驚異の進化</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：ChatGPTとは？基本概念と爆発的な利用拡大</p>
                          <p>レッスン2：わずか4ヶ月で激変！最新アップデートとChatGPTの全体像</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター5：AIを最大限に引き出す！プロンプトエンジニアリング</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：AIを最大限に引き出す！プロンプトエンジニアリングの極意</p>
                          <p>レッスン2：業務を自動化・効率化！ChatGPTと他AIツール連携の最適戦略</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター2：無料版ChatGPT活用術</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：無料版ChatGPTの登録と基本操作</p>
                          <p>レッスン2：無料版で思考力を倍増！賢い「推論」機能の実践</p>
                          <p>レッスン3：無料版で情報収集の質を革命！「ディープリサーチ」徹底活用</p>
                          <p>レッスン4：無料版で画像クリエイターに！「ネイティブ画像生成」の新常識</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター6：プロンプトテクニック集</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：たった一言でChatGPTの回答精度を劇的に変える方法：「ユーザー こんにちは」の効果</p>
                          <p>レッスン2：思考プロセスを明らかにして、ChatGPTを自由自在に操る：「出力まで思考ステップを初めに明らかにして」</p>
                          <p>レッスン3：「A to Zで思考して」で広範囲なトピックを体系的に網羅する</p>
                          <p>レッスン4：ChatGPTの自己評価を促す！「100点満点で出力評価し理由を加えて」</p>
                          <p>レッスン5：曖昧な回答を解消！ChatGPTから的確な情報を引き出す2つの戦略</p>
                          <p>レッスン6：過去の会話をリセットし、新たな議論へ導く「会話を一旦忘れて」</p>
                          <p>レッスン7：客観的視点から問題を深掘り！「メタ認知を使って」</p>
                          <p>レッスン8：「ラテラルシンキングを用いて」で人間を超える無限のアイデアを生み出す</p>
                          <p>レッスン9：コマンド一つで効率化！「特定の合図で改善案を出して修正」</p>
                          <p>レッスン10：「仮説と反証のプロセスで」で高解像度なアイデアを生む</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター3：設定・アプリ・音声活用術</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：安心して使いこなす！データ学習とチャット履歴の管理術</p>
                          <p>レッスン2：手間なしAIコミュニケーション！音声入力とアドバンスボイスモード</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター7：実践プロンプト20選</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：思考・企画・ブレインストーミングを加速する対話術：【最強の壁打ち相手】</p>
                          <p>レッスン2：Webサイト・SNS戦略と運用：【Webサイト分析】</p>
                          <p>レッスン3：専門文書・資料作成：【論文・PDF読解】</p>
                          <p>レッスン4：実務で役立つドキュメント・コンテンツ生成術：【画像生成&amp;編集】</p>
                          <p>レッスン5：ビジネスデータ分析とインサイト抽出：【データ分析&amp;可視化】</p>
                          <p>レッスン6：実務で役立つドキュメント・コンテンツ生成術：【議事録作成&amp;翻訳】</p>
                          <p>レッスン7：日常業務・個人利用をスマートに：【旅行計画の最適化】</p>
                          <p>レッスン8：究極のパーソナライズ：【カスタムGPTs作成】</p>
                          <p>レッスン9：専門文書・資料作成：【プレゼン資料の添削】</p>
                          <p>レッスン10：API連携の自動化：【API連携の自動化】</p>
                          <p>レッスン11：開発・技術業務の効率化：【コードデバッグ&amp;解説】</p>
                          <p>レッスン12：実務で役立つドキュメント・コンテンツ生成術：【契約書ドラフティング】</p>
                          <p>レッスン13：人事・採用業務の高度化：【採用面接の高度化】</p>
                          <p>レッスン14：カスタマーサポート改善：【カスタマーサポート改善】</p>
                          <p>レッスン15：実務で役立つドキュメント・コンテンツ生成術：【ドキュメント作成】</p>
                          <p>レッスン16：教育コンテンツ作成：【教育コンテンツ作成】</p>
                          <p>レッスン17：開発・技術業務の効率化：【APIプロトタイピング】</p>
                          <p>レッスン18：日常業務・個人利用をスマートに：【パーソナルファイナンス】</p>
                          <p>レッスン19：究極のパーソナライズ：【究極のパーソナライズ】</p>
                          <p>レッスン20：ChatGPTの真価を引き出す！外部ツール連携（MCP）の設定と活用法</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター4：有料版のChatGPT活用術</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：有料版のモデル選択と高度な推論・画像処理</p>
                          <p>レッスン2：GPTs作成マスター！自分専用AIアシスタントの設計と構築</p>
                          <p>レッスン3：最先端AIクリエーション！Soraによる動画・画像生成</p>
                          <p>レッスン4：プロプラン限定！AIエージェント「オペレーター」と連携機能</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター8：ユニット概要</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：ユニット概要</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="index_course__plus">＋</p>
                  <div className="index_course__section">
                    <h4 className="index_course__section-title index_course__section-title--ol">オンライン研修</h4>
                    <div className="index_course__grid">
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第1回：業務の細部・フローの言語化（前半）</div>
                        <div className="index_course__lessons"><p>自分の業務を「AIに伝えられる言葉」に変換するための基礎を習得。担当業務の洗い出しと、フロー図・手順書への落とし込み方を実践します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第7回：ChatGPT活用の実践ラーニング（前半）</div>
                        <div className="index_course__lessons"><p>これまでの学びを実務に落とし込む実践フェーズ。実際の業務データや案件を使い、ChatGPTと共に作業する体験を積みます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第2回：業務の細部・フローの言語化（後半）</div>
                        <div className="index_course__lessons"><p>前回の内容を深化させ、例外処理や判断基準まで含めた精度の高い業務言語化を完成させます。ChatGPTへの指示精度が格段に上がります。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第8回：ChatGPT活用の実践ラーニング（後半）</div>
                        <div className="index_course__lessons"><p>ChatGPT活用の効果を数値で捉え、継続改善するための仕組みを構築。KPI設定・振り返りサイクル・品質チェックの方法を習得します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第3回：AI業務活用課題の実施（前半）</div>
                        <div className="index_course__lessons"><p>言語化した業務にChatGPTを実際に組み込み、自分の職場で使える活用案を設計。「どの業務にどの機能を使うか」をGPTsや推論機能も含めて具体的に決めます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第9回：GPTs・プロンプト設計ワークショップ</div>
                        <div className="index_course__lessons"><p>自分専用AIアシスタント「GPTs」の設計と、業務別プロンプトの最適化を実践。再現性の高い指示設計で、日常業務への定着を図ります。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第4回：AI業務活用課題の実施（後半）</div>
                        <div className="index_course__lessons"><p>設計した活用案を実際に動かし、成果と課題を検証。うまくいかないポイントへの対処法と改善サイクルの回し方を学びます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第10回：ChatGPT業務自動化ワークショップ</div>
                        <div className="index_course__lessons"><p>ZapierやMCPなどの外部ツール連携を活用し、繰り返し業務の自動化フローを実装。実務レベルの業務効率化システムを構築します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第5回：導入ワークショップ（前半）</div>
                        <div className="index_course__lessons"><p>ChatGPTを職場・チームに広げるための導入戦略を策定。情報管理・セキュリティルールの整備も含め、周囲への説明方法と巻き込み方を実践的に習得します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第11回：作品ブラッシュアップ・改善フィードバック</div>
                        <div className="index_course__lessons"><p>これまで設計・構築した成果物に対して講師・受講生からフィードバックを受け、完成度を高めます。改善視点と自己評価力も養います。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第6回：導入ワークショップ（後半）</div>
                        <div className="index_course__lessons"><p>導入時に発生する抵抗・障壁への対処法を演習。社内ルール整備や運用定着のためのアクションプランを仕上げます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第12回：最終成果発表・今後の活用戦略設計</div>
                        <div className="index_course__lessons"><p>全12回の学びを集大成として発表。各自の「ChatGPT活用ロードマップ」を策定し、受講後も継続して成長し続けるための戦略を描きます。</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gemini */}
            <div className="index_course__panel" id="panel-gemini">
              <div className="index_course__content">
                <h3 className="index_course__title">Gemini業務活用研修</h3>
                <p className="index_course__desc">本研修は、ビジネス現場でGeminiを「実務レベル」で使いこなしたいビジネスパーソンを対象に、基礎操作から高度な業務活用までを一気通貫で学ぶプログラムです。</p>
                <p className="index_course__desc">Gemsによるカスタマイズ・Google Workspace連携・Canvas/DeepResearchを軸に、情報収集から企画・資料化・共有までのワークフローを体系的に習得します。まずGeminiの基本操作とChatGPTとの違いを整理したうえで、無料・有料・Workspaceの最適プランを選ぶ視点を身につけます。</p>
                <p className="index_course__desc">Gemini for Google Workspaceの活用では、Googleアプリと連携し、議事録の自動化や対話分析、骨子生成など実務直結のスキルを実践的に学びます。DeepResearchでの調査設計やCanvasを使ったWeb・クイズ・音声レポート生成など高度な生成ワークにも取り組み、Nano BananaおよびVeoによる画像・動画生成、まじん式プロンプトによる自動スライド生成まで幅広くカバーします。</p>
                <h4 className="index_course__subtitle">訓練内容</h4>
                <ul className="index_course__list">
                  <li><strong>受講対象者</strong>：新任担当者、中堅層</li>
                  <li><strong>目的</strong>：AI技術を活用した業務効率化、スキル向上</li>
                  <li><strong>受講方法</strong>：eラーニングとオンラインによるライブ研修の組み合わせ(ブレンディッドラーニング形式)</li>
                  <li><strong>訓練時間</strong>：合計14時間20分12秒（eラーニング: 2時間20分12秒、オンライン研修: 12時間）</li>
                  <li><strong>標準学習期間</strong>：6ヶ月</li>
                  <li><strong>研修費</strong>：398,000円(税別)</li>
                </ul>
                <div className="index_course__curriculum">
                  <div className="index_course__section">
                    <h4 className="index_course__section-title index_course__section-title--el">eラーニング</h4>
                    <div className="index_course__grid">
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター1：イントロダクション</div>
                        <div className="index_course__lessons"><p>レッスン1：ユニット概要</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター4：Gemini DeepResearchとCanvas活用</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：DeepResearch – AIによる高度な情報収集・分析術</p>
                          <p>レッスン2：Canvasへようこそ – リサーチから創造（クリエイト）へ</p>
                          <p>レッスン3：Canvas基礎① – Webページとインフォグラフィックを生成する</p>
                          <p>レッスン4：Canvas基礎② – クイズで理解度をチェック＆定着させる</p>
                          <p>レッスン5：Canvas基礎③ – 音声解説で「耳で聴く」レポートを作る</p>
                          <p>レッスン6：画像生成AI「Nano Banana」で高品質なビジュアルを作る</p>
                          <p>レッスン7：動画生成AI「Veo」でプロモーションビデオを作る</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター2：Geminiの基本と導入準備</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：イントロダクション – なぜ今Geminiなのか？ChatGPTとの決定的な違い</p>
                          <p>レッスン2：【最初の一歩】5分でマスター！Geminiの基本画面とチャット操作</p>
                          <p>レッスン3：迷わないプラン選択！無料版 vs 有料版（個人・Workspace）徹底比較</p>
                          <p>レッスン4：あなた専用AIを作る「Gems」- 業務に合わせたカスタマイズ術</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター5：Canvas応用とまじん式プロンプト活用</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：Canvas応用① – AIでスライドを作成する</p>
                          <p>レッスン2：Canvas応用② – AIが生成したスライドをさらに磨き上げる</p>
                          <p>レッスン3：Google Sites連携 – AIと作るプロジェクトサイト</p>
                          <p>レッスン4：【概念編】まじん式プロンプトとは？〜AIがスライドを自動生成する仕組み〜</p>
                          <p>レッスン5：【初期設定編】世界一丁寧な導入ガイド（GemとWebアプリの準備）</p>
                          <p>レッスン6：【基本実践編】&quot;とりあえず&quot;作ってみよう！初めてのスライド自動生成</p>
                          <p>レッスン7：【改良版】まじん式プロンプトの「カスタム設定」でデザインを自社仕様にする</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター3：Gemini for Google Workspace 実践活用</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：Gemini for Google Workspaceの全体像とビジネス利用のセキュリティ</p>
                          <p>レッスン2：【Gmail基礎編】3つの基本操作マスター（メールの要約・作成・返信）</p>
                          <p>レッスン3：【Gmail活用編】実演！日程調整とタスク管理の自動化</p>
                          <p>レッスン4：【ドライブ基礎編】膨大なファイルも一瞬！AI検索と要約の基本</p>
                          <p>レッスン5：【ドライブ活用編】複数資料を横断比較！AIによる情報抽出術</p>
                          <p>レッスン6：【ドキュメント基礎編】文章作成サポートを使いこなす</p>
                          <p>レッスン7：【ドキュメント活用編】議事録メモから企画書を一瞬で作成する</p>
                          <p>レッスン8：【スプレッドシート基礎①】AIに話しかけてデータ分析・表作成</p>
                          <p>レッスン9：【スプレッドシート基礎②】AI関数を使いこなす</p>
                          <p>レッスン10：【スプレッドシート活用編】複雑な関数と書式設定の自動化</p>
                          <p>レッスン11：【スライド基礎編】AIに骨子を作らせる基本操作</p>
                          <p>レッスン12：【スライド活用編】AIと共同でデザインを洗練させる</p>
                          <p>レッスン13：【Meet基礎編】会議の議事録作成を完全自動化する</p>
                          <p>レッスン14：【Meet活用編】AI議事録を&quot;実用レベル&quot;に仕上げる</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター6：AIリテラシーと倫理・リスク対策</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：AI活用の実践的リスク対策 – 情報漏洩・ハルシネーション・著作権</p>
                          <p>レッスン2：AI時代の倫理とガバナンス – 社会と共生するためのルール</p>
                          <p>レッスン3：まとめ – Geminiを最強のビジネスパートナーにするために</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="index_course__plus">＋</p>
                  <div className="index_course__section">
                    <h4 className="index_course__section-title index_course__section-title--ol">オンライン研修</h4>
                    <div className="index_course__grid">
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第1回：業務の細部・フローの言語化（前半）</div>
                        <div className="index_course__lessons"><p>自分の業務を「AIに伝えられる言葉」に変換するための基礎を習得。担当業務の洗い出しと、フロー図・手順書への落とし込み方を実践します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第7回：Gemini業務活用の実践ラーニング（前半）</div>
                        <div className="index_course__lessons"><p>これまでの学びを実務に落とし込む実践フェーズ。実際の業務データや案件を使い、GeminiおよびWorkspaceツールと共に作業する体験を積みます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第2回：業務の細部・フローの言語化（後半）</div>
                        <div className="index_course__lessons"><p>前回の内容を深化させ、例外処理や判断基準まで含めた精度の高い業務言語化を完成させます。Geminiへの指示精度が格段に上がります。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第8回：Gemini業務活用の実践ラーニング（後半）</div>
                        <div className="index_course__lessons"><p>Gemini活用の効果を数値で捉え、継続改善するための仕組みを構築。KPI設定・振り返りサイクル・品質チェックの方法を習得します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第3回：AI業務活用課題の実施（前半）</div>
                        <div className="index_course__lessons"><p>言語化した業務にGeminiを実際に組み込み、自分の職場で使える活用案を設計。「どの業務にどの機能を使うか」をGemsやWorkspace連携も含めて具体的に決めます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第9回：Gems・Workspace連携設計ワークショップ</div>
                        <div className="index_course__lessons"><p>自分専用AIアシスタント「Gems」の設計と、Google Workspace各アプリとの連携フローを構築。業務に最適化されたGemini環境を仕上げます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第4回：AI業務活用課題の実施（後半）</div>
                        <div className="index_course__lessons"><p>設計した活用案を実際に動かし、成果と課題を検証。うまくいかないポイントへの対処法と改善サイクルの回し方を学びます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第10回：Gemini業務自動化・連携実装ワークショップ</div>
                        <div className="index_course__lessons"><p>DeepResearch・Canvas・AppScript連携などを活用し、繰り返し業務の自動化フローを実装。実務レベルの業務効率化システムを構築します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第5回：導入ワークショップ（前半）</div>
                        <div className="index_course__lessons"><p>Geminiを職場・チームに広げるための導入戦略を策定。セキュリティや情報管理のルール整備も含め、組織への説明方法と巻き込み方を実践的に習得します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第11回：作品ブラッシュアップ・改善フィードバック</div>
                        <div className="index_course__lessons"><p>これまで制作・設計した成果物に対して講師・受講生からフィードバックを受け、完成度を高めます。改善視点と自己評価力も養います。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第6回：導入ワークショップ（後半）</div>
                        <div className="index_course__lessons"><p>導入時に発生する抵抗・障壁への対処法を演習。Workspace管理者との連携や運用定着のためのアクションプランを仕上げます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第12回：最終成果発表・今後の活用戦略設計</div>
                        <div className="index_course__lessons"><p>全12回の学びを集大成として発表。各自の「Gemini活用ロードマップ」を策定し、受講後も継続して成長し続けるための戦略を描きます。</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copilot */}
            <div className="index_course__panel" id="panel-copilot">
              <div className="index_course__content">
                <h3 className="index_course__title">Copilot業務活用研修</h3>
                <p className="index_course__desc">本研修は、Microsoft Copilotを業務で活用したいビジネスパーソンを対象に、基礎理解からMicrosoft 365アプリ連携・資料作成ワークフロー・セキュリティまでを一気通貫で習得するプログラムです。</p>
                <p className="index_course__desc">まずブラウザ版・デスクトップ版・個人向け／法人向けの違いを整理し、職場モードやCopilot Chatを使ったメール・ファイル・チャットの横断検索による意思決定の高速化を実践的に学びます。Teams・Outlook・Word・Excelとの連携では、会議要約・議事録・アクション抽出の自動化、メール要約・返信提案、文章リライト・グラフ生成・データクレンジングなど、日常業務に直結するスキルを習得します。</p>
                <p className="index_course__desc">資料作成ワークフローでは、アイデア壁打ちから骨子設計・PowerPoint自動生成・ブラッシュアップまでの一連の流れを体験します。リサーチツールやPagesを活用した高品質レポートの長文生成、Copilotによる画像生成・動画自動生成の基礎と応用にも取り組みます。</p>
                <p className="index_course__desc">さらに、エンタープライズのデータ保護・アクセス管理・社内ポリシー周知といったセキュリティと運用ルールも習得します。最終的にはCopilot Studioを使ったカスタムCopilot構築まで学び、自社の業務に最適化された形でAIを「使いこなす」力を身につけることを目指します。</p>
                <h4 className="index_course__subtitle">訓練内容</h4>
                <ul className="index_course__list">
                  <li><strong>受講対象者</strong>：新任担当者、中堅層</li>
                  <li><strong>目的</strong>：AI技術を活用した業務効率化、スキル向上</li>
                  <li><strong>受講方法</strong>：eラーニングとオンラインによるライブ研修の組み合わせ(ブレンディッドラーニング形式)</li>
                  <li><strong>訓練時間</strong>：合計16時間57分34秒（eラーニング: 4時間57分34秒、オンライン研修: 12時間）</li>
                  <li><strong>標準学習期間</strong>：6ヶ月</li>
                  <li><strong>研修費</strong>：398,000円(税別)</li>
                </ul>
                <div className="index_course__curriculum">
                  <div className="index_course__section">
                    <h4 className="index_course__section-title index_course__section-title--el">eラーニング</h4>
                    <div className="index_course__grid">
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター1：イントロダクション</div>
                        <div className="index_course__lessons"><p>レッスン1：ユニット概要</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター4：実践！Copilotを活用した資料作成術</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：AIを活用した資料作成の基本思考：丸投げではなく共同作業の視点</p>
                          <p>レッスン2：企画書作成：Copilotを使ったアイデア壁打ちと骨子作成</p>
                          <p>レッスン3：Wordの音声入力からPowerPointスライド自動生成までのワークフロー</p>
                          <p>レッスン4：リサーチツールとPagesで実現する高品質レポート作成法</p>
                          <p>レッスン5：既存資料の分析と改善：Copilotによる論点抽出と「ツッコミ」機能</p>
                          <p>レッスン6：長文報告書のWord要約と役員向けサマリープレゼンへの最適化</p>
                          <p>レッスン7：Copilotで磨くプレゼンスキル：質疑応答まで徹底シミュレーション</p>
                          <p>レッスン8：Whiteboardでのブレインストーミング：アイデアの分類と要約</p>
                          <p>レッスン9：【自己学習】40ページの英語PDF資料を10分で理解し、質問する</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター2：Copilotの基礎と全体像</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：Copilotとは？生成AIとしての基礎知識</p>
                          <p>レッスン2：Copilotをビジネスで活用する3つの主要メリット</p>
                          <p>レッスン3：Copilotの多様な種類とそれぞれの特徴（ブラウザ版・デスクトップ版）</p>
                          <p>レッスン4：Copilotの多様な種類とそれぞれの特徴（個人向け・法人向け）</p>
                          <p>レッスン5：特定用途向けCopilot（職場向けCopilot・Copilot Studio）の理解と使い分け</p>
                          <p>レッスン6：職場モード活用術：メール・ファイル・チャットをCopilot Chatで横断検索</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター5：Copilotのセキュリティとデータ保護</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：法人利用におけるCopilotのセキュリティ基盤とエンタープライズデータ保護</p>
                          <p>レッスン2：データアクセスと保存場所に関する安心の仕組みと透明性</p>
                          <p>レッスン3：Copilotを介したセキュリティポリシーの理解と従業員向け説明支援</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター3：主要なCopilotアプリケーション連携</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：Teamsでの会議議事録・会議要約の自動作成とアクションアイテム抽出</p>
                          <p>レッスン2：Outlookでのメール要約・返信文の効率的な作成とコーチング機能</p>
                          <p>レッスン3：Wordでの文章リライト・推敲と具体的なブラッシュアップ</p>
                          <p>レッスン4：Excelでのデータ結合（他テーブル参照）と数式提案</p>
                          <p>レッスン5：Excelでの複雑なデータ分析・グラフ作成と一括可視化</p>
                          <p>レッスン6：Excel：Copilotによる条件付き書式設定とデータ強調</p>
                          <p>レッスン7：Web版Excelのデータクリーニング機能：表記揺れ・スペース修正</p>
                          <p>レッスン8：Web情報からの競合比較表自動作成：Copilot（Web版）とExcelの連携</p>
                          <p>レッスン9：Wordによる音声文字起こしとCopilotでの記事自動生成</p>
                          <p>レッスン10：スクリーンショットからの文字起こしと応用活用</p>
                          <p>レッスン11：Copilotのノートブック機能：長文コンテンツの効率的な作成</p>
                          <p>レッスン12：Copilotによる画像生成の基礎と応用（広告・イラスト等）</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター6：Copilotの応用と未来展望</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：Copilotで画像生成・編集：メッセージを&quot;魅せる&quot;ポスターづくり</p>
                          <p>レッスン2：Copilotで動画を自動生成：ビジネスメッセージの訴求力を高める</p>
                          <p>レッスン3：プロンプト管理とチーム内での共有：プロンプトギャラリー機能の活用</p>
                          <p>レッスン4：カスタムCopilotの作成と自社知識の活用：Copilot Studio実践</p>
                          <p>レッスン5：グローバル業務：英文契約書の翻訳・要約とビジネスリスク分析</p>
                          <p>レッスン6：人事・採用業務の効率化：職務記述書からのスカウトメール作成とパーソナライズ</p>
                          <p>レッスン7：営業・提案書作成：Teams会議メモからのOneNote連携とWordでの骨子作成</p>
                          <p>レッスン8：IT・ヘルプデスク：業務マニュアルからのFAQチャットボット構築</p>
                          <p>レッスン9：マーケティング：顧客アンケート分析からのペルソナ・キャッチコピー作成</p>
                          <p>レッスン10：法務・コンプライアンス：社内規定の平易化と従業員向け周知資料作成</p>
                          <p>レッスン11：広報・PR：Loopコンポーネント活用によるプレスリリース共同編集効率化</p>
                          <p>レッスン12：イベント企画：テーマブレストから告知・アンケート作成までの一気通貫Copilot活用術</p>
                          <p>レッスン13：プロジェクト管理：SharePoint課題リストからのリスク報告書自動生成</p>
                          <p>レッスン14：【自己成長】世界の最新ニュースにキャッチアップ：英語力と洞察力を同時強化</p>
                          <p>レッスン15：【業務改善】複雑な業務マニュアルからボトルネックと改善案を発見</p>
                          <p>レッスン16：Copilotを自分仕様に最適化：メモリとカスタム指示活用法</p>
                          <p>レッスン17：Copilotマスターへの道：継続的な学習と業務改革</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="index_course__plus">＋</p>
                  <div className="index_course__section">
                    <h4 className="index_course__section-title index_course__section-title--ol">オンライン研修</h4>
                    <div className="index_course__grid">
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第1回：業務の細部・フローの言語化（前半）</div>
                        <div className="index_course__lessons"><p>自分の業務を「AIに伝えられる言葉」に変換するための基礎を習得。担当業務の洗い出しと、フロー図・手順書への落とし込み方を実践します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第7回：Copilot業務活用の実践ラーニング（前半）</div>
                        <div className="index_course__lessons"><p>これまでの学びを実務に落とし込む実践フェーズ。実際の業務データや案件を使い、Microsoft 365各アプリとCopilotを組み合わせて作業する体験を積みます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第2回：業務の細部・フローの言語化（後半）</div>
                        <div className="index_course__lessons"><p>前回の内容を深化させ、例外処理や判断基準まで含めた精度の高い業務言語化を完成させます。Copilotへの指示精度が格段に上がります。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第8回：Copilot業務活用の実践ラーニング（後半）</div>
                        <div className="index_course__lessons"><p>Copilot活用の効果を数値で捉え、継続改善するための仕組みを構築。KPI設定・振り返りサイクル・品質チェックの方法を習得します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第3回：AI業務活用課題の実施（前半）</div>
                        <div className="index_course__lessons"><p>言語化した業務にCopilotを実際に組み込み、自分の職場で使える活用案を設計。Teams・Outlook・Word・Excelなど日常的に使うMicrosoft 365アプリとの連携可能性を具体的に検討します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第9回：M365連携・プロンプト設計ワークショップ</div>
                        <div className="index_course__lessons"><p>Teams・Outlook・Word・Excel・PowerPointとの連携フローを整理し、業務別プロンプトの最適化を実践。プロンプトギャラリーやメモリ機能も活用し、再現性の高い指示設計で日常業務への定着を図ります。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第4回：AI業務活用課題の実施（後半）</div>
                        <div className="index_course__lessons"><p>設計した活用案を実際に動かし、成果と課題を検証。うまくいかないポイントへの対処法と改善サイクルの回し方を学びます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第10回：Copilot業務自動化・連携実装ワークショップ</div>
                        <div className="index_course__lessons"><p>Copilot Studioによるカスタムエージェント構築や、SharePoint・Loopとの連携を活用した業務自動化フローを実装。実務レベルの効率化システムを構築します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第5回：導入ワークショップ（前半）</div>
                        <div className="index_course__lessons"><p>Copilotを職場・チームに広げるための導入戦略を策定。エンタープライズデータ保護やアクセス管理など、法人利用に必要なセキュリティ設計も含め、組織への説明方法と巻き込み方を実践的に習得します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第11回：作品ブラッシュアップ・改善フィードバック</div>
                        <div className="index_course__lessons"><p>これまで設計・構築した成果物に対して講師・受講生からフィードバックを受け、完成度を高めます。改善視点と自己評価力も養います。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第6回：導入ワークショップ（後半）</div>
                        <div className="index_course__lessons"><p>導入時に発生する抵抗・障壁への対処法を演習。社内ポリシー整備や従業員への周知方法、運用定着のためのアクションプランを仕上げます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第12回：最終成果発表・今後の活用戦略設計</div>
                        <div className="index_course__lessons"><p>全12回の学びを集大成として発表。各自の「Copilot活用ロードマップ」を策定し、受講後も継続して成長し続けるための戦略を描きます。</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copilot Studio */}
            <div className="index_course__panel" id="panel-copilot-studio">
              <div className="index_course__content">
                <h3 className="index_course__title">CopilotStudio業務活用研修</h3>
                <p className="index_course__desc">本研修は、Microsoft Copilot Studioを使って業務支援AIエージェントを設計・構築できるスキルを、基礎から実践レベルまで体系的に習得するプログラムです。</p>
                <p className="index_course__desc">Lite版／Full版の違いや設計思想の理解から始まり、SharePointナレッジの活用・システムプロンプト設計・Power Automateとの連携による業務自動化まで段階的に学びます。</p>
                <p className="index_course__desc">単なるチャットボットにとどまらず、AIが主体的に処理を進める「自律型エージェント」の構築を目指し、社内FAQ対応や業務申請補助を想定した実務課題で総仕上げを行います。</p>
                <h4 className="index_course__subtitle">訓練内容</h4>
                <ul className="index_course__list">
                  <li><strong>受講対象者</strong>：新任担当者、中堅層</li>
                  <li><strong>目的</strong>：AI技術を活用した業務効率化、スキル向上</li>
                  <li><strong>受講方法</strong>：eラーニングとオンラインによるライブ研修の組み合わせ(ブレンディッドラーニング形式)</li>
                  <li><strong>訓練時間</strong>：合計14時間19分25秒（eラーニング: 2時間19分25秒、オンライン研修: 12時間）</li>
                  <li><strong>標準学習期間</strong>：6ヶ月</li>
                  <li><strong>研修費</strong>：398,000円(税別)</li>
                </ul>
                <div className="index_course__curriculum">
                  <div className="index_course__section">
                    <h4 className="index_course__section-title index_course__section-title--el">eラーニング</h4>
                    <div className="index_course__grid">
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター1：イントロダクションと基本概念</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：ユニット概要</p>
                          <p>レッスン2：Copilot Studioにある「2つの種類」：Lite版とFull版</p>
                          <p>レッスン3：受動的なチャットから能動的なエージェントへ</p>
                          <p>レッスン4：一問一答（チャット）と一連の動作（ワークフロー）</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター4：信頼性と制御の高度化</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：ハルシネーションを防ぐ：ファクトチェック機構の組み込み</p>
                          <p>レッスン2：設計思想の転換：チャット型からワークフロー型へ</p>
                          <p>レッスン3：高度なシステムプロンプト設計：複雑な業務条件の記述術</p>
                          <p>レッスン4：挙動をコントロールする：トピック設計の勘所</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター2：エージェント構築の第一歩</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：基本的な画面構成とナビゲーションのマスター</p>
                          <p>レッスン2：エージェント作成入門：最初のボットを立ち上げる</p>
                          <p>レッスン3：Copilot Studio Fullの鍵：ツールとフローの基礎知識</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター5：外部連携とUXの極意</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：UXを高める：アダプティブカードによる視覚的情の提示</p>
                          <p>レッスン2：準備編：SharePointリストの作成とデータ構造</p>
                          <p>レッスン3：Power Automateを用いたフロー構築</p>
                          <p>レッスン4：エンドツーエンドテスト：一連の動きをテスト・デバッグする</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター3：ナレッジ活用とセキュアな公開</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：社内データ特化型：SharePoint情報を活用したエージェント作成</p>
                          <p>レッスン2：ナレッジ構築の実践：ソースの登録と優先順位の管理</p>
                          <p>レッスン3：システムプロンプトの基礎：AIに「人格」と「制約」を与える</p>
                          <p>レッスン4：エージェントをチームへ公開：Microsoft Teamsへのデプロイ手順</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター6：実践Tipsと総括</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：プロンプト内に特定のトピックを埋め込む技法</p>
                          <p>レッスン2：思考を要しないフローはPower Automateへ任せる</p>
                          <p>レッスン3：まとめ：自律型エージェントが変える未来のワークスタイル</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="index_course__plus">＋</p>
                  <div className="index_course__section">
                    <h4 className="index_course__section-title index_course__section-title--ol">オンライン研修</h4>
                    <div className="index_course__grid">
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第1回：業務の細部・フローの言語化（前半）</div>
                        <div className="index_course__lessons"><p>自分の業務を「AIに伝えられる言葉」に変換するための基礎を習得。担当業務の洗い出しと、フロー図・手順書への落とし込み方を実践します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第7回：Copilot Studio業務活用の実践ラーニング（前半）</div>
                        <div className="index_course__lessons"><p>これまでの学びを実務に落とし込む実践フェーズ。実際の業務データや社内ナレッジを使い、Copilot Studioと共に作業する体験を積みます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第2回：業務の細部・フローの言語化（後半）</div>
                        <div className="index_course__lessons"><p>前回の内容を深化させ、例外処理や判断基準まで含めた精度の高い業務言語化を完成させます。エージェントへの指示精度が格段に上がります。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第8回：Copilot Studio業務活用の実践ラーニング（後半）</div>
                        <div className="index_course__lessons"><p>エージェント活用の効果を数値で捉え、継続改善するための仕組みを構築。KPI設定・振り返りサイクル・品質チェックの方法を習得します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第3回：AI業務活用課題の実施（前半）</div>
                        <div className="index_course__lessons"><p>言語化した業務にCopilot Studioを実際に組み込み、自分の職場で使えるエージェント活用案を設計。社内FAQ対応や業務申請補助など具体的なユースケースを検討します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第9回：エージェント設計・ナレッジ構築ワークショップ</div>
                        <div className="index_course__lessons"><p>SharePointナレッジを活用した社内専用エージェントの設計と、システムプロンプトによるAIの人格・制約設計を実践。組織に最適化されたエージェント環境を仕上げます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第4回：AI業務活用課題の実施（後半）</div>
                        <div className="index_course__lessons"><p>設計した活用案を実際に動かし、成果と課題を検証。うまくいかないポイントへの対処法と改善サイクルの回し方を学びます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第10回：Power Automate連携ワークショップ</div>
                        <div className="index_course__lessons"><p>Power Automateとの統合による高度な業務自動化フローを実装。思考処理と自動処理を切り分けるアーキテクチャ設計を学び、自律型エージェントを実務レベルで構築します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第5回：導入ワークショップ（前半）</div>
                        <div className="index_course__lessons"><p>Copilot Studioを職場・チームに広げるための導入戦略を策定。Teams展開やセキュリティ設計も含め、組織への説明方法と巻き込み方を実践的に習得します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第11回：作品ブラッシュアップ・改善フィードバック</div>
                        <div className="index_course__lessons"><p>これまで制作・設計した成果物に対して講師・受講生からフィードバックを受け、完成度を高めます。改善視点と自己評価力も養います。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第6回：導入ワークショップ（後半）</div>
                        <div className="index_course__lessons"><p>導入時に発生する抵抗・障壁への対処法を演習。Teams展開や社内ルール整備、運用定着のためのアクションプランを仕上げます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第12回：最終成果発表・今後の活用戦略設計</div>
                        <div className="index_course__lessons"><p>全12回の学びを集大成として発表。各自の「Copilot Studio活用ロードマップ」を策定し、受講後も継続して成長し続けるための戦略を描きます。</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* NotebookLM */}
            <div className="index_course__panel" id="panel-notebooklm">
              <div className="index_course__content">
                <h3 className="index_course__title">NotebookLM業務活用研修</h3>
                <p className="index_course__desc">本研修は、Google NotebookLMを実務レベルで使いこなしたいビジネスパーソン・学習者を対象に、情報整理・要約・分析・発信を一気通貫で行うスキルを体系的に習得するプログラムです。</p>
                <p className="index_course__desc">ソース・チャット・Studio機能を軸に、AIとの協働を最大化しながら「自分専用の学習・業務アシスタント」を構築することを目指します。ソース追加から、引用（サイテーション）を活用した質問・分析、メモによる思考整理まで、基本操作を丁寧に習得します。</p>
                <p className="index_course__desc">応用フェーズでは、AIとの対話設計による回答精度の向上、アイデア発想の壁打ち活用、マーケティング分析レポートの作成、ファクトチェックによる真偽確認など、実務直結のテクニックを習得します。</p>
                <h4 className="index_course__subtitle">訓練内容</h4>
                <ul className="index_course__list">
                  <li><strong>受講対象者</strong>：新任担当者、中堅層</li>
                  <li><strong>目的</strong>：AI技術を活用した業務効率化、スキル向上</li>
                  <li><strong>受講方法</strong>：eラーニングとオンラインによるライブ研修の組み合わせ(ブレンディッドラーニング形式)</li>
                  <li><strong>訓練時間</strong>：合計15時間17分37秒（eラーニング: 3時間17分37秒、オンライン研修: 12時間）</li>
                  <li><strong>標準学習期間</strong>：6ヶ月</li>
                  <li><strong>研修費</strong>：398,000円(税別)</li>
                </ul>
                <div className="index_course__curriculum">
                  <div className="index_course__section">
                    <h4 className="index_course__section-title index_course__section-title--el">eラーニング</h4>
                    <div className="index_course__grid">
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター1：イントロダクション</div>
                        <div className="index_course__lessons"><p>レッスン1：ユニット概要</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター5：応用テクニック</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：AIとの対話力を磨く！NotebookLMの回答精度を高めるテクニック</p>
                          <p>レッスン2：アイデアの壁打ち相手にする「クリエイティブ活用術」</p>
                          <p>レッスン3：【実践応用①】マーケター必見！競合分析レポート作成術</p>
                          <p>レッスン4：【実践応用②】読書家・学習者のための「自分だけの教科書」作成術</p>
                          <p>レッスン5：ファクトチェックの重要性 – 引用を使った真偽確認</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター2：NotebookLMの世界へようこそ</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：NotebookLMとは何か？</p>
                          <p>レッスン2：NotebookLMでできること【完成形デモ】</p>
                          <p>レッスン3：最初のノートブック作成と画面の見方</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター6：共有と実践</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：ノートブックの共有 – 知識をシェアする方法</p>
                          <p>レッスン2：【Workspaceユーザー向け】組織で使う場合の注意点</p>
                          <p>レッスン3：【実践例①】学生・研究者のための論文リサーチ術</p>
                          <p>レッスン4：【実践例②】ビジネスパーソンのための議事録＆レポート分析術</p>
                          <p>レッスン5：【実践例③】家電の取扱説明書で「専用サポートAI」を作る</p>
                          <p>レッスン6：【実践例④】社内規定で「人事・総務AIアシスタント」を作る</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター3：基本操作マスター</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：ソース（情報源）の追加① – 対応ファイルと上限</p>
                          <p>レッスン2：ソース（情報源）の追加② – 実践アップロード</p>
                          <p>レッスン3：【新機能】ソースの追加③ – Webから自動で「ソースを探す」</p>
                          <p>レッスン4：チャット機能の基本 – 質問と引用（サイテーション）</p>
                          <p>レッスン5：メモ機能の活用 – 思考を整理・保存する</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター7：まとめ</div>
                        <div className="index_course__lessons"><p>レッスン1：あなただけのAIアシスタントと共に未来へ</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター4：自動生成ビュー活用</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：Studio機能①：「音声解説」で聴く</p>
                          <p>レッスン2：Studio機能②：「動画解説」で視る</p>
                          <p>レッスン3：Studio機能③：「マインドマップ」で構造を掴む</p>
                          <p>レッスン4：Studio機能④：レポート「概要説明資料」で要点を掴む</p>
                          <p>レッスン5：Studio機能⑤：レポート「学習ガイド」で能動的な学びを設計する</p>
                          <p>レッスン6：Studio機能⑥：レポート「ブログ投稿」で情報発信を効率化する</p>
                          <p>レッスン7：Studio機能⑦：レポート「独自に作成」で思い通りの分析をさせる</p>
                          <p>レッスン8：Studio機能⑧：レポート「おすすめの形式」で新たな視点を発見する</p>
                          <p>レッスン9：Studio機能⑨：「フラッシュカード」で重要知識を暗記する</p>
                          <p>レッスン10：Studio機能⑩：「テスト」で理解度をチェックする</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="index_course__plus">＋</p>
                  <div className="index_course__section">
                    <h4 className="index_course__section-title index_course__section-title--ol">オンライン研修</h4>
                    <div className="index_course__grid">
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第1回：業務の細部・フローの言語化（前半）</div>
                        <div className="index_course__lessons"><p>自分の業務を「AIに伝えられる言葉」に変換するための基礎を習得。担当業務の洗い出しと、フロー図・手順書への落とし込み方を実践します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第7回：NotebookLM業務活用の実践ラーニング（前半）</div>
                        <div className="index_course__lessons"><p>これまでの学びを実務に落とし込む実践フェーズ。実際の業務文書や社内データをソースとして登録し、NotebookLMと共に作業する体験を積みます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第2回：業務の細部・フローの言語化（後半）</div>
                        <div className="index_course__lessons"><p>前回の内容を深化させ、例外処理や判断基準まで含めた精度の高い業務言語化を完成させます。NotebookLMへの情報整理・ソース設計の土台となる業務整理力を養います。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第8回：NotebookLM業務活用の実践ラーニング（後半）</div>
                        <div className="index_course__lessons"><p>NotebookLM活用の効果を数値で捉え、継続改善するための仕組みを構築。KPI設定・振り返りサイクル・ファクトチェックを活用した品質管理の方法を習得します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第3回：AI業務活用課題の実施（前半）</div>
                        <div className="index_course__lessons"><p>言語化した業務をもとに、NotebookLMで実現できる情報整理・分析・発信の活用案を設計。社内文書・議事録・レポートなど、自社業務への適用方法を具体的に検討します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第9回：ナレッジ設計・Studio機能活用ワークショップ</div>
                        <div className="index_course__lessons"><p>複数ソースの統合と優先順位設計、音声解説・マインドマップ・レポート生成など全10タイプのStudio機能を実践。自社業務に最適化された「専用AIアシスタント」の構築を仕上げます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第4回：AI業務活用課題の実施（後半）</div>
                        <div className="index_course__lessons"><p>設計した活用案を実際に動かし、成果と課題を検証。チャット機能・メモ機能・引用（サイテーション）を組み合わせた業務活用の改善サイクルを学びます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第10回：Workspace連携実装ワークショップ</div>
                        <div className="index_course__lessons"><p>ノートブック共有によるチーム活用とGoogle Workspace連携を実装。議事録・リサーチ・レポート分析など、組織全体でNotebookLMを活用するための実務レベルの運用体制を構築します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第5回：導入ワークショップ（前半）</div>
                        <div className="index_course__lessons"><p>NotebookLMを職場・チームに広げるための導入戦略を策定。Google Workspace環境でのセキュリティや情報管理ルールも含め、組織への説明方法と巻き込み方を実践的に習得します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第11回：作品ブラッシュアップ・改善フィードバック</div>
                        <div className="index_course__lessons"><p>これまで制作・設計した成果物に対して講師・受講生からフィードバックを受け、完成度を高めます。改善視点と自己評価力も養います。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第6回：導入ワークショップ（後半）</div>
                        <div className="index_course__lessons"><p>導入時に発生する抵抗・障壁への対処法を演習。ノートブック共有の運用設計や社内ルール整備、定着のためのアクションプランを仕上げます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第12回：最終成果発表・今後の活用戦略設計</div>
                        <div className="index_course__lessons"><p>全12回の学びを集大成として発表。各自の「NotebookLM活用ロードマップ」を策定し、受講後も継続して成長し続けるための戦略を描きます。</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dify */}
            <div className="index_course__panel" id="panel-dify">
              <div className="index_course__content">
                <h3 className="index_course__title">Dify(ディフィ)業務活用研修</h3>
                <p className="index_course__desc">本研修は、AIアプリケーションやエージェントをノーコード・ローコードで構築したいビジネスパーソン・エンジニアを対象に、Difyの基礎から実務レベルの業務自動化まで、初級から上級へ段階的に習得するプログラムです。</p>
                <p className="index_course__desc">初級では基本操作とプロンプト設計を習得し、チャットボットなどシンプルなAIアプリを構築します。主要LLMとの接続設定も含め、Difyを使いこなすための土台を固めます。</p>
                <p className="index_course__desc">中級ではワークフロー機能による複数ステップの処理設計に取り組み、外部API連携やRAGシステムの実装を通じて、業務直結のAIアプリを構築する力を養います。</p>
                <p className="index_course__desc">上級では、複数のAIエージェントが協調する「マルチエージェント設計」を学び、社内業務フローを丸ごと自動化するシステムの設計から運用までを習得します。本研修を通じて、Difyを「業務変革のインフラ」として使いこなす実践力を身につけます。</p>
                <h4 className="index_course__subtitle">訓練内容</h4>
                <ul className="index_course__list">
                  <li><strong>受講対象者</strong>：新任担当者、中堅層</li>
                  <li><strong>目的</strong>：AI技術を活用した業務効率化、スキル向上</li>
                  <li><strong>受講方法</strong>：eラーニングとオンラインによるライブ研修の組み合わせ(ブレンディッドラーニング形式)</li>
                  <li><strong>訓練時間</strong>：合計15時間39分09秒（eラーニング: 3時間39分04秒、オンライン研修: 12時間）</li>
                  <li><strong>標準学習期間</strong>：6ヶ月</li>
                  <li><strong>研修費</strong>：398,000円(税別)</li>
                </ul>
                <div className="index_course__curriculum">
                  <div className="index_course__section">
                    <h4 className="index_course__section-title index_course__section-title--el">eラーニング</h4>
                    <div className="index_course__grid">
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター1：イントロダクション</div>
                        <div className="index_course__lessons"><p>レッスン1：ユニット概要</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター5：ナレッジを作成する</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：ナレッジ作成の基本</p>
                          <p>レッスン2：テキストファイルからナレッジを作成する</p>
                          <p>レッスン3：Notionからナレッジを作成する</p>
                          <p>レッスン4：Webサイトからナレッジを作成する</p>
                          <p>レッスン5：ナレッジの管理と更新</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター2：Dify基礎知識</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：Difyとは</p>
                          <p>レッスン2：アカウント登録とワークスペースの作成</p>
                          <p>レッスン3：画面構成と主要メニューの理解</p>
                          <p>レッスン4：「探索」機能を理解する</p>
                          <p>レッスン5：「スタジオ」機能を理解する</p>
                          <p>レッスン6：「ナレッジ」機能を理解する</p>
                          <p>レッスン7：「ツール」機能を理解する</p>
                          <p>レッスン8：「モデル」について理解する</p>
                          <p>レッスン9：「DSLファイル」について理解する</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター6：ツールを活用する</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：ツール機能の基本</p>
                          <p>レッスン2：ビルトインツールを使う</p>
                          <p>レッスン3：アプリにツールを連携する</p>
                          <p>レッスン4：カスタムツールを作成する</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター3：ワークフロー</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：ワークフローとは</p>
                          <p>レッスン2：基礎ブロック（開始/LLM/終了）</p>
                          <p>レッスン3：エージェントブロック</p>
                          <p>レッスン4：条件分岐ブロック（IF-ELSE）</p>
                          <p>レッスン5：質問分類器ブロック</p>
                          <p>レッスン6：知識検索ブロック</p>
                          <p>レッスン7：パラメーター抽出ブロック</p>
                          <p>レッスン8：コードブロック</p>
                          <p>レッスン9：イテレーションブロック</p>
                          <p>レッスン10：テンプレートブロック</p>
                          <p>レッスン11：変数集約器ブロック</p>
                          <p>レッスン12：HTTPリクエストブロック</p>
                          <p>レッスン13：変数について</p>
                          <p>レッスン14：実行ログとデバッグ</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター7：応用編｜ナレッジの精度を向上させる</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：ナレッジの調整について</p>
                          <p>レッスン2：「チャンク設定」を理解する</p>
                          <p>レッスン3：「インデックスモード」を理解する</p>
                          <p>レッスン4：「埋め込みモデル」を理解する</p>
                          <p>レッスン5：検索設定の違いと特徴を理解する</p>
                          <p>レッスン6：「Rerankモデル」の調整方法</p>
                          <p>レッスン7：「トップK」の調整方法</p>
                          <p>レッスン8：「スコア閾値」の調整方法</p>
                          <p>レッスン9：「親子検索機能」を理解する</p>
                          <p>レッスン10：チャンク（知識データ）の編集方法</p>
                          <p>レッスン11：ナレッジパイプラインを作成する</p>
                          <p>レッスン12：ナレッジパイプライン機能：一般文書処理</p>
                          <p>レッスン13：ナレッジパイプライン機能：長文書処理</p>
                          <p>レッスン14：ナレッジパイプライン機能：Q&amp;A表データ抽出</p>
                          <p>レッスン15：ナレッジパイプライン機能：文書形式変換</p>
                          <p>レッスン16：ナレッジパイプライン機能：インテリジェントQ&amp;A</p>
                          <p>レッスン17：ナレッジ検索をテストする</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター4：チャットフロー</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：チャットフローとは</p>
                          <p>レッスン2：会話変数とメモリの管理</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター8：応用編｜モデルの精度を向上させる</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：モデルの調整について</p>
                          <p>レッスン2：Temperature調整方法</p>
                          <p>レッスン3：Top Pの調整方法</p>
                          <p>レッスン4：Presence Penalty調整方法</p>
                          <p>レッスン5：Frequency Penalty調整方法</p>
                          <p>レッスン6：Max Tokens調整方法</p>
                          <p>レッスン7：Stop Sequence調整方法</p>
                          <p>レッスン8：response_format（応答形式）の調整方法</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター9：FAQチャットボットを作ってみよう</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：課題概要：FAQチャットボットを作ってみよう</p>
                          <p>レッスン2：データ準備：FAQデータを登録する</p>
                          <p>レッスン3：チャットボットを構築しよう</p>
                          <p>レッスン4：公開とまとめ</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター13：LINE × Make × Difyの連携活用</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：課題概要：LINEとDifyとMakeを連携させよう</p>
                          <p>レッスン2：準備①：LINEの下準備</p>
                          <p>レッスン3：準備②：Googleシートの下準備</p>
                          <p>レッスン4：Make連携：LINEとDifyをつなぐシナリオ構築</p>
                          <p>レッスン5：Difyワークフロー構築：OCR整形とデータ登録</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター10：カスタム関数を作ってみよう</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：課題概要：カスタム関数を作ってみよう</p>
                          <p>レッスン2：スプレッドシートの設計とワークフローの構築</p>
                          <p>レッスン3：GaSの実装と動作確認</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター14：マルチエージェントでのnote記事制作</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：課題概要：マルチエージェントで記事を作ろう</p>
                          <p>レッスン2：準備：必要なAPI設定と環境構築</p>
                          <p>レッスン3：エージェント1：リサーチャーを作成する</p>
                          <p>レッスン4：エージェント2：ライターを作成する（前半）</p>
                          <p>レッスン5：エージェント2：ライターを作成する（後半）</p>
                          <p>レッスン6：エージェント3：エディターを作成する</p>
                          <p>レッスン7：エージェント4：デザイナーを作成する</p>
                          <p>レッスン8：統合：note記事作成エージェントを完成させる</p>
                          <p>レッスン9：実践テスト：記事生成からnote投稿まで</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター11：MCPサーバーとDifyで外部連携</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：課題概要：MCPでDifyと外部AIを連携させよう</p>
                          <p>レッスン2：ChatGPTとDifyをMCP連携する</p>
                          <p>レッスン3：ClaudeとDifyをMCP連携する</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター15：まとめ</div>
                        <div className="index_course__lessons"><p>レッスン1：Difyマスター講座まとめ</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター12：Sora×Difyで動画を自動生成しよう</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：課題概要：Sora × Dify で動画を自動生成しよう</p>
                          <p>レッスン2：準備①：OpenAI Video APIとSoraの仕組みを理解しよう</p>
                          <p>レッスン3：準備②：APIキーとGoogle連携を設定しよう</p>
                          <p>レッスン4：動画プロンプト生成フローを構築しよう</p>
                          <p>レッスン5：動画生成フローを構築しよう（前半）：APIリクエストとポーリング</p>
                          <p>レッスン6：動画生成フローを構築しよう（中盤）：ポーリングループ</p>
                          <p>レッスン7：動画生成フローを構築しよう（後半）：ダウンロードと自動保存</p>
                          <p>レッスン8：実践テスト：動画生成をテストしてみよう</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="index_course__plus">＋</p>
                  <div className="index_course__section">
                    <h4 className="index_course__section-title index_course__section-title--ol">オンライン研修</h4>
                    <div className="index_course__grid">
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第1回：業務の細部・フローの言語化（前半）</div>
                        <div className="index_course__lessons"><p>自分の業務を「AIに伝えられる言葉」に変換するための基礎を習得。担当業務の洗い出しと、フロー図・手順書への落とし込み方を実践します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第7回：Dify業務活用の実践ラーニング（前半）</div>
                        <div className="index_course__lessons"><p>これまでの学びを実務に落とし込む実践フェーズ。実際の業務データや社内ナレッジを使い、Difyアプリと共に作業する体験を積みます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第2回：業務の細部・フローの言語化（後半）</div>
                        <div className="index_course__lessons"><p>前回の内容を深化させ、例外処理や判断基準まで含めた精度の高い業務言語化を完成させます。Difyでのワークフロー設計の土台となる業務整理力を養います。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第8回：Dify業務活用の実践ラーニング（後半）</div>
                        <div className="index_course__lessons"><p>Dify活用の効果を数値で捉え、継続改善するための仕組みを構築。KPI設定・振り返りサイクル・実行ログを活用した品質チェックの方法を習得します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第3回：AI業務活用課題の実施（前半）</div>
                        <div className="index_course__lessons"><p>言語化した業務をもとに、Difyで実現できる自動化・効率化の活用案を設計。チャットボット・ワークフロー・エージェントの使い分けを意識しながら、自社業務への適用方法を具体的に検討します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第9回：ワークフロー設計・ナレッジ構築ワークショップ</div>
                        <div className="index_course__lessons"><p>条件分岐・反復処理・変数管理を組み合わせた実践的なワークフロー設計と、社内文書・WebサイトからのRAGナレッジ構築を実践。精度向上のためのチャンク設定やインデックスモードの最適化も学びます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第4回：AI業務活用課題の実施（後半）</div>
                        <div className="index_course__lessons"><p>設計した活用案をもとに実際にアプリを構築し、成果と課題を検証。実行ログを活用したデバッグの基本と改善サイクルの回し方を学びます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第10回：エージェント実装・外部ツール連携ワークショップ</div>
                        <div className="index_course__lessons"><p>マルチエージェント設計とMCP・外部API連携による高度な業務自動化フローを実装。LINEやスプレッドシートとの統合など、実務レベルのシステム構築を体験します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第5回：導入ワークショップ（前半）</div>
                        <div className="index_course__lessons"><p>Difyを職場・チームに展開するための導入戦略を策定。APIキー管理・セキュリティ設計・利用ルール整備も含め、組織への説明方法と巻き込み方を実践的に習得します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第11回：作品ブラッシュアップ・改善フィードバック</div>
                        <div className="index_course__lessons"><p>これまで設計・構築した成果物に対して講師・受講生からフィードバックを受け、完成度を高めます。改善視点と自己評価力も養います。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第6回：導入ワークショップ（後半）</div>
                        <div className="index_course__lessons"><p>導入時に発生する抵抗・障壁への対処法を演習。クラウド版・オンプレミス版の選択基準や運用定着のためのアクションプランを仕上げます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第12回：最終成果発表・今後の活用戦略設計</div>
                        <div className="index_course__lessons"><p>全12回の学びを集大成として発表。各自の「Dify活用ロードマップ」を策定し、受講後も継続して成長し続けるための戦略を描きます。</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Claude */}
            <div className="index_course__panel" id="panel-claude">
              <div className="index_course__content">
                <h3 className="index_course__title">Claude業務活用研修(準備中)</h3>
                <p className="index_course__desc">本研修は、Claudeを業務で使いこなしたいビジネスパーソンを対象に、基本操作から高度な活用まで体系的に習得するプログラムです。</p>
                <p className="index_course__desc">ChatGPTとの違いや特性の理解から始まり、Claudeが得意とする長文処理・複雑な推論・精緻な文章生成を活かした実務活用を実践的に学びます。プロジェクト機能を使った情報整理や、業務別プロンプト設計、ドキュメント分析・要約・レポート生成など、現場で即戦力となるスキルを習得します。</p>
                <p className="index_course__desc">あわせて、ターミナル上でAIと協働しながらコードを書き・修正し・実行できる開発環境「Claude Code」にも触れ、エンジニアや技術に関心のあるビジネスパーソンが自動化やツール開発へ踏み出すきっかけを提供します。</p>
                <p className="index_course__desc">Claudeの安全設計や情報取り扱いの考え方も押さえ、安心して業務に導入できる実践力を身につけることを目指します。</p>
                <h4 className="index_course__subtitle">訓練内容</h4>
                <ul className="index_course__list">
                  <li><strong>受講対象者</strong>：新任担当者、中堅層</li>
                  <li><strong>目的</strong>：AI技術を活用した業務効率化、スキル向上</li>
                  <li><strong>受講方法</strong>：eラーニングとオンラインによるライブ研修の組み合わせ(ブレンディッドラーニング形式)</li>
                  <li><strong>訓練時間</strong>：-</li>
                  <li><strong>標準学習期間</strong>：6ヶ月</li>
                  <li><strong>研修費</strong>：398,000円(税別)</li>
                </ul>
                <div className="index_course__curriculum">
                  <div className="index_course__section">
                    <h4 className="index_course__section-title index_course__section-title--el">eラーニング</h4>
                    <div className="index_course__grid">
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター1：イントロダクション</div>
                        <div className="index_course__lessons"><p>レッスン1：ユニット概要</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター5：ドキュメント処理・長文活用・要約術</div>
                        <div className="index_course__lessons"><p>レッスン1：準備中</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター2：Claudeの基礎理解と導入</div>
                        <div className="index_course__lessons"><p>レッスン1：準備中</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター6：Claude in Chrome</div>
                        <div className="index_course__lessons"><p>レッスン1：準備中</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター3：基本操作マスター</div>
                        <div className="index_course__lessons"><p>レッスン1：準備中</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター7：Claude in Excel 実践</div>
                        <div className="index_course__lessons"><p>レッスン1：準備中</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター4：プロジェクト・コネクタ・メモリ機能</div>
                        <div className="index_course__lessons"><p>レッスン1：準備中</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター8：Claude in PowerPoint 実践</div>
                        <div className="index_course__lessons"><p>レッスン1：準備中</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター9：Claude Cowork</div>
                        <div className="index_course__lessons"><p>レッスン1：準備中</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター10：Agent Skills 理解編</div>
                        <div className="index_course__lessons"><p>レッスン1：準備中</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター11：Agent Skills 作成・活用編</div>
                        <div className="index_course__lessons"><p>レッスン1：準備中</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター12：実践編｜Claude × Agent Skills</div>
                        <div className="index_course__lessons"><p>レッスン1：準備中</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター13：Claude Code 入門 (非エンジニア向け)</div>
                        <div className="index_course__lessons"><p>レッスン1：準備中</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター14：Claudeの限界を知り、使いこなす</div>
                        <div className="index_course__lessons"><p>レッスン1：準備中</p></div>
                      </div>
                    </div>
                  </div>
                  <p className="index_course__plus">＋</p>
                  <div className="index_course__section">
                    <h4 className="index_course__section-title index_course__section-title--ol">オンライン研修</h4>
                    <div className="index_course__grid">
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第1回：業務の細部・フローの言語化（前半）</div>
                        <div className="index_course__lessons"><p>自分の業務を「AIに伝えられる言葉」に変換するための基礎を習得。担当業務の洗い出しと、フロー図・手順書への落とし込み方を実践します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第7回：Claude業務活用の実践ラーニング（前半）</div>
                        <div className="index_course__lessons"><p>これまでの学びを実務に落とし込む実践フェーズ。実際の業務データや案件を使い、Claudeと共に作業する体験を積みます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第2回：業務の細部・フローの言語化（後半）</div>
                        <div className="index_course__lessons"><p>前回の内容を深化させ、例外処理や判断基準まで含めた精度の高い業務言語化を完成させます。Claudeへの指示精度が格段に上がります。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第8回：Claude業務活用の実践ラーニング（後半）</div>
                        <div className="index_course__lessons"><p>Claude活用の効果を数値で捉え、継続改善するための仕組みを構築。KPI設定・振り返りサイクル・品質チェックの方法を習得します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第3回：AI業務活用課題の実施（前半）</div>
                        <div className="index_course__lessons"><p>言語化した業務にClaudeを実際に組み込み、自分の職場で使える活用案を設計。長文処理・文書分析・複雑な推論など、Claudeの得意領域を活かした活用方法を具体的に検討します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第9回：プロンプト設計ワークショップ</div>
                        <div className="index_course__lessons"><p>Claudeのプロジェクト機能を活用した情報整理と、業務別プロンプトの最適化を実践。再現性の高い指示設計で、日常業務への定着を図ります。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第4回：AI業務活用課題の実施（後半）</div>
                        <div className="index_course__lessons"><p>設計した活用案を実際に動かし、成果と課題を検証。うまくいかないポイントへの対処法と改善サイクルの回し方を学びます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第10回：業務自動化・MCP連携実装ワークショップ</div>
                        <div className="index_course__lessons"><p>MCP（Model Context Protocol）を活用した外部ツール連携と業務自動化フローを実装。Claudeを基軸とした実務レベルの効率化システムを構築します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第5回：導入ワークショップ（前半）</div>
                        <div className="index_course__lessons"><p>Claudeを職場・チームに広げるための導入戦略を策定。情報管理・セキュリティルールの整備も含め、周囲への説明方法と巻き込み方を実践的に習得します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第11回：作品ブラッシュアップ・改善フィードバック</div>
                        <div className="index_course__lessons"><p>これまで設計・構築した成果物に対して講師・受講生からフィードバックを受け、完成度を高めます。改善視点と自己評価力も養います。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第6回：導入ワークショップ（後半）</div>
                        <div className="index_course__lessons"><p>導入時に発生する抵抗・障壁への対処法を演習。社内ルール整備や運用定着のためのアクションプランを仕上げます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第12回：最終成果発表・今後の活用戦略設計</div>
                        <div className="index_course__lessons"><p>全12回の学びを集大成として発表。各自の「Claude活用ロードマップ」を策定し、受講後も継続して成長し続けるための戦略を描きます。</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 動画生成AI */}
            <div className="index_course__panel" id="panel-video-ai">
              <div className="index_course__content">
                <h3 className="index_course__title">動画クリエイターコース</h3>
                <p className="index_course__desc">本研修は、AI初心者から動画制作未経験者を対象に、最新のAI動画生成ツールを体系的かつ実践的に学ぶプログラムです。</p>
                <p className="index_course__desc">ビジネスやSNS発信において重要性が高まる動画制作を、専門的な編集スキルがなくても実現できる力を身につけます。主要AI動画ツールの合体像を理解したうえで、Runway・Pika・Veo 3・Soraなどの特徴を体験し、自分に合ったツールを選ぶ視点を身につけます。</p>
                <p className="index_course__desc">あわせて、動画の「構成力」や視聴者を引き込む導入・本編・締めの設計方法も実践的に学習します。さらに、成果を左右するプロンプト設計について、基本構造や目的の反映方法、クオリティを高める工夫、生成失敗時のリカバリーまでを習得します。専用語を避け、研修中に「学んですぐ使える」内容が特長です。</p>
                <h4 className="index_course__subtitle">訓練内容</h4>
                <ul className="index_course__list">
                  <li><strong>受講対象者</strong>：新任担当者、中堅層</li>
                  <li><strong>目的</strong>：AI技術を活用した業務効率化、スキル向上</li>
                  <li><strong>受講方法</strong>：eラーニングとオンラインによるライブ研修の組み合わせ(ブレンディッドラーニング形式)</li>
                  <li><strong>訓練時間</strong>：合計15時間39分09秒（eラーニング: 3時間39分04秒、オンライン研修: 12時間）</li>
                  <li><strong>標準学習期間</strong>：6ヶ月</li>
                  <li><strong>研修費</strong>：398,000円(税別)</li>
                </ul>
                <div className="index_course__curriculum">
                  <div className="index_course__section">
                    <h4 className="index_course__section-title index_course__section-title--el">eラーニング</h4>
                    <div className="index_course__grid">
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター1：イントロダクション</div>
                        <div className="index_course__lessons"><p>レッスン1：ユニット概要</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター3：伝えたい内容を正確に届ける&quot;本編設計&quot;</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：構成とは？動画の&quot;骨組み&quot;を理解しよう</p>
                          <p>レッスン2：視聴者の心をつかむ&quot;導入&quot;とは</p>
                          <p>レッスン3：伝えたい内容をスッキリ整理する&quot;本編設計&quot;</p>
                          <p>レッスン4：印象を残す&quot;締め&quot;の設計方法</p>
                          <p>レッスン5：構成づくりの実践ワーク</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター2：AI動画ツールを触ってみよう（操作編）</div>
                        <div className="index_course__lessons">
                          <p>レッスン1：主要AI動画ツールの全体像</p>
                          <p>レッスン2：Runwayで&quot;動く映像&quot;をつくってみよう</p>
                          <p>レッスン3：Pikaで&quot;スタイリッシュな動き&quot;を体験</p>
                          <p>レッスン4：Veo 3で&quot;映画のようなクオリティ&quot;を実現</p>
                          <p>レッスン5：Soraで&quot;物語のある世界&quot;を創造しよう</p>
                          <p>レッスン6：Klingで&quot;驚異の滑らかさ&quot;を体験しよう</p>
                          <p>レッスン7：自分に合うツールを選ぶヒント</p>
                        </div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>チャプター4：印象を残す&quot;締め&quot;の設計方法</div>
                        <div className="index_course__lessons"><p>レッスン1：準備中</p></div>
                      </div>
                    </div>
                  </div>
                  <p className="index_course__plus">＋</p>
                  <div className="index_course__section">
                    <h4 className="index_course__section-title index_course__section-title--ol">オンライン研修</h4>
                    <div className="index_course__grid">
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第1回：業務の細部・フローの言語化（前半）</div>
                        <div className="index_course__lessons"><p>自分の業務を「AIに伝えられる言葉」に変換するための基礎を習得。担当業務の洗い出しと、フロー図・手順書への落とし込み方を実践します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第7回：業務活用の実践ラーニング（前半）</div>
                        <div className="index_course__lessons"><p>これまでの学びを実務に落とし込む実践フェーズ。実際の業務データや案件を使い、AIと共に作業する体験を積みます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第2回：業務の細部・フローの言語化（後半）</div>
                        <div className="index_course__lessons"><p>前回の内容を深化させ、例外処理や判断基準まで含めた精度の高い業務言語化を完成させます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第8回：AI業務活用のモニタリングワークショップ（後半）</div>
                        <div className="index_course__lessons"><p>AI活用の効果を数値で捉え、継続改善するための仕組みを構築。KPI設定・振り返りサイクル・品質チェックの方法を習得します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第3回：AI業務活用課題の実施（前半）</div>
                        <div className="index_course__lessons"><p>言語化した業務にAIを実際に組み込み、自分の職場で使える活用案を設計。「どの業務にどのAIツールを使うか」を具体的に決めます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第9回：AI動画生画設計ワークショップ</div>
                        <div className="index_course__lessons"><p>生成AIを使った動画コンテンツの企画・構成設計を学びます。ツール選定から台本・絵コンテの作り方まで、動画制作の全体像を把握します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第4回：AI業務活用課題の実施（後半）</div>
                        <div className="index_course__lessons"><p>設計した活用案を実際に動かし、成果と課題を検証。うまくいかないポイントへの対処法と改善サイクルの回し方を学びます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第10回：AI動画制作実装ワークショップ</div>
                        <div className="index_course__lessons"><p>設計した動画を実際に生成AIで制作。映像・ナレーション・字幕の生成と編集を通じて、実務レベルのAI動画制作スキルを身につけます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第5回：導入ワークショップ（前半）</div>
                        <div className="index_course__lessons"><p>AI活用を職場・チームに広げるための導入戦略を策定。周囲への説明方法や巻き込み方のポイントを実践的に習得します。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第11回：作品ブラッシュアップ・改善フィードバック</div>
                        <div className="index_course__lessons"><p>これまで制作・設計した成果物に対して講師・受講生からフィードバックを受け、完成度を高めます。改善視点と自己評価力も養います。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第6回：導入ワークショップ（後半）</div>
                        <div className="index_course__lessons"><p>導入時に発生する抵抗・障壁への対処法を演習。社内ルール整備や運用定着のためのアクションプランを仕上げます。</p></div>
                      </div>
                      <div className="index_course__accordion">
                        <div className="index_course__grid-item" data-accordion>第12回：最終成果発表・今後の活用戦略設計</div>
                        <div className="index_course__lessons"><p>全12回の学びを集大成として発表。各自の「AI活用ロードマップ」を策定し、受講後も継続して成長し続けるための戦略を描きます。</p></div>
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
                        各領域の専門家達による<br />ハンズオンの伴走型サポート
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
                <h3 className="index_feature__heading"><span>課題・ゴールに合わせた</span>オーダーメイドカリキュラム</h3>
                <p className="index_feature__desc">バイテックBizは、貴社の課題とゴールから逆算して学習ロードマップを設計。初心者でも迷わず最短で課題解決・ゴールに必要なAIスキルの習得が可能です。毎日の小さな「できた」を積み上げ、理解で止まらず 実践と成長を加速させます。</p>
              </div>
              <div className="index_feature__detail__image fadein delay-time02">
                <img src="/biz/assets/img/index/img_index_feature_001.png" alt="課題・ゴールに合わせたオーダーメイドカリキュラム" />
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
                <li className="index_feature__section__slider__list__item"><img src="/biz/assets/img/index/img_index_feature_slider01.jpg" alt="" /></li>
                <li className="index_feature__section__slider__list__item"><img src="/biz/assets/img/index/img_index_feature_slider02.jpg" alt="" /></li>
                <li className="index_feature__section__slider__list__item"><img src="/biz/assets/img/index/img_index_feature_slider03.jpg" alt="" /></li>
                <li className="index_feature__section__slider__list__item"><img src="/biz/assets/img/index/img_index_feature_slider04.jpg" alt="" /></li>
                <li className="index_feature__section__slider__list__item"><img src="/biz/assets/img/index/img_index_feature_slider05.jpg" alt="" /></li>
                <li className="index_feature__section__slider__list__item"><img src="/biz/assets/img/index/img_index_feature_slider06.jpg" alt="" /></li>
                <li className="index_feature__section__slider__list__item"><img src="/biz/assets/img/index/img_index_feature_slider07.jpg" alt="" /></li>
              </ul>
            </div>
          </div>

          {/* ========== 02 ========== */}
          <div id="i_feature02" className="index_feature__detail index_feature__detail--02">
            <div className="index_feature__detail__inner u-inner">
              <div className="index_feature__detail__text fadein">
                <p className="index_feature__label"><span className="font-en">02</span>あらゆる課題に対応する</p>
                <h3 className="index_feature__heading"><span>各AI領域の専門家達による</span>複数名での伴走型サポート</h3>
                <p className="index_feature__desc">様々な業務課題が存在するからこそ、複数名体制でのサポートが必要となります。あらゆる角度からのフィードバックやアドバイスで、組織・チームをゴールまで導きます。</p>
              </div>
              <div className="index_feature__detail__image fadein delay-time02">
                <img src="/biz/assets/img/index/img_index_feature_002.png" alt="各AI領域の専門家達による複数名での伴走型サポート" />
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
                    そして日々の疑問に答えるAI専門のテクニカルサポートの複数名体制で伴走。
                  </p>
                </div>
                <div className="index_feature__section__image index_feature__section__image--02"></div>
              </div>
            </div>
            <div className="index_feature__section__slider fadein delay-time02">
              <h3 className="index_feature__section__heading head__02"><span>確かな経験と各領域に特化した</span>AIコンサルタント</h3>
              <ul className="index_feature__section__slider__list">
                <li className="index_feature__section__slider__list__item"><img src="/biz/assets/img/index/instructor/instructor_05.webp" alt="池田 義国" /></li>
                <li className="index_feature__section__slider__list__item"><img src="/biz/assets/img/index/instructor/instructor_06.webp" alt="那須 太陽" /></li>
                <li className="index_feature__section__slider__list__item"><img src="/biz/assets/img/index/instructor/instructor_01.webp" alt="後藤 暁子" /></li>
                <li className="index_feature__section__slider__list__item"><img src="/biz/assets/img/index/instructor/instructor_04.webp" alt="野口 侑渡" /></li>
                <li className="index_feature__section__slider__list__item"><img src="/biz/assets/img/index/instructor/instructor_02.webp" alt="椿 明人" /></li>
                <li className="index_feature__section__slider__list__item"><img src="/biz/assets/img/index/instructor/instructor_03.webp" alt="田中 省吾" /></li>
              </ul>
            </div>
          </div>

          {/* ========== 03 ========== */}
          <div id="i_feature03" className="index_feature__detail index_feature__detail--03">
            <div className="index_feature__detail__inner u-inner">
              <div className="index_feature__detail__text fadein">
                <p className="index_feature__label"><span className="font-en">03</span>個人のAI活用で終わらない</p>
                <h3 className="index_feature__heading">チーム全体で実施する<span>組織横断型の研修プログラム</span></h3>
                <p className="index_feature__desc">バイテックBizの学びは、個々の習得を部署・チームの壁を越えて連鎖させ、全社でAIを当たり前にすることがゴールです。個人の「できた」を組織の競争力に変えるまで、我々が伴走します。</p>
              </div>
              <div className="index_feature__detail__image fadein delay-time02">
                <img src="/biz/assets/img/index/img_index_feature_003.png" alt="チーム全体で実施する組織横断型の研修プログラム" />
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
              <div className="index_feature__section__image"><img src="/biz/assets/img/index/img_index_feature_003_02.png" alt="" /></div>
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
                  <img src="/biz/assets/img/index/img_index_benefits_01.svg" alt="AI活用前後" />
                </div>
                <h3 className="index_benefits__item__heading">ルーティン業務・雑務を90%削減</h3>
                <p className="index_benefits__item__text">
                  申請チェック、データ突合、定型メール作成、レポ整形をテンプレ化して自動処理。<br />
                  担当は確認or承認のみ——ムダな待ち時間と手作業を排除します。
                </p>
              </div>
              {/* 2 */}
              <div className="index_benefits__item fadein delay-time04">
                <div className="index_benefits__item__image">
                  <img src="/biz/assets/img/index/img_index_benefits_02.svg" alt="AI活用率" />
                </div>
                <h3 className="index_benefits__item__heading">組織・チーム内での<br className="pc-only" />AI活用の定着</h3>
                <p className="index_benefits__item__text">
                  AIの使用ガイドライン整備から業務フローの中で適切な生成AIを導入。<br />
                  活用のしやすさと成果へのインパクトを実現します。
                </p>
              </div>
              {/* 3 */}
              <div className="index_benefits__item fadein delay-time05">
                <div className="index_benefits__item__image">
                  <img src="/biz/assets/img/index/img_index_benefits_03.svg" alt="生産性向上" />
                </div>
                <h3 className="index_benefits__item__heading">チーム・組織の<br className="pc-only" />生産性70%向上</h3>
                <p className="index_benefits__item__text">
                  定型入力・転記・確認を自動化し、差分レビューのみでボトルネック解消。<br />
                  全体の生産性向上を実現します。
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
                <li className="index_works__section__slider__list__item"><img src="/biz/assets/img/index/img_index_works_s01.jpg" alt="" /></li>
                <li className="index_works__section__slider__list__item"><img src="/biz/assets/img/index/img_index_works_s02.jpg" alt="" /></li>
                <li className="index_works__section__slider__list__item"><img src="/biz/assets/img/index/img_index_works_s03.jpg" alt="" /></li>
                <li className="index_works__section__slider__list__item"><img src="/biz/assets/img/index/img_index_works_s04.jpg" alt="" /></li>
                <li className="index_works__section__slider__list__item"><img src="/biz/assets/img/index/img_index_works_s05.jpg" alt="" /></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="index_subsidy">
          <div className="index_subsidy__inner">
            <div className="index_subsidy__card fadein">
              {/* 上段：見出し */}
              <h2 className="index_subsidy__heading">
                バイテックBizは<br />
                <span className="index_subsidy__heading-accent">厚生労働省の「人材開発支援助成金」</span>の申請が可能です。
              </h2>
              {/* 下段：2カラム */}
              <div className="index_subsidy__body">
                <div className="index_subsidy__text-col">
                  <h3 className="index_subsidy__detail-title">人材開発支援助成金とは</h3>
                  <p className="index_subsidy__detail-text">
                    従業員に<strong>新しい知識や技術</strong>を身につけさせるための教育・研修にかかる費用の一部を、<strong>国が負担してくれる</strong>仕組みです。この助成金を活用することで、<strong>企業は自社の負担</strong>を抑えながら、従業員のスキル向上に取り組むことができます。
                  </p>
                  <p className="index_subsidy__detail-note">
                    ※本補助金の交付を保証するものではございません。本記載内容は、令和5年6月26日時点で厚生労働省から公表されている資料をもとに作成しております。実際に助成金を申請される際は、必ず厚生労働省のホームページ等で最新の情報をご確認ください。
                  </p>
                </div>
                <div className="index_subsidy__img-col">
                  <img src="/biz/assets/img/index/img_subsidy_illust.svg" alt="人材開発支援助成金のイメージ" />
                </div>
              </div>
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
                    <img src="/biz/assets/img/index/index_cta_l_img.png" alt="" />
                  </div>
                  <div className="cta-card__cta">
                    <p className="cta-card__text">これでバイテックBizがまる分かり</p>
                    <a href="#" className="c-btn c-btn--outline">資料をダウンロードする</a>
                  </div>
                </div>
              </div>

              {/* Box Right */}
              <div className="cta-card fadein delay-time04">
                <p className="cta-card__label cta-card__label--blue">まずは話を聞いてみたい</p>
                <div className="cta-card__body">
                  <div className="cta-card__media">
                    <img src="/biz/assets/img/index/cta_image.svg" alt="" />
                  </div>
                  <div className="cta-card__cta">
                    <p className="cta-card__text">AI活用でのお困り事、ご相談ください</p>
                    <a href="#" className="c-btn c-btn--fill">無料相談を予約する</a>
                  </div>
                </div>
              </div>
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
                <div className="index_flow__item__icon"><img src="/biz/assets/img/index/index_flow__item__icon_01.png" alt="" /></div>
                <p className="index_flow__item__text">
                  まずは無料の個別相談をご予約ください
                </p>
              </div>
              <div className="index_flow__arrow"></div>
              {/* STEP 2 */}
              <div className="index_flow__item fadein delay-time03">
                <p className="index_flow__item__number">02</p>
                <h3 className="index_flow__item__title">ヒアリング・ご提案</h3>
                <div className="index_flow__item__icon"><img src="/biz/assets/img/index/index_flow__item__icon_02.png" alt="" /></div>
                <p className="index_flow__item__text">
                  現状をヒアリングし、貴社に最適な研修プログラムを提案します
                </p>
              </div>
              <div className="index_flow__arrow"></div>
              {/* STEP 3 */}
              <div className="index_flow__item fadein delay-time04">
                <p className="index_flow__item__number">03</p>
                <h3 className="index_flow__item__title">研修スタート</h3>
                <div className="index_flow__item__icon"><img src="/biz/assets/img/index/index_flow__item__icon_03.png" alt="" /></div>
                <p className="index_flow__item__text">
                  課題・ゴールに最適化した研修サポート体制を構築します
                </p>
              </div>
              <div className="index_flow__arrow"></div>
              {/* STEP 4 */}
              <div className="index_flow__item fadein delay-time05">
                <p className="index_flow__item__number">04</p>
                <h3 className="index_flow__item__title">モニタリング</h3>
                <div className="index_flow__item__icon"><img src="/biz/assets/img/index/index_flow__item__icon_04.png" alt="" /></div>
                <p className="index_flow__item__text">
                  研修の実施に伴い、ゴールに対してどのくらい効果があったのかを計測します
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
                  個人単位でAIスキルを上げるだけではチーム・組織単位でのAIは不可能ですので、バイテックBizなら失敗しない生成AI導入研修が可能です。</p>
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

      <footer className="footer">
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
              <li><a href="#">お役立ち資料</a></li>
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
              <li><a href="https://www.librex.co.jp/" target="_blank" rel="noopener">会社概要</a></li>
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
          <img src="/biz/assets/img/common/ft-logo_w.svg" alt="footer logo" className="footer__logo" />
          <p className="footer__copy">2025 Librex Inc.</p>
        </div>
      </footer>

      {/* External Scripts */}
      <Script src="/biz/assets/js/jquery-3.7.1.min.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js" strategy="afterInteractive" />
      <Script src="/biz/assets/slick/slick.min.js" strategy="afterInteractive" />
      <Script src="/biz/assets/js/anime.min.js" strategy="afterInteractive" />
      <Script src="/biz/assets/js/scrollMonitor.js" strategy="afterInteractive" />
      <Script src="/biz/assets/js/revealFx.js" strategy="afterInteractive" />
      <Script src="/biz/assets/js/main.js" strategy="afterInteractive" />
      <Script src="/biz/assets/js/scripts.js" strategy="afterInteractive" />
      <Script src="https://sdk.form.run/js/v2/embed.js" strategy="afterInteractive" />
      <Script id="logo-scroll" strategy="afterInteractive">{`
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
      `}</Script>
    </>
  )
}
