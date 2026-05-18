import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "【公式】バイテックBiz",
  description: "AIを最高の部下に変えるハンズオン型法人向けAI研修",
  robots: { index: true, follow: true },
  icons: {
    icon: "/biz/assets/img/common/favicon.svg",
  },
};

export default function BizLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`biz-root ${montserrat.variable}`} style={{ all: "initial" }}>{children}</div>;
}
