import type { Metadata } from "next";
import { getSeminar } from "../data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const seminar = getSeminar(slug);
  if (!seminar) {
    return { title: "セミナーアーカイブ｜バイテックBiz", robots: { index: false } };
  }
  const description = seminar.overview[0]?.slice(0, 110) ?? seminar.lead;
  return {
    title: `${seminar.title}｜セミナーアーカイブ｜バイテックBiz`,
    description,
    robots: { index: true, follow: true },
    // ルートレイアウトの canonical("/"=apex) を継承しないよう自ページを明示する
    alternates: { canonical: `/seminars/${seminar.slug}` },
    openGraph: {
      type: "article",
      title: seminar.title,
      description,
      url: `https://biz.bytech.jp/seminars/${seminar.slug}`,
      siteName: "バイテックBiz",
      locale: "ja_JP",
    },
  };
}

export default function SeminarLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
