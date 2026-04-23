
import React, { useState } from "react";

const Icon = ({ d, size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

const SearchIcon = ({ size, color }) => <Icon size={size} color={color} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />;
const MapPinIcon = ({ size, color }) => <Icon size={size} color={color} d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />;
const BriefcaseIcon = ({ size, color }) => <Icon size={size} color={color} d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />;
const ClockIcon = ({ size, color }) => <Icon size={size} color={color} d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM12 6v6l4 2" />;
const ArrowLeftIcon = ({ size, color }) => <Icon size={size} color={color} d="M19 12H5M12 5l-7 7 7 7" />;
const CheckIcon = ({ size, color }) => <Icon size={size} color={color} d="M20 6L9 17l-5-5" />;
const StarIcon = ({ size, color }) => <Icon size={size} color={color} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />;
const TrendingIcon = ({ size, color }) => <Icon size={size} color={color} d="M23 6l-9.5 9.5-5-5L1 18M17 6h6v6" />;
const UsersIcon = ({ size, color }) => <Icon size={size} color={color} d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />;
const ShieldIcon = ({ size, color }) => <Icon size={size} color={color} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />;

const APPLY_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdZ2LKiQjrPWlwtx7fjEwA28wWBj3GGnj5DFFI3dJzKEy08XQ/viewform";

const jobs = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    dept: "IT Consulting",
    location: "Missouri, USA",
    type: "Full-time",
    salary: "$120k – $160k",
    tags: ["React", "Node.js", "AWS"],
    experience: "5+ years",
    posted: "2 days ago",
    urgent: true,
    description: "We are seeking a highly skilled Senior Full Stack Developer to join our IT Consulting team in Missouri. You will architect and build enterprise-grade web applications for Fortune 500 clients across North America.",
    responsibilities: [
      "Design and develop scalable full-stack web applications using React and Node.js",
      "Collaborate with cross-functional teams to deliver complex enterprise solutions",
      "Mentor junior developers and conduct code reviews",
      "Deploy and manage cloud infrastructure on AWS",
      "Integrate third-party APIs and microservices",
    ],
    requirements: [
      "5+ years of professional full-stack development experience",
      "Strong proficiency in React, Node.js, and AWS services",
      "Experience with PostgreSQL or MongoDB databases",
      "Excellent problem-solving and communication skills",
      "Experience with agile/scrum methodologies",
    ],
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
  },
  {
    id: 2,
    title: "Cloud Solutions Architect",
    dept: "Cloud Services",
    location: "Remote (Global)",
    type: "Full-time",
    salary: "$140k – $185k",
    tags: ["AWS", "Azure", "Terraform"],
    experience: "7+ years",
    posted: "3 days ago",
    urgent: false,
    description: "Join our Cloud Services division as a Solutions Architect and design world-class cloud infrastructure for our global client base spanning North America, GCC, and South Asia.",
    responsibilities: [
      "Architect multi-cloud solutions across AWS, Azure, and GCP platforms",
      "Lead cloud migration projects from on-premise to cloud environments",
      "Design security frameworks and compliance architectures",
      "Provide technical guidance and cost optimization strategies",
      "Build Infrastructure as Code using Terraform and CloudFormation",
    ],
    requirements: [
      "7+ years of cloud architecture experience",
      "AWS Solutions Architect Professional or Azure Solutions Architect certification",
      "Deep expertise in Terraform, CI/CD, and DevSecOps",
      "Experience managing multi-region, high-availability systems",
      "Strong knowledge of cloud security best practices",
    ],
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
  },
  {
    id: 3,
    title: "SAP ABAP Consultant",
    dept: "Enterprise Solutions",
    location: "Hybrid",
    type: "Full-time",
    salary: "$130k – $165k",
    tags: ["SAP ABAP", "SAP MM", "ERP"],
    experience: "4+ years",
    posted: "5 days ago",
    urgent: false,
    description: "We are looking for an experienced SAP ABAP Consultant to join our Enterprise Solutions team and deliver high-quality ERP customizations for large-scale enterprise clients.",
    responsibilities: [
      "Develop and maintain SAP ABAP programs, reports, and interfaces",
      "Design and implement SAP enhancements, user exits, and BAdIs",
      "Collaborate with functional consultants for end-to-end solution delivery",
      "Perform SAP system upgrades and migration projects",
      "Document technical specifications and provide end-user training",
    ],
    requirements: [
      "4+ years of SAP ABAP development experience",
      "Expertise in SAP MM, SD, or FI modules",
      "Experience with SAP S/4HANA and Fiori",
      "Strong understanding of SAP NetWeaver architecture",
      "SAP certification preferred",
    ],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    id: 4,
    title: "AI / ML Engineer",
    dept: "AI & Data",
    location: "Remote",
    type: "Full-time",
    salary: "$130k – $175k",
    tags: ["Python", "TensorFlow", "MLOps"],
    experience: "4+ years",
    posted: "1 week ago",
    urgent: true,
    description: "Shape the future of intelligent systems at SHNOOR. As an AI/ML Engineer, you'll design, build, and deploy machine learning models that power next-generation enterprise solutions.",
    responsibilities: [
      "Design and train ML models for NLP, computer vision, and predictive analytics",
      "Build and maintain MLOps pipelines for model training and deployment",
      "Collaborate with data engineers to ensure high-quality data pipelines",
      "Research and implement state-of-the-art AI techniques",
      "Optimize model performance for production environments",
    ],
    requirements: [
      "4+ years of hands-on ML/AI engineering experience",
      "Proficiency in Python, TensorFlow or PyTorch",
      "Experience with MLflow, Kubeflow, or similar MLOps tools",
      "Strong foundation in statistics and mathematics",
      "Master's or PhD in CS, Statistics, or related field preferred",
    ],
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
  },
  {
    id: 5,
    title: "Data Engineer",
    dept: "AI & Data",
    location: "Remote",
    type: "Full-time",
    salary: "$115k – $155k",
    tags: ["Spark", "Airflow", "dbt", "Snowflake"],
    experience: "3+ years",
    posted: "1 week ago",
    urgent: false,
    description: "Build the data backbone of our enterprise clients. As a Data Engineer, you will design and maintain scalable data pipelines that enable data-driven decision-making across global organizations.",
    responsibilities: [
      "Design and maintain large-scale ETL/ELT data pipelines",
      "Build and optimize data warehouses on Snowflake or Redshift",
      "Develop dbt models for data transformation",
      "Orchestrate workflows using Apache Airflow",
      "Ensure data quality, governance, and security compliance",
    ],
    requirements: [
      "3+ years of data engineering experience",
      "Strong skills in Python, SQL, and Apache Spark",
      "Experience with Airflow, dbt, and Snowflake",
      "Familiarity with cloud data platforms (AWS, GCP, or Azure)",
      "Knowledge of data modeling and warehouse design",
    ],
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
  },
  {
    id: 6,
    title: "IT Project Manager",
    dept: "Staffing Division",
    location: "Missouri, USA",
    type: "Full-time",
    salary: "$110k – $150k",
    tags: ["Agile", "Scrum", "PMP"],
    experience: "5+ years",
    posted: "10 days ago",
    urgent: false,
    description: "Lead enterprise IT projects from initiation to delivery. Our IT Project Managers drive complex, multi-team initiatives for top-tier clients while ensuring on-time, on-budget excellence.",
    responsibilities: [
      "Manage end-to-end IT project delivery across multiple workstreams",
      "Facilitate daily scrums, sprint planning, and retrospectives",
      "Manage stakeholder communications and executive reporting",
      "Identify and mitigate project risks proactively",
      "Coordinate with technical teams and business stakeholders",
    ],
    requirements: [
      "5+ years of IT project management experience",
      "PMP certification required; Scrum Master certification preferred",
      "Experience managing projects with budgets over $1M",
      "Proficiency in Jira, Confluence, and MS Project",
      "Strong leadership and communication skills",
    ],
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
  },
  {
    id: 7,
    title: "DevOps / Cloud Engineer",
    dept: "Product Development",
    location: "Remote",
    type: "Full-time",
    salary: "$125k – $168k",
    tags: ["CI/CD", "Docker", "Kubernetes"],
    experience: "4+ years",
    posted: "2 weeks ago",
    urgent: false,
    description: "Accelerate our clients' software delivery with world-class DevOps practices. You'll build and maintain CI/CD pipelines, container orchestration, and cloud infrastructure automation.",
    responsibilities: [
      "Design and maintain CI/CD pipelines using Jenkins, GitHub Actions, or GitLab",
      "Manage Kubernetes clusters and Docker containerization",
      "Implement infrastructure automation with Ansible and Terraform",
      "Monitor system performance and ensure high availability",
      "Drive DevSecOps best practices across development teams",
    ],
    requirements: [
      "4+ years of DevOps/Cloud engineering experience",
      "Expertise in Docker, Kubernetes, and container orchestration",
      "Experience with CI/CD tools and pipeline automation",
      "AWS, Azure, or GCP certification preferred",
      "Strong knowledge of Linux systems administration",
    ],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv9vSkSDUDmOH1L0_CziL9Pv6wkc1irzIzBQ&s",
  },
  {
    id: 8,
    title: "Trade & Logistics Coordinator",
    dept: "Export Operations",
    location: "Oman / India",
    type: "Full-time",
    salary: "Competitive",
    tags: ["Export", "Logistics", "GCC"],
    experience: "3+ years",
    posted: "2 weeks ago",
    urgent: false,
    description: "Join our Export Operations team to coordinate international trade flows between Oman, India, and East Africa. You will manage end-to-end logistics for commodities and goods across GCC markets.",
    responsibilities: [
      "Coordinate import/export documentation and customs clearance",
      "Liaise with freight forwarders, shipping lines, and logistics partners",
      "Monitor and track shipments across GCC and South Asia corridors",
      "Ensure compliance with international trade regulations",
      "Manage supplier and client relationships for smooth operations",
    ],
    requirements: [
      "3+ years of experience in trade & logistics coordination",
      "Knowledge of GCC import/export regulations and Incoterms",
      "Experience with ERP or trade management systems",
      "Strong English and Arabic communication skills preferred",
      "Based in Oman or India with willingness to travel",
    ],
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  },
  {
    id: 9,
    title: "Cybersecurity Analyst",
    dept: "IT Security",
    location: "Hybrid",
    type: "Full-time",
    salary: "$110k – $148k",
    tags: ["SIEM", "Pen Testing", "ISO 27001"],
    experience: "4+ years",
    posted: "3 weeks ago",
    urgent: false,
    description: "Defend enterprise clients against evolving cyber threats. As a Cybersecurity Analyst at SHNOOR, you'll conduct threat assessments, manage SIEM platforms, and implement ISO 27001 compliance frameworks.",
    responsibilities: [
      "Monitor and analyze security events using SIEM platforms",
      "Conduct vulnerability assessments and penetration testing",
      "Implement and maintain ISO 27001 compliance frameworks",
      "Respond to security incidents and conduct root cause analysis",
      "Develop security policies and training programs",
    ],
    requirements: [
      "4+ years of cybersecurity analysis experience",
      "Proficiency in SIEM tools (Splunk, QRadar, or Microsoft Sentinel)",
      "CEH, CISSP, or equivalent certification required",
      "Experience with ISO 27001 or NIST frameworks",
      "Strong knowledge of network security and cloud security",
    ],
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
  },
];

