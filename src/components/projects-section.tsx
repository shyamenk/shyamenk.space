import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projectsSection } from "@/content/site";
import { getProjects } from "@/lib/content";

export function ProjectsSection() {
  const featured = getProjects()
    .filter((p) => p.featured)
    .slice(0, 3);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 pt-32 sm:px-6">
      <SectionHeading title={projectsSection.title} intro={projectsSection.intro} cta={projectsSection.cta} />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
