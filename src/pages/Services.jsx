
import React, { useState, useRef, useEffect } from "react";
import { ArrowRightIcon, CheckIcon, LaptopIcon, CloudIcon, CpuIcon, BarChartIcon, LifeBuoyIcon, WorldIcon, AnchorIcon, ShieldIcon, SettingsIcon, LockIcon } from "./Icons";

const useReveal = (threshold = 0.12) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
};

const reveal = (visible, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0)" : "translateY(32px)",
  transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
});

/* ─── Fade-in image (Home-page style) ─── */
const Img = ({ src, alt, style }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div style={{ position: "relative", overflow: "hidden", ...style }}>
      {!loaded && <div style={{ position: "absolute", inset: 0, background: "rgba(13,33,68,0.4)" }} />}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: loaded ? 1 : 0, transition: "opacity 0.5s, transform 0.6s" }}
      />
    </div>
  );
};

const Tag = ({ label, t }) => (
  <span style={{ background: t.goldDim, border: `1px solid ${t.border}`, borderRadius: 6, padding: "4px 12px", fontSize: 11, color: t.goldLight, fontWeight: 700, letterSpacing: "0.06em" }}>
    {label}
  </span>
);

const services = [
  {
    Icon: LaptopIcon,
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    title: "IT Consulting & Staffing",
    category: "Technology",
    desc: "Expert IT consulting and talent acquisition for short-term projects and long-term digital transformation. We connect businesses with specialized technical talent including developers, architects, SAP consultants, cloud engineers, and project managers.",
    tags: ["IT Strategy", "Talent Acquisition", "Digital Transformation", "Project Staffing"],
    highlights: ["Permanent & Contract Staffing", "Technical Interviews & Vetting", "On-site & Remote Talent", "Specialized IT Roles"],
    link: "https://shnoor.com/consulting-and-staffing",
  },
  {
    Icon: CloudIcon,
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    title: "Cloud Management",
    category: "Cloud",
    desc: "Cloud migration, deployment and end-to-end managed services across AWS, Microsoft Azure and Google Cloud Platform. We architect scalable, secure and cost-optimized cloud infrastructure for enterprise workloads of any scale.",
    tags: ["AWS", "Microsoft Azure", "Google Cloud", "Cloud Migration"],
    highlights: ["Cloud Architecture Design", "Migration & Lift-and-Shift", "Cost Optimization", "Managed Cloud Operations"],
    link: "https://shnoor.com/cloud-management",
  },
  {
    Icon: CpuIcon,
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    title: "AI & Machine Learning",
    category: "AI & Data",
    desc: "End-to-end AI development — from model design and training to deployment and monitoring. We build predictive models, NLP solutions, computer vision systems, recommendation engines, and intelligent process automation pipelines.",
    tags: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "MLOps"],
    highlights: ["Custom ML Model Development", "LLM Integration & Fine-tuning", "AI-Powered Automation", "Model Monitoring & MLOps"],
    link: "https://shnoor.com",
  },
  {
    Icon: BarChartIcon,
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    title: "Data Analytics & Business Intelligence",
    category: "AI & Data",
    desc: "Transform raw data into strategic business insight. We design and implement data warehouses, build interactive BI dashboards, conduct advanced analytics, and create real-time reporting pipelines that drive informed decision-making.",
    tags: ["Power BI", "Tableau", "Data Warehousing", "ETL Pipelines", "SQL"],
    highlights: ["Data Strategy & Governance", "BI Dashboard Design", "Real-Time Reporting", "Predictive Analytics"],
    link: "https://shnoor.com",
  },
  {
    Icon: LifeBuoyIcon,
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    title: "IT Service Management (ITSM)",
    category: "Technology",
    desc: "ITIL-aligned IT Service Management implementations that streamline your IT operations. We configure and deploy ITSM platforms, define service catalogues, implement incident/change/problem management workflows, and train your teams.",
    tags: ["ITIL v4", "ServiceNow", "JIRA Service Desk", "Incident Management"],
    highlights: ["ITSM Platform Deployment", "Service Catalogue Design", "SLA Management", "ITIL Process Consulting"],
    link: "https://shnoor.com",
  },
  {
    Icon: WorldIcon,
    img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80",
    title: "Export Management",
    category: "Trade",
    desc: "Facilitating seamless cross-border trade of diverse products from India to UAE, Bahrain, Qatar, Oman and Malaysia. We handle documentation, customs compliance, and end-to-end export coordination for manufacturers and traders.",
    tags: ["India → GCC", "India → Malaysia", "Trade Documentation", "Customs Compliance"],
    highlights: ["Export Documentation", "Customs Clearance", "Trade Finance Support", "GCC Market Access"],
    link: "https://shnoor.com/export-management",
  },
  {
    Icon: AnchorIcon,
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
    title: "Logistics Management",
    category: "Trade",
    desc: "End-to-end supply chain support including dry container supply from major Indian ports — Mumbai and Mundra — to global destinations. We optimize your logistics network for cost, speed and reliability with multimodal solutions.",
    tags: ["Supply Chain", "Dry Containers", "Mumbai Port", "Mundra Port"],
    highlights: ["Container Supply & Booking", "Port-to-Port Logistics", "Last-Mile Delivery", "Supply Chain Optimization"],
    link: "https://shnoor.com/logistics-management",
  },
  {
    Icon: ShieldIcon,
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
    title: "Background Verification",
    category: "HR",
    desc: "Thorough, legally-compliant screening and verification services for organizations of all sizes. Multi-layer verification including criminal checks, employment history, education, reference validation, and social media screening.",
    tags: ["Criminal Check", "Employment Verification", "Education Check", "Reference Validation"],
    highlights: ["Multi-Layer Screening", "Legally Compliant Process", "Fast Turnaround", "Digital Reports"],
    link: "https://shnoor.com/background-verification",
  },
  {
    Icon: SettingsIcon,
    img: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800&q=80",
    title: "IT Product Development & SAP",
    category: "Technology",
    desc: "Full-cycle software development, application design, SAP ABAP & Materials Management implementation, ERP rollout, and Business Process Automation — from concept to production-ready deployment with ongoing support.",
    tags: ["SAP ABAP", "SAP MM", "ERP Implementation", "Business Process Automation"],
    highlights: ["Custom Application Development", "SAP Outsourcing & Support", "ERP Implementation", "BPA & Workflow Automation"],
    link: "https://shnoor.com",
  },
  {
    Icon: LockIcon,
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    title: "Cybersecurity & DevSecOps",
    category: "Technology",
    desc: "Protecting your digital assets with end-to-end security services — from security audits and penetration testing to DevSecOps pipeline integration, zero-trust architecture design, and compliance assessments (ISO 27001, SOC 2).",
    tags: ["Penetration Testing", "DevSecOps", "Zero Trust", "ISO 27001", "SOC 2"],
    highlights: ["Security Audits & Assessments", "Pen Testing & Red Teaming", "DevSecOps Integration", "Compliance Advisory"],
    link: "https://shnoor.com",
  },
];

