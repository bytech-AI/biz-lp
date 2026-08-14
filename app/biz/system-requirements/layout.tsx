import type { Metadata } from "next";

export const metadata: Metadata = {
  // ルートレイアウトの canonical("/"=apex) を継承しないよう自ページを明示する
  alternates: { canonical: "/system-requirements" },
  title: "システム要件｜バイテック法人AI研修",
  description: "バイテックBizのシステム要件ページです。",
  robots: "noindex",
};

export default function SystemRequirementsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
