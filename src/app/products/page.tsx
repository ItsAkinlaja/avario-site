import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

const products = [
  {
    title: "RelaviCX CRM",
    category: "Sales infrastructure",
    description:
      "A sales and customer management platform built around pipeline visibility, disciplined follow-up, and clearer conversion control.",
    highlight: "Built for sales teams that need structure, ownership, and measurable movement across the pipeline.",
    bullets: [
      "Pipeline and stage visibility",
      "Lead qualification and routing",
      "Follow-up discipline and automation",
    ],
    href: "/products/relavicx",
    tone: "bg-[#f4f8f5]",
    image: "https://avariodigitals.com/wp-content/uploads/2026/04/Macbook-Air-relavicx.com_.ng_.png",
  },
  {
    title: "MartPoint",
    category: "Commerce operations",
    description:
      "Commerce infrastructure designed around product workflows, order visibility, customer journeys, and performance measurement.",
    highlight: "Built for brands that need commerce operations to feel coordinated, not improvised.",
    bullets: [
      "Order and workflow visibility",
      "Customer journey structure",
      "Performance-centered commerce setup",
    ],
    href: "/products/martpoint",
    tone: "bg-[#fbf7ef]",
    image: "https://avariodigitals.com/wp-content/uploads/2026/04/Martpoint-Logo-White25876.webp",
  },
  {
    title: "School Suite",
    category: "Education operations",
    description:
      "A school operations suite for enrollment, records, communication, and administration in one structured environment.",
    highlight: "Built for institutions that want administration, reporting, and communication to run as one system.",
    bullets: [
      "Admissions and records management",
      "Communication and reporting flows",
      "Structured administration and oversight",
    ],
    href: "/products/school-suite",
    tone: "bg-[#f3f6fb]",
    image: "https://avariodigitals.com/wp-content/uploads/2026/04/dashboard_full_1.png",
  },
];

