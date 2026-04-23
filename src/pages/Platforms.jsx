

import React, { useState } from "react";
import { CheckIcon, ExternalLinkIcon, UsersIcon, BookOpenIcon } from "./Icons";

const Img = ({ src, alt, style }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div style={{ position: "relative", overflow: "hidden", ...style }}>
      {!loaded && <div style={{ position: "absolute", inset: 0, background: "rgba(13,33,68,0.3)" }} />}
      <img src={src} alt={alt} onLoad={() => setLoaded(true)} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: loaded ? 1 : 0, transition: "opacity 0.4s" }} />
    </div>
  );
};

const platforms = [
  {
    Icon: UsersIcon,
    title: "HRM Portal",
    sub: "Human Resource Management System",
    tagline: "Manage your entire workforce from a single intelligent platform.",
    desc: "A comprehensive HRMS designed for modern organizations — streamlining everything from employee onboarding, payroll processing and attendance tracking to leave management, performance appraisals, and in-depth HR analytics.",
    url: "https://hrm.shnoor.com",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=80",
    gradientBg: "linear-gradient(135deg, #0D2144 0%, #1A3A6A 100%)",
    features: [
      "Employee Lifecycle Management", "Automated Payroll & Benefits",
      "Attendance & Biometric Integration", "Leave & Time-Off Tracking",
      "Performance Appraisal System", "HR Analytics & Reports",
      "Recruitment & Onboarding", "Document Management",
    ],
  },
  {
    Icon: BookOpenIcon,
    title: "LMS Portal",
    sub: "Learning Management System",
    tagline: "Empower your team with structured, trackable learning programs.",
    desc: "An advanced learning platform that enables organizations to create, deliver, track and manage professional development programs, certifications, and e-learning courses — accessible anywhere, anytime.",
    url: "https://lms.shnoor.com",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&q=80",
    gradientBg: "linear-gradient(135deg, #0A1A30 0%, #152A48 100%)",
    features: [
      "Course Creation & Management", "HD Video Lecture Delivery",
      "Interactive Assessments & Quizzes", "Certification & Badge Tracking",
      "Progress Analytics Dashboard", "Gamification & Leaderboards",
      "SCORM / xAPI Compatibility", "Mobile-Responsive Interface",
    ],
  },
];

const Platforms = ({ t }) => {
  return (
    <div style={{ paddingTop: 96 }}>
      {/* Hero */}
      <section style={{ background: t.heroBg, padding: "90px 5% 72px", textAlign: "center" }}>
        <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: "rgba(232,160,32,0.15)", border: "1px solid rgba(232,160,32,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 20 }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: "#E8A020", letterSpacing: "0.18em", textTransform: "uppercase" }}>Technology Platforms</span>
        </div>
        <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(32px,5vw,60px)", color: "#FFF", fontWeight: 900, marginBottom: 18 }}>Our <span style={{ color: "#E8A020" }}>Platforms</span></h1>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", maxWidth: 560, margin: "0 auto" }}>
          Purpose-built platforms to streamline your HR operations and workforce learning & development.
        </p>
      </section>

      <section style={{ background: t.bg, padding: "90px 5%" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", flexDirection: "column", gap: 40 }}>
          {platforms.map((p, i) => (
            <div key={i} style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 18, overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr" }}>
                <div style={{ background: p.gradientBg, padding: "52px 44px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ width: 64, height: 64, borderRadius: 16, background: "rgba(232,160,32,0.15)", border: "1px solid rgba(232,160,32,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#E8A020", marginBottom: 22 }}>
                      <p.Icon size={30} color="#E8A020" />
                    </div>
                    <h2 style={{ fontFamily: "Georgia,serif", fontSize: 34, fontWeight: 800, color: "#FFF", marginBottom: 8 }}>{p.title}</h2>
                    <div style={{ fontSize: 10, color: "#E8A020", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 20, fontWeight: 700 }}>{p.sub}</div>
                    <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.65, marginBottom: 18, fontStyle: "italic" }}>"{p.tagline}"</p>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.52)", lineHeight: 1.8 }}>{p.desc}</p>
                  </div>
                  <a href={p.url} target="_blank" rel="noopener noreferrer"
                    style={{ marginTop: 36, display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#C8820A,#E8A020)", color: "#0D1E38", borderRadius: 10, padding: "13px 24px", fontSize: 14, fontWeight: 700, textDecoration: "none", width: "fit-content" }}>
                    Access {p.title} <ExternalLinkIcon size={14} />
                  </a>
                </div>
                <div>
                  <Img src={p.img} alt={p.title} style={{ height: 260 }} />
                  <div style={{ padding: "32px 42px" }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: t.goldLight, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 22 }}>Platform Features</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 20px" }}>
                      {p.features.map((f, j) => (
                        <div key={j} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                          <div style={{ width: 24, height: 24, borderRadius: 6, background: t.goldDim, border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: t.goldLight, flexShrink: 0 }}><CheckIcon size={12} /></div>
                          <span style={{ fontSize: 13.5, color: t.text }}>{f}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: 30, padding: "18px 22px", background: t.goldDim, border: `1px solid ${t.border}`, borderRadius: 10 }}>
                      <p style={{ fontSize: 13, color: t.textSub, lineHeight: 1.7 }}>
                        <span style={{ color: t.goldLight, fontWeight: 600 }}>Need a demo?</span>{" "}
                        Contact us to schedule a guided walkthrough tailored to your organization's needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Platforms;