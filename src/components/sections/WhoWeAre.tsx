"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function WhoWeAre() {
  const [activeTab, setActiveTab] = useState(2); // 03 tab is active by default

  const tabs = [
    {
      id: "01",
      title: "Strategy",
      description: "We diagnose your business challenges and design integrated systems that connect customer acquisition, sales, operations, and infrastructure — creating the foundation for predictable growth.",
    },
    {
      id: "02",
      title: "Technology",
      description: "We deploy proven tools and custom solutions (like RelaviCX) that carry your systems forward. Technology is the backbone that makes everything work together seamlessly.",
    },
    {
      id: "03",
      title: "Execution",
      description: "We don't just hand off systems — we implement them with your team, ensuring adoption, optimization, and continuous improvement. Execution is where growth happens.",
    },
  ];

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="flex flex-col">
            {/* Badge */}
            <div className="inline-flex w-fit mb-8 lg:mb-12">
              <span className="text-xs sm:text-sm font-semibold text-[#0d3e2d] border border-[#0d3e2d]/20 rounded-full px-4 py-2 bg-[#f6efe3]/50">
                WHO WE ARE
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0d3e2d] leading-snug mb-8 lg:mb-10">
              We Design Systems That<br />Connect Everything{" "}
              <span className="text-[#b4d400]">for Measurable Growth</span>
            </h2>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center mb-8">
              <Link href="#" className="w-full sm:w-auto">
                <Button className="bg-[#1C4B42] text-white hover:bg-[#0d3e2d] px-6 py-3 w-full sm:w-auto text-sm sm:text-base">
                  Explore Our Systems
                </Button>
              </Link>
              <Link
                href="#"
                className="px-6 py-3 border-2 border-[#0d3e2d] text-[#0d3e2d] font-medium text-sm sm:text-base hover:bg-[#0d3e2d]/5 transition-colors rounded-full w-full sm:w-auto text-center"
              >
                How We Work
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            {/* Tabs Navigation */}
            <div className="flex items-center justify-start lg:justify-end gap-6 mb-8 lg:mb-12">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`text-sm font-semibold transition-all ${
                    index === activeTab
                      ? "text-[#b4d400] pb-2 border-b-2 border-[#b4d400]"
                      : "text-[#0d3e2d]/40 hover:text-[#0d3e2d]/60"
                  }`}
                >
                  {tab.id}
                </button>
              ))}
            </div>

            {/* Tab Content with Sliding Animation */}
            <div className="relative overflow-hidden" style={{ height: '240px' }}>
              <div
                className="transition-all duration-500 ease-in-out"
                style={{
                  transform: `translateY(${-activeTab * 100}%)`,
                }}
              >
                {tabs.map((tab) => (
                  <div key={tab.id} style={{ height: '240px' }} className="flex flex-col justify-start py-2">
                    <p className="text-base sm:text-lg text-[#0d3e2d]/80 leading-relaxed">
                      {tab.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
