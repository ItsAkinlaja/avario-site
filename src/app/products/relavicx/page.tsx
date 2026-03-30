import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";

const features = [
  {
    title: "Pipeline Visibility",
    text: "Clear stages, ownership, and activity tracking across your sales process.",
  },
  {
    title: "Lead Qualification",
    text: "Capture intent and route leads into the right pipeline with structure.",
  },
  {
    title: "Automation & Follow-ups",
    text: "Reduce manual effort with reminders, sequences, and task automation.",
  },
  {
    title: "Reporting",
    text: "Track what converts with dashboards built around measurable outcomes.",
  },
];

const useCases = [
  "Founders who need clarity on what drives revenue.",
  "Sales teams that need consistent follow-up and stage discipline.",
  "Organizations that want to reduce lead leakage and improve conversion.",
];

export default function RelaviCXPage() {
  return (
    <>
      <PageHeader
        eyebrow="Product"
        title="RelaviCX CRM"
        description="A sales and customer management system built for structured follow-up, pipeline visibility, and measurable conversion."
      />

      <section className="bg-white">
        <Container className="pb-14 sm:pb-16">
          <div className="grid gap-5 md:grid-cols-2">
            {features.map((f) => (
              <Card key={f.title}>
                <div className="font-heading text-lg font-semibold text-black">
                  {f.title}
                </div>
                <div className="mt-2 text-sm leading-6 text-black/70">{f.text}</div>
              </Card>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
            <div className="rounded-3xl bg-avario-teal-tint p-10 sm:p-12">
              <div className="font-heading text-sm font-semibold text-avario-teal">
                Use Cases
              </div>
              <div className="mt-3 font-heading text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                When you need structure across sales.
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-black/70 sm:text-base">
                {useCases.map((u) => (
                  <li key={u} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-avario-lime" />
                    <span>{u}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white p-10 sm:p-12">
              <div className="font-heading text-sm font-semibold text-avario-teal">
                Deployment
              </div>
              <div className="mt-3 font-heading text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                Implemented as part of your Sales & CRM System.
              </div>
              <div className="mt-4 text-sm leading-6 text-black/70 sm:text-base">
                We don’t ship a tool. We deploy the full system: pipeline design,
                automation, reporting, and adoption.
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact">Request Demo</ButtonLink>
                <ButtonLink href="/growth-systems#sales-crm" variant="secondary">
                  View system <span className="text-avario-lime">→</span>
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
