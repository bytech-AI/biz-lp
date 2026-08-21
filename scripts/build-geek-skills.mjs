#!/usr/bin/env node
// おすすめSkills のページを生成する。
//   node scripts/build-geek-skills.mjs
// 生成物:
//   public/geek-skills-static/index.html            … /skills （一覧）
//   public/geek-skills-static/<slug>.html           … /skills/<slug> （個別）
//   public/geek-static/index.html のカード群         … トップの「おすすめSkills」セクション
//   public/geek-static/sitemap.xml                  … /skills 系のURL
// ヘッダー/フッターは geek-record-static/index.html から流用する（共通chromeの二重管理を避けるため）。

import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { SKILLS, ICONS } from './geek-skills.data.mjs'

const ORIGIN = 'https://geek.bytech.jp'
const CHROME_SRC = 'public/geek-record-static/index.html'
const OUT_DIR = 'public/geek-skills-static'
const TOP_PAGE = 'public/geek-static/index.html'
const SITEMAP = 'public/geek-static/sitemap.xml'
const CSS_VER = { common: '20260822skl1', header: '20260815nav', skills: '20260822i', footer: '20260704d' }
const TODAY = new Date().toISOString().slice(0, 10)

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
// JSON-LD やメタ用に、本文HTMLからタグを落としたプレーンテキストを作る
const plain = (s) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()

/* ---------- 共通chrome ---------- */
const chrome = readFileSync(CHROME_SRC, 'utf8')
const header = chrome.slice(chrome.indexOf('<body class="body">'), chrome.indexOf('    <main class="g2rec-page">'))
let tail = chrome.slice(chrome.indexOf('    </main>') + '    </main>'.length)
{
  const i = tail.indexOf('<script id="geek-record-js">')
  if (i !== -1) tail = tail.slice(0, i) + tail.slice(tail.indexOf('</script>', i) + '</script>'.length)
}
const PAGE_JS = `
<script id="geek-skill-js">
(function(){
  // インストールコマンドのコピー
  document.querySelectorAll('.sk-copy').forEach(function(btn){
    btn.addEventListener('click',function(){
      var el=document.querySelector(btn.getAttribute('data-copy'));
      if(!el||!navigator.clipboard)return;
      navigator.clipboard.writeText(el.textContent.trim()).then(function(){
        var t=btn.textContent;btn.textContent='コピーしました';btn.classList.add('is-done');
        setTimeout(function(){btn.textContent=t;btn.classList.remove('is-done');},1600);
      });
    });
  });
  // YouTube はクリックされるまで読み込まない（初期表示のコストを増やさない）
  document.querySelectorAll('.sk-video[data-yt]').forEach(function(box){
    var btn=box.querySelector('.sk-video-btn');
    if(!btn)return;
    btn.addEventListener('click',function(){
      var f=document.createElement('iframe');
      f.src='https://www.youtube-nocookie.com/embed/'+box.getAttribute('data-yt')+'?autoplay=1&playsinline=1&rel=0';
      f.title='紹介動画';
      f.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      f.allowFullscreen=true;
      f.setAttribute('frameborder','0');
      box.innerHTML='';
      box.appendChild(f);
    });
  });
})();
</script>
`
tail = tail.replace('</body></html>', PAGE_JS + '</body></html>')

const GTM = `    <!-- Google Tag Manager（初回インタラクション/アイドルまで遅延ロード＝TBT削減。dataLayerは即時生成しpushは取りこぼさない） -->
    <script>window.dataLayer=window.dataLayer||[];(function(w,d){var loaded=false;function loadGTM(){if(loaded)return;loaded=true;w.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});var j=d.createElement('script');j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id=GTM-587JB774';d.head.appendChild(j);}['scroll','click','touchstart','keydown','mousemove'].forEach(function(e){w.addEventListener(e,loadGTM,{once:true,passive:true});});if('requestIdleCallback' in w){w.requestIdleCallback(loadGTM,{timeout:6000});}else{w.addEventListener('load',function(){setTimeout(loadGTM,3000);});}})(window,document);</script>
    <!-- End Google Tag Manager -->`

