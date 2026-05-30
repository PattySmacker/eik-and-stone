import Link from "next/link";

function OakLeafLogo() {
  return (
    <svg viewBox="0 0 36 44" width="20" height="26" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 4 C10 4 4 11 4 19 C4 25 7 30 12 33 L12 40 L18 43 L24 40 L24 33 C29 30 32 25 32 19 C32 11 26 4 18 4Z" fill="#4a90d9"/>
      <line x1="18" y1="6" x2="18" y2="40" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="18" y1="16" x2="26" y2="13" stroke="rgba(255,255,255,0.35)" strokeWidth="0.9" strokeLinecap="round"/>
      <line x1="18" y1="22" x2="10" y2="20" stroke="rgba(255,255,255,0.35)" strokeWidth="0.9" strokeLinecap="round"/>
      <line x1="18" y1="28" x2="25" y2="26" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" strokeLinecap="round"/>
      <rect x="16" y="38" width="4" height="5" rx="1" fill="rgba(255,255,255,0.4)"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={{
      background: "var(--color-ink)",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "64px 40px 32px",
    }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>

        {/* Top grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 40,
          marginBottom: 48,
          paddingBottom: 48,
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <OakLeafLogo />
              <span style={{
                fontFamily: "var(--font-family-display)", fontSize: 13,
                fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase",
                color: "#ffffff",
              }}>
                Eik <span style={{ color: "var(--color-craft)" }}>&</span> Stone
              </span>
            </div>
            <p style={{
              fontFamily: "var(--font-family-serif)", fontSize: 13,
              color: "rgba(255,255,255,0.35)", lineHeight: 1.8, maxWidth: 280,
            }}>
              Building homes, businesses, and communities across Prince Edward Island.
              Licensed. Insured. Accountable.
            </p>
          </div>

          {/* Services */}
          <div>
            <div style={{
              fontFamily: "var(--font-family-body)", fontSize: 10, fontWeight: 700,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)", marginBottom: 16,
            }}>
              Services
            </div>
            {[
              { label: "Custom Home Builds", href: "/services/custom-homes" },
              { label: "Renovation & Retrofit", href: "/services/renovation-retrofit" },
              { label: "Commercial Fit-Out", href: "/services/commercial-fitout" },
              { label: "Foundation Works", href: "/services/foundation-structural" },
              { label: "Developer Partnerships", href: "/services/developer-partnerships" },
            ].map((s) => (
              <Link key={s.href} href={s.href} style={{
                display: "block", fontFamily: "var(--font-family-body)",
                fontSize: 13, color: "rgba(255,255,255,0.5)",
                textDecoration: "none", marginBottom: 10, lineHeight: 1.4,
              }}>
                {s.label}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <div style={{
              fontFamily: "var(--font-family-body)", fontSize: 10, fontWeight: 700,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)", marginBottom: 16,
            }}>
              Company
            </div>
            {[
              { label: "About Us", href: "/about" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Our Process", href: "/process" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{
                display: "block", fontFamily: "var(--font-family-body)",
                fontSize: 13, color: "rgba(255,255,255,0.5)",
                textDecoration: "none", marginBottom: 10,
              }}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{
              fontFamily: "var(--font-family-body)", fontSize: 10, fontWeight: 700,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)", marginBottom: 16,
            }}>
              Contact
            </div>
            <a href="tel:+13438433307" style={{
              display: "block", fontFamily: "var(--font-family-body)",
              fontSize: 13, color: "rgba(255,255,255,0.5)",
              textDecoration: "none", marginBottom: 10,
            }}>
              +1 (343) 843-3307
            </a>
            <a href="mailto:info@eikandstone.com" style={{
              display: "block", fontFamily: "var(--font-family-body)",
              fontSize: 13, color: "rgba(255,255,255,0.5)",
              textDecoration: "none", marginBottom: 16,
            }}>
              info@eikandstone.com
            </a>
            <div style={{
              fontFamily: "var(--font-family-mono)", fontSize: 11,
              color: "rgba(255,255,255,0.25)", lineHeight: 1.8,
            }}>
              15 Water Street<br/>
              Charlottetown, PEI
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between", flexWrap: "wrap", gap: 16,
        }}>
          <div style={{
            fontFamily: "var(--font-family-mono)", fontSize: 11,
            color: "rgba(255,255,255,0.25)", letterSpacing: "0.04em",
          }}>
            © {new Date().getFullYear()} Eik and Stone Ltd. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Accessibility", href: "/accessibility" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{
                fontFamily: "var(--font-family-mono)", fontSize: 11,
                color: "rgba(255,255,255,0.25)", textDecoration: "none",
                letterSpacing: "0.04em",
              }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
