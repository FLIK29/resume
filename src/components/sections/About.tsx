import { Code2, GraduationCap, Laptop, Target } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import profile from "../../data/profile.json";


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

        </div>
      </Container>
    </section>
  );
}

export default About;
