"use client";

import { useEffect } from "react";

// ピックアップのカルーセル制御（CSS scroll-snap + 軽量JS）。
// useEffect で「ハイドレーション後」に初期化するため、DOM を書き換えても
// サーバーHTMLとのハイドレーション不整合が起きない（インライン<script>だと
// ハイドレーション前に disabled 等を書き換え mismatch になっていた）。
export function CarouselInit() {
  useEffect(() => {
    const roots = document.querySelectorAll<HTMLElement>("[data-dl-carousel]");
    const cleanups: (() => void)[] = [];

    roots.forEach((root) => {
      const vp = root.querySelector<HTMLElement>(".dl-car__vp");
      const slides = root.querySelectorAll<HTMLElement>(".dl-car__slide");
      const prev = root.querySelector<HTMLButtonElement>(".dl-car__arrow--prev");
      const next = root.querySelector<HTMLButtonElement>(".dl-car__arrow--next");
      const dots = root.querySelectorAll<HTMLElement>(".dl-car__dot");
      if (!vp || !slides.length) return;

      const idx = () => Math.round(vp.scrollLeft / vp.clientWidth);
      const go = (i: number) => {
        i = Math.max(0, Math.min(slides.length - 1, i));
        vp.scrollTo({ left: i * vp.clientWidth, behavior: "smooth" });
      };
      const sync = () => {
        const i = idx();
        dots.forEach((d, di) => d.classList.toggle("is-active", di === i));
        if (prev) prev.disabled = i <= 0;
        if (next) next.disabled = i >= slides.length - 1;
      };

      const onPrev = () => go(idx() - 1);
      const onNext = () => go(idx() + 1);
      prev?.addEventListener("click", onPrev);
      next?.addEventListener("click", onNext);
      const dotHandlers: (() => void)[] = [];
      dots.forEach((d, di) => {
        const h = () => go(di);
        dotHandlers.push(h);
        d.addEventListener("click", h);
      });

      let raf = 0;
      const onScroll = () => {
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(sync);
      };
      vp.addEventListener("scroll", onScroll, { passive: true });
      sync();

      cleanups.push(() => {
        prev?.removeEventListener("click", onPrev);
        next?.removeEventListener("click", onNext);
        dots.forEach((d, di) => d.removeEventListener("click", dotHandlers[di]));
        vp.removeEventListener("scroll", onScroll);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
