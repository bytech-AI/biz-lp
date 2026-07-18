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
    return { title: "セミナーアーカイブ | バイテック法人AI研修" };
  }
  const description = seminar.overview[0]?.slice(0, 110) ?? seminar.lead;
  return {
    title: `${seminar.title} | セミナーアーカイブ | バイテック法人AI研修`,
    description,
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      title: seminar.title,
      description,
      url: `https://biz.bytech.jp/seminars/${seminar.slug}`,
      siteName: "バイテック法人AI研修",
      locale: "ja_JP",
    },
  };
}

export default function SeminarLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
