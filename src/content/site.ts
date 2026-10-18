// All page copy lives here so wording and section order can change without touching components.

export const profile = {
  name: "Shyam Kumar",
  fullName: "Shyam Kumar V M",
  role: "Cloud & Backend Engineer",
  location: "Kochi, India",
  email: "shyamenk@gmail.com",
  photo: { src: "/images/me.jpeg", alt: "Shyam Kumar with arms crossed, black and white portrait" },
  socials: [
    { label: "linkedin", href: "https://www.linkedin.com/in/shyamenk" },
    { label: "x", href: "https://x.com/shyamenk07" },
    { label: "github", href: "https://github.com/shyamenk" },
  ],
};

export const nav = [
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/#timeline" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  badge: "Available now",
  headline: [["Turning", "production"], ["outages", "into"]],
  headlineAccent: "practical lessons",
  sub: "Cloud & backend engineering on AWS: migrations, cost cuts and systems that stay up.",
  cta: { label: "Email Me", href: `mailto:${profile.email}` },
};

export const services = {
  title: "What I do",
  intro: "Four areas, one system: the code, the cloud it runs on, how it ships, and what it costs.",
  items: [
    {
      title: "Backend Engineering",
      body: "APIs, data models and event-driven services built to stay fast and correct under real traffic.",
      tools: ["Node.js", "Python", "FastAPI", "PostgreSQL", "MongoDB", "Redis"],
      proof: "HIPAA EHR handling 40,000+ records a day; PostgreSQL queries 40% faster.",
    },
    {
      title: "Cloud Architecture",
      body: "AWS landing zones, migrations and serverless designs with clear account, network and security boundaries.",
      tools: ["ECS Fargate", "Lambda", "S3", "CloudFront", "Organizations", "Control Tower"],
      proof: "9 microservices moved from GCP to AWS on a multi-account landing zone.",
    },
    {
      title: "DevOps & CI/CD",
      body: "Pipelines, infrastructure as code and containers, so every change ships the same way and can roll back.",
      tools: ["Terraform", "Docker", "Kubernetes", "Argo CD", "GitHub Actions", "OIDC"],
      proof: "Builds cut from 35-40 minutes to 8-12 with OIDC-based CI/CD and rollback.",
    },
    {
      title: "Cost & Security",
      body: "Cheaper, safer infrastructure: right-sized compute, least-privilege access and secrets that rotate.",
      tools: ["Graviton", "Fargate Spot", "IAM", "Secrets Manager", "KMS", "CloudWatch"],
      proof: "Compute ~51% cheaper; 532 duplicated secrets found and remediated.",
    },
  ],
};

export const about = {
  title: "About",
  lead: "Cloud and backend engineer. Six years of shipping production systems.",
  current: {
    label: "Currently",
    role: "AWS Cloud Engineer",
    company: "Amdrodd Technologies",
    period: "Feb 2026 to now · Kochi",
    summary:
      "Leading a multi-tenant SaaS migration from GCP to AWS: a multi-account landing zone, Terraform across every environment, OIDC-based CI/CD with auto-rollback, monitoring and alerting, and a full security clean-up.",
  },
  paragraphs: [
    "I started in web development in Abu Dhabi and moved steadily down the stack: from React front ends, to APIs and databases, to the cloud infrastructure underneath them.",
    "Before Amdrodd, I spent two years at CyberSapient architecting a HIPAA-compliant EHR used by 1,000+ healthcare providers, with zero security incidents.",
    "I learn by doing and write down what breaks. Those notes become the posts on my blog.",
  ],
  journey: [
    { period: "2026 to now", role: "AWS Cloud Engineer", company: "Amdrodd Technologies", note: "GCP to AWS migration, landing zone, cost and security" },
    { period: "2024 to 2026", role: "Senior Full Stack Engineer", company: "CyberSapient Technologies", note: "HIPAA EHR, serverless pipelines, PostgreSQL" },
    { period: "2022 to 2024", role: "Web Developer", company: "Ethernex IT Solutions, Abu Dhabi", note: "Healthcare web apps, billing and messaging" },
  ],
  facts: [
    { label: "Based in", value: "Kochi, India (IST)" },
    { label: "Focus", value: "AWS, platform, backend" },
    { label: "Writing about", value: "Linux, Kubernetes, AWS, system design" },
    { label: "Education", value: "B.Tech, Computer Science" },
  ],
};

export const projectsSection = {
  title: "Projects",
  intro: "Selected work. Each one has a write-up: the problem, the constraint and the trade-off.",
  cta: { label: "All projects", href: "/projects" },
};

