
import React, { useState } from "react";

const Icon = ({ d, size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);
const TrophyIcon       = ({ size, color }) => <Icon size={size} color={color} d="M6 9H4a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h2m12-5h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2M6 9V5a6 6 0 0 1 12 0v4M6 9h12M9 21h6M12 17v4" />;
const WorldIcon        = ({ size, color }) => <Icon size={size} color={color} d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />;
const TrendingUpIcon   = ({ size, color }) => <Icon size={size} color={color} d="M23 6l-9.5 9.5-5-5L1 18M17 6h6v6" />;
const UsersIcon        = ({ size, color }) => <Icon size={size} color={color} d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />;
const ClockIcon        = ({ size, color }) => <Icon size={size} color={color} d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM12 6v6l4 2" />;
const GraduationCapIcon= ({ size, color }) => <Icon size={size} color={color} d="M22 10v6M2 10l10-5 10 5-10 5-10-5zM6 12v5c0 1.1 2.686 2 6 2s6-.9 6-2v-5" />;
const ShieldIcon       = ({ size, color }) => <Icon size={size} color={color} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />;
const AlertIcon        = ({ size, color }) => <Icon size={size} color={color} d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01" />;
const CheckIcon        = ({ size, color }) => <Icon size={size} color={color} d="M20 6L9 17l-5-5" />;

const BriefcaseIcon    = ({ size, color }) => <Icon size={size} color={color} d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />;
const SearchIcon       = ({ size, color }) => <Icon size={size} color={color} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />;

const ArrowRightIcon   = ({ size, color }) => <Icon size={size} color={color} d="M5 12h14M12 5l7 7-7 7" />;

const Img = ({ src, alt, style }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div style={{ position: "relative", overflow: "hidden", ...style }}>
      {!loaded && <div style={{ position: "absolute", inset: 0, background: "rgba(13,33,68,0.35)" }} />}
      <img src={src} alt={alt} onLoad={() => setLoaded(true)}
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: loaded ? 1 : 0, transition: "opacity 0.5s" }} />
    </div>
  );
};

const jobs = [
  { title: "Senior Full Stack Developer",    dept: "IT Consulting",        location: "Missouri, USA",   type: "Full-time", salary: "$120k – $160k", tags: ["React","Node.js","AWS"] },
  { title: "Cloud Solutions Architect",      dept: "Cloud Services",       location: "Remote (Global)", type: "Full-time", salary: "$140k – $185k", tags: ["AWS","Azure","Terraform"] },
  { title: "SAP ABAP Consultant",            dept: "Enterprise Solutions", location: "Hybrid",          type: "Full-time", salary: "$130k – $165k", tags: ["SAP ABAP","SAP MM","ERP"] },
  { title: "AI / ML Engineer",               dept: "AI & Data",            location: "Remote",          type: "Full-time", salary: "$130k – $175k", tags: ["Python","TensorFlow","MLOps"] },
  { title: "Data Engineer",                  dept: "AI & Data",            location: "Remote",          type: "Full-time", salary: "$115k – $155k", tags: ["Spark","Airflow","dbt","Snowflake"] },
  { title: "IT Project Manager",             dept: "Staffing Division",    location: "Missouri, USA",   type: "Full-time", salary: "$110k – $150k", tags: ["Agile","Scrum","PMP"] },
  { title: "DevOps / Cloud Engineer",        dept: "Product Development",  location: "Remote",          type: "Full-time", salary: "$125k – $168k", tags: ["CI/CD","Docker","Kubernetes"] },
  { title: "Trade & Logistics Coordinator",  dept: "Export Operations",    location: "Oman / India",    type: "Full-time", salary: "Competitive",   tags: ["Export","Logistics","GCC"] },
  { title: "Cybersecurity Analyst",          dept: "IT Security",          location: "Hybrid",          type: "Full-time", salary: "$110k – $148k", tags: ["SIEM","Pen Testing","ISO 27001"] },
];

