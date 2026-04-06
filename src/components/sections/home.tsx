import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const trustedLogos = [
  "https://avariodigitals.com/wp-content/uploads/2022/10/prag-avario.png",
  "https://avariodigitals.com/wp-content/uploads/2022/10/logos-d-1.png",
  "https://avariodigitals.com/wp-content/uploads/2022/10/reliance-avario.png",
  "https://avariodigitals.com/wp-content/uploads/2022/10/5.png",
  "https://avariodigitals.com/wp-content/uploads/2022/10/4.png",
  "https://avariodigitals.com/wp-content/uploads/2022/10/1.png",
  "https://avariodigitals.com/wp-content/uploads/2023/10/image-removebg-preview-10.png",
  "https://avariodigitals.com/wp-content/uploads/elementor/thumbs/Parach-logo-r7hcbxfornv9lhbd2y8t0qhto0s6jpk5btvapwk73c.png",
  "https://avariodigitals.com/wp-content/uploads/2023/10/hD00wHDglwqou2lRfR29lgjtZzSvw1v8kThz10cw-1.png",
  "https://avariodigitals.com/wp-content/uploads/2023/10/Logo-Beejay.png",
  "https://avariodigitals.com/wp-content/uploads/2023/10/Funtaak-Diagnostics-Logo.png",
  "https://avariodigitals.com/wp-content/uploads/2023/10/hXtZxDLdNvg8_XwYSqGPhHSLUUvg6u7D8tixbqTCbjY_plaintext_638338363541017966.jpg",
  "https://avariodigitals.com/wp-content/uploads/2023/10/Deelogo-1.png",
  "https://avariodigitals.com/wp-content/uploads/2023/07/Physiofit-Logo-320-x-120-px-Brand-Colours-1.webp",
  "https://avariodigitals.com/wp-content/uploads/2023/07/Goldridgelogo.webp",
];

const values = [
  {
    title: "Structured Thinking",
    description:
      "We diagnose business problems systematically, then design integrated systems that solve them — not quick fixes.",
  },
  {
    title: "Measurable Results",
    description:
      "Every system we build is designed to drive concrete business outcomes — growth, efficiency, predictability.",
  },
  {
    title: "Strategic Execution",
    description:
      "We combine deep strategy with flawless implementation, ensuring your systems work as designed from day one.",
  },
  {
    title: "Long-term Partnership",
    description:
      "We're invested in your success. We don't just build systems and leave — we optimize them continuously.",
  },
];

