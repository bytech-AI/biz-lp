import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "システム要件 - バイテック法人AI研修",
  description: "バイテック法人AI研修のシステム要件ページです。",
  robots: "noindex",
};

export default function SystemRequirementsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
