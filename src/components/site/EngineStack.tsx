import { useState } from "react";
import { engineLayers } from "@/content/sajad";
import { Section, Statement, Reveal } from "./primitives";
import { cn } from "@/lib/utils";

export function EngineStack() {
  const [open, setOpen] = useState(0);

  return (
    <Section id="engine" eyebrow="The engine underneath">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Statement>The engine underneath</Statement>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Not a logo wall. A vertical section through a working system — every stratum a decision
            that had to hold for twenty applications at once.
          </p>
        </div>

        <Reveal>
          <ol className="relative border-l border-border pl-0">
            {engineLayers.map((l, i) => {
              const on = open === i;
              return (
                <li key={l.id} className="relative">
                  <button
                    onClick={() => setOpen(i)}
                    aria-expanded={on}
                    className={cn(
                      "group flex w-full items-center gap-5 border-b border-border py-5 pl-6 pr-4 text-left transition-colors",
                      on ? "bg-card/60" : "hover:bg-card/30",
                    )}
                  >
                    <span
                      className={cn(
                        "absolute left-0 top-1/2 h-px -translate-y-1/2 transition-all",
                        on ? "w-6 bg-brass" : "w-3 bg-border group-hover:w-5",
                      )}
                    />
                    <span className="font-mono text-[10px] text-brass/80">L{String(i + 1).padStart(2, "0")}</span>
                    <span
                      className={cn(
                        "font-display text-[clamp(1rem,2.2vw,1.55rem)] font-bold tracking-tight uppercase transition-colors",
                        on ? "text-concrete" : "text-muted-foreground",
                      )}
                    >
                      {l.label}
                    </span>
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-500",
                      on ? "max-h-32 opacity-100" : "max-h-0 opacity-0",
                    )}
                  >
                    <p className="border-b border-border py-4 pl-[4.75rem] pr-6 text-[13.5px] leading-relaxed text-muted-foreground">
                      {l.note}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </Section>
  );
}
