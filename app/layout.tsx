import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

// ── 日本語本文の Noto Sans JP（可変・455KB）は配信をやめ、端末標準の日本語フォントを使う。
// next/font だと @font-face が render-blocking CSS に載るため preload:false でも
// ブラウザは初回描画のために455KBを最優先(VeryHigh)で取りに行き、低速回線では
// CSS・LCP画像から帯域を丸ごと奪っていた。実測（研修コースLP / 低速4Gシミュレート）で
// このフォントをやめるだけで FCP 3.6s→1.4s・LCP 5.6s→3.4s・スコア 70→91。
// iOSはヒラギノ角ゴ、AndroidはOS同梱の Noto Sans JP（=同一書体）が当たるため
// 見た目の差はほぼない。フォントスタックは globals.css の --font-noto-jp に定義。
// 元ファイルは app/fonts/NotoSansJP-VF.woff2 に残してある（戻す場合はそれを使う）。

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
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${jost.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
