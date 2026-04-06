import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

const blocks = [
  {
    title: "Problem",
    text: "Education operations become fragmented—enrollment, administration, and communication run on disconnected tools.",
  },
  {
    title: "System",
    text: "A structured school operations suite that standardizes workflows and centralizes key data and communication.",
  },
  {
    title: "Result",
    text: "More consistent administration, clearer reporting, and improved stakeholder experience.",
  },
];

export default function SchoolSuitePage() {
  return (
    <>
      <PageHeader
        eyebrow="Product"
        title="School Suite"
        description="An education operations system designed to streamline processes and improve visibility across your institution."
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0146c7b2?auto=format&fit=crop&w=2400&q=80"
        breadcrumb={[
          { href: "/products", label: "Products" },
          { href: "/products/school-suite", label: "School Suite" },
        ]}
      />

      <section className="bg-[#f8f6f1]">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:items-center">
            {/* Image Section */}
            <Reveal className="order-2 lg:order-1">
              <div className="relative min-h-[320px] md:min-h-[380px] lg:min-h-[420px] rounded-2xl border border-[#1C4B42]/10 overflow-hidden bg-gradient-to-br from-[#1C4B42]/5 to-[#0d3e2d]/5 group">
                <img
                  src="https://avariodigitals.com/wp-content/uploads/2026/04/dashboard_full_1.png"
                  alt="School Suite"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Reveal>

            {/* Content Section */}
            <Reveal className="order-1 lg:order-2" delayMs={140}>
              <div>
                <div className="inline-flex items-center rounded-full border border-[#1C4B42]/20 bg-[#1C4B42]/5 px-4 py-2 mb-6">
                  <span className="text-xs font-semibold text-[#1C4B42] uppercase tracking-wider">
                    Education Operations
                  </span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-[#0d3e2d]">
                  One system for all institutional needs.
                </h2>
                <p className="mt-6 text-base leading-7 text-[#0d3e2d]/70">
                  School Suite consolidates enrollment, administration, communication, and reporting into one structured platform. No more fragmented workflows—your institution runs as a coordinated system.
                </p>
                <div className="mt-8 space-y-3">
                  {[
                    "Admission, enrollment, and record management",
                    "Attendance and academic tracking",
                    "Centralized communication and notices",
                    "Compliance reporting and analytics",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 text-sm text-[#0d3e2d]/70">
                      <span className="font-semibold text-[#9EDC2A] flex-shrink-0">+</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-5 md:grid-cols-3">
            {blocks.map((b, idx) => (
              <Reveal key={b.title} delayMs={100 + idx * 80}>
                <Card className="transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <div className="text-xs font-semibold text-black/60">{b.title}</div>
                  <div className="mt-3 font-heading text-lg font-semibold text-black">
                    {b.text}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <Card>
                <div className="font-heading text-lg font-semibold text-black">
                  Modules
                </div>
                <ul className="mt-3 space-y-3 text-sm leading-6 text-black/70">
                  <li>• Enrollment and admissions</li>
                  <li>• Attendance and records</li>
                  <li>• Communication and notices</li>
                  <li>• Reporting and compliance</li>
                </ul>
              </Card>
            </Reveal>
            <Reveal delayMs={140}>
              <Card>
                <div className="font-heading text-lg font-semibold text-black">
                  Deployment
                </div>
                <ol className="mt-3 space-y-3 text-sm leading-6 text-black/70">
                  <li>1. Audit processes and data</li>
                  <li>2. Configure modules and roles</li>
                  <li>3. Train admin and staff</li>
                  <li>4. Launch reporting and adoption</li>
                </ol>
              </Card>
            </Reveal>
          </div>
          <Reveal className="mt-10 rounded-[2rem] bg-gradient-to-br from-[#0d3e2d] to-[#0d2419] p-10 sm:p-12">
            <div className="font-heading text-sm font-semibold text-[#9EDC2A]">
              Next Step
            </div>
            <div className="mt-3 font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Map your operations into a single system.
            </div>
            <div className="mt-4 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
              We'll review your current workflows and define a structured rollout
              that fits your institution.
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="http://schoolsuite.com.ng/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#9EDC2A] px-8 py-3 font-semibold text-[#0d3e2d] hover:bg-white transition-colors whitespace-nowrap"
              >
                <span>Visit School Suite</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-8 py-3 font-semibold text-white hover:border-white/60 hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                Request Consultation
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
