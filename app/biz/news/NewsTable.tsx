"use client";

import { useMemo, useState } from "react";
import type { MicroCmsNews } from "@/lib/microcms";
import { newsCategory, newsPath, newsThumbnail } from "@/lib/microcms";

const categories = ["すべて", "ニュース", "プレスリリース", "メディア掲載", "イベント&セミナー"];

function formatDate(value?: string) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value.slice(0, 10);
  return new Intl.DateTimeFormat("ja-JP", { year: "numeric", month: "numeric", day: "numeric" }).format(date);
}

export function NewsTable({ news }: { news: MicroCmsNews[] }) {
  const [selected, setSelected] = useState("すべて");
  const filtered = useMemo(
    () => selected === "すべて" ? news : news.filter((item) => newsCategory(item) === selected),
    [news, selected],
  );

  return (
    <>
      <div className="news-filter" role="tablist" aria-label="お知らせの種別">
        {categories.map((category) => (
          <button
            type="button"
            role="tab"
            aria-selected={selected === category}
            className={selected === category ? "is-active" : ""}
            key={category}
            onClick={() => setSelected(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <header className="news-list-heading"><h2>{selected === "すべて" ? "全てのお知らせ" : selected}</h2></header>

      {filtered.length > 0 ? (
        <div className="news-cards">
          {filtered.map((item) => (
            <a className="news-card" key={item.id} href={newsPath(item)}>
              <div className="news-card__thumb">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={newsThumbnail(item)} alt="" loading="lazy" />
              </div>
              <div className="news-card__body">
                <div className="news-card__meta">
                  <span className="news-category">{newsCategory(item)}</span>
                  <time className="news-card__date">{formatDate(item.publishedAt || item.revisedAt)}</time>
                </div>
                <h3 className="news-card__title">{item.title}</h3>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <p className="news-empty">現在公開中のお知らせはありません。</p>
      )}
    </>
  );
}
