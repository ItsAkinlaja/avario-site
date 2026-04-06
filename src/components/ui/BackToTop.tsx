"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export function BackToTop({ className }: { className?: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-5 right-5 z-[60] inline-flex h-11 w-11 items-center justify-center rounded-full bg-avario-teal text-white shadow-md transition-all hover:bg-avario-dark-teal sm:bottom-6 sm:right-6",
        visible ? "opacity-100" : "opacity-0 pointer-events-none",
        className,
      )}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 5l-7 7m7-7l7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </button>
  );
}
