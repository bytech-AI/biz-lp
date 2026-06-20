import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-static";

export async function GET() {
  const htmlPath = join(process.cwd(), "public", "gemini-master-static", "index.html");
  const raw = await readFile(htmlPath, "utf8");
  // 全ページ共通: 見出しウェイト統一 (h2=900 / h3=800)
  const headingStyle =
    '<style id="bt-heading-weight">h2{font-weight:900!important}h3{font-weight:800!important}</style>';
  const html = raw.includes("bt-heading-weight")
    ? raw
    : raw.replace("</head>", `${headingStyle}</head>`);

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
}
