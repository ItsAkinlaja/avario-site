'use client';

import { Container } from '@/components/ui/Container';

export function System() {
  const systems = [
    {
      id: 'acquisition',
      title: 'Acquisition Systems',
      description: 'Strategic infrastructure for consistent lead generation and market positioning.',
      icon: '🎯',
    },
    {
      id: 'sales',
      title: 'Sales & CRM Systems',
      description: 'Visibility-driven frameworks that turn leads into revenue with RelaviCX.',
      icon: '📊',
    },
    {
      id: 'operations',
      title: 'Operations Systems',
      description: 'Operational efficiency that connects sales, delivery, and growth.',
      icon: '⚙️',
    },
    {
      id: 'infrastructure',
      title: 'Technology Infrastructure',
      description: 'Scalable tech stacks that grow with your business.',
      icon: '🔧',
    },
  ];

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-28">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <p className="text-[#1C4B42] font-semibold text-sm sm:text-base uppercase tracking-wider mb-6">
            Our Approach
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0d3e2d] leading-snug">
            We design and deploy <span className="text-[#1C4B42]">structured systems</span> that align every part of your business.
          </h2>

          <p className="text-base sm:text-lg text-[#0d3e2d]/70 mt-8">
            From customer acquisition to operations and infrastructure — every system connects.
          </p>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {systems.map((system) => (
            <div
              key={system.id}
              className="bg-white border-2 border-[#f4f6f8] rounded-lg p-8 hover:border-[#1C4B42] hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{system.icon}</div>
              <h3 className="text-lg font-semibold text-[#0d3e2d] mb-3">
                {system.title}
              </h3>
              <p className="text-sm text-[#0d3e2d]/70">
                {system.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
