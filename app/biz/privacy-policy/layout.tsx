import type { Metadata } from "next";

export const metadata: Metadata = {
  // ルートレイアウトの canonical("/"=apex) を継承しないよう自ページを明示する
  alternates: { canonical: "/privacy-policy" },
  title: "プライバシーポリシー｜バイテックBiz",
  description: "バイテックBizのプライバシーポリシーページです。",
  robots: "noindex",
};

export default function PrivacyPolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
