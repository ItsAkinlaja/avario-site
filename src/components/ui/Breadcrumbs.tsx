import Link from "next/link";
import { cn } from "@/lib/cn";

export function Breadcrumbs({
  items,
  className,
}: {
  items: { label: string; href?: string }[];
  className?: string;
}) {
  return (
    <nav className={cn("flex items-center text-sm text-[#1C4B42]", className)} aria-label="Breadcrumb">
      {items.map((item, idx) => (
        <span key={item.label} className="flex items-center">
          {item.href ? (
            <Link href={item.href} className="hover:underline text-[#1C4B42]/80 hover:text-[#1C4B42]">
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-[#9EDC2A]">{item.label}</span>
          )}
          {idx < items.length - 1 && (
            <svg className="mx-2 h-4 w-4 text-[#1C4B42]/40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          )}
        </span>
      ))}
    </nav>
  );
}
