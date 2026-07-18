import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "システム要件 - バイテックBiz",
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
