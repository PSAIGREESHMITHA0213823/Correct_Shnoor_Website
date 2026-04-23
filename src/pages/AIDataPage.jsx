
import React, { useState } from "react";
import { ArrowRightIcon, BrainIcon, MessageSquareIcon, EyeIcon, LineChartIcon, BotIcon, RocketIcon, BarChartIcon, ServerIcon, ArrowsIcon, PieChartIcon, ZapIcon, DatabaseIcon, ShoppingCartIcon, BankIcon, HospitalIcon, FactoryIcon, AnchorIcon, UsersIcon } from "./Icons";

const Img = ({ src, alt, style }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div style={{ position: "relative", overflow: "hidden", ...style }}>
      {!loaded && <div style={{ position: "absolute", inset: 0, background: "rgba(13,33,68,0.3)" }} />}
      <img src={src} alt={alt} onLoad={() => setLoaded(true)} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: loaded ? 1 : 0, transition: "opacity 0.4s" }} />
    </div>
  );
};

const aiServices = [
  { Icon: BrainIcon,       title: "Machine Learning & Deep Learning",     desc: "Custom model development — regression, classification, clustering, neural networks, transformers — trained and deployed for your specific use case.", tags: ["TensorFlow","PyTorch","Scikit-learn","Hugging Face"] },
  { Icon: MessageSquareIcon, title: "Natural Language Processing (NLP)",  desc: "Chatbots, sentiment analysis, document extraction, text summarization, language translation, and LLM fine-tuning for enterprise knowledge bases.", tags: ["LLMs","OpenAI","BERT","GPT","LangChain"] },
  { Icon: EyeIcon,         title: "Computer Vision",                       desc: "Image classification, object detection, OCR, facial recognition, quality inspection, and video analytics for industrial and commercial applications.", tags: ["YOLO","OpenCV","AWS Rekognition","Azure Vision"] },
  { Icon: LineChartIcon,   title: "Predictive Analytics",                  desc: "Demand forecasting, churn prediction, risk scoring, fraud detection, and anomaly detection models integrated into your business workflows.", tags: ["Time Series","Prophet","XGBoost","Feature Engineering"] },
  { Icon: BotIcon,         title: "AI-Powered Process Automation (RPA)",   desc: "Intelligent document processing, workflow automation, smart data extraction, and AI-augmented RPA bots that learn and adapt over time.", tags: ["IDP","UiPath","Power Automate","OCR"] },
  { Icon: RocketIcon,      title: "MLOps & Model Deployment",              desc: "End-to-end ML lifecycle management — experiment tracking, model registry, automated retraining, A/B testing, and production monitoring.", tags: ["MLflow","Kubeflow","SageMaker","Vertex AI"] },
];

const dataServices = [
  { Icon: BarChartIcon,  title: "Business Intelligence & Dashboards",  desc: "Interactive Power BI, Tableau, and Looker dashboards that turn complex data into actionable executive insights in real time.", tags: ["Power BI","Tableau","Looker","Metabase"] },
  { Icon: ServerIcon,    title: "Data Warehouse & Data Lake Design",    desc: "Modern data architecture on Snowflake, BigQuery, Redshift — with star/snowflake schemas, data modelling, and optimized query performance.", tags: ["Snowflake","BigQuery","Redshift","dbt"] },
  { Icon: ArrowsIcon,    title: "ETL / ELT Pipelines",                  desc: "Robust data ingestion and transformation pipelines using Apache Spark, Airflow, dbt, and cloud-native services — batch and streaming.", tags: ["Apache Spark","Airflow","Kafka","Fivetran"] },
  { Icon: PieChartIcon,  title: "Advanced Analytics & Statistics",      desc: "Statistical modelling, cohort analysis, A/B test design, customer segmentation, and KPI frameworks that drive data-driven culture.", tags: ["Python","R","Pandas","Statsmodels"] },
  { Icon: DatabaseIcon,  title: "Data Governance & Quality",            desc: "Data cataloguing, lineage tracking, quality rules, master data management, and GDPR / compliance-aligned data governance frameworks.", tags: ["Collibra","Apache Atlas","Great Expectations"] },
  { Icon: ZapIcon,       title: "Real-Time Streaming Analytics",        desc: "Event-driven architectures with Apache Kafka, Kinesis, and Flink for millisecond-latency analytics on IoT, clickstream, and transaction data.", tags: ["Kafka","Kinesis","Flink","Spark Streaming"] },
];

