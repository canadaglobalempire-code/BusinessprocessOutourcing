"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { LeadForm } from "./lead-form";
import { MiniMark } from "./mini-mark";

type ModalContextValue = {
  open: (service?: string) => void;
  close: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within <ModalProvider>");
  return ctx;
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(false);
  const [service, setService] = useState("");

  const open = useCallback((s?: string) => {
    setService(s || "");
    setActive(true);
  }, []);
  const close = useCallback(() => setActive(false), []);

  useEffect(() => {
    document.body.classList.toggle("modal-open", active);
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close]);

  return (
    <ModalContext.Provider value={{ open, close }}>
      {children}
      <div
        className={`modal${active ? " active" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!active}
      >
        <div className="modal-backdrop" onClick={close} />
        <div className="modal-panel">
          <button className="modal-close" aria-label="Close" onClick={close}>
            ×
          </button>
          <p className="eyebrow">
            <MiniMark /> Free consultation
          </p>
          <h2>Tell us what you need.</h2>
          <p className="muted">
            Share a few details and we&rsquo;ll help you identify the right
            support.
          </p>
          {/* Remount on open so the service preselect + reset behave predictably */}
          {active && <LeadForm key={service} variant="contact" defaultService={service} />}
        </div>
      </div>
    </ModalContext.Provider>
  );
}

/* Drop-in button any (client-tree) page can use to open the consultation modal. */
export function OpenModalButton({
  children,
  className = "btn btn-dark",
  service,
}: {
  children: ReactNode;
  className?: string;
  service?: string;
}) {
  const { open } = useModal();
  return (
    <button className={className} onClick={() => open(service)}>
      {children}
    </button>
  );
}
