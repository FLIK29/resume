import { type FormEvent, useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import social from "../../data/social.json";

const CONTACT_LINKS = [
  { icon: Mail, label: social.email, href: `mailto:${social.email}` },
  { icon: Github, label: "GitHub", href: social.github },
  { icon: Linkedin, label: "LinkedIn", href: social.linkedin },
  { icon: MapPin, label: social.location, href: undefined },
];

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialForm: FormState = { name: "", email: "", message: "" };

function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Contacto desde el portafolio — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${social.email}?subject=${subject}&body=${body}`;

    setForm(initialForm);
  };

  return (
    <section id="contacto" className="py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Contacto"
              title="Hablemos"
              description="¿Tienes una oportunidad, un proyecto o simplemente quieres saludar? Con gusto te leo."
            />

            <Reveal delay={0.1} className="mt-8 space-y-4">
              {CONTACT_LINKS.map(({ icon: Icon, label, href }) => {
                const content = (
                  <>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/[0.04]">
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
          </div>

          <Reveal delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-ink">
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                    className="mt-2 w-full rounded-xl border border-ink/10 bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-ink-faint focus:border-accent"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-ink">
                    Correo
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    className="mt-2 w-full rounded-xl border border-ink/10 bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-ink-faint focus:border-accent"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-ink">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                  className="mt-2 w-full resize-none rounded-xl border border-ink/10 bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-ink-faint focus:border-accent"
                  placeholder="Cuéntame en qué estás pensando…"
                />
              </div>

              <div className="flex items-center gap-4">
                <Button type="submit" icon={<Send size={16} />}>
                  Enviar mensaje
                </Button>
                <span className="text-xs text-ink-faint">
                  Se abrirá tu cliente de correo predeterminado.
                </span>
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
