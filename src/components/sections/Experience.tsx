import { Briefcase } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import experience from "../../data/experience.json";
import type { ExperienceItem } from "../../types/content";

const items = experience as ExperienceItem[];

function EmptyState() {
  return (
    <Reveal className="mt-12">
      <div className="mx-auto flex max-w-xl flex-col items-center rounded-2xl border border-dashed border-ink/15 px-8 py-14 text-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink/[0.04]">
          <Briefcase size={18} className="text-ink-faint" strokeWidth={1.75} />
        </div>
        <p className="mt-4 text-sm font-medium text-ink-soft">
          Aún no hay experiencia laboral registrada.
        </p>
        <p className="mt-1 text-sm text-ink-faint">
          Esta línea de tiempo se completará en cuanto tenga mi primera oportunidad profesional.
        </p>
      </div>
    </Reveal>
  );
}

function Timeline({ items: entries }: { items: ExperienceItem[] }) {
  return (
    <ol className="relative mt-12 space-y-10 border-s border-ink/[0.08] ps-8">
      {entries.map((entry, index) => (
        <Reveal key={`${entry.company}-${entry.period}`} delay={Math.min(index * 0.08, 0.32)}>
          <li className="relative">
            <span className="absolute -start-[2.31rem] mt-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-accent ring-4 ring-accent-soft" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-semibold text-ink">
                {entry.role} · {entry.company}
              </h3>
              <span className="text-xs font-medium uppercase tracking-wide text-ink-faint">
                {entry.period}
              </span>
            </div>
            {entry.location && (
              <p className="mt-0.5 text-sm text-ink-faint">{entry.location}</p>
            )}
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{entry.description}</p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}

function Experience() {
  return (
    <section id="experiencia" className="bg-ink/[0.02] py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Trayectoria"
          title="Experiencia"
          align="center"
        />

        {items.length === 0 ? <EmptyState /> : <Timeline items={items} />}
      </Container>
    </section>
  );
}

export default Experience;