const benefits = [
  { Icon: TrophyIcon,         title: "Competitive Compensation", desc: "Above-market salary packages benchmarked against industry leaders, with performance bonuses and annual increments tied to results." },
  { Icon: WorldIcon,          title: "Global Exposure",          desc: "Work on projects spanning North America, GCC, South Asia, and East Africa — building true global experience that elevates your career." },
  { Icon: TrendingUpIcon,     title: "Career Growth",            desc: "Continuous learning, certifications, and clear advancement paths in a fast-growing international company." },
  { Icon: UsersIcon,          title: "Collaborative Culture",    desc: "A diverse, inclusive team rated 4.6/5 for work environment and culture. We celebrate every background and perspective." },
  { Icon: ClockIcon,          title: "Work-Life Balance",        desc: "Flexible remote, hybrid, and office options tailored to your role and personal lifestyle needs." },
  { Icon: GraduationCapIcon,  title: "Learning & Development",   desc: "Sponsored certifications (AWS, Azure, GCP, SAP, PMP), training budgets, and access to premium learning platforms." },
];

const scamWarnings = [
  "Requests for money, deposits, or processing fees in exchange for a job.",
  "Unofficial communication from personal email accounts instead of @shnoor.com.",
  "Poorly written offer letters with suspicious formatting or spelling errors.",
  "Promises of guaranteed jobs without interviews or screening.",
  "Fake websites or social media pages impersonating SHNOOR International.",
];

const scamSafeSteps = [
  "Never share personal or financial details with unknown recruiters.",
  "Verify email addresses — all official SHNOOR communication comes from @shnoor.com.",
  "Check the authenticity of any job offer by contacting hr@shnoor.com directly.",
  "Report suspicious activity to our official channels immediately.",
  "Always confirm with our HR Department before accepting any offer.",
];

