export const profile = {
  name: "Sajad MK",
  role: "Backend Engineer · Application Architecture · AI & MCP Integrations",
  email: "sajadmk.career@gmail.com",
  linkedin: "https://linkedin.com/in/sajadmk",
  linkedinLabel: "linkedin.com/in/sajadmk",
  website: "https://sajadmk.com",
  websiteLabel: "sajadmk.com",
  location: "Calicut, Kerala, India",
  relocation: "Open to relocate — UAE",
};

export const acts = [
  { id: "architect", label: "The Architect", index: "I" },
  { id: "system", label: "The System", index: "II" },
  { id: "scale", label: "The Scale", index: "III" },
  { id: "performance", label: "Performance", index: "IV" },
  { id: "enterprise", label: "Enterprise", index: "V" },
  { id: "intelligence", label: "Intelligence", index: "VI" },
  { id: "engineer", label: "The Engineer", index: "VII" },
  { id: "contact", label: "Next System", index: "VIII" },
];

/** Abstract application domains — no invented product names. */
export const applicationNodes = Array.from({ length: 21 }, (_, i) => ({
  id: `APP-${String(i + 1).padStart(2, "0")}`,
  layer: ["Operations", "Finance", "Workforce", "Facilities", "Reporting"][i % 5],
}));

export const engineLayers = [
  {
    id: "aspnet",
    label: "ASP.NET Core",
    note: "Runtime and hosting foundation for every application built on the framework.",
  },
  {
    id: "services",
    label: "Reusable Service Layer",
    note: "Shared business primitives consumed across independent applications.",
  },
  {
    id: "di",
    label: "Dependency Injection",
    note: "Composition boundary — services resolved per application context.",
  },
  {
    id: "api",
    label: "Automatic REST API Generation",
    note: "Endpoints derived from the framework instead of hand-written per app.",
  },
  {
    id: "abstraction",
    label: "Database Abstraction",
    note: "One data contract, multiple database engines behind it.",
  },
  {
    id: "databases",
    label: "Oracle SQL · SQL Server · PostgreSQL",
    note: "Multi-database environments served by the same architecture.",
  },
  {
    id: "auth",
    label: "Authentication — JWT · OAuth 2.0",
    note: "Identity and access enforced at the framework level.",
  },
  {
    id: "apps",
    label: "20+ Enterprise Applications",
    note: "Independent products, one shared architectural spine.",
  },
];

export const databases = [
  { id: "oracle", label: "Oracle SQL", tag: "OCI / enterprise workloads" },
  { id: "mssql", label: "SQL Server", tag: "Transactional systems" },
  { id: "postgres", label: "PostgreSQL", tag: "Modern services" },
];

export const skillGroups = [
  {
    id: "architecture",
    label: "System Design & Architecture",
    items: ["Application framework design", "Reusable service layers", "Multi-database architecture", "Dependency injection"],
  },
  { id: "api", label: "API Development", items: ["Web API", "REST", "Swagger / OpenAPI", "SignalR"] },
  { id: "ai", label: "AI / MCP / RAG", items: ["MCP (Model Context Protocol)", "RAG", "AI assistants", "Business-process automation"] },
  { id: "lang", label: "Languages & Frameworks", items: ["C#", ".NET Core", "ASP.NET Core", "Blazor", "Entity Framework Core", "LINQ"] },
  { id: "db", label: "Databases", items: ["Oracle SQL", "SQL Server", "PostgreSQL"] },
  { id: "perf", label: "Performance & Messaging", items: ["Redis caching", "SignalR", "Twilio"] },
  { id: "auth", label: "Auth & Security", items: ["JWT", "OAuth 2.0", "RBAC"] },
  { id: "test", label: "Testing", items: ["xUnit", "Postman"] },
  { id: "devops", label: "DevOps & Cloud", items: ["Docker", "GitHub Actions", "Oracle Cloud"] },
  { id: "tools", label: "Tools", items: ["Git", "GitHub", "Swagger", "Postman"] },
  { id: "frontend", label: "Frontend", items: ["Blazor"] },
];

export const trajectory = [
  {
    period: "Mar 2022 — Nov 2022",
    title: "Software Development Intern",
    org: "KKM Soft (P) Ltd",
    shift: "Learning the craft",
    note: "Entered software engineering from a mechanical engineering background and moved into backend development.",
  },
  {
    period: "Nov 2022 — Present",
    title: "Software Developer — Backend & Application Architecture",
    org: "Technologica IT DT Solutions (Al Madina Group, UAE)",
    shift: "From writing features to owning architecture",
    note: "Built and owns an internal multi-database application framework that became the foundation for 20+ independent enterprise applications, delivered the backend for a community platform serving 30,000+ residents, cut API latency 30–40% with Redis, and extended enterprise systems into AI through MCP and RAG.",
  },
];

export const education = {
  degree: "B.Tech, Mechanical Engineering",
  school: "Government Engineering College, Kozhikode",
  period: "2017 — 2021",
  grade: "CGPA 7.8 / 10",
};
