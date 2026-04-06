import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

const blocks = [
  {
    title: "Problem",
    text: "Commerce grows fast, but operational structure lags behind—leading to inconsistent fulfillment and poor visibility.",
  },
  {
    title: "System",
    text: "A structured commerce infrastructure that standardizes product workflows, customer journeys, and performance tracking.",
  },
  {
    title: "Result",
    text: "Clearer operations, fewer bottlenecks, and measurable improvements in customer experience and revenue flow.",
  },
];

export default function MartPointPage() {
  return (
    <>
      <PageHeader
        eyebrow="Product"
        title="MartPoint"
        description="Commerce infrastructure built as a system—designed for structured operations and measurable performance."
        bgImage="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=2400&q=80"
        breadcrumb={[
          { href: "/products", label: "Products" },
          { href: "/products/martpoint", label: "MartPoint" },
        ]}
      />

      <section className="bg-[#f8f6f1]">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:items-center">
            {/* Image Section */}
            <Reveal>
              <div className="relative min-h-[320px] md:min-h-[380px] lg:min-h-[420px] rounded-2xl border border-[#1C4B42]/10 overflow-hidden bg-gradient-to-br from-[#1C4B42]/5 to-[#0d3e2d]/5 group">
                <img
                  src="https://avariodigitals.com/wp-content/uploads/2026/04/Martpoint-Logo-White25876.webp"
                  alt="MartPoint"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Reveal>

            {/* Content Section */}
            <Reveal delayMs={140}>
              <div>
                <div className="inline-flex items-center rounded-full border border-[#1C4B42]/20 bg-[#1C4B42]/5 px-4 py-2 mb-6">
                  <span className="text-xs font-semibold text-[#1C4B42] uppercase tracking-wider">
                    Commerce Operations
                  </span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-[#0d3e2d]">
                  Commerce that runs as one system.
                </h2>
                <p className="mt-6 text-base leading-7 text-[#0d3e2d]/70">
                  MartPoint brings structure to commerce operations. From product workflows to customer journeys to performance measurement—everything works together as a coordinated system, not scattered tools.
                </p>
                <div className="mt-8 space-y-3">
                  {[
                    "Order and workflow visibility across all channels",
                    "Customer journey structure and personalization",
                    "Performance-centered commerce analytics",
                    "Automated fulfillment and communication",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 text-sm text-[#0d3e2d]/70">
                      <span className="font-semibold text-[#9EDC2A] flex-shrink-0">+</span>
                      <span>{item}</span>
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
          <div className="grid gap-5 md:grid-cols-3">
            {blocks.map((b, idx) => (
              <Reveal key={b.title} delayMs={100 + idx * 80}>
                <Card className="transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <div className="text-xs font-semibold text-black/60">{b.title}</div>
                  <div className="mt-3 font-heading text-lg font-semibold text-black">
                    {b.text}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <Card>
                <div className="font-heading text-lg font-semibold text-black">
                  Capabilities
                </div>
                <ul className="mt-3 space-y-3 text-sm leading-6 text-black/70">
                  <li>• Product workflow standardization</li>
                  <li>• Order management visibility</li>
                  <li>• Customer journey tracking</li>
                  <li>• Performance dashboards</li>
                </ul>
              </Card>
            </Reveal>
            <Reveal delayMs={140}>
              <Card>
                <div className="font-heading text-lg font-semibold text-black">
                  Rollout framework
                </div>
                <ol className="mt-3 space-y-3 text-sm leading-6 text-black/70">
                  <li>1. Map current processes</li>
                  <li>2. Configure standardized flows</li>
                  <li>3. Integrate payment, inventory, and CRM</li>
                  <li>4. Train teams and measure outcomes</li>
                </ol>
              </Card>
            </Reveal>
          </div>
          <Reveal className="mt-10 rounded-[2rem] bg-gradient-to-br from-[#0d3e2d] to-[#0d2419] p-10 sm:p-12">
            <div className="font-heading text-sm font-semibold text-[#9EDC2A]">
              Next Step
            </div>
            <div className="mt-3 font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Explore fit and implementation.
            </div>
            <div className="mt-4 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
              Tell us your current workflow and where performance breaks. We'll map
              a structured deployment plan.
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://martpoint.com.ng/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#9EDC2A] px-8 py-3 font-semibold text-[#0d3e2d] hover:bg-white transition-colors whitespace-nowrap"
              >
                <span>Visit MartPoint</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-8 py-3 font-semibold text-white hover:border-white/60 hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                Request Consultation
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
