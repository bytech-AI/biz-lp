import Image from "next/image";
import styles from "./page.module.css";

// about section uses aboutHero/aboutCards classes from page.module.css
const worries = [
  ["情報は集めたが", "作れる側に立てていない"],
  ["AIでコードは書けるが", "プロダクトとして仕上げきれない"],
  ["副業や受託で稼ぎたいが", "案件を取り切る実装力に自信がない"],
];

const results = [
  {
    name: "山岸 裕さん",
    role: "フロントエンドエンジニア",
    before: ["開発案件が", "中々増えない"],
    after: ["生成AI開発案件を獲得！", "さらに単価もUP！"],
    tag: "生成AIエンジニアコースを受講",
    titleBefore: "学習開始から",
    titleAccent: "約1ヶ月で生成AI開発案件を獲得！単価アップも実現",
    titleAfter: "できました！",
    body: "生成AIアプリケーション開発の実践的なスキルを学ぶことで、1か月で初めての生成AI開発案件を獲得できるようになりました。さらに、案件の単価も1.5倍に向上させることができました。",
    image: "/geek-assets/case-main.webp",
    width: 2880,
    height: 2556,
  },
  {
    name: "田中 美咲さん",
    role: "事業責任者",
    before: ["外注コストが", "膨らんでいた"],
    after: ["業務改善ツールを内製化！", "月40万円削減！"],
    tag: "Claude Code実装コースを受講",
    titleBefore: "外注していた",
    titleAccent: "業務改善ツールをClaude Codeで内製化",
    titleAfter: "できました！",
    body: "設計から実装、公開までを一通り学んだことで、社内の細かな改善要望を自分で形にできるようになりました。外注依存が減り、改善スピードも上がっています。",
    image: "/geek-assets/support-01.webp",
    width: 1200,
    height: 800,
  },
  {
    name: "佐藤 健さん",
    role: "現役エンジニア",
    before: ["AI活用が", "個人作業で止まっていた"],
    after: ["開発フローを社内展開！", "生産性も改善！"],
    tag: "AI駆動開発コースを受講",
    titleBefore: "Claude Codeの",
    titleAccent: "開発フローをチームに展開し、生産性改善",
    titleAfter: "を実感しました！",
    body: "個人のAI活用に留まらず、レビューやタスク分解、実装の進め方までチームで再現できる形に整理できました。新規機能の立ち上げ速度も改善しています。",
    image: "/geek-assets/lead-person.webp",
    width: 1200,
    height: 800,
  },
  {
    name: "鈴木 翔さん",
    role: "副業志向",
    before: ["成果物を", "案件提案に使えない"],
    after: ["受講中の制作物から", "初案件を受注！"],
    tag: "副業デビュー支援を受講",
    titleBefore: "受講中に作った",
    titleAccent: "成果物を提案資料に変え、初案件を受注",
    titleAfter: "できました！",
    body: "作って終わりではなく、提案文や価格設計まで支援を受けられたことで、学習成果をそのまま営業資料として活用できました。副業の入口を作れたことが大きな成果です。",
    image: "/geek-assets/support-03.webp",
    width: 1200,
    height: 800,
  },
];

const features = [
  ["01", "Claude Code完全特化", "ツールを横並びで紹介するのではなく、Claude Codeを現場で使い倒せる深度まで学びます。"],
  ["02", "作って終わらせない", "受講中に作った成果物が、そのまま副業案件のポートフォリオや社内提案に使えます。"],
  ["03", "収益化まで伴走", "提案文、価格設計、案件獲得、社内導入まで、技術を成果に変える導線を整えます。"],
];

