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

const demoNews: MicroCmsNews[] = [];

function apiUrl(path = "") {
  if (!serviceDomain) return null;
  return `https://${serviceDomain}.microcms.io/api/v1/${endpoint}${path}`;
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
