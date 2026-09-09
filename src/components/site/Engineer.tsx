import { motion } from "motion/react";
import desk from "@/assets/sajad-desk.png.asset.json";
import { profile, trajectory, education, skillGroups } from "@/content/sajad";
import { Section, Statement, Reveal } from "./primitives";

export function Engineer() {
  return (
    <Section id="engineer" act="VII" eyebrow="The engineer — the person behind the architecture">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
        <Reveal>
          <figure className="relative">
            <div className="absolute -inset-3 border border-border" />
            <div className="relative overflow-hidden bg-graphite etched">
              <img
                src={desk.url}
                alt="Sajad MK working at his desk"
                width={1280}
                height={853}
                loading="lazy"
                className="duotone-portrait w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
            </div>
            <figcaption className="tech-label mt-4 text-[10px]">
              {profile.location} · {profile.relocation}
            </figcaption>
          </figure>
        </Reveal>

        <div>
          <Statement>
            Mechanical
            <br />
            <span className="text-muted-foreground">to architectural.</span>
          </Statement>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            A mechanical engineering graduate who moved into software and kept the same instinct:
            understand the whole machine before touching a part. Four years later that instinct
            became an application framework other engineers build on.
          </p>

          <ol className="mt-12 space-y-10 border-l border-border pl-8">
            {trajectory.map((t, i) => (
              <motion.li
                key={t.period}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-[2.15rem] top-2 h-1.5 w-1.5 rotate-45 bg-brass" />
                <p className="tech-label text-[10px]">{t.period}</p>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-concrete">
                  {t.title}
                </h3>
                <p className="mt-1 text-[13px] text-brass">{t.org}</p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">{t.note}</p>
              </motion.li>
            ))}
          </ol>

          <div className="mt-12 border-t border-border pt-6">
            <p className="tech-label text-[10px]">Education</p>
            <p className="mt-3 font-display text-base font-bold uppercase tracking-tight text-concrete">
              {education.degree}
            </p>
            <p className="mt-1 text-[13.5px] text-muted-foreground">
              {education.school} · {education.period} · {education.grade}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-24 border-t border-border pt-12">
        <p className="tech-label mb-8">Capability map</p>
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.id} className="bg-background p-6">
              <h3 className="font-display text-[13px] font-bold uppercase tracking-tight text-brass">
                {g.label}
              </h3>
              <ul className="mt-4 space-y-2">
                {g.items.map((it) => (
                  <li key={it} className="text-[13px] leading-relaxed text-muted-foreground">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
