import Script from 'next/script'
import Image from 'next/image'
import { R2Carousel, R3Carousel, R5Carousel } from "./components/carousels"

export default function BytechPage() {
  return (
    <>

      {/* ===== HEADER ===== */}
      <header className="header">
        <div className="header__inner">
          {/* ロゴ + ナビ カード */}
          <div className="header__bar">
            <div className="header__logo">
              <a href="/bytech">
                <img src="/bytech/assets/images/logo-black.svg" alt="バイテック生成AI" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav__list">
                <li><a href="/support" target="_blank">サポート詳細</a></li>
                <li>
                  <a href="#courses">コース一覧</a>
                  <div className="header__dropdown">
                    <a href="/chatgpt-master" target="_blank">ChatGPTマスターコース</a>
                    <a href="/gemini-master" target="_blank">Geminiマスターコース</a>
                    <a href="/copilot-master" target="_blank">Copilotマスターコース</a>
                    <a href="/dify-master" target="_blank">Difyマスターコース</a>
                    <a href="/notebooklm-master" target="_blank">NotebookLMマスターコース</a>
                    <a href="/business-worker" target="_blank">ビジネスワーカーコース</a>
                    <a href="/ai-writer" target="_blank">AIウェブライターコース</a>
                    <a href="/ai-image-creator" target="_blank">AI画像クリエイターコース</a>
                    <a href="/ai-movie-creator" target="_blank">AI動画クリエイターコース</a>
                    <a href="https://generative-ai.bytech.jp/generative-ai-passport/" target="_blank">生成AIパスポート試験対策コース</a>
                  </div>
                </li>
                <li><a href="/plan" target="_blank">料金プラン</a></li>
                <li><a href="https://bytech.jp/blog/category/interview/" target="_blank">受講生インタビュー</a></li>
                <li><a href="#faq">よくある質問</a></li>
                <li className="header__nav__divider" aria-hidden="true" />
                <li><a href="https://bytech.jp/biz" target="_blank">法人研修 ↗</a></li>
              </ul>
            </nav>

            {/* CTAボタン（SVG画像＋パルスアニメ） */}
            <a href="/counseling" target="_blank" className="header__cta">
              <img src="/bytech/assets/images/cta-consultation.svg" alt="まずは無料で相談してみる" />
            </a>

            {/* ハンバーガーボタン（SP用） */}
            <button className="header__hamburger" id="headerHamburger" aria-label="メニューを開く" aria-expanded="false">
              <span /><span /><span />
            </button>
          </div>

          {/* SP ドロワーナビ */}
          <nav className="header__nav-drawer" id="headerNavDrawer" aria-hidden="true">
            <ul className="header__nav-drawer__list">
              <li><a href="/support">サポート詳細</a></li>
              <li className="header__nav-drawer__item">
                <button className="header__nav-drawer__toggle">コース一覧 <span className="arrow">▼</span></button>
                <ul className="header__nav-drawer__sub">
                  <li><a href="/chatgpt-master">ChatGPTマスターコース</a></li>
                  <li><a href="/gemini-master">Geminiマスターコース</a></li>
                  <li><a href="/copilot-master">Copilotマスターコース</a></li>
                  <li><a href="/dify-master">DIfyマスターコース</a></li>
                  <li><a href="/notebooklm-master">NotebookLMマスターコース</a></li>
                  <li><a href="/business-worker">ビジネスワーカーコース</a></li>
                  <li><a href="/ai-writer">AIウェブライターコース</a></li>
                  <li><a href="/ai-image-creator">AI画像クリエイターコース</a></li>
                  <li><a href="/ai-movie-creator">AI動画クリエイターコース</a></li>
                  <li><a href="https://generative-ai.bytech.jp/generative-ai-passport/">生成AIパスポート試験対策コース</a></li>
                </ul>
              </li>
              <li><a href="/plan">料金プラン</a></li>
              <li><a href="https://bytech.jp/blog/category/interview/">受講生インタビュー</a></li>
              <li><a href="#faq">よくある質問</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="hero">
        {/* 背景画像: PC=合成画像(女性+紫BG) / SP=女性のみ縦長 */}
        <Image
          src="/bytech/assets/images/hero-bg-from-generative-ai.bytech.jp.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero__bg hero__bg-pc"
        />
        <Image
          src="/bytech/assets/images/Gemini_Generated_Image_vu6vv2vu6vv2vu6v.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero__bg hero__bg-sp"
        />

        <div className="hero__inner">

          {/* ── PC専用コンテンツ（タブレット・SP非表示） ── */}
          <div className="hero__body-pc hide-tablet hide-sp">
            {/* 見出し 1行目: 最短2ヶ月で、 */}
            <h2 className="hero__heading hero__heading-line1">
              未経験から最短<span className="lg">2</span>ヶ月で、
            </h2>

            {/* 見出し 2行目: 年収・キャリアを上げる（紫ボックス） */}
            <h2 className="hero__heading hero__heading-line2">
              <span className="highlight">稼げるAIスキル<span className="sm"></span><span className="sm">を</span>武器に。</span>
            </h2>

            {/* サブテキスト */}
            <p className="hero__sub">成果直結の実践型オンラインAIスクール</p>

            {/* 統計バッジ（SP非表示） */}
            <div className="hero__badges hide-sp">
              <img src="/bytech/assets/images/stats-badge-bar.svg" alt="案件獲得率95% 受講生満足度96% カリキュラム数600以上" />
            </div>

            {/* CTAボタン */}
            <div className="hero-cta-wrapper">
              <a href="/counseling" target="_blank" className="hero__cta">
                <img src="/bytech/assets/images/plan/cta-setsumeikai-3.webp" alt="無料カウンセリングで相談する" />
              </a>
            </div>
            {/* 注釈 */}
            <p className="hero__note">
              ※1_2025年1月~8月受講生・卒業生300名へのアンケート調査　※2_2025年1月~8月受講生・卒業生300名へのアンケート調査　※3_2024年4月~2025年4月受講生・卒業生合計で算出
            </p>
          </div>

          {/* ── SP・タブレット専用コンテンツ（PC非表示） ── */}
          <div className="hero__body-sp hide-pc">
            {/* ロゴ（SP・タブレット表示） */}
            <div className="hero__sp-widget hero__sp-widget--logo">
              <div className="hero__logo-sp">
                <img src="/bytech/assets/images/group-18733-1.svg" alt="バイテック生成AI" />
              </div>
            </div>

            {/* 見出し 1行目 */}
            <div className="hero__sp-widget hero__sp-widget--line1">
              <h2 className="hero__heading hero__heading--sp hero__heading-line1">
                未経験から最短<span className="lg">2</span>ヶ月で、
              </h2>
            </div>

            {/* 見出し 2行目（紫背景） */}
            <div className="hero__sp-widget hero__sp-widget--line2">
              <h2 className="hero__heading hero__heading--sp hero__heading-line2">
                <span className="hero__heading-sp-highlight">稼げるAIスキル<span className="sm">を</span>武器に。</span>
              </h2>
            </div>

            {/* 統計バッジ（SP専用・タブレット非表示） */}
            <div className="hero__sp-widget hero__sp-widget--stats hide-tablet">
              <div className="hero__stats-sp">
                <img src="/bytech/assets/images/group-18722.svg" alt="案件獲得率95% 受講生満足度96% カリキュラム数600以上" />
              </div>
            </div>

            {/* 注釈 */}
            <div className="hero__sp-widget hero__sp-widget--notes">
              <p className="hero__note-sp">
                ※1_2025年1月~8月受講生・卒業生300名へのアンケート調査<br />
                ※2_2025年1月~8月受講生・卒業生300名へのアンケート調査<br />
                ※3_2024年4月~2025年4月受講生・卒業生合計で算出
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ===== CONSULTATION FORM (mobile only) ===== */}
      <section className="consult-form-section">
        <h2 className="consult-form__heading">まずは無料で相談！</h2>
        <h3 className="consult-form__subheading">▼ <span className="accent">今日、明日</span>の空き枠を確認する ▼</h3>
        <div className="cs-wrapper">
          <div className="cs-header"></div>
          <div className="cs-progress">
            <div className="cs-step active" data-s="1">
              <div className="cs-dot"><span className="cs-dot-num">1</span></div>
              <span className="cs-dot-label">日時選択</span>
            </div>
            <div className="cs-conn half"><div className="cs-conn-fill"></div></div>
            <div className="cs-step" data-s="2">
              <div className="cs-dot"><span className="cs-dot-num">2</span></div>
              <span className="cs-dot-label">お客様情報</span>
            </div>
            <div className="cs-conn"><div className="cs-conn-fill"></div></div>
            <div className="cs-step" data-s="3">
              <div className="cs-dot"><span className="cs-dot-num">3</span></div>
              <span className="cs-dot-label">確認・送信</span>
            </div>
          </div>
          <div className="cs-card">
            <div className="cs-card-accent"></div>
            <div className="cs-card-body">
              {/* Step 1: 日時選択 */}
              <div className="cs-panel active" id="csStep1">
                <div className="cs-day-toggle">
                  <button className="cs-day-btn active" id="csBtnToday">
                    今日<span className="cs-day-label" id="csTodayLabel"></span>
                  </button>
                  <button className="cs-day-btn" id="csBtnTomorrow">
                    明日<span className="cs-day-label" id="csTomorrowLabel"></span>
                  </button>
                </div>
                <div className="cs-slots" id="csSlots">
                  <div className="cs-skeleton"></div>
                  <div className="cs-skeleton"></div>
                  <div className="cs-skeleton"></div>
                  <div className="cs-skeleton"></div>
                  <div className="cs-skeleton"></div>
                  <div className="cs-skeleton"></div>
                </div>
                <div className="cs-btn-row">
                  <button className="cs-btn cs-btn-next" id="csBtnStep1" disabled>
                    <span className="cs-btn-text">次へ進む</span>
                  </button>
                </div>
              </div>

              {/* Step 2: お客様情報 */}
              <div className="cs-panel" id="csStep2">
                <div className="cs-time-bar">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <span id="csTimeBarText">-</span>
                </div>
                <div className="cs-field">
                  <label className="cs-label">お名前 <span className="cs-req">必須</span></label>
                  <input type="text" className="cs-input" id="csName" placeholder="例：山田 太郎" />
                  <div className="cs-err" id="csErrName">お名前を入力してください</div>
                </div>
                <div className="cs-field">
                  <label className="cs-label">メールアドレス <span className="cs-req">必須</span></label>
                  <input type="email" className="cs-input" id="csEmail" placeholder="例：taro@example.com" />
                  <div className="cs-err" id="csErrEmail">正しいメールアドレスを入力してください</div>
                </div>
                <div className="cs-field">
                  <label className="cs-label">電話番号 <span className="cs-req">必須</span></label>
                  <input type="tel" className="cs-input" id="csPhone" placeholder="例：090-1234-5678" />
                  <div className="cs-err" id="csErrPhone">電話番号を入力してください</div>
                </div>
                <div className="cs-btn-row">
                  <button className="cs-btn cs-btn-back" id="csBtnStep2Back">戻る</button>
                  <button className="cs-btn cs-btn-next" id="csBtnStep2Next"><span className="cs-btn-text">確認画面へ</span></button>
                </div>
              </div>

              {/* Step 3: 確認・送信 */}
              <div className="cs-panel" id="csStep3">
                <div className="cs-confirm">
                  <div className="cs-confirm__heading">予約内容</div>
                  <div className="cs-confirm__row"><span className="cs-confirm__label">日時</span><span className="cs-confirm__value" id="csConfTime">-</span></div>
                  <div className="cs-confirm__row"><span className="cs-confirm__label">お名前</span><span className="cs-confirm__value" id="csConfName">-</span></div>
                  <div className="cs-confirm__row"><span className="cs-confirm__label">メール</span><span className="cs-confirm__value cs-confirm__value--email" id="csConfEmail">-</span></div>
                  <div className="cs-confirm__row"><span className="cs-confirm__label">電話番号</span><span className="cs-confirm__value" id="csConfPhone">-</span></div>
                </div>
                <div className="cs-btn-row">
                  <button className="cs-btn cs-btn-back" id="csBtnStep3Back">修正する</button>
                  <button className="cs-btn cs-btn-submit" id="csBtnSubmit"><span className="cs-btn-text">この内容で予約する</span><div className="cs-spinner"></div></button>
                </div>
                <div className="cs-privacy">
                  送信いただいた情報は<a href="https://bytech.jp/biz/privacy-policy/" target="_blank">プライバシーポリシー</a>・<a href="https://bytech.jp/biz/user-terms/" target="_blank">利用規約</a>に基づき適切に管理いたします。
                </div>
              </div>
            </div>
          </div>
          <div className="cs-counter" id="csCounter">1 / 3</div>
          <div className="cs-view-all">
            <a href="/counseling">全ての日程を見る
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ===== STUDENT VOICES ===== */}
      <section className="voices">
        <div className="voices__overlay" />
        <div className="voices__inner">
          <h2 className="voices__heading-sp">未経験からAIスキルを<br />成果に繋げている受講生の方々</h2>
          <div className="voices__underline-sp">
            <img src="/bytech/assets/images/underline.svg" alt="" />
          </div>
          <div className="voices__carousel-wrap">
            <button className="voices__btn voices__btn--prev" type="button" aria-label="前へ">
              <svg viewBox="0 0 1000 1000" aria-hidden="true"><path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"/></svg>
            </button>
            <div className="voices__carousel" id="voicesCarousel">
              <div className="voices__item"><img src="/bytech/assets/images/artboard-5.webp" alt="受講生の声" loading="lazy" /></div>
              <div className="voices__item"><img src="/bytech/assets/images/artboard-1.webp" alt="受講生の声" loading="lazy" /></div>
              <div className="voices__item"><img src="/bytech/assets/images/artboard-6.webp" alt="受講生の声" loading="lazy" /></div>
              <div className="voices__item"><img src="/bytech/assets/images/artboard-4.webp" alt="受講生の声" loading="lazy" /></div>
              <div className="voices__item"><img src="/bytech/assets/images/artboard-19-v.webp" alt="受講生の声" loading="lazy" /></div>
              <div className="voices__item"><img src="/bytech/assets/images/artboard-7.webp" alt="受講生の声" loading="lazy" /></div>
              <div className="voices__item"><img src="/bytech/assets/images/artboard-2.webp" alt="受講生の声" loading="lazy" /></div>
              <div className="voices__item"><img src="/bytech/assets/images/artboard-20-v.webp" alt="受講生の声" loading="lazy" /></div>
              <div className="voices__item"><img src="/bytech/assets/images/artboard-3.webp" alt="受講生の声" loading="lazy" /></div>
              <div className="voices__item"><img src="/bytech/assets/images/artboard-9.webp" alt="受講生の声" loading="lazy" /></div>
              <div className="voices__item"><img src="/bytech/assets/images/artboard-8.webp" alt="受講生の声" loading="lazy" /></div>
              <div className="voices__item"><img src="/bytech/assets/images/artboard-18.webp" alt="受講生の声" loading="lazy" /></div>
              <div className="voices__item"><img src="/bytech/assets/images/artboard-10.webp" alt="受講生の声" loading="lazy" /></div>
            </div>
            <button className="voices__btn voices__btn--next" type="button" aria-label="次へ">
              <svg viewBox="0 0 1000 1000" aria-hidden="true"><path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"/></svg>
            </button>
          </div>
          <div className="voices__dots" id="voicesDots">
            <button className="voices__dot active" type="button" />
            <button className="voices__dot" type="button" />
            <button className="voices__dot" type="button" />
            <button className="voices__dot" type="button" />
            <button className="voices__dot" type="button" />
            <button className="voices__dot" type="button" />
            <button className="voices__dot" type="button" />
            <button className="voices__dot" type="button" />
            <button className="voices__dot" type="button" />
            <button className="voices__dot" type="button" />
            <button className="voices__dot" type="button" />
            <button className="voices__dot" type="button" />
            <button className="voices__dot" type="button" />
          </div>
        </div>
      </section>

      {/* ===== CAMPAIGN BANNER ===== */}
      <section className="campaign-banner">
        <div className="campaign-banner__inner">
          <div className="campaign-banner__media">
            <a
              href="/counseling"
              target="_blank"
              rel="noopener noreferrer"
              className="campaign-banner__link"
            >
              <img
                src="/bytech/assets/images/2man-off-2048x991.webp"
                alt="キャンペーンのお知らせ"
                className="campaign-banner__image"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="about">
        <div className="about__card fadein">

          {/* floating badge — 9edc72a: group-20884.svg */}
          <div className="about__badge">
            <img src="/bytech/assets/images/group-20884.svg" alt="" />
          </div>

          {/* two-column body — 8094411: flex row, gap 60px, margin-top 50px */}
          <div className="about__body">

            {/* left column — 83e0441 / 3a3c346 */}
            <div className="about__body-left">
              {/* d7f5bb2: SP-only no1.svg above text */}
              <div className="about__no1-sp hide-pc hide-tablet">
                <img src="/bytech/assets/images/no1.svg" alt="AIがおすすめする生成AIスクール No.1" />
              </div>
              <div className="about__body-text">
                {/* b1a013e: 24px #191722 */}
                <h2 className="about__heading-main">
                  未経験から実践ベースでAI活用スキルを学び、
                </h2>
                {/* 92b744d: 34px #fff on primary bg */}
                <h2 className="about__heading-highlight">
                  最短で実務で使える成果に繋げる
                </h2>
                {/* 93841b4: 22px #191722 */}
                <p className="about__sub">超実践型のオンラインAIスクール</p>
              </div>
            </div>

            {/* right column — 356c516: desktop/tablet only */}
            <div className="about__body-right hide-sp">
              <div className="about__no1">
                <img
                  src="/bytech/assets/images/no1.svg"
                  alt="AIがおすすめする生成AIスクール No.1"
                />
              </div>
            </div>

          </div>

          {/* KV image */}
          <div className="about__kv">
            <img src="/bytech/assets/images/KV2.webp" alt="バイテック生成AI" loading="lazy" />
          </div>

          <p className="about__note">
            ※ 調査期間：2025年1月~2026年1月・調査会社：株式会社Librex・対象条件：ChatGPT / Gemini / Claude / Gensparkでの検索結果
          </p>

        </div>

      </section>

      {/* ===== ABOUT SP STATS (adb3ee1 — SP only) ===== */}
      <section className="about-sp-stats">
        <div className="about-sp-stats__inner">
          {/* divider top */}
          <div className="about-sp-stats__divider-wrap">
            <hr className="about-sp-stats__divider" />
          </div>
          {/* heading: 累計2500人以上の受講生の生成AI技術の習得をサポート */}
          <h2 className="about-sp-stats__heading">
            累計<span className="accent">2500</span>人以上の受講生の<br />生成AI技術の習得をサポート
          </h2>
          {/* divider bottom */}
          <div className="about-sp-stats__divider-wrap">
            <hr className="about-sp-stats__divider" />
          </div>
          {/* KV wide image */}
          <div className="about-sp-stats__kv">
            <img src="/bytech/assets/images/KV_11zon.webp" alt="" loading="lazy" />
          </div>
          {/* person photos — stacked 100% width on SP */}
          <div className="about-sp-stats__photo about-sp-stats__photo--first">
            <img src="/bytech/assets/images/ozaki-1.webp" alt="" loading="lazy" />
          </div>
          <div className="about-sp-stats__photo about-sp-stats__photo--second">
            <img src="/bytech/assets/images/iida-1.webp" alt="" loading="lazy" />
          </div>
        </div>
        {/* tilt shape divider bottom — fills with voice-section purple */}
        <div className="about-sp-stats__shape" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            
          </svg>
        </div>
        
      </section>
      {/* ===== IF YOU HAD AI SKILLS ===== */}
      {/* e7cb04a + d392fac */}
      <section className="voice-section">
        {/* e7cb04a / 6eae7bf: heading block — straddles about/voice-section boundary on PC; appears below about-sp-stats__shape on SP */}
        <div className="voice-section__heading fadein">
          <img
            src="/bytech/assets/images/yajirushi.svg"
            alt=""
            className="voice-section__arrow"
            aria-hidden="true"
          />
          <img
            src="/bytech/assets/images/2months-change.svg"
            alt="2ヶ月でこう変わる"
            className="voice-section__ttl-deco"
          />
          <p className="voice-section__en">If you had AI utilization skills</p>
        </div>
        <div className="voice-section__inner">

          

          {/* d392fac: carousel section with cta_bg */}
          <div className="voice-carousel-section">

            {/* 8abba32: carousel wrap — width 80% on mobile */}
            <div className="voice-carousel-wrap">
              <button className="voice-carousel__btn voice-carousel__btn--prev" type="button" aria-label="前へ" id="voiceCardPrev">
                <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"/></svg>
              </button>

              {/* 6f3df4d: 4-slides carousel */}
              <div className="voice-carousel" id="voiceCarouselViewport">
                <div className="voice-carousel__track" id="voiceTrack">
                  <div className="voice-card">
                    <img src="/bytech/assets/images/artboard-14-5.webp" alt="受講生の声1" loading="lazy" />
                  </div>
                  <div className="voice-card">
                    <img src="/bytech/assets/images/artboard-7-1.webp" alt="受講生の声2" loading="lazy" />
                  </div>
                  <div className="voice-card">
                    <img src="/bytech/assets/images/artboard-18-7.webp" alt="受講生の声3" loading="lazy" />
                  </div>
                  <div className="voice-card">
                    <img src="/bytech/assets/images/artboard-17-6.webp" alt="受講生の声4" loading="lazy" />
                  </div>
                  <div className="voice-card">
                    <img src="/bytech/assets/images/uehara-1-1.webp" alt="受講生の声5" loading="lazy" />
                  </div>
                  <div className="voice-card">
                    <img src="/bytech/assets/images/artboard-10-4.webp" alt="受講生の声6" loading="lazy" />
                  </div>
                  <div className="voice-card">
                    <img src="/bytech/assets/images/artboard-9-3.webp" alt="受講生の声7" loading="lazy" />
                  </div>
                </div>
              </div>

              <button className="voice-carousel__btn voice-carousel__btn--next" type="button" aria-label="次へ" id="voiceCardNext">
                <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"/></svg>
              </button>
            </div>

            {/* pagination dots — 7 slides */}
            <div className="voice-carousel__pagination" id="voiceCarouselPagination">
              <button className="voice-carousel__dot is-active" type="button" aria-label="スライド1" />
              <button className="voice-carousel__dot" type="button" aria-label="スライド2" />
              <button className="voice-carousel__dot" type="button" aria-label="スライド3" />
              <button className="voice-carousel__dot" type="button" aria-label="スライド4" />
              <button className="voice-carousel__dot" type="button" aria-label="スライド5" />
              <button className="voice-carousel__dot" type="button" aria-label="スライド6" />
              <button className="voice-carousel__dot" type="button" aria-label="スライド7" />
            </div>

            {/* 7e2f1b0: disclaimer text */}
            <p className="voice-section__disclaimer">※個人の感想・実績であり、効果を保証するものではありません</p>

            {/* 347e5ba: CTA button — flex-direction row-reverse, icon on right */}
            <div className="voice-section__cta fadein">
              <a
                href="https://bytech.jp/blog/category/interview/"
                target="_blank"
                rel="noopener noreferrer"
                className="voice-section__cta-btn"
              >
                受講生インタビューを見る
                <svg aria-hidden="true" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"/></svg>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section id="problem">

        <div className="problem__inner">
          <div className="problem__head fadein">
            {/* desktop heading */}
            <h2 className="problem__h2">こんなお悩み・課題ありませんか？</h2>
            {/* SP heading */}
            <h2 className="problem__h2-sp">こんな<br /><span className="accent">お悩み・課題</span>ありませんか？</h2>
            <p className="problem__label">PROBLEM</p>
          </div>

          <div className="problem__body fadein">
            <div className="problem__illust">
              <img src="/bytech/assets/images/wp/Isometric-man-with-laptop-working-on-sofa-at-his-house.svg" alt="お悩みイラスト" />
            </div>

            <div className="problem__list">
              <div className="problem__item">
                <span className="problem__icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs><linearGradient id="iconGrad1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#4f3bf2"/><stop offset="100%" stopColor="#523bc9"/></linearGradient></defs>
                    <circle cx="12" cy="12" r="12" fill="url(#iconGrad1)" />
                    <polyline points="18 8 10 16 6 12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="problem__item-text">ChatGPTは毎日使っているが<span className="hl">使いこなせている</span>気がしない</p>
              </div>
              <div className="problem__item">
                <span className="problem__icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs><linearGradient id="iconGrad2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#4f3bf2"/><stop offset="100%" stopColor="#523bc9"/></linearGradient></defs>
                    <circle cx="12" cy="12" r="12" fill="url(#iconGrad2)" />
                    <polyline points="18 8 10 16 6 12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="problem__item-text">欲しい回答が出ないのでAIが本当に<span className="hl">仕事で使えるか</span>疑問</p>
              </div>
              <div className="problem__item">
                <span className="problem__icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs><linearGradient id="iconGrad3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#4f3bf2"/><stop offset="100%" stopColor="#523bc9"/></linearGradient></defs>
                    <circle cx="12" cy="12" r="12" fill="url(#iconGrad3)" />
                    <polyline points="18 8 10 16 6 12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="problem__item-text">Xで情報収集はしてるが早くて<span className="hl">全く追いつけない</span></p>
              </div>
              <div className="problem__item">
                <span className="problem__icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs><linearGradient id="iconGrad4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#4f3bf2"/><stop offset="100%" stopColor="#523bc9"/></linearGradient></defs>
                    <circle cx="12" cy="12" r="12" fill="url(#iconGrad4)" />
                    <polyline points="18 8 10 16 6 12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="problem__item-text">無料セミナーに参加はしたが<span className="hl">実践レベルでは使えない</span></p>
              </div>
              <div className="problem__item">
                <span className="problem__icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs><linearGradient id="iconGrad5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#4f3bf2"/><stop offset="100%" stopColor="#523bc9"/></linearGradient></defs>
                    <circle cx="12" cy="12" r="12" fill="url(#iconGrad5)" />
                    <polyline points="18 8 10 16 6 12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="problem__item-text">AI副業の情報は<span className="hl">詐欺っぽい物ばかり</span>で不安</p>
              </div>
            </div>
          </div>

          <div className="problem__bottom">
            <div className="problem__arrow fadein">
              <img src="/bytech/assets/images/yajirushi2.svg" alt="" className="problem__arrow-img" aria-hidden="true" />
            </div>

            <div className="problem__cta fadein">
              <div className="problem__badge">バイテックなら</div>
              <h3 className="problem__subtitle-pc">
                <span>{'"あなたが欲しい"AI活用スキルを最短で習得'}</span>
              </h3>
              <p className="problem__subtitle-sp"><span>必要なAI活用スキルを最短で習得</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ENVIRONMENT ===== */}
      <section id="environment_wrapper">
        <section id="environment">
          {/* Triangle shape divider — white triangle cuts into dark section */}
          <div className="env__shape-top">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 73" preserveAspectRatio="none">
              <polygon points="500,73 0,0 1000,0" fill="#ffffff" />
            </svg>
          </div>

          {/* ── elementor-element-3af9416e ── */}
          <div className="env3af fadein">

            {/* 86fc962: heading block */}
            <div className="env3af__head">
              {/* 84e1b66: desktop heading */}
              <h2 className="env3af__h2">最短で成果に繋げるバイテック独自の学習環境</h2>
              {/* f345ac3: mobile heading */}
              <h2 className="env3af__h2-mobile">最短で成果に繋げる<br />バイテック独自の学習環境</h2>
              {/* f942961: ENVIRONMENT label */}
              <p className="env3af__label">ENVIRONMENT</p>
            </div>

            {/* 3eda783: unique box — dividers + deco + subheadings */}
            <div className="env3af__body">
              {/* 67b4bce: slash divider */}
              <div className="env3af__divider" />
              {/* c6b2bd6: path-36598.svg (desktop) */}
              <img
                src="/bytech/assets/images/path-36598.svg"
                alt="あなたの課題解決やゴール達成に必要な学習環境を設計"
                className="env3af__deco-desktop"
              />
              {/* 21cf8a9: group-20914.svg (mobile) */}
              <img
                src="/bytech/assets/images/group-20914.svg"
                alt="Unique"
                className="env3af__deco-mobile"
              />
              {/* 68206a1: slash divider */}
              <div className="env3af__divider" />
              {/* 6fb2cab8 */}
              <h2 className="env3af__sub1">あなた専用のカリキュラムとサポートで</h2>
              {/* 84e12ea */}
              <h2 className="env3af__sub2">最短で学びを成果に変える</h2>
            </div>

            {/* 7910406: 3 feature images with × separators */}
            <div className="env3af__images">
              {/* fc98640: グループ-20897 */}
              <div className="env3af__img">
                <img src="/bytech/assets/images/group-20897.webp" alt="600以上のカリキュラム" loading="lazy" />
              </div>
              {/* 632b683: × separator */}
              <div className="env3af__sep">
                <img src="/bytech/assets/images/×.svg" alt="×" />
              </div>
              {/* 2de6772: グループ-20895-1 */}
              <div className="env3af__img">
                <img src="/bytech/assets/images/group-20895-1.webp" alt="AI活用コンサルティング" loading="lazy" />
              </div>
              {/* 2f3b46b: × separator */}
              <div className="env3af__sep">
                <img src="/bytech/assets/images/×.svg" alt="×" />
              </div>
              {/* ff33265: グループ-20896-1 */}
              <div className="env3af__img">
                <img src="/bytech/assets/images/group-20896-1.webp" alt="100種以上の実践課題" loading="lazy" />
              </div>
            </div>

          </div>
        
          {/* Mentor card — overlaps the bottom of this section */}
          <div className="env__mentor-wrap fadein">
            <div className="env__mentor">
              <div className="env__mentor-shape-top" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                  <path className="env__mentor-shape-fill" d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"/>
                </svg>
              </div>
              <div className="env__mentor-heading-frame">
                <img
                  src="/bytech/assets/images/instructor-title.svg"
                  alt="AI業界の最前線で活躍する講師陣があなたのできたらいいなを現実にします！"
                  className="env__mentor-heading"
                />
              </div>
              <p className="env__mentor-sub">
                20名以上の様々な領域に特化したメンターの中から<br />
                あなたの課題とゴールに最適な専任AIメンターがゴールまで徹底サポート
              </p>

              <div className="env__mentor-grid">
                {/* PC: composite grid image */}
                <img
                  src="/bytech/assets/images/instructors-1.webp"
                  alt="講師陣"
                  loading="lazy"
                  className="env__mentor-grid-img env__mentor-grid-img--pc"
                />
                {/* SP: mobile-optimised composite image */}
                <img
                  src="/bytech/assets/images/group-16191.webp"
                  alt="講師陣"
                  loading="lazy"
                  className="env__mentor-grid-img env__mentor-grid-img--sp"
                />
              </div>

              <div className="env__mentor-cta">
                <a href="/counseling" target="_blank">
                  <img
                    src="/bytech/assets/images/cta-counseling.webp"
                    alt="まずは無料で相談してみる"
                    style={{display: 'block', width: '100%', maxWidth: '500px', height: 'auto'}}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
      

      {/* ===== 5 REASONS ===== */}
      <section className="features u-section" id="aboutus">
        
        <div className="features__inner">
          <div className="features__background">
            <div className="env__arrow-wrap">
              <img
                src="/bytech/assets/images/yajirushi.svg"
                alt="矢印"
                className="env__arrow"
              />
            </div>
          {/* Section heading */}
          <div className="reason-head fadein">
            <h2 className="reason-head__ttl">バイテックが最短で<br />実務レベルのAI人材を育成できる<br /><span>5つの理由</span></h2>
            <p className="reason-head__sub">REASON</p>
          </div>
          

          <div className="reason-list">

            {/* Reason 1 */}
            <div className="reason-item fadein">
              <div className="reason-item__row">
                <div className="reason-item__text">
                  <div className="reason-item__badge-row">
                    <span className="reason-item__num-badge">01</span>
                    <span className="reason-item__label">生涯学習が可能な</span>
                  </div>
                  <img src="/bytech/assets/images/group-18615.svg" alt="" className="reason-item__divider-img" />
                  <h3 className="reason-item__h3">受講目的に合わせて学習できる<br /><span>10コース600以上の</span>カリキュラム</h3>
                  <p className="reason-item__body">ChatGPTやGeminiなどの主要AIマスターコースからAI副業で収益化を目指せる副業コースまで、全て買い切りで無期限で見ることができます。受講生の課題や目的に合わせてカリキュラムをカスタマイズできるので、自分に必要なAI活用スキルを身につけることが可能です。</p>
                </div>
                <div className="reason-item__img">
                  <img src="/bytech/assets/images/s2-1024x716.webp" alt="600以上のカリキュラム" loading="lazy" />
                </div>
              </div>
              <div className="reason-item__sub_wrapper">
                <div className="reason-sub__card">
                  {/* Desktop heading (hidden on mobile) */}
                  <h4 className="reason-sub__card-ttl">最新のAIスキルが学べるアップデートされるカリキュラム</h4>
                  {/* Mobile heading (hidden on desktop/tablet) */}
                  <h4 className="reason-sub__card-ttl--mobile"><span style={{color:'#533AFC'}}>最新のAIスキル</span>が学べる<br />アップデートされるカリキュラム</h4>
                  <p className="reason-sub__card-body">カリキュラムは毎月追加・アップデートされているので、継続して最新のカリキュラムを学習することができます。</p>
                  <img src="/bytech/assets/images/group-16195.svg" alt="" className="reason-sub__card-progress" />
                  {/* Course cards slider */}
                  <div className="course-slider">
                    <div className="course-slider__col">
                      <div className="course-card-sp">
                        <img src="/bytech/assets/images/group-16172-4.webp" alt="ChatGPTマスターコース" className="course-card-sp__img" />
                        <div className="course-card-sp__body">
                          <div className="course-card-sp__title">ChatGPTマスターコース</div>
                          <div className="course-card-sp__sub">全8チャプター｜45レッスン</div>
                          <div className="course-card-sp__desc">ChatGPTの基本操作から、プロンプト設計、メール・資料・アイデア出しからZapier・MCPとの連携など実務応用まで体系的に学ぶコースです。</div>
                        </div>
                      </div>
                    </div>
                    <div className="course-slider__col">
                      <div className="course-card-sp">
                        <img src="/bytech/assets/images/group-16203-2-1-1024x685.webp" alt="Geminiマスターコース" className="course-card-sp__img" />
                        <div className="course-card-sp__body">
                          <div className="course-card-sp__title">Claudeマスターコース</div>
                          <div className="course-card-sp__sub">全14チャプター｜81レッスン</div>
                          <div className="course-card-sp__desc">Claudeの基本操作から、思考を引き出すプロンプト設計、長文処理、業務アプリ連携、Claude Cowork・Codeを駆使したエージェント開発を学ぶコースです。</div>
                        </div>
                      </div>
                    </div>
                    <div className="course-slider__col">
                      <div className="course-card-sp">
                        <img src="/bytech/assets/images/group-16175-7.webp" alt="Geminiマスターコース" className="course-card-sp__img" />
                        <div className="course-card-sp__body">
                          <div className="course-card-sp__title">Geminiマスターコース</div>
                          <div className="course-card-sp__sub">全6チャプター｜36レッスン</div>
                          <div className="course-card-sp__desc">Gmail・スプレッドシート・スライドなど、Googleサービスと連携したGeminiの活用方法を学ぶコースです。</div>
                        </div>
                      </div>
                    </div>
                    <div className="course-slider__col">
                      <div className="course-card-sp">
                        <img src="/bytech/assets/images/group-16173-5.webp" alt="Copilotマスターコース" className="course-card-sp__img" />
                        <div className="course-card-sp__body">
                          <div className="course-card-sp__title">Copilotマスターコース</div>
                          <div className="course-card-sp__sub">全6チャプター｜48レッスン</div>
                          <div className="course-card-sp__desc">Microsoft 365に組み込まれたCopilotを使い、文書作成、資料作成、データ整理の工数を減らす実践的なスキルを身につけるコースです。</div>
                        </div>
                      </div>
                    </div>
                    <div className="course-slider__col">
                      <div className="course-card-sp">
                        <img src="/bytech/assets/images/group-16174-6.webp" alt="Difyマスターコース" className="course-card-sp__img" />
                        <div className="course-card-sp__body">
                          <div className="course-card-sp__title">Difyマスターコース</div>
                          <div className="course-card-sp__sub">全21チャプター｜82レッスン</div>
                          <div className="course-card-sp__desc">Dify(ディフィ)を活用して、申請フローや顧客管理、レポート自動化などの簡易システムを構築する方法を学ぶコースです。</div>
                        </div>
                      </div>
                    </div>
                    <div className="course-slider__col">
                      <div className="course-card-sp">
                        <img src="/bytech/assets/images/group-16176-8.webp" alt="NotebookLMマスターコース" className="course-card-sp__img" />
                        <div className="course-card-sp__body">
                          <div className="course-card-sp__title">NotebookLMマスターコース</div>
                          <div className="course-card-sp__sub">全7チャプター｜31レッスン</div>
                          <div className="course-card-sp__desc">マニュアル・議事録・企画書などの社内資料をNotebookLMに読み込ませ、質問に答えてくれるナレッジAIを構築する方法を学ぶコースです。</div>
                        </div>
                      </div>
                    </div>
                    <div className="course-slider__col">
                      <div className="course-card-sp">
                        <img src="/bytech/assets/images/group-16178-10.webp" alt="ビジネスワーカーコース" className="course-card-sp__img" />
                        <div className="course-card-sp__body">
                          <div className="course-card-sp__title">ビジネスワーカーコース</div>
                          <div className="course-card-sp__sub">全19チャプター｜92レッスン</div>
                          <div className="course-card-sp__desc">事務・営業・企画・カスタマーサクセスなど、幅広い職種で共通して役立つAI活用スキルを横断的に学ぶコースです。</div>
                        </div>
                      </div>
                    </div>
                    <div className="course-slider__col">
                      <div className="course-card-sp">
                        <img src="/bytech/assets/images/group-16169-1.webp" alt="AIウェブライターコース" className="course-card-sp__img" />
                        <div className="course-card-sp__body">
                          <div className="course-card-sp__title">AIウェブライターコース</div>
                          <div className="course-card-sp__sub">全18チャプター｜46レッスン</div>
                          <div className="course-card-sp__desc">ブログ・オウンドメディア・LP・メルマガなど、Webライティングに特化したAI活用術を学ぶコースです。</div>
                        </div>
                      </div>
                    </div>
                    <div className="course-slider__col">
                      <div className="course-card-sp">
                        <img src="/bytech/assets/images/group-16170-2.webp" alt="AI画像クリエイターコース" className="course-card-sp__img" />
                        <div className="course-card-sp__body">
                          <div className="course-card-sp__title">AI画像クリエイターコース</div>
                          <div className="course-card-sp__sub">全31チャプター｜89レッスン</div>
                          <div className="course-card-sp__desc">バナー、サムネイル、SNS用画像などを、画像生成AIで制作するスキルを身につけるコースです。</div>
                        </div>
                      </div>
                    </div>
                    <div className="course-slider__col">
                      <div className="course-card-sp">
                        <img src="/bytech/assets/images/group-16171-3.webp" alt="AI動画クリエイターコース" className="course-card-sp__img" />
                        <div className="course-card-sp__body">
                          <div className="course-card-sp__title">AI動画クリエイターコース</div>
                          <div className="course-card-sp__sub">全4チャプター｜19レッスン</div>
                          <div className="course-card-sp__desc">画像・プロンプトからイメージ通りの動画制作を実現するスキルを身につけるコースです。</div>
                        </div>
                      </div>
                    </div>
                    <div className="course-slider__col">
                      <div className="course-card-sp">
                        <img src="/bytech/assets/images/group-16177-9.webp" alt="生成AIパスポートコース" className="course-card-sp__img" />
                        <div className="course-card-sp__body">
                          <div className="course-card-sp__title">生成AIパスポートコース</div>
                          <div className="course-card-sp__sub">全15チャプター｜32レッスン</div>
                          <div className="course-card-sp__desc">生成AIパスポート試験の出題範囲を押さえながら、主要ツールの特徴やリスク、ビジネス活用のポイントを体系的に学ぶコースです。</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="reason-divider" />

            {/* Reason 2 */}
            <div className="reason-item fadein">
              <div className="reason-item__row">
                <div className="reason-item__text">
                  <div className="reason-item__badge-row">
                    <span className="reason-item__num-badge">02</span>
                    <span className="reason-item__label">ポートフォリオとして使える</span>
                  </div>
                  <img src="/bytech/assets/images/group-18615.svg" alt="" className="reason-item__divider-img" />
                  <h3 className="reason-item__h3">学びを<span>見える形の成果</span>にする<br />AI活用スキル証明課題</h3>
                  <p className="reason-item__body">バイテックのAIメンター陣がカウンセリング参加者含めた5000人以上のヒアリングをもとに制作した初級〜上級まで網羅する証明書発行課題。各主要AIコース5コース全てにスキル証明課題が設置されているので、各種ツールでできるタスクや課題解決スキルを見える形で証明することができます。</p>
                </div>
                <div className="reason-item__img">
                  <img src="/bytech/assets/images/certificate-1024x545.webp" alt="AI活用スキル証明課題" loading="lazy" />
                </div>
              </div>
              <div className="reason-item__sub">
                {/* 5dce8ce: white bg sub-card, padding 30px 30px 30px 40px */}
                <div className="r2-sub">
                  {/* 5aa8955: dark overlay box with bg image + gradient */}
                  <div className="r2-sub__overlay">
                    <h4 className="r2-sub__overlay-ttl">100種類以上のリアルな<br />業務・副業を想定した実践課題</h4>
                  </div>
                  {/* 84d3a60: image carousel, margin-top 30px */}
                  <R2Carousel />
                </div>
              </div>
            </div>

            <hr className="reason-divider" />

            {/* Reason 3 */}
            <div className="reason-item fadein">
              <div className="reason-item__row">
                <div className="reason-item__text">
                  <div className="reason-item__badge-row">
                    <span className="reason-item__num-badge">03</span>
                    <span className="reason-item__label">領域ごとに選び抜かれた</span>
                  </div>
                  <img src="/bytech/assets/images/group-18615.svg" alt="" className="reason-item__divider-img" />
                  <h3 className="reason-item__h3"><span>専属AIメンター</span>の<br />マンツーマン個別サポート</h3>
                  <p className="reason-item__body">様々な業務課題や目的が存在するからこそ、領域に特化したAIメンターが必要となります。業務でのAI活用から副業収入UP・AIフリーランスを目指す方もあなたに最適な専任メンターが最短でゴールまで導きます。</p>
                </div>
                <div className="reason-item__img">
                  <img src="/bytech/assets/images/group-20906-1024x640.webp" alt="特徴2_専任のAIメンター" loading="lazy" style={{width:'90%'}} />
                </div>
              </div>
              <div className="reason-item__sub">
                {/* 6cade3e: white bg, padding 40px 50px 30px 50px, margin-top 30px */}
                <div className="r3-sub">
                  {/* Desktop H4 (60c79f5, hidden on mobile) */}
                  <h4 className="r3-sub__ttl">業務活用から副業までサポートする採用率1.6%の精鋭メンター陣</h4>
                  {/* Mobile H4 (0bcf5ca, hidden on desktop+tablet) */}
                  <h4 className="r3-sub__ttl--mobile"><span style={{color:'#533AFC'}}>業務活用から副業</span>までサポートするバイテック精鋭メンター陣</h4>
                  <p className="r3-sub__body">ただAIを使えるではなく、使いこなしている且つ特化領域を持っているメンターのみ採用しているので、メンターの質は業界随一です。</p>
                  {/* 20f36a6: image carousel, margin-top 20px, nav arrows #FFD464 */}
                  <R3Carousel />
                </div>
              </div>
            </div>

            <hr className="reason-divider" />

            {/* Reason 4 */}
            <div className="reason-item fadein">
              <div className="reason-item__row">
                <div className="reason-item__text">
                  <div className="reason-item__badge-row">
                    <span className="reason-item__num-badge">04</span>
                    <span className="reason-item__label">最短で収益化を実現する</span>
                  </div>
                  <img src="/bytech/assets/images/group-18615.svg" alt="" className="reason-item__divider-img" />
                  <h3 className="reason-item__h3">身につけたスキルを<span style={{marginLeft:'3px'}}>仕事に変える</span><br />案件マッチングサービス「b-Works」</h3>
                  <p className="reason-item__body">AIライティングから画像・動画生成、Difyを活用したワークフローの自動化までバイテックで身につけたAI活用スキルを案件という形で存分に発揮する場を設けています。</p>
                </div>
                <div className="reason-item__img">
                  <img src="/bytech/assets/images/b-works2-1024x640.webp" alt="案件獲得マッチング機能" loading="lazy" style={{width:'90%'}} />
                </div>
              </div>
              <div className="reason-item__sub">
                {/* 0f3e499: white bg, padding 30px 50px, text-align center, margin-top 30px */}
                <div className="r4-sub">
                  {/* Desktop H4 (67e0f2b, hidden mobile) */}
                  <h4 className="r4-sub__ttl">未経験の方でも<span>挑戦できる案件のラインナップ</span></h4>
                  {/* Mobile H4 (0dfd03c, hidden desktop+tablet) */}
                  <h4 className="r4-sub__ttl--mobile">未経験の方でも<br /><span style={{color:'#533AFC'}}>挑戦できる案件ラインナップ</span></h4>
                  {/* Body text (9a7ca70, hidden mobile) */}
                  <p className="r4-sub__body">案件は定期的に更新・追加されていくので、自分に合った案件にチャレンジできます。また、90%の方が未経験から案件獲得に成功しているのでしっかりスキル習得をしていただければ最短で収益化をすることも可能です。</p>
                  {/* Desktop image (65afc44, hidden mobile) */}
                  <img src="/bytech/assets/images/b-works-features.svg" alt="掲載中の案件" className="r4-sub__img-desktop" />
                  {/* Mobile image (099006b, hidden desktop+tablet) */}
                  <img src="/bytech/assets/images/b-works-features-sp.svg" alt="b-works掲載案件_SP" className="r4-sub__img-mobile" />
                </div>
                {/* Disclaimer (3558e61) */}
                  <p className="r4-sub__note">※案件斡旋を保証するサポートではありません。必ずテスト案件を実施していただき、合格した方のみアサインされます。</p>
              </div>
            </div>

            <hr className="reason-divider" />

            {/* Reason 5 */}
            <div className="reason-item fadein">
              {/* ccad21e: テキスト列 + 画像列 の横並び行 */}
              <div className="reason-item__row">
                {/* 617c4e3: テキスト列 */}
                <div className="reason-item__text">
                  {/* fba3e92: バッジ行 */}
                  <div className="reason-item__badge-row">
                    <span className="reason-item__num-badge">05</span>
                    <span className="reason-item__label">サポート終了後も安心の</span>
                  </div>
                  {/* 2dd31c5: 区切り線 */}
                  <img src="/bytech/assets/images/group-18615.svg" alt="" className="reason-item__divider-img" />
                  {/* 6a3a136: h3 */}
                  <h3 className="reason-item__h3"><span>仲間と一緒にスキルアップ</span>ができる<br />実践型のAIコミュニティ「b-Crew」</h3>
                  {/* db08453: 本文 */}
                  <p className="reason-item__body">&quot;作って学ぶ&quot;がコンセプトの受講生や卒業生、一般のユーザーも入れる、目的や実現したいことに最適化した実践的なAIコミュニティです。受講生は永久会員としてサポート終了後もウェビナーの視聴やコンテスト・イベントの参加が可能となっています。</p>
                </div>
                {/* 6a650ff: 画像列 */}
                <div className="reason-item__img">
                  <img src="/bytech/assets/images/group-19623-1024x569.webp" alt="b-Crew" loading="lazy" />
                </div>
              </div>

              {/* 16068b5: b-Crew サブセクション（行の下に縦積み） */}
              <div className="r5-sub">
                {/* 3f05247: タイトル（モバイル非表示） */}
                <h4 className="r5-sub__ttl">継続的な学習を支援する豊富なコンテンツ</h4>
                {/* 690636e: タイトル（デスクトップ・タブレット非表示） */}
                <h4 className="r5-sub__ttl--mobile">継続的な学習を支援する<br /><span style={{color:'#533AFC'}}>豊富なコンテンツ</span></h4>
                {/* ffade09: 本文（モバイル非表示） */}
                <p className="r5-sub__body">コミュニティ内コンテンツは随時アップデートされているので、自分に合った使い方が必ず見つかるコミュニティになっています。</p>
                {/* 8c0c79c: デスクトップ画像（モバイル非表示） */}
                <img src="/bytech/assets/images/community-contents.svg" alt="コミュニティコンテンツ" className="r5-sub__content-img" />
                {/* 00546db: モバイル画像（デスクトップ・タブレット非表示） */}
                <img src="/bytech/assets/images/group-19629.svg" alt="コミュニティコンテンツSP" className="r5-sub__content-img--mobile" />
                {/* 8fbf7e7: 注記 */}
              </div>
              <p className="r5-sub__note">※コミュニティ内のイベントは今後実施予定のものもあります。</p>
                {/* 86bfb84: ウェビナー + カルーセル */}
                
              <div className="r5-sub__webinar">
                  {/* d8b40a1: ウェビナーラベル */}
                  <img src="/bytech/assets/images/premium-webinar.svg" alt="有料級ウェビナー" className="r5-sub__webinar-label" />
                  {/* 724407c: カルーセル */}
                  <R5Carousel />
                </div>
            </div>

          </div>
        </div>
        </div>
      </section>

      {/* ===== CTA BANNER (3ab2f36) ===== */}
      <section className="cta-banner">
        <div className="cta-banner__inner">
          {/* ce59709: 見出し */}
          <h2 className="cta-banner__ttl">もっとバイテックの特徴が知りたい</h2>
          {/* b9b7e9c: CTA ボタン画像 */}
          <div className="cta-banner__img-wrap">
            <a href="/counseling">
              <img
                src="/bytech/assets/images/cta-setsumeikai-3.webp"
                alt="無料説明会に申し込む"
                loading="lazy"
              />
            </a>
          </div>
          {/* 98cea5f: 注記 */}
          <p className="cta-banner__note">※ 無理な勧誘は行っていません。</p>
        </div>
      </section>

      {/* ===== CURRICULUM (5c8ef166) ===== */}
      <section className="curriculum" id="courses">
        <div className="curriculum__inner">

          {/* Section header (4d7be5c2 / a46a309) */}
          <div className="curric-head">
            {/* 5ae2c55b: タイトル */}
            <h2 className="curric-head__ttl">カリキュラム一覧</h2>
            {/* 6f65f61f: サブタグ */}
            <p className="curric-head__tag">CURRICULUM</p>
            {/* e41b219 + 2aead3c: モバイル用説明 */}
            <p className="curric-head__desc--sp"><span>全600レッスン以上</span>のカリキュラムを学習し放題！</p>
            <p className="curric-head__note--sp">LITE・PROどちらかのプラン入会で学習カリキュラムはずーっと視聴可能です。</p>
            {/* 094819b + 872a9cf: デスクトップ用説明 */}
            <p className="curric-head__desc"><span>全10コース・600レッスン</span>以上の全てのカリキュラムをずーっと学習し放題！</p>
            <p className="curric-head__note">LITE・PROどちらかのプラン入会で学習カリキュラムはずーっと視聴可能です。</p>
          </div>

          {/* Panels (148a266) */}
          <div className="curric-panels">

            {/* ── Panel 1: ツール別マスターコース ── */}
            <div className="curric-panel">
              {/* 47e93b5: バッジ + メタ行 */}
              <div className="curric-panel__top">
                {/* cc39a43: "01" バッジ */}
                <div className="curric-panel__badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="77.566" height="100.356" viewBox="0 0 77.566 100.356">
                    <path d="M49.067-48.242q0,26.406-5.078,38.086-5.015,11.3-17.075,11.3T9.775-10.22Q4.761-21.265,4.761-49T9.775-87.788Q14.79-99.214,26.851-99.214q11.172,0,16.5,10.029Q49.067-78.584,49.067-48.242Zm-13.457,0q0-22.217-1.9-30.723-1.9-8.442-6.919-8.442T19.8-79.028q-1.9,8.379-1.9,30.151t1.9,30.215q1.968,8.379,6.982,8.379,4.951,0,6.855-8.315Q35.61-26.533,35.61-48.242ZM59.985-98.008H82.329V0H69.7V-86.772H59.985Z" transform="translate(-4.762 99.214)" fill="#191722" />
                  </svg>
                </div>
                {/* fa1f57b: ラベル + 見出し */}
                <div className="curric-panel__meta">
                  {/* b10fc42 (order:-99999): ラベル区切り線 */}
                  <div className="curric-panel__label-row">
                    <span className="curric-panel__label">ツール別マスターコース</span>
                    <span className="curric-panel__label-line" />
                  </div>
                  {/* 91c8233: 見出し */}
                  <h2 className="curric-panel__heading curric-panel__heading--pc">主要AIで、業務の効率化・自動化をするなら</h2>
                  <h2 className="curric-panel__heading curric-panel__heading--sp">主要AIで、業務の効率化をするなら</h2>
                </div>
              </div>

              {/* 73913a9: カードスクロール行 */}
              <div className="curric-cards">
                {/* a0cb2f1: ChatGPT */}
                <div className="curric-card">
                  <img src="/bytech/assets/images/group-16172-4-1024x685.webp" alt="ChatGPTマスターコース" className="curric-card__thumb" loading="lazy" />
                  <div className="curric-card__body">
                    <p className="curric-card__name">ChatGPTマスターコース</p>
                    <p className="curric-card__chapters">全8チャプター｜45レッスン</p>
                    <div className="curric-card__desc-wrap">
                      <p className="curric-card__desc">ChatGPTの基本操作から、プロンプト設計、メール・資料・アイデア出しからZapier・MCPとの連携など実務応用まで体系的に学ぶコースです。</p>
                    </div>
                    <a href="/chatgpt-master" className="curric-card__btn">コースの詳細を見る</a>
                  </div>
                </div>
                {/* Claude */}
                <div className="curric-card">
                  <img src="/bytech/assets/images/group-16203-2-1-1024x685.webp" alt="Claudeマスターコース" className="curric-card__thumb" loading="lazy" />
                  <div className="curric-card__body">
                    <p className="curric-card__name">Claudeマスターコース</p>
                    <p className="curric-card__chapters">全14チャプター｜81レッスン</p>
                    <div className="curric-card__desc-wrap">
                      <p className="curric-card__desc">Claudeの基本操作から、思考を引き出すプロンプト設計、長文処理、業務アプリ連携、Claude Cowork・Codeを駆使したエージェント開発を学ぶコースです。</p>
                    </div>
                    <a href="/claude-master" className="curric-card__btn">コースの詳細を見る</a>
                  </div>
                </div>
                {/* 0aa3371: Gemini */}
                <div className="curric-card">
                  <img src="/bytech/assets/images/group-16175-7-1024x687.webp" alt="Geminiマスターコース" className="curric-card__thumb" loading="lazy" />
                  <div className="curric-card__body">
                    <p className="curric-card__name">Geminiマスターコース</p>
                    <p className="curric-card__chapters">全6チャプター | 36レッスン</p>
                    <div className="curric-card__desc-wrap">
                      <p className="curric-card__desc">リサーチ、要約、レポート作成など&quot;調べて・まとめる&quot;作業を効率化するするスキルやGoogle関連のツールとAIを連携してエージェントを作成する応用スキルも習得します。</p>
                    </div>
                    <a href="/gemini-master" className="curric-card__btn">コースの詳細を見る</a>
                  </div>
                </div>
                {/* e5e65e3: Copilot */}
                <div className="curric-card">
                  <img src="/bytech/assets/images/group-16173-5-1024x685.webp" alt="Copilotマスターコース" className="curric-card__thumb" loading="lazy" />
                  <div className="curric-card__body">
                    <p className="curric-card__name">Copilotマスターコース</p>
                    <p className="curric-card__chapters">全6チャプター | 48レッスン</p>
                    <div className="curric-card__desc-wrap">
                      <p className="curric-card__desc">Microsoft 365に組み込まれたCopilotを使い、文書作成、資料作成、データ整理の工数を減らす実践的なスキルを身につけます。</p>
                    </div>
                    <a href="/copilot-master" className="curric-card__btn">コースの詳細を見る</a>
                  </div>
                </div>
                {/* c975f0f: Dify */}
                <div className="curric-card">
                  <img src="/bytech/assets/images/group-16174-6-1024x685.webp" alt="Difyマスターコース" className="curric-card__thumb" loading="lazy" />
                  <div className="curric-card__body">
                    <p className="curric-card__name">Difyマスターコース</p>
                    <p className="curric-card__chapters">全21チャプター | 82レッスン</p>
                    <div className="curric-card__desc-wrap">
                      <p className="curric-card__desc">Dify(ディフィ)を活用して、申請フローや顧客管理、レポート自動化などの簡易システムを構築する方法を学びます。エンジニアでなくても、自分の部署の業務フローを自動化することができます。</p>
                    </div>
                    <a href="/dify-master" className="curric-card__btn">コースの詳細を見る</a>
                  </div>
                </div>
                {/* 24c1b75: NotebookLM */}
                <div className="curric-card">
                  <img src="/bytech/assets/images/group-16176-8-1024x685.webp" alt="NotebookLMマスターコース" className="curric-card__thumb" loading="lazy" />
                  <div className="curric-card__body">
                    <p className="curric-card__name">NotebookLMマスターコース</p>
                    <p className="curric-card__chapters">全7チャプター | 31レッスン</p>
                    <div className="curric-card__desc-wrap">
                      <p className="curric-card__desc">マニュアル・議事録・企画書などの社内資料をNotebookLMに読み込ませ、質問に答えてくれるナレッジAIを構築する方法を学びます。</p>
                    </div>
                    <a href="/notebooklm-master" className="curric-card__btn">コースの詳細を見る</a>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Panel 2: AI副業・フリーランスコース ── */}
            <div className="curric-panel">
              {/* バッジ + メタ行 */}
              <div className="curric-panel__top">
                {/* "02" バッジ */}
                <div className="curric-panel__badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="98.008"  height="100.356" viewBox="0 0 98.008 100.356">
                    <path d="M49.067-48.242q0,26.406-5.078,38.086-5.015,11.3-17.075,11.3T9.775-10.22Q4.761-21.265,4.761-49T9.775-87.788Q14.79-99.214,26.851-99.214q11.172,0,16.5,10.029Q49.067-78.584,49.067-48.242Zm-13.457,0q0-22.217-1.9-30.723-1.9-8.442-6.919-8.442T19.8-79.028q-1.9,8.379-1.9,30.151t1.9,30.215q1.968,8.379,6.982,8.379,4.951,0,6.855-8.315Q35.61-26.533,35.61-48.242ZM73-66.143H60.049l-.127-3.872q0-16.06,4.824-22.6,4.888-6.6,16.377-6.6,21.646,0,21.646,23.994,0,16.187-16.187,46.655L78.774-13.9l-.381.762q-.317.635-.889,1.841h24.248V0H58.716q1.079-2.412,4.507-9.585t9.331-19.36q5.015-10.664,8.379-18.091t5.078-12.187q3.428-9.521,3.428-16.44,0-12.187-8.442-12.187-8.125,0-8.125,15.107l.063,5.586Z" transform="translate(-4.762 99.214)" fill="#191722" />
                  </svg>
                </div>
                <div className="curric-panel__meta">
                  <div className="curric-panel__label-row">
                    <span className="curric-panel__label">AI副業・フリーランスコース</span>
                    <span className="curric-panel__label-line" />
                  </div>
                  <h2 className="curric-panel__heading curric-panel__heading--pc">AIで副収入の獲得、フリーランスを目指すなら</h2>
                  <h2 className="curric-panel__heading curric-panel__heading--sp">AIで副業収入の獲得を目指すなら</h2>
                </div>
              </div>

              {/* カードスクロール行 */}
              <div className="curric-cards">
                {/* AIウェブライター */}
                <div className="curric-card">
                  <img src="/bytech/assets/images/group-16169-1-1024x685.webp" alt="AIウェブライターコース" className="curric-card__thumb" loading="lazy" />
                  <div className="curric-card__body">
                    <p className="curric-card__name">AIウェブライターコース</p>
                    <p className="curric-card__chapters">全18チャプター | 46レッスン</p>
                    <div className="curric-card__desc-wrap">
                      <p className="curric-card__desc">ブログ・オウンドメディア・LP・メルマガなど、Webライティングに特化したAI活用術を学ぶコースです。</p>
                    </div>
                    <a href="/ai-writer" className="curric-card__btn">コースの詳細を見る</a>
                  </div>
                </div>
                {/* AI画像クリエイター */}
                <div className="curric-card">
                  <img src="/bytech/assets/images/group-16170-2-1024x685.webp" alt="AI画像クリエイターコース" className="curric-card__thumb" loading="lazy" />
                  <div className="curric-card__body">
                    <p className="curric-card__name">AI画像クリエイターコース</p>
                    <p className="curric-card__chapters">全31チャプター | 89レッスン</p>
                    <div className="curric-card__desc-wrap">
                      <p className="curric-card__desc">バナー、サムネイル、SNS用画像などを、画像生成AIで制作するスキルを身につけるコースです。プロンプト設計のコツや、AIで作った画像をCanva等で微調整する実務フローを学びます。</p>
                    </div>
                    <a href="/ai-image-creator" className="curric-card__btn">コースの詳細を見る</a>
                  </div>
                </div>
                {/* AI動画クリエイター */}
                <div className="curric-card">
                  <img src="/bytech/assets/images/group-16171-3-1024x685.webp" alt="AI動画クリエイターコース" className="curric-card__thumb" loading="lazy" />
                  <div className="curric-card__body">
                    <p className="curric-card__name">AI動画クリエイターコース</p>
                    <p className="curric-card__chapters">全4チャプター | 19レッスン</p>
                    <div className="curric-card__desc-wrap">
                      <p className="curric-card__desc">画像・プロンプトからイメージ通りの動画制作を実現するスキルを身につけるコースです。編集スキルがなくても、画像生成スキルとプロンプトを組み合わせて&quot;見られる動画&quot;を作成するスキルを習得できます。</p>
                    </div>
                    <a href="/ai-movie-creator" className="curric-card__btn">コースの詳細を見る</a>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Panel 3: 職種・部門別AI活用コース ── */}
            <div className="curric-panel">
              {/* バッジ + メタ行 */}
              <div className="curric-panel__top">
                {/* "03" バッジ */}
                <div className="curric-panel__badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="97.563" height="100.356" viewBox="0 0 97.563 100.356">
                    <path d="M49.067-48.242q0,26.406-5.078,38.086-5.015,11.3-17.075,11.3T9.775-10.22Q4.761-21.265,4.761-49T9.775-87.788Q14.79-99.214,26.851-99.214q11.172,0,16.5,10.029Q49.067-78.584,49.067-48.242Zm-13.457,0q0-22.217-1.9-30.723-1.9-8.442-6.919-8.442T19.8-79.028q-1.9,8.379-1.9,30.151t1.9,30.215q1.968,8.379,6.982,8.379,4.951,0,6.855-8.315Q35.61-26.533,35.61-48.242Zm37.9-23.486H60.938v-2.6a49.412,49.412,0,0,1,1.111-11.235,19.82,19.82,0,0,1,3.491-7.744A13.939,13.939,0,0,1,71.6-97.786a24.405,24.405,0,0,1,8.823-1.428q10.791,0,15.742,6.094t4.951,19.36q0,10.918-2.285,15.742-2.222,4.888-8.569,7.427,6.855,2.349,9.458,7.3,2.6,4.888,2.6,15.679,0,14.79-5.586,21.772T79.346,1.143q-20.186,0-20.186-23.169V-23.74a3.687,3.687,0,0,1,.063-.889H71.6q-.063,1.079-.1,1.873t-.032,1.3a13.227,13.227,0,0,0,2.19,8,7.039,7.039,0,0,0,6,2.983,8.473,8.473,0,0,0,4.221-.984,7.269,7.269,0,0,0,2.856-3.174,18.592,18.592,0,0,0,1.619-5.681,59.8,59.8,0,0,0,.508-8.442q0-8.95-2.7-12.886t-8.982-3.936a13.359,13.359,0,0,0-1.523.1l-1.9.222V-56.685H75.6q7.681,0,10.41-3.3t2.729-12.5q0-15.234-7.681-15.234-7.617,0-7.617,13.013Z" transform="translate(-4.762 99.214)" fill="#191722" />
                  </svg>
                </div>
                <div className="curric-panel__meta">
                  <div className="curric-panel__label-row">
                    <span className="curric-panel__label">職種・部門別AI活用コース</span>
                    <span className="curric-panel__label-line" />
                  </div>
                  <h2 className="curric-panel__heading curric-panel__heading--pc">職種ごとの既存業務を効率化するなら</h2>
                  <h2 className="curric-panel__heading curric-panel__heading--sp">職種ごとの既存業務を効率化するなら</h2>
                </div>
              </div>

              {/* カードスクロール行 */}
              <div className="curric-cards">
                {/* ビジネスワーカー */}
                <div className="curric-card">
                  <img src="/bytech/assets/images/group-16178-10-1024x685.webp" alt="ビジネスワーカーコース" className="curric-card__thumb" loading="lazy" />
                  <div className="curric-card__body">
                    <p className="curric-card__name">ビジネスワーカーコース</p>
                    <p className="curric-card__chapters">全19チャプター | 92レッスン</p>
                    <div className="curric-card__desc-wrap">
                      <p className="curric-card__desc">幅広い職種で共通して役立つAI活用スキルを横断的に学ぶコースです。メール作成、議事録、リサーチ、報告書、資料作成など、日々のルーチンをAIに手伝わせる具体的なパターンを紹介します。</p>
                    </div>
                    <a href="/business-worker" className="curric-card__btn">コースの詳細を見る</a>
                  </div>
                </div>
                {/* 営業職 */}
                <div className="curric-card">
                  <img src="/bytech/assets/images/iPhone-14-Pro-–-135-1024x685.webp" alt="AI業務活用【営業職コース】" className="curric-card__thumb" loading="lazy" />
                  <div className="curric-card__body">
                    <p className="curric-card__name">AI業務活用【営業職コース】</p>
                    <p className="curric-card__chapters">全6チャプター | 36レッスン</p>
                    <div className="curric-card__desc-wrap">
                      <p className="curric-card__desc">Geminiをベースにした、レポート作成やスクリプト作成、商談議事録の自動生成などの今まで時間をかけたくなかった業務を効率化するスキルを身につけます。</p>
                    </div>
                    <span className="curric-card__btn--coming">Coming Soon...</span>
                  </div>
                </div>
                {/* 事務職 */}
                <div className="curric-card">
                  <img src="/bytech/assets/images/iPhone-14-Pro-–-138-1024x685.webp" alt="AI業務活用【事務職コース】" className="curric-card__thumb" loading="lazy" />
                  <div className="curric-card__body">
                    <p className="curric-card__name">AI業務活用【事務職コース】</p>
                    <p className="curric-card__chapters">全8チャプター｜45レッスン</p>
                    <div className="curric-card__desc-wrap">
                      <p className="curric-card__desc">議事録作成やExcelでの集計業務、業務マニュアルの作成など多岐にわたる事務業務の効率化スキルを身につけることができます。</p>
                    </div>
                    <span className="curric-card__btn--coming">Coming Soon...</span>
                  </div>
                </div>
                {/* 企画職 */}
                <div className="curric-card">
                  <img src="/bytech/assets/images/iPhone-14-Pro-–-137-1024x685.webp" alt="AI業務活用【企画職コース】" className="curric-card__thumb" loading="lazy" />
                  <div className="curric-card__body">
                    <p className="curric-card__name">AI業務活用【企画職コース】</p>
                    <p className="curric-card__chapters">全8チャプター｜45レッスン</p>
                    <div className="curric-card__desc-wrap">
                      <p className="curric-card__desc">新規施策アイディア出しからカスタマージャーにマップの作成、アプリモック作成まで様々な企画業務に特化したスキルを身につけることができます。</p>
                    </div>
                    <span className="curric-card__btn--coming">Coming Soon...</span>
                  </div>
                </div>
                {/* 人事職 */}
                <div className="curric-card">
                  <img src="/bytech/assets/images/iPhone-14-Pro-–-136-1024x685.webp" alt="AI業務活用【人事職コース】" className="curric-card__thumb" loading="lazy" />
                  <div className="curric-card__body">
                    <p className="curric-card__name">AI業務活用【人事職コース】</p>
                    <p className="curric-card__chapters">全8チャプター｜45レッスン</p>
                    <div className="curric-card__desc-wrap">
                      <p className="curric-card__desc">求人票作成の自動化から採用基準の策定、研修プログラムの構築など人手が必要だった採用人事周りの業務を効率化・自動化するスキルを身につけることができます。</p>
                    </div>
                    <span className="curric-card__btn--coming">Coming Soon...</span>
                  </div>
                </div>
                {/* 生成AIパスポート */}
                <div className="curric-card">
                  <img src="/bytech/assets/images/group-16177-9-1024x685.webp" alt="生成AIパスポートコース" className="curric-card__thumb" loading="lazy" />
                  <div className="curric-card__body">
                    <p className="curric-card__name">生成AIパスポートコース</p>
                    <p className="curric-card__chapters">全15チャプター｜32レッスン</p>
                    <div className="curric-card__desc-wrap">
                      <p className="curric-card__desc">生成AIパスポート試験の出題範囲を押さえながら、主要ツールの特徴やリスク、ビジネス活用のポイントを体系的に学ぶ講座です。AIリテラシーを証明したいビジネスパーソンにおすすめです。</p>
                    </div>
                    <a href="https://generative-ai.bytech.jp/generative-ai-passport/" className="curric-card__btn">コースの詳細を見る</a>
                  </div>
                </div>
              </div>
            </div>

          </div>{/* /curric-panels */}
        </div>{/* /curriculum__inner */}
      </section>

      {/* ===== SKILLS ===== */}
      {/* ===== SKILLS (9e279e9) ===== */}
      <section className="skills-section" id="skills">
        {/* 上部三角シェイプ (elementor-shape-top: triangle) */}
        <div className="skills-section__shape" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path className="shape-fill" d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z" />
          </svg>
        </div>

        <div className="skills-section__inner">
          {/* 6aea1c3: 見出し */}
          <h3 className="skills-section__ttl">AI未経験からでも<br />こんなことができるようになります</h3>
          {/* 9f35c43: SKILLS タグ */}
          <span className="skills-section__tag">SKILLS</span>

          {/* 5c5ca32 / 978f9f8: 画像カルーセル (2枚表示) */}
          <div className="skills-carousel fadein">
            {/* 前へボタン */}
            <button className="skills-carousel__btn skills-carousel__btn--prev" aria-label="前へ">
              <svg aria-hidden="true" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z" />
              </svg>
            </button>

            {/* スライドトラック */}
            <div className="skills-carousel__viewport">
              <div className="skills-carousel__track" id="skillsTrack">
                <div className="skills-carousel__slide">
                  <img src="/bytech/assets/images/CG-1-–-16.webp" alt="身につくスキル01_広告バナーデザイン" loading="lazy" />
                </div>
                <div className="skills-carousel__slide">
                  <img src="/bytech/assets/images/CG-1-–-15.webp" alt="身につくスキル02_スライドデザイン" loading="lazy" />
                </div>
                <div className="skills-carousel__slide">
                  <img src="/bytech/assets/images/CG-1-–-18.webp" alt="身につくスキル03_チャットボット制作" loading="lazy" />
                </div>
                <div className="skills-carousel__slide">
                  <img src="/bytech/assets/images/CG-1-–-17.webp" alt="身につくスキル04_AIアプリ開発" loading="lazy" />
                </div>
                <div className="skills-carousel__slide">
                  <img src="/bytech/assets/images/CG-1-–-19.webp" alt="身につくスキル05_ブログ記事制作" loading="lazy" />
                </div>
                <div className="skills-carousel__slide">
                  <img src="/bytech/assets/images/CG-1-–-14.webp" alt="身につくスキル06_GPTs制作" loading="lazy" />
                </div>
              </div>
            </div>

            {/* 次へボタン */}
            <button className="skills-carousel__btn skills-carousel__btn--next" aria-label="次へ">
              <svg aria-hidden="true" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z" />
              </svg>
            </button>

            {/* ページネーションドット (6枚) */}
            <div className="skills-carousel__dots" id="skillsDots">
              <button className="skills-carousel__dot is-active" aria-label="スライド1"></button>
              <button className="skills-carousel__dot" aria-label="スライド2"></button>
              <button className="skills-carousel__dot" aria-label="スライド3"></button>
              <button className="skills-carousel__dot" aria-label="スライド4"></button>
              <button className="skills-carousel__dot" aria-label="スライド5"></button>
              <button className="skills-carousel__dot" aria-label="スライド6"></button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PLAN ===== */}
      <section className="plan" id="plan">
        <div className="plan__inner">
          <div className="plan-header fadein">
            <h2 className="plan-header__ttl">バイテックの料金プラン</h2>
            <span className="plan-header__tag">PLAN</span>
          </div>
          <div className="plan__grid fadein">
            {/* LITE */}
            <div className="plan-card">
              <img className="plan-card__logo" src="/bytech/assets/images/LITEPLAN.svg" alt="" />
              <h3 className="plan-card__en-name">LITE PLAN</h3>
              <span className="plan-card__ja-name">ライトプラン</span>
              <div className="plan-card__tagline">
                <span className="plan-card__tagline-em">自分のペース</span>で学習したい方向け
              </div>
              <div className="plan-card__price-area">
                <img className="plan-card__price-img" src="/bytech/assets/images/17.8.svg" alt="17.8万円（税込）" />
                <img className="plan-card__price-img-month" src="/bytech/assets/images/monthly-lite.svg" alt="月額費用" />
                <img className="plan-card__price-img-sub" src="/bytech/assets/images/lite_plan2.svg" alt="料金詳細" />
              </div>
              <div className="plan-card__services-divider"><span>このプランで受けれるサービス</span></div>
              <img className="plan-card__services-img" src="/bytech/assets/images/LITE.svg" alt="LITEプランサービス内容" />
              <a href="https://form.run/@ds-form" target="_blank" className="plan-card__cta plan-card__cta--lite">今すぐ受講を申し込む<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg></a>
            </div>
            {/* PRO */}
            <div className="plan-card plan-card--pro">
              <img className="plan-card__logo" src="/bytech/assets/images/PROPLAN.svg" alt="" />
              <h3 className="plan-card__en-name">PRO PLAN</h3>
              <span className="plan-card__ja-name">プロプラン</span>
              <div className="plan-card__tagline">
                <span className="plan-card__tagline-em">専任のAIメンター</span>が伴走サポート
              </div>
              <div className="plan-card__price-area">
                <img className="plan-card__price-img" src="/bytech/assets/images/29.8.svg" alt="29.8万円（税込）" />
                <img className="plan-card__price-img-month" src="/bytech/assets/images/pro-monthly.svg" alt="月額費用" />
                <img className="plan-card__price-img-sub" src="/bytech/assets/images/pro-pricing-detail.svg" alt="料金詳細" />
              </div>
              <div className="plan-card__services-divider"><span>このプランで受けれるサービス</span></div>
              <img className="plan-card__services-img" src="/bytech/assets/images/PRO.svg" alt="PROプランサービス内容" />
              <a href="/counseling" target="_blank" className="plan-card__cta plan-card__cta--pro">まずは無料相談を予約する<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg></a>
            </div>
          </div>
                    {/* SP: tab switching */}
          <div className="plan__sp-tabs fadein">
            <input type="radio" name="plan-tab" id="plan-tab-lite" defaultChecked className="plan__tab-radio" />
            <input type="radio" name="plan-tab" id="plan-tab-pro" className="plan__tab-radio" />
            <div className="plan__tab-bar">
              <label htmlFor="plan-tab-lite" className="plan__tab-label plan__tab-label--lite">LITEプラン</label>
              <label htmlFor="plan-tab-pro" className="plan__tab-label plan__tab-label--pro">PROプラン</label>
            </div>
            <div className="plan__tab-panels">
              {/* LITE tab panel */}
              <div className="plan__tab-panel plan__tab-panel--lite">
                <div className="plan-card">
                  <img className="plan-card__logo" src="/bytech/assets/images/LITEPLAN.svg" alt="" />
                  <h3 className="plan-card__en-name">LITE PLAN</h3>
                  <span className="plan-card__ja-name">ライトプラン</span>
                  <div className="plan-card__tagline">
                    <span className="plan-card__tagline-em">自分のペース</span>で学習したい方向け
                  </div>
                  <div className="plan-card__price-area">
                    <img className="plan-card__price-img" src="/bytech/assets/images/17.8.svg" alt="17.8万円（税込）" />
                    <img className="plan-card__price-img" src="/bytech/assets/images/monthly-lite.svg" alt="月額費用" />
                    <img className="plan-card__price-img" src="/bytech/assets/images/lite_plan2.svg" alt="料金詳細" />
                  </div>
                  <div className="plan-card__services-divider"><span>このプランで受けれるサービス</span></div>
                  <img className="plan-card__services-img" src="/bytech/assets/images/LITE.svg" alt="LITEプランサービス内容" />
                  <a href="https://form.run/@ds-form" target="_blank" className="plan-card__cta plan-card__cta--lite">今すぐ受講を申し込む<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg></a>
                </div>
              </div>
              {/* PRO tab panel */}
              <div className="plan__tab-panel plan__tab-panel--pro">
                <div className="plan-card plan-card--pro">
                  <img className="plan-card__logo" src="/bytech/assets/images/PROPLAN.svg" alt="" />
                  <h3 className="plan-card__en-name">PRO PLAN</h3>
                  <span className="plan-card__ja-name">プロプラン</span>
                  <div className="plan-card__tagline">
                    <span className="plan-card__tagline-em plan-card__tagline-em--pro">専任のAIメンター</span>が伴走サポート
                  </div>
                  <div className="plan-card__price-area">
                    <img className="plan-card__price-img" src="/bytech/assets/images/29.8.svg" alt="29.8万円（税込）" />
                    <img className="plan-card__price-img" src="/bytech/assets/images/pro-monthly.svg" alt="月額費用" />
                    <img className="plan-card__price-img" src="/bytech/assets/images/pro-pricing-detail.svg" alt="料金詳細" />
                  </div>
                  <div className="plan-card__services-divider"><span>このプランで受けれるサービス</span></div>
                  <img className="plan-card__services-img" src="/bytech/assets/images/PRO.svg" alt="PROプランサービス内容" />
                  <a href="/counseling" target="_blank" className="plan-card__cta plan-card__cta--pro">まずは無料相談を予約する<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg></a>
                </div>
              </div>
            </div>
          </div>

                    <div className="plan__payment fadein">
            <h3>お支払い方法は、2種類ご用意しています</h3>
            <div className="plan__payment__methods">
              <div className="plan__payment__method">
                <div className="plan__payment__method__name">銀行振込</div>
                <div className="plan__payment__method__note">※ご一括の場合のみ銀行振込を受け付けております。</div>
              </div>
              <div className="plan__payment__method">
                <div className="plan__payment__method__name">クレジットカード</div>
                <div className="plan__payment__method__note">※分割回数、金利はカード会社によって異なります。</div>
              </div>
            </div>
            <div className="plan__payment__cards">
              <img src="/bytech/assets/images/card-brands.svg" alt="VISA / Mastercard / American Express / Diners Club" />
            </div>
          </div>
          <div className="plan__detail-link-wrap">
            <a href="/plan" className="plan__detail-link">
              料金プランの詳細を見る
              <svg className="plan__detail-link__icon" aria-hidden="true" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
              </svg>
            </a>
          </div>
          {/* SP only: plan detail link button */}
          <div className="plan__sp-detail-btn-wrap">
            <a href="/plan" className="plan__sp-detail-btn">
              料金プランの詳細を見る
              <span className="plan__sp-detail-btn__arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ===== CTA Banner (d0daad5) ===== */}
      <section className="cta-banner">
        <div className="cta-banner__inner">
          <h2 className="cta-banner__ttl">料金に見合ったサービスが受けれるか不安...</h2>
          <div className="cta-banner__img-wrap">
            <a href="/counseling">
              <img src="/bytech/assets/images/cta-setsumeikai-3.webp" alt="無料説明会に申し込む" loading="lazy" />
            </a>
          </div>
          <p className="cta-banner__note">※ 無理な勧誘は行っていません。</p>
        </div>
      </section>

      {/* ===== INTERVIEW + FLOW wrapper ===== */}
      <div className="interview-flow-wrap">

      {/* ===== INTERVIEW ===== */}
      <section className="interview" id="interview">
        <div className="interview__inner">
          <div className="interview-header fadein">
            <h2 className="interview-header__ttl">受講生インタビュー</h2>
            <span className="interview-header__tag" style={{color: '#d4a817', marginTop: '8px'}}>INTERVIEW</span>
          </div>
          <div className="interview__grid">
            {/* Card 1: 山本大輔さん */}
            <div className="interview-card fadein">
              <a href="https://bytech.jp/blog/sutudent-voice-1/" target="_blank" className="interview-card__thumb">
                <img src="/bytech/assets/images/UV-1-1-1024x576.webp" alt="山本大輔さん" loading="lazy" />
              </a>
              <div className="interview-card__body">
                <h3 className="interview-card__ttl">「社内の小さなPoCから始めて、独立へ」――38歳・元メーカー勤務の山本大輔さんが&quot;AIコンサル&quot;で月収7桁に到達するまで　　　　　　　　　</h3>
                <div className="interview-card__divider" />
                <div className="interview-card__profile">
                  <div className="interview-card__avatar">
                    <img src="/bytech/assets/images/cross-79.webp" alt="山本大輔さん" loading="lazy" />
                  </div>
                  <p className="interview-card__meta">メーカー管理職<br />山本 大輔さん</p>
                </div>
              </div>
            </div>
            {/* Card 2: 佐藤健太さん */}
            <div className="interview-card fadein delay-1">
              <a href="https://bytech.jp/blog/sutudent-voice-2/" className="interview-card__thumb">
                <img src="/bytech/assets/images/UV-2-1-1024x576.webp" alt="佐藤健太さん" loading="lazy" />
              </a>
              <div className="interview-card__body">
                <h3 className="interview-card__ttl">「&quot;削る・置き換える・任せる&quot;で定時帰りへ」――32歳・営業職の佐藤健太さんがAI活用で残業激減＆キャリア転換を実現するまで</h3>
                <div className="interview-card__divider" />
                <div className="interview-card__profile">
                  <div className="interview-card__avatar">
                    <img src="/bytech/assets/images/cross-81.webp" alt="佐藤健太さん" loading="lazy" />
                  </div>
                  <p className="interview-card__meta">メーカー営業<br />佐藤 健太さん</p>
                </div>
              </div>
            </div>
            {/* Card 3: 田中美咲さん */}
            <div className="interview-card fadein delay-2">
              <a href="https://bytech.jp/blog/sutudent-voice-3/" className="interview-card__thumb">
                <img src="/bytech/assets/images/UV-3-1-1024x576.webp" alt="田中美咲さん" loading="lazy" />
              </a>
              <div className="interview-card__body">
                <h3 className="interview-card__ttl">「&quot;型×構成作り&quot;でスピード納品」――28歳・会社員の田中美咲さんがAIライティング副業で月収30万円達成＆Kindleでストック収入を築くまで</h3>
                <div className="interview-card__divider" />
                <div className="interview-card__profile">
                  <div className="interview-card__avatar">
                    <img src="/bytech/assets/images/cross-80.webp" alt="田中美咲さん" loading="lazy" />
                  </div>
                  <p className="interview-card__meta">不動産会社事務<br />田中 美咲さん</p>
                </div>
              </div>
            </div>
          </div>
          <div className="interview__more fadein">
            <a href="https://bytech.jp/blog/category/interview/" target="_blank" className="plan-card__cta plan-card__cta--blue" style={{display: 'inline-flex', maxWidth: '360px'}}>全ての受講生インタビューを見る<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg></a>
          </div>
        </div>
      </section>

      {/* ===== FLOW ===== */}
      <section className="flow" id="flow">
        <div className="flow__inner">
          {/* Header */}
          <div className="flow__header fadein">
            {/* desktop/tablet heading */}
            <h2 className="flow__ttl">学習スタートまでの3ステップ</h2>
            {/* mobile heading */}
            <h2 className="flow__ttl flow__ttl--sp">学習スタートまでの<br />3ステップ</h2>
            <span className="flow__tag">FLOW</span>
          </div>
          {/* Steps row */}
          <div className="flow__steps fadein">
            <div className="flow__step">
              <img src="/bytech/assets/images/group-20924-1024x528.webp" alt="STEP 01 無料カウンセリング" loading="lazy" />
            </div>
            <div className="flow__arrow">
              <img src="/bytech/assets/images/arrow.svg" alt="" aria-hidden="true" />
            </div>
            <div className="flow__step">
              <img src="/bytech/assets/images/group-20931-1024x528.webp" alt="STEP 02 受講申し込み" loading="lazy" />
            </div>
            <div className="flow__arrow">
              <img src="/bytech/assets/images/arrow.svg" alt="" aria-hidden="true" />
            </div>
            <div className="flow__step">
              <img src="/bytech/assets/images/group-20930-1024x528.webp" alt="STEP 03 学習スタート" loading="lazy" />
            </div>
          </div>
          {/* Bottom decoration (desktop only) */}
          <div className="flow__decoration fadein">
            <img src="/bytech/assets/images/group-20935.svg" alt="" aria-hidden="true" />
          </div>
          {/* CTA */}
          <div className="flow__cta fadein">
            <a href="/counseling">
              <img src="/bytech/assets/images/cta-setsumeikai-3.webp" alt="無料説明会に申し込む" loading="lazy" />
            </a>
          </div>
        </div>
      </section>

      </div>{/* end interview-flow-wrap */}

      {/* ===== FAQ ===== */}
      <section className="faq" id="faq">
        <div className="faq__inner">
          {/* Section header */}
          <div className="faq__header fadein">
            <h2 className="faq__ttl">よくあるご質問</h2>
            <span className="faq__tag">FAQ</span>
          </div>
          {/* Q&A groups — single column */}
          <div className="faq__groups">
            {/* 無料カウンセリングについて */}
            <div className="faq__group fadein">
              <div className="faq__group__ttl"><span>無料カウンセリング</span>について</div>
              <div className="faq__list">
                <div className="faq__item">
                  <button className="faq__item__q">
                    <span className="faq__item__q-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.469 78.174"><path d="M85.742,1.367H71.436L65.527-4.687a38.028,38.028,0,0,1-21,6.055A39.281,39.281,0,0,1,17.92-8.789Q5.273-19.971,5.273-37.354q0-17.041,11.963-28.418A38.527,38.527,0,0,1,44.678-76.807,38.673,38.673,0,0,1,70.41-67.139Q84.082-55.518,84.082-36.816q0,14.648-10.791,26.025Zm-31.3-31.2L65.381-18.945a25.808,25.808,0,0,0,7.227-18.6A27.909,27.909,0,0,0,64.551-57.91a26.929,26.929,0,0,0-20.02-8.2q-12.109,0-19.922,8.2-7.861,8.154-7.861,20.654,0,12.207,8.105,19.971Q33.3-9.277,44.141-9.277a26.6,26.6,0,0,0,13.33-3.369L39.746-29.834Z" transform="translate(-5.273 76.807)" fill="#533afc"/></svg></span>
                    <span className="faq__item__q-text">カウンセリングはどんな内容ですか？</span>
                    <span className="faq__item__q-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></span>
                  </button>
                  <div className="faq__item__a">当日は、生成AIへの興味や目指すキャリアについてヒアリングした後、受講事例や講座の詳細を質疑応答を交えてご紹介します。初心者でも大歓迎ですので、お気軽にご参加ください！</div>
                </div>
                <div className="faq__item">
                  <button className="faq__item__q">
                    <span className="faq__item__q-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.469 78.174"><path d="M85.742,1.367H71.436L65.527-4.687a38.028,38.028,0,0,1-21,6.055A39.281,39.281,0,0,1,17.92-8.789Q5.273-19.971,5.273-37.354q0-17.041,11.963-28.418A38.527,38.527,0,0,1,44.678-76.807,38.673,38.673,0,0,1,70.41-67.139Q84.082-55.518,84.082-36.816q0,14.648-10.791,26.025Zm-31.3-31.2L65.381-18.945a25.808,25.808,0,0,0,7.227-18.6A27.909,27.909,0,0,0,64.551-57.91a26.929,26.929,0,0,0-20.02-8.2q-12.109,0-19.922,8.2-7.861,8.154-7.861,20.654,0,12.207,8.105,19.971Q33.3-9.277,44.141-9.277a26.6,26.6,0,0,0,13.33-3.369L39.746-29.834Z" transform="translate(-5.273 76.807)" fill="#533afc"/></svg></span>
                    <span className="faq__item__q-text">参加方法はどうすればいいですか？</span>
                    <span className="faq__item__q-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></span>
                  </button>
                  <div className="faq__item__a">当日はZoomを利用したオンライン形式でのご参加となります。所要時間は40〜60分を想定しております。</div>
                </div>
                <div className="faq__item">
                  <button className="faq__item__q">
                    <span className="faq__item__q-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.469 78.174"><path d="M85.742,1.367H71.436L65.527-4.687a38.028,38.028,0,0,1-21,6.055A39.281,39.281,0,0,1,17.92-8.789Q5.273-19.971,5.273-37.354q0-17.041,11.963-28.418A38.527,38.527,0,0,1,44.678-76.807,38.673,38.673,0,0,1,70.41-67.139Q84.082-55.518,84.082-36.816q0,14.648-10.791,26.025Zm-31.3-31.2L65.381-18.945a25.808,25.808,0,0,0,7.227-18.6A27.909,27.909,0,0,0,64.551-57.91a26.929,26.929,0,0,0-20.02-8.2q-12.109,0-19.922,8.2-7.861,8.154-7.861,20.654,0,12.207,8.105,19.971Q33.3-9.277,44.141-9.277a26.6,26.6,0,0,0,13.33-3.369L39.746-29.834Z" transform="translate(-5.273 76.807)" fill="#533afc"/></svg></span>
                    <span className="faq__item__q-text">どのコースが自分にあっているかわかりません</span>
                    <span className="faq__item__q-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></span>
                  </button>
                  <div className="faq__item__a">「無料相談」でご相談いただくことをお勧めします。ご自身でご受講を通してできるようになりたいこと・学びたいことを無料相談にてお尋ねください。最適なコースをご提案させていただきます。無料相談は<a href="/counseling" target="_blank" style={{color: '#533afc', textDecoration: 'underline'}}>こちら</a>よりお申し込みください。</div>
                </div>
              </div>
            </div>
            {/* カリキュラムについて */}
            <div className="faq__group fadein">
              <div className="faq__group__ttl"><span>カリキュラム</span>について</div>
              <div className="faq__list">
                <div className="faq__item">
                  <button className="faq__item__q">
                    <span className="faq__item__q-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.469 78.174"><path d="M85.742,1.367H71.436L65.527-4.687a38.028,38.028,0,0,1-21,6.055A39.281,39.281,0,0,1,17.92-8.789Q5.273-19.971,5.273-37.354q0-17.041,11.963-28.418A38.527,38.527,0,0,1,44.678-76.807,38.673,38.673,0,0,1,70.41-67.139Q84.082-55.518,84.082-36.816q0,14.648-10.791,26.025Zm-31.3-31.2L65.381-18.945a25.808,25.808,0,0,0,7.227-18.6A27.909,27.909,0,0,0,64.551-57.91a26.929,26.929,0,0,0-20.02-8.2q-12.109,0-19.922,8.2-7.861,8.154-7.861,20.654,0,12.207,8.105,19.971Q33.3-9.277,44.141-9.277a26.6,26.6,0,0,0,13.33-3.369L39.746-29.834Z" transform="translate(-5.273 76.807)" fill="#533afc"/></svg></span>
                    <span className="faq__item__q-text">講座内で習得できるスキルは？</span>
                    <span className="faq__item__q-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></span>
                  </button>
                  <div className="faq__item__a">このコースでは、生成AIの基礎から始め、ChatGPTなどのツールを使いこなすためのプロンプトエンジニアリングの技術を短期集中で学びます。未経験者でも、数週間でAIを効果的に活用する方法をマスターすることができます。</div>
                </div>
                <div className="faq__item">
                  <button className="faq__item__q">
                    <span className="faq__item__q-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.469 78.174"><path d="M85.742,1.367H71.436L65.527-4.687a38.028,38.028,0,0,1-21,6.055A39.281,39.281,0,0,1,17.92-8.789Q5.273-19.971,5.273-37.354q0-17.041,11.963-28.418A38.527,38.527,0,0,1,44.678-76.807,38.673,38.673,0,0,1,70.41-67.139Q84.082-55.518,84.082-36.816q0,14.648-10.791,26.025Zm-31.3-31.2L65.381-18.945a25.808,25.808,0,0,0,7.227-18.6A27.909,27.909,0,0,0,64.551-57.91a26.929,26.929,0,0,0-20.02-8.2q-12.109,0-19.922,8.2-7.861,8.154-7.861,20.654,0,12.207,8.105,19.971Q33.3-9.277,44.141-9.277a26.6,26.6,0,0,0,13.33-3.369L39.746-29.834Z" transform="translate(-5.273 76.807)" fill="#533afc"/></svg></span>
                    <span className="faq__item__q-text">講座カリキュラムに閲覧期限はありますか？</span>
                    <span className="faq__item__q-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></span>
                  </button>
                  <div className="faq__item__a">いいえ、一度購入していただいたカリキュラムに関しては、無期限で閲覧可能です。</div>
                </div>
                <div className="faq__item">
                  <button className="faq__item__q">
                    <span className="faq__item__q-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.469 78.174"><path d="M85.742,1.367H71.436L65.527-4.687a38.028,38.028,0,0,1-21,6.055A39.281,39.281,0,0,1,17.92-8.789Q5.273-19.971,5.273-37.354q0-17.041,11.963-28.418A38.527,38.527,0,0,1,44.678-76.807,38.673,38.673,0,0,1,70.41-67.139Q84.082-55.518,84.082-36.816q0,14.648-10.791,26.025Zm-31.3-31.2L65.381-18.945a25.808,25.808,0,0,0,7.227-18.6A27.909,27.909,0,0,0,64.551-57.91a26.929,26.929,0,0,0-20.02-8.2q-12.109,0-19.922,8.2-7.861,8.154-7.861,20.654,0,12.207,8.105,19.971Q33.3-9.277,44.141-9.277a26.6,26.6,0,0,0,13.33-3.369L39.746-29.834Z" transform="translate(-5.273 76.807)" fill="#533afc"/></svg></span>
                    <span className="faq__item__q-text">古い技術や情報の教材ではありませんか？</span>
                    <span className="faq__item__q-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></span>
                  </button>
                  <div className="faq__item__a">いいえ、バイテック生成AIでは徹底した教材管理と独自システムにより、最新のバージョンやしトレンドの技術のみを教材に掲載しておりますので、ご安心して受講下さい。</div>
                </div>
                <div className="faq__item">
                  <button className="faq__item__q">
                    <span className="faq__item__q-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.469 78.174"><path d="M85.742,1.367H71.436L65.527-4.687a38.028,38.028,0,0,1-21,6.055A39.281,39.281,0,0,1,17.92-8.789Q5.273-19.971,5.273-37.354q0-17.041,11.963-28.418A38.527,38.527,0,0,1,44.678-76.807,38.673,38.673,0,0,1,70.41-67.139Q84.082-55.518,84.082-36.816q0,14.648-10.791,26.025Zm-31.3-31.2L65.381-18.945a25.808,25.808,0,0,0,7.227-18.6A27.909,27.909,0,0,0,64.551-57.91a26.929,26.929,0,0,0-20.02-8.2q-12.109,0-19.922,8.2-7.861,8.154-7.861,20.654,0,12.207,8.105,19.971Q33.3-9.277,44.141-9.277a26.6,26.6,0,0,0,13.33-3.369L39.746-29.834Z" transform="translate(-5.273 76.807)" fill="#533afc"/></svg></span>
                    <span className="faq__item__q-text">未経験ですがカリキュラムについていけますか？</span>
                    <span className="faq__item__q-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></span>
                  </button>
                  <div className="faq__item__a">多くの方が未経験で受講されています。「メンター」と呼ばれる現役エンジニア講師が、一人ひとりの学びに合わせたマンツーマン体制でサポートしていきますのでご安心ください。</div>
                </div>
              </div>
            </div>
            {/* サポートについて */}
            <div className="faq__group fadein">
              <div className="faq__group__ttl"><span>サポート</span>について</div>
              <div className="faq__list">
                <div className="faq__item">
                  <button className="faq__item__q">
                    <span className="faq__item__q-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.469 78.174"><path d="M85.742,1.367H71.436L65.527-4.687a38.028,38.028,0,0,1-21,6.055A39.281,39.281,0,0,1,17.92-8.789Q5.273-19.971,5.273-37.354q0-17.041,11.963-28.418A38.527,38.527,0,0,1,44.678-76.807,38.673,38.673,0,0,1,70.41-67.139Q84.082-55.518,84.082-36.816q0,14.648-10.791,26.025Zm-31.3-31.2L65.381-18.945a25.808,25.808,0,0,0,7.227-18.6A27.909,27.909,0,0,0,64.551-57.91a26.929,26.929,0,0,0-20.02-8.2q-12.109,0-19.922,8.2-7.861,8.154-7.861,20.654,0,12.207,8.105,19.971Q33.3-9.277,44.141-9.277a26.6,26.6,0,0,0,13.33-3.369L39.746-29.834Z" transform="translate(-5.273 76.807)" fill="#533afc"/></svg></span>
                    <span className="faq__item__q-text">チャットサポートはどれくらいの頻度で質問できますか？</span>
                    <span className="faq__item__q-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></span>
                  </button>
                  <div className="faq__item__a">チャット相談は24H受け付けており、13時〜22時はテクニカルサポートにて即時に返答いたします。<br />サポート環境は全て個別となっておりますので、未経験の方でも安心して質問できる環境となっております。</div>
                </div>
                <div className="faq__item">
                  <button className="faq__item__q">
                    <span className="faq__item__q-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.469 78.174"><path d="M85.742,1.367H71.436L65.527-4.687a38.028,38.028,0,0,1-21,6.055A39.281,39.281,0,0,1,17.92-8.789Q5.273-19.971,5.273-37.354q0-17.041,11.963-28.418A38.527,38.527,0,0,1,44.678-76.807,38.673,38.673,0,0,1,70.41-67.139Q84.082-55.518,84.082-36.816q0,14.648-10.791,26.025Zm-31.3-31.2L65.381-18.945a25.808,25.808,0,0,0,7.227-18.6A27.909,27.909,0,0,0,64.551-57.91a26.929,26.929,0,0,0-20.02-8.2q-12.109,0-19.922,8.2-7.861,8.154-7.861,20.654,0,12.207,8.105,19.971Q33.3-9.277,44.141-9.277a26.6,26.6,0,0,0,13.33-3.369L39.746-29.834Z" transform="translate(-5.273 76.807)" fill="#533afc"/></svg></span>
                    <span className="faq__item__q-text">面談に回数制限はありますか？</span>
                    <span className="faq__item__q-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></span>
                  </button>
                  <div className="faq__item__a">オンラインの面談は原則月2回の実施になります。</div>
                </div>
                <div className="faq__item">
                  <button className="faq__item__q">
                    <span className="faq__item__q-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.469 78.174"><path d="M85.742,1.367H71.436L65.527-4.687a38.028,38.028,0,0,1-21,6.055A39.281,39.281,0,0,1,17.92-8.789Q5.273-19.971,5.273-37.354q0-17.041,11.963-28.418A38.527,38.527,0,0,1,44.678-76.807,38.673,38.673,0,0,1,70.41-67.139Q84.082-55.518,84.082-36.816q0,14.648-10.791,26.025Zm-31.3-31.2L65.381-18.945a25.808,25.808,0,0,0,7.227-18.6A27.909,27.909,0,0,0,64.551-57.91a26.929,26.929,0,0,0-20.02-8.2q-12.109,0-19.922,8.2-7.861,8.154-7.861,20.654,0,12.207,8.105,19.971Q33.3-9.277,44.141-9.277a26.6,26.6,0,0,0,13.33-3.369L39.746-29.834Z" transform="translate(-5.273 76.807)" fill="#533afc"/></svg></span>
                    <span className="faq__item__q-text">面談では何をするんですか？</span>
                    <span className="faq__item__q-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></span>
                  </button>
                  <div className="faq__item__a">オンライン面談では学習の進捗確認や進捗に合わせたロードマップの修正や次週のやるべきことのプランニングを行います。</div>
                </div>
              </div>
            </div>
            {/* 受講準備について */}
            <div className="faq__group fadein">
              <div className="faq__group__ttl"><span>受講準備</span>について</div>
              <div className="faq__list">
                <div className="faq__item">
                  <button className="faq__item__q">
                    <span className="faq__item__q-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.469 78.174"><path d="M85.742,1.367H71.436L65.527-4.687a38.028,38.028,0,0,1-21,6.055A39.281,39.281,0,0,1,17.92-8.789Q5.273-19.971,5.273-37.354q0-17.041,11.963-28.418A38.527,38.527,0,0,1,44.678-76.807,38.673,38.673,0,0,1,70.41-67.139Q84.082-55.518,84.082-36.816q0,14.648-10.791,26.025Zm-31.3-31.2L65.381-18.945a25.808,25.808,0,0,0,7.227-18.6A27.909,27.909,0,0,0,64.551-57.91a26.929,26.929,0,0,0-20.02-8.2q-12.109,0-19.922,8.2-7.861,8.154-7.861,20.654,0,12.207,8.105,19.971Q33.3-9.277,44.141-9.277a26.6,26.6,0,0,0,13.33-3.369L39.746-29.834Z" transform="translate(-5.273 76.807)" fill="#533afc"/></svg></span>
                    <span className="faq__item__q-text">受講する上で、準備するべきものはありますか？</span>
                    <span className="faq__item__q-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></span>
                  </button>
                  <div className="faq__item__a">こちらの<a href="/system-requirements" target="_blank" style={{color: '#533afc', textDecoration: 'underline'}}>システム要件</a>をご確認の上ご準備していただけたらと思います。</div>
                </div>
                <div className="faq__item">
                  <button className="faq__item__q">
                    <span className="faq__item__q-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.469 78.174"><path d="M85.742,1.367H71.436L65.527-4.687a38.028,38.028,0,0,1-21,6.055A39.281,39.281,0,0,1,17.92-8.789Q5.273-19.971,5.273-37.354q0-17.041,11.963-28.418A38.527,38.527,0,0,1,44.678-76.807,38.673,38.673,0,0,1,70.41-67.139Q84.082-55.518,84.082-36.816q0,14.648-10.791,26.025Zm-31.3-31.2L65.381-18.945a25.808,25.808,0,0,0,7.227-18.6A27.909,27.909,0,0,0,64.551-57.91a26.929,26.929,0,0,0-20.02-8.2q-12.109,0-19.922,8.2-7.861,8.154-7.861,20.654,0,12.207,8.105,19.971Q33.3-9.277,44.141-9.277a26.6,26.6,0,0,0,13.33-3.369L39.746-29.834Z" transform="translate(-5.273 76.807)" fill="#533afc"/></svg></span>
                    <span className="faq__item__q-text">受講生の方はどのような方が多いですか？</span>
                    <span className="faq__item__q-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></span>
                  </button>
                  <div className="faq__item__a">はい、この生成AIコースでは会社員の方に多くご受講いただいております。その中でも25代〜40代までの方が一番多いボリュームゾーンとなっております。</div>
                </div>
              </div>
            </div>
            {/* 支払い方法について */}
            <div className="faq__group fadein">
              <div className="faq__group__ttl"><span>支払い方法</span>について</div>
              <div className="faq__list">
                <div className="faq__item">
                  <button className="faq__item__q">
                    <span className="faq__item__q-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.469 78.174"><path d="M85.742,1.367H71.436L65.527-4.687a38.028,38.028,0,0,1-21,6.055A39.281,39.281,0,0,1,17.92-8.789Q5.273-19.971,5.273-37.354q0-17.041,11.963-28.418A38.527,38.527,0,0,1,44.678-76.807,38.673,38.673,0,0,1,70.41-67.139Q84.082-55.518,84.082-36.816q0,14.648-10.791,26.025Zm-31.3-31.2L65.381-18.945a25.808,25.808,0,0,0,7.227-18.6A27.909,27.909,0,0,0,64.551-57.91a26.929,26.929,0,0,0-20.02-8.2q-12.109,0-19.922,8.2-7.861,8.154-7.861,20.654,0,12.207,8.105,19.971Q33.3-9.277,44.141-9.277a26.6,26.6,0,0,0,13.33-3.369L39.746-29.834Z" transform="translate(-5.273 76.807)" fill="#533afc"/></svg></span>
                    <span className="faq__item__q-text">支払い方法は何がありますか？</span>
                    <span className="faq__item__q-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></span>
                  </button>
                  <div className="faq__item__a">支払い方法には現金振込・クレジット・デビットカード決済がございます。【MasterCard / Visa / American Express】</div>
                </div>
                <div className="faq__item">
                  <button className="faq__item__q">
                    <span className="faq__item__q-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.469 78.174"><path d="M85.742,1.367H71.436L65.527-4.687a38.028,38.028,0,0,1-21,6.055A39.281,39.281,0,0,1,17.92-8.789Q5.273-19.971,5.273-37.354q0-17.041,11.963-28.418A38.527,38.527,0,0,1,44.678-76.807,38.673,38.673,0,0,1,70.41-67.139Q84.082-55.518,84.082-36.816q0,14.648-10.791,26.025Zm-31.3-31.2L65.381-18.945a25.808,25.808,0,0,0,7.227-18.6A27.909,27.909,0,0,0,64.551-57.91a26.929,26.929,0,0,0-20.02-8.2q-12.109,0-19.922,8.2-7.861,8.154-7.861,20.654,0,12.207,8.105,19.971Q33.3-9.277,44.141-9.277a26.6,26.6,0,0,0,13.33-3.369L39.746-29.834Z" transform="translate(-5.273 76.807)" fill="#533afc"/></svg></span>
                    <span className="faq__item__q-text">分割の支払いは可能ですか？</span>
                    <span className="faq__item__q-toggle" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg></span>
                  </button>
                  <div className="faq__item__a">はい、可能です。分割回数など詳しい詳細はカード会社にご確認下さい。デビットカードでの分割はできませんので、ご了承下さい。</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="footer__main">
          <div className="footer__inner">
            {/* Top: tagline + nav */}
            <div className="footer__body">
              <h2 className="footer__tagline">最短4ヶ月で、<br />生成AI活用のプロに。</h2>
              <nav className="footer__nav">
                {/* コース一覧 */}
                <div className="footer__nav-col footer__nav-col--courses">
                  <div className="footer__nav-section-ttl">コース一覧</div>
                  <div className="footer__nav-divider" />
                  <div className="footer__nav-sub-cols">
                    <div className="footer__nav-sub-col">
                      <div className="footer__nav-sub-ttl">- 主要AI別</div>
                      <ul className="footer__nav-list">
                        <li><a href="/chatgpt-master">ChatGPTマスターコース</a></li>
                        <li><a href="/gemini-master">Geminiマスターコース</a></li>
                        <li><a href="/copilot-master">Copilotマスターコース</a></li>
                        <li><a href="/dify-master">DIfyマスターコース</a></li>
                        <li><a href="/notebooklm-master">NotebookLMマスターコース</a></li>
                        <li><a href="/claude-master">Claudeマスターコース</a></li>
                      </ul>
                    </div>
                    <div className="footer__nav-sub-col">
                      <div className="footer__nav-sub-ttl">- 目的別</div>
                      <ul className="footer__nav-list">
                        <li><a href="/ai-writer">AIウェブライターコース</a></li>
                        <li><a href="/ai-movie-creator">AI動画クリエイターコース</a></li>
                        <li><a href="/ai-image-creator">AI画像クリエイターコース</a></li>
                        <li><a href="/business-worker">ビジネスワーカーコース</a></li>
                        <li><a href="https://generative-ai.bytech.jp/generative-ai-passport/">生成AIパスポートコース</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* サポート */}
                <div className="footer__nav-col footer__nav-col--support">
                  <div className="footer__nav-section-ttl">サポート</div>
                  <div className="footer__nav-divider" />
                  <ul className="footer__nav-list">
                    <li><a href="/membership-terms">会員規約</a></li>
                    <li><a href="/refund-policy">返金ポリシー</a></li>
                    <li><a href="https://generative-ai.bytech.jp/job-membership-terms/">案件獲得保証プラン利用規約</a></li>
                    <li><a href="/specified_commercial">特定商取引法に関する表示</a></li>
                    <li><a href="/system-requirements">システム要件</a></li>
                  </ul>
                </div>
                {/* 会社情報 + 関連サービス */}
                <div className="footer__nav-col footer__nav-col--company">
                  <div className="footer__nav-section-ttl">会社情報</div>
                  <div className="footer__nav-divider" />
                  <ul className="footer__nav-list">
                    <li><a href="https://ai-bou.co.jp">会社概要</a></li>
                    <li><a href="/privacy-policy">プライバシーポリシー</a></li>
                  </ul>
                  <div className="footer__nav-section-ttl" style={{marginTop: '20px'}}>関連サービス</div>
                  <div className="footer__nav-divider" />
                  <ul className="footer__nav-list">
                    <li><a href="https://bytech.jp/biz">法人向けAI研修 【バイテックBiz】</a></li>
                    <li><a href="https://bytech.jp/blog">個人向けAIメディア【バイテックBLOG】</a></li>
                    <li><a href="https://biz.bytech.jp/blog/">企業向けAIメディア【バイテックBLOG Biz】</a></li>
                  </ul>
                </div>
              </nav>
            </div>
            {/* Bottom bar: logo + copyright */}
            <div className="footer__bottom-bar">
              <a href="https://generative-ai.bytech.jp/" className="footer__logo-link">
                <img className="footer__logo-img" src="/bytech/assets/images/logowhite.png" alt="バイテック生成AI" />
                <span className="footer__logo-sub">GENERATIVE AI</span>
              </a>
              <p className="footer__copyright">2026 株式会社AI棒</p>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__inner">
            <p>&copy; 2026 株式会社AI棒 All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* Fixed mobile CTA */}
      <div className="fixed-footer-cta" id="fixedFooterCta">
        <a className="fixed-footer-cta__link" href="/counseling">
          <img src="/bytech/assets/images/cta-setsumeikai.svg" alt="無料説明会に申し込む" />
        </a>
      </div>
      {/* ===== SP POPUP MODAL (SP only, timed) ===== */}
      <div className="sp-popup-overlay" id="spPopupOverlay" aria-hidden="true" role="dialog" aria-modal="true">
        <div className="sp-popup-modal">
          <button className="sp-popup-close" id="spPopupClose" aria-label="閉じる">×</button>
          <div className="sp-popup-image">
            <img src="/bytech/assets/images/modal.png" alt="" loading="lazy" />
          </div>
          <div className="sp-popup-body">
            <p className="sp-popup-sub">あなたにぴったりの</p>
            <h2 className="sp-popup-heading">生成AI<br />活用例は？</h2>
            <span className="sp-popup-badge">簡単30秒！今すぐタップ！</span>
            <a href="https://lin.ee/YOUR_LINE_URL" className="sp-popup-line-btn" target="_blank" rel="noopener noreferrer">
              <div className="sp-popup-line-inner">
                <div className="sp-popup-line-icon">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="48" rx="10" fill="#06C755"/>
                    <path d="M40 22.4C40 15.1 33.2 9.2 24.8 9.2C16.4 9.2 9.6 15.1 9.6 22.4C9.6 28.95 15.1 34.45 22.55 35.4C23.05 35.5 23.75 35.7 23.9 36.15C24.05 36.55 24 37.2 23.95 37.6L23.65 39.35C23.55 39.75 23.3 40.85 24.8 40.2C26.3 39.55 33.45 35.05 36.6 31.45C38.75 29.15 40 26.4 40 22.4Z" fill="white"/>
                    <path d="M20.1 19.7H19.1C18.85 19.7 18.65 19.9 18.65 20.15V26.3C18.65 26.55 18.85 26.75 19.1 26.75H20.1C20.35 26.75 20.55 26.55 20.55 26.3V20.15C20.55 19.9 20.35 19.7 20.1 19.7Z" fill="#06C755"/>
                    <path d="M28.9 19.7H27.9C27.65 19.7 27.45 19.9 27.45 20.15V23.7L24.65 19.9C24.6 19.85 24.55 19.8 24.5 19.75H23.5C23.25 19.75 23.05 19.95 23.05 20.2V26.35C23.05 26.6 23.25 26.8 23.5 26.8H24.5C24.75 26.8 24.95 26.6 24.95 26.35V22.8L27.75 26.6C27.8 26.65 27.85 26.7 27.9 26.75H28.9C29.15 26.75 29.35 26.55 29.35 26.3V20.15C29.35 19.9 29.15 19.7 28.9 19.7Z" fill="#06C755"/>
                  </svg>
                </div>
                LINEでチェックする
              </div>
            </a>
            <div className="sp-popup-footer">
              <img src="/bytech/assets/images/genai-logo-black.svg" alt="byTech GENERATIVE AI" />
              <p>2026 株式会社AI棒</p>
            </div>
          </div>
        </div>
      </div>
      <Script id="bytech-lp-scripts" src="/bytech/assets/js/bytech-lp.js" strategy="afterInteractive" />

    </>
  )
}
