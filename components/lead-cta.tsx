import { LeadForm } from "./lead-form";
import { MiniMark } from "./mini-mark";
import { Reveal } from "./reveal";

/*
 * Inline lead capture for detail templates. Every service, industry, solution,
 * location, and article page ends with this so an enquiry never costs an extra
 * page load.
 *
 * Uses the full "contact" variant — the same qualification form as /contact —
 * per owner decision. It asks for call volume, agent count, and service type up
 * front, which produces better-qualified enquiries at the cost of a lower raw
 * submission rate than a short form would give.
 */
export function LeadCta({
  heading,
  intro,
  defaultService = "",
  points,
}: {
  heading: React.ReactNode;
  intro: string;
  defaultService?: string;
  points?: string[];
}) {
  const bullets = points ?? [
    "A scoped plan for the work you described",
    "Coverage hours, team size, and reporting confirmed up front",
    "No obligation and no cost for the consultation",
  ];

  return (
    <section className="section lead-cta-section">
      <div className="container lead-cta">
        <Reveal className="lead-cta-copy">
          <p className="eyebrow">
            <MiniMark /> Free consultation
          </p>
          <h2>{heading}</h2>
          <p>{intro}</p>
          <ul className="check-list">
            {bullets.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="lead-cta-form">
          <LeadForm variant="contact" defaultService={defaultService} />
        </Reveal>
      </div>
    </section>
  );
}
