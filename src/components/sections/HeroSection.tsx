import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

interface HeroSectionProps {
  headline: string;
  accentWords?: string[]; // Words to highlight in accent color
  subheadline?: string;
  description?: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export function HeroSection({
  headline,
  accentWords = [],
  subheadline,
  description,
  primaryCTA,
  secondaryCTA,
  imageSrc,
  imageAlt,
  className,
}: HeroSectionProps) {
  // Helper to highlight accent words in headline
  const renderHeadline = () => {
    if (!accentWords.length) return headline;

    const words = headline.split(" ");
    return words.map((word, i) => {
      const isAccent = accentWords.some(
        (accent) =>
          word.toLowerCase().replace(/[,.\-]/g, "") ===
          accent.toLowerCase().replace(/[,.\-]/g, ""),
      );
      return (
        <span
          key={i}
          className={isAccent ? "text-[#b4d400] font-semibold" : ""}
        >
          {word}{" "}
        </span>
      );
    });
  };

  return (
    <section className={cn("overflow-hidden bg-white py-16 sm:py-20 lg:py-28", className)}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end lg:gap-16">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-heading text-4xl font-semibold leading-tight text-[#13251a] sm:text-5xl lg:text-6xl">
                {renderHeadline()}
              </h1>

              {subheadline && (
                <p className="text-lg font-medium text-[#13251a]/80 sm:text-xl">
                  {subheadline}
                </p>
              )}

              {description && (
                <p className="max-w-xl text-base leading-relaxed text-[#13251a]/70 sm:text-lg">
                  {description}
                </p>
              )}
            </div>

            {/* CTAs */}
            {(primaryCTA || secondaryCTA) && (
              <div className="flex flex-wrap items-center gap-4 pt-4">
                {primaryCTA && (
                  <ButtonLink
                    href={primaryCTA.href}
                    variant="primary"
                    size="lg"
                    icon="arrow"
                  >
                    {primaryCTA.label}
                  </ButtonLink>
                )}
                {secondaryCTA && (
                  <ButtonLink
                    href={secondaryCTA.href}
                    variant="secondary"
                    size="lg"
                  >
                    {secondaryCTA.label}
                  </ButtonLink>
                )}
              </div>
            )}
          </div>

          {/* Image */}
          {imageSrc && (
            <div className="relative overflow-hidden rounded-3xl bg-[#f6efe3]">
              <Image
                src={imageSrc}
                alt={imageAlt || "Hero image"}
                width={600}
                height={400}
                className="h-64 w-full object-cover sm:h-80 lg:h-96"
                unoptimized
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
