import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <section className={cn("bg-white", className)}>
      <Container className="py-14 sm:py-16">
        <div className="max-w-3xl">
          <div className="font-heading text-sm font-semibold text-avario-teal">
            {eyebrow}
          </div>
          <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 text-base leading-7 text-black/70 sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
