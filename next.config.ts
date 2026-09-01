import type { NextConfig } from "next";

const HOST = "businessprocessoutsourcing.info";

const nextConfig: NextConfig = {
  images: {
    // Unsplash URLs are rewritten to hit Unsplash's own CDN rather than being
    // proxied and re-encoded by this server. See lib/image-loader.ts.
    loaderFile: "./lib/image-loader.ts",
    // AVIF first for the local files that still go through the optimizer;
    // Lighthouse measured ~85 KiB of next-gen format savings on the homepage.
    formats: ["image/avif", "image/webp"],
    // Optimized local variants are expensive to generate and never change, so
    // keep them on disk rather than regenerating every few hours.
    minimumCacheTTL: 2678400,
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
      /*
       * Blog pagination starts at /blog/page/2 because page one is /blog, so
       * /blog/page/1 returned a 404. It is the URL anyone hand-editing the
       * pagination guesses first, and the one a crawler infers from seeing
       * /blog/page/2 and /blog/page/3.
       */
      { source: "/blog/page/1", destination: "/blog", permanent: true },
      {
        source: "/blog/outsourcing-vs-hiring-in-house",
        destination: "/blog/outsourcing-vs-hiring",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
