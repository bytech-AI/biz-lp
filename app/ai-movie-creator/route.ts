import { staticHtmlResponse } from "@/lib/static-html-response";

export const runtime = "nodejs";
export const dynamic = "force-static";

export async function GET() {
  return staticHtmlResponse("ai-movie-creator-static/index.html");
}