const categories = ["All", "Technology", "Cloud", "AI & Data", "Trade", "HR"];

/* ─── Single service row ─── */
const ServiceRow = ({ s, index, t, nav }) => {
  const [ref, visible] = useReveal(0.1);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 0,
        background: t.bgCard,
        border: `1px solid ${t.border}`,
        borderRadius: 20,
        overflow: "hidden",
        ...reveal(visible, 0.05),
        transition: `opacity 0.75s ease 0.05s, transform 0.75s ease 0.05s, box-shadow 0.3s`,
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.35), 0 0 0 1px ${t.gold}`; e.currentTarget.style.borderColor = t.gold; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = t.border; }}
    >
      {/* Image side */}
      <div style={{ order: isEven ? 2 : 1, position: "relative", minHeight: 340, overflow: "hidden" }}>
        <Img src={s.img} alt={s.title} style={{ height: "100%", minHeight: 340 }} />
        {/* gradient overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: isEven
            ? "linear-gradient(to right, rgba(13,21,45,0.15) 0%, transparent 100%)"
            : "linear-gradient(to left, rgba(13,21,45,0.15) 0%, transparent 100%)"
        }} />
        {/* category badge on image */}
        <div style={{
          position: "absolute", top: 20, ...(isEven ? { left: 20 } : { right: 20 }),
          background: "rgba(13,21,45,0.82)", backdropFilter: "blur(10px)",
          border: `1px solid ${t.border}`, borderRadius: 8,
          padding: "5px 14px", fontSize: 10, fontWeight: 700, color: t.goldLight, letterSpacing: "0.12em"
        }}>
          {s.category}
        </div>
      </div>

      {/* Text side */}
      <div style={{ order: isEven ? 1 : 2, padding: "44px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        {/* Icon */}
        <div style={{
          width: 54, height: 54, borderRadius: 14,
          background: t.goldDim, border: `1px solid rgba(232,160,32,0.25)`,
          display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22
        }}>
          <s.Icon size={24} color={t.goldLight} />
        </div>

        <h3 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(20px,2vw,26px)", color: t.text, fontWeight: 800, marginBottom: 14, lineHeight: 1.2 }}>
          {s.title}
        </h3>

        <p style={{ fontSize: 14.5, color: t.textSub, lineHeight: 1.9, marginBottom: 24, textAlign: "justify" }}>
          {s.desc}
        </p>

        {/* Highlights grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 20px", marginBottom: 26 }}>
          {s.highlights.map((h, j) => (
            <div key={j} style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: t.goldLight, flexShrink: 0 }} />
              <span style={{ fontSize: 13, color: t.textSub, lineHeight: 1.4 }}>{h}</span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
          {s.tags.map(tag => <Tag key={tag} label={tag} t={t} />)}
        </div>

        <button
          onClick={() => window.open(s.link, "_blank")}
          style={{
            alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 8,
            background: `linear-gradient(135deg,${t.gold},${t.goldLight})`,
            color: "#0D1E38", border: "none", borderRadius: 10,
            padding: "11px 24px", fontSize: 13, fontWeight: 700, cursor: "pointer",
            boxShadow: "0 4px 16px rgba(232,160,32,0.3)"
          }}
        >
          Learn More <ArrowRightIcon size={14} />
        </button>
      </div>
    </div>
  );
};

const Services = ({ t, setPage }) => {
  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const [active, setActive] = useState("All");
  const [heroRef, heroVisible] = useReveal(0.05);
  const filtered = active === "All" ? services : services.filter(s => s.category === active);

  return (
    <div style={{ paddingTop: 96, background: t.bg }}>

      {/* ── HERO ── */}
      <section style={{ background: t.heroBg, padding: "90px 5% 80px", position: "relative", overflow: "hidden" }}>
        {/* grid texture */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
        {/* radial glow */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(232,160,32,0.07) 0%,transparent 70%)", pointerEvents: "none" }} />

        <div ref={heroRef} style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", maxWidth: 1240, margin: "0 auto" }}>
          {/* Left: text */}
          <div>
            <div style={{ ...reveal(heroVisible, 0), display: "inline-flex", gap: 8, alignItems: "center", background: "rgba(232,160,32,0.15)", border: "1px solid rgba(232,160,32,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 22 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#E8A020" }} />
              <span style={{ fontSize: 10, fontWeight: 700, color: "#E8A020", letterSpacing: "0.18em", textTransform: "uppercase" }}>What We Offer</span>
            </div>
            <h1 style={{ ...reveal(heroVisible, 0.1), fontFamily: "Georgia,serif", fontSize: "clamp(32px,4vw,58px)", color: "#FFF", fontWeight: 900, marginBottom: 18, lineHeight: 1.1 }}>
              Our <span style={{ color: "#E8A020" }}>Services</span>
            </h1>
            <p style={{ ...reveal(heroVisible, 0.2), fontSize: 16, color: "rgba(255,255,255,0.62)", lineHeight: 1.9, maxWidth: 500, marginBottom: 36, textAlign: "justify" }}>
              From enterprise ERP and cloud architecture to AI, data analytics, and global logistics — SHNOOR delivers comprehensive, end-to-end solutions built for every business need across every market we serve.
            </p>
            <div style={{ ...reveal(heroVisible, 0.3), display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button onClick={() => nav("contact")} style={{ background: "linear-gradient(135deg,#C8820A,#E8A020)", color: "#0D1E38", border: "none", borderRadius: 10, padding: "13px 28px", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, boxShadow: "0 4px 20px rgba(232,160,32,0.35)" }}>
                Get a Quote <ArrowRightIcon size={15} />
              </button>
              <button onClick={() => nav("about")} style={{ background: "rgba(255,255,255,0.08)", color: "#FFF", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 10, padding: "13px 28px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                About SHNOOR
              </button>
            </div>
          </div>

          {/* Right: photo mosaic */}
          <div style={{ ...reveal(heroVisible, 0.15), position: "relative", height: 380 }}>
            <Img
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=700&q=80"
              alt="IT consulting team"
              style={{ position: "absolute", top: 0, left: 0, width: "60%", height: 230, borderRadius: 14, border: "2px solid rgba(232,160,32,0.22)" }}
            />
            <Img
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&q=80"
              alt="Cloud servers"
              style={{ position: "absolute", bottom: 0, left: 0, width: "46%", height: 165, borderRadius: 12, border: "2px solid rgba(232,160,32,0.15)" }}
            />
            <Img
              src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=500&q=80"
              alt="Global trade"
              style={{ position: "absolute", top: 40, right: 0, width: "54%", height: 200, borderRadius: 12, border: "2px solid rgba(232,160,32,0.15)" }}
            />
            <Img
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80"
              alt="Verification"
              style={{ position: "absolute", bottom: 10, right: 0, width: "48%", height: 145, borderRadius: 12, border: "2px solid rgba(232,160,32,0.15)" }}
            />
            {/* stat card */}
            <div style={{ position: "absolute", bottom: 60, left: "50%", transform: "translateX(-50%)", background: "rgba(13,21,45,0.9)", backdropFilter: "blur(12px)", border: "1px solid rgba(232,160,32,0.35)", borderRadius: 12, padding: "12px 20px", whiteSpace: "nowrap", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
              <div style={{ fontSize: 22, fontWeight: 900, color: "#E8A020", textAlign: "center" }}>10+</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", textAlign: "center", letterSpacing: "0.1em" }}>SERVICE LINES</div>
            </div>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: `linear-gradient(to bottom,transparent,${t.bg})`, zIndex: 2 }} />
      </section>

      {/* ── FILTER TABS ── */}
      <section style={{ background: t.bg, padding: "52px 5% 0" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                background: active === cat ? `linear-gradient(135deg,${t.gold},${t.goldLight})` : t.bgCard,
                color: active === cat ? "#0D1E38" : t.textSub,
                border: `1px solid ${active === cat ? "transparent" : t.border}`,
                borderRadius: 10, padding: "10px 22px", fontSize: 13, fontWeight: 700,
                cursor: "pointer", transition: "all 0.2s",
                boxShadow: active === cat ? "0 4px 16px rgba(232,160,32,0.3)" : "none"
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── SERVICE ROWS ── */}
      <section style={{ background: t.bg, padding: "52px 5% 80px" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", flexDirection: "column", gap: 36 }}>
          {filtered.map((s, i) => (
            <ServiceRow key={s.title} s={s} index={i} t={t} nav={nav} />
          ))}
        </div>

        {/* CTA card */}
        <div style={{ maxWidth: 1240, margin: "52px auto 0", position: "relative", overflow: "hidden", borderRadius: 20 }}>
          <Img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1400&q=80"
            alt="Custom requirement"
            style={{ height: 300 }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(13,33,68,0.95),rgba(26,58,106,0.88))" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 5%" }}>
            <h3 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(22px,3vw,36px)", color: "#FFF", fontWeight: 800, marginBottom: 14 }}>
              Have a <span style={{ color: "#E8A020" }}>Custom</span> Requirement?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.62)", fontSize: 15, marginBottom: 28, maxWidth: 500, lineHeight: 1.8 }}>
              Let's discuss your unique needs and build a tailored solution together.
            </p>
            <button
              onClick={() => nav("contact")}
              style={{ background: "linear-gradient(135deg,#C8820A,#E8A020)", color: "#0D1E38", border: "none", borderRadius: 10, padding: "14px 34px", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, boxShadow: "0 4px 24px rgba(232,160,32,0.4)" }}
            >
              Get a Custom Quote <ArrowRightIcon size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;