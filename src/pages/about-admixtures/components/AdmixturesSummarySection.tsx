import Container from "../../../components/layout/Container";

export default function AdmixturesSummarySection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <div className="max-w-3xl mx-auto border-l-4 border-accent pl-8 py-2">
          <p className="text-lg text-gray-700 leading-relaxed">
            Depending on the specific construction project, different types of admixtures may be
            used to achieve specific properties and quality of concrete. The choice of the right
            admixture depends on the requirements of the project, construction conditions, and the
            desired properties of the concrete.
          </p>
        </div>
      </Container>
    </section>
  );
}
