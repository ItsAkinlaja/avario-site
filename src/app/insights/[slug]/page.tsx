import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import {
  getWpBySlug,
  getWpFeaturedImage,
  getWpPrimaryCategory,
  stripWpHtml,
  type WpPost,
} from "@/lib/wp";
import { insights } from "@/content/insights";

function formatDateLabel(value?: string) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function fallbackPost(slug: string) {
  const post = insights.find((item) => item.slug === slug);
  if (!post) return null;

  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category ?? "Insights",
    dateLabel: undefined as string | undefined,
    image: null as string | null,
    html: post.content
      .map((paragraph) => `<p>${paragraph}</p>`)
      .join(""),
  };
}

function wpPostToViewModel(post: WpPost) {
  return {
    slug: post.slug,
    title: stripWpHtml(post.title.rendered),
    excerpt: stripWpHtml(post.excerpt?.rendered || post.content?.rendered),
    category: getWpPrimaryCategory(post) ?? "Insights",
    dateLabel: formatDateLabel(post.date) ?? undefined,
    image: getWpFeaturedImage(post),
    html: post.content?.rendered ?? "",
  };
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const wpPost = await getWpBySlug<WpPost>("posts", slug);
  const post = wpPost ? wpPostToViewModel(wpPost) : fallbackPost(slug);

  if (!post) notFound();

  return (
    <>
      <section className="overflow-hidden bg-[#f6efe3]">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div className="max-w-3xl">
              <Link
                href="/insights"
                className="text-xs font-semibold uppercase tracking-[0.18em] text-avario-teal hover:text-avario-dark-teal"
              >
                Back to Journal
              </Link>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#13251a]/58">
                <span>{post.category}</span>
                {post.dateLabel ? <span>{post.dateLabel}</span> : null}
              </div>
              <h1 className="mt-4 font-heading text-4xl font-semibold leading-[1.04] tracking-tight text-[#13251a] sm:text-6xl">
                {post.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#13251a]/72 sm:text-lg">
                {post.excerpt}
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#13251a]/10 bg-white shadow-[0_24px_60px_rgba(19,37,26,0.08)]">
              {post.image ? (
                <div
                  className="min-h-[280px] bg-cover bg-center sm:min-h-[340px]"
                  style={{ backgroundImage: `url('${post.image}')` }}
                />
              ) : (
                <div className="flex min-h-[280px] items-end bg-[linear-gradient(160deg,#2b533b,#13251a)] p-8 sm:min-h-[340px]">
                  <div className="font-heading text-5xl font-semibold text-white/12 sm:text-7xl">
                    Journal
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
            <article
              className="journal-content text-base leading-8 text-[#13251a]/82"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            <aside className="space-y-5">
              <Card className="rounded-[1.8rem] border-black/8 bg-[#fcfaf5] p-7 shadow-none">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-avario-teal/72">
                  Explore
                </div>
                <div className="mt-4 space-y-3 text-sm font-medium text-[#13251a]/80">
                  <Link href="/growth-systems" className="block hover:text-[#13251a]">
                    Growth Systems
                  </Link>
                  <Link href="/products" className="block hover:text-[#13251a]">
                    Products
                  </Link>
                  <Link href="/case-studies" className="block hover:text-[#13251a]">
                    Case Studies
                  </Link>
                </div>
              </Card>

              <Card className="rounded-[1.8rem] border-black/8 bg-[#eef3ed] p-7 shadow-none">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-avario-teal/72">
                  Build with clarity
                </div>
                <div className="mt-4 font-heading text-2xl font-semibold tracking-tight text-[#13251a]">
                  Turn insight into a stronger growth system.
                </div>
                <div className="mt-3 text-sm leading-7 text-[#13251a]/70">
                  If the bottleneck is already visible, the next step is to map the
                  right operating structure around it.
                </div>
                <div className="mt-6">
                  <ButtonLink href="/contact">Request Consultation</ButtonLink>
                </div>
              </Card>

              <Card className="rounded-[1.8rem] border-black/8 bg-white p-7 shadow-none">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-avario-teal/72">
                  Keep reading
                </div>
                <div className="mt-4 text-sm leading-7 text-[#13251a]/70">
                  The journal is designed for founders and teams who want better
                  decisions across acquisition, sales, operations, and infrastructure.
                </div>
                <div className="mt-5">
                  <Link
                    href="/insights"
                    className="text-sm font-semibold text-avario-teal hover:text-avario-dark-teal"
                  >
                    View all articles
                  </Link>
                </div>
              </Card>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
