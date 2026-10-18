# shyamenk.space — Site content (v1 draft)

> **Superseded.** This was the first content draft. The live copy is `src/content/site.ts`; posts and projects are in `content/`.

Sources: LinkedIn `Profile.pdf` (Oct 2026) and the old portfolio (`~/Desktop/workfolio`). Profile.pdf wins where they disagree.

---

## 0. Meta

- **Title:** Shyam Kumar · Cloud & Backend Engineer
- **Description:** Cloud and backend engineer in Kochi. Six years building production systems on AWS for healthcare and SaaS teams. Writing about Linux, Kubernetes, AWS and system design.
- **Domain:** shyamenk.space

---

## 1. Navigation

Home · Work · Projects · Writing · About · **Contact** (button)

---

## 2. Hero

- **Status pill:** Open to Cloud / Platform roles · Kochi, India **[CHECK: role type you want to show]**
- **Eyebrow:** Shyam Kumar · Cloud & Backend Engineer
- **Headline (pick one):**
  - A. I keep production boring.
  - B. Turning production outages into practical lessons.
  - C. Cloud infrastructure that costs less and breaks less.
- **Sub-headline:** I design, migrate and run production systems on AWS. Six years across healthcare and SaaS, from a HIPAA platform handling 40,000+ patient records a day to a 9-service migration from GCP to AWS.
- **Primary CTA:** Email me → `mailto:shyamenk@gmail.com`
- **Secondary CTA:** Download résumé → `/shyam_cloud_2026.pdf` **[CHECK: new PDF name]**
- **Social:** GitHub · LinkedIn · X

---

## 3. Proof strip (short, scannable)

- Compute cost **~51% lower** after moving to Graviton
- Staging cost **~70% lower** with Fargate Spot
- Builds from **35-40 min to 8-12 min**
- **1,000+** healthcare providers, **zero** security incidents

(Design note: do not render as a big-number stat row; inline or as a ticker.)

---

## 4. About

**Short (home page):**
I'm a cloud and backend engineer with six years of shipping production systems. I work mostly on AWS, Node.js, Python and PostgreSQL, and lately on Kubernetes and GitOps with Argo CD. I care about trade-offs: what something costs, how it fails, and who has to maintain it at 2 AM.

**Long (/about):**
I started in web development and moved steadily down the stack: from React front ends, to APIs and databases, to the cloud infrastructure underneath them.

At CyberSapient I architected a HIPAA-compliant EHR platform for 1,000+ healthcare providers, handling 40,000+ patient records a day without a security incident. Today, at Amdrodd Technologies, I'm leading a multi-tenant SaaS platform's migration from GCP to AWS: landing zone, Terraform, CI/CD and security, end to end.

I learn by doing and write down what breaks. Those notes become posts on the blog and a free hands-on Kubernetes course, Kube by Kube.

---

## 5. Experience

### AWS Cloud Engineer · Senior Full Stack Engineer
**Amdrodd Technologies LLC** · Kochi · Feb 2026 to present
- Leading the migration of a multi-tenant SaaS platform (enterprise clients) from GCP to AWS across 9 microservices; caught an unmonitored auto-scaling misconfiguration that silently scaled 1 to 4 tasks with no alerts.
- Built a multi-account AWS landing zone (Organizations, Control Tower, IAM Identity Center) for central governance and SSO.
- Moved services to ECS Fargate on Graviton/ARM64 with Terraform across dev, staging and prod, cutting compute cost ~51% vs x86.
- Cut staging cost ~70% with Fargate Spot and NAT Gateway removal, reinvesting the savings in a hardened production VPC: net $0 for a safer split.
- Automated CI/CD (Bitbucket → OIDC → ECR → ECS) with rolling deploys and rollback; builds from 35-40 min to 8-12 min on a self-hosted ARM64 runner.
- Audited 34 Secrets Manager secrets, finding 532 duplicated cross-environment values and 33 weak credentials; drove full remediation.
- Moved 158+ secret keys off .env files and replaced long-lived SSH keys with short-lived OIDC auth.
- Replaced a shared MongoDB Atlas superuser with 10 least-privilege per-app users, rotating 7 of 10 apps the same day.

### Senior Full Stack Engineer
**CyberSapient Technologies** · Trivandrum · Feb 2024 to Feb 2026
- Architected a HIPAA-compliant EHR platform serving 1,000+ providers and 40,000+ patient records daily, with zero security incidents.
- Built a serverless image transcoding pipeline (Lambda, S3, DynamoDB, CloudFront) with <100 ms CDN latency.
- Designed a DrChrono webhook integration (Lambda, S3, SES) that cut manual data entry by 75%.
- Optimised PostgreSQL queries (indexing, partitioning) for 40% faster responses.
- CI/CD with GitHub Actions to ECS Fargate, deploys in ~8 minutes.
- Real-time analytics dashboard (Next.js, shadcn/ui), 30% faster metric access.

### Web Developer
**Ethernex IT Solutions** · Abu Dhabi, UAE · Jan 2022 to Jan 2024
- Responsive healthcare web apps with React and Tailwind CSS.
- Stripe subscription billing and Twilio SMS appointment reminders.
- REST APIs in Node.js; MongoDB indexing and query optimisation.

### Junior iPhone Developer
**Codelynks** · Kochi · Feb 2012 to Feb 2014 **[CHECK: show this? It's outside the "6 years" framing]**

### Education
B.Tech, Computer Science & Engineering · Mangalam College of Engineering · 2005-2009

---

## 6. Projects

### Featured
1. **CostPulse** · Slack app · 2026
   `/cost` in Slack shows your AWS spend by service. One Slack scope, one IAM action, cost guardrails built in.
   *Python · Bolt · Lambda · SAM · Cost Explorer* · [GitHub](https://github.com/shyamenk/costpulse)
2. **Serverless Image Transcoding Pipeline** · 2025
   Event-driven pipeline that turns every upload into optimised formats and serves them globally via CloudFront.
   *Lambda · S3 · CloudFront · DynamoDB · Sharp · CloudFormation* · [GitHub](https://github.com/shyamenk/image-transcoding-pipeline)
3. **Kube by Kube** · in progress
   A free, hands-on Kubernetes course. Plain language, troubleshooting first, one real app from your first cluster to production on AWS.
   *Kubernetes · Argo CD · AWS* · [GitHub](https://github.com/shyamenk/kube-by-kube) **[CHECK: public?]**
4. **Tech Blog AI** · 2026
   AI writing assistant for technical posts: research, RAG over your notes, SEO checks, multi-step LangGraph workflows.
   *Python · FastAPI · LangChain · LangGraph · Gemini · ChromaDB* · [GitHub](https://github.com/shyamenk/tech-blog-ai)

### More work
5. **MedRabbits** · Healthcare platform: appointments, telemedicine, medical records. *React · Node.js · PostgreSQL · ECS · RDS* · [medrabbits.com](https://medrabbits.com)
6. **Gemcaps** · Healthcare revenue-cycle platform for billing, coding and patient services. *Next.js · PostgreSQL · ECS · Lambda · SNS/SES · Redis*
7. **AeghisCorp Dashboard** · Shipping operations: vessels, invoices, timesheets, live analytics. *Next.js · PostgreSQL · Prisma · EC2*
8. **Fundcy** · Personal finance tracker with goals and analytics. *Next.js · PostgreSQL · Drizzle* · [GitHub](https://github.com/shyamenk/fundcy)
9. **Kubernetes Notes** · Searchable viewer for my Kubernetes study notes. *React · Vite · Tailwind*

---

## 7. Skills (grouped, no icon grid)

- **Cloud & infra:** AWS (ECS Fargate, Lambda, S3, RDS, DynamoDB, CloudFront, Organizations, Control Tower, IAM Identity Center, KMS, CloudWatch, VPC), Terraform, CloudFormation/SAM, Docker, Kubernetes, Argo CD
- **Delivery:** GitHub Actions, Bitbucket Pipelines, OIDC federation, GitOps
- **Backend:** Node.js, Python, FastAPI, Express, REST, event-driven and serverless design
- **Data:** PostgreSQL, MongoDB, DynamoDB, Redis, Drizzle ORM
- **Security & ops:** Secrets Manager rotation, least-privilege IAM, incident response and RCA, CloudWatch alerting, Uptime Kuma
- **AI:** Claude API, OpenAI, Gemini, LangChain, LangGraph, RAG
- **Front end:** Next.js, React, TypeScript, Tailwind CSS, shadcn/ui

**Certifications:** AWS Educate · Introduction to Generative AI · AWS Educate · Getting Started with Networking

---

## 8. Writing

**Intro:** I write on the blog about Linux, Kubernetes, AWS and system design. Each post is one real problem, the bottleneck behind it, and the fix.

Posts (now in `content/blog`):
- Mastering API Design: "Most developers know how to build APIs, but only a few know how to design them." · Dec 2024
- System Design: "Every successful tech system shares a hidden pattern." · Dec 2024
- Optimizing Database Design: scalable, high-performance databases. · Nov 2024

CTA: All posts → /blog

---

## 9. Testimonials (from the old site)

> "Shyam is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding."
> **Krishna Prasad**, Senior Product Manager, CyberSapient Technologies

> "Working with Shyam was a pleasure. He not only met our technical requirements but also provided valuable insights that improved our product."
> **Jasim Al-Mubarck**, Full Stack Developer, CyberSapient Technologies

> "Shyam's expertise in full-stack development and his ability to quickly adapt to new technologies made him an invaluable team member."
> **Nitin O V**, Team Lead CMS, Evolve

---

## 10. Contact

- **Heading:** Have a system that needs to cost less or break less?
- **Body:** I'm open to cloud, platform and backend roles. Email is fastest.
- **Email:** shyamenk@gmail.com
- **Links:** linkedin.com/in/shyamenk · x.com/shyamenk07 · github.com/shyamenk · www.shyamenk.space/blog
- **Phone:** not shown publicly (recommended).

## 11. Footer

© 2026 Shyam Kumar V M · Built with Next.js · Kochi, India
