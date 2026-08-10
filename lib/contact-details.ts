/*
 * Single source of truth for published contact details.
 *
 * PHONE: fill in `display` to publish the number sitewide — header, footer,
 * and every service / industry / solution / location page pick it up
 * automatically. While it is an empty string nothing renders, so the site
 * never shows a number that does not connect.
 *
 * Add more entries for additional markets (UK, UAE); each one renders with its
 * label so visitors can see which line serves them.
 */
export type PhoneLine = {
  /** Human-readable number, e.g. "+1 (888) 555-0142". Empty = not published. */
  display: string;
  /** Short market label shown beside the number, e.g. "US". Optional. */
  label?: string;
};

export const PHONE_LINES: PhoneLine[] = [
  { display: "", label: "US" },
  { display: "", label: "UK" },
  { display: "", label: "UAE" },
];

/** Only the lines that have actually been filled in. */
export const PUBLISHED_PHONES = PHONE_LINES.filter((line) => line.display.trim());

/** Strips formatting so tel: links dial correctly. */
export function telHref(display: string) {
  return `tel:${display.replace(/[^\d+]/g, "")}`;
}
