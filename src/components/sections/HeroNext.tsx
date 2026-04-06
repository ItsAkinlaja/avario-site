import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function HeroNext() {
  return (
    <>
      {/* Text Section - Compact */}
      <section className="relative bg-white pt-16 lg:pt-24 pb-6 lg:pb-8">
        <Container className="relative z-10">
          <div className="max-w-full">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold leading-snug text-[#0d3e2d] flex-1">
                We Build Systems That<br />Drive <span className="text-[#b4d400]">Business Growth</span>
              </h1>

              <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center lg:items-center flex-shrink-0 w-full lg:w-auto">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button className="bg-[#1C4B42] text-white hover:bg-[#0d3e2d] px-4 sm:px-6 py-3 w-full sm:w-auto text-sm sm:text-base">
                      <span>Request Consultation</span>
                    </Button>
                  </Link>
                  
                  <Link href="/contact" className="flex items-center justify-center w-12 h-12 rounded-full bg-[#b4d400] text-[#0d3e2d] hover:bg-[#a8c900] transition-colors flex-shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.5 1L14 6.5M14 6.5L8.5 12M14 6.5H1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>

                <Link
                  href="/case-studies"
                  className="px-4 sm:px-6 py-3 bg-[#b4d400]/20 text-[#0d3e2d] font-normal text-sm lg:text-base hover:bg-[#b4d400]/30 transition-colors rounded-full inline-flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Image Section with Stats Cards */}
      <section className="relative h-64 sm:h-80 lg:h-screen w-full overflow-visible mb-20 sm:mb-24 lg:mb-0">
        <Image
          src="https://avariodigitals.com/wp-content/uploads/2026/04/vitaly-gariev-K0aM-ztA76Q-unsplash-scaled.jpg"
          alt="Team meeting"
          fill
          className="object-cover object-center"
          priority
        />
        
        {/* Cards Overlay */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20 px-3 sm:px-4 lg:px-0">
          <Container className="max-w-full">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-4 lg:gap-3 auto-cols-fr">
              {/* Systems Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg">
                <h3 className="text-[#0d3e2d] font-semibold text-xs sm:text-sm mb-1">Systems</h3>
                <p className="text-[#0d3e2d]/70 text-xs mb-2">Growth systems<br />deployed</p>
                <p className="text-lg sm:text-2xl lg:text-3xl font-semibold text-[#0d3e2d] mb-3">150+</p>
                <Link href="#" className="text-[#b4d400] font-medium text-xs sm:text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn more
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 1L14 6.5M14 6.5L8.5 12M14 6.5H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>

              {/* Decorative Green Card */}
              <div className="bg-gradient-to-br from-[#1C4B42] to-[#0d3e2d] rounded-2xl p-4 sm:p-6 hidden lg:block relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="flex gap-1">
                      {Array.from({length: 3}).map((_, i) => (
                        <div key={i} className="flex flex-col gap-1">
                          {Array.from({length: 4}).map((_, j) => (
                            <div key={j} className="w-1 h-2 bg-[#b4d400]"></div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg overflow-hidden relative flex flex-col">
                <div className="z-10">
                  <h3 className="text-[#0d3e2d] font-semibold text-xs sm:text-sm mb-1">Team</h3>
                  <p className="text-lg sm:text-3xl lg:text-4xl font-semibold text-[#0d3e2d] mb-2">15+</p>
                  <p className="text-[#0d3e2d]/70 text-xs">Professional</p>
                </div>
                <div className="relative flex-1 -mx-4 -mb-4 sm:-mx-6 sm:-mb-6 mt-2 hidden lg:block">
                  <Image
                    src="https://avariodigitals.com/wp-content/uploads/2022/11/image-removebg-preview-19.png"
                    alt="Professional"
                    width={200}
                    height={150}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Decorative Spacer Card */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hidden lg:block"></div>

              {/* Systems Card */}
              <div className="bg-gradient-to-br from-[#f6efe3] to-[#f5f2e8] rounded-2xl p-4 sm:p-6 shadow-lg col-span-2 sm:col-span-1 lg:col-span-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/5 rounded-2xl"></div>
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <p className="text-xs text-[#0d3e2d]/70 mb-2">Since 2016</p>
                  <div>
                    <p className="text-lg sm:text-2xl lg:text-3xl font-semibold text-[#0d3e2d] leading-tight">Building the right systems</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}
