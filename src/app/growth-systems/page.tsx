import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";

const systems = [
  {
    id: "acquisition",
    title: "Acquisition Systems",
    problem: "Leads come in, but intent is unclear and follow-up is inconsistent.",
    system:
      "Structured capture + qualification + routing so every opportunity is tracked from first touch.",
    result: "Reduced lead leakage and clearer visibility into what converts.",
  },
  {
    id: "sales-crm",
    title: "Sales & CRM Systems",
    problem: "Sales pipelines are invisible, and teams operate on guesswork.",
    system:
      "CRM implementation (RelaviCX-ready), pipeline stages, automation, and reporting aligned to how you sell.",
    result: "Predictable follow-up, better conversion, and measurable sales activity.",
  },
  {
    id: "operations",
    title: "Operations Systems",
    problem: "Delivery is inconsistent and teams lose time to manual coordination.",
    system:
      "Workflow design, automation, and standardized execution to reduce bottlenecks.",
    result: "Consistent delivery and improved operational efficiency.",
  },
  {
    id: "infrastructure",
    title: "Infrastructure Systems",
    problem: "Tools don’t connect, data is fragmented, and systems don’t scale.",
    system:
      "Technology infrastructure that integrates tools, data, and automation with performance-first engineering.",
    result: "Scalable operations with reliable systems and cleaner decision-making.",
  },
];

export default function GrowthSystemsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Growth Systems"
        title="Systems that turn growth into a structured process."
        description="We don’t list services. We deploy systems that solve real business problems and produce measurable outcomes."
      />

      <section className="bg-white">
        <Container className="pb-14 sm:pb-16">
          <div className="grid gap-5 md:grid-cols-2">
            {systems.map((s) => (
              <Card key={s.id} id={s.id} className="scroll-mt-24">
                <div className="font-heading text-xl font-semibold text-black">
                  {s.title}
                </div>
                <div className="mt-6 grid gap-4">
                  <div>
                    <div className="text-xs font-semibold text-black/60">
                      Problem
                    </div>
                    <div className="mt-2 text-sm leading-6 text-black/70">
                      {s.problem}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-black/60">
                      System
                    </div>
                    <div className="mt-2 text-sm leading-6 text-black/70">
                      {s.system}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-black/60">
                      Result
                    </div>
                    <div className="mt-2 text-sm leading-6 text-black/70">
                      {s.result}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-avario-teal-tint p-10 sm:p-12">
            <div className="font-heading text-sm font-semibold text-avario-teal">
              Next Step
            </div>
            <div className="mt-3 font-heading text-2xl font-semibold tracking-tight text-black sm:text-3xl">
              Tell us where growth is breaking. We’ll map the system.
            </div>
            <div className="mt-4 max-w-2xl text-sm leading-6 text-black/70 sm:text-base">
              The consultation is designed to qualify fit and identify the clearest
              system to deploy first.
            </div>
            <div className="mt-6">
              <ButtonLink href="/contact">Request Consultation</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
