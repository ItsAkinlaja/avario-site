"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function WhoWeAre() {
  const [activeTab, setActiveTab] = useState(2); // 03 tab is active by default
  const [autoRotate, setAutoRotate] = useState(true);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [mounted, setMounted] = useState(false);

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

  // Ensure component is mounted before running effects
  useEffect(() => {
    setMounted(true);
  }, []);

  // Get current tab description
  const currentDescription = tabs[activeTab]?.description || "";

  // Typewriter effect - only runs on client after mount
  useEffect(() => {
    if (!mounted || !currentDescription) return;

    let charIndex = 0;
    setDisplayedText("");
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (charIndex < currentDescription.length) {
        setDisplayedText(currentDescription.slice(0, charIndex + 1));
        charIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 15); // 15ms per character for smooth typing

    return () => clearInterval(typeInterval);
  }, [activeTab, currentDescription, mounted]);

  // Auto-rotate tabs every 4 seconds - only after mount
  useEffect(() => {
    if (!mounted || !autoRotate) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoRotate, tabs.length, mounted]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setAutoRotate(false); // Stop auto-rotation when user clicks
    // Resume auto-rotation after 10 seconds of inactivity
    setTimeout(() => setAutoRotate(true), 10000);
  };

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 lg:mt-32">
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
            <style>{`
              @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap');
              
              .typewriter-text {
                font-family: 'Courier Prime', monospace;
                line-height: 1.6;
                letter-spacing: 0.3px;
                min-height: 5rem;
              }
              
              .typing-cursor {
                display: inline-block;
                width: 2px;
                height: 1.2em;
                background-color: #b4d400;
                margin-left: 3px;
                animation: blink 0.7s infinite;
                vertical-align: middle;
              }
              
              @keyframes blink {
                0%, 49%, 100% { opacity: 1; }
                50%, 99% { opacity: 0; }
              }
            `}</style>
            
            {/* Tabs Navigation */}
            <div className="flex items-center justify-start lg:justify-end gap-3 sm:gap-6 mb-8 lg:mb-12">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(index)}
                  className={`relative px-3 sm:px-4 py-2 text-lg sm:text-xl lg:text-2xl font-bold transition-all duration-300 ${
                    index === activeTab
                      ? "text-[#b4d400]"
                      : "text-[#0d3e2d]/30 hover:text-[#0d3e2d]/60"
                  }`}
                >
                  {tab.id}
                  {index === activeTab && (
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#b4d400] to-[#b4d400]/50 rounded-full"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content with Typewriter Effect */}
            <div className="relative rounded-lg bg-gradient-to-br from-[#f6efe3]/50 to-transparent p-6 sm:p-8 min-h-[320px]">
              <div className="relative w-full h-full">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1C4B42] mb-6">
                  {tabs[activeTab].title}
                </h3>
                <p className="typewriter-text text-base sm:text-lg text-[#0d3e2d]/80">
                  {mounted ? (
                    <>
                      {displayedText}
                      {isTyping && <span className="typing-cursor"></span>}
                    </>
                  ) : (
                    tabs[activeTab].description
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
