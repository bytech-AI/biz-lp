import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "返金ポリシー - バイテックBiz",
  description: "バイテックBizの返金ポリシーページです。",
  robots: "noindex",
};

export default function RefundPolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
