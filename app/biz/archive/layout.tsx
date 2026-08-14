import type { Metadata } from "next";

export const metadata: Metadata = {
  // ルートレイアウトの canonical("/"=apex) を継承しないよう自ページを明示する
  alternates: { canonical: "/archive" },
  title: "セミナー動画アーカイブ｜バイテック法人AI研修",
  description:
    "バイテックBizが開催した法人向け生成AI活用セミナーの動画アーカイブ一覧です。過去のセミナーをいつでもご視聴いただけます。",
  robots: { index: true, follow: true },
};

export default function ArchiveLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
