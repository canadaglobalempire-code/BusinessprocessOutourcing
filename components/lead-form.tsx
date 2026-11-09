"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { SERVICE_NAMES } from "@/lib/services";
import { PhoneField } from "./phone-field";

type Variant = "modal" | "contact";

const CALL_CENTRE_SERVICES = [
  "Inbound",
  "Outbound",
  "Live Chat/Automated",
  "Back Office/Social",
  "Other or Combination of Services",
];

const SOLUTIONS = [
  "Customer Support",
  "Lead Generation",
  "Market Research",
  "Database Maintenance/Clean Up",
  "Appoinment Setting",
  "Direct Response",
  "Tech Support",
  "Email Response Managament",
  "Other or Combination of Services",
];

const AGENT_COUNTS = ["5-25", "25-50", "50-100", "100+"];
const CALL_VOLUMES = [
  "0-5000",
  "5000-20,000",
  "20,000-100,000",
  "100,000-500,000",
];
// After a successful submit the thank-you shows, then the empty form comes back
// on its own so a visitor never has to reload the page to send another inquiry.
const RESET_AFTER_MS = 6000;

type Field = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

/* Key a control is highlighted under: its own name, or (for the phone
   field's unnamed dial/number inputs) the data-field of the posted value. */
function fieldKey(el: Element | null): string {
  if (
    !(el instanceof HTMLInputElement) &&
    !(el instanceof HTMLSelectElement) &&
    !(el instanceof HTMLTextAreaElement)
  ) {
    return "";
  }
  if (el.type === "hidden") return "";
  return el.name || el.dataset.field || "";
}

function invalidControls(form: HTMLFormElement): Field[] {
  return (Array.from(form.elements) as Field[]).filter(
    (el) => fieldKey(el) && el.willValidate && !el.checkValidity(),
  );
}

/* Shared consultation / contact lead form.
   Posts to /api/contact, which forwards the enquiry to Splitforms. */
/* Every select starts on its empty placeholder (no preselect from the page's
   service) so an untouched select counts as missing. `defaultService` is still
   accepted from callers but no longer prefills anything. */
