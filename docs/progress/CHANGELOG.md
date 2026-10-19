# Changelog

All notable changes to shyamenk.space. Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

## [0.3.0] - 2026-10-19

A site favicon, a consistent type scale across the home page, a vertical Experience timeline with the Web Developer role filled in, tabbed Toolbox, and a new OWASP Top 10:2025 post.

### Added

- Blog post "OWASP Top 10:2025: What Changed Since 2021, and What I Keep Finding in Real Audits"; the 2021 post links to it (#45).
- Site favicon: an orange S on the dark palette, as `icon.svg`, `apple-icon.png` and a 16/32/48px `favicon.ico` (#47).
- Experience entry for the Web Developer role at Ethernex and a short earlier entry for Codelynks (#49).
- Toolbox tabs: pick a group on the left, see its tools on the right (#49).

### Changed

- Home page type scale: one golden-ratio set of sizes for headings, lead text and body, applied to every section and card (#49).
- Experience is a vertical timeline with bullets instead of cards (#49).
- Project cards show the year as a badge on the cover image; blog and project cards share one text style (#49).
- Hero button reads "Contact me" and opens the contact form instead of the mail client (#49).
- Kind words quotes use the body font in italic instead of the handwriting font (#49).
- Contact form email is sent from `contact@shyamenk.space` (domain verified in Resend) instead of Resend's shared onboarding address (#41).
- README documents the contact form environment variables and the DNS records behind them (#41).

### Removed

- Unused 1.7 MB image `public/blog/api-design-build-scale.png` (#43).

## [0.2.0] - 2026-10-19

Two new Kubernetes posts, a test suite with CI on every PR, real 404 status codes, and a cleanup of the older posts.

### Added

- Blog post "Kubernetes from Zero: How I Stopped Babysitting Containers and Started Declaring What I Want" (#25).
- Blog post "GitOps with ArgoCD: How I Stopped Trusting kubectl apply and Started Trusting Git" (#23).
- Prettier (`npm run format`, `npm run format:check`), Vitest unit tests for the contact email and form validation (`npm test`), and a GitHub Actions CI workflow (#21).

### Changed

- API Design, Database Normalization, NGINX, OWASP Top 10 and System Design posts rewritten to the house style of the newer posts: hook openings, Key Takeaways and Final Thoughts, no em dashes or unsourced statistics, labelled code blocks, accurate read times. Fixes the missing normalization tables, the Facebook rewrite claim, the misread OWASP percentages and mislabeled OWASP code examples; the OWASP post now notes the 2025 edition (#33).
- Database Normalization excerpt no longer cites an unsourced 80% figure (#31).
- GitOps with ArgoCD post dated July 22, 2026 (#29).
- Removed emojis from the GitOps with ArgoCD post (#26).
- `npm run lint` fails on any warning; `@types/node` bumped to `^24` (#21).

### Fixed

- Unknown post, project and tag slugs return HTTP 404 instead of 200 + noindex in production builds (#35).
- Header LinkedIn and email links and footer social links open in a new tab (#19).

### Removed

- Webpack, Database Design and Understanding HTTP posts, as off-focus for the cloud/backend positioning; their URLs and the tag pages they left empty redirect (308) to `/blog` (#31).

## [0.1.0] - 2026-10-18

First public release at https://www.shyamenk.space (Vercel, domain on Hostinger DNS).

### Added

- Next.js 16 + Tailwind v4 site in the "Lava" design, statically prerendered (`a2f7a6f`).
- Home: hero, What I do (hover-expand list), Projects, Experience timeline, Toolbox, Kind words, Writing, FAQ.
- Pages: About, Contact, Blog with posts and tag routes, Projects with case studies (Markdown in `content/`).
- Richer anonymised Amdrodd achievements in the experience timeline (#8).
- Contact form: Server Action with honeypot and minimum fill time, delivered through Resend (#11).
- Branded HTML email for contact messages, with a plain-text part and escaped input (#15).

### Changed

- Canonical host is `https://www.shyamenk.space` (#2).
- Contact page rebuilt as a details card plus form card (#11).
- About page sections match the header width and card padding (#13).
- Contact email subject is now "New message from {name} · Role/Project/General" (#17).
- Education shows B.Tech, Computer Science (#9).

### Removed

- Every Backend Almanac link from the site, docs and design prototypes (#2, #4).

### Fixed

- Image transcoding project links to its real repo, `serverless-image-transcoding-pipeline` (#6).
