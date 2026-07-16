// セミナーアーカイブの共有データ層。
// アーカイブ一覧(app/biz/archive)と個別ページ(app/biz/seminars/[slug])の両方がここを参照する。
//
// セミナー内容は株式会社AI棒の公開済みセミナーページをもとに管理する。
// サムネイルは既存デザインのプレースホルダーを使用し、元サイトの画像・デザインは持ち込まない。
// formAction はセミナーごとの formrun 送信先URL。個別URLの発行後は各データの値だけ差し替える。
//
// ── なぜ「コード内データ配列」なのか / microCMS への移行について ─────────────
// このサイトは静的HTML配信・パフォーマンス最適化前提のため、まずはリポジトリ内の
// データ配列で管理する。開催頻度が上がる / 非エンジニアが登録するようになったら、
// この getAllSeminars() / getSeminar() の中身を microCMS 等の fetch に差し替えるだけで
// ページ側(一覧・個別)は無改修で移行できる（データソースを1ファイルに閉じ込めてある）。

export type Seminar = {
  slug: string;
  title: string;
  lead: string; // サブタイトル／キャッチコピー
  tag: string;
  date: string; // 収録日 例: "2026.05.20"
  duration: string; // 動画時間 例: "58分"
  audience: string; // 対象者
  fee: string; // 参加費 例: "無料"
  thumbLabel: string; // 実サムネ未設定時のダミー表示テキスト
  thumb?: string; // サムネイル画像パス（実データ投入時に設定）
  overview: string[]; // 「このセミナーについて」段落
  cardPoints: [string, string]; // 一覧カードで内容・成果を端的に伝える2つのポイント
  recommendedFor: string[]; // 「こんな方におすすめ」
  speaker: {
    name: string;
    role: string;
    bio: string;
    photo?: string;
  };
  program: { title: string; body: string }[]; // プログラム/内容
  // 申込フォーム(formrun)の送信先。送信後に視聴URLをメールで配布する運用。
  formAction: string;
};

