import { notFound } from "next/navigation";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { caseStudies } from "@/content/caseStudies";

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
      />

      <section className="bg-white">
        <Container className="pb-14 sm:pb-16">
          <div className="grid gap-5 lg:grid-cols-3">
            <Card>
              <div className="text-xs font-semibold text-black/60">Challenge</div>
              <div className="mt-3 text-sm leading-6 text-black/70">
                {c.challenge}
              </div>
            </Card>
            <Card className="border-avario-teal/30">
              <div className="text-xs font-semibold text-black/60">System</div>
              <div className="mt-3 text-sm leading-6 text-black/70">{c.system}</div>
            </Card>
            <Card>
              <div className="text-xs font-semibold text-black/60">Result</div>
              <div className="mt-3 text-sm leading-6 text-black/70">{c.result}</div>
            </Card>
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
    </>
  );
}
