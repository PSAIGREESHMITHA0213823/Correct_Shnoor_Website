import React, { useState } from "react";
import { ArrowRightIcon, CheckIcon, HeartPulseIcon, ShieldIcon, FileTextIcon, ActivityIcon, DatabaseIcon, MonitorIcon, UsersIcon, LockIcon, ZapIcon } from "./Icons";

const Img = ({ src, alt, style }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div style={{ position: "relative", overflow: "hidden", ...style }}>
      {!loaded && <div style={{ position: "absolute", inset: 0, background: "rgba(13,33,68,0.3)" }} />}
      <img src={src} alt={alt} onLoad={() => setLoaded(true)} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: loaded ? 1 : 0, transition: "opacity 0.4s" }} />
    </div>
  );
};

const services = [
  { Icon: FileTextIcon,  title: "Electronic Health Records (EHR/EMR)", desc: "Implementation, customization, and optimization of leading EHR platforms including Epic, Cerner, and Meditech. We manage the full deployment lifecycle — from workflow analysis and configuration to staff training and go-live support — ensuring clinical teams can focus on patient care rather than technology friction." },
  { Icon: MonitorIcon,   title: "Telehealth & Remote Patient Monitoring", desc: "Design and deployment of HIPAA-compliant telehealth infrastructure enabling virtual consultations, remote patient monitoring (RPM), and care coordination. We integrate wearable device data streams, video conferencing platforms, and patient portals into unified care delivery workflows." },
  { Icon: ShieldIcon,    title: "HIPAA Compliance & Healthcare Security", desc: "End-to-end HIPAA compliance programs covering risk analysis, gap assessments, policy development, technical safeguards, and workforce training. We also support HITECH, HL7 FHIR, and SOC 2 compliance for healthcare technology vendors and covered entities." },
  { Icon: DatabaseIcon,  title: "Healthcare Data Analytics & Interoperability", desc: "HL7 FHIR-compliant data integration pipelines that enable seamless interoperability across disparate systems. We build population health dashboards, clinical outcomes analytics, and predictive models for readmission prevention, chronic disease management, and resource utilization." },
  { Icon: ActivityIcon,  title: "Clinical Workflow Automation",          desc: "Intelligent process automation for clinical and administrative workflows — from automated appointment reminders and insurance pre-authorization to medication reconciliation alerts and discharge planning coordination. Our RPA solutions reduce manual burden and minimize errors in high-stakes clinical environments." },
  { Icon: LockIcon,      title: "Healthcare Cybersecurity",               desc: "Specialized cybersecurity services for healthcare organizations, including medical device security, protected health information (PHI) encryption, ransomware defense, and HIPAA-aligned security operations. We conduct regular penetration testing and vulnerability assessments tailored to healthcare environments." },
  { Icon: ZapIcon,       title: "Hospital Information System (HIS) Integration", desc: "Seamless integration of Hospital Information Systems with laboratory information systems (LIS), radiology (RIS/PACS), pharmacy management, and billing platforms. We eliminate data silos, reduce duplicate entries, and create unified patient records accessible across the care continuum." },
  { Icon: UsersIcon,     title: "Healthcare IT Staffing & Consulting",    desc: "Specialized IT staffing solutions for healthcare organizations — including clinical informatics specialists, EHR analysts, health IT project managers, and compliance officers. We understand the unique regulatory and operational context of healthcare, ensuring every placement adds immediate value." },
];

const compliance = ["HIPAA", "HITECH", "HL7 FHIR", "ICD-10", "DICOM", "SOC 2", "ISO 27001", "GDPR (EU Health)"];

const stats = [
  { val: "100%", label: "HIPAA Compliance Rate" },
  { val: "50+",  label: "Healthcare Clients" },
  { val: "EHR",  label: "Epic & Cerner Certified" },
  { val: "24/7", label: "Healthcare Support" },
];

