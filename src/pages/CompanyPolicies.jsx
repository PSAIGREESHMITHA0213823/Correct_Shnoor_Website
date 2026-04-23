import React, { useState } from "react";

const pdfDocs = [
  {
    title: "Comapny profile",
    description: "Standards of professional behavior, ethics, and workplace conduct for all SHNOOR employees and contractors.",
    href: "/pdfs/a.pdf",      
    viewable: true,
    size: "2.4 MB",
    updated: "Jan 2025",
    badge: "HR",
  },
  {
    title: "Information Security Policy",
    description: "Guidelines on data handling, system access, password management, and cybersecurity practices.",
    href: "/pdfs/b.pdf",        
    viewable: true,
    size: "1.8 MB",
    updated: "Jan 2025",
    badge: "IT",
  },
  {
    title: "Anti-Bribery & Corruption Policy",
    description: "SHNOOR's zero-tolerance stance on bribery, kickbacks, and corrupt practices in all global operations.",
    href: "/pdfs/b.pdf",   
    viewable: true,
    size: "1.1 MB",
    updated: "Jan 2025",
    badge: "LEGAL",
  },

];

const badgeColors = {
  HR:    { bg: "rgba(59,130,246,0.12)", border: "rgba(59,130,246,0.25)", text: "#60A5FA" },
  IT:    { bg: "rgba(16,185,129,0.12)", border: "rgba(16,185,129,0.25)", text: "#34D399" },
  LEGAL: { bg: "rgba(232,160,32,0.12)", border: "rgba(232,160,32,0.25)", text: "#E8A020" },
 
};

const PDFIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="#E8A020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2v6h6M9 13h1c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1H9v-3zm4 0h1.5c.8 0 1.5.7 1.5 1.5S15.3 16 14.5 16H13v-3zm3 0v3" stroke="#E8A020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
  </svg>
);

const ViewIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const CompanyPolicies = ({ setPage }) => {
  const [filter, setFilter] = useState("ALL");
  const badges = ["ALL", "HR", "IT", "LEGAL",];
  const filtered = filter === "ALL" ? pdfDocs : pdfDocs.filter(d => d.badge === filter);

  return (
    <div style={{ background: "#060E1C", minHeight: "100vh", padding: "60px 5%" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
  <div onClick={() => setPage("Home")} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#E8A020", fontSize: 14, cursor: "pointer", marginBottom: 40, fontWeight: 600 }}>
          ← Back to Home
        </div>
        <div style={{ marginBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 36 }}>
          <div style={{ fontSize: 12, color: "#E8A020", letterSpacing: "0.24em", textTransform: "uppercase", marginBottom: 14, fontWeight: 700 }}>Legal & Compliance</div>
          <h1 style={{ fontSize: 38, fontWeight: 800, color: "#FFF", margin: "0 0 16px", fontFamily: "Georgia, serif" }}>Company Policies</h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", margin: 0 }}>
            All SHNOOR policy documents are available below. Click <strong style={{ color: "rgba(255,255,255,0.65)" }}>View</strong> to open in your browser or <strong style={{ color: "rgba(255,255,255,0.65)" }}>Download</strong> to save a copy.
          </p>
        </div>

       
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {badges.map(b => (
            <button key={b} onClick={() => setFilter(b)} style={{
              padding: "8px 18px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", border: "1px solid",
              background: filter === b ? "linear-gradient(135deg,#C8820A,#E8A020)" : "rgba(255,255,255,0.04)",
              borderColor: filter === b ? "transparent" : "rgba(255,255,255,0.1)",
              color: filter === b ? "#0D1E38" : "rgba(255,255,255,0.5)",
              transition: "all 0.2s",
            }}>{b}</button>
          ))}
        </div>

     
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {filtered.map((doc, i) => {
            const bc = badgeColors[doc.badge] || badgeColors.LEGAL;
            return (
              <div key={i} style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 14, padding: "24px 28px", display: "flex", alignItems: "center", gap: 20,
                transition: "border-color 0.2s, background 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(232,160,32,0.3)"; e.currentTarget.style.background = "rgba(232,160,32,0.04)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
              >
                <div style={{ flexShrink: 0 }}><PDFIcon /></div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 16, fontWeight: 700, color: "#FFF" }}>{doc.title}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 5, background: bc.bg, border: `1px solid ${bc.border}`, color: bc.text, letterSpacing: "0.08em" }}>{doc.badge}</span>
                  </div>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", margin: "0 0 8px", lineHeight: 1.6 }}>{doc.description}</p>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>PDF · {doc.size} · Updated {doc.updated}</div>
                </div>
                <div style={{ display: "flex", gap: 10, flexShrink: 0, flexWrap: "wrap" }}>
                  {doc.viewable && (
                    <a href={doc.href} target="_blank" rel="noopener noreferrer" style={{
                      display: "flex", alignItems: "center", gap: 6,
                      border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.55)",
                      padding: "9px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600,
                      textDecoration: "none", transition: "all 0.2s",
                    }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#FFF"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}
                    >
                      <ViewIcon /> View
                    </a>
                  )}
                  <a href={doc.href} download style={{
                    display: "flex", alignItems: "center", gap: 6,
                    background: "linear-gradient(135deg,#C8820A,#E8A020)", color: "#0D1E38",
                    padding: "9px 16px", borderRadius: 8, fontSize: 13, fontWeight: 700,
                    textDecoration: "none",
                  }}>
                    <DownloadIcon /> Download
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      
        <div style={{ marginTop: 48, padding: "24px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12 }}>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", margin: 0, lineHeight: 1.8 }}>
            These policies are reviewed and updated annually. For the most current version of any policy or to request a policy not listed here, please contact <a href="mailto:info@shnoor.com" style={{ color: "#E8A020" }}>info@shnoor.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyPolicies;