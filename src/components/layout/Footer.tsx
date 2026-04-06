import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-white">
      {/* CTA Section */}
      <div className="border-b border-black/10">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2">
                <Image
                  src="https://avariodigitals.com/wp-content/uploads/2022/10/cropped-cropped-AVArio-Logo-website-2.png"
                  alt="Avario Digitals"
                  width={220}
                  height={64}
                  unoptimized
                  className="h-8 w-auto"
                />
              </div>
              <h2 className="font-heading text-4xl font-bold leading-tight text-[#0d3e2d] sm:text-5xl">
                Ready to build <span className="text-[#9EDC2A]">structured systems</span>?
              </h2>
              <p className="mt-4 max-w-lg text-base text-black/70">
                We work with ambitious businesses ready to scale with control and discipline.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1C4B42] px-8 py-3 font-semibold text-white hover:bg-[#0d3e2d] transition-colors"
                >
                  <span>Request Consultation</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#1C4B42]">CONTACT US</div>
                <div className="mt-6 space-y-4">
                  <div>
                    <div className="text-xs font-semibold uppercase text-black/60">Our Phone</div>
                    <Link href="tel:+1-855-289-1111" className="mt-1 text-base font-medium text-[#1C4B42] hover:text-[#0d3e2d]">
                      +1 (855) 289-1111
                    </Link>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase text-black/60">Our Email</div>
                    <Link href="mailto:hello@avariodigitals.com" className="mt-1 text-base font-medium text-[#1C4B42] hover:text-[#0d3e2d]">
                      hello@avariodigitals.com
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-black/60">Hours</div>
                <div className="mt-6 space-y-2 text-sm text-black/70">
                  <div>Mon-Fri</div>
                  <div className="font-medium text-black">9:00am-6:00pm EST</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Navigation Section */}
      <Container className="py-12">
        <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="text-sm font-semibold text-black">Company</div>
            <div className="space-y-3 text-sm text-black/70">
              <Link href="/about" className="block hover:text-black">
                About
              </Link>
              <Link href="/insights" className="block hover:text-black">
                Insights
              </Link>
              <Link href="/case-studies" className="block hover:text-black">
                Case Studies
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-semibold text-black">Growth Systems</div>
            <div className="space-y-3 text-sm text-black/70">
              <Link href="/growth-systems" className="block hover:text-black">
                View All
              </Link>
              <Link href="/products/martpoint" className="block hover:text-black">
                MartPoint
              </Link>
              <Link href="/products/relavicx" className="block hover:text-black">
                RelaviCX
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-semibold text-black">Learn</div>
            <div className="space-y-3 text-sm text-black/70">
              <Link href="/contact" className="block hover:text-black">
                Contact
              </Link>
              <Link href="/growth-systems" className="block hover:text-black">
                Growth Systems
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-semibold text-black">Legal</div>
            <div className="space-y-3 text-sm text-black/70">
              <Link href="/" className="block hover:text-black">
                Terms & Conditions
              </Link>
              <Link href="/" className="block hover:text-black">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-black/10 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs text-black/60">
              © {new Date().getFullYear()} Avario Digitals. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black/60 hover:text-black">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9 0 9 0" />
                </svg>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black/60 hover:text-black">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black/60 hover:text-black">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a1 1 0 011-1h3z" />
                </svg>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black/60 hover:text-black">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
