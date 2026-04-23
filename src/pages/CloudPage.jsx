
import React, { useState } from "react";
import {
  ArrowRightIcon, CheckIcon,
  CloudIcon, BuildingIcon, GlobeIcon,
  ServerIcon, ArrowsIcon, SettingsIcon,
  ShieldIcon, BarChartIcon, ActivityIcon,
  PackageIcon, WorldIcon, DatabaseIcon,
} from "./Icons";

const Img = ({ src, alt, style }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div style={{ position: "relative", overflow: "hidden", ...style }}>
      {!loaded && <div style={{ position: "absolute", inset: 0, background: "rgba(13,33,68,0.3)" }} />}
      <img src={src} alt={alt} onLoad={() => setLoaded(true)} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: loaded ? 1 : 0, transition: "opacity 0.4s" }} />
    </div>
  );
};

const AwsLogoIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M14 28c-1.2.5-2 1.4-2 2.5 0 1.6 1.8 2.5 4 2.5 1.4 0 2.6-.4 3.4-1" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M10 26.5C8.2 25.7 7 24.2 7 22.5c0-2.5 2.7-4.5 6-4.5.4 0 .8 0 1.2.1C15 15.7 17.8 14 21 14c3.9 0 7 2.7 7 6 0 .2 0 .4-.1.6C29.7 21.2 31 22.7 31 24.5c0 2.2-2.2 4-5 4.3" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 34l4-2 4 2 4-2 4 2 4-2" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <text x="7" y="44" fontSize="9" fontWeight="800" fill="#FF9900" fontFamily="Arial,sans-serif">AWS</text>
  </svg>
);

const AzureLogoIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path d="M18 8l-11 28h8l3-8h12l3 8h8L30 8H18z" stroke="#0089D6" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M20 12l8 12H16l4-12z" fill="#0089D6" opacity="0.3"/>
    <text x="4" y="46" fontSize="8" fontWeight="800" fill="#0089D6" fontFamily="Arial,sans-serif">AZURE</text>
  </svg>
);

const GcpLogoIcon = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="20" r="10" stroke="#4285F4" strokeWidth="1.8"/>
    <path d="M24 10 A10 10 0 0 1 34 20" stroke="#EA4335" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M34 20 A10 10 0 0 1 24 30" stroke="#FBBC05" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M24 30 A10 10 0 0 1 14 20" stroke="#34A853" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M14 20 A10 10 0 0 1 24 10" stroke="#4285F4" strokeWidth="1.8" strokeLinecap="round"/>
    <text x="8" y="46" fontSize="8.5" fontWeight="800" fill="#4285F4" fontFamily="Arial,sans-serif">GCP</text>
  </svg>
);

const providers = [
  { name: "Amazon Web Services", short: "AWS",   color: "#FF9900", LogoIcon: AwsLogoIcon,   desc: "Certified AWS architects delivering EC2, S3, RDS, Lambda, ECS, EKS and full managed services." },
  { name: "Microsoft Azure",     short: "Azure", color: "#0089D6", LogoIcon: AzureLogoIcon, desc: "Azure infrastructure, Active Directory, DevOps pipelines, Cosmos DB, and enterprise integrations." },
  { name: "Google Cloud",        short: "GCP",   color: "#4285F4", LogoIcon: GcpLogoIcon,   desc: "GCP compute, BigQuery, Vertex AI, Cloud Run, Kubernetes Engine, and data solutions." },
];

const offerings = [
  { Icon: ServerIcon,    title: "Cloud Architecture Design",     desc: "Scalable, resilient multi-tier architectures following AWS Well-Architected, Azure CAF, and GCP best practices." },
  { Icon: ArrowsIcon,    title: "Migration & Modernization",     desc: "Lift-and-shift, re-platform, and re-architect migrations with zero-downtime cutover strategies." },
  { Icon: SettingsIcon,  title: "DevOps & CI/CD Pipelines",     desc: "End-to-end DevOps automation — GitHub Actions, Jenkins, ArgoCD, Terraform, Ansible, Helm." },
  { Icon: ShieldIcon,    title: "Cloud Security & Compliance",   desc: "IAM hardening, VPC design, security groups, encryption, SIEM integration, and SOC 2 / ISO 27001 alignment." },
  { Icon: BarChartIcon,  title: "Cost Optimization",             desc: "FinOps audits, right-sizing, reserved instance planning, spot strategy, and continuous cost monitoring." },
  { Icon: ActivityIcon,  title: "Managed Cloud Operations",      desc: "24/7 monitoring, incident response, patching, capacity planning, and proactive performance tuning." },
  { Icon: PackageIcon,   title: "Kubernetes & Containerization", desc: "Container strategy, Docker, EKS / AKS / GKE cluster management, service mesh, and microservices." },
  { Icon: WorldIcon,     title: "Disaster Recovery & HA",        desc: "Multi-region failover, RTO/RPO planning, backup automation, and business continuity design." },
];

const stats = [
  { val: "200+",  label: "Cloud Migrations" },
  { val: "3",     label: "Major Providers" },
  { val: "99.9%", label: "Uptime SLA" },
  { val: "40%",   label: "Avg Cost Savings" },
];

