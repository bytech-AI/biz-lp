import type { Metadata } from "next";
import { CourseLp, type CourseData } from "../_course/CourseLp";
import { COURSE_FAQS } from "../_course/courseFaqs";

export const metadata: Metadata = {
  title: "Copilot Studio研修（法人向け）| バイテック法人AI研修",
  description:
    "Microsoft 365 Copilotの業務活用から、Copilot Studioによる社内AIエージェント構築までを一貫して学ぶ法人向け研修。助成金活用にも対応。",
  alternates: { canonical: "/copilot-studio-training" },
  openGraph: {
    title: "Copilot Studio研修（法人向け）| バイテック法人AI研修",
    description:
      "Copilotの業務活用とCopilot StudioによるAIエージェント構築を一貫して学ぶ法人向け研修。助成金活用にも対応。",
    url: "/copilot-studio-training",
  },
};

const course: CourseData = {
  slug: "copilot-studio-training",
  courseName: "Copilot Studio研修",
  hero: {
    background:
      "radial-gradient(120% 90% at 88% 108%, rgba(200, 160, 255, .5) 0%, rgba(200, 160, 255, 0) 55%), linear-gradient(118deg, #4a2472 0%, #7b3fb5 40%, #a24fd0 62%, #6a4ae0 100%)",
    eyebrow: "Copilot活用からAIエージェント内製まで進めたい組織・チームにおすすめ。",
    nowrapEyebrow: true,
    title: "Copilot Studio研修",
    wideTitle: true,
    tag: "オンライン ｜ 助成金対応",
    toolLabel: "研修内使用ツール",
    toolLogo: "/biz/assets/img/index/plan/logo/studio.svg",
    toolAlt: "Copilot Studio",
    visual: "/biz/assets/img/index/plan/graphic/copilotstudio.webp",
    visualAlt: "Copilot Studioの活用イメージ（PC画面）",
  },
  docHref: "/doc-a",
  about: {
    title: "Copilot Studio研修とは？",
    subLead: (
      <>
        Microsoft 365での業務活用から、<br />
        <span className="ct-about__mark">AIエージェントの構築・運用</span>まで身につける
      </>
    ),
    lead: "Microsoft 365 Copilotを使った会議・メール・文書・データ業務の効率化から、Copilot Studioによる社内向けAIエージェントの構築までを一貫して習得。日々の活用と業務自動化を分断せず、現場が自走して改善できる状態を目指す法人向け研修です。",
    cards: [
      {
        no: "01",
        h: "Microsoft 365の日常業務を\nまとめて効率化",
        thumb: "/biz/assets/img/course/about/copilot-studio-01.webp",
        d: "Teams、Outlook、Word、Excel、PowerPointでCopilotを活用。会議、メール、資料作成、データ分析など、毎日の業務を実際の操作に沿って効率化します。",
      },
      {
        no: "02",
        h: "Copilot Studioで\nAIエージェントを内製",
        thumb: "/biz/assets/img/course/about/copilot-studio-02.webp",
        d: "画面上で会話や処理を組み立て、社内問い合わせやFAQに対応するエージェントを作成。開発経験がなくても、業務課題を動く仕組みへ落とし込めます。",
      },
      {
        no: "03",
        h: "社内データ・業務フローと\n安全につなげて運用",
        thumb: "/biz/assets/img/course/about/copilot-studio-03.webp",
        d: "SharePointやTeams、Power Automateと連携し、社内情報を根拠に回答・実行する仕組みを構築。権限、公開、精度確認、改善まで含めて運用力を養います。",
      },
    ],
  },
  spec: [
    { ja: "試聴時間", value: <>約<b>9</b>時間</> },
    { ja: "レッスン数", value: <>全<b>70</b>レッスン</> },
    { ja: "受講形式", value: <>オンライン</> },
    { ja: "使用ツール", value: <>Copilot / CopilotStudio</> },
  ],
  recommend: {
    sub: "日常業務のAI活用から、社内エージェントの構築・運用まで一気通貫で実現",
    nowrapSub: true,
    cards: [
      {
        h: "社内問い合わせを自動化したい管理部門",
        d: "規程、手続き、ITサポートなどの質問へ、社内情報を根拠に回答するエージェントを構築。総務・人事・情報システムの対応負荷を減らします。",
      },
      {
        h: "Microsoft環境で業務自動化を進めたい組織",
        d: "TeamsやPower PlatformとつながるAIエージェントをつくりたい組織に。既存のMicrosoft環境を活かし、業務の受付から処理までをつなげます。",
      },
      {
        h: "エージェント開発を現場で内製したいDXチーム",
        d: "要件のたびに開発部門へ依頼せず、ノーコードで試作・改善できる体制をつくりたいチームに。公開と運用まで一連で学べます。",
      },
      {
        h: "AIエージェントの精度と統制に課題がある組織",
        d: "回答のばらつき、権限、公開範囲、保守方法に不安がある組織に。ナレッジ設計と制御を学び、安心して使い続けられる状態を整えます。",
      },
    ],
  },
  curriculum: {
    sub: (
      <>
        Copilot Studioを実務で成果につなげるための<br />
        <em>『3つのステップ』</em>
      </>
    ),
    steps: [
      {
        no: "STEP01",
        label: "Copilot活用",
        cards: [
          {
            no: "01",
            cat: "Copilotの基礎・横断検索",
            thumb: "/biz/assets/img/course/curriculum/copilot-studio/ui-02.webp",
            h: "Copilotの全体像と社内情報の活用",
            tags: ["#Copilot", "#職場モード", "#横断検索"],
            d: "Copilotの種類と特徴、安全な使い分けを理解します。メール・ファイル・チャットを横断して必要な情報を探し、Microsoft 365上の社内情報を日々の判断へ活かす基本を身につけます。",
          },
          {
            no: "02",
            cat: "メール・会議・文書",
            thumb: "/biz/assets/img/course/curriculum/copilot-studio/ui-03.webp",
            h: "Outlook・Teams・Wordでの業務効率化",
            tags: ["#Outlook", "#Teams", "#Word"],
            d: "メールの要約と返信、会議内容の整理、文書の下書き・推敲までを実際の操作画面で学習。毎日繰り返すコミュニケーション業務を、Copilotと進める型へ変えていきます。",
          },
        ],
      },
      {
        no: "STEP02",
        label: "資料・データ活用",
        cards: [
          {
            no: "03",
            cat: "Excel・データ分析",
            thumb: "/biz/assets/img/course/curriculum/copilot-studio/ui-04.webp",
            h: "Excelでの集計・分析・可視化",
            tags: ["#Excel", "#データ分析", "#グラフ作成"],
            d: "表の読み取り、数式提案、傾向分析、グラフ作成をCopilotと実行。データを渡して終わらせず、確認と修正を重ねながら、判断に使える形へ仕上げる手順を習得します。",
          },
          {
            no: "04",
            cat: "資料作成・レポート",
            thumb: "/biz/assets/img/course/curriculum/copilot-studio/ui-06.webp",
            h: "PowerPoint・Wordで伝わる資料を作成",
            tags: ["#PowerPoint", "#Word", "#資料作成"],
            d: "企画の骨子づくりから、Wordでのレポート整理、PowerPointでのスライド作成までを一連で実践。情報を集めるだけで終わらず、伝わる成果物へ仕上げる力を身につけます。",
          },
        ],
      },
      {
        no: "STEP03",
        label: "構築・連携・運用",
        cards: [
          {
            no: "05",
            cat: "Copilot Studio基礎",
            thumb: "/biz/assets/img/course/curriculum/copilot-studio/ui-01.webp",
            h: "最初のAIエージェントを構築",
            tags: ["#Copilot Studio", "#エージェント", "#画面操作"],
            d: "Copilot Studioの画面構成を理解し、目的と役割を設定して最初のエージェントを作成。チャット型とワークフロー型を使い分け、業務課題を動く仕組みへ落とし込みます。",
          },
          {
            no: "06",
            cat: "ナレッジ・業務連携",
            thumb: "/biz/assets/img/course/curriculum/copilot-studio/ui-06-flow.png",
            h: "SharePoint・Power Automateとの連携",
            tags: ["#SharePoint", "#Power Automate", "#ワークフロー"],
            d: "社内資料を回答の根拠として登録し、Power AutomateやSharePointの処理と接続。問い合わせへの回答から受付・確認・実行まで、業務がつながるエージェントを構築します。",
          },
          {
            no: "07",
            cat: "公開・統制・改善",
            thumb: "/biz/assets/img/course/curriculum/copilot-studio/ui-05.webp",
            h: "安全な公開と継続運用",
            tags: ["#Teams公開", "#権限管理", "#改善"],
            d: "Teamsへの公開、利用者と権限の設定、回答精度の確認、テストと改善を実践。試作で終わらせず、社内で安全に使い続けられる運用体制まで整えます。",
          },
        ],
      },
    ],
  },
  lessons: {
    learnHours: "9",
    freeHours: "15",
    chapterCount: 11,
    lessonCount: 70,
    items: [
      {
        no: 1,
        title: "Copilotの基礎と社内情報の活用",
        ch: 7,
        time: "約32分",
        body: [
          "Copilotとは？生成AIとしての基礎知識",
          "ブラウザ版・デスクトップ版、個人向け・法人向けの違い",
          "CopilotとCopilot Studioの役割と使い分け",
          "職場モードでメール・ファイル・チャットを横断検索",
        ],
      },
      {
        no: 2,
        title: "Microsoft 365アプリでの実務活用",
        ch: 12,
        time: "約1.4時間",
        body: [
          "Teamsでの会議要約とアクション抽出",
          "Outlookでのメール要約・返信文作成",
          "Wordでの文章作成・推敲・要約",
          "Excelでの集計・分析・可視化",
        ],
      },
      {
        no: 3,
        title: "Copilotを活用した資料作成",
        ch: 9,
        time: "約1.3時間",
        body: [
          "企画書のアイデア整理と骨子作成",
          "PowerPointスライドの作成と改善",
          "長文報告書から役員向けサマリーを作成",
          "リサーチ結果を伝わるレポートへまとめる",
        ],
      },
      {
        no: 4,
        title: "セキュリティとデータ保護",
        ch: 3,
        time: "約15分",
        body: [
          "法人利用におけるセキュリティ基盤",
          "データアクセスと保存場所の仕組み",
          "社内ルールと安全な利用方法",
        ],
      },
      {
        no: 5,
        title: "部門別活用と業務への定着",
        ch: 17,
        time: "約3時間",
        body: [
          "人事・営業・マーケティング・法務での活用",
          "プロンプト管理とチーム共有",
          "業務棚卸しから活用テーマを選定",
          "Copilot活用からエージェント構築へつなげる",
        ],
      },
      {
        no: 6,
        title: "イントロダクションと基本概念",
        ch: 4,
        time: "16分",
        body: [
          "ユニット概要",
          "Copilot Studioの2種類（Lite版とFull版）",
          "受動的チャットから能動的エージェントへ",
          "一問一答（チャット）と一連の動作（ワークフロー）",
        ],
      },
      {
        no: 7,
        title: "エージェント構築の第一歩",
        ch: 3,
        time: "14分",
        body: [
          "基本的な画面構成とナビゲーション",
          "エージェント作成入門：最初のボットを立ち上げる",
          "Copilot Studio Fullの鍵：ツールとフローの基礎",
        ],
      },
      {
        no: 8,
        title: "ナレッジ活用とセキュアな公開",
        ch: 4,
        time: "18分",
        body: [
          "社内データ特化型：SharePoint情報を活用したエージェント",
          "ナレッジ構築：ソース登録と優先順位管理",
          "システムプロンプトの基礎：AIに人格と制約を与える",
          "Microsoft Teamsへのデプロイ手順",
        ],
      },
      {
        no: 9,
        title: "信頼性と制御の高度化",
        ch: 4,
        time: "18分",
        body: [
          "ハルシネーション対策：ファクトチェック機構",
          "チャット型からワークフロー型への設計転換",
          "高度なシステムプロンプト設計：複雑な業務条件",
          "トピック設計で挙動をコントロール",
        ],
      },
      {
        no: 10,
        title: "外部連携とUXの極意",
        ch: 4,
        time: "22分",
        body: [
          "アダプティブカードによる視覚的UX",
          "SharePointリストの作成とデータ構造",
          "Power Automateを用いたフロー構築",
          "エンドツーエンドテスト・デバッグ",
        ],
      },
      {
        no: 11,
        title: "実践Tipsと総括",
        ch: 3,
        time: "10分",
        body: [
          "プロンプト内にトピックを埋め込む技法",
          "思考不要フローはPower Automateへ",
          "まとめ：自律型エージェントが変える働き方",
        ],
      },
    ],
  },
  plans: {
    lead: "Copilot Studio研修は3つの研修プランでの受講が可能です。",
    primary: [
      { name: "AI効率化研修", amount: "200,000", unit: "円〜／名" },
      { name: "AI自動化研修", amount: "300,000", unit: "円〜／名" },
    ],
    single: { name: "eラーニング", amount: "100,000", unit: "円〜／名" },
  },
  faqs: COURSE_FAQS["copilot-studio-training"],
};

export default function CopilotStudioTrainingPage() {
  return <CourseLp data={course} />;
}
