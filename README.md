# shyamenk.space

Personal site of Shyam Kumar V M, Cloud & Backend Engineer. Next.js 16 (App Router), Tailwind CSS v4, fully static.

## Develop

```sh
npm install
npm run dev           # http://localhost:3000
npm run lint          # zero warnings allowed
npm run format        # format:check verifies without writing
npm test              # Vitest tests; run npm run build first (status-code tests use next start)
npm run build
```

CI (`.github/workflows/ci.yml`) runs lint, format check, build and tests on every PR and push to `main`.

## Environment variables

The contact form (`src/app/contact/actions.ts`) sends mail through [Resend](https://resend.com). Set these in Vercel (Production), or in `.env.local` for local testing.

| Variable         | Required | Default                                   | Purpose                                                           |
| ---------------- | -------- | ----------------------------------------- | ----------------------------------------------------------------- |
| `RESEND_API_KEY` | Yes      | none (the form shows an error without it) | Resend API key with sending access                                |
| `CONTACT_FROM`   | No       | `shyamenk.space <onboarding@resend.dev>`  | Sender; production uses `shyamenk.space <contact@shyamenk.space>` |
| `CONTACT_TO`     | No       | `shyamenk@gmail.com`                      | Inbox that receives contact messages                              |

Sending from `@shyamenk.space` needs the domain verified in Resend. The records live in Hostinger DNS: TXT `resend._domainkey` (DKIM), CNAMEs `send` and `rsend` (SPF / return path), and TXT `_dmarc`. Copy exact values from the Resend dashboard if they ever need re-adding.

## Routes

| Route                           | Source                                                                                                                    |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `/`                             | Home: hero, about, what I do, projects, experience, toolbox, kind words, writing, FAQ, contact                            |
| `/blog`, `/blog/[slug]`         | `content/blog/*.mdx` (frontmatter: title, date, excerpt, tags, featuredImage, readTime)                                   |
| `/blog/tags/[tag]`              | Tags collected from the posts                                                                                             |
| `/projects`, `/projects/[slug]` | `content/projects/*.mdx` (frontmatter: slug, title, description, date, image, technologies, githubUrl, liveUrl, featured) |

Add a post or project by dropping a Markdown file into `content/`; every page is prerendered at build time. Projects with `featured: true` appear on the home page (newest three).

## Where things live

| Path                  | What                                                                                        |
| --------------------- | ------------------------------------------------------------------------------------------- |
| `src/content/site.ts` | All page copy: hero, services, portfolio, timeline, FAQ, contact                            |
| `src/app/page.tsx`    | Section order (`sections` array)                                                            |
| `src/components/`     | One component per section; `flip-card` and `reveal-observer` are the only client components |
| `src/app/globals.css` | Theme tokens (colours, fonts) and animations                                                |
| `public/images/`      | Portrait (`me.jpeg`) and project images                                                     |
| `docs/`               | Product brief, content draft, design prompt                                                 |
| `design/prototypes/`  | Static HTML design explorations; `replicas/1-lava.html` is the source of this design        |
