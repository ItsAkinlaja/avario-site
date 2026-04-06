 "use client";

import Link from "next/link";
import Image from "next/image";
import { useId, useState } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const links = [
  { href: "/growth-systems", label: "Growth Systems" },
  { href: "/products", label: "Products" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export function Navbar({ className }: { className?: string }) {
  const menuId = useId();
  const desktopMenuId = useId();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(false);

  return (
    <header
      className={cn("sticky top-0 z-50 bg-white/90 backdrop-blur relative", className)}
    >
      <div className="border-b border-black/10">
        <Container className="flex h-16 items-center gap-8">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="https://avariodigitals.com/wp-content/uploads/2022/10/cropped-cropped-AVArio-Logo-website-2.png"
              alt="Avario Digitals"
              width={160}
              height={48}
              unoptimized
              priority
              className="h-8 w-auto"
            />
          </Link>

          <nav className="hidden items-center justify-center gap-8 lg:flex flex-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-black/70 hover:text-black"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 lg:hidden ml-auto">
            {/* Search icon - mobile */}
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-black/70 hover:text-black transition-colors"
              aria-label="Search"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            {/* Mobile hamburger - only on small screens */}
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1C4B42] text-white hover:text-[#b4d400] transition-colors"
              aria-label="Open menu"
              aria-controls={menuId}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Grid pattern - 3x3 dots */}
                <circle cx="6" cy="6" r="2" fill="currentColor" />
                <circle cx="12" cy="6" r="2" fill="currentColor" />
                <circle cx="18" cy="6" r="2" fill="currentColor" />
                <circle cx="6" cy="12" r="2" fill="currentColor" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
                <circle cx="18" cy="12" r="2" fill="currentColor" />
                <circle cx="6" cy="18" r="2" fill="currentColor" />
                <circle cx="12" cy="18" r="2" fill="currentColor" />
                <circle cx="18" cy="18" r="2" fill="currentColor" />
              </svg>
            </button>
          </div>

          <div className="hidden items-center gap-2 lg:flex ml-auto">
            {/* Search icon - desktop (larger) */}
            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/5 text-black/70 hover:text-black transition-colors"
              aria-label="Search"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            {/* Desktop hamburger - only on large screens (larger) */}
            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1C4B42] text-white hover:text-[#b4d400] transition-colors"
              aria-label="Open menu"
              aria-controls={desktopMenuId}
              aria-expanded={desktopOpen}
              onClick={() => setDesktopOpen((v) => !v)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Grid pattern - 3x3 dots */}
                <circle cx="6" cy="6" r="2" fill="currentColor" />
                <circle cx="12" cy="6" r="2" fill="currentColor" />
                <circle cx="18" cy="6" r="2" fill="currentColor" />
                <circle cx="6" cy="12" r="2" fill="currentColor" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
                <circle cx="18" cy="12" r="2" fill="currentColor" />
                <circle cx="6" cy="18" r="2" fill="currentColor" />
                <circle cx="12" cy="18" r="2" fill="currentColor" />
                <circle cx="18" cy="18" r="2" fill="currentColor" />
              </svg>
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile menu - slides down (lg:hidden) */}
      <div
        id={menuId}
        className={cn(
          "lg:hidden overflow-hidden border-b border-black/10 bg-white/95 backdrop-blur transition-[max-height,opacity] duration-300 ease-out",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <Container className="py-4">
          <nav className="grid gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-black/70 hover:bg-black/5 hover:text-black"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-avario-teal px-5 py-3 text-sm font-medium text-white hover:bg-avario-dark-teal"
              onClick={() => setMobileOpen(false)}
            >
              Request Consultation
            </Link>
          </div>
        </Container>
      </div>

      {/* Desktop side menu - slides in from right (hidden lg:flex) - Contact info only */}
      <div className="hidden lg:block">
        {/* Backdrop */}
        <div
          className={cn(
            "fixed inset-0 z-40 bg-black/20 transition-opacity duration-300 ease-out",
            desktopOpen ? "opacity-100" : "pointer-events-none opacity-0",
          )}
          onClick={() => setDesktopOpen(false)}
        />

        {/* Slide-in tray panel - Contact info with circular images */}
        <div
          id={desktopMenuId}
          className={cn(
            "fixed right-0 top-16 z-40 h-[calc(100vh-64px)] w-96 border-l border-black/10 bg-white shadow-lg overflow-y-auto transition-transform duration-300 ease-out",
            desktopOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="p-8 space-y-6">
            {/* Close button */}
            <button
              onClick={() => setDesktopOpen(false)}
              className="absolute top-6 right-6 h-8 w-8 rounded-full bg-white border border-black/10 flex items-center justify-center text-black/70 hover:text-black hover:bg-black/5 transition-all z-50"
              aria-label="Close menu"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            {/* Circular Image Container - Team Arrangement */}
            <div className="relative mx-auto h-64 w-64 flex items-center justify-center">
              {/* Center image - main contact image */}
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
                  alt="Team collaboration"
                  fill
                  className="rounded-full object-cover"
                />
              </div>

              {/* Top left - rotated position */}
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg z-10 -rotate-12">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Top right - rotated position */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg z-10 rotate-12">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom left - rotated position */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg z-10 rotate-12">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom right - rotated position */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg z-10 -rotate-12">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#1C4B42] mb-6">Contact us</h2>

              {/* Address */}
              <div className="mb-6">
                <p className="text-sm text-black/80 font-medium">Lagos, Nigeria</p>
                <p className="text-sm text-black/60">Lekki, Lagos State</p>
              </div>

              {/* Email */}
              <div className="mb-4">
                <a
                  href="mailto:hello@avariodigitals.com"
                  className="text-sm text-black/80 hover:text-[#1C4B42] transition-colors font-medium"
                >
                  hello@avariodigitals.com
                </a>
              </div>

              {/* Phone */}
              <div className="mb-8">
                <a
                  href="tel:+18552891111"
                  className="text-sm text-black/80 hover:text-[#1C4B42] transition-colors font-medium"
                >
                  +1 (855) 289-1111
                </a>
              </div>

              {/* CTA Button with circular accent */}
              <div className="flex items-center justify-center gap-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#1C4B42] text-white font-semibold text-sm hover:bg-[#0d3e2d] transition-all"
                  onClick={() => setDesktopOpen(false)}
                >
                  Get in Touch Today
                </Link>
                <button
                  className="w-12 h-12 rounded-full bg-[#9EDC2A] text-[#1C4B42] flex items-center justify-center hover:bg-[#8ac41f] transition-all font-bold -ml-2 relative z-10"
                  title="Get in touch"
                  onClick={() => {
                    setDesktopOpen(false);
                    window.location.href = '/contact';
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
