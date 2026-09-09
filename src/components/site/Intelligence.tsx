import { useState } from "react";
import { motion } from "motion/react";
import { Section, Statement } from "./primitives";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: "system",
    label: "Enterprise system",
    note: "Existing applications, data and business rules — already in production.",
  },
  {
    id: "mcp",
    label: "MCP layer",
    note: "Model Context Protocol exposes those systems as tools an assistant can reason over.",
  },
  {
    id: "rag",
    label: "RAG retrieval",
    note: "Business documents and records retrieved as grounded context, not guesses.",
  },
  {
    id: "assistant",
    label: "AI assistant",
    note: "Automates business processes inside the architecture instead of beside it.",
  },
];

export function Intelligence() {
  const [active, setActive] = useState(1);

  return (
    <Section id="intelligence" act="VI" eyebrow="Intelligence — MCP · RAG · AI assistants">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <Statement>
            Now
            <br />
            <span className="text-brass">intelligent.</span>
          </Statement>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            The newest layer of the same architecture: AI assistants wired into enterprise systems
            through MCP and RAG, automating business processes with real company context.
          </p>
          <p className="mt-6 max-w-md text-[13.5px] leading-relaxed text-muted-foreground">
            {steps[active]!.note}
          </p>
        </div>

        <div className="relative border border-border bg-card/25 p-6 md:p-10">
          <div className="blueprint-fine pointer-events-none absolute inset-0 opacity-[0.22]" />
          <div className="relative grid gap-3 sm:grid-cols-4">
            {steps.map((s, i) => {
              const on = active === i;
              return (
                <button
                  key={s.id}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={on}
                  className={cn(
                    "relative border p-4 text-left transition-colors",
                    on ? "border-brass bg-background" : "border-border hover:border-steel/60",
                  )}
                >
                  <span className="font-mono text-[10px] text-brass/80">0{i + 1}</span>
                  <span
                    className={cn(
                      "mt-3 block font-display text-[13px] font-bold uppercase leading-tight tracking-tight",
                      on ? "text-concrete" : "text-muted-foreground",
                    )}
                  >
                    {s.label}
                  </span>
                </button>
              );
            })}
          </div>

          <svg viewBox="0 0 400 40" className="relative mt-8 w-full" aria-hidden>
            <line x1="8" x2="392" y1="20" y2="20" stroke="var(--border)" strokeWidth="1" />
            {steps.map((_, i) => (
              <circle
                key={i}
                cx={8 + i * ((392 - 8) / (steps.length - 1))}
                cy="20"
                r={active === i ? 5 : 3}
                fill={active === i ? "var(--brass)" : "var(--steel)"}
              />
            ))}
            <motion.circle
              cy="20"
              r="2"
              fill="var(--signal)"
              animate={{ cx: [8, 392] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </div>
    </Section>
  );
}
