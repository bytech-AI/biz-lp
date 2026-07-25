import { CourseLp, type CourseData } from "../_course/CourseLp";
import { COURSE_FAQS } from "../_course/courseFaqs";
import { buildCourseMetadata } from "../_course/courseMetadata";

export const metadata = buildCourseMetadata({
  title: "法人向け実践型Claude研修｜バイテック法人AI研修",
  description:
    "Claudeの基本からCowork・Claude Codeによる業務自動化まで、AIと業務を前に進める力を身につける法人向け研修。助成金活用にも対応。",
  socialDescription:
    "Claudeの基本からCowork・Claude Codeによる業務自動化まで、AIと業務を前に進める力を身につける法人向け研修。",
  path: "/claude-training",
});

const course: CourseData = {
  slug: "claude-training",
  courseName: "Claude研修",
  hero: {
    background:
      "radial-gradient(120% 90% at 88% 108%, rgba(245, 205, 175, .5) 0%, rgba(245, 205, 175, 0) 55%), linear-gradient(118deg, #a8412a 0%, #d97757 38%, #e2996b 58%, #c8663f 100%)",
    eyebrow: "Claude Cowork・Codeまで幅広く活用したい組織・チームにおすすめ。",
    title: "Claude研修",
    tag: "オンライン ｜ 助成金対応",
    toolLabel: "研修内使用ツール",
    toolLogo: "/biz/assets/img/index/plan/logo/claude-ai-icon.svg",
    toolLogoW: 840,
    toolLogoH: 319,
    toolAlt: "Claude",
    visual: "/biz/assets/img/index/plan/graphic/claude.webp",
    visualW: 2064,
    visualH: 1169,
    visualAlt: "Claudeの活用イメージ（PC画面）",
  },
  docHref: "/doc-a",
  about: {
    title: "Claude研修とは？",
    subLead: (
      <>
        高性能なAIを実務に活かし、<br />
        <span className="ct-about__mark">業務を自ら前に進める力</span>を身につける
      </>
    ),
    lead: "長文の読み込みや文章作成に強いClaudeを日常業務に取り入れ、資料の要約・分析・ライティングまでのプロセスを効率化。初めての方でも、現場ですぐに使えるAI活用スキルを体系的に習得できる法人向け研修です。",
    cards: [
      {
        no: "01",
        h: "Claudeの特性とモデルを\n業務に合わせて選べる",
        thumb: "/biz/assets/img/course/about/claude-01.webp",
        d: "Claudeの基本操作とモデルごとの違いを理解し、調査・分析・資料作成など目的に合う使い方を習得。ChatGPTやGeminiと併用するときの判断軸も身につきます。",
      },
      {
        no: "02",
        h: "長い資料を読み解き\n成果物まで仕上げる",
        thumb: "/biz/assets/img/course/about/claude-02.webp",
        d: "複数の資料や長文をまとめて読み込み、要点整理・比較・分析から文章や表、スライドの作成まで実践。情報量が多い仕事でも、精度を保って形にできます。",
      },
      {
        no: "03",
        h: "Cowork・Claude Codeまで\n活用範囲を広げる",
        thumb: "/biz/assets/img/course/about/claude-03.webp",
        d: "チャットでの相談や文章作成に加え、CoworkでのPC作業やClaude Codeでの開発支援まで学習。Claudeを回答役だけでなく、仕事を進める実行役として活用できます。",
      },
    ],
  },
  spec: [
    { ja: "試聴時間", value: <>約<b>6.4</b>時間</> },
    { ja: "レッスン数", value: <>全<b>81</b>レッスン</> },
    { ja: "受講形式", value: <>オンライン</> },
    { ja: "使用ツール", value: <>Claude / Cowork・Code</> },
  ],
  recommend: {
    sub: "Claudeの高い処理力と自動化機能を実務へ取り入れ、複雑な業務を前に進められる状態へ",
    nowrapSub: true,
    cards: [
      {
        h: "Claudeを新たな標準AIとして導入したい組織",
        d: "性能の高さを評価してClaudeを採用したいものの、選び方や使いどころが定まっていない組織に。モデルの違いから実務活用まで整理できます。",
      },
      {
        h: "ChatGPT・GeminiとClaudeを併用したい組織",
        d: "既存AIを置き換えるのではなく、長文処理や成果物作成などClaudeが強い業務で使い分けたい組織に。複数AIを選ぶ判断軸が身につきます。",
      },
      {
        h: "大量の文書や高品質な成果物を扱う部門",
        d: "契約書、調査資料、議事録などを読み解き、文章・表・スライドへ仕上げる業務が多い部門に。長い情報を崩さず扱う実践方法を習得します。",
      },
      {
        h: "Claude Cowork・Claude Codeまで活用したい組織",
        d: "チャットでの文章作成に留めず、PC作業や定型業務を任せる活用へ進みたい組織に。Agent Skillsを含め、Claudeを業務の実行役として使う土台をつくります。",
      },
    ],
  },
  curriculum: {
    sub: (
      <>
        Claudeを実務で成果につなげるための<br />
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
            thumb: "/biz/assets/img/course/curriculum/claude/ui-01.webp",
            h: "Claude・生成AIの仕組みと基本操作",
            tags: ["#生成AIとは", "#Claudeの特徴", "#基本操作"],
            d: "生成AIの仕組みとClaude独自の強みを理解し、基本画面の操作からモデルの選び方までを習得。業務で使いこなす前提となる土台を、未経験の方でも体系的に固めます。",
          },
          {
            no: "02",
            cat: "モデル選定・限界理解",
            thumb: "/biz/assets/img/course/curriculum/claude/ui-02.webp",
            h: "用途別のモデル選定とClaudeの限界理解",
            tags: ["#モデル選定", "#Constitutional AI", "#限界理解"],
            d: "Haiku・Sonnet・Opusの特性を踏まえた使い分けや、ハルシネーション・コンテキスト圧縮といった限界を理解。安心して業務に組み込むための判断軸を身につけます。",
          },
        ],
      },
      {
        no: "STEP02",
        label: "実務での活用",
        cards: [
          {
            no: "03",
            cat: "プロンプト・ファイル生成",
            thumb: "/biz/assets/img/course/curriculum/claude/ui-03.webp",
            h: "プロンプト設計とアーティファクト活用",
            tags: ["#プロンプト設計", "#アーティファクト", "#ファイル生成"],
            d: "狙った出力を安定して得るプロンプトの型を学び、Excel・Word・PowerPointをプロンプトから一括生成。検討から成果物づくりまでのプロセスを大幅に高速化します。",
          },
          {
            no: "04",
            cat: "長文処理・要約",
            thumb: "/biz/assets/img/course/curriculum/claude/ui-04.webp",
            h: "長文ドキュメントの読解・要約・分析",
            tags: ["#長文処理", "#要約", "#分析"],
            d: "契約書やレポートなどの長文をClaudeに読み込ませ、論点抽出・比較分析・読み手別要約を効率化。読む時間を短縮し、確認と意思決定に集中できる状態をつくります。",
          },
          {
            no: "05",
            cat: "Office・ブラウザ連携",
            thumb: "/biz/assets/img/course/curriculum/claude/ui-05.webp",
            h: "Excel・PowerPoint・Chromeでの実務効率化",
            tags: ["#Excel", "#PowerPoint", "#Chrome"],
            d: "Excelの分析やPowerPointの資料作成、ブラウザ上のリサーチまでをClaudeが支援。日常的に使うツールの中でAIを動かし、部門横断で生産性を底上げします。",
          },
        ],
      },
      {
        no: "STEP03",
        label: "定着と応用",
        cards: [
          {
            no: "06",
            cat: "エージェント自動化",
            thumb: "/claude-master-static/files/スクリーンショット-2026-05-04-16.41.40.webp",
            h: "CoworkとClaude Codeで業務を自動化",
            tags: ["#Cowork", "#自動化", "#Claude Code"],
            d: "デスクトップで自律的に動くCoworkや非エンジニア向けのClaude Codeを使い、定型業務やファイル処理を自動化。計画→実行→報告のループで人手作業を削減します。",
          },
          {
            no: "07",
            cat: "Agent Skills・定着",
            thumb: "/claude-master-static/files/スクリーンショット-2026-05-04-16.45.09.webp",
            h: "自社業務のスキル化と全社定着",
            tags: ["#Agent Skills", "#ナレッジ", "#全社展開"],
            d: "自社の業務手順をAgent Skillsとして登録し、誰でも再現できる仕組みへ。権限管理やセキュリティも押さえ、一過性で終わらせず全社にAI活用を定着させます。",
          },
        ],
      },
    ],
  },
  lessons: {
    learnHours: "6",
    freeHours: "18",
    chapterCount: 14,
    lessonCount: 81,
    items: [
      {
        no: 1,
        title: "Claude活用の全体像と研修ゴール設定",
        ch: 3,
        time: null,
        body: [
          "ユニット概要 – 講座で達成する到達ゴール",
          "Claudeとは何か – 他の生成AIと決定的に違う点",
          "なぜ今Claudeなのか – 長文理解・誠実性・考えて使えるAI",
        ],
      },
      {
        no: 2,
        title: "Claudeの基礎理解と法人導入の勘所",
        ch: 6,
        time: null,
        body: [
          "Claudeの基本画面とチャット操作",
          "無料版と有料版の違い – できること・制限の整理",
          "Claudeが得意なタスク・苦手なタスク",
          "ChatGPT・Geminiとの思想と役割の違い",
          "モデルの使い分け – Haiku / Sonnet / Opusの選び方",
          "Claudeの思想と設計コンセプト（Constitutional AI）",
        ],
      },
      {
        no: 3,
        title: "基本操作｜プロンプト・アーティファクト・ファイル生成",
        ch: 7,
        time: null,
        body: [
          "効果的なプロンプトの書き方 – 明確な指示を構造化する",
          "アーティファクト機能 – コード・文書を別ウィンドウで管理",
          "プロンプトからExcelを作成する（数式・グラフ込み）",
          "プロンプトからWord・PDFを作成する",
          "プロンプトからPowerPointを作成する",
          "ファイルのアップロードと読み込み（PDF・画像・Excel）",
          "拡張思考（Extended Thinking）で複雑な課題に深く考えさせる",
        ],
      },
      {
        no: 4,
        title: "プロジェクト・コネクタ・メモリで業務環境に最適化",
        ch: 5,
        time: null,
        body: [
          "プロジェクト機能 – 目的別のチャット管理と知識ベース化",
          "プロジェクトへの資料添付とシステムプロンプト設定",
          "コネクタ機能 – Google Drive / Slack / Notion連携",
          "スタイル機能 – 出力の文体・トーンをカスタマイズ",
          "メモリ機能 – Claudeに自社情報を記憶させる",
        ],
      },
      {
        no: 5,
        title: "長文ドキュメント処理・要約・分析術",
        ch: 6,
        time: null,
        body: [
          "大量の文章を破綻なく扱える理由（コンテキストウィンドウ）",
          "長文を渡すときの正しい入力設計",
          "複数ドキュメントを横断して整理する",
          "論点・矛盾・重要ポイントを抽出させる",
          "要約の種類と使い分け（1文・箇条書き・読み手別）",
          "トーン・文体を統一するリライト術",
        ],
      },
      {
        no: 6,
        title: "Claude in Chrome｜ブラウザで動くAIエージェント活用",
        ch: 6,
        time: null,
        body: [
          "Claude in Chromeとは – ブラウザ拡張機能の概要",
          "インストールと初期設定 – ウェブストアからの導入手順",
          "Webページの要約・翻訳・Q&A",
          "フォーム入力・メール下書きの自動化",
          "タブ横断リサーチ – 複数サイトを一括整理・比較",
          "実践：Webリサーチ → ドキュメント作成のワンフロー",
        ],
      },
      {
        no: 7,
        title: "Claude in Excel｜スプレッドシート業務のAI化",
        ch: 5,
        time: null,
        body: [
          "Claude in Excelとは – Microsoftアドインの概要と導入",
          "データ分析の基本 – セル参照を保った数式理解",
          "ピボットテーブルの編集・フィルタリングを任せる",
          "グラフ・条件付き書式の自動生成",
          "実践：財務モデル・予算シートの共同作成",
        ],
      },
      {
        no: 8,
        title: "Claude in PowerPoint｜提案資料作成の高速化",
        ch: 6,
        time: null,
        body: [
          "Claude in PowerPointとは – Max / Team / Enterprise限定機能",
          "テンプレート読み取り – スライドマスター・ブランドカラー継承",
          "スライド生成の基本 – 説明文からデッキを一括作成",
          "既存スライドの選択編集・再構成・リライト",
          "ネイティブチャート・図表の自動生成（編集可能形式）",
          "実践：Excel分析データ → PowerPoint連携",
        ],
      },
      {
        no: 9,
        title: "Cowork｜デスクトップAIエージェントで業務自動化",
        ch: 9,
        time: null,
        body: [
          "CoworkとChatの決定的な違い – なぜ自律的に動けるのか",
          "Claude Desktopの導入とCoworkタブへの切り替え",
          "フォルダアクセス許可の設定とセキュリティの考え方",
          "Coworkのアーキテクチャ – 計画→実行→報告のループ",
          "実践①：フォルダの整理・リネームを自動化",
          "実践②：散在する資料からドキュメント初稿を自動作成",
          "スケジュール実行 – /scheduleで定期タスクを設定",
          "Claude in Chrome連携で複合タスクを実行",
        ],
      },
      {
        no: 10,
        title: "Agent Skills 理解編｜Claudeに道具を持たせる",
        ch: 6,
        time: null,
        body: [
          "Agent Skillsとは – Claudeに道具を持たせる仕組み",
          "標準スキル一覧 – Web検索・コード実行・ファイル操作",
          "スキルの確認場所 – claude.ai上での見方",
          "スキルがどう動くか – いつ・なぜ使うのか",
          "第三者スキルの危険性 – 信頼できるスキルの見極め方",
          "スキルのON/OFFと権限管理 – 安全に使う設定",
        ],
      },
      {
        no: 11,
        title: "Agent Skills 作成・活用編｜自社業務のスキル化",
        ch: 8,
        time: null,
        body: [
          "カスタムスキルとは – 自分だけの道具を作れる",
          "skill-creatorを使ったスキル作成の基本フロー",
          "SKILL.mdの構成 – フロントマター・本文・フォルダ構造",
          "マークダウンに何を書くか – 指示・トリガー・参照ファイル",
          "スクリプト・リファレンスの活用（scripts / references）",
          "実践：業務タスクをスキルとして登録・テスト",
          "MCPコネクタとスキルの違い – 使い分けの判断基準",
          "スキルがうまく動かないときのチェックポイント",
        ],
      },
      {
        no: 12,
        title: "実践編｜Claude × Agent Skillsで業務を任せる",
        ch: 5,
        time: null,
        body: [
          "大量情報整理をAgentとして任せる",
          "文章レビュー・監修Agentの実践",
          "ナレッジ・FAQ・マニュアル化",
          "比較・分類・意思決定サポート",
          "複合タスクをAgentに任せる設計",
        ],
      },
      {
        no: 13,
        title: "Claude Code 入門｜非エンジニアのための業務自動化",
        ch: 6,
        time: null,
        body: [
          "Claude Codeとは – 非エンジニアでも使える理由",
          "インストールとターミナルの基本操作",
          "自然言語でのファイル・データ操作",
          "定型作業のスクリプト化と自動実行",
          "表計算・テキストの一括処理",
          "実践：日常業務のバッチ処理を組み立てる",
        ],
      },
      {
        no: 14,
        title: "Claudeの限界を理解し、思考のパートナーにする",
        ch: 5,
        time: null,
        body: [
          "Claudeが意図と違う回答をする原因を知る",
          "コンテキスト圧縮とは – 会話が長くなると何が起きるか",
          "ハルシネーションが起きるとき – 原因・症状・見抜き方",
          "ハルシネーションを防ぐ・軌道修正する実践術",
          "まとめ – Claudeを思考するパートナーとして使い続ける",
        ],
      },
    ],
  },
  plans: {
    lead: "Claude研修は3つの研修プランでの受講が可能です。",
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
  faqs: COURSE_FAQS["claude-training"],
};

export default function ClaudeTrainingPage() {
  return <CourseLp data={course} />;
}
