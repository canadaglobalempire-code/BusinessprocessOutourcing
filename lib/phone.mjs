/* Phone value helpers shared by the lead form (client) and /api/contact (server).
   The form submits one field, `phone`, as dial code + national digits,
   e.g. "+14035551234". */

/** Normalise typed dial-code input to "+digits" (max 4 digits). */
export function normaliseDialCode(value) {
  return "+" + String(value ?? "").replace(/\D/g, "").slice(0, 4);
}

/** Dial code must be "+" followed by 1-4 digits. */
export function isValidDialCode(dial) {
  return /^\+\d{1,4}$/.test(String(dial ?? ""));
}

/** Combined phone must be "+" then 7-15 digits in total, no letters. */
export function isValidPhone(value) {
  return /^\+\d{7,15}$/.test(String(value ?? "").trim());
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
