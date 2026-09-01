import { NextResponse } from "next/server";
import { splitformsAccessKey } from "@/lib/splitforms-config.mjs";

/*
 * Lead intake endpoint. Forwards the enquiry to Splitforms server-side
 * (no CORS, key stays off the client) and returns the real result so the
 * form can show an honest success/error message.
 */
const SPLITFORMS_ENDPOINT = "https://splitforms.com/api/submit";

export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  // Honeypot: bots fill this hidden field. Silently accept without forwarding.
  if (String(data.botcheck || "").trim()) {
    return NextResponse.json({
      ok: true,
      message: "Thanks! Your enquiry has been received.",
    });
  }

  const name = String(data.name || "").trim();
  const email = String(data.email || "").trim();
  const message = String(data.message || "").trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !emailOk || !message) {
    return NextResponse.json(
      { ok: false, message: "Please complete the required fields." },
      { status: 422 },
    );
  }

  const accessKey = splitformsAccessKey();
  if (!accessKey) {
    console.error("SPLITFORMS_ACCESS_KEY is not configured.");
    return NextResponse.json(
      {
        ok: false,
        message:
          "We couldn’t send your enquiry right now. Please try again later.",
      },
      { status: 503 },
    );
  }

  try {
    const res = await fetch(SPLITFORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: "New enquiry — Business Process Outsourcing",
        ...data,
      }),
    });
    const result = (await res.json().catch(() => ({}))) as {
      message?: string;
    };
    if (!res.ok) {
      return NextResponse.json(
        {
          ok: false,
          message:
            result.message ||
            "We couldn’t send your enquiry right now. Please try again.",
        },
        { status: 502 },
      );
    }
    return NextResponse.json({
      ok: true,
      message: `Thanks, ${name}! Your enquiry has been received. One of our representatives will reach out to you.`,
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Network error. Please try again in a moment." },
      { status: 502 },
    );
  }
}