const ORG_REFS = [
  { '@type': 'Organization', '@id': `${ORIGIN}/#organization`, name: 'バイテックGEEK', alternateName: ['byTech GEEK', 'バイテック ギーク'], url: `${ORIGIN}/`, description: 'IT未経験・非エンジニアからでも、Claude Codeで「作れる側」になれるAIプログラミングスクール。', parentOrganization: { '@type': 'Organization', name: '株式会社AI棒' } },
  { '@type': 'WebSite', '@id': `${ORIGIN}/#website`, url: `${ORIGIN}/`, name: 'バイテックGEEK', alternateName: 'byTech GEEK', publisher: { '@id': `${ORIGIN}/#organization` }, inLanguage: 'ja' },
]

function head({ title, description, canonical, ogType, ogTitle, ogDescription, ogImage, graph }) {
  return `<!DOCTYPE html>
<html lang="ja"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <title>${esc(title)}｜バイテックGEEK</title>
    <meta name="description" content="${esc(description)}">
    <link rel="icon" type="image/x-icon" href="/geek-static/files/favicon.ico">
    <link rel="apple-touch-icon" href="/geek-static/files/apple-touch-icon.png">

${GTM}

    <link rel="canonical" href="${canonical}">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <meta property="og:url" content="${canonical}">
    <meta property="og:type" content="${ogType}">
    <meta property="og:site_name" content="バイテックGEEK">
    <meta property="og:title" content="${esc(ogTitle)}">
    <meta property="og:description" content="${esc(ogDescription)}">${ogImage ? `\n    <meta property="og:image" content="${ogImage}">` : ''}
    <meta name="twitter:card" content="summary_large_image">
    <script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': [...ORG_REFS, ...graph] })}</script>

    <!-- font -->
    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="">
    <link rel="preload" href="/bytech/fonts/NotoSansJP_VF-s.p.09a7lksm~5qfk.woff2" as="font" crossorigin="" type="font/woff2">
    <style id="geek-noto-selfhost">@font-face{font-family:"Noto Sans JP";src:url(/bytech/fonts/NotoSansJP_VF-s.p.09a7lksm~5qfk.woff2) format("woff2");font-display:swap;font-weight:100 900;font-style:normal;}</style>
    <link href="/geek-static/files/css2(1)" rel="stylesheet" media="print" onload="this.media='all'">
    <noscript><link href="/geek-static/files/css2(1)" rel="stylesheet"></noscript>

    <link rel="stylesheet" id="my_style-css" href="/geek-static/files/common.css?v=${CSS_VER.common}" media="all">
    <link rel="stylesheet" id="header_style-css" href="/geek-static/files/header.css?v=${CSS_VER.header}" media="all">
    <link rel="stylesheet" id="skill_style-css" href="/geek-static/files/skills.css?v=${CSS_VER.skills}" media="all">
    <link rel="stylesheet" id="footer_style-css" href="/geek-static/files/footer.css?v=${CSS_VER.footer}" media="print" onload="this.media='all'">
    <noscript><link rel="stylesheet" href="/geek-static/files/footer.css?v=${CSS_VER.footer}"></noscript>
    <style id="bt-heading-weight">h2{font-weight:800!important}h3{font-weight:800!important}</style>
</head>
`
}

const CTA = `
        <div class="cta">
            <div class="inner">
                <h2 class="cta__heading">Skillの使いどころを、無料で相談する</h2>
                <p class="cta__message">どのSkillを、どの業務に入れるとよいか。あなたの環境に合わせた学習ロードマップをご提案します。</p>
                <div class="cta__button">
                    <span class="cta__microcopy">簡単30秒で予約完了！</span>
                    <a href="/#counseling" class="cta__btn">
                        <span class="cta__btn-sub">完全無料・オンライン ／ 所要60分</span>
                        <span class="cta__btn-main">無料カウンセリングを予約する</span>
                        <span class="cta__btn-arrow" aria-hidden="true"></span>
                    </a>
                </div>
            </div>
        </div>`

