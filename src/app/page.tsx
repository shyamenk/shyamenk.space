import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { Services } from "@/components/services";
import { Skills } from "@/components/skills";
import { Testimonials } from "@/components/testimonials";
import { Timeline } from "@/components/timeline";
import { WritingSection } from "@/components/writing-section";

// Reorder sections here. Follows the common portfolio flow: who, what, proof, how, trust, writing, contact.
const sections = [Services, ProjectsSection, Timeline, Skills, Testimonials, WritingSection, Faq];

export default function Home() {
  return (
    <main id="top">
      <Hero />
      {sections.map((Section, i) => (
        <Section key={i} />
      ))}
    </main>
  );
}
