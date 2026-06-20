import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // pin the workspace root — a stray parent lockfile confuses auto-detection
    root: process.cwd(),
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
};

export default nextConfig;
