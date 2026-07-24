import type { Metadata } from "next";
import { CourseLp, type CourseData } from "../_course/CourseLp";
import { COURSE_FAQS } from "../_course/courseFaqs";

export const metadata: Metadata = {
  title: "AIクリエイティブ研修（法人向け）| バイテック法人AI研修",
  description:
    "画像・バナー・デザイン素材を生成AIで内製化し、制作を高速化する法人向け研修。助成金活用にも対応。",
  alternates: { canonical: "/creative-ai-training" },
  openGraph: {
    title: "AIクリエイティブ研修（法人向け）| バイテック法人AI研修",
    description:
      "画像・バナー・デザイン素材を生成AIで内製化し、制作を高速化する法人向け研修。助成金活用にも対応。",
    url: "/creative-ai-training",
  },
};

const course: CourseData = {
  slug: "creative-ai-training",
  courseName: "AIクリエイティブ研修",
  hero: {
    background:
      "radial-gradient(120% 90% at 88% 108%, rgba(255, 190, 150, .5) 0%, rgba(255, 190, 150, 0) 55%), linear-gradient(118deg, #6a2c91 0%, #b33f8f 40%, #e0557a 66%, #f0803f 100%)",
    eyebrow: "画像・動画・デザイン制作を内製したい組織・チームにおすすめ。",
    title: "AIクリエイティブ研修",
    tag: "オンライン ｜ 助成金対応",
    toolLabel: "研修内使用ツール",
    toolLogo: "/biz/assets/img/index/plan/logo/creative.svg",
    toolAlt: "AIクリエイティブツール",
    visual: "/biz/assets/img/index/plan/graphic/creative.webp",
    visualAlt: "AIクリエイティブツールの活用イメージ（PC画面）",
    wideTitle: true,
  },
  docHref: "/doc-a",
  about: {
    title: "AIクリエイティブ研修とは？",
    subLead: (
      <>
        生成するだけで終わらせず、<br />
        <span className="ct-about__mark">成果につながるクリエイティブ</span>を内製する
      </>
    ),
    lead: "画像・バナー・デザイン素材を生成AIで内製化し、企画からビジュアル制作までを高速化。デザイン初心者でも、現場ですぐに使えるクリエイティブ制作スキルを体系的に習得できる法人向け研修です。",
    cards: [
      {
        no: "01",
        h: "画像生成の基礎から\n狙い通りの素材をつくる",
        thumb: "/biz/assets/img/course/about/creative-ai-01.webp",
        d: "構図・色・質感を言葉で伝える基本から学び、広告やSNSに使える人物・背景・商品素材を生成。偶然に頼らず、意図した見た目へ近づける力が身につきます。",
      },
      {
        no: "02",
        h: "編集・デザイン・動画まで\n制作工程を効率化",
        thumb: "/biz/assets/img/course/about/creative-ai-02.webp",
        d: "生成した画像の修正、レイアウト、サイズ展開、短尺動画への活用まで実践。企画から仕上げまでの手戻りを減らし、制作時間を短縮できます。",
      },
      {
        no: "03",
        h: "ブランドに合わせた制作を\n社内で再現できる",
        thumb: "/biz/assets/img/course/about/creative-ai-03.webp",
        d: "色・文字・写真の雰囲気をそろえる指示と確認方法を習得。担当者が変わっても品質がぶれにくい制作の型をつくり、継続的な発信へつなげます。",
      },
    ],
  },
  spec: [
    { ja: "試聴時間", value: <>約<b>12</b>時間</> },
    { ja: "レッスン数", value: <>全<b>108</b>レッスン</> },
    { ja: "受講形式", value: <>オンライン</> },
    { ja: "使用ツール", value: <>生成AI各種</> },
  ],
  recommend: {
    sub: "制作工程へAIを取り入れ、画像・デザイン・動画を速く安定して発信できる状態へ",
    nowrapSub: true,
    cards: [
      {
        h: "広告・SNS素材を社内で素早く作りたいチーム",
        d: "キャンペーンごとのバナー、投稿画像、サムネイルを必要なタイミングで用意したいマーケティング・広報チームに適しています。",
      },
      {
        h: "案出しと素材制作を効率化したい制作チーム",
        d: "構想、ラフ、人物・背景素材、サイズ違いの展開をAIで効率化。デザイナーが仕上げや判断へ時間を使える制作工程をつくります。",
      },
      {
        h: "短尺動画や広告動画まで内製したい組織",
        d: "静止画だけでなく、生成素材から短い動画をつくるところまで社内対応したい組織に。画像と動画をつなぐ制作手順を学びます。",
      },
      {
        h: "生成物の品質とブランド統一に課題がある組織",
        d: "担当者ごとに見た目がばらつく、修正回数が多いといった課題を解消。指示、編集、確認の型を整え、安定した制作へつなげます。",
      },
    ],
  },
  curriculum: {
    sub: (
      <>
        生成AIによるクリエイティブ制作を成果につなげるための<br />
        <em>『3つのステップ』</em>
      </>
    ),
    steps: [
      {
        no: "STEP01",
        label: "生成AIの基礎",
        cards: [
          {
            no: "01",
            cat: "生成AI×クリエイティブ",
            thumb: "/ai-image-creator-static/files/スクリーンショット-2025-12-06-16.39.57.webp",
            h: "生成AIによる制作の全体像とツール選定",
            tags: ["#生成AIとは", "#ツール選定", "#制作フロー"],
            d: "画像・デザイン・動画それぞれの主要ツールの特性を整理し、生成AIでできること・得意不得意を理解。自社の制作フローのどこに組み込むかを見極める判断軸を身につけます。",
          },
          {
            no: "02",
            cat: "画像生成の基礎",
            thumb: "/ai-image-creator-static/files/スクリーンショット-2025-12-06-14.40.27.webp",
            h: "狙ったビジュアルを出すプロンプト設計",
            tags: ["#プロンプト設計", "#Midjourney", "#再現性"],
            d: "曖昧な指示で終わらせず、狙ったビジュアルを安定して得るためのプロンプトの型を習得。作風・構図・参照画像のコントロールまで踏み込み、再現性の高い制作を実現します。",
          },
        ],
      },
      {
        no: "STEP02",
        label: "画像・デザイン制作",
        cards: [
          {
            no: "03",
            cat: "画像生成",
            thumb: "/ai-image-creator-static/files/スクリーンショット-2025-12-06-14.59.00.webp",
            h: "高品質・商用画像の生成（Flux / SD）",
            tags: ["#Flux", "#StableDiffusion", "#商用画像"],
            d: "Flux.1・Stable Diffusionで、製品画像・人物・ロゴなど商用クオリティのビジュアルを生成。モデルやパラメータの使い分けにより、用途に合わせた品質を安定して出力できるようにします。",
          },
          {
            no: "04",
            cat: "画像編集・加工",
            thumb: "/ai-image-creator-static/files/スクリーンショット-2026-02-09-21.30.56.webp",
            h: "レタッチ・画質向上の内製化",
            tags: ["#NanoBanana", "#LoRA", "#レタッチ"],
            d: "Nano Bananaによる背景差し替えやレタッチ、LoRA・高解像度化による画質向上を習得。これまで外注していた画像編集・修正を、社内でスピーディに完結できる体制をつくります。",
          },
          {
            no: "05",
            cat: "デザイン制作",
            thumb: "/ai-image-creator-static/files/スクリーンショット-2025-12-06-15.22.34.webp",
            h: "バナー・SNS・資料のデザイン制作（Canva）",
            tags: ["#Canva", "#バナー", "#資料作成"],
            d: "Canvaで販促バナー・SNS投稿・提案資料までを効率的に制作。生成AI機能やテンプレートを活用し、非デザイナーでも一定品質のクリエイティブを量産できる制作フローを学びます。",
          },
        ],
      },
      {
        no: "STEP03",
        label: "動画・応用",
        cards: [
          {
            no: "06",
            cat: "動画生成・編集",
            thumb: "/ai-movie-creator-static/files/スクリーンショット-2025-12-06-17.13.16.webp",
            h: "販促動画の生成・構成・編集",
            tags: ["#動画生成", "#構成設計", "#販促動画"],
            d: "Runway・Veo 3・Soraなど主要AI動画ツールで映像を生成し、構成設計とプロンプトで狙い通りの販促動画に仕上げます。企画から編集までを社内で回せるスキルを習得します。",
          },
          {
            no: "07",
            cat: "応用・内製化",
            thumb: "/ai-image-creator-static/files/スクリーンショット-2025-12-06-16.59.49.webp",
            h: "構図制御と独自LoRAで制作を高度化",
            tags: ["#ControlNet", "#独自LoRA", "#内製化"],
            d: "ControlNetによる構図・ポーズの制御や、自社ブランドに合わせた独自LoRAの構築を習得。生成のばらつきを抑え、ブランドトーンを統一した制作を内製で継続できる状態を目指します。",
          },
        ],
      },
    ],
  },
  lessons: {
    learnHours: "12",
    freeHours: "12",
    chapterCount: 35,
    lessonCount: 108,
    items: [
      {
        no: 1,
        title: "生成AIクリエイティブの全体像とツール選定",
        ch: 1,
        time: null,
        body: [
          "生成AIでできること・得意不得意の理解",
          "画像・デザイン・動画ツールの全体像",
          "制作フローへの生成AIの組み込み方",
          "商用利用・著作権の基礎",
        ],
      },
      {
        no: 2,
        title: "Midjourneyによる画像生成の基礎",
        ch: 3,
        time: "約1時間",
        body: [
          "基本的な使い方と料金プランの選定",
          "プロンプトの基本",
          "芸術性・作風のコントロール",
          "画像参照の使い方",
          "生成アクションの活用",
          "PersonalizeとMoodBoard",
          "Draftモードと便利機能",
          "Editモードによる部分調整",
        ],
      },
      {
        no: 3,
        title: "Flux.1による高品質・商用画像の生成",
        ch: 4,
        time: "約1.2時間",
        body: [
          "Flux.1の概要と特徴",
          "主要な画像生成AIとの違い",
          "3つのモデルの使い分け",
          "利用環境・サービスの選定",
          "Flux.1のプロンプトの書き方",
          "人物画像の作成",
          "商用クオリティの製品画像制作",
          "ブランドロゴの作成",
        ],
      },
      {
        no: 4,
        title: "Stable Diffusionによる制御性の高い画像生成",
        ch: 4,
        time: "約1.2時間",
        body: [
          "Stable Diffusionの概要と環境準備",
          "基本パラメータの理解",
          "モデルの理解と選定",
          "プロンプトの基礎",
          "構図とポーズの指定",
          "ChatGPTを活用したプロンプト作成",
          "img2imgの活用",
          "画像生成の実践",
        ],
      },
      {
        no: 5,
        title: "Nano Bananaによる画像編集・レタッチの内製化",
        ch: 3,
        time: "約1時間",
        body: [
          "Nano Bananaの特徴と使い方",
          "プロンプト作成のコツ",
          "レタッチ・修正の効率化",
          "背景・ロケーションの差し替え",
          "光と構図の調整",
          "バリエーション展開",
          "テキスト描画と情報の可視化",
          "キャラクター・スタイルの一貫性維持",
        ],
      },
      {
        no: 6,
        title: "画質向上テクニックとLoRA活用",
        ch: 1,
        time: "約30分",
        body: [
          "顔補正とFreeUによるブラッシュアップ",
          "Hires.fixによる高解像度化",
          "VAE・CLIP SKIPによる品質調整",
          "LoRAの活用",
        ],
      },
      {
        no: 7,
        title: "ControlNetによる構図制御と独自LoRA構築",
        ch: 3,
        time: "約1.2時間",
        body: [
          "ControlNetの概要",
          "すぐに役立つControlNet機能",
          "輪郭・奥行き情報からの画像生成",
          "参照画像による画像制御",
          "独自LoRAの作り方",
          "LoRAの確認方法",
        ],
      },
      {
        no: 8,
        title: "Canvaによるデザイン制作の基礎",
        ch: 3,
        time: "約50分",
        body: [
          "Canvaのはじめ方と商用利用",
          "テキスト編集の基本",
          "図形を使いこなす",
          "画像を編集する",
          "デザインを編集する",
          "便利機能で時短デザイン",
          "写真加工テクニック",
        ],
      },
      {
        no: 9,
        title: "バナー・SNS・広告クリエイティブの量産",
        ch: 3,
        time: "約50分",
        body: [
          "Instagramデザインの基本操作",
          "投稿デザインの作成",
          "生成AIによる画像作成",
          "生成画像の編集",
          "マジック生成で画像を作る",
          "マジック生成で動画を作る",
        ],
      },
      {
        no: 10,
        title: "提案資料・動画コンテンツのデザイン制作",
        ch: 2,
        time: "約40分",
        body: [
          "Canvaのプレゼンテーション",
          "3つのプレゼン方法",
          "Canvaの動画編集でできること",
          "動画への音声・BGM挿入",
        ],
      },
      {
        no: 11,
        title: "AI動画生成の基礎と主要ツール活用",
        ch: 1,
        time: "約1時間",
        body: [
          "主要AI動画ツールの全体像",
          "Runwayによる映像制作",
          "Pikaによるスタイリッシュな演出",
          "Veo 3による高品質映像",
          "Soraによるストーリー映像",
          "Klingによる滑らかな動き",
          "用途に合うツールの選定",
        ],
      },
      {
        no: 12,
        title: "動画構成・プロンプト設計と販促動画制作",
        ch: 2,
        time: "約1.5時間",
        body: [
          "動画構成の基本と骨組み設計",
          "視聴者をつかむ導入設計",
          "本編の情報整理・設計",
          "印象を残す締めの設計",
          "プロンプトの基本構造",
          "目的を反映するプロンプト設計",
          "品質を高める追加情報の入れ方",
          "生成失敗の原因とリカバリー",
        ],
      },
    ],
  },
  plans: {
    lead: "AIクリエイティブ研修は3つの研修プランでの受講が可能です。",
    primary: [
      { name: "AI効率化研修", amount: "200,000", unit: "円〜／名" },
      { name: "AI自動化研修", amount: "300,000", unit: "円〜／名" },
    ],
    single: { name: "eラーニング", amount: "100,000", unit: "円〜／名" },
  },
  faqs: COURSE_FAQS["creative-ai-training"],
};

export default function CreativeAiTrainingPage() {
  return <CourseLp data={course} />;
}
