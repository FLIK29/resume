import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, UserRound } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import profile from "../../data/profile.json";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-grid bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
      />

      <Container className="relative">
        <motion.div
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
          variants={shouldReduceMotion ? undefined : container}
          initial={shouldReduceMotion ? undefined : "hidden"}
          animate={shouldReduceMotion ? undefined : "show"}
        >
          <motion.div variants={item} className="mb-8">
            {photoFailed ? (
              <div className="flex h-32 w-32 items-center justify-center rounded-full border border-ink/10 bg-ink/[0.03] sm:h-36 sm:w-36">
                <UserRound size={44} className="text-ink-faint" strokeWidth={1.5} />
              </div>
            ) : (
              <img
                src={profile.photo}
                alt={profile.name}
                onError={() => setPhotoFailed(true)}
                className="h-32 w-32 rounded-full border border-ink/10 object-cover shadow-card sm:h-36 sm:w-36"
              />
            )}
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p variants={item} className="mt-4 text-lg font-medium text-ink-soft sm:text-xl">
            {profile.role}
          </motion.p>

          <motion.p variants={item} className="mt-4 max-w-lg text-base leading-relaxed text-ink-faint">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={profile.cvUrl} download icon={<Download size={16} />}>
              Descargar CV
            </Button>
            <Button href="#contacto" variant="secondary">
              Contactarme
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      <motion.a
        href="#sobre-mi"
        aria-label="Desplazarse a la siguiente sección"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-faint transition-colors duration-200 hover:text-ink"
        animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}

export default Hero;
