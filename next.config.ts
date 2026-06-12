import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages — no server, so images are served as-is.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
