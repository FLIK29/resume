import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import Container from "../ui/Container";
import profile from "../../data/profile.json";
import social from "../../data/social.json";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="border-t border-ink/[0.06]">
      <Container className="flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <p className="text-sm text-ink-faint">
          © {year} {profile.name}. Todos los derechos reservados.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-ink-faint transition-colors duration-200 hover:text-ink"
          >
            <Github size={18} />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-ink-faint transition-colors duration-200 hover:text-ink"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${social.email}`}
            aria-label="Correo"
            className="text-ink-faint transition-colors duration-200 hover:text-ink"
          >
            <Mail size={18} />
          </a>

          <a
            href="#"
            aria-label="Volver arriba"
            className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-ink/10 text-ink-faint transition-colors duration-200 hover:border-ink/30 hover:text-ink"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
