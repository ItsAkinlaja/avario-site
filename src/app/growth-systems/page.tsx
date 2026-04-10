
import { HeroNext } from "@/components/sections/HeroNext";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Growth Systems" },
];

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
      {/* Breadcrumb Navigation */}
      <div className="bg-[#f8f6f1] py-4">
        <Container>
          <Breadcrumbs items={breadcrumbItems} />
        </Container>
      </div>

      {/* Hero Section */}
      <section className="relative bg-white pt-16 lg:pt-24 pb-6 lg:pb-8">
        <Container>
          <div className="max-w-full">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug text-[#0d3e2d] flex-1">
                Build Growth as a <span className="text-[#9EDC2A]">System</span>, Not Scattered Effort
              </h1>
              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center lg:items-center flex-shrink-0 w-full lg:w-auto">
                <ButtonLink
                  href="/contact"
                  className="bg-[#1C4B42] text-white hover:bg-[#0d3e2d] px-4 sm:px-6 py-3 w-full sm:w-auto text-sm sm:text-base"
                >
                  Request Consultation
                </ButtonLink>
                <ButtonLink
                  href="/case-studies"
                  className="px-4 sm:px-6 py-3 bg-[#9EDC2A]/20 text-[#0d3e2d] font-normal text-sm lg:text-base hover:bg-[#b4d400]/30 transition-colors rounded-full inline-flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start"
                >
                  View Case Studies
                </ButtonLink>
              </div>
            </div>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#0d3e2d]/80 sm:text-lg">
              Avario designs the structures that help demand move cleanly, sales convert with discipline, delivery stay reliable, and technology support scale.
            </p>
          </div>
        </Container>
      </section>

      {/* Principles/Values Section */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <Reveal className="flex flex-col items-center mb-16 lg:mb-20">
            <div className="inline-flex items-center rounded-full border border-[#1C4B42]/20 bg-[#1C4B42]/5 px-4 py-2 mb-8">
              <span className="text-xs font-semibold text-[#1C4B42] uppercase tracking-wider">
                HOW WE BUILD SYSTEMS
              </span>
            </div>
            <h2 className="max-w-4xl text-center font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#0d3e2d]">
              Every system solves a different <span className="text-[#9EDC2A]">growth challenge</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
            {principles.map((item, index) => (
              <Reveal key={item.title} delayMs={80 + index * 80}>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center">
                    <span className="text-3xl font-bold text-[#9EDC2A]">0{index + 1}</span>
                  </div>
                  <div className="rounded-2xl border border-[#1C4B42]/10 bg-[#1C4B42]/5 p-6 sm:p-7 hover:bg-[#B4E717] transition-colors">
                    <h3 className="font-heading text-lg font-semibold text-[#1C4B42] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-6 text-[#13251a]/70">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Systems Grid Section - Creative Premium Style */}
      <section className="relative bg-gradient-to-br from-[#f8f6f1] to-[#e6f4ed] py-16 sm:py-24 md:py-28 overflow-x-clip">
        <Container>
          <Reveal className="flex flex-col items-center mb-14 md:mb-20">
            <div className="inline-flex items-center rounded-full border border-[#1C4B42]/20 bg-white px-4 py-2 mb-4 shadow-sm">
              <span className="text-xs font-semibold text-[#1C4B42] uppercase tracking-wider">
                THE FOUR SYSTEMS
              </span>
            </div>
            <h2 className="max-w-4xl text-center font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#0d3e2d]">
              Each system removes a different kind of <span className="text-[#9EDC2A]">growth drag</span>.
            </h2>
          </Reveal>
          <div className="relative flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-10 lg:gap-20">
            {systems.map((system, index) => {
              const bgGradients = [
                "from-[#e6f4ed] to-[#b4e717]/30",
                "from-[#f8f6f1] to-[#9edc2a]/20",
                "from-[#f6efe3] to-[#1c4b42]/10",
                "from-[#e6f4ed] to-[#1c4b42]/5",
              ];
              const icons = [
                <svg key="acq" className="w-7 h-7 sm:w-8 sm:h-8 text-[#9EDC2A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12l2 2 4-4" /></svg>,
                <svg key="crm" className="w-7 h-7 sm:w-8 sm:h-8 text-[#1C4B42]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /><path d="M8 10h8M8 14h6" /></svg>,
                <svg key="ops" className="w-7 h-7 sm:w-8 sm:h-8 text-[#b4d400]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="7" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>,
                <svg key="infra" className="w-7 h-7 sm:w-8 sm:h-8 text-[#1C4B42]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="10" rx="5" /><path d="M6 7V5a6 6 0 0112 0v2" /></svg>,
              ];
              // Responsive staggered/asymmetric effect
              const stagger = index % 2 === 0 ? "lg:translate-y-0" : "lg:-translate-y-10";
              return (
                <Reveal key={system.id} delayMs={100 + index * 120}>
                  <div
                    className={`relative group rounded-3xl shadow-2xl hover:shadow-[0_12px_48px_rgba(156,220,42,0.13)] transition-shadow duration-300 bg-gradient-to-br ${bgGradients[index]} ${stagger} px-0 pt-0 pb-0 overflow-visible min-h-[360px] sm:min-h-[400px] md:min-h-[420px]`}
                  >
                    {/* Floating number badge and icon */}
                    <div className="absolute -top-7 left-5 flex items-center gap-2 sm:gap-3 z-10">
                      <div className="flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-white shadow-lg border-4 border-[#9EDC2A] font-heading text-2xl sm:text-3xl font-bold text-[#1C4B42] group-hover:scale-105 transition-transform">
                        {system.index}
                      </div>
                      <span className="bg-white rounded-full p-1.5 sm:p-2 shadow-md border border-[#e6f4ed]">{icons[index]}</span>
                    </div>
                    {/* Card content */}
                    <div className="pt-16 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-8 flex flex-col h-full">
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1C4B42] mb-2">
                        {system.title}
                      </h3>
                      <div className="text-base text-[#1C4B42]/80 font-medium mb-5 sm:mb-6">
                        {system.lead}
                      </div>
                      {/* Pictorial Problem → System → Result flow */}
                      {/* Bold vertical journey for Problem → System → Result */}
                      <div className="relative flex flex-col items-center w-full gap-0 py-2">
                        {/* Vertical connector line */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-20 bottom-20 w-2 bg-gradient-to-b from-[#b4d400]/30 via-[#1C4B42]/10 to-[#9EDC2A]/30 rounded-full z-0" style={{minHeight:'220px'}} />
                        {/* Problem */}
                        <div className="relative z-10 flex flex-col items-center text-center bg-white rounded-3xl shadow-2xl border-4 border-[#b4d400]/30 px-6 py-10 mb-10 w-full max-w-xl mx-auto">
                          <div className="mb-5 flex items-center justify-center w-20 h-20 rounded-full bg-[#fffbe6] border-4 border-[#b4d400]/40 shadow-lg">
                            {/* Lightbulb icon */}
                            <svg className="w-12 h-12 text-[#b4d400]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.5-3.5 5.5V18a1.5 1.5 0 0 1-3 0v-3.5C6.5 13.5 5 11.5 5 9a7 7 0 0 1 7-7Z" /><path d="M9 22h6" /></svg>
                          </div>
                          <span className="text-base font-bold uppercase tracking-wider text-[#b4d400] mb-2">Problem</span>
                          <span className="text-lg leading-8 text-[#0d3e2d]/90 font-medium">{system.problem}</span>
                        </div>
                        {/* System */}
                        <div className="relative z-10 flex flex-col items-center text-center bg-[#f8f6f1] rounded-3xl shadow-2xl border-4 border-[#1C4B42]/20 px-6 py-10 mb-10 w-full max-w-xl mx-auto">
                          <div className="mb-5 flex items-center justify-center w-20 h-20 rounded-full bg-[#e6f4ed] border-4 border-[#1C4B42]/30 shadow-lg">
                            {/* Gears icon */}
                            <svg className="w-12 h-12 text-[#1C4B42]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.5" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" /></svg>
                          </div>
                          <span className="text-base font-bold uppercase tracking-wider text-[#1C4B42] mb-2">System</span>
                          <span className="text-lg leading-8 text-[#0d3e2d]/90 font-medium">{system.system}</span>
                        </div>
                        {/* Result */}
                        <div className="relative z-10 flex flex-col items-center text-center bg-[#e6f4ed] rounded-3xl shadow-2xl border-4 border-[#9EDC2A]/30 px-6 py-10 w-full max-w-xl mx-auto">
                          <div className="mb-5 flex items-center justify-center w-20 h-20 rounded-full bg-[#fff] border-4 border-[#9EDC2A]/40 shadow-lg">
                            {/* Trophy icon */}
                            <svg className="w-12 h-12 text-[#9EDC2A]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M8 21h8M12 17v4M17 5V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2M21 5a3 3 0 0 1-2.24 2.9c-.5 2.28-2.5 4.1-6.76 4.1s-6.26-1.82-6.76-4.1A3 3 0 0 1 3 5" /></svg>
                          </div>
                          <span className="text-base font-bold uppercase tracking-wider text-[#9EDC2A] mb-2">Result</span>
                          <span className="text-lg leading-8 text-[#0d3e2d]/90 font-medium">{system.result}</span>
                        </div>
                      </div>
                    </div>
                    {/* Decorative floating effect */}
                    <div className="hidden sm:block absolute -z-1 -right-10 -bottom-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#9EDC2A]/10 blur-2xl opacity-60 group-hover:scale-110 transition-transform" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
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
              <Reveal delayMs={120} className="flex flex-col gap-4 sm:flex-row lg:flex-col">
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
