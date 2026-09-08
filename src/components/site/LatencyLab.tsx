import { useState } from "react";
import { motion } from "motion/react";
import { Section, Statement, Reveal } from "./primitives";
import { cn } from "@/lib/utils";

type Mode = "direct" | "cached";

const routes: Record<Mode, { stops: string[]; dur: number; note: string }> = {
  direct: {
    stops: ["REQUEST", "API", "DATABASE"],
    dur: 3.4,
    note: "Every read travels to the database. Latency compounds under enterprise load.",
  },
  cached: {
    stops: ["REQUEST", "REDIS CACHE", "API", "DATABASE"],
    dur: 2.1,
    note: "Hot reads resolve at the cache. Measured 30–40% reduction in API latency.",
  },
};

export function LatencyLab() {
  const [mode, setMode] = useState<Mode>("direct");
  const route = routes[mode];

  return (
    <Section id="performance" act="IV" eyebrow="Performance — Redis caching">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <Statement>
            30–40%
            <br />
            <span className="text-muted-foreground">less waiting.</span>
          </Statement>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            API latency reduced by 30–40% by introducing Redis caching into the framework's read
            path — a change made once, inherited by every application on top of it.
          </p>

          <div className="mt-10 inline-flex border border-border" role="group" aria-label="Request path">
            {(["direct", "cached"] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                aria-pressed={mode === m}
                className={cn(
                  "px-5 py-2.5 font-mono text-[10px] tracking-[0.2em] uppercase transition-colors",
                  mode === m ? "bg-brass text-accent-foreground" : "text-muted-foreground hover:text-concrete",
                )}
              >
                {m === "direct" ? "Without cache" : "With Redis"}
              </button>
            ))}
          </div>
          <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-muted-foreground">{route.note}</p>
        </div>

        <Reveal>
          <div className="relative border border-border bg-card/30 p-6 md:p-10">
            <div className="blueprint-fine pointer-events-none absolute inset-0 opacity-[0.25]" />
            <div className="relative space-y-0">
              {route.stops.map((s, i) => (
                <div key={s} className="relative flex items-center gap-5 py-5">
                  <span
                    className={cn(
                      "h-2.5 w-2.5 shrink-0 rotate-45 border",
                      s.includes("REDIS") ? "border-brass bg-brass" : "border-steel",
                    )}
                  />
                  <span
                    className={cn(
                      "font-display text-[clamp(1.1rem,2.6vw,1.9rem)] font-bold uppercase tracking-tight",
                      s.includes("REDIS") ? "text-brass" : "text-concrete",
                    )}
                  >
                    {s}
                  </span>
                  {i < route.stops.length - 1 && (
                    <span className="absolute left-[4.5px] top-[42px] h-[calc(100%-18px)] w-px bg-border" />
                  )}
                </div>
              ))}
              <motion.div
                key={mode}
                className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-brass"
                animate={{ y: [0, (route.stops.length - 1) * 66] }}
                transition={{ duration: route.dur, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
              <span className="tech-label text-[10px]">Round trip</span>
              <span className="font-mono text-[11px] text-brass">
                {mode === "cached" ? "−30–40% latency" : "baseline"}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
