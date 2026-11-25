import type { NextConfig } from "next";

// The whole site is static content, so every page is generated at build time
// (see generateStaticParams in the two page files) and unknown URLs return 404.
const nextConfig: NextConfig = {
  experimental: {
    // One 404 page for the German and the English tree.
    globalNotFound: true,
  },
  turbopack: {
    root: process.cwd(),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
