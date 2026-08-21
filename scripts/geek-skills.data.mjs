// おすすめSkills のコンテンツ定義。
// ここに1件足して `node scripts/build-geek-skills.mjs` を実行すると、
// 個別ページ・一覧ページ・トップのカードがまとめて生成される。
// 動画サムネは public/geek-static/files/skills/<slug>-thumb.webp に置く
//   例) curl -s -o /tmp/t.jpg "https://i.ytimg.com/vi/<動画ID>/oar2.jpg"
//       cwebp -q 78 -resize 540 960 /tmp/t.jpg -o public/geek-static/files/skills/<slug>-thumb.webp

export const SKILLS = [
  {
    slug: 'frontend-design',
    name: 'frontend-design',
    repo: 'anthropics/skills',
    install: 'npx skills add anthropics/skills --skill frontend-design',
    video: { id: 'g8omXFMmlz8', uploadDate: '2026-08-22', videoName: 'skills vol2｜frontend-designで量産型UIから抜ける' },
    card: {
      tag: 'UI・デザイン',
      icon: 'palette',
      desc: 'AIが作りがちな量産型のUIを、先に方向性を決めさせることで「狙いのある見た目」に変えるAnthropic公式Skill。',
    },
    title: 'frontend-designとは｜AIの量産型UIを狙いのあるデザインに変える公式Skill',
    description:
      'Anthropic公式Skill「frontend-design」の解説。実装前にデザインの方向性を決めさせ、ありがちなフォントや配色を避けさせることで、意図のあるUIに寄せてくれます。導入コマンドと使いどころ、向かない場面まで動画つきでまとめました。',
    ogDescription:
      'AIが作る量産型のUIを、狙いのあるデザインに変えるAnthropic公式Skill。導入は1行、使いどころを解説します。',
    h1: 'frontend-designとは｜AIが作る量産型UIを<span class="u-text-orange">狙いのあるデザイン</span>に変える公式Skill',
    lead:
      'AIにUIを作らせると、どれも似たフォントと配色で量産型の見た目になりがちです。<b>frontend-design</b>は、作る前にデザインの方向性を決めさせ、ありがちな表現を避けさせることで、意図のある見た目に寄せてくれます。',
    meta: [
      ['提供', 'anthropics/skills（Anthropic公式）'],
      ['導入実績', '全期間ランキング3位 ／ 累計80万インストール'],
      ['対応ツール', 'Claude Code ／ Cursor ／ Codex など'],
      ['出力', 'HTML・CSS・React・Vue の動くコード'],
    ],
    summary: [
      'frontend-designは、<b>実装前にデザインの方向性を決めさせる</b>ことで、AIが作るUIを量産型から引き上げるAnthropic公式のSkill。',
      'ブルータリストやラグジュアリーなど<b>美的な方向を先に選ばせて</b>、画面全体の統一感を出す。',
      '<b>使い古されたフォントやクリシェな配色を避ける</b>と本文に明記されている。',
      '<b>01/02/03のような連番は、順序に意味がある時だけ使う</b>と指示されている。',
      'HTML・CSS・React・Vueで<b>実際に動くコード</b>まで生成する。',
      '導入は<b>npx skills add anthropics/skills --skill frontend-design</b>の1行。',
    ],
    what: [
      'frontend-designは、AIが作るUIの見た目を<b>「狙いのあるデザイン」に寄せる</b>ためのSkillです。Anthropicが公開している <code>anthropics/skills</code> に含まれる公式Skillで、Claude CodeなどのコーディングエージェントにSkillとして追加して使います。',
      'AIにUIを任せると、指示がないぶん無難な選択に寄り、似たフォント・似た配色・似た余白の画面ばかりが出てきます。動くものはできても、「どこかで見たことのある見た目」から抜け出せません。',
      'frontend-designは、コードを書き始める前に<b>美的な方向性を決めさせ、ありがちな表現を避けさせます</b>。方向が決まってから実装に入るため、画面同士の統一感が出て、意図の伝わるUIになります。',
    ],
    points: [
      ['先に方向性を決める', 'ブルータリストやラグジュアリーなど、実装前に美的な方向を選ばせて統一感を出します。あとから全体のトーンを直す手戻りが減ります。'],
      ['避けるものが明記されている', '使い古されたフォントやクリシェな配色を避ける、と本文にはっきり書かれています。「なんとなく無難」に流れる余地を、あらかじめ潰してあります。'],
      ['連番は意味がある時だけ', '01/02/03のような番号は順序に意味がある時だけ使う、と指示されています。装飾のための番号が増えず、情報の意味が濁りません。'],
      ['動くコードまで出す', 'HTMLやCSS、React、Vueで実際に動くコードまで生成してくれます。方向性の議論だけで終わらず、そのまま実装に移れます。'],
      ['Anthropic公式・全期間3位', '<code>anthropics/skills</code> 提供の公式Skillで、全期間ランキング3位、累計80万インストールの実績があります。'],
    ],
    steps: [
      ['Skillを追加する', '上のコマンドを実行し、使っているコーディングエージェントにfrontend-designを追加します。'],
      ['作りたい画面を伝える', '何の画面を、誰に向けて作るのかを伝えます。ここで用途が具体的なほど方向性が決まりやすくなります。'],
      ['方向性を決める', 'ブルータリスト、ラグジュアリーなど、提示された美的な方向から選びます。ここが量産型を避ける分かれ目です。'],
      ['コードを受け取って詰める', 'HTML・CSS・React・Vueなどの動くコードが出てくるので、実際の画面を見ながら細部を詰めます。'],
    ],
    fit: {
      good: [
        'ClaudeやCursorで作るUIが量産型に見えて困っている人',
        'サービスの世界観に合った見た目まで、AIに任せたい人',
        '画面が増えるほどトーンがバラバラになるのを防ぎたいチーム',
      ],
      bad: [
        '素早く最低限のUIだけ欲しい場面では、方向性を決める工程が回りくどく感じることがあります',
        '既存デザインシステムに完全準拠させたい場合（方向性はすでに決まっているため）',
      ],
    },
    note: '素早く最低限のUIだけ欲しい場面では、方向性を決める工程が回りくどく感じることがあります。プロトタイプか、実際に人に見せる画面かで使い分けてください。',
    faq: [
      ['frontend-designは何をしてくれるSkillですか？', '実装前にデザインの方向性を決めさせ、使い古されたフォントやクリシェな配色を避けさせることで、AIが作るUIを量産型から引き上げます。HTML・CSS・React・Vueの動くコードまで生成します。'],
      ['どうやって導入しますか？', 'ターミナルで <code>npx skills add anthropics/skills --skill frontend-design</code> を実行します。Claude Code、Cursor、Codex などのコーディングエージェントで利用できます。'],
      ['デザインの知識がなくても使えますか？', '使えます。方向性の選択肢が提示されるため、ゼロから美的判断を組み立てる必要はありません。用途と相手を具体的に伝えるほど、選びやすくなります。'],
      ['どんな場面に向きませんか？', '素早く最低限のUIだけ欲しい場面では、方向性を決める工程が回りくどく感じることがあります。'],
    ],
  },
  {
    slug: 'grill-me',
    name: 'grill-me',
    repo: 'mattpocock/skills',
    install: 'npx skills add mattpocock/skills --skill grill-me',
    video: { id: 'm5y-UmS9DNM', uploadDate: '2026-08-22', videoName: 'skills vol.1｜grill-meで計画を質問攻めにする' },
    card: {
      tag: '計画レビュー',
      icon: 'question',
      desc: 'AIが立てた計画に容赦なく質問を重ね、決定の分岐を一つずつたどって、実装前に弱点をあぶり出すSkill。',
    },
    title: 'grill-meとは｜AIが立てた計画を質問攻めで検証するSkill',
    description:
      'Skill「grill-me」の解説。AIが立てた計画に容赦なく質問を重ね、決定の分岐を一つずつたどって実装前に弱点をあぶり出します。導入コマンド、使いどころ、向かない場面まで動画つきでまとめました。',
    ogDescription:
      'AIが立てた計画に質問を重ね、決定の分岐を一つずつたどって実装前に弱点をあぶり出すSkill。導入は1行、使いどころを解説します。',
    h1: 'grill-meとは｜AIが立てた計画を<span class="u-text-orange">質問攻めで検証</span>するSkill',
    lead:
      'AIに計画を作らせると、それらしく見えても穴が残ったまま実装に進んでしまうことがあります。<b>grill-me</b>はその計画に容赦なく質問を重ね、決定の分岐を一つずつたどって、実装前に弱点をあぶり出します。',
    meta: [
      ['提供', 'mattpocock/skills'],
      ['導入実績', '累計92万インストール'],
      ['対応ツール', 'Claude Code ／ Cursor ／ Codex など'],
      ['使いどころ', '設計レビュー・実装前の計画検証'],
    ],
    summary: [
      'grill-meは、<b>AIが立てた計画を質問攻めで検証する</b>Skill。実装に進む前に穴を見つけられる。',
      '計画や設計の各所に深掘りの質問を重ね、<b>認識がそろうまで問い続ける</b>。',
      '決定の<b>分岐を一つずつたどって</b>検証するため、見落とした前提が表に出る。',
      '疑問があれば<b>コードベースを自分で読みに行く</b>ので、何度も聞き返される手間が少ない。',
      '導入は<b>npx skills add mattpocock/skills --skill grill-me</b>の1行。累計92万インストール。',
      '質問が続く仕組みのため、<b>素早く手を動かしたい場面には向かない</b>。',
    ],
    what: [
      'grill-meは、<b>AIが立てた計画を質問攻めで検証してくれる</b>Skillです。<code>mattpocock/skills</code> に含まれ、Claude CodeなどのコーディングエージェントにSkillとして追加して使います。',
      'AIに計画を作らせると、体裁は整っていても、前提の取り違えや決めきれていない分岐が残ったまま実装に進んでしまうことがあります。動くものはできても、あとから「そこは想定と違った」と手戻りが発生する、という失敗です。',
      'grill-meは、その計画に対して容赦なく質問を重ねます。<b>実装前に弱点をあぶり出す</b>ことが目的で、レビュアーが厳しく詰めてくれる状態を、そのままAIとの作業に持ち込めます。',
    ],
    points: [
      ['計画を質問で詰める', '計画や設計の各所に深掘りの質問を重ね、認識がそろうまで問い続けます。曖昧なまま流れていた決定が、言語化されて表に出ます。'],
      ['分岐を枝ごとに検証する', '決定の分岐を一つずつたどり、お互いの理解が一致するまで確認します。「この条件のときはどうする？」が後回しになりません。'],
      ['コードを自分で読みに行く', '疑問があればコードベースを読みに行くため、こちらが同じ説明を何度も繰り返す手間が減ります。'],
      ['実装前のチェックに向く', '設計レビューや実装前の計画検証で、後の手戻りを防ぐ用途に向いています。書き始めてからの作り直しより、はるかに安く済みます。'],
      ['1行で追加できる', '<code>mattpocock/skills</code> にあり、コマンド1行で追加できます。累計92万インストールの実績があります。'],
    ],
    steps: [
      ['Skillを追加する', '上のコマンドを実行し、使っているコーディングエージェントにgrill-meを追加します。'],
      ['AIに計画を作らせる', '実装したい内容について、まずAIに計画や設計を出させます。'],
      ['grill-meで詰める', 'その計画に対してgrill-meを呼び出し、質問に答えながら弱点や曖昧な決定をあぶり出します。'],
      ['計画を直してから実装する', '出てきた指摘を計画へ反映してから実装に進みます。ここで潰した分だけ、後の手戻りが減ります。'],
    ],
    fit: {
      good: [
        'AIが立てた計画をそのまま実装して、手戻りした経験がある人',
        '実装前に設計レビューを挟みたいチーム',
        '仕様の分岐や前提を、着手前に洗い出しておきたい人',
      ],
      bad: [
        '細かく詰めず、素早く手を動かしたい場面',
        '使い捨てのスクリプトなど、手戻りのコストが小さい作業',
      ],
    },
    note: '質問が続く仕組みなので、細かく詰めず素早く手を動かしたい場面には向きません。作るものの大きさに応じて使い分けてください。',
    faq: [
      ['grill-meは何をしてくれるSkillですか？', 'AIが立てた計画や設計に対して深掘りの質問を重ね、決定の分岐を一つずつたどって、実装前に弱点をあぶり出します。認識がそろうまで問い続けるのが特徴です。'],
      ['どうやって導入しますか？', 'ターミナルで <code>npx skills add mattpocock/skills --skill grill-me</code> を実行します。Claude Code、Cursor、Codex などのコーディングエージェントで利用できます。'],
      ['質問に答えるのが大変ではありませんか？', '疑問があればコードベースを自分で読みに行くため、同じことを何度も聞き返される手間は減ります。ただし質問が続く仕組みのため、細かく詰めず素早く手を動かしたい場面には向きません。'],
      ['どんな場面で使うと効果的ですか？', '設計レビューや、実装前の計画検証で効果を発揮します。AIが立てた計画をそのまま実装して手戻りした経験がある人ほど、効果を実感しやすいSkillです。'],
    ],
  },
  {
    slug: 'microsoft-foundry',
    name: 'microsoft-foundry',
    repo: 'microsoft/azure-skills',
    install: 'npx skills add microsoft/azure-skills --skill microsoft-foundry',
    video: { id: 'Ypy0I7hyRSA', uploadDate: '2026-08-22', videoName: 'skills vol.3｜microsoft-foundryでエージェント運用を一続きに' },
    card: {
      tag: 'Azure ／ エージェント運用',
      icon: 'cloud',
      desc: 'Azure上のAIエージェントを、作成・コンテナ化・公開・呼び出し・評価まで一続きで扱えるMicrosoft公式Skill。',
    },
    title: 'microsoft-foundryとは｜Azureのエージェントを作成から評価まで一続きにする公式Skill',
    description:
      'Microsoft公式Skill「microsoft-foundry」の解説。Azure上のAIエージェントを作成・コンテナ化・公開・呼び出し・評価まで一本の流れで扱えます。導入コマンド、設定ファイル、向いている人と注意点をまとめました。',
    ogDescription:
      'Azure上のAIエージェントを、作成・公開・呼び出し・評価まで一本の流れで扱えるMicrosoft公式Skill。導入コマンドと使いどころを解説します。',
    h1: 'microsoft-foundryとは｜Azureのエージェントを<span class="u-text-orange">作成から評価まで一続き</span>にする公式Skill',
    lead:
      'AIエージェントは、作ったあとに公開・評価・運用がバラバラになりがちです。<b>microsoft-foundry</b>はMicrosoft公式のSkillで、Azure上での作成・公開・呼び出し・評価までを一本の流れとして扱います。工程の抜け漏れを減らせます。',
    meta: [
      ['提供', 'microsoft/azure-skills（Microsoft公式）'],
      ['導入実績', '累計54万インストール'],
      ['対応ツール', 'Claude Code ／ Cursor ／ Codex など'],
      ['前提環境', 'Azure'],
    ],
    summary: [
      'microsoft-foundryは、Azure上のAIエージェントを<b>作成 → コンテナ化 → 公開 → 呼び出し → 評価</b>まで一続きで扱うMicrosoft公式のSkill。',
      'SKILL.mdに<b>「読み込み後、まず依存関係の確認と設定を実行する」</b>指示があり、環境の取りこぼしを防げる。',
      '設定は<b>.foundry/agent-metadata.yaml</b>の1ファイルに集約され、設定とテストの拠り所になる。',
      '導入は<b>npx skills add microsoft/azure-skills --skill microsoft-foundry</b>の1行だけ。',
      'Azureを使わない場合は、前提となる環境がないため出番がない。',
    ],
    what: [
      'microsoft-foundryは、Azure上でAIエージェントを運用する人のために、<b>作成から評価までを一続きにする</b>Skillです。Microsoftが公開している <code>microsoft/azure-skills</code> に含まれる公式Skillで、Claude CodeなどのコーディングエージェントにSkillとして追加して使います。',
      'AIエージェント開発では、エージェント本体を作るところまでは進んでも、その先の<b>コンテナ化・公開・呼び出し・評価</b>が別々の作業として散らばりがちです。手順が人やプロジェクトごとにバラつき、「公開はしたが評価が回っていない」「動くが再現手順が残っていない」といった状態になります。',
      'microsoft-foundryは、この一連の工程を<b>ひとつながりの手順</b>としてエージェントに実行させます。担当者の記憶や属人的な手順書に頼らず、工程の抜け漏れを減らせるのが導入価値です。',
    ],
    points: [
      ['ライフサイクルを一続きに扱える', '作成、コンテナ化、公開、呼び出し、評価までを一連の手順として進めます。工程ごとにツールや手順書を切り替える必要がなく、「作って終わり」になりません。'],
      ['最初に依存関係チェックが走る', 'SKILL.mdに、読み込み後まず依存関係の確認と設定を実行する指示が入っています。環境が整っていないまま作業が進み、後工程で詰まる事故を防げます。'],
      ['設定は1ファイルに集約される', '<code>.foundry/agent-metadata.yaml</code> を設定とテストの拠り所にします。設定が1か所にまとまるため、引き継ぎやレビュー、再現がしやすくなります。'],
      ['Microsoft公式・累計54万インストール', '<code>microsoft/azure-skills</code> が提供する公式Skillで、累計54万インストールの実績があります。個人が書いた設定ファイルではなく、提供元が明確な選択肢です。'],
    ],
    steps: [
      ['Skillを追加する', '上のコマンドを実行し、使っているコーディングエージェントにmicrosoft-foundryを追加します。'],
      ['依存関係を確認・設定する', 'SKILL.mdの指示どおり、まず依存関係の確認と設定を実行します。ここを飛ばさないことが前提になっています。'],
      ['設定を1ファイルにまとめる', '<code>.foundry/agent-metadata.yaml</code> に設定を集約し、以降の設定・テストの基準にします。'],
      ['作成から評価まで進める', 'エージェントの作成、コンテナ化、Azureへの公開、呼び出し、評価までを一連の流れで実行します。'],
    ],
    fit: {
      good: [
        'Azure上でAIエージェントを作って運用したい人',
        '公開したエージェントの評価まで手が回っていないチーム',
        '作成から運用までの手順を、属人化させず揃えたい人',
      ],
      bad: [
        'Azureを使っていない場合は、前提となる環境がないため出番がありません',
        'エージェントを作らず、単発のコード生成だけに使いたい場合',
      ],
    },
    note: 'Azureを使わない場合は前提となる環境がないため、このSkillの出番はありません。使っているクラウドや目的に合ったSkillを選んでください。',
    faq: [
      ['microsoft-foundryは何ができるSkillですか？', 'Azure上のAIエージェントを、作成・コンテナ化・公開・呼び出し・評価まで一連の手順として進められます。工程がバラバラになりやすいエージェント運用を、一本の流れに揃えられるのが特徴です。'],
      ['Claude Code以外でも使えますか？', '<code>npx skills add</code> でSkillを追加できるコーディングエージェントであれば利用できます。Claude Code、Cursor、Codex などが対象です。'],
      ['導入して最初にやることは何ですか？', 'SKILL.mdに、読み込み後まず依存関係の確認と設定を実行する指示があります。その後、<code>.foundry/agent-metadata.yaml</code> に設定を集約してから作業を進めます。'],
      ['費用はかかりますか？', '<code>microsoft/azure-skills</code> で公開されている公式Skillのため、追加のツール費用なく導入できます。ただし実行にはAzureのアカウントが必要で、利用したAzureリソース分の料金は別途かかります。'],
      ['Azureを使っていない場合はどうなりますか？', '前提となる環境がないため出番がありません。使っているクラウドや目的に合ったSkillを選んでください。'],
    ],
  },
]

// カードのアイコン（インラインSVG。外部リクエストを増やさないため）
export const ICONS = {
  cloud:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.3 8.6 4.7 4.7 0 0 0 7 19z"></path><path d="M12 12v5M9.5 14.5 12 12l2.5 2.5"></path></svg>',
  question:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M9.4 9a2.6 2.6 0 0 1 5 1c0 1.7-2.4 2-2.4 3.6"></path><path d="M12 17.2h.01"></path></svg>',
  palette:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 1 0 0 18 2.2 2.2 0 0 0 1.7-3.6 2.2 2.2 0 0 1 1.7-3.6H18a3 3 0 0 0 3-3c0-4.3-4-7.8-9-7.8z"></path><circle cx="7.5" cy="12" r="1.1" fill="currentColor" stroke="none"></circle><circle cx="10" cy="8" r="1.1" fill="currentColor" stroke="none"></circle><circle cx="14.5" cy="8" r="1.1" fill="currentColor" stroke="none"></circle></svg>',
}
