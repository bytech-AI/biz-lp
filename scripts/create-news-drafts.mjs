// docs/news-drafts/*.html を microCMS の news に「下書き」として一括登録する。
//
// 使い方: node scripts/create-news-drafts.mjs [--publish]
//   既定は下書き(status=draft)。--publish を付けたときだけ公開状態で作成する。
//
// 前提: .env の MICROCMS_API_KEY に PUT 権限が必要。
//   読み取り専用キーだと {"message":"PUT is forbidden."} が返る。
//   microCMS管理画面 → APIキー → 対象APIの PUT を許可すること。
import { readFileSync, readdirSync } from "node:fs";
import { join, basename } from "node:path";

const ROOT = process.cwd();
const DIR = join(ROOT, "docs", "news-drafts");
const PUBLISH = process.argv.includes("--publish");

// .env を読む（dotenv非依存）
for (const line of readFileSync(join(ROOT, ".env"), "utf8").split(/\r?\n/)) {
  const m = /^([A-Z0-9_]+)=(.*)$/.exec(line.trim());
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
}
const domain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;
const endpoint = process.env.MICROCMS_NEWS_ENDPOINT || "news";
if (!domain || !apiKey) throw new Error("MICROCMS_SERVICE_DOMAIN / MICROCMS_API_KEY が未設定です");

// 先頭のコメント3行がメタ、それ以降が本文HTML
function parse(file) {
  const raw = readFileSync(join(DIR, file), "utf8");
  const meta = (key) => (new RegExp(`<!--\\s*${key}:\\s*([\\s\\S]*?)-->`).exec(raw)?.[1] || "").trim();
  return {
    id: basename(file, ".html"),
    title: meta("title"),
    category: [meta("category")],
    description: meta("description"),
    content: raw.replace(/<!--[\s\S]*?-->\s*/g, "").trim(),
  };
}

const files = readdirSync(DIR).filter((f) => f.endsWith(".html")).sort();
let ok = 0;
for (const file of files) {
  const { id, ...body } = parse(file);
  const url = `https://${domain}.microcms.io/api/v1/${endpoint}/${id}${PUBLISH ? "" : "?status=draft"}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: { "X-MICROCMS-API-KEY": apiKey, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (res.ok) {
    ok++;
    console.log(`  OK   ${id}`);
  } else {
    console.error(`  FAIL ${id}  ${res.status} ${(await res.text()).slice(0, 160)}`);
  }
}
console.log(`\n${ok}/${files.length} 件を${PUBLISH ? "公開" : "下書き"}で登録しました。`);
if (ok < files.length) {
  console.log("PUT is forbidden の場合は microCMS でAPIキーに PUT 権限を付与してください。");
}
