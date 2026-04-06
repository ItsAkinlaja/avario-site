import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
  bgImage,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  bgImage?: string;
  breadcrumb?: Array<{ href: string; label: string }>;
}) {
  if (bgImage) {
    return (
      <section
        className={cn("relative isolate overflow-hidden bg-black", className)}
        style={{
          backgroundImage:
            `linear-gradient(90deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.5) 48%, rgba(0,0,0,0.22) 100%), url('${bgImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/55" />
        <Container className="relative py-14 sm:py-16">
          {breadcrumb && breadcrumb.length ? (
            <nav className="text-xs font-medium text-white/80">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              {breadcrumb.map((b, i) => (
                <span key={b.href}>
                  <span className="mx-2 opacity-70">/</span>
                  {i < breadcrumb.length - 1 ? (
                    <Link href={b.href} className="hover:text-white">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-white">{b.label}</span>
                  )}
                </span>
              ))}
            </nav>
          ) : null}

          <div className="max-w-3xl">
            <div className="font-heading text-sm font-semibold text-white/85">
              {eyebrow}
            </div>
            <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {title}
            </h1>
            {description ? (
              <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
                {description}
              </p>
            ) : null}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className={cn("bg-white", className)}>
      <Container className="py-14 sm:py-16">
        {breadcrumb && breadcrumb.length ? (
          <nav className="text-xs font-medium text-black/70">
            <Link href="/" className="hover:text-black">
              Home
            </Link>
            {breadcrumb.map((b, i) => (
              <span key={b.href}>
                <span className="mx-2 opacity-70">/</span>
                {i < breadcrumb.length - 1 ? (
                  <Link href={b.href} className="hover:text-black">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-black">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        ) : null}
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
