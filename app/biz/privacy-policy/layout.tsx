import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜バイテック法人AI研修",
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
