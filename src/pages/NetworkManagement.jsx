import React, { useState } from "react";
import { ArrowRightIcon, CheckIcon, WifiIcon, ShieldIcon, ActivityIcon, MonitorIcon, ServerIcon, RouterIcon, ZapIcon, GlobeIcon, SettingsIcon} from "./Icons";

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
  { Icon: RouterIcon,  title: "Network Design & Architecture",    desc: "We design and deploy enterprise-grade network architectures — from campus LAN/WAN to data center fabrics — optimized for performance, scalability, and redundancy. Our certified network architects follow industry best practices across Cisco, Juniper, Aruba, and Fortinet platforms." },
  { Icon: WifiIcon,    title: "SD-WAN & Software-Defined Networking", desc: "Transform your WAN with software-defined networking solutions that reduce costs, improve visibility, and simplify management. We deploy and manage SD-WAN overlays across multi-site enterprises with integrated security and quality-of-service policies." },
  { Icon: MonitorIcon, title: "Network Operations Center (NOC)",   desc: "24/7 proactive network monitoring through our dedicated Network Operations Center. We detect, diagnose, and resolve network incidents before they impact your business — with SLA-backed response times and detailed reporting dashboards." },
  { Icon: ShieldIcon,  title: "Network Security & Firewall Management", desc: "Comprehensive network security encompassing next-generation firewall configuration, intrusion detection and prevention systems (IDS/IPS), zero-trust segmentation, and VPN management — aligning with ISO 27001 and NIST frameworks." },
  { Icon: ActivityIcon, title: "Performance Monitoring & Optimization", desc: "Continuous monitoring of bandwidth utilization, latency, packet loss, and application performance. We use AI-driven analytics to identify bottlenecks and proactively tune your network infrastructure for peak efficiency." },
  { Icon: ServerIcon,  title: "Network Infrastructure Management",  desc: "End-to-end lifecycle management of your network infrastructure — including routers, switches, access points, load balancers, and unified communications. We handle firmware updates, configuration management, and capacity planning." },
  { Icon: GlobeIcon,   title: "Cloud Networking & Hybrid Connectivity", desc: "Seamless hybrid and multi-cloud connectivity through AWS Direct Connect, Azure ExpressRoute, and Google Cloud Interconnect. We architect private peering, BGP routing, and transit gateway solutions that extend your network securely to the cloud." },
  { Icon: ZapIcon,     title: "Wireless Network Solutions",        desc: "High-density Wi-Fi 6/6E deployments for offices, warehouses, hospitals, and campuses. We perform RF site surveys, design optimal access point placements, and configure enterprise wireless controllers for seamless coverage and capacity." },
  { Icon: SettingsIcon, title: "Network Automation & DevNetOps",   desc: "Accelerate network operations with automation using Ansible, Python, and Cisco DevNet. We implement Infrastructure-as-Code for network provisioning, automate change management workflows, and integrate with ITSM platforms." },
];

const stats = [
  { val: "500+", label: "Network Nodes Managed" },
  { val: "99.99%", label: "Uptime SLA" },
  { val: "24/7", label: "NOC Coverage" },
  { val: "60%", label: "Avg Ticket Reduction" },
];

const process = [
  "Network Assessment & Discovery",
  "Architecture Design & Planning",
  "Implementation & Migration",
  "Security Hardening",
  "Monitoring & Optimization",
  "Ongoing Managed Operations",
];

