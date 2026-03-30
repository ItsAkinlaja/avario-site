import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";

const blocks = [
  {
    title: "Problem",
    text: "Education operations become fragmented—enrollment, administration, and communication run on disconnected tools.",
  },
  {
    title: "System",
    text: "A structured school operations suite that standardizes workflows and centralizes key data and communication.",
  },
  {
    title: "Result",
    text: "More consistent administration, clearer reporting, and improved stakeholder experience.",
  },
];

export default function SchoolSuitePage() {
  return (
    <>
      <PageHeader
        eyebrow="Product"
        title="School Suite"
        description="An education operations system designed to streamline processes and improve visibility across your institution."
      />

      <section className="bg-white">
        <Container className="pb-14 sm:pb-16">
          <div className="grid gap-5 md:grid-cols-3">
            {blocks.map((b) => (
              <Card key={b.title}>
                <div className="text-xs font-semibold text-black/60">{b.title}</div>
                <div className="mt-3 font-heading text-lg font-semibold text-black">
                  {b.text}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-avario-teal-tint p-10 sm:p-12">
            <div className="font-heading text-sm font-semibold text-avario-teal">
              Next Step
            </div>
            <div className="mt-3 font-heading text-2xl font-semibold tracking-tight text-black sm:text-3xl">
              Map your operations into a single system.
            </div>
            <div className="mt-4 max-w-2xl text-sm leading-6 text-black/70 sm:text-base">
              We’ll review your current workflows and define a structured rollout
              that fits your institution.
            </div>
            <div className="mt-6">
              <ButtonLink href="/contact">Request Consultation</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
