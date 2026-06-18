import Link from 'next/link'
import Script from 'next/script'

export default function CoursePage() {
  return (
    <>
      <link rel="stylesheet" href="/bytech/assets/css/style.min.css" />
      <link rel="stylesheet" href="/bytech/assets/css/endless-river.css" />
      <link rel="stylesheet" href="/bytech/assets/slick/slick.css" />
      <link rel="stylesheet" href="/bytech/assets/slick/slick-theme.css" />

      <div className="page-course">
        <header className="header">
          <div className="header__inner">
            <div className="header__logo">
              <a href="/bytech"><img src="/bytech/assets/img/hd-logo.svg" className="" alt="バイテック生成AI" /></a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav__gnav--menu">
                <li className="menu-item"><a href="/bytech" className="gnav--link menu_home"><span className="ttl">トップ</span></a></li>
                <li className="menu-item"><a href="/support" className="gnav--link menu_home"><span className="ttl">サポート詳細</span></a></li>
                <li className="menu-item"><a href="/bytech#course" className="gnav--link menu_home"><span className="ttl">コース一覧</span></a></li>
                <li className="menu-item"><a href="/bytech#plan" className="gnav--link menu_home"><span className="ttl">料金プラン</span></a></li>
                <li className="menu-item"><a href="https://bytech.jp/blog/category/interview/" target="_blank" rel="noopener" className="gnav--link menu_home"><span className="ttl">受講生の声</span></a></li>
                <li className="menu-item"><a href="/bytech#faq" className="gnav--link menu_home"><span className="ttl">よくある質問</span></a></li>
              </ul>
              <div className="c-btn _yellow _shadow02">
                <a href="/counseling" rel="noopener"><span>お問い合わせ</span></a>
              </div>
            </nav>
            <div className="header__toggle" id="js-toggle">
              <div className="gnav_btn--lines">
                <span className="line"></span>
                <span className="line"></span>
                <p className="font-en"><span className="menu">MENU</span><span className="close">CLOSE</span></p>
              </div>
            </div>
            <div className="gnav_overlay"></div>
          </div>
        </header>

        <main className="main">
          <section className="c-under-mv">
            <div className="c-under-mv__area-txt">
              <h1 className="c-under-mv__area-txt__ttl font-en">COURSE<small>AI WEBライターコース</small></h1>
            </div>
          </section>

          <section className="p-about sec-c" id="p-about">
            <div className="p-about__inner u-inner">
              <div className="p-about__area-txt">
                <h2 className="p-about__area-txt__head fadein is-show">
                  <span className="p-about__area-txt__head__main">AI WEBライターコースとは</span>
                  <span className="p-about__area-txt__head__sub font-en">ABOUT</span>
                </h2>
                <p>バイテックでは、１名の生徒に対し2人の講師が担当します。<br />
                学習の量を管理するトレーナーと質をUPさせるコンサルタントが2つの軸で受講生の学習を徹底サポートします。</p>
              </div>

              <div className="p-about__service">
                <div className="p-about__servicpoint__area">
                  <div className="p-about__servicpoint__img fadein">
                    <img src="/bytech/assets/img/course/p-about_img.jpg" alt="" />
                  </div>
                  <div className="p-about__servicpoint__dtail fadein delay-time02">
                    <h3>こんな方が<span className="mark_b">受講</span>しています</h3>
                    <ul className="p-about__servicpoint__dtail__list">
                      <li>プログラミング経験ゼロから、自前でWEBサイトを作れるスキルを習得したい</li>
                      <li>就職や転職で差別化できるITスキルを身につけたい</li>
                      <li>業務でWEBサイトの作成やWEBサービスの運営に関わる</li>
                      <li>就職や転職で差別化できるITスキルを身につけたい</li>
                      <li>業務でWEBサイトの作成やWEBサービスの運営に関わる</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-about__learn">
                <h3 className="about__solution__box__list__item__ttl">
                  <span className="about__solution__box__list__txt">このコースで学べること</span>
                  <span className="about__solution__box__list__num font-en">learn</span>
                </h3>
                <h4 className="p-about__learn__box">初心者でも簡単に<br />AIで記事執筆を極めたい</h4>
                <p>バイテックでは、１名の生徒に対し2人の講師が担当します。<br />学習の量を管理するトレーナーと質をUPさせるコンサルタントが2つの軸で受講生の学習を徹底サポートします。</p>

                <div className="p-about__learn__phase_container">
                  <div className="p-about__learn__phase_wrapper">
                    <div className="p-about__learn__phase_num"><p>カリキュラム</p></div>
                    <div className="p-about__learn__phase_content_wrapper">
                      <div className="p-about__learn__phase_content">
                        <div className="p-about__learn__phase_content_item content01 fadein">
                          <div className="p-about__learn__phase_content_item_img_bg"></div>
                          <div className="p-about__learn__phase_text">
                            <span className="chapter">第1章</span>
                            <h4 className="h4-ttl">これだけ見ておけば完璧！一眼カメラを始めたい方へ。<br />コメント動画を撮ってみよう！</h4>
                            <span className="tags_time">統計 4時間12分</span>
                            <p>ミラーレス・一眼カメラ・Premiere Proの基礎を学ぼう！ミラーレス・一眼カメラ・Premiere Proの基礎を学ぼう！</p>
                            <div className="c-btn _blue _shadow02">
                              <a href="/counseling" rel="noopener"><span>お問い合わせ</span></a>
                            </div>
                          </div>
                        </div>
                        {/* /content01 */}
                        <div className="p-about__learn__phase_content_item content03 fadein delay-time02">
                          <div className="p-about__learn__phase_content_item_img_bg"></div>
                          <div className="p-about__learn__phase_text">
                            <span className="chapter">第1章</span>
                            <h4 className="h4-ttl">これだけ見ておけば完璧！一眼カメラを始めたい方へ。<br />コメント動画を撮ってみよう！</h4>
                            <span className="tags_time">統計 4時間12分</span>
                            <p>ミラーレス・一眼カメラ・Premiere Proの基礎を学ぼう！ミラーレス・一眼カメラ・Premiere Proの基礎を学ぼう！</p>
                            <div className="c-btn _blue _shadow02">
                              <a href="/counseling" rel="noopener"><span>お問い合わせ</span></a>
                            </div>
                          </div>
                        </div>
                        {/* /content02 */}
                        <div className="p-about__learn__phase_content_item content03 fadein delay-time03">
                          <div className="p-about__learn__phase_content_item_img_bg"></div>
                          <div className="p-about__learn__phase_text">
                            <span className="chapter">第1章</span>
                            <h4 className="h4-ttl">これだけ見ておけば完璧！一眼カメラを始めたい方へ。<br />コメント動画を撮ってみよう！</h4>
                            <span className="tags_time">統計 4時間12分</span>
                            <p>ミラーレス・一眼カメラ・Premiere Proの基礎を学ぼう！ミラーレス・一眼カメラ・Premiere Proの基礎を学ぼう！</p>
                            <div className="c-btn _blue _shadow02">
                              <a href="/counseling" rel="noopener"><span>お問い合わせ</span></a>
                            </div>
                          </div>
                        </div>
                        {/* /content03 */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="p-outline sec-c" id="p-outline">
            <div className="p-outline__inner u-inner">
              <div className="p-outline-detail">
                <h3 className="p-outline-detail__title">
                  <span className="p-outline-detail__title__thumb mark_b font-en">Special Curriculum</span>
                  <div className="p-outline-detail__title__head">
                    PRO限定の<br className="pc-none" /><span className="mark_b">スペシャル</span>カリキュラム
                  </div>
                </h3>
                <div className="p-outline-detail_inner">
                  <p className="p-outline-detail_read">このコースはこんな学び方をしたい方におすすめのコースです。</p>
                  <ul className="p-outline-detail__element_list">
                    <li className="fadein">
                      <div className="p-outline-detail__element_list__feature03__img">
                        <img src="/bytech/assets/img/course/img_c_course02_04.png" alt="" width="120" height="120" />
                      </div>
                      <div className="p-outline-detail__element_list__feature03__desc">
                        <h4>おすすめタイトル</h4>
                        <p>説明テキストが入ります。説明テキストが入ります。</p>
                      </div>
                    </li>
                    <li className="fadein delay-time02">
                      <div className="p-outline-detail__element_list__feature03__img">
                        <img src="/bytech/assets/img/course/img_c_course02_04.png" alt="" width="120" height="120" />
                      </div>
                      <div className="p-outline-detail__element_list__feature03__desc">
                        <h4>おすすめタイトル</h4>
                        <p>説明テキストが入ります。説明テキストが入ります。</p>
                      </div>
                    </li>
                    <li className="fadein delay-time03">
                      <div className="p-outline-detail__element_list__feature03__img">
                        <img src="/bytech/assets/img/course/img_c_course02_04.png" alt="" width="120" height="120" />
                      </div>
                      <div className="p-outline-detail__element_list__feature03__desc">
                        <h4>おすすめタイトル</h4>
                        <p>説明テキストが入ります。説明テキストが入ります。</p>
                      </div>
                    </li>
                    <li className="fadein delay-time03">
                      <div className="p-outline-detail__element_list__feature03__img">
                        <img src="/bytech/assets/img/course/img_c_course02_04.png" alt="" width="120" height="120" />
                      </div>
                      <div className="p-outline-detail__element_list__feature03__desc">
                        <h4>おすすめタイトル</h4>
                        <p>説明テキストが入ります。説明テキストが入ります。</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="p-outline-detail__item">
                  <div className="p-outline-detail__item__Box">
                    <h3 className="p-outline-detail__item__ttl">受講形式</h3>
                    <dl>
                      <dt>オンデマンド形式</dt>
                      <dd>※受講にはVook無料会員登録が必要です。<br />
                        ※動画のみを受講するプランであるため、メンターサポートや課題などはありません。</dd>
                    </dl>
                  </div>
                  <div className="p-outline-detail__item__Box">
                    <h3 className="p-outline-detail__item__ttl">受講可能期間<span>（カリキュラム視聴可能期間）</span></h3>
                    <dl>
                      <dt>お申し込み完了日から6ヶ月間見放題</dt>
                      <dd>※受講期間終了後は閲覧することができません。</dd>
                    </dl>
                  </div>
                </div>
                <div className="p-outline-detail__price">
                  <div className="p-outline-detail__price__table__body">
                    <div className="p-outline-detail__price__table__initial">
                      <span className="p-outline-detail__price__table__initial-label">税込</span>
                      <span className="p-outline-detail__price__table__initial-unit">¥</span>
                      <span className="p-outline-detail__price__table__initial-price font-en">50,000</span>
                      <span className="p-outline-detail__price__table__monthly-unit__sub">（プラン全体の料金）</span>
                    </div>
                    <p className="p-outline-detail__price__table__monthly-unit__sub02 pc-none">（プラン全体の料金）</p>
                    <p className="p-outline-detail__price__table_txt">※このコースの注意書きがあれば説明テキスト</p>
                  </div>
                </div>
                <div className="p-outline-detail__btn">
                  <div className="c-btn _blue _shadow02">
                    <a href="/counseling" rel="noopener"><span>お申し込みはこちら</span></a>
                  </div>
                  <div className="c-btn _yellow _shadow02">
                    <a href="/#courses" rel="noopener"><span>他のコースも見る</span></a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="course sec-c" id="course">
            <div className="course__inner u-inner">
              <div className="course__area-txt">
                <h2 className="course__area-txt__head fadein is-show">
                  <span className="course__area-txt__head__main">バイテックの講座内容</span>
                  <span className="course__area-txt__head__sub font-en">COURSE</span>
                </h2>
                <p>生成AIを活用して<br />画像生成とライティングのスキルをマスター</p>
              </div>
            </div>
            <div className="slider__area">
              <div className="slider_course">
                <div className="slider-wrapper">
                  <div className="c-slide">
                    <article className="c-slide__card">
                      <div className="c-slide__card__content__img">
                        <img src="/bytech/assets/img/curriculum/course_img_001.png" alt="" />
                      </div>
                      <div className="c-slide__card__content__desc">
                        <div className="c-slide__card__content__desc__badge">
                          <span className="c-slide__card__content__desc__badge_ttl">AIウェブライターコース</span>
                          <span className="c-slide__card__content__desc__badge__tags">
                            <span>全94レッスン</span>
                            <span>2時間</span>
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="c-slide">
                    <article className="c-slide__card">
                      <div className="c-slide__card__content__img">
                        <img src="/bytech/assets/img/curriculum/course_img_001.png" alt="" />
                      </div>
                      <div className="c-slide__card__content__desc">
                        <div className="c-slide__card__content__desc__badge">
                          <span className="c-slide__card__content__desc__badge_ttl">AIノーコードエンジニアコース</span>
                          <span className="c-slide__card__content__desc__badge__tags">
                            <span>全130レッスン</span>
                            <span>2時間</span>
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="c-slide">
                    <article className="c-slide__card">
                      <div className="c-slide__card__content__img">
                        <img src="/bytech/assets/img/curriculum/course_img_002.png" alt="" />
                      </div>
                      <div className="c-slide__card__content__desc">
                        <div className="c-slide__card__content__desc__badge">
                          <span className="c-slide__card__content__desc__badge_ttl">AIビジネスワーカーコース</span>
                          <span className="c-slide__card__content__desc__badge__tags">
                            <span>全231レッスン</span>
                            <span>2時間</span>
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="c-slide">
                    <article className="c-slide__card">
                      <div className="c-slide__card__content__img">
                        <img src="/bytech/assets/img/curriculum/course_img_003.png" alt="" />
                      </div>
                      <div className="c-slide__card__content__desc">
                        <div className="c-slide__card__content__desc__badge">
                          <span className="c-slide__card__content__desc__badge_ttl">Geminiマスターコース</span>
                          <span className="c-slide__card__content__desc__badge__tags">
                            <span>全47レッスン</span>
                            <span>2時間</span>
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="c-slide">
                    <article className="c-slide__card">
                      <div className="c-slide__card__content__img">
                        <img src="/bytech/assets/img/curriculum/course_img_004.png" alt="" />
                      </div>
                      <div className="c-slide__card__content__desc">
                        <div className="c-slide__card__content__desc__badge">
                          <span className="c-slide__card__content__desc__badge_ttl">Copilotマスターコース</span>
                          <span className="c-slide__card__content__desc__badge__tags">
                            <span>全48レッスン</span>
                            <span>2時間</span>
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="c-slide">
                    <article className="c-slide__card">
                      <div className="c-slide__card__content__img">
                        <img src="/bytech/assets/img/curriculum/course_img_005.png" alt="" />
                      </div>
                      <div className="c-slide__card__content__desc">
                        <div className="c-slide__card__content__desc__badge">
                          <span className="c-slide__card__content__desc__badge_ttl">Chat GPTマスターコース</span>
                          <span className="c-slide__card__content__desc__badge__tags">
                            <span>全45レッスン</span>
                            <span>2時間</span>
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="c-link__area">
            <div className="c-link__area__box fadein">
              <a href="" className="-contact">
                <div className="textarea">
                  <div className="ttl">
                    <small className="en">CONTACT</small>
                    <p className="main">お問い合わせ</p>
                  </div>
                  <p className="text">AI人材への一歩を踏み出そう！<br className="sp-none" />まずは完全無料で相談してみる</p>
                  <div className="c-btn _yellow _shadow02">お問い合わせはこちら</div>
                </div>
                <div className="img">
                  <img src="/bytech/assets/img/curriculum/lp_img_curriculum_cta_01.png" alt="お問い合わせ" />
                </div>
              </a>
            </div>

            <div className="c-link__area__box fadein delay-time02">
              <a href="" className="-detail">
                <div className="textarea">
                  <div className="ttl">
                    <small className="en">COURSE</small>
                    <p className="main">バイテックで学べるコース</p>
                  </div>
                  <p className="text">AI人材への一歩を踏み出そう！<br className="sp-none" />まずは完全無料で相談してみる</p>
                  <div className="c-btn _yellow _shadow02">コース詳細はこちら</div>
                </div>
                <div className="img">
                  <img src="/bytech/assets/img/curriculum/lp_img_curriculum_cta_02.png" alt="バイテックで学べるコース" />
                </div>
              </a>
            </div>
          </section>

          <section className="online c-sec" id="online">
            <div className="online__inner u-inner">
              <div className="online__bg"></div>
              <div className="online__area-txt">
                <h2 className="online__area-txt__head fadein">
                  <span className="online__area-txt__head__main">無料オンライン説明会を<br />毎日開催中！</span>
                </h2>
                <p><img src="/bytech/assets/img/curriculum/img_online_96.png" alt="" /></p>
              </div>
            </div>
          </section>

          <section className="session c-sec" id="session">
            <div className="session__inner u-inner">
              <div className="session__area-txt">
                <h2 className="session__area-txt__head fadein is-show">
                  <span className="session__area-txt__head__main">オンラインで<br /><span className="mark_b">なんでも相談</span>できる60分</span>
                  <span className="session__area-txt__head__sub font-en">SESSION</span>
                </h2>
              </div>
              <div className="session__consult-point__wrapper">
                <ol className="session__consult-point">
                  <li className="session__consult-point__item fadein">
                    <span className="session__consult-point__item__step font-en"><span><span className="small">POINT</span>01</span></span>
                    <div className="session__consult-point__item__img"><img src="/bytech/assets/img/curriculum/img_session_step01.jpg" alt="" /></div>
                    <h3 className="session__consult-point__item__head">受講前の悩みや不安を<br className="sp-none" />気軽に相談できる！</h3>
                    <p className="session__consult-point__item__txt">スキル習得までにかかる学習時間や、受講に必要なPCスペックやソフトの準備など受講前の疑問を解消させていただきます。</p>
                  </li>
                  <li className="session__consult-point__item fadein delay-time02">
                    <span className="session__consult-point__item__step font-en"><span><span className="small">POINT</span>02</span></span>
                    <div className="session__consult-point__item__img"><img src="/bytech/assets/img/curriculum/img_session_step02.jpg" alt="" /></div>
                    <h3 className="session__consult-point__item__head">スキル習得から案件獲得の<br className="sp-none" />流れが具体的にわかる！</h3>
                    <p className="session__consult-point__item__txt">未経験から動画編集を仕事にしていく流れや、デジハクのサポート体制について実例を通して具体的にご紹介いたします。</p>
                  </li>
                  <li className="session__consult-point__item fadein delay-time03">
                    <span className="session__consult-point__item__step font-en"><span><span className="small">POINT</span>03</span></span>
                    <div className="session__consult-point__item__img"><img src="/bytech/assets/img/curriculum/img_session_step03.jpg" alt="" /></div>
                    <h3 className="session__consult-point__item__head">稼ぎ続けるクリエイター<br className="sp-none" />になる方法が分かる！</h3>
                    <p className="session__consult-point__item__txt">スキル習得までにかかる学習時間や、受講に必要なPCスペックやソフトの準備など受講前の疑問を解消させていただきます。</p>
                  </li>
                </ol>
              </div>

              <div className="c-btn01">
                <a href="/counseling" className="c-btn01__button">
                  <div className="c-btn01__button__inner">
                    <div className="c-btn01__button__inner__span">オンライン説明会に参加する</div>
                    <div className="c-btn01__button__inner__icon"></div>
                  </div>
                </a>
              </div>

            </div>
          </section>

        </main>

        <footer className="footer l-footer">
          <div className="l-footer__links">
            <div className="l-footer__links__inner u-inner">
              <div className="l-footer__links__box">
                <h2 className="l-footer__links__box__head">すべての人に、<br /> AIという武器を。</h2>
                <div className="l-footer__links__box__item">
                  <div className="l-footer__links__box__item__top">
                    <h3>まずはお気軽に無料説明会にご参加ください</h3>
                    <p className="l-footer__links__box__bt">
                      <a href="/counseling" className="c-btn02__button">無料説明会に申し込む</a>
                    </p>
                  </div>
                  <ul className="l-footer__links__box__item__list">
                    <li><a href="/support">サポート詳細</a></li>
                    <li><Link href="/#courses">コース一覧</Link></li>
                    <li><a href="/bytech/plan">料金プラン</a></li>
                    <li><a href="https://bytech.jp/blog/category/interview/" target="_blank" rel="noopener">受講生の声</a></li>
                    <li><Link href="/#faq">よくある質問</Link></li>
                    <li><a href="https://ai-bou.co.jp" target="_blank" rel="noopener">運営会社</a></li>
                    <li><a href="/specified_commercial">特定商取引法に関する表⽰</a></li>
                    <li><a href="/privacy-policy">プライバシーポリシー</a></li>
                    <li><a href="/refund-policy">返金ポリシー</a></li>
                    <li><a href="/system-requirements">システム要件</a></li>
                    <li><a href="/membership-terms">会員規約</a></li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
          <div className="l-footer__info">
            <div className="l-footer__info__inner u-inner">
              <p className="l-footer__info__logo">
                <a href="/bytech" className="l-footer__info__logo-link u-alpha">
                  <img src="/bytech/assets/img/txt-logo.svg" alt="" width="121" height="42" />
                </a>
              </p>
              <p className="l-footer__info__copy">
                <span className="copyright">2024 Librex Inc. All rights reserved.byTech</span>
              </p>
            </div>
          </div>
        </footer>

        <div className="btn__cta js-c-cv02 c-cv02">
          <div className="btn__cta_wrap fadein delay-time04 is-show">
            <a href="/counseling" className="btn btn-c">
              <div className="btn-c__shine-wrapper">
                <div className="btn-c__shine"></div>
              </div>
              <span className="clearfix">簡単30秒で予約完了！</span>まずは無料で相談してみる
            </a>
          </div>
        </div>
      </div>

      <Script src="/bytech/assets/js/jquery-3.7.1.min.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js" strategy="afterInteractive" />
      <Script src="/bytech/assets/slick/slick.min.js" strategy="afterInteractive" />
      <Script src="/bytech/assets/js/anime.min.js" strategy="afterInteractive" />
      <Script src="/bytech/assets/js/scrollMonitor.js" strategy="afterInteractive" />
      <Script src="/bytech/assets/js/revealFx.js" strategy="afterInteractive" />
      <Script src="/bytech/assets/js/main.js" strategy="afterInteractive" />
      <Script src="/bytech/assets/js/scripts.js" strategy="afterInteractive" />
    </>
  )
}
