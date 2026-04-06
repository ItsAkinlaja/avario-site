import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

export interface CardItem {
  id: string | number;
  title: string;
  excerpt?: string;
  category?: string;
  image?: string;
  link: string;
}

interface CardGridProps {
  items: CardItem[];
  columns?: 2 | 3 | 4;
  featured?: CardItem; // First item displayed larger
  className?: string;
}

export function CardGrid({
  items,
  columns = 3,
  featured,
  className,
}: CardGridProps) {
  const gridClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className={cn("py-12 sm:py-16 lg:py-20", className)}>
      <Container>
        <div className="grid gap-6 sm:gap-8">
          {/* Featured Item */}
          {featured && (
            <Link
              href={featured.link}
              className="group block overflow-hidden rounded-2xl bg-gradient-to-br from-[#b4d400] to-[#8fb500] p-8 sm:p-12 transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="space-y-4">
                {featured.category && (
                  <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                    {featured.category}
                  </span>
                )}
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  {featured.title}
                </h3>
                {featured.excerpt && (
                  <p className="text-base text-white/90">{featured.excerpt}</p>
                )}
              </div>
            </Link>
          )}

          {/* Grid Items */}
          <div className={cn("grid gap-6 sm:gap-8", gridClass[columns])}>
            {items.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="group block"
              >
                <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  {item.image && (
                    <div className="relative h-48 overflow-hidden bg-[#f6efe3]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={300}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        unoptimized
                      />
                    </div>
                  )}

                  <div className="space-y-4 p-6">
                    {item.category && (
                      <span className="inline-block rounded-full bg-[#b4d400]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-avario-teal">
                        {item.category}
                      </span>
                    )}

                    <h3 className="text-lg font-semibold text-[#13251a] line-clamp-2 group-hover:text-avario-teal transition-colors">
                      {item.title}
                    </h3>

                    {item.excerpt && (
                      <p className="text-sm text-[#13251a]/70 line-clamp-3">
                        {item.excerpt}
                      </p>
                    )}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
