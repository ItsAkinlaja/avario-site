import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";

const products = [
  {
    title: "RelaviCX CRM",
    description:
      "A structured sales and customer management system designed to reduce lead leakage and improve conversion visibility.",
    href: "/products/relavicx",
  },
  {
    title: "MartPoint",
    description:
      "Commerce infrastructure built for clear product workflows, customer journeys, and measurable performance.",
    href: "/products/martpoint",
  },
  {
    title: "School Suite",
    description:
      "Education operations system that streamlines enrollment, administration, and communication with structure.",
    href: "/products/school-suite",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Products built as systems."
        description="Each product is designed to remove operational friction, improve visibility, and drive measurable outcomes."
      />

      <section className="bg-white">
        <Container className="pb-14 sm:pb-16">
          <div className="grid gap-5 md:grid-cols-3">
            {products.map((p) => (
              <Card key={p.title} className="flex h-full flex-col">
                <div className="font-heading text-xl font-semibold text-black">
                  {p.title}
                </div>
                <div className="mt-3 text-sm leading-6 text-black/70">
                  {p.description}
                </div>
                <div className="mt-6">
                  <ButtonLink href={p.href} variant="secondary">
                    View product <span className="text-avario-lime">→</span>
                  </ButtonLink>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
