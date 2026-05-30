import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Accessibility statement for Eik and Stone.",
};

export default function AccessibilityPage() {
  return (
    <main>
      <section style={{
        background: "var(--color-ink)",
        padding: "160px 40px 96px",
      }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <span style={{
            fontFamily: "var(--font-family-body)", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "var(--color-signal)", marginBottom: 18, display: "block",
          }}>
            Legal
          </span>
          <h1 style={{
            fontFamily: "var(--font-family-display)",
            fontSize: "clamp(48px,7vw,80px)",
            fontWeight: 800, textTransform: "uppercase",
            color: "#ffffff", lineHeight: 0.9,
          }}>
            Accessibility
          </h1>
        </div>
      </section>

      <section style={{ padding: "96px 40px", background: "var(--color-warm)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {[
            {
              title: "Our Commitment",
              body: "Eik and Stone is committed to ensuring our website is accessible to all users, including those with disabilities. We strive to meet or exceed the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.",
            },
            {
              title: "What We're Doing",
              body: "We are actively working to improve the accessibility of our website. Our efforts include using semantic HTML structure, providing sufficient colour contrast, ensuring keyboard navigability, and writing descriptive alt text for images.",
            },
            {
              title: "Keyboard Navigation",
              body: "Our website is designed to be fully navigable using a keyboard alone. You can use the Tab key to move through interactive elements and Enter or Space to activate them. We aim to provide a logical and intuitive tab order throughout all pages.",
            },
            {
              title: "Screen Readers",
              body: "We design our pages to work with screen readers. We use proper heading hierarchy, ARIA labels where appropriate, and meaningful link text to ensure screen reader users can navigate and understand our content effectively.",
            },
            {
              title: "Colour & Contrast",
              body: "We maintain a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text across our website. Our design system is built around accessibility-conscious colour choices.",
            },
            {
              title: "Known Limitations",
              body: "While we strive for full accessibility, some areas of our website may not yet meet all guidelines. We are continuously reviewing and improving these areas. If you encounter any barriers, please contact us.",
            },
            {
              title: "Feedback & Contact",
              body: "If you experience any accessibility barriers on our website or have suggestions for improvement, we want to hear from you. Please contact us at info@eikandstone.com or call (343) 843-3307. We aim to respond within 2 business days.",
            },
            {
              title: "Third-Party Content",
              body: "Some content on our website may be provided by third parties. While we request that third-party providers meet our accessibility standards, we cannot guarantee the accessibility of all third-party content.",
            },
          ].map((section, i) => (
            <div key={i} style={{
              marginBottom: 40,
              paddingBottom: 40,
              borderBottom: i < 7 ? "1px solid var(--color-warm-border)" : "none",
            }}>
              <h2 style={{
                fontFamily: "var(--font-family-display)", fontSize: 22,
                fontWeight: 700, textTransform: "uppercase",
                letterSpacing: "0.04em", color: "var(--color-ink)", marginBottom: 14,
              }}>
                {section.title}
              </h2>
              <p style={{
                fontFamily: "var(--font-family-serif)", fontSize: 15,
                color: "var(--color-serif-text)", lineHeight: 1.85,
              }}>
                {section.body}
              </p>
            </div>
          ))}

          <div style={{
            fontFamily: "var(--font-family-mono)", fontSize: 11,
            color: "var(--color-iron)", letterSpacing: "0.06em",
          }}>
            Last Updated: January 1, 2025 · Eik and Stone Ltd. · Charlottetown, PEI
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}