import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

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
        bgImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2400&q=80"
        breadcrumb={[
          { href: "/products", label: "Products" },
          { href: "/products/relavicx", label: "RelaviCX CRM" },
        ]}
      />

      <section className="bg-[#f8f6f1]">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:items-center">
            {/* Image Section */}
            <Reveal className="order-2 lg:order-1">
              <div className="relative min-h-[320px] md:min-h-[380px] lg:min-h-[420px] rounded-2xl border border-[#1C4B42]/10 overflow-hidden bg-gradient-to-br from-[#1C4B42]/5 to-[#0d3e2d]/5 group">
                <img
                  src="https://avariodigitals.com/wp-content/uploads/2026/04/Macbook-Air-relavicx.com_.ng_.png"
                  alt="RelaviCX CRM"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Reveal>

            {/* Content Section */}
            <Reveal className="order-1 lg:order-2">
              <div>
                <div className="inline-flex items-center rounded-full border border-[#1C4B42]/20 bg-[#1C4B42]/5 px-4 py-2 mb-6">
                  <span className="text-xs font-semibold text-[#1C4B42] uppercase tracking-wider">
                    Key Features
                  </span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-[#0d3e2d]">
                  Built for sales that need structure.
                </h2>
                <p className="mt-6 text-base leading-7 text-[#0d3e2d]/70">
                  RelaviCX is designed around one principle: sales teams perform better when the pipeline is clear, visibility is real-time, and follow-up is structured.
                </p>
                <div className="mt-8 grid gap-4">
                  {features.map((f, idx) => (
                    <div key={f.title} className="flex gap-4">
                      <div className="flex-shrink-0 pt-1">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#9EDC2A]/20 text-sm font-semibold text-[#1C4B42]">
                          ✓
                        </span>
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-[#0d3e2d]">{f.title}</h3>
                        <p className="mt-1 text-sm text-[#0d3e2d]/70">{f.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-5 md:grid-cols-2">
            {features.map((f, idx) => (
              <Reveal key={f.title} delayMs={100 + idx * 80}>
                <Card className="transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <div className="font-heading text-lg font-semibold text-black">
                    {f.title}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-black/70">{f.text}</div>
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
            <Reveal className="rounded-[2rem] bg-[#1C4B42] p-10 sm:p-12">
              <div className="font-heading text-sm font-semibold text-[#9EDC2A]">
                Use Cases
              </div>
              <div className="mt-3 font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                When you need structure across sales.
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-white/80 sm:text-base">
                {useCases.map((u) => (
                  <li key={u} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#9EDC2A]" />
                    <span>{u}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delayMs={140} className="rounded-[2rem] border border-[#1C4B42]/20 bg-white p-10 sm:p-12">
              <div className="font-heading text-sm font-semibold text-[#1C4B42]">
                Deployment
              </div>
              <div className="mt-3 font-heading text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                Implemented as part of your Sales & CRM System.
              </div>
              <div className="mt-4 text-sm leading-6 text-black/70 sm:text-base">
                We don't ship a tool. We deploy the full system: pipeline design,
                automation, reporting, and adoption.
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://relavicx.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#9EDC2A] px-8 py-3 font-semibold text-[#0d3e2d] hover:bg-white transition-colors whitespace-nowrap"
                >
                  <span>Visit RelaviCX</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#1C4B42]/20 px-8 py-3 font-semibold text-[#0d3e2d] hover:border-[#1C4B42]/40 transition-colors whitespace-nowrap"
                >
                  Request Demo
                </a>
                <a
                  href="/growth-systems#sales-crm"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#1C4B42]/20 px-8 py-3 font-semibold text-[#0d3e2d] hover:border-[#1C4B42]/40 transition-colors whitespace-nowrap"
                >
                  View System <span className="text-[#9EDC2A]">→</span>
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <Card>
                <div className="font-heading text-lg font-semibold text-black">
                  Benefits
                </div>
                <ul className="mt-3 space-y-3 text-sm leading-6 text-black/70">
                  <li>• Reduced lead leakage with structured routing</li>
                  <li>• Faster follow-ups and clearer ownership</li>
                  <li>• Pipeline visibility and measurable conversion</li>
                  <li>• Evidence-based optimization with reporting</li>
                </ul>
              </Card>
            </Reveal>
            <Reveal delayMs={140}>
              <Card>
                <div className="font-heading text-lg font-semibold text-black">
                  Implementation plan
                </div>
                <ol className="mt-3 space-y-3 text-sm leading-6 text-black/70">
                  <li>1. Diagnose stages and handoffs</li>
                  <li>2. Configure pipelines and automations</li>
                  <li>3. Connect forms, inboxes, and calendars</li>
                  <li>4. Launch reporting and adoption cadence</li>
                </ol>
              </Card>
            </Reveal>
          </div>

      </section>
    </>
  );
}
