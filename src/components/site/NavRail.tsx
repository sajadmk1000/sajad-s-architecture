import { useEffect, useState } from "react";
import { acts, profile } from "@/content/sajad";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "system", label: "Work" },
  { id: "engine", label: "Architecture" },
  { id: "intelligence", label: "AI" },
  { id: "engineer", label: "About" },
  { id: "contact", label: "Contact" },
];

export function NavRail() {
  const [active, setActive] = useState(acts[0].id);
  const [condensed, setCondensed] = useState(false);

  useEffect(() => {
    const ids = acts.map((a) => a.id);
    const onScroll = () => {
      setCondensed(window.scrollY > 120);
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          condensed
            ? "border-b border-border bg-background/88 backdrop-blur-md"
            : "border-b border-transparent",
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-6 py-4 md:px-12"
        >
          <a href="#architect" className="group flex items-baseline gap-3">
            <span className="font-display text-sm font-bold tracking-[0.24em] text-concrete uppercase">
              {profile.name}
            </span>
            <span className="tech-label hidden text-[10px] sm:inline">/ architecture</span>
          </a>
          <ul className="flex items-center gap-5 md:gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={cn(
                    "tech-label text-[10px] transition-colors hover:text-concrete md:text-[11px]",
                    active === item.id && "text-brass",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Architectural position indicator */}
      <div
        aria-hidden
        className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex"
      >
        {acts.map((a) => {
          const on = active === a.id;
          return (
            <a
              key={a.id}
              href={`#${a.id}`}
              className="group flex items-center gap-3"
              tabIndex={-1}
            >
              <span
                className={cn(
                  "h-px transition-all duration-500",
                  on ? "w-8 bg-brass" : "w-3 bg-border group-hover:w-5",
                )}
              />
              <span
                className={cn(
                  "font-mono text-[10px] tracking-[0.2em] transition-opacity duration-500",
                  on ? "text-brass opacity-100" : "text-muted-foreground opacity-0 group-hover:opacity-100",
                )}
              >
                {a.index} · {a.label.toUpperCase()}
              </span>
            </a>
          );
        })}
      </div>
    </>
  );
}
