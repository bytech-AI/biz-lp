import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "返金ポリシー｜バイテック法人AI研修",
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
