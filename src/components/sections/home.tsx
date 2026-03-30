import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function HomeHero() {
  return (
    <section
      className="relative isolate min-h-[620px] overflow-hidden bg-black sm:min-h-[680px] md:min-h-[720px]"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 46%, rgba(0,0,0,0.15) 100%), url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />
      <Container className="relative flex min-h-[620px] flex-col justify-between pb-10 pt-24 sm:min-h-[680px] sm:pb-14 sm:pt-32 md:min-h-[720px] md:pt-36">
        <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-black/30 p-6 backdrop-blur-sm sm:p-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-white/80">
            <span className="h-2 w-2 rounded-full bg-avario-lime" />
            Growth Infrastructure Company
          </div>
          <h1 className="mt-5 font-heading text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl sm:leading-tight">
            We Build Digital Systems, That Drive Growth.
          </h1>
          <div className="mt-5 h-px w-16 bg-white/25" />
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            Strategy, technology, and automation designed to scale serious
            businesses with structure and measurable outcomes.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-avario-teal px-5 py-3 text-sm font-medium text-white hover:bg-avario-dark-teal sm:w-fit"
            >
              Book a Strategy Call
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-avario-lime text-black">
                <span aria-hidden>↗</span>
              </span>
            </Link>
            <ButtonLink
              href="/growth-systems"
              className="w-full justify-center border-white/30 text-white hover:bg-white/10 hover:text-white sm:w-fit"
              variant="secondary"
            >
              Explore Growth Systems <span className="text-avario-lime">→</span>
            </ButtonLink>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white backdrop-blur">
            <div className="text-[11px] font-semibold tracking-wide text-white/70">
              TRUSTED PARTNER
            </div>
            <div className="mt-1 text-sm font-medium text-white/90">
              Structured deployment, not scattered execution
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white backdrop-blur">
            <div className="text-[11px] font-semibold tracking-wide text-white/70">
              GROWTH SYSTEMS
            </div>
            <div className="mt-1 text-sm font-medium text-white/90">
              Acquisition, sales, operations, infrastructure
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white backdrop-blur">
            <div className="text-[11px] font-semibold tracking-wide text-white/70">
              MEASURABLE OUTCOMES
            </div>
            <div className="mt-1 text-sm font-medium text-white/90">
              Visibility, conversion, and scalable growth
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function HomeProblem() {
  return (
    <section className="bg-avario-gray-50">
      <Container className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="font-heading text-sm font-semibold text-avario-teal">
            Problem
          </div>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            Most businesses grow without structure.
          </h2>
          <p className="mt-4 text-base leading-7 text-black/70 sm:text-lg">
            Leads are generated but not tracked. Sales lacks visibility. Operations
            are disconnected. Growth becomes inconsistent.
          </p>
        </div>
      </Container>
    </section>
  );
}

export function HomeSystem() {
  return (
    <section className="bg-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="font-heading text-sm font-semibold text-avario-teal">
              System
            </div>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-black sm:text-4xl">
              We design and deploy systems that align your entire growth engine.
            </h2>
            <p className="mt-4 text-base leading-7 text-black/70 sm:text-lg">
              Strategy, technology, and performance are integrated into one
              structured operating model so every part of the business can be
              measured and improved.
            </p>
            <div className="mt-6">
              <ButtonLink href="/growth-systems" variant="secondary">
                View Growth Systems
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-4">
            <Card>
              <div className="text-xs font-semibold text-black/60">
                What we build
              </div>
              <div className="mt-2 text-sm font-medium text-black">
                Structured acquisition, sales, operations, and infrastructure
                systems.
              </div>
            </Card>
            <Card>
              <div className="text-xs font-semibold text-black/60">
                How we work
              </div>
              <div className="mt-2 text-sm font-medium text-black">
                Diagnose the problem, deploy the system, track the result.
              </div>
            </Card>
            <Card className="border-avario-teal/30">
              <div className="text-xs font-semibold text-black/60">
                Core promise
              </div>
              <div className="mt-2 text-sm font-medium text-black">
                We build systems that deliver measurable growth.
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function HomeResult() {
  return (
    <section className="bg-white">
      <Container className="pb-14 sm:pb-16">
        <div className="rounded-3xl bg-avario-teal-tint p-10 sm:p-12">
          <div className="font-heading text-sm font-semibold text-avario-teal">
            Result
          </div>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            Better visibility. Stronger conversion. Scalable growth.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-black/70 sm:text-lg">
            When your business runs on systems, growth is no longer guesswork. You
            can see what works, improve what doesn’t, and scale with clarity.
          </p>
        </div>
      </Container>
    </section>
  );
}

const systems = [
  {
    title: "Acquisition Systems",
    text: "Capture leads, qualify intent, and route opportunities automatically.",
    href: "/growth-systems#acquisition",
  },
  {
    title: "Sales & CRM Systems",
    text: "Create pipeline visibility, follow-ups, and reporting with RelaviCX.",
    href: "/growth-systems#sales-crm",
  },
  {
    title: "Operations Systems",
    text: "Standardize delivery and reduce operational bottlenecks with workflows.",
    href: "/growth-systems#operations",
  },
  {
    title: "Infrastructure Systems",
    text: "Ship reliable software and automation infrastructure that scales.",
    href: "/growth-systems#infrastructure",
  },
];

export function HomeSystemsGrid() {
  return (
    <section className="bg-white">
      <Container className="py-14 sm:py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="font-heading text-sm font-semibold text-avario-teal">
              Core Systems
            </div>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-black sm:text-4xl">
              Systems that fix real growth problems.
            </h2>
          </div>
          <Link
            href="/growth-systems"
            className="hidden items-center gap-2 text-sm font-semibold text-avario-teal hover:text-avario-dark-teal md:inline-flex"
          >
            All systems <span className="text-avario-lime">→</span>
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {systems.map((s) => (
            <Link key={s.title} href={s.href} className="group">
              <Card className="h-full transition-shadow group-hover:shadow-md">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-heading text-lg font-semibold text-black">
                      {s.title}
                    </div>
                    <div className="mt-2 text-sm leading-6 text-black/70">
                      {s.text}
                    </div>
                  </div>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-avario-teal-tint text-avario-teal">
                    <span className="text-avario-lime">→</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

const casePreviews = [
  {
    title: "Lead Capture → Pipeline Visibility",
    slug: "lead-to-pipeline-visibility",
    result:
      "Unified acquisition + CRM flow to reduce lead leakage and improve follow-up speed.",
  },
  {
    title: "Operations System → Delivery Consistency",
    slug: "operations-delivery-consistency",
    result: "Standardized workflows with automation for predictable execution.",
  },
  {
    title: "Infrastructure → Scalable Launches",
    slug: "infrastructure-scalable-launches",
    result:
      "Performance-first web and system architecture that scales with demand.",
  },
];

export function HomeCasePreview() {
  return (
    <section className="bg-white">
      <Container className="py-14 sm:py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="font-heading text-sm font-semibold text-avario-teal">
              Proof
            </div>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-black sm:text-4xl">
              Outcomes, not outputs.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-black/70">
              Every case study follows a clear flow: challenge → system → result.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="hidden items-center gap-2 text-sm font-semibold text-avario-teal hover:text-avario-dark-teal md:inline-flex"
          >
            View all <span className="text-avario-lime">→</span>
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {casePreviews.map((c) => (
            <Link key={c.slug} href={`/case-studies/${c.slug}`} className="group">
              <Card className="h-full transition-shadow group-hover:shadow-md">
                <div className="font-heading text-lg font-semibold text-black">
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
  );
}

const steps = [
  {
    title: "Diagnose",
    text: "Identify the bottleneck across acquisition, sales, or operations.",
  },
  {
    title: "Design",
    text: "Map the system and define how data, people, and tools should connect.",
  },
  {
    title: "Deploy",
    text: "Implement the infrastructure with clean, structured execution.",
  },
  {
    title: "Optimize",
    text: "Measure performance and improve continuously based on evidence.",
  },
];

export function HomeHowWeWork() {
  return (
    <section className="bg-avario-gray-50">
      <Container className="py-14 sm:py-16">
        <div>
          <div className="font-heading text-sm font-semibold text-avario-teal">
            How We Work
          </div>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            Clear process. Structured delivery.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {steps.map((s, idx) => (
            <Card key={s.title} className="bg-white">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-avario-teal-tint font-heading text-sm font-semibold text-avario-teal">
                {idx + 1}
              </div>
              <div className="mt-4 font-heading text-lg font-semibold text-black">
                {s.title}
              </div>
              <div className="mt-2 text-sm leading-6 text-black/70">{s.text}</div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function HomeCTA() {
  return (
    <section className="bg-avario-dark-teal">
      <Container className="py-14 sm:py-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <div className="font-heading text-sm font-semibold text-white/80">
              Next Step
            </div>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Request a consultation and get a clear system roadmap.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/80">
              If you’re serious about measurable growth, we’ll help you identify the
              bottleneck, define the system, and plan the deployment.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <ButtonLink href="/contact" className="bg-white text-avario-dark-teal hover:bg-white/90">
              Request Consultation
            </ButtonLink>
            <ButtonLink
              href="/growth-systems"
              variant="secondary"
              className="border-white/60 text-white hover:bg-white/10"
            >
              Explore Systems
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
