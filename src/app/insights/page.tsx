import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import {
  getWpFeaturedImage,
  getWpList,
  getWpPrimaryCategory,
  stripWpHtml,
  type WpPost,
} from "@/lib/wp";
import { insights } from "@/content/insights";

type BlogCard = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  dateLabel?: string;
  image?: string | null;
};

function formatDateLabel(value?: string) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function toWpCards(posts: WpPost[]): BlogCard[] {
  return posts.map((post) => ({
    slug: post.slug,
    title: stripWpHtml(post.title.rendered),
    excerpt: stripWpHtml(post.excerpt?.rendered || post.content?.rendered),
    category: getWpPrimaryCategory(post) ?? "Insights",
    dateLabel: formatDateLabel(post.date) ?? undefined,
    image: getWpFeaturedImage(post),
  }));
}

function toFallbackCards(): BlogCard[] {
  return insights.map((post, index) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category ?? "Insights",
    dateLabel: ["Jan 8, 2026", "Jan 24, 2026", "Feb 10, 2026"][index],
    image: null,
  }));
}

export default async function InsightsPage() {
  const wpPosts = await getWpList<WpPost>("posts", { perPage: 12 });
  const posts = wpPosts.length ? toWpCards(wpPosts) : toFallbackCards();
  const featured = posts[0];
  const secondary = posts.slice(1, 4);
  const archive = posts.slice(4);

  return (
    <>
      <section className="overflow-hidden bg-[#1C4B42]">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
            <Reveal className="max-w-3xl">
              <div className="font-heading text-sm font-semibold uppercase tracking-[0.22em] text-[#9EDC2A]">
                Journal
              </div>
              <h1 className="mt-4 font-heading text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[4.4rem]">
                Avario thinking on systems, growth, and operational clarity.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
                This is where strategy becomes practical. The journal is built for
                founders and teams who want clearer growth systems, stronger
                execution, and better commercial decisions.
              </p>
            </Reveal>

            <Reveal delayMs={140}>
              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-7 backdrop-blur-sm shadow-[0_24px_60px_rgba(0,0,0,0.2)] sm:p-8">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9EDC2A]">
                  What you will find here
                </div>
                <div className="mt-4 space-y-4">
                  {[
                    "Clear perspectives on growth systems",
                    "Practical insight on sales, operations, and infrastructure",
                    "Thoughtful writing designed for decision-makers",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
                    >
                      <div className="font-heading text-2xl font-semibold text-white/24">
                        0{index + 1}
                      </div>
                      <div className="pt-1 text-sm leading-7 text-white/80 sm:text-base">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {featured ? (
        <section className="bg-[#f8f6f1]">
          <Container className="py-16 sm:py-20">
            <Reveal>
              <Link href={`/insights/${featured.slug}`} className="group block h-full">
                <article className="overflow-hidden rounded-2xl border border-[#1C4B42]/10 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="grid h-full gap-0 lg:grid-cols-[0.35fr_0.65fr]">
                    <div className="border-b border-[#1C4B42]/10 bg-gradient-to-br from-[#1C4B42] to-[#0d3e2d] flex flex-col justify-between p-8 text-white sm:p-10 lg:border-b-0 lg:border-r">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9EDC2A]">
                          Featured Article
                        </div>
                        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/56">
                          <span>{featured.category}</span>
                          {featured.dateLabel ? <span>{featured.dateLabel}</span> : null}
                        </div>
                        <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                          {featured.title}
                        </h2>
                        <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
                          {featured.excerpt}
                        </p>
                      </div>
                      <div className="mt-10 text-sm font-semibold text-[#9EDC2A]">
                        Read article
                      </div>
                    </div>

                    <div className="relative min-h-[300px] bg-[#1d3828]">
                      {featured.image ? (
                        <img
                          src={featured.image}
                          alt={featured.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-end bg-[linear-gradient(160deg,#1C4B42,#0d3e2d)] p-8">
                          <div className="font-heading text-5xl font-semibold tracking-tight text-white/12 sm:text-7xl">
                            Insights
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </Link>
            </Reveal>
          </Container>
        </section>
      ) : null}

      <section className="bg-[#f8f6f1]">
        <Container className="py-16 sm:py-20">
          <div className="grid items-stretch gap-8 lg:grid-cols-3 lg:gap-6">
            <Reveal>
              <div className="flex flex-col gap-3 rounded-2xl border border-[#1C4B42]/10 bg-white p-8">
                <div className="text-xs font-semibold uppercase tracking-widest text-[#1C4B42]">
                  Highlighted
                </div>
                <div className="mt-2 font-heading text-lg font-semibold text-[#0d3e2d]">
                  Latest Insights
                </div>
              </div>
            </Reveal>

            <div className="grid gap-5 lg:col-span-2">
              {secondary.map((post, index) => (
                <Reveal key={post.slug} delayMs={80 + index * 80}>
                  <Link href={`/insights/${post.slug}`} className="group block">
                    <div className="h-full rounded-2xl border border-[#1C4B42]/10 bg-white p-8 hover:bg-[#9EDC2A]/10 transition-colors">
                      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#1C4B42]">
                        <span>{post.category}</span>
                        {post.dateLabel ? <span>{post.dateLabel}</span> : null}
                      </div>
                      <div className="mt-4 font-heading text-2xl font-semibold tracking-tight text-[#0d3e2d]">
                        {post.title}
                      </div>
                      <div className="mt-3 text-sm leading-7 text-[#0d3e2d]/70 sm:text-base">
                        {post.excerpt}
                      </div>
                      <div className="mt-6 text-sm font-semibold text-[#1C4B42]">
                        Read article
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {archive.length ? (
        <section className="bg-white">
          <Container className="py-16 sm:py-20">
            <Reveal className="max-w-2xl mb-12">
              <div className="inline-flex items-center rounded-full border border-[#1C4B42]/20 bg-[#1C4B42]/5 px-4 py-2 mb-4">
                <span className="text-xs font-semibold text-[#1C4B42] uppercase tracking-wider">
                  Archive
                </span>
              </div>
              <h2 className="font-heading text-4xl font-semibold tracking-tight text-[#0d3e2d] sm:text-5xl">
                The conversation keeps <span className="text-[#9EDC2A]">moving forward</span>
              </h2>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {archive.map((post, index) => (
                <Reveal key={post.slug} delayMs={80 + index * 70}>
                  <Link href={`/insights/${post.slug}`} className="group block h-full">
                    <div className="flex h-full flex-col rounded-2xl border border-[#1C4B42]/10 bg-[#1C4B42]/5 p-8 hover:bg-[#9EDC2A]/10 transition-colors">
                      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#1C4B42]">
                        <span>{post.category}</span>
                        {post.dateLabel ? <span>{post.dateLabel}</span> : null}
                      </div>
                      <div className="mt-4 font-heading text-2xl font-semibold tracking-tight text-[#0d3e2d]">
                        {post.title}
                      </div>
                      <div className="mt-3 text-sm leading-7 text-[#0d3e2d]/70 sm:text-base">
                        {post.excerpt}
                      </div>
                      <div className="mt-6 text-sm font-semibold text-[#1C4B42]">
                        Read article
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="relative bg-white py-16 sm:py-20">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0d3e2d] to-[#0d2419] px-8 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <Reveal className="max-w-2xl">
                <div className="font-heading text-sm font-semibold uppercase tracking-widest text-[#b4d400]">
                  Next Step
                </div>
                <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Apply systems thinking to your <span className="text-[#b4d400]">business challenge</span>
                </h2>
                <p className="mt-5 text-base leading-7 text-white/80 sm:text-lg">
                  Our journal shares strategies and insights. To get personalized guidance, let&apos;s have a conversation about your specific situation.
                </p>
              </Reveal>

              <Reveal delayMs={120} className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#9EDC2A] px-8 py-3 font-semibold text-[#0d3e2d] hover:bg-white transition-colors whitespace-nowrap"
                >
                  <span>Request Consultation</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/growth-systems"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-8 py-3 font-semibold text-white hover:border-white/60 hover:bg-white/10 transition-colors whitespace-nowrap"
                >
                  Explore Systems
                </Link>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
