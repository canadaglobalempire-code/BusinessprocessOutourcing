import type { NextConfig } from "next";

const HOST = "businessprocessoutsourcing.info";

const nextConfig: NextConfig = {
  images: {
    // All imagery is self-hosted under public/assets/img and goes through
    // Next's built-in optimizer; no remote image hosts are used.
    // AVIF first for the local files; Lighthouse measured ~85 KiB of next-gen
    // format savings on the homepage.
    formats: ["image/avif", "image/webp"],
    // Optimized local variants are expensive to generate and never change, so
    // keep them on disk rather than regenerating every few hours.
    minimumCacheTTL: 2678400,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
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
