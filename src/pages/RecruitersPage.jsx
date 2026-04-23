
import React, { useState } from "react";

const Icon = ({ d, size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);
const BriefcaseIcon  = ({ size, color }) => <Icon size={size} color={color} d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />;
const CheckIcon      = ({ size, color }) => <Icon size={size} color={color} d="M20 6L9 17l-5-5" />;
const MailIcon       = ({ size, color }) => <Icon size={size} color={color} d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6" />;
const GlobeIcon      = ({ size, color }) => <Icon size={size} color={color} d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />;
const UsersIcon      = ({ size, color }) => <Icon size={size} color={color} d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />;
const TrendingIcon   = ({ size, color }) => <Icon size={size} color={color} d="M23 6l-9.5 9.5-5-5L1 18M17 6h6v6" />;
const ShieldIcon     = ({ size, color }) => <Icon size={size} color={color} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />;
const StarIcon       = ({ size, color }) => <Icon size={size} color={color} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />;
const ArrowLeftIcon  = ({ size, color }) => <Icon size={size} color={color} d="M19 12H5M12 5l-7 7 7 7" />;
const ClockIcon      = ({ size, color }) => <Icon size={size} color={color} d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM12 6v6l4 2" />;
const AwardIcon      = ({ size, color }) => <Icon size={size} color={color} d="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM8.21 13.89L7 23l5-3 5 3-1.21-9.12" />;
const ZapIcon        = ({ size, color }) => <Icon size={size} color={color} d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />;
const LinkedInIcon   = ({ size, color }) => <Icon size={size} color={color} d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />;
const TEAM_PHOTOS = {
  male1: "/team/laksir.png",
  female1: "/team/po.png",
  male2: "/team/viveksir.png",
};

const Img = ({ src, alt, style }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div style={{ position: "relative", overflow: "hidden", ...style }}>
      {!loaded && <div style={{ position: "absolute", inset: 0, background: "rgba(13,33,68,0.3)" }} />}
      <img src={src} alt={alt} onLoad={() => setLoaded(true)}
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: loaded ? 1 : 0, transition: "opacity 0.5s" }} />
    </div>
  );
};

const services = [
  {
    Icon: UsersIcon,
    title: "IT Staffing Solutions",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKZNgC5iG1p2Zb1vRhN83gdDPWv46TcSthfg&s",
    desc: "We source pre-vetted, technically assessed candidates across full-stack development, cloud architecture, DevOps, SAP consulting, data engineering, and cybersecurity roles.",
    features: [
      "Technical screening by domain experts",
      "Talent pool of 5,000+ pre-assessed IT professionals",
      "Average time-to-hire: 14 business days",
      "Replacement guarantee within 90 days",
    ],
  },
  {
    Icon: AwardIcon,
    title: "Executive & Leadership Hiring",
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80",
    desc: "Strategic placement of IT directors, program managers, VP Engineering, and C-suite technology leaders for enterprise clients across North America and GCC markets.",
    features: [
      "Headhunting from passive executive talent pools",
      "Board-level stakeholder alignment",
      "Confidential search capabilities",
      "Leadership assessment and profiling",
    ],
  },
  {
    Icon: ZapIcon,
    title: "Contract & Project Staffing",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
    desc: "Flexible engagement models — contract, contract-to-hire, or permanent placements — precisely aligned with your project timelines, budgets, and scaling requirements.",
    features: [
      "Contract staffing from 1 month to 3 years",
      "Contract-to-hire conversion pathways",
      "Payroll and compliance managed by SHNOOR",
      "Scale up or down with 2-week notice",
    ],
  },
  {
    Icon: GlobeIcon,
    title: "Global Trade Talent",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    desc: "Specialized sourcing for export operations, logistics coordination, and GCC trade compliance professionals across Oman, India, East Africa, and Southeast Asia.",
    features: [
      "GCC trade compliance specialists",
      "Export documentation and Incoterms expertise",
      "Logistics and freight operations professionals",
      "Multilingual candidates (Arabic, English, Hindi)",
    ],
  },
  {
    Icon: ShieldIcon,
    title: "Background Verification (BGV)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZyNgKCEf-VNavrOJzhT28DdHqrlxiYojuw&s",
    desc: "Comprehensive BGV services ensuring every candidate meets your compliance standards before day one — covering employment history, education, and criminal records.",
    features: [
      "Employment verification (7 years history)",
      "Education and credential authentication",
      "Criminal background checks in 30+ countries",
      "Reference checks from direct supervisors",
    ],
  },
  {
    Icon: TrendingIcon,
    title: "Workforce Analytics & Consulting",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    desc: "Data-driven workforce planning, compensation benchmarking, and talent intelligence reports to help you make smarter hiring decisions in competitive markets.",
    features: [
      "Market salary benchmarking reports",
      "Talent availability and gap analysis",
      "Workforce planning for scaling teams",
      "DEI-focused hiring strategy consulting",
    ],
  },
];

