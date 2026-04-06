import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { LeadForm } from "@/components/forms/LeadForm";
import { Reveal } from "@/components/ui/Reveal";

const bullets = [
  "Where growth is breaking (acquisition, sales, operations, or infrastructure)",
  "Which system should be deployed first",
  "What measurable outcome you should target",
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Request a consultation."
        description="This is a qualification step. We only take on work where we can deploy a system that drives measurable outcomes."
        bgImage="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2400&q=80"
        breadcrumb={[{ href: "/contact", label: "Contact" }]}
      />

      <section className="bg-white">
        <Container className="pb-14 sm:pb-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_520px] lg:items-start">
            <div className="space-y-5">
              <Reveal>
                <Card className="bg-avario-teal-tint">
                  <div className="font-heading text-lg font-semibold text-black">
                    What you’ll get
                  </div>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-black/70">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-avario-lime" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>

              <Reveal delayMs={120}>
                <Card>
                  <div className="font-heading text-lg font-semibold text-black">
                    Who it’s for
                  </div>
                  <div className="mt-3 text-sm leading-6 text-black/70">
                    Founders, SMEs, growth-stage companies, and institutions who want a
                    structured growth engine—not scattered execution.
                  </div>
                </Card>
              </Reveal>
            </div>

            <Reveal delayMs={80}>
              <Card className="p-8 sm:p-10">
                <div className="font-heading text-xl font-semibold text-black">
                  Lead Qualification Form
                </div>
                <div className="mt-2 text-sm leading-6 text-black/70">
                  Provide details so we can assess fit and respond with next steps.
                </div>
                <LeadForm className="mt-6" />
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="pb-14 sm:pb-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <Card className="border-[#1E7F4F]/20 bg-white">
                <div className="font-heading text-lg font-semibold text-[#1E7F4F]">
                  How qualification works
                </div>
                <ol className="mt-4 space-y-3 text-sm leading-6 text-black/70">
                  <li>1. Review your current growth setup</li>
                  <li>2. Identify the bottleneck across acquisition, sales, or ops</li>
                  <li>3. Recommend the first system to deploy</li>
                  <li>4. Outline measurable outcomes and adoption plan</li>
                </ol>
              </Card>
            </Reveal>
            <Reveal delayMs={140}>
              <Card className="border-[#1E7F4F]/20 bg-white">
                <div className="font-heading text-lg font-semibold text-[#1E7F4F]">
                  FAQs
                </div>
                <div className="mt-3 space-y-3 text-sm leading-6 text-black/70">
                  <div>
                    <div className="font-medium text-[#1C4B42]">How soon can we start?</div>
                    <div>After qualification, we define scope and timeline for deployment.</div>
                  </div>
                  <div>
                    <div className="font-medium text-[#1C4B42]">Do you integrate our tools?</div>
                    <div>Yes. We connect the tools you already use into a single system.</div>
                  </div>
                  <div>
                    <div className="font-medium text-black">Is this a service list?</div>
                    <div>No. We deploy systems with measurable outcomes, not services.</div>
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
