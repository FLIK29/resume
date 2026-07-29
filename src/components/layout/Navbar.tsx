import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import profile from "../../data/profile.json";
import { cn } from "../../lib/utils";

const NAV_ITEMS = [
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "educacion", label: "Educación" },
  { id: "tecnologias", label: "Tecnologías" },
  { id: "proyectos", label: "Proyectos" },
  { id: "experiencia", label: "Experiencia" },
  { id: "contacto", label: "Contacto" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-smooth",
        isScrolled
          ? "border-b border-ink/[0.06] bg-white/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Navegación principal">
          <a
            href="#"
            className="text-base font-semibold tracking-tight text-ink"
            onClick={() => setIsMenuOpen(false)}
          >
            {profile.shortName}
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                    activeId === item.id ? "text-ink" : "text-ink-faint hover:text-ink",
                  )}
                >
                  {item.label}
                  {activeId === item.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-px h-px bg-ink"
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button href={profile.cvUrl} download variant="secondary" size="sm">
              Descargar CV
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 text-ink md:hidden"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-ink/[0.06] bg-white/95 backdrop-blur-md md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-ink/5 hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
              <Button
                href={profile.cvUrl}
                download
                variant="secondary"
                size="sm"
                className="mt-2 w-full"
              >
                Descargar CV
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
