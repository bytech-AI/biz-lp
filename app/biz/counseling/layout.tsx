import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "無料個別相談予約 - バイテックBiz",
  description:
    "バイテックBizの無料個別相談予約ページです。社内でのAI活用方法や学ぶべき内容など、課題やお悩みに合わせた解決策をご提案します。",
  robots: "noindex",
};

export default function CounselingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
