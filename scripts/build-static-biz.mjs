// biz トップ(app/biz/page.tsx)のSSR出力を静的HTML化する。
// 使い方: next build → next start -p 3002 → node scripts/build-static-biz.mjs
// 挙動は build-static-home.mjs と同じ（_next CSS結合→フォント自己ホスト→_next/React剥がし→CSSインライン）。
// biz は Host: biz.bytech.jp のとき proxy が / を /biz にrewriteするため、Hostヘッダ付きで取得する。
import { readFileSync, writeFileSync, copyFileSync, existsSync, mkdirSync } from 'node:fs';
import http from 'node:http';
const BASE = process.env.BASE || 'http://localhost:3002';
const PORT = Number(new URL(BASE).port || 80);
const ROOT = process.cwd();
mkdirSync(ROOT + '/public/biz/fonts', { recursive: true });

// Node の fetch は Host ヘッダを禁止するため、http で Host: biz.bytech.jp を明示して取得
function getWithHost(path, host) {
  return new Promise((resolve, reject) => {
    http.get({ host: '127.0.0.1', port: PORT, path, headers: host ? { Host: host } : {} }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400) return reject(new Error('redirect ' + res.statusCode + ' -> ' + res.headers.location));
      let d = ''; res.setEncoding('utf8'); res.on('data', (c) => (d += c)); res.on('end', () => resolve(d));
    }).on('error', reject);
  });
}

let html = await getWithHost('/', 'biz.bytech.jp');

const cssHrefs = [...html.matchAll(/<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/g)].map(m => m[1])
  .filter(h => h.includes('/_next/static/chunks/'));
let combinedCss = '';
for (const href of cssHrefs) combinedCss += await (await fetch(BASE + href)).text() + '\n';

// フォント: url(../media/X.woff2) と url(/_next/static/media/X.woff2) → publicへコピー＆書換
const fontBases = new Set();
combinedCss = combinedCss.replace(/url\((?:\.\.\/media\/|\/_next\/static\/media\/)([^)]+\.woff2)\)/g, (m, base) => {
  fontBases.add(base);
  const src = ROOT + '/.next/static/media/' + base;
  const dest = ROOT + '/public/biz/fonts/' + base;
  if (existsSync(src)) copyFileSync(src, dest);
  else console.warn('  !! font not found:', base);
  return 'url(/biz/fonts/' + base + ')';
});
console.log('fonts copied:', [...fontBases].length, [...fontBases].map(b => b.split('-')[0]).join(','));

// 元CSSチャンク<link>削除
html = html.replace(/<link[^>]*rel="stylesheet"[^>]*href="\/_next\/static\/chunks\/[^"]+"[^>]*>/g, '');
// preload/modulepreload で /_next/static/ を指すもの削除（JSチャンク先読み）
html = html.replace(/<link[^>]*\/_next\/static\/chunks\/[^>]*>/g, '');
html = html.replace(/<link[^>]*rel="modulepreload"[^>]*>/g, '');
// フォントpreload(/_next/static/media)→publicパス
html = html.replace(/(<link[^>]*rel="preload"[^>]*href=")(?:\/_next\/static\/media\/)([^"]+\.woff2)("[^>]*>)/g,
  (m, a, base, b) => a + '/biz/fonts/' + base + b);

// Next.jsスクリプト除去（GTM等 biz自前のinline scriptは残す）
html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, (m) => {
  if (/\/_next\/static\//.test(m)) return '';
  if (/__next_f|self\.__next/.test(m)) return '';
  return m;
});
// src属性で /_next/static/ を指す残存script/link を一掃
html = html.replace(/<(script|link)[^>]*\/_next\/static\/[^>]*>(?:<\/script>)?/gi, '');

// CSSをinline注入
html = html.replace('</head>', '<style id="biz-inline-css">' + combinedCss + '</style></head>');

writeFileSync(ROOT + '/public/biz-top-static/index.html', html);
console.log('written:', (html.length / 1024).toFixed(0), 'KB');
console.log('残 /_next/static/chunks:', (html.match(/_next\/static\/chunks/g) || []).length,
  '| 残 __next_f:', (html.match(/__next_f/g) || []).length,
  '| 残 /_next/static/media:', (html.match(/_next\/static\/media/g) || []).length);
console.log('GTM:', (html.match(/GTM-KK696RSD/g) || []).length,
  '| inline @font-face:', (combinedCss.match(/@font-face/g) || []).length,
  '| logo-marquee:', (html.match(/logo-marquee/g) || []).length,
  '| 資料DL iframe:', (html.match(/form\.run\/embed/g) || []).length);
