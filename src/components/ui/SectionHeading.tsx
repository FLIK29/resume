import Reveal from "./Reveal";
import { cn } from "../../lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <Reveal className={cn("max-w-2xl", isCenter && "mx-auto text-center")}>
      <span className="text-sm font-medium tracking-wide text-accent">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink-soft">{description}</p>
      ) : null}
    </Reveal>
  );
}

export default SectionHeading;
