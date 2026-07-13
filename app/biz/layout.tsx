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
  // 英字アクセント用途で使用箇所が少ない。preload無効化でLCP優先。
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://biz.bytech.jp"),
  title: "【公式】バイテックBiz",
  description: "AIを最高の部下に変えるハンズオン型法人向けAI研修",
  robots: { index: true, follow: true },
  icons: {
    icon: "/biz/assets/img/common/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://biz.bytech.jp/",
    siteName: "バイテックBiz",
    title: "【公式】バイテックBiz",
    description: "AIを最高の部下に変えるハンズオン型法人向けAI研修",
    locale: "ja_JP",
    images: [
      {
        url: "/biz/assets/img/common/ogp.jpg",
        width: 1200,
        height: 695,
        alt: "バイテックBiz｜業務の自動化を、組織の当たり前に。",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "【公式】バイテックBiz",
    description: "AIを最高の部下に変えるハンズオン型法人向けAI研修",
    images: ["/biz/assets/img/common/ogp.jpg"],
  },
};

// サイト名を「バイテックBiz」でGoogleに確定させる最優先シグナル（WebSite）＋運営者情報（Organization）。
// 会社情報は特商法ページ準拠（株式会社AI棒／恵比寿）。
const bizJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://biz.bytech.jp/#organization",
      name: "バイテックBiz",
      alternateName: ["byTech Business", "バイテックBiz"],
      url: "https://biz.bytech.jp/",
      logo: "https://biz.bytech.jp/biz/assets/img/common/hd-logo.svg",
      image: "https://biz.bytech.jp/biz/assets/img/common/ogp.jpg",
      description:
        "AIを最高の部下に変えるハンズオン型法人向けAI研修。業務の自動化を組織の当たり前にする、実践特化の法人向けAI研修サービス。",
      parentOrganization: { "@type": "Organization", name: "株式会社AI棒" },
      address: {
        "@type": "PostalAddress",
        postalCode: "150-0021",
        addressRegion: "東京都",
        addressLocality: "渋谷区",
        streetAddress: "恵比寿西2丁目4番8号ウィンド恵比寿ビル8F",
        addressCountry: "JP",
      },
      email: "support@bytech.jp",
      areaServed: "JP",
      inLanguage: "ja",
    },
    {
      "@type": "WebSite",
      "@id": "https://biz.bytech.jp/#website",
      url: "https://biz.bytech.jp/",
      name: "バイテックBiz",
      publisher: { "@id": "https://biz.bytech.jp/#organization" },
      inLanguage: "ja",
    },
  ],
};

export default function BizLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`biz-root ${montserrat.variable}`}>
      {/* 構造化データ（WebSite＋Organization）。Google のサイト名・運営者情報の最優先シグナル。 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bizJsonLd) }}
      />
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KK696RSD"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      {/* Google Tag Manager — ネイティブ<script>（next/scriptはNext16でinline評価が壊れ発火しないため不使用）
          GTM/GAは重く(約400ms)TBTを悪化させるため、初回操作 or アイドル(最大5秒)まで遅延ロード。
          dataLayerは即時に初期化しpushはキューされるので計測は維持される。 */}
      <script dangerouslySetInnerHTML={{ __html: `(function(w,d){
  w.dataLayer=w.dataLayer||[];
  var fired=false;
  function loadGTM(){
    if(fired)return; fired=true;
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(w,d,'script','dataLayer','GTM-KK696RSD');
  }
  var evs=['scroll','mousemove','touchstart','keydown','click'];
  evs.forEach(function(e){w.addEventListener(e,loadGTM,{once:true,passive:true});});
  if('requestIdleCallback' in w){w.requestIdleCallback(loadGTM,{timeout:5000});}else{setTimeout(loadGTM,4000);}
})(window,document);` }} />
      {/* End Google Tag Manager */}
      {children}
    </div>
  );
}
