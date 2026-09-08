import { motion } from "motion/react";
import { useState } from "react";
import { databases } from "@/content/sajad";
import { Section, Reveal } from "./primitives";
import { cn } from "@/lib/utils";

const paths = [
  "M60,110 H210 C250,110 250,40 300,40 H540",
  "M60,110 H210 C250,110 250,110 300,110 H540",
  "M60,110 H210 C250,110 250,180 300,180 H540",
];

export function DatabaseBranch() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <Section id="databases" eyebrow="Multi-database architecture">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <svg viewBox="0 0 560 220" className="w-full" role="img" aria-label="One data contract branching into Oracle SQL, SQL Server and PostgreSQL">
            <text x="0" y="96" fontSize="8" fontFamily="var(--font-mono)" letterSpacing="2" fill="var(--muted-foreground)">
              REQUEST
            </text>
            <rect x="150" y="92" width="70" height="36" fill="var(--card)" stroke="var(--brass)" strokeWidth="0.9" />
            <text x="185" y="114" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--concrete)" letterSpacing="1.5">
              FRAMEWORK
            </text>
            {paths.map((d, i) => (
              <g key={i}>
                <path d={d} fill="none" stroke={hover === i ? "var(--brass)" : "var(--border)"} strokeWidth={hover === i ? 1.3 : 0.7} />
                <motion.circle
                  r="2.6"
                  fill="var(--brass)"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <animateMotion dur={`${3 + i * 0.6}s`} repeatCount="indefinite" path={d} />
                </motion.circle>
              </g>
            ))}
            {databases.map((db, i) => (
              <g
                key={db.id}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                className="cursor-default"
              >
                <rect
                  x="450"
                  y={[22, 92, 162][i]}
                  width="105"
                  height="36"
                  fill={hover === i ? "var(--brass)" : "var(--background)"}
                  stroke={hover === i ? "var(--brass)" : "var(--steel)"}
                  strokeWidth="0.8"
                />
                <text
                  x="502"
                  y={[44, 114, 184][i]}
                  textAnchor="middle"
                  fontSize="8.5"
                  fontFamily="var(--font-mono)"
                  letterSpacing="1.4"
                  fill={hover === i ? "var(--accent-foreground)" : "var(--concrete)"}
                >
                  {db.label.toUpperCase()}
                </text>
              </g>
            ))}
          </svg>
        </Reveal>

        <div>
          <h3 className="display-xl text-[clamp(1.6rem,3.4vw,2.6rem)] text-concrete">
            One data contract.
            <br />
            Three engines.
          </h3>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {databases.map((db, i) => (
              <li
                key={db.id}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                className={cn(
                  "flex items-baseline justify-between gap-4 py-4 transition-colors",
                  hover === i && "bg-card/50",
                )}
              >
                <span className="font-display text-base font-bold uppercase text-concrete">{db.label}</span>
                <span className="tech-label text-[10px]">{db.tag}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[14px] leading-relaxed text-muted-foreground">
            The database abstraction inside the framework is what lets a single application model
            live across Oracle SQL, SQL Server and PostgreSQL environments without rewriting the
            application above it.
          </p>
        </div>
      </div>
    </Section>
  );
}
