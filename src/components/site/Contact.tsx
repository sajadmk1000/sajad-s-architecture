import { profile } from "@/content/sajad";
import { Section, Reveal } from "./primitives";

export function Contact() {
  return (
    <Section id="contact" act="VIII" eyebrow="Next system">
      <Reveal>
        <h2 className="display-xl text-[clamp(2.2rem,9vw,7rem)] text-concrete">
          One architecture.
          <br />
          Many systems.
          <br />
          <span className="text-brass">Now intelligent.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-10 border-t border-border pt-10 md:grid-cols-[1fr_1fr]">
        <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground">
          Open to backend engineering and application architecture roles — including relocation to
          the UAE. If you are building something that has to hold up for years, I would like to hear
          about it.
        </p>
        <ul className="space-y-5">
          {[
            { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
            { label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin },
            { label: "Website", value: profile.websiteLabel, href: profile.website },
          ].map((c) => (
            <li key={c.label} className="border-b border-border pb-4">
              <p className="tech-label text-[10px]">{c.label}</p>
              <a
                href={c.href}
                className="mt-2 inline-block font-display text-[clamp(1.05rem,2.6vw,1.6rem)] font-bold uppercase tracking-tight text-concrete transition-colors hover:text-brass"
              >
                {c.value}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <footer className="mt-20 flex flex-wrap items-baseline justify-between gap-4 border-t border-border pt-6">
        <span className="tech-label text-[10px]">
          {profile.name} · {profile.role}
        </span>
        <span className="tech-label text-[10px]">{profile.location}</span>
      </footer>
    </Section>
  );
}
