
import React, { useState } from "react";
import { ArrowRightIcon, UserCheckIcon, ShieldIcon, FileTextIcon, SearchIcon, LockIcon, ZapIcon, GlobeIcon, ClockIcon, BankIcon, HospitalIcon, FactoryIcon, LaptopIcon, GraduationCapIcon, UsersIcon } from "./Icons";

const Img = ({ src, alt, style }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div style={{ position: "relative", overflow: "hidden", ...style }}>
      {!loaded && <div style={{ position: "absolute", inset: 0, background: "rgba(13,33,68,0.3)" }} />}
      <img src={src} alt={alt} onLoad={() => setLoaded(true)} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: loaded ? 1 : 0, transition: "opacity 0.4s" }} />
    </div>
  );
};

const checks = [
  { Icon: ShieldIcon,    title: "Criminal Record Verification",       desc: "Comprehensive criminal background checks spanning district courts, state databases, and national crime records. We cover offenses across multiple jurisdictions — providing a complete, legally compliant picture that protects your organization from liability and safeguards your workplace." },
  { Icon: FileTextIcon,  title: "Employment History Verification",    desc: "Thorough verification of past employment claims — including dates of service, job titles, performance records, and reasons for separation. Our discreet direct verification process with former employers ensures the work history presented by candidates is accurate and complete." },
  { Icon: SearchIcon,    title: "Education & Qualification Checks",   desc: "Authentication of academic degrees, professional certifications, diplomas, and credentials directly with educational institutions worldwide. We verify enrollment dates, graduation status, and the legitimacy of certifying bodies — preventing fraudulent credential claims." },
  { Icon: UserCheckIcon, title: "Reference Checks",                   desc: "Structured professional reference interviews that go beyond the standard 'yes/no' confirmation. Our trained interviewers gather nuanced insights about work style, strengths, areas for improvement, and cultural fit — giving you confidence in your hiring decisions." },
  { Icon: GlobeIcon,     title: "Address & Identity Verification",    desc: "Confirmation of current and historical addresses, government-issued identity documents (Aadhaar, PAN, Passport, Driver's License), and biometric database checks. We ensure the person you are hiring is exactly who they claim to be." },
  { Icon: LockIcon,      title: "Social Media & Digital Footprint",   desc: "Structured, GDPR-compliant analysis of publicly available digital presence to identify reputational risks, undisclosed affiliations, and conduct patterns relevant to professional judgment. Our process is methodical, documented, and legally defensible." },
  { Icon: ZapIcon,       title: "Drug & Health Screening",            desc: "Coordination of pre-employment drug testing, executive health assessments, and fitness-for-duty evaluations through our accredited laboratory and medical partner network. Compliant with applicable labor laws and industry-specific regulations." },
  { Icon: ClockIcon,     title: "Ongoing & Periodic Re-Screening",    desc: "Continuous monitoring programs for existing employees in sensitive or regulated roles. We provide periodic re-verification of credentials, continuous criminal watchlist monitoring, and automated alerts when significant changes are detected in an employee's background profile." },
];

const industries = [
  { Icon: BankIcon,          title: "Banking & Financial Services",  desc: "NBFC, banking, insurance, and fintech organizations with stringent RBI and SEBI compliance requirements." },
  { Icon: HospitalIcon,      title: "Healthcare & Pharma",          desc: "Hospitals, clinics, and pharmaceutical companies handling patient data and controlled substances." },
  { Icon: FactoryIcon,       title: "Manufacturing & Engineering",   desc: "Industrial organizations requiring safety-critical personnel with verified technical competencies." },
  { Icon: LaptopIcon,        title: "IT & Technology",              desc: "Software companies and IT service providers hiring for client-facing and data-sensitive roles." },
  { Icon: GraduationCapIcon, title: "Education",                    desc: "Schools, universities, and edtech platforms verifying staff who work with minors and young adults." },
  { Icon: UsersIcon,         title: "Staffing & HR Agencies",       desc: "Agencies conducting bulk screening for client companies across industries and geographies." },
];

const stats = [
  { val: "50K+", label: "Candidates Verified" },
  { val: "24–48h", label: "Average Turnaround" },
  { val: "99.2%", label: "Accuracy Rate" },
  { val: "15+", label: "Countries Covered" },
];