const productLogic = [
  {
    title: "Each product reflects an operating system",
    text: "These are not isolated tools. Each one supports a bigger business layer such as sales, commerce, or institutional operations.",
  },
  {
    title: "Designed around real workflow pressure",
    text: "The products are framed by the friction they remove, the visibility they create, and the adoption they support.",
  },
  {
    title: "Implementation matters as much as features",
    text: "Avario positions products as deployable systems, meaning structure, rollout, and team usage matter from day one.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="overflow-hidden bg-[#1C4B42]">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <Reveal className="max-w-3xl">
              <div className="font-heading text-sm font-semibold uppercase tracking-[0.22em] text-[#9EDC2A]">
                Products
              </div>
              <h1 className="mt-4 font-heading text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[4.5rem]">
                Systems designed for specific business challenges.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
                Each Avario product strengthens a specific operating layer. From pipeline control to commerce operations to institutional administration — every tool is built as part of a larger system.
              </p>
            </Reveal>

            <Reveal delayMs={140}>
              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-7 backdrop-blur-sm shadow-[0_24px_60px_rgba(0,0,0,0.2)] sm:p-8">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9EDC2A]">
                  Why we build products
                </div>
                <div className="mt-4 space-y-4">
                  {[
                    "RelaviCX: Sales pipeline discipline and conversion visibility",
                    "MartPoint: Commerce workflows and revenue structure",
                    "School Suite: Institutional operations and communication",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
                    >
                      <div className="font-heading text-2xl font-semibold text-white/24">
                        0{index + 1}
                      </div>
                      <div className="pt-1 text-sm leading-7 text-white/80 sm:text-base">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#f8f6f1]">
        <Container className="py-16 sm:py-20">
          <Reveal className="max-w-3xl mb-12">
            <div className="inline-flex items-center rounded-full border border-[#1C4B42]/20 bg-white px-4 py-2 mb-4">
              <span className="text-xs font-semibold text-[#1C4B42] uppercase tracking-wider">
                Our Products
              </span>
            </div>
            <h2 className="font-heading text-4xl font-semibold tracking-tight text-[#0d3e2d] sm:text-5xl">
              Systems built for operational control.
            </h2>
          </Reveal>

          <div className="mt-10 space-y-6">
            {products.map((product, index) => (
              <Reveal key={product.title} delayMs={80 + index * 80}>
                <article
                  className="scroll-mt-24 overflow-hidden rounded-2xl border border-[#1C4B42]/10 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="grid gap-0 md:grid-cols-[0.4fr_0.6fr] lg:grid-cols-[0.35fr_0.65fr]">
                    {/* Image Section */}
                    <div className="relative min-h-[280px] md:min-h-[320px] lg:min-h-[380px] border-b md:border-b-0 md:border-r border-[#1C4B42]/10 bg-gradient-to-br from-[#1C4B42]/5 to-[#0d3e2d]/5 overflow-hidden group">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Gradient overlay for better text contrast if needed */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Content Section */}
                    <div className="grid gap-px bg-[#f0ede7] sm:grid-cols-2">
                      <div className="bg-white p-6 sm:p-8">
                        <div className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-[#1C4B42]">
                          {product.category}
                        </div>
                        <div className="mt-4 font-heading text-2xl sm:text-3xl font-semibold text-[#0d3e2d]">
                          {product.title}
                        </div>
                        <div className="mt-4 text-sm leading-7 text-[#0d3e2d]/70">
                          {product.highlight}
                        </div>
                        <div className="mt-6 space-y-3">
                          {product.bullets.map((bullet) => (
                            <div
                              key={bullet}
                              className="flex items-start gap-3 text-sm leading-6 text-[#0d3e2d]/70"
                            >
                              <span className="font-semibold text-[#9EDC2A] mt-0.5 flex-shrink-0">+</span>
                              <span>{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col justify-between bg-[#faf8f5] p-6 sm:p-8">
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1C4B42]">
                            Outcome
                          </div>
                          <div className="mt-4 font-heading text-xl sm:text-2xl font-semibold text-[#0d3e2d]">
                            Better visibility, flow, and control.
                          </div>
                        </div>
                        <div className="mt-8">
                          <a
                            href={product.href}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1C4B42] px-6 py-3 font-semibold text-white hover:bg-[#0d3e2d] transition-colors whitespace-nowrap text-sm"
                          >
                            <span>View Product</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-[#1C4B42]/20 bg-[#1C4B42]/5 px-4 py-2 mb-8">
              <span className="text-xs font-semibold text-[#1C4B42] uppercase tracking-wider">
                How Our Products Work
              </span>
            </div>
            <h2 className="max-w-4xl mx-auto font-heading text-4xl sm:text-5xl font-bold leading-tight text-[#0d3e2d]">
              Each product reflects <span className="text-[#9EDC2A]">an operating system</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {productLogic.map((item, index) => (
              <Reveal key={item.title} delayMs={80 + index * 80}>
                <div className="rounded-2xl border border-[#1C4B42]/10 bg-[#1C4B42]/5 p-8 hover:bg-[#9EDC2A]/10 transition-colors">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1C4B42]">
                    Principle 0{index + 1}
                  </div>
                  <h3 className="mt-4 font-heading text-2xl font-semibold text-[#0d3e2d]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#0d3e2d]/70 sm:text-base">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-br from-[#0d3e2d] to-[#0d2419] text-white">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <Reveal className="max-w-2xl">
              <div className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-[#9EDC2A]">
                Next step
              </div>
              <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Choose the product that matches the operating pressure you need to solve.
              </h2>
              <p className="mt-5 text-base leading-7 text-white/72 sm:text-lg">
                If the challenge sits in sales, commerce, or institutional
                administration, Avario can help you map the right product and the
                right rollout path.
              </p>
            </Reveal>

            <Reveal delayMs={120} className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#9EDC2A] px-8 py-3 font-semibold text-[#0d3e2d] hover:bg-white transition-colors whitespace-nowrap"
              >
                <span>Request Consultation</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/growth-systems"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-8 py-3 font-semibold text-white hover:border-white/60 hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                Explore Growth Systems
              </a>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
