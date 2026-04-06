"use client";

import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        {/* Circular Image Container - Team Arrangement */}
        <div className="relative mx-auto mb-12 h-80 w-80 flex items-center justify-center">
          {/* Center image - main contact image */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
              alt="Team collaboration"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>

          {/* Top left - rotated position */}
          <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg z-10 -rotate-12">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
              alt="Team member"
              fill
              className="object-cover"
            />
          </div>

          {/* Top right - rotated position */}
          <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg z-10 rotate-12">
            <Image
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
              alt="Team member"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom left - rotated position */}
          <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg z-10 rotate-12">
            <Image
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
              alt="Team member"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom right - rotated position */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg z-10 -rotate-12">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
              alt="Team member"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Contact Information Panel */}
        <div className="text-center mt-20">
          <h1 className="text-5xl font-bold text-[#1C4B42] mb-8">Contact us</h1>

          {/* Address */}
          <div className="mb-8">
            <p className="text-lg text-black/80 font-medium">Lagos, Nigeria</p>
            <p className="text-base text-black/70">Lekki, Lagos State</p>
          </div>

          {/* Email */}
          <div className="mb-6">
            <Link
              href="mailto:hello@avariodigitals.com"
              className="text-lg text-black/80 hover:text-[#1C4B42] transition-colors font-medium"
            >
              hello@avariodigitals.com
            </Link>
          </div>

          {/* Phone */}
          <div className="mb-12">
            <Link
              href="tel:+18552891111"
              className="text-lg text-black/80 hover:text-[#1C4B42] transition-colors font-medium"
            >
              +1 (855) 289-1111
            </Link>
          </div>

          {/* CTA Button with circular accent */}
          <div className="flex items-center justify-center gap-0">
            <Link
              href="/contact?form=open"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#1C4B42] text-white font-semibold text-base hover:bg-[#0d3e2d] transition-all hover:shadow-lg"
            >
              Get in Touch Today
            </Link>
            <button 
              onClick={() => {
                const form = document.getElementById('contact-form');
                form?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-14 h-14 rounded-full bg-[#9EDC2A] text-[#1C4B42] flex items-center justify-center hover:bg-[#8ac41f] transition-all hover:shadow-lg font-bold -ml-2 relative z-10"
              title="Get in touch"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
