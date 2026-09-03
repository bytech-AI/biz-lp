// 予約枠の取得を Google Apps Script から直接叩くと TTFB が実測3〜4秒（悪いときは20秒超）
// かかり、/counseling のカレンダー表示がそのぶん待たされる。GAS 側は触れないため、
// ここでラップして Vercel の CDN にキャッシュさせる。
//
// force-static + revalidate により ISR となり、レスポンスには
// s-maxage / stale-while-revalidate が付く。期限切れ後の再取得はバックグラウンドで走り、
// その間の閲覧者にはキャッシュ済みのレスポンスが即座に返る。
//
// 枠の鮮度について: 最大で revalidate 秒ぶん古い枠一覧が出る可能性がある。
// ただし予約確定(action=book)は GAS を直接叩いており、GAS 側が満席を弾いて
// result.error を返す（ウィジェットが alert 表示）ため、二重予約にはならない。
export const runtime = "nodejs";
export const dynamic = "force-static";
export const revalidate = 30;

const GAS_URL =
  "https://script.google.com/macros/s/AKfycbzFK2HDxL3BwTfK2DBR8flrCIll2lr5ZyOB1W9Vy5s6V5EcAIhNc_plwDu-lFMCU__1fg/exec";

export async function GET() {
  // 上流が落ちている場合は例外にする。ISR は直前の成功レスポンスを配り続けるので、
  // GAS の一時障害がそのままカレンダー表示不能にならない。
  const upstream = await fetch(`${GAS_URL}?action=slots&lp_type=biz`, {
    next: { revalidate },
  });
  if (!upstream.ok) {
    throw new Error(`GAS responded ${upstream.status}`);
  }

  const text = await upstream.text();
  // GAS はエラー時に HTML を返すことがある。JSON として妥当なものだけキャッシュに載せる。
  const parsed: unknown = JSON.parse(text);

  return new Response(JSON.stringify(parsed), {
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}
