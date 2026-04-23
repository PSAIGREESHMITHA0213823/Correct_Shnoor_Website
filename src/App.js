
// // import { useState } from "react";
// // import { themes } from "./components/theme";
// // import Navbar from "./components/Navbar";
// // import Footer from "./components/Footer";

// // import PrivacyPolicy    from "./pages/PrivacyPolicy";
// // import TermsOfService   from "./pages/TermsOfService";
// // import CompanyPolicies  from "./pages/CompanyPolicies";

// // import Home from "./pages/Home";
// // import About from "./pages/About";
// // import Services from "./pages/Services";
// // import CloudPage from "./pages/CloudPage";
// // import AIDataPage from "./pages/AIDataPage";
// // import Platforms from "./pages/Platforms";
// // import Careers from "./pages/Careers";
// // import Blog from "./pages/Blog";
// // import Contact from "./pages/Contact";
// // import NetworkManagement from "./pages/NetworkManagement";
// // import HealthCare from "./pages/HealthCare";
// // import BackgroundVerification from "./pages/BackgroundVerification";

// // export default function App() {
// //   const [page, setPage] = useState("home");
// //   const [currentTheme, setCurrentTheme] = useState("dark");
// //   const t = themes[currentTheme];

// //   return (
// //     <div style={{ fontFamily: "'Lato','Helvetica Neue',sans-serif", background: t.bg, color: t.text, minHeight: "100vh" }}>
// //       <style>{`
// //         * { margin: 0; padding: 0; box-sizing: border-box; }
// //         body { margin: 0; }
// //         @keyframes spin { to { transform: rotate(360deg); } }
// //         @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
// //         @media (max-width: 900px) {
// //           .desk-nav { display: none !important; }
// //           .mob-nav  { display: flex !important; }
// //         }
// //         input, select, textarea {
// //           width: 100%;
// //           background: transparent;
// //           border: 1px solid rgba(255,255,255,0.12);
// //           border-radius: 8px;
// //           padding: 11px 14px;
// //           font-size: 14px;
// //           font-family: inherit;
// //           color: inherit;
// //           outline: none;
// //           transition: border-color 0.2s, box-shadow 0.2s;
// //         }
// //         input:focus, select:focus, textarea:focus {
// //           border-color: #C8820A !important;
// //           box-shadow: 0 0 0 3px rgba(200,130,10,0.12);
// //         }
// //         select option { background: #0D1E38; color: #F0F4FA; }
// //         button { font-family: inherit; }
// //         a { color: inherit; }
// //         p { text-align: justify; }
// //       `}</style>

// //       <Navbar page={page} setPage={setPage} t={t} currentTheme={currentTheme} setTheme={setCurrentTheme} />

// //       {page === "home"       && <Home t={t} setPage={setPage} />}
// //       {page === "about"      && <About t={t} setPage={setPage} />}
// //       {page === "services"   && <Services t={t} setPage={setPage} />}
// //       {page === "cloud"      && <CloudPage t={t} setPage={setPage} />}
// //       {page === "ai"         && <AIDataPage t={t} setPage={setPage} />}
// //       {page === "network"    && <NetworkManagement t={t} setPage={setPage} />}
// //       {page === "healthcare" && <HealthCare t={t} setPage={setPage} />}
// //       {page === "bgv"        && <BackgroundVerification t={t} setPage={setPage} />}
// //       {page === "platforms"  && <Platforms t={t} />}
// //       {page === "careers"    && <Careers t={t} setPage={setPage} />}
// //       {page === "blog"       && <Blog t={t} />}
// //       {page === "contact"    && <Contact t={t} />}

// //       {/* ── Legal & Policy Pages ── */}
// //       {page === "privacy"    && <PrivacyPolicy  setPage={setPage} />}
// //       {page === "terms"      && <TermsOfService setPage={setPage} />}
// //       {page === "policies"   && <CompanyPolicies setPage={setPage} />}

// //       <Footer t={t} setPage={setPage} />
// //     </div>
// //   );
// // }


