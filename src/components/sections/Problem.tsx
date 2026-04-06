'use client';

import { Container } from '@/components/ui/Container';

export function Problem() {
  return (
    <section className="relative bg-[#f4f6f8] py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {/* Label */}
          <p className="text-[#1C4B42] font-semibold text-sm sm:text-base uppercase tracking-wider mb-6">
            The Challenge
          </p>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0d3e2d] leading-snug mb-8">
            Most businesses grow without{' '}
            <span className="text-[#1C4B42]">structure.</span>
          </h2>

          {/* Problem List */}
          <div className="space-y-4 text-base sm:text-lg text-[#0d3e2d]/80">
            <p>✗ Leads are generated but never tracked</p>
            <p>✗ Sales team lacks visibility into pipeline</p>
            <p>✗ Operations remain disconnected from revenue</p>
            <p>✗ Growth becomes unpredictable and unsustainable</p>
          </div>

          {/* Result */}
          <p className="mt-10 text-lg sm:text-xl text-[#0d3e2d] font-medium">
            The result? Wasted leads, lost revenue, and teams working in silos.
          </p>
        </div>
      </Container>
    </section>
  );
}
