import { Accordion } from "@heroui/react";
import Container from "../../../components/layout/Container";
import bgBlobGradient from "../../../assets/bg-blob-gradient.svg";

const faqs = [
  {
    question: "Are you a concrete seller?",
    answer:
      "No, we do not sell concrete, only chemical admixtures that improve its properties. However, this may change soon, as we are working on our own innovative building material based on concrete and we want to introduce it to the market. If this topic interests you, write to us or follow us on an ongoing basis.",
  },
  {
    question: "I don't see the tests I need in the offer.",
    answer:
      "Our laboratory offer is constantly expanding. If you don't see the specific test you need, please contact us directly — in many cases we can accommodate individual requests or direct you to a partner laboratory.",
  },
  {
    question: "Do you only sell in Poland?",
    answer:
      "No, we operate internationally. Our chemical admixtures and testing services are available across Europe. Contact us to discuss delivery options and logistics for your region.",
  },
  {
    question: "What is your technical support offer?",
    answer:
      "We provide comprehensive technical support including on-site consultations, production process optimization, dosage recommendations, and training for your team. Our experts are available to assist throughout the entire implementation process.",
  },
  {
    question: "How long does laboratory testing take?",
    answer:
      "Testing timeframes depend on the type and scope of tests required. Standard tests are typically completed within 5–10 business days. For urgent requests, please contact us to discuss expedited options.",
  },
  {
    question: "Can I order a sample of your admixtures before purchasing?",
    answer:
      "Yes, we offer samples of our admixtures so you can evaluate their performance in your specific production conditions before committing to a full order. Contact us to arrange a sample shipment.",
  },
];

export default function AboutFAQSection() {
  return (
    <section className="relative bg-slate-50 py-20 lg:py-28 overflow-hidden">
      <img
        src={bgBlobGradient}
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-32 w-[480px] opacity-20 select-none"
      />
      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
            Got questions? We've gathered answers to the most common ones below.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion className="w-full" variant="surface">
            {faqs.map((faq) => (
              <Accordion.Item key={faq.question}>
                <Accordion.Heading>
                  <Accordion.Trigger className="font-semibold text-gray-900 text-left">
                    {faq.question}
                    <Accordion.Indicator />
                  </Accordion.Trigger>
                </Accordion.Heading>
                <Accordion.Panel>
                  <Accordion.Body className="text-gray-500 leading-relaxed">
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