// import { useState } from "react";
// import { themes } from "./components/theme";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import PrivacyPolicy    from "./pages/PrivacyPolicy";
// import TermsOfService   from "./pages/TermsOfService";
// import CompanyPolicies  from "./pages/CompanyPolicies";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import CloudPage from "./pages/CloudPage";
// import AIDataPage from "./pages/AIDataPage";
// import Platforms from "./pages/Platforms";
// import Careers from "./pages/Careers";
// import Blog from "./pages/Blog";
// import Contact from "./pages/Contact";
// import NetworkManagement from "./pages/NetworkManagement";
// import HealthCare from "./pages/HealthCare";
// import BackgroundVerification from "./pages/BackgroundVerification";

// import RecruitersPage from "./pages/RecruitersPage";
// import LatestOpenings from "./pages/LatestOpenings";

// import ScamAwareness from "./pages/ScamAwareness";
// // ── CONFIG — update these ────────────────────────────────────────────────────
// const WHATSAPP_NUMBER  = "919392271152"; // your WhatsApp number with country code
// const WHATSAPP_MESSAGE = "Hello! I'd like to know more about your services.";
// const TEAMS_LINK       = "https://teams.microsoft.com/l/chat/0/0?users=you@yourcompany.com";
// // ─────────────────────────────────────────────────────────────────────────────

// function FloatingButtons() {
//   const [waHovered, setWaHovered] = useState(false);
//   const [tmHovered, setTmHovered] = useState(false);

//   const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

//   const pill = (hovered, bg, shadow) => ({
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     gap: "8px",
//     borderRadius: "50px",
//     padding: "10px 12px",
//     textDecoration: "none",
//     cursor: "pointer",
//     transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
//     whiteSpace: "nowrap",
//     overflow: "hidden",
//     alignSelf: "flex-end",
//     background: bg,
//     boxShadow: shadow,
//   });

//   const label = (hovered) => ({
//     color: "white",
//     fontWeight: 700,
//     fontSize: "13px",
//     maxWidth: hovered ? "120px" : "0px",
//     opacity: hovered ? 1 : 0,
//     transition: "max-width 0.3s ease, opacity 0.25s ease",
//     overflow: "hidden",
//     letterSpacing: "0.3px",
//   });

//   return (
//     <div style={{
//       position: "fixed",
//       bottom: "24px",
//       right: "0px",          /* flush to right edge */
//       zIndex: 9999,
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "flex-end",
//       gap: "12px",
//       paddingRight: "0px",
//     }}>

//       {/* ── Microsoft Teams ── */}
    
//       {/* ── WhatsApp ── */}
//       <a
//         href={waUrl}
//         target="_blank"
//         rel="noopener noreferrer"
//         title="Chat with us on WhatsApp"
//         onMouseEnter={() => setWaHovered(true)}
//         onMouseLeave={() => setWaHovered(false)}
//         style={pill(
//           waHovered,
//           "#25D366",
//           waHovered ? "0 6px 24px rgba(37,211,102,0.6)" : "0 4px 14px rgba(37,211,102,0.4)"
//         )}
//       >
//         <span style={label(waHovered)}>WhatsApp</span>
//         {/* WhatsApp Icon */}
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="white" style={{ flexShrink: 0 }}>
//           <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.84.74 5.51 2.03 7.83L.5 31.5l7.86-2.01A15.45 15.45 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28.18a13.1 13.1 0 01-6.68-1.83l-.48-.28-4.66 1.19 1.23-4.53-.31-.49A13.1 13.1 0 012.82 16C2.82 9.27 8.27 3.82 16 3.82S29.18 9.27 29.18 16 23.73 28.68 16 28.68zm7.2-9.8c-.39-.2-2.32-1.14-2.68-1.27-.36-.13-.62-.2-.88.2s-1.01 1.27-1.24 1.53c-.23.26-.46.29-.85.1-.39-.2-1.65-.61-3.14-1.94-1.16-1.03-1.94-2.31-2.17-2.7-.23-.39-.02-.6.17-.79.18-.18.39-.46.59-.69.2-.23.26-.39.39-.65.13-.26.07-.49-.03-.69-.1-.2-.88-2.13-1.21-2.91-.32-.77-.64-.66-.88-.67l-.75-.01c-.26 0-.69.1-1.05.49-.36.39-1.37 1.34-1.37 3.27s1.4 3.79 1.6 4.05c.2.26 2.76 4.21 6.68 5.91.93.4 1.66.64 2.23.82.94.3 1.79.26 2.46.16.75-.11 2.32-.95 2.65-1.87.33-.92.33-1.7.23-1.87-.1-.16-.36-.26-.75-.46z"/>
//         </svg>
//       </a>

