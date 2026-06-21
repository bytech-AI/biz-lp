import { staticHtmlResponse } from "@/lib/static-html-response";

export const runtime = "nodejs";
export const dynamic = "force-static";

// / (bytech.jp ルート) は静的HTML化したホームを配信（React/ハイドレーション排除）。
export async function GET() {
  return staticHtmlResponse("bytech-home-static/index.html");
}
