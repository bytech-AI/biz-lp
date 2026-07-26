import { getNews } from "@/lib/microcms";

// biz.bytech.jp/sitemap.xml（proxy.ts が /biz/sitemap.xml へリライトしている）。
// お知らせは microCMS 管理なので、静的ファイルだと記事を追加するたび更新漏れが起きる
// （実際に研修コース7本が未登録のままだった）。ここで一覧APIから毎回組み立てる。
// 固定ページはコード側に持つ。追加したらここに1行足すこと。

const BASE = "https://biz.bytech.jp";

type Entry = { path: string; lastmod: string; priority: string };

const STATIC_PAGES: Entry[] = [
  { path: "/", lastmod: "2026-07-26", priority: "1.0" },
  { path: "/chat-gpt-training", lastmod: "2026-07-26", priority: "0.9" },
  { path: "/gemini-training", lastmod: "2026-07-26", priority: "0.9" },
  { path: "/claude-training", lastmod: "2026-07-26", priority: "0.9" },
  { path: "/claude-code-training", lastmod: "2026-07-26", priority: "0.9" },
  { path: "/copilot-training", lastmod: "2026-07-26", priority: "0.9" },
  { path: "/copilot-studio-training", lastmod: "2026-07-26", priority: "0.9" },
  { path: "/creative-ai-training", lastmod: "2026-07-26", priority: "0.9" },
  { path: "/dify-training", lastmod: "2026-07-26", priority: "0.9" },
  { path: "/archive", lastmod: "2026-07-16", priority: "0.8" },
  { path: "/counseling", lastmod: "2026-07-24", priority: "0.8" },
  { path: "/documents", lastmod: "2026-07-16", priority: "0.7" },
  { path: "/faq", lastmod: "2026-07-24", priority: "0.7" },
  { path: "/doc-a", lastmod: "2026-07-24", priority: "0.7" },
  { path: "/grant", lastmod: "2026-07-24", priority: "0.7" },
  { path: "/seminars/seminar-6", lastmod: "2026-07-16", priority: "0.7" },
  { path: "/seminars/seminar-5", lastmod: "2026-07-16", priority: "0.7" },
  { path: "/seminars/seminar-4", lastmod: "2026-07-16", priority: "0.7" },
  { path: "/seminars/seminar-3", lastmod: "2026-07-16", priority: "0.7" },
  { path: "/seminars/seminar-2", lastmod: "2026-07-16", priority: "0.7" },
  { path: "/seminars/seminar-1", lastmod: "2026-07-16", priority: "0.7" },
  { path: "/news", lastmod: "2026-07-26", priority: "0.6" },
];

function tag({ path, lastmod, priority }: Entry) {
  return `  <url><loc>${BASE}${path}</loc><lastmod>${lastmod}</lastmod><priority>${priority}</priority></url>`;
}

export const revalidate = 3600;

export async function GET() {
  const news = await getNews(100);
  const entries: Entry[] = [
    ...STATIC_PAGES,
    ...news.map((item) => ({
      path: `/news/${encodeURIComponent(item.id)}`,
      lastmod: (item.revisedAt || item.publishedAt || "").slice(0, 10) || "2026-07-26",
      priority: "0.6",
    })),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(tag).join("\n")}
</urlset>
`;
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
