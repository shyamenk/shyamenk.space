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
      <div className="relative overflow-hidden border-b border-white/10 bg-pit">
        <Image
          src={project.image}
          alt={`${name} screenshot`}
          width={1200}
          height={750}
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="card-img aspect-[16/10] w-full object-cover object-top"
        />
        <span className="absolute right-3 top-3 rounded-full border border-white/15 bg-void/80 px-3 py-1 font-orb text-xs tracking-[0.15em] text-bone backdrop-blur-sm">
          {project.date.slice(0, 4)}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-bebas text-h4 leading-none tracking-wide">
          <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0 hover:text-lava">
            {name}
          </Link>
        </h3>
        {subtitle && <p className="mt-2 text-base font-medium text-bone/85">{subtitle}</p>}
        <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-bone/60">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <li key={tech} className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-bone/60">
              {tech}
            </li>
          ))}
        </ul>
        <p className="mt-auto flex items-center gap-2 pt-6 text-sm text-lava">
          Read the case study{" "}
          <span className="card-arrow" aria-hidden="true">
            ↗
          </span>
        </p>
      </div>
    </article>
  );
}