export function LeadForm({
  variant = "modal",
}: {
  variant?: Variant;
  defaultService?: string;
}) {
  const [status, setStatus] = useState<{ msg: string; ok: boolean } | null>(
    null,
  );
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Set<string>>(new Set());
  const [thanks, setThanks] = useState<string | null>(null);

  // Bring the empty form back automatically a few seconds after a success.
  useEffect(() => {
    if (thanks === null) return;
    const id = window.setTimeout(() => setThanks(null), RESET_AFTER_MS);
    return () => window.clearTimeout(id);
  }, [thanks]);

  const fieldClass = (key: string) =>
    errors.has(key) ? "field is-invalid" : "field";

  // Clear a field's red as soon as it becomes valid. Deferred a tick so the
  // phone field's custom validity (set in an effect) is current.
  function onFieldChange(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    if (!errors.size || !fieldKey(e.target as Element)) return;
    window.setTimeout(() => {
      const stillInvalid = new Set(invalidControls(form).map(fieldKey));
      setErrors((prev) => {
        const next = new Set([...prev].filter((k) => stillInvalid.has(k)));
        return next.size === prev.size ? prev : next;
      });
    }, 0);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const invalid = invalidControls(form);
    if (invalid.length) {
      setErrors(new Set(invalid.map(fieldKey)));
      setStatus(null);
      invalid[0].scrollIntoView({ behavior: "smooth", block: "center" });
      invalid[0].focus({ preventScroll: true });
      return;
    }
    setErrors(new Set());
    const formData = new FormData(form);
    const data = Object.fromEntries(formData) as Record<string, string>;
    data.page = typeof window !== "undefined" ? window.location.href : "";
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(result.message || "Unable to send your enquiry.");
      // Tracking is optional: a blocked script must never undo a sent enquiry.
      try {
        (
          window as Window & {
            splitforms?: { done?: (form: HTMLFormElement) => void };
          }
        ).splitforms?.done?.(form);
      } catch {
        /* The enquiry has already been delivered. */
      }
      const firstName = (data.name || "").trim().split(/\s+/)[0] || "";
      form.reset();
      setErrors(new Set());
      setStatus(null);
      setThanks(firstName);
    } catch (err) {
      setStatus({
        msg:
          err instanceof Error
            ? err.message
            : "Something went wrong. Please try again.",
        ok: false,
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      className={variant === "contact" ? "contact-form" : "lead-form"}
      onSubmit={onSubmit}
      onChange={onFieldChange}
      onInput={onFieldChange}
      noValidate
      data-sf-key={process.env.NEXT_PUBLIC_SPLITFORMS_ACCESS_KEY || undefined}
    >
      <Script src="https://splitforms.com/embed.js" strategy="afterInteractive" />
      {thanks !== null && (
        <div className="form-thanks" role="status" aria-live="polite">
          <p className="form-thanks-title">
            {thanks ? `Thanks, ${thanks}!` : "Thanks!"}
          </p>
          <p>
            Your inquiry has been received. One of our representatives will
            reach out to you.
          </p>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => setThanks(null)}
          >
            Submit another inquiry
          </button>
        </div>
      )}
      <div hidden={thanks !== null}>
      {errors.size > 0 && (
        <p className="form-error-banner" role="alert">
          Please complete the highlighted fields below.
        </p>
      )}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: "none" }}
      />
      {variant === "contact" ? (
        <>
          <div className="form-grid">
            <label className={fieldClass("name")}>
              Name*
              <input name="name" autoComplete="name" required />
            </label>
            <label className={fieldClass("company")}>
              Company Name*
              <input name="company" autoComplete="organization" required />
            </label>
          </div>

          <div className="form-grid">
            <label className={fieldClass("website")}>
              Website / URL*
              {/* Any text counts, so a business without a site can enter N/A. */}
              <input
                type="text"
                name="website"
                autoComplete="url"
                placeholder="yourcompany.com or N/A"
                required
              />
            </label>
            <PhoneField label="Phone Number*" name="phone" invalid={errors.has("phone")} />
          </div>

          <label className={fieldClass("email")}>
            Email*
            <input type="email" name="email" autoComplete="email" required />
          </label>

          <div className="form-grid">
            <label className={fieldClass("call_centre_service")}>
              What type of call centre services do you need?*
              <select name="call_centre_service" defaultValue="" required>
                <option value="" disabled>
                  Select an option
                </option>
                {CALL_CENTRE_SERVICES.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </label>

            <label className={fieldClass("solution")}>
              What solution are you looking for?*
              <select name="solution" defaultValue="" required>
                <option value="" disabled>
                  Select an option
                </option>
                {SOLUTIONS.map((solution) => (
                  <option key={solution} value={solution}>
                    {solution}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="form-grid">
            <label className={fieldClass("agent_count")}>
              How many call center agents do you require?*
              <select name="agent_count" defaultValue="" required>
                <option value="" disabled>
                  Select an option
                </option>
                {AGENT_COUNTS.map((count) => (
                  <option key={count} value={count}>
                    {count}
                  </option>
                ))}
              </select>
            </label>
            <label className={fieldClass("call_volume")}>
              Call volume (records/month)?*
              <select name="call_volume" defaultValue="" required>
                <option value="" disabled>
                  Select an option
                </option>
                {CALL_VOLUMES.map((volume) => (
                  <option key={volume} value={volume}>
                    {volume}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className={fieldClass("message")}>
            Please provide us with any additional comments you feel are important
            about your company, your program or your requirements.*
            <textarea name="message" rows={4} required />
          </label>
        </>
      ) : (
        <>
          <div className="form-grid">
            <label className={fieldClass("name")}>
              Full name*
              <input name="name" autoComplete="name" required />
            </label>
            <label className={fieldClass("email")}>
              Work email*
              <input type="email" name="email" autoComplete="email" required />
            </label>
          </div>

          <label className={fieldClass("company")}>
            Company*
            <input name="company" autoComplete="organization" required />
          </label>

          <PhoneField label="Phone*" name="phone" invalid={errors.has("phone")} />

          <label className={fieldClass("service")}>
            Service*
            <select name="service" required defaultValue="">
              <option value="">Choose a service</option>
              {SERVICE_NAMES.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>

          <label className={fieldClass("message")}>
            What would you like help with?*
            <textarea name="message" rows={4} required />
          </label>
        </>
      )}

      <button className="btn btn-dark btn-large" type="submit" disabled={submitting}>
        {submitting
          ? "Sending…"
          : variant === "contact"
            ? "Submit"
            : "Request a free consultation"}
      </button>

      </div>

      {status && (
        <p
          className="form-status"
          aria-live="polite"
          style={{ color: status.ok ? "#477b3e" : "#b33a48" }}
        >
          {status.msg}
        </p>
      )}
    </form>
  );
}
