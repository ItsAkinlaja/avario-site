import { notFound } from "next/navigation";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { caseStudies } from "@/content/caseStudies";
import { Reveal } from "@/components/ui/Reveal";

export default function CaseStudyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const c = caseStudies.find((x) => x.slug === params.slug);
  if (!c) notFound();

  return (
    <>
      <PageHeader
        eyebrow="Case Study"
        title={c.title}
        description={c.industry ? `Industry: ${c.industry}` : undefined}
        bgImage="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=2400&q=80"
        breadcrumb={[
          { href: "/case-studies", label: "Case Studies" },
          { href: `/case-studies/${c.slug}`, label: c.title },
        ]}
      />

      <section className="bg-white">
        <Container className="pb-14 sm:pb-16">
          <div className="grid gap-5 lg:grid-cols-3">
            <Reveal>
              <Card>
                <div className="text-xs font-semibold text-black/60">Challenge</div>
                <div className="mt-3 text-sm leading-6 text-black/70">
                  {c.challenge}
                </div>
              </Card>
            </Reveal>
            <Reveal delayMs={120}>
              <Card className="border-avario-teal/30">
                <div className="text-xs font-semibold text-black/60">System</div>
                <div className="mt-3 text-sm leading-6 text-black/70">{c.system}</div>
              </Card>
            </Reveal>
            <Reveal delayMs={240}>
              <Card>
                <div className="text-xs font-semibold text-black/60">Result</div>
                <div className="mt-3 text-sm leading-6 text-black/70">{c.result}</div>
              </Card>
            </Reveal>
          </div>

          <div className="mt-10 rounded-3xl bg-avario-dark-teal p-10 sm:p-12">
            <div className="font-heading text-sm font-semibold text-white/80">
              Want the same outcome?
            </div>
            <div className="mt-3 font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Request a consultation and deploy a structured system.
            </div>
            <div className="mt-6">
              <ButtonLink
                href="/contact"
                className="bg-white text-avario-dark-teal hover:bg-white/90"
              >
                Request Consultation
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="pb-14 sm:pb-16">
          <div className="grid gap-6 lg:grid-cols-3">
            <Reveal>
              <Card>
                <div className="font-heading text-lg font-semibold text-black">
                  Key metrics
                </div>
                <ul className="mt-3 space-y-3 text-sm leading-6 text-black/70">
                  <li>• Lead capture rate and follow-up speed</li>
                  <li>• Stage conversion and pipeline health</li>
                  <li>• Delivery cycle time and exception rate</li>
                </ul>
              </Card>
            </Reveal>
            <Reveal delayMs={120}>
              <Card>
                <div className="font-heading text-lg font-semibold text-black">
                  System components
                </div>
                <ul className="mt-3 space-y-3 text-sm leading-6 text-black/70">
                  <li>• Acquisition + qualification</li>
                  <li>• Sales & CRM visibility</li>
                  <li>• Operations workflows</li>
                </ul>
              </Card>
            </Reveal>
            <Reveal delayMs={240}>
              <Card>
                <div className="font-heading text-lg font-semibold text-black">
                  Timeline
                </div>
                <div className="mt-3 text-sm leading-6 text-black/70">
                  Typical deployments complete in phases over 4–8 weeks with weekly
                  cadence and measurable milestones.
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
