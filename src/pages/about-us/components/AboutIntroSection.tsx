import Container from "../../../components/layout/Container";
import bgBlobGradient from "../../../assets/bg-blob-gradient.svg";

export default function AboutIntroSection() {
  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      <img
        src={bgBlobGradient}
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-40 w-[480px] opacity-20 select-none"
      />
      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
            Let's Get To Know Each Other Better!
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-500 leading-relaxed">
            We are experts in creating innovative chemical admixtures for aerated and ready-mix
            concrete and in testing building materials.
          </p>
        </div>
      </Container>
    </section>
  );
}