//     </div>
//   );
// }

// export default function App() {
//   const [page, setPage] = useState("home");
//   const [currentTheme, setCurrentTheme] = useState("dark");
//   const t = themes[currentTheme];

//   return (
//     <div style={{ fontFamily: "'Lato','Helvetica Neue',sans-serif", background: t.bg, color: t.text, minHeight: "100vh" }}>
//       <style>{`
//         * { margin: 0; padding: 0; box-sizing: border-box; }
//         body { margin: 0; }
//         @keyframes spin { to { transform: rotate(360deg); } }
//         @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
//         @media (max-width: 900px) {
//           .desk-nav { display: none !important; }
//           .mob-nav  { display: flex !important; }
//         }
//         input, select, textarea {
//           width: 100%;
//           background: transparent;
//           border: 1px solid rgba(255,255,255,0.12);
//           border-radius: 8px;
//           padding: 11px 14px;
//           font-size: 14px;
//           font-family: inherit;
//           color: inherit;
//           outline: none;
//           transition: border-color 0.2s, box-shadow 0.2s;
//         }
//         input:focus, select:focus, textarea:focus {
//           border-color: #C8820A !important;
//           box-shadow: 0 0 0 3px rgba(200,130,10,0.12);
//         }
//         select option { background: #0D1E38; color: #F0F4FA; }
//         button { font-family: inherit; }
//         a { color: inherit; }
//         p { text-align: justify; }
//       `}</style>

//       <Navbar page={page} setPage={setPage} t={t} currentTheme={currentTheme} setTheme={setCurrentTheme} />

//       {page === "home"       && <Home t={t} setPage={setPage} />}
//       {page === "about"      && <About t={t} setPage={setPage} />}
//       {page === "services"   && <Services t={t} setPage={setPage} />}
//       {page === "cloud"      && <CloudPage t={t} setPage={setPage} />}
//       {page === "ai"         && <AIDataPage t={t} setPage={setPage} />}
//       {page === "network"    && <NetworkManagement t={t} setPage={setPage} />}
//       {page === "healthcare" && <HealthCare t={t} setPage={setPage} />}
//       {page === "bgv"        && <BackgroundVerification t={t} setPage={setPage} />}
//       {page === "platforms"  && <Platforms t={t} />}
//       {page === "careers"    && <Careers t={t} setPage={setPage} />}
//       {page === "recruiters" && <RecruitersPage t={t} setPage={setPage} />}
//       {page === "openings"   && <LatestOpenings t={t} setPage={setPage} />}
//       {page === "scam" && <ScamAwareness t={t} setPage={setPage} />}
//       {page === "blog"       && <Blog t={t} />}
//       {page === "contact"    && <Contact t={t} />}

//       {/* ── Legal & Policy Pages ── */}
//       {page === "privacy"    && <PrivacyPolicy  setPage={setPage} />}
//       {page === "terms"      && <TermsOfService setPage={setPage} />}
//       {page === "policies"   && <CompanyPolicies setPage={setPage} />}

//       <Footer t={t} setPage={setPage} />

//       {/* ── Floating Buttons — visible on ALL pages ── */}
//       <FloatingButtons />
//     </div>
//   );
// }


import { useState } from "react";
import { themes } from "./components/theme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import PrivacyPolicy    from "./pages/PrivacyPolicy";
import TermsOfService   from "./pages/TermsOfService";
import CompanyPolicies  from "./pages/CompanyPolicies";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import CloudPage from "./pages/CloudPage";
import AIDataPage from "./pages/AIDataPage";
import Platforms from "./pages/Platforms";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NetworkManagement from "./pages/NetworkManagement";
import HealthCare from "./pages/HealthCare";
import BackgroundVerification from "./pages/BackgroundVerification";

import RecruitersPage from "./pages/RecruitersPage";
import LatestOpenings from "./pages/LatestOpenings";
import ScamAwareness from "./pages/ScamAwareness";

