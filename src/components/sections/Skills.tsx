import type { LucideIcon } from "lucide-react";
import { Braces, Layout, Server, Wrench } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import skills from "../../data/skills.json";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  Lenguajes: Braces,
  Frontend: Layout,
  "Backend & Datos": Server,
  Herramientas: Wrench,
};

function Skills() {
  return (
    <section id="tecnologias" className="bg-ink/[0.02] py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Stack"
          title="Tecnologías"
          description="Herramientas y lenguajes con los que construyo, organizados por área."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skills.map((group, index) => {
            const Icon = CATEGORY_ICONS[group.category] ?? Wrench;
            return (
              <Reveal key={group.category} delay={index * 0.06}>
                <div className="rounded-2xl border border-ink/[0.07] bg-white p-6">
                  <div className="flex items-center gap-2.5">
                    <Icon size={17} className="text-accent" strokeWidth={1.75} />
                    <h3 className="text-sm font-semibold text-ink">{group.category}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-ink/[0.08] bg-ink/[0.02] px-3.5 py-1.5 text-sm font-medium text-ink-soft"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Skills;
