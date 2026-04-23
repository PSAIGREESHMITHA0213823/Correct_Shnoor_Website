
// import React, { useState, useEffect } from "react";

// const Img = ({ src, alt, style }) => {
//   const [loaded, setLoaded] = useState(false);
//   return (
//     <div style={{ position: "relative", overflow: "hidden", ...style }}>
//       {!loaded && <div style={{ position: "absolute", inset: 0, background: "rgba(13,33,68,0.3)" }} />}
//       <img src={src} alt={alt} onLoad={() => setLoaded(true)} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: loaded ? 1 : 0, transition: "opacity 0.4s" }} />
//     </div>
//   );
// };

// const posts = [
//   { title: "SAP MM (Materials Management): A Comprehensive Overview, Features, and Business Benefits", date: "12/16/2025", read: "2 min", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&q=80", category: "SAP / ERP", excerpt: "Learn how SAP MM helps businesses manage procurement, inventory, and vendor processes efficiently across global supply chains.", content: `SAP Materials Management (MM) is a core module of the SAP ERP system that handles all procurement and inventory management activities. It streamlines purchasing processes, manages vendor relationships, and ensures optimal stock levels across the enterprise.\n\nKey Features:\n- Purchase Order Management: Automate and track purchase orders from requisition to receipt.\n- Inventory Management: Real-time visibility into stock levels, movements, and valuations.\n- Vendor Evaluation: Score and manage supplier performance with built-in analytics.\n- Invoice Verification: Three-way matching of purchase orders, goods receipts, and vendor invoices.\n- Material Requirements Planning: Ensure the right materials are available at the right time.\n\nBusiness Benefits:\n\nSAP MM reduces procurement costs by up to 20% through process automation and better vendor negotiations. It provides complete audit trails for compliance and eliminates manual errors in inventory tracking. Integration with other SAP modules like SD (Sales & Distribution) and PP (Production Planning) creates a seamless enterprise data flow.\n\nFor global enterprises operating across multiple countries, SAP MM handles multi-currency transactions, diverse tax regulations, and international procurement standards—making it indispensable for organizations with complex supply chains.` },
//   { title: "Import & Export Solutions for India & UAE: Simplifying Global Trade Operations", date: "12/15/2025", read: "3 min", img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=500&q=80", category: "Trade & Logistics", excerpt: "Discover reliable import and export solutions for India and UAE — documentation, customs, and compliance made simple.", content: `The India-UAE trade corridor is one of the most significant bilateral trade relationships in Asia. With annual trade volumes exceeding $85 billion, both nations have signed a Comprehensive Economic Partnership Agreement (CEPA) that reduces tariffs and simplifies customs procedures.\n\nKey Trade Categories:\n- Petroleum products and chemicals\n- Precious metals and jewelry\n- Machinery and electronics\n- Textiles and apparel\n- Food products and agriculture\n\nDocumentation Requirements:\n\nSuccessful import/export operations require meticulous documentation. For exports from India to UAE, businesses need a Commercial Invoice, Packing List, Bill of Lading or Airway Bill, Certificate of Origin, and any applicable quality certificates.\n\nCustoms Compliance:\n\nUAE customs follows a harmonized tariff schedule. Most products face a standard 5% customs duty, though CEPA signatories can benefit from preferential rates. India's export compliance requires IEC (Import Export Code) registration and adherence to DGFT (Directorate General of Foreign Trade) regulations.\n\nAt SHNOOR International LLC, we handle end-to-end documentation and compliance, ensuring your goods clear customs without delays.` },
//   { title: "Building Trust Through Reliable Background Verification Services", date: "10/14/2025", read: "2 min", img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&q=80", category: "HR & Compliance", excerpt: "Protect your organization with professional background verification — credentials, criminal, employment history.", content: `In today's competitive talent market, hiring the right people is more critical than ever. Background verification services protect organizations from fraudulent credentials, undisclosed criminal histories, and misrepresented employment records.\n\nTypes of Background Checks:\n- Educational Credential Verification: Confirm degrees, certifications, and academic achievements.\n- Employment History Check: Validate previous job titles, tenures, and reasons for leaving.\n- Criminal Record Check: Screen for local and international criminal histories.\n- Identity Verification: Confirm government-issued ID authenticity.\n- Reference Checks: Speak directly with former managers and colleagues.\n- Social Media Screening: Assess professional conduct online.\n\nWhy It Matters:\n\nStudies show that approximately 40% of resumes contain some form of exaggeration or falsification. A single bad hire can cost an organization 3-5x the employee's annual salary when factoring in recruitment, training, and productivity losses.\n\nOur verification process typically completes within 3-7 business days, with digital reports delivered to your HR team. We maintain strict data privacy standards and comply with local employment laws in India, UAE, and GCC countries.` },
//   { title: "Cloud Migration Best Practices: Moving to AWS in 2025", date: "11/20/2025", read: "4 min", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&q=80", category: "Cloud", excerpt: "A step-by-step guide to planning and executing a successful AWS cloud migration with zero downtime.", content: `Migrating to AWS is one of the most transformative decisions an enterprise can make. When done correctly, cloud migration reduces infrastructure costs by 30-50%, improves scalability, and accelerates application delivery.\n\nThe 6 R's of Cloud Migration:\n1. Rehost (Lift & Shift): Move applications to AWS with minimal changes. Fastest approach, suitable for legacy apps.\n2. Replatform: Make small optimizations without changing core architecture (e.g., moving to RDS).\n3. Refactor/Re-architect: Rebuild applications using cloud-native services for maximum benefit.\n4. Repurchase: Replace existing software with cloud-native SaaS solutions.\n5. Retire: Decommission applications that are no longer needed.\n6. Retain: Keep certain applications on-premises for compliance or latency reasons.\n\nMigration Phases:\n\nPhase 1 - Assessment: Inventory all applications, assess dependencies, and estimate costs.\nPhase 2 - Mobilization: Set up AWS accounts, establish networking, and train teams.\nPhase 3 - Migration: Execute migration in waves, starting with non-critical workloads.\nPhase 4 - Optimization: Right-size instances, implement auto-scaling, and optimize costs.\n\nCommon Pitfalls to Avoid:\n- Skipping the assessment phase\n- Migrating everything at once\n- Ignoring security configurations\n- Not establishing monitoring from day one` },
//   { title: "The Future of IT Staffing: Trends Shaping the Industry in 2026", date: "01/08/2026", read: "3 min", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80", category: "IT Consulting", excerpt: "How AI, remote work, and skill-based hiring are reshaping IT staffing globally in 2026 and beyond.", content: `The IT staffing landscape has undergone seismic shifts since 2020, and 2026 marks a new era defined by AI augmentation, distributed teams, and skills-first hiring models.\n\nTop Trends Reshaping IT Staffing:\n\n1. AI-Augmented Recruitment: Machine learning algorithms now screen thousands of profiles in minutes, matching candidates to roles based on demonstrated skills rather than job titles. Expect AI to handle 60% of initial screening by end of 2026.\n\n2. Skills-Based Hiring: Employers are dropping degree requirements in favor of demonstrated competencies. Coding assessments, project portfolios, and micro-credentials from platforms like Coursera and AWS are becoming the new standard.\n\n3. The Rise of Contract-to-Hire: Organizations are increasingly using contract engagements to evaluate candidates before offering permanent positions—reducing hiring risk while maintaining flexibility.\n\n4. Global Talent Pools: Remote work has made geography irrelevant for many IT roles. Companies in the UAE and GCC are increasingly hiring Indian developers, while maintaining physical teams for client-facing roles.\n\n5. Cybersecurity Talent Shortage: With cyberattacks increasing 38% year-over-year, cybersecurity professionals command premium salaries. Demand far exceeds supply, creating a talent war.\n\n6. Low-Code/No-Code Specialists: As citizen development grows, specialists who can implement and customize low-code platforms are in high demand.` },
//   { title: "Logistics Management in the GCC: Challenges, Opportunities & Best Practices", date: "02/14/2026", read: "5 min", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&q=80", category: "Trade & Logistics", excerpt: "Understanding the unique logistics landscape of the Gulf Cooperation Council — key ports, routes, and compliance frameworks.", content: `The Gulf Cooperation Council (GCC) represents one of the world's most dynamic logistics markets. With Jebel Ali Port in Dubai handling over 14 million TEUs annually and ambitious infrastructure projects across Saudi Arabia, Oman, and Qatar, the region is positioning itself as a global trade hub.\n\nKey GCC Ports and Logistics Hubs:\n- Jebel Ali (UAE): Largest port in the Middle East, 16th globally\n- King Abdulaziz Port, Dammam (Saudi Arabia): Primary gateway for Eastern Province\n- Port of Salalah (Oman): Strategic transshipment hub in the Indian Ocean\n- Hamad Port (Qatar): One of the largest in the region\n- Khalifa Port (UAE): Purpose-built for containers and bulk cargo\n\nChallenges:\n\nThe GCC logistics sector faces unique challenges including extreme heat affecting warehousing and last-mile delivery, complex customs regulations varying by country, and infrastructure gaps in less developed areas. Labor regulations and nationalization policies (Saudization, Emiratization) also impact staffing models.\n\nOpportunities:\n\nVision 2030 and similar national diversification programs are pouring billions into logistics infrastructure. The GCC's strategic location between Europe, Asia, and Africa makes it ideal for transshipment. Free zone advantages in UAE, Bahrain, and Oman offer tax benefits and simplified trade procedures.\n\nBest Practices for GCC Logistics:\n1. Partner with local agents who understand customs nuances\n2. Invest in cold chain capabilities for food and pharmaceutical sectors\n3. Leverage free zones for regional distribution\n4. Implement track-and-trace technology for full visibility` },
//   { title: "HRM Platforms for the Modern Workforce: What to Look For in 2026", date: "03/01/2026", read: "3 min", img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&q=80", category: "HR Tech", excerpt: "Key features organizations need in their HRM platform as workforces become more distributed and diverse.", content: `Human Resource Management platforms have evolved from simple payroll processors to comprehensive people intelligence systems. As workforces become more distributed, diverse, and digitally native, HRM platforms must keep pace with new expectations.\n\nEssential Features for 2026:\n\n1. AI-Powered Talent Analytics: Predict attrition before it happens, identify high-potential employees, and model workforce planning scenarios with machine learning.\n\n2. Employee Experience (EX) Tools: Pulse surveys, sentiment analysis, and personalized learning pathways that treat employees as customers of HR services.\n\n3. Global Compliance Engine: Automatically update payroll, leave, and compliance rules as labor laws change across different jurisdictions.\n\n4. Integrated Learning Management: Built-in LMS capabilities that connect training completion to performance metrics and career progression.\n\n5. DEI Analytics: Track diversity metrics across the entire employee lifecycle from sourcing to promotion.\n\n6. Manager Effectiveness Scores: 360-degree feedback loops that help managers understand their impact on team performance and retention.\n\nTop Platforms to Evaluate:\n- Workday HCM: Best for large enterprises with complex global operations\n- SAP SuccessFactors: Strongest for organizations already on SAP ERP\n- BambooHR: Ideal for SMEs needing comprehensive features at lower cost\n- Darwinbox: Purpose-built for Asia-Pacific markets including India and GCC` },
//   { title: "SAP ABAP Development: Why It Remains Relevant in Modern Enterprise ERP", date: "03/22/2026", read: "4 min", img: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=500&q=80", category: "SAP / ERP", excerpt: "Despite new technologies, SAP ABAP remains the backbone of enterprise ERP customization globally.", content: `Advanced Business Application Programming (ABAP) has been the programming language of SAP since the 1980s. Despite predictions of its decline, ABAP remains the most critical skill for enterprise ERP customization in 2026.\n\nWhy ABAP Endures:\n\nSAP's installed base represents over 400,000 customers worldwide, including 92% of the Forbes Global 2000. These organizations have decades of custom ABAP code embedded in their business processes—code that cannot simply be switched off.\n\nModern ABAP Capabilities:\n\nABAP has continuously evolved. Modern ABAP supports:\n- Object-Oriented Programming with full class hierarchies\n- RESTful Application Programming Model (RAP) for cloud-ready development\n- ABAP SQL with advanced data manipulation capabilities\n- CDS (Core Data Services) Views for semantic data modeling\n- Integration with SAP BTP (Business Technology Platform)\n\nABAP on SAP BTP:\n\nThe cloud shift hasn't made ABAP obsolete—it's transformed it. The ABAP Environment on SAP BTP allows developers to write cloud-native ABAP that runs on SAP's multi-cloud infrastructure, bridging legacy customizations with modern cloud architecture.\n\nCareer Outlook:\n\nABAP developers command premium salaries in 2026, with experienced consultants earning $90,000-$150,000 annually in the US, and equivalent premiums in GCC markets. Demand consistently outpaces supply.` },
//   { title: "East Africa as an Emerging Market: SHNOOR's Rwanda Expansion", date: "04/10/2026", read: "2 min", img: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=500&q=80", category: "Company News", excerpt: "SHNOOR announces its East Africa expansion into Rwanda — bringing IT consulting and trade services to the region.", content: `SHNOOR International LLC is proud to announce its strategic expansion into East Africa, beginning with Rwanda—a nation renowned for its political stability, business-friendly environment, and ambitious digital transformation agenda.\n\nWhy Rwanda?\n\nRwanda consistently ranks as one of Africa's easiest places to do business. The country's Vision 2050 plan targets a knowledge-based economy, driving unprecedented demand for IT infrastructure, software solutions, and skilled professionals. Key factors that made Rwanda our first East African base:\n\n- 100% foreign ownership permitted in most sectors\n- One of Africa's most stable political environments\n- World-class fiber optic infrastructure (Kigali is widely connected)\n- Gateway to the East African Community (EAC) with 300+ million consumers\n- Strong government partnerships with tech giants like Carnegie Mellon Africa\n\nOur Rwanda Offerings:\n\nWe're launching with three core service lines: IT Staffing & Consulting (connecting Rwandan tech talent with regional and global employers), SAP Implementation Support (helping Rwandan enterprises modernize their ERP systems), and Trade & Logistics (leveraging Rwanda's landlocked position as a regional distribution hub).\n\nComing Next:\n\nFollowing Rwanda, SHNOOR plans to establish presence in Kenya and Uganda within 18 months, creating a comprehensive East African trade and technology network.` },
//   { title: "DevSecOps: Integrating Security Into Your CI/CD Pipeline", date: "04/15/2026", read: "5 min", img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&q=80", category: "Cloud", excerpt: "How to embed DevSecOps practices across your entire CI/CD pipeline from day one.", content: `DevSecOps isn't a tool—it's a cultural shift that embeds security thinking into every phase of the software development lifecycle. As cyber threats grow more sophisticated, organizations can no longer afford to bolt security on as an afterthought.\n\nThe DevSecOps Philosophy:\n\n"Security as Code" means treating security policies, scans, and controls as first-class citizens in your codebase. Every developer becomes a security participant, and every pipeline stage includes security validation.\n\nImplementing DevSecOps Across Your Pipeline:\n\n1. Code Stage: Use IDE plugins (SonarLint, Snyk) for real-time vulnerability detection as developers type. Pre-commit hooks prevent secrets and vulnerable dependencies from entering the codebase.\n\n2. Build Stage: Static Application Security Testing (SAST) tools like Checkmarx or Semgrep scan source code during compilation. Software Composition Analysis (SCA) checks for vulnerable open-source dependencies.\n\n3. Test Stage: Dynamic Application Security Testing (DAST) tools like OWASP ZAP attack running applications to find runtime vulnerabilities. Container image scanning ensures Docker images are free from known CVEs.\n\n4. Deploy Stage: Infrastructure as Code (IaC) scanning tools like Checkov or Terrascan validate Terraform configurations against security best practices before deployment.\n\n5. Monitor Stage: Runtime Application Self-Protection (RASP) and SIEM integration provide continuous threat detection in production.\n\nMetrics That Matter:\n- Mean Time to Detect (MTTD) security issues\n- Vulnerability remediation rate\n- False positive rate from automated scanners\n- Percentage of pipelines with security gates enabled` },
//   { title: "Export Documentation 101: What Every Business Needs to Know", date: "12/01/2025", read: "3 min", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&q=80", category: "Trade & Logistics", excerpt: "A complete guide to export documentation for businesses entering the India-to-GCC trade corridor.", content: `Export documentation is the backbone of international trade. Incorrect or incomplete documentation causes customs delays, financial penalties, and damaged business relationships. For businesses in the India-GCC corridor, mastering these documents is essential.\n\nCore Export Documents:\n\n1. Commercial Invoice: The primary document stating the value, quantity, and description of goods. Must match all other documents exactly.\n\n2. Packing List: Detailed breakdown of each package—dimensions, weight, contents. Customs authorities use this to verify shipments.\n\n3. Bill of Lading (Sea) / Airway Bill (Air): Contract between shipper and carrier. Also serves as the title document for the goods.\n\n4. Certificate of Origin (COO): Certifies where goods were manufactured. Critical for claiming preferential duty rates under the India-UAE CEPA.\n\n5. Inspection Certificate: Issued by third-party agencies confirming goods meet quality and safety standards.\n\n6. Phytosanitary Certificate: Required for plant products, confirming they're free from pests and diseases.\n\nIndia-Specific Requirements:\n\nExporters from India need an IEC (Import Export Code) from DGFT, GST registration, and for certain products, licenses or NOCs from regulatory bodies. The Shipping Bill filed on ICEGATE is the primary export declaration.\n\nGCC Customs Requirements:\n\nAll GCC countries follow a unified customs law. The GCC customs tariff classifies goods under HS codes, and rates are typically 5% for standard goods. Restricted and prohibited goods lists vary by country.` },
//   { title: "Building Scalable Kubernetes Infrastructure for Enterprise Applications", date: "01/25/2026", read: "6 min", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80", category: "Cloud", excerpt: "How to architect production-grade K8s clusters for enterprise workloads — from basics to advanced multi-cluster setups.", content: `Kubernetes has become the de facto standard for container orchestration, but running production-grade Kubernetes for enterprise workloads requires careful planning around availability, security, and cost optimization.\n\nFoundation: Cluster Architecture Decisions\n\nBefore writing a single manifest, architects must decide:\n- Managed vs. Self-Managed: EKS (AWS), AKS (Azure), and GKE (Google) reduce operational overhead but add vendor lock-in. Self-managed clusters on bare metal offer maximum control but require deep expertise.\n- Single vs. Multi-Cluster: Large enterprises typically run separate clusters for dev, staging, and production environments, with additional clusters for different regions or business units.\n- Node Sizing: Mix of on-demand and spot instances balances cost and availability.\n\nHigh Availability Configuration:\n\nProduction clusters must span at least 3 availability zones. Control plane components (API server, etcd, scheduler) should run as highly available replicas. Use Pod Disruption Budgets (PDBs) to ensure minimum availability during updates.\n\nSecurity Best Practices:\n- Enable RBAC (Role-Based Access Control) and follow least-privilege principles\n- Use Network Policies to control pod-to-pod communication\n- Implement Pod Security Standards (restricted profile for production)\n- Rotate service account tokens regularly\n- Use secrets management solutions (HashiCorp Vault, AWS Secrets Manager)\n\nCost Optimization Techniques:\n- Implement Cluster Autoscaler for dynamic node provisioning\n- Use Kubernetes VPA (Vertical Pod Autoscaler) for right-sizing\n- Leverage Spot/Preemptible instances for stateless workloads\n- Implement resource quotas per namespace to prevent runaway costs` },
//   { title: "AI in Supply Chain Management: Trends and Applications", date: "04/05/2026", read: "4 min", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&q=80", category: "AI & Data", excerpt: "How AI is reshaping supply chain operations — from predictive logistics to demand forecasting.", content: `Artificial intelligence is transforming supply chains from reactive systems into proactive, self-optimizing networks. The global AI in supply chain market is projected to reach $41 billion by 2030, driven by the need for resilience after recent global disruptions.\n\nKey AI Applications in Supply Chain:\n\n1. Demand Forecasting: Machine learning models analyze historical sales data, weather patterns, social media trends, and economic indicators to forecast demand with 85-95% accuracy—far superior to traditional statistical methods.\n\n2. Predictive Maintenance: IoT sensors combined with AI predict equipment failures before they occur, reducing downtime by up to 50% in warehouse and transportation operations.\n\n3. Route Optimization: AI-powered logistics platforms like FourKites and project44 optimize delivery routes in real-time, accounting for traffic, weather, and delivery windows.\n\n4. Warehouse Automation: Computer vision enables robots to pick and place items with near-human accuracy. Amazon's warehouse robots process 3x more orders per shift than human-only operations.\n\n5. Supplier Risk Management: Natural language processing scans news, financial reports, and social media to flag supplier risks before they materialize into supply disruptions.\n\n6. Dynamic Pricing: AI adjusts pricing in real-time based on demand signals, competitor pricing, and inventory levels.\n\nChallenges to Watch:\n\nData quality remains the biggest barrier to AI adoption in supply chains. Organizations must invest in data governance before expecting AI to deliver insights.` },
//   { title: "Power BI vs Tableau: Choosing the Right BI Tool for Your Enterprise", date: "02/28/2026", read: "4 min", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80", category: "AI & Data", excerpt: "A side-by-side comparison of Power BI and Tableau to help enterprises make the right BI investment.", content: `Choosing between Power BI and Tableau is one of the most consequential technology decisions a data team can make. Both are excellent tools, but they serve different organizational profiles and use cases.\n\nPower BI - Microsoft's Analytics Powerhouse:\n\nStrengths: Deep integration with Microsoft 365, Azure, and SQL Server. Per-user licensing starts at $10/month (Pro), making it cost-effective for large deployments. Power Query provides powerful ETL capabilities. DAX (Data Analysis Expressions) is highly performant for complex calculations.\n\nBest For: Organizations already invested in the Microsoft ecosystem. Finance teams that live in Excel. Organizations needing tight Active Directory integration for row-level security.\n\nTableau - The Visualization Leader:\n\nStrengths: Best-in-class visualization capabilities and drag-and-drop interface. Tableau Prep Builder offers superior data preparation. Strong community and marketplace for pre-built connectors and dashboards. Better performance with large datasets using in-memory processing.\n\nBest For: Data analysts who need maximum flexibility. Organizations requiring sophisticated geospatial analytics. Teams with strong data visualization requirements that go beyond standard charts.\n\nCost Comparison:\n- Power BI: $10/user/month (Pro), $20/user/month (Premium Per User)\n- Tableau: $75/user/month (Creator), $42/user/month (Explorer)\n\nOur Recommendation:\n\nChoose Power BI if you're a Microsoft shop with budget constraints. Choose Tableau if visualization sophistication and analyst productivity are top priorities and budget allows.` },
//   { title: "How SHNOOR's LMS Platform Drives Employee Retention", date: "03/15/2026", read: "3 min", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80", category: "HR Tech", excerpt: "Investing in employee learning drives retention by up to 40%. How SHNOOR's LMS makes it happen.", content: `Employee turnover costs organizations 50-200% of an employee's annual salary when accounting for recruitment, onboarding, and lost productivity. Learning & Development (L&D) has emerged as the single most effective retention tool available to HR teams.\n\nThe Learning-Retention Connection:\n\nLinkedIn's 2026 Workplace Learning Report found that 94% of employees would stay longer at a company that invested in their development. Organizations with strong L&D cultures report 30-40% lower voluntary turnover rates.\n\nSHNOOR's LMS Platform Features:\n\n1. Personalized Learning Paths: AI-driven recommendations based on role, skill gaps, and career aspirations. Each employee gets a unique development journey.\n\n2. Microlearning Modules: 5-10 minute bite-sized lessons fit into busy workdays. Completion rates are 3x higher than traditional hour-long courses.\n\n3. Manager Dashboard: Real-time visibility into team learning progress. Managers receive alerts when direct reports fall behind on compliance training.\n\n4. Skills Marketplace: Employees browse and self-enroll in skills-based courses. This autonomy increases engagement and intrinsic motivation.\n\n5. Certification Tracking: Automated reminders for expiring certifications. Compliance dashboards give HR instant visibility into certification status.\n\n6. Social Learning: Discussion forums, peer-to-peer knowledge sharing, and cohort-based learning programs build community.\n\nROI Measurement:\n\nOur clients report average ROI of 300-400% on their LMS investment when accounting for reduced turnover costs, improved productivity, and faster time-to-proficiency for new hires.` },
//   { title: "Mastering Terraform for Multi-Cloud Infrastructure Automation", date: "02/10/2026", read: "6 min", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=80", category: "Cloud", excerpt: "A deep-dive into using Terraform to manage infrastructure across AWS, Azure, and GCP simultaneously.", content: `Terraform by HashiCorp has become the industry standard for Infrastructure as Code (IaC), enabling teams to define, provision, and manage cloud infrastructure using declarative configuration files.\n\nWhy Terraform for Multi-Cloud?\n\nThe average enterprise uses 2.6 cloud providers. Managing infrastructure across AWS, Azure, and GCP with provider-specific tools creates silos and inconsistencies. Terraform provides a unified workflow regardless of the target cloud provider.\n\nCore Concepts:\n\nProviders: Plugins that interact with cloud APIs. Over 3,000 community-maintained providers cover everything from AWS to Datadog to GitHub.\n\nResources: Individual infrastructure objects (EC2 instances, S3 buckets, Azure VMs). Resources are declared in .tf files and managed as a group.\n\nState: Terraform tracks real-world infrastructure in a state file. Remote state (S3 + DynamoDB, Terraform Cloud) enables team collaboration.\n\nModules: Reusable packages of Terraform configuration. The Terraform Registry hosts thousands of community modules.\n\nMulti-Cloud Patterns:\n\n1. Provider Abstraction Modules: Create modules that abstract provider-specific details, exposing consistent interfaces (e.g., a "database" module that creates RDS on AWS, SQL Database on Azure, or Cloud SQL on GCP).\n\n2. Workspace-Based Environments: Use Terraform workspaces to manage dev/staging/production configurations from a single codebase.\n\n3. State Isolation: Separate state files per environment and region prevent blast radius from misconfigurations.\n\nCI/CD Integration:\n\nIntegrate Terraform with GitHub Actions, GitLab CI, or Jenkins. Implement automated plan reviews with tools like Atlantis or Terraform Cloud's run triggers.` },
//   { title: "Hiring Data Engineers in 2026: What Skills Are in Demand?", date: "01/18/2026", read: "4 min", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80", category: "IT Consulting", excerpt: "The data engineering landscape is evolving fast. Here are the skills, tools, and certifications your candidates must have.", content: `Data engineering has evolved dramatically over the past three years. The rise of the Modern Data Stack, real-time processing requirements, and AI/ML integration have created demand for a new breed of data engineer who combines traditional ETL skills with cloud-native and AI expertise.\n\nTop Technical Skills in Demand:\n\n1. Cloud Data Platforms: Snowflake, Databricks, and BigQuery experience is now table stakes. Candidates who've architected data warehouses on these platforms command 20-30% salary premiums.\n\n2. Apache Spark & Kafka: For organizations processing large-scale batch and real-time data, Spark and Kafka remain essential. Look for candidates who understand tuning and optimization, not just syntax.\n\n3. dbt (Data Build Tool): dbt has transformed how data teams think about transformations. Analytics engineers who can write clean, tested, documented dbt models are highly sought after.\n\n4. Python & SQL Proficiency: Advanced Python (pandas, PySpark, Airflow) and sophisticated SQL (window functions, CTEs, query optimization) are non-negotiable.\n\n5. Data Pipeline Orchestration: Apache Airflow, Prefect, or Dagster experience. Understanding of DAGs, scheduling, and error handling.\n\n6. Data Quality & Governance: Great Expectations, Monte Carlo, or similar data observability tools. Understanding of data contracts and metadata management.\n\nEmerging Requirements:\n- MLOps knowledge for serving ML models in production\n- Vector database experience (Pinecone, Weaviate) for AI applications\n- Streaming lakehouse architecture (Delta Lake, Apache Iceberg)\n\nSalary Benchmarks (2026):\n- Entry Level: $70,000-$90,000\n- Mid-Level (3-5 years): $100,000-$140,000\n- Senior (5+ years): $150,000-$200,000` },
//   { title: "Oman's Vision 2040 and the IT Talent Opportunity", date: "03/08/2026", read: "3 min", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&q=80", category: "Company News", excerpt: "How Oman's national diversification strategy is creating a surge in demand for technology and trade talent.", content: `Oman's Vision 2040 represents the most ambitious national transformation program the Sultanate has ever undertaken. Moving beyond oil dependency, the plan targets five key sectors: tourism, logistics, manufacturing, mining, and fisheries—all of which require substantial IT and trade expertise.\n\nThe Technology Imperative:\n\nTo achieve Vision 2040 targets, Oman is investing heavily in digital infrastructure. The country's ICT sector is projected to grow 8.5% annually through 2030, creating an estimated 50,000+ technology jobs. Key initiatives driving this growth:\n\n- Oman Data Park: Expanding data center capacity to support cloud adoption\n- Smart Cities Initiative: Muscat and Salalah smart city projects requiring IoT, analytics, and connectivity expertise\n- e-Government Transformation: Digitizing government services across 200+ touchpoints\n- Logistics Hub Development: Salalah Free Zone and Duqm Special Economic Zone attracting global logistics players\n\nTalent Demand Sectors:\n\nThe most acute shortages exist in cybersecurity, cloud architecture, data analytics, and ERP implementation (particularly SAP). Omanization requirements mean global companies must hire and develop local talent—creating opportunities for structured training and placement programs.\n\nSHNOOR's Positioning:\n\nWith our India-UAE-Oman trade network and IT staffing expertise, SHNOOR is uniquely positioned to bridge the talent gap. We source technical professionals from India's deep talent pool, structure them for Oman's regulatory requirements, and provide ongoing development through our LMS platform.` },
// ];

