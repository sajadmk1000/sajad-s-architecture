import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Section, Reveal } from "./primitives";

const COLS = 60;
const ROWS = 26;

export function ScaleField() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.55], [1.35, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.25, 1]);

  return (
    <Section id="scale" act="III" eyebrow="Scale — community & building management platform">
      <div ref={ref} className="grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-end">
        <Reveal>
          <motion.div
            style={{ scale, opacity }}
            className="relative overflow-hidden border border-border bg-card/20 p-4"
          >
            <svg viewBox={`0 0 ${COLS * 10} ${ROWS * 10}`} className="w-full" role="img" aria-label="Dot field representing 30,000+ residents served by the platform">
              {Array.from({ length: ROWS }).map((_, r) =>
                Array.from({ length: COLS }).map((__, c) => {
                  const band = Math.floor(r / 6);
                  return (
                    <motion.rect
                      key={`${r}-${c}`}
                      x={c * 10 + 2}
                      y={r * 10 + 2}
                      width="3.4"
                      height="3.4"
                      fill={(r * COLS + c) % 137 === 0 ? "var(--brass)" : "var(--steel)"}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.18 + band * 0.16 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: Math.min(1.2, (r * 0.02 + c * 0.004)) }}
                    />
                  );
                }),
              )}
            </svg>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_120%_at_50%_120%,transparent,oklch(0.14_0.005_60)_85%)]" />
          </motion.div>
        </Reveal>

        <div>
          <p className="tech-label mb-4">Backend ownership · Top-5 UAE real estate developer</p>
          <h3 className="display-xl text-[clamp(2.2rem,6vw,4.4rem)] text-concrete">
            30,000+
            <br />
            <span className="text-brass">residents.</span>
          </h3>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Complete backend for a virtual community and building management platform serving more
            than 30,000 residents. Every square in this field is a slice of that population —
            infrastructure that has to be right the first time.
          </p>
        </div>
      </div>
    </Section>
  );
}
