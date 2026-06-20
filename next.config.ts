import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingExcludes: {
    "*": ["public/*-static/**"],
  },
  async headers() {
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
