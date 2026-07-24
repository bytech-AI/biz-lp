import type { NextConfig } from "next";

// bytech.jp 配下に別 Vercel プロジェクトの診断アプリを“同一ドメインで”ぶら下げる。
// 各アプリは basePath (/road-map, /diagnosis) 付きでビルドされ、それぞれの本番
// エイリアスで配信されている。ここではそのパス配下への全リクエスト（HTML/_next/
// アセットすべて）を該当デプロイへ透過プロキシ(rewrite)する。URL は bytech.jp のまま。
//
// 転送先は各プロジェクトの安定した本番エイリアス（origin = scheme + host）。
// プレビューURLの変動を避けるためデプロイ個別URLではなく本番エイリアスを使う。
// 将来 roadmap.bytech.jp 等の専用ドメインを当てたら origin を差し替えるだけ。
// 環境変数で origin ごと上書き可能（本番/検証の向き先変更・ローカル疎通確認に使う。
// 例: ROADMAP_ORIGIN=http://localhost:3210）。
const PROXIED_APPS: { path: string; origin: string }[] = [
  {
    path: "/road-map",
    origin: process.env.ROADMAP_ORIGIN ?? "https://roadmap-ten-kappa.vercel.app",
  },
  {
    path: "/diagnosis",
    origin: process.env.SHINDAN_ORIGIN ?? "https://shindan-ecru.vercel.app",
  },
];

const nextConfig: NextConfig = {
  outputFileTracingExcludes: {
    "*": ["public/*-static/**"],
  },
  async redirects() {
    return [
      {
        source: "/no-code-training",
        destination: "/dify-training",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    // beforeFiles: bytech-lp 自身のファイル/ルート解決より前に評価させ、確実に
    // 診断アプリ側へ流す。:path* は 0 セグメントにマッチしない実装差があるため、
    // ベアパス(/road-map)用の完全一致ルールも併記する。
    const beforeFiles = PROXIED_APPS.flatMap(({ path, origin }) => [
      { source: path, destination: `${origin}${path}` },
      { source: `${path}/:path*`, destination: `${origin}${path}/:path*` },
    ]);
    return { beforeFiles, afterFiles: [], fallback: [] };
  },
  async headers() {
    // 本番ビルドの静的アセットはファイル名がコンテンツハッシュ付きなので immutable が正しい。
    // dev（Turbopack）ではCSS/JSチャンク名が内容変更で変わらず、immutableだと
    // 編集が一切ブラウザに届かなくなる（要ハードリロード地獄）ため、本番のみ付与する。
    if (process.env.NODE_ENV !== "production") {
      return [];
    }
    return [
      {
        source: "/:path*.:ext(png|jpg|jpeg|gif|svg|webp|ico|woff|woff2|ttf|otf|css|js)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  // /blog（WPブログ）は Cloudflare の Origin Rule で WPサーバーへ振り分けるため、
  // Next 側の rewrite は不要（apex が Vercel になると bytech.jp/blog への転送はループするため削除）。
};

export default nextConfig;
