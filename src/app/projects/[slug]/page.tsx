import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HeaderActions, PageHeader } from "@/components/page-header";
import { getProject, getProjects } from "@/lib/content";

// Unknown slugs must render fully before responding; otherwise the fallback shell ships a 200 before notFound() runs.
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjects().find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: { title: project.title, description: project.description, images: [project.image] },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  const { meta, html } = project;
  const links = [
    meta.githubUrl && { label: "View code", href: meta.githubUrl },
    meta.liveUrl && { label: "Visit live site", href: meta.liveUrl },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <main>
      <PageHeader
        back={{ label: "All projects", href: "/projects" }}
        eyebrow={meta.date.slice(0, 4)}
        title={meta.title}
        intro={meta.description}
        long
      />
      {links.length > 0 && (
        <HeaderActions label="Project links">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={
                i === 0
                  ? "ember-btn rounded-full bg-void px-6 py-2.5 text-sm"
                  : "chip rounded-full border border-white/20 bg-void/60 px-6 py-2.5 text-sm"
              }
            >
              {link.label} ↗
            </a>
          ))}
        </HeaderActions>
      )}

      <div className="mx-auto grid max-w-6xl gap-12 px-4 pt-12 sm:px-6 lg:grid-cols-[1fr_260px]">
        <article className="min-w-0">
          <Image
            src={meta.image}
            alt={`${meta.title} screenshot`}
            width={1600}
            height={1000}
            loading="eager"
            sizes="(min-width: 1024px) 800px, 100vw"
            className="reveal w-full rounded-2xl border border-white/10"
          />
          {/* Trusted, build-time HTML rendered from this repo's own Markdown files. */}
          <div className="prose prose-lg prose-lava mt-12 max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
        </article>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="reveal rounded-2xl border border-white/10 bg-void p-6">
            <h2 className="font-bebas text-2xl tracking-wide text-crimson">Built with</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {meta.technologies.map((tech) => (
                <li key={tech} className="chip rounded-full border border-white/10 px-3 py-1 text-xs text-bone/75">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <Link href="/projects" className="reveal card mt-4 block rounded-2xl border border-white/10 bg-void p-6 text-sm hover:text-lava">
            ← More projects
          </Link>
        </aside>
      </div>
    </main>
  );
}
