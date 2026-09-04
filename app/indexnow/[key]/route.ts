/*
 * IndexNow key verification.
 *
 * The protocol proves ownership by fetching a text file whose body is the key.
 * The key lives only in the INDEXNOW_KEY environment variable, so the file is
 * served here at /indexnow/{key} (the keyLocation scripts/indexnow.mjs sends)
 * rather than committed as a static asset. Anything but the exact key is a
 * 404, and with no key configured every request is a 404.
 */
export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ key: string }> },
) {
  const { key } = await params;
  const expected = process.env.INDEXNOW_KEY?.trim();
  const given = key.replace(/\.txt$/, "");

  if (!expected || given !== expected) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(expected, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