const BackgroundVerification = ({ t, setPage }) => {
  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div style={{ paddingTop: 96 }}>
      <section style={{ background: t.heroBg, padding: "0", minHeight: 540, display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "radial-gradient(circle,rgba(255,255,255,0.4) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div style={{ position: "relative", zIndex: 2, padding: "80px 0 80px 5%" }}>
          <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: "rgba(232,160,32,0.15)", border: "1px solid rgba(232,160,32,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 20 }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: "#E8A020", letterSpacing: "0.18em", textTransform: "uppercase" }}>Background Verification</span>
          </div>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(30px,4.5vw,56px)", color: "#FFF", fontWeight: 900, lineHeight: 1.1, marginBottom: 20 }}>
            Hire with <span style={{ color: "#E8A020" }}>Confidence & Clarity</span>
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", lineHeight: 1.85, maxWidth: 500, marginBottom: 36, textAlign: "justify" }}>
            SHNOOR's Background Verification services provide organizations with accurate, thorough, and legally compliant pre-employment and continuous screening — protecting your workplace, clients, and reputation through every hire you make.
          </p>
          <button onClick={() => nav("contact")} style={{ background: "linear-gradient(135deg,#C8820A,#E8A020)", color: "#0D1E38", border: "none", borderRadius: 10, padding: "14px 28px", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8 }}>
            Request BGV Services <ArrowRightIcon size={16} />
          </button>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, marginTop: 52, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            {stats.map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#E8A020", fontFamily: "Georgia,serif" }}>{s.val}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.06em", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <Img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=80" alt="BGV" style={{ height: "100%", minHeight: 540, opacity: 0.65 }} />
      </section>
      <section style={{ background: t.bg, padding: "90px 5%" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: t.goldDim, border: `1px solid ${t.border}`, borderRadius: 100, padding: "5px 16px", marginBottom: 16 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: t.goldLight, letterSpacing: "0.18em", textTransform: "uppercase" }}>Verification Types</span>
            </div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,3vw,42px)", color: t.text, fontWeight: 800, marginBottom: 14 }}>
              Multi-Layer Screening <span style={{ color: t.goldLight }}>Services</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 22 }}>
            {checks.map((s, i) => (
              <div key={i}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = t.gold; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = t.border; }}
                style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 14, padding: "30px 26px", transition: "all 0.25s" }}>
                <div style={{ width: 52, height: 52, borderRadius: 13, background: t.goldDim, border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: t.goldLight, marginBottom: 18 }}>
                  <s.Icon size={24} color={t.goldLight} />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: t.text, marginBottom: 12 }}>{s.title}</h3>
                <p style={{ fontSize: 13.5, color: t.textSub, lineHeight: 1.8, textAlign: "justify" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: t.bgSection, padding: "90px 5%" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center", marginBottom: 60 }}>
            <div>
              <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: t.goldDim, border: `1px solid ${t.border}`, borderRadius: 100, padding: "5px 16px", marginBottom: 18 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: t.goldLight, letterSpacing: "0.18em", textTransform: "uppercase" }}>Industries We Serve</span>
              </div>
              <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,3vw,40px)", color: t.text, fontWeight: 800, marginBottom: 18 }}>
                Trusted Across <span style={{ color: t.goldLight }}>Every Sector</span>
              </h2>
              <div style={{ width: 48, height: 3, background: `linear-gradient(90deg,${t.gold},transparent)`, borderRadius: 2, marginBottom: 24 }} />
              <p style={{ fontSize: 15, color: t.textSub, lineHeight: 1.85, textAlign: "justify" }}>
                Every industry carries unique risks when it comes to hiring. SHNOOR's Background Verification practice understands these nuances and tailors its screening packages accordingly — ensuring you meet your industry-specific compliance obligations while obtaining the information that genuinely matters for your hiring decisions.
              </p>
            </div>
            <Img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80" alt="Industries" style={{ borderRadius: 16, height: 360, border: `1px solid ${t.border}` }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 18 }}>
            {industries.map((ind, i) => (
              <div key={i} style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 12, padding: "24px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: t.goldDim, border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: t.goldLight, flexShrink: 0 }}>
                  <ind.Icon size={22} color={t.goldLight} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: t.text, marginBottom: 8 }}>{ind.title}</div>
                  <p style={{ fontSize: 13, color: t.textSub, lineHeight: 1.7 }}>{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: t.bg, padding: "90px 5%" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,3vw,42px)", color: t.text, fontWeight: 800 }}>
              Simple, Fast, <span style={{ color: t.goldLight }}>Reliable Process</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 18 }}>
            {["Submit Request & Candidate Consent", "Document Collection & Validation", "Multi-Source Verification", "Quality Assurance Review", "Digital Report Delivery"].map((step, i) => (
              <div key={i} style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 12, padding: "28px 20px", textAlign: "center" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: t.goldDim, border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 20, fontWeight: 800, color: t.goldLight, fontFamily: "Georgia,serif" }}>{i + 1}</div>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: t.text }}>{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: "linear-gradient(135deg,#0D2144,#1A3A6A)", padding: "80px 5%", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,4vw,48px)", color: "#FFF", fontWeight: 800, marginBottom: 18 }}>
          Build a Safer, <span style={{ color: "#E8A020" }}>More Trustworthy</span> Workforce
        </h2>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", maxWidth: 520, margin: "0 auto 36px" }}>
          Let SHNOOR handle your background verification needs so you can focus on what matters — building great teams.
        </p>
        <button onClick={() => nav("contact")} style={{ background: "linear-gradient(135deg,#C8820A,#E8A020)", color: "#0D1E38", border: "none", borderRadius: 10, padding: "15px 36px", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
          Start Screening Today
        </button>
      </section>
    </div>
  );
};

export default BackgroundVerification;