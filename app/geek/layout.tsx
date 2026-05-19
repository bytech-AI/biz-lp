import type { Metadata } from "next";
import localFont from "next/font/local";

const notoSansJP = localFont({
  src: "../fonts/NotoSansJP-VF.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-noto-sans-jp",
});

const zenKakuGothicNew = localFont({
  src: [
    {
      path: "../fonts/ZenKakuGothicNew-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ZenKakuGothicNew-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-zen-kaku",
});

export const metadata: Metadata = {
  title: "バイテックGeek | Claude Code特化のオンラインAIスクール",
  description:
    "Claude Code特化で実装力と収益化スキルを身につける、バイテックGeekのオンラインAIスクール。",
  robots: { index: false, follow: false },
};

export default function GeekLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${notoSansJP.variable} ${zenKakuGothicNew.variable}`}>
      {children}
    </div>
  );
}
