import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import projects from "../../data/projects.json";
import type { Project } from "../../types/content";

const typedProjects = projects as Project[];

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/[0.07] bg-white shadow-subtle transition-shadow duration-300 hover:shadow-card"
    >
      <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-accent-soft to-ink/[0.03]">
        {project.image ? (
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
        ) : (
          <Sparkles size={28} className="text-accent-dim" strokeWidth={1.5} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-base font-semibold text-ink">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-faint">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-ink/[0.04] px-2.5 py-1 text-xs font-medium text-ink-soft"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 border-t border-ink/[0.06] pt-4">
          <ProjectLink href={project.githubUrl} icon={Github} label="Código" />
          <ProjectLink href={project.demoUrl} icon={ExternalLink} label="Demo" />
        </div>
      </div>
    </motion.div>
  );
}

function ProjectLink({
  href,
  icon: Icon,
  label,
}: {
  href: string | null;
  icon: typeof Github;
  label: string;
}) {
  if (!href) {
    return (
      <span
        aria-disabled
        title="Disponible próximamente"
        className="inline-flex cursor-not-allowed items-center gap-1.5 text-sm font-medium text-ink-faint/50"
      >
        <Icon size={15} />
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-accent"
    >
      <Icon size={15} />
      {label}
    </a>
  );
}

function Projects() {
  return (
    <section id="proyectos" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Trabajo"
          title="Proyectos"
          description="Espacio reservado para mis próximos proyectos. Cada tarjeta se completará con capturas, stack y enlaces reales."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {typedProjects.map((project, index) => (
            <Reveal key={project.id} delay={Math.min(index * 0.06, 0.3)}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
