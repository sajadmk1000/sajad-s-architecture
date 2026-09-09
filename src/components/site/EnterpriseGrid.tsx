import { Section, Statement, Reveal } from "./primitives";

const domains = [
  { label: "HR & Workforce", note: "Employee lifecycle, attendance, workforce operations." },
  { label: "Finance", note: "Transactional systems on Oracle SQL and SQL Server." },
  { label: "Operations", note: "Day-to-day enterprise process automation." },
  { label: "Facilities", note: "Building and asset management workflows." },
  { label: "Reporting", note: "Generated REST surfaces feeding reporting layers." },
  { label: "Communication", note: "SignalR realtime and Twilio messaging pipelines." },
];

export function EnterpriseGrid() {
  return (
    <Section id="enterprise" act="V" eyebrow="Enterprise — production ownership">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Statement>
            Production
            <br />
            <span className="text-muted-foreground">is the only proof.</span>
          </Statement>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Backend ownership across enterprise domains inside a UAE group operating in real
            estate, construction, hospitality and retail. Docker builds, GitHub Actions pipelines,
            Oracle Cloud infrastructure, xUnit coverage — the unglamorous parts that keep systems
            standing.
          </p>
          <ul className="mt-10 grid gap-3 border-t border-border pt-6">
            {["Docker", "GitHub Actions", "Oracle Cloud", "xUnit", "Swagger / OpenAPI", "RBAC"].map(
              (t) => (
                <li key={t} className="tech-label flex items-center gap-3 text-[10px]">
                  <span className="h-px w-4 bg-brass/70" />
                  {t}
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="grid gap-px bg-border sm:grid-cols-2">
          {domains.map((d, i) => (
            <Reveal key={d.label} delay={i * 0.06}>
              <article className="group h-full bg-background p-7 transition-colors hover:bg-card/60">
                <span className="font-mono text-[10px] text-brass/80">
                  D{String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-tight text-concrete">
                  {d.label}
                </h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">{d.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