export const SEMINARS: Seminar[] = [
  {
    slug: "seminar-6",
    title: "【無料ウェビナー】AI時代のLP制作 〜Codexでの制作からネットに公開するまで〜",
    lead: "Codexと作る、これからのLP制作。",
    tag: "AIツール活用",
    date: "2026.06.13",
    duration: "約90分",
    audience: "Codexを使ったLP制作とネット公開を一通り体験したい方",
    fee: "無料",
    thumbLabel: "CODEX × LP",
    thumb: "/biz/assets/img/seminars/seminar-6.webp",
    overview: [
      "「LPをCodexで作ってみたい」という方に向けた実践型のウェビナーです。AIを使ってLPを制作し、自分のパソコン上で動かすだけでなく、実際にネット上へ公開するまでの一連の流れを体験します。",
      "HTMLやCSSといった細かなコーディング知識は不要です。Codexを使ってLPを形にし、公開先サービスの選び方や公開手順までまとめて学べます。",
    ],
    cardPoints: [
      "CodexでLPをゼロから制作できる",
      "完成したLPをネット公開するまで実践",
    ],
    recommendedFor: [
      "Codexを使ってLPを作ってみたい方",
      "作ったページをネット上に公開する方法を知りたい方",
      "どの公開サービスを選べばよいか迷っている方",
    ],
    speaker: {
      name: "田中 講師",
      role: "AIエンジニア｜AI開発・ClaudeCode・Codex",
      bio: "Codexを活用した制作フローを、コーディング未経験者にもわかりやすく解説します。",
      photo: "/biz/assets/img/seminars/speakers/tanaka.webp",
    },
    program: [
      { title: "CodexでLPを制作する流れ", body: "Codexへの指示からLPを形にするまでの基本的な制作フローを学びます。" },
      { title: "LPをネットに公開する手順", body: "ローカルで作ったLPを、実際にネット上へ公開するまでを体験します。" },
      { title: "公開先サービスの選び方", body: "無料で始めやすいサービスと、LP公開に向いているサービスの違いを整理します。" },
    ],
    formAction: "https://form.run/api/v1/r/29rr531p3vq5hc13jvy0xlej",
  },
  {
    slug: "seminar-5",
    title: "【無料ウェビナー】ChatGPT Codexで作る、伝わるプレゼン資料の作り方",
    lead: "NotebookLMやClaudeの“もう一歩”を、Codexで解決。",
    tag: "AIツール活用",
    date: "2026.05.14",
    duration: "—",
    audience: "AIでプレゼン資料を効率よく、見やすく仕上げたい方",
    fee: "無料",
    thumbLabel: "CODEX × SLIDES",
    thumb: "/biz/assets/img/seminars/seminar-5.webp",
    overview: [
      "ChatGPT Codexを使って“伝わる”プレゼン資料を生成する方法から、Canvaで細部を仕上げる方法までを扱う実践ウェビナーです。",
      "資料作成の流れをその場で再現し、スプレッドシートも活用しながら、“1枚ずつ作る”から“まとめて作る”へと制作のスピードと完成度を引き上げます。",
    ],
    cardPoints: [
      "Codexで伝わるスライドをまとめて生成",
      "Canvaで見栄えよく仕上げる方法も解説",
    ],
    recommendedFor: [
      "NotebookLMでは日本語がうまく出力されず困っている方",
      "Claudeでは見た目を整えにくいと感じている方",
      "スライドを1枚ずつ手直しする時間を減らしたい方",
    ],
    speaker: {
      name: "池田 講師",
      role: "AIエンジニア｜ClaudeCode・Dify",
      bio: "ChatGPT Codexによる資料生成と、Canvaを使った仕上げまでの実践的な制作フローを解説します。",
      photo: "/biz/assets/img/seminars/speakers/ikeda.webp",
    },
    program: [
      { title: "Codexでプレゼン資料を生成", body: "ChatGPT Codexを使い、複数のスライドをまとめて生成する方法を学びます。" },
      { title: "自然な日本語スライドの作り方", body: "違和感の少ない文章と、伝わりやすい構成へ整えるポイントを紹介します。" },
      { title: "Canvaで細部を仕上げる", body: "生成した資料の見た目をCanvaで仕上げ、業務や発信に使える状態にします。" },
    ],
    formAction: "https://form.run/api/v1/r/tvultfqt44qfbm0rsur2a4va",
  },
  {
    slug: "seminar-4",
    title: "【無料ウェビナー】スプレッドシートで画像量産化計画",
    lead: "スプレッドシート × Gemで、スライド・イラストをAIで量産する。",
    tag: "AIツール活用",
    date: "2026.05.01",
    duration: "—",
    audience: "スライドやバナー画像を効率よく量産したい方",
    fee: "無料",
    thumbLabel: "GEMINI × IMAGE",
    thumb: "/biz/assets/img/seminars/seminar-4.webp",
    overview: [
      "スライド画像やイラスト画像など、同じパターンの画像を大量に用意したいという課題を、AIと仕組みで解決する実践ウェビナーです。",
      "スプレッドシートとGemを組み合わせ、画像制作を“量産ライン化”するための具体的な手法を、画像・動画生成のプロが解説します。",
    ],
    cardPoints: [
      "スプレッドシート × Gemで画像を一括生成",
      "参考画像から狙ったデザインを再現",
    ],
    recommendedFor: [
      "スライド資料やバナー画像を効率よく量産したい方",
      "AIを使った画像生成の基本構造から学び直したい方",
      "サンプル画像をもとに思い通りのビジュアルを作りたい方",
      "画像制作の時間を圧縮し、本来の業務に集中したい方",
    ],
    speaker: {
      name: "椿 講師",
      role: "AIクリエイター｜画像・動画生成",
      bio: "画像・動画生成のプロフェッショナルとして数多くのクリエイティブ制作に携わる。スプレッドシートとGemを掛け合わせた画像量産メソッドを解説します。",
    },
    program: [
      { title: "画像生成の基本構造", body: "安定して画像を生成するために押さえておきたい基本構造を理解します。" },
      { title: "サンプル画像からビジュアルを再現", body: "参考画像をもとに、自分が作りたいビジュアルへ近づける方法を学びます。" },
      { title: "スプレッドシートによる画像量産", body: "スプレッドシートとGemを活用し、スライド画像を量産するフローを構築します。" },
    ],
    formAction: "https://form.run/api/v1/r/37hslq2ub6r8ipv7lso01ftd",
  },
  {
    slug: "seminar-1",
    title: "【無料ウェビナー】動画編集ソフトは、もういらない。ClaudeCodeとRemotionで「指示するだけ」の動画制作入門",
    lead: "『動画編集ソフトは、もういらない。』",
    tag: "AIツール活用",
    date: "2026.04.17",
    duration: "—",
    audience: "動画編集の手間を減らし、AIへの指示で動画を作りたい方",
    fee: "無料",
    thumbLabel: "CLAUDE CODE × VIDEO",
    thumb: "/biz/assets/img/seminars/seminar-1.webp",
    overview: [
      "動画編集ソフトに頼らず、Claude CodeとRemotionを活用して“指示するだけ”で動画を制作する方法を学ぶ入門ウェビナーです。",
      "撮影動画への字幕割り当てや、画像をつないだAI動画風コンテンツの制作を、AI業務効率化のプロが実践的に解説します。",
    ],
    cardPoints: [
      "Claude Codeで字幕・映像編集を自動化",
      "繰り返し使える指示テンプレートを作成",
    ],
    recommendedFor: [
      "動画編集ソフトの複雑な操作を減らしたい方",
      "撮影動画への字幕付けを自動化したい方",
      "画像素材からAI動画風コンテンツを作りたい方",
      "繰り返し使える動画制作の指示テンプレートが欲しい方",
    ],
    speaker: {
      name: "田中 講師",
      role: "AIエンジニア｜AI開発・ClaudeCode・Codex",
      bio: "AI業務効率化のプロとして、Claude CodeとRemotionを活用した動画制作を実演・解説します。",
      photo: "/biz/assets/img/seminars/speakers/tanaka.webp",
    },
    program: [
      { title: "字幕を自動で割り当てる", body: "撮影した動画に字幕を自動で割り当てる方法を紹介します。" },
      { title: "画像からAI動画風コンテンツを作る", body: "複数の画像をつなぎ、動画コンテンツとして仕上げる流れを学びます。" },
      { title: "Claude Code専用の指示テンプレート", body: "動画制作で繰り返し使える、専用の指示テンプレートの作り方を解説します。" },
    ],
    formAction: "https://form.run/api/v1/r/6dmczxo1xen6x7z6q2emzl4c",
  },
  {
    slug: "seminar-2",
    title: "【無料ウェビナー】Claude Cowork実践入門｜ファイル整理・データ処理・資料作成をAIで自動化",
    lead: "『SaaS株43兆円を消し飛ばしたAIを触る夜』",
    tag: "AIツール活用",
    date: "2026.03.20",
    duration: "—",
    audience: "話題のAIエージェントClaude Coworkを実際の業務で試したい方",
    fee: "無料",
    thumbLabel: "CLAUDE COWORK",
    thumb: "/biz/assets/img/seminars/seminar-2.webp",
    overview: [
      "2026年2月、SaaS関連株から43兆円を消し飛ばした震源地として話題になった「Claude Cowork」を、まだ触ったことがない方に向けたウェビナーです。",
      "ファイル整理、データ処理、経費表作成、スライド生成、メール対応など、実務で役立つ使い方をAI業務効率化のプロがライブデモで実演します。",
    ],
    cardPoints: [
      "ファイル整理・データ突合をAIに任せる",
      "経費表・スライド・メール下書きも自動化",
    ],
    recommendedFor: [
      "Claude Coworkが話題なのは知っているが、まだ触れていない方",
      "ファイル整理やデータ突合をAIで自動化したい方",
      "経費表やスライド作成の時間を減らしたい方",
      "Gmail対応まで含めたAI連携に興味がある方",
    ],
    speaker: {
      name: "野口 講師",
      role: "AIコンサルタント｜ClaudeCode・Gemini",
      bio: "AI業務効率化のプロとして、Claude Coworkによる実務自動化をライブデモで解説します。",
    },
    program: [
      { title: "ファイル整理とデータ突合", body: "ダウンロードフォルダの自動整理と、銀行CSV・請求書PDFの突合を実演します。" },
      { title: "経費表とスライドの自動生成", body: "領収書写真からのExcel経費表作成と、PowerPointスライド生成を紹介します。" },
      { title: "Gmailの未返信メール対応", body: "未返信メールをAIが検出し、返信の下書きまで作る連携方法を解説します。" },
    ],
    formAction: "https://form.run/api/v1/r/jnvybqixep2n7hd21rc2arpo",
  },
  {
    slug: "seminar-3",
    title: "【無料ウェビナー】AIに直接ツールを操作させて単純作業から解放される方法",
    lead: "Claudeを活用した業務効率化術を身に付けたい方へ。",
    tag: "AIツール活用",
    date: "2025.12.19",
    duration: "—",
    audience: "生成AIの回答を転記する単純作業をなくし、業務を自動化したい方",
    fee: "無料",
    thumbLabel: "AI × AUTOMATION",
    thumb: "/biz/assets/img/seminars/seminar-3.webp",
    overview: [
      "生成AIの結果をドキュメントなどへ手作業でコピー＆ペーストする面倒をなくし、AIに直接ツールを操作させる方法を学ぶウェビナーです。",
      "さまざまなツールと生成AIを連携させ、単純作業を自動化して、AIを業務で活用できている状態へ進むための考え方と方法を解説します。",
    ],
    cardPoints: [
      "AIがツールを直接操作する仕組みを理解",
      "コピペや転記などの単純作業を削減",
    ],
    recommendedFor: [
      "生成AIの回答を手作業でコピー＆ペーストしている方",
      "生成AIと普段使うツールを簡単につなぎたい方",
      "AIを使っていても業務効率化を実感できていない方",
      "さまざまな単純作業を自動化したい方",
    ],
    speaker: {
      name: "池田 講師",
      role: "AIエンジニア｜ClaudeCode・Dify",
      bio: "生成AIと各種ツールを連携し、日々の単純作業を自動化する実践的な方法を解説します。",
      photo: "/biz/assets/img/seminars/speakers/ikeda.webp",
    },
    program: [
      { title: "生成AIとツールのつなぎ方", body: "いろいろなツールと生成AIを簡単に連携させる方法を学びます。" },
      { title: "コピー＆ペースト作業をなくす", body: "生成AIの回答を手作業で転記する工程をなくす方法を解説します。" },
      { title: "作業自動化の実践", body: "複数のツールをまたぐ作業を自動化するためのポイントを紹介します。" },
    ],
    formAction: "https://form.run/api/v1/r/roka9v546izyr57okvgc3xmn",
  },
];

export function getAllSeminars(): Seminar[] {
  return SEMINARS;
}

export function getSeminar(slug: string): Seminar | undefined {
  return SEMINARS.find((s) => s.slug === slug);
}
