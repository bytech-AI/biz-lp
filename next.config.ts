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
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://bytech.jp/blog",
      },
      {
        source: "/blog/:path*",
        destination: "https://bytech.jp/blog/:path*",
      },
    ];
  },
};

export default nextConfig;
