import React from "react";

const Icon = ({ d, size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);
const ShieldIcon  = ({ size, color }) => <Icon size={size} color={color} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />;
const AlertIcon   = ({ size, color }) => <Icon size={size} color={color} d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01" />;
const CheckIcon   = ({ size, color }) => <Icon size={size} color={color} d="M20 6L9 17l-5-5" />;
const MailIcon    = ({ size, color }) => <Icon size={size} color={color} d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6" />;
const PhoneIcon   = ({ size, color }) => <Icon size={size} color={color} d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />;
const EyeOffIcon  = ({ size, color }) => <Icon size={size} color={color} d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22" />;
const LockIcon    = ({ size, color }) => <Icon size={size} color={color} d="M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM7 11V7a5 5 0 0 1 10 0v4" />;
const FlagIcon    = ({ size, color }) => <Icon size={size} color={color} d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />;

const scamTypes = [
  { icon: AlertIcon,  color: "#E05555", title: "Fake Job Advertisements",     desc: "Fraudsters post fabricated job listings using SHNOOR International's name on job boards, social media, and messaging apps with attractive but false compensation packages." },
  { icon: MailIcon,   color: "#E05555", title: "Phishing Emails & Fake Offers",desc: "Scammers send official-looking offer letters from personal email IDs (Gmail, Yahoo, Hotmail). Always verify: all SHNOOR communications come from @shnoor.com domains only." },
  { icon: PhoneIcon,  color: "#E05555", title: "WhatsApp / Messaging Scams",   desc: "Fraudulent individuals contact candidates via WhatsApp or Telegram claiming to be SHNOOR HR personnel and requesting fees for 'processing', 'visa', or 'documentation'." },
  { icon: LockIcon,   color: "#E05555", title: "Fake Websites",                desc: "Cloned or spoofed websites impersonating SHNOOR International may look identical to our official site. Always verify you are on shnoor.com before submitting any information." },
  { icon: EyeOffIcon, color: "#E05555", title: "Advance-Fee Fraud",            desc: "Any recruiter demanding advance fees for interviews, placement, or onboarding is engaging in fraud. SHNOOR International does not charge job seekers any fees — ever." },
];

const warningSignals = [
  "Requests for money, deposits, or processing fees in exchange for a job",
  "Unofficial communication from personal email accounts instead of @shnoor.com",
  "Poorly written offer letters with suspicious formatting, grammar, or spelling errors",
  "Promises of guaranteed jobs without proper interviews or skill assessments",
  "Fake websites or social media profiles claiming to represent SHNOOR International",
  "Requests for sensitive personal or financial information early in the process",
  "Interview invitations from unknown personal phone numbers without company verification",
  "Job offers that seem too good to be true — they usually are",
];

const safetySteps = [
  { num: "01", title: "Verify the Domain",        desc: "All official SHNOOR emails come from @shnoor.com. Any other domain is unauthorized. Check the sender address carefully before responding." },
  { num: "02", title: "Never Pay Any Fees",        desc: "SHNOOR International never charges candidates any money for applications, interviews, visa processing, or placements. Zero. Always." },
  { num: "03", title: "Confirm via Official Channels", desc: "If in doubt about a job offer, contact hr@shnoor.com directly or call our official helpline before taking any action." },
  { num: "04", title: "Protect Your Identity",    desc: "Do not share Aadhaar, passport, bank account details, or government IDs with anyone claiming to be a SHNOOR recruiter unless formally onboarded." },
  { num: "05", title: "Report Suspicious Activity", desc: "If you encounter any fraudulent activity using SHNOOR's name, report it to hr@shnoor.com immediately. Your report helps protect other job seekers." },
];

const ScamAwareness = ({ t, setPage }) => {
  return (
    <div style={{ paddingTop: 96, background: t.bg }}>
      <section style={{ background: `linear-gradient(135deg,rgba(180,20,20,0.15) 0%,${t.heroBg} 100%)`, padding: "72px 5% 64px", borderBottom: "1px solid rgba(220,50,50,0.2)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ width: 80, height: 80, borderRadius: 20, background: "rgba(220,50,50,0.15)", border: "2px solid rgba(220,50,50,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px" }}>
            <ShieldIcon size={40} color="#E05555" />
          </div>
          <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: "rgba(220,50,50,0.1)", border: "1px solid rgba(220,50,50,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 18 }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: "#E05555", letterSpacing: "0.18em", textTransform: "uppercase" }}>Important Notice</span>
          </div>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(28px,4vw,48px)", color: "#FFF", fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}>
            Recruitment Scams<br /><span style={{ color: "#E05555" }}>Awareness Guide</span>
          </h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.9, maxWidth: 620, margin: "0 auto" }}>
            SHNOOR International is committed to maintaining the highest standards of transparency and ethical practices. We urge all job seekers to read this guide carefully to protect themselves from fraudulent recruitment activity.
          </p>
        </div>
      </section>
      <section style={{ background: t.bgSection, padding: "72px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
            <div>
              <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(22px,2.5vw,32px)", color: t.text, fontWeight: 800, marginBottom: 18 }}>
                What Are <span style={{ color: "#E05555" }}>Recruitment Scams?</span>
              </h2>
              <p style={{ fontSize: 15, color: t.textSub, lineHeight: 1.9, marginBottom: 18 }}>
                Recruitment scams involve fraudulent job advertisements, fake offer letters, or demands for money under the guise of employment opportunities. Scammers may use emails, fake websites, social media platforms, or messaging apps to target job seekers by pretending to represent SHNOOR International.
              </p>
              <p style={{ fontSize: 15, color: t.textSub, lineHeight: 1.9, marginBottom: 24 }}>
                These fraudsters exploit the credibility of reputable companies to deceive vulnerable job seekers — often targeting individuals desperately seeking employment. Their tactics evolve constantly, but the warning signs remain consistent.
              </p>
              <div style={{ background: "rgba(220,50,50,0.08)", border: "1px solid rgba(220,50,50,0.25)", borderRadius: 12, padding: "20px 24px" }}>
                <p style={{ fontSize: 14, fontWeight: 700, color: "#E05555", marginBottom: 8 }}>⚠️ Official SHNOOR Statement</p>
                <p style={{ fontSize: 14, color: t.textSub, lineHeight: 1.75 }}>
                  <strong style={{ color: t.text }}>SHNOOR International NEVER charges job seekers any money</strong> for interviews, job applications, visa processing, or placements under any circumstances.
                </p>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: t.text, marginBottom: 18, textTransform: "uppercase", letterSpacing: "0.08em" }}>⚑ Warning Signals</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {warningSignals.map((w, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 10, padding: "14px 16px" }}>
                    <span style={{ color: "#E05555", fontWeight: 900, fontSize: 14, flexShrink: 0 }}>✕</span>
                    <span style={{ fontSize: 13.5, color: t.textSub, lineHeight: 1.65 }}>{w}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: t.bg, padding: "72px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(22px,2.5vw,32px)", color: t.text, fontWeight: 800, marginBottom: 12 }}>
            Common Scam <span style={{ color: "#E05555" }}>Types</span>
          </h2>
          <p style={{ fontSize: 14.5, color: t.textSub, marginBottom: 36, maxWidth: 580 }}>
            Fraudsters use several tactics to impersonate SHNOOR International. Knowing these patterns is your best defense.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20 }}>
            {scamTypes.map((s, i) => (
              <div key={i} style={{ background: t.bgCard, border: "1px solid rgba(220,50,50,0.15)", borderRadius: 14, padding: "28px 26px" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(220,50,50,0.1)", border: "1px solid rgba(220,50,50,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <s.icon size={22} color={s.color} />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: t.text, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 13.5, color: t.textSub, lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: t.bgSection, padding: "72px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(22px,2.5vw,32px)", color: t.text, fontWeight: 800, marginBottom: 12 }}>
            How <span style={{ color: t.goldLight }}>SHNOOR Protects</span> You
          </h2>
          <p style={{ fontSize: 14.5, color: t.textSub, marginBottom: 40, maxWidth: 580 }}>
            We have established strict protocols to ensure every genuine SHNOOR recruitment is transparent, fee-free, and verifiable.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18, marginBottom: 48 }}>
            {[
              "All recruitment is conducted exclusively through our official website and verified @shnoor.com email addresses.",
              "Offer letters are issued only on official SHNOOR letterhead and signed by authorized senior personnel.",
              "We encourage all applicants to verify the authenticity of any job offer by contacting our HR team directly.",
              "We never use third-party payment portals, personal bank accounts, or cryptocurrency for any recruitment-related transaction.",
            ].map((point, i) => (
              <div key={i} style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 12, padding: "22px 20px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                <CheckIcon size={18} color="#4CAF50" style={{ flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontSize: 13.5, color: t.textSub, lineHeight: 1.75 }}>{point}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(20px,2.3vw,28px)", color: t.text, fontWeight: 800, marginBottom: 32 }}>
            5 Steps to <span style={{ color: t.goldLight }}>Stay Safe</span>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {safetySteps.map((s, i) => (
              <div key={i} style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 12, padding: "22px 26px", display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: t.goldDim, border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontFamily: "Georgia,serif", fontWeight: 900, fontSize: 13, color: t.goldLight }}>{s.num}</span>
                </div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: t.text, marginBottom: 6 }}>{s.title}</h3>
                  <p style={{ fontSize: 13.5, color: t.textSub, lineHeight: 1.75 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: `linear-gradient(135deg,rgba(180,20,20,0.12),${t.bg})`, borderTop: "1px solid rgba(220,50,50,0.2)", padding: "72px 5%" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <div style={{ width: 64, height: 64, borderRadius: 16, background: "rgba(220,50,50,0.12)", border: "1px solid rgba(220,50,50,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
            <FlagIcon size={30} color="#E05555" />
          </div>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(22px,2.8vw,34px)", color: t.text, fontWeight: 900, marginBottom: 16 }}>
            Report <span style={{ color: "#E05555" }}>Fraud</span>
          </h2>
          <p style={{ fontSize: 15, color: t.textSub, lineHeight: 1.9, marginBottom: 32 }}>
            If you suspect a recruitment scam using the name of SHNOOR International, please contact us immediately. Together, we can fight recruitment fraud and ensure a safe, transparent job search experience for all.
          </p>
          <div style={{ background: t.bgCard, border: "1px solid rgba(220,50,50,0.2)", borderRadius: 14, padding: "28px 32px", marginBottom: 32 }}>
            <div style={{ fontSize: 13, color: t.textMuted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Official Fraud Reporting Channel</div>
            <a href="mailto:hr@shnoor.com" style={{ fontFamily: "Georgia,serif", fontSize: 26, fontWeight: 900, color: "#E8A020", textDecoration: "none" }}>hr@shnoor.com</a>
            <p style={{ fontSize: 13, color: t.textMuted, marginTop: 10 }}>Our HR team reviews all fraud reports within 24 hours.</p>
          </div>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:hr@shnoor.com" style={{ background: "linear-gradient(135deg,#b91c1c,#dc2626)", color: "#fff", border: "none", borderRadius: 10, padding: "13px 28px", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
              Report a Scam
            </a>
            <button onClick={() => setPage("careers")} style={{ background: "transparent", color: t.goldLight, border: `1px solid rgba(232,160,32,0.35)`, borderRadius: 10, padding: "13px 28px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
              ← Back to Careers
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScamAwareness;