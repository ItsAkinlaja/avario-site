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

        {/* Slide-in tray panel - Contact info only */}
        <div
          id={desktopMenuId}
          className={cn(
            "fixed right-0 top-16 z-40 w-80 border-l border-black/10 bg-white shadow-lg transition-transform duration-300 ease-out",
            desktopOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="p-6 space-y-4">
            {/* Contact Email */}
            <div>
              <p className="text-xs font-semibold text-black/50 uppercase tracking-wide mb-2">Email</p>
              <a
                href="mailto:info@avariodigitals.com"
                className="text-sm font-medium text-avario-teal hover:text-avario-dark-teal break-all"
              >
                info@avariodigitals.com
              </a>
            </div>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-avario-teal px-5 py-3 text-sm font-medium text-white hover:bg-avario-dark-teal transition-colors"
              onClick={() => setDesktopOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
