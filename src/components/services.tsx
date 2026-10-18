import { SectionHeading } from "@/components/section-heading";
import { ServiceList } from "@/components/service-list";
import { services } from "@/content/site";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 pt-28 sm:px-6">
      <SectionHeading title={services.title} intro={services.intro} />
      <ServiceList />
    </section>
  );
}
