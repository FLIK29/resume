import { Code2, GraduationCap, Laptop, Target } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import profile from "../../data/profile.json";

const FACTS = [
  { icon: GraduationCap, label: "Formación", value: "CESUN Universidad" },
  { icon: Laptop, label: "Modalidad", value: "100% en línea" },
  { icon: Code2, label: "Enfoque", value: "Desarrollo web" },
  { icon: Target, label: "Objetivo", value: "Primer empleo dev" },
];

function About() {
  return (
    <section id="sobre-mi" className="py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading eyebrow="Sobre mí" title="Quién soy y qué busco" />

            <div className="mt-8 space-y-5">
              {profile.about.map((paragraph, index) => (
                <Reveal key={paragraph.slice(0, 24)} delay={index * 0.05}>
                  <p className="text-base leading-relaxed text-ink-soft">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1} scale>
            <dl className="grid grid-cols-2 gap-4">
              {FACTS.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-ink/[0.07] bg-white p-5 shadow-subtle"
                >
                  <Icon size={18} className="text-accent" strokeWidth={1.75} />
                  <dt className="mt-3 text-xs font-medium uppercase tracking-wide text-ink-faint">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default About;
