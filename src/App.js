
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
const WHATSAPP_NUMBER  = "919392271152"; 
const WHATSAPP_MESSAGE = "Hello! I'd like to know more about your services.";

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
      
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="32"
          height="32"
          fill="none"
        >
        
          <path
            d="M24 4C13.0 4 4 13.0 4 24c0 3.6.97 7.0 2.66 9.93L4 44l10.34-2.62A19.87 19.87 0 0024 44c10.99 0 20-9.01 20-20S34.99 4 24 4z"
            fill="white"
          />
        
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

     
      {page === "privacy"    && <PrivacyPolicy  setPage={setPage} />}
      {page === "terms"      && <TermsOfService setPage={setPage} />}
      {page === "policies"   && <CompanyPolicies setPage={setPage} />}

      <Footer t={t} setPage={setPage} />

      
      <FloatingButtons />
    </div>
  );
}