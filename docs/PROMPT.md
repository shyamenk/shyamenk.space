# Design prompt: shyamenk.space

Paste this into a design or code assistant (v0, Lovable, Claude, Cursor). Replace the [CHOSEN VARIANT] line with 1, 2 or 3 after you pick a prototype.

---

Build a personal portfolio site for **Shyam Kumar V M**, a Cloud & Backend Engineer in Kochi, India, at **shyamenk.space**.

**Stack:** Next.js 15 (App Router, TypeScript), Tailwind CSS, Framer Motion for motion, MDX for posts/case studies, deployed on Vercel. Static where possible; no CMS.

**Audience and goal:** hiring managers and founders arriving from X or LinkedIn on a laptop, deciding in under 30 seconds whether he ships. Secondary: engineers who follow his Linux / Kubernetes / AWS / system design posts. Primary action: email. Secondary: read the blog at /blog.

**Positioning (use verbatim):** "Turning production outages into short, practical lessons." Every story uses the same shape: **problem, bottleneck, fix.**

**Concept:** Kubernetes as structure and metaphor, not decoration. The person is a manifest; experience is a rollout history; projects are workloads; achievements are cluster events; topics are nodes. No Kubernetes, AWS, or other trademarked logos.

**Visual direction:** [CHOSEN VARIANT]

1. _Manifest_: warm paper background, ink text, one ember-orange accent. Bricolage Grotesque + JetBrains Mono. Hero = profile as a YAML manifest that types in line by line.
2. _Cluster_: deep graphite-green dark theme with pod-status colours (Running green, Pending amber, Failed coral, info cyan). Schibsted Grotesk + Geist Mono. Hero = animated SVG of pods being scheduled onto nodes.
3. _Poster_: drenched ember-red hero, enormous condensed type (Anton), Archivo body, black-and-white portrait. Hero headline "Pods down? I read the logs." Incident reports as expandable problem / bottleneck / fix rows.

**Pages:**

- `/` home: hero, proof (experience as rollouts with numbers), 3-4 projects, writing teaser, contact.
- `/work/[slug]` MDX case studies in problem / bottleneck / fix format.
- `/blog`, `/blog/[slug]`, `/blog/tags/[tag]` render Markdown posts from `content/blog`.
- `/about` short bio, timeline, photo, resume PDF.

**Content (only these facts; no invented numbers):**

- Amdrodd Technologies, AWS Cloud Engineer, Feb 2026 to now: GCP to AWS migration of 9 microservices; multi-account landing zone (Organizations, Control Tower, IAM Identity Center); ECS Fargate on Graviton with Terraform, compute ~51% cheaper than x86; staging ~70% cheaper (Fargate Spot, NAT removed); CI/CD Bitbucket to OIDC to ECR to ECS with rollback, builds 35-40 min to 8-12 min; audit of 34 Secrets Manager secrets (532 duplicated values, 33 weak credentials); 158+ keys moved off .env.
- CyberSapient, Senior Full Stack Engineer, Feb 2024 to Feb 2026: HIPAA EHR for 1,000+ providers, 40,000+ records/day, zero security incidents; serverless image transcoding <100 ms at the CDN; DrChrono webhooks cut manual entry 75%; PostgreSQL 40% faster.
- Ethernex IT Solutions, Abu Dhabi, Web Developer, 2022-2024.
- Projects: CostPulse (Slack /cost for AWS spend; Lambda + SAM; github.com/shyamenk/costpulse), Kube by Kube (free hands-on Kubernetes course), Kubernetes Notes app, serverless image transcoding.
- Links: shyamenk@gmail.com · linkedin.com/in/shyamenk · x.com/shyamenk07 · github.com/shyamenk · www.shyamenk.space/blog.

**Motion:** one orchestrated page-load (staggered reveal of the hero), scroll-triggered reveals below the fold, ease-out-expo curves, no bounce. Animate only transform and opacity. Respect `prefers-reduced-motion` everywhere.

**Quality bar:**

- Lighthouse 95+ on all four categories; LCP under 2 s; no layout shift from fonts (use `next/font`).
- Accessible: semantic landmarks, visible focus, 4.5:1 contrast, alt text that describes, keyboard-operable expanders.
- Responsive from 360 px; no horizontal scroll.
- Colours in OKLCH as CSS variables; never pure #000 or #fff.

**Avoid:** centred "Hi, I'm" hero with avatar, skill-icon grids, identical project cards, a big-number stat row, gradient text, glassmorphism, neon-on-black hacker styling, Kubernetes-blue everything, em dashes in copy, filler words like "passionate" or "innovative".
