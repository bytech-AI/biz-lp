import { readFile } from "node:fs/promises";
import { join } from "node:path";

const htmlCache = new Map<string, Promise<string>>();

const headers = {
  "content-type": "text/html; charset=utf-8",
  "cache-control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
};

function readStaticHtml(relativePath: string) {
  const cached = htmlCache.get(relativePath);
  if (cached) {
    return cached;
  }

  const html = readFile(join(process.cwd(), "public", relativePath), "utf8");
  htmlCache.set(relativePath, html);
  return html;
}

export async function staticHtmlResponse(relativePath: string) {
  return new Response(await readStaticHtml(relativePath), { headers });
}
