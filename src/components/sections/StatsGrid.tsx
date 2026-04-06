import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

interface StatsGridProps {
  stats: StatItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function StatsGrid({
  stats,
  columns = 3,
  className,
}: StatsGridProps) {
  const gridClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className={cn("py-12 sm:py-16 lg:py-20", className)}>
      <Container>
        <div className={cn("grid gap-8 sm:gap-12", gridClass[columns])}>
          {stats.map((stat, i) => (
            <div key={i} className="space-y-3 text-center">
              <div className="text-4xl font-bold text-avario-teal sm:text-5xl">
                {stat.value}
              </div>
              <h3 className="text-lg font-semibold text-[#13251a]">
                {stat.label}
              </h3>
              {stat.description && (
                <p className="text-sm text-[#13251a]/70">
                  {stat.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
