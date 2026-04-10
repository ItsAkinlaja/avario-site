import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  {
    title: "Strategy",
    text: "We identify the commercial bottleneck clearly before we propose systems, tools, or deployment choices.",
  },
  {
    title: "Technology",
    text: "We build the layer that connects workflows, data, products, and execution into one operating structure.",
  },
  {
    title: "Performance",
    text: "We measure what changes after implementation and refine the system based on evidence and movement.",
  },
];

const principles = [
  "Systems over scattered services",
  "Clarity over noise",
  "Structure over improvisation",
  "Outcomes over activity theatre",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section - white, bold, pictorial */}
      <section className="relative bg-white overflow-hidden border-b border-[#1C4B42]/10">
        <Container className="py-24 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="font-heading text-sm font-semibold uppercase tracking-[0.22em] text-[#1C4B42] mb-4">About Avario</div>
              <h1 className="font-heading text-5xl sm:text-6xl font-bold leading-tight text-[#0d3e2d] mb-6">
                Avario is built around one belief: growth works better when the system is clear.
              </h1>
              <p className="text-lg text-[#0d3e2d]/80 mb-8 max-w-xl">
                We are a strategy-led digital and technology company focused on operating structure. Our role is not to add more activity. Our role is to build the systems that give ambitious businesses more clarity, stronger execution, and measurable control.
              </p>
            </Reveal>
            <Reveal delayMs={120} className="flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#9EDC2A]/20 bg-[#f8f6f1] flex items-center justify-center">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="absolute -top-8 -left-8 opacity-30"><circle cx="60" cy="60" r="60" fill="#9EDC2A" /></svg>
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="absolute -bottom-8 -right-8 opacity-20"><circle cx="60" cy="60" r="60" fill="#1C4B42" /></svg>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="z-10">
                  <rect x="8" y="8" width="48" height="48" rx="12" fill="#9EDC2A" />
                  <path d="M20 32h24M32 20v24" stroke="#1C4B42" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Positioning Section - modern card, white */}
      <section className="bg-white border-b border-[#1C4B42]/10">
        <Container className="py-16 sm:py-20">
          <div className="flex flex-col items-center">
            <Reveal className="w-full max-w-2xl">
              <div className="rounded-3xl border-2 border-[#9EDC2A]/20 bg-[#f8f6f1] p-8 shadow-lg">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9EDC2A] mb-4">Positioning</div>
                <ul className="space-y-4">
                  {[
                    "We diagnose business friction before we prescribe solutions",
                    "We design systems across acquisition, sales, operations, and infrastructure",
                    "We care about operating outcomes, not generic digital activity",
                  ].map((item, index) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="font-heading text-2xl font-semibold text-[#1C4B42]/30">0{index + 1}</span>
                      <span className="pt-1 text-base leading-7 text-[#0d3e2d]/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <Reveal className="max-w-2xl">
              <div className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-[#1C4B42]">
                What we actually do
              </div>
              <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-[#0d3e2d] sm:text-5xl">
                We build the operating infrastructure behind growth.
              </h2>
              <p className="mt-5 text-base leading-7 text-[#13251a]/70 sm:text-lg">
                Many businesses do not suffer from a lack of effort. They suffer from
                fragmented systems, weak handoffs, inconsistent follow-through, and a
                lack of visibility into what is actually driving performance. Avario
                exists to fix that structurally.
              </p>
              <p className="mt-5 text-base leading-7 text-[#0d3e2d]/70 sm:text-lg">
                We work across the layers that determine how a company grows in
                practice: how demand enters, how opportunities move, how delivery is
                managed, and how the technical foundation supports it all.
              </p>
            </Reveal>

            <div className="grid gap-5">
              {pillars.map((pillar, index) => (
                <Reveal key={pillar.title} delayMs={120 + index * 90}>
                  <Card className="rounded-2xl border border-[#1C4B42]/10 bg-white p-7 shadow-none hover:bg-[#9EDC2A]/10 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="font-heading text-2xl font-semibold text-[#0d3e2d]">
                          {pillar.title}
                        </div>
                        <div className="mt-3 text-sm leading-7 text-[#0d3e2d]/70 sm:text-base">
                          {pillar.text}
                        </div>
                      </div>
                      <div className="font-heading text-4xl font-semibold text-[#1C4B42]/16">
                        0{index + 1}
                      </div>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-br from-[#0d3e2d] to-[#0d2419] text-white">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal className="max-w-2xl">
              <div className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-[#9EDC2A]">
                Philosophy
              </div>
              <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                The brand is not built on hype. It is built on disciplined systems thinking.
              </h2>
              <p className="mt-5 text-base leading-7 text-white/72 sm:text-lg">
                Avario is intentionally positioned away from generic agencies and
                activity-heavy service models. The value is in diagnosis, structure,
                implementation quality, and the business confidence that comes from a
                stronger operating layer.
              </p>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map((item, index) => (
                <Reveal key={item} delayMs={120 + index * 70}>
                  <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] px-6 py-6 text-sm leading-7 text-white/76 sm:text-base">
                    <div className="mb-4 font-heading text-3xl font-semibold text-white/14">
                      0{index + 1}
                    </div>
                    {item}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <Reveal className="max-w-2xl">
              <div className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-[#1C4B42]">
                Next step
              </div>
              <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-[#0d3e2d] sm:text-5xl">
                If your business has momentum but not enough structure, that is where we begin.
              </h2>
              <p className="mt-5 text-base leading-7 text-[#0d3e2d]/70 sm:text-lg">
                The first conversation is about identifying the bottleneck, defining
                the system that should exist, and deciding what better execution
                should look like in practice.
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
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#1C4B42]/20 px-8 py-3 font-semibold text-[#0d3e2d] hover:border-[#1C4B42]/40 transition-colors whitespace-nowrap"
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
