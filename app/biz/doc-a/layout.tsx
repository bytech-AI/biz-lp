import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ホワイトペーパー(サービス説明資料) - バイテック法人AI研修",
  description:
    "バイテック法人AI研修の「サービス概要資料」のダウンロードページです。バイテック法人AI研修はAIを活用した業務課題の解決スキルを習得する実践型の法人向け生成AI研修サービスです。",
  robots: "noindex",
};

export default function DocALayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
