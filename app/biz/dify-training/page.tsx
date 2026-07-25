import { CourseLp, type CourseData } from "../_course/CourseLp";
import { COURSE_FAQS } from "../_course/courseFaqs";
import { buildCourseMetadata } from "../_course/courseMetadata";

export const metadata = buildCourseMetadata({
  title: "法人向け実践型Dify研修｜バイテック法人AI研修",
  description:
    "DifyでAIアプリ・業務自動化・RAGを内製化する法人向け研修。助成金活用にも対応。",
  socialDescription:
    "DifyでAIアプリ・業務自動化・RAGを内製化する法人向け研修。助成金活用にも対応。",
  path: "/dify-training",
});

const course: CourseData = {
  slug: "dify-training",
  courseName: "Dify研修",
  hero: {
    background:
      "radial-gradient(120% 90% at 88% 108%, rgba(150, 200, 255, .5) 0%, rgba(150, 200, 255, 0) 55%), linear-gradient(118deg, #1f2a70 0%, #3b52c8 38%, #4a86e8 62%, #2ab6c9 100%)",
    eyebrow: "AIアプリ・業務自動化を内製したい組織・チームにおすすめ。",
    nowrapEyebrow: true,
    title: "Dify研修",
    tag: "オンライン ｜ 助成金対応",
    toolLabel: "研修内使用ツール",
    toolLogo: "/biz/assets/img/index/plan/logo/dify.webp",
    toolLogoW: 160,
    toolLogoH: 160,
    toolAlt: "Dify",
    visual: "/biz/assets/img/index/plan/graphic/dify.webp",
    visualW: 2064,
    visualH: 1283,
    visualAlt: "Difyの活用イメージ（PC画面）",
  },
  docHref: "/doc-a",
  about: {
    title: "Dify研修とは？",
    subLead: (
      <>
        チャットボット制作だけじゃなく、<br />
        <span className="ct-about__mark">現場で業務改善を形にする力</span>を身につける
      </>
    ),
    lead: "Difyを使ってAIアプリ・業務自動化・RAGを内製化。エンジニアに依頼せず、現場が自分たちの手で業務改善を進められる状態を目指す法人向け研修です。",
    cards: [
      {
        no: "01",
        h: "Difyの基礎から\nAIアプリをつくれる",
        thumb: "/biz/assets/img/course/about/dify-01.webp",
        d: "Difyの画面操作とアプリの種類を理解し、チャットボットや文章生成アプリを作成。開発経験がない方でも、業務の課題を動くAIアプリへ変えられます。",
      },
      {
        no: "02",
        h: "RAGとワークフローで\n社内業務を自動化",
        thumb: "/biz/assets/img/course/about/dify-02.webp",
        d: "社内資料を根拠に回答するRAGと、条件分岐や外部連携を含むワークフローを習得。問い合わせ、議事録、書類処理などの流れをDify上で自動化できます。",
      },
      {
        no: "03",
        h: "公開・精度改善まで\n現場で運用できる",
        thumb: "/biz/assets/img/course/about/dify-03.webp",
        d: "回答精度の調整、Web公開、API連携、保守の考え方まで学習。試作品を作るだけで終わらず、社内で使い続けられるAIアプリへ育てる力が身につきます。",
      },
    ],
  },
  spec: [
    { ja: "試聴時間", value: <>約<b>10</b>時間</> },
    { ja: "レッスン数", value: <>全<b>85</b>レッスン</> },
    { ja: "受講形式", value: <>オンライン</> },
    { ja: "使用ツール", value: <>Dify</> },
  ],
  recommend: {
    sub: "AIアプリの開発から改善まで、現場で継続できる内製体制を実現",
    nowrapSub: true,
    cards: [
      {
        h: "AIアプリをノーコードで立ち上げたい組織",
        d: "専門的な開発経験がなくても、チャットボットや業務アプリを試作したい組織に。Difyの基本から公開までを順を追って学べます。",
      },
      {
        h: "社内資料を使った回答AIをつくりたいチーム",
        d: "マニュアル、FAQ、商品資料などを読み込ませ、根拠のある回答を返す仕組みをつくりたいチームに。RAGとナレッジ設計を実践します。",
      },
      {
        h: "手作業をワークフローで自動化したい部門",
        d: "情報収集、文章生成、確認、通知など複数の処理をつなぎ、繰り返し業務を減らしたい部門に。業務を分解して自動化する力を養います。",
      },
      {
        h: "試作したDifyアプリを実務運用へ進めたい組織",
        d: "動くものは作れたものの、精度・権限・保守に不安がある組織に。改善方法と運用の考え方を学び、社内で使い続けられる状態へ整えます。",
      },
    ],
  },
  curriculum: {
    sub: (
      <>
        Difyを実務で成果につなげるための<br />
        <em>『3つのステップ』</em>
      </>
    ),
    steps: [
      {
        no: "STEP01",
        label: "Dify基礎",
        cards: [
          {
            no: "01",
            cat: "Dify基礎",
            thumb: "/biz/assets/img/course/curriculum/dify/ui-01.webp",
            h: "Difyの基本画面と主要機能",
            tags: ["#Dify基礎", "#画面構成", "#DSL"],
            d: "アカウント登録からワークスペース作成、探索・スタジオ・ナレッジ・ツール・モデル・DSLまで、Difyを使い始めるための基本を順番に学びます。",
          },
          {
            no: "02",
            cat: "フロー構築",
            thumb: "/biz/assets/img/course/curriculum/dify/ui-04.webp",
            h: "ワークフロー・チャットフローの構築",
            tags: ["#ワークフロー", "#チャットフロー", "#各種ブロック"],
            d: "開始・LLM・条件分岐・知識検索・コード・HTTPリクエストなどの各ブロックを理解し、処理をつないで業務フローを構築する力を身につけます。",
          },
        ],
      },
      {
        no: "STEP02",
        label: "知識・精度向上",
        cards: [
          {
            no: "03",
            cat: "ナレッジ・ツール",
            thumb: "/biz/assets/img/course/curriculum/dify/ui-02.webp",
            h: "ナレッジ作成とツール活用",
            tags: ["#ナレッジ", "#Web連携", "#カスタムツール"],
            d: "テキスト・Notion・Webサイトからナレッジを作成し、ビルトインツールやカスタムツールをアプリへ連携。自社情報と外部機能を活かす方法を学びます。",
          },
          {
            no: "04",
            cat: "精度向上",
            thumb: "/biz/assets/img/course/curriculum/dify/ui-05.webp",
            h: "ナレッジ検索とモデルの精度改善",
            tags: ["#検索設定", "#Rerank", "#モデル調整"],
            d: "チャンク・検索方式・Rerank・トップK・スコア閾値を調整し、回答精度を改善。生成モデルの各種パラメータも実画面で学びます。",
          },
        ],
      },
      {
        no: "STEP03",
        label: "実践課題",
        cards: [
          {
            no: "05",
            cat: "初級・中級課題",
            thumb: "/biz/assets/img/course/curriculum/dify/ui-03.webp",
            h: "FAQボット・関数・MCP連携の実装",
            tags: ["#FAQボット", "#カスタム関数", "#MCP"],
            d: "FAQチャットボット、スプレッドシートとGASを使ったカスタム関数、MCPサーバーによる外部生成AIとの連携を、手を動かしながら実装します。",
          },
          {
            no: "06",
            cat: "上級課題",
            thumb: "/biz/assets/img/course/curriculum/dify/ui-06.webp",
            h: "OCR自動登録とマルチエージェント",
            tags: ["#LINE連携", "#OCR", "#マルチエージェント"],
            d: "LINE・Make・DifyをつないだレシートOCR登録と、複数の役割を持つAIが連携して記事を生成する仕組みを構築。複雑な業務の自動化へ進みます。",
          },
        ],
      },
    ],
  },
  lessons: {
    learnHours: "10",
    freeHours: "27",
    chapterCount: 14,
    lessonCount: 85,
    items: [
      {
        no: 1,
        title: "イントロダクション",
        ch: 1,
        time: "約8分",
        body: ["ユニット概要"],
      },
      {
        no: 2,
        title: "Dify基礎知識",
        ch: 9,
        time: "約48分",
        body: [
          "Difyとは",
          "アカウント登録とワークスペースの作成",
          "画面構成と主要メニューの理解",
          "「探索」機能を理解する",
          "「スタジオ」機能を理解する",
          "「ナレッジ」機能を理解する",
          "「ツール」機能を理解する",
          "「モデル」について理解する",
          "「DSLファイル」について理解する",
        ],
      },
      {
        no: 3,
        title: "ワークフロー",
        ch: 14,
        time: "約2時間5分",
        body: [
          "ワークフローとは",
          "基礎ブロック（開始／LLM／終了）",
          "エージェントブロック",
          "条件分岐ブロック（IF-ELSE）",
          "質問分類器ブロック",
          "知識検索ブロック",
          "パラメーター抽出ブロック",
          "コードブロック",
          "イテレーションブロック",
          "テンプレートブロック",
          "変数集約器ブロック",
          "HTTPリクエストブロック",
          "変数について",
          "実行ログとデバッグ",
        ],
      },
      {
        no: 4,
        title: "チャットフロー",
        ch: 2,
        time: "約17分",
        body: ["チャットフローとは", "会話変数とメモリの管理"],
      },
      {
        no: 5,
        title: "ナレッジを作成する",
        ch: 5,
        time: "約35分",
        body: [
          "ナレッジ作成の基本",
          "テキストファイルからナレッジを作成する",
          "Notionからナレッジを作成する",
          "Webサイトからナレッジを作成する",
          "ナレッジの管理と更新",
        ],
      },
      {
        no: 6,
        title: "ツールを活用する",
        ch: 4,
        time: "約21分",
        body: [
          "ツール機能の基本",
          "ビルトインツールを使う",
          "アプリにツールを連携する",
          "カスタムツールを作成する",
        ],
      },
      {
        no: 7,
        title: "応用編｜ナレッジの精度を向上させる",
        ch: 17,
        time: "約2時間",
        body: [
          "ナレッジの調整について",
          "「チャンク設定」を理解する",
          "「インデックスモード」を理解する",
          "「埋め込みモデル」を理解する",
          "検索設定の違いと特徴を理解する",
          "「Rerankモデル」の調整方法",
          "「トップK」の調整方法",
          "「スコア閾値」の調整方法",
          "「親子検索機能」を理解する",
          "チャンク（知識データ）の編集方法",
          "ナレッジパイプラインを作成する",
          "ナレッジパイプライン機能：一般文書処理",
          "ナレッジパイプライン機能：長文書処理",
          "ナレッジパイプライン機能：Q&A表データ抽出",
          "ナレッジパイプライン機能：文書形式変換",
          "ナレッジパイプライン機能：インテリジェントQ&A",
          "ナレッジ検索をテストする",
        ],
      },
      {
        no: 8,
        title: "応用編｜モデルの精度を向上させる",
        ch: 8,
        time: "約56分",
        body: [
          "モデルの調整について",
          "Temperature調整方法",
          "Top Pの調整方法",
          "Presence Penalty調整方法",
          "Frequency Penalty調整方法",
          "Max Tokens調整方法",
          "Stop Sequence調整方法",
          "response_format（応答形式）の調整方法",
        ],
      },
      {
        no: 9,
        title: "実践課題（初級）FAQチャットボットを作ってみよう",
        ch: 4,
        time: "約30分",
        body: [
          "課題概要：FAQチャットボットを作ってみよう",
          "データ準備：FAQデータを登録する",
          "チャットボットを構築しよう",
          "公開とまとめ",
        ],
      },
      {
        no: 10,
        title: "実践課題（初級）カスタム関数を作ってみよう",
        ch: 3,
        time: "約20分",
        body: [
          "課題概要：カスタム関数を作ってみよう",
          "スプレッドシートの設計とワークフローの構築",
          "GASの実装と動作確認",
        ],
      },
      {
        no: 11,
        title: "実践課題（中級）MCPサーバーでDifyと外部の生成AIツールを連携しよう",
        ch: 3,
        time: "約23分",
        body: [
          "課題概要：MCPでDifyと外部AIを連携させよう",
          "ChatGPTとDifyをMCP連携する",
          "ClaudeとDifyをMCP連携する",
        ],
      },
      {
        no: 12,
        title: "実践課題（上級）LINE × Make × DifyでレシートOCR自動登録システムを構築しよう",
        ch: 5,
        time: "約1時間6分",
        body: [
          "課題概要：LINEとDifyとMakeを連携させよう",
          "準備①：LINEの下準備",
          "準備②：Googleシートの下準備",
          "Make連携：LINEとDifyをつなぐシナリオ構築",
          "Difyワークフロー構築：OCR整形とデータ登録",
        ],
      },
      {
        no: 13,
        title: "実践課題（上級）マルチエージェントでnote記事を自動生成しよう",
        ch: 9,
        time: "約1時間14分",
        body: [
          "課題概要：マルチエージェントで記事を作ろう",
          "準備：必要なAPI設定と環境構築",
          "エージェント1：リサーチャーを作成する",
          "エージェント2：ライターを作成する（前半）",
          "エージェント2：ライターを作成する（後半）",
          "エージェント3：エディターを作成する",
          "エージェント4：デザイナーを作成する",
          "統合：note記事作成エージェントを完成させる",
          "実践テスト：記事生成からnote投稿まで",
        ],
      },
      {
        no: 14,
        title: "Difyマスター講座まとめ",
        ch: 1,
        time: "約6分",
        body: ["Difyマスター講座まとめ"],
      },
    ],
  },
  plans: {
    lead: "Dify研修は3つの研修プランでの受講が可能です。",
    primary: [
      { name: "AI効率化研修", amount: "200,000", unit: "円〜／名" },
      { name: "AI自動化研修", amount: "300,000", unit: "円〜／名" },
    ],
    single: { name: "eラーニング", amount: "100,000", unit: "円〜／名" },
  },
  faqs: COURSE_FAQS["dify-training"],
};

export default function DifyTrainingPage() {
  return <CourseLp data={course} />;
}
