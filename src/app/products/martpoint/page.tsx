import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";

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
              Explore fit and implementation.
            </div>
            <div className="mt-4 max-w-2xl text-sm leading-6 text-black/70 sm:text-base">
              Tell us your current workflow and where performance breaks. We’ll map
              a structured deployment plan.
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
