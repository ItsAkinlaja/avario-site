"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export interface CarouselItem {
  id: string | number;
  name: string;
  title: string;
  image?: string;
  href?: string;
}

interface CarouselProps {
  title: string;
  items: CarouselItem[];
  itemsPerView?: number;
  className?: string;
}

export function Carousel({
  title,
  items,
  itemsPerView = 4,
  className,
}: CarouselProps) {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + itemsPerView < items.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const visibleItems = items.slice(startIndex, startIndex + itemsPerView);
  const maxStart = Math.max(0, items.length - itemsPerView);
  const slideButtons = Math.ceil(items.length / itemsPerView);

  return (
    <section className={cn("py-12 sm:py-16 lg:py-20", className)}>
      <Container>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wider text-avario-teal">
              {title}
            </h3>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden">
            <div className="flex gap-6 sm:gap-8 transition-transform duration-300">
              {visibleItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-1 min-w-0 flex-shrink-0"
                >
                  <Link
                    href={item.href || `/about/team/${item.id}`}
                    className="group block space-y-4"
                  >
                    {item.image && (
                      <div className="relative overflow-hidden rounded-xl bg-[#f6efe3] aspect-square">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          unoptimized
                        />
                      </div>
                    )}

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-[#13251a] group-hover:text-avario-teal transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#13251a]/70">
                        {item.title}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          {slideButtons > 1 && (
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={handlePrev}
                disabled={startIndex === 0}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#13251a]/20 text-[#13251a] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#f6efe3] transition-colors"
                aria-label="Previous slide"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <div className="flex gap-1">
                {Array.from({ length: slideButtons }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() =>
                      setStartIndex(Math.min(i * itemsPerView, maxStart))
                    }
                    className={cn(
                      "h-2 w-2 rounded-full transition-all",
                      startIndex === Math.min(i * itemsPerView, maxStart)
                        ? "bg-avario-teal w-6"
                        : "bg-[#13251a]/20 hover:bg-[#13251a]/40",
                    )}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={startIndex >= maxStart}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#13251a]/20 text-[#13251a] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#f6efe3] transition-colors"
                aria-label="Next slide"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
