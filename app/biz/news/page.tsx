import type { Metadata } from "next";
import Link from "next/link";
import { BizFooter, BizHeader, BIZ_HEADER_OFFSET } from "../_chrome/BizChrome";
import { getNews } from "@/lib/microcms";
import { NewsTable } from "./NewsTable";

export const metadata: Metadata = {
  title: "お知らせ | バイテック法人AI研修",
  description: "バイテック法人AI研修からのお知らせ、プレスリリース、メディア掲載情報をご案内します。",
  alternates: { canonical: "/news" },
  openGraph: { title: "お知らせ | バイテック法人AI研修", description: "バイテック法人AI研修からのお知らせ、プレスリリース、メディア掲載情報をご案内します。", url: "/news" },
};

export default async function NewsPage() {
  const news = await getNews();
  return (
    <>
      <BizHeader />
      <main className="news-page" style={{ paddingTop: BIZ_HEADER_OFFSET }}>
        <div className="news-page__inner">
          <nav className="news-breadcrumb" aria-label="パンくず"><Link href="/">トップ</Link><span>›</span><span>お知らせ</span></nav>
          <header className="news-fv"><h1>お知らせ</h1></header>
          <NewsTable news={news} />
        </div>
      </main>
      <BizFooter />
    </>
  );
}
