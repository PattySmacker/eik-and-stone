const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    desc: "We meet on site or at our office to understand your project, budget, and timeline. No cost, no obligation — just an honest conversation about what's possible.",
  },
  {
    number: "02",
    title: "Estimate & Proposal",
    desc: "Within 5 business days we deliver a detailed written estimate. No vague allowances — real numbers based on real scope so you can make an informed decision.",
  },
  {
    number: "03",
    title: "Design & Permits",
    desc: "We coordinate with your architect or our design partners, finalize drawings, and pull every permit required. You don't chase paper — we do.",
  },
  {
    number: "04",
    title: "Construction",
    desc: "Your dedicated site superintendent manages every trade, every inspection, and every detail. You get weekly written updates and always know where your project stands.",
  },
  {
    number: "05",
    title: "Final Walkthrough",
    desc: "Before we hand over keys we walk every inch of the project with you. Any deficiencies get logged and resolved — typically within 48 hours.",
  },
  {
    number: "06",
    title: "Warranty & Support",
    desc: "Our 2-year workmanship warranty means we stand behind every nail. Past clients get priority scheduling for any follow-up work, forever.",
  },
];

export default function Process() {
  return (
    <section style={{ padding: "96px 40px", background: "var(--color-chalk)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ maxWidth: 600, marginBottom: 64 }}>
          <span style={{
            fontFamily: "var(--font-family-body)", fontSize: 10, fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "var(--color-signal)", marginBottom: 12, display: "block",
          }}>
            How We Work
          </span>
          <h2 style={{
            fontFamily: "var(--font-family-display)",
            fontSize: "clamp(36px,5vw,52px)",
            fontWeight: 800, textTransform: "uppercase",
            letterSpacing: "0.02em", color: "var(--color-ink)", lineHeight: 0.95,
            marginBottom: 16,
          }}>
            Our Process
          </h2>
          <p style={{
            fontFamily: "var(--font-family-serif)", fontSize: 16,
            color: "var(--color-serif-text)", lineHeight: 1.75,
          }}>
            Every Eik and Stone project follows the same proven process — refined over thirty years
            and hundreds of builds. No surprises. No excuses. Just results.
          </p>
        </div>

        {/* Steps grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 2,
        }} className="process-grid">
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                padding: "40px 36px",
                background: "var(--color-warm)",
                border: "1px solid var(--color-warm-border)",
                borderRadius: i === 0 ? "var(--radius-md) 0 0 0" :
                  i === 2 ? "0 var(--radius-md) 0 0" :
                  i === 3 ? "0 0 0 var(--radius-md)" :
                  i === 5 ? "0 0 var(--radius-md) 0" : "0",
              }}
            >
              <span style={{
                fontFamily: "var(--font-family-mono)", fontSize: 11,
                color: "var(--color-signal)", letterSpacing: "0.06em",
                marginBottom: 16, display: "block",
              }}>
                {step.number}
              </span>
              <h3 style={{
                fontFamily: "var(--font-family-display)", fontSize: 20,
                fontWeight: 700, textTransform: "uppercase",
                letterSpacing: "0.04em", color: "var(--color-ink)", marginBottom: 12,
              }}>
                {step.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-family-serif)", fontSize: 14,
                color: "var(--color-serif-text)", lineHeight: 1.75,
              }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}