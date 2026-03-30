import Link from "next/link";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { caseStudies } from "@/content/caseStudies";

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="Problem → System → Result."
        description="A clear view of how structured systems create measurable outcomes."
      />

      <section className="bg-white">
        <Container className="pb-14 sm:pb-16">
          <div className="grid gap-5 md:grid-cols-3">
            {caseStudies.map((c) => (
              <Link key={c.slug} href={`/case-studies/${c.slug}`} className="group">
                <Card className="h-full transition-shadow group-hover:shadow-md">
                  <div className="text-xs font-semibold text-black/60">
                    {c.industry ?? "Case Study"}
                  </div>
                  <div className="mt-3 font-heading text-lg font-semibold text-black">
                    {c.title}
                  </div>
                  <div className="mt-3 text-sm leading-6 text-black/70">
                    {c.result}
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-avario-teal group-hover:text-avario-dark-teal">
                    Read case <span className="text-avario-lime">→</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