// const ArticlePage = ({ post, t, onBack }) => {
//   const gold = t?.gold || "#C8820A";
//   const goldLight = t?.goldLight || "#E8A020";
//   const bg = t?.bg || "#0D1E38";
//   const bgCard = t?.bgCard || "#112240";
//   const bgSection = t?.bgSection || "#0A1628";
//   const textC = t?.text || "#F0F4FF";
//   const textSub = t?.textSub || "rgba(200,215,240,0.72)";
//   const textMuted = t?.textMuted || "rgba(200,215,240,0.45)";
//   const border = t?.border || "rgba(200,215,240,0.1)";

//   const related = posts.filter(p => p.category === post.category && p.title !== post.title).slice(0, 3);
//   const paragraphs = post.content ? post.content.split("\n\n") : [post.excerpt];

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   return (
//     <div style={{ paddingTop: 80, background: bg }}>
//       <div style={{ padding: "24px 5%", borderBottom: `1px solid ${border}`, background: bgSection }}>
//         <button onClick={onBack} style={{ background: "transparent", border: `1px solid ${border}`, borderRadius: 8, padding: "8px 18px", color: textSub, fontSize: 13, cursor: "pointer" }}>← Back to Blog</button>
//       </div>

//       <section style={{ background: bg, padding: "60px 5%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", maxWidth: 1240, margin: "0 auto" }}>
//         <div>
//           <div style={{ display: "inline-flex", alignItems: "center", background: "rgba(232,160,32,0.15)", border: "1px solid rgba(232,160,32,0.3)", borderRadius: 100, padding: "5px 16px", marginBottom: 20 }}>
//             <span style={{ fontSize: 10, fontWeight: 700, color: goldLight, letterSpacing: "0.18em", textTransform: "uppercase" }}>{post.category}</span>
//           </div>
//           <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(28px,3.5vw,44px)", color: textC, fontWeight: 900, lineHeight: 1.25, marginBottom: 20 }}>{post.title}</h1>
//           <p style={{ fontSize: 15, color: textSub, lineHeight: 1.85, marginBottom: 16 }}>{post.excerpt}</p>
//           <p style={{ fontSize: 14, color: textMuted }}>{post.date} · {post.read} read</p>
//         </div>
//         <div style={{ borderRadius: 20, overflow: "hidden", height: 400, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}>
//           <img src={post.img} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//         </div>
//       </section>

//       <section style={{ background: bg, padding: "72px 8%" }}>
//         <div style={{ maxWidth: 820, margin: "0 auto" }}>
//           {paragraphs.map((para, i) => {
//             if (para.startsWith("Key ") || para.startsWith("Our ") || para.startsWith("Top ") || para.startsWith("Core ") || para.startsWith("Why ") || para.startsWith("The ") || para.startsWith("Essential ") || para.startsWith("Types ") || para.startsWith("Emerging ") || para.startsWith("Salary ") || para.startsWith("Best ")) {
//               const [heading, ...rest] = para.split(":\n");
//               return (
//                 <div key={i} style={{ marginBottom: 32 }}>
//                   <h2 style={{ fontFamily: "Georgia,serif", fontSize: 22, color: textC, fontWeight: 800, marginBottom: 14 }}>{heading}:</h2>
//                   {rest.join(":\n").split("\n").map((line, j) => {
//                     if (line.startsWith("- ")) {
//                       return <div key={j} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 12, padding: "12px 16px", background: bgCard, borderRadius: 10, border: `1px solid ${border}` }}>
//                         <div style={{ width: 6, height: 6, borderRadius: "50%", background: goldLight, marginTop: 7, flexShrink: 0 }} />
//                         <span style={{ fontSize: 14.5, color: textSub, lineHeight: 1.7 }}>{line.slice(2)}</span>
//                       </div>;
//                     }
//                     if (/^\d\./.test(line)) {
//                       return <div key={j} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 14 }}>
//                         <div style={{ width: 24, height: 24, borderRadius: "50%", background: `linear-gradient(135deg,${gold},${goldLight})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#0D1E38", flexShrink: 0 }}>{line[0]}</div>
//                         <span style={{ fontSize: 14.5, color: textSub, lineHeight: 1.7 }}>{line.slice(3)}</span>
//                       </div>;
//                     }
//                     return line ? <p key={j} style={{ fontSize: 15, color: textSub, lineHeight: 1.9, marginBottom: 12 }}>{line}</p> : null;
//                   })}
//                 </div>
//               );
//             }
//             return <p key={i} style={{ fontSize: 16, color: textSub, lineHeight: 1.95, marginBottom: 28 }}>{para}</p>;
//           })}
//         </div>
//       </section>

//       {related.length > 0 && (
//         <section style={{ background: bgSection, padding: "64px 8%", borderTop: `1px solid ${border}` }}>
//           <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//             <h3 style={{ fontFamily: "Georgia,serif", fontSize: 26, color: textC, fontWeight: 800, marginBottom: 32 }}>Related Articles</h3>
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
//               {related.map((rp, i) => (
//                 <div key={i} onClick={() => onBack(rp)} style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 14, overflow: "hidden", cursor: "pointer" }}>
//                   <div style={{ height: 160, overflow: "hidden" }}>
//                     <img src={rp.img} alt={rp.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//                   </div>
//                   <div style={{ padding: "18px 20px" }}>
//                     <h4 style={{ fontSize: 14, fontWeight: 700, color: textC, lineHeight: 1.5, marginBottom: 8 }}>{rp.title}</h4>
//                     <span style={{ fontSize: 12, color: goldLight, fontWeight: 600 }}>Read →</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}
//     </div>
//   );
// };

// const categories = ["All", "SAP / ERP", "Cloud", "Trade & Logistics", "HR & Compliance", "HR Tech", "IT Consulting", "AI & Data", "Company News"];
// const PER_PAGE = 6;

// const Blog = ({ t = {} }) => {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [page, setPage] = useState(1);
//   const [currentArticle, setCurrentArticle] = useState(null);

//   const gold = t.gold || "#C8820A";
//   const goldLight = t.goldLight || "#E8A020";
//   const goldDim = t.goldDim || "rgba(200,130,10,0.1)";
//   const bg = t.bg || "#0D1E38";
//   const bgCard = t.bgCard || "#112240";
//   const bgSection = t.bgSection || "#0A1628";
//   const textC = t.text || "#F0F4FF";
//   const textSub = t.textSub || "rgba(200,215,240,0.72)";
//   const textMuted = t.textMuted || "rgba(200,215,240,0.45)";
//   const border = t.border || "rgba(200,215,240,0.1)";

//   const handleOpenArticle = (post) => {
//     setCurrentArticle(post);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleBack = (openPost) => {
//     if (openPost && openPost.title) {
//       setCurrentArticle(openPost);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     } else {
//       setCurrentArticle(null);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   if (currentArticle) return <ArticlePage post={currentArticle} t={t} onBack={handleBack} />;

//   const filtered = activeCategory === "All" ? posts : posts.filter(p => p.category === activeCategory);
//   const totalPages = Math.ceil(filtered.length / PER_PAGE);
//   const displayed = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
//   const featuredPost = posts[posts.length - 1];

//   const logisticsCard = {
//     title: "Streamline Your Logistics Management",
//     date: "Featured Service",
//     read: "5 min",
//     img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
//     category: "Trade & Logistics",
//     excerpt: "At SHNOOR International LLC, we simplify global trade with reliable logistics solutions from Mumbai & Mundra ports — dry containers, customs clearance, multi-modal transport.",
//   };

//   const exportCard = {
//     title: "Import & Export Management: Connecting Markets, Driving Growth",
//     date: "Featured Service",
//     read: "4 min",
//     img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80",
//     category: "Trade & Logistics",
//     excerpt: "From India to UAE, Bahrain, Qatar, Oman and Malaysia — end-to-end procurement, shipping, and compliance. 'From India to the world, Seamlessly.'",
//   };

//   return (
//     <div style={{ paddingTop: 80, background: bg }}>
//       <section style={{ background: `linear-gradient(135deg,${bgSection} 0%,${bg} 100%)`, padding: "80px 5%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", position: "relative", overflow: "hidden" }}>
//         <div style={{ position: "relative", zIndex: 2 }}>
//           <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: "rgba(232,160,32,0.15)", border: "1px solid rgba(232,160,32,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 20 }}>
//             <div style={{ width: 7, height: 7, borderRadius: "50%", background: goldLight, animation: "pulse 2s infinite" }} />
//             <span style={{ fontSize: 10, fontWeight: 700, color: goldLight, letterSpacing: "0.18em", textTransform: "uppercase" }}>Insights & News</span>
//           </div>
//           <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(36px,5vw,64px)", color: "#FFF", fontWeight: 900, marginBottom: 18, lineHeight: 1.15 }}>
//             SHNOOR <span style={{ color: goldLight }}>Blog</span>
//           </h1>
//           <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", maxWidth: 520, lineHeight: 1.85, textAlign: "justify" }}>
//             Industry insights, company updates, and expert knowledge from the SHNOOR team. Stay informed about IT consulting, cloud technologies, global trade, and enterprise solutions.
//           </p>
//           <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
//             <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//               <span style={{ fontSize: 24, fontWeight: 800, color: goldLight }}>50+</span>
//               <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Articles</span>
//             </div>
//             <div style={{ width: 1, height: 30, background: "rgba(255,255,255,0.2)" }} />
//             <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//               <span style={{ fontSize: 24, fontWeight: 800, color: goldLight }}>8+</span>
//               <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Categories</span>
//             </div>
//           </div>
//         </div>

//         <div style={{ position: "relative", zIndex: 2, height: 420, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
//           <div style={{ borderRadius: 16, overflow: "hidden", height: 200, boxShadow: "0 12px 28px rgba(0,0,0,0.25)" }}>
//             <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80" alt="Technology" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//           </div>
//           <div style={{ borderRadius: 16, overflow: "hidden", height: 200, boxShadow: "0 12px 28px rgba(0,0,0,0.25)", marginTop: 20 }}>
//             <img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=400&q=80" alt="Logistics" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//           </div>
//           <div style={{ borderRadius: 16, overflow: "hidden", height: 190, boxShadow: "0 12px 28px rgba(0,0,0,0.25)", marginTop: -10 }}>
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4GlCxwdVz-DgIOMtw_iql4JUk-G_IMrONhw&s" alt="Team meeting" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//           </div>
//           <div style={{ borderRadius: 16, overflow: "hidden", height: 190, boxShadow: "0 12px 28px rgba(0,0,0,0.25)", marginTop: 10 }}>
//             <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMWFhUXGBgYFxgXFxgaGBcXGxcdGBoXFxgdHSggHRolGxgYITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0mHyUtKy0vLS0tLS0tLjUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYHAf/EAEEQAAEDAgQDBQYCCgEDBQEAAAEAAhEDIQQSMUEFUWEGInGBkRMyscHR8EKhBxQjM1JicoLh8SRTkrIWQ2OiwhX/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEAAX/xAAsEQACAgEEAQMCBQUAAAAAAAAAAQIRAwQSITFBEyJRFGEjMoGx8AUVQnGh/9oADAMBAAIRAxEAPwDn9WkWw+qM1V/uM5ciRy5BOw/CjVd7MSahu9091g5HmeisMNgKjqmUd7EPu47Um/Cfvx2fBuCtpn2QaTbM553dzJ9fCOoUJ5ti+/8AP+G2OHd/P5z+xmOL8EIYCHEloADne94Ztx0OmxAU3YXjxw9f2Na1KoRMnusfoHg6BpsDytsIWtxWBD+4BIvqgB2dpiXvGUUzmzPjLbfX3fvkp49XfEg5NIu4m+djqdKkarnZWC+Y77AganoNTIXL+OcYqY2sAJDRIY0mco3c6NXHc+Q6j8Z47UxdQNb7jbNaND/Oeseg6yrfsxgg20a6k6n6DkFZJzdELWGO59hPBeBAAbgXvqTzWnw9EM8FPh2QIb/lTMvstiVKkebOTk7ZPSiLKOu1Rkxp9+ClYZuuAgao7IC5xAAuSTAA6lZXi/bOJZhxf/qOH/i0/F3otF2lo5sLWHJhd/2975LnfZ/ADEVsrjlptBfUd/CxvzJIHn0WXPOV7UehpMWNxc5eCHH8Wyua7EF1UuAJGbRpMC+2hsFruyfaClUaKBMRZhcZGUiWidfD/tsQFz3tlUY7EOfS/dkAMEgwA0NiRbYpvC8MRh3VHOE5YZfSXtgu8CZHLMUMcVjju8lMv4z2+DthpRyPUFC1WrLfo/4k8n2dR5cHMlocSSNCBJ5Au8oWwqMWuMrR5eXHslQ7BmPBWHtFXYaynNSL7IiWUnbviBpYYuDspvEazER/9p8lyXgOLIeQS6MgzNvBIe0tV/iONZ2VWVHFzvalzd4GhN9PDqgaGIaXd033GWItefhyWOcpe60evgxxSjydB/8AUuJpFrnsD6Tw0scQWkyASA8WJB5glabg/GKWIb3CQ4atcLj5EdQsDwnta1v/AB67QaIAGkyIG0WO09QrPsM6K1UcmkeQeFPHLJGUU3aYc+PHKE2lTj8eTdCmpWgBQ06ic90raeWqIsXUELCdoqQc4yJWxxT4HNZXiBlxMKsURm+TPswIcLW5Kp4lhnDulajJlvCo+K4oOsP9rpUPjtsylfD95HcPw4JCne0OUtLDRBCEYj5Z8UP4vgG1Gd0QRoVmI2dtqtvSdBus3xqhDyQF00DDPwUlXDckNU0VkSo30g7xU7NVFc0KQJz6cL1jZvFvj/hGzkiSlROvoPmmPqwYgpVakaG5UAQSsZuuDuPZ3gDaLYF3G7nHVx5lWdVou1g1948zoiK9aO63Xf6KClOUTY7zBPqLaLxZJt8nqJ0iMMDbmwvJsABEyZ2XP+1XaI4lwpUp9k02/wDkP8R6ch5npJ2z7Te2PsKJ/Zgw4j/3DP8A4A+p6a0/DcESfj9FqwYPLI5s21FrwfhxEczqenIdPit9gcKAB9yqfhOGho5LR0mW5L0ox2o8fLlc2ehpaponoVCHEdVVdoOKmm0U6f72pAH8gdaf6jt68lPJNQVsfFjeSW1FyHwYNo1Xjnxcf7WJo8aZhsgYS9jpLjDjJEXAg94kmQNAJK1nB8fQxFMPpVMr9DTfNjymBqL7/kUuPLv8FcuneP7hhqBzS0jUEHwNlzfszh6rP1huV4bGVzgCGksfBbO+ptfRb8tLSZETtsfDoh8RiW0KdV7hmDWPfl3IdJMdM2bwzeEtKF8k8ebba+TkXGaGV+XYxHjcfX1XmHoPdZ5cWhwGUXhsFpI6j6LRcSp0qlPOJyuGZpy3bBvBm5EEQszxTiDqdZzafdIynMDeS1rvSTG6WKvg0ylSTNR2br5MQx0gAGCZGgbDp6WK6S5y5R2Kx76uKbmy5o7sNAAgaZRHLzW17P8AaqliWta4htYj3dndWfRUgqbRmze5KRpKZTMUAWuBkBwy2MHvd0AHYyQAU1lN/wDCfSPinPoOzNzCGtl2ouYhottdx8WtRc4/JFQk3wjkQwYa+sCTnZaJGmYgk+cJ9FkOJ8Pr81quP8OZWe4NcKNaSKb3Du1BMhjuZsBGvJYXiOJxFCoaVamG1NbCQ4aS29xbqs0XvVHqSW2pUEupuJLg0xMTtm1j0hbXsNiy/F1O7liiA/kXywZvOD6LDcOoVTmfUysB2cYOq6vwvC06QljA1xYwPLRGY7E9Zm6EWnlUUdnThglJ9svzUUNfHtY0ue4NaN3ED4qvx2PbSpuqPMNbr15AdSVyHjfHK2MxAaD7zmsptmGtzGPzJuenRbtq8njJt8I7S7GU3Nzh7S0/iBEeqqcdTbmkePT1XMuP8QFEOwrbFph1pD7RmDtYMA3UvYHjLxXFFzu4+dSfeA7oGwnTrIU1Pz4NL0zSq+Ta4wE2iAqivw68wtPUo30hAYukQnZGLaMvWwcGyQYQdEdimB0i4KgYyddeapHojktsdQogkX/P4oLtLhgIIg2ujMwF5FvVDcQrZxdGStHQdSMg9kHollRWMZDuiFc5ZmejF8DJG4lDOMaeSmcVCQgNYNcmSnp72piYB3QVcpNycx6W2gdN/VY7th2nJnD0TbSo4b82NPLn6c1F2n4+W/sqbyXgEPcDAE7AD8Xw8VksNTLiAvPw4b5Zvy5UuEWHDaBJka/D/K2XDMDAhDcC4cABIutXhMOFvgqPMzz3E3D6RarbLOiFay1iiWtMaqrMiB8c8U2F7rhomOZ0A8zbzXPeM4wiahMvJzT16cgPkukYmiHtLXCQRB+viuV8ewLv1unh3aPexs6S1zgJHlPoViz45Smvg9TRZIRhJeSg4lw2vTFOq4EU6oLmHNoCSL7iRccwZVv2exfs5Y50Oc3KDeJb3mmZs6d7Da0lbHtdhs1SA5paQ0CnlMAAQI525TELM0uGUqZBNMNJlrTmcQ18SLEkRpBGxlWcPCFjlXbXZo+C9r6mZtOswOpuIuRGU2Dsp2EwVo+N8Oz0yJEOaQ07gOEFrrbg8uR1AjHdnXNfQq0X5RFRp70CC4EWJBEyyP7kuF4HE4OsWSyK4GV8ZmOLTmLZ2qRmE9ZHR29qtmfasknGL5KPh2KGHNSjXEtac7RBkuBDTbllkn+i07i9puEZiMTR/aU6kB4aJLHmwsPwu2PO3JaDtNwU4l1M0jlqAwTE92LOOkQdTyPQKx4XwM4IDI7ObmpM5Xg+8A24A6b6+Ec01jafk0aePqxaZSdgOAOpYpj6rw3uuAaSNXDKAXTGaTYDkujcA4bTwwFKnRawR7wAv0cdSfFYfjDm1C04aXguAaNHMOYOAJ3ALQ4Gx7sGSHLouGc00mkWgAD4AetlmlOUny+TV6cYqkiHjHEBSiS+SP2Ya0EPffuvJHdHu3kam9gisJWp1O9naaYBcXAgjKLmSFS9puEuxAp5Tdjw4j/9DqsL2uruo4lzaMtLgCSDElwlwEbTslUrklQfT9tp8nS+JcCw+IafZvBB1ykPb5/7WK4/gsRTilBqRDWFu4P8W5dP5D0x9Lj9VpBdqND7rh4ObHzW27E9pqlas1hcS0SX+0h+VjQXOf7T3tBF7XC0+ljfRBZs2Pvkp6nYd1QODy9lYCzXuOTMRIMCYvyW64cxzQQ4GRDb7gN19S5R4Z/tHOqGxcc3UToPACB5IysIE8tfBQx5tsrfSH1GJ5I0u2c0/SPxhxrDD0zIYQI51HAddpA9VRfqTsHXIquaagpyC2XBjnDmfxBp12zAi4lHYprqXEXVaxFi6s2HHcks5EESD5Kj4njnVa1So8yXPM+EBo/JoXpupx46PNgnilyuQ7iuKbVYHOLthnLWz3drGZ8kJwWs1rjA1sCdecdFXZNyUqNQgiOal6SUXE0vPKU1JdncOEY321Frzd2jv6hv52KfWaCsR2PxDxiGtmxaQQNNJ87rcVOmqTBJuNPwJq8SjPjzyU+Mwgk/coCqNR/taF7AReSfzVbisJF48FpTMUkZyrTM2VfjKkGFe12EGP8AYVZiMLJnZGT4OhHkAxOFzMLiCI9FUOGy0Lmd0ifJUmLaFFm2AHVZyUJRAao3thAcicFEQpnOUa44IbLj93V9wbDgRzQvDcHMErT4XBWCaCRLNJlrgalrK6w1XkqTDU48FeYXRUqjK5Nlgx6nbWkaqv8AaE7JxqGNUKAmGOxANt1QdoMI1z6FYksNGoHZgAYb1nbNlk7CSi9Tc/fRIVL3XbTlNp2YzjdF9PEZ3klriTIgTzjyiyZxIuDQ11w52djubbyD1BJPTN4LQ8foFzC0gOGrSAczDsS1uojceYOqoMDXovb+r4p0MJ7jg4gtJ5OFgD1tzsl6ZpUnKNme4zxDLla0EOkPe6TBIkNEfn5KfBdp3ezNNzjGs8nC4cORBVnxKhwui9gYCSJzDMKjHAy3c7e9IjRqqcPh8HmzMZVqhpBcHO7gE2kNGaJ/mReVRVMEdM8jUun/ALOocKxeGcJpvDqjmg1IBgHQgHTXbzWi4XgoaXP1Pu8w3n4n4LnnYevhhiC57BSptbYl1VzQXGYJcS1jTGpt3Ym5W77VcXFGl3D36g7hFxG7gdJg28DrCx48ac7NuoyOMdqM9Rw2Do4ksYx2a4dUYRDSDLg5hIBDQJLto6Ijg/GKNeu4U3gspe6IIzvOryDoACQBzJKw3aXiHsGmgz964ftTu0ailPQ3d1gWymRuyTyx06GRdLnhFcobTOcvzHX69WO8PNc57fUZd7UaAienVXPHu0LqORobLiJJI7sXsDIvI/P0zjuJ5nVW1nTTM5IEyHOJhsxYM5kRBUVCT9yLLJGL2szZOaQfeH5q/wCw+EIrOdJa0sLHAfiBcDlNtO6NL2VJ+rt7jqbnESZzRPOdLbc1v+ymDacuaRJh0eFiPOAjkbT2ryUjtcHORcUiWu18OqsKr2+zc90hjWlzzBs0CT8FbYXCUmxDASN3d4/ms1+kKvWZ7OpTzuADm5QJAcfxOGhESII3TLTyS5M/1UZySRna3B2Yl2JJIc15bkdAJY4MABiToZBHiFzDF4Ooyo+k5pztdlcBe438CLg8it8O0lakwRSptc4utkIJ5u/huTt6LL9o8XiKrvbPBAIDXQIE3A6aQPJV00nGTjJ8A1ePdHdFclRVAaIBBO5+Q6KPDTmBGyY8c1NSeAtr5MCVI0vYvHf8loIvcTykLpdMyuR9lakYqmW6Ekac23+a6hhn7JFBK6BlyOTVk1ap+W6G/XAdf9r2tUE/d5VdXAaCiich2Owea4HluqevmbYo9mMIMX6JmOipbePsIs6HBSVWZpvCqcRhiPmrd1ItnMD56KelgwWyIvsOt/JTZpiZmk2E2rSVxX4cQZg39ZQWIw5bqEBrKio1MLURWaokQmnwjIAV/gK0QqbDTsrLDG6ejNdl6wcvv6Iym8AAQq7C1bI0Vhp/tGydB5fOiGrPPhzXrXRefvopPZ7p0SkiFtfmI5ITiGLLKVSpHuNnzkNE+Z/JGVDYkagOI8QC4fALHYTGNOHrYeZe9zO7JkgOvA0sbnxCz58217UbNJpvUW9vphQ7eGm0MY5xnUgMbA3OhJ6Cyhx3E2Y2zaYa5suDy1uZ3e/EWgAW6ed7Y5uHdmOYXMrTcNr08PSqOqNcZ7oLNWuN2k/y90+oUVSao2yVxfBmOI4V7HlzhInUbbAEbfPaVtf0bUGFlZxFnlrI27rcx84cPToqfF46llL3ukgQxoPvTeSdqfManQbkXfYzijm4d36phc8PzVHuynK8ixYwmAAGjzV9QnLHtRj0zrJufg1GH4EQ51RjIGXWIzNF46rzCBzDFJ+UEzkIzUidZyH3Xby0tOkozstjaxNR+IaaYdkguc2C8SCGN1EjaTJCoO1uJNCqKgEU6mQCQC8Q+TlMwBMSbmI0MLH9O4U0zd9QptxasyVbhRdVqZzfM7yANvFHYDCmmcrhoiKzprFzdCZ8FoGYIPYDvt9PBZpZG+zcoRj0VfHiyrhCXDMaYc5piT7unhpKwOCoZ2vc9xAEiNJIi86byf8AK3uPplkZbfxD5hY7EcOJ9oQbHa/P7Kvp8iSpmbUYNz3IueFcNDKIcQRIJDnRuLG1uoRn6NHOIqk1HEy3KHbOE31PT0RXZ8CrhRQLQC1sD+Yc/FQcI4dUwtU/wk+nQqbyfmRT07UfsjrNGoC0OGhAI8CJUWMyEd+IWOxHEcTLabKjKdOLOyFz7mYuco9Dsq6k2jUrvo1nvrvY1rne0dLO9MDIIaHCAdNHNWn6qNccmFaKV8uvgt+K1cFULWU3sdUadG960XkiQNteSr+LYP2tCpSIHeaY/qF2+eYBGnBtZGQAN2gAfBUvarib6FHOyc2YAGJA8Vh3PJkVKj0VFY8TTdnLKjXE2HgvAB+Ij4/BXdDGCMsuHMg6bXA6onhNNjtQHQdYlezFN9njzklykRdl2/8AIYQ1wYTaxAJAPrvp0XRGAc/8LP4FgZVMCAWCOhzXjxkeitBVuDKokZZyt2FVid1X1p0P3/lFjESIKBzSMuaOXP8A0kGT4K9zrprKkHw0j4fJOrEz9ERSwj7OgztbZCUkikItkjeH5+8+eg5D67pgoezJuMh3n4hG4fEZJ1Sq1QdR9I6hS5ky/EV9ykxeIAsL/FCVWgzCPx2HbHLr81WOB2RqgXZW4pkqvLVZ4h2yCc1FDGnwgjRWFK/T73QVCEXT6LQlZ58nQdQMI2i+SgWA7oigL9F1Hbi1Y4KQO2++v+kJSftqpWmJKFAbJXgSL62PgbFcm4vUdRxOcWLTMdRYj0XUa9S2qwfbHh0EVRcEy4cjqfLVRyY7mpfoa9PlSg4fqjPv4oS8O20A5Dx59VcVuP0nUHUvY5nGLugAEfiETJHlusqE9nVH042n8DvLKmr7HmC6Ntl0LsBiqmEbVqvZFNzQAHGJcCdG62B1hYfB0g9wa2AfxPMCBIk3IHlutRw/ijcNSDRRY8EXfUhz3AmSIbAAvoZKGWT6XYcME+ZLg29PE1caWwMtIGZi56DkFZ9qOGMqYUhxALIc0uIAndsnmLRzhZ3h3bIDDU3togDMab8gswgBzQxhO7ZiSfdNiouKYx2MDGtw72Brs5q1XS50CwaIEDWwAGiXJOMYOwY8eR5E0umOwWEy3cLR9lZzhHbwttWpy06OZqBtLTrbcHyWxqNdUw9VrAA8UnkEmA05TcnYTH5Lj9XDuFi0jysdrHQjwWTS4Y5IvebdXnnCSUDp/wD/AFaOJbNN4cRys4f1NNx6LPUJzEajX568ljWEgyJBGhBgjwIuFs+yIqVGOe45odAJF9ATJ3Fwuzab0ouSfA+m1fqtRa5L7gjRcabg8vDorhmIzOLHth2x2cPrtKEZg2tHtG1WTMBk94mCSI5gCeoHgjxSD2jZw0Py8FjlFrvyalOMrrxwVPHeIDC0XPdc6Uhzds09BrPIc1j+xVf/AJTqtWplbkeajyCbuIIsNy4WjYHkl2/xFR+KyOmGNaKY3OYAkxu4ut/aEsPR9m1tJtzIL4k5nm0CNY0EeMd4r09PgisXPk8rUZ5Sy8f4nTKEluYFtSmdHsOZvmdvOFU9pOFsq0iHGBBg8idDG4mOquMMG4LChhcW1HAuc5jdLjNcNItIFxfXms12mq/rLWtwlZmdri57KjgxxtbKTlG5t1F1D6VRyKnwWWqlLFLjn9zl1R8WH5FXHZPGPZVdlmCwz5EGfvmheMcIq0jLmQHaXESLGOkz0XnDCWZjzEffVenFVI89tSjwamhxJ1R4zOEMaWtaAAACRLrauJAkm9htCPp1xpKx+FxBa/N4/X5LeGgwNdDR+7N4k5i2AZ/qIUc2dY2lXbKY9K8ibT6RE7ENjr93Q9Mh1yYHRR0xAjUnXwVphgwNl+u9/RdOe0GLFuAnQ0yIiytqfFRAEDz8NlScRfJtHkhRWIHMJEt3LKSahwi2q1Mx5TMW3QlKtM8/p8kyli7cpjX6hRV6xEybfPnKqlRC2ySvUkeQlVVenFwpHYg+KhfVStFIsAxCFROJQhKCKGmwtRH064CpQ77+KLoyrpmCUUy9ZVBHP4p1OwCAoPy66aheitJsiLRb03p4qkICnVUzsTOyIKCM0oHidIOYR6HkdiFK+rASYJQD0YGvwcFxObIRqMrnS6fw5RA2N4Gvgh6fC4ILycogkDUjUgHY+S1ePoxVHujNIOYhokCRcmBaRfkFSYupJc1tzeMt+kkiw/MocIspSYJi3U2fumlh55nExc3k66bKrr4hzjJJMcyT8VLnmZvKgy3SPuy0eI0bHsZxUUT7NxJFaJAiA4F2XY7kXEclvmVQ2AdDodgeR8dvMclyGiJc0tIJG0AEiLxz878luuy3Eqrg5tZvcByiqb5uhFiSARLgI5wVk1GlnKpR5NGHW44XGfBo+09OnSw/sTUyVKxBc0CS5o/Ab2HXnz0WB41TAA9kwgEaObEXgv1Oul4Ous2Z2uxLW1W+yqPdlaBdxdbM4lsk2bcd3SCouB8be/FUZaXnNliT3g4ZMp5AAzZP6UotLwjseaE4Oadt+QDDcHfVIDWOb1iW8zr0HPyW77LYQUsI0tcHEZ3OLbXzH5R6J+Mo06ba1NjvZklzW2NwRBAMDQyAdIg6krO8LxOWuxpc5uUwYNj3S0SOV5Ive/KJZ3vTjfRbBDZU6uySlUc7F+1BlpI02IELX062hufvXos7xqn7BrqjRYkCIkMkxn8Br+SN7X46phnUKdNwDXU3tcJGYSWjMXETJbmGaVmjB5Kfg1zmocAfa2rRFXD1zclrmiNALRU65cxgdZ2QHAOLURi6T30xkJtBs18wHOGhE3/NeduMJDKMXEOi8m7pud7381jGOIdbYrbg/JwzBnXv67O19t6rXUwwwHRnc4mMjBvOxJHoHLmnCnOr1oHuM5xLhNhB3N9dBK2wr4TE4EsrBtN8CXAkvcRuNZG+WQByWNwtY4Vj2A9592uH4mH3XeECI5yq6aSnN2zPqISx41FL9QntFiw6GCLawZAOkA7gc91SAkaJhrWJuQIk6xOk8lBWxIhapyvkz44bVR452ZwaPxGPXUroGNxOWi1v4qkeTGmSfNwaPJyw/Aqbc/tKkgDQDUnk3r10CunYp1VznugQcoA0a0e60eXz5rBkxvJkTfSPQjlWPE0u2XuDI1KZxDEZtLKuw+JM5VPV8FX07dsz+o1Hagb2negr2o4xZIvE6JVPkqEiD2sKKo8lShu5QtR8IWMojs/NQVSlMpjigx0RVShSUTVchyEqHLJlUo6jWVcx8IxlSVZGSQfQxJ8UQKl0HRZuFI9yZEmWlJ43U1jugaTu6E9lVEW2WL2iNUG6pBsoq1YoanV6+KDGigl2H9s4U4bLrDMbfdlG7hn6uXZgM2ggWA6c55qGnXDH5socLyDyIixGh5Hor1+KZXpAk5gbNedQf+nV5P5HR3jZefrZZEuOvJ6n9Pjj3c9+Dl1axd/UZ9Ux4CO45gSx5MeP1VaXLVjmpRTRHNBwk0xe1jRb3s5xc/q9KnOUTdwGokkg3t4jrpqsC1k/VaLgzc1J9PNlyluomzpN99QfVaMUvdR5+sx3j3Fp2nxlLEl51MANLYgEG7iAJki0m0AKl7LVWUq+dxc0gHK5hghxtI52J8uaZiHU5h3ej8TaeU+sifMIZ7mAy3Mf6oHw/wAJsiUuyenlOEdqbNrjKj3vFZ5NSlo7uubAic7hADZAEkQBARFLh9J5FRpBOzmuBm/MWJGiyWA45UpzEAxEjUDcDUD09U7jlOnUojEMJzZgHgaCR73mRtadt1nz6eGSHs4Zq0urzYcv4nKfC+DaYqq0tyOIB0BJAF7Rc6Hl9FpePcLoOxGHqVQyGNeGsLS/NUc5mUuaDJAg87wuB5txqu00+IN9kyuKmY+ze4B5YI7jf3P8odE/iJAIBGuXHp/TXdnoZtQ8jXgoP0i8WzubTLGAtNsg/Dtm+n1WCY0ZiYV3ic1SXO7ziSev1VWaUOg80Yx2oO7c0WXCcQ+zQTEgGN/sfBO7WVGn2VMDvUw8GOTiHNHjJcf7gp+z1G5PQeZ1Vd2hpOFd4cdYImPdItHQaeSljkvVL5ot4imYS0nKSJkeXJSMwwMG08hz8E1wgwdQYPkiaNYCTBtI85sJ+XRbTz2HYJrGkGq4hu5Akxs1gOp2E+JtJRTcQC57gwU2uIysBJyiABJOrrSTzJsNFWanM7yH8P8AnmUSwoisscK2/wAFY1XQFUMrEWmymdX2K4RDj0XlQwvA8BIPG6SUi0YWNc5DVIU9RsmAh6whKpDuJCF5msnsKhdYphCIiVG8J7lHK4YKZqp6T4PND07xH5bqfJAVCFBVPFkaIhtQbqrY5TU6i6xXFFpTrxZEMKqqT+ae3EXhPZNxLF1RRe0AKFZiE2tWQYUEVnBCt4g+kZYbGzm2yuBEEGQR+RGkyvTXEXQuIZyCSSTVMpB07Lg4yhimQ+GPjc78gTt0JnS5JgZviPCjT7xjLs4GxHQqKvT+/n4qCo7KIzSZ8h67/D4Z44NjuL4+Da9RvjU1b+TzOGjTvbD+H+Y/zchtrrCvuy9D9nVP8TQZ8CQBHPU+azYatiyq2nhgGxJME88vc+AW3AluPL/qE2sVLy0jPOmSo3J7WknVOrtgxJPinZOLppAmIqFsIrCcQIa9syx4hwPx8UBjfeA6fNRvao7qZq9JTjyNCu8HxwiiKNQnI0yLA+lpBAAHgIVKkkfJcvcLiC52caE6dArF2Ha8gkkc1l8NiCw2Nt1ZU+KWvY9B8LqeROuCmNpO2aSm4MbYwFTccx4qlth3c0u5ydB0ED81A+s6p+MNbu4yfK3dHm4JoxFKke5L3D8Q18naN3swE8nhZoYmnfk2TzJqhjeHgHNVJaNcts8HQumzB1Nzs1yGquaahLGhrdom/UySZSrYkv1sJkNHujmeZJnUmTvKa0XlaY2uzHKn0TBykovUITqaeybRZU3JpqplFeVQjYlHhqGU72pUeVeFyA1kwxG6aa06qBya1yFIa3QRnUZcvJUUogPXKNyc5yjJQoKZFh68XGm4+Y6q1p1w8c/n/lZ5roRWGrlpzNjqDcHxCPQKTLd6lo0t1LlpvYKlIy22dhPepO6/xMOzvI3TmPiAdF0ZKXIs4OLpjLJOaNVFWN157VPZPaTtfeF5VGsXTWCVMWLrBQO2U4gJ+RDPqXXDI9r0LKrxFNWQqoauAgMgTDU5JuBAm5j8QaPzM+Skr13MOU+7qPqOi8w1d1N2Zpg6G0gg6tcDYg8irUvo1AAC2mY/d1c2T+yqJLR0IPjEBTc5RdoqscJxpgGHxjT0PX7unVnjUlSVOz7jdrXf2xVb5GmSY8QFE3sziDoxx/td9E/1Ma5I/wBvalaAg7M+dAExynxGFNLuuidI3HU8uXqoJS3fJbbt9oyF6QntXlRGwURlPbptY8tvP7umwvWmFzOSHNAUh5Cw/PzKiCkCDGQgbqemUOpWFAKCGlSCygATgUDmF4eT9ETUEi3+ULSdAUpqWRTtgapEa8cvM97rwphERuTCE55TJQsahwKa4ppcvCVxx4UwleucmkoigKTTCSSIAmjWIMtMHf75KxoYvMI+/wDSSSAz5RMD6JwakkmRNk9N8ap5O+y9SREB3Vb2QtZ10kkGOhjXJ9RqSS4LBnsXhqQCCAbW0keevlPNJJAKIQR1B9fovQ8nV5A8T8N16kloa2Q1Hy6dOQ5DQD0XiSSJwpTw5JJcwo8cE1JJA49CcCkkuCIFSNKSSASQOTwV6kgFHrXohrrJJLjuyMuTC6EkkxMjzpFySS4YjzJFySS4VjSvJSSRAf/Z" alt="Cloud technology" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//           </div>
//         </div>
//       </section>

//       <section style={{ background: bgSection, padding: "48px 5% 24px 5%", borderBottom: `1px solid ${border}` }}>
//         <div style={{ maxWidth: 1240, margin: "0 auto" }}>
//           <div style={{ fontSize: 10, fontWeight: 700, color: goldLight, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 18 }}>🚢 Service Spotlight</div>
//           <div
//             onClick={() => handleOpenArticle({ ...logisticsCard, content: logisticsCard.excerpt + " Full logistics management content here..." })}
//             onMouseEnter={e => { e.currentTarget.style.borderColor = goldLight; e.currentTarget.style.boxShadow = `0 12px 40px rgba(200,130,10,0.15)`; }}
//             onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.boxShadow = "none"; }}
//             style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 20, overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1.2fr", cursor: "pointer", transition: "all 0.25s" }}>
//             <div style={{ height: 320, overflow: "hidden" }}>
//               <img src={logisticsCard.img} alt={logisticsCard.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//             </div>
//             <div style={{ padding: "48px 44px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
//               <div style={{ display: "inline-block", background: goldDim, border: `1px solid ${border}`, borderRadius: 6, padding: "3px 12px", fontSize: 10, fontWeight: 700, color: goldLight, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, width: "fit-content" }}>{logisticsCard.category}</div>
//               <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(22px,2.8vw,36px)", color: textC, fontWeight: 800, lineHeight: 1.3, marginBottom: 16 }}>{logisticsCard.title}</h2>
//               <p style={{ fontSize: 15, color: textSub, lineHeight: 1.8, marginBottom: 24 }}>{logisticsCard.excerpt}</p>
//               <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
//                 <button style={{ background: `linear-gradient(135deg,${gold},${goldLight})`, color: "#0D1E38", border: "none", borderRadius: 8, padding: "10px 24px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Read Full Guide →</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section style={{ background: bgSection, padding: "24px 5% 48px 5%", borderBottom: `1px solid ${border}` }}>
//         <div style={{ maxWidth: 1240, margin: "0 auto" }}>
//           <div
//             onClick={() => handleOpenArticle({ ...exportCard, content: exportCard.excerpt + " Full export management content here..." })}
//             onMouseEnter={e => { e.currentTarget.style.borderColor = goldLight; e.currentTarget.style.boxShadow = `0 12px 40px rgba(200,130,10,0.15)`; }}
//             onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.boxShadow = "none"; }}
//             style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 20, overflow: "hidden", display: "grid", gridTemplateColumns: "1.2fr 1fr", cursor: "pointer", transition: "all 0.25s", direction: "rtl" }}>
//             <div style={{ height: 320, overflow: "hidden", direction: "ltr" }}>
//               <img src={exportCard.img} alt={exportCard.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//             </div>
//             <div style={{ padding: "48px 44px", display: "flex", flexDirection: "column", justifyContent: "center", direction: "ltr" }}>
//               <div style={{ display: "inline-block", background: goldDim, border: `1px solid ${border}`, borderRadius: 6, padding: "3px 12px", fontSize: 10, fontWeight: 700, color: goldLight, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, width: "fit-content" }}>{exportCard.category}</div>
//               <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(22px,2.8vw,36px)", color: textC, fontWeight: 800, lineHeight: 1.3, marginBottom: 16 }}>{exportCard.title}</h2>
//               <p style={{ fontSize: 15, color: textSub, lineHeight: 1.8, marginBottom: 24 }}>{exportCard.excerpt}</p>
//               <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
//                 <button style={{ background: `linear-gradient(135deg,${gold},${goldLight})`, color: "#0D1E38", border: "none", borderRadius: 8, padding: "10px 24px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Read Full Guide →</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section style={{ background: bgSection, padding: "48px 5%" }}>
//         <div style={{ maxWidth: 1240, margin: "0 auto" }}>
//           <div style={{ fontSize: 10, fontWeight: 700, color: goldLight, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 18 }}>📌 Featured Article</div>
//           <div
//             onClick={() => handleOpenArticle(featuredPost)}
//             onMouseEnter={e => { e.currentTarget.style.borderColor = goldLight; }}
//             onMouseLeave={e => { e.currentTarget.style.borderColor = border; }}
//             style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, background: bgCard, border: `1px solid ${border}`, borderRadius: 20, overflow: "hidden", cursor: "pointer", transition: "border-color 0.25s" }}>
//             <div style={{ height: 340, overflow: "hidden" }}>
//               <img src={featuredPost.img} alt={featuredPost.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//             </div>
//             <div style={{ padding: "44px 44px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
//               <div style={{ display: "inline-block", background: goldDim, border: `1px solid ${border}`, borderRadius: 6, padding: "3px 12px", fontSize: 10, fontWeight: 700, color: goldLight, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, width: "fit-content" }}>{featuredPost.category}</div>
//               <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(20px,2.5vw,30px)", color: textC, fontWeight: 800, lineHeight: 1.35, marginBottom: 16 }}>{featuredPost.title}</h2>
//               <p style={{ fontSize: 14, color: textSub, lineHeight: 1.85, marginBottom: 24 }}>{featuredPost.excerpt}</p>
//               <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
//                 <span style={{ fontSize: 12, color: textMuted }}>{featuredPost.date} · {featuredPost.read} read</span>
//                 <button style={{ background: `linear-gradient(135deg,${gold},${goldLight})`, color: "#0D1E38", border: "none", borderRadius: 8, padding: "9px 20px", fontSize: 12.5, fontWeight: 700, cursor: "pointer" }}>Read Article →</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section style={{ background: bg, padding: "72px 5%" }}>
//         <div style={{ maxWidth: 1240, margin: "0 auto" }}>
//           <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 48, justifyContent: "center" }}>
//             {categories.map(cat => (
//               <button key={cat} onClick={() => { setActiveCategory(cat); setPage(1); }} style={{
//                 background: activeCategory === cat ? `linear-gradient(135deg,${gold},${goldLight})` : bgCard,
//                 color: activeCategory === cat ? "#0D1E38" : textSub,
//                 border: `1px solid ${activeCategory === cat ? "transparent" : border}`,
//                 borderRadius: 8, padding: "8px 18px", fontSize: 12.5, fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
//               }}>{cat}</button>
//             ))}
//           </div>

//           <p style={{ fontSize: 13.5, color: textMuted, marginBottom: 32 }}>
//             Showing <strong style={{ color: textC }}>{filtered.length}</strong> articles
//             {activeCategory !== "All" && <> in <strong style={{ color: goldLight }}>{activeCategory}</strong></>}
//           </p>

//           <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28, marginBottom: 52 }}>
//             {displayed.map((post, i) => (
//               <div key={i}
//                 onClick={() => handleOpenArticle(post)}
//                 onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.borderColor = goldLight; e.currentTarget.style.boxShadow = `0 16px 40px rgba(200,130,10,0.12)`; }}
//                 onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = border; e.currentTarget.style.boxShadow = "none"; }}
//                 style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 16, overflow: "hidden", transition: "all 0.28s", cursor: "pointer" }}>
//                 <div style={{ height: 210, overflow: "hidden" }}>
//                   <img src={post.img} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//                 </div>
//                 <div style={{ padding: "24px 24px 28px" }}>
//                   <div style={{ display: "inline-block", background: goldDim, border: `1px solid ${border}`, borderRadius: 6, padding: "3px 10px", fontSize: 10, fontWeight: 700, color: goldLight, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>{post.category}</div>
//                   <h3 style={{ fontSize: 15, fontWeight: 700, color: textC, lineHeight: 1.5, marginBottom: 10 }}>{post.title}</h3>
//                   <p style={{ fontSize: 13, color: textSub, lineHeight: 1.75, marginBottom: 18 }}>{post.excerpt}</p>
//                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                     <div style={{ fontSize: 11.5, color: textMuted }}>{post.date} · {post.read} read</div>
//                     <button
//                       onClick={e => { e.stopPropagation(); handleOpenArticle(post); }}
//                       style={{ fontSize: 12, color: "#0D1E38", fontWeight: 700, background: `linear-gradient(135deg,${gold},${goldLight})`, border: "none", borderRadius: 6, padding: "6px 14px", cursor: "pointer" }}>
//                       Read →
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {totalPages > 1 && (
//             <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10 }}>
//               <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
//                 style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 8, padding: "9px 16px", cursor: "pointer", color: textC, fontSize: 14, opacity: page === 1 ? 0.4 : 1 }}>‹</button>
//               {[...Array(totalPages)].map((_, i) => (
//                 <button key={i} onClick={() => setPage(i + 1)} style={{
//                   background: page === i + 1 ? `linear-gradient(135deg,${gold},${goldLight})` : bgCard,
//                   border: `1px solid ${page === i + 1 ? "transparent" : border}`,
//                   borderRadius: 8, padding: "9px 16px", cursor: "pointer",
//                   color: page === i + 1 ? "#0D1E38" : textC, fontWeight: 600, minWidth: 42,
//                 }}>{i + 1}</button>
//               ))}
//               <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
//                 style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 8, padding: "9px 16px", cursor: "pointer", color: textC, fontSize: 14, opacity: page === totalPages ? 0.4 : 1 }}>›</button>
//             </div>
//           )}
//         </div>
//       </section>

//       <section style={{ background: bgSection, padding: "72px 5%", textAlign: "center" }}>
//         <div style={{ maxWidth: 580, margin: "0 auto" }}>
//           <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(22px,2.8vw,34px)", color: textC, fontWeight: 800, marginBottom: 14 }}>
//             Stay <span style={{ color: goldLight }}>Informed</span>
//           </h2>
//           <p style={{ fontSize: 15, color: textSub, lineHeight: 1.85, marginBottom: 28 }}>
//             Get the latest insights on IT staffing, cloud trends, global trade, and enterprise solutions — delivered directly from the SHNOOR team.
//           </p>
//           <div style={{ display: "flex", gap: 12, justifyContent: "center", maxWidth: 460, margin: "0 auto" }}>
//             <input placeholder="Enter your email address" style={{ flex: 1, background: bgCard, border: `1px solid ${border}`, borderRadius: 10, padding: "13px 18px", fontSize: 14, color: textC, outline: "none", fontFamily: "inherit" }} />
//             <button style={{ background: `linear-gradient(135deg,${gold},${goldLight})`, color: "#0D1E38", border: "none", borderRadius: 10, padding: "13px 24px", fontSize: 14, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>Subscribe →</button>
//           </div>
//           <p style={{ fontSize: 12, color: textMuted, marginTop: 14 }}>No spam. Unsubscribe anytime. We publish 2–4 articles per month.</p>
//         </div>
//       </section>

//       <style>{`
//         @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
//       `}</style>
//     </div>
//   );
// };

// export default Blog;


import React, { useState, useEffect } from "react";

const posts = [
  { title: "SAP MM (Materials Management): A Comprehensive Overview, Features, and Business Benefits", date: "12/16/2025", read: "2 min", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&q=80", category: "SAP / ERP", excerpt: "Learn how SAP MM helps businesses manage procurement, inventory, and vendor processes efficiently across global supply chains.", content: `SAP Materials Management (MM) is a core module of the SAP ERP system that handles all procurement and inventory management activities. It streamlines purchasing processes, manages vendor relationships, and ensures optimal stock levels across the enterprise.\n\nKey Features:\n- Purchase Order Management: Automate and track purchase orders from requisition to receipt.\n- Inventory Management: Real-time visibility into stock levels, movements, and valuations.\n- Vendor Evaluation: Score and manage supplier performance with built-in analytics.\n- Invoice Verification: Three-way matching of purchase orders, goods receipts, and vendor invoices.\n- Material Requirements Planning: Ensure the right materials are available at the right time.\n\nBusiness Benefits:\n\nSAP MM reduces procurement costs by up to 20% through process automation and better vendor negotiations. It provides complete audit trails for compliance and eliminates manual errors in inventory tracking. Integration with other SAP modules like SD (Sales & Distribution) and PP (Production Planning) creates a seamless enterprise data flow.\n\nFor global enterprises operating across multiple countries, SAP MM handles multi-currency transactions, diverse tax regulations, and international procurement standards—making it indispensable for organizations with complex supply chains.` },
  { title: "Import & Export Solutions for India & UAE: Simplifying Global Trade Operations", date: "12/15/2025", read: "3 min", img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=500&q=80", category: "Trade & Logistics", excerpt: "Discover reliable import and export solutions for India and UAE — documentation, customs, and compliance made simple.", content: `The India-UAE trade corridor is one of the most significant bilateral trade relationships in Asia. With annual trade volumes exceeding $85 billion, both nations have signed a Comprehensive Economic Partnership Agreement (CEPA) that reduces tariffs and simplifies customs procedures.\n\nKey Trade Categories:\n- Petroleum products and chemicals\n- Precious metals and jewelry\n- Machinery and electronics\n- Textiles and apparel\n- Food products and agriculture\n\nDocumentation Requirements:\n\nSuccessful import/export operations require meticulous documentation. For exports from India to UAE, businesses need a Commercial Invoice, Packing List, Bill of Lading or Airway Bill, Certificate of Origin, and any applicable quality certificates.\n\nCustoms Compliance:\n\nUAE customs follows a harmonized tariff schedule. Most products face a standard 5% customs duty, though CEPA signatories can benefit from preferential rates. India's export compliance requires IEC (Import Export Code) registration and adherence to DGFT (Directorate General of Foreign Trade) regulations.\n\nAt SHNOOR International LLC, we handle end-to-end documentation and compliance, ensuring your goods clear customs without delays.` },
  { title: "Building Trust Through Reliable Background Verification Services", date: "10/14/2025", read: "2 min", img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&q=80", category: "HR & Compliance", excerpt: "Protect your organization with professional background verification — credentials, criminal, employment history.", content: `In today's competitive talent market, hiring the right people is more critical than ever. Background verification services protect organizations from fraudulent credentials, undisclosed criminal histories, and misrepresented employment records.\n\nTypes of Background Checks:\n- Educational Credential Verification: Confirm degrees, certifications, and academic achievements.\n- Employment History Check: Validate previous job titles, tenures, and reasons for leaving.\n- Criminal Record Check: Screen for local and international criminal histories.\n- Identity Verification: Confirm government-issued ID authenticity.\n- Reference Checks: Speak directly with former managers and colleagues.\n- Social Media Screening: Assess professional conduct online.\n\nWhy It Matters:\n\nStudies show that approximately 40% of resumes contain some form of exaggeration or falsification. A single bad hire can cost an organization 3-5x the employee's annual salary when factoring in recruitment, training, and productivity losses.\n\nOur verification process typically completes within 3-7 business days, with digital reports delivered to your HR team. We maintain strict data privacy standards and comply with local employment laws in India, UAE, and GCC countries.` },
  { title: "Cloud Migration Best Practices: Moving to AWS in 2025", date: "11/20/2025", read: "4 min", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&q=80", category: "Cloud", excerpt: "A step-by-step guide to planning and executing a successful AWS cloud migration with zero downtime.", content: `Migrating to AWS is one of the most transformative decisions an enterprise can make. When done correctly, cloud migration reduces infrastructure costs by 30-50%, improves scalability, and accelerates application delivery.\n\nThe 6 R's of Cloud Migration:\n1. Rehost (Lift & Shift): Move applications to AWS with minimal changes. Fastest approach, suitable for legacy apps.\n2. Replatform: Make small optimizations without changing core architecture (e.g., moving to RDS).\n3. Refactor/Re-architect: Rebuild applications using cloud-native services for maximum benefit.\n4. Repurchase: Replace existing software with cloud-native SaaS solutions.\n5. Retire: Decommission applications that are no longer needed.\n6. Retain: Keep certain applications on-premises for compliance or latency reasons.\n\nMigration Phases:\n\nPhase 1 - Assessment: Inventory all applications, assess dependencies, and estimate costs.\nPhase 2 - Mobilization: Set up AWS accounts, establish networking, and train teams.\nPhase 3 - Migration: Execute migration in waves, starting with non-critical workloads.\nPhase 4 - Optimization: Right-size instances, implement auto-scaling, and optimize costs.\n\nCommon Pitfalls to Avoid:\n- Skipping the assessment phase\n- Migrating everything at once\n- Ignoring security configurations\n- Not establishing monitoring from day one` },
  { title: "The Future of IT Staffing: Trends Shaping the Industry in 2026", date: "01/08/2026", read: "3 min", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80", category: "IT Consulting", excerpt: "How AI, remote work, and skill-based hiring are reshaping IT staffing globally in 2026 and beyond.", content: `The IT staffing landscape has undergone seismic shifts since 2020, and 2026 marks a new era defined by AI augmentation, distributed teams, and skills-first hiring models.\n\nTop Trends Reshaping IT Staffing:\n\n1. AI-Augmented Recruitment: Machine learning algorithms now screen thousands of profiles in minutes, matching candidates to roles based on demonstrated skills rather than job titles. Expect AI to handle 60% of initial screening by end of 2026.\n\n2. Skills-Based Hiring: Employers are dropping degree requirements in favor of demonstrated competencies. Coding assessments, project portfolios, and micro-credentials from platforms like Coursera and AWS are becoming the new standard.\n\n3. The Rise of Contract-to-Hire: Organizations are increasingly using contract engagements to evaluate candidates before offering permanent positions—reducing hiring risk while maintaining flexibility.\n\n4. Global Talent Pools: Remote work has made geography irrelevant for many IT roles. Companies in the UAE and GCC are increasingly hiring Indian developers, while maintaining physical teams for client-facing roles.\n\n5. Cybersecurity Talent Shortage: With cyberattacks increasing 38% year-over-year, cybersecurity professionals command premium salaries. Demand far exceeds supply, creating a talent war.\n\n6. Low-Code/No-Code Specialists: As citizen development grows, specialists who can implement and customize low-code platforms are in high demand.` },
  { title: "Logistics Management in the GCC: Challenges, Opportunities & Best Practices", date: "02/14/2026", read: "5 min", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&q=80", category: "Trade & Logistics", excerpt: "Understanding the unique logistics landscape of the Gulf Cooperation Council — key ports, routes, and compliance frameworks.", content: `The Gulf Cooperation Council (GCC) represents one of the world's most dynamic logistics markets. With Jebel Ali Port in Dubai handling over 14 million TEUs annually and ambitious infrastructure projects across Saudi Arabia, Oman, and Qatar, the region is positioning itself as a global trade hub.\n\nKey GCC Ports and Logistics Hubs:\n- Jebel Ali (UAE): Largest port in the Middle East, 16th globally\n- King Abdulaziz Port, Dammam (Saudi Arabia): Primary gateway for Eastern Province\n- Port of Salalah (Oman): Strategic transshipment hub in the Indian Ocean\n- Hamad Port (Qatar): One of the largest in the region\n- Khalifa Port (UAE): Purpose-built for containers and bulk cargo\n\nChallenges:\n\nThe GCC logistics sector faces unique challenges including extreme heat affecting warehousing and last-mile delivery, complex customs regulations varying by country, and infrastructure gaps in less developed areas. Labor regulations and nationalization policies (Saudization, Emiratization) also impact staffing models.\n\nOpportunities:\n\nVision 2030 and similar national diversification programs are pouring billions into logistics infrastructure. The GCC's strategic location between Europe, Asia, and Africa makes it ideal for transshipment. Free zone advantages in UAE, Bahrain, and Oman offer tax benefits and simplified trade procedures.\n\nBest Practices for GCC Logistics:\n1. Partner with local agents who understand customs nuances\n2. Invest in cold chain capabilities for food and pharmaceutical sectors\n3. Leverage free zones for regional distribution\n4. Implement track-and-trace technology for full visibility` },
  { title: "HRM Platforms for the Modern Workforce: What to Look For in 2026", date: "03/01/2026", read: "3 min", img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&q=80", category: "HR Tech", excerpt: "Key features organizations need in their HRM platform as workforces become more distributed and diverse.", content: `Human Resource Management platforms have evolved from simple payroll processors to comprehensive people intelligence systems. As workforces become more distributed, diverse, and digitally native, HRM platforms must keep pace with new expectations.\n\nEssential Features for 2026:\n\n1. AI-Powered Talent Analytics: Predict attrition before it happens, identify high-potential employees, and model workforce planning scenarios with machine learning.\n\n2. Employee Experience (EX) Tools: Pulse surveys, sentiment analysis, and personalized learning pathways that treat employees as customers of HR services.\n\n3. Global Compliance Engine: Automatically update payroll, leave, and compliance rules as labor laws change across different jurisdictions.\n\n4. Integrated Learning Management: Built-in LMS capabilities that connect training completion to performance metrics and career progression.\n\n5. DEI Analytics: Track diversity metrics across the entire employee lifecycle from sourcing to promotion.\n\n6. Manager Effectiveness Scores: 360-degree feedback loops that help managers understand their impact on team performance and retention.\n\nTop Platforms to Evaluate:\n- Workday HCM: Best for large enterprises with complex global operations\n- SAP SuccessFactors: Strongest for organizations already on SAP ERP\n- BambooHR: Ideal for SMEs needing comprehensive features at lower cost\n- Darwinbox: Purpose-built for Asia-Pacific markets including India and GCC` },
  { title: "SAP ABAP Development: Why It Remains Relevant in Modern Enterprise ERP", date: "03/22/2026", read: "4 min", img: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=500&q=80", category: "SAP / ERP", excerpt: "Despite new technologies, SAP ABAP remains the backbone of enterprise ERP customization globally.", content: `Advanced Business Application Programming (ABAP) has been the programming language of SAP since the 1980s. Despite predictions of its decline, ABAP remains the most critical skill for enterprise ERP customization in 2026.\n\nWhy ABAP Endures:\n\nSAP's installed base represents over 400,000 customers worldwide, including 92% of the Forbes Global 2000. These organizations have decades of custom ABAP code embedded in their business processes—code that cannot simply be switched off.\n\nModern ABAP Capabilities:\n\nABAP has continuously evolved. Modern ABAP supports:\n- Object-Oriented Programming with full class hierarchies\n- RESTful Application Programming Model (RAP) for cloud-ready development\n- ABAP SQL with advanced data manipulation capabilities\n- CDS (Core Data Services) Views for semantic data modeling\n- Integration with SAP BTP (Business Technology Platform)\n\nABAP on SAP BTP:\n\nThe cloud shift hasn't made ABAP obsolete—it's transformed it. The ABAP Environment on SAP BTP allows developers to write cloud-native ABAP that runs on SAP's multi-cloud infrastructure, bridging legacy customizations with modern cloud architecture.\n\nCareer Outlook:\n\nABAP developers command premium salaries in 2026, with experienced consultants earning $90,000-$150,000 annually in the US, and equivalent premiums in GCC markets. Demand consistently outpaces supply.` },
  { title: "East Africa as an Emerging Market: SHNOOR's Rwanda Expansion", date: "04/10/2026", read: "2 min", img: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=500&q=80", category: "Company News", excerpt: "SHNOOR announces its East Africa expansion into Rwanda — bringing IT consulting and trade services to the region.", content: `SHNOOR International LLC is proud to announce its strategic expansion into East Africa, beginning with Rwanda—a nation renowned for its political stability, business-friendly environment, and ambitious digital transformation agenda.\n\nWhy Rwanda?\n\nRwanda consistently ranks as one of Africa's easiest places to do business. The country's Vision 2050 plan targets a knowledge-based economy, driving unprecedented demand for IT infrastructure, software solutions, and skilled professionals. Key factors that made Rwanda our first East African base:\n\n- 100% foreign ownership permitted in most sectors\n- One of Africa's most stable political environments\n- World-class fiber optic infrastructure (Kigali is widely connected)\n- Gateway to the East African Community (EAC) with 300+ million consumers\n- Strong government partnerships with tech giants like Carnegie Mellon Africa\n\nOur Rwanda Offerings:\n\nWe're launching with three core service lines: IT Staffing & Consulting (connecting Rwandan tech talent with regional and global employers), SAP Implementation Support (helping Rwandan enterprises modernize their ERP systems), and Trade & Logistics (leveraging Rwanda's landlocked position as a regional distribution hub).\n\nComing Next:\n\nFollowing Rwanda, SHNOOR plans to establish presence in Kenya and Uganda within 18 months, creating a comprehensive East African trade and technology network.` },
  { title: "DevSecOps: Integrating Security Into Your CI/CD Pipeline", date: "04/15/2026", read: "5 min", img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&q=80", category: "Cloud", excerpt: "How to embed DevSecOps practices across your entire CI/CD pipeline from day one.", content: `DevSecOps isn't a tool—it's a cultural shift that embeds security thinking into every phase of the software development lifecycle. As cyber threats grow more sophisticated, organizations can no longer afford to bolt security on as an afterthought.\n\nThe DevSecOps Philosophy:\n\n"Security as Code" means treating security policies, scans, and controls as first-class citizens in your codebase. Every developer becomes a security participant, and every pipeline stage includes security validation.\n\nImplementing DevSecOps Across Your Pipeline:\n\n1. Code Stage: Use IDE plugins (SonarLint, Snyk) for real-time vulnerability detection as developers type. Pre-commit hooks prevent secrets and vulnerable dependencies from entering the codebase.\n\n2. Build Stage: Static Application Security Testing (SAST) tools like Checkmarx or Semgrep scan source code during compilation. Software Composition Analysis (SCA) checks for vulnerable open-source dependencies.\n\n3. Test Stage: Dynamic Application Security Testing (DAST) tools like OWASP ZAP attack running applications to find runtime vulnerabilities. Container image scanning ensures Docker images are free from known CVEs.\n\n4. Deploy Stage: Infrastructure as Code (IaC) scanning tools like Checkov or Terrascan validate Terraform configurations against security best practices before deployment.\n\n5. Monitor Stage: Runtime Application Self-Protection (RASP) and SIEM integration provide continuous threat detection in production.\n\nMetrics That Matter:\n- Mean Time to Detect (MTTD) security issues\n- Vulnerability remediation rate\n- False positive rate from automated scanners\n- Percentage of pipelines with security gates enabled` },
  { title: "Export Documentation 101: What Every Business Needs to Know", date: "12/01/2025", read: "3 min", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&q=80", category: "Trade & Logistics", excerpt: "A complete guide to export documentation for businesses entering the India-to-GCC trade corridor.", content: `Export documentation is the backbone of international trade. Incorrect or incomplete documentation causes customs delays, financial penalties, and damaged business relationships. For businesses in the India-GCC corridor, mastering these documents is essential.\n\nCore Export Documents:\n\n1. Commercial Invoice: The primary document stating the value, quantity, and description of goods. Must match all other documents exactly.\n\n2. Packing List: Detailed breakdown of each package—dimensions, weight, contents. Customs authorities use this to verify shipments.\n\n3. Bill of Lading (Sea) / Airway Bill (Air): Contract between shipper and carrier. Also serves as the title document for the goods.\n\n4. Certificate of Origin (COO): Certifies where goods were manufactured. Critical for claiming preferential duty rates under the India-UAE CEPA.\n\n5. Inspection Certificate: Issued by third-party agencies confirming goods meet quality and safety standards.\n\n6. Phytosanitary Certificate: Required for plant products, confirming they're free from pests and diseases.\n\nIndia-Specific Requirements:\n\nExporters from India need an IEC (Import Export Code) from DGFT, GST registration, and for certain products, licenses or NOCs from regulatory bodies. The Shipping Bill filed on ICEGATE is the primary export declaration.\n\nGCC Customs Requirements:\n\nAll GCC countries follow a unified customs law. The GCC customs tariff classifies goods under HS codes, and rates are typically 5% for standard goods. Restricted and prohibited goods lists vary by country.` },
  { title: "Building Scalable Kubernetes Infrastructure for Enterprise Applications", date: "01/25/2026", read: "6 min", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80", category: "Cloud", excerpt: "How to architect production-grade K8s clusters for enterprise workloads — from basics to advanced multi-cluster setups.", content: `Kubernetes has become the de facto standard for container orchestration, but running production-grade Kubernetes for enterprise workloads requires careful planning around availability, security, and cost optimization.\n\nFoundation: Cluster Architecture Decisions\n\nBefore writing a single manifest, architects must decide:\n- Managed vs. Self-Managed: EKS (AWS), AKS (Azure), and GKE (Google) reduce operational overhead but add vendor lock-in. Self-managed clusters on bare metal offer maximum control but require deep expertise.\n- Single vs. Multi-Cluster: Large enterprises typically run separate clusters for dev, staging, and production environments, with additional clusters for different regions or business units.\n- Node Sizing: Mix of on-demand and spot instances balances cost and availability.\n\nHigh Availability Configuration:\n\nProduction clusters must span at least 3 availability zones. Control plane components (API server, etcd, scheduler) should run as highly available replicas. Use Pod Disruption Budgets (PDBs) to ensure minimum availability during updates.\n\nSecurity Best Practices:\n- Enable RBAC (Role-Based Access Control) and follow least-privilege principles\n- Use Network Policies to control pod-to-pod communication\n- Implement Pod Security Standards (restricted profile for production)\n- Rotate service account tokens regularly\n- Use secrets management solutions (HashiCorp Vault, AWS Secrets Manager)\n\nCost Optimization Techniques:\n- Implement Cluster Autoscaler for dynamic node provisioning\n- Use Kubernetes VPA (Vertical Pod Autoscaler) for right-sizing\n- Leverage Spot/Preemptible instances for stateless workloads\n- Implement resource quotas per namespace to prevent runaway costs` },
  { title: "AI in Supply Chain Management: Trends and Applications", date: "04/05/2026", read: "4 min", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&q=80", category: "AI & Data", excerpt: "How AI is reshaping supply chain operations — from predictive logistics to demand forecasting.", content: `Artificial intelligence is transforming supply chains from reactive systems into proactive, self-optimizing networks. The global AI in supply chain market is projected to reach $41 billion by 2030, driven by the need for resilience after recent global disruptions.\n\nKey AI Applications in Supply Chain:\n\n1. Demand Forecasting: Machine learning models analyze historical sales data, weather patterns, social media trends, and economic indicators to forecast demand with 85-95% accuracy—far superior to traditional statistical methods.\n\n2. Predictive Maintenance: IoT sensors combined with AI predict equipment failures before they occur, reducing downtime by up to 50% in warehouse and transportation operations.\n\n3. Route Optimization: AI-powered logistics platforms like FourKites and project44 optimize delivery routes in real-time, accounting for traffic, weather, and delivery windows.\n\n4. Warehouse Automation: Computer vision enables robots to pick and place items with near-human accuracy. Amazon's warehouse robots process 3x more orders per shift than human-only operations.\n\n5. Supplier Risk Management: Natural language processing scans news, financial reports, and social media to flag supplier risks before they materialize into supply disruptions.\n\n6. Dynamic Pricing: AI adjusts pricing in real-time based on demand signals, competitor pricing, and inventory levels.\n\nChallenges to Watch:\n\nData quality remains the biggest barrier to AI adoption in supply chains. Organizations must invest in data governance before expecting AI to deliver insights.` },
  { title: "Power BI vs Tableau: Choosing the Right BI Tool for Your Enterprise", date: "02/28/2026", read: "4 min", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80", category: "AI & Data", excerpt: "A side-by-side comparison of Power BI and Tableau to help enterprises make the right BI investment.", content: `Choosing between Power BI and Tableau is one of the most consequential technology decisions a data team can make. Both are excellent tools, but they serve different organizational profiles and use cases.\n\nPower BI - Microsoft's Analytics Powerhouse:\n\nStrengths: Deep integration with Microsoft 365, Azure, and SQL Server. Per-user licensing starts at $10/month (Pro), making it cost-effective for large deployments. Power Query provides powerful ETL capabilities. DAX (Data Analysis Expressions) is highly performant for complex calculations.\n\nBest For: Organizations already invested in the Microsoft ecosystem. Finance teams that live in Excel. Organizations needing tight Active Directory integration for row-level security.\n\nTableau - The Visualization Leader:\n\nStrengths: Best-in-class visualization capabilities and drag-and-drop interface. Tableau Prep Builder offers superior data preparation. Strong community and marketplace for pre-built connectors and dashboards. Better performance with large datasets using in-memory processing.\n\nBest For: Data analysts who need maximum flexibility. Organizations requiring sophisticated geospatial analytics. Teams with strong data visualization requirements that go beyond standard charts.\n\nCost Comparison:\n- Power BI: $10/user/month (Pro), $20/user/month (Premium Per User)\n- Tableau: $75/user/month (Creator), $42/user/month (Explorer)\n\nOur Recommendation:\n\nChoose Power BI if you're a Microsoft shop with budget constraints. Choose Tableau if visualization sophistication and analyst productivity are top priorities and budget allows.` },
  { title: "How SHNOOR's LMS Platform Drives Employee Retention", date: "03/15/2026", read: "3 min", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80", category: "HR Tech", excerpt: "Investing in employee learning drives retention by up to 40%. How SHNOOR's LMS makes it happen.", content: `Employee turnover costs organizations 50-200% of an employee's annual salary when accounting for recruitment, onboarding, and lost productivity. Learning & Development (L&D) has emerged as the single most effective retention tool available to HR teams.\n\nThe Learning-Retention Connection:\n\nLinkedIn's 2026 Workplace Learning Report found that 94% of employees would stay longer at a company that invested in their development. Organizations with strong L&D cultures report 30-40% lower voluntary turnover rates.\n\nSHNOOR's LMS Platform Features:\n\n1. Personalized Learning Paths: AI-driven recommendations based on role, skill gaps, and career aspirations. Each employee gets a unique development journey.\n\n2. Microlearning Modules: 5-10 minute bite-sized lessons fit into busy workdays. Completion rates are 3x higher than traditional hour-long courses.\n\n3. Manager Dashboard: Real-time visibility into team learning progress. Managers receive alerts when direct reports fall behind on compliance training.\n\n4. Skills Marketplace: Employees browse and self-enroll in skills-based courses. This autonomy increases engagement and intrinsic motivation.\n\n5. Certification Tracking: Automated reminders for expiring certifications. Compliance dashboards give HR instant visibility into certification status.\n\n6. Social Learning: Discussion forums, peer-to-peer knowledge sharing, and cohort-based learning programs build community.\n\nROI Measurement:\n\nOur clients report average ROI of 300-400% on their LMS investment when accounting for reduced turnover costs, improved productivity, and faster time-to-proficiency for new hires.` },
  { title: "Mastering Terraform for Multi-Cloud Infrastructure Automation", date: "02/10/2026", read: "6 min", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=80", category: "Cloud", excerpt: "A deep-dive into using Terraform to manage infrastructure across AWS, Azure, and GCP simultaneously.", content: `Terraform by HashiCorp has become the industry standard for Infrastructure as Code (IaC), enabling teams to define, provision, and manage cloud infrastructure using declarative configuration files.\n\nWhy Terraform for Multi-Cloud?\n\nThe average enterprise uses 2.6 cloud providers. Managing infrastructure across AWS, Azure, and GCP with provider-specific tools creates silos and inconsistencies. Terraform provides a unified workflow regardless of the target cloud provider.\n\nCore Concepts:\n\nProviders: Plugins that interact with cloud APIs. Over 3,000 community-maintained providers cover everything from AWS to Datadog to GitHub.\n\nResources: Individual infrastructure objects (EC2 instances, S3 buckets, Azure VMs). Resources are declared in .tf files and managed as a group.\n\nState: Terraform tracks real-world infrastructure in a state file. Remote state (S3 + DynamoDB, Terraform Cloud) enables team collaboration.\n\nModules: Reusable packages of Terraform configuration. The Terraform Registry hosts thousands of community modules.\n\nMulti-Cloud Patterns:\n\n1. Provider Abstraction Modules: Create modules that abstract provider-specific details, exposing consistent interfaces (e.g., a "database" module that creates RDS on AWS, SQL Database on Azure, or Cloud SQL on GCP).\n\n2. Workspace-Based Environments: Use Terraform workspaces to manage dev/staging/production configurations from a single codebase.\n\n3. State Isolation: Separate state files per environment and region prevent blast radius from misconfigurations.\n\nCI/CD Integration:\n\nIntegrate Terraform with GitHub Actions, GitLab CI, or Jenkins. Implement automated plan reviews with tools like Atlantis or Terraform Cloud's run triggers.` },
  { title: "Hiring Data Engineers in 2026: What Skills Are in Demand?", date: "01/18/2026", read: "4 min", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80", category: "IT Consulting", excerpt: "The data engineering landscape is evolving fast. Here are the skills, tools, and certifications your candidates must have.", content: `Data engineering has evolved dramatically over the past three years. The rise of the Modern Data Stack, real-time processing requirements, and AI/ML integration have created demand for a new breed of data engineer who combines traditional ETL skills with cloud-native and AI expertise.\n\nTop Technical Skills in Demand:\n\n1. Cloud Data Platforms: Snowflake, Databricks, and BigQuery experience is now table stakes. Candidates who've architected data warehouses on these platforms command 20-30% salary premiums.\n\n2. Apache Spark & Kafka: For organizations processing large-scale batch and real-time data, Spark and Kafka remain essential. Look for candidates who understand tuning and optimization, not just syntax.\n\n3. dbt (Data Build Tool): dbt has transformed how data teams think about transformations. Analytics engineers who can write clean, tested, documented dbt models are highly sought after.\n\n4. Python & SQL Proficiency: Advanced Python (pandas, PySpark, Airflow) and sophisticated SQL (window functions, CTEs, query optimization) are non-negotiable.\n\n5. Data Pipeline Orchestration: Apache Airflow, Prefect, or Dagster experience. Understanding of DAGs, scheduling, and error handling.\n\n6. Data Quality & Governance: Great Expectations, Monte Carlo, or similar data observability tools. Understanding of data contracts and metadata management.\n\nEmerging Requirements:\n- MLOps knowledge for serving ML models in production\n- Vector database experience (Pinecone, Weaviate) for AI applications\n- Streaming lakehouse architecture (Delta Lake, Apache Iceberg)\n\nSalary Benchmarks (2026):\n- Entry Level: $70,000-$90,000\n- Mid-Level (3-5 years): $100,000-$140,000\n- Senior (5+ years): $150,000-$200,000` },
  { title: "Oman's Vision 2040 and the IT Talent Opportunity", date: "03/08/2026", read: "3 min", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&q=80", category: "Company News", excerpt: "How Oman's national diversification strategy is creating a surge in demand for technology and trade talent.", content: `Oman's Vision 2040 represents the most ambitious national transformation program the Sultanate has ever undertaken. Moving beyond oil dependency, the plan targets five key sectors: tourism, logistics, manufacturing, mining, and fisheries—all of which require substantial IT and trade expertise.\n\nThe Technology Imperative:\n\nTo achieve Vision 2040 targets, Oman is investing heavily in digital infrastructure. The country's ICT sector is projected to grow 8.5% annually through 2030, creating an estimated 50,000+ technology jobs. Key initiatives driving this growth:\n\n- Oman Data Park: Expanding data center capacity to support cloud adoption\n- Smart Cities Initiative: Muscat and Salalah smart city projects requiring IoT, analytics, and connectivity expertise\n- e-Government Transformation: Digitizing government services across 200+ touchpoints\n- Logistics Hub Development: Salalah Free Zone and Duqm Special Economic Zone attracting global logistics players\n\nTalent Demand Sectors:\n\nThe most acute shortages exist in cybersecurity, cloud architecture, data analytics, and ERP implementation (particularly SAP). Omanization requirements mean global companies must hire and develop local talent—creating opportunities for structured training and placement programs.\n\nSHNOOR's Positioning:\n\nWith our India-UAE-Oman trade network and IT staffing expertise, SHNOOR is uniquely positioned to bridge the talent gap. We source technical professionals from India's deep talent pool, structure them for Oman's regulatory requirements, and provide ongoing development through our LMS platform.` },
];

const ArticlePage = ({ post, t, onBack }) => {
  const gold = t?.gold || "#C8820A";
  const goldLight = t?.goldLight || "#E8A020";
  const bg = t?.bg || "#0D1E38";
  const bgCard = t?.bgCard || "#112240";
  const bgSection = t?.bgSection || "#0A1628";
  const textC = t?.text || "#F0F4FF";
  const textSub = t?.textSub || "rgba(200,215,240,0.72)";
  const textMuted = t?.textMuted || "rgba(200,215,240,0.45)";
  const border = t?.border || "rgba(200,215,240,0.1)";

  const related = posts.filter(p => p.category === post.category && p.title !== post.title).slice(0, 3);
  const paragraphs = post.content ? post.content.split("\n\n") : [post.excerpt];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={{ paddingTop: 80, background: bg }}>
      <div style={{ padding: "24px 5%", borderBottom: `1px solid ${border}`, background: bgSection }}>
        <button onClick={onBack} style={{ background: "transparent", border: `1px solid ${border}`, borderRadius: 8, padding: "8px 18px", color: textSub, fontSize: 13, cursor: "pointer" }}>← Back to Blog</button>
      </div>

      <section style={{ background: bg, padding: "60px 5%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", maxWidth: 1240, margin: "0 auto" }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", background: "rgba(232,160,32,0.15)", border: "1px solid rgba(232,160,32,0.3)", borderRadius: 100, padding: "5px 16px", marginBottom: 20 }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: goldLight, letterSpacing: "0.18em", textTransform: "uppercase" }}>{post.category}</span>
          </div>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(28px,3.5vw,44px)", color: textC, fontWeight: 900, lineHeight: 1.25, marginBottom: 20 }}>{post.title}</h1>
          <p style={{ fontSize: 15, color: textSub, lineHeight: 1.85, marginBottom: 16 }}>{post.excerpt}</p>
          <p style={{ fontSize: 14, color: textMuted }}>{post.date} · {post.read} read</p>
        </div>
        <div style={{ borderRadius: 20, overflow: "hidden", height: 400, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}>
          <img src={post.img} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </section>

      <section style={{ background: bg, padding: "72px 8%" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          {paragraphs.map((para, i) => {
            if (para.startsWith("Key ") || para.startsWith("Our ") || para.startsWith("Top ") || para.startsWith("Core ") || para.startsWith("Why ") || para.startsWith("The ") || para.startsWith("Essential ") || para.startsWith("Types ") || para.startsWith("Emerging ") || para.startsWith("Salary ") || para.startsWith("Best ")) {
              const [heading, ...rest] = para.split(":\n");
              return (
                <div key={i} style={{ marginBottom: 32 }}>
                  <h2 style={{ fontFamily: "Georgia,serif", fontSize: 22, color: textC, fontWeight: 800, marginBottom: 14 }}>{heading}:</h2>
                  {rest.join(":\n").split("\n").map((line, j) => {
                    if (line.startsWith("- ")) {
                      return <div key={j} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 12, padding: "12px 16px", background: bgCard, borderRadius: 10, border: `1px solid ${border}` }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: goldLight, marginTop: 7, flexShrink: 0 }} />
                        <span style={{ fontSize: 14.5, color: textSub, lineHeight: 1.7 }}>{line.slice(2)}</span>
                      </div>;
                    }
                    if (/^\d\./.test(line)) {
                      return <div key={j} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 14 }}>
                        <div style={{ width: 24, height: 24, borderRadius: "50%", background: `linear-gradient(135deg,${gold},${goldLight})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#0D1E38", flexShrink: 0 }}>{line[0]}</div>
                        <span style={{ fontSize: 14.5, color: textSub, lineHeight: 1.7 }}>{line.slice(3)}</span>
                      </div>;
                    }
                    return line ? <p key={j} style={{ fontSize: 15, color: textSub, lineHeight: 1.9, marginBottom: 12 }}>{line}</p> : null;
                  })}
                </div>
              );
            }
            return <p key={i} style={{ fontSize: 16, color: textSub, lineHeight: 1.95, marginBottom: 28 }}>{para}</p>;
          })}
        </div>
      </section>

      {related.length > 0 && (
        <section style={{ background: bgSection, padding: "64px 8%", borderTop: `1px solid ${border}` }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h3 style={{ fontFamily: "Georgia,serif", fontSize: 26, color: textC, fontWeight: 800, marginBottom: 32 }}>Related Articles</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
              {related.map((rp, i) => (
                <div key={i} onClick={() => onBack(rp)} style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 14, overflow: "hidden", cursor: "pointer" }}>
                  <div style={{ height: 160, overflow: "hidden" }}>
                    <img src={rp.img} alt={rp.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "18px 20px" }}>
                    <h4 style={{ fontSize: 14, fontWeight: 700, color: textC, lineHeight: 1.5, marginBottom: 8 }}>{rp.title}</h4>
                    <span style={{ fontSize: 12, color: goldLight, fontWeight: 600 }}>Read →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

const categories = ["All", "SAP / ERP", "Cloud", "Trade & Logistics", "HR & Compliance", "HR Tech", "IT Consulting", "AI & Data", "Company News"];
const PER_PAGE = 6;

const Blog = ({ t = {} }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [currentArticle, setCurrentArticle] = useState(null);

  const gold = t.gold || "#C8820A";
  const goldLight = t.goldLight || "#E8A020";
  const goldDim = t.goldDim || "rgba(200,130,10,0.1)";
  const bg = t.bg || "#0D1E38";
  const bgCard = t.bgCard || "#112240";
  const bgSection = t.bgSection || "#0A1628";
  const textC = t.text || "#F0F4FF";
  const textSub = t.textSub || "rgba(200,215,240,0.72)";
  const textMuted = t.textMuted || "rgba(200,215,240,0.45)";
  const border = t.border || "rgba(200,215,240,0.1)";

  const handleOpenArticle = (post) => {
    setCurrentArticle(post);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = (openPost) => {
    if (openPost && openPost.title) {
      setCurrentArticle(openPost);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setCurrentArticle(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (currentArticle) return <ArticlePage post={currentArticle} t={t} onBack={handleBack} />;

  const filtered = activeCategory === "All" ? posts : posts.filter(p => p.category === activeCategory);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const displayed = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const featuredPost = posts[posts.length - 1];

  const logisticsCard = {
    title: "Streamline Your Logistics Management",
    date: "Featured Service",
    read: "5 min",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    category: "Trade & Logistics",
    excerpt: "At SHNOOR International LLC, we simplify global trade with reliable logistics solutions from Mumbai & Mundra ports — dry containers, customs clearance, multi-modal transport.",
  };

  const exportCard = {
    title: "Import & Export Management: Connecting Markets, Driving Growth",
    date: "Featured Service",
    read: "4 min",
    img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80",
    category: "Trade & Logistics",
    excerpt: "From India to UAE, Bahrain, Qatar, Oman and Malaysia — end-to-end procurement, shipping, and compliance. 'From India to the world, Seamlessly.'",
  };

  return (
    <div style={{ paddingTop: 80, background: bg }}>
      <section style={{ background: `linear-gradient(135deg,${bgSection} 0%,${bg} 100%)`, padding: "80px 5%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: "rgba(232,160,32,0.15)", border: "1px solid rgba(232,160,32,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 20 }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: goldLight, animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: goldLight, letterSpacing: "0.18em", textTransform: "uppercase" }}>Insights & News</span>
          </div>
          <h1 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(36px,5vw,64px)", color: "#FFF", fontWeight: 900, marginBottom: 18, lineHeight: 1.15 }}>
            SHNOOR <span style={{ color: goldLight }}>Blog</span>
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.65)", maxWidth: 520, lineHeight: 1.85, textAlign: "justify" }}>
            Industry insights, company updates, and expert knowledge from the SHNOOR team. Stay informed about IT consulting, cloud technologies, global trade, and enterprise solutions.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 24, fontWeight: 800, color: goldLight }}>50+</span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Articles</span>
            </div>
            <div style={{ width: 1, height: 30, background: "rgba(255,255,255,0.2)" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 24, fontWeight: 800, color: goldLight }}>8+</span>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Categories</span>
            </div>
          </div>
        </div>

        <div style={{ position: "relative", zIndex: 2, height: 420, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ borderRadius: 16, overflow: "hidden", height: 200, boxShadow: "0 12px 28px rgba(0,0,0,0.25)" }}>
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80" alt="Technology" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ borderRadius: 16, overflow: "hidden", height: 200, boxShadow: "0 12px 28px rgba(0,0,0,0.25)", marginTop: 20 }}>
            <img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=400&q=80" alt="Logistics" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ borderRadius: 16, overflow: "hidden", height: 190, boxShadow: "0 12px 28px rgba(0,0,0,0.25)", marginTop: -10 }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4GlCxwdVz-DgIOMtw_iql4JUk-G_IMrONhw&s" alt="Team meeting" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ borderRadius: 16, overflow: "hidden", height: 190, boxShadow: "0 12px 28px rgba(0,0,0,0.25)", marginTop: 10 }}>
            <img src="data:image/jpeg;base64,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" alt="Cloud technology" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      <section style={{ background: bgSection, padding: "48px 5% 24px 5%", borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: goldLight, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 18 }}>🚢 Service Spotlight</div>
          <div
            onClick={() => handleOpenArticle({ ...logisticsCard, content: logisticsCard.excerpt + " Full logistics management content here..." })}
            onMouseEnter={e => { e.currentTarget.style.borderColor = goldLight; e.currentTarget.style.boxShadow = `0 12px 40px rgba(200,130,10,0.15)`; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.boxShadow = "none"; }}
            style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 20, overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1.2fr", cursor: "pointer", transition: "all 0.25s" }}>
            <div style={{ height: 320, overflow: "hidden" }}>
              <img src={logisticsCard.img} alt={logisticsCard.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ padding: "48px 44px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ display: "inline-block", background: goldDim, border: `1px solid ${border}`, borderRadius: 6, padding: "3px 12px", fontSize: 10, fontWeight: 700, color: goldLight, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, width: "fit-content" }}>{logisticsCard.category}</div>
              <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(22px,2.8vw,36px)", color: textC, fontWeight: 800, lineHeight: 1.3, marginBottom: 16 }}>{logisticsCard.title}</h2>
              <p style={{ fontSize: 15, color: textSub, lineHeight: 1.8, marginBottom: 24 }}>{logisticsCard.excerpt}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <button style={{ background: `linear-gradient(135deg,${gold},${goldLight})`, color: "#0D1E38", border: "none", borderRadius: 8, padding: "10px 24px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Read Full Guide →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: bgSection, padding: "24px 5% 48px 5%", borderBottom: `1px solid ${border}` }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div
            onClick={() => handleOpenArticle({ ...exportCard, content: exportCard.excerpt + " Full export management content here..." })}
            onMouseEnter={e => { e.currentTarget.style.borderColor = goldLight; e.currentTarget.style.boxShadow = `0 12px 40px rgba(200,130,10,0.15)`; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = border; e.currentTarget.style.boxShadow = "none"; }}
            style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 20, overflow: "hidden", display: "grid", gridTemplateColumns: "1.2fr 1fr", cursor: "pointer", transition: "all 0.25s", direction: "rtl" }}>
            <div style={{ height: 320, overflow: "hidden", direction: "ltr" }}>
              <img src={exportCard.img} alt={exportCard.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ padding: "48px 44px", display: "flex", flexDirection: "column", justifyContent: "center", direction: "ltr" }}>
              <div style={{ display: "inline-block", background: goldDim, border: `1px solid ${border}`, borderRadius: 6, padding: "3px 12px", fontSize: 10, fontWeight: 700, color: goldLight, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, width: "fit-content" }}>{exportCard.category}</div>
              <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(22px,2.8vw,36px)", color: textC, fontWeight: 800, lineHeight: 1.3, marginBottom: 16 }}>{exportCard.title}</h2>
              <p style={{ fontSize: 15, color: textSub, lineHeight: 1.8, marginBottom: 24 }}>{exportCard.excerpt}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <button style={{ background: `linear-gradient(135deg,${gold},${goldLight})`, color: "#0D1E38", border: "none", borderRadius: 8, padding: "10px 24px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Read Full Guide →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: bgSection, padding: "48px 5%" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: goldLight, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 18 }}>📌 Featured Article</div>
          <div
            onClick={() => handleOpenArticle(featuredPost)}
            onMouseEnter={e => { e.currentTarget.style.borderColor = goldLight; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = border; }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, background: bgCard, border: `1px solid ${border}`, borderRadius: 20, overflow: "hidden", cursor: "pointer", transition: "border-color 0.25s" }}>
            <div style={{ height: 340, overflow: "hidden" }}>
              <img src={featuredPost.img} alt={featuredPost.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ padding: "44px 44px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ display: "inline-block", background: goldDim, border: `1px solid ${border}`, borderRadius: 6, padding: "3px 12px", fontSize: 10, fontWeight: 700, color: goldLight, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, width: "fit-content" }}>{featuredPost.category}</div>
              <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(20px,2.5vw,30px)", color: textC, fontWeight: 800, lineHeight: 1.35, marginBottom: 16 }}>{featuredPost.title}</h2>
              <p style={{ fontSize: 14, color: textSub, lineHeight: 1.85, marginBottom: 24 }}>{featuredPost.excerpt}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span style={{ fontSize: 12, color: textMuted }}>{featuredPost.date} · {featuredPost.read} read</span>
                <button style={{ background: `linear-gradient(135deg,${gold},${goldLight})`, color: "#0D1E38", border: "none", borderRadius: 8, padding: "9px 20px", fontSize: 12.5, fontWeight: 700, cursor: "pointer" }}>Read Article →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: bg, padding: "72px 5%" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 48, justifyContent: "center" }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => { setActiveCategory(cat); setPage(1); }} style={{
                background: activeCategory === cat ? `linear-gradient(135deg,${gold},${goldLight})` : bgCard,
                color: activeCategory === cat ? "#0D1E38" : textSub,
                border: `1px solid ${activeCategory === cat ? "transparent" : border}`,
                borderRadius: 8, padding: "8px 18px", fontSize: 12.5, fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
              }}>{cat}</button>
            ))}
          </div>

          <p style={{ fontSize: 13.5, color: textMuted, marginBottom: 32 }}>
            Showing <strong style={{ color: textC }}>{filtered.length}</strong> articles
            {activeCategory !== "All" && <> in <strong style={{ color: goldLight }}>{activeCategory}</strong></>}
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28, marginBottom: 52 }}>
            {displayed.map((post, i) => (
              <div key={i}
                onClick={() => handleOpenArticle(post)}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.borderColor = goldLight; e.currentTarget.style.boxShadow = `0 16px 40px rgba(200,130,10,0.12)`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = border; e.currentTarget.style.boxShadow = "none"; }}
                style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 16, overflow: "hidden", transition: "all 0.28s", cursor: "pointer" }}>
                <div style={{ height: 210, overflow: "hidden" }}>
                  <img src={post.img} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "24px 24px 28px" }}>
                  <div style={{ display: "inline-block", background: goldDim, border: `1px solid ${border}`, borderRadius: 6, padding: "3px 10px", fontSize: 10, fontWeight: 700, color: goldLight, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>{post.category}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: textC, lineHeight: 1.5, marginBottom: 10 }}>{post.title}</h3>
                  <p style={{ fontSize: 13, color: textSub, lineHeight: 1.75, marginBottom: 18 }}>{post.excerpt}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontSize: 11.5, color: textMuted }}>{post.date} · {post.read} read</div>
                    <button
                      onClick={e => { e.stopPropagation(); handleOpenArticle(post); }}
                      style={{ fontSize: 12, color: "#0D1E38", fontWeight: 700, background: `linear-gradient(135deg,${gold},${goldLight})`, border: "none", borderRadius: 6, padding: "6px 14px", cursor: "pointer" }}>
                      Read →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10 }}>
              <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
                style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 8, padding: "9px 16px", cursor: "pointer", color: textC, fontSize: 14, opacity: page === 1 ? 0.4 : 1 }}>‹</button>
              {[...Array(totalPages)].map((_, i) => (
                <button key={i} onClick={() => setPage(i + 1)} style={{
                  background: page === i + 1 ? `linear-gradient(135deg,${gold},${goldLight})` : bgCard,
                  border: `1px solid ${page === i + 1 ? "transparent" : border}`,
                  borderRadius: 8, padding: "9px 16px", cursor: "pointer",
                  color: page === i + 1 ? "#0D1E38" : textC, fontWeight: 600, minWidth: 42,
                }}>{i + 1}</button>
              ))}
              <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
                style={{ background: bgCard, border: `1px solid ${border}`, borderRadius: 8, padding: "9px 16px", cursor: "pointer", color: textC, fontSize: 14, opacity: page === totalPages ? 0.4 : 1 }}>›</button>
            </div>
          )}
        </div>
      </section>

      <section style={{ background: bgSection, padding: "72px 5%", textAlign: "center" }}>
        <div style={{ maxWidth: 580, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(22px,2.8vw,34px)", color: textC, fontWeight: 800, marginBottom: 14 }}>
            Stay <span style={{ color: goldLight }}>Informed</span>
          </h2>
          <p style={{ fontSize: 15, color: textSub, lineHeight: 1.85, marginBottom: 28 }}>
            Get the latest insights on IT staffing, cloud trends, global trade, and enterprise solutions — delivered directly from the SHNOOR team.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", maxWidth: 460, margin: "0 auto" }}>
            <input placeholder="Enter your email address" style={{ flex: 1, background: bgCard, border: `1px solid ${border}`, borderRadius: 10, padding: "13px 18px", fontSize: 14, color: textC, outline: "none", fontFamily: "inherit" }} />
            <button style={{ background: `linear-gradient(135deg,${gold},${goldLight})`, color: "#0D1E38", border: "none", borderRadius: 10, padding: "13px 24px", fontSize: 14, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>Subscribe →</button>
          </div>
          <p style={{ fontSize: 12, color: textMuted, marginTop: 14 }}>No spam. Unsubscribe anytime. We publish 2–4 articles per month.</p>
        </div>
      </section>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      `}</style>
    </div>
  );
};

export default Blog;