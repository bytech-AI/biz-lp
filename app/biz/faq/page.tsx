import type { Metadata } from "next";
import Link from "next/link";
import { BizFooter, BizHeader, BIZ_HEADER_OFFSET } from "../_chrome/BizChrome";
import { FaqList } from "./FaqList";
import { FAQ_GROUPS } from "./data";
import "./faq-page.css";

export const metadata: Metadata = {
  title: "よくあるご質問 | バイテック法人AI研修",
  description:
    "バイテック法人AI研修（法人向け生成AI研修）へのよくあるご質問。サービス内容・研修カリキュラム・料金・導入の流れ・サポート体制・セキュリティについてまとめました。",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "よくあるご質問 | バイテック法人AI研修",
    description:
      "バイテック法人AI研修（法人向け生成AI研修）へのよくあるご質問をカテゴリ別にまとめました。",
    url: "/faq",
  },
};

// FAQPage 構造化データ（Google のFAQリッチリザルト用）。data.ts を唯一のソースにする。
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_GROUPS.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  ),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <BizHeader />
      <main className="news-page" style={{ paddingTop: BIZ_HEADER_OFFSET }}>
        <div className="news-page__inner">
          <nav className="news-breadcrumb" aria-label="パンくず">
            <Link href="/">トップ</Link>
            <span>›</span>
            <span>よくあるご質問</span>
          </nav>
          <header className="news-fv">
            <h1>よくあるご質問</h1>
          </header>

          <FaqList />

          <section className="faq-cta">
            <p className="faq-cta__title">まずはお気軽にご相談ください</p>
            <p className="faq-cta__text">
              ご不明な点は無料個別相談で。サービス資料のダウンロードもこちらから。
            </p>
            <div className="faq-cta__actions">
              <a className="faq-cta__btn faq-cta__btn--fill" href="/counseling">
                無料個別相談を予約する
              </a>
              <a className="faq-cta__btn faq-cta__btn--outline" href="/doc-a">
                資料をダウンロード
              </a>
            </div>
          </section>
        </div>
      </main>
      <BizFooter />
    </>
  );
}
