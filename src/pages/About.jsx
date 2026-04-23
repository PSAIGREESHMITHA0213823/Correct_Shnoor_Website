
import React, { useState, useEffect, useRef } from "react";
import { ArrowRightIcon, CheckIcon, TargetIcon, EyeIcon, ValuesIcon } from "./Icons";
const useReveal = (threshold = 0.15) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
};

const reveal = (visible, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0)" : "translateY(32px)",
  transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
});

const Img = ({ src, alt, style }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div style={{ position: "relative", overflow: "hidden", ...style }}>
      {!loaded && <div style={{ position: "absolute", inset: 0, background: "rgba(13,33,68,0.35)" }} />}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: loaded ? 1 : 0, transition: "opacity 0.5s" }}
      />
    </div>
  );
};

const milestones = [
  {
    year: "Jan 2025",
    event: "SHNOOR International LLC incorporated in Odessa, Missouri, USA — with a mandate to redefine global IT consulting and trade services.",
    img: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=400&q=80",
  },
  {
    year: "Mar 2025",
    event: "Operational hub established in Muscat, Oman — enabling direct access to GCC markets including UAE, Bahrain, Qatar, and Kuwait.",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80",
  },
  {
    year: "Apr 2025",
    event: "IT Consulting & SAP ABAP/MM practices formally launched, serving North American enterprise clients.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
  },
  {
    year: "Jun 2025",
    event: "Cloud Management division activated — certified teams delivering across AWS, Microsoft Azure, and Google Cloud Platform.",
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80",
  },
  {
    year: "Aug 2025",
    event: "Export & Logistics operations commenced from Mumbai and Mundra ports, connecting Indian manufacturers to GCC buyers.",
    img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=400&q=80",
  },
  {
    year: "Jan 2026",
    event: "East Africa expansion announced — new office in Kigali, Rwanda to serve the rapidly growing East African market.",
    img: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=400&q=80",
  },
];

const values = [
  {
    Icon: TargetIcon,
    title: "Our Mission",
    desc: "To empower businesses worldwide with cutting-edge technology solutions and seamless international trade services — creating lasting, measurable value across every client engagement and geography we serve.",
  },
  {
    Icon: EyeIcon,
    title: "Our Vision",
    desc: "To become the global benchmark in IT consulting and international commerce — recognized for technical excellence, ethical integrity, and the tangible business outcomes we deliver for our partners.",
  },
  {
    Icon: ValuesIcon,
    title: "Our Values",
    desc: "Integrity, Innovation, Excellence, and a Client-First mindset are not aspirations — they are the operating standards embedded in every relationship, project, and decision we make at SHNOOR.",
  },
];

const practices = [
  "IT Consulting & Staffing",
  "SAP ABAP / MM / ERP",
  "Cloud Management (AWS/Azure/GCP)",
  "Artificial Intelligence & ML",
  "Data Analytics & BI",
  "Export Management",
  "Logistics & Supply Chain",
  "Background Verification",
  "HRM / LMS Platforms",
  "Product Development",
  "Cybersecurity Consulting",
  "Digital Transformation",
];

const differentiators = [
  {
    title: "Domain Specialists",
    desc: "Every engagement is led by certified practitioners with deep industry experience — not generalists.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80",
  },
  {
    title: "Cross-Border Intelligence",
    desc: "We navigate multi-jurisdictional regulations, customs, and compliance so clients can focus on growth.",
    img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=500&q=80",
  },
  {
    title: "Technology-First Culture",
    desc: "From AI automation to cloud-native architecture, we embed innovation into every solution we build.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80",
  },
];

const globalReach = [
  {
    region: "North America",
    detail: "HQ in Missouri — serving US enterprises across IT consulting and staffing.",
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&q=80",
  },
  {
    region: "GCC & Middle East",
    detail: "Muscat hub serving UAE, Oman, Bahrain, Qatar, Kuwait with export and IT services.",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80",
  },
  {
    region: "South Asia",
    detail: "Mumbai logistics operations handling exports from Mundra and JNPT ports.",
    img: "https://images.unsplash.com/photo-1562979314-bee7453e911c?w=400&q=80",
  },
  {
    region: "East Africa",
    detail: "Kigali expansion in 2026 — tapping into Rwanda and the East African Community.",
    img: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=400&q=80",
  },
];

