
import React, { useState, useEffect, useRef } from "react";
import ShnoorLogo from "./ShnoorLogo";
import { MenuIcon, CloseIcon } from "../pages/Icons";
import { themes } from "./theme";

const ThemeDot = ({ themeKey, current, onChange }) => {
  const th = themes[themeKey];
  return (
    <button onClick={() => onChange(themeKey)} title={th.label} style={{
      width: 20, height: 20, borderRadius: "50%", cursor: "pointer",
      background: `linear-gradient(135deg, ${th.swatch[0]}, ${th.swatch[1]})`,
      border: current === themeKey ? "2px solid #E8A020" : "2px solid rgba(128,128,128,0.3)",
      outline: current === themeKey ? "2px solid rgba(232,160,32,0.3)" : "none",
      outlineOffset: 2,
      transform: current === themeKey ? "scale(1.25)" : "scale(1)",
      transition: "all 0.2s", flexShrink: 0,
      padding: 0,
    }} />
  );
};

const serviceDropdownItems = [
  { key: "services",   label: "All Services",           icon: "◈", desc: "Full service overview" },
  { key: "cloud",      label: "Cloud Management",        icon: "☁", desc: "AWS · Azure · GCP" },
  { key: "ai",         label: "AI & Data Analytics",     icon: "◎", desc: "ML · NLP · BI" },
  { key: "network",    label: "Network Management",      icon: "⬡", desc: "SD-WAN · NOC · Security" },
  { key: "healthcare", label: "Healthcare IT",           icon: "✚", desc: "EHR · Telehealth · HIPAA" },
  { key: "bgv",        label: "Background Verification", icon: "◉", desc: "Criminal · Employment · Education" },
  { key: "platforms",  label: "Platforms (HRM / LMS)",   icon: "▦", desc: "hrm.shnoor.com · lms.shnoor.com" },
];

