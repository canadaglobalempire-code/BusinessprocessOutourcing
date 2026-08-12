import type { NextConfig } from "next";

const HOST = "businessprocessoutsourcing.info";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      /*
       * www served a full 200 alongside the apex, so every page existed on two
       * hosts. rel=canonical was pointing at the apex, which kept the wrong host
       * out of the index, but Google still had to crawl both copies. A 308 makes
       * the apex the only reachable host.
       */
      {
        source: "/:path*",
        has: [{ type: "host", value: `www.${HOST}` }],
        destination: `https://${HOST}/:path*`,
        permanent: true,
      },
      /*
       * /about used redirect() from a page component, which emits 307. A legacy
       * URL consolidating onto its replacement should be permanent so the old
       * path stops being recrawled and its equity transfers.
       */
      { source: "/about", destination: "/about-us", permanent: true },
    ];
  },
};

export default nextConfig;
