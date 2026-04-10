"use client";

import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12 sm:py-20">
      {/* Hero Section */}
      <div className="w-full max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center rounded-full border border-[#1C4B42]/20 bg-[#1C4B42]/5 px-4 py-2 mb-6">
          <span className="text-xs font-semibold text-[#1C4B42] uppercase tracking-wider">Contact</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#0d3e2d] mb-4">Let’s Start a Conversation</h1>
        <p className="text-lg text-[#0d3e2d]/80 max-w-xl mx-auto mb-6">Whether you’re ready to build, want to discuss a challenge, or just need advice, our team is here to help you move forward.</p>
      </div>

      {/* Contact Info & Form Section */}
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Info Card */}
        <div className="rounded-3xl border-2 border-[#9EDC2A]/20 bg-[#f8f6f1] p-8 shadow-lg flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <svg className="w-8 h-8 text-[#1C4B42]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 12.414a2 2 0 0 0-2.828 0l-4.243 4.243A8 8 0 1 1 20 4.343l-4.243 4.243a2 2 0 0 0 0 2.828l4.243 4.243z" /><circle cx="12" cy="12" r="3" /></svg>
            <div>
              <div className="text-lg font-semibold text-[#1C4B42]">Lagos, Nigeria</div>
              <div className="text-base text-[#0d3e2d]/70">Lekki, Lagos State</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <svg className="w-8 h-8 text-[#1C4B42]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M16 12v4a4 4 0 0 1-8 0v-4" /><rect x="8" y="6" width="8" height="6" rx="2" /><path d="M12 2v4" /></svg>
            <a href="mailto:hello@avariodigitals.com" className="text-lg font-semibold text-[#1C4B42] hover:text-[#9EDC2A] transition-colors">hello@avariodigitals.com</a>
          </div>
          <div className="flex items-center gap-4">
            <svg className="w-8 h-8 text-[#1C4B42]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z" /></svg>
            <a href="tel:+18552891111" className="text-lg font-semibold text-[#1C4B42] hover:text-[#9EDC2A] transition-colors">+1 (855) 289-1111</a>
          </div>
        </div>

        {/* Contact Form Card */}
        <form id="contact-form" className="rounded-3xl border-2 border-[#1C4B42]/10 bg-white p-8 shadow-lg flex flex-col gap-6">
          <div className="text-2xl font-bold text-[#1C4B42] mb-2">Send us a message</div>
          <div className="grid grid-cols-1 gap-5">
            <div className="relative">
              <input type="text" name="name" id="name" required className="peer w-full border-b-2 border-[#1C4B42]/20 bg-transparent py-3 px-2 text-[#0d3e2d] placeholder-transparent focus:outline-none focus:border-[#9EDC2A] transition-colors" placeholder="Your Name" />
              <label htmlFor="name" className="absolute left-2 top-3 text-[#1C4B42]/60 text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#9EDC2A] bg-white px-1">Your Name</label>
            </div>
            <div className="relative">
              <input type="email" name="email" id="email" required className="peer w-full border-b-2 border-[#1C4B42]/20 bg-transparent py-3 px-2 text-[#0d3e2d] placeholder-transparent focus:outline-none focus:border-[#9EDC2A] transition-colors" placeholder="Your Email" />
              <label htmlFor="email" className="absolute left-2 top-3 text-[#1C4B42]/60 text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#9EDC2A] bg-white px-1">Your Email</label>
            </div>
            <div className="relative">
              <textarea name="message" id="message" required rows={4} className="peer w-full border-b-2 border-[#1C4B42]/20 bg-transparent py-3 px-2 text-[#0d3e2d] placeholder-transparent focus:outline-none focus:border-[#9EDC2A] transition-colors resize-none" placeholder="Your Message" />
              <label htmlFor="message" className="absolute left-2 top-3 text-[#1C4B42]/60 text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#9EDC2A] bg-white px-1">Your Message</label>
            </div>
          </div>
          <button type="submit" className="mt-4 inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#1C4B42] text-white font-semibold text-base hover:bg-[#0d3e2d] transition-all hover:shadow-lg">Send Message</button>
        </form>
      </div>
    </div>
  );
}