const NetworkManagement = ({ t, setPage }) => {
  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ background: t.heroBg, padding: "0", minHeight: 540, display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "radial-gradient(circle,rgba(255,255,255,0.4) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div style={{ position: "relative", zIndex: 2, padding: "80px 0 80px 5%" }}>
          <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: "rgba(232,160,32,0.15)", border: "1px solid rgba(232,160,32,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 20 }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: "#E8A020", letterSpacing: "0.18em", textTransform: "uppercase" }}>Network Management</span>
          </div>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(30px,4.5vw,56px)", color: "#FFF", fontWeight: 900, lineHeight: 1.1, marginBottom: 20 }}>
            Enterprise <span style={{ color: "#E8A020" }}>Network Management</span>
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", lineHeight: 1.85, maxWidth: 500, marginBottom: 36, textAlign: "justify" }}>
            From SD-WAN deployment and cloud networking to 24/7 NOC operations and network security — SHNOOR delivers comprehensive network management services that keep your infrastructure resilient, secure, and performing at its best.
          </p>
          <button onClick={() => nav("contact")} style={{ background: "linear-gradient(135deg,#C8820A,#E8A020)", color: "#0D1E38", border: "none", borderRadius: 10, padding: "14px 28px", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8 }}>
            Get Network Assessment <ArrowRightIcon size={16} />
          </button>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, marginTop: 52, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            {stats.map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: 24, fontWeight: 800, color: "#E8A020", fontFamily: "Georgia,serif" }}>{s.val}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.06em", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <Img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80" alt="Network" style={{ height: "100%", minHeight: 540, opacity: 0.65 }} />
      </section>
      <section style={{ background: t.bg, padding: "90px 5%" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: t.goldDim, border: `1px solid ${t.border}`, borderRadius: 100, padding: "5px 16px", marginBottom: 16 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: t.goldLight, letterSpacing: "0.18em", textTransform: "uppercase" }}>Our Capabilities</span>
            </div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,3vw,42px)", color: t.text, fontWeight: 800, marginBottom: 14 }}>
              Network Services <span style={{ color: t.goldLight }}>Portfolio</span>
            </h2>
            <p style={{ fontSize: 15, color: t.textSub, maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
              End-to-end network lifecycle management — from initial design through day-to-day operations and continuous optimization.
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
          <Img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=700&q=80" alt="Network Ops" style={{ borderRadius: 16, height: 420, border: `1px solid ${t.border}` }} />
          <div>
            <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: t.goldDim, border: `1px solid ${t.border}`, borderRadius: 100, padding: "5px 16px", marginBottom: 18 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: t.goldLight, letterSpacing: "0.18em", textTransform: "uppercase" }}>Why SHNOOR</span>
            </div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,3vw,40px)", color: t.text, fontWeight: 800, marginBottom: 18 }}>
              A Network Partner <span style={{ color: t.goldLight }}>You Can Trust</span>
            </h2>
            <div style={{ width: 48, height: 3, background: `linear-gradient(90deg,${t.gold},transparent)`, borderRadius: 2, marginBottom: 24 }} />
            <p style={{ fontSize: 15, color: t.textSub, lineHeight: 1.85, marginBottom: 16, textAlign: "justify" }}>
              SHNOOR's network management practice is built on certified expertise across Cisco, Juniper, Palo Alto, and Fortinet technologies. Our NOC engineers are available around the clock, ensuring your network infrastructure never becomes a business bottleneck.
            </p>
            <p style={{ fontSize: 15, color: t.textSub, lineHeight: 1.85, marginBottom: 28, textAlign: "justify" }}>
              Whether you're a growing enterprise expanding across multiple locations or an established organization seeking to modernize legacy infrastructure, our team brings the deep technical expertise and operational discipline to deliver outcomes — not just services.
            </p>
            {["Certified Cisco, Juniper & Fortinet Engineers", "Proactive Monitoring — Issues Resolved Before Impact", "Vendor-Agnostic Architecture Recommendations", "SLA-Backed Response Times with Escalation Paths", "Seamless Integration with Existing IT Operations"].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 12 }}>
                <div style={{ width: 24, height: 24, borderRadius: 6, background: t.goldDim, border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: t.goldLight, flexShrink: 0, marginTop: 1 }}><CheckIcon size={12} /></div>
                <span style={{ fontSize: 14, color: t.textSub }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: t.bg, padding: "90px 5%" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,3vw,42px)", color: t.text, fontWeight: 800 }}>
              Our Delivery <span style={{ color: t.goldLight }}>Process</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 18 }}>
            {process.map((step, i) => (
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
          Ready to Modernize Your <span style={{ color: "#E8A020" }}>Network Infrastructure?</span>
        </h2>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", maxWidth: 520, margin: "0 auto 36px" }}>
          Get a free network assessment and discover how SHNOOR can improve performance, security, and reliability.
        </p>
        <button onClick={() => nav("contact")} style={{ background: "linear-gradient(135deg,#C8820A,#E8A020)", color: "#0D1E38", border: "none", borderRadius: 10, padding: "15px 36px", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
          Schedule a Free Assessment
        </button>
      </section>
    </div>
  );
};

export default NetworkManagement;