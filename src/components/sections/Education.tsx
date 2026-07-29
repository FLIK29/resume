import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import education from "../../data/education.json";

const progress = Math.round((education.completedSubjects / education.totalSubjects) * 100);

const DETAILS: Array<{ label: string; value: string }> = [
  { label: "Institución", value: education.institution },
  { label: "Programa", value: education.degree },
  { label: "Periodo actual", value: education.term },
  { label: "Modalidad", value: education.modality },
];

function Education() {
  return (
    <section id="educacion" className="bg-ink/[0.02] py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Educación"
          title="Formación académica"
          align="center"
        />

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-2xl">
          <div className="rounded-3xl border border-ink/[0.07] bg-white p-8 shadow-card sm:p-10">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft">
                <GraduationCap size={22} className="text-accent" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-base font-semibold text-ink">{education.institution}</p>
                <p className="text-sm text-ink-faint">{education.degree}</p>
              </div>
            </div>

            <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {DETAILS.map(({ label, value }) => (
                <div key={label}>
                  <dt className="text-xs font-medium uppercase tracking-wide text-ink-faint">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-ink">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-medium uppercase tracking-wide text-ink-faint">
                  Progreso académico
                </span>
                <span className="text-sm font-semibold text-ink">{progress}%</span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-ink/[0.06]">
                <motion.div
                  className="h-full rounded-full bg-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <p className="mt-2 text-sm text-ink-faint">
                {education.completedSubjects} de {education.totalSubjects} asignaturas acreditadas
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default Education;
