import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BizFooter, BizHeader, BIZ_HEADER_OFFSET } from "../../_chrome/BizChrome";
import { getNewsById, newsBody, newsCategory, newsThumbnail } from "@/lib/microcms";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = await getNewsById((await params).id);
  if (!item) return { title: "お知らせ | バイテック法人AI研修" };
  return { title: `${item.title} | バイテック法人AI研修`, description: item.description || item.title, alternates: { canonical: `/news/${item.id}` } };
}

function formatDate(value?: string) {
  if (!value) return "";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value.slice(0, 10) : new Intl.DateTimeFormat("ja-JP", { year: "numeric", month: "numeric", day: "numeric" }).format(date);
}

function prepareBody(html: string) {
  const toc: { id: string; label: string; level: 2 | 3 }[] = [];
  let index = 0;
  const body = html.replace(/<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi, (_match, level, attrs, inner) => {
    const label = inner.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").trim();
    if (!label) return _match;
    const id = `news-section-${index++}`;
    toc.push({ id, label, level: Number(level) as 2 | 3 });
    return `<h${level}${attrs} id="${id}">${inner}</h${level}>`;
  });
  return { body, toc };
}

export default async function NewsDetailPage({ params }: Props) {
  const item = await getNewsById((await params).id);
  if (!item) notFound();
  const prepared = prepareBody(newsBody(item));
  return (
    <>
      <BizHeader />
      <main className="news-page news-detail" style={{ paddingTop: BIZ_HEADER_OFFSET }}>
        <div className="sem-wrap news-seminar-replica">
          <nav className="sem-breadcrumb"><Link href="/">TOP</Link><span> › </span><Link href="/news">ニュース</Link><span> › {item.title}</span></nav>
          <div className="news-detail-layout">
            <aside className="news-toc" aria-label="目次">
              <p className="news-toc__title">目次</p>
              {prepared.toc.length > 0 ? <ol>{prepared.toc.map((heading) => <li className={`news-toc__level-${heading.level}`} key={heading.id}><a href={`#${heading.id}`}>{heading.label}</a></li>)}</ol> : <p className="news-toc__empty">本文の見出しはありません</p>}
            </aside>
            <article className="sem-main news-article">
              <div className="sem-hero"><h1 className="sem-hero__title">{item.title}</h1>{newsThumbnail(item) ? <img className="news-article__thumbnail" src={newsThumbnail(item)} alt="" /> : null}<div className="sem-hero__bar"><div><span className="sem-hero__tag">{newsCategory(item)}</span><time className="sem-hero__date" dateTime={item.publishedAt || item.revisedAt}>{formatDate(item.publishedAt || item.revisedAt)}</time></div><div className="news-share"><span>SHARE</span><a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://biz.bytech.jp/news/${item.id}`)}`} aria-label="Xでシェア">𝕏</a><a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://biz.bytech.jp/news/${item.id}`)}`} aria-label="Facebookでシェア">f</a><a href={`mailto:?subject=${encodeURIComponent(item.title)}&body=${encodeURIComponent(`https://biz.bytech.jp/news/${item.id}`)}`} aria-label="メールで共有">▣</a></div></div></div>
              {prepared.body ? <div className="news-article__body" dangerouslySetInnerHTML={{ __html: prepared.body }} /> : <p className="news-empty">本文は準備中です。</p>}
            </article>
          </div>
        </div>
      </main>
      <BizFooter />
    </>
  );
}
