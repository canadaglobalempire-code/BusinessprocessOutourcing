"use client";

import { useState } from "react";
import { SERVICE_NAMES } from "@/lib/services";

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
const PROGRAM_DAYS = [
  "24 / 7",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

/* Shared consultation / contact lead form.
   Posts to /api/contact, which forwards the enquiry to Splitforms. */
export function LeadForm({
  variant = "modal",
  defaultService = "",
}: {
  variant?: Variant;
  defaultService?: string;
}) {
  const [status, setStatus] = useState<{ msg: string; ok: boolean } | null>(
    null,
  );
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const formData = new FormData(form);
    const data = Object.fromEntries(formData) as Record<string, string>;
    const selectedDays = formData.getAll("program_days");
    if (selectedDays.length) {
      data.program_days = selectedDays.join(", ");
    }
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
      setStatus({
        msg:
          result.message ||
          `Thanks${data.name ? `, ${data.name}` : ""}! Your enquiry has been sent.`,
        ok: true,
      });
      form.reset();
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

  const contactSolution =
    defaultService === "Technical Support"
      ? "Tech Support"
      : SOLUTIONS.includes(defaultService)
        ? defaultService
        : "";

  return (
    <form
      className={variant === "contact" ? "contact-form" : "lead-form"}
      onSubmit={onSubmit}
      noValidate
    >
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
            <label className="field">
              Name*
              <input name="name" autoComplete="name" required />
            </label>
            <label className="field">
              Company Name*
              <input name="company" autoComplete="organization" required />
            </label>
          </div>

          <div className="form-grid">
            <label className="field">
              Website / URL
              <input type="url" name="website" autoComplete="url" />
            </label>
            <label className="field">
              Phone Number
              <input type="tel" name="phone" autoComplete="tel" />
            </label>
          </div>

          <label className="field">
            Email*
            <input type="email" name="email" autoComplete="email" required />
          </label>

          <label className="field">
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

          <label className="field">
            What type of Solution best describes what you are looking for?*
            <select name="solution" defaultValue={contactSolution} required>
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

          <div className="form-grid">
            <label className="field">
              How many call center agents do you require?
              <select name="agent_count" defaultValue="">
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
            <label className="field">
              What is your call volume (Number of Records/month)?
              <select name="call_volume" defaultValue="">
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

          <fieldset style={{ border: 0, margin: "0 0 18px", padding: 0 }}>
            <legend style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>
              What days of the week will the program run?
            </legend>
            <div className="form-grid">
              {PROGRAM_DAYS.map((day) => (
                <label
                  key={day}
                  style={{ alignItems: "center", display: "flex", fontSize: 14, gap: 10 }}
                >
                  <input
                    type="checkbox"
                    name="program_days"
                    value={day}
                    style={{ height: 18, width: 18 }}
                  />
                  {day}
                </label>
              ))}
            </div>
          </fieldset>

          <label className="field">
            Please provide us with any additional comments you feel are important
            about your company, your program or your requirements.*
            <textarea name="message" rows={4} required />
          </label>
        </>
      ) : (
        <>
          <div className="form-grid">
            <label className="field">
              Full name
              <input name="name" autoComplete="name" required />
            </label>
            <label className="field">
              Work email
              <input type="email" name="email" autoComplete="email" required />
            </label>
          </div>

          <label className="field">
            Company
            <input name="company" autoComplete="organization" />
          </label>

          <label className="field">
            Service
            <select name="service" required defaultValue={defaultService}>
              <option value="">Choose a service</option>
              {SERVICE_NAMES.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            What would you like help with?
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
