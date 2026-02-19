import type { NextConfig } from "next";

const SOURCEAI_URL =
  process.env.NEXT_PUBLIC_SOURCEAI_URL || "https://pbs-sourceai.vercel.app";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "pbs-sourceai.vercel.app" },
      { protocol: "https", hostname: "*.supabase.co" },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/sourceai/:path*",
        destination: `${SOURCEAI_URL}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
