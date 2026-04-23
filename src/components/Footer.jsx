
import React from "react";
import ShnoorLogo from "./ShnoorLogo";
import { MailIcon, PhoneIcon, MapPinIcon, LinkedInIcon, InstagramIcon, WhatsAppIcon } from "../pages/Icons";

const Footer = ({ t, setPage }) => {
  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const year = new Date().getFullYear();

  const quickLinks = [
    ["Home", "home"], ["About Us", "about"], ["Services", "services"],
    ["Careers", "careers"], ["Trade", "blog"], ["Contact", "contact"],
  ];

  const platforms = [
    { label: "SHNOOR HRM", sub: "HR, Payroll & Attendance", href: "https://hrm.shnoor.com", badge: "HRM" },
    { label: "SHNOOR LMS", sub: "Learning & Training Portal", href: "https://lms.shnoor.com", badge: "LMS" },
    { label: "Assessments", sub: "Coding & Technical Tests", href: "https://lms.shnoor.com", badge: "TEST" },
    { label: "Career Portal", sub: "Apply for Open Roles", href: "https://www.shnoor.com/", badge: "JOBS"},
     { label: "SHNOOR Invoice ", sub: "Smart Invoicing,Without the Hassle Portal", href: "https://www.invoicecloud.in/", badge: "INVO" },
  ];

  const contacts = [
    { icon: <MailIcon size={20} />, text: "info@shnoor.com", href: "mailto:info@shnoor.com" },
    { icon: <MailIcon size={20} />, text: "proc@shnoor.com", href: "mailto:proc@shnoor.com" },
    { icon: <PhoneIcon size={20} />, text: "+91-9429694298", href: "tel:+919429694298" },
    { icon: <MapPinIcon size={20} />, text: "10009 Mount Tabor Road, Odessa Missouri, USA", href: null },
    { icon: <MapPinIcon size={20} />, text: "Muscat, Sultanate of Oman", href: null },
  ];
  const partners = [
    { name: "Google Partner", logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=252,fit=crop/AQEZlaZbvrt8n2qw/google-removebg-preview-m2WqaKlWovh4rZbp.png", width: 100 },
    { name: "", logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=139,fit=crop/AQEZlaZbvrt8n2qw/semrush-removebg-preview-mP432qpLegs2OQE4.png", width: 500 },
    { name: "Meta Business Partner", logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=252,fit=crop/AQEZlaZbvrt8n2qw/meta-removebg-preview-AoP4qBZ2nviwL079.png", width: 36 },
  ];

  const legalLinks = [
    { label: "Privacy Policy",    page: "privacy"   },
    { label: "Terms of Service",  page: "terms"     },
    { label: "Company Policies",  page: "policies"  },
  ];

  const muteColor = "rgba(255,255,255,0.55)";
  const accentColor = "#E8A020";

  return (
    <footer style={{ background: "#060E1C", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div style={{ background: "linear-gradient(135deg,#0D2144,#152E58)", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "54px 5%" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 28 }}>
          <div>
            <p style={{ fontSize: 28, fontWeight: 700, color: "#FFF", marginBottom: 12 }}>Ready to transform your business with expert IT solutions?</p>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.6)" }}>Speak with our specialists — we respond within 24 hours.</p>
          </div>
          <button onClick={() => nav("contact")} style={{ background: `linear-gradient(135deg,${accentColor},#F0B830)`, color: "#0D1E38", border: "none", borderRadius: 12, padding: "18px 40px", fontSize: 18, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap", transition: "transform 0.2s, box-shadow 0.2s" }}>
            Get in Touch →
          </button>
        </div>
      </div>
      <div style={{ padding: "80px 5% 48px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1.2fr 1.4fr 1.4fr", gap: 56, marginBottom: 64 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 28 }}>
                <ShnoorLogo size={72} />
                <div>
                  <div style={{ fontFamily: "Georgia,serif", fontSize: 28, fontWeight: 800, color: "#FFF", letterSpacing: "0.12em" }}>SHNOOR™</div>
                  <div style={{ fontSize: 12, color: accentColor, letterSpacing: "0.3em", textTransform: "uppercase", marginTop: 4 }}>INTERNATIONAL LLC</div>
                </div>
              </div>
              <p style={{ fontSize: 17, color: muteColor, lineHeight: 1.7, maxWidth: 320, marginBottom: 32 }}>
                Bridging innovative IT and global commerce — headquartered in Missouri, USA with operations across the GCC, South Asia, and East Africa.
              </p>
              <div style={{ display: "flex", gap: 16, marginBottom: 32 }}>
                {[
                  ["https://linkedin.com/company/shnoor", <LinkedInIcon size={20} />],
                  ["https://instagram.com/shnoor", <InstagramIcon size={20} />],
                  ["https://wa.me/919429694298", <WhatsAppIcon size={20} />],
                ].map(([href, icon], i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: accentColor, transition: "all 0.2s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(232,160,32,0.2)"; e.currentTarget.style.borderColor = accentColor; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
                  >{icon}</a>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {["🇺🇸 Missouri, USA", "🇴🇲 Muscat, Oman", "🌍 East Africa"].map(loc => (
                  <span key={loc} style={{ fontSize: 14, color: muteColor, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "6px 14px" }}>{loc}</span>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: accentColor, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 28 }}>Company</div>
              {quickLinks.map(([label, pg]) => (
                <div key={label} onClick={() => nav(pg)}
                  onMouseEnter={e => e.currentTarget.style.color = "#FFF"}
                  onMouseLeave={e => e.currentTarget.style.color = muteColor}
                  style={{ fontSize: 17, color: muteColor, marginBottom: 16, cursor: "pointer", transition: "color 0.2s", fontWeight: 500 }}>
                  {label}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: accentColor, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 28 }}>Platforms</div>
              {platforms.map((p, i) => (
                <div key={i} style={{ marginBottom: 24 }}>
                  {p.internal ? (
                    <button onClick={() => nav(p.internal)} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left", width: "100%" }}>
                      <PlatformRow p={p} muteColor={muteColor} />
                    </button>
                  ) : (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                      <PlatformRow p={p} muteColor={muteColor} />
                    </a>
                  )}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: accentColor, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 28 }}>Contact Us</div>
              {contacts.map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 18 }}>
                  <span style={{ color: accentColor, marginTop: 2, flexShrink: 0 }}>{c.icon}</span>
                  {c.href ? (
                    <a href={c.href} style={{ color: muteColor, fontSize: 16, textDecoration: "none", transition: "color 0.2s", lineHeight: 1.5 }}
                      onMouseEnter={e => e.target.style.color = "#FFF"}
                      onMouseLeave={e => e.target.style.color = muteColor}>{c.text}</a>
                  ) : (
                    <span style={{ color: muteColor, fontSize: 16, lineHeight: 1.5 }}>{c.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "36px 0", marginBottom: 40 }}>
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: accentColor, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>Trusted Partners</div>
              <p style={{ fontSize: 18, color: muteColor }}>Proud to collaborate with industry leaders worldwide</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 32, rowGap: 40 }}>
              {partners.map((partner, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: 12, background: "rgba(255,255,255,0.03)", padding: "12px 24px", borderRadius: 60, border: "1px solid rgba(255,255,255,0.08)" }}>
                  <img src={partner.logo} alt={partner.name} style={{ height: 40, width: "auto", maxWidth: 100, filter: "brightness(0) invert(1)" }} />
                  <span style={{ fontSize: 16, fontWeight: 600, color: "#FFF", letterSpacing: "0.5px" }}>{partner.name}</span>
                </div>
              ))}
              <div style={{ fontSize: 15, color: muteColor, fontStyle: "italic" }}>+ 15+ other strategic alliances</div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.35)" }}>© 2025–{year} SHNOOR International LLC. All rights reserved.</p>
            <div style={{ display: "flex", gap: 32 }}>
              {legalLinks.map(({ label, page }) => (
                <span
                  key={label}
                  onClick={() => nav(page)}
                  style={{ fontSize: 15, color: "rgba(255,255,255,0.35)", cursor: "pointer", transition: "color 0.2s", fontWeight: 500 }}
                  onMouseEnter={e => e.currentTarget.style.color = accentColor}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.35)"}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) { 
          footer > div:last-child > div > div:first-child { 
            grid-template-columns: 1fr 1fr !important; 
          } 
        }
        @media (max-width: 700px) { 
          footer > div:last-child > div > div:first-child { 
            grid-template-columns: 1fr !important; 
          } 
          .partners-flex { justify-content: center; }
        }
        button:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.2); }
      `}</style>
    </footer>
  );
};

const PlatformRow = ({ p, muteColor }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
    <div style={{
      minWidth: 50, height: 30, background: "rgba(232,160,32,0.12)", border: "1px solid rgba(232,160,32,0.25)",
      borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 12, fontWeight: 800, color: "#E8A020", letterSpacing: "0.05em", flexShrink: 0,
    }}>{p.badge}</div>
    <div>
      <div style={{ fontSize: 17, color: muteColor, fontWeight: 600, transition: "color 0.2s", lineHeight: 1.4 }}>{p.label}</div>
      <div style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", marginTop: 4 }}>{p.sub}</div>
    </div>
  </div>
);

export default Footer;