'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function Services() {
  const products = [
    {
      id: 'relavicx',
      title: 'RelaviCX CRM',
      category: 'Sales Infrastructure',
      image: 'https://avariodigitals.com/wp-content/uploads/2026/04/Macbook-Air-relavicx.com_.ng_.png',
      href: '/products/relavicx',
    },
    {
      id: 'martpoint',
      title: 'MartPoint',
      category: 'Commerce Operations',
      image: 'https://avariodigitals.com/wp-content/uploads/2026/04/Martpoint-Logo-White25876.webp',
      href: '/products/martpoint',
    },
    {
      id: 'school-suite',
      title: 'School Suite',
      category: 'Education Operations',
      image: 'https://avariodigitals.com/wp-content/uploads/2026/04/dashboard_full_1.png',
      href: '/products/school-suite',
    },
  ];

  return (
    <section className="relative bg-[#1C4B42] py-16 sm:py-20 lg:py-28">
      <Container>
        {/* Header Section */}
        <div className="mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="flex flex-col max-w-2xl">
            <div className="inline-flex w-fit mb-6 lg:mb-8">
              <span className="text-xs sm:text-sm font-semibold text-white border border-white/20 rounded-full px-4 py-2 bg-white/10">
                OUR PRODUCTS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-snug">
              Systems built for <span className="text-[#9EDC2A]">specific business challenges</span>
            </h2>
          </div>

          <Link href="/products" className="w-full sm:w-auto">
            <Button className="bg-white text-[#1C4B42] hover:bg-white/90 px-6 py-3 w-full sm:w-auto text-sm sm:text-base font-semibold">
              View all products
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="relative bg-[#9EDC2A] rounded-3xl overflow-hidden group transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-full">
                {/* Image Container with Wave Pattern */}
                <div className="relative h-56 sm:h-60 lg:h-64 overflow-hidden">
                  {/* SVG Wave Pattern Overlay */}
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 300">
                    <path d="M 0 120 Q 100 80 200 100 T 400 120 L 400 0 L 0 0 Z" fill="white" opacity="0.15" />
                    <path d="M 0 160 Q 50 140 100 150 T 200 140 T 300 155 T 400 145 L 400 300 L 0 300 Z" fill="white" opacity="0.1" />
                  </svg>

                  {/* Image */}
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Gradient Overlay to Card Color */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#9EDC2A]" />
                </div>

                {/* Title and Arrow Button */}
                <div className="relative px-5 sm:px-6 pb-5 sm:pb-6 pt-8 sm:pt-10">
                  <div className="text-xs sm:text-sm font-semibold text-[#1C4B42]/60 mb-2">
                    {product.category}
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#1C4B42]">
                      {product.title}
                    </h3>

                    {/* Arrow Icon in Circle */}
                    <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#1C4B42] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M7 7h10v10M7 17L17 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
