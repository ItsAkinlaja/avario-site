export type CaseStudy = {
  slug: string;
  title: string;
  challenge: string;
  system: string;
  result: string;
  industry?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "lead-to-pipeline-visibility",
    title: "Lead Capture → Pipeline Visibility",
    industry: "B2B Services",
    challenge:
      "Leads were generated across channels, but tracking and follow-up were inconsistent, creating lead leakage.",
    system:
      "Deployed a structured acquisition-to-CRM system with qualification, routing, and pipeline stages aligned to how the team sells.",
    result:
      "Improved visibility across lead sources and sales stages, enabling faster follow-up and cleaner reporting.",
  },
  {
    slug: "operations-delivery-consistency",
    title: "Operations System → Delivery Consistency",
    industry: "Professional Services",
    challenge:
      "Project delivery relied on manual coordination, leading to bottlenecks and inconsistent execution.",
    system:
      "Designed a standardized delivery workflow and automation layer to assign tasks, track progress, and reduce operational friction.",
    result:
      "More consistent delivery execution with clearer ownership, fewer bottlenecks, and better operational visibility.",
  },
  {
    slug: "infrastructure-scalable-launches",
    title: "Infrastructure → Scalable Launches",
    industry: "Digital Products",
    challenge:
      "Existing tooling and site architecture lacked performance and scalability, limiting growth during demand spikes.",
    system:
      "Implemented performance-first web and integration infrastructure with structured deployment and measurement.",
    result:
      "A scalable foundation that supports growth with improved stability and faster iteration cycles.",
  },
];
