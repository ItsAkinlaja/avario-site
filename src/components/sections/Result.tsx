'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function Result() {
  const outcomes = [
    {
      metric: '3x',
      title: 'Better Visibility',
      description: 'Full transparency across acquisition, sales, and operations.',
    },
    {
      metric: '2x',
      title: 'Stronger Conversion',
      description: 'Systems that turn leads into revenue predictably.',
    },
    {
      metric: '∞',
      title: 'Scalable Growth',
      description: 'Infrastructure that grows with your business, not against it.',
    },
  ];

  return (
    <section className="relative bg-[#1C4B42] py-16 sm:py-20 lg:py-28">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <p className="text-white/80 font-semibold text-sm sm:text-base uppercase tracking-wider mb-6">
            The Result
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-snug">
            Structured systems that drive{' '}
            <span className="text-[#9EDC2A]">measurable growth.</span>
          </h2>
        </div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10 mb-16 lg:mb-20">
          {outcomes.map((outcome, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-5xl sm:text-6xl font-bold text-[#9EDC2A] mb-4">
                {outcome.metric}
              </div>
              <h3 className="text-xl font-semibold mb-3">{outcome.title}</h3>
              <p className="text-white/80">{outcome.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact">
            <Button className="bg-[#9EDC2A] text-[#1C4B42] hover:bg-white px-8 py-3 font-semibold">
              Request a Consultation
            </Button>
          </Link>
          <Link href="/case-studies" className="px-6 py-3 border-2 border-white text-white font-semibold hover:bg-white/10 rounded-full transition-colors">
            View Case Studies
          </Link>
        </div>
      </Container>
    </section>
  );
}
