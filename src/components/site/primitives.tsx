import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}

    </motion.div>
  );
}

export function Section({
  id,
  act,
  eyebrow,
  children,
  className,
}: {
  id: string;
  act?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative scroll-mt-24 px-6 py-24 md:px-12 md:py-36", className)}>
      <div className="mx-auto w-full max-w-[1240px]">
        {(act || eyebrow) && (
          <div className="mb-12 flex items-baseline gap-4 border-b border-border pb-4">
            {act && <span className="tech-label text-brass">Act {act}</span>}
            {eyebrow && <span className="tech-label">{eyebrow}</span>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function Annotation({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("tech-label leading-relaxed", className)}>{children}</p>;
}

export function Statement({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={cn("display-xl text-[clamp(2.1rem,5.6vw,4.6rem)] text-concrete", className)}>
      {children}
    </h2>
  );
}
