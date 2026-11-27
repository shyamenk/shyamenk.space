# Backlog

Open work for shyamenk.space, in priority order. Each task gets a GitHub issue and a `type/issue-number-slug` branch when picked up.

## Verify

### T1 · Check the contact email in Gmail · Priority: High · Done (#39, confirmed by owner 2026-10-19)

**Acceptance criteria:**

- [x] A test message from https://www.shyamenk.space/contact arrives with subject "New message from {name} · {Role|Project|General}"
- [x] The branded template renders correctly in Gmail (web and mobile, light and dark mode)
- [x] The topic dropdown keeps its value after a validation error

## Quality

### T2 · Add Prettier and a test setup · Priority: High · Done (#21)

**Acceptance criteria:**

- [x] `npm run format` and `npm run format:check` exist and pass
- [x] Unit tests cover `emailSubject`, `contactEmail` escaping, and contact form validation
- [x] GitHub Actions runs lint, format check, build and tests on every PR

### T3 · Return a real 404 status for unknown slugs · Priority: Low · Done (#35)

**Acceptance criteria:**

- [x] `/blog/does-not-exist` and `/projects/does-not-exist` return HTTP 404, not 200 + noindex

## Content (owner's call)

### T4 · Final copy and section order · Priority: Medium

- [ ] Owner confirms which home sections stay, their order, and final wording in `src/content/site.ts`

### T5 · Add Kube by Kube once its repo is public · Priority: Low

- [ ] Project card, case study and GitHub README entry

## Email

### T6 · Send contact email from the site's own domain · Priority: Low · Done (#41, confirmed by owner 2026-10-19)

**Acceptance criteria:**

- [x] `shyamenk.space` verified in Resend (DNS records added at Hostinger)
- [x] `CONTACT_FROM` set to an address on the domain; mail still arrives

## Writing

### T7 · Observability series, Parts 1–3 · Priority: Medium · Done (#53)

**Acceptance criteria:**

- [x] Part 1 `/blog/monitoring-vs-observability`, Part 2 `/blog/logs-metrics-traces` and Part 3 `/blog/what-is-opentelemetry` return HTTP 200 in a production build
- [x] Each post has title, date, excerpt, tags, featuredImage and readTime front matter, and its featuredImage file exists under `public/`
- [x] Each post links to the other two parts of the series
- [x] All three posts carry the `Observability` tag, so `/blog/tags/observability` lists them
- [x] Facts that go beyond the source notes are cited in a Sources section

### T8 · Replace the observability placeholder covers · Priority: Low

- [ ] Owner swaps `public/blog/{monitoring-vs-observability,logs-metrics-traces,what-is-opentelemetry}.png` for final 1672×940 covers

### T9 · Align observability dates with LinkedIn, drop cover label · Priority: Medium · Done (#55)

**Acceptance criteria:**

- [x] Part 1 is dated 2026-11-30, Part 2 2026-12-01 and Part 3 2026-12-02
- [x] The three covers no longer show the "placeholder cover" label and stay 1672×940
