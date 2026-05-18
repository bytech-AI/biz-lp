import Script from 'next/script'

export default function CurriculumPage() {
  return (
    <>
      <link rel="stylesheet" href="/bytech/assets/css/style.min.css" />
      <link rel="stylesheet" href="/bytech/assets/css/endless-river.css" />
      <link rel="stylesheet" href="/bytech/assets/slick/slick.css" />
      <link rel="stylesheet" href="/bytech/assets/slick/slick-theme.css" />

      <div className="page-curriculum">
        <header className="header">
          <div className="header__inner">
            <div className="header__logo">
              <a href="/bytech"><img src="/bytech/assets/img/hd-logo.svg" className="" alt="バイテック生成AI" /></a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav__gnav--menu">
                <li className="menu-item"><a href="/bytech" className="gnav--link menu_home"><span className="ttl">トップ</span></a></li>
                <li className="menu-item"><a href="#" className="gnav--link menu_home"><span className="ttl">サポート詳細</span></a></li>
                <li className="menu-item"><a href="/bytech#courses" className="gnav--link menu_home"><span className="ttl">コース一覧</span></a></li>
                <li className="menu-item"><a href="/bytech#plan" className="gnav--link menu_home"><span className="ttl">料金プラン</span></a></li>
                <li className="menu-item"><a href="#" className="gnav--link menu_home"><span className="ttl">受講生の声</span></a></li>
                <li className="menu-item"><a href="/bytech#faq" className="gnav--link menu_home"><span className="ttl">よくある質問</span></a></li>
              </ul>
              <div className="c-btn _yellow _shadow02">
                <a href="#" rel="noopener"><span>お問い合わせ</span></a>
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
              <h1 className="c-under-mv__area-txt__ttl font-en">CURRICULUM<small>カリキュラム</small></h1>
            </div>
          </section>

          <section className="lead-component sec-c">
            <h2 className="lead-component__txt">107項目のカリキュラムと<br className="sp-none" />
              <span className="mark_b">56の実践課題を通じて</span><br className="sp-none" />
              プロが認めるスキルを手に入れる</h2>
            <p>バイテックでは、１名の生徒に対し2人の講師が担当します。<br />学習の量を管理するトレーナーと質をUPさせるコンサルタントが2つの軸で受講生の学習を徹底サポートします。</p>
          </section>

          <section className="feature sec-c" id="feature">
            <div className="feature__inner u-inner">
              <div className="feature__area-txt">
                <h2 className="feature__area-txt__head fadein is-show">
                  <span className="feature__area-txt__head__main">バイテック3つの特徴</span>
                  <span className="feature__area-txt__head__sub font-en">FEATURE</span>
                </h2>
              </div>
              <ul className="c_feature__list">
                <li className="c_feature__list__item c_feature_item01 fadein">
                  <span className="c_feature__list__item__step font-en"><span>01</span></span>
                  <h3 className="c_feature__list__item__head">実践型！<br />作りながら学べる</h3>
                  <p className="c_feature__list__item__img"><img src="/bytech/assets/img/curriculum/img_c_feature_01.png" alt="" width="270" height="200" /></p>
                  <p className="c_feature__list__item__txt">独自開発カリキュラム</p>
                </li>
                <li className="c_feature__list__item c_feature_item02 fadein delay-time02">
                  <span className="c_feature__list__item__step font-en"><span>02</span></span>
                  <h3 className="c_feature__list__item__head">プロのクリエイターに<br className="sp-none" />質問できる</h3>
                  <p className="c_feature__list__item__img"><img src="/bytech/assets/img/curriculum/img_c_feature_02.png" alt="" width="224" height="200" /></p>
                  <p className="c_feature__list__item__txt">メンター制度</p>
                </li>
                <li className="c_feature__list__item c_feature_item03 fadein delay-time03">
                  <span className="c_feature__list__item__step font-en"><span>03</span></span>
                  <h3 className="c_feature__list__item__head">ライフスタイルに合わせて<br className="sp-none" />受講可能！</h3>
                  <p className="c_feature__list__item__img"><img src="/bytech/assets/img/curriculum/img_c_feature_03.png" alt="" width="286" height="200" /></p>
                  <p className="c_feature__list__item__txt">完全オンライン形式</p>
                </li>
              </ul>
            </div>
            <div className="c_feature-detail__box">
              <div className="u-inner">
                <div className="c_feature-detail__row_txt">
                  <h3 className="c_feature-detail__title">
                    <span className="c_feature-detail__title__num">01</span>
                    <span className="c_feature-detail__title__head"><span>実践型！作りながら学べる</span>独自開発カリキュラム</span>
                  </h3>
                  <p className="c_feature-detail__txt">107項目のカリキュラムと56本を超える課題を通じて、プロに必要な知識と技術を習得</p>
                </div>

                <div className="c_feature-detail__intro01">
                  <div className="c_feature-detail__intro01__title">
                    <p className="c_feature-detail__intro01__fukidashi"><span>カリキュラムをチラッとご紹介</span></p>
                  </div>
                  <div className="c_feature-detail__intro01_inner">
                    <p>バイテックでは、プロ監修の独自開発カリキュラムでは、基礎から専門的な知識に至るまで、<br className="sp-none" />必要な知識を学ぶことができます。</p>
                    <ul className="c_feature-detail__intro01__element_list">
                      <li className="fadein">
                        <img src="/bytech/assets/img/curriculum/img_c_feature02_01.jpg" alt="" width="316" height="580" />
                        <h4>実際に作る映像</h4>
                        <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
                      </li>
                      <li className="fadein delay-time02">
                        <img src="/bytech/assets/img/curriculum/img_c_feature02_02.jpg" alt="" width="316" height="580" />
                        <h4>実際に作る映像</h4>
                        <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
                      </li>
                      <li className="fadein delay-time03">
                        <img src="/bytech/assets/img/curriculum/img_c_feature02_03.jpg" alt="" width="316" height="580" />
                        <h4>実際に作る映像</h4>
                        <p>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="c_feature-detail__intro02">
                  <div className="c_feature-detail__intro02__title">
                    <h3 className="c_feature-detail__intro02__title__head">様々な映像ジャンルから、プロとして必要なスキル・知識を学ぶ</h3>
                    <p>カリキュラムの各章末には実践課題を用意。習得した知識を応用して課題に取り組むことで、確実に実力をつけることができます。</p>
                  </div>
                  <div className="c_feature-detail__intro02_inner">
                    <ul className="c_feature-detail__intro02__element_list">
                      <li className="fadein">
                        <div><img src="/bytech/assets/img/curriculum/img_c_feature02_04_001.png" alt="" width="120" height="120" /></div>
                        <div>
                          <h4>インフォグラフィックス</h4>
                          <p>After effect基礎 / Illustrator基礎</p>
                        </div>
                      </li>
                      <li className="fadein">
                        <div><img src="/bytech/assets/img/curriculum/img_c_feature02_04_002.gif" alt="" width="120" height="120" /></div>
                        <div>
                          <h4>ロゴモーション</h4>
                          <p>After Effects応用 / Illustrator応用</p>
                        </div>
                      </li>
                      <li className="fadein">
                        <div><img src="/bytech/assets/img/curriculum/img_c_feature02_04_003.jpg" alt="" width="120" height="120" /></div>
                        <div>
                          <h4>架空の15秒CM</h4>
                          <p>After Effects応用 / Premiere Pro基礎 / Illustrator基礎 / Photoshop基礎 / 制作知識 / コンテ制作 / オーディオ</p>
                        </div>
                      </li>
                      <li className="fadein">
                        <div><img src="/bytech/assets/img/curriculum/img_c_feature02_04_004.jpg" alt="" width="120" height="120" /></div>
                        <div>
                          <h4>ブランディング（動画）</h4>
                          <p>After Effects総括 / Illustrator総括</p>
                        </div>
                      </li>
                      <li className="fadein">
                        <div><img src="/bytech/assets/img/curriculum/img_c_feature02_04_005.gif" alt="" width="120" height="120" /></div>
                        <div>
                          <h4>マスター専用</h4>
                          <p>After Effects応用 / Illustrator基礎 / Photoshop基礎 / 制作知識 / コンテ制作 / オーディオ / +Challenge（実写合成 / カラコレ / 抽象的表現（アブスクラクト） / 制作効率化)</p>
                        </div>
                      </li>
                      <li className="fadein">
                        <div><img src="/bytech/assets/img/curriculum/img_c_feature02_04_006.jpg" alt="" width="120" height="120" /></div>
                        <div>
                          <h4>マスタープラン Pro専用</h4>
                          <p>After Effects応用 / Illustrator基礎 / Photoshop基礎 / 制作知識 / コンテ制作 / オーディオ / +Challenge（実写合成 / カラコレ / 抽象的表現（アブスクラクト） / 制作効率化)</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="c_feature-detail__intro03">
                  <h3 className="c_feature-detail__intro03__title">
                    <span className="c_feature-detail__intro03__title__thumb mark_b font-en">Special Curriculum</span>
                    <div className="c_feature-detail__intro03__title__head">
                      PRO限定の<br className="pc-none" /><span className="mark_b">スペシャル</span>カリキュラム
                    </div>
                  </h3>
                  <div className="c_feature-detail__intro03_inner">
                    <ul className="c_feature-detail__intro03__element_list">
                      <li className="fadein">
                        <div className="c_feature-detail__intro03__element_list__feature03__img">
                          <div className="lottie" data-json="/bytech/assets/json/anim3.json"></div>
                        </div>
                        <div className="c_feature-detail__intro03__element_list__feature03__desc">
                          <h4><small>実践的な課題で現場感覚を磨く</small>仮想クライアントワーク</h4>
                          <p>マスター限定で、擬似的にクライアントワークを体験できる特別課題を用意。<br />
                            Vook school限定で許諾をいただいた企業のサービスや製品PRを想定したテーマを出題。<br />
                            実際の仕事に最も近い状況で課題に取り組むことが可能です。</p>
                        </div>
                      </li>
                      <li className="fadein delay-time02">
                        <div className="c_feature-detail__intro03__element_list__feature03__img">
                          <div className="lottie" data-json="/bytech/assets/json/anim2.json"></div>
                        </div>
                        <div className="c_feature-detail__intro03__element_list__feature03__desc">
                          <h4><small>自分らしさを伝える作品集を完成</small>ポートフォリオ制作</h4>
                          <p>マスター限定で、擬似的にクライアントワークを体験できる特別課題を用意。<br />
                            Vook school限定で許諾をいただいた企業のサービスや製品PRを想定したテーマを出題。<br />
                            実際の仕事に最も近い状況で課題に取り組むことが可能です。</p>
                        </div>
                      </li>
                      <li className="fadein delay-time03">
                        <div className="c_feature-detail__intro03__element_list__feature03__img">
                          <div className="lottie" data-json="/bytech/assets/json/anim4.json"></div>
                        </div>
                        <div className="c_feature-detail__intro03__element_list__feature03__desc">
                          <h4><small>現場直結のノウハウを学べる</small>第一線で活躍する<br className="sp-none" />クリエイターが制作したカリキュラム</h4>
                          <p>マスター限定で、擬似的にクライアントワークを体験できる特別課題を用意。<br />
                            Vook school限定で許諾をいただいた企業のサービスや製品PRを想定したテーマを出題。<br />
                            実際の仕事に最も近い状況で課題に取り組むことが可能です。</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="c_feature-detail__box section-02">
              <div className="u-inner">
                <div className="c_feature-detail__row_txt">
                  <h3 className="c_feature-detail__title">
                    <span className="c_feature-detail__title__num">02</span>
                    <span className="c_feature-detail__title__head"><span>プロのクリエイターに質問できる！</span>メンター制度</span>
                  </h3>
                  <p className="c_feature-detail__txt">107項目のカリキュラムと56本を超える課題を通じて、プロに必要な知識と技術を習得</p>
                </div>
              </div>

              <div className="slider__area">
                <div className="slider_mentor">
                  <div className="slider-wrapper">
                    {[1,2,3,4,5,1,2,3,4,5].map((num, idx) => {
                      const names = ['夏井 大輝', '池田 義国', '田中 省伍', '那須 太陽', '野口 侑渡'];
                      const namesEn = ['Daiki Natsui', 'Yoshikuni Ikeda', 'Shogo Tanaka', 'Taiyo Nasu', 'Yuto Noguchi'];
                      const logos = ['img_slide__logo01.png', 'img_slide__logo04.png', 'img_slide__logo02.png', 'img_slide__logo05.png', 'img_slide__logo03.png'];
                      const logoW = ['147', '80', '267', '167', '156'];
                      const logoH = ['72', '36', '36', '36', '32'];
                      const works = ['業務活用 × Copilot活用', '業務活用 × Dyfy開発', '業務活用 × MCP活用', '業務活用 × ChatGPT活用', '業務活用 × Gemini活用'];
                      const i = num - 1;
                      return (
                        <div className="c-slide" key={idx}>
                          <article className="c-slide__card">
                            <div className="c-slide__card__content__img">
                              <img src={`/bytech/assets/img/curriculum/img_slide__m0${num}.jpg`} alt="" width="269" height="269" />
                            </div>
                            <div className="c-slide__card__content__desc">
                              <div className="c-slide__card__content__desc__badge">
                                <span><img src={`/bytech/assets/img/curriculum/${logos[i]}`} alt="" width={logoW[i]} height={logoH[i]} /></span>
                                <span className="c-slide__card__content__desc__badge__works">{works[i]}</span>
                              </div>
                              <h4>{names[i]}<small>{namesEn[i]}</small></h4>
                              <p>プロフィール詳細が入ります。プロフィール詳細が入ります。プロフィール詳細が入ります。プロフィール詳細が入ります。プロフィール詳細が入ります。プロフィール詳細が入ります。プロフィール詳細が入ります。プロフィール詳細が入ります。プロフィール詳細が入ります。</p>
                            </div>
                          </article>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="c_feature-detail__box section-03">
              <div className="u-inner">
                <div className="c_feature-detail__row_txt">
                  <h3 className="c_feature-detail__title">
                    <span className="c_feature-detail__title__num">03</span>
                    <span className="c_feature-detail__title__head"><span>ライフスタイルに合わせて受講可能</span>完全オンライン形式</span>
                  </h3>
                  <p className="c_feature-detail__txt">オンライン教材とメンターによるチャットサポート&amp;通話サポートによる完全オンライン形式となっています。
                    PCやスマートフォン、タブレットからいつでも受講できるので、仕事やプライベートと両立しながら、ご自身のライフスタイルに合わせて受講できます。</p>
                </div>

                <div className="c_feature-detail__intro01">
                  <div className="c_feature-detail__intro01__title">
                    <p className="c_feature-detail__intro01__fukidashi"><span>ボイスチャットツールDiscordを通して</span></p>
                    <p className="c_feature-detail__intro01__fukidashi fukidashi_02"><span>より手軽に、より身近に。</span></p>
                  </div>
                  <div className="c_feature-detail__intro01__bg-wrap">
                    <img src="/bytech/assets/img/curriculum/bg_dic_logo.png" alt="" width="861" height="667" />
                  </div>
                  <div className="c_feature-detail__intro01_inner">
                    <ul className="c_feature-detail__intro01__element_list">
                      <li className="fadein">
                        <div className="list__box">
                          <h4><span>実践的な課題で現場感覚を磨く</span>チャットサポート</h4>
                          <p>メンターが常駐していない時でも、気軽にチャットで質問可能。原則、24時間以内にメンターからの返信がきます。</p>
                        </div>
                      </li>
                      <li className="fadein delay-time02">
                        <div className="list__box">
                          <h4><span>実践的な課題で現場感覚を磨く</span>メンター通話サポート</h4>
                          <p>バイテックに在籍しているメンターは、全員が現役のプロクリエイター。開校時間はいつでも繋がる。なんでも聞ける。</p>
                        </div>
                      </li>
                      <li className="fadein delay-time03">
                        <div className="list__box">
                          <h4><span>実践的な課題で現場感覚を磨く</span>生徒同士の交流も</h4>
                          <p>同じ目標に向かって集まったメンバーと繋がることだって簡単。将来チームを組むことだってあるかも。</p>
                        </div>
                      </li>
                      <li className="fadein delay-time04">
                        <div className="list__box">
                          <h4><span>実践的な課題で現場感覚を磨く</span>作品ギャラリー</h4>
                          <p>他の生徒さんの映像を見てモチベーションが上がる。同じカリキュラム課題でも、アイディア次第で色々な表現ができちゃう。</p>
                        </div>
                      </li>
                    </ul>
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
                  {[
                    { img: 'course_img_001.png', title: 'AIウェブライターコース', lessons: '全94レッスン' },
                    { img: 'course_img_001.png', title: 'AIノーコードエンジニアコース', lessons: '全130レッスン' },
                    { img: 'course_img_002.png', title: 'AIビジネスワーカーコース', lessons: '全231レッスン' },
                    { img: 'course_img_003.png', title: 'Geminiマスターコース', lessons: '全47レッスン' },
                    { img: 'course_img_004.png', title: 'Copilotマスターコース', lessons: '全48レッスン' },
                    { img: 'course_img_005.png', title: 'Chat GPTマスターコース', lessons: '全45レッスン' },
                  ].map((course, idx) => (
                    <div className="c-slide" key={idx}>
                      <article className="c-slide__card">
                        <div className="c-slide__card__content__img">
                          <img src={`/bytech/assets/img/curriculum/${course.img}`} alt="" />
                        </div>
                        <div className="c-slide__card__content__desc">
                          <div className="c-slide__card__content__desc__badge">
                            <span className="c-slide__card__content__desc__badge_ttl">{course.title}</span>
                            <span className="c-slide__card__content__desc__badge__tags">
                              <span>{course.lessons}</span>
                              <span>2時間</span>
                            </span>
                          </div>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="course__point__wrapper">
              <div className="course__inner u-inner">
                <div className="course__point">
                  <div className="course__point__area-txt">
                    <div className="course__point__header">
                      <div className="course__point__head">
                        <h3><small>学び続けられる！サポートも万全で安心</small>受講終了後も<br className="pc-none" />ずっと利用可能！</h3>
                      </div>
                    </div>
                    <ul className="course__point__list">
                      <li className="course__point__list__item">バイテックの講座カリキュラムは、<br className="sp-none" />サポート終了後も何度でも学習することが可能です。</li>
                      <li className="course__point__list__item">教材は定期的にアップデートされるため、<br className="sp-none" />最新の情報で学習することができます。</li>
                      <li className="course__point__list__item">毎月リリースされる新教材を学習していくことで、<br className="sp-none" />継続的なスキルアップにも繋がります。</li>
                    </ul>
                  </div>
                  <div className="course__point__area-img">
                    <img src="/bytech/assets/img/curriculum/img_course_mock.png" alt="" />
                  </div>
                </div>
                <div className="course__bg"></div>
                <div className="c-btn _yellow _shadow02">
                  <a href="#" rel="noopener"><span>今すぐ無料ではじめる</span></a>
                </div>
              </div>
            </div>
          </section>

          <section className="skill sec-c" id="skill">
            <div className="skill__inner u-inner">
              <div className="skill__area-txt">
                <h2 className="skill__area-txt__head fadein is-show">
                  <span className="skill__area-txt__head__main">身につくスキル</span>
                  <span className="skill__area-txt__head__sub font-en">SKILL</span>
                </h2>
                <p>バイテックでは、生成AIを仕事にするために必要なスキルが詰まった、総合カリキュラムとなっています。<br />
                  Premiere ProやAfter Effectsを用いた編集スキルのほか、案件獲得から収益の拡大など30種類以上のスキルを身につけることができます。</p>
              </div>
              <div className="skill__item__group">
                {['Premiere Pro','After Effects','Photoshop','illustrator','YouTube動画編集','ショート動画制作','広告動画制作','サービス紹介動画制作','モーショングラフィックス','ビジュアルデザイン','サムネイル制作','ポートフォリオ制作','撮影','生成AI活用','企画・構成力','ビジネス力基礎','案件獲得ノウハウ','クライアントワーク','マーケティング','YouTube運用','ディレクション','営業テクニック','税金・法律の知識','確定申告'].map((skill, idx) => (
                  <div className={`skill__item__group__child skill__item_${String(idx+1).padStart(3,'0')}`} key={idx}>{skill}</div>
                ))}
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

          <section className="voice c-sec" id="voice">
            <div className="voice__inner u-inner">
              <div className="voice__area-txt">
                <h2 className="voice__area-txt__head fadein is-show">
                  <span className="voice__area-txt__head__main">未経験から副業収入を<br className="pc-none" />獲得した皆様</span>
                  <span className="voice__area-txt__head__sub font-en">VOICE</span>
                </h2>
              </div>
            </div>
            <div className="voice__slider">
              <ul className="voice__slider__list">
                {[1,2,3,4,5,6,7].map(n => (
                  <li className="voice__slider__list__item" key={n}><img src={`/bytech/assets/img/lp_img_voice_0${n}.png`} alt="" /></li>
                ))}
              </ul>
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
                  {[
                    { img: 'img_session_step01.jpg', head: '受講前の悩みや不安を\n気軽に相談できる！', txt: 'スキル習得までにかかる学習時間や、受講に必要なPCスペックやソフトの準備など受講前の疑問を解消させていただきます。' },
                    { img: 'img_session_step02.jpg', head: 'スキル習得から案件獲得の\n流れが具体的にわかる！', txt: '未経験から動画編集を仕事にしていく流れや、デジハクのサポート体制について実例を通して具体的にご紹介いたします。' },
                    { img: 'img_session_step03.jpg', head: '稼ぎ続けるクリエイター\nになる方法が分かる！', txt: 'スキル習得までにかかる学習時間や、受講に必要なPCスペックやソフトの準備など受講前の疑問を解消させていただきます。' },
                  ].map((item, idx) => (
                    <li className={`session__consult-point__item fadein${idx > 0 ? ` delay-time0${idx+1}` : ''}`} key={idx}>
                      <span className="session__consult-point__item__step font-en"><span><span className="small">POINT</span>0{idx+1}</span></span>
                      <div className="session__consult-point__item__img"><img src={`/bytech/assets/img/curriculum/${item.img}`} alt="" /></div>
                      <h3 className="session__consult-point__item__head">{item.head.split('\n').map((line, i) => <span key={i}>{i > 0 && <br className="sp-none" />}{line}</span>)}</h3>
                      <p className="session__consult-point__item__txt">{item.txt}</p>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="c-btn01">
                <a href="#" className="c-btn01__button">
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
                      <a href="#" className="c-btn02__button">無料説明会に申し込む</a>
                    </p>
                  </div>
                  <ul className="l-footer__links__box__item__list">
                    <li><a href="#">サポート詳細</a></li>
                    <li><a href="#">コース一覧</a></li>
                    <li><a href="#">料金プラン</a></li>
                    <li><a href="#">受講生の声</a></li>
                    <li><a href="#">よくある質問</a></li>
                    <li><a href="#" target="_blank">運営会社</a></li>
                    <li><a href="#">特定商取引法に関する表⽰</a></li>
                    <li><a href="#">プライバシーポリシー</a></li>
                    <li><a href="#">返金ポリシー</a></li>
                    <li><a href="#">システム要件</a></li>
                    <li><a href="#">会員規約</a></li>
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
            <a href="#" className="btn btn-c">
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
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.10.2/lottie.min.js" strategy="afterInteractive" />
    </>
  )
}
