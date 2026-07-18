import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に関する表示 - バイテック法人AI研修",
  description: "バイテック法人AI研修の特定商取引法に関する表示ページです。",
  robots: "noindex",
};

export default function SpecifiedCommercialLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
