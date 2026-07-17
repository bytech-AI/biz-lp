"use client";

import { useEffect, useState } from "react";
import { FAQ_GROUPS } from "./data";

export function FaqList() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [activeCat, setActiveCat] = useState(0);

  // スクロール位置に応じて左ナビの現在地をハイライト
  useEffect(() => {
    const sections = FAQ_GROUPS.map((_, i) =>
      document.getElementById(`faq-cat-${i}`),
    ).filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) {
          setActiveCat(Number(visible.target.id.replace("faq-cat-", "")));
        }
      },
      { rootMargin: "-120px 0px -70% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="faq-layout">
      <aside className="faq-nav" aria-label="カテゴリ内リンク">
        <ul className="faq-nav__list">
          {FAQ_GROUPS.map((group, groupIndex) => (
            <li key={group.category}>
              <a
                href={`#faq-cat-${groupIndex}`}
                className={activeCat === groupIndex ? "is-active" : undefined}
              >
                {group.category}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      <div className="faq-main">
        {FAQ_GROUPS.map((group, groupIndex) => (
          <section
            className="faq-group"
            id={`faq-cat-${groupIndex}`}
            key={group.category}
          >
            <h2 className="faq-group__title">{group.category}</h2>
            <div className="faq-list">
              {group.items.map((item, index) => {
                const key = `${groupIndex}-${index}`;
                const isOpen = !!open[key];
                return (
                  <div
                    className={`faq-item${isOpen ? " is-open" : ""}`}
                    key={key}
                  >
                    <button
                      type="button"
                      className="faq-q"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpen((prev) => ({ ...prev, [key]: !prev[key] }))
                      }
                    >
                      <span className="faq-q__label">
                        <span className="faq-q__mark">Q.</span>
                        {item.q}
                      </span>
                      <span className="faq-q__icon" aria-hidden="true" />
                    </button>
                    {isOpen ? (
                      <div className="faq-a">
                        <p>{item.a}</p>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
