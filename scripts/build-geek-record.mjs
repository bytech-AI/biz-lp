/**
 * geek「Claude Code実録」一覧ページ（/record）の記事カードを生成する。
 *
 *   node scripts/build-geek-record.mjs
 *
 * 掲載する記事は TOP（public/geek-static/index.html）の PICK UP カルーセルが正。
 * そこに並んでいる note 記事だけを、同じ順番で一覧ページに書き出す。
 * TOP にスライドを足す／消すだけで一覧も揃うので、二重管理にならない。
 *
 * 書き換えるのは public/geek-record-static/index.html の
 * <ul class="g2rec-list" id="recList"> の中身だけ。
 */
import { readFile, writeFile } from 'node:fs/promises'

const CREATOR = 'makun_bytech'
const TOP_HTML = 'public/geek-static/index.html'
const LIST_HTML = 'public/geek-record-static/index.html'

/** TOPのカルーセルから、掲載順に note の記事キーとサムネイルを拾う */
async function readSlidesFromTop() {
  const html = await readFile(TOP_HTML, 'utf8')
  const start = html.indexOf('<div class="g2rec-carousel">')
  const end = html.indexOf('<div class="g2rec-more">')
  if (start < 0 || end < 0) throw new Error(`${TOP_HTML}: 実録カルーセルが見つからない`)
  const section = html.slice(start, end)

  // スライド1枚ぶん（記事キー＋サムネイル）をまとめて拾う
  const slides = []
  const re = new RegExp(
    `href="https://note\\.com/${CREATOR}/n/(\\w+)"[\\s\\S]*?<img src="([^"]+)"[^>]*?width="(\\d+)" height="(\\d+)"`,
    'g',
  )
  for (const m of section.matchAll(re)) {
    if (slides.some((s) => s.key === m[1])) continue
    slides.push({ key: m[1], thumb: m[2], width: m[3], height: m[4] })
  }
  if (!slides.length) throw new Error(`${TOP_HTML}: note のリンクが1つも無い`)
  return slides
}

/** note から記事のタイトルと公開日を取る（TOPの手書きとズレないよう本家を参照） */
async function fetchArticle(key) {
  const res = await fetch(`https://note.com/api/v3/notes/${key}`, {
    headers: { 'User-Agent': 'Mozilla/5.0' },
  })
  if (!res.ok) throw new Error(`note API ${res.status}: ${key}`)
  const { data } = await res.json()
  const name = data.name
  return {
    title: name.replace('【受講生実録】', '').trim(),
    cat: name.includes('受講生実録') ? '受講生実録' : 'ノウハウ・コラム',
    date: (data.publish_at || '').slice(0, 10),
  }
}

const escape = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function card(a, indent) {
  const pad = ' '.repeat(indent)
  const catMod = a.cat === '受講生実録' ? 'is-record' : 'is-column'
  const [y, m, d] = a.date.split('-')
  return `${pad}<li class="g2rec-item">
${pad}    <a class="g2rec-card" href="https://note.com/${CREATOR}/n/${a.key}" target="_blank" rel="noopener">
${pad}        <span class="g2rec-card-thumb">
${pad}            <img src="${a.thumb}" alt="${escape(a.title)}" width="${a.width}" height="${a.height}" loading="lazy" decoding="async">
${pad}        </span>
${pad}        <span class="g2rec-card-body">
${pad}            <span class="g2rec-card-meta">
${pad}                <span class="g2rec-tag ${catMod}">${escape(a.cat)}</span>
${pad}                <time datetime="${a.date}">${y}.${m}.${d}</time>
${pad}            </span>
${pad}            <span class="g2rec-card-title">${escape(a.title)}</span>
${pad}            <span class="g2rec-card-link">noteで読む</span>
${pad}        </span>
${pad}    </a>
${pad}</li>`
}

const slides = await readSlidesFromTop()
const articles = []
for (const slide of slides) articles.push({ ...slide, ...(await fetchArticle(slide.key)) })

const html = await readFile(LIST_HTML, 'utf8')
const re = /(<ul class="g2rec-list" id="recList">\n)[\s\S]*?(\n\s*<\/ul>)/
if (!re.test(html)) throw new Error(`${LIST_HTML}: recList が見つからない`)
await writeFile(LIST_HTML, html.replace(re, (_, open, close) => open + articles.map((a) => card(a, 20)).join('\n') + close))

console.log(`TOPのカルーセルと同じ${articles.length}件を /record に反映しました。`)
for (const a of articles) console.log(`  ${a.date}  ${a.title}`)