/* ---------- カード（トップ・一覧で共用） ---------- */
function card(s) {
  return `                    <li class="g2skl-card">
                        <a href="/skills/${s.slug}">
                            <span class="g2skl-icon" aria-hidden="true">${ICONS[s.card.icon]}</span>
                            <span class="g2skl-tag">${s.card.tag}</span>
                            <span class="g2skl-name">${s.name}<span class="g2skl-code">${s.repo}</span></span>
                            <span class="g2skl-desc">${s.card.desc}</span>
                            <span class="g2skl-link">詳細を見る</span>
                        </a>
                    </li>`
}

/* ---------- 個別ページ ---------- */
function detailPage(s) {
  const canonical = `${ORIGIN}/skills/${s.slug}`
  const thumb = `/geek-static/files/skills/${s.slug}-thumb.webp`
  const hasVideo = !!s.video
  if (hasVideo && !existsSync(`public${thumb}`)) {
    console.warn(`  ! サムネ未配置: public${thumb}`)
  }

  const graph = [
    {
      '@type': 'TechArticle', '@id': `${canonical}#article`,
      headline: s.title,
      description: plain(s.lead),
      inLanguage: 'ja', proficiencyLevel: 'Beginner',
      dependencies: 'Node.js（npx）、コーディングエージェント（Claude Code / Cursor / Codex など）',
      about: { '@type': 'SoftwareApplication', name: s.name, applicationCategory: 'DeveloperApplication', operatingSystem: 'macOS, Windows, Linux' },
      isPartOf: { '@id': `${ORIGIN}/#website` },
      publisher: { '@id': `${ORIGIN}/#organization` },
      mainEntityOfPage: canonical,
    },
    ...(hasVideo ? [{
      '@type': 'VideoObject', '@id': `${canonical}#video`,
      name: s.video.videoName,
      description: plain(s.lead),
      thumbnailUrl: [ORIGIN + thumb],
      embedUrl: `https://www.youtube.com/embed/${s.video.id}`,
      contentUrl: `https://www.youtube.com/shorts/${s.video.id}`,
      uploadDate: s.video.uploadDate,
    }] : []),
    {
      '@type': 'BreadcrumbList', '@id': `${canonical}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'TOP', item: `${ORIGIN}/` },
        { '@type': 'ListItem', position: 2, name: 'おすすめSkills', item: `${ORIGIN}/skills` },
        { '@type': 'ListItem', position: 3, name: s.name, item: canonical },
      ],
    },
    {
      '@type': 'HowTo', '@id': `${canonical}#howto`, name: `${s.name}の使い方`, inLanguage: 'ja',
      step: s.steps.map(([n, t], i) => ({ '@type': 'HowToStep', position: i + 1, name: n, text: plain(t) })),
    },
    {
      '@type': 'FAQPage', '@id': `${canonical}#faq`,
      mainEntity: s.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: plain(a) } })),
    },
  ]

  // 動画は本文の右サイドバーに置き、スクロールに追従させる
  const aside = hasVideo ? `
                <aside class="sk-side">
                    <figure class="sk-hero-media">
                        <div class="sk-video" data-yt="${s.video.id}">
                            <button type="button" class="sk-video-btn" aria-label="${s.name}の紹介動画を再生する">
                                <img src="${thumb}" alt="${s.name}の紹介ショート動画" width="540" height="960" loading="lazy" decoding="async">
                            </button>
                        </div>
                        <figcaption>30秒でわかる ${s.name}</figcaption>
                    </figure>
                </aside>` : ''

  const others = SKILLS.filter((x) => x.slug !== s.slug).slice(0, 2)

  const main = `    <main class="sk-page">
        <div class="sk-hero">
            <div class="inner">
                <nav class="sk-crumb" aria-label="パンくず">
                    <a href="/">TOP</a><span aria-hidden="true">‣</span><a href="/skills">おすすめSkills</a><span aria-hidden="true">‣</span><span>${s.name}</span>
                </nav>

                <div class="sk-hero-grid">
                    <div class="sk-hero-body">
                        <p class="sk-eyebrow">Skills</p>
                        <h1 class="sk-title">${s.h1}</h1>
                        <p class="sk-lead">${s.lead}</p>

                        <dl class="sk-meta">
${s.meta.map(([k, v]) => `                            <div><dt>${k}</dt><dd>${v}</dd></div>`).join('\n')}
                        </dl>

                        <div class="sk-install">
                            <p class="sk-install-label">ターミナルで1行。すぐに使えます。</p>
                            <div class="sk-code">
                                <code id="skInstallCmd">${s.install}</code>
                                <button type="button" class="sk-copy" data-copy="#skInstallCmd">コピー</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="inner sk-body sk-layout${hasVideo ? '' : ' sk-layout--nosidebar'}">
            <div class="sk-main">
            <div class="sk-summary">
                <h2>このページの要点</h2>
                <ul>
${s.summary.map((li) => `                    <li>${li}</li>`).join('\n')}
                </ul>
            </div>

            <section class="sk-sec" id="what">
                <h2 class="sk-h2">${s.name}とは</h2>
${s.what.map((p) => `                <p>${p}</p>`).join('\n')}
            </section>

            <section class="sk-sec" id="points">
                <h2 class="sk-h2">${s.name}のポイント${s.points.length}つ</h2>
                <ol class="sk-points">
${s.points.map(([h, p]) => `                    <li>
                        <h3>${h}</h3>
                        <p>${p}</p>
                    </li>`).join('\n')}
                </ol>
            </section>

            <section class="sk-sec" id="how">
                <h2 class="sk-h2">${s.name}の使い方</h2>
                <p>導入はターミナルで1行です。Claude Code / Cursor / Codex などのコーディングエージェントで使えます。</p>
                <div class="sk-code sk-code--block">
                    <code id="skInstallCmd2">${s.install}</code>
                    <button type="button" class="sk-copy" data-copy="#skInstallCmd2">コピー</button>
                </div>
                <ol class="sk-steps">
${s.steps.map(([h, p]) => `                    <li><h3>${h}</h3><p>${p}</p></li>`).join('\n')}
                </ol>
            </section>

            <section class="sk-sec" id="who">
                <h2 class="sk-h2">こんな人に向いています</h2>
                <div class="sk-fit">
                    <div class="sk-fit-col is-good">
                        <h3>向いている</h3>
                        <ul>
${s.fit.good.map((li) => `                            <li>${li}</li>`).join('\n')}
                        </ul>
                    </div>
                    <div class="sk-fit-col is-bad">
                        <h3>向いていない</h3>
                        <ul>
${s.fit.bad.map((li) => `                            <li>${li}</li>`).join('\n')}
                        </ul>
                    </div>
                </div>
                <p class="sk-note"><b>注意：</b>${s.note}</p>
            </section>

            <section class="sk-sec" id="faq">
                <h2 class="sk-h2">よくある質問</h2>
                <div class="sk-faq">
${s.faq.map(([q, a]) => `                    <details>
                        <summary>${q}</summary>
                        <p>${a}</p>
                    </details>`).join('\n')}
                </div>
            </section>

            <section class="sk-sec" id="related">
                <h2 class="sk-h2">あわせて読みたい</h2>
                <ul class="sk-related">
${others.map((o) => `                    <li><a href="/skills/${o.slug}">${o.name}｜${plain(o.card.desc)}</a></li>`).join('\n')}
                    <li><a href="https://bytech.jp/blog/claude-skills/" target="_blank" rel="noopener">Claude Skillsとは｜6つの機能や活用事例、使用時の注意点</a></li>
                    <li><a href="/record">Claude Code実録｜現場でどう使ったかの記録</a></li>
                </ul>
            </section>
            </div>
${aside}
        </div>
${CTA}
    </main>
`

  return head({
    title: s.title, description: s.description, canonical, ogType: 'article',
    ogTitle: s.title, ogDescription: s.ogDescription,
    ogImage: hasVideo ? ORIGIN + thumb : null, graph,
  }) + header + main + tail
}