const ScamAwarenessSection = ({ t, onViewPage }) => (
  <section style={{ background: `linear-gradient(135deg,rgba(180,20,20,0.08),rgba(13,33,68,0.6))`, borderTop: `1px solid rgba(180,20,20,0.2)`, borderBottom: `1px solid rgba(180,20,20,0.2)`, padding: "72px 5%" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 36 }}>
        <div style={{ width: 56, height: 56, borderRadius: 14, background: "rgba(220,50,50,0.12)", border: "1px solid rgba(220,50,50,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <ShieldIcon size={28} color="#E05555" />
        </div>
        <div>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(22px,2.8vw,34px)", color: t.text, fontWeight: 800, marginBottom: 10 }}>⚠️ Recruitment Scams Awareness</h2>
          <p style={{ fontSize: 15, color: t.textSub, lineHeight: 1.85, maxWidth: 740 }}>
            At SHNOOR International, we are committed to the highest standards of transparency and ethical recruitment. Unfortunately, fraudulent individuals misuse our brand name to mislead job seekers. We urge all applicants to stay vigilant.
          </p>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 28 }}>
        <div style={{ background: t.bgCard, border: "1px solid rgba(220,50,50,0.2)", borderRadius: 14, padding: "28px 26px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
            <AlertIcon size={18} color="#E05555" />
            <h3 style={{ fontSize: 15, fontWeight: 700, color: "#E05555" }}>How to Identify a Scam</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {scamWarnings.map((w, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ color: "#E05555", fontSize: 14, flexShrink: 0, marginTop: 2 }}>✕</span>
                <span style={{ fontSize: 13.5, color: t.textSub, lineHeight: 1.7 }}>{w}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 14, padding: "28px 26px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
            <CheckIcon size={18} color="#4CAF50" />
            <h3 style={{ fontSize: 15, fontWeight: 700, color: "#4CAF50" }}>How to Stay Safe</h3>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {scamSafeSteps.map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ color: "#4CAF50", fontSize: 14, flexShrink: 0, marginTop: 2 }}>✓</span>
                <span style={{ fontSize: 13.5, color: t.textSub, lineHeight: 1.7 }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: 28, background: "rgba(232,160,32,0.06)", border: "1px solid rgba(232,160,32,0.2)", borderRadius: 12, padding: "20px 26px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div>
          <p style={{ fontSize: 14, fontWeight: 700, color: t.text, marginBottom: 4 }}>🔴 Suspect a scam using SHNOOR's name?</p>
          <p style={{ fontSize: 13.5, color: t.textSub }}>
            Contact us immediately at{" "}
            <a href="mailto:hr@shnoor.com" style={{ color: "#E8A020", fontWeight: 700, textDecoration: "none" }}>hr@shnoor.com</a>
            {" "}— <strong style={{ color: t.text }}>SHNOOR International never charges job seekers any fees.</strong>
          </p>
        </div>
        <button onClick={onViewPage}
          style={{ background: "linear-gradient(135deg,#b91c1c,#dc2626)", color: "#fff", border: "none", borderRadius: 9, padding: "11px 22px", fontSize: 13, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>
          Full Scam Awareness Guide →
        </button>
      </div>
    </div>
  </section>
);

// ── Navigation card component ──────────────────────────────────────────────────
const PageCard = ({ icon: IconComp, title, subtitle, desc, img, btnLabel, btnAction, accent, t }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: t.bgCard,
        border: `1px solid ${hovered ? accent : t.border}`,
        borderRadius: 20,
        overflow: "hidden",
        transition: "all 0.3s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? `0 16px 48px rgba(0,0,0,0.25)` : "none",
        cursor: "pointer",
      }}
      onClick={btnAction}>
      <Img src={img} alt={title} style={{ height: 220 }} />
      <div style={{ padding: "28px 28px 32px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: t.goldDim, border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IconComp size={22} color={accent} />
          </div>
          <div>
            <div style={{ fontSize: 11, color: t.textMuted, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 2 }}>{subtitle}</div>
            <h3 style={{ fontFamily: "Georgia,serif", fontSize: 20, color: t.text, fontWeight: 800 }}>{title}</h3>
          </div>
        </div>
        <p style={{ fontSize: 14, color: t.textSub, lineHeight: 1.85, marginBottom: 22 }}>{desc}</p>
        <div style={{
          background: `linear-gradient(135deg,${t.gold},${t.goldLight})`,
          color: "#0D1E38",
          borderRadius: 10,
          padding: "12px 24px",
          fontSize: 13.5,
          fontWeight: 700,
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
        }}>
          {btnLabel} <ArrowRightIcon size={14} color="#0D1E38" />
        </div>
      </div>
    </div>
  );
};

// ── Main Careers component ─────────────────────────────────────────────────────
const Careers = ({ t, setPage }) => {
  const [hoveredJob, setHoveredJob] = useState(null);

  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div style={{ paddingTop: 96 }}>

      {/* ── Hero ── */}
      <section style={{ background: t.heroBg, minHeight: 480, display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", overflow: "hidden" }}>
        <div style={{ padding: "80px 0 80px 5%" }}>
          <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: "rgba(232,160,32,0.15)", border: "1px solid rgba(232,160,32,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 20 }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: "#E8A020", letterSpacing: "0.18em", textTransform: "uppercase" }}>Join Our Team</span>
          </div>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(30px,4vw,54px)", color: "#FFF", fontWeight: 900, lineHeight: 1.1, marginBottom: 18 }}>
            Find Your <span style={{ color: "#E8A020" }}>Future</span><br />With SHNOOR
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.9, maxWidth: 460, marginBottom: 32 }}>
            Are you ready to take on the challenge? At SHNOOR International LLC, we believe great companies are built by great people — innovators, problem-solvers, and go-getters passionate about making an impact.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button onClick={() => nav("openings")}
              style={{ background: `linear-gradient(135deg,${t.gold},${t.goldLight})`, color: "#0D1E38", border: "none", borderRadius: 10, padding: "13px 28px", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
              Latest Openings →
            </button>
            <button onClick={() => nav("recruiters")}
              style={{ background: "transparent", color: "#E8A020", border: "1px solid rgba(232,160,32,0.4)", borderRadius: 10, padding: "13px 28px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
              For Recruiters
            </button>
          </div>
        </div>
        <Img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="SHNOOR Team" style={{ height: "100%", minHeight: 480 }} />
      </section>

      {/* ── Two Page Navigation Cards ── */}
      <section style={{ background: t.bgSection, padding: "80px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(24px,3vw,38px)", color: t.text, fontWeight: 800, marginBottom: 12 }}>
              What Are You <span style={{ color: t.goldLight }}>Looking For?</span>
            </h2>
            <p style={{ fontSize: 15, color: t.textSub, maxWidth: 500, margin: "0 auto" }}>
              Whether you're seeking a new role or looking to hire — SHNOOR has a dedicated experience built for you.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <PageCard
              icon={SearchIcon}
              title="Latest Job Openings"
              subtitle="For Job Seekers"
              desc="Browse all active, verified SHNOOR International positions. Each role includes full job descriptions, responsibilities, requirements, and a direct apply link. Zero fees. Zero intermediaries."
              img="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=80"
              btnLabel="View All Openings"
              btnAction={() => nav("openings")}
              accent={t.goldLight}
              t={t}
            />
            <PageCard
              icon={BriefcaseIcon}
              title="Recruiter Services"
              subtitle="For Hiring Partners"
              desc="Partner with SHNOOR for end-to-end talent acquisition across IT consulting, cloud, data, SAP, and global trade. Pre-screened candidates. 14-day average time-to-hire. 90-day guarantee."
              img="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80"
              btnLabel="Explore Recruiter Services"
              btnAction={() => nav("recruiters")}
              accent={t.goldLight}
              t={t}
            />
          </div>
        </div>
      </section>

      {/* ── Career Promise ── */}
      <section style={{ background: t.bg, padding: "80px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: t.goldDim, border: `1px solid ${t.border}`, borderRadius: 100, padding: "5px 14px", marginBottom: 18 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: t.goldLight, letterSpacing: "0.15em", textTransform: "uppercase" }}>Our Promise</span>
            </div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(22px,2.8vw,36px)", color: t.text, fontWeight: 800, lineHeight: 1.2, marginBottom: 18 }}>
              You Won't Just Have a Job —<br /><span style={{ color: t.goldLight }}>You'll Build a Career</span>
            </h2>
            <p style={{ fontSize: 15, color: t.textSub, lineHeight: 1.9, marginBottom: 18 }}>
              Whether you are an IT expert, software developer, SAP consultant, business strategist, or trade professional, this is your chance to be part of a company that values creativity, collaboration, and continuous growth.
            </p>
            <p style={{ fontSize: 15, color: t.textSub, lineHeight: 1.9, marginBottom: 28 }}>
              We operate across North America, the GCC, South Asia, and East Africa — offering our people a breadth of experience that few global firms can match.
            </p>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
              {[["9+", "Countries"], ["200+", "Placements"], ["4.6/5", "Team Rating"], ["10+", "Years"]].map(([num, label]) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 26, fontWeight: 900, color: t.goldLight, fontFamily: "Georgia,serif" }}>{num}</div>
                  <div style={{ fontSize: 12, color: t.textMuted, textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <Img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80" alt="Career growth" style={{ height: 400, borderRadius: 16, border: `1px solid ${t.border}` }} />
        </div>
      </section>

      {/* ── Current Openings preview ── */}
      <section style={{ background: t.bgSection, padding: "80px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
            <div>
              <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(22px,2.8vw,36px)", color: t.text, fontWeight: 800, marginBottom: 8 }}>
                Featured <span style={{ color: t.goldLight }}>Openings</span>
              </h2>
              <p style={{ fontSize: 14.5, color: t.textSub }}>A snapshot of current active positions. Click any role to see full details.</p>
            </div>
            <button onClick={() => nav("openings")}
              style={{ background: `linear-gradient(135deg,${t.gold},${t.goldLight})`, color: "#0D1E38", border: "none", borderRadius: 10, padding: "11px 24px", fontSize: 13, fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8 }}>
              View All {jobs.length} Openings <ArrowRightIcon size={13} color="#0D1E38" />
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
            {jobs.slice(0, 5).map((job, i) => (
              <div key={i}
                onMouseEnter={() => setHoveredJob(i)}
                onMouseLeave={() => setHoveredJob(null)}
                onClick={() => nav("openings")}
                style={{
                  background: t.bgCard,
                  border: `1px solid ${hoveredJob === i ? t.gold : t.border}`,
                  borderRadius: 12,
                  padding: "22px 28px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 18,
                  transition: "all 0.2s",
                  transform: hoveredJob === i ? "translateX(5px)" : "translateX(0)",
                  cursor: "pointer",
                }}>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: t.text, marginBottom: 8 }}>{job.title}</h3>
                  <div style={{ display: "flex", gap: 18, flexWrap: "wrap", marginBottom: 10 }}>
                    <span style={{ fontSize: 12.5, color: t.textSub }}>💼 {job.dept}</span>
                    <span style={{ fontSize: 12.5, color: t.textSub }}>📍 {job.location}</span>
                    <span style={{ fontSize: 12.5, color: t.textSub }}>⏰ {job.type}</span>
                  </div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {job.tags.map(tag => <span key={tag} style={{ background: t.goldDim, border: `1px solid ${t.border}`, borderRadius: 5, padding: "3px 9px", fontSize: 10.5, color: t.goldLight, fontWeight: 600 }}>{tag}</span>)}
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
                  <div>
                    <div style={{ fontSize: 10, color: t.textMuted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 2 }}>Salary Range</div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: t.goldLight }}>{job.salary}</div>
                  </div>
                  <div style={{ background: `linear-gradient(135deg,${t.gold},${t.goldLight})`, color: "#0D1E38", borderRadius: 8, padding: "10px 20px", fontSize: 12.5, fontWeight: 700 }}>
                    View Details →
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <button onClick={() => nav("openings")}
              style={{ background: "transparent", color: t.goldLight, border: `1px solid rgba(232,160,32,0.35)`, borderRadius: 10, padding: "12px 32px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
              See All {jobs.length} Open Positions →
            </button>
          </div>
        </div>
      </section>

      {/* ── Why Join SHNOOR ── */}
      <section style={{ background: t.bg, padding: "80px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(22px,2.8vw,36px)", color: t.text, fontWeight: 800, marginBottom: 32 }}>
            Why Join <span style={{ color: t.goldLight }}>SHNOOR?</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 22, marginBottom: 80 }}>
            {benefits.map((b, i) => (
              <div key={i} style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 12, padding: "36px 26px", textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: 16, background: t.goldDim, border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <b.Icon size={28} color={t.goldLight} />
                </div>
                <h3 style={{ fontSize: 15.5, fontWeight: 700, color: t.text, marginBottom: 10 }}>{b.title}</h3>
                <p style={{ fontSize: 13.5, color: t.textSub, lineHeight: 1.75 }}>{b.desc}</p>
              </div>
            ))}
          </div>

          {/* Recruiter CTA */}
          <div style={{ background: `linear-gradient(135deg,${t.bgSection},${t.bgCard})`, border: `1px solid ${t.border}`, borderRadius: 16, padding: "44px", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: 32 }}>
            <div>
              <h3 style={{ fontFamily: "Georgia,serif", fontSize: 22, color: t.text, marginBottom: 10 }}>Are You a Recruiter or Hiring Partner?</h3>
              <p style={{ fontSize: 14.5, color: t.textSub, lineHeight: 1.85, maxWidth: 560 }}>
                SHNOOR International collaborates with enterprises across North America, GCC, and South Asia to source, screen, and place top-tier IT and trade professionals. Partner with us for end-to-end talent acquisition solutions.
              </p>
            </div>
            <button onClick={() => nav("recruiters")}
              style={{ background: `linear-gradient(135deg,${t.gold},${t.goldLight})`, color: "#0D1E38", border: "none", borderRadius: 10, padding: "14px 28px", fontSize: 13.5, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>
              Explore Recruiter Services →
            </button>
          </div>
        </div>
      </section>

      {/* ── Scam Awareness ── */}
      <ScamAwarenessSection t={t} onViewPage={() => nav("scam")} />

      {/* ── Life at SHNOOR photos ── */}
      <section style={{ background: t.bgSection, padding: "72px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(22px,2.8vw,34px)", color: t.text, fontWeight: 800, marginBottom: 14, textAlign: "center" }}>
            Life at <span style={{ color: t.goldLight }}>SHNOOR</span>
          </h2>
          <p style={{ fontSize: 15, color: t.textSub, textAlign: "center", maxWidth: 580, margin: "0 auto 40px" }}>
            A global team united by a shared drive to solve hard problems, build lasting solutions, and grow together.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, borderRadius: 16, overflow: "hidden" }}>
            <Img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&q=80" alt="Team collaboration" style={{ height: 240 }} />
            <Img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&q=80" alt="Office work" style={{ height: 240 }} />
            <Img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&q=80" alt="Professional growth" style={{ height: 240 }} />
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section style={{ background: t.bg, padding: "72px 5%", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(24px,3vw,40px)", color: t.text, fontWeight: 900, marginBottom: 16 }}>
            SHNOOR — <span style={{ color: t.goldLight }}>Get the Future You Want.</span>
          </h2>
          <p style={{ fontSize: 15, color: t.textSub, lineHeight: 1.85, marginBottom: 32 }}>
            Your next career move starts here. Browse all openings, apply directly via our official form, and join a team that is redefining IT and global trade worldwide.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => nav("openings")}
              style={{ background: `linear-gradient(135deg,${t.gold},${t.goldLight})`, color: "#0D1E38", border: "none", borderRadius: 10, padding: "14px 32px", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
              Browse All Openings
            </button>
            <a href="mailto:hr@shnoor.com"
              style={{ background: "transparent", color: t.goldLight, border: `1px solid rgba(232,160,32,0.35)`, borderRadius: 10, padding: "14px 32px", fontSize: 15, fontWeight: 600, textDecoration: "none" }}>
              hr@shnoor.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;