import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const systems = [
  {
    id: "acquisition",
    index: "01",
    title: "Acquisition Systems",
    lead: "Growth starts with how demand enters the business.",
    problem:
      "Leads come in from different channels, intent is hard to read, and teams lose momentum before the first strong follow-up happens.",
    system:
      "Avario structures capture, qualification, routing, and channel visibility so opportunities arrive with context and move forward deliberately.",
    result:
      "Cleaner demand flow, faster response loops, and a clearer view of what is actually driving qualified growth.",
  },
  {
    id: "sales-crm",
    index: "02",
    title: "Sales and CRM Systems",
    lead: "A healthy pipeline should create movement, not mystery.",
    problem:
      "Sales teams often work through fragmented notes, late follow-ups, and CRM stages that do not match the real selling process.",
    system:
      "We shape the CRM around your sales motion with practical stage design, automation, ownership rules, reminders, and reporting that supports decisions.",
    result:
      "Better follow-through, stronger visibility across the pipeline, and more confidence in how deals are progressing.",
  },
  {
    id: "operations",
    index: "03",
    title: "Operations Systems",
    lead: "Growth breaks when delivery cannot keep up with it.",
    problem:
      "Execution depends too heavily on people remembering steps, handoffs are inconsistent, and service quality becomes harder to sustain as work increases.",
    system:
      "Avario designs delivery workflows, accountability layers, automation, and team operating rhythms that reduce friction across execution.",
    result:
      "More dependable delivery, fewer avoidable bottlenecks, and a stronger internal pace as the business grows.",
  },
  {
    id: "infrastructure",
    index: "04",
    title: "Infrastructure Systems",
    lead: "The technical layer should accelerate growth, not constrain it.",
    problem:
      "Tools do not connect properly, data stays fragmented, and the underlying setup struggles to support performance, scale, and visibility.",
    system:
      "We build the foundations underneath the business: integrations, automations, product architecture, and performance-first infrastructure that keeps the stack coherent.",
    result:
      "A stronger platform for scale, more reliable operations, and cleaner performance across the business system.",
  },
];

const principles = [
  {
    title: "Designed around constraints",
    text: "We start with the real point of friction instead of prescribing a generic stack.",
  },
  {
    title: "Built for adoption",
    text: "A system only works if teams can actually use it, trust it, and sustain it.",
  },
  {
    title: "Measured by movement",
    text: "The goal is measurable progress across demand, conversion, delivery, and scale.",
  },
];

export default function GrowthSystemsPage() {
  return (
    <>
      <section className="overflow-hidden bg-[#1C4B42]">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <Reveal className="max-w-3xl">
              <div className="font-heading text-sm font-semibold uppercase tracking-[0.22em] text-[#9EDC2A]">
                Growth Systems
              </div>
              <h1 className="mt-4 font-heading text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[4.5rem]">
                Build growth as a system, not scattered effort.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
                Avario designs the structures that help demand move cleanly, sales convert with discipline, delivery stay reliable, and technology support scale.
              </p>
            </Reveal>

            <Reveal delayMs={140}>
              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-7 backdrop-blur-sm shadow-[0_24px_60px_rgba(0,0,0,0.2)] sm:p-8">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9EDC2A]">
                  Four growth layers
                </div>
                <div className="mt-4 space-y-4">
                  {[
                    "Where does demand currently leak?",
                    "What part of conversion lacks structure?",
                    "Which delivery bottlenecks keep repeating?",
                    "What technical layer needs strengthening?",
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

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-[#1C4B42]/20 bg-[#1C4B42]/5 px-4 py-2 mb-8">
              <span className="text-xs font-semibold text-[#1C4B42] uppercase tracking-wider">
                How We Build Systems
              </span>
            </div>
            <h2 className="max-w-4xl mx-auto font-heading text-4xl sm:text-5xl font-bold leading-tight text-[#0d3e2d]">
              Every system solves a different <span className="text-[#9EDC2A]">growth challenge</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((item, index) => (
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

      <section className="bg-[#f8f6f1]">
        <Container className="py-16 sm:py-20">
          <Reveal className="max-w-3xl mb-12">
            <div className="inline-flex items-center rounded-full border border-[#1C4B42]/20 bg-white px-4 py-2 mb-4">
              <span className="text-xs font-semibold text-[#1C4B42] uppercase tracking-wider">
                The Four Systems
              </span>
            </div>
            <h2 className="font-heading text-4xl font-semibold tracking-tight text-[#0d3e2d] sm:text-5xl">
              Each system removes a different kind of growth drag.
            </h2>
          </Reveal>

          <div className="mt-10 space-y-6">
            {systems.map((system, index) => (
              <Reveal key={system.id} delayMs={80 + index * 80}>
                <article
                  id={system.id}
                  className="scroll-mt-24 overflow-hidden rounded-2xl border border-[#1C4B42]/10 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="grid gap-0 lg:grid-cols-[0.35fr_0.65fr]">
                    <div className="border-b border-[#1C4B42]/10 bg-gradient-to-br from-[#1C4B42] to-[#0d3e2d] p-8 sm:p-10 lg:border-b-0 lg:border-r">
                      <div className="font-heading text-6xl font-semibold leading-none text-[#9EDC2A]/20">
                        {system.index}
                      </div>
                      <div className="mt-6 font-heading text-3xl font-semibold text-white">
                        {system.title}
                      </div>
                      <div className="mt-4 text-base leading-7 text-white/80">
                        {system.lead}
                      </div>
                    </div>

                    <div className="grid gap-px bg-[#f0ede7] sm:grid-cols-3">
                      <div className="bg-white p-6 sm:p-8">
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1C4B42]">
                          Problem
                        </div>
                        <div className="mt-4 text-sm leading-7 text-[#0d3e2d]/70">
                          {system.problem}
                        </div>
                      </div>
                      <div className="bg-[#faf8f5] p-6 sm:p-8">
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1C4B42]">
                          System
                        </div>
                        <div className="mt-4 text-sm leading-7 text-[#0d3e2d]/70">
                          {system.system}
                        </div>
                      </div>
                      <div className="bg-[#f5f2ed] p-6 sm:p-8">
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1C4B42]">
                          Result
                        </div>
                        <div className="mt-4 text-sm leading-7 text-[#0d3e2d]/70">
                          {system.result}
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
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0d3e2d] to-[#0d2419] px-8 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <Reveal className="max-w-2xl">
                <div className="font-heading text-sm font-semibold uppercase tracking-widest text-[#b4d400]">
                  Ready to build?
                </div>
                <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Find your growth opportunity and <span className="text-[#b4d400]">build the system first</span>
                </h2>
                <p className="mt-5 text-base leading-7 text-white/80 sm:text-lg">
                  A consultation surfaces where growth is slowing, identifies which system should be strengthened first, and clarifies what implementation looks like.
                </p>
              </Reveal>

              <Reveal
                delayMs={120}
                className="flex flex-col gap-4 sm:flex-row lg:flex-col"
              >
                <ButtonLink
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon="arrow"
                  className="bg-[#b4d400] text-[#0d3e2d] hover:bg-white"
                >
                  Request Consultation
                </ButtonLink>
                <ButtonLink
                  href="/case-studies"
                  variant="secondary"
                  size="lg"
                  className="border-white/40 text-white hover:bg-white/10 hover:border-white/60"
                >
                  View Case Studies
                </ButtonLink>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