const courses: Array<{ phase: string; title: string; subtitle: string; body: string }> = [
  {
    phase: "PHASE 1",
    title: "基礎知識",
    subtitle: "Claude Codeの特徴",
    body: "Claude Codeの概要とできること、また類似ツール（Cursor / Codex）との違いや使い分け方が学べます。",
  },
  {
    phase: "PHASE 2",
    title: "環境構築・基本操作",
    subtitle: "Claude Codeの使用準備と基本操作",
    body: "Claude Codeを使うための環境をセットアップし、基本コマンド・プロンプト設計・Git連携の使い方が学べます。",
  },
  {
    phase: "PHASE 3",
    title: "開発・制作の実践",
    subtitle: "Web/スマホアプリ、LPの制作から公開まで",
    body: "実際にWebアプリやLPなどを開発・制作し、テストから公開するまでの一連の流れが学べます。",
  },
  {
    phase: "PHASE 4",
    title: "応用・収益化",
    subtitle: "サブエージェント・MCPと案件獲得導線",
    body: "サブエージェント、MCP連携、外部API連携、デプロイ自動化に加え、副業案件獲得や社内提案までを実践的に学びます。",
  },
];

type Plan = {
  months: string;
  target: string[];
  price: string;
  discountHighlight: string;
  finalPrice: string;
  features: Array<[string, string | boolean]>;
  recommended?: boolean;
};

const plans: Plan[] = [
  {
    months: "3ヶ月",
    target: ["離職中の方や学生", "短期集中で時間を確保できる方"],
    price: "348,000",
    discountHighlight: "最大80%",
    finalPrice: "69,600円〜",
    features: [
      ["カウンセリング回数", "12回"],
      ["コース数", "1コース"],
      ["案件獲得サポート", "受講終了後1年間"],
      ["副業デビュー支援", false],
      ["独自プロダクト開発", false],
    ],
  },
  {
    months: "6ヶ月",
    target: ["働きながら案件獲得や", "キャリアアップしたい方"],
    price: "648,000",
    discountHighlight: "最大52万円",
    finalPrice: "129,600円〜",
    features: [
      ["カウンセリング回数", "24回"],
      ["コース数", "学び放題"],
      ["案件獲得サポート", "受講終了後1年間"],
      ["副業デビュー支援", true],
      ["独自プロダクト開発", true],
    ],
    recommended: true,
  },
  {
    months: "9ヶ月",
    target: ["独立や自社プロダクト立ち上げ", "までを視野に入れたい方"],
    price: "948,000",
    discountHighlight: "最大76万円",
    finalPrice: "189,600円〜",
    features: [
      ["カウンセリング回数", "36回"],
      ["コース数", "学び放題"],
      ["案件獲得サポート", "受講終了後1年間"],
      ["副業デビュー支援", true],
      ["独自プロダクト開発", true],
    ],
  },
];

const flow = [
  ["STEP01", "カレンダーで日程調整", "まずは予約カレンダーから無料カウンセリングを予約"],
  ["STEP02", "カウンセリング実施", "AIの活用から最新情報までなんでも質問・相談可能！"],
  ["STEP03", "受講の申し込み", "無理な押し売りはいたしません。興味のある方のみ受講申し込み"],
];

const faqs = [
  ["プログラミング未経験でも受講できますか？", "完全未経験の方には姉妹コースのバイテックGENをおすすめしています。Geekは、何らかの形でコードに触れた経験のある方が対象です。"],
  ["ChatGPTやCursorは扱いますか？", "触れますが、軸はClaude Codeです。広く浅くではなく、最も実装力に直結する一本を深く掘る設計です。"],
  ["本業がフルタイムでも進められますか？", "はい。完全オンライン・オンデマンド中心で、週5〜10時間を目安に進められます。"],
  ["受講中に作ったプロダクトの権利は？", "すべて受講者ご自身に帰属します。副業案件のポートフォリオや自社事業に使えます。"],
];

function SectionTitle({
  label,
  title,
  subtitle,
}: {
  number?: string;
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className={styles.sectionTitle}>
      <span>_ {label}</span>
      <h2>{title}</h2>
      {subtitle && <p className={styles.sectionTitleSub}>{subtitle}</p>}
    </div>
  );
}

