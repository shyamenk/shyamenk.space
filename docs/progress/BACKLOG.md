# Backlog

Open work for shyamenk.space, in priority order. Each task gets a GitHub issue and a `type/issue-number-slug` branch when picked up.

## Verify

### T1 · Check the contact email in Gmail · Priority: High

**Acceptance criteria:**

- [ ] A test message from https://www.shyamenk.space/contact arrives with subject "New message from {name} · {Role|Project|General}"
- [ ] The branded template renders correctly in Gmail (web and mobile, light and dark mode)
- [ ] The topic dropdown keeps its value after a validation error

## Quality

### T2 · Add Prettier and a test setup · Priority: High · Done (#21)

**Acceptance criteria:**

- [x] `npm run format` and `npm run format:check` exist and pass
- [x] Unit tests cover `emailSubject`, `contactEmail` escaping, and contact form validation
- [x] GitHub Actions runs lint, format check, build and tests on every PR

### T3 · Return a real 404 status for unknown slugs · Priority: Low

**Acceptance criteria:**

- [ ] `/blog/does-not-exist` and `/projects/does-not-exist` return HTTP 404, not 200 + noindex

## Content (owner's call)

### T4 · Final copy and section order · Priority: Medium

- [ ] Owner confirms which home sections stay, their order, and final wording in `src/content/site.ts`

### T5 · Add Kube by Kube once its repo is public · Priority: Low

- [ ] Project card, case study and GitHub README entry

## Email

### T6 · Send contact email from the site's own domain · Priority: Low

**Acceptance criteria:**

- [ ] `shyamenk.space` verified in Resend (DNS records added at Hostinger)
- [ ] `CONTACT_FROM` set to an address on the domain; mail still arrives
