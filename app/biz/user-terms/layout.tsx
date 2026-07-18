import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約 - バイテックBiz",
  robots: "noindex",
};

export default function UserTermsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
