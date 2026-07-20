import type { ReactNode } from "react";

/* Line-icon path set, ported 1:1 from the approved design (48x48 viewBox). */
export const ICONS: Record<string, ReactNode> = {
  "customer-support": (
    <>
      <path d="M8 26v-3a16 16 0 0132 0v3" />
      <rect x="6" y="25" width="8" height="13" rx="3" />
      <rect x="34" y="25" width="8" height="13" rx="3" />
      <path d="M38 38c0 4-4 6-9 6" />
    </>
  ),
  "virtual-assistance": (
    <>
      <rect x="11" y="9" width="26" height="32" rx="4" />
      <path d="M18 9V6h12v3M17 20l3 3 5-6M17 31l3 3 5-6M28 21h5M28 32h5" />
    </>
  ),
  accounting: (
    <>
      <circle cx="24" cy="24" r="18" />
      <path d="M29 17c-2-2-10-3-10 2 0 6 11 3 11 9 0 6-9 6-13 2M24 13v22" />
    </>
  ),
  marketing: <path d="M8 27V17h11l20-8v26l-20-8zM19 27l4 12h-8l-4-12" />,
  ecommerce: (
    <path d="M6 9h5l4 23h22l5-15H14M20 39a2 2 0 110 4 2 2 0 010-4M34 39a2 2 0 110 4 2 2 0 010-4" />
  ),
  content: <path d="M10 38l3-11L31 9l8 8-18 18zM28 12l8 8M9 41h30" />,
  tech: (
    <>
      <circle cx="24" cy="24" r="7" />
      <path d="M24 5v5M24 38v5M5 24h5M38 24h5M10.5 10.5l4 4M33.5 33.5l4 4M37.5 10.5l-4 4M14.5 33.5l-4 4" />
      <circle cx="24" cy="24" r="15" />
    </>
  ),
  data: <path d="M9 39h31M13 34V23h7v11M24 34V14h7v20M35 34V8h7v26" />,
  chat: (
    <>
      <path d="M8 10h32v24H22L12 42v-8H8z" />
      <path d="M16 22h.1M24 22h.1M32 22h.1" />
    </>
  ),
  people: (
    <>
      <circle cx="17" cy="17" r="7" />
      <circle cx="33" cy="17" r="7" />
      <path d="M5 39c0-9 5-14 12-14s12 5 12 14M25 28c2-2 5-3 8-3 7 0 10 5 10 14" />
    </>
  ),
  growth: (
    <path d="M8 39h33M12 34V25h7v9M23 34V18h7v16M34 34V10h7v24M11 17l10-8 8 5 13-10" />
  ),
  monitor: (
    <>
      <rect x="6" y="8" width="36" height="27" rx="3" />
      <path d="M18 42h12M24 35v7" />
    </>
  ),
  "check-circle": (
    <>
      <circle cx="24" cy="24" r="18" />
      <path d="M15 24l6 6 13-14" />
    </>
  ),
  target: (
    <>
      <circle cx="24" cy="24" r="17" />
      <circle cx="24" cy="24" r="8" />
      <path d="M24 2v8M24 38v8M2 24h8M38 24h8" />
    </>
  ),
  shield: (
    <>
      <path d="M24 5l16 7v12c0 11-6 17-16 22C14 41 8 35 8 24V12z" />
      <path d="M16 24l6 6 11-13" />
    </>
  ),
  lock: (
    <>
      <rect x="10" y="20" width="28" height="22" rx="4" />
      <path d="M16 20v-6a8 8 0 0116 0v6M24 29v5" />
    </>
  ),
  globe: (
    <>
      <circle cx="24" cy="24" r="19" />
      <path d="M5 24h38M24 5c6 6 9 12 9 19s-3 13-9 19c-6-6-9-12-9-19s3-13 9-19" />
    </>
  ),
  smile: (
    <>
      <circle cx="24" cy="24" r="19" />
      <path d="M16 29c3 5 13 5 16 0M17 19h.1M31 19h.1" />
    </>
  ),
  sparkle: <path d="M24 5l4 12 12 4-12 4-4 13-4-13-12-4 12-4z" />,
  calendar: (
    <>
      <rect x="7" y="11" width="34" height="30" rx="4" />
      <path d="M7 19h34M16 6v10M32 6v10" />
    </>
  ),
  "workspace-grid": (
    <>
      <rect x="5" y="5" width="16" height="16" rx="3" />
      <rect x="27" y="5" width="16" height="16" rx="3" />
      <rect x="5" y="27" width="16" height="16" rx="3" />
      <rect x="27" y="27" width="16" height="16" rx="3" />
    </>
  ),
  "arrow-right": <path d="M8 24h32M29 13l11 11-11 11" />,
};

export function SvgIcon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      {ICONS[name]}
    </svg>
  );
}
