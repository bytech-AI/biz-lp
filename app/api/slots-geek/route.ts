// geek.bytech.jp のカレンダー用（lp_type=geek）。
// geek ホストからは proxy が /api/slots をここへリライトする。
import { fetchSlots } from "@/lib/gas-slots";

export const runtime = "nodejs";
export const dynamic = "force-static";
// NOTE: Next はセグメント設定をリテラルでしか解決できない（定数参照だとビルドが
// "Invalid segment configuration export" で落ちる）。lib 側の SLOTS_REVALIDATE と揃えること。
export const revalidate = 30;

export function GET() {
  return fetchSlots("geek");
}
