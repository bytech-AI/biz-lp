import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お役立ち資料一覧 | バイテックBiz",
  description:
    "法人のAI活用・生成AI研修に役立つホワイトペーパーや事例集などの資料を無料でダウンロードいただけます。",
  robots: { index: true, follow: true },
};

export default function DocumentsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
