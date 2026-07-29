import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-content px-6 sm:px-8", className)}>
      {children}
    </div>
  );
}

export default Container;