const regions = [
  { flag: "🇺🇸", name: "North America", desc: "Missouri HQ — IT consulting, staffing, and technology placements across the USA and Canada.", roles: "Full Stack, Cloud, DevOps, PM" },
  { flag: "🇴🇲", name: "GCC / Oman",    desc: "Oman operations — Trade, logistics, and IT talent for GCC markets including UAE, Saudi Arabia, and Qatar.", roles: "Trade, Logistics, SAP, IT" },
  { flag: "🇮🇳", name: "India",          desc: "South Asia talent hub — Sourcing world-class tech professionals and trade specialists.", roles: "AI/ML, Data, Full Stack, SAP" },
  { flag: "🌍", name: "East Africa",     desc: "Expanding presence across Kenya, Ethiopia, and Tanzania for trade and operations talent.", roles: "Logistics, Operations, Trade" },
];

const process = [
  { num: "01", title: "Share Your Requirements", desc: "Send us your detailed job description, headcount needs, timelines, and budget. We assign a dedicated account manager within 24 hours." },
  { num: "02", title: "Talent Search & Screening", desc: "Our team searches our proprietary talent pool and active market, conducting technical and behavioral screening aligned to your specifications." },
  { num: "03", title: "Shortlist Presentation",   desc: "Receive a curated shortlist of 3-5 thoroughly assessed candidates within 7-14 business days, complete with detailed evaluation reports." },
  { num: "04", title: "Client Interviews",         desc: "Coordinate interview schedules. We facilitate all logistics and provide candidate briefing to ensure smooth, productive sessions." },
  { num: "05", title: "Offer & Onboarding Support",desc: "We assist with offer negotiations, acceptance management, and onboarding coordination to ensure zero drop-off before day one." },
];

const testimonials = [
  { name: "Sarah M.", title: "Head of Engineering, US Tech Firm", text: "SHNOOR filled three senior cloud architect roles in under three weeks. The quality of candidates was exceptional — every one of them was technically screened and culturally aligned.", rating: 5 },
  { name: "Ahmed K.", title: "HR Director, GCC Enterprise", text: "Their understanding of the local GCC market is unmatched. They sourced trade compliance specialists we couldn't find anywhere else, and the BGV process was thorough and fast.", rating: 5 },
  { name: "Priya R.", title: "VP Technology, Bangalore Startup", text: "We engaged SHNOOR for contract staffing across a six-month data engineering project. The team delivered beyond our expectations — on time and within budget.", rating: 5 },
];

const stats = [
  { num: "200+", label: "Placements" },
  { num: "50+", label: "Enterprise Clients" },
  { num: "14 Days", label: "Avg. Time-to-Hire" },
  { num: "9+", label: "Countries" },
];
const teamMembers = [
  {
    photo: TEAM_PHOTOS.male2,
    name: "Vivek Sir Shnoor",
    title: "Managing Director",
    dept: "Executive",
    email: "vivek@shnoor.com",
    bio: "15+ years of enterprise IT and global trade experience. Spearheading SHNOOR's expansion across North America, GCC, and East Africa.",
    linkedin: "#",
  },
  {
    photo: TEAM_PHOTOS.female1,
    name: "Pooja Ma'am",
    title: "Head of Talent Acquisition",
    dept: "HR & Recruitment",
    email: "hr@shnoor.com",
    bio: "Expert in IT staffing across cloud, full-stack, and DevOps. Built SHNOOR's 5,000+ candidate pipeline from the ground up.",
    linkedin: "#",
  },
  {
    photo: TEAM_PHOTOS.male1,
    name: "Lakshman Babu Sir Shnoor",
    title: "IT Recruitment Specialist",
    dept: "IT Consulting",
    email: "lakshmanbabu@shnoor.com",
    bio: "Specialist in sourcing AI, Data Engineering, and SAP talent across India. A dedicated Team Lead and Manager, known for handling multiple teams with patience, strong leadership.",
    linkedin: "#",
  },
];