const Navbar = ({ page, setPage, t, currentTheme, setTheme }) => {
  const [scrolled, setScrolled]     = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [svcOpen, setSvcOpen]       = useState(false);
  const [mobSvcOpen, setMobSvcOpen] = useState(false);
  const dropRef = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 45);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = (e) => { if (dropRef.current && !dropRef.current.contains(e.target)) setSvcOpen(false); };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const nav = (k) => { setPage(k); setDrawerOpen(false); setSvcOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const topLinks = [
    { key: "home",    label: "Home" },
    { key: "about",   label: "About Us" },
    { key: "__svc__", label: "Services", dropdown: true },
    { key: "careers", label: "Careers" },
    { key: "blog",    label: "Trade" },
    { key: "contact", label: "Contact" },
  ];

  const isHero = page === "home";
  const solid  = t.isLight || scrolled;

  const linkColor = (active) => {
    if (t.isLight) return active ? t.text : t.textSub;
    if (isHero && !scrolled) return active ? "#FFF" : "rgba(255,255,255,0.6)";
    return active ? t.text : t.textSub;
  };
  const logoNameColor = () => (!t.isLight && isHero && !scrolled) ? "#FFF" : t.text;
  const logoSubColor  = () => (!t.isLight && isHero && !scrolled) ? "rgba(255,255,255,0.55)" : t.gold;

  const servicePages = ["services","cloud","ai","network","healthcare","bgv","platforms"];
  const svcActive = servicePages.includes(page);
  const NAV_H = 72;

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .desk-nav { display: none !important; }
          .mob-nav  { display: flex !important; }
          .nav-logo-text { display: none !important; }
        }
        @media (min-width: 769px) {
          .desk-nav { display: flex !important; }
          .mob-nav  { display: none !important; }
          .nav-logo-text { display: block !important; }
        }
      `}</style>

      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        height: NAV_H,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 4%",
        background: solid ? t.navBg : "transparent",
        backdropFilter: solid ? "blur(16px)" : "none",
        borderBottom: solid ? `1px solid ${t.border}` : "1px solid transparent",
        boxShadow: solid ? t.navShadow : "none",
        transition: "all 0.35s ease",
      }}>
        <button onClick={() => nav("home")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 12 }}>
          <ShnoorLogo size={52} />
          <div className="nav-logo-text" style={{ lineHeight: 1.15 }}>
            <div style={{
              fontFamily: "Georgia,'Times New Roman',serif",
              fontSize: 22,
              fontWeight: 800,
              color: logoNameColor(),
              letterSpacing: "0.12em",
              transition: "color 0.3s",
            }}>
              SHNOOR<sup style={{ fontSize: "0.42em", verticalAlign: "super", fontWeight: 600 }}>™</sup>
            </div>
            <div style={{
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: logoSubColor(),
              transition: "color 0.3s",
              marginTop: 2,
            }}>
              INTERNATIONAL LLC
            </div>
          </div>
        </button>
        <div className="desk-nav" style={{ alignItems: "center", gap: 24 }}>
          {topLinks.map(l => {
            if (l.dropdown) {
              return (
                <div key={l.key} ref={dropRef} style={{ position: "relative" }}>
                  <button
                    onClick={() => setSvcOpen(o => !o)}
                    style={{
                      background: "none", border: "none", cursor: "pointer",
                      fontSize: 14, fontWeight: svcActive ? 700 : 500,
                      color: linkColor(svcActive),
                      padding: "4px 2px",
                      borderBottom: svcActive ? `2px solid ${t.goldLight}` : "2px solid transparent",
                      transition: "all 0.2s", letterSpacing: "0.02em",
                      display: "flex", alignItems: "center", gap: 5,
                    }}>
                    Services
                    <span style={{ fontSize: 10, transition: "transform 0.2s", display: "inline-block", transform: svcOpen ? "rotate(180deg)" : "none" }}>▾</span>
                  </button>
                  {svcOpen && (
                    <div style={{
                      position: "absolute", top: "calc(100% + 16px)", left: "50%", transform: "translateX(-50%)",
                      width: 360, background: t.bgCard, border: `1px solid ${t.border}`,
                      borderRadius: 14, boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                      overflow: "hidden", animation: "fadeIn 0.18s ease",
                      zIndex: 300,
                    }}>
                      <div style={{ padding: "8px" }}>
                        {serviceDropdownItems.map((item) => (
                          <button key={item.key} onClick={() => nav(item.key)} style={{
                            display: "flex", alignItems: "center", gap: 14,
                            width: "100%", background: page === item.key ? t.goldDim : "none",
                            border: "none", borderRadius: 8, padding: "11px 14px",
                            cursor: "pointer", textAlign: "left", transition: "background 0.15s",
                          }}
                            onMouseEnter={e => e.currentTarget.style.background = t.goldDim}
                            onMouseLeave={e => e.currentTarget.style.background = page === item.key ? t.goldDim : "none"}>
                            <div style={{ width: 36, height: 36, borderRadius: 8, background: t.goldDim, border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, color: t.goldLight, flexShrink: 0 }}>
                              {item.icon}
                            </div>
                            <div>
                              <div style={{ fontSize: 13.5, fontWeight: 600, color: t.text, marginBottom: 2 }}>{item.label}</div>
                              <div style={{ fontSize: 11, color: t.textMuted }}>{item.desc}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <button key={l.key} onClick={() => nav(l.key)} style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: 14, fontWeight: page === l.key ? 700 : 500,
                color: linkColor(page === l.key),
                padding: "4px 2px",
                borderBottom: page === l.key ? `2px solid ${t.goldLight}` : "2px solid transparent",
                transition: "all 0.2s", letterSpacing: "0.02em", whiteSpace: "nowrap",
              }}>{l.label}</button>
            );
          })}
        </div>

        <div className="desk-nav" style={{ alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", gap: 8 }}>
            {Object.keys(themes).map(k => <ThemeDot key={k} themeKey={k} current={currentTheme} onChange={setTheme} />)}
          </div>
          <button onClick={() => nav("contact")} style={{
            background: `linear-gradient(135deg, ${t.gold}, ${t.goldLight})`,
            color: "#0D1E38", border: "none", borderRadius: 9,
            padding: "10px 22px", fontSize: 13, fontWeight: 700, cursor: "pointer", letterSpacing: "0.04em",
          }}>Get a Quote</button>
        </div>
        <div className="mob-nav" style={{ alignItems: "center", gap: 10 }}>
          <button onClick={() => setDrawerOpen(true)} style={{
            background: "none", border: "none", cursor: "pointer",
            color: (!t.isLight && isHero && !scrolled) ? "#FFF" : t.text,
            display: "flex", padding: 4,
          }}>
            <MenuIcon size={26} />
          </button>
        </div>
      </nav>
      {drawerOpen && (
        <div
          onClick={() => setDrawerOpen(false)}
          style={{ position: "fixed", inset: 0, zIndex: 299, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(3px)" }}
        />
      )}
      <div style={{
        position: "fixed", top: 0, right: drawerOpen ? 0 : "-100%", width: 300,
        height: "100vh", zIndex: 300, background: t.bgCard,
        borderLeft: `1px solid ${t.border}`, padding: "24px 20px",
        transition: "right 0.35s cubic-bezier(0.4,0,0.2,1)", overflowY: "auto",
      }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <ShnoorLogo size={46} />
            <div>
              <div style={{ fontFamily: "Georgia,serif", fontSize: 16, fontWeight: 800, color: t.text }}>SHNOOR™</div>
              <div style={{ fontSize: 7.5, color: t.gold, letterSpacing: "0.22em", textTransform: "uppercase" }}>INTERNATIONAL LLC</div>
            </div>
          </div>
          <button onClick={() => setDrawerOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: t.text }}>
            <CloseIcon size={22} />
          </button>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 20, padding: "12px 14px", background: t.goldDim, borderRadius: 10, border: `1px solid ${t.border}` }}>
          <span style={{ fontSize: 11, color: t.textMuted, fontWeight: 600, marginRight: 4 }}>Theme:</span>
          {Object.keys(themes).map(k => <ThemeDot key={k} themeKey={k} current={currentTheme} onChange={setTheme} />)}
        </div>
        {topLinks.map(l => {
          if (l.dropdown) {
            return (
              <div key="svc-mob">
                <button onClick={() => setMobSvcOpen(o => !o)} style={{
                  display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center",
                  background: svcActive ? t.goldDim : "none",
                  border: "none", borderLeft: svcActive ? `3px solid ${t.goldLight}` : "3px solid transparent",
                  cursor: "pointer", padding: "12px 14px", borderRadius: 8,
                  fontSize: 14, fontWeight: svcActive ? 700 : 500,
                  color: svcActive ? t.text : t.textSub, marginBottom: 4, transition: "all 0.2s",
                }}>
                  Services
                  <span style={{ fontSize: 10, transform: mobSvcOpen ? "rotate(180deg)" : "none", transition: "0.2s" }}>▾</span>
                </button>
                {mobSvcOpen && (
                  <div style={{ paddingLeft: 12, marginBottom: 4 }}>
                    {serviceDropdownItems.map(item => (
                      <button key={item.key} onClick={() => nav(item.key)} style={{
                        display: "flex", alignItems: "center", gap: 10, width: "100%",
                        background: page === item.key ? t.goldDim : "none",
                        border: "none", borderLeft: page === item.key ? `3px solid ${t.goldLight}` : "3px solid transparent",
                        cursor: "pointer", textAlign: "left", padding: "9px 14px", borderRadius: 8,
                        fontSize: 13, fontWeight: page === item.key ? 700 : 500,
                        color: page === item.key ? t.text : t.textSub, marginBottom: 2, transition: "all 0.2s",
                      }}>
                        <span style={{ fontSize: 14, color: t.goldLight }}>{item.icon}</span>
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          }
          return (
            <button key={l.key} onClick={() => nav(l.key)} style={{
              display: "block", width: "100%", background: page === l.key ? t.goldDim : "none",
              border: "none", borderLeft: page === l.key ? `3px solid ${t.goldLight}` : "3px solid transparent",
              cursor: "pointer", textAlign: "left", padding: "12px 14px", borderRadius: 8,
              fontSize: 14, fontWeight: page === l.key ? 700 : 500,
              color: page === l.key ? t.text : t.textSub, marginBottom: 4, transition: "all 0.2s",
            }}>{l.label}</button>
          );
        })}

        <button onClick={() => nav("contact")} style={{
          marginTop: 18, width: "100%",
          background: `linear-gradient(135deg, ${t.gold}, ${t.goldLight})`,
          color: "#0D1E38", border: "none", borderRadius: 8, padding: "14px",
          fontSize: 14, fontWeight: 700, cursor: "pointer",
        }}>Get a Quote</button>
        <a
          href="https://wa.me/9392271152"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: 10, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            background: "#25D366", color: "#FFF", border: "none", borderRadius: 8, padding: "12px",
            fontSize: 14, fontWeight: 700, cursor: "pointer", textDecoration: "none",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Chat on WhatsApp
        </a>
      </div>
    </>
  );
};

export default Navbar;