# Changelog

All notable changes to shyamenk.space. Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

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
