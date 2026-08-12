type LoaderArgs = { src: string; width: number; quality?: number };

/*
 * Custom image loader.
 *
 * Every stock image on this site is hosted on Unsplash, and by default Next
 * routes those through /_next/image on the origin — which means the Hostinger
 * Node process has to fetch the full-size photo from Unsplash, re-encode it,
 * and serve it. Measured cold on production that was ~0.9s TTFB per image,
 * against ~14ms for the HTML itself, and the homepage carries a dozen of them.
 *
 * Unsplash already is an image CDN and accepts the same width/quality/format
 * parameters, so remote images are pointed straight at it. The browser fetches
 * them from Unsplash's edge instead of our origin, Next still generates a
 * proper srcset because the loader is called per width, and the origin stops
 * doing image work entirely.
 *
 * Local files keep the normal /_next/image pipeline, which is cheap because
 * there is no remote fetch involved.
 */
export default function imageLoader({ src, width, quality }: LoaderArgs): string {
  if (src.startsWith("https://images.unsplash.com/")) {
    const url = new URL(src);
    url.searchParams.set("auto", "format");
    url.searchParams.set("fit", "crop");
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(quality ?? 72));
    return url.toString();
  }

  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality ?? 75}`;
}
