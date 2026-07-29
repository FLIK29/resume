import { BookOpen } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import subjects from "../../data/subjects.json";

function Subjects() {
  return (
    <section id="asignaturas" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Plan de estudios"
          title="Asignaturas relevantes"
          description="Una selección de las materias más alineadas con el desarrollo de software profesional."
        />

        <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject, index) => (
            <Reveal key={subject.name} delay={Math.min(index * 0.04, 0.4)}>
              <li className="flex items-center gap-3 rounded-xl border border-ink/[0.07] bg-white px-4 py-3.5 transition-colors duration-200 hover:border-ink/15">
                <BookOpen size={16} className="shrink-0 text-accent" strokeWidth={1.75} />
                <span className="text-sm font-medium text-ink-soft">{subject.name}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Subjects;