// ── CONFIG — update these ────────────────────────────────────────────────────
const WHATSAPP_NUMBER  = "919392271152"; // your WhatsApp number with country code
const WHATSAPP_MESSAGE = "Hello! I'd like to know more about your services.";
// ─────────────────────────────────────────────────────────────────────────────

function FloatingButtons() {
  const [waHovered, setWaHovered] = useState(false);

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      <style>{`
        .wa-float-btn {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(37, 211, 102, 0.45), 0 2px 6px rgba(0,0,0,0.25);
          text-decoration: none;
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1),
                      box-shadow 0.25s ease;
          cursor: pointer;
        }
        .wa-float-btn:hover {
          transform: scale(1.12);
          box-shadow: 0 8px 28px rgba(37, 211, 102, 0.65), 0 3px 10px rgba(0,0,0,0.3);
        }
        .wa-float-btn:active {
          transform: scale(0.97);
        }
        /* Tooltip */
        .wa-tooltip {
          position: fixed;
          bottom: 38px;
          right: 96px;
          z-index: 9998;
          background: rgba(0,0,0,0.78);
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 20px;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transform: translateX(6px);
          transition: opacity 0.2s ease, transform 0.2s ease;
          letter-spacing: 0.3px;
        }
        .wa-float-btn:hover + .wa-tooltip,
        .wa-tooltip.visible {
          opacity: 1;
          transform: translateX(0);
        }
        @media (max-width: 600px) {
          .wa-float-btn {
            width: 50px;
            height: 50px;
            bottom: 20px;
            right: 18px;
          }
          .wa-tooltip {
            display: none;
          }
        }
      `}</style>

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="wa-float-btn"
        onMouseEnter={() => setWaHovered(true)}
        onMouseLeave={() => setWaHovered(false)}
      >
        {/* Official-style WhatsApp icon SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="32"
          height="32"
          fill="none"
        >
          {/* Bubble shape */}
          <path
            d="M24 4C13.0 4 4 13.0 4 24c0 3.6.97 7.0 2.66 9.93L4 44l10.34-2.62A19.87 19.87 0 0024 44c10.99 0 20-9.01 20-20S34.99 4 24 4z"
            fill="white"
          />
          {/* Phone handset */}
          <path
            d="M33.5 28.8c-.47-.24-2.77-1.37-3.2-1.52-.43-.16-.74-.24-1.05.24-.31.47-1.2 1.52-1.47 1.83-.27.31-.55.35-1.02.12-.47-.24-1.98-.73-3.77-2.33-1.39-1.24-2.33-2.77-2.6-3.24-.27-.47-.03-.72.2-.95.21-.21.47-.55.7-.83.24-.28.31-.47.47-.79.16-.31.08-.59-.04-.83-.12-.24-1.05-2.54-1.44-3.48-.38-.91-.76-.79-1.05-.8l-.9-.02c-.31 0-.82.12-1.25.59-.43.47-1.64 1.6-1.64 3.91s1.68 4.53 1.91 4.85c.24.31 3.31 5.06 8.02 7.1 1.12.48 2 .77 2.68.98 1.13.36 2.15.31 2.96.19.9-.14 2.77-1.13 3.16-2.23.39-1.1.39-2.04.27-2.23-.11-.19-.43-.31-.9-.55z"
            fill="#25D366"
          />
        </svg>
      </a>

      {/* Tooltip sits just beside the button */}
      <span className={`wa-tooltip${waHovered ? " visible" : ""}`}>
        Chat on WhatsApp
      </span>
    </>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [currentTheme, setCurrentTheme] = useState("dark");
  const t = themes[currentTheme];

  return (
    <div style={{ fontFamily: "'Lato','Helvetica Neue',sans-serif", background: t.bg, color: t.text, minHeight: "100vh" }}>
      <style>{`
        /* ── Reset ── */
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        body { margin: 0; }

        /* ── Animations ── */
        @keyframes spin    { to { transform: rotate(360deg); } }
        @keyframes fadeIn  { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

        /* ── Navbar breakpoint ── */
        @media (max-width: 900px) {
          .desk-nav { display: none !important; }
          .mob-nav  { display: flex !important; }
        }

        /* ── Global Mobile Responsiveness ── */

        /* Images */
        img { max-width: 100%; height: auto; display: block; }

        /* Videos & iframes */
        video, iframe { max-width: 100%; }

        /* Tables */
        table { width: 100%; overflow-x: auto; display: block; }

        /* Typography scale-down */
        @media (max-width: 768px) {
          h1 { font-size: clamp(1.6rem, 6vw, 2.4rem) !important; }
          h2 { font-size: clamp(1.3rem, 5vw, 2rem)   !important; }
          h3 { font-size: clamp(1.1rem, 4vw, 1.5rem) !important; }
          p, li { font-size: clamp(0.88rem, 3.5vw, 1rem) !important; }
        }

        /* Containers / sections */
        @media (max-width: 768px) {
          /* Full-width sections */
          section, .section, [class*="section"] {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }

          /* Hero-style large padded areas */
          [style*="padding: 80px"], [style*="padding: 100px"],
          [style*="padding: 120px"], [style*="padding-top: 80px"],
          [style*="padding-top: 100px"] {
            padding-top: 48px !important;
            padding-bottom: 48px !important;
          }

          /* Grid → single column */
          [style*="display: grid"],
          [style*="display:grid"] {
            grid-template-columns: 1fr !important;
          }

          /* Flex rows → column */
          [style*="display: flex"][style*="flex-direction: row"],
          [style*="display:flex"]:not([style*="flex-direction: column"]) {
            flex-wrap: wrap !important;
          }

          /* Cards */
          [style*="border-radius"][style*="background"] {
            padding: 16px !important;
          }

          /* Buttons */
          button, a[style*="border-radius"] {
            font-size: 14px !important;
            padding: 10px 18px !important;
          }

          /* Max-width wrappers */
          [style*="max-width: 1200px"],
          [style*="max-width: 1100px"],
          [style*="max-width: 1000px"],
          [style*="max-width: 900px"] {
            max-width: 100% !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
        }

        @media (max-width: 480px) {
          /* Extra small: tighten even further */
          section, .section, [class*="section"] {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }
          [style*="max-width"] {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }
        }

        /* ── Form Elements ── */
        input, select, textarea {
          width: 100%;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 8px;
          padding: 11px 14px;
          font-size: 14px;
          font-family: inherit;
          color: inherit;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        input:focus, select:focus, textarea:focus {
          border-color: #C8820A !important;
          box-shadow: 0 0 0 3px rgba(200,130,10,0.12);
        }
        select option { background: #0D1E38; color: #F0F4FA; }
        button { font-family: inherit; }
        a { color: inherit; }
        p { text-align: justify; }

        /* ── Scrollbar (desktop) ── */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(200,130,10,0.4); border-radius: 3px; }
      `}</style>

      <Navbar page={page} setPage={setPage} t={t} currentTheme={currentTheme} setTheme={setCurrentTheme} />

      {page === "home"       && <Home t={t} setPage={setPage} />}
      {page === "about"      && <About t={t} setPage={setPage} />}
      {page === "services"   && <Services t={t} setPage={setPage} />}
      {page === "cloud"      && <CloudPage t={t} setPage={setPage} />}
      {page === "ai"         && <AIDataPage t={t} setPage={setPage} />}
      {page === "network"    && <NetworkManagement t={t} setPage={setPage} />}
      {page === "healthcare" && <HealthCare t={t} setPage={setPage} />}
      {page === "bgv"        && <BackgroundVerification t={t} setPage={setPage} />}
      {page === "platforms"  && <Platforms t={t} />}
      {page === "careers"    && <Careers t={t} setPage={setPage} />}
      {page === "recruiters" && <RecruitersPage t={t} setPage={setPage} />}
      {page === "openings"   && <LatestOpenings t={t} setPage={setPage} />}
      {page === "scam"       && <ScamAwareness t={t} setPage={setPage} />}
      {page === "blog"       && <Blog t={t} />}
      {page === "contact"    && <Contact t={t} />}

      {/* ── Legal & Policy Pages ── */}
      {page === "privacy"    && <PrivacyPolicy  setPage={setPage} />}
      {page === "terms"      && <TermsOfService setPage={setPage} />}
      {page === "policies"   && <CompanyPolicies setPage={setPage} />}

      <Footer t={t} setPage={setPage} />

      {/* ── Floating WhatsApp Button — visible on ALL pages ── */}
      <FloatingButtons />
    </div>
  );
}