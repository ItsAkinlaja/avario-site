import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { caseStudies } from "@/content/caseStudies";

const proofNotes = [
  {
    title: "Problem first",
    text: "Each case begins with the business friction that was slowing growth, conversion, or execution.",
  },
  {
    title: "System next",
    text: "The intervention is always structural. The goal is to improve how the business works, not just what tool it uses.",
  },
  {
    title: "Result always",
    text: "Outcomes are framed around visibility, speed, consistency, and the operating confidence the team gains after deployment.",
  },
];

export default function CaseStudiesPage() {
  const featured = caseStudies[0];
  const remaining = caseStudies.slice(1);

  return (
    <>
      <section className="overflow-hidden bg-[#1C4B42] text-white">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <Reveal className="max-w-3xl">
              <div className="font-heading text-sm font-semibold uppercase tracking-[0.22em] text-[#9EDC2A]">
                Case Studies
              </div>
              <h1 className="mt-4 font-heading text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[4.5rem]">
                Proof: How systems change business performance.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
                Each case study shows a real business challenge, the system Avario built to solve it, and the measurable outcome that followed.
              </p>
            </Reveal>

            <Reveal delayMs={140}>
              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-7 backdrop-blur-sm shadow-[0_24px_60px_rgba(0,0,0,0.2)] sm:p-8">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9EDC2A]">
                  What the cases show
                </div>
                <div className="mt-4 space-y-4">
                  {[
                    "How Avario diagnoses bottlenecks clearly",
                    "How systems are designed around real operations",
                    "How better structure creates measurable business movement",
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

      {featured ? (
        <section className="bg-[#f8f6f1]">
          <Container className="py-16 sm:py-20">
            <Reveal>
              <Link href={`/case-studies/${featured.slug}`} className="group block">
                <article className="overflow-hidden rounded-2xl border border-[#1C4B42]/10 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="grid gap-0 lg:grid-cols-[0.35fr_0.65fr]">
                    <div className="border-b border-[#1C4B42]/10 bg-gradient-to-br from-[#1C4B42] to-[#0d3e2d] p-8 text-white sm:p-10 lg:border-b-0 lg:border-r">
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9EDC2A]">
                        Featured case
                      </div>
                      <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/56">
                        <span>{featured.industry ?? "Case Study"}</span>
                        <span>Problem to outcome</span>
                      </div>
                      <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                        {featured.title}
                      </h2>

                      <div className="mt-10">
                        <div className="text-sm font-semibold text-[#9EDC2A]">
                          Read full case
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-px bg-[#f0ede7] sm:grid-cols-3">
                      <div className="bg-white p-8 sm:p-10">
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1C4B42]">
                          Challenge
                        </div>
                        <div className="mt-4 text-sm leading-7 text-[#0d3e2d]/70 sm:text-base">
                          {featured.challenge}
                        </div>
                      </div>
                      <div className="bg-[#faf8f5] p-8 sm:p-10">
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1C4B42]">
                          System
                        </div>
                        <div className="mt-4 text-sm leading-7 text-[#0d3e2d]/70 sm:text-base">
                          {featured.system}
                        </div>
                      </div>
                      <div className="bg-[#f5f2ed] p-8 sm:p-10">
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1C4B42]">
                          Result
                        </div>
                        <div className="mt-4 text-sm leading-7 text-[#0d3e2d]/70 sm:text-base">
                          {featured.result}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </Reveal>
          </Container>
        </section>
      ) : null}

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <Reveal className="max-w-2xl mb-12">
            <div className="inline-flex items-center rounded-full border border-[#1C4B42]/20 bg-[#1C4B42]/5 px-4 py-2 mb-4">
              <span className="text-xs font-semibold text-[#1C4B42] uppercase tracking-wider">
                More Proof
              </span>
            </div>
            <h2 className="font-heading text-4xl font-semibold tracking-tight text-[#0d3e2d] sm:text-5xl">
              Different industries. Same <span className="text-[#9EDC2A]">discipline around structure</span>.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {remaining.map((study, index) => (
              <Reveal key={study.slug} delayMs={80 + index * 80}>
                <Link href={`/case-studies/${study.slug}`} className="group block h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-[#1C4B42]/10 bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                    <div className="border-b border-[#1C4B42]/10 p-8 sm:p-10">
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1C4B42]">
                        {study.industry ?? "Case Study"}
                      </div>
                      <div className="mt-4 font-heading text-3xl font-semibold tracking-tight text-[#0d3e2d]">
                        {study.title}
                      </div>
                    </div>
                    <div className="grid gap-px bg-[#f0ede7] sm:grid-cols-3">
                      <div className="bg-white p-6">
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1C4B42]">
                          Problem
                        </div>
                        <div className="mt-3 text-sm leading-7 text-[#0d3e2d]/70">
                          {study.challenge}
                        </div>
                      </div>
                      <div className="bg-[#faf8f5] p-6">
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1C4B42]">
                          System
                        </div>
                        <div className="mt-3 text-sm leading-7 text-[#0d3e2d]/70">
                          {study.system}
                        </div>
                      </div>
                      <div className="bg-[#f5f2ed] p-6">
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1C4B42]">
                          Result
                        </div>
                        <div className="mt-3 text-sm leading-7 text-[#0d3e2d]/70">
                          {study.result}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
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
                How We Approach Cases
              </span>
            </div>
            <h2 className="max-w-4xl mx-auto font-heading text-4xl sm:text-5xl font-bold leading-tight text-[#0d3e2d]">
              Every case follows the same <span className="text-[#9EDC2A]">framework</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {proofNotes.map((item, index) => (
              <Reveal key={item.title} delayMs={80 + index * 80}>
                <div className="rounded-2xl border border-[#1C4B42]/10 bg-[#1C4B42]/5 p-8 hover:bg-[#9EDC2A]/10 transition-colors">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1C4B42]">
                    Approach 0{index + 1}
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

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0d3e2d] to-[#0d2419] px-8 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <Reveal className="max-w-2xl">
                <div className="font-heading text-sm font-semibold uppercase tracking-widest text-[#b4d400]">
                  Recognize your challenge?
                </div>
                <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  If your bottleneck looks familiar, we can <span className="text-[#b4d400]">map the system</span>
                </h2>
                <p className="mt-5 text-base leading-7 text-white/80 sm:text-lg">
                  The point of these cases is to show how disciplined structure creates growth, clarity, and better operational control.
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
                  href="/growth-systems"
                  variant="secondary"
                  size="lg"
                  className="border-white/40 text-white hover:bg-white/10 hover:border-white/60"
                >
                  Explore Systems
                </ButtonLink>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
