import type { ReactNode, MouseEventHandler } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "sm";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  className?: string;
  disabled?: boolean;
  /** Renders as an <a> when provided, otherwise a <button>. */
  href?: string;
  download?: boolean | string;
  target?: string;
  type?: "button" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const variantStyles: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-ink/90",
  secondary: "bg-white text-ink border border-ink/15 hover:border-ink/30",
  ghost: "bg-transparent text-ink hover:bg-ink/5",
};

const sizeStyles: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  sm: "px-4 py-2 text-sm",
};

const disabledStyles = "pointer-events-none opacity-40";

function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  className,
  disabled,
  href,
  download,
  target,
  type = "button",
  onClick,
}: ButtonProps) {
  const sharedClassName = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium",
    "transition-colors duration-300 ease-smooth",
    variantStyles[variant],
    sizeStyles[size],
    disabled && disabledStyles,
    className,
  );

  const motionProps = disabled
    ? {}
    : { whileHover: { scale: 1.02 }, whileTap: { scale: 0.97 } };

  if (href !== undefined) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={sharedClassName}
        aria-disabled={disabled}
        {...motionProps}
      >
        {icon}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={sharedClassName}
      {...motionProps}
    >
      {icon}
      {children}
    </motion.button>
  );
}

export default Button;
