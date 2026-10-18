import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Cloud, backend and full-stack projects, each with a case study.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main>
      <PageHeader
        eyebrow={`${projects.length} projects`}
        title="Projects"
        intro="From serverless pipelines and Slack tooling to healthcare platforms. Each one links to a write-up of the problem, the build and the trade-offs."
      />
      <section className="mx-auto mt-12 grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </section>
    </main>
  );
}
