import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-white">
      <Container className="py-20">
        <div className="max-w-xl">
          <div className="font-heading text-sm font-semibold text-avario-teal">
            Not found
          </div>
          <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-black">
            This page doesn’t exist.
          </h1>
          <p className="mt-4 text-base leading-7 text-black/70">
            Go back to the homepage or request a consultation.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/">Back home</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Request Consultation <span className="text-avario-lime">→</span>
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
