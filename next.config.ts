import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingExcludes: {
    "*": ["public/*-static/**"],
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
