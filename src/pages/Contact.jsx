
import React, { useState } from "react";
const Icon = ({ d, size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);
const MailIcon     = ({ size = 20, color }) => <Icon size={size} color={color} d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6" />;
const PhoneIcon    = ({ size = 20, color }) => <Icon size={size} color={color} d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />;
const MapPinIcon   = ({ size = 20, color }) => <Icon size={size} color={color} d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />;
const ClockIcon    = ({ size = 20, color }) => <Icon size={size} color={color} d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM12 6v6l4 2" />;
const CheckIcon    = ({ size = 20, color }) => <Icon size={size} color={color} d="M20 6L9 17l-5-5" />;
const SendIcon     = ({ size = 20, color }) => <Icon size={size} color={color} d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />;
const LinkedInIcon = ({ size = 20, color }) => <Icon size={size} color={color} d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />;
const InstagramIcon= ({ size = 20, color }) => <Icon size={size} color={color} d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" />;
const WhatsAppIcon = ({ size = 20, color }) => <Icon size={size} color={color} d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />;

const StarIcon     = ({ size = 20, color }) => <Icon size={size} color={color} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />;
const NavigationIcon = ({ size = 20, color }) => <Icon size={size} color={color} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />;
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

const teamContacts = [
  {
    photo: TEAM_PHOTOS.male2,
    name: "Vivek Sir Shnoor",
    title: "Managing Director",
    dept: "Executive",
    email: "vivek@shnoor.com",
    for: "Partnerships & Strategic Enquiries",
  },
  {
    photo: TEAM_PHOTOS.female1,
    name: "Pooja Ma'am",
    title: "Head of Talent Acquisition",
    dept: "HR & Recruitment",
    email: "hr@shnoor.com",
    for: "Recruitment & Staffing",
  },
  {
    photo: TEAM_PHOTOS.male1,
    name: "Lakshman Babu Sir Shnoor",
    title: "IT Recruitment Specialist",
    dept: "IT Consulting",
    email: "lakshmanbabu@shnoor.com",
    for: "IT Roles ,Team Lead & Technical Staffing",
  },
];

const offices = [
  { flag: "🇺🇸", city: "Global Headquarters", addr: "10009 Mount Tabor Road, Odessa, Missouri 64076, USA", img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&q=80" },
  { flag: "🇴🇲", city: "Middle East Regional Hub", addr: "Muscat, Sultanate of Oman", img: "https://static.zawya.com/view/acePublic/alias/contentid/bbc887bc-c02e-455c-844e-b4f0c791735a/186/1210337910.webp?f=3%3A2&q=0.75&w=3840" },
  { flag: "🌍", city: "East Africa (Expanding)", addr: "Kigali, Rwanda — Coming 2026", img: "data:image/jpeg;base64,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" },
];

const contactInfo = [
  { Icon: MailIcon,   label: "General Enquiries",    value: "info@shnoor.com",        href: "mailto:info@shnoor.com" },
  { Icon: MailIcon,   label: "Sales / Procurement",  value: "proc@shnoor.com",        href: "mailto:proc@shnoor.com" },
  { Icon: PhoneIcon,  label: "India — Primary",      value: "+91-9429694298",          href: "tel:+919429694298" },
  { Icon: PhoneIcon,  label: "India — Secondary",    value: "+91-9041914601",          href: "tel:+919041914601" },
  { Icon: ClockIcon,  label: "Business Hours",       value: "Mon–Fri: 10 AM – 7 PM",   href: null },
  { Icon: ClockIcon,  label: "Response Time",        value: "Within 2–4 Business Hours", href: null },
];

const whyUs = [
  "4.6/5 AmbitionBox employer rating",
  "Global presence across 6+ countries",
  "Dedicated account managers for every client",
  "Transparent pricing with no hidden fees",
  "24/7 support for enterprise clients",
  "ISO-aligned delivery processes",
];

const Contact = ({ t }) => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", service: "", budget: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ firstName: "", lastName: "", email: "", phone: "", service: "", budget: "", message: "" });
      setTimeout(() => setSent(false), 6000);
    }, 1200);
  };

  const inputStyle = (name) => ({
    width: "100%",
    background: focused === name ? "rgba(200,130,10,0.05)" : "rgba(255,255,255,0.03)",
    border: `1px solid ${focused === name ? gold : border}`,
    borderRadius: 10,
    padding: "12px 16px",
    fontSize: 14,
    fontFamily: "inherit",
    color: text,
    outline: "none",
    transition: "all 0.2s",
    boxSizing: "border-box",
  });

  const labelStyle = {
    display: "block",
    fontSize: 11,
    fontWeight: 700,
    color: textMuted,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    marginBottom: 8,
  };

  return (
    <div style={{ paddingTop: 80, background: bg }}>
      <section style={{ background: heroBg, padding: "0", position: "relative", overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 480 }}>
        <div style={{ padding: "80px 5% 80px 5%", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", zIndex: 1 }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "radial-gradient(circle,rgba(255,255,255,0.4) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: "rgba(232,160,32,0.15)", border: "1px solid rgba(232,160,32,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 20 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: goldLight, letterSpacing: "0.18em", textTransform: "uppercase" }}>Get In Touch</span>
            </div>
            <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(30px,4vw,56px)", color: "#FFF", fontWeight: 900, lineHeight: 1.1, marginBottom: 18 }}>
              Let's Start a<br /><span style={{ color: goldLight }}>Conversation</span>
            </h1>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.62)", lineHeight: 1.85, maxWidth: 440, marginBottom: 36 }}>
              Whether you're ready to start a project, need expert guidance, or simply want to explore how SHNOOR can help — our team is ready to listen.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="mailto:hr@shnoor.com" style={{ background: `linear-gradient(135deg,${gold},${goldLight})`, color: "#0D1E38", borderRadius: 10, padding: "13px 28px", fontSize: 14, fontWeight: 700, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                <MailIcon size={15} color="#0D1E38" /> Email Our Team
              </a>
              <a href="tel:+919429694298" style={{ background: "rgba(255,255,255,0.08)", color: "#FFF", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 10, padding: "13px 28px", fontSize: 14, fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                <PhoneIcon size={15} color="#FFF" /> Call Us Now
              </a>
            </div>
          </div>
        </div>
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 4, height: "100%", minHeight: 480 }}>
          <Img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&q=80" alt="Team" style={{ gridRow: "1 / 3" }} />
          <Img src="data:image/jpeg;base64,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" alt="Meeting" style={{}} />
          <Img src="https://www.shutterstock.com/image-photo/human-holding-call-center-on-600nw-2422082399.jpg" alt="Collaboration" style={{}} />
        </div>
      </section>
      <section style={{ background: bgSection, padding: "28px 5%", borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: 12 }}>
          {contactInfo.map((c, i) => (
            <div key={i}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = goldLight; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = border; }}
              style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 12, padding: "16px 18px", display: "flex", gap: 12, alignItems: "flex-start", transition: "all 0.2s" }}>
              <div style={{ width: 38, height: 38, borderRadius: 9, background: goldDim, border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <c.Icon size={16} color={goldLight} />
              </div>
              <div>
                <div style={{ fontSize: 10, color: textMuted, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 3, fontWeight: 700 }}>{c.label}</div>
                {c.href ? (
                  <a href={c.href} style={{ fontSize: 13, color: text, fontWeight: 600, textDecoration: "none" }}
                    onMouseEnter={e => e.target.style.color = goldLight}
                    onMouseLeave={e => e.target.style.color = text}>{c.value}</a>
                ) : (
                  <span style={{ fontSize: 13, color: text, fontWeight: 500 }}>{c.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section style={{ background: bg, padding: "72px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: goldDim, border: `1px solid ${border}`, borderRadius: 100, padding: "5px 14px", marginBottom: 16 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: goldLight, letterSpacing: "0.15em", textTransform: "uppercase" }}>Direct Access</span>
            </div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(22px,2.8vw,34px)", color: text, fontWeight: 800, marginBottom: 12 }}>
              Talk to the <span style={{ color: goldLight }}>Right Person</span>
            </h2>
            <p style={{ fontSize: 15, color: textSub, maxWidth: 500, margin: "0 auto" }}>
              Skip the queue. Reach the right team member directly based on your enquiry type.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {teamContacts.map((member, i) => (
              <div key={i}
                onMouseEnter={e => { e.currentTarget.style.borderColor = goldLight; e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = `0 18px 44px rgba(200,130,10,0.13)`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 18, overflow: "hidden", transition: "all 0.28s" }}>
                <div style={{ position: "relative", height: 220 }}>
                  <img
                    src={member.photo}
                    alt={member.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                  />
                  <div style={{ position: "absolute", top: 14, left: 14, background: `linear-gradient(135deg,${gold},${goldLight})`, borderRadius: 6, padding: "3px 10px" }}>
                    <span style={{ fontSize: 9.5, fontWeight: 700, color: "#0D1E38", textTransform: "uppercase", letterSpacing: "0.1em" }}>{member.dept}</span>
                  </div>

                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 70, background: `linear-gradient(0deg, ${bgCard} 0%, transparent 100%)` }} />
                </div>

                <div style={{ padding: "18px 22px 24px" }}>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: text, marginBottom: 3, fontFamily: "Georgia,serif" }}>{member.name}</h3>
                  <div style={{ fontSize: 12.5, color: goldLight, fontWeight: 600, marginBottom: 10 }}>{member.title}</div>
                  <div style={{ background: bgSection, border: `1px solid ${border}`, borderRadius: 8, padding: "9px 12px", marginBottom: 14 }}>
                    <div style={{ fontSize: 10, color: textMuted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 3 }}>For</div>
                    <div style={{ fontSize: 12.5, color: textSub, fontWeight: 500 }}>{member.for}</div>
                  </div>
                  <a href={`mailto:${member.email}`}
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: `linear-gradient(135deg,${gold},${goldLight})`, color: "#0D1E38", borderRadius: 9, padding: "10px", fontSize: 12.5, fontWeight: 700, textDecoration: "none" }}>
                    <MailIcon size={13} color="#0D1E38" /> {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: bgSection, padding: "80px 5%" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.45fr", gap: 60, alignItems: "start" }}>
          <div>
            <div style={{ marginBottom: 36 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: goldLight, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 18 }}>Our Offices</div>
              {offices.map((o, i) => (
                <div key={i}
                  onMouseEnter={e => e.currentTarget.style.borderColor = gold}
                  onMouseLeave={e => e.currentTarget.style.borderColor = border}
                  style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 14, marginBottom: 14, overflow: "hidden", transition: "border-color 0.2s" }}>
                  <Img src={o.img} alt={o.city} style={{ height: 100 }} />
                  <div style={{ padding: "16px 18px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 26, lineHeight: 1 }}>{o.flag}</span>
                    <div>
                      <div style={{ fontSize: 11, color: goldLight, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 4 }}>{o.city}</div>
                      <p style={{ fontSize: 13, color: textSub, lineHeight: 1.65 }}>{o.addr}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginBottom: 32 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: goldLight, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 14 }}>Direct Lines</div>
              {["+91-9429694298", "+91-9041914601"].map((ph, i) => (
                <a key={i} href={`tel:${ph.replace(/-/g,"")}`}
                  style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12, color: textSub, fontSize: 15, fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = goldLight}
                  onMouseLeave={e => e.currentTarget.style.color = textSub}>
                  <div style={{ width: 36, height: 36, borderRadius: 9, background: goldDim, border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", color: goldLight }}>
                    <PhoneIcon size={15} color={goldLight} />
                  </div>
                  {ph}
                </a>
              ))}
            </div>
            <div style={{ marginBottom: 32 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: goldLight, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 14 }}>Connect With Us</div>
              <div style={{ display: "flex", gap: 10 }}>
                {[
                  ["https://linkedin.com/company/shnoor", <LinkedInIcon size={17} color={goldLight} />, "LinkedIn"],
                  ["https://instagram.com/shnoor", <InstagramIcon size={17} color={goldLight} />, "Instagram"],
                  ["https://wa.me/919429694298", <WhatsAppIcon size={17} color={goldLight} />, "WhatsApp"],
                ].map(([href, icon, label], i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                    title={label}
                    style={{ width: 44, height: 44, borderRadius: 10, background: bgCard, border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", transition: "all 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.background = goldDim; e.currentTarget.style.borderColor = gold; }}
                    onMouseLeave={e => { e.currentTarget.style.background = bgCard; e.currentTarget.style.borderColor = border; }}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 20, padding: "48px 44px", boxShadow: "0 8px 40px rgba(0,0,0,0.25)" }}>
            <div style={{ marginBottom: 32 }}>
              <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: goldDim, border: `1px solid ${border}`, borderRadius: 100, padding: "4px 12px", marginBottom: 14 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: goldLight, letterSpacing: "0.15em", textTransform: "uppercase" }}>Direct Message</span>
              </div>
              <h2 style={{ fontFamily: "Georgia,serif", fontSize: 28, fontWeight: 800, color: text, marginBottom: 8 }}>Send Us a Message</h2>
              <p style={{ fontSize: 14, color: textSub, lineHeight: 1.7 }}>Our team responds to all enquiries within 24 business hours. No sales pitch — just genuine expertise.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                {[["firstName","First Name *","John"],["lastName","Last Name *","Smith"]].map(([name,label,placeholder]) => (
                  <div key={name}>
                    <label style={labelStyle}>{label}</label>
                    <input value={form[name]} onChange={e => setForm({...form,[name]:e.target.value})} onFocus={() => setFocused(name)} onBlur={() => setFocused(null)} required placeholder={placeholder} style={inputStyle(name)} />
                  </div>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input type="email" value={form.email} onChange={e => setForm({...form,email:e.target.value})} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} required placeholder="john@company.com" style={inputStyle("email")} />
                </div>
                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <input value={form.phone} onChange={e => setForm({...form,phone:e.target.value})} onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)} placeholder="+1 (555) 000-0000" style={inputStyle("phone")} />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={labelStyle}>Service of Interest</label>
                  <select value={form.service} onChange={e => setForm({...form,service:e.target.value})} onFocus={() => setFocused("service")} onBlur={() => setFocused(null)} style={inputStyle("service")}>
                    <option value="">Select a service...</option>
                    <option>IT Consulting & Staffing</option>
                    <option>Cloud Management (AWS / Azure / GCP)</option>
                    <option>AI & Data Analytics</option>
                    <option>Background Verification</option>
                    <option>Export Management</option>
                    <option>SAP / ERP Implementation</option>
                    <option>HRM / LMS Platform</option>
                    <option>Other / General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Estimated Budget</label>
                  <select value={form.budget} onChange={e => setForm({...form,budget:e.target.value})} onFocus={() => setFocused("budget")} onBlur={() => setFocused(null)} style={inputStyle("budget")}>
                    <option value="">Select budget range...</option>
                    <option>Under $10,000</option>
                    <option>$10,000 – $50,000</option>
                    <option>$50,000 – $150,000</option>
                    <option>$150,000 – $500,000</option>
                    <option>$500,000+</option>
                    <option>Not Sure / Flexible</option>
                  </select>
                </div>
              </div>
              <div style={{ marginBottom: 28 }}>
                <label style={labelStyle}>Message *</label>
                <textarea rows={5} value={form.message} onChange={e => setForm({...form,message:e.target.value})} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} required placeholder="Tell us about your project, goals, or specific requirements..." style={{ ...inputStyle("message"), resize: "vertical", lineHeight: 1.7 }} />
              </div>

              <button type="submit" disabled={loading} style={{ width: "100%", background: loading ? goldDim : `linear-gradient(135deg,${gold},${goldLight})`, color: loading ? goldLight : "#0D1E38", border: `1px solid ${loading ? border : "transparent"}`, borderRadius: 12, padding: "15px", fontSize: 15, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, transition: "all 0.2s", fontFamily: "inherit" }}>
                {loading ? (
                  <><span style={{ width: 18, height: 18, border: `2px solid ${goldLight}30`, borderTopColor: goldLight, borderRadius: "50%", animation: "spin 0.8s linear infinite", display: "inline-block" }} /> Sending your message...</>
                ) : (
                  <>Send Message <SendIcon size={16} color="#0D1E38" /></>
                )}
              </button>

              {sent && (
                <div style={{ marginTop: 16, padding: "16px 20px", background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.25)", borderRadius: 10, display: "flex", alignItems: "center", gap: 12, color: "#10B981" }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(16,185,129,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <CheckIcon size={16} color="#10B981" />
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 2 }}>Message sent successfully!</div>
                    <div style={{ fontSize: 12.5, opacity: 0.85 }}>Our team will respond within 2–4 business hours.</div>
                  </div>
                </div>
              )}
            </form>
            <div style={{ marginTop: 40, background: bgSection, border: `1px solid ${border}`, borderRadius: 16, padding: "28px 26px", textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 12 }}>
                {[1,2,3,4,5].map(n => <StarIcon key={n} size={14} color={goldLight} />)}
                <span style={{ fontSize: 13, color: goldLight, fontWeight: 700, marginLeft: 6 }}>4.6 / 5</span>
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: text, marginBottom: 18 }}>Why Choose SHNOOR?</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, textAlign: "left" }}>
                {whyUs.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <div style={{ width: 20, height: 20, borderRadius: 5, background: goldDim, border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <CheckIcon size={11} color={goldLight} />
                    </div>
                    <span style={{ fontSize: 12.5, color: textSub }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: bg, padding: "72px 5%" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: goldDim, border: `1px solid ${border}`, borderRadius: 100, padding: "5px 14px", marginBottom: 16 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: goldLight, letterSpacing: "0.15em", textTransform: "uppercase" }}>Find Us</span>
            </div>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(22px,2.8vw,34px)", color: text, fontWeight: 800, marginBottom: 12 }}>
              Our <span style={{ color: goldLight }}>Location</span>
            </h2>
            <p style={{ fontSize: 15, color: textSub, maxWidth: 540, margin: "0 auto" }}>
              Visit our global headquarters in Odessa, Missouri — or connect with us at any of our regional offices.
            </p>
          </div>
          <div style={{
            background: bgCard,
            border: `1px solid ${border}`,
            borderRadius: 24,
            overflow: "hidden",
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24841.675949393743!2d-93.98364854620831!3d38.99004492145609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0bfc8c9b6a2a1%3A0x7c5b5a8e6b2e5c4d!2sOdessa%2C%20MO%2064076%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SHNOOR International Headquarters - Odessa, Missouri"
            ></iframe>
            <div style={{
              padding: "24px 28px",
              borderTop: `1px solid ${border}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 16,
            }}>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: goldDim,
                  border: `1px solid ${border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <MapPinIcon size={24} color={goldLight} />
                </div>
                <div>
                  <div style={{ fontSize: 11, color: goldLight, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>
                    Global Headquarters
                  </div>
                  <div style={{ fontSize: 15, color: text, fontWeight: 600 }}>
                    10009 Mount Tabor Road, Odessa, Missouri 64076, USA
                  </div>
                </div>
              </div>
              <a 
                href="https://maps.google.com/?q=10009+Mount+Tabor+Road+Odessa+MO+64076"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: `linear-gradient(135deg,${gold},${goldLight})`,
                  color: "#0D1E38",
                  borderRadius: 30,
                  padding: "10px 24px",
                  fontSize: 13,
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <NavigationIcon size={14} color="#0D1E38" /> Get Directions
              </a>
            </div>
            <div style={{ padding: "20px 28px 28px", borderTop: `1px solid ${border}`, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              <div>
                <div style={{ fontSize: 11, color: goldLight, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12, display: "flex", alignItems: "center", gap: 6 }}>
                  <MapPinIcon size={12} color={goldLight} /> Nearby Landmarks
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    { name: "Blue B Truck Stop" },
                    { name: "El Camino Real" },
                    { name: "Rolling Meadows" },
                    { name: "Christian Church" },
                  ].map((landmark, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: textSub }}>
                      <MapPinIcon size={10} color={textMuted} />
                      <span>{landmark.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: goldLight, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12, display: "flex", alignItems: "center", gap: 6 }}>
                  <NavigationIcon size={12} color={goldLight} /> Major Highways
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    { name: "Interstate 70 (I-70)" },
                    { name: "Route 131" },
                    { name: "N 2nd Street" },
                    { name: "S 2nd Street" },
                  ].map((highway, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: textSub }}>
                      <NavigationIcon size={10} color={textMuted} />
                      <span>{highway.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: goldLight, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12, display: "flex", alignItems: "center", gap: 6 }}>
                  <ClockIcon size={12} color={goldLight} /> Nearby Cities
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    { name: "Kansas City", dist: "45 min" },
                    { name: "Independence", dist: "35 min" },
                    { name: "Blue Springs", dist: "25 min" },
                    { name: "Grain Valley", dist: "15 min" },
                  ].map((city, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: textSub }}>
                      <MapPinIcon size={10} color={textMuted} />
                      <span>{city.name}</span>
                      <span style={{ marginLeft: "auto", fontSize: 11, color: textMuted }}>{city.dist}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 32 }}>
            {[
              { flag: "🇺🇸", city: "Odessa, USA", address: "10009 Mount Tabor Road" },
              { flag: "🇴🇲", city: "Muscat, Oman", address: "Sultanate of Oman" },
              { flag: "🌍", city: "East Africa", address: "Kigali, Rwanda (Coming 2026)" },
            ].map((office, idx) => (
              <div key={idx}
                onMouseEnter={e => { e.currentTarget.style.borderColor = goldLight; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.transform = "translateY(0)"; }}
                style={{
                  background: bgCard,
                  border: `1px solid ${border}`,
                  borderRadius: 14,
                  padding: "20px",
                  textAlign: "center",
                  transition: "all 0.2s",
                  cursor: "pointer",
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 12 }}>{office.flag}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: text, marginBottom: 6 }}>{office.city}</div>
                <div style={{ fontSize: 12, color: textMuted }}>{office.address}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: bgSection, padding: "72px 5%", textAlign: "center" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(22px,2.8vw,34px)", color: text, fontWeight: 800, marginBottom: 12 }}>
            Global Presence, <span style={{ color: goldLight }}>Local Commitment</span>
          </h2>
          <p style={{ fontSize: 15, color: textSub, maxWidth: 580, margin: "0 auto 44px" }}>
            With offices in the USA and Oman, and active operations across GCC, South Asia, Southeast Asia, and East Africa.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16, marginBottom: 48 }}>
            {[
              { region: "North America", flag: "🇺🇸", base: "Odessa, Missouri" },
              { region: "GCC / Middle East", flag: "🇴🇲", base: "Muscat, Oman" },
              { region: "South Asia", flag: "🇮🇳", base: "India Operations" },
              { region: "Southeast Asia", flag: "🇲🇾", base: "Malaysia Trade" },
              { region: "East Africa", flag: "🌍", base: "Rwanda (2026)" },
            ].map((loc, i) => (
              <div key={i} style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 14, padding: "26px 20px", textAlign: "center", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = goldLight; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.transform = "translateY(0)"; }}>
                <div style={{ fontSize: 38, marginBottom: 12 }}>{loc.flag}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: text, marginBottom: 6 }}>{loc.region}</div>
                <div style={{ fontSize: 12.5, color: textMuted }}>{loc.base}</div>
              </div>
            ))}
          </div>
          <div style={{ borderRadius: 20, overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 6, height: 200 }}>
            <Img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80" alt="Team" style={{}} />
            <Img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" alt="Professional" style={{}} />
            <Img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80" alt="Office" style={{}} />
            <Img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80" alt="Collaboration" style={{}} />
          </div>
        </div>
      </section>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

export default Contact;