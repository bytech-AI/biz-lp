export type MicroCmsNews = {
  id: string;
  title: string;
  category?: string | string[] | { name?: string };
  publishedAt?: string;
  revisedAt?: string;
  content?: string;
  body?: string;
  description?: string;
  slug?: string;
  thumbnail?: { url?: string } | string;
  eyecatch?: { url?: string } | string;
};

type MicroCmsResponse = {
  contents?: MicroCmsNews[];
  totalCount?: number;
};

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;
const endpoint = process.env.MICROCMS_NEWS_ENDPOINT || "news";
const documentsEndpoint = process.env.MICROCMS_DOCUMENTS_ENDPOINT || "documents";

const demoNews: MicroCmsNews[] = [];

function apiUrl(path = "", ep = endpoint) {
  if (!serviceDomain) return null;
  return `https://${serviceDomain}.microcms.io/api/v1/${ep}${path}`;
}

export function newsCategory(news: MicroCmsNews) {
  const category = news.category;
  if (Array.isArray(category)) return category[0] || "ニュース";
  if (typeof category === "string") return category;
  return category?.name || "ニュース";
}

export function newsBody(news: MicroCmsNews) {
  return news.content || news.body || "";
}

export function newsThumbnail(news: MicroCmsNews) {
  const image = news.thumbnail || news.eyecatch;
  return (typeof image === "string" ? image : image?.url) || "/biz/assets/img/common/ogp-v2.jpg";
}

export function newsPath(news: MicroCmsNews) {
  return `/news/${encodeURIComponent(news.id)}`;
}

export async function getNews(limit = 100): Promise<MicroCmsNews[]> {
  const url = apiUrl(`?limit=${limit}&orders=-publishedAt`);
  if (!url || !apiKey) return demoNews;

  try {
    const response = await fetch(url, {
      headers: { "X-MICROCMS-API-KEY": apiKey },
      next: { revalidate: 300 },
    });
    if (!response.ok) return demoNews;
    const data = (await response.json()) as MicroCmsResponse;
    return data.contents || demoNews;
  } catch {
    return demoNews;
  }
}

export async function getNewsById(id: string): Promise<MicroCmsNews | null> {
  const url = apiUrl(`/${encodeURIComponent(id)}`);
  if (!url || !apiKey) return demoNews.find((item) => item.id === id) || null;

  try {
    const response = await fetch(url, {
      headers: { "X-MICROCMS-API-KEY": apiKey },
      next: { revalidate: 300 },
    });
    if (!response.ok) return demoNews.find((item) => item.id === id) || null;
    return (await response.json()) as MicroCmsNews;
  } catch {
    return demoNews.find((item) => item.id === id) || null;
  }
}

/* ============================================================
 * お役立ち資料（documents）
 * スキーマ: docs/microcms-documents-schema.md
 * 配布はフォーム経由メール送付のため、ファイル項目は持たず formUrl を保持する。
 * ============================================================ */

export type MicroCmsDocument = {
  id: string;
  title: string;
  eyebrow?: string;
  points?: string; // テキストエリア（改行区切り）
  recos?: string; // ヒーロー用「こんな方におすすめ」（改行区切り）
  category?: string | string[]; // 単一セレクトは配列で返るためどちらも許容
  thumbnail?: { url?: string } | string;
  thumbLabel?: string;
  formUrl?: string;
  isHero?: boolean;
  isPickup?: boolean;
  order?: number;
  publishedAt?: string;
};

// カテゴリ名 → セクション英字ラベル。未定義なら日本語名をそのまま使う。
export const CATEGORY_EN: Record<string, string> = {
  サービス概要: "Service",
  AI活用ノウハウ: "Knowledge",
};

export function docCategory(doc: MicroCmsDocument): string {
  const category = doc.category;
  if (Array.isArray(category)) return category[0] || "その他";
  return category || "その他";
}

export function docCategoryEn(name: string): string {
  return CATEGORY_EN[name] || name;
}

// テキストエリアを箇条書き配列に。空行はスキップ。
export function docLines(text?: string): string[] {
  if (!text) return [];
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

export function docThumbnail(doc: MicroCmsDocument): string | null {
  const image = doc.thumbnail;
  const url = typeof image === "string" ? image : image?.url;
  return url || null;
}

export async function getDocuments(limit = 100): Promise<MicroCmsDocument[]> {
  const url = apiUrl(`?limit=${limit}&orders=order`, documentsEndpoint);
  if (!url || !apiKey) return [];

  try {
    const response = await fetch(url, {
      headers: { "X-MICROCMS-API-KEY": apiKey },
      next: { revalidate: 300 },
    });
    if (!response.ok) return [];
    const data = (await response.json()) as { contents?: MicroCmsDocument[] };
    return data.contents || [];
  } catch {
    return [];
  }
}