export function HomeTrustedBy() {
  const track = [...trustedLogos, ...trustedLogos];
  return (
    <section className="border-y border-[#1C4B42]/20 bg-[#1C4B42]/5">
      <Container className="py-10 sm:py-12">
        <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <div className="font-heading text-sm font-semibold uppercase tracking-widest text-[#1C4B42]">
              Trusted by Teams Building Seriously
            </div>
            <p className="mt-2 max-w-sm text-sm leading-6 text-[#1C4B42]/80">
              Growing businesses rely on Avario to build the systems that transform effort into results.
            </p>
          </div>
          <div className="marquee-paused overflow-hidden">
            <div className="marquee-track">
              {track.map((src, i) => (
                <div key={`${src}-${i}`} className="flex items-center">
                  <Image
                    src={src}
                    alt={`Logo ${i + 1}`}
                    width={180}
                    height={56}
                    unoptimized
                    className="h-10 w-auto opacity-90 transition-opacity hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function HomeCTA() {
  return (
    <section className="bg-white">
      <Container className="py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0d3e2d] to-[#0d2419] px-8 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <Reveal className="max-w-2xl">
              <div className="font-heading text-sm font-semibold uppercase tracking-widest text-[#b4d400]">
                Let&apos;s Build Your Growth System
              </div>
              <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Tell us about your business — we&apos;ll help you <span className="text-[#b4d400]">build the right system</span>
              </h2>
              <p className="mt-5 text-base leading-7 text-white/80 sm:text-lg">
                From customer acquisition to operations and infrastructure — we&apos;re designing and deploying the systems that drive measurable growth.
              </p>
            </Reveal>

            <Reveal
              delayMs={120}
              className="flex flex-col gap-4 sm:flex-row lg:flex-col"
            >
              <ButtonLink
                href="/contact"
                variant="primary"
                size="lg"
                icon="arrow"
                className="bg-[#b4d400] text-[#0d3e2d] hover:bg-white"
              >
                Request Consultation
              </ButtonLink>
              <ButtonLink
                href="/case-studies"
                variant="secondary"
                size="lg"
                className="border-white/40 text-white hover:bg-white/10 hover:border-white/60"
              >
                View Case Studies
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function HomeValues() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        {/* Header */}
        <Reveal className="flex flex-col items-center mb-16 lg:mb-20">
          <div className="inline-flex items-center rounded-full border border-[#1C4B42]/20 bg-[#1C4B42]/5 px-4 py-2 mb-8">
            <span className="text-xs font-semibold text-[#1C4B42] uppercase tracking-wider">
              OUR VALUES
            </span>
          </div>
          
          <h2 className="max-w-4xl text-center font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#0d3e2d]">
            How We <span className="text-[#9EDC2A]">Build Systems</span> That Work
          </h2>
        </Reveal>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {values.map((value, index) => (
            <Reveal key={value.title} delayMs={80 + index * 80}>
              <div className="flex flex-col items-center text-center">
                {/* Circle Icon */}
                <div className="mb-6 flex h-20 w-20 items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="h-full w-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Left half - Teal filled */}
                    <circle cx="50" cy="50" r="45" fill="#1C4B42" />
                    
                    {/* Right half - White outline */}
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#1C4B42" strokeWidth="3" />
                    
                    {/* Lime striped pattern */}
                    <defs>
                      <pattern
                        id={`stripes-${index}`}
                        x="0"
                        y="0"
                        width="8"
                        height="8"
                        patternUnits="userSpaceOnUse"
                      >
                        <line x1="0" y1="0" x2="8" y2="8" stroke="#9EDC2A" strokeWidth="2" />
                      </pattern>
                    </defs>
                    
                    {/* Striped overlay on right half */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill={`url(#stripes-${index})`}
                      clipPath={`polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)`}
                    />
                  </svg>
                </div>

                {/* Card Content */}
                <div className="rounded-2xl border border-[#1C4B42]/10 bg-[#1C4B42]/5 p-6 sm:p-7 hover:bg-[#B4E717] transition-colors">
                  <h3 className="font-heading text-lg font-semibold text-[#1C4B42] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-6 text-[#13251a]/70">
                    {value.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function HomeSubscribe() {
  return (
    <section className="relative bg-white py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-[#1C4B42]">
        <div className="grid items-center gap-0 lg:grid-cols-2">
          {/* Left Content */}
          <Reveal className="relative z-10 px-8 py-12 sm:px-10 sm:py-16 lg:px-12">
            <div className="flex items-start gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9EDC2A]/20 flex-shrink-0">
                <svg className="w-5 h-5 text-[#9EDC2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/70">Stay Informed</h3>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
              Latest News & Resources
            </h2>

            <p className="text-lg text-white/80 mb-8 max-w-md">
              Get insights on growth systems, strategies, and execution directly to your inbox.
            </p>

            {/* Subscribe Form */}
            <form className="flex flex-col sm:flex-row gap-3 max-w-sm">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-6 py-3 rounded-full bg-white text-[#1C4B42] placeholder-[#1C4B42]/50 focus:outline-none focus:ring-2 focus:ring-[#9EDC2A]"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-[#9EDC2A] text-[#1C4B42] font-semibold rounded-full hover:bg-[#B4E717] transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>

            <p className="text-xs text-white/60 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </Reveal>

          {/* Right Image */}
          <Reveal delayMs={120} className="relative h-96 lg:h-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
              alt="Team collaboration"
              fill
              className="object-cover"
              unoptimized
            />
            {/* Dark overlay for image */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1C4B42]/30" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function HeroNext() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://via.placeholder.com/1920x1080?text=Avario+Team+Meeting"
          alt="Team meeting"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white mb-8">
            Investing For Tomorrow,{" "}
            <span className="text-[#b4d400]">Together</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <ButtonLink
              href="/contact"
              variant="primary"
              size="lg"
              icon="arrow"
              className="bg-[#1C4B42] text-white hover:bg-[#0d3e2d]"
            >
              Let&apos;s get started
            </ButtonLink>

            <Link
              href="/contact"
              className="text-white font-medium text-lg hover:text-[#b4d400] transition-colors"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
