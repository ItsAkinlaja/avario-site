import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { LeadForm } from "@/components/forms/LeadForm";

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
      />

      <section className="bg-white">
        <Container className="pb-14 sm:pb-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_520px] lg:items-start">
            <div className="space-y-5">
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

              <Card>
                <div className="font-heading text-lg font-semibold text-black">
                  Who it’s for
                </div>
                <div className="mt-3 text-sm leading-6 text-black/70">
                  Founders, SMEs, growth-stage companies, and institutions who want a
                  structured growth engine—not scattered execution.
                </div>
              </Card>
            </div>

            <Card className="p-8 sm:p-10">
              <div className="font-heading text-xl font-semibold text-black">
                Lead Qualification Form
              </div>
              <div className="mt-2 text-sm leading-6 text-black/70">
                Provide details so we can assess fit and respond with next steps.
              </div>
              <LeadForm className="mt-6" />
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
