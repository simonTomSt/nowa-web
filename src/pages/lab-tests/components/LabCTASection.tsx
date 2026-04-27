import Container from "../../../components/layout/Container";

export default function LabCTASection() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight">
            Need laboratory testing?
          </h2>
          <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed">
            Get in touch — we'll discuss your testing needs and provide a tailored offer.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold text-base hover:opacity-90 transition-opacity duration-150 shadow-lg shadow-accent/30"
            >
              Contact us
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
