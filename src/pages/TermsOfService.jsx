
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

const TermsOfService = ({ setPage }) => (
  <div style={{ background: "#060E1C", minHeight: "100vh", padding: "60px 5%" }}>
    <div style={{ maxWidth: 860, margin: "0 auto" }}>
      <div onClick={() => setPage("home")} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#E8A020", fontSize: 14, cursor: "pointer", marginBottom: 40, fontWeight: 600 }}>
        ← Back to Home
      </div>

      <div style={{ marginBottom: 52, borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: 36 }}>
        <div style={{ fontSize: 12, color: "#E8A020", letterSpacing: "0.24em", textTransform: "uppercase", marginBottom: 14, fontWeight: 700 }}>Legal</div>
        <h1 style={{ fontSize: 38, fontWeight: 800, color: "#FFF", margin: "0 0 16px", fontFamily: "Georgia, serif" }}>Terms of Service</h1>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", margin: 0 }}>Last updated: January 1, 2025 · Effective date: January 1, 2025</p>
      </div>

      <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.9, marginBottom: 40, background: "rgba(232,160,32,0.06)", border: "1px solid rgba(232,160,32,0.15)", borderRadius: 12, padding: "20px 24px" }}>
        By accessing or using SHNOOR International LLC's website or services, you agree to be bound by these Terms of Service. Please read them carefully before proceeding.
      </p>

      <Section title="1. Acceptance of Terms">
        <p>By accessing and using the services provided by SHNOOR International LLC ("Company," "we," "us," or "our"), you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.</p>
      </Section>

      <Section title="2. Description of Services">
        <p>SHNOOR International LLC provides the following services:</p>
        <ul style={{ paddingLeft: 20, marginTop: 12 }}>
          <li style={{ marginBottom: 10 }}><strong style={{ color: "#FFF" }}>IT Consulting & Staffing:</strong> Strategic IT talent acquisition and consulting services.</li>
          <li style={{ marginBottom: 10 }}><strong style={{ color: "#FFF" }}>Cloud Management:</strong> AWS, Azure, and GCP architecture, migration, and managed operations.</li>
          <li style={{ marginBottom: 10 }}><strong style={{ color: "#FFF" }}>AI & Data Analytics:</strong> Machine learning, predictive analytics, and business automation.</li>
          <li style={{ marginBottom: 10 }}><strong style={{ color: "#FFF" }}>Export Management:</strong> Cross-border trade facilitation services.</li>
          <li style={{ marginBottom: 10 }}><strong style={{ color: "#FFF" }}>Logistics Management:</strong> End-to-end supply chain and logistics solutions.</li>
          <li style={{ marginBottom: 10 }}><strong style={{ color: "#FFF" }}>Background Verification:</strong> Multi-layer employee and partner screening services.</li>
        </ul>
      </Section>

      <Section title="3. User Obligations">
        <p>When using our services, you agree to:</p>
        <ul style={{ paddingLeft: 20, marginTop: 12 }}>
          <li style={{ marginBottom: 10 }}>Provide accurate, current, and complete information when requested.</li>
          <li style={{ marginBottom: 10 }}>Maintain the confidentiality of any account credentials.</li>
          <li style={{ marginBottom: 10 }}>Use our services only for lawful purposes and in accordance with applicable regulations.</li>
          <li style={{ marginBottom: 10 }}>Not attempt to gain unauthorized access to any portion of our systems.</li>
          <li style={{ marginBottom: 10 }}>Not use our services to transmit harmful, offensive, or unlawful content.</li>
          <li style={{ marginBottom: 10 }}>Comply with all applicable export control laws and trade sanctions.</li>
        </ul>
      </Section>

      <Section title="4. Intellectual Property">
        <p>All content on this website, including but not limited to text, graphics, logos, icons, images, and software, is the property of SHNOOR International LLC and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our prior written consent.</p>
      </Section>

      <Section title="5. Payment Terms">
        <p>For paid services:</p>
        <ul style={{ paddingLeft: 20, marginTop: 12 }}>
          <li style={{ marginBottom: 10 }}>Fees are as agreed upon in individual service agreements or statements of work.</li>
          <li style={{ marginBottom: 10 }}>Payment is due within 30 days of invoice unless otherwise specified.</li>
          <li style={{ marginBottom: 10 }}>Late payments may be subject to a 1.5% monthly interest charge.</li>
          <li style={{ marginBottom: 10 }}>All fees are non-refundable unless explicitly stated otherwise in a service agreement.</li>
        </ul>
      </Section>

      <Section title="6. Limitation of Liability">
        <p>To the maximum extent permitted by applicable law, SHNOOR International LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services, even if we have been advised of the possibility of such damages. Our total aggregate liability shall not exceed the amount paid by you to us in the three months preceding the claim.</p>
      </Section>

      <Section title="7. Indemnification">
        <p>You agree to indemnify, defend, and hold harmless SHNOOR International LLC, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or in any way connected with your use of our services or violation of these Terms.</p>
      </Section>

      <Section title="8. Termination">
        <p>Either party may terminate a service engagement with 30 days written notice. We reserve the right to immediately suspend or terminate access to our services if you breach these Terms of Service or engage in conduct that we reasonably determine to be harmful to our business, reputation, or other users.</p>
      </Section>

      <Section title="9. Governing Law">
        <p>These Terms of Service are governed by the laws of the State of Missouri, United States of America, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the state and federal courts located in Missouri, USA.</p>
      </Section>

      <Section title="10. Changes to Terms">
        <p>We reserve the right to modify these Terms of Service at any time. We will provide reasonable notice of significant changes. Your continued use of our services after changes are posted constitutes acceptance of the updated terms.</p>
      </Section>

      <div style={{ background: "linear-gradient(135deg,#0D2144,#152E58)", border: "1px solid rgba(232,160,32,0.2)", borderRadius: 16, padding: "32px", marginTop: 20 }}>
        <h3 style={{ color: "#FFF", fontSize: 18, fontWeight: 700, marginBottom: 10 }}>Questions about these terms?</h3>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 15, marginBottom: 18 }}>Our legal team is available to clarify any questions.</p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="mailto:info@shnoor.com" style={{ background: "linear-gradient(135deg,#C8820A,#E8A020)", color: "#0D1E38", padding: "12px 24px", borderRadius: 8, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>Email Us</a>
          <a href="tel:+919429694298" style={{ border: "1px solid rgba(232,160,32,0.4)", color: "#E8A020", padding: "12px 24px", borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Call Us</a>
        </div>
      </div>
    </div>
  </div>
);

export default TermsOfService;