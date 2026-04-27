import Container from "../../../components/layout/Container";
import blobGrad from "../../../assets/blob-grad.svg";
import labTest2 from "../../../assets/lab-test-2.jpg";
import labTest3 from "../../../assets/lab-test3.jpg";
import labTests from "../../../assets/lab-tests.jpg";

export default function LabCredibilitySection() {
  return (
    <section className="relative bg-slate-50 py-20 lg:py-28 overflow-hidden">
      <img
        src={blobGrad}
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -left-28 w-[460px] opacity-25 select-none"
      />
      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
            Our Laboratory
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
            Modern equipment and experienced staff — built to deliver reliable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 rounded-2xl overflow-hidden aspect-video">
            <img
              src={labTest2}
              alt="Laboratory sieve analysis equipment"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden flex-1">
              <img
                src={labTest3}
                alt="Precision laboratory scales"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden flex-1">
              <img
                src={labTests}
                alt="Laboratory testing process"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
