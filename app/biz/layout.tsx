import type { Metadata } from "next";
import localFont from "next/font/local";

const montserrat = localFont({
  src: [
    {
      path: "../fonts/Montserrat-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Montserrat-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
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
  return <div className={`biz-root ${montserrat.variable}`}>{children}</div>;
}
