import React, { useState } from "react";

const Section = ({ title, children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div style={{ marginBottom: 32, borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: 32 }}>
      <div onClick={() => setOpen(!open)} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", marginBottom: open ? 16 : 0 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: "#FFF", margin: 0 }}>{title}</h2>
        <span style={{ color: "#E8A020", fontSize: 20, fontWeight: 700 }}>{open ? "−" : "+"}</span>
      </div>
      {open && <div style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.9 }}>{children}</div>}
    </div>
  );
};

const PrivacyPolicy = ({ setPage }) => {
  return (
    <div style={{ background: "#060E1C", minHeight: "100vh", padding: "60px 5%" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div onClick={() => setPage("home")} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#E8A020", fontSize: 14, cursor: "pointer", marginBottom: 40, fontWeight: 600 }}>
          ← Back to Home
        </div>
        <div style={{ marginBottom: 52, borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 36 }}>
          <div style={{ fontSize: 12, color: "#E8A020", letterSpacing: "0.24em", textTransform: "uppercase", marginBottom: 14, fontWeight: 700 }}>Legal</div>
          <h1 style={{ fontSize: 38, fontWeight: 800, color: "#FFF", margin: "0 0 16px", fontFamily: "Georgia, serif" }}>Privacy Policy</h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", margin: 0 }}>Last updated: January 1, 2025 &nbsp;·&nbsp; Effective date: January 1, 2025</p>
        </div>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.9, marginBottom: 40, background: "rgba(232,160,32,0.06)", border: "1px solid rgba(232,160,32,0.15)", borderRadius: 12, padding: "20px 24px" }}>
          SHNOOR International LLC ("we", "our", or "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        </p>

        <Section title="1. Information We Collect">
          <p>We may collect the following types of information:</p>
          <ul style={{ paddingLeft: 20, marginTop: 12 }}>
            <li style={{ marginBottom: 10 }}><strong style={{ color: "#FFF" }}>Personal Identification:</strong> Name, email address, phone number, job title, company name.</li>
            <li style={{ marginBottom: 10 }}><strong style={{ color: "#FFF" }}>Usage Data:</strong> IP address, browser type, pages visited, time spent on pages, referring URLs.</li>
            <li style={{ marginBottom: 10 }}><strong style={{ color: "#FFF" }}>Communication Data:</strong> Messages, inquiries, and correspondence you send us.</li>
            <li style={{ marginBottom: 10 }}><strong style={{ color: "#FFF" }}>Professional Data:</strong> Resume, work history, and career information submitted via our career portal.</li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul style={{ paddingLeft: 20, marginTop: 12 }}>
            <li style={{ marginBottom: 10 }}>Provide, operate, and improve our IT services and platforms.</li>
            <li style={{ marginBottom: 10 }}>Respond to inquiries and provide customer support.</li>
            <li style={{ marginBottom: 10 }}>Send transactional and promotional communications (you can opt out at any time).</li>
            <li style={{ marginBottom: 10 }}>Process job applications and recruitment activities.</li>
            <li style={{ marginBottom: 10 }}>Comply with legal obligations and enforce our agreements.</li>
            <li style={{ marginBottom: 10 }}>Analyze usage trends to improve user experience.</li>
          </ul>
        </Section>

        <Section title="3. Sharing of Information">
          <p>We do not sell, trade, or rent your personal information. We may share it with:</p>
          <ul style={{ paddingLeft: 20, marginTop: 12 }}>
            <li style={{ marginBottom: 10 }}><strong style={{ color: "#FFF" }}>Service Providers:</strong> Trusted third parties who assist us in operating our website and services (e.g., hosting, analytics, email).</li>
            <li style={{ marginBottom: 10 }}><strong style={{ color: "#FFF" }}>Business Partners:</strong> With your consent, we may share data with partners to fulfill requested services.</li>
            <li style={{ marginBottom: 10 }}><strong style={{ color: "#FFF" }}>Legal Authorities:</strong> When required by law, court order, or governmental authority.</li>
            <li style={{ marginBottom: 10 }}><strong style={{ color: "#FFF" }}>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
          </ul>
        </Section>

        <Section title="4. Cookies & Tracking Technologies">
          <p>We use cookies and similar tracking technologies to enhance your experience. Types include:</p>
          <ul style={{ paddingLeft: 20, marginTop: 12 }}>
            <li style={{ marginBottom: 10 }}><strong style={{ color: "#FFF" }}>Essential Cookies:</strong> Necessary for the website to function properly.</li>
            <li style={{ marginBottom: 10 }}><strong style={{ color: "#FFF" }}>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</li>
            <li style={{ marginBottom: 10 }}><strong style={{ color: "#FFF" }}>Marketing Cookies:</strong> Used to deliver relevant advertisements.</li>
          </ul>
          <p style={{ marginTop: 12 }}>You can control cookies through your browser settings. Disabling certain cookies may affect website functionality.</p>
        </Section>

        <Section title="5. Data Retention">
          <p>We retain personal information for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, we securely delete or anonymize it.</p>
        </Section>

        <Section title="6. Data Security">
          <p>We implement industry-standard security measures including SSL/TLS encryption, access controls, and regular security audits. However, no method of transmission over the Internet is 100% secure. We encourage you to use strong passwords and notify us immediately of any suspected unauthorized access.</p>
        </Section>

        <Section title="7. Your Rights">
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul style={{ paddingLeft: 20, marginTop: 12 }}>
            <li style={{ marginBottom: 10 }}>Access, correct, or delete your personal data.</li>
            <li style={{ marginBottom: 10 }}>Object to or restrict processing of your data.</li>
            <li style={{ marginBottom: 10 }}>Data portability — receive your data in a structured, machine-readable format.</li>
            <li style={{ marginBottom: 10 }}>Withdraw consent at any time (where processing is based on consent).</li>
          </ul>
          <p style={{ marginTop: 12 }}>To exercise these rights, contact us at <a href="mailto:info@shnoor.com" style={{ color: "#E8A020" }}>info@shnoor.com</a>.</p>
        </Section>

        <Section title="8. International Data Transfers">
          <p>SHNOOR operates globally across the USA, Oman, and East Africa. Your data may be transferred to and processed in countries with different data protection laws. We ensure appropriate safeguards are in place for all such transfers.</p>
        </Section>

        <Section title="9. Children's Privacy">
          <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.</p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated effective date. We encourage you to review this policy periodically.</p>
        </Section>
        <div style={{ background: "linear-gradient(135deg,#0D2144,#152E58)", border: "1px solid rgba(232,160,32,0.2)", borderRadius: 16, padding: "32px", marginTop: 20 }}>
          <h3 style={{ color: "#FFF", fontSize: 18, fontWeight: 700, marginBottom: 10 }}>Questions about this policy?</h3>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 15, marginBottom: 18 }}>Our Data Protection team is here to help.</p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="mailto:info@shnoor.com" style={{ background: "linear-gradient(135deg,#C8820A,#E8A020)", color: "#0D1E38", padding: "12px 24px", borderRadius: 8, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>Email Us</a>
            <a href="tel:+919429694298" style={{ border: "1px solid rgba(232,160,32,0.4)", color: "#E8A020", padding: "12px 24px", borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Call Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;