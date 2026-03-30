import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";

const pillars = [
  {
    title: "Strategy",
    text: "We diagnose the growth bottleneck and define the system required to fix it.",
  },
  {
    title: "Technology",
    text: "We build the infrastructure that connects tools, data, and workflows into one operating model.",
  },
  {
    title: "Performance",
    text: "We measure outcomes and optimize the system based on evidence, not guesswork.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Avario is not a service provider. We are growth infrastructure."
        description="Avario Digitals is a strategy-led digital and technology growth company that designs and deploys structured systems for scalable business growth."
      />

      <section className="bg-white">
        <Container className="pb-14 sm:pb-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                What we build
              </h2>
              <p className="text-base leading-7 text-black/70">
                Many businesses operate with fragmented tools, inconsistent execution,
                and unclear metrics. We build the structured systems that fix that:
                acquisition systems, sales & CRM systems, operations systems, and
                technology infrastructure.
              </p>
              <p className="text-base leading-7 text-black/70">
                Our work is designed around one promise: measurable outcomes.
              </p>
              <div className="pt-2">
                <ButtonLink href="/contact">Request Consultation</ButtonLink>
              </div>
            </div>

            <div className="grid gap-5">
              {pillars.map((p) => (
                <Card key={p.title}>
                  <div className="font-heading text-lg font-semibold text-black">
                    {p.title}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-black/70">{p.text}</div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-3xl bg-avario-teal-tint p-10 sm:p-12">
            <div className="font-heading text-sm font-semibold text-avario-teal">
              Positioning
            </div>
            <div className="mt-3 font-heading text-2xl font-semibold tracking-tight text-black sm:text-3xl">
              Problems → Systems → Results.
            </div>
            <div className="mt-4 max-w-3xl text-sm leading-6 text-black/70 sm:text-base">
              We present systems that solve real business problems. Every deployment
              is structured to drive measurable outcomes across visibility,
              conversion, and scalable execution.
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
