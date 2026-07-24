import type { Metadata } from "next";
import { CourseLp, type CourseData } from "../_course/CourseLp";
import { COURSE_FAQS } from "../_course/courseFaqs";

export const metadata: Metadata = {
  title: "Gemini研修（法人向け）| バイテック法人AI研修",
  description:
    "Gemini・NotebookLM・Google Workspaceを業務の成果につなげる法人向け研修。助成金活用にも対応。カリキュラム・受講形式・料金をご案内します。",
  alternates: { canonical: "/gemini-training" },
  openGraph: {
    title: "Gemini研修（法人向け）| バイテック法人AI研修",
    description:
      "Gemini・NotebookLM・Google Workspaceを業務の成果につなげる法人向け研修。助成金活用にも対応。",
    url: "/gemini-training",
  },
};

const course: CourseData = {
  slug: "gemini-training",
  courseName: "Gemini研修",
  hero: {
    background:
      "radial-gradient(120% 90% at 88% 108%, rgba(170, 150, 255, .5) 0%, rgba(170, 150, 255, 0) 55%), linear-gradient(118deg, #1b2a80 0%, #3b5bd8 36%, #7658d8 58%, #4a86e8 100%)",
    eyebrow: "Google Workspaceを利用する組織・チームにおすすめ。",
    title: "Gemini研修",
    tag: "オンライン ｜ 助成金対応",
    toolLabel: "研修内使用ツール",
    toolLogo: "/biz/assets/img/index/plan/gemini/tools.svg",
    toolAlt: "Gemini・NotebookLM",
    visual: "/biz/assets/img/index/plan/graphic/gemini.webp",
    visualAlt: "Gemini/NotebookLMの活用イメージ（PC画面）",
  },
  docHref: "/doc-a",
  about: {
    title: "Gemini研修とは？",
    subLead: (
      <>
        Google WorkspaceとAIをつなぎ、<br />
        <span className="ct-about__mark">情報整理から実行まで</span>をスムーズに
      </>
    ),
    lead: "Gemini・NotebookLM を Google Workspace の日常業務に取り入れ、メール・文書・表計算・情報整理までのプロセスを効率化。初めての方でも、現場ですぐに使えるAI活用スキルを体系的に習得できる法人向け研修です。",
    cards: [
      {
        no: "01",
        h: "Google Workspace上で\nGeminiをすぐ使える",
        thumb: "/biz/assets/img/course/about/gemini-01.webp",
        d: "Gmail、ドライブ、ドキュメント、スプレッドシート、スライド、Meetでの使い方を一つずつ習得。普段の仕事環境を変えずに、メール・資料・会議業務を効率化できます。",
      },
      {
        no: "02",
        h: "NotebookLMで社内資料を\n使える知識に変える",
        thumb: "/biz/assets/img/course/about/gemini-02.webp",
        d: "マニュアルや議事録、企画書などを読み込ませ、出典を確認しながら質問・要約する方法を学習。必要な情報を探す時間を減らし、社内資料を判断や提案に活かせます。",
      },
      {
        no: "03",
        h: "Gems・Deep Researchまで\n実務で使い分ける",
        thumb: "/biz/assets/img/course/about/gemini-03.webp",
        d: "定型業務を支えるGems、調査を深めるDeep Research、資料づくりを助けるCanvasまで習得。目的に合う機能を選び、個人利用からチームの共通業務へ広げられます。",
      },
    ],
  },
  spec: [
    { ja: "試聴時間", value: <>約<b>5</b>時間</> },
    { ja: "レッスン数", value: <>全<b>67</b>レッスン</> },
    { ja: "受講形式", value: <>オンライン</> },
    { ja: "使用ツール", value: <>Gemini・NotebookLM</> },
  ],
  recommend: {
    sub: "Google WorkspaceとGeminiをつなぎ、日々の業務をその場で効率化できる状態へ",
    nowrapSub: true,
    cards: [
      {
        h: "Google Workspaceを全社で利用している組織",
        d: "Gmail、ドライブ、ドキュメント、スプレッドシートなど、普段の業務環境を変えずにAI活用を始めたい組織に。各ツールでの具体的な使い方を学びます。",
      },
      {
        h: "メール・会議・資料作成の時間を減らしたいチーム",
        d: "メールの要約や返信、会議録、文書・表・スライド作成をGeminiで効率化。毎日繰り返すGoogle上の作業をまとめて見直したいチームに適しています。",
      },
      {
        h: "社内資料を探す時間を減らしたい組織",
        d: "マニュアルや議事録、企画書をNotebookLMで整理し、質問・要約できる状態をつくりたい組織に。社内情報を仕事で使える知識へ変えます。",
      },
      {
        h: "Geminiを契約済みだが活用が進んでいない組織",
        d: "チャット利用だけで止まっている状態から、Workspace連携、Gems、Deep Researchまで活用範囲を拡大。契約済みの環境を成果へつなげます。",
      },
    ],
  },
  curriculum: {
    sub: (
      <>
        Geminiを実務で成果につなげるための<br />
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
            cat: "Gemini・生成AIの基礎",
            thumb: "/biz/assets/img/course/curriculum/gemini/c2-01.webp",
            h: "GeminiとGemsの仕組み・基本操作",
            tags: ["#Geminiとは", "#ChatGPTとの違い", "#Gems"],
            d: "生成AIの得意・不得意とGeminiの特徴を理解し、基本画面やチャット操作を習得。業務に合わせて振る舞いを固定できる「Gems」まで押さえ、活用の土台をつくります。",
          },
          {
            no: "02",
            cat: "AIリテラシー・倫理",
            thumb: "/biz/assets/img/course/curriculum/gemini/c6-01.webp",
            h: "安全に使うためのリスク対策とガバナンス",
            tags: ["#情報漏洩対策", "#ハルシネーション", "#ガバナンス"],
            d: "情報漏洩・ハルシネーション・著作権といった実務リスクへの対策と、社内で安全に使い続けるための倫理・ガバナンスを整理。全社展開の前提となる判断軸を身につけます。",
          },
        ],
      },
      {
        no: "STEP02",
        label: "実務での活用",
        cards: [
          {
            no: "03",
            cat: "Gmail・ドライブ",
            thumb: "/biz/assets/img/course/curriculum/gemini/c3-03.webp",
            h: "メール処理と情報検索の効率化",
            tags: ["#メール要約", "#タスク自動化", "#AI検索"],
            d: "Gmailでのメール要約・作成・返信や日程調整の自動化に加え、Googleドライブ内の膨大なファイルをAI検索・要約し横断比較。日々の情報処理にかかる時間を大幅に削減します。",
          },
          {
            no: "04",
            cat: "ドキュメント・スプレッドシート",
            catNoWrap: true,
            thumb: "/biz/assets/img/course/curriculum/gemini/c3-02.webp",
            h: "文書作成とデータ分析の高速化",
            tags: ["#企画書作成", "#データ分析", "#AI関数"],
            d: "議事録メモから企画書を一気に仕上げる文書作成術と、話しかけるだけで進むデータ分析・AI関数・書式設定の自動化を習得。作成と集計の工数を圧縮します。",
          },
          {
            no: "05",
            cat: "スライド・Meet",
            thumb: "/biz/assets/img/course/curriculum/gemini/c3-01.webp",
            h: "資料作成と議事録の自動化",
            tags: ["#スライド生成", "#議事録自動化", "#会議効率化"],
            d: "AIに骨子を作らせデザインを洗練させるスライド作成と、Google Meetの議事録自動作成・実用レベルへの仕上げを学習。会議前後の準備・共有業務を効率化します。",
          },
          {
            no: "06",
            cat: "NotebookLM・資料活用",
            thumb: "/biz/assets/img/course/curriculum/gemini/c2-03.webp",
            h: "社内資料をナレッジAIに変える",
            tags: ["#資料の要約", "#ソース対話", "#ナレッジAI"],
            d: "マニュアル・議事録・企画書などの社内資料をNotebookLMに読み込ませ、要約や質問応答ができるナレッジAIを構築。Studioの音声解説やレポート生成で情報を探す時間を削減し、多角的に分析します。",
          },
        ],
      },
      {
        no: "STEP03",
        label: "定着と応用",
        cards: [
          {
            no: "07",
            cat: "DeepResearch・Canvas",
            thumb: "/biz/assets/img/course/curriculum/gemini/c4-01.webp",
            h: "高度なリサーチと成果物づくり",
            tags: ["#情報収集", "#Canvas", "#ビジュアル生成"],
            d: "DeepResearchで高度な情報収集・分析を行い、Canvasでインフォグラフィックや音声解説レポートへ変換。Nano BananaやVeoによる画像・動画生成まで、伝わる成果物づくりを学びます。",
          },
          {
            no: "08",
            cat: "まじん式プロンプト",
            thumb: "/biz/assets/img/course/curriculum/gemini/c5-03.webp",
            h: "スライド自動生成と自社仕様への最適化",
            tags: ["#プロンプト設計", "#スライド自動生成", "#テンプレ化"],
            d: "まじん式プロンプトの仕組みを理解し、GemとWebアプリの初期設定からスライド自動生成までを実践。カスタム設定で自社デザインに合わせ、資料作成を再現性ある仕組みにします。",
          },
        ],
      },
    ],
  },
  lessons: {
    learnHours: "5",
    freeHours: "20",
    chapterCount: 13,
    lessonCount: 67,
    items: [
      {
        no: 1,
        title: "イントロダクション",
        ch: 1,
        time: "3分",
        body: ["コース全体像と学習の進め方"],
      },
      {
        no: 2,
        title: "Geminiの基本と導入準備",
        ch: 4,
        time: "13分",
        body: [
          "なぜ今Geminiなのか（ChatGPTとの違い）",
          "基本画面とチャット操作の基礎",
          "無料版・有料版・Workspace版の比較",
          "業務特化AI「Gems」のカスタマイズ",
        ],
      },
      {
        no: 3,
        title: "Gemini for Google Workspace 実践活用",
        ch: 14,
        time: "49分",
        body: [
          "Workspace活用の全体像とセキュリティ",
          "Gmail：メールの要約・作成・返信",
          "Gmail：日程調整とタスク管理の自動化",
          "ドライブ：AI検索・要約と横断比較",
          "ドキュメント：文書作成と企画書化",
          "スプレッドシート：データ分析とAI関数",
          "スライド：骨子作成とデザイン洗練",
          "Meet：会議議事録の自動作成",
        ],
      },
      {
        no: 4,
        title: "Gemini DeepResearchとCanvas活用",
        ch: 7,
        time: "29分",
        body: [
          "DeepResearchによる高度な情報収集・分析",
          "Canvasでリサーチから資料作成へ",
          "Webページ・インフォグラフィックの生成",
          "クイズで理解度をチェック",
          "音声解説レポートの作成",
          "画像生成AI「Nano Banana」活用",
          "動画生成AI「Veo」活用",
        ],
      },
      {
        no: 5,
        title: "Canvas応用とプロンプト活用",
        ch: 7,
        time: "35分",
        body: [
          "Canvasでのスライド作成",
          "生成スライドの磨き上げ",
          "Google Sites連携でサイト構築",
          "まじん式プロンプトの仕組み",
          "導入セットアップ（Gem・Webアプリ）",
          "スライド自動生成の実践",
          "カスタム設定で自社デザインに最適化",
        ],
      },
      {
        no: 6,
        title: "AIリテラシーと倫理・リスク対策",
        ch: 3,
        time: "12分",
        body: [
          "リスク対策：情報漏洩・ハルシネーション・著作権",
          "AI時代の倫理とガバナンス",
          "まとめ：Geminiを業務パートナーにする",
        ],
      },
      {
        no: 7,
        title: "NotebookLMで社内資料を対話活用",
        ch: 3,
        time: "10分",
        body: [
          "NotebookLMとは何か・汎用AIとの違い",
          "できること【完成形デモ】",
          "最初のノートブック作成と画面操作",
        ],
      },
      {
        no: 8,
        title: "ソース登録とAIとの対話術",
        ch: 5,
        time: "16分",
        body: [
          "ソース追加：対応ファイルと上限",
          "ソース追加：実践アップロード",
          "Webから自動でソースを探す",
          "チャット機能：質問と引用",
          "メモ機能で思考を整理・保存",
        ],
      },
      {
        no: 9,
        title: "自動生成ビューで資料を多角分析",
        ch: 10,
        time: "38分",
        body: [
          "Studio：音声解説・動画解説で理解",
          "マインドマップで構造を掴む",
          "レポート：概要説明資料・学習ガイド",
          "レポート：ブログ投稿・独自作成",
          "おすすめの形式で新たな視点を発見",
          "フラッシュカード・テストで定着",
        ],
      },
      {
        no: 10,
        title: "応用テクニックでAIを賢く使う",
        ch: 5,
        time: "25分",
        body: [
          "回答精度を高める対話テクニック",
          "アイデアの壁打ち活用術",
          "競合分析レポート作成術",
          "自分だけの教科書づくり",
          "引用を使ったファクトチェック",
        ],
      },
      {
        no: 11,
        title: "組織での共有と現場での実践活用",
        ch: 6,
        time: "25分",
        body: [
          "ノートブックの共有方法",
          "組織で使う場合の注意点",
          "議事録＆レポート分析術",
          "取扱説明書で専用サポートAI構築",
          "社内規定で人事・総務AIアシスタント",
        ],
      },
    ],
  },
  plans: {
    lead: "Gemini研修は3つの研修プランでの受講が可能です。",
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
  faqs: COURSE_FAQS["gemini-training"],
};

export default function GeminiTrainingPage() {
  return <CourseLp data={course} />;
}
