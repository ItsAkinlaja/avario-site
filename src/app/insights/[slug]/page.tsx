import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { insights } from "@/content/insights";

export default function InsightDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = insights.find((x) => x.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <PageHeader
        eyebrow={post.category ?? "Insight"}
        title={post.title}
        description={post.excerpt}
      />

      <section className="bg-white">
        <Container className="pb-14 sm:pb-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <article className="space-y-4">
              {post.content.map((p) => (
                <p key={p} className="text-base leading-7 text-black/80">
                  {p}
                </p>
              ))}

              <div className="mt-8 rounded-3xl bg-avario-teal-tint p-10 sm:p-12">
                <div className="font-heading text-sm font-semibold text-avario-teal">
                  Apply this
                </div>
                <div className="mt-3 font-heading text-2xl font-semibold tracking-tight text-black sm:text-3xl">
                  Build a structured system for your growth engine.
                </div>
                <div className="mt-4 text-sm leading-6 text-black/70 sm:text-base">
                  If your growth is inconsistent, the bottleneck is usually a missing
                  system across acquisition, sales, or operations.
                </div>
                <div className="mt-6">
                  <ButtonLink href="/contact">Request Consultation</ButtonLink>
                </div>
              </div>
            </article>

            <aside className="space-y-5">
              <Card>
                <div className="text-xs font-semibold text-black/60">Explore</div>
                <div className="mt-3 space-y-3 text-sm font-medium text-black/80">
                  <Link href="/growth-systems" className="block hover:text-black">
                    Growth Systems
                  </Link>
                  <Link href="/products/relavicx" className="block hover:text-black">
                    RelaviCX CRM
                  </Link>
                  <Link href="/case-studies" className="block hover:text-black">
                    Case Studies
                  </Link>
                </div>
              </Card>

              <Card className="border-avario-teal/30">
                <div className="text-xs font-semibold text-black/60">Next</div>
                <div className="mt-3 text-sm leading-6 text-black/70">
                  Get a clear roadmap for deployment with a consultation call.
                </div>
                <div className="mt-5">
                  <ButtonLink href="/contact" variant="secondary">
                    Request Consultation <span className="text-avario-lime">→</span>
                  </ButtonLink>
                </div>
              </Card>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
