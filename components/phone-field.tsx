"use client";

import { useEffect, useId, useRef, useState } from "react";
import { COUNTRIES, DEFAULT_COUNTRY, countryForDial } from "@/lib/countries.mjs";
import {
  combinePhone,
  isPartialDialCode,
  isValidDialCode,
  isValidPhone,
  normaliseDialCode,
} from "@/lib/phone.mjs";

/* Phone input with a country calling-code selector on the left.
   Left group: flag + editable dial code + chevron, with an invisible native
   <select> underneath (clicking the flag or chevron opens the list, clicking
   the code edits it). Submits a single hidden field (`name`) holding the
   combined value, e.g. "+14035551234". */
export function PhoneField({
  label,
  name = "phone",
}: {
  label: React.ReactNode;
  name?: string;
}) {
  const id = useId();
  const [iso, setIso] = useState(DEFAULT_COUNTRY.iso2);
  const [dial, setDial] = useState(DEFAULT_COUNTRY.dial);
  const [number, setNumber] = useState("");
  // Set once the code field is left; a partial code ("+3") only errors after that.
  const [dialTouched, setDialTouched] = useState(false);
  const dialRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);

  const country = COUNTRIES.find((c) => c.iso2 === iso) || null;
  const combined = combinePhone(dial, number);
  const dialKnown = isValidDialCode(dial);
  // Unknown complete codes (+000, +999) error at once; partial ones after blur.
  const dialError = !dialKnown && (dialTouched || !isPartialDialCode(dial));

  // Custom validity so the form's checkValidity()/reportValidity() catch it.
  // Any unknown code (even a partial one) blocks submit.
  useEffect(() => {
    dialRef.current?.setCustomValidity(
      dialKnown ? "" : "Enter a valid country code, e.g. +1 or +44",
    );
    numberRef.current?.setCustomValidity(
      !number.trim() || isValidPhone(combined)
        ? ""
        : "Enter a valid phone number (digits only).",
    );
  }, [dialKnown, number, combined]);

  // Show the existing native error bubble as soon as the code is known-bad.
  useEffect(() => {
    if (dialError && document.activeElement === dialRef.current) {
      dialRef.current?.reportValidity();
    }
  }, [dialError, dial]);

  // Keep state in step with form.reset() after a successful submit.
  useEffect(() => {
    const form = numberRef.current?.form;
    if (!form) return;
    const onReset = () => {
      setIso(DEFAULT_COUNTRY.iso2);
      setDial(DEFAULT_COUNTRY.dial);
      setNumber("");
      setDialTouched(false);
    };
    form.addEventListener("reset", onReset);
    return () => form.removeEventListener("reset", onReset);
  }, []);

  function onDialChange(value: string) {
    const next = normaliseDialCode(value);
    setDial(next);
    // Keep the current country if it already uses this code (e.g. Canada, +1).
    if (country?.dial === next) return;
    setIso(countryForDial(next)?.iso2 ?? "");
  }

  function onSelect(value: string) {
    const picked = COUNTRIES.find((c) => c.iso2 === value);
    if (!picked) return;
    setIso(picked.iso2);
    setDial(picked.dial);
    setDialTouched(false);
  }

  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <div className="phone-field">
        <div className="phone-cc">
          <select
            aria-label="Country calling code"
            value={iso}
            onChange={(e) => onSelect(e.target.value)}
          >
            <option value="" disabled>
              🌐 Other
            </option>
            {COUNTRIES.map((c) => (
              <option key={c.iso2} value={c.iso2}>
                {`${c.flag} ${c.name} ${c.dial}`}
              </option>
            ))}
          </select>
          <span className="phone-cc-flag" aria-hidden="true">
            {country ? country.flag : "🌐"}
          </span>
          <input
            ref={dialRef}
            className="phone-cc-code"
            aria-label="Country dial code"
            inputMode="numeric"
            autoComplete="tel-country-code"
            maxLength={5}
            // Sized to its text: 3.5ch min ("+1"), 5ch max ("+1234").
            style={{ width: `${Math.min(5, Math.max(3.5, dial.length + 0.5))}ch` }}
            value={dial}
            onChange={(e) => onDialChange(e.target.value)}
            onBlur={() => setDialTouched(true)}
            aria-invalid={dialError || undefined}
            required
          />
          <svg className="phone-cc-chev" viewBox="0 0 12 12" aria-hidden="true">
            <path d="M3 4.5 6 7.5 9 4.5" />
          </svg>
        </div>
        <input
          ref={numberRef}
          id={id}
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </div>
      <input type="hidden" name={name} value={combined} />
    </div>
  );
}
