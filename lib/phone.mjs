/* Phone value helpers shared by the lead form (client) and /api/contact (server).
   The form submits one field, `phone`, as dial code + national digits,
   e.g. "+14035551234". */
import { DIAL_CODES } from "./countries.mjs";

/** Normalise typed dial-code input to "+digits" (max 4 digits). */
export function normaliseDialCode(value) {
  return "+" + String(value ?? "").replace(/\D/g, "").slice(0, 4);
}

/** Dial code is valid only when it exactly matches a code in lib/countries.mjs. */
export function isValidDialCode(dial) {
  return DIAL_CODES.has(String(dial ?? ""));
}

/** True while the typed code could still become a real one ("+", "+3" -> "+380"). */
export function isPartialDialCode(dial) {
  const d = String(dial ?? "");
  if (!/^\+\d{0,3}$/.test(d)) return false;
  for (const code of DIAL_CODES) if (code.startsWith(d)) return true;
  return false;
}

/** Combined phone must be "+" then 7-15 digits in total and start with a known dial code. */
export function isValidPhone(value) {
  const v = String(value ?? "").trim();
  if (!/^\+\d{7,15}$/.test(v)) return false;
  for (const code of DIAL_CODES) if (v.startsWith(code)) return true;
  return false;
}

/**
 * Combine dial code and the typed national number into "+<digits>".
 * Strips spaces, dashes, dots and parentheses. Returns "" when the number
 * is empty, contains letters/other characters, or the dial code is invalid.
 */
export function combinePhone(dial, national) {
  const raw = String(national ?? "").trim();
  if (!raw || !isValidDialCode(dial)) return "";
  const stripped = raw.replace(/[\s\-.()]/g, "");
  if (!/^\+?\d+$/.test(stripped)) return "";
  // A number typed in full international form wins over the selector.
  if (stripped.startsWith("+")) return stripped;
  return dial + stripped;
}
