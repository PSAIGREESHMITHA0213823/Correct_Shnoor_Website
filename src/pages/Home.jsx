

import React, { useState, useEffect, useRef } from "react";
import { ArrowRightIcon, LaptopIcon, CloudIcon, CpuIcon, WorldIcon, AnchorIcon, ShieldIcon } from "./Icons";

const useReveal = (threshold = 0.15) => {
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
  transform: visible ? "translateY(0)" : "translateY(36px)",
  transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
});

const Img = ({ src, alt, style }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div style={{ position: "relative", overflow: "hidden", ...style }}>
      {!loaded && <div style={{ position: "absolute", inset: 0, background: "rgba(13,33,68,0.4)" }} />}
      <img src={src} alt={alt} onLoad={() => setLoaded(true)}
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: loaded ? 1 : 0, transition: "opacity 0.5s" }} />
    </div>
  );
};

const ParallaxStrip = ({ images }) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setOffset(rect.top * 0.18);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div ref={ref} style={{ overflow: "hidden", display: "flex", gap: 16, height: 280 }}>
      {images.map((src, i) => (
        <div key={i} style={{ flex: 1, overflow: "hidden", borderRadius: 14, position: "relative" }}>
          <img src={src} alt="" style={{ width: "100%", height: "120%", objectFit: "cover", transform: `translateY(${offset * (i % 2 === 0 ? 1 : -1)}px)`, transition: "transform 0.05s linear" }} />
        </div>
      ))}
    </div>
  );
};

const stats = [
  { val: "6+",   label: "Countries Served" },
  { val: "4.6★", label: "AmbitionBox Rating" },
  { val: "50+",  label: "Expert Professionals" },
  { val: "2025", label: "Founded" },
];

