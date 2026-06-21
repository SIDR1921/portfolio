import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // hide the floating dev-mode indicator badge (dev only; never in production)
  devIndicators: false,
  turbopack: {
    // pin the workspace root — a stray parent lockfile confuses auto-detection
    root: process.cwd(),
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
};

export default nextConfig;
