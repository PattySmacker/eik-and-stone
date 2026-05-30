"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

function OakLeafLogo({ dark }: { dark: boolean }) {
  const trunk = dark ? "#0f1f3d" : "#ffffff";
  const leaf = dark ? "#2563a8" : "#4a90d9";
  const vein = dark ? "#c8d9ed" : "rgba(255,255,255,0.5)";
  return (
    <svg viewBox="0 0 36 44" width="20" height="26" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 4 C10 4 4 11 4 19 C4 25 7 30 12 33 L12 40 L18 43 L24 40 L24 33 C29 30 32 25 32 19 C32 11 26 4 18 4Z" fill={leaf}/>
      <line x1="18" y1="6" x2="18" y2="40" stroke={vein} strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="18" y1="16" x2="26" y2="13" stroke={vein} strokeWidth="0.9" strokeLinecap="round"/>
      <line x1="18" y1="22" x2="10" y2="20" stroke={vein} strokeWidth="0.9" strokeLinecap="round"/>
      <line x1="18" y1="28" x2="25" y2="26" stroke={vein} strokeWidth="0.8" strokeLinecap="round"/>
      <rect x="16" y="38" width="4" height="5" rx="1" fill={trunk}/>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const dark = scrolled || !isHome;

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.2s ease, border-color 0.2s ease",
        background: dark ? "var(--color-warm)" : "transparent",
        borderBottom: dark ? "1px solid var(--color-warm-border)" : "1px solid transparent",
      }}
    >
      <div style={{
        maxWidth: 1240,
        margin: "0 auto",
        padding: "0 40px",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <OakLeafLogo dark={dark} />
          <span style={{
            fontFamily: "var(--font-family-display)",
            fontSize: 14,
            fontWeight: 800,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: dark ? "var(--color-ink)" : "#ffffff",
          }}>
            Eik <span style={{ color: "var(--color-signal)" }}>&</span> Stone
          </span>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-family-body)",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.04em",
                textDecoration: "none",
                color: dark
                  ? pathname === link.href ? "var(--color-signal)" : "var(--color-concrete)"
                  : pathname === link.href ? "var(--color-craft)" : "rgba(255,255,255,0.6)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-family-body)",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#ffffff",
              background: "var(--color-signal)",
              padding: "11px 24px",
              borderRadius: "var(--radius-md)",
              textDecoration: "none",
            }}
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <div style={{
            width: 24, height: 2,
            background: dark ? "var(--color-ink)" : "#ffffff",
            marginBottom: 5,
            transition: "all 0.2s",
            transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
          }}/>
          <div style={{
            width: 24, height: 2,
            background: dark ? "var(--color-ink)" : "#ffffff",
            marginBottom: 5,
            opacity: menuOpen ? 0 : 1,
            transition: "all 0.2s",
          }}/>
          <div style={{
            width: 24, height: 2,
            background: dark ? "var(--color-ink)" : "#ffffff",
            transition: "all 0.2s",
            transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
          }}/>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: "var(--color-warm)",
          borderTop: "1px solid var(--color-warm-border)",
          padding: "24px 40px",
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-family-display)",
                fontSize: 22,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                textDecoration: "none",
                color: pathname === link.href ? "var(--color-signal)" : "var(--color-ink)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-family-body)",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#ffffff",
              background: "var(--color-signal)",
              padding: "14px 28px",
              borderRadius: "var(--radius-md)",
              textDecoration: "none",
              textAlign: "center",
              marginTop: 8,
            }}
          >
            Get a Quote
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