export const skills = {
  title: "Toolbox",
  intro: "What I reach for, grouped by the job it does.",
  groups: [
    { name: "Cloud & Infra", items: ["AWS", "ECS Fargate", "Lambda", "S3", "RDS", "DynamoDB", "CloudFront", "VPC", "Terraform", "CloudFormation / SAM", "Docker", "Kubernetes", "Argo CD"] },
    { name: "Delivery", items: ["GitHub Actions", "Bitbucket Pipelines", "OIDC federation", "GitOps"] },
    { name: "Backend", items: ["Node.js", "Python", "FastAPI", "Express", "REST", "Event-driven design"] },
    { name: "Data", items: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis", "Drizzle ORM"] },
    { name: "Security & Ops", items: ["Secrets Manager", "IAM Identity Center", "Least-privilege IAM", "Incident response", "CloudWatch"] },
    { name: "AI", items: ["Claude API", "OpenAI", "Gemini", "LangChain", "LangGraph", "RAG"] },
  ],
  certifications: ["AWS Educate · Getting Started with Networking", "AWS Educate · Introduction to Generative AI"],
};

export type Testimonial = { quote: string; name: string; role: string; initials: string };

export const testimonials = {
  title: "Kind words",
  items: [
    {
      quote: "Shyam is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
      name: "Krishna Prasad",
      role: "Senior Product Manager, CyberSapient",
      initials: "KP",
    },
    {
      quote: "Working with Shyam was a pleasure. He not only met our technical requirements but also provided valuable insights that improved our product.",
      name: "Jasim Al-Mubarck",
      role: "Full Stack Developer, CyberSapient",
      initials: "JA",
    },
    {
      quote: "Shyam's expertise in full-stack development and his ability to quickly adapt to new technologies made him an invaluable team member.",
      name: "Nitin O V",
      role: "Team Lead CMS, Evolve",
      initials: "NO",
    },
  ] satisfies Testimonial[],
};

export const writing = {
  title: "Writing",
  intro: "One real problem per post: what broke, why, and the fix.",
  cta: { label: "All posts", href: "/blog" },
};

export type Stage = {
  label: string;
  // Portion of the ring left unfilled, out of 440 (the ring's circumference).
  ringOffset: number;
  period: string;
  role: string;
  roleSuffix: string;
  steps: { title: string; body: string }[];
  highlightStep?: number;
};

export const timeline = {
  title: "Timeline",
  intro: "Six years, three stages, each one further down the stack.",
  stages: [
    {
      label: "Stage 3",
      ringOffset: 40,
      period: "Feb 2026 to now · Amdrodd Technologies",
      role: "AWS Cloud Engineer",
      roleSuffix: "Senior Full Stack",
      highlightStep: 1,
      steps: [
        { title: "Migrating a multi-tenant SaaS from GCP to AWS", body: "9 microservices, multi-account landing zone, Control Tower, SSO." },
        { title: "Cutting cost without cutting safety", body: "Compute ~51% cheaper on Graviton, staging ~70% cheaper with Fargate Spot and graceful SIGTERM handling, savings moved into a hardened prod VPC." },
        { title: "Infrastructure as code", body: "Reusable Terraform modules for VPC, security groups, ALB, ECS and IAM with cross-account roles, so dev, staging and prod are built the same way." },
        { title: "Deploys that roll themselves back", body: "Bitbucket to ECR to ECS over OIDC with no static credentials, rolling deploys with circuit-breaker auto-rollback, builds cut to 8-12 minutes." },
        { title: "Observability and event-driven integrations", body: "CloudWatch alarms with SNS and Slack alerts, uptime checks, and EventBridge to SQS routes with dead-letter queues between products." },
        { title: "Locking down secrets and access", body: "34 secrets audited, 532 duplicates found, 158+ keys off .env, container CVEs fixed, WAF at the edge, VPN and hardened developer servers." },
      ],
    },
    {
      label: "Stage 2",
      ringOffset: 150,
      period: "Feb 2024 to Feb 2026 · CyberSapient",
      role: "Senior Full Stack Engineer",
      roleSuffix: "Healthcare",
      steps: [
        { title: "HIPAA-compliant EHR", body: "1,000+ providers, 40,000+ records a day, zero security incidents." },
        { title: "Serverless pipelines", body: "Image transcoding under 100 ms; DrChrono webhooks cut manual entry 75%." },
        { title: "Faster everything", body: "PostgreSQL 40% faster, deploys in about 8 minutes." },
      ],
    },
    {
      label: "Stage 1",
      ringOffset: 300,
      period: "Jan 2022 to Jan 2024 · Ethernex IT Solutions, Abu Dhabi",
      role: "Web Developer",
      roleSuffix: "Front to back",
      steps: [],
    },
  ] satisfies Stage[],
};

export const faq = {
  title: "FAQ",
  intro: "The questions I get most. Anything else, just write to me.",
  items: [
    { q: "What kind of roles are you open to?", a: "Cloud, platform and backend roles where I own systems end to end: infrastructure, delivery and the code that runs on it." },
    { q: "Which cloud do you work on?", a: "Mostly AWS: ECS Fargate, Lambda, RDS, DynamoDB, CloudFront, Organizations and Control Tower. I've also migrated workloads off GCP." },
    { q: "Do you work with Kubernetes?", a: "Yes, with kind clusters and GitOps through Argo CD. I'm also writing Kube by Kube, a free hands-on Kubernetes course." },
    { q: "Can you still write application code?", a: "Every day. Node.js, Python and FastAPI on the backend, PostgreSQL and MongoDB for data, Next.js when a UI is needed." },
    { q: "Where are you based?", a: "Kochi, Kerala, India (IST). I've worked with teams in India and the UAE." },
    { q: "Where can I read your work?", a: "On the blog: Linux, Kubernetes, AWS and system design, one real problem per post.", link: { label: "the blog", href: "/blog" } },
  ],
};

export const footer = `© 2026 ${profile.fullName} · ${profile.location}`;

export const contact = {
  badge: "Available now",
  title: "Let's talk",
  intro: "Open to cloud, platform and backend engineering roles. Send a message or email me directly.",
  formTitle: "Send a message",
  formIntro: "It goes straight to my inbox, and I'll reply by email.",
  channels: [
    { label: "LinkedIn", handle: "in/shyamenk", href: "https://www.linkedin.com/in/shyamenk" },
    { label: "X", handle: "@shyamenk07", href: "https://x.com/shyamenk07" },
    { label: "GitHub", handle: "shyamenk", href: "https://github.com/shyamenk" },
    { label: "Blog", handle: "shyamenk.space/blog", href: "/blog" },
  ],
};
