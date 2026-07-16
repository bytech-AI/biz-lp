import type { Metadata } from "next";
import localFont from "next/font/local";
import { Jost } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const notoSansJp = localFont({
  src: "./fonts/NotoSansJP-VF.woff2",
  weight: "100 900",
  variable: "--font-noto-jp",
  display: "swap",
  // 455KB の可変フォント。preload するとLCP画像と帯域を奪い合うため無効化。
  // display:swap でシステム日本語フォント表示 → 読込後にスワップ。
  preload: false,
});

// 英語(ラテン文字)用: Futura系の幾何学サンセリフ
const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-jost",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bytech.jp"),
  title: "【公式】バイテック生成AI｜未経験からプロのAI活用人材を目指せる実践型AIスクール",
  description: "最短2ヶ月で年収・キャリアを上げるAI活用スキルを武器に。成果直結の実践型オンラインAIスクール「バイテック生成AI」。2500人以上の受講生が実績を上げています。",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSansJp.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Script
          src="https://sdk.form.run/js/v2/formrun.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