export default function Test3Page() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.logo} href="#top" aria-label="バイテックギーク">
          <Image
            src="/geek-assets/geek_logo2.svg"
            alt="バイテックギーク"
            width={1458}
            height={516}
            priority
          />
        </a>
        <nav className={styles.nav} aria-label="ページ内ナビゲーション">
          <a href="#worry">お悩み</a>
          <a href="#about">Geekとは</a>
          <a href="#course">コース</a>
          <a href="#price">料金</a>
        </nav>
        <a className={styles.headerCta} href="#contact">まずは無料で相談する</a>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroCopy}>
          <p>Claude Code Engineering School</p>
          <h1>
            外注を、
            <br />
            自分で殺す。
          </h1>
          <h2>Claude Codeで作れる側になるオンラインスクール。</h2>
          <a className={styles.heroCta} href="#contact">まずは無料で相談する</a>
        </div>
        <div className={styles.heroVisual}>
          <Image
            className={styles.heroImage}
            src="/geek-assets/hero-graphic.webp"
            alt=""
            width={1528}
            height={1040}
            priority
          />
        </div>
      </section>

      <section className={styles.whyAi}>
        <div className={styles.whyAiLayout}>
          <div className={styles.whyAiLead}>
            <span>WHY NOW</span>
            <h2>なぜ今、AI開発を学ぶべきか？</h2>
            <p>
              AIを使うだけの時代から、AIを組み込んだプロダクトを作る時代へ。業務理解に開発力を掛け合わせることで、自動化、内製化、案件獲得まで一気に広げられます。
            </p>
            <strong>業務理解 × AI開発 = 作れる人材への進化</strong>
          </div>
          <div className={styles.whyAiReasons}>
            {[
              ["01", "AIを組み込める人材が不足している", "チャットで答えを得るだけでなく、API連携や自動化まで実装できる人材はまだ限られています。"],
              ["02", "開発できると提案単価が上がる", "業務改善ツール、社内AIアプリ、顧客向けプロダクトまで作れることで、請けられる案件の幅が広がります。"],
              ["03", "成果物がそのまま実績になる", "学習中に作ったAIアプリをポートフォリオ化し、案件提案や社内導入の具体的な材料として活用できます。"],
            ].map(([number, title, body]) => (
              <article className={styles.whyAiReason} key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.worry} id="worry">
        <div className={styles.worryTitle}>
          <p className={styles.worryEyebrow}>ISSUE</p>
          <h2>
            AI開発の中で
            <span>お悩み・課題</span>
            はありませんか？
          </h2>
        </div>
        <div className={styles.worryGrid}>
          {worries.map(([lead, accent]) => (
            <article key={lead}>
              <div className={styles.worryIcon} aria-hidden="true">?</div>
              <p>
                {lead}
                <br />
                <strong>{accent}</strong>
              </p>
            </article>
          ))}
        </div>
        <div className={styles.worryAnswer}>
          <p>Claude Codeで作り切る実装カリキュラムが</p>
          <h3>お悩み・課題を解決します</h3>
        </div>
      </section>

      <section className={styles.results}>
        <SectionTitle number="02" label="Results" title="受講生実績" subtitle="実装力を身につけた受講生が、副業案件・キャリアアップ・自社プロダクトで成果を出しています。" />
        <div className={styles.resultScroller}>
          {results.map((result) => (
            <article className={styles.resultCard} key={result.name}>
              <div className={styles.resultImage}>
                <Image
                  src={result.image}
                  alt=""
                  width={result.width}
                  height={result.height}
                />
              </div>
              <div className={styles.resultShift}>
                <div className={styles.resultBefore}>
                  <span>Before</span>
                  <p>
                    {result.before.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </p>
                </div>
                <div className={styles.resultAfter}>
                  <span>After</span>
                  <p>
                    {result.after.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </p>
                </div>
              </div>
              <div className={styles.resultBody}>
                <span className={styles.resultTag}>{result.tag}</span>
                <h3>
                  {result.titleBefore}
                  <span>{result.titleAccent}</span>
                  {result.titleAfter}
                </h3>
                <p className={styles.resultProfile}>
                  <strong>{result.name}</strong>
                  <span>（{result.role}）</span>
                </p>
                <p className={styles.resultText}>{result.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.resultCta}>
        <Image
          className={styles.resultCtaBg}
          src="/geek-assets/seminar-01.webp"
          alt=""
          width={1464}
          height={840}
        />
        <div className={styles.resultCtaCopy}>
          <p>BYTECH GEEK</p>
          <h2>
            Claude Codeで
            <br />
            作れる側を目指せます
          </h2>
          <a className={styles.resultCtaButton} href="#contact">まずは無料相談してみる</a>
        </div>
        <div className={styles.resultCtaStats} aria-label="受講生の実績指標">
          {[
            ["受講生の", "96", "%", "満足度"],
            ["案件獲得まで", "1", "ヶ月", "最短目安"],
            ["単価アップ", "1.5", "倍", "実績あり"],
          ].map(([label, value, unit, caption]) => (
            <div className={styles.resultCtaStat} key={caption}>
              <span>{label}</span>
              <strong>
                {value}
                <em>{unit}</em>
              </strong>
              <p>{caption}</p>
            </div>
          ))}
        </div>
        <p className={styles.resultCtaNote}>※実績には個人差があります。成果を保証するものではありません。</p>
      </section>

      <section className={styles.about} id="about">
        <SectionTitle number="03" label="About" title="バイテックギークとは" />
        <div className={styles.aboutHero}>
          <div className={styles.aboutDesc}>
            <p className={styles.aboutLead}>
              <Image
                src="/geek-assets/geek_logo2.svg"
                alt="バイテックギーク"
                width={1458}
                height={516}
              />
              <em>とは？</em>
            </p>
            <h3 className={styles.aboutTitle}>
              Claude Codeで<span>作り切れる側</span>になる<br />
              実装特化型のオンラインAIスクール
            </h3>
            <p className={styles.aboutBodyText}>
              ノーコードでも、プロンプト芸でもありません。プロダクトを作る力と、収益化の入口までを一体で学びます。受講中に作った成果物が、そのまま副業案件のポートフォリオや社内提案として通用する状態を目指します。
            </p>
          </div>
          <div className={styles.aboutVisual} aria-hidden="true">
            <Image
              src="/geek-assets/lead-person.webp"
              alt=""
              width={1200}
              height={800}
            />
          </div>
        </div>

        <ul className={styles.aboutCards}>
          <li>
            <h4>未経験から実装力を一気に引き上げる</h4>
            <p>9割の方が、Claude Codeを起点に実務で使えるAI開発スキルを習得しています。</p>
            <div className={styles.aboutStat}>
              <span className={styles.aboutStatLabel}>受講生の<br />案件獲得率</span>
              <strong>95<em>%</em></strong>
            </div>
            <span className={styles.aboutStatNote}>※2025年1月〜8月 卒業生300名アンケート</span>
          </li>
          <li>
            <h4>実務直結のカリキュラム設計</h4>
            <p>知識ではなく再現性。手を止めない設計で、最後まで作り切る体験を提供します。</p>
            <div className={styles.aboutStat}>
              <span className={styles.aboutStatLabel}>受講生<br />満足度</span>
              <strong>96<em>%</em></strong>
            </div>
            <span className={styles.aboutStatNote}>※2025年1月〜8月 卒業生300名アンケート</span>
          </li>
          <li>
            <h4>収益化まで伴走する導線</h4>
            <p>提案、価格設計、案件獲得、社内導入までを一貫して支援。技術を成果に変えます。</p>
            <div className={styles.aboutStat}>
              <span className={styles.aboutStatLabel}>収録<br />カリキュラム</span>
              <strong>600<em>+</em></strong>
            </div>
            <span className={styles.aboutStatNote}>※2026年1月時点 / 自社調べ</span>
          </li>
        </ul>
      </section>

      <section className={styles.features}>
        <SectionTitle number="04" label="Features" title="バイテックGeek3つの特徴" subtitle="Claude Code完全特化・作って終わらせない・収益化まで伴走。他のスクールにはないGeekならではの3つの軸で、実務で使えるスキルを最短で身につけます。" />
        <div className={styles.featureGrid}>
          {features.map(([num, title, body], index) => (
            <article key={num}>
              <div className={styles.featureCopy}>
                <p className={styles.featureLabel}>
                  <span>{num}</span>
                  {title}
                </p>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
              <div className={styles.featureVisual} aria-hidden="true">
                <Image
                  src={index === 1 ? "/geek-assets/lead-person.webp" : "/geek-assets/case-main.webp"}
                  alt=""
                  width={index === 1 ? 1200 : 2880}
                  height={index === 1 ? 800 : 2556}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.course} id="course">
        <SectionTitle number="05" label="Course" title="コース一覧" subtitle="基礎・実装・応用・収益化の4フェーズで、Claude Codeを現場で使い倒すスキルを体系的に身につけられるカリキュラム構成です。" />

        <div className={styles.coursePanel}>
          <div className={styles.coursePanelHead}>
            <h3 className={styles.courseName}>Claude Code エンジニアコース</h3>
            <p className={styles.courseSub}>（履修期間：3〜9ヶ月／月額・定額制）</p>
            <p className={styles.courseDesc}>
              非エンジニアからでも、Claude Codeで本格的なWeb/スマホアプリ・LPを作り切れるようになる学習コース
            </p>
          </div>

          <div className={styles.courseCard}>
          <div className={styles.courseCover} aria-hidden="true">
            <div className={styles.courseCoverInner}>
              <p className={styles.courseCoverLogo}>
                <span>CLAUDE</span>
                <span>CODE</span>
              </p>
              <p className={styles.courseCoverTag}>エンジニアコース</p>
              <div className={styles.courseCoverTerminal}>
                <span className={styles.courseCoverTermLine}>$ claude code v2.1.87 ──────</span>
                <span className={styles.courseCoverTermLine}>↑ Opus 4.7 (1M context)</span>
                <span className={styles.courseCoverTermLine}>· 4フェーズで完走</span>
                <span className={styles.courseCoverPrompt}>{">"} ▍</span>
              </div>
            </div>
          </div>

          <div className={styles.coursePhases}>
            {courses.map((c, i) => (
              <details
                key={c.phase}
                className={styles.coursePhase}
                data-phase={i + 1}
              >
                <summary className={styles.coursePhaseHeader}>
                  <span className={styles.coursePhaseBadge}>{c.phase}</span>
                  <span className={styles.coursePhaseTitle}>{c.title}</span>
                  <span className={styles.coursePhaseToggle} aria-hidden="true">+</span>
                </summary>
                <div className={styles.coursePhaseBody}>
                  <p className={styles.coursePhaseSubtitle}>{c.subtitle}</p>
                  <p className={styles.coursePhaseText}>{c.body}</p>
                </div>
              </details>
            ))}
          </div>
          </div>
        </div>

        <div className={styles.courseCtas}>
          <a href="#contact" className={`${styles.courseCta} ${styles.courseCtaAccent}`}>
            <span>まずは無料で相談する</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className={styles.price} id="price">
        <SectionTitle number="06" label="Price" title="料金プラン" subtitle="学習スタイルとゴールに合わせて、3ヶ月／6ヶ月／9ヶ月の3プランからお選びいただけます。給付金適用で最大80%キャッシュバックも可能です。" />
        <div className={styles.planGrid}>
          {plans.map((plan) => (
            <article
              key={plan.months}
              className={`${styles.planCard} ${plan.recommended ? styles.planCardRecommended : ""}`}
            >
              {plan.recommended && (
                <span className={styles.planBadge} aria-label="おすすめ">オススメ</span>
              )}

              <h3 className={styles.planTitle}>
                {plan.months}<em>プラン</em>
              </h3>

              <div className={styles.planSection}>
                <p className={styles.planLabel}>対象</p>
                <p className={styles.planTarget}>
                  {plan.target.map((line, i) => (
                    <span key={i}>{line}</span>
                  ))}
                </p>
              </div>

              <div className={styles.planDivider} aria-hidden="true" />

              <div className={styles.planSection}>
                <p className={styles.planLabel}>
                  料金（一括）<sup>※1</sup>
                </p>
                <p className={styles.planPrice}>
                  {plan.price}<em>円</em>
                </p>
              </div>

              <div className={styles.planDiscount}>
                <span className={styles.planDiscountIcon} aria-hidden="true">¥</span>
                <span>
                  給付金適用で<strong>{plan.discountHighlight}</strong>キャッシュバック
                </span>
              </div>

              <div className={styles.planArrow} aria-hidden="true">▼</div>

              <p className={styles.planFinalPrice}>{plan.finalPrice}</p>

              <div className={styles.planDivider} aria-hidden="true" />

              <ul className={styles.planFeatures}>
                {plan.features.map(([label, value]) => (
                  <li key={label}>
                    <span>{label}</span>
                    <span>
                      {typeof value === "boolean" ? (
                        value ? (
                          <span
                            className={`${styles.planMark} ${styles.planMarkCheck}`}
                            aria-label="あり"
                          >
                            ✓
                          </span>
                        ) : (
                          <span
                            className={`${styles.planMark} ${styles.planMarkCross}`}
                            aria-label="なし"
                          >
                            ×
                          </span>
                        )
                      ) : (
                        value
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className={styles.planNote}>
          ※1 一括払いの場合の総額です。分割払いも対応可能です。<br />
          ※2 学び放題プランは、Claude Code エンジニアコース以外の追加カリキュラムを含みます。
        </p>
      </section>

      <section className={styles.flow}>
        <SectionTitle number="07" label="Flow" title="受講までの流れ" subtitle="無料カウンセリングのご予約から受講開始まで、最短即日で進められます。" />
        <ol>
          {flow.map(([step, title, body]) => (
            <li key={step} data-step={step}>
              <span>{step}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
        <div className={styles.flowArrow}>最短即日で受講開始可能！</div>
      </section>

      <section className={styles.faq}>
        <SectionTitle number="08" label="FAQ" title="よくある質問" subtitle="受講条件・カリキュラム内容・サポート体制まで、ご検討中の方からよくいただく質問にお答えします。" />
        <div>
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className={styles.footer} id="contact">
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <Image
              src="/geek-assets/geek_logo_w2.svg"
              alt="バイテックギーク"
              width={1458}
              height={516}
            />
          </div>
          <div className={styles.footerColumns}>
            <div>
              <h3>サービス概要</h3>
              <ul>
                <li><a href="#worry">お悩み</a></li>
                <li><a href="#about">バイテックギークとは</a></li>
                <li><a href="#course">コース</a></li>
                <li><a href="#price">料金プラン</a></li>
              </ul>
            </div>
            <div>
              <h3>サポート</h3>
              <ul>
                <li><a href="#top">会員規約</a></li>
                <li><a href="#top">返金ポリシー</a></li>
                <li><a href="#top">案件獲得保証プラン利用規約</a></li>
                <li><a href="#top">特定商取引法に関する表示</a></li>
                <li><a href="#top">システム要件</a></li>
              </ul>
            </div>
            <div>
              <h3>会社情報</h3>
              <ul>
                <li><a href="#top">会社概要</a></li>
                <li><a href="#top">プライバシーポリシー</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.footerActions}>
            <a href="mailto:info@example.com">まずは無料で相談する</a>
          </div>
          <div className={styles.footerBottom}>
            <p>© 2026 株式会社AI棒</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
