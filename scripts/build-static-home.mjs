import { readFileSync, writeFileSync, copyFileSync, existsSync, mkdirSync } from 'node:fs';
const BASE = 'http://localhost:3002';
const ROOT = process.cwd();
mkdirSync(ROOT + '/public/bytech/fonts', { recursive: true });

let html = await (await fetch(BASE + '/')).text();

const cssHrefs = [...html.matchAll(/<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/g)].map(m => m[1])
  .filter(h => h.includes('/_next/static/chunks/'));
let combinedCss = '';
for (const href of cssHrefs) combinedCss += await (await fetch(BASE + href)).text() + '\n';

// フォント: url(../media/X.woff2) と url(/_next/static/media/X.woff2) 両形式 → publicへコピー＆書換
const fontBases = new Set();
combinedCss = combinedCss.replace(/url\((?:\.\.\/media\/|\/_next\/static\/media\/)([^)]+\.woff2)\)/g, (m, base) => {
  fontBases.add(base);
  const src = ROOT + '/.next/static/media/' + base;
  const dest = ROOT + '/public/bytech/fonts/' + base;
  if (existsSync(src)) copyFileSync(src, dest);
  return 'url(/bytech/fonts/' + base + ')';
});
console.log('fonts copied:', [...fontBases].length, [...fontBases].map(b=>b.split('-')[0]).join(','));

// 元CSSチャンク<link>削除
html = html.replace(/<link[^>]*rel="stylesheet"[^>]*href="\/_next\/static\/chunks\/[^"]+"[^>]*>/g, '');
// preload/modulepreload で /_next/static/ を指すものを全削除（JSチャンク先読み）
html = html.replace(/<link[^>]*\/_next\/static\/chunks\/[^>]*>/g, '');
html = html.replace(/<link[^>]*rel="modulepreload"[^>]*>/g, '');
// フォントpreload(/_next/static/media)→publicパス
html = html.replace(/(<link[^>]*rel="preload"[^>]*href=")(?:\/_next\/static\/media\/)([^"]+\.woff2)("[^>]*>)/g,
  (m, a, base, b) => a + '/bytech/fonts/' + base + b);

// Next.jsスクリプト除去（GTM/Ahrefsは残す）
html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, (m) => {
  if (/\/_next\/static\//.test(m)) return '';
  if (/__next_f|self\.__next/.test(m)) return '';
  return m;
});
// 残存する /_next/static/ 参照のlink/script を念のため一掃
html = html.replace(/<(script|link)[^>]*\/_next\/static\/[^>]*>(?:<\/script>)?/gi, '');

// CSSをinline注入
html = html.replace('</head>', '<style id="home-inline-css">' + combinedCss + '</style></head>');
// 自前JS追加
const scripts = '<script src="/bytech/assets/js/home-carousels.js" defer></script>\n<script src="/bytech/assets/js/bytech-lp.js" defer></script>\n';
html = html.replace('</body>', scripts + '</body>');

writeFileSync(ROOT + '/public/bytech-home-static/index.html', html);
console.log('written:', (html.length/1024).toFixed(0), 'KB');
console.log('残 /_next/static/chunks:', (html.match(/_next\/static\/chunks/g)||[]).length,
            '| 残 __next_f:', (html.match(/__next_f/g)||[]).length,
            '| 残 /_next/static/media:', (html.match(/_next\/static\/media/g)||[]).length);
console.log('GTM:', (html.match(/GTM-K6HH9C2F/g)||[]).length, '| Ahrefs:', (html.match(/ahrefs/g)||[]).length,
            '| /_next/image:', (html.match(/_next\/image/g)||[]).length,
            '| inline @font-face:', (combinedCss.match(/@font-face/g)||[]).length);
