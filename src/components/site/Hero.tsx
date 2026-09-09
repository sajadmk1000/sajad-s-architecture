import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";
import portrait from "@/assets/sajad-portrait.png.asset.json";

const layers = [
  { y: 26, label: "FRAMEWORK" },
  { y: 62, label: "SERVICES" },
  { y: 98, label: "API" },
  { y: 134, label: "DATA" },
  { y: 170, label: "AUTH" },
  { y: 206, label: "APPLICATIONS" },
];

function ArchitectureBackdrop() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const tx = useTransform(sx, [-1, 1], [18, -18]);
  const ty = useTransform(sy, [-1, 1], [12, -12]);
  const tx2 = useTransform(sx, [-1, 1], [-30, 30]);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="blueprint absolute inset-0 opacity-[0.5]" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_70%_10%,transparent,oklch(0.12_0.005_60)_70%)]" />
      <motion.svg
        viewBox="0 0 600 260"
        style={{ x: tx, y: ty }}
        className="absolute right-[-6%] top-1/2 h-[78%] w-[76%] -translate-y-1/2 opacity-[0.55]"
      >
        {layers.map((l, i) => (
          <g key={l.label}>
            <line
              x1="40"
              x2="560"
              y1={l.y}
              y2={l.y}
              stroke="var(--border)"
              strokeWidth="0.8"
              strokeDasharray={i % 2 ? "3 6" : undefined}
            />
            <text
              x="40"
              y={l.y - 6}
              fill="var(--muted-foreground)"
              fontSize="6"
              fontFamily="var(--font-mono)"
              letterSpacing="2"
            >
              {l.label}
            </text>
          </g>
        ))}
        {layers.slice(0, -1).map((l, i) => (
          <motion.line
            key={i}
            x1={120 + i * 70}
            x2={120 + i * 70}
            y1={l.y}
            y2={layers[i + 1]!.y}
            stroke="var(--brass)"
            strokeWidth="0.9"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.85 }}
            transition={{ duration: 1.1, delay: 0.6 + i * 0.18, ease: "easeOut" }}
          />
        ))}
        {Array.from({ length: 21 }).map((_, i) => (
          <motion.rect
            key={i}
            x={60 + (i % 11) * 46}
            y={222 + Math.floor(i / 11) * 14}
            width="30"
            height="7"
            fill="none"
            stroke="var(--steel)"
            strokeWidth="0.7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ duration: 0.5, delay: 1.5 + i * 0.045 }}
          />
        ))}
      </motion.svg>
      <motion.div
        style={{ x: tx2 }}
        className="absolute bottom-10 left-1/2 h-[1px] w-[60%] bg-gradient-to-r from-transparent via-brass/40 to-transparent"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="architect"
      className="relative flex min-h-dvh scroll-mt-24 items-center overflow-hidden px-6 pt-28 pb-16 md:px-12"
    >
      <ArchitectureBackdrop />
      <div className="relative mx-auto grid w-full max-w-[1240px] gap-14 md:grid-cols-[1.15fr_0.85fr] md:items-end">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-l border-brass/70 pl-4"
          >
            <span className="tech-label text-brass">Act I — The Architect</span>
            <span className="tech-label text-[10px]">SYS.STATUS · OPERATIONAL</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="display-xl text-[clamp(2.6rem,8.2vw,6.6rem)] text-concrete"
          >
            I build the system
            <br />
            <span className="text-brass">behind the systems.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="mt-8 max-w-xl text-[15px] leading-relaxed text-muted-foreground"
          >
            <span className="text-concrete">Sajad MK</span> — backend engineer and application
            architect. Owner and architect of an internal multi-database framework powering{" "}
            <span className="text-concrete">20+ enterprise applications</span>. Four years of
            .NET / ASP.NET Core / Blazor engineering, now extending enterprise architecture into
            AI through MCP and RAG.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <a
              href="#system"
              className="group inline-flex items-center gap-3 border border-brass/60 px-6 py-3 text-[11px] font-mono tracking-[0.22em] text-brass uppercase transition-colors hover:bg-brass hover:text-accent-foreground"
            >
              Enter the architecture
              <span className="transition-transform group-hover:translate-x-1">↓</span>
            </a>
            <a
              href="#contact"
              className="tech-label border-b border-border pb-1 transition-colors hover:border-brass hover:text-concrete"
            >
              View credentials
            </a>
          </motion.div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
            {[
              ["20+", "Applications on one framework"],
              ["30,000+", "Residents served"],
              ["30–40%", "API latency reduced"],
            ].map(([v, k]) => (
              <div key={v}>
                <dt className="font-display text-xl font-bold text-concrete">{v}</dt>
                <dd className="tech-label mt-1 text-[9px] leading-relaxed">{k}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Portrait as an object in the system */}
        <motion.figure
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-3 border border-border" />
          <div className="absolute -inset-3 border-l-2 border-brass/70" />
          <div className="relative overflow-hidden bg-graphite etched">
            <img
              src={portrait.url}
              alt="Portrait of Sajad MK, backend engineer and application architect"
              width={1129}
              height={1412}
              className="duotone-portrait w-full object-cover mix-blend-luminosity"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="blueprint-fine pointer-events-none absolute inset-0 opacity-[0.18]" />
          </div>
          <figcaption className="mt-4 flex items-baseline justify-between">
            <span className="tech-label text-[10px]">SUBJECT / SAJAD MK</span>
            <span className="tech-label text-[10px]">CALICUT · IN → UAE</span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
