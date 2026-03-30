import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <Container className="py-10">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <Link href="/" className="inline-flex">
              <Image
                src="https://avariodigitals.com/wp-content/uploads/2022/10/cropped-cropped-AVArio-Logo-website-2.png"
                alt="Avario Digitals"
                width={200}
                height={60}
                unoptimized
                className="h-9 w-auto sm:h-10"
              />
            </Link>
            <div className="text-sm text-black/70">
              Growth systems and technology infrastructure for measurable business
              outcomes.
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-black/70 md:justify-end">
            <Link href="/growth-systems" className="hover:text-black">
              Growth Systems
            </Link>
            <Link href="/products" className="hover:text-black">
              Products
            </Link>
            <Link href="/case-studies" className="hover:text-black">
              Case Studies
            </Link>
            <Link href="/insights" className="hover:text-black">
              Insights
            </Link>
            <Link href="/contact" className="hover:text-black">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-black/10 pt-6 text-xs text-black/60 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Avario Digitals. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-black">
              About
            </Link>
            <Link href="/contact" className="hover:text-black">
              Request Consultation
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
