 "use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
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
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const style = useMemo(() => {
    if (!isHome) {
      return {
        header: "sticky top-0 bg-white/90 backdrop-blur",
        border: "border-b border-black/10",
        logoPrimary: "text-avario-teal",
        logoSecondary: "text-black/70",
        link: "text-black/70 hover:text-black",
        iconButton:
          "inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black/70 hover:text-black",
        cta: "inline-flex items-center justify-center rounded-full bg-avario-teal px-5 py-3 text-sm font-medium text-white hover:bg-avario-dark-teal",
        mobileCta:
          "inline-flex items-center justify-center rounded-full bg-avario-teal px-4 py-2 text-sm font-medium text-white hover:bg-avario-dark-teal",
      };
    }

    if (!scrolled) {
      return {
        header: "absolute inset-x-0 top-0 bg-transparent",
        border: "border-b border-white/10",
        logoPrimary: "text-white",
        logoSecondary: "text-white/70",
        link: "text-white/80 hover:text-white",
        iconButton:
          "inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/15",
        cta: "inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-avario-dark-teal hover:bg-white/90",
        mobileCta:
          "inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-avario-dark-teal hover:bg-white/90",
      };
    }

    return {
      header: "sticky top-0 bg-white/90 backdrop-blur",
      border: "border-b border-black/10",
      logoPrimary: "text-avario-teal",
      logoSecondary: "text-black/70",
      link: "text-black/70 hover:text-black",
      iconButton:
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black/70 hover:text-black",
      cta: "inline-flex items-center justify-center rounded-full bg-avario-teal px-5 py-3 text-sm font-medium text-white hover:bg-avario-dark-teal",
      mobileCta:
        "inline-flex items-center justify-center rounded-full bg-avario-teal px-4 py-2 text-sm font-medium text-white hover:bg-avario-dark-teal",
    };
  }, [isHome, scrolled]);

  return (
    <header className={cn("z-50", style.header, className)}>
      <div className={style.border}>
        <Container className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://avariodigitals.com/wp-content/uploads/2022/10/cropped-cropped-AVArio-Logo-website-2.png"
              alt="Avario Digitals"
              width={160}
              height={48}
              unoptimized
              priority
              className="h-7 w-auto sm:h-8"
            />
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn("text-sm font-medium", style.link)}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className={cn(style.iconButton, "hidden md:inline-flex")}
              aria-label="Search"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-90"
              >
                <path
                  d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M21 21l-4.35-4.35"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <Link
              href="/contact"
              className={cn(style.cta, "hidden md:inline-flex")}
              aria-label="Contact us"
            >
              Contact Us
            </Link>
            <Link href="/contact" className={cn(style.mobileCta, "md:hidden")}>
              Contact
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
}
