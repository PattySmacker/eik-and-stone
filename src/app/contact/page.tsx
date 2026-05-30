"use client";

import { useState } from "react";
import Footer from "@/components/layout/Footer";

const budgetOptions = [
  { val: "under-50k", label: "Under $50K", sub: "Small reno" },
  { val: "50k-250k", label: "$50K – $250K", sub: "Mid-scale" },
  { val: "250k-1m", label: "$250K – $1M", sub: "Large project" },
  { val: "1m-5m", label: "$1M – $5M", sub: "Major dev" },
  { val: "5m-plus", label: "$5M+", sub: "Commercial" },
  { val: "not-sure", label: "Not Sure", sub: "Need guidance" },
];

export default function ContactPage() {
  const [budget, setBudget] = useState("50k-250k");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    description: "",
    consent: false,
    updates: false,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const target = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, budget }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please call us directly at (343) 843-3307.");
      }
    } catch {
      alert("Something went wrong. Please call us directly at (343) 843-3307.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      {/* Hero */}
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
            Get In Touch
          </span>
          <h1 style={{
            fontFamily: "var(--font-family-display)",
            fontSize: "clamp(48px,7vw,80px)",
            fontWeight: 800, textTransform: "uppercase",
            color: "#ffffff", lineHeight: 0.9, marginBottom: 24,
          }}>
            Let&apos;s Build<br />
            <em style={{ color: "var(--color-signal)", fontStyle: "normal" }}>
              Something Great.
            </em>
          </h1>
          <p style={{
            fontFamily: "var(--font-family-serif)", fontSize: 18,
            color: "rgba(255,255,255,0.5)", lineHeight: 1.75, maxWidth: 520,
          }}>
            Tell us about your project and we&apos;ll get back to you within
            one business day with a free consultation.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "96px 40px", background: "var(--color-chalk)" }}>
        <div style={{
          maxWidth: 1240, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 400px",
          gap: 80, alignItems: "start",
        }} className="contact-grid">

          {/* Form */}
          <div>
            {submitted ? (
              <div style={{
                background: "var(--color-warm)",
                border: "1px solid var(--color-warm-border)",
                borderRadius: "var(--radius-md)",
                padding: "64px 56px",
                textAlign: "center",
              }}>
                <div style={{
                  width: 64, height: 64, borderRadius: "50%",
                  background: "rgba(200,82,26,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 24px",
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-signal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h2 style={{
                  fontFamily: "var(--font-family-display)", fontSize: 32,
                  fontWeight: 800, textTransform: "uppercase",
                  color: "var(--color-ink)", marginBottom: 16,
                }}>
                  Message Received
                </h2>
                <p style={{
                  fontFamily: "var(--font-family-serif)", fontSize: 16,
                  color: "var(--color-serif-text)", lineHeight: 1.75,
                }}>
                  Thank you for reaching out. A member of our team will
                  contact you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{
                  background: "var(--color-warm)",
                  border: "1px solid var(--color-warm-border)",
                  borderRadius: "var(--radius-md)",
                  padding: "48px 48px",
                }}>
                  <h2 style={{
                    fontFamily: "var(--font-family-display)", fontSize: 28,
                    fontWeight: 800, textTransform: "uppercase",
                    color: "var(--color-ink)", marginBottom: 8,
                  }}>
                    Request a Free Quote
                  </h2>
                  <p style={{
                    fontFamily: "var(--font-family-serif)", fontSize: 14,
                    color: "var(--color-iron)", marginBottom: 36,
                  }}>
                    We respond within one business day.
                  </p>

                  {/* Name row */}
                  <div style={{
                    display: "grid", gridTemplateColumns: "1fr 1fr",
                    gap: 16, marginBottom: 16,
                  }} className="form-row">
                    {[
                      { name: "firstName", label: "First Name", placeholder: "Wesley", type: "text" },
                      { name: "lastName", label: "Last Name", placeholder: "Mattioli", type: "text" },
                    ].map((field) => (
                      <div key={field.name}>
                        <label style={{
                          fontFamily: "var(--font-family-body)", fontSize: 11,
                          fontWeight: 700, letterSpacing: "0.1em",
                          textTransform: "uppercase", color: "var(--color-concrete)",
                          display: "block", marginBottom: 8,
                        }}>
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          value={form[field.name as keyof typeof form] as string}
                          onChange={handleChange}
                          required
                          style={{
                            width: "100%", padding: "12px 16px",
                            fontFamily: "var(--font-family-body)", fontSize: 14,
                            color: "var(--color-ink)",
                            background: "var(--color-chalk)",
                            border: "1px solid var(--color-warm-border)",
                            borderRadius: "var(--radius-sm)",
                            outline: "none",
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Contact row */}
                  <div style={{
                    display: "grid", gridTemplateColumns: "1fr 1fr",
                    gap: 16, marginBottom: 16,
                  }} className="form-row">
                    {[
                      { name: "email", label: "Email Address", placeholder: "you@example.com", type: "email" },
                      { name: "phone", label: "Phone Number", placeholder: "(343) 843-3307", type: "tel" },
                    ].map((field) => (
                      <div key={field.name}>
                        <label style={{
                          fontFamily: "var(--font-family-body)", fontSize: 11,
                          fontWeight: 700, letterSpacing: "0.1em",
                          textTransform: "uppercase", color: "var(--color-concrete)",
                          display: "block", marginBottom: 8,
                        }}>
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          value={form[field.name as keyof typeof form] as string}
                          onChange={handleChange}
                          required
                          style={{
                            width: "100%", padding: "12px 16px",
                            fontFamily: "var(--font-family-body)", fontSize: 14,
                            color: "var(--color-ink)",
                            background: "var(--color-chalk)",
                            border: "1px solid var(--color-warm-border)",
                            borderRadius: "var(--radius-sm)",
                            outline: "none",
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Project type */}
                  <div style={{ marginBottom: 16 }}>
                    <label style={{
                      fontFamily: "var(--font-family-body)", fontSize: 11,
                      fontWeight: 700, letterSpacing: "0.1em",
                      textTransform: "uppercase", color: "var(--color-concrete)",
                      display: "block", marginBottom: 8,
                    }}>
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%", padding: "12px 16px",
                        fontFamily: "var(--font-family-body)", fontSize: 14,
                        color: "var(--color-ink)",
                        background: "var(--color-chalk)",
                        border: "1px solid var(--color-warm-border)",
                        borderRadius: "var(--radius-sm)",
                        outline: "none",
                      }}
                    >
                      <option value="">Select a project type...</option>
                      <option>New Residential Build</option>
                      <option>Renovation & Retrofit</option>
                      <option>Commercial Fit-Out</option>
                      <option>Foundation & Structural</option>
                      <option>Developer Partnership</option>
                    </select>
                  </div>

                  {/* Description */}
                  <div style={{ marginBottom: 28 }}>
                    <label style={{
                      fontFamily: "var(--font-family-body)", fontSize: 11,
                      fontWeight: 700, letterSpacing: "0.1em",
                      textTransform: "uppercase", color: "var(--color-concrete)",
                      display: "block", marginBottom: 8,
                    }}>
                      Project Description
                    </label>
                    <textarea
                      name="description"
                      placeholder="Describe your project — scope, timeline, any specific requirements..."
                      value={form.description}
                      onChange={handleChange}
                      rows={5}
                      style={{
                        width: "100%", padding: "12px 16px",
                        fontFamily: "var(--font-family-body)", fontSize: 14,
                        color: "var(--color-ink)",
                        background: "var(--color-chalk)",
                        border: "1px solid var(--color-warm-border)",
                        borderRadius: "var(--radius-sm)",
                        outline: "none", resize: "vertical",
                      }}
                    />
                  </div>

                  {/* Budget */}
                  <div style={{ marginBottom: 28 }}>
                    <label style={{
                      fontFamily: "var(--font-family-body)", fontSize: 11,
                      fontWeight: 700, letterSpacing: "0.1em",
                      textTransform: "uppercase", color: "var(--color-concrete)",
                      display: "block", marginBottom: 12,
                    }}>
                      Estimated Budget
                    </label>
                    <div style={{
                      display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8,
                    }} className="budget-grid">
                      {budgetOptions.map((opt) => (
                        <button
                          key={opt.val}
                          type="button"
                          onClick={() => setBudget(opt.val)}
                          style={{
                            padding: "14px 12px",
                            border: "1px solid",
                            borderColor: budget === opt.val ? "var(--color-signal)" : "var(--color-warm-border)",
                            borderRadius: "var(--radius-sm)",
                            background: budget === opt.val ? "rgba(200,82,26,0.06)" : "var(--color-chalk)",
                            cursor: "pointer", textAlign: "center",
                            transition: "all 0.2s",
                          }}
                        >
                          <div style={{
                            fontFamily: "var(--font-family-display)", fontSize: 14,
                            fontWeight: 700, color: budget === opt.val ? "var(--color-signal)" : "var(--color-ink)",
                            marginBottom: 2,
                          }}>
                            {opt.label}
                          </div>
                          <div style={{
                            fontFamily: "var(--font-family-mono)", fontSize: 10,
                            color: "var(--color-iron)", letterSpacing: "0.04em",
                          }}>
                            {opt.sub}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Checkboxes */}
                  <div style={{ marginBottom: 28 }}>
                    {[
                      { name: "consent", label: "I agree to be contacted by phone or email regarding my inquiry" },
                      { name: "updates", label: "Send me project updates, construction insights, and seasonal tips" },
                    ].map((cb) => (
                      <label key={cb.name} style={{
                        display: "flex", alignItems: "flex-start", gap: 12,
                        marginBottom: 12, cursor: "pointer",
                      }}>
                        <input
                          type="checkbox"
                          name={cb.name}
                          checked={form[cb.name as keyof typeof form] as boolean}
                          onChange={handleChange}
                          style={{ marginTop: 2, accentColor: "var(--color-signal)" }}
                        />
                        <span style={{
                          fontFamily: "var(--font-family-serif)", fontSize: 13,
                          color: "var(--color-serif-text)", lineHeight: 1.6,
                        }}>
                          {cb.label}
                        </span>
                      </label>
                    ))}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      width: "100%", padding: "18px 32px",
                      fontFamily: "var(--font-family-body)", fontSize: 14,
                      fontWeight: 600, letterSpacing: "0.08em",
                      textTransform: "uppercase", color: "#ffffff",
                      background: loading ? "var(--color-concrete)" : "var(--color-signal)",
                      border: "none", borderRadius: "var(--radius-md)",
                      cursor: loading ? "not-allowed" : "pointer",
                      transition: "background 0.2s",
                    }}
                  >
                    {loading ? "Sending..." : "Submit Quote Request →"}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div style={{ position: "sticky", top: 84 }}>
            {/* Contact info */}
            <div style={{
              background: "var(--color-warm)",
              border: "1px solid var(--color-warm-border)",
              borderRadius: "var(--radius-md)",
              padding: "36px 32px", marginBottom: 20,
            }}>
              <h3 style={{
                fontFamily: "var(--font-family-display)", fontSize: 20,
                fontWeight: 700, textTransform: "uppercase",
                color: "var(--color-ink)", marginBottom: 24,
              }}>
                Contact Info
              </h3>
              {[
                {
                  label: "Phone",
                  value: "(343) 843-3307",
                  href: "tel:113438433307",
                },
                {
                  label: "Email",
                  value: "info@eikandstone.com",
                  href: "mailto:info@eikandstone.com",
                },
                {
                  label: "Location",
                  value: "Charlottetown, PEI",
                  href: null,
                },
                {
                  label: "Hours",
                  value: "Mon–Fri: 7:00am – 5:00pm\nSat: 8:00am – 12:00pm",
                  href: null,
                },
              ].map((item, i, arr) => (
                <div key={i} style={{
                  paddingBottom: i < arr.length - 1 ? 20 : 0,
                  marginBottom: i < arr.length - 1 ? 20 : 0,
                  borderBottom: i < arr.length - 1 ? "1px solid var(--color-warm-border)" : "none",
                }}>
                  <div style={{
                    fontFamily: "var(--font-family-body)", fontSize: 10,
                    fontWeight: 700, letterSpacing: "0.12em",
                    textTransform: "uppercase", color: "var(--color-iron)",
                    marginBottom: 6,
                  }}>
                    {item.label}
                  </div>
                  {item.href ? (
                    <a href={item.href} style={{
                      fontFamily: "var(--font-family-serif)", fontSize: 14,
                      color: "var(--color-signal)", textDecoration: "none",
                    }}>
                      {item.value}
                    </a>
                  ) : (
                    <div style={{
                      fontFamily: "var(--font-family-serif)", fontSize: 14,
                      color: "var(--color-serif-text)", lineHeight: 1.7,
                      whiteSpace: "pre-line",
                    }}>
                      {item.value}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Why Eik and Stone */}
            <div style={{
              background: "var(--color-ink)",
              borderRadius: "var(--radius-md)",
              padding: "36px 32px",
            }}>
              <h3 style={{
                fontFamily: "var(--font-family-display)", fontSize: 18,
                fontWeight: 700, textTransform: "uppercase",
                color: "#ffffff", marginBottom: 20,
              }}>
                Why Eik and Stone?
              </h3>
              {[
                "Free, no-obligation estimates",
                "Response within one business day",
                "7+ years building in PEI",
                "Licensed & fully insured",
                "2-year workmanship warranty",
                "98% client referral rate",
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  marginBottom: 12,
                }}>
                  <div style={{
                    width: 5, height: 5, borderRadius: "50%",
                    background: "var(--color-signal)", flexShrink: 0,
                  }}/>
                  <span style={{
                    fontFamily: "var(--font-family-serif)", fontSize: 13,
                    color: "rgba(255,255,255,0.6)", lineHeight: 1.5,
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
          .budget-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      <Footer />
    </main>
  );
}