const CloudPage = ({ t, setPage }) => {
  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ background: t.heroBg, padding: "0", position: "relative", overflow: "hidden", minHeight: 520, display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "radial-gradient(circle,rgba(255,255,255,0.5) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div style={{ position: "relative", zIndex: 2, padding: "80px 0 80px 5%" }}>
          <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: "rgba(232,160,32,0.15)", border: "1px solid rgba(232,160,32,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 20 }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: "#E8A020", letterSpacing: "0.18em", textTransform: "uppercase" }}>Cloud Services</span>
          </div>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(32px,4.5vw,58px)", color: "#FFF", fontWeight: 900, lineHeight: 1.1, marginBottom: 20 }}>
            Enterprise <span style={{ color: "#E8A020" }}>Cloud Management</span>
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", lineHeight: 1.85, maxWidth: 500, marginBottom: 36 }}>
            AWS, Azure & GCP architecture, migration, and 24/7 managed operations — built for enterprise scale, security, and cost efficiency.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button onClick={() => nav("contact")} style={{ background: "linear-gradient(135deg,#C8820A,#E8A020)", color: "#0D1E38", border: "none", borderRadius: 10, padding: "14px 28px", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8 }}>
              Get Cloud Consultation <ArrowRightIcon size={16} />
            </button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, marginTop: 52, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            {stats.map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: 24, fontWeight: 800, color: "#E8A020", fontFamily: "Georgia,serif" }}>{s.val}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.06em", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <Img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&q=80" alt="Cloud" style={{ height: "100%", minHeight: 520, opacity: 0.65 }} />
      </section>

      <section style={{ background: t.bg, padding: "90px 5%" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,3vw,42px)", color: t.text, fontWeight: 800 }}>
              Multi-Cloud <span style={{ color: t.goldLight }}>Expertise</span>
            </h2>
            <p style={{ fontSize: 15, color: t.textSub, marginTop: 14, maxWidth: 520, margin: "14px auto 0" }}>
              Certified engineers across all three major cloud platforms — no vendor lock-in, just the best fit for your workload.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
            {providers.map((p, i) => (
              <div key={i} style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 14, padding: "36px 30px", textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
                  <p.LogoIcon size={52} />
                </div>
                <div style={{ fontSize: 28, fontWeight: 800, color: p.color, fontFamily: "Georgia,serif", marginBottom: 8 }}>{p.short}</div>
                <div style={{ fontSize: 13, color: t.textMuted, marginBottom: 16, letterSpacing: "0.06em" }}>{p.name}</div>
                <p style={{ fontSize: 13.5, color: t.textSub, lineHeight: 1.75 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: t.bgSection, padding: "90px 5%" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", marginBottom: 60 }}>
            <div>
              <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: t.goldDim, border: `1px solid ${t.border}`, borderRadius: 100, padding: "5px 16px", marginBottom: 18 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: t.goldLight, letterSpacing: "0.18em", textTransform: "uppercase" }}>Cloud Offerings</span>
              </div>
              <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,3vw,40px)", color: t.text, fontWeight: 800, marginBottom: 18 }}>
                Everything You Need <span style={{ color: t.goldLight }}>in the Cloud</span>
              </h2>
              <div style={{ width: 48, height: 3, background: `linear-gradient(90deg,${t.gold},transparent)`, borderRadius: 2, marginBottom: 24 }} />
              <p style={{ fontSize: 15, color: t.textSub, lineHeight: 1.85, marginBottom: 28 }}>
                From initial cloud strategy through migration, DevOps automation, security hardening, and ongoing managed operations — SHNOOR is your single partner for the full cloud lifecycle.
              </p>
              <button onClick={() => nav("contact")} style={{ background: `linear-gradient(135deg,${t.gold},${t.goldLight})`, color: "#0D1E38", border: "none", borderRadius: 10, padding: "13px 28px", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8 }}>
                Start Your Cloud Journey <ArrowRightIcon size={16} />
              </button>
            </div>
            <Img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80" alt="DevOps" style={{ borderRadius: 14, height: 340, border: `1px solid ${t.border}` }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20 }}>
            {offerings.map((o, i) => (
              <div key={i}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = t.gold; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = t.border; }}
                style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 12, padding: "26px 24px", transition: "all 0.25s" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: t.goldDim, border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: t.goldLight, marginBottom: 16 }}>
                  <o.Icon size={22} />
                </div>
                <h3 style={{ fontSize: 15.5, fontWeight: 700, color: t.text, marginBottom: 10 }}>{o.title}</h3>
                <p style={{ fontSize: 13, color: t.textSub, lineHeight: 1.75 }}>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: t.bg, padding: "90px 5%" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,3vw,42px)", color: t.text, fontWeight: 800 }}>
              Our Cloud <span style={{ color: t.goldLight }}>Delivery Process</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 20 }}>
            {["Assess & Strategize", "Architect & Plan", "Migrate & Build", "Secure & Optimize", "Monitor & Manage"].map((step, i) => (
              <div key={i} style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 12, padding: "28px 20px", textAlign: "center" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: t.goldDim, border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 20, fontWeight: 800, color: t.goldLight, fontFamily: "Georgia,serif" }}>{i + 1}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: t.text }}>{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg,#0D2144,#1A3A6A)", padding: "80px 5%", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,4vw,48px)", color: "#FFF", fontWeight: 800, marginBottom: 18 }}>
          Ready to Move to the <span style={{ color: "#E8A020" }}>Cloud?</span>
        </h2>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", maxWidth: 500, margin: "0 auto 36px" }}>
          Let our certified cloud engineers design the right strategy for your business — free initial consultation.
        </p>
        <button onClick={() => nav("contact")} style={{ background: "linear-gradient(135deg,#C8820A,#E8A020)", color: "#0D1E38", border: "none", borderRadius: 10, padding: "15px 36px", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
          Book a Free Cloud Assessment
        </button>
      </section>
    </div>
  );
};

export default CloudPage;