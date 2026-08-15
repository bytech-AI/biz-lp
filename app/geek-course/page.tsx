import type { Metadata } from "next";
import { GeekCourseLp, type CourseData } from "./GeekCourseLp";

// geek（個人向け）の看板コース。biz の研修コースLPを複製し、
// 対象を「個人／未経験・非エンジニア」に、料金を geek の2/4/6ヶ月プランに差し替えている。
// カリキュラム本体は biz の Claude Code研修と同一教材のため、そのまま流用。

export const metadata: Metadata = {
  metadataBase: new URL("https://geek.bytech.jp"),
  title: "Claude Code エンジニアコース｜バイテックGEEK【公式】",
  description:
    "IT未経験・非エンジニアからでも、Claude Codeで業務自動化からWebアプリ開発までを「作り切る」力が身につく実践コース。全44レッスン・履修期間2〜6ヶ月、専属メンターが伴走します。",
  alternates: { canonical: "/engineer-course" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://geek.bytech.jp/engineer-course",
    siteName: "バイテックGEEK",
    title: "Claude Code エンジニアコース｜バイテックGEEK【公式】",
    description:
      "IT未経験・非エンジニアからでも、Claude Codeで「作れる側」になる実践コース。全44レッスン・履修期間2〜6ヶ月。",
    locale: "ja_JP",
  },
  twitter: { card: "summary_large_image" },
};

