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
  metadataBase: new URL("https://biz.bytech.jp"),
  title: "【公式】バイテックBiz",
  description: "AIを最高の部下に変えるハンズオン型法人向けAI研修",
  robots: { index: true, follow: true },
  icons: {
    icon: "/biz/assets/img/common/favicon.ico",
  },
};

export default function BizLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`biz-root ${montserrat.variable}`}>
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
