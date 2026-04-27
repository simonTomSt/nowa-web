import Container from "../../../components/layout/Container";
import halaImg from "../../../assets/hala.jpg";

export default function AboutCompanySection() {
  return (
    <section className="relative bg-slate-50 py-20 lg:py-28 overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-md border border-slate-100 overflow-hidden">
          <div className="p-6 lg:p-8 pb-0">
            <img
              src={halaImg}
              alt="Nowa company facility"
              className="w-full h-72 lg:h-96 object-cover rounded-2xl"
            />
          </div>
          <div className="p-8 lg:p-12 flex flex-col gap-5">
            <p className="text-base text-gray-600 leading-relaxed">
              Our experienced team, full of creativity and openness, is a pioneer in creating
              products for the concrete industry. Our family-rooted company started its operations
              from scratch, leveraging our deep knowledge and courage to innovate. Over the course
              of more than 10 years, we have continuously perfected our chemical admixtures,
              developing proprietary production technologies. As a result, we have created products
              that not only improve the quality of concrete but are also economical.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              In our advanced research and construction laboratory, we not only create innovative
              admixtures, but also specialize in testing building materials, ensuring that our
              products are tailored to the individual needs of customers. Our offer is the result of
              the work of our team and the trust of our clients who see passion and commitment in
              our approach.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Our chemical admixtures for aerated and ready-mix concrete as well as building
              materials testing services are a symbol of quality at an attractive price, putting us
              at the forefront of the concrete industry. Thank you for your trust in us, which has
              allowed us to become a market leader, and we invite you to cooperate to shape a future
              full of innovation and excellence.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