const useCases = [
  { Icon: ShoppingCartIcon, industry: "Retail & E-Commerce",   text: "Demand forecasting, recommendation engines, inventory optimization, and customer churn reduction." },
  { Icon: BankIcon,          industry: "Financial Services",   text: "Fraud detection, credit risk scoring, algorithmic trading signals, and regulatory reporting automation." },
  { Icon: HospitalIcon,      industry: "Healthcare",           text: "Medical image analysis, patient readmission prediction, clinical NLP, and drug discovery acceleration." },
  { Icon: FactoryIcon,       industry: "Manufacturing",        text: "Predictive maintenance, quality defect detection, supply chain optimization, and production yield improvement." },
  { Icon: AnchorIcon,        industry: "Logistics",            text: "Route optimization, ETA prediction, port congestion analysis, and automated documentation processing." },
  { Icon: UsersIcon,         industry: "HR & Recruitment",     text: "Resume parsing, candidate matching, attrition prediction, and employee engagement sentiment analysis." },
];

const AIDataPage = ({ t, setPage }) => {
  const nav = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const [tab, setTab] = useState("ai");

  return (
    <div style={{ paddingTop: 96 }}>
      <section style={{ background: t.heroBg, padding: "0", position: "relative", overflow: "hidden", minHeight: 500, display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "radial-gradient(circle,rgba(255,255,255,0.4) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        <div style={{ position: "relative", zIndex: 2, padding: "80px 0 80px 5%" }}>
          <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: "rgba(232,160,32,0.15)", border: "1px solid rgba(232,160,32,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 20 }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: "#E8A020", letterSpacing: "0.18em", textTransform: "uppercase" }}>AI & Data Analytics</span>
          </div>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(30px,4.5vw,56px)", color: "#FFF", fontWeight: 900, lineHeight: 1.1, marginBottom: 20 }}>
            AI-Powered<br /><span style={{ color: "#E8A020" }}>Data Intelligence</span>
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", lineHeight: 1.85, maxWidth: 500, marginBottom: 36 }}>
            Machine learning, deep learning, NLP, computer vision, BI dashboards, and data pipelines — transforming raw data into competitive advantage.
          </p>
          <button onClick={() => nav("contact")} style={{ background: "linear-gradient(135deg,#C8820A,#E8A020)", color: "#0D1E38", border: "none", borderRadius: 10, padding: "14px 28px", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8 }}>
            Talk to an AI Expert <ArrowRightIcon size={16} />
          </button>
        </div>
        <Img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80" alt="AI" style={{ height: "100%", minHeight: 500, opacity: 0.7 }} />
      </section>
      <section style={{ background: t.bg, padding: "80px 5%" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 12, marginBottom: 48, justifyContent: "center" }}>
            {[["ai","Artificial Intelligence"],["data","Data & Analytics"]].map(([key, label]) => (
              <button key={key} onClick={() => setTab(key)} style={{
                background: tab === key ? `linear-gradient(135deg,${t.gold},${t.goldLight})` : t.bgCard,
                color: tab === key ? "#0D1E38" : t.textSub,
                border: `1px solid ${tab === key ? "transparent" : t.border}`,
                borderRadius: 10, padding: "12px 28px", fontSize: 14, fontWeight: 700, cursor: "pointer", transition: "all 0.2s",
              }}>{label}</button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 22 }}>
            {(tab === "ai" ? aiServices : dataServices).map((s, i) => (
              <div key={i}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = t.gold; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = t.border; }}
                style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 14, padding: "30px 26px", transition: "all 0.25s" }}>
                <div style={{ width: 52, height: 52, borderRadius: 13, background: t.goldDim, border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: t.goldLight, marginBottom: 18 }}>
                  <s.Icon size={24} color={t.goldLight} />
                </div>
                <h3 style={{ fontSize: 16.5, fontWeight: 700, color: t.text, marginBottom: 12 }}>{s.title}</h3>
                <p style={{ fontSize: 13.5, color: t.textSub, lineHeight: 1.8, marginBottom: 18 }}>{s.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {s.tags.map(tag => <span key={tag} style={{ background: t.goldDim, border: `1px solid ${t.border}`, borderRadius: 6, padding: "3px 9px", fontSize: 10.5, color: t.goldLight, fontWeight: 600 }}>{tag}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: t.bgSection, padding: "90px 5%" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", marginBottom: 60 }}>
            <div>
              <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: t.goldDim, border: `1px solid ${t.border}`, borderRadius: 100, padding: "5px 16px", marginBottom: 18 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: t.goldLight, letterSpacing: "0.18em", textTransform: "uppercase" }}>Industry Impact</span>
              </div>
              <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,3vw,40px)", color: t.text, fontWeight: 800, marginBottom: 18 }}>AI Solutions Across <span style={{ color: t.goldLight }}>Every Industry</span></h2>
              <div style={{ width: 48, height: 3, background: `linear-gradient(90deg,${t.gold},transparent)`, borderRadius: 2, marginBottom: 24 }} />
              <p style={{ fontSize: 15, color: t.textSub, lineHeight: 1.85 }}>
                Our AI and data teams have deep domain knowledge across retail, finance, healthcare, manufacturing, logistics, and HR — delivering context-aware solutions that create measurable business impact.
              </p>
            </div>
            <Img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" alt="Data Analytics" style={{ borderRadius: 14, height: 320, border: `1px solid ${t.border}` }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20 }}>
            {useCases.map((uc, i) => (
              <div key={i} style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 12, padding: "26px 24px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: t.goldDim, border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: t.goldLight, flexShrink: 0 }}>
                  <uc.Icon size={22} color={t.goldLight} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: t.text, marginBottom: 8 }}>{uc.industry}</div>
                  <p style={{ fontSize: 13, color: t.textSub, lineHeight: 1.75 }}>{uc.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: t.bg, padding: "80px 5%" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(24px,3vw,38px)", color: t.text, fontWeight: 800, marginBottom: 40 }}>Our AI & Data <span style={{ color: t.goldLight }}>Technology Stack</span></h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {["Python","R","TensorFlow","PyTorch","Scikit-learn","Hugging Face","LangChain","OpenAI API","AWS SageMaker","Azure ML","Vertex AI","Spark","Kafka","Airflow","dbt","Snowflake","BigQuery","Redshift","Power BI","Tableau","Looker","PostgreSQL","MongoDB","Redis","Docker","Kubernetes"].map(tech => (
              <span key={tech} style={{ background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 8, padding: "8px 16px", fontSize: 13, color: t.text, fontWeight: 500 }}>{tech}</span>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: "linear-gradient(135deg,#0D2144,#1A3A6A)", padding: "80px 5%", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(26px,4vw,48px)", color: "#FFF", fontWeight: 800, marginBottom: 18 }}>Ready to Unlock the Power of <span style={{ color: "#E8A020" }}>Your Data?</span></h2>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", maxWidth: 500, margin: "0 auto 36px" }}>Let's discuss how AI and analytics can transform your decision-making and operations.</p>
        <button onClick={() => nav("contact")} style={{ background: "linear-gradient(135deg,#C8820A,#E8A020)", color: "#0D1E38", border: "none", borderRadius: 10, padding: "15px 36px", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
          Book an AI Strategy Session
        </button>
      </section>
    </div>
  );
};

export default AIDataPage;