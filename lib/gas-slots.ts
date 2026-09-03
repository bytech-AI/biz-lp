// 予約枠(action=slots)の取得を Google Apps Script に直接投げると TTFB が実測3〜4秒
// （悪いときは20秒超）かかり、カレンダーがそのぶん表示されない。GAS 側は触れないため
// Route Handler でラップし、Vercel の CDN にキャッシュさせる。
//
// 各ルートで force-static + revalidate を宣言して ISR にする（レスポンスに
// s-maxage / stale-while-revalidate が付く）。lp_type ごとに枠が違うので、
// ルートを分けてキャッシュエントリを分離している。
export const GAS_URL =
  "https://script.google.com/macros/s/AKfycbzFK2HDxL3BwTfK2DBR8flrCIll2lr5ZyOB1W9Vy5s6V5EcAIhNc_plwDu-lFMCU__1fg/exec";

export const SLOTS_REVALIDATE = 30;

export async function fetchSlots(lpType?: string) {
  const query = lpType
    ? `?action=slots&lp_type=${encodeURIComponent(lpType)}`
    : "?action=slots";

  // 上流が落ちている場合は例外にする。ISR は直前の成功レスポンスを配り続けるので、
  // GAS の一時障害がそのままカレンダー表示不能にならない。
  const upstream = await fetch(`${GAS_URL}${query}`, {
    next: { revalidate: SLOTS_REVALIDATE },
  });
  if (!upstream.ok) {
    throw new Error(`GAS responded ${upstream.status}`);
  }

  // GAS はエラー時に HTML を返すことがある。JSON として妥当なものだけキャッシュに載せる。
  const parsed: unknown = JSON.parse(await upstream.text());

  return new Response(JSON.stringify(parsed), {
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}
