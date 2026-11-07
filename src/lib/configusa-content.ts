export interface NavigationItem {
  label: string;
  path: string;
  description?: string;
}

export interface NavigationGroup {
  label: string;
  items: NavigationItem[];
}

export const navigationGroups: NavigationGroup[] = [
  {
    label: "About Us",
    items: [
      { label: "Our Company", path: "/about", description: "Built on trust, expertise, and dependable global delivery." },
      { label: "Why ConfigUSA", path: "/why-configusa", description: "Our enterprise advantage and delivery accountability." },
      { label: "Leadership", path: "/leadership", description: "Executive leadership grounded in relationships and growth." },
    ],
  },
  {
    label: "Solutions",
    items: [
      { label: "IT Staffing & Talent Solutions", path: "/solutions/it-staffing", description: "Contract, contract-to-hire, and direct hire technology talent." },
      { label: "Workforce Solutions", path: "/solutions/workforce-solutions", description: "Tailored workforce programs aligned to your business needs." },
      { label: "MSP & VMS Programs", path: "/solutions/msp-vms", description: "Enterprise delivery with discipline, compliance, and speed." },
      { label: "Technology Consulting & Resource Augmentation", path: "/solutions/technology-consulting", description: "Specialized resources for critical technology initiatives." },
    ],
  },
  {
    label: "Expertise",
    items: [
      { label: "SAP Solutions", path: "/expertise/sap", description: "Functional, technical, and S/4HANA enterprise specialists." },
      { label: "Workday Solutions", path: "/expertise/workday", description: "HCM, Financial Management, Integrations, and optimization." },
      { label: "Cloud & Infrastructure", path: "/expertise/cloud-infrastructure", description: "AWS, Azure, GCP, DevOps, and resilient IT operations." },
      { label: "AI, Data & Digital Engineering", path: "/expertise/ai-data-digital", description: "Machine learning, modern data platforms, and application engineering." },
    ],
  },
  {
    label: "Industries",
    items: [
      { label: "Financial Services", path: "/industries#financial-services", description: "Fintech, banking platforms, enterprise security, and compliance." },
      { label: "Healthcare", path: "/industries#healthcare", description: "Digital healthcare systems, EHR, HIPAA compliance, and data." },
      { label: "Government & Public Sector", path: "/industries#government-public-sector", description: "Disciplined public sector talent and verified program compliance." },
      { label: "Manufacturing & Engineering", path: "/industries#manufacturing-engineering", description: "Industrial automation, enterprise ERP, and engineering talent." },
      { label: "Technology & Digital Services", path: "/industries#technology-digital-services", description: "Product engineering, cloud platforms, and rapid digital scaling." },
    ],
  },
];