const course: CourseData = {
  slug: "engineer-course",
  courseName: "Claude Code エンジニアコース",
  hero: {
    background:
      "radial-gradient(120% 90% at 88% 108%, rgba(230, 150, 110, .45) 0%, rgba(230, 150, 110, 0) 55%), linear-gradient(118deg, #1e1b18 0%, #4a3227 38%, #a2542f 68%, #d97757 100%)",
    eyebrow: "IT未経験・非エンジニアから、AIで「作れる側」に回りたい方へ。",
    // PCでは1行に収める（SPは course.css 側で自動的に折り返す）
    nowrapEyebrow: true,
    title: (
      <>
        Claude Code<br />エンジニアコース
      </>
    ),
    tag: "オンライン ｜ 履修期間 2〜6ヶ月",
    toolLabel: "コース内使用ツール",
    toolLogo: "/biz/assets/img/index/plan/logo/claudecode-color.svg",
    toolLogoW: 415,
    toolLogoH: 259,
    toolAlt: "Claude Code",
    visual: "/geek-static/files/course-hero-engineer.webp",
    visualW: 1400,
    visualH: 863,
    visualAlt: "Claude Codeで開発している画面（ノートPC）",
  },
  // CTAはすべて無料カウンセリング予約フォームへ
  docHref: "/#counseling",
  avatarSheet: "/biz/assets/img/course/avatars/claude-code.webp",
  about: {
    title: "Claude Code エンジニアコースとは？",
    subLead: (
      <>
        プログラミングを何年も学ぶのではなく、<br />
        <span className="ct-about__mark">Claude Codeに実装を任せて作り切る</span>力を身につける
      </>
    ),
    lead: "環境構築からプロンプト設計、業務自動化、Webアプリ開発、公開・運用までを一気通貫で学ぶ、個人向けの実践コースです。文法の暗記ではなく「何をどう作るか」を設計し、Claude Codeと一緒に形にするところまでを、専属メンターの伴走つきで進めます。",
    cards: [
      {
        no: "01",
        h: "環境構築から公開まで\n迷わず進められる",
        thumb: "/biz/assets/img/course/about/claude-code-01.webp",
        d: "Mac/Windowsの開発環境、Git/GitHub、Plan modeやコンテキスト管理まで順番に習得。初めてでも手が止まらず、最初のVercel公開までを最短で体験できます。",
      },
      {
        no: "02",
        h: "実装・テスト・レビューを\n一人で回せるようになる",
        thumb: "/biz/assets/img/course/about/claude-code-02.webp",
        d: "コードの調査から実装、修正、テスト、レビューまでを一連の流れで実践。速さだけを追わず、確認を挟みながら「動くものを最後まで仕上げる」進め方が身につきます。",
      },
      {
        no: "03",
        h: "MCP・Hooks・Skillsで\n自分専用の仕組みをつくる",
        thumb: "/biz/assets/img/course/about/claude-code-03.webp",
        d: "外部ツール連携や定型処理の自動実行、サブエージェントまで習得。便利な道具の使い方で終わらせず、業務や副業でそのまま使える仕組みへ広げられます。",
      },
    ],
  },
  recommend: {
    sub: "Claude Codeを武器に、業務改善から副業・キャリアアップまで自分で動かせる状態へ",
    nowrapSub: true,
    cards: [
      {
        h: "非エンジニアで、業務を自分で自動化したい方",
        d: "情報収集や資料作成、集計といった繰り返し作業を、人に頼まず自分で仕組みに変えたい方へ。日々の業務を題材に、動く自動化を作りながら学びます。",
      },
      {
        h: "副業・受託で案件を取り切りたい方",
        d: "提案までは進むのに実装で止まる、という段階を越えるためのコース。受講中の制作物がそのままポートフォリオになり、初案件の獲得につながります。",
      },
      {
        h: "デザイナー・企画職で提案の幅を広げたい方",
        d: "デザインや企画で止まっていた提案を、動くプロダクトまで持っていける状態へ。巻き取れる業務が増え、単価や役割の交渉がしやすくなります。",
      },
      {
        h: "独学で手が止まってしまった方",
        d: "エラーの原因が分からない、次に何をすべきか決められない——を専属メンターとの月2回の面談で解消。作り切る体験まで伴走します。",
      },
    ],
  },
  curriculum: {
    sub: (
      <>
        未経験からでもAIエンジニアになるための<em>5ステップ</em>
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
    lead: "目的と使える時間に合わせて、3つのプランから選べます。いずれも教材の視聴は無期限です。",
    primary: [
      { name: "2ヶ月プラン", amount: "228,000", unit: "円（税込）" },
      { name: "4ヶ月プラン", amount: "348,000", unit: "円（税込）" },
      { name: "6ヶ月プラン", amount: "438,000", unit: "円（税込）" },
    ],
  },
  faqs: [
    {
      q: "プログラミング未経験でも受講できますか？",
      a: "はい、未経験の方でも受講いただけます。Claude Codeを活用し、未経験からでも「作り切る」実装力が身につくようカリキュラムを設計しています。環境構築からサポートするので、最初の一歩でつまずく心配もありません。",
    },
    {
      q: "従来のプログラミングスクールとの違いは何ですか？",
      a: "文法やコーディングを一から学ぶのではなく、Claude Codeを使いこなして要件定義から実装までを一人で「作り切る」ことに特化しています。学ぶ順番も、暗記ではなく成果物から逆算して組み立てています。",
    },
    {
      q: "本業がフルタイムでも進められますか？",
      a: "はい。完全オンライン・オンデマンド中心のカリキュラムなので、週5〜10時間を目安に、在職・本業と両立しながら進められます。学習ペースは月2回の個別面談で調整します。",
    },
    {
      q: "どのプランを選べばいいか分かりません。",
      a: "無料カウンセリングで、現在のスキルと目標を伺ったうえで最適なプランをご提案します。業務の自動化までなら2ヶ月、副業や実務開発まで見据えるなら4ヶ月以上が目安です。",
    },
    {
      q: "受講中に作ったプロダクトの権利はどうなりますか？",
      a: "すべて受講者ご自身に帰属します。副業案件のポートフォリオや、自社事業の立ち上げにそのまま活用いただけます。",
    },
    {
      q: "支払い方法は？",
      a: "クレジットカード・銀行振込に対応しています。分割払いも可能で、月々のご負担を抑えてスタートできます。",
    },
  ],
};

export default function GeekEngineerCoursePage() {
  return <GeekCourseLp data={course} />;
}