const HealthCare = ({ t, setPage }) => {
  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ background: t.heroBg, padding: "0", minHeight: 560, display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "radial-gradient(circle,rgba(255,255,255,0.4) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div style={{ position: "relative", zIndex: 2, padding: "80px 0 80px 5%" }}>
          <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: "rgba(232,160,32,0.15)", border: "1px solid rgba(232,160,32,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 20 }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: "#E8A020", letterSpacing: "0.18em", textTransform: "uppercase" }}>Healthcare IT</span>
          </div>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(30px,4.5vw,56px)", color: "#FFF", fontWeight: 900, lineHeight: 1.1, marginBottom: 20 }}>
            Technology That <span style={{ color: "#E8A020" }}>Transforms Healthcare</span>
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", lineHeight: 1.85, maxWidth: 500, marginBottom: 36, textAlign: "justify" }}>
            SHNOOR's Healthcare IT practice delivers EHR implementations, telehealth infrastructure, HIPAA compliance programs, and clinical data analytics — purpose-built for the complex regulatory and operational environment of modern healthcare organizations.
          </p>
          <button onClick={() => nav("contact")} style={{ background: "linear-gradient(135deg,#C8820A,#E8A020)", color: "#0D1E38", border: "none", borderRadius: 10, padding: "14px 28px", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8 }}>
            Consult a Healthcare IT Expert <ArrowRightIcon size={16} />
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
        <Img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80" alt="Healthcare IT" style={{ height: "100%", minHeight: 560, opacity: 0.6 }} />
      </section>
      <section style={{ background: t.bg, padding: "90px 5%" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: t.goldDim, border: `1px solid ${t.border}`, borderRadius: 100, padding: "5px 16px", marginBottom: 16 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: t.goldLight, letterSpacing: "0.18em", textTransform: "uppercase" }}>Healthcare Solutions</span>
            </div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,3vw,42px)", color: t.text, fontWeight: 800, marginBottom: 14 }}>
              Clinical & Administrative <span style={{ color: t.goldLight }}>IT Services</span>
            </h2>
            <p style={{ fontSize: 15, color: t.textSub, maxWidth: 620, margin: "0 auto", textAlign: "center" }}>
              From frontline clinical systems to back-office IT infrastructure, we deliver technology solutions that improve patient outcomes and operational efficiency.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 22 }}>
            {services.map((s, i) => (
              <div key={i}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = t.gold; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = t.border; }}
                style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 14, padding: "30px 26px", transition: "all 0.25s" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: t.goldDim, border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: t.goldLight, marginBottom: 18 }}>
                  <s.Icon size={22} />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: t.text, marginBottom: 12 }}>{s.title}</h3>
                <p style={{ fontSize: 13.5, color: t.textSub, lineHeight: 1.8, textAlign: "justify" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: t.bgSection, padding: "90px 5%" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: t.goldDim, border: `1px solid ${t.border}`, borderRadius: 100, padding: "5px 16px", marginBottom: 18 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: t.goldLight, letterSpacing: "0.18em", textTransform: "uppercase" }}>Compliance & Standards</span>
            </div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,3vw,40px)", color: t.text, fontWeight: 800, marginBottom: 18 }}>
              Built for <span style={{ color: t.goldLight }}>Regulatory Compliance</span>
            </h2>
            <div style={{ width: 48, height: 3, background: `linear-gradient(90deg,${t.gold},transparent)`, borderRadius: 2, marginBottom: 24 }} />
            <p style={{ fontSize: 15, color: t.textSub, lineHeight: 1.85, marginBottom: 24, textAlign: "justify" }}>
              Healthcare organizations operate under one of the most stringent regulatory environments in any industry. SHNOOR's Healthcare IT team maintains deep expertise across all major compliance frameworks — ensuring your technology investments are fully aligned with your legal obligations and patient trust commitments.
            </p>
            <p style={{ fontSize: 15, color: t.textSub, lineHeight: 1.85, marginBottom: 32, textAlign: "justify" }}>
              We don't just implement systems — we build compliance into every layer of the architecture, from data encryption and access controls to audit logging and breach notification readiness.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {compliance.map(c => (
                <div key={c} style={{ display: "flex", gap: 8, alignItems: "center", background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 8, padding: "8px 14px" }}>
                  <div style={{ width: 20, height: 20, borderRadius: 5, background: t.goldDim, display: "flex", alignItems: "center", justifyContent: "center", color: t.goldLight }}>
                    <CheckIcon size={11} />
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: t.text }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
          <Img src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=700&q=80" alt="Healthcare Compliance" style={{ borderRadius: 16, height: 440, border: `1px solid ${t.border}` }} />
        </div>
      </section>
      <section style={{ background: "linear-gradient(135deg,#0D2144,#1A3A6A)", padding: "80px 5%", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,4vw,48px)", color: "#FFF", fontWeight: 800, marginBottom: 18 }}>
          Elevate Your <span style={{ color: "#E8A020" }}>Healthcare IT</span> Capabilities
        </h2>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", maxWidth: 520, margin: "0 auto 36px" }}>
          Partner with SHNOOR to modernize your clinical systems, strengthen compliance, and harness the power of health data analytics.
        </p>
        <button onClick={() => nav("contact")} style={{ background: "linear-gradient(135deg,#C8820A,#E8A020)", color: "#0D1E38", border: "none", borderRadius: 10, padding: "15px 36px", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
          Book a Healthcare IT Consultation
        </button>
      </section>
    </div>
  );
};

export default HealthCare;