const stats = [
  { value: "6+", label: "Countries Served" },
  { value: "4.6/5", label: "AmbitionBox Rating" },
  { value: "2025", label: "Founded" },
  { value: "4", label: "Continents" },
];

const About = ({ t, setPage }) => {
  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const [heroVisible, setHeroVisible] = useState(false);
  const [valRef, valVisible] = useReveal();
  const [storyRef, storyVisible] = useReveal();
  const [whyRef, whyVisible] = useReveal();
  const [reachRef, reachVisible] = useReveal();
  const [practRef, practVisible] = useReveal();
  const [ctaRef, ctaVisible] = useReveal();

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ paddingTop: 96 }}>
      <section style={{
        background: t.heroBg, padding: "0", minHeight: "60vh", position: "relative",
        overflow: "hidden", display: "flex", alignItems: "center",
      }}>
        <Img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80"
          alt="SHNOOR team at work"
          style={{ position: "absolute", inset: 0 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(120deg,rgba(13,21,56,0.94) 45%,rgba(13,21,56,0.6) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "radial-gradient(circle,rgba(255,255,255,0.4) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div style={{ position: "relative", zIndex: 1, padding: "100px 5%", maxWidth: 800 }}>
          <div style={{ ...reveal(heroVisible, 0), display: "inline-flex", gap: 8, alignItems: "center", background: "rgba(232,160,32,0.15)", border: "1px solid rgba(232,160,32,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 20 }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: "#E8A020", letterSpacing: "0.18em", textTransform: "uppercase" }}>About Us</span>
          </div>
          <h1 style={{ ...reveal(heroVisible, 0.1), fontFamily: "Georgia,serif", fontSize: "clamp(32px,5vw,62px)", color: "#FFF", fontWeight: 900, marginBottom: 22, lineHeight: 1.1 }}>
            SHNOOR <span style={{ color: "#E8A020" }}>International LLC</span>
          </h1>
          <p style={{ ...reveal(heroVisible, 0.2), fontSize: 17, color: "rgba(255,255,255,0.65)", maxWidth: 600, lineHeight: 1.9 }}>
            Founded in 2025 and headquartered in Odessa, Missouri — SHNOOR International LLC bridges the worlds of advanced information technology and global cross-border commerce, delivering solutions that create lasting value for clients across six countries and four continents.
          </p>
          <div style={{ ...reveal(heroVisible, 0.3), display: "flex", gap: 40, marginTop: 48, flexWrap: "wrap" }}>
            {stats.map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 900, color: "#E8A020", fontFamily: "Georgia,serif" }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section ref={valRef} style={{ background: t.bg, padding: "90px 5%" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52, ...reveal(valVisible) }}>
            <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: t.goldDim, border: `1px solid ${t.border}`, borderRadius: 100, padding: "5px 16px", marginBottom: 16 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: t.goldLight, letterSpacing: "0.18em", textTransform: "uppercase" }}>Guiding Principles</span>
            </div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,3vw,44px)", color: t.text, fontWeight: 800 }}>
              Mission, Vision <span style={{ color: t.goldLight }}>&amp; Values</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
            {values.map((v, i) => (
              <div
                key={i}
                style={{ ...reveal(valVisible, i * 0.1), background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 16, padding: "42px 32px", textAlign: "center", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = t.gold; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ width: 68, height: 68, borderRadius: 18, background: t.goldDim, border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                  <v.Icon size={30} color={t.goldLight} />
                </div>
                <h3 style={{ fontFamily: "Georgia,serif", fontSize: 22, color: t.text, fontWeight: 700, marginBottom: 16 }}>{v.title}</h3>
                <p style={{ fontSize: 14.5, color: t.textSub, lineHeight: 1.9 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section ref={storyRef} style={{ background: t.bgSection, padding: "90px 5%" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div style={{ ...reveal(storyVisible) }}>
            <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: t.goldDim, border: `1px solid ${t.border}`, borderRadius: 100, padding: "5px 16px", marginBottom: 18 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: t.goldLight, letterSpacing: "0.18em", textTransform: "uppercase" }}>Our Story</span>
            </div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,3vw,40px)", color: t.text, fontWeight: 800, marginBottom: 18 }}>
              Who We <span style={{ color: t.goldLight }}>Are</span>
            </h2>
            <div style={{ width: 48, height: 3, background: `linear-gradient(90deg,${t.gold},transparent)`, borderRadius: 2, marginBottom: 28 }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 28 }}>
              <Img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&q=80" alt="SHNOOR Office" style={{ height: 175, borderRadius: 12 }} />
              <Img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80" alt="Strategy meeting" style={{ height: 175, borderRadius: 12 }} />
            </div>

            <p style={{ fontSize: 15, color: t.textSub, lineHeight: 1.9, marginBottom: 16 }}>
              SHNOOR International LLC was formed to operate at the intersection of information technology and international commerce — uniting IT consulting, staffing, product development, SAP outsourcing, cloud management, AI and data analytics, and cross-border trade under a single enterprise.
            </p>
            <p style={{ fontSize: 15, color: t.textSub, lineHeight: 1.9, marginBottom: 16 }}>
              We were built by practitioners who have lived the challenges our clients face — from navigating complex IT talent shortages to managing multi-country trade compliance. That firsthand experience separates SHNOOR from conventional service providers.
            </p>
            <p style={{ fontSize: 15, color: t.textSub, lineHeight: 1.9, marginBottom: 32 }}>
              From our headquarters in Odessa, Missouri and regional hub in Muscat, Oman, we serve clients across North America, the GCC, South Asia, Southeast Asia, and East Africa — earning a 4.6/5 AmbitionBox rating.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 32 }}>
              {[
                { label: "Certified Experts", icon: "✓" },
                { label: "Global Compliance", icon: "✓" },
                { label: "End-to-End Trade", icon: "✓" },
                { label: "24/7 Support", icon: "✓" },
              ].map((item, i) => (
                <div key={i} style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 10, padding: "12px 16px", display: "flex", gap: 10, alignItems: "center" }}>
                  <div style={{ width: 24, height: 24, borderRadius: 6, background: t.goldDim, display: "flex", alignItems: "center", justifyContent: "center", color: t.goldLight, fontSize: 12, fontWeight: 800, flexShrink: 0 }}>{item.icon}</div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: t.text }}>{item.label}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => nav("contact")}
              style={{ background: `linear-gradient(135deg,${t.gold},${t.goldLight})`, color: "#0D1E38", border: "none", borderRadius: 10, padding: "13px 28px", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, boxShadow: "0 4px 20px rgba(232,160,32,0.3)" }}
            >
              Work With Us <ArrowRightIcon size={16} />
            </button>
          </div>
          <div style={{ ...reveal(storyVisible, 0.15) }}>
            <h3 style={{ fontFamily: "Georgia,serif", fontSize: 24, color: t.text, marginBottom: 10, fontWeight: 700 }}>Company Milestones</h3>
            <p style={{ fontSize: 14, color: t.textSub, lineHeight: 1.8, marginBottom: 32 }}>
              From a bold vision in Missouri to a multi-continental presence — our journey has been defined by decisive action and relentless execution.
            </p>

            {milestones.map((m, i) => (
              <div
                key={i}
                style={{ display: "flex", gap: 0, marginBottom: 20, position: "relative", ...reveal(storyVisible, 0.1 + i * 0.08) }}
              >

                {i < milestones.length - 1 && (
                  <div style={{ position: "absolute", left: 19, top: 42, width: 2, height: "calc(100% + 4px)", background: `linear-gradient(to bottom,${t.gold},${t.border})` }} />
                )}

         
                <div style={{ width: 40, height: 40, borderRadius: "50%", flexShrink: 0, background: t.goldDim, border: `2px solid ${t.gold}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 7.5, fontWeight: 800, color: t.goldLight, textAlign: "center", lineHeight: 1.2, padding: "0 2px", marginRight: 16 }}>
                  {m.year.replace(" ", "\n")}
                </div>

        
                <div style={{ flex: 1, background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 14, overflow: "hidden", display: "flex", gap: 0, transition: "border-color 0.25s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = t.gold; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; }}
                >
         
                  <div style={{ flex: 1, padding: "16px 18px" }}>
                    <p style={{ fontSize: 13.5, color: t.text, lineHeight: 1.7, margin: 0 }}>{m.event}</p>
                  </div>
                  <div style={{ width: 110, flexShrink: 0 }}>
                    <Img
                      src={m.img}
                      alt={m.year}
                      style={{ height: "100%", minHeight: 80 }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section ref={whyRef} style={{ background: t.bg, padding: "90px 5%" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52, ...reveal(whyVisible) }}>
            <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: t.goldDim, border: `1px solid ${t.border}`, borderRadius: 100, padding: "5px 16px", marginBottom: 16 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: t.goldLight, letterSpacing: "0.18em", textTransform: "uppercase" }}>Our Edge</span>
            </div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,3vw,44px)", color: t.text, fontWeight: 800 }}>
              Why Choose <span style={{ color: t.goldLight }}>SHNOOR</span>
            </h2>
            <p style={{ fontSize: 16, color: t.textSub, maxWidth: 560, margin: "12px auto 0", lineHeight: 1.8 }}>
              We combine technical depth, global reach, and a client-centric delivery model that most firms cannot replicate.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
            {differentiators.map((d, i) => (
              <div
                key={i}
                style={{ ...reveal(whyVisible, i * 0.1), background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 16, overflow: "hidden", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.borderColor = t.gold; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = t.border; }}
              >
                <Img src={d.img} alt={d.title} style={{ height: 200 }} />
                <div style={{ padding: "24px 26px" }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: t.text, marginBottom: 10 }}>{d.title}</h3>
                  <p style={{ fontSize: 14, color: t.textSub, lineHeight: 1.8 }}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section ref={reachRef} style={{ background: t.bgSection, padding: "90px 5%" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52, ...reveal(reachVisible) }}>
            <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: t.goldDim, border: `1px solid ${t.border}`, borderRadius: 100, padding: "5px 16px", marginBottom: 16 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: t.goldLight, letterSpacing: "0.18em", textTransform: "uppercase" }}>Global Presence</span>
            </div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,3vw,44px)", color: t.text, fontWeight: 800 }}>
              Our Reach Across <span style={{ color: t.goldLight }}>Four Continents</span>
            </h2>
            <p style={{ fontSize: 16, color: t.textSub, maxWidth: 580, margin: "12px auto 0", lineHeight: 1.8 }}>
              SHNOOR's geographic footprint gives clients seamless access to talent, markets, and supply chains across the world's fastest-growing economic corridors.
            </p>
          </div>
          <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", marginBottom: 36, ...reveal(reachVisible, 0.1) }}>
            <Img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80" alt="Global office" style={{ height: 340 }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,rgba(13,21,45,0.88),rgba(13,21,45,0.3) 60%,rgba(13,21,45,0.7))" }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 5%" }}>
              <div>
                <div style={{ fontSize: "clamp(20px,2.5vw,34px)", fontFamily: "Georgia,serif", color: "#FFF", fontWeight: 800, marginBottom: 10 }}>
                  Built for <span style={{ color: "#E8A020" }}>Cross-Border Scale</span>
                </div>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", maxWidth: 400, lineHeight: 1.85 }}>
                  Every office is staffed with specialists who understand local markets, regulations, and culture — enabling SHNOOR to deliver with precision wherever our clients operate.
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 20 }}>
            {globalReach.map((r, i) => (
              <div
                key={i}
                style={{ ...reveal(reachVisible, 0.1 + i * 0.08), background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 16, overflow: "hidden", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = t.gold; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; }}
              >
                <Img src={r.img} alt={r.region} style={{ height: 160 }} />
                <div style={{ padding: "18px 20px" }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: t.text, marginBottom: 8 }}>{r.region}</div>
                  <p style={{ fontSize: 13, color: t.textSub, lineHeight: 1.75 }}>{r.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section ref={practRef} style={{ background: t.bg, padding: "90px 5%" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }}>
            <div style={{ ...reveal(practVisible) }}>
              <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: t.goldDim, border: `1px solid ${t.border}`, borderRadius: 100, padding: "5px 16px", marginBottom: 18 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: t.goldLight, letterSpacing: "0.18em", textTransform: "uppercase" }}>Capabilities</span>
              </div>
              <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,3vw,40px)", color: t.text, fontWeight: 800, marginBottom: 18 }}>
                Our Practice <span style={{ color: t.goldLight }}>Areas</span>
              </h2>
              <div style={{ width: 48, height: 3, background: `linear-gradient(90deg,${t.gold},transparent)`, borderRadius: 2, marginBottom: 24 }} />
              <p style={{ fontSize: 15, color: t.textSub, lineHeight: 1.9, marginBottom: 32 }}>
                SHNOOR delivers across a broad spectrum of technology and trade disciplines. Our practice areas are staffed by certified specialists with hands-on enterprise experience — not junior consultants learning on the job.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <Img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&q=80" alt="Consulting team" style={{ height: 150, borderRadius: 12 }} />
                <Img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80" alt="Cloud infrastructure" style={{ height: 150, borderRadius: 12 }} />
              </div>
            </div>

            <div style={{ ...reveal(practVisible, 0.15), display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {practices.map((p, i) => (
                <div
                  key={i}
                  style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 10, padding: "16px 18px", display: "flex", gap: 12, alignItems: "center", transition: "all 0.25s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = t.gold; e.currentTarget.style.background = t.goldDim; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.background = t.bgCard; }}
                >
                  <div style={{ width: 28, height: 28, borderRadius: 7, background: t.goldDim, border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <CheckIcon size={13} color={t.goldLight} />
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: t.text, lineHeight: 1.4 }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: t.bgSection, padding: "60px 5%" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 16 }}>
            <Img src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=700&q=80" alt="Professional workspace" style={{ height: 300, borderRadius: 16 }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <Img src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=400&q=80" alt="Container port" style={{ flex: 1, borderRadius: 12 }} />
              <Img src="https://images.unsplash.com/photo-1573164713712-03790a178651?w=400&q=80" alt="Business meeting" style={{ flex: 1, borderRadius: 12 }} />
            </div>
            <Img src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=400&q=80" alt="Technology partner" style={{ height: 300, borderRadius: 16 }} />
          </div>
        </div>
      </section>
      <section ref={ctaRef} style={{ background: "linear-gradient(135deg,#0D2144,#1A3A6A)", padding: "90px 5%", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle,rgba(232,160,32,0.07) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1, ...reveal(ctaVisible) }}>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(28px,4vw,50px)", color: "#FFF", fontWeight: 800, marginBottom: 18 }}>
            Ready to Partner with <span style={{ color: "#E8A020" }}>SHNOOR</span>?
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", maxWidth: 560, margin: "0 auto 36px", lineHeight: 1.9 }}>
            Whether you need IT talent, cloud infrastructure, AI solutions, or cross-border trade support — our team is ready to deliver. Let's build something exceptional together.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => nav("contact")}
              style={{ background: "linear-gradient(135deg,#C8820A,#E8A020)", color: "#0D1E38", border: "none", borderRadius: 10, padding: "15px 36px", fontSize: 15, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 24px rgba(232,160,32,0.4)" }}
            >
              Get in Touch
            </button>
            <button
              onClick={() => nav("services")}
              style={{ background: "rgba(255,255,255,0.1)", color: "#FFF", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 10, padding: "15px 36px", fontSize: 15, fontWeight: 600, cursor: "pointer", backdropFilter: "blur(8px)" }}
            >
              View Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;