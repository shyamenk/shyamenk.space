# shyamenk.space

Personal site of Shyam Kumar V M, Cloud & Backend Engineer. Next.js 16 (App Router), Tailwind CSS v4, fully static.

## Develop

```sh
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

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