/* ---------- 一覧ページ ---------- */
function indexPage() {
  const canonical = `${ORIGIN}/skills`
  const faq = [
    ['Skill（スキル）とは何ですか？', 'Claude CodeなどのコーディングエージェントにSKILL.mdなどの手順一式を読み込ませ、特定の作業を決まった手順で実行できるようにする仕組みです。毎回プロンプトで説明し直す必要がなくなり、作業の品質が人によってブレにくくなります。'],
    ['Skillはどうやって追加しますか？', 'ターミナルで <code>npx skills add &lt;提供元/リポジトリ&gt; --skill &lt;スキル名&gt;</code> を実行します。Claude Code、Cursor、Codex などのコーディングエージェントで利用できます。'],
    ['どのSkillから入れるとよいですか？', '使っている環境や困りごとに合うものから選ぶのが確実です。計画の詰めが甘いならgrill-me、UIが量産型ならfrontend-design、Azureでエージェントを運用するならmicrosoft-foundry、といった選び方になります。'],
  ]
  const graph = [
    {
      '@type': 'CollectionPage', '@id': `${canonical}#webpage`, url: canonical,
      name: 'おすすめSkills一覧｜Claude Codeに入れておきたいSkillまとめ',
      description: 'バイテックGEEKが実際に使っているClaude Code向けのおすすめSkillの一覧。',
      inLanguage: 'ja', isPartOf: { '@id': `${ORIGIN}/#website` },
      mainEntity: {
        '@type': 'ItemList', itemListOrder: 'https://schema.org/ItemListOrderAscending',
        numberOfItems: SKILLS.length,
        itemListElement: SKILLS.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.name, url: `${ORIGIN}/skills/${s.slug}` })),
      },
    },
    {
      '@type': 'BreadcrumbList', '@id': `${canonical}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'TOP', item: `${ORIGIN}/` },
        { '@type': 'ListItem', position: 2, name: 'おすすめSkills', item: canonical },
      ],
    },
    { '@type': 'FAQPage', '@id': `${canonical}#faq`, mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: plain(a) } })) },
  ]

  const main = `    <main class="sk-page sk-index">
        <div class="sk-hero">
            <img class="sk-hero-bg" src="/geek-static/files/skills/skills-hero.webp" alt="" width="1920" height="600" fetchpriority="high" decoding="async">
            <div class="inner">
                <nav class="sk-crumb" aria-label="パンくず">
                    <a href="/">TOP</a><span aria-hidden="true">‣</span><span>おすすめSkills</span>
                </nav>
                <div class="sk-index-head">
                    <p class="sk-eyebrow">Skills</p>
                    <h1 class="sk-title">Claude Codeに入れておきたい<span class="u-text-orange">おすすめSkills</span></h1>
                    <p class="sk-lead">バイテックGEEKで実際に配信・活用しているSkillを、前提環境と使いどころ付きでまとめました。ターミナルで1行、いますぐ試せます。</p>
                </div>
            </div>
        </div>

        <div class="inner sk-body">
            <div class="sk-summary">
                <h2>Skill（スキル）とは</h2>
                <ul>
                    <li>Claude CodeなどのコーディングエージェントにSKILL.mdなどの手順一式を読み込ませ、<b>特定の作業を決まった手順で実行できるようにする仕組み</b>。</li>
                    <li>毎回プロンプトで説明し直す必要がなくなり、<b>作業の品質が人によってブレにくくなる</b>。</li>
                    <li>導入は <b>npx skills add &lt;提供元/リポジトリ&gt; --skill &lt;スキル名&gt;</b> の1行。Claude Code / Cursor / Codex などで使える。</li>
                    <li>選ぶ基準はシンプルで、<b>いま困っていることに合うものから入れる</b>のが最短。</li>
                </ul>
            </div>

            <section class="sk-sec" id="list">
                <h2 class="sk-h2">おすすめSkills一覧（${SKILLS.length}件）</h2>
                <ul class="g2skl-list sk-index-list">
${SKILLS.map(card).join('\n')}
                </ul>
                <p class="sk-index-note">Skillは随時追加しています。受講生には、コース内で使い方とあわせて配信しています。</p>
            </section>

            <section class="sk-sec" id="faq">
                <h2 class="sk-h2">よくある質問</h2>
                <div class="sk-faq">
${faq.map(([q, a]) => `                    <details>
                        <summary>${q}</summary>
                        <p>${a}</p>
                    </details>`).join('\n')}
                </div>
            </section>

            <section class="sk-sec" id="related">
                <h2 class="sk-h2">あわせて読みたい</h2>
                <ul class="sk-related">
                    <li><a href="https://bytech.jp/blog/claude-skills/" target="_blank" rel="noopener">Claude Skillsとは｜6つの機能や活用事例、使用時の注意点</a></li>
                    <li><a href="https://bytech.jp/blog/claudecode-features/" target="_blank" rel="noopener">Claude Codeでできること16選｜使いこなすためのコツも紹介</a></li>
                    <li><a href="/record">Claude Code実録｜現場でどう使ったかの記録</a></li>
                </ul>
            </section>
        </div>
${CTA}
    </main>
`

  return head({
    title: 'おすすめSkills一覧｜Claude Codeに入れておきたいSkillまとめ',
    description: 'バイテックGEEKが実際に使っている、Claude Code / Cursor / Codex 向けのおすすめSkillをまとめました。Skillとは何か、npx skills add での導入方法、どの業務に効くのかを1ページで確認できます。',
    canonical, ogType: 'website',
    ogTitle: 'おすすめSkills一覧｜Claude Codeに入れておきたいSkillまとめ',
    ogDescription: 'バイテックGEEKが実際に使っているClaude Code向けのおすすめSkillを、使いどころ付きでまとめました。',
    ogImage: null, graph,
  }) + header + main + tail
}

