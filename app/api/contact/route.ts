import { NextResponse } from "next/server";
import { splitformsAccessKey } from "@/lib/splitforms-config.mjs";
import { isValidPhone } from "@/lib/phone.mjs";

/*
 * Lead intake endpoint. Forwards the enquiry to Splitforms server-side
 * (no CORS, key stays off the client) and returns the real result so the
 * form can show an honest success/error message.
 */
const SPLITFORMS_ENDPOINT = "https://splitforms.com/api/submit";
// SplitForms reserved field: used verbatim as the notification email subject.
// Every form on the site sends this same subject, whatever page it is on.
const LEAD_SUBJECT = "Business Process Outsourcing \u2013 Website Inquiry";

// Every visible field on the lead form is required; the server agrees with the
// client so a direct POST cannot skip them. The short (modal) variant posts
// `service`; the full contact variant posts the qualification fields.
const REQUIRED_ALWAYS = ["name", "company", "email", "phone", "message"];
const REQUIRED_SHORT = ["service"];
const REQUIRED_CONTACT = [
  "website",
  "call_centre_service",
  "solution",
  "agent_count",
  "call_volume",
];

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
      message: "Thanks! Your inquiry has been received.",
    });
  }

  const name = String(data.name || "").trim();
  const email = String(data.email || "").trim();
  const message = String(data.message || "").trim();
  const phone = String(data.phone || "").trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  // Phone arrives combined as "+<dial code><number>", e.g. "+14035551234".
  const required = [
    ...REQUIRED_ALWAYS,
    ...("service" in data ? REQUIRED_SHORT : REQUIRED_CONTACT),
  ];
  const missing = required.filter((field) => !String(data[field] ?? "").trim());
  if (missing.length || !name || !emailOk || !message || !isValidPhone(phone)) {
    return NextResponse.json(
      { ok: false, message: "Please complete the required fields." },
      { status: 422 },
    );
  }

  // sf_sid comes from https://splitforms.com/embed.js and is forwarded with the
  // enquiry so Splitforms drops the saved partial lead; drop anything malformed.
  if (
    "sf_sid" in data &&
    !(typeof data.sf_sid === "string" && /^[A-Za-z0-9_-]{1,128}$/.test(data.sf_sid))
  ) {
    delete data.sf_sid;
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
        ...data,
        access_key: accessKey,
        subject: LEAD_SUBJECT,
        phone,
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
      message: `Thanks, ${name.split(/\s+/)[0]}! Your inquiry has been received. One of our representatives will reach out to you.`,
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Network error. Please try again in a moment." },
      { status: 502 },
    );
  }
}
