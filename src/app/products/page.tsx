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
      {/* Homepage-style Hero Section */}
      <section className="relative bg-[#1C4B42] overflow-hidden">
        <Container className="py-24 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="font-heading text-sm font-semibold uppercase tracking-[0.22em] text-[#9EDC2A] mb-4">Products</div>
              <h1 className="font-heading text-5xl sm:text-6xl font-bold leading-tight text-white mb-6">
                Systems for <span className="text-[#9EDC2A]">real business growth</span>
              </h1>
              <p className="text-lg text-white/80 mb-8 max-w-xl">
                Each Avario product strengthens a specific operating layer. From pipeline control to commerce operations to institutional administration — every tool is built as part of a larger system.
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#products" className="inline-flex items-center px-6 py-3 rounded-full bg-[#9EDC2A] text-[#1C4B42] font-bold shadow hover:bg-[#b4d400] transition-colors text-base">Explore Products</a>
                <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-full border-2 border-[#9EDC2A] text-white font-bold hover:bg-[#9EDC2A]/10 hover:text-[#1C4B42] transition-colors text-base">Request Demo</a>
              </div>
            </Reveal>
            <Reveal delayMs={120} className="flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#9EDC2A]/30 bg-white flex items-center justify-center">
                <img src="https://avariodigitals.com/wp-content/uploads/2026/04/Macbook-Air-relavicx.com_.ng_.png" alt="Avario Product Showcase" className="object-contain w-full h-full" />
                <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-[#9EDC2A]/20 blur-2xl" />
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-[#1C4B42]/20 blur-2xl" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Homepage-style Feature Highlights Section */}
      <section className="bg-white border-b border-[#1C4B42]/10">
        <Container className="py-16 sm:py-24">
          <Reveal className="mb-12 text-center">
            <div className="inline-flex items-center rounded-full border border-[#1C4B42]/20 bg-white px-4 py-2 mb-4">
              <span className="text-xs font-semibold text-[#1C4B42] uppercase tracking-wider">Why Avario Products?</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#0d3e2d]">Purpose-built for business layers</h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "RelaviCX",
                desc: "Sales pipeline discipline and conversion visibility",
                icon: (
                  <svg className="w-10 h-10 text-[#9EDC2A]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12l2 2 4-4" /></svg>
                ),
              },
              {
                title: "MartPoint",
                desc: "Commerce workflows and revenue structure",
                icon: (
                  <svg className="w-10 h-10 text-[#9EDC2A]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /><path d="M8 12h8" /></svg>
                ),
              },
              {
                title: "School Suite",
                desc: "Institutional operations and communication",
                icon: (
                  <svg className="w-10 h-10 text-[#9EDC2A]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M3 10l9-6 9 6-9 6-9-6z" /><path d="M21 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" /></svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center p-8 bg-[#f8f6f1] rounded-2xl border border-[#1C4B42]/10 shadow-sm">
                <div className="mb-4">{item.icon}</div>
                <div className="font-heading text-xl font-bold text-[#1C4B42] mb-2">{item.title}</div>
                <div className="text-[#0d3e2d]/70">{item.desc}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Products Grid Section */}
      <section id="products" className="bg-[#f8f6f1]"> 
        <Container className="py-20 sm:py-28">
          <Reveal className="flex flex-col items-center mb-16">
            <div className="inline-flex items-center rounded-full border border-[#1C4B42]/20 bg-white px-4 py-2 mb-4">
              <span className="text-xs font-semibold text-[#1C4B42] uppercase tracking-wider">Our Products</span>
            </div>
            <h2 className="max-w-4xl text-center font-heading text-4xl sm:text-5xl font-bold leading-tight text-[#0d3e2d]">
              Systems built for <span className="text-[#9EDC2A]">operational control</span>
            </h2>
          </Reveal>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <Reveal key={product.title} delayMs={80 + index * 80}>
                <article className="flex flex-col h-full rounded-3xl border-2 border-[#1C4B42]/10 bg-white shadow-xl hover:shadow-2xl transition-shadow overflow-hidden group">
                  <div className="relative w-full h-56 sm:h-64 bg-gradient-to-br from-[#1C4B42]/10 to-[#9EDC2A]/10 flex items-center justify-center">
                    <img src={product.image} alt={product.title} className="object-contain w-4/5 h-4/5 group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C4B42]/10 to-transparent opacity-80 pointer-events-none" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between p-7">
                    <div>
                      <div className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-[#1C4B42] mb-2">{product.category}</div>
                      <h3 className="font-heading text-2xl font-bold text-[#0d3e2d] mb-2">{product.title}</h3>
                      <div className="text-[#0d3e2d]/70 text-base mb-3">{product.highlight}</div>
                      <ul className="mb-4 space-y-2">
                        {product.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-2 text-[#1C4B42]/80 text-sm">
                            <span className="inline-block w-2 h-2 rounded-full bg-[#9EDC2A]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                      <a href={product.href} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#9EDC2A] px-6 py-3 font-bold text-[#1C4B42] hover:bg-[#b4d400] transition-colors whitespace-nowrap text-base shadow">
                        <span>View Product</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Product Logic Stepper Section */}
      <section className="bg-white">
        <Container className="py-20 sm:py-28">
          <div className="flex flex-col items-center mb-16">
            <div className="inline-flex items-center rounded-full border border-[#1C4B42]/20 bg-[#1C4B42]/5 px-4 py-2 mb-4"> 
              <span className="text-xs font-semibold text-[#1C4B42] uppercase tracking-wider">How Our Products Work</span>
            </div>
            <h2 className="max-w-4xl text-center font-heading text-4xl sm:text-5xl font-bold leading-tight text-[#0d3e2d]">
              Each product reflects <span className="text-[#9EDC2A]">an operating system</span>
            </h2>
          </div>
          {/* Visual stepper/timeline */}
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0">
            {productLogic.map((item, index) => (
              <div key={item.title} className="flex flex-col items-center md:w-1/3 px-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#9EDC2A]/20 border-2 border-[#9EDC2A] mb-4">
                  <span className="font-heading text-2xl font-bold text-[#1C4B42]">{index + 1}</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#1C4B42] mb-2 text-center">{item.title}</h3>
                <p className="text-[#0d3e2d]/70 text-base text-center">{item.text}</p>
                {index < productLogic.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 md:right-auto md:left-full md:ml-0 w-24 h-2 bg-gradient-to-r from-[#9EDC2A] to-[#1C4B42]/20 rounded-full" style={{left: `calc(${(index + 1) * 33.333}% - 2rem)`}} />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#1C4B42] to-[#9EDC2A]/80 text-white">
        <Container className="py-20 sm:py-28">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <Reveal className="max-w-2xl"> 
              <div className="font-heading text-sm font-semibold uppercase tracking-widest text-[#9EDC2A] mb-2">
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
