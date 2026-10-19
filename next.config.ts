import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Retired posts, and tag pages they left empty, point to the blog index so old shared links still land somewhere useful.
  async redirects() {
    const retired = [
      "/blog/webpack",
      "/blog/database-design",
      "/blog/how-web-works",
      "/blog/tags/frontend",
      "/blog/tags/http",
      "/blog/tags/javascript",
      "/blog/tags/tools",
      "/blog/tags/web",
    ];
    return retired.map((source) => ({ source, destination: "/blog", permanent: true }));
  },
};

export default nextConfig;
