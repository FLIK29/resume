import { Github, Mail, MapPin } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import social from "../../data/social.json";

const CONTACT_LINKS = [
  { icon: Mail, label: social.email, href: `mailto:${social.email}` },
  { icon: Github, label: "GitHub", href: social.github },
  { icon: MapPin, label: social.location, href: undefined },
];

function Contact() {
  return (
    <section id="contacto" className="py-24 sm:py-32">
      <Container>
        <Reveal className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Contacto
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 flex max-w-md flex-col gap-4">
          {CONTACT_LINKS.map(({ icon: Icon, label, href }) => {
            const content = (
              <>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink/[0.04]">
                  <Icon size={16} className="text-ink-soft" strokeWidth={1.75} />
                </span>
                <span className="text-sm font-medium text-ink-soft">{label}</span>
              </>
            );

            return href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 transition-colors duration-200 hover:text-accent [&:hover_span]:text-accent"
              >
                {content}
              </a>
            ) : (
              <div key={label} className="flex items-center gap-3">
                {content}
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}

export default Contact;