/* ---------- 出力 ---------- */
writeFileSync(`${OUT_DIR}/index.html`, indexPage())
console.log(`  ${OUT_DIR}/index.html`)
for (const s of SKILLS) {
  writeFileSync(`${OUT_DIR}/${s.slug}.html`, detailPage(s))
  console.log(`  ${OUT_DIR}/${s.slug}.html`)
}

// トップページのカード群を差し替え
{
  const START = '<!-- SKILLS-CARDS:START -->'
  const END = '<!-- SKILLS-CARDS:END -->'
  const top = readFileSync(TOP_PAGE, 'utf8')
  const i = top.indexOf(START)
  const j = top.indexOf(END)
  if (i === -1 || j === -1) {
    console.warn(`  ! ${TOP_PAGE} に ${START} / ${END} が見つからないためカード差し替えをスキップ`)
  } else {
    const next = top.slice(0, i + START.length) + '\n' + SKILLS.map(card).join('\n') + '\n                    ' + top.slice(j)
    writeFileSync(TOP_PAGE, next)
    console.log(`  ${TOP_PAGE}（カード${SKILLS.length}件）`)
  }
}

// sitemap の /skills 系を作り直す
{
  const xml = readFileSync(SITEMAP, 'utf8')
  const kept = xml.replace(/ {2}<url>\s*<loc>https:\/\/geek\.bytech\.jp\/skills[^<]*<\/loc>[\s\S]*?<\/url>\n/g, '')
  const entries = [
    `  <url>\n    <loc>${ORIGIN}/skills</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`,
    ...SKILLS.map((s) => `  <url>\n    <loc>${ORIGIN}/skills/${s.slug}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`),
  ].join('')
  writeFileSync(SITEMAP, kept.replace('</urlset>', entries + '</urlset>'))
  console.log(`  ${SITEMAP}`)
}

console.log(`\n生成完了（${SKILLS.length}件）。proxy.ts の SKILL_SLUGS も確認すること。`)
