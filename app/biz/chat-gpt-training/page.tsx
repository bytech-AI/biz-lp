import { CourseLp, type CourseData } from "../_course/CourseLp";
import { COURSE_FAQS } from "../_course/courseFaqs";
import { buildCourseMetadata } from "../_course/courseMetadata";

export const metadata = buildCourseMetadata({
  title: "法人向け実践型ChatGPT研修｜バイテックBiz",
  description:
    "業務で“使える”ChatGPT活用を、現場の成果につなげる法人向け研修。助成金活用にも対応。カリキュラム・受講形式・料金をご案内します。",
  socialDescription:
    "業務で“使える”ChatGPT活用を、現場の成果につなげる法人向け研修。助成金活用にも対応。",
  path: "/chat-gpt-training",
});

const course: CourseData = {
  slug: "chat-gpt-training",
  courseName: "ChatGPT研修",
  hero: {
    background:
      "radial-gradient(120% 90% at 88% 108%, rgba(120, 235, 200, .5) 0%, rgba(120, 235, 200, 0) 55%), linear-gradient(118deg, #0a5f4a 0%, #10a37f 38%, #12b886 58%, #3fd0a6 100%)",
    eyebrow: "定番の生成AIから全社活用を始めたい組織・チームにおすすめ。",
    title: "ChatGPT研修",
    tag: "オンライン ｜ 助成金対応",
    toolLabel: "研修内使用ツール",
    toolLogo: "/biz/assets/img/index/plan/logo/cg_logo.webp",
    toolLogoW: 490,
    toolLogoH: 160,
    toolAlt: "ChatGPT",
    visual: "/biz/assets/img/index/plan/graphic/chatgpt.webp",
    visualW: 2087,
    visualH: 1132,
    visualAlt: "ChatGPTの活用イメージ（PC画面）",
    nowrapEyebrow: true,
  },
  docHref: "/doc-a",
  about: {
    title: "ChatGPT研修とは？",
    subLead: (
      <>
        ChatGPTとの対話だけで終わらせず、<br />
        <span className="ct-about__mark">考える・つくる・整える力</span>を引き上げる
      </>
    ),
    lead: "ChatGPTを日々の業務に取り入れ、文章作成・情報整理・企画・資料づくりまでのプロセスを効率化。初めての方でも、現場ですぐに使えるAI活用スキルを体系的に習得できる法人向け研修です。",
    cards: [
      {
        no: "01",
        h: "ChatGPTの基礎から学び\n仕事で使える力が身につく",
        thumb: "/biz/assets/img/course/about/chat-gpt-01.webp",
        d: "基本操作や指示の出し方から、文章作成・情報収集・資料づくりまで順を追って学習。初めて使う方でも、日々の仕事で迷わず活用できる状態を目指します。",
      },
      {
        no: "02",
        h: "実際の業務を題材に\n自社で使える形に落とし込む",
        thumb: "/biz/assets/img/course/about/chat-gpt-02.webp",
        d: "自社でよく行う業務や資料を使い、ChatGPTでどこまで効率化できるかを実践。学んだ内容をそのまま現場に持ち帰り、すぐに活用できます。",
      },
      {
        no: "03",
        h: "専任担当が支え\n社内での活用を定着させる",
        thumb: "/biz/assets/img/course/about/chat-gpt-03.webp",
        d: "疑問やつまずきを相談しながら研修を進め、社員ごとの活用差も解消。研修後も使い方の見直しを支援し、一部の人だけでなく組織全体への定着につなげます。",
      },
    ],
  },
  spec: [
    { ja: "試聴時間", value: <>約<b>6</b>時間</> },
    { ja: "レッスン数", value: <>全<b>45</b>レッスン</> },
    { ja: "受講形式", value: <>オンライン</> },
    { ja: "使用ツール", value: <>ChatGPT・Zapier</> },
  ],
  recommend: {
    sub: "定番の生成AIを共通言語にし、部門を越えて活用が広がる状態を実現",
    nowrapSub: true,
    cards: [
      {
        h: "導入する生成AIをまだ決めていない組織",
        d: "まずは利用者が多く用途も広いChatGPTから始めたい組織に。基礎・安全な使い方・実務活用をまとめて学び、全社導入の土台をつくれます。",
      },
      {
        h: "社員ごとの活用差をなくしたい人事・DX推進チーム",
        d: "質問の仕方や情報の扱い方を共通化し、初心者を含む社員全体の水準をそろえたいチームに。部署を問わず使える基本を身につけます。",
      },
      {
        h: "幅広い事務・企画業務を効率化したい部門",
        d: "メール、要約、調査、企画、資料づくりなど、職種を問わず発生する業務を効率化したい部門に。日々の仕事へ持ち帰れる使い方を学びます。",
      },
      {
        h: "ChatGPTを導入済みだが個人利用に留まる組織",
        d: "検索や文章作成だけで終わらせず、GPTsやZapier連携まで活用を広げたい組織に。個人の工夫を、再現できる業務の仕組みへ変えていきます。",
      },
    ],
  },
  curriculum: {
    sub: (
      <>
        ChatGPTを実務で成果につなげるための<br />
        <em>『3つのステップ』</em>
      </>
    ),
    steps: [
      {
        no: "STEP01",
        label: "AIの基礎理解",
        cards: [
          {
            no: "01",
            cat: "生成AIの基礎",
            thumb: "/biz/assets/img/course/curriculum/chatgpt/ui-01.webp",
            h: "ChatGPT・生成AIの仕組みと基本操作",
            tags: ["#生成AIとは", "#基本操作", "#活用の全体像"],
            d: "生成AIの仕組みと得意・不得意を理解し、ChatGPTの基本操作を習得します。業務のどこに活かせるかという全体像を掴み、現場でAIを使いこなすための土台を固めます。",
          },
          {
            no: "02",
            cat: "無料版活用",
            thumb: "/biz/assets/img/course/curriculum/chatgpt/ui-02.webp",
            h: "無料版で押さえる最新機能と初期設定",
            tags: ["#無料版", "#最新機能", "#初期設定"],
            d: "無料版でも実務に十分使える最新機能と初期設定を習得。登録・基本操作から最新アップデートの全体像までを押さえ、コストをかけずに業務効率化を始められる状態をつくります。",
          },
          {
            no: "03",
            cat: "環境・音声活用",
            thumb: "/biz/assets/img/course/curriculum/chatgpt/ui-03.webp",
            h: "設定・アプリ・音声による業務活用",
            tags: ["#推論機能", "#ディープリサーチ", "#画像生成"],
            d: "設定・アプリ・音声入力を活かした日常業務での活用法を習得。推論機能やディープリサーチ、画像生成を実務に取り入れ、情報収集や資料づくりの質とスピードを高めます。",
          },
        ],
      },
      {
        no: "STEP02",
        label: "実務での活用",
        cards: [
          {
            no: "04",
            cat: "有料版活用",
            thumb: "/biz/assets/img/course/curriculum/chatgpt/ui-04.webp",
            h: "有料版で広げるChatGPT活用の幅",
            tags: ["#モデル選択", "#履歴管理", "#音声入力"],
            d: "有料版のモデル選択やデータ管理、音声入力などを活用し、業務での使いどころを拡大。無料版との違いを理解し、投資対効果の高い使い方を身につけます。",
          },
          {
            no: "05",
            cat: "GPTs・高度機能",
            thumb: "/biz/assets/img/course/curriculum/chatgpt/ui-05.webp",
            h: "GPTs構築と高度機能の実践活用",
            tags: ["#GPTs", "#動画生成", "#AIエージェント"],
            d: "GPTsによる自社専用アシスタントの構築や、動画生成・AIエージェント連携など高度機能を実践。定型業務の自動化やチームでの再現性ある活用につなげます。",
          },
          {
            no: "06",
            cat: "プロンプト・連携",
            thumb: "/biz/assets/img/course/curriculum/chatgpt/ui-06.webp",
            h: "プロンプト設計とツール連携の最適化",
            tags: ["#プロンプト設計", "#ツール連携", "#業務自動化"],
            d: "狙った出力を安定して得るプロンプト設計と、他AIツールとの連携による業務自動化を習得。属人化させず、チーム全体で成果を再現できる仕組みをつくります。",
          },
        ],
      },
      {
        no: "STEP03",
        label: "応用と定着",
        cards: [
          {
            no: "07",
            cat: "プロンプト応用",
            thumb: "/biz/assets/img/course/curriculum/chatgpt/ui-07.webp",
            h: "成果を高めるプロンプト活用術",
            tags: ["#精度向上", "#思考支援", "#発想拡張"],
            d: "回答精度を高める指示や思考を引き出す対話設計など、成果に直結するプロンプト技術を体系的に習得。誰でも高品質な出力を引き出せる状態を目指します。",
          },
          {
            no: "08",
            cat: "業務別実践事例",
            thumb: "/biz/assets/img/course/curriculum/chatgpt/ui-08.webp",
            h: "業務別のChatGPT実践活用事例",
            tags: ["#資料作成", "#データ分析", "#業務自動化"],
            d: "企画・資料作成・データ分析・契約書作成・業務自動化まで、部門を横断した実践事例を習得。自部門の業務にすぐ落とし込める具体的な活用イメージを掴みます。",
          },
        ],
      },
    ],
  },
  lessons: {
    learnHours: "6",
    freeHours: "18",
    chapterCount: 8,
    lessonCount: 45,
    items: [
      {
        no: 1,
        title: "生成AIの基礎とChatGPTの進化",
        ch: 1,
        time: "5分",
        body: ["コース全体像とユニット概要"],
      },
      {
        no: 2,
        title: "無料版で使いこなす最新機能の活用",
        ch: 2,
        time: "12分",
        body: [
          "無料版の登録と基本操作",
          "最新アップデートとChatGPTの全体像",
        ],
      },
      {
        no: 3,
        title: "設定・アプリ・音声を活かした業務活用",
        ch: 4,
        time: "29分",
        body: [
          "アプリ・環境の初期設定と基本操作",
          "推論機能による思考支援の実践",
          "ディープリサーチによる情報収集の高度化",
          "ネイティブ画像生成の実務活用",
        ],
      },
      {
        no: 4,
        title: "有料版で広げるChatGPT活用の幅",
        ch: 2,
        time: "21分",
        body: [
          "データ学習とチャット履歴の管理",
          "音声入力・アドバンスドボイスの活用",
        ],
      },
      {
        no: 5,
        title: "実践応用術①：高度機能とGPTs構築",
        ch: 4,
        time: "35分",
        body: [
          "モデル選択と高度な推論・画像処理",
          "GPTsによる自社専用アシスタント構築",
          "Soraを用いた動画・画像生成",
          "AIエージェント・連携機能の活用",
        ],
      },
      {
        no: 6,
        title: "実践応用術②：プロンプトとツール連携",
        ch: 2,
        time: "13分",
        body: [
          "プロンプトエンジニアリングの要点",
          "他AIツール連携による業務自動化",
        ],
      },
      {
        no: 7,
        title: "成果を高めるプロンプト活用術",
        ch: 10,
        time: "約1.1時間",
        body: [
          "回答精度を高める指示の工夫",
          "思考プロセスを引き出す対話設計",
          "体系的に論点を網羅する指示法",
          "出力の自己評価を促す手法",
          "的確な情報を引き出す質問戦略",
          "メタ認知を活かした課題の深掘り",
          "ラテラルシンキングによる発想拡張",
          "仮説と反証で精度を高める思考法",
        ],
      },
      {
        no: 8,
        title: "業務別ChatGPT実践活用事例",
        ch: 20,
        time: "約2.2時間",
        body: [
          "企画・ブレインストーミングの加速",
          "Web・SNS戦略と分析への活用",
          "論文・PDF読解と資料化",
          "ビジネスデータ分析とインサイト抽出",
          "カスタムGPTsによる業務標準化",
          "API連携（Zapier）による業務フロー構築",
          "契約書ドラフトと採用面接の高度化",
          "外部ツール連携（MCP）の設定と活用",
        ],
      },
    ],
  },
  plans: {
    lead: "ChatGPT研修は3つの研修プランでの受講が可能です。",
    primary: [
      { name: "AI効率化研修", amount: "200,000", unit: "円〜／名" },
      { name: "AI自動化研修", amount: "300,000", unit: "円〜／名" },
    ],
    single: { name: "eラーニング", amount: "100,000", unit: "円〜／名" },
  },
  subsidy: {
    title: "助成金活用で、実質負担はここまで下がる",
    image: "/biz/assets/img/course/subsidy.svg",
    imageAlt:
      "助成金活用で研修費用は1人当たり最大75%OFF（AI効率化研修 200,000円→実質50,000円／AI自動化研修 300,000円→実質150,000円）",
  },
  faqs: COURSE_FAQS["chat-gpt-training"],
};

export default function ChatGptTrainingPage() {
  return <CourseLp data={course} />;
}
