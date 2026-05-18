import type { Metadata } from "next";
import { Noto_Sans_JP, Zen_Kaku_Gothic_New } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  preload: false,
  variable: "--font-noto-sans-jp",
});

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
  preload: false,
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