export interface OpenJobPosition {
  id: string;
  title: string;
  category: "SAP & Workday" | "Software Engineering" | "Cloud & Infrastructure" | "AI & Data" | "Cybersecurity" | "Quality Assurance";
  location: "United States (Remote)" | "United States (Hybrid)" | "India (Hybrid)" | "Canada (Remote)" | "Global (Remote)";
  type: "Contract" | "Full-time" | "Contract-to-Hire";
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export const jobOpportunities: OpenJobPosition[] = [
  {
    id: "cfg-sap-01",
    title: "SAP S/4HANA Senior Lead Consultant (FICO / Logistics)",
    category: "SAP & Workday",
    location: "United States (Hybrid)",
    type: "Contract",
    experience: "8+ years",
    description: "Lead enterprise S/4HANA financial and business architecture design, migration workflows, and cross-module configuration for premier Fortune 500 client engagements.",
    responsibilities: [
      "Architect and configure SAP S/4HANA finance and logistics modules.",
      "Lead client workshops, gap analyses, and integration with third-party banking/tax systems.",
      "Manage end-to-end testing cycles and post-go-live stabilization support.",
    ],
    requirements: [
      "Minimum 8 years of hands-on SAP configuration experience.",
      "At least two completed full-lifecycle SAP S/4HANA implementations.",
      "Strong client-facing consulting and stakeholder communication capabilities.",
    ],
  },
  {
    id: "cfg-wday-02",
    title: "Workday HCM & Integration Specialist",
    category: "SAP & Workday",
    location: "United States (Remote)",
    type: "Full-time",
    experience: "5+ years",
    description: "Provide enterprise Workday HCM configuration, Core HR, Compensation, Studio integrations, and custom report designs for ongoing managed programs.",
    responsibilities: [
      "Design, build, and support Workday Studio, EIB, and Core Connector integrations.",
      "Configure business process definitions, security groups, and custom calculated fields.",
      "Partner with HR operations and enterprise IT to optimize bi-annual Workday releases.",
    ],
    requirements: [
      "5+ years of dedicated Workday HCM and integration engineering experience.",
      "Demonstrated expertise with Workday Studio, BIRT, and advanced reporting.",
      "Workday Pro or partner certifications are highly valued.",
    ],
  },
  {
    id: "cfg-cld-03",
    title: "Senior Cloud Platform & DevOps Engineer (AWS / Azure)",
    category: "Cloud & Infrastructure",
    location: "Canada (Remote)",
    type: "Full-time",
    experience: "6+ years",
    description: "Design and implement scalable multi-region cloud infrastructure, Infrastructure-as-Code (Terraform), and high-reliability CI/CD pipelines.",
    responsibilities: [
      "Develop and maintain Terraform modules for AWS and Microsoft Azure deployments.",
      "Build and automate zero-downtime Kubernetes (EKS/AKS) delivery pipelines.",
      "Implement observability, telemetry, and automated security scanning frameworks.",
    ],
    requirements: [
      "Strong background in Linux, Terraform, Kubernetes, and container orchestration.",
      "Extensive experience with AWS or Azure enterprise architecture.",
      "Demonstrated commitment to security best practices and compliance controls.",
    ],
  },
  {
    id: "cfg-data-04",
    title: "Enterprise Data Platform Engineer (Snowflake & Spark)",
    category: "AI & Data",
    location: "United States (Remote)",
    type: "Contract-to-Hire",
    experience: "6+ years",
    description: "Construct enterprise modern data lakehouses, robust streaming data pipelines, and analytics infrastructure supporting mission-critical reporting.",
    responsibilities: [
      "Design high-throughput batch and real-time streaming pipelines using Python, SQL, and Spark.",
      "Model enterprise data schemas in Snowflake for analytics and operational BI.",
      "Ensure data lineage, automated quality validations, and strict data governance.",
    ],
    requirements: [
      "Proficiency with Python, SQL, Apache Spark, and Snowflake data warehouses.",
      "Familiarity with dbt, Airflow, and cloud data architecture patterns.",
      "Experience working in regulated financial or healthcare data environments is a plus.",
    ],
  },
  {
    id: "cfg-ai-05",
    title: "Applied AI / Machine Learning Engineer",
    category: "AI & Data",
    location: "India (Hybrid)",
    type: "Full-time",
    experience: "4+ years",
    description: "Develop production-grade machine learning models, retrieval-augmented generation (RAG) pipelines, and intelligent enterprise search integrations.",
    responsibilities: [
      "Deploy and fine-tune NLP and deep learning models into scalable microservices.",
      "Build enterprise RAG workflows using vector databases (Pinecone/Milvus) and LLMs.",
      "Optimize inference latency, model evaluation metrics, and guardrail validations.",
    ],
    requirements: [
      "Solid background in Python, PyTorch/TensorFlow, and modern GenAI frameworks (LangChain/LlamaIndex).",
      "Experience taking machine learning models from prototype to production at scale.",
      "Strong computer science fundamentals and distributed computing knowledge.",
    ],
  },
  {
    id: "cfg-sec-06",
    title: "Cybersecurity Operations & Compliance Specialist",
    category: "Cybersecurity",
    location: "United States (Remote)",
    type: "Contract",
    experience: "5+ years",
    description: "Support enterprise client security posture, SIEM threat monitoring, vulnerability management, and regulatory compliance (SOC 2, NIST, ISO 27001).",
    responsibilities: [
      "Monitor and triage enterprise threat telemetry across SIEM/SOAR platforms.",
      "Conduct continuous vulnerability assessments and manage remediation tracking.",
      "Collaborate with engineering teams to enforce zero-trust identity architectures.",
    ],
    requirements: [
      "Relevant security certifications (CISSP, CISM, or CompTIA Security+).",
      "Hands-on experience with Splunk, CrowdStrike, Sentinel, or similar toolsets.",
      "Familiarity with enterprise MSP/VMS compliance and security audit frameworks.",
    ],
  },
  {
    id: "cfg-swe-07",
    title: "Senior Full-Stack Software Engineer (React / Node / Java)",
    category: "Software Engineering",
    location: "United States (Remote)",
    type: "Contract",
    experience: "7+ years",
    description: "Build robust, highly scalable web applications, REST/GraphQL APIs, and distributed microservices for enterprise client digital transformation programs.",
    responsibilities: [
      "Develop responsive, accessible modern web user interfaces using React and TypeScript.",
      "Architect and implement secure backend services using Node.js or Java Spring Boot.",
      "Conduct code reviews, mentor junior engineers, and uphold rigorous testing standards.",
    ],
    requirements: [
      "Extensive production experience with TypeScript, React, and server-side Java or Node.",
      "Strong understanding of microservices, event-driven architectures, and REST APIs.",
      "Excellent problem-solving skills and enterprise teamwork acumen.",
    ],
  },
  {
    id: "cfg-qa-08",
    title: "QA Test Automation Architect (Playwright / Selenium)",
    category: "Quality Assurance",
    location: "Canada (Remote)",
    type: "Full-time",
    experience: "5+ years",
    description: "Architect and scale end-to-end automated test suites, performance benchmarks, and automated regression testing embedded within modern CI/CD systems.",
    responsibilities: [
      "Develop modular automated testing frameworks using Playwright or Selenium with TypeScript/Python.",
      "Integrate automated test runs into GitHub Actions and GitLab CI/CD pipelines.",
      "Perform API testing, contract testing, and performance/load analysis.",
    ],
    requirements: [
      "Strong coding proficiency in TypeScript, JavaScript, or Python.",
      "Demonstrated track record designing maintainable enterprise test frameworks.",
      "Deep understanding of software development lifecycles and agile release processes.",
    ],
  },
];

export interface IndustryDetail {
  id: string;
  name: string;
  tagline: string;
  description: string;
  capabilities: string[];
  technologies: string[];
  image: string;
}

export const industryList: IndustryDetail[] = [
  {
    id: "financial-services",
    name: "Financial Services",
    tagline: "High-compliance, low-latency, and enterprise-grade resilience.",
    image: "/assets/ind-financial.jpg",
    description:
      "Supporting technology staffing requirements across enterprise applications, data platforms, infrastructure, cybersecurity, and financial technology environments. From banking institutions to insurance and wealth management, we provide professionals who understand regulatory rigors and high-stakes system reliability.",
    capabilities: [
      "Core banking and transactional system modernizations",
      "Real-time fraud detection and AML analytics talent",
      "Financial enterprise reporting and regulatory compliance (SOX, GLBA)",
      "Secure cloud migration and zero-trust infrastructure engineering",
    ],
    technologies: ["SAP FICO", "Snowflake", "AWS Financial Services", "Kafka", "Java Spring Boot", "Cybersecurity SIEM"],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    tagline: "Patient-centered digital transformation and strict data privacy.",
    image: "/assets/ind-healthcare.jpg",
    description:
      "Helping healthcare organizations, hospital systems, and life sciences leaders access technology professionals supporting enterprise systems, clinical data platforms, infrastructure, and digital operations. We align talent that respects HIPAA, HITRUST, and data governance standards.",
    capabilities: [
      "EHR and clinical workflow integration specialists",
      "Healthcare data interoperability (HL7, FHIR) and analytics",
      "Workday HCM and payroll solutions for healthcare systems",
      "Cloud-based telemedicine and patient portal engineering",
    ],
    technologies: ["Workday HCM", "Epic / Cerner Integrations", "FHIR / HL7", "Azure Health Data Services", "HIPAA Compliance"],
  },
  {
    id: "government-public-sector",
    name: "Government & Public Sector",
    tagline: "Structured staffing processes and program accountability.",
    image: "/assets/ind-government.jpg",
    description:
      "Supporting public-sector technology workforce requirements through structured staffing processes, rigorous compliance, and an understanding of program expectations. ConfigUSA participates in state, local, and federal supplier programs with verified certification marks (M/WBE, SBE, SAM.gov, E-Verify).",
    capabilities: [
      "Citizen-facing digital services and legacy system modernization",
      "Compliance-driven public sector staffing and credential verification",
      "Public health, transportation, and municipal data solutions",
      "VMS and prime vendor contract fulfillment discipline",
    ],
    technologies: ["SAM.gov Registered", "E-Verify Compliant", "Cloud FedRAMP Environments", "Database Modernization", "Identity & Access Management"],
  },
  {
    id: "manufacturing-engineering",
    name: "Manufacturing & Engineering",
    tagline: "Connecting shop-floor automation with enterprise business systems.",
    image: "/assets/ind-manufacturing.jpg",
    description:
      "Connecting organizations with technical professionals across engineering, enterprise applications, automation, and related technology functions. We bridge the gap between operational technology (OT) and enterprise IT to drive supply chain resilience and manufacturing efficiency.",
    capabilities: [
      "SAP S/4HANA supply chain, manufacturing, and inventory workflows",
      "IoT sensor telemetry, predictive maintenance, and edge data architectures",
      "ERP system integration across international manufacturing facilities",
      "Warehouse management and logistics optimization talent",
    ],
    technologies: ["SAP MM / SD", "SAP S/4HANA Supply Chain", "Industrial IoT", "Edge Computing", "Data Analytics"],
  },
  {
    id: "technology-digital-services",
    name: "Technology & Digital Services",
    tagline: "Rapid scaling and specialized technical depth for high-velocity teams.",
    image: "/assets/ind-technology.jpg",
    description:
      "Providing specialized IT talent to support product development, enterprise platforms, cloud environments, and technology operations. We partner with SaaS providers, digital native firms, and enterprise IT divisions seeking high-caliber engineers who hit the ground running.",
    capabilities: [
      "High-velocity full-stack software and API microservices engineering",
      "Cloud architecture, Kubernetes deployment, and DevOps automation",
      "Generative AI, machine learning engineering, and data science pipelines",
      "Rapid talent ramp-up for critical software release milestones",
    ],
    technologies: ["React & TypeScript", "AWS & GCP", "Kubernetes", "Docker", "Python & PyTorch", "Microservices Architecture"],
  },
];

export interface GlobalHub {
  country: string;
  entityName: string;
  role: string;
  focus: string[];
  contactDetails: {
    address: string;
    phone: string;
    email: string;
  };
}

export const globalHubs: GlobalHub[] = [
  {
    country: "United States",
    entityName: "ConfigUSA",
    role: "Enterprise Staffing, MSP Program Support & Client Engagement",
    focus: [
      "Enterprise contingent talent solutions and direct hire placement",
      "MSP/VMS program relationship management and compliance delivery",
      "Enterprise applications (SAP, Workday) and cloud infrastructure talent",
      "Executive client engagement and nationwide operational delivery",
    ],
    contactDetails: {
      address: "1000 Corporate Center Drive, Suite 300, Alpharetta, GA 30022",
      phone: "+1 (888) 555-CFGUSA",
      email: "inquiries@configusa.com",
    },
  },
  {
    country: "India",
    entityName: "Config Solutions Private Limited",
    role: "Technology Recruiting, Workforce Delivery & Global Sourcing",
    focus: [
      "Round-the-clock technical sourcing and qualification engine",
      "Specialized engineering recruitment for software, AI, and data domains",
      "Cross-border workforce delivery and offshore project resource support",
      "Rigorous technical candidate screening and interview coordination",
    ],
    contactDetails: {
      address: "Prestige Cyber Towers, 4th Floor, Hitec City, Hyderabad, TG 500081",
      phone: "+91 40 6828 0000",
      email: "india.desk@configusa.com",
    },
  },
  {
    country: "Canada",
    entityName: "Accurate Systems Integrators Inc.",
    role: "Technology Staffing & Regional North American Business Support",
    focus: [
      "Canadian enterprise IT staffing and cross-border project augmentation",
      "Cloud infrastructure, bilingual talent, and specialized software resources",
      "Canadian regulatory, provincial tax, and workforce compliance alignment",
      "Integrated North American delivery coordination with US operations",
    ],
    contactDetails: {
      address: "100 King Street West, Suite 5600, Toronto, ON M5X 1C9",
      phone: "+1 (416) 555-8900",
      email: "canada.desk@configusa.com",
    },
  },
];

export const certMarks = [
  { code: "MWBE", label: "M/WBE", title: "Minority & Women-Owned Business Enterprise", desc: "Recognized diversity supplier credential upholding enterprise supplier diversity objectives." },
  { code: "SBE", label: "SBE", title: "Small Business Enterprise", desc: "Certified small business enterprise supporting government and commercial program quotas." },
  { code: "SAM", label: "SAM.gov", title: "SAM.gov Federal Registration", desc: "Active federal system for award management registration for government and prime contractor delivery." },
  { code: "EVERIFY", label: "E-Verify", title: "E-Verify Compliant Employer", desc: "Federal employment eligibility verification ensuring 100% compliant workforce onboarding." },
];
