import { useState } from "react";
import { motion } from "motion/react";
import { applicationNodes } from "@/content/sajad";
import { Section, Statement, Reveal } from "./primitives";

const CX = 300;
const CY = 300;
const R = 215;

const chain = ["Framework", "Service Layer", "API", "Database", "Authentication", "Application", "Users"];

export function SystemMap() {
  const [active, setActive] = useState<number | null>(null);

  const nodes = applicationNodes.map((n, i) => {
    const a = (i / applicationNodes.length) * Math.PI * 2 - Math.PI / 2;
    return { ...n, x: CX + Math.cos(a) * R, y: CY + Math.sin(a) * R };
  });

  return (
    <Section id="system" act="II" eyebrow="The System — one architecture, many applications">
      <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <Reveal>
          <div className="relative">
            <svg viewBox="0 0 600 600" className="w-full" role="img" aria-label="Architecture map: one core framework connected to 21 enterprise application nodes">
              <circle cx={CX} cy={CY} r={R} fill="none" stroke="var(--border)" strokeWidth="0.7" />
              <circle cx={CX} cy={CY} r={R * 0.62} fill="none" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="2 8" />
              {nodes.map((n, i) => (
                <line
                  key={`l-${n.id}`}
                  x1={CX}
                  y1={CY}
                  x2={n.x}
                  y2={n.y}
                  stroke={active === i ? "var(--brass)" : "var(--border)"}
                  strokeWidth={active === i ? 1.4 : 0.6}
                  opacity={active === null || active === i ? 1 : 0.3}
                />
              ))}
              {/* core */}
              <rect x={CX - 62} y={CY - 34} width="124" height="68" fill="var(--card)" stroke="var(--brass)" strokeWidth="1" />
              <text x={CX} y={CY - 8} textAnchor="middle" fill="var(--concrete)" fontFamily="var(--font-display)" fontSize="15" letterSpacing="1">
                FRAMEWORK
              </text>
              <text x={CX} y={CY + 12} textAnchor="middle" fill="var(--muted-foreground)" fontFamily="var(--font-mono)" fontSize="8" letterSpacing="2">
                ASP.NET CORE
              </text>
              <text x={CX} y={CY + 26} textAnchor="middle" fill="var(--muted-foreground)" fontFamily="var(--font-mono)" fontSize="7" letterSpacing="2">
                MULTI-DATABASE
              </text>

              {nodes.map((n, i) => (
                <g
                  key={n.id}
                  tabIndex={0}
                  role="button"
                  aria-label={`${n.id} — ${n.layer} domain`}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  className="cursor-pointer outline-none"
                >
                  <motion.rect
                    x={n.x - 15}
                    y={n.y - 10}
                    width="30"
                    height="20"
                    fill={active === i ? "var(--brass)" : "var(--background)"}
                    stroke={active === i ? "var(--brass)" : "var(--steel)"}
                    strokeWidth="0.8"
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.03 }}
                  />
                  <text
                    x={n.x}
                    y={n.y + 3}
                    textAnchor="middle"
                    fontSize="7"
                    fontFamily="var(--font-mono)"
                    fill={active === i ? "var(--accent-foreground)" : "var(--muted-foreground)"}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </Reveal>

        <div>
          <Statement>
            20+ systems.
            <br />
            One architecture.
          </Statement>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Each node is an independent enterprise application. None of them carry their own
            foundation — they inherit it. Service layers, REST endpoints, data access and identity
            all resolve back to a single framework Sajad designed and owns.
          </p>

          <div className="mt-10 border border-border bg-card/40">
            <div className="border-b border-border px-5 py-3">
              <span className="tech-label text-[10px]">
                {active === null ? "Hover a node — trace the path" : `${applicationNodes[active].id} · ${applicationNodes[active].layer}`}
              </span>
            </div>
            <ol className="divide-y divide-border">
              {chain.map((step, i) => (
                <li key={step} className="flex items-center gap-4 px-5 py-2.5">
                  <span className="font-mono text-[10px] text-brass/80">{String(i + 1).padStart(2, "0")}</span>
                  <span
                    className={
                      active === null
                        ? "text-[13px] text-muted-foreground"
                        : "text-[13px] text-concrete transition-colors"
                    }
                  >
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Section>
  );
}
