"use client";

import { useEffect } from "react";

// シミュレーター本体は page.tsx のネイティブ<script>（GRANT_SCRIPT）にある。
// その起動をハイドレーション完了後まで遅らせるための合図だけを出す。
//
// なぜ必要か: GRANT_SCRIPT はパース時点で recalc() を呼び textContent を書き換えるため、
// サーバーHTMLとの不一致で React が hydration error #418 を出し、ツリーごとDOMを作り直す。
// そうなるとシミュレーターにもヘッダーにも張ったリスナーが全て失われる。
// load イベントでは間に合わない（React のハイドレーションは load より後に走ることがある）ため、
// useEffect（＝ハイドレーション後に確実に走る）から通知する。
// CarouselInit と同じ考え方。
export function GrantBoot() {
  useEffect(() => {
    (window as unknown as { __grantHydrated?: boolean }).__grantHydrated = true;
    window.dispatchEvent(new Event("grant:hydrated"));
  }, []);

  return null;
}