const services = [
  { Icon: LaptopIcon, title: "IT Consulting & Staffing",    desc: "We source, vet, and place top-tier IT talent — from SAP ABAP developers to cloud architects — enabling enterprises to scale their digital capabilities without operational friction.", img: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&q=80" },
  { Icon: CloudIcon,  title: "Cloud Management",             desc: "From lift-and-shift migrations to full cloud-native architectures, our certified engineers manage AWS, Azure, and GCP environments with 24/7 operational oversight and cost optimization.", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80" },
  { Icon: CpuIcon,    title: "AI & Data Analytics",         desc: "We build and deploy machine learning models, predictive dashboards, and AI-powered automation pipelines that transform raw data into actionable business intelligence.", img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=80" },
  { Icon: WorldIcon,  title: "Export Management",            desc: "End-to-end export services covering documentation, customs compliance, and regulatory navigation — connecting Indian manufacturers to buyers across UAE, Oman, Bahrain, Qatar, and Malaysia.", img: "data:image/jpeg;base64,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" },
  { Icon: AnchorIcon, title: "Logistics Management",         desc: "Our supply chain specialists coordinate freight, warehousing, and last-mile delivery from Mumbai and Mundra ports to global destinations — ensuring shipments arrive on time, every time.", img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400&q=80" },
  { Icon: ShieldIcon, title: "Background Verification",     desc: "Multi-layer pre-employment screening covering criminal records, employment history, academic credentials, and professional references — protecting your organization from risk.", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80" },
];

const testimonials = [
  { name: "Rajesh Kumar",    role: "CTO, Mumbai Tech Corp",         text: "SHNOOR transformed our cloud infrastructure completely. Their AWS architects delivered beyond expectations — on time, on budget, and with zero downtime during migration.", rating: 5 },
  { name: "Omar Al-Rashid",  role: "VP Operations, Oman Logistics", text: "Their export management team handled all India-GCC documentation with absolute precision. Every shipment was tracked, every deadline met. Highly professional at every level.", rating: 5 },
  { name: "Sarah Mitchell",  role: "HR Director, Missouri MedTech", text: "The background verification turnaround is exceptional. Reports are thorough, timely, and we trust their process completely. A true partner in protecting our workforce.", rating: 5 },
];

const globalOffices = [
  { city: "Odessa, Missouri", role: "Global Headquarters", flag: "US", coords: "USA" },
  { city: "Muscat, Oman",     role: "Regional Hub — GCC",  flag: "OM", coords: "Oman" },
  { city: "Mumbai, India",    role: "Logistics Hub",        flag: "IN", coords: "India" },
  { city: "Kigali, Rwanda",   role: "East Africa Office",   flag: "RW", coords: "Rwanda" },
];

const stripImages = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80",
  "https://images.unsplash.com/photo-1488229297570-58520851e868?w=500&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80",
  "https://images.unsplash.com/photo-1565728744382-61accd4aa148?w=500&q=80",
];

const FlagPin = ({ code }) => (
  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#E8A020,#C8820A)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
    <WorldIcon size={16} color="#0D1E38" />
  </div>
);

const Counter = ({ val, label, t, visible, delay }) => (
  <div style={{ ...reveal(visible, delay) }}>
    <div style={{ fontSize: "clamp(22px,2.5vw,34px)", fontWeight: 900, color: "#E8A020", fontFamily: "Georgia,serif" }}>{val}</div>
    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", marginTop: 4, textTransform: "uppercase" }}>{label}</div>
  </div>
);

const Home = ({ t, setPage }) => {
  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const [heroVisible, setHeroVisible] = useState(false);
  const [servRef, servVisible] = useReveal();
  const [aboutRef, aboutVisible] = useReveal();
  const [globalRef, globalVisible] = useReveal();
  const [testRef, testVisible] = useReveal();
  const [ctaRef, ctaVisible] = useReveal();

  useEffect(() => { const t = setTimeout(() => setHeroVisible(true), 100); return () => clearTimeout(t); }, []);

  return (
    <div style={{ paddingTop: 96 }}>

      <section style={{ background: t.heroBg, minHeight: "94vh", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", padding: "60px 5%", gap: 60, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
        <div style={{ position: "absolute", top: "20%", right: "30%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(232,160,32,0.08) 0%,transparent 70%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 2 }}>
          <div style={{ ...reveal(heroVisible, 0), display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(232,160,32,0.15)", border: "1px solid rgba(232,160,32,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 24 }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#E8A020", animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: "#E8A020", letterSpacing: "0.18em", textTransform: "uppercase" }}>Global IT & Trade Solutions</span>
          </div>
          <h1 style={{ ...reveal(heroVisible, 0.1), fontFamily: "Georgia,'Times New Roman',serif", fontSize: "clamp(34px,4.5vw,64px)", color: "#FFF", fontWeight: 900, lineHeight: 1.1, marginBottom: 22 }}>
            Bridging IT Excellence<br /><span style={{ color: "#E8A020" }}>& Global Commerce</span>
          </h1>
          <p style={{ ...reveal(heroVisible, 0.2), fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.9, maxWidth: 520, marginBottom: 36, textAlign: "justify" }}>
            SHNOOR International LLC delivers world-class IT consulting, cloud management, AI analytics, and cross-border trade services — headquartered in Missouri, USA with operations spanning the GCC, South Asia, and East Africa. We are built on a foundation of domain expertise, technical excellence, and unwavering commitment to client outcomes.
          </p>
          <div style={{ ...reveal(heroVisible, 0.3), display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button onClick={() => nav("services")} style={{ background: "linear-gradient(135deg,#C8820A,#E8A020)", color: "#0D1E38", border: "none", borderRadius: 10, padding: "15px 32px", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, boxShadow: "0 4px 20px rgba(232,160,32,0.35)" }}>
              Explore Services <ArrowRightIcon size={16} />
            </button>
            <button onClick={() => nav("contact")} style={{ background: "rgba(255,255,255,0.08)", color: "#FFF", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 10, padding: "15px 32px", fontSize: 14, fontWeight: 600, cursor: "pointer", backdropFilter: "blur(8px)" }}>
              Get a Quote
            </button>
          </div>
          <div style={{ ...reveal(heroVisible, 0.4), display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, marginTop: 52, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            {stats.map((s, i) => <Counter key={i} val={s.val} label={s.label} t={t} visible={heroVisible} delay={0.45 + i * 0.08} />)}
          </div>
        </div>

        <div style={{ position: "relative", zIndex: 2, height: 560, ...reveal(heroVisible, 0.2) }}>
          <Img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=700&q=80" alt="Team collaboration" style={{ position: "absolute", top: 0, left: 0, width: "63%", height: 320, borderRadius: 16, border: "2px solid rgba(232,160,32,0.25)" }} />
          <Img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&q=80" alt="Port logistics" style={{ position: "absolute", bottom: 60, left: 0, width: "46%", height: 210, borderRadius: 12, border: "2px solid rgba(232,160,32,0.15)" }} />
          <Img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80" alt="Cloud technology" style={{ position: "absolute", top: 40, right: 0, width: "52%", height: 240, borderRadius: 12, border: "2px solid rgba(232,160,32,0.15)" }} />
          <Img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80" alt="Data analytics" style={{ position: "absolute", bottom: 0, right: 0, width: "50%", height: 190, borderRadius: 12, border: "2px solid rgba(232,160,32,0.15)" }} />
          <div style={{ position: "absolute", bottom: 68, left: "50%", transform: "translateX(-50%)", background: "rgba(13,30,56,0.92)", border: "1px solid rgba(232,160,32,0.4)", borderRadius: 12, padding: "14px 20px", backdropFilter: "blur(12px)", whiteSpace: "nowrap", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: "#E8A020", textAlign: "center" }}>4.6 ★</div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", textAlign: "center", letterSpacing: "0.1em", marginTop: 2 }}>AMBITIONBOX RATED</div>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 100, background: `linear-gradient(to bottom,transparent,${t.bg})`, zIndex: 3 }} />
      </section>

      <section style={{ background: t.bg, padding: "60px 5% 0" }}>
        <ParallaxStrip images={stripImages} />
      </section>

      <section ref={servRef} style={{ background: t.bg, padding: "90px 5%" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56, ...reveal(servVisible) }}>
            <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: t.goldDim, border: `1px solid ${t.border}`, borderRadius: 100, padding: "5px 16px", marginBottom: 16 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: t.goldLight, letterSpacing: "0.18em", textTransform: "uppercase" }}>What We Offer</span>
            </div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(28px,3.5vw,46px)", color: t.text, fontWeight: 800, marginBottom: 14 }}>Comprehensive <span style={{ color: t.goldLight }}>Services</span></h2>
            <p style={{ fontSize: 16, color: t.textSub, maxWidth: 600, margin: "0 auto", lineHeight: 1.8, textAlign: "center" }}>
              From enterprise IT solutions to global trade management — we deliver end-to-end capabilities across every domain our clients operate in.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 24 }}>
            {services.map((s, i) => (
              <div key={i} style={{ ...reveal(servVisible, i * 0.08), background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 16, overflow: "hidden", transition: "all 0.3s", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.3)"; e.currentTarget.style.borderColor = t.gold; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = t.border; }}>
                <Img src={s.img} alt={s.title} style={{ height: 180 }} />
                <div style={{ padding: "24px 26px" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: t.goldDim, border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <s.Icon size={22} color={t.goldLight} />
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: t.text, marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: 13.5, color: t.textSub, lineHeight: 1.8, textAlign: "justify" }}>{s.desc}</p>
                  <button onClick={() => nav("services")} style={{ marginTop: 18, background: "none", border: "none", cursor: "pointer", color: t.goldLight, fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 6, padding: 0 }}>
                    Learn more <ArrowRightIcon size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={aboutRef} style={{ background: t.bgSection, padding: "90px 5%" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>

          <div style={{ position: "relative", height: 500, ...reveal(aboutVisible) }}>
            <Img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=700&q=80" alt="SHNOOR HQ building" style={{ borderRadius: 16, height: "100%", border: `2px solid ${t.border}` }} />
            <Img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80" alt="Meeting" style={{ position: "absolute", bottom: 24, right: -28, width: "48%", height: 170, borderRadius: 12, border: `2px solid ${t.border}`, boxShadow: "0 8px 32px rgba(0,0,0,0.35)" }} />
            <Img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=350&q=80" alt="Professional" style={{ position: "absolute", top: 24, right: -28, width: "44%", height: 155, borderRadius: 12, border: `2px solid ${t.border}`, boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }} />
            <div style={{ position: "absolute", bottom: -16, left: 20, background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 12, padding: "14px 20px", boxShadow: "0 8px 32px rgba(0,0,0,0.3)", display: "flex", gap: 10, alignItems: "center" }}>
              <FlagPin code="US" />
              <div>
                <div style={{ fontSize: 9, color: t.goldLight, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Global HQ</div>
                <div style={{ fontSize: 13, color: t.text, fontWeight: 600 }}>Odessa, Missouri, USA</div>
              </div>
            </div>
          </div>

          <div style={{ ...reveal(aboutVisible, 0.15) }}>
            <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: t.goldDim, border: `1px solid ${t.border}`, borderRadius: 100, padding: "5px 16px", marginBottom: 18 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: t.goldLight, letterSpacing: "0.18em", textTransform: "uppercase" }}>About SHNOOR</span>
            </div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,3vw,42px)", color: t.text, fontWeight: 800, marginBottom: 18, lineHeight: 1.2 }}>
              Global Reach,<br /><span style={{ color: t.goldLight }}>Local Expertise</span>
            </h2>
            <div style={{ width: 48, height: 3, background: `linear-gradient(90deg,${t.gold},transparent)`, borderRadius: 2, marginBottom: 24 }} />
            <p style={{ fontSize: 15, color: t.textSub, lineHeight: 1.9, marginBottom: 16, textAlign: "justify" }}>
              SHNOOR International LLC was founded in 2025 to operate at the intersection of information technology and international commerce. We bring together domain specialists across IT consulting, cloud infrastructure, AI, export management, and logistics — all under one roof.
            </p>
            <p style={{ fontSize: 15, color: t.textSub, lineHeight: 1.9, marginBottom: 16, textAlign: "justify" }}>
              With headquarters in Odessa, Missouri and a regional hub in Muscat, Oman, we serve clients across North America, the Gulf Cooperation Council, South Asia, Southeast Asia, and East Africa. Our team of 50+ professionals is committed to delivering measurable impact with transparency and precision.
            </p>
            <p style={{ fontSize: 15, color: t.textSub, lineHeight: 1.9, marginBottom: 32, textAlign: "justify" }}>
              SHNOOR holds a strong 4.6/5 rating on AmbitionBox — a testament to our culture of excellence, employee empowerment, and consistent delivery. We believe that when our people thrive, our clients succeed.
            </p>
            <button onClick={() => nav("about")} style={{ background: `linear-gradient(135deg,${t.gold},${t.goldLight})`, color: "#0D1E38", border: "none", borderRadius: 10, padding: "13px 28px", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, boxShadow: "0 4px 20px rgba(232,160,32,0.3)" }}>
              Our Full Story <ArrowRightIcon size={16} />
            </button>
          </div>
        </div>
      </section>

      <section ref={globalRef} style={{ background: t.bg, padding: "90px 5%" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56, ...reveal(globalVisible) }}>
            <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: t.goldDim, border: `1px solid ${t.border}`, borderRadius: 100, padding: "5px 16px", marginBottom: 16 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: t.goldLight, letterSpacing: "0.18em", textTransform: "uppercase" }}>Our Presence</span>
            </div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(28px,3.5vw,44px)", color: t.text, fontWeight: 800, marginBottom: 14 }}>Operating Across <span style={{ color: t.goldLight }}>6 Countries</span></h2>
            <p style={{ fontSize: 16, color: t.textSub, maxWidth: 560, margin: "0 auto", lineHeight: 1.8 }}>
              From the Americas to the Gulf, South Asia, and East Africa — SHNOOR maintains a global operational footprint built for agility and scale.
            </p>
          </div>

          <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", border: `1px solid ${t.border}`, marginBottom: 40, ...reveal(globalVisible, 0.1) }}>
            <Img src="data:image/jpeg;base64,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" alt="Global operations" style={{ height: 380 }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,rgba(13,21,45,0.85) 0%,rgba(13,21,45,0.3) 60%,rgba(13,21,45,0.6) 100%)" }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 5%" }}>
              <div>
                <div style={{ fontSize: "clamp(22px,3vw,38px)", fontFamily: "Georgia,serif", color: "#FFF", fontWeight: 800, marginBottom: 8 }}>
                  A Truly <span style={{ color: "#E8A020" }}>Global</span> Enterprise
                </div>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", maxWidth: 420, lineHeight: 1.8, textAlign: "justify" }}>
                  SHNOOR's operations span four continents, giving clients the advantage of local regulatory insight combined with global supply chain reach.
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
            {globalOffices.map((o, i) => (
              <div key={i} style={{ ...reveal(globalVisible, 0.1 + i * 0.07), background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 14, padding: "24px 22px", display: "flex", gap: 16, alignItems: "center" }}>
                <FlagPin code={o.flag} />
                <div>
                  <div style={{ fontSize: 9, color: t.goldLight, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 4 }}>{o.role}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: t.text }}>{o.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: t.bgSection, padding: "90px 5%" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 16 }}>
            <Img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&q=80" alt="Enterprise technology" style={{ height: 260, borderRadius: 14 }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <Img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80" alt="IT staffing" style={{ flex: 1, borderRadius: 14 }} />
              <Img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=400&q=80" alt="Cargo ship" style={{ flex: 1, borderRadius: 14 }} />
            </div>
            <Img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&q=80" alt="Data center" style={{ height: 260, borderRadius: 14 }} />
          </div>
        </div>
      </section>

      <section ref={testRef} style={{ background: t.bg, padding: "90px 5%" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52, ...reveal(testVisible) }}>
            <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: t.goldDim, border: `1px solid ${t.border}`, borderRadius: 100, padding: "5px 16px", marginBottom: 16 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: t.goldLight, letterSpacing: "0.18em", textTransform: "uppercase" }}>Client Voices</span>
            </div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,3vw,42px)", color: t.text, fontWeight: 800 }}>What Our <span style={{ color: t.goldLight }}>Clients Say</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
            {testimonials.map((tc, i) => (
              <div key={i} style={{ ...reveal(testVisible, i * 0.1), background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 16, padding: "36px 30px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 20, right: 24, fontSize: 64, color: t.goldLight, opacity: 0.12, fontFamily: "Georgia,serif", lineHeight: 1 }}>"</div>
                <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
                  {[...Array(tc.rating)].map((_, j) => <span key={j} style={{ color: t.goldLight, fontSize: 15 }}>★</span>)}
                </div>
                <p style={{ fontSize: 14.5, color: t.textSub, lineHeight: 1.85, marginBottom: 28, fontStyle: "italic", textAlign: "justify" }}>"{tc.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 46, height: 46, borderRadius: "50%", background: `linear-gradient(135deg,${t.gold},${t.goldLight})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: "#0D1E38", fontWeight: 800 }}>{tc.name[0]}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: t.text }}>{tc.name}</div>
                    <div style={{ fontSize: 12, color: t.textMuted }}>{tc.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ctaRef} style={{ position: "relative", overflow: "hidden", padding: "0" }}>
        <Img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1400&q=80" alt="Business transformation" style={{ height: 420 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(13,33,68,0.93),rgba(26,58,106,0.85))" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 5%", textAlign: "center", ...reveal(ctaVisible) }}>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(28px,4vw,52px)", color: "#FFF", fontWeight: 800, marginBottom: 18 }}>
            Ready to <span style={{ color: "#E8A020" }}>Transform</span> Your Business?
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", maxWidth: 560, margin: "0 auto 36px", lineHeight: 1.85 }}>
            Let's discuss how SHNOOR International can drive your digital transformation, optimize your supply chain, or accelerate your global expansion.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => nav("contact")} style={{ background: "linear-gradient(135deg,#C8820A,#E8A020)", color: "#0D1E38", border: "none", borderRadius: 10, padding: "15px 36px", fontSize: 15, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 24px rgba(232,160,32,0.4)" }}>
              Get Started Today
            </button>
            <button onClick={() => nav("services")} style={{ background: "rgba(255,255,255,0.1)", color: "#FFF", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 10, padding: "15px 36px", fontSize: 15, fontWeight: 600, cursor: "pointer", backdropFilter: "blur(8px)" }}>
              Explore Services
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      `}</style>
    </div>
  );
};

export default Home;