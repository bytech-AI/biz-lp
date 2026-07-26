import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BizFooter, BizHeader, BIZ_HEADER_OFFSET } from "../../_chrome/BizChrome";
import { getNewsById, newsBody, newsCategory, newsThumbnail } from "@/lib/microcms";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = await getNewsById((await params).id);
  if (!item) return { title: "お知らせ | バイテックBiz" };
  const description = item.description || item.title;
  return {
    title: `${item.title} | バイテックBiz`,
    description,
    alternates: { canonical: `/news/${item.id}` },
    // 記事なので og:type は article。SNS共有時にサムネイルと日付が正しく出る。
    openGraph: {
      type: "article",
      title: item.title,
      description,
      url: `/news/${item.id}`,
      images: [newsThumbnail(item)],
      publishedTime: item.publishedAt,
      modifiedTime: item.revisedAt || item.publishedAt,
    },
    twitter: { card: "summary_large_image", title: item.title, description, images: [newsThumbnail(item)] },
  };
}

function formatDate(value?: string) {
  if (!value) return "";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value.slice(0, 10) : new Intl.DateTimeFormat("ja-JP", { year: "numeric", month: "numeric", day: "numeric" }).format(date);
}

// 見出しには h2/h3 とも id を振る（h3へも直接アンカーで飛べるようにするため）が、
// 目次に載せるのは h2 のみ。h3（カリキュラムのSTEPやFAQの各設問）まで並べると
// 目次が本文と同じ長さになり、記事の全体像が掴めなくなるため。
function prepareBody(html: string) {
  const toc: { id: string; label: string }[] = [];
  let index = 0;
  const body = html.replace(/<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi, (_match, level, attrs, inner) => {
    const label = inner.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").trim();
    if (!label) return _match;
    const id = `news-section-${index++}`;
    if (level === "2") toc.push({ id, label });
    return `<h${level}${attrs} id="${id}">${inner}</h${level}>`;
  });
  return { body, toc };
}

// LLMO/SEO: 本文の「よくあるご質問」以降の <h3>設問</h3><p>回答</p> を FAQPage に起こす。
// 表示中のQ&Aをそのままソースにするので、schemaと表示が常に一致する。
function extractFaq(html: string) {
  const section = html.split(/<h2[^>]*>\s*よくあるご質問\s*<\/h2>/i)[1];
  if (!section) return [];
  const strip = (s: string) => s.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").trim();
  const qa: { q: string; a: string }[] = [];
  const re = /<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(section))) {
    const q = strip(m[1]);
    const a = strip(m[2]);
    if (q && a) qa.push({ q, a });
  }
  return qa;
}

export default async function NewsDetailPage({ params }: Props) {
  const item = await getNewsById((await params).id);
  if (!item) notFound();
  const prepared = prepareBody(newsBody(item));

  // 構造化データ。記事本体(NewsArticle)＋パンくず＋本文にQ&Aがある場合はFAQPage。
  // 運営者は biz/layout.tsx の Organization を @id 参照して重複定義を避ける。
  const url = `https://biz.bytech.jp/news/${item.id}`;
  const faq = extractFaq(prepared.body);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NewsArticle",
        "@id": `${url}#article`,
        headline: item.title,
        description: item.description || item.title,
        url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        image: newsThumbnail(item).startsWith("http")
          ? newsThumbnail(item)
          : `https://biz.bytech.jp${newsThumbnail(item)}`,
        datePublished: item.publishedAt,
        dateModified: item.revisedAt || item.publishedAt,
        articleSection: newsCategory(item),
        inLanguage: "ja",
        author: { "@id": "https://biz.bytech.jp/#organization" },
        publisher: { "@id": "https://biz.bytech.jp/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "トップ", item: "https://biz.bytech.jp/" },
          { "@type": "ListItem", position: 2, name: "お知らせ", item: "https://biz.bytech.jp/news" },
          { "@type": "ListItem", position: 3, name: item.title, item: url },
        ],
      },
      ...(faq.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${url}#faq`,
              mainEntity: faq.map((x) => ({
                "@type": "Question",
                name: x.q,
                acceptedAnswer: { "@type": "Answer", text: x.a },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BizHeader />
      <main className="news-page news-detail" style={{ paddingTop: BIZ_HEADER_OFFSET }}>
        <div className="sem-wrap news-seminar-replica">
          <nav className="sem-breadcrumb"><Link href="/">TOP</Link><span> › </span><Link href="/news">ニュース</Link><span> › {item.title}</span></nav>
          <div className="news-detail-layout">
            <aside className="news-toc" aria-label="目次">
              <p className="news-toc__title">目次</p>
              {prepared.toc.length > 0 ? <ol>{prepared.toc.map((heading) => <li key={heading.id}><a href={`#${heading.id}`}>{heading.label}</a></li>)}</ol> : <p className="news-toc__empty">本文の見出しはありません</p>}
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