const processSteps = [
  { num: "01", title: "Apply Online", desc: "Submit your application via our official Google Form. No fees, no intermediaries — just your talent and our secure portal.", icon: SearchIcon },
  { num: "02", title: "Initial Screening", desc: "Our HR team reviews your application within 3-5 business days and reaches out via your @shnoor.com verified contact.", icon: UsersIcon },
  { num: "03", title: "Technical Assessment", desc: "Role-specific technical screening or assessment to evaluate your skills. Conducted fairly and transparently.", icon: TrendingIcon },
  { num: "04", title: "Final Interview", desc: "Meet the team — a panel interview with department leads and senior management to assess cultural and professional fit.", icon: StarIcon },
  { num: "05", title: "Offer & Onboarding", desc: "Receive your official offer letter from @shnoor.com, and get onboarded with full support from our People team.", icon: CheckIcon },
];

const stats = [
  { num: "200+", label: "PLACEMENTS MADE" },
  { num: "9+", label: "COUNTRIES SERVED" },
  { num: "4.6/5", label: "EMPLOYEE RATING" },
  { num: "0", label: "FEES CHARGED" },
];

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

const LatestOpenings = ({ t, setPage }) => {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  
  const depts = ["All", ...Array.from(new Set(jobs.map(j => j.dept)))];
  
  const filtered = jobs.filter(job => {
    const matchesDept = filter === "All" || job.dept === filter;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesDept && matchesSearch;
  });

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

  if (selected) {
    const job = jobs.find(j => j.id === selected);
    return (
      <div style={{ paddingTop: 96, background: bg, minHeight: "100vh" }}>
        <section style={{ background: heroBg, padding: "60px 5% 0", borderBottom: `1px solid ${border}` }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <button onClick={() => setSelected(null)}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.07)", border: `1px solid ${border}`, borderRadius: 8, padding: "9px 18px", color: textSub, fontSize: 13, cursor: "pointer", marginBottom: 32 }}>
              <ArrowLeftIcon size={16} color={textSub} /> Back to All Jobs
            </button>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 48, alignItems: "end" }}>
              <div style={{ paddingBottom: 48 }}>
                {job.urgent && (
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(220,50,50,0.15)", border: "1px solid rgba(220,50,50,0.3)", borderRadius: 100, padding: "4px 12px", marginBottom: 16 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#E05555" }} />
                    <span style={{ fontSize: 10, fontWeight: 700, color: "#E05555", letterSpacing: "0.15em", textTransform: "uppercase" }}>Urgent Hiring</span>
                  </div>
                )}
                <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(28px,4vw,46px)", color: text, fontWeight: 900, lineHeight: 1.1, marginBottom: 20 }}>{job.title}</h1>
                <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 24 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13.5, color: textSub }}><BriefcaseIcon size={14} color={goldLight} /> {job.dept}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13.5, color: textSub }}><MapPinIcon size={14} color={goldLight} /> {job.location}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13.5, color: textSub }}><ClockIcon size={14} color={goldLight} /> {job.type}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13.5, color: textSub }}><TrendingIcon size={14} color={goldLight} /> {job.experience}</span>
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
                  {job.tags.map(tag => (
                    <span key={tag} style={{ background: goldDim, border: `1px solid ${border}`, borderRadius: 5, padding: "4px 10px", fontSize: 11, color: goldLight, fontWeight: 700 }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
                  <a href={APPLY_URL} target="_blank" rel="noopener noreferrer"
                    style={{ background: `linear-gradient(135deg,${gold},${goldLight})`, color: "#0D1E38", borderRadius: 10, padding: "14px 32px", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
                    Apply for This Role →
                  </a>
                  <div>
                    <div style={{ fontSize: 11, color: textMuted, textTransform: "uppercase", letterSpacing: "0.1em" }}>Salary Range</div>
                    <div style={{ fontSize: 22, fontWeight: 900, color: goldLight, fontFamily: "Georgia,serif" }}>{job.salary}</div>
                  </div>
                </div>
              </div>
              <Img src={job.img} alt={job.title} style={{ height: 340, borderRadius: "16px 16px 0 0", border: `1px solid ${border}` }} />
            </div>
          </div>
        </section>
        <section style={{ background: bgSection, padding: "64px 5%" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 320px", gap: 48, alignItems: "start" }}>
            <div>
              <div style={{ marginBottom: 40 }}>
                <h2 style={{ fontFamily: "Georgia,serif", fontSize: 22, color: text, fontWeight: 800, marginBottom: 14 }}>About This Role</h2>
                <p style={{ fontSize: 15, color: textSub, lineHeight: 1.9 }}>{job.description}</p>
              </div>
              <div style={{ marginBottom: 40 }}>
                <h2 style={{ fontFamily: "Georgia,serif", fontSize: 22, color: text, fontWeight: 800, marginBottom: 18 }}>Key Responsibilities</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {job.responsibilities.map((r, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", background: bgCard, border: `1px solid ${border}`, borderRadius: 10, padding: "14px 18px" }}>
                      <CheckIcon size={16} color={goldLight} />
                      <span style={{ fontSize: 14, color: textSub, lineHeight: 1.7 }}>{r}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 style={{ fontFamily: "Georgia,serif", fontSize: 22, color: text, fontWeight: 800, marginBottom: 18 }}>Requirements</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {job.requirements.map((r, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", background: bgCard, border: `1px solid ${border}`, borderRadius: 10, padding: "14px 18px" }}>
                      <span style={{ color: goldLight, fontWeight: 900, flexShrink: 0 }}>→</span>
                      <span style={{ fontSize: 14, color: textSub, lineHeight: 1.7 }}>{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ position: "sticky", top: 112 }}>
              <div style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 16, padding: "28px 24px", marginBottom: 20 }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: text, marginBottom: 18 }}>Job Summary</h3>
                {[
                  ["Department", job.dept],
                  ["Location", job.location],
                  ["Job Type", job.type],
                  ["Experience", job.experience],
                  ["Salary", job.salary],
                  ["Posted", job.posted],
                ].map(([label, val]) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${border}`, paddingBottom: 10, marginBottom: 10 }}>
                    <span style={{ fontSize: 12.5, color: textMuted }}>{label}</span>
                    <span style={{ fontSize: 13, color: text, fontWeight: 600 }}>{val}</span>
                  </div>
                ))}
                <a href={APPLY_URL} target="_blank" rel="noopener noreferrer"
                  style={{ display: "block", width: "100%", background: `linear-gradient(135deg,${gold},${goldLight})`, color: "#0D1E38", borderRadius: 9, padding: "13px", fontSize: 14, fontWeight: 700, textDecoration: "none", textAlign: "center", marginTop: 20 }}>
                  Apply Now
                </a>
              </div>
              <div style={{ background: "rgba(220,50,50,0.06)", border: "1px solid rgba(220,50,50,0.15)", borderRadius: 12, padding: "18px 20px" }}>
                <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <ShieldIcon size={16} color="#E05555" style={{ flexShrink: 0, marginTop: 2 }} />
                  <p style={{ fontSize: 12.5, color: textSub, lineHeight: 1.7 }}>
                    <strong style={{ color: "#E05555" }}>No Fees.</strong> SHNOOR International never charges candidates money for applications or placements. Report any payment request to hr@shnoor.com.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

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
              opacity: 0.15,
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
                  🔥 We're Hiring
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
                Latest <span style={{ color: goldLight }}>Job Openings</span>
              </h1>
              
              <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, maxWidth: 500, marginBottom: 40 }}>
                Explore all active, verified job openings at SHNOOR International LLC. Apply directly — no fees, no intermediaries.
              </p>

              <div style={{ display: "flex", gap: 48, flexWrap: "wrap", marginBottom: 40 }}>
                {stats.map(({ num, label }) => (
                  <div key={label}>
                    <div style={{ fontSize: 32, fontWeight: 900, color: goldLight, fontFamily: "Georgia,serif" }}>{num}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>{label}</div>
                  </div>
                ))}
              </div>

              <div style={{
                display: "flex",
                alignItems: "center",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
                border: `1px solid ${border}`,
                borderRadius: 60,
                padding: "6px 6px 6px 24px",
                maxWidth: 450,
              }}>
                <SearchIcon size={20} color={goldLight} />
                <input
                  type="text"
                  placeholder="Search jobs by title or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    flex: 1,
                    background: "transparent",
                    border: "none",
                    padding: "14px 16px",
                    fontSize: 14,
                    color: "#FFF",
                    outline: "none",
                  }}
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      border: "none",
                      borderRadius: "50%",
                      width: 32,
                      height: 32,
                      cursor: "pointer",
                      color: "#FFF",
                      fontSize: 16,
                    }}
                  >
                    ✕
                  </button>
                )}
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
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80"
                    alt="Team work"
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
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80"
                    alt="Meeting"
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
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80"
                  alt="Career growth"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: bg, padding: "64px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40, justifyContent: "center" }}>
            {depts.map(d => (
              <button key={d} onClick={() => setFilter(d)}
                style={{
                  background: filter === d ? `linear-gradient(135deg,${gold},${goldLight})` : "transparent",
                  color: filter === d ? "#0D1E38" : textSub,
                  border: `1px solid ${filter === d ? "transparent" : border}`,
                  borderRadius: 40,
                  padding: "10px 24px",
                  fontSize: 14,
                  fontWeight: filter === d ? 700 : 500,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}>
                {d}
              </button>
            ))}
          </div>

          <p style={{ fontSize: 15, color: textMuted, marginBottom: 32, textAlign: "center" }}>
            Showing <strong style={{ color: goldLight }}>{filtered.length}</strong> active positions
            {filter !== "All" && <> in <strong style={{ color: goldLight }}>{filter}</strong></>}
            {searchTerm && <> matching <strong style={{ color: goldLight }}>"{searchTerm}"</strong></>}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: 24, marginBottom: 48 }}>
            {filtered.map((job) => (
              <div key={job.id}
                onClick={() => setSelected(job.id)}
                style={{
                  background: bgCard,
                  border: `1px solid ${border}`,
                  borderRadius: 20,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.borderColor = goldLight; e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.3)`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = border; e.currentTarget.style.boxShadow = "none"; }}>
              
                <div style={{ height: 180, overflow: "hidden", position: "relative" }}>
                  <img 
                    src={job.img} 
                    alt={job.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                  />
                  {job.urgent && (
                    <span style={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      background: "#E05555",
                      color: "#FFF",
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "4px 12px",
                      borderRadius: 20,
                      letterSpacing: "0.05em",
                    }}>
                      URGENT
                    </span>
                  )}
                </div>
                <div style={{ padding: "20px" }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: text, marginBottom: 8 }}>{job.title}</h3>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 12 }}>
                    <span style={{ fontSize: 12, color: textSub }}>💼 {job.dept}</span>
                    <span style={{ fontSize: 12, color: textSub }}>📍 {job.location}</span>
                    <span style={{ fontSize: 12, color: textSub }}>⏰ {job.type}</span>
                  </div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
                    {job.tags.slice(0, 3).map(tag => (
                      <span key={tag} style={{ background: goldDim, borderRadius: 4, padding: "4px 10px", fontSize: 11, color: goldLight, fontWeight: 600 }}>{tag}</span>
                    ))}
                    {job.tags.length > 3 && <span style={{ fontSize: 11, color: textMuted }}>+{job.tags.length - 3}</span>}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: `1px solid ${border}`, paddingTop: 16 }}>
                    <div>
                      <div style={{ fontSize: 11, color: textMuted, textTransform: "uppercase", letterSpacing: "0.05em" }}>Salary</div>
                      <div style={{ fontSize: 16, fontWeight: 800, color: goldLight }}>{job.salary}</div>
                    </div>
                    <button style={{
                      background: `linear-gradient(135deg,${gold},${goldLight})`,
                      color: "#0D1E38",
                      border: "none",
                      borderRadius: 30,
                      padding: "10px 20px",
                      fontSize: 13,
                      fontWeight: 700,
                      cursor: "pointer",
                    }}>
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px" }}>
              <p style={{ fontSize: 18, color: textSub }}>No jobs found matching your criteria.</p>
              <button onClick={() => { setFilter("All"); setSearchTerm(""); }} style={{ marginTop: 16, background: `linear-gradient(135deg,${gold},${goldLight})`, color: "#0D1E38", border: "none", borderRadius: 30, padding: "10px 24px", cursor: "pointer" }}>
                Clear Filters
              </button>
            </div>
          )}

          <p style={{ fontSize: 13, color: textMuted, fontStyle: "italic", textAlign: "center", marginTop: 32 }}>
            ✅ SHNOOR International <strong>never charges</strong> job seekers any money. All applications go through our official Google Form only.
          </p>
        </div>
      </section>
      <section style={{ background: bgSection, padding: "72px 5%" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(28px,3vw,42px)", color: text, fontWeight: 800, marginBottom: 14 }}>
              Our <span style={{ color: goldLight }}>Hiring Process</span>
            </h2>
            <p style={{ fontSize: 16, color: textSub, maxWidth: 540, margin: "0 auto" }}>
              Transparent, fair, and straightforward — here is what to expect when you apply to SHNOOR International.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 24 }}>
            {processSteps.map((s, i) => (
              <div key={i} style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 20, padding: "32px 24px", textAlign: "center", position: "relative", transition: "transform 0.3s ease" }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: `linear-gradient(135deg,${gold},${goldLight})`, color: "#0D1E38", borderRadius: 30, padding: "6px 16px", fontSize: 12, fontWeight: 900 }}>{s.num}</div>
                <div style={{ width: 60, height: 60, borderRadius: 60, background: goldDim, border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "20px auto 20px" }}>
                  <s.icon size={28} color={goldLight} />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: text, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: textSub, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: bg, padding: "64px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(28px,3vw,42px)", color: text, fontWeight: 800, marginBottom: 14, textAlign: "center" }}>
            Life at <span style={{ color: goldLight }}>SHNOOR</span>
          </h2>
          <p style={{ fontSize: 16, color: textSub, textAlign: "center", maxWidth: 540, margin: "0 auto 48px" }}>
            A global team united by a drive to build lasting solutions across time zones, cultures, and industries.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "240px 240px", gap: 16, borderRadius: 20, overflow: "hidden" }}>
            <div style={{ gridColumn: "span 2", gridRow: "span 2", borderRadius: 16, overflow: "hidden" }}>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden" }}>
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&q=80" alt="Work" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden" }}>
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80" alt="Growth" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden" }}>
              <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&q=80" alt="Meeting" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ borderRadius: 16, overflow: "hidden" }}>
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&q=80" alt="Teamwork" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: bgSection, padding: "72px 5%", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(28px,3vw,40px)", color: text, fontWeight: 900, marginBottom: 16 }}>
            Ready to <span style={{ color: goldLight }}>Join Us?</span>
          </h2>
          <p style={{ fontSize: 16, color: textSub, lineHeight: 1.8, marginBottom: 32 }}>
            Browse the listings above, click any role for full details, and apply directly via our official form. Your next career chapter starts here.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer"
              style={{ background: `linear-gradient(135deg,${gold},${goldLight})`, color: "#0D1E38", borderRadius: 50, padding: "14px 36px", fontSize: 15, fontWeight: 700, textDecoration: "none", transition: "transform 0.3s ease", display: "inline-block" }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
              Apply Now →
            </a>
            <a href="mailto:hr@shnoor.com"
              style={{ background: "transparent", color: goldLight, border: `1px solid ${goldLight}`, borderRadius: 50, padding: "14px 36px", fontSize: 15, fontWeight: 600, textDecoration: "none", transition: "all 0.3s ease", display: "inline-block" }}
              onMouseEnter={e => { e.currentTarget.style.background = `rgba(232,160,32,0.1)`; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}>
              hr@shnoor.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatestOpenings;