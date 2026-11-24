/**
 * Every fact on this site comes from Vinod_Kumar_Aluru_Resume.pdf.
 * Edit here and the whole site follows. Don't add anything the resume doesn't support.
 */

export const profile = {
  fullName: 'Vinod Kumar Aluru',
  name: 'Vinod Kumar Aluru',
  first: 'Vinod',
  email: 'vinodkumaraluru1@gmail.com',
  /** Shown next to "Open to opportunities" in the hero. */
  location: 'Healthcare · Banking · Retail',
  links: {
    linkedin: 'https://www.linkedin.com/in/aluvinodkuma',
  },
  resume: './assets/Vinod_Kumar_Aluru_Resume.pdf',
  /** Background-free full-length photo used in the hero and at the centre of the skills orbit. */
  cutout: { src: './assets/vinod-standing.webp', width: 529, height: 1500 },
  /** Rotating hero designations — each one is a title from the resume. */
  roles: ['Generative AI Engineer', 'Machine Learning Engineer', 'Data Scientist', 'Python Developer'],
  availability: 'Open to opportunities',
};

export const stats = [
  { value: 2015, decimals: 0, suffix: '', label: 'Shipping production software since' },
  { value: 4, decimals: 0, suffix: '', label: 'Enterprise client engagements' },
  { value: 3, decimals: 0, suffix: '', label: 'Clouds in production: GCP, AWS, Azure' },
  { value: 2, decimals: 0, suffix: '', label: 'Degrees: M.S. CS & B.Tech ECE' },
];

export const education = [
  {
    school: 'Pace University',
    degree: 'Master of Science (M.S.), Computer Science',
    period: 'Jan 2023 — Dec 2024',
  },
  {
    school: 'Jawaharlal Nehru Technological University Hyderabad (JNTUH)',
    degree: 'Bachelor of Technology (B.Tech), ECE',
    period: '2014',
  },
];

export type SkillCategory = { id: string; index: string; title: string; blurb: string; skills: string[] };

// The ids are fixed: Expertise.tsx pairs them into the three orbits
// (languages + ai, frontend + backend, databases + tools).
export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    index: '01',
    title: 'Languages & Data',
    blurb: 'Python first, with SQL and Spark for data at scale.',
    skills: ['Python', 'SQL', 'PySpark', 'Pandas', 'NumPy', 'JavaScript'],
  },
  {
    id: 'ai',
    index: '02',
    title: 'Generative AI & LLMs',
    blurb: 'Agentic RAG in production — retrieval, orchestration, evaluation and guardrails.',
    skills: ['GPT-4o', 'Vertex AI', 'LangChain', 'LangGraph', 'LlamaIndex', 'RAG', 'Pinecone', 'Prompt Engineering', 'Hugging Face'],
  },
  {
    id: 'frontend',
    index: '03',
    title: 'Machine Learning',
    blurb: 'Risk, fraud, churn and personalization models — explainable and audit-ready.',
    skills: ['Scikit-learn', 'XGBoost', 'LightGBM', 'SHAP', 'SMOTE', 'A/B Testing'],
  },
  {
    id: 'backend',
    index: '04',
    title: 'Backend & APIs',
    blurb: 'Python services and microservices behind every model.',
    skills: ['FastAPI', 'Flask', 'Django', 'REST APIs', 'Microservices'],
  },
  {
    id: 'databases',
    index: '05',
    title: 'Data & Cloud Platforms',
    blurb: 'Pipelines and warehouses across all three major clouds.',
    skills: ['BigQuery', 'Amazon SageMaker', 'Azure Databricks', 'Amazon Redshift', 'Cosmos DB', 'SQL Server'],
  },
  {
    id: 'tools',
    index: '06',
    title: 'MLOps & DevOps',
    blurb: 'Containerised, infrastructure-as-code, observed in production.',
    skills: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Jenkins', 'MLflow', 'Grafana'],
  },
];

export const fundamentals = ['HIPAA', 'PHI Masking', 'PII Redaction', 'AML', 'KYC', 'PCI-DSS', 'SOX', 'Model Cards', 'Agile Scrum'];

export type Metric = { value: string; label: string };
export type Project = {
  id: string;
  index: string;
  title: string;
  year: string;
  kind: string;
  /** Client and role, shown where the original showed a GitHub link. */
  client: string;
  summary: string;
  stack: string[];
  contribution: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  live?: string;
  motif: 'scan' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'clinical-document-intelligence',
    index: '01',
    title: 'Clinical Document Intelligence',
    year: '2025 — Now',
    kind: 'Generative AI · Agentic RAG · Healthcare',
    client: 'Quest Diagnostics · Generative AI Engineer',
    summary:
      'A GenAI platform on Google Cloud that gives clinical operations and diagnostic teams fast, reliable answers from scattered patient documentation.',
    stack: ['GPT-4o', 'Vertex AI', 'LangChain', 'LangGraph', 'RAG', 'Pinecone', 'FastAPI', 'BigQuery', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    contribution: [
      'Architected the Clinical Document Intelligence platform on Vertex AI, GPT-4o, LangChain, FastAPI, and Vertex AI Search, giving clinical operations and diagnostic teams faster, more reliable access to scattered patient documentation.',
      'Delivered microservices-based agentic RAG on Google Kubernetes Engine (GKE), enabling secure ingestion, embedding search, and real-time AI responses that replaced slower manual document lookups.',
      'Owned the agent build end to end — design, orchestration, evaluation, and deployment — hardening data handling with PHI masking, PII redaction, and encrypted ingestion alongside HIPAA Compliance and Clinical Informatics teams.',
      'Automated CI/CD with GitHub Actions and Google Cloud Build for zero-downtime GenAI releases, with Terraform-provisioned infrastructure across GCP, Pinecone, and Vertex AI.',
      'Instrumented Cloud Monitoring, Cloud Logging, and Vertex AI Monitoring for latency, hallucination rate, and retrieval quality; balanced accuracy against inference cost by evaluating GPT-4o, GPT-4o-mini, and LangChain routing strategies.',
    ],
    features: ['Agentic RAG on GKE', 'LangGraph workflows', 'OCR-based document intake', 'PHI masking & PII redaction', 'Zero-downtime releases'],
    metrics: [
      { value: 'RAG', label: 'Agentic, on Pinecone & Vertex AI Vector Search' },
      { value: 'HIPAA', label: 'PHI masking, PII redaction, encrypted ingestion' },
      { value: 'GKE', label: 'Dockerized FastAPI microservices' },
      { value: 'CI/CD', label: 'Zero-downtime GenAI releases' },
    ],
    motif: 'scan',
  },
  {
    id: 'wealth-risk-scoring',
    index: '02',
    title: 'Wealth Risk Scoring & AML',
    year: '2020 — 2022',
    kind: 'Machine Learning · Banking · Risk',
    client: 'UBS · Machine Learning Engineer',
    summary:
      'A risk-scoring platform on Amazon SageMaker that sharpens advisor intelligence and fraud triage, with event-driven pipelines processing transaction feeds at scale.',
    stack: ['Amazon SageMaker', 'XGBoost', 'LightGBM', 'Scikit-learn', 'SMOTE', 'SHAP', 'MLflow', 'PySpark', 'Amazon Redshift', 'Docker', 'Terraform', 'Grafana'],
    contribution: [
      'Engineered a wealth risk-scoring platform on Amazon SageMaker, XGBoost, and Amazon S3, with an event-driven pipeline across AWS Glue and Redshift to process transaction feeds at scale.',
      'Strengthened AML detection by integrating transaction feeds, MCC codes, and watchlist data; validated datasets with PySpark, Pandas, and Great Expectations ahead of every scoring run.',
      'Benchmarked XGBoost, LightGBM, and scikit-learn against real fraud patterns, addressing class imbalance with SMOTE and threshold calibration.',
      'Standardized reusable risk features in Redshift and SageMaker Feature Store, cutting duplicated work across AML, KYC, and advisor-interaction models.',
      'Authored model cards, SHAP baselines, and experiment lineage documentation that became the standard for SOX audit readiness.',
    ],
    features: ['Event-driven scoring pipeline', 'AML & KYC models', 'SageMaker Feature Store', 'Drift monitoring (AUC, PSI)', 'SOX-ready documentation'],
    metrics: [
      { value: 'AML', label: 'Transaction feeds, MCC codes & watchlists' },
      { value: 'XGB', label: 'Chosen after benchmarking vs LightGBM' },
      { value: 'EKS', label: 'Scaled scoring through month-end peaks' },
      { value: 'SOX', label: 'Model cards & experiment lineage' },
    ],
    motif: 'flow',
  },
  {
    id: 'loyalty-personalization',
    index: '03',
    title: 'Loyalty Personalization',
    year: '2018 — 2020',
    kind: 'Data Science · Retail · Azure',
    client: 'Starbucks · Data Scientist',
    summary:
      'Personalization and churn models that sharpened recommendation relevance across mobile ordering and loyalty engagement.',
    stack: ['Python', 'SQL', 'Scikit-learn', 'XGBoost', 'SHAP', 'A/B Testing', 'Azure Databricks', 'Pandas'],
    contribution: [
      'Delivered personalization models on Python, SQL, and Scikit-learn that sharpened recommendation relevance across mobile ordering and loyalty engagement, drawing on POS, loyalty, and order data through Azure Data Factory.',
      'Built feature pipelines in Azure Databricks blending basket, inventory, and weather signals; applied RFM analysis, CLV modeling, and propensity scoring to sharpen loyalty offer targeting across regional stores.',
      'Compared Scikit-learn and XGBoost for recommendation scoring, tuning with cross-validation and hyperparameter optimization to strengthen churn prediction for seasonal campaigns.',
      'Validated explainability with SHAP and A/B testing; monitored latency and AUC-ROC drift through Azure Monitor and Application Insights during peak promotion traffic.',
    ],
    features: ['RFM & CLV modeling', 'Propensity scoring', 'Churn prediction', 'Basket, inventory & weather signals'],
    metrics: [
      { value: 'RFM', label: 'Segmentation for loyalty offers' },
      { value: 'CLV', label: 'Customer lifetime value modeling' },
      { value: 'A/B', label: 'Tested with SHAP explainability' },
      { value: 'Azure', label: 'Databricks, Data Factory, Data Lake' },
    ],
    motif: 'tenants',
  },
];