const RecruitersPage = ({ t, setPage }) => {
  const gold = t?.gold || "#C8820A";
  const goldLight = t?.goldLight || "#E8A020";
  const goldDim = t?.goldDim || "rgba(200,130,10,0.1)";
  const bg = t?.bg || "#0D1E38";
  const bgCard = t?.bgCard || "#112240";
  const bgSection = t?.bgSection || "#0A1628";
  const text = t?.text || "#F0F4FF";
  const textSub = t?.textSub || "rgba(200,215,240,0.72)";
  const textMuted = t?.textMuted || "rgba(200,215,240,0.45)";
  const border = t?.border || "rgba(200,215,240,0.1)";
  const heroBg = t?.heroBg || "linear-gradient(135deg,#0D1E38 0%,#1a2f52 100%)";

  return (
    <div style={{ paddingTop: 96, background: bg, minHeight: "100vh" }}>
      <section style={{ 
        position: "relative",
        background: heroBg, 
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}>
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
            alt="Office background"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.12,
            }}
          />
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(90deg, #0D1E38 0%, rgba(13,30,56,0.7) 50%, transparent 100%)",
          }} />
        </div>
        <div style={{ 
          maxWidth: 1400, 
          margin: "0 auto", 
          padding: "80px 5%",
          position: "relative",
          zIndex: 2,
          width: "100%",
        }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <div>
              <button onClick={() => setPage && setPage("careers")}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", border: `1px solid ${border}`, borderRadius: 30, padding: "8px 20px", color: textSub, fontSize: 13, cursor: "pointer", marginBottom: 30 }}>
                <ArrowLeftIcon size={14} color={textSub} /> Back to Careers
              </button>
              
              <div style={{ marginBottom: 24 }}>
                <span style={{ 
                  background: `linear-gradient(135deg,${gold},${goldLight})`,
                  color: "#0D1E38",
                  borderRadius: 30,
                  padding: "6px 20px",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  display: "inline-block",
                }}>
                  🎯 Talent Acquisition Partner
                </span>
              </div>

              <h1 style={{ 
                fontFamily: "Georgia,serif", 
                fontSize: "clamp(36px,5vw,64px)", 
                color: "#FFF", 
                fontWeight: 900, 
                lineHeight: 1.2, 
                marginBottom: 20,
                textShadow: "0 2px 20px rgba(0,0,0,0.2)",
              }}>
                Hire Smarter With<br /><span style={{ color: goldLight }}>SHNOOR International</span>
              </h1>
              
              <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, maxWidth: 500, marginBottom: 32 }}>
                End-to-end talent acquisition for IT and global trade — from junior engineers to C-suite leaders across North America, GCC, South Asia, and East Africa.
              </p>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 40 }}>
                <a href="mailto:hr@shnoor.com"
                  style={{ background: `linear-gradient(135deg,${gold},${goldLight})`, color: "#0D1E38", borderRadius: 50, padding: "14px 30px", fontSize: 14, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <MailIcon size={16} color="#0D1E38" /> Contact Our Team
                </a>
                <a href="https://shnoor.com/international-careers" target="_blank" rel="noopener noreferrer"
                  style={{ background: "transparent", color: goldLight, border: `1px solid rgba(232,160,32,0.4)`, borderRadius: 50, padding: "14px 30px", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
                  Visit Full Portal →
                </a>
              </div>
              <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
                {stats.map(({ num, label }) => (
                  <div key={label}>
                    <div style={{ fontSize: 32, fontWeight: 900, color: goldLight, fontFamily: "Georgia,serif" }}>{num}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 0.8fr",
              gap: 16,
              alignItems: "stretch",
            }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{
                  borderRadius: 24,
                  overflow: "hidden",
                  height: 200,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}>
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSBYfsjGEaKg1I5yy8SWNCzua7U4jDc7cc-w&s"
                    alt="Professional"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{
                  borderRadius: 24,
                  overflow: "hidden",
                  height: 200,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}>
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8vXuOzvMpK1N_6Kcp90EgbgZSHnUF4_cM5A&s"
                    alt="Collaboration"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
              <div style={{
                borderRadius: 24,
                overflow: "hidden",
                height: "100%",
                minHeight: 416,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              }}>
                <img 
                  src="data:image/jpeg;base64,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"
                  alt="Team work"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: bgSection, padding: "80px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: goldDim, border: `1px solid ${border}`, borderRadius: 100, padding: "5px 14px", marginBottom: 18 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: goldLight, letterSpacing: "0.15em", textTransform: "uppercase" }}>Why SHNOOR</span>
            </div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(22px,2.8vw,36px)", color: text, fontWeight: 800, lineHeight: 1.2, marginBottom: 20 }}>
              Your Trusted Talent Partner<br /><span style={{ color: goldLight }}>Across Industries & Continents</span>
            </h2>
            <p style={{ fontSize: 15, color: textSub, lineHeight: 1.9, marginBottom: 18 }}>
              SHNOOR International LLC was founded on the belief that great organizations are built by great people. Since our inception, we have partnered with enterprises across North America, the GCC, South Asia, and East Africa to source, screen, and place top-tier professionals in IT and global trade.
            </p>
            <p style={{ fontSize: 15, color: textSub, lineHeight: 1.9, marginBottom: 28 }}>
              Unlike traditional staffing agencies, we combine deep domain expertise with a global talent network — ensuring every placement is not just a role filled, but a long-term organizational win.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "Domain-expert recruiters for IT, cloud, SAP, data, and trade",
                "Pre-screened, technically assessed talent pool of 5,000+ professionals",
                "Average time-to-hire of 14 business days",
                "90-day replacement guarantee on all permanent placements",
              ].map((point, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <CheckIcon size={16} color={goldLight} />
                  <span style={{ fontSize: 14, color: textSub, lineHeight: 1.7 }}>{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 12, height: 440 }}>
            <Img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80" alt="Office" style={{ borderRadius: 14, border: `1px solid ${border}` }} />
            <Img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80" alt="Meeting" style={{ borderRadius: 14, border: `1px solid ${border}` }} />
          </div>
        </div>
      </section>
      <section style={{ background: bg, padding: "80px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: goldDim, border: `1px solid ${border}`, borderRadius: 100, padding: "5px 14px", marginBottom: 16 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: goldLight, letterSpacing: "0.15em", textTransform: "uppercase" }}>Our People</span>
            </div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(24px,3vw,38px)", color: text, fontWeight: 800, marginBottom: 14 }}>
              Meet the Team Behind <span style={{ color: goldLight }}>SHNOOR Recruitment</span>
            </h2>
            <p style={{ fontSize: 15, color: textSub, maxWidth: 540, margin: "0 auto" }}>
              A passionate team of domain experts, Managing Directors and Recruitment Specialists committed to finding the world's best professionals for your organization.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28, marginBottom: 52 }}>
            {teamMembers.map((member, i) => (
              <div key={i}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.borderColor = goldLight; e.currentTarget.style.boxShadow = `0 20px 50px rgba(200,130,10,0.15)`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = border; e.currentTarget.style.boxShadow = "none"; }}
                style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 20, overflow: "hidden", transition: "all 0.3s" }}>
                <div style={{ position: "relative", height: 260, background: `linear-gradient(180deg, rgba(13,30,56,0.1) 0%, rgba(13,30,56,0.7) 100%)` }}>
                  <img
                    src={member.photo}
                    alt={member.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                  />
                  <div style={{ position: "absolute", top: 16, left: 16, background: `linear-gradient(135deg,${gold},${goldLight})`, borderRadius: 6, padding: "4px 12px" }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: "#0D1E38", textTransform: "uppercase", letterSpacing: "0.1em" }}>{member.dept}</span>
                  </div>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                    style={{ position: "absolute", top: 16, right: 16, width: 34, height: 34, borderRadius: 8, background: "rgba(13,30,56,0.85)", border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
                    <LinkedInIcon size={16} color={goldLight} />
                  </a>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: `linear-gradient(0deg, ${bgCard} 0%, transparent 100%)` }} />
                </div>
                <div style={{ padding: "20px 24px 28px" }}>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: text, marginBottom: 4, fontFamily: "Georgia,serif" }}>{member.name}</h3>
                  <div style={{ fontSize: 12.5, color: goldLight, fontWeight: 600, marginBottom: 12, letterSpacing: "0.04em" }}>{member.title}</div>
                  <p style={{ fontSize: 13, color: textSub, lineHeight: 1.75 }}>{member.bio}</p>
                  <div style={{ marginTop: 16, paddingTop: 14, borderTop: `1px solid ${border}` }}>
                    <a href={`mailto:hr@shnoor.com`}
                      style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: goldLight, textDecoration: "none", fontWeight: 600 }}>
                      <MailIcon size={12} color={goldLight} /> Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ borderRadius: 20, overflow: "hidden", display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 6, height: 280 }}>
            <Img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80" alt="Team collaboration" style={{}} />
            <Img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80" alt="Office work" style={{}} />
            <Img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80" alt="Teamwork" style={{}} />
          </div>
        </div>
      </section>
      <section style={{ background: bgSection, padding: "80px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(24px,3vw,38px)", color: text, fontWeight: 800, marginBottom: 14 }}>
              Our <span style={{ color: goldLight }}>Recruitment Services</span>
            </h2>
            <p style={{ fontSize: 15, color: textSub, maxWidth: 560, margin: "0 auto" }}>
              Comprehensive talent solutions tailored to the unique demands of technology and global trade industries.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 24 }}>
            {services.map((s, i) => (
              <div key={i} style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 16, overflow: "hidden", transition: "all 0.25s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = goldLight; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 12px 36px rgba(200,130,10,0.1)`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                <Img src={s.img} alt={s.title} style={{ height: 180 }} />
                <div style={{ padding: "24px 24px 28px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: goldDim, border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <s.Icon size={20} color={goldLight} />
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: text }}>{s.title}</h3>
                  </div>
                  <p style={{ fontSize: 13.5, color: textSub, lineHeight: 1.8, marginBottom: 18 }}>{s.desc}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {s.features.map((f, j) => (
                      <div key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                        <span style={{ color: goldLight, fontSize: 12, flexShrink: 0, marginTop: 2 }}>✓</span>
                        <span style={{ fontSize: 12.5, color: textSub, lineHeight: 1.6 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: bg, padding: "80px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(22px,2.8vw,36px)", color: text, fontWeight: 800, marginBottom: 14 }}>
                <span style={{ color: goldLight }}>Global Reach,</span><br />Local Expertise
              </h2>
              <p style={{ fontSize: 15, color: textSub, lineHeight: 1.9, marginBottom: 32 }}>
                Our recruiters operate across four major market corridors, with deep knowledge of local talent landscapes, employment regulations, compensation benchmarks, and cultural nuances that drive successful placements.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {regions.map((r, i) => (
                  <div key={i} style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 12, padding: "18px 22px", display: "grid", gridTemplateColumns: "48px 1fr", gap: 16, alignItems: "start" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: goldDim, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{r.flag}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 15, color: text, marginBottom: 4 }}>{r.name}</div>
                      <div style={{ fontSize: 13, color: textSub, lineHeight: 1.65, marginBottom: 6 }}>{r.desc}</div>
                      <div style={{ fontSize: 11.5, color: goldLight, fontWeight: 600 }}>Key roles: {r.roles}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr", gap: 12, height: 500 }}>
              <Img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80" alt="Global" style={{ borderRadius: 14, border: `1px solid ${border}` }} />
              <Img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80" alt="Tech" style={{ borderRadius: 14, border: `1px solid ${border}` }} />
              <Img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" alt="Team" style={{ borderRadius: 14, border: `1px solid ${border}` }} />
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: bgSection, padding: "80px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(24px,3vw,38px)", color: text, fontWeight: 800, marginBottom: 14 }}>
              How We <span style={{ color: goldLight }}>Work</span>
            </h2>
            <p style={{ fontSize: 15, color: textSub, maxWidth: 520, margin: "0 auto" }}>
              A transparent, structured process from requirement brief to candidate onboarding — designed for enterprise speed and precision.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {process.map((s, i) => (
              <div key={i} style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 14, padding: "24px 28px", display: "grid", gridTemplateColumns: "72px 1fr", gap: 24, alignItems: "start" }}>
                <div style={{ width: 72, height: 72, borderRadius: 16, background: `linear-gradient(135deg,${gold},${goldLight})`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontFamily: "Georgia,serif", fontSize: 18, fontWeight: 900, color: "#0D1E38" }}>{s.num}</span>
                </div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: text, marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: textSub, lineHeight: 1.8 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: bg, padding: "80px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(22px,2.8vw,34px)", color: text, fontWeight: 800, marginBottom: 14 }}>
              What Our <span style={{ color: goldLight }}>Partners Say</span>
            </h2>
            <p style={{ fontSize: 15, color: textSub, maxWidth: 480, margin: "0 auto" }}>
              Trusted by HR leaders and hiring managers across four continents.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 22 }}>
            {testimonials.map((t2, i) => (
              <div key={i} style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 16, padding: "28px 26px" }}>
                <div style={{ display: "flex", gap: 4, marginBottom: 18 }}>
                  {Array.from({ length: t2.rating }).map((_, j) => <StarIcon key={j} size={14} color={goldLight} />)}
                </div>
                <p style={{ fontSize: 14, color: textSub, lineHeight: 1.85, marginBottom: 20, fontStyle: "italic" }}>"{t2.text}"</p>
                <div style={{ borderTop: `1px solid ${border}`, paddingTop: 16 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: text }}>{t2.name}</div>
                  <div style={{ fontSize: 12.5, color: textMuted }}>{t2.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: bgSection, padding: "80px 5%", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ width: 72, height: 72, borderRadius: 20, background: goldDim, border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px" }}>
            <BriefcaseIcon size={34} color={goldLight} />
          </div>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(24px,3vw,40px)", color: text, fontWeight: 900, marginBottom: 16 }}>
            Ready to Partner <span style={{ color: goldLight }}>With Us?</span>
          </h2>
          <p style={{ fontSize: 15, color: textSub, lineHeight: 1.9, marginBottom: 36 }}>
            Share your hiring requirements with our team and receive a curated shortlist of pre-screened candidates within 14 business days. Let's build your next great team together.
          </p>
          <div style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 14, padding: "28px 32px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginBottom: 36, textAlign: "center" }}>
            {[
              [<MailIcon size={20} color={goldLight} />, "Email", "hr@shnoor.com"],
              [<GlobeIcon size={20} color={goldLight} />, "Portal", "shnoor.com"],
              [<ClockIcon size={20} color={goldLight} />, "Response Time", "Within 24 hours"],
            ].map(([icon, label, val], i) => (
              <div key={i}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>{icon}</div>
                <div style={{ fontSize: 11, color: textMuted, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 13, color: text, fontWeight: 600 }}>{val}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:hr@shnoor.com"
              style={{ background: `linear-gradient(135deg,${gold},${goldLight})`, color: "#0D1E38", borderRadius: 50, padding: "14px 32px", fontSize: 14, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <MailIcon size={16} color="#0D1E38" /> Send Us Your Requirements
            </a>
            <a href="https://shnoor.com/international-careers" target="_blank" rel="noopener noreferrer"
              style={{ background: "transparent", color: goldLight, border: `1px solid rgba(232,160,32,0.35)`, borderRadius: 50, padding: "14px 32px", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
              Visit Full Portal →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecruitersPage;