# shyamenk.space — Product context

register: brand

## Product purpose
Personal site for Shyam Kumar V M, Cloud & Backend Engineer (Kochi, India, 6 years in production). It turns real production work into proof and sends people to the writing (the blog at /blog) and to a conversation (/contact).

## Users
1. Hiring managers and founders arriving from X or LinkedIn, on a laptop between meetings, deciding in under 30 seconds whether this engineer actually ships.
2. Engineers who follow the Linux / Kubernetes / AWS / system design posts and want the longer version.

## Positioning
"Turning production outages into short, practical lessons." Every story follows the same shape: problem, bottleneck, fix.

## Facts the site may use (source: LinkedIn Profile.pdf, Oct 2026)
- Amdrodd Technologies, AWS Cloud Engineer, Feb 2026 to now: GCP to AWS migration of 9 microservices; multi-account landing zone (Organizations, Control Tower, IAM Identity Center); ECS Fargate on Graviton with Terraform, compute about 51% cheaper than x86; staging about 70% cheaper (Fargate Spot, no NAT); CI/CD Bitbucket, OIDC, ECR, ECS with rollback, builds from 35-40 min to 8-12 min; audit of 34 Secrets Manager secrets (532 duplicated values, 33 weak credentials); 158+ keys moved off .env files.
- CyberSapient, Senior Full Stack Engineer, Feb 2024 to Feb 2026: HIPAA EHR for 1,000+ providers, 40,000+ records a day, zero security incidents; serverless image transcoding (<100 ms CDN latency); DrChrono webhooks (75% less manual entry); PostgreSQL 40% faster.
- Ethernex IT Solutions (Abu Dhabi), Web Developer, 2022 to 2024.
- Projects: CostPulse (Slack /cost, Lambda + SAM, github.com/shyamenk/costpulse), Kube by Kube (free hands-on Kubernetes course), Kubernetes Notes app, serverless image transcoding pipeline.
- Links: shyamenk@gmail.com, linkedin.com/in/shyamenk, x.com/shyamenk07, github.com/shyamenk, www.shyamenk.space/blog.

## Tone
Calm under pressure, specific, a little dry. Numbers over adjectives. No hype words.

## Anti-references
Generic dev-portfolio template (centered avatar, "Hi, I'm", skill-icon grid, identical project cards, stat row). Neon-on-black hacker aesthetic. Kubernetes-blue everything.

## Strategic principles
- Proof first: every claim carries a number or a link.
- The Kubernetes theme is structure and metaphor (manifests, nodes, pods, rollouts), not logo decoration. No Kubernetes or AWS trademarks.
- Built in Next.js 16 (this repo). Live at https://www.shyamenk.space; copy lives in `src/content/site.ts`, posts and projects in `content/`.
