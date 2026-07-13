import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-static";

// biz トップ(biz.bytech.jp/)は静的HTML化して配信（React/ハイドレーション排除）。
// 実体は public/biz-top-static/index.html（scripts/build-static-biz.mjs で生成・コミット済み）。
export async function GET() {
  const html = await readFile(
    join(process.cwd(), "public", "biz-top-static", "index.html"),
    "utf8",
  );
  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=0, must-revalidate",
    },
  });
}