export type TimelineItem = { period: string; title: string; org: string; place?: string; kind: string; points: string[] };

export const timeline: TimelineItem[] = [
  {
    period: 'Mar 2025 — Present',
    title: 'Generative AI Engineer',
    org: 'Quest Diagnostics',
    place: 'New York, NY',
    kind: 'Work',
    points: [
      'Architected the Clinical Document Intelligence platform on Vertex AI, GPT-4o, LangChain, FastAPI, and Vertex AI Search.',
      'Delivered microservices-based agentic RAG on GKE with secure ingestion, embedding search, and real-time AI responses.',
      'Built CI/CD with GitHub Actions and Google Cloud Build for zero-downtime GenAI releases; Terraform across GCP, Pinecone, and Vertex AI.',
    ],
  },
  {
    period: 'Jan 2023 — Dec 2024',
    title: 'M.S., Computer Science',
    org: 'Pace University',
    kind: 'Education',
    points: ['Master of Science in Computer Science.'],
  },
  {
    period: 'Sep 2020 — Nov 2022',
    title: 'Machine Learning Engineer',
    org: 'UBS',
    place: 'India',
    kind: 'Work',
    points: [
      'Engineered a wealth risk-scoring platform on Amazon SageMaker, XGBoost, and Amazon S3.',
      'Strengthened AML detection with transaction feeds, MCC codes, and watchlist data through AWS Glue and S3.',
      'Authored model cards, SHAP baselines, and lineage documentation that became the standard for SOX audit readiness.',
    ],
  },
  {
    period: 'Jan 2018 — Aug 2020',
    title: 'Data Scientist',
    org: 'Starbucks',
    place: 'India',
    kind: 'Work',
    points: [
      'Delivered personalization models across mobile ordering and loyalty engagement.',
      'Built Azure Databricks feature pipelines; applied RFM analysis, CLV modeling, and propensity scoring.',
      'Validated models with SHAP and A/B testing to support segmentation and loyalty decisions.',
    ],
  },
  {
    period: 'Jun 2015 — Nov 2017',
    title: 'Python Developer',
    org: 'Fortis Healthcare',
    place: 'India',
    kind: 'Work',
    points: [
      'Built healthcare management applications in Python, Django, SQL Server, and JavaScript.',
      'Engineered Flask and REST API backend services to modernize patient-record processing.',
      'Automated build and deployment with Jenkins, Git, and Docker.',
    ],
  },
  {
    period: '2014',
    title: 'B.Tech, Electronics & Communication Engineering',
    org: 'JNTU Hyderabad',
    kind: 'Education',
    points: ['Bachelor of Technology in ECE.'],
  },
];

/** Shown in the right-hand column of the Experience section, headed "Industries". */
export type Recognition = { title: string; org: string; detail: string; kind: string; link?: string };

export const recognitions: Recognition[] = [
  {
    title: 'Healthcare',
    org: 'Quest Diagnostics · Fortis Healthcare',
    kind: 'Regulated',
    detail: 'HIPAA compliance, PHI masking, PII redaction, HL7/FHIR APIs, clinical workflow automation.',
  },
  {
    title: 'Banking & wealth management',
    org: 'UBS',
    kind: 'Regulated',
    detail: 'AML, KYC, PCI-DSS and SOX controls; model governance with SHAP and drift diagnostics.',
  },
  {
    title: 'Retail',
    org: 'Starbucks',
    kind: 'Analytics',
    detail: 'Loyalty, churn and personalization — RFM, CLV, propensity scoring, A/B testing.',
  },
  {
    title: 'Insurance',
    org: 'Fortis Healthcare',
    kind: 'Backend',
    detail: 'Insurance-verification integrations built with reusable Django ORM modules.',
  },
];

export type Certification = { issuer: string; name: string; link: string };

/** None on the resume yet — add some here and the Certifications block appears. */
export const certifications: Certification[] = [];

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

/** Which projects use a given skill — used by the Expertise section. */
export function projectsUsing(skill: string): string[] {
  const s = skill.toLowerCase();
  return projects.filter((p) => p.stack.some((t) => t.toLowerCase() === s)).map((p) => p.title);
}
