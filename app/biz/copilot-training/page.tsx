import { CourseLp, type CourseData } from "../_course/CourseLp";
import { COURSE_FAQS } from "../_course/courseFaqs";
import { buildCourseMetadata } from "../_course/courseMetadata";

export const metadata = buildCourseMetadata({
  title: "法人向け実践型Copilot研修｜バイテック法人AI研修",
  description:
    "Microsoft 365 Copilotで Word・Excel・Outlook・Teams の業務を効率化する法人向け研修。助成金活用にも対応。",
  socialDescription:
    "Microsoft 365 Copilotで日々の業務を効率化する法人向け研修。助成金活用にも対応。",
  path: "/copilot-training",
});

const course: CourseData = {
  slug: "copilot-training",
  courseName: "Copilot研修",
  hero: {
    background:
      "radial-gradient(120% 90% at 88% 108%, rgba(140, 220, 230, .5) 0%, rgba(140, 220, 230, 0) 55%), linear-gradient(118deg, #0b5c6b 0%, #1a95a8 36%, #3f7fd6 62%, #6a5ae0 100%)",
    eyebrow: "Microsoft 365を利用する組織・チームにおすすめ。",
    title: "Copilot研修",
    tag: "オンライン ｜ 助成金対応",
    toolLabel: "研修内使用ツール",
    toolLogo: "/biz/assets/img/index/plan/logo/copilot.webp",
    toolLogoW: 160,
    toolLogoH: 160,
    toolAlt: "Copilot",
    visual: "/biz/assets/img/index/plan/graphic/copilot.webp",
    visualW: 1669,
    visualH: 946,
    visualAlt: "Microsoft 365 Copilotの活用イメージ（PC画面）",
  },
  docHref: "/doc-a",
  about: {
    title: "Copilot研修とは？",
    subLead: (
      <>
        いつものMicrosoft 365にAIを取り入れ、<br />
        <span className="ct-about__mark">日常業務の生産性</span>を底上げする
      </>
    ),
    lead: "Microsoft 365 の Word・Excel・Outlook・Teams で Copilot を活用し、日々の文書作成・データ集計・メール・会議業務を効率化。初めての方でも、現場ですぐに使えるAI活用スキルを体系的に習得できる法人向け研修です。",
    cards: [
      {
        no: "01",
        h: "Microsoft 365の中で\nそのままAIを使える",
        thumb: "/biz/assets/img/course/about/copilot-01.webp",
        d: "Word、Excel、PowerPoint、Outlook、TeamsそれぞれのCopilot操作を習得。新しい業務環境を増やさず、普段使うアプリの中でAI活用を始められます。",
      },
      {
        no: "02",
        h: "会議・メール・資料作成を\nまとめて効率化",
        thumb: "/biz/assets/img/course/about/copilot-02.webp",
        d: "会議の要約、メール返信、文書の下書き、表の分析、スライド作成までを実際の流れに沿って学習。アプリをまたぐ日常業務の時間をまとめて減らせます。",
      },
      {
        no: "03",
        h: "権限とデータを守りながら\n全社活用を進める",
        thumb: "/biz/assets/img/course/about/copilot-03.webp",
        d: "Microsoft 365の権限や社内データの扱いを踏まえ、安全な指示と確認方法を習得。ライセンス配布だけで終わらず、組織で継続して使える土台をつくります。",
      },
    ],
  },
  spec: [
    { ja: "試聴時間", value: <>約<b>7</b>時間</> },
    { ja: "レッスン数", value: <>全<b>48</b>レッスン</> },
    { ja: "受講形式", value: <>オンライン</> },
    { ja: "使用ツール", value: <>Copilot</> },
  ],
  recommend: {
    sub: "Microsoft 365とCopilotをつなぎ、日々のOffice業務が効率化される状態へ",
    nowrapSub: true,
    cards: [
      {
        h: "Microsoft 365を全社で利用している組織",
        d: "普段使うTeams、Outlook、Word、Excel、PowerPoint上でAI活用を始めたい組織に。業務環境を変えず、Copilotの使いどころを広げられます。",
      },
      {
        h: "会議・メール・資料作成を効率化したいチーム",
        d: "会議の要約、メール返信、文書の推敲、表の分析、スライド作成まで、Office上で繰り返す仕事をまとめて効率化したいチームに適しています。",
      },
      {
        h: "社内データを安全にAI活用したい情報システム部門",
        d: "Microsoft 365の権限やデータ管理を前提に、社内情報を扱うAI活用を進めたい部門に。機能だけでなく安全な使い分けも整理します。",
      },
      {
        h: "Copilotを契約済みだが利用が進んでいない組織",
        d: "ライセンスを配布したもののチャット利用に留まっている組織に。アプリ連携と部門別の活用例を学び、導入コストを日々の成果へつなげます。",
      },
    ],
  },
  curriculum: {
    sub: (
      <>
        Copilotを実務で成果につなげるための<br />
        <em>『3つのステップ』</em>
      </>
    ),
    steps: [
      {
        no: "STEP01",
        label: "基礎理解",
        cards: [
          {
            no: "01",
            cat: "生成AIの基礎",
            thumb: "/copilot-master-static/files/スクリーンショット-2025-12-05-21.16.13.webp",
            h: "Copilotと生成AIの基礎知識",
            tags: ["#生成AIとは", "#Copilotの特徴", "#活用メリット"],
            d: "生成AIとしてのCopilotの仕組みと得意・不得意を理解し、Microsoft 365で使いこなす前提となる基礎を習得。ビジネスで活用する主要メリットを整理し、全社展開の土台をつくります。",
          },
          {
            no: "02",
            cat: "種類と使い分け",
            thumb: "/copilot-master-static/files/スクリーンショット-2025-12-05-21.19.27.webp",
            h: "Copilotの種類と職場モード活用",
            tags: ["#法人向けCopilot", "#Copilot Studio", "#横断検索"],
            d: "ブラウザ版・デスクトップ版、個人向け・法人向けなどCopilotの種類と特徴を理解し、用途に応じた使い分けを習得。職場モードでメール・ファイル・チャットを横断検索する方法も学びます。",
          },
        ],
      },
      {
        no: "STEP02",
        label: "実務での活用",
        cards: [
          {
            no: "03",
            cat: "Microsoft 365連携",
            thumb: "/copilot-master-static/files/スクリーンショット-2025-12-05-21.22.28.webp",
            h: "Teams・Outlook・Word・Excelでの実務活用",
            tags: ["#Teams", "#Outlook", "#Excel"],
            d: "Teamsの議事録自動作成、Outlookのメール要約・返信、Wordの推敲、Excelのデータ分析・可視化など、主要アプリでのCopilot連携を実務レベルで習得し、日々の定型業務を効率化します。",
          },
          {
            no: "04",
            cat: "資料作成術",
            thumb: "/copilot-master-static/files/スクリーンショット-2025-12-05-21.40.08.webp",
            h: "企画書・提案書・レポートの作成術",
            tags: ["#PowerPoint", "#資料作成", "#リサーチ"],
            d: "企画書のアイデア壁打ちから、音声入力を起点としたPowerPointスライドの自動生成、リサーチツールでの高品質レポート作成まで、Copilotと共同で資料をつくる実践的なワークフローを習得します。",
          },
        ],
      },
      {
        no: "STEP03",
        label: "応用と定着",
        cards: [
          {
            no: "05",
            cat: "部門別応用",
            thumb: "/copilot-master-static/files/スクリーンショット-2025-12-05-21.52.39.webp",
            h: "部門別の応用活用とCopilot Studio",
            tags: ["#Copilot Studio", "#部門別活用", "#自動化"],
            d: "人事・営業・マーケ・法務など部門別の実践活用に加え、Copilot Studioでのカスタムエージェント構築や画像・動画生成まで習得。自社業務に合わせた高度な活用と自動化を実現します。",
          },
          {
            no: "06",
            cat: "セキュリティ",
            thumb: "/copilot-master-static/files/スクリーンショット-2025-12-05-21.56.56.webp",
            h: "セキュリティとデータ保護",
            tags: ["#情報セキュリティ", "#データ保護", "#社内ルール"],
            d: "法人利用におけるCopilotのエンタープライズデータ保護の仕組みや、データアクセス・保存場所の透明性を理解。セキュリティポリシーを整備し、従業員へ安全な利用を周知する方法を学びます。",
          },
        ],
      },
    ],
  },
  lessons: {
    learnHours: "7",
    freeHours: "15",
    chapterCount: 6,
    lessonCount: 48,
    items: [
      {
        no: 1,
        title: "オリエンテーション：研修の全体像",
        ch: 1,
        time: "約4分",
        body: ["ユニット概要"],
      },
      {
        no: 2,
        title: "Copilotの基礎と全体像",
        ch: 6,
        time: "約28分",
        body: [
          "Copilotとは？生成AIとしての基礎知識",
          "Copilotをビジネスで活用する3つの主要メリット",
          "Copilotの種類と特徴（ブラウザ版・デスクトップ版）",
          "Copilotの種類と特徴（個人向け・法人向け）",
          "職場向けCopilot・Copilot Studioの使い分け",
          "職場モード活用術：メール・ファイル・チャットの横断検索",
        ],
      },
      {
        no: 3,
        title: "主要アプリ連携と実務活用（Teams・Outlook・Word・Excel）",
        ch: 12,
        time: "約1.4時間",
        body: [
          "Teamsでの会議議事録・要約の自動作成とアクション抽出",
          "Outlookでのメール要約・返信文作成とコーチング機能",
          "Wordでの文章リライト・推敲とブラッシュアップ",
          "Excelでのデータ結合（他テーブル参照）と数式提案",
          "Excelでの複雑なデータ分析・グラフ作成と一括可視化",
          "Excel：条件付き書式設定とデータ強調",
          "Web版Excelのデータクリーニング（表記揺れ・スペース修正）",
          "Wordの音声文字起こしとCopilotでの記事自動生成",
        ],
      },
      {
        no: 4,
        title: "実践：Copilotを活用した資料作成術",
        ch: 9,
        time: "約1.3時間",
        body: [
          "AIを活用した資料作成の基本思考：共同作業の視点",
          "企画書作成：Copilotでのアイデア壁打ちと骨子作成",
          "音声入力からPowerPointスライド自動生成までのワークフロー",
          "リサーチツールとPagesで実現する高品質レポート作成",
          "既存資料の分析と改善：論点抽出と「ツッコミ」機能",
          "長文報告書のWord要約と役員向けサマリー最適化",
          "プレゼンスキル強化：質疑応答まで徹底シミュレーション",
          "Whiteboardでのブレインストーミングと要約",
        ],
      },
      {
        no: 5,
        title: "Copilotのセキュリティとデータ保護",
        ch: 3,
        time: "約15分",
        body: [
          "法人利用におけるセキュリティ基盤とエンタープライズデータ保護",
          "データアクセスと保存場所に関する仕組みと透明性",
          "セキュリティポリシーの理解と従業員向け説明支援",
        ],
      },
      {
        no: 6,
        title: "Copilotの応用と部門別実践",
        ch: 17,
        time: "約3時間",
        body: [
          "Copilotで画像生成・編集：ポスターづくり",
          "Copilotで動画を自動生成：ビジネスメッセージの訴求",
          "プロンプト管理とチーム共有：プロンプトギャラリー活用",
          "カスタムCopilotの作成：Copilot Studio実践",
          "人事・採用：職務記述書からのスカウトメール作成",
          "IT・ヘルプデスク：業務マニュアルからのFAQチャットボット構築",
          "マーケティング：顧客アンケート分析からのペルソナ作成",
          "Copilotの最適化：メモリとカスタム指示活用法",
        ],
      },
    ],
  },
  plans: {
    lead: "Copilot研修は3つの研修プランでの受講が可能です。",
    primary: [
      { name: "AI効率化研修", amount: "200,000", unit: "円〜／名" },
      { name: "AI自動化研修", amount: "300,000", unit: "円〜／名" },
    ],
    single: { name: "eラーニング", amount: "100,000", unit: "円〜／名" },
  },
  faqs: COURSE_FAQS["copilot-training"],
};

export default function CopilotTrainingPage() {
  return <CourseLp data={course} />;
}
