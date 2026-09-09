import { createFileRoute } from "@tanstack/react-router";

import { NavRail } from "@/components/site/NavRail";
import { Hero } from "@/components/site/Hero";
import { SystemMap } from "@/components/site/SystemMap";
import { EngineStack } from "@/components/site/EngineStack";
import { DatabaseBranch } from "@/components/site/DatabaseBranch";
import { ScaleField } from "@/components/site/ScaleField";
import { LatencyLab } from "@/components/site/LatencyLab";
import { EnterpriseGrid } from "@/components/site/EnterpriseGrid";
import { Intelligence } from "@/components/site/Intelligence";
import { Engineer } from "@/components/site/Engineer";
import { Contact } from "@/components/site/Contact";

const title = "Sajad MK — Backend Engineer & Application Architect";
const description =
  "Backend engineer and application architect: an internal multi-database .NET framework powering 20+ enterprise applications, a platform for 30,000+ residents, and AI via MCP and RAG.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <NavRail />
      <Hero />
      <SystemMap />
      <EngineStack />
      <DatabaseBranch />
      <ScaleField />
      <LatencyLab />
      <EnterpriseGrid />
      <Intelligence />
      <Engineer />
      <Contact />
    </main>
  );
}
