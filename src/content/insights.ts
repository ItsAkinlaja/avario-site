export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category?: string;
};

export const insights: Insight[] = [
  {
    slug: "why-most-growth-plans-fail",
    category: "Systems",
    title: "Why most growth plans fail without structure",
    excerpt:
      "If acquisition, sales, and operations aren’t connected, growth becomes inconsistent—even with strong effort.",
    content: [
      "Most businesses don’t have a growth problem. They have a systems problem.",
      "Leads enter the funnel, but data is not tracked consistently.",
      "Sales stages are unclear, follow-up is inconsistent, and reporting is unreliable.",
      "When growth is structured, the business can measure what works and scale with clarity.",
    ],
  },
  {
    slug: "the-real-cost-of-lead-leakage",
    category: "Acquisition",
    title: "The real cost of lead leakage",
    excerpt:
      "When leads are not qualified, routed, and followed up correctly, revenue is lost quietly and repeatedly.",
    content: [
      "Lead leakage is usually invisible until you put structure around capture and follow-up.",
      "The fix is not more leads. The fix is a system that tracks, qualifies, and routes opportunities.",
      "A good CRM setup is not a tool choice—it’s a process choice.",
    ],
  },
  {
    slug: "measuring-outcomes-not-activity",
    category: "Performance",
    title: "Measuring outcomes, not activity",
    excerpt:
      "Activity can look busy and still produce weak results. Outcomes are what matter.",
    content: [
      "A system is only as good as its measurement layer.",
      "Outcome metrics improve decision-making and help teams focus on what converts.",
      "Build reporting around the business model: acquisition → conversion → delivery → retention.",
    ],
  },
];
