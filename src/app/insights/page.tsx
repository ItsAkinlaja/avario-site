import Link from "next/link";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { insights } from "@/content/insights";

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Clear thinking on systems and growth."
        description="Practical, outcome-focused insights on building growth infrastructure."
      />

      <section className="bg-white">
        <Container className="pb-14 sm:pb-16">
          <div className="grid gap-5 md:grid-cols-3">
            {insights.map((p) => (
              <Link key={p.slug} href={`/insights/${p.slug}`} className="group">
                <Card className="h-full transition-shadow group-hover:shadow-md">
                  <div className="text-xs font-semibold text-black/60">
                    {p.category ?? "Insight"}
                  </div>
                  <div className="mt-3 font-heading text-lg font-semibold text-black">
                    {p.title}
                  </div>
                  <div className="mt-3 text-sm leading-6 text-black/70">
                    {p.excerpt}
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-avario-teal group-hover:text-avario-dark-teal">
                    Read <span className="text-avario-lime">→</span>
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
