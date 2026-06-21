import type { Metadata } from "next";
import './bytech.css';

export const metadata: Metadata = {
  title: "【公式】バイテック生成AI｜未経験からプロのAI活用人材を目指せる実践型AIスクール",
  description: "最短2ヶ月で年収・キャリアを上げるAI活用スキルを武器に。成果直結の実践型オンラインAIスクール「バイテック生成AI」。2500人以上の受講生が実績を上げています。",
  robots: { index: true, follow: true },
  icons: {
    icon: "/bytech/assets/images/favicon.png",
    apple: "/bytech/assets/images/favicon.png",
  },
  alternates: {
    canonical: "https://bytech.jp/",
  },
};

export default function BytechLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="bytech-root">{children}</div>;
}
