import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages용 설정
  basePath: '/eeezeen',
  assetPrefix: '/eeezeen',
};

export default nextConfig;
