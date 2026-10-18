import Image from "next/image";
import Link from "next/link";
import type { ProjectMeta } from "@/lib/content";

export function ProjectCard({ project, index = 0 }: { project: ProjectMeta; index?: number }) {
  // Titles in the content files carry a long subtitle after an en dash or hyphen.
  const [name, subtitle] = project.title.split(/\s[–-]\s/);

  return (
    <article
      className="reveal card flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-void"
      style={{ transitionDelay: `${(index % 3) * 0.08}s` }}
    >
      <div className="overflow-hidden border-b border-white/10 bg-pit">
        <Image
          src={project.image}
          alt={`${name} screenshot`}
          width={1200}
          height={750}
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="card-img aspect-[16/10] w-full object-cover object-top"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-orb text-[10px] tracking-[0.2em] text-crimson">{project.date.slice(0, 4)}</p>
        <h3 className="mt-2 font-bebas text-3xl leading-none tracking-wide">
          <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0 hover:text-lava">
            {name}
          </Link>
        </h3>
        {subtitle && <p className="mt-1 text-sm text-bone/60">{subtitle}</p>}
        <p className="mt-3 line-clamp-3 text-sm text-bone/70">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <li key={tech} className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-bone/60">
              {tech}
            </li>
          ))}
        </ul>
        <p className="mt-auto flex items-center gap-2 pt-6 text-sm text-lava">
          Read the case study <span className="card-arrow" aria-hidden="true">↗</span>
        </p>
      </div>
    </article>
  );
}
