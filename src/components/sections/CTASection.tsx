import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  backgroundColor?: "white" | "cream" | "teal";
  className?: string;
}

export function CTASection({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundColor = "cream",
  className,
}: CTASectionProps) {
  const bgColor = {
    white: "bg-white",
    cream: "bg-[#f6efe3]",
    teal: "bg-avario-teal",
  };

  const textColor = backgroundColor === "teal" ? "text-white" : "text-[#13251a]";

  return (
    <section
      className={cn(bgColor[backgroundColor], "py-16 sm:py-20 lg:py-24", className)}
    >
      <Container>
        <div className="max-w-2xl space-y-8">
          <div className="space-y-4">
            <h2 className={cn("font-heading text-3xl font-semibold sm:text-4xl", textColor)}>
              {title}
            </h2>

            {subtitle && (
              <p className={cn("text-lg font-medium", textColor)}>
                {subtitle}
              </p>
            )}

            {description && (
              <p
                className={cn(
                  "text-base leading-relaxed",
                  backgroundColor === "teal"
                    ? "text-white/90"
                    : "text-[#13251a]/70",
                )}
              >
                {description}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <ButtonLink
              href={primaryCTA.href}
              variant="primary"
              size="lg"
              icon="arrow"
              className={cn(
                backgroundColor === "teal"
                  ? "bg-white text-[#0d3e2d] hover:bg-[#b4d400] hover:text-[#0d3e2d]"
                  : "",
              )}
            >
              {primaryCTA.label}
            </ButtonLink>

            {secondaryCTA && (
              <ButtonLink
                href={secondaryCTA.href}
                variant="secondary"
                size="lg"
                className={cn(
                  backgroundColor === "teal"
                    ? "border-2 border-white text-white hover:bg-[#b4d400] hover:border-[#b4d400] hover:text-[#0d3e2d]"
                    : "",
                )}
              >
                {secondaryCTA.label}
              </ButtonLink>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
