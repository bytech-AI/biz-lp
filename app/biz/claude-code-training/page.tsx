import type { Metadata } from "next";
import { CourseLp, type CourseData } from "../_course/CourseLp";
import { COURSE_FAQS } from "../_course/courseFaqs";

export const metadata: Metadata = {
  title: "Claude Code研修（法人向け）| バイテック法人AI研修",
  description:
    "ターミナルで動くClaude Codeで、コード生成・修正・レビュー・自動化まで開発を加速する法人向け研修。助成金活用にも対応。",
  alternates: { canonical: "/claude-code-training" },
  openGraph: {
    title: "Claude Code研修（法人向け）| バイテック法人AI研修",
    description:
      "Claude Codeでコード生成・修正・レビュー・自動化まで開発を加速する法人向け研修。助成金活用にも対応。",
    url: "/claude-code-training",
  },
};

const course: CourseData = {
  slug: "claude-code-training",
  courseName: "Claude Code研修",
  hero: {
    background:
      "radial-gradient(120% 90% at 88% 108%, rgba(230, 150, 110, .45) 0%, rgba(230, 150, 110, 0) 55%), linear-gradient(118deg, #1e1b18 0%, #4a3227 38%, #a2542f 68%, #d97757 100%)",
    eyebrow: "非エンジニアでも業務の自動化・開発を進めたい組織・チームにおすすめ。",
    title: "Claude Code研修",
    tag: "オンライン ｜ 助成金未対応",
    toolLabel: "研修内使用ツール",
    toolLogo: "/biz/assets/img/index/plan/logo/claudecode-color.svg",
    toolAlt: "Claude Code",
    visual: "/biz/assets/img/index/plan/graphic/claudecode.webp",
    visualAlt: "Claude Codeの活用イメージ（PC画面）",
    compactVisual: true,
  },
  docHref: "/doc-a",
  noSubsidy: true,
  about: {
    title: "Claude Code研修とは？",
    subLead: (
      <>
        非エンジニアでも自動化・開発に取り組み、<br />
        <span className="ct-about__mark">AIで業務改善を当たり前に進める力</span>を身につける
      </>
    ),
    lead: "Claude Codeを使い、ファイル操作やデータ処理、定型業務の自動化から簡単なツール開発までを実践。専門的な開発経験がない方でも、日々の課題を自分で仕組みに変えられるスキルを体系的に習得する法人向け研修です。",
    cards: [
      {
        no: "01",
        h: "開発環境から基本操作まで\n迷わず始められる",
        thumb: "/biz/assets/img/course/about/claude-code-01.webp",
        d: "導入・認証・権限設定から、ターミナルでの対話やプロジェクト理解までを順に学習。初めてでも、既存の開発環境へ安全にClaude Codeを取り入れられます。",
      },
      {
        no: "02",
        h: "実装・テスト・レビューを\n一つの流れで効率化",
        thumb: "/biz/assets/img/course/about/claude-code-02.webp",
        d: "コードの調査、実装、修正、テスト作成、レビューを連続した作業として実践。速さだけを求めず、確認を挟みながら品質の高い開発を進める力が身につきます。",
      },
      {
        no: "03",
        h: "MCP・Hooks・Skillsで\nチームの開発を自動化",
        thumb: "/biz/assets/img/course/about/claude-code-03.webp",
        d: "外部ツール連携、定型処理の自動実行、用途別の指示やサブエージェントまで習得。個人の便利な道具から、チームで再現できる開発の仕組みへ広げられます。",
      },
    ],
  },
  spec: [
    { ja: "試聴時間", value: <>約<b>12</b>時間</> },
    { ja: "レッスン数", value: <>全<b>44</b>レッスン</> },
    { ja: "受講形式", value: <>オンライン</> },
    { ja: "使用ツール", value: <>Claude&nbsp;Code</> },
  ],
  recommend: {
    sub: "Claude Codeを開発工程へ組み込み、チームで品質と速度を高め続けられる状態へ",
    nowrapSub: true,
    cards: [
      {
        h: "AIコーディングをチーム標準にしたい開発組織",
        d: "個々の使い方に任せず、コンテキスト設計や指示方法を共通化したい組織に。再現性のあるClaude Code活用を開発工程へ定着させます。",
      },
      {
        h: "実装からテストまでの時間を短縮したいチーム",
        d: "コード生成、修正、リファクタリング、テスト作成を一連の流れで効率化。機能開発の速度を上げながら品質も維持したいチームに適しています。",
      },
      {
        h: "複雑なコードベースの保守負荷を下げたい組織",
        d: "既存コードの理解、調査、レビュー、文書化をClaude Codeで支援。担当者しか分からない状態を減らし、引き継ぎや改修を進めやすくします。",
      },
      {
        h: "MCP・Hooks・サブエージェントまで使いたい組織",
        d: "補完や単発のコード生成から一歩進み、外部ツール連携や処理の自動化まで広げたい組織に。安全な運用ルールも含めて実践します。",
      },
    ],
  },
  curriculum: {
    sub: (
      <>
        Claude Codeを実務で成果につなげるための<br />
        <em>『5つのステップ』</em>
      </>
    ),
    steps: [
      {
        no: "STEP01",
        label: "環境構築・基礎",
        cards: [
          {
            no: "01",
            cat: "環境構築・Claude Code基礎",
            thumb: "/biz/assets/img/course/curriculum/claude-code/01.webp",
            h: "開発環境の構築とClaude Codeの初動",
            tags: ["#環境構築", "#Plan mode", "#CLAUDE.md"],
            d: "Mac/Windowsの開発環境とGit/GitHubを整え、Plan modeやスラッシュコマンド、コンテキスト管理でClaude Codeの初動を掴みます。CLAUDE.mdでプロジェクト規約を伝えるところまで押さえます。",
          },
          {
            no: "02",
            cat: "コンテキスト設計・初公開",
            thumb: "/biz/assets/img/course/curriculum/claude-code/02.webp",
            h: "プロンプト設計とVercel初公開",
            tags: ["#プロンプト設計", "#コンテキスト", "#Vercel"],
            d: "曖昧な指示で終わらせないプロンプト設計とコンテキストエンジニアリングを学習。最初のVercel公開まで通しで体験し、作って動かす感覚を最短で身につけます。",
          },
        ],
      },
      {
        no: "STEP02",
        label: "Claude Code実践",
        cards: [
          {
            no: "03",
            cat: "スラッシュコマンド・Skills",
            thumb: "/biz/assets/img/course/curriculum/claude-code/03.webp",
            h: ".claude/機能マップとSkills活用",
            tags: ["#スラッシュコマンド", "#Skills", "#機能マップ"],
            d: "スラッシュコマンドの使い分けと.claude/ディレクトリの全体像を把握し、最小のSkill作成から実戦活用まで進めます。反復作業を仕組み化し、開発の型を整えます。",
          },
          {
            no: "04",
            cat: "サブエージェント・Hooks",
            thumb: "/biz/assets/img/course/curriculum/claude-code/04.webp",
            h: "役割分担とHooksによる安全制御",
            tags: ["#サブエージェント", "#Hooks", "#安全運用"],
            d: "reviewer/planner/security-auditorなどサブエージェントの役割分担を設計し、複数エージェントで開発を進めます。Hooksで危険な操作を止め、安全に自動化する土台を築きます。",
          },
        ],
      },
      {
        no: "STEP03",
        label: "業務自動化",
        cards: [
          {
            no: "05",
            cat: "MCP/CLI/API連携",
            thumb: "/biz/assets/img/course/curriculum/claude-code/05.webp",
            h: "外部システムと繋ぐ自動化基盤",
            tags: ["#MCP", "#CLI", "#API"],
            d: "API/CLI/MCPの3択判断とcurl・jqの基本操作を押さえ、GitHub/Supabase/Vercel/FigmaのMCPサーバへ接続。Notion・Slack・freeeやGitHub公式MCPでリポジトリ・Issue解析まで連携させます。",
          },
          {
            no: "06",
            cat: "成果物生成・GAS自動化",
            thumb: "/biz/assets/img/course/curriculum/claude-code/06.webp",
            h: "ファイル・帳票処理と定型業務の自動化",
            tags: ["#PDF自動化", "#Excel", "#GAS"],
            d: "ファイル整理やPDF処理、テキスト・CSV・Excelを成果物へ変換する自動化を構築。GASプロジェクトの編集やGAS+OpenAI APIの連携で、繰り返し発生する定型業務を効率化します。",
          },
        ],
      },
      {
        no: "STEP04",
        label: "アプリ開発",
        cards: [
          {
            no: "07",
            cat: "Web開発・データベース",
            thumb: "/biz/assets/img/course/curriculum/claude-code/07.webp",
            h: "Next.js/Supabaseによるアプリ実装",
            tags: ["#Next.js", "#Tailwind", "#Supabase"],
            d: "DESIGN.mdで画面設計し、Next.js/Tailwindで土台を構築。SQLのCRUDを安全に読み、Supabaseでテーブル作成・ログイン機能・RLSによるアクセス制御まで実装します。",
          },
          {
            no: "08",
            cat: "デプロイ・テスト・レビュー",
            thumb: "/biz/assets/img/course/curriculum/claude-code/08.webp",
            h: "Preview公開と品質担保の開発サイクル",
            tags: ["#Vercel Preview", "#テスト", "#コードレビュー"],
            d: "データ保存を伴うアプリをVercelにデプロイし、Preview環境で検証。AIと考えるソフトウェアテストや生成コードのレビューを回し、継続的に改善するサイクルを確立します。",
          },
        ],
      },
      {
        no: "STEP05",
        label: "品質・セキュリティ・運用",
        cards: [
          {
            no: "09",
            cat: "脆弱性点検・安全運用",
            thumb: "/biz/assets/img/course/curriculum/claude-code/09.webp",
            h: "Webとエージェントのセキュリティ点検",
            tags: ["#XSS/CSRF/SQLi", "#OWASP Agentic", "#権限管理"],
            d: "XSS/CSRF/SQLiなどWebアプリの危険箇所を点検し、OWASP Agentic Top10に沿ってAIエージェントを安全に運用。Claude Codeの権限と設定を安全に管理する勘所を押さえます。",
          },
          {
            no: "10",
            cat: "運用・修了後ロードマップ",
            thumb: "/biz/assets/img/course/curriculum/claude-code/10.webp",
            h: "障害対応・コスト管理と実務演習",
            tags: ["#障害対応", "#コスト管理", "#ロードマップ"],
            d: "公開後のエラーをログから追い、障害対応とコスト管理を実践。設計から公開までの実務プロジェクト演習と、30/60/90日のエンジニアロードマップで定着につなげます。",
          },
        ],
      },
    ],
  },
  lessons: {
    learnHours: "12",
    freeHours: "0",
    items: [
      {
        no: 1,
        title: "環境構築・Claude Code基礎・Vercel初公開",
        ch: 7,
        time: null,
        body: [
          "コースオリエンテーション",
          "開発環境構築（Mac・Windows）",
          "Git・GitHubの最低限",
          "Claude Codeで小さな成功体験（Plan mode・スラッシュコマンド・コンテキスト管理）",
          "プロンプト設計とコンテキストエンジニアリング",
          "CLAUDE.mdでプロジェクトのルールを伝える",
          "最初のVercel公開体験",
        ],
      },
      {
        no: 2,
        title: "Claude Code実践（Skills・Agents・Hooks）",
        ch: 7,
        time: null,
        body: [
          "スラッシュコマンドの使い分け",
          ".claude/ディレクトリの全体像と機能マップ",
          "最小のSkillを作る",
          "Skillsの実戦活用",
          "サブエージェント設計の基礎",
          "サブエージェントの役割分担（reviewer/planner/security-auditor等）",
          "Hooksで危険な操作を止める",
        ],
      },
      {
        no: 3,
        title: "業務自動化（MCP・CLI・API・GAS）",
        ch: 9,
        time: null,
        body: [
          "API/CLI/MCP入門（3択判断）",
          "CLI基本操作（curl・jq・API）",
          "MCPサーバ接続（GitHub/Supabase/Vercel/Figma）",
          "ファイル整理・PDF自動化",
          "テキスト・CSV・Excelを成果物に",
          "GitHub公式MCPでリポジトリ・Issue解析",
          "Notion・Slack・freee連携",
          "GAS+OpenAI APIで業務自動化",
        ],
      },
      {
        no: 4,
        title: "アプリ開発（Next.js・Supabase・RLS・Vercel）",
        ch: 15,
        time: null,
        body: [
          "コードを読む基礎／DESIGN.mdで画面設計",
          "Next.jsで土台構築／Tailwindで画面を整える",
          "状態管理とフォーム",
          "SQLのCRUDを安全に読む",
          "Supabaseにテーブル作成／ログイン機能",
          "RLSで入口を閉じる／データ保存",
          "Vercelデプロイ・Preview",
          "AIと考えるソフトウェアテスト／生成コードのレビュー",
        ],
      },
      {
        no: 5,
        title: "品質・セキュリティ・運用・修了後",
        ch: 6,
        time: null,
        body: [
          "Webアプリの危険箇所点検（XSS/CSRF/SQLi等）",
          "AIエージェントを安全に使う（OWASP Agentic Top10）",
          "Claude Codeの権限と設定を安全に運用",
          "障害対応とコスト管理",
          "実務プロジェクト演習（設計から公開まで）",
          "エンジニアロードマップ（30/60/90日）",
        ],
      },
    ],
  },
  plans: {
    lead: "Claude Code研修は3つの研修プランでの受講が可能です。",
    primary: [
      { name: "AI効率化研修", amount: "200,000", unit: "円〜／名" },
      { name: "AI自動化研修", amount: "300,000", unit: "円〜／名" },
    ],
    single: { name: "eラーニング", amount: "100,000", unit: "円〜／名" },
  },
  faqs: COURSE_FAQS["claude-code-training"],
};

export default function ClaudeCodeTrainingPage() {
  return <CourseLp data={course} />;
}
