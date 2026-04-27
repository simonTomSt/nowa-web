import { Accordion } from "@heroui/react";
import { useTranslation } from "react-i18next";
import Container from "../../../components/layout/Container";
import bgBlobGradient from "../../../assets/bg-blob-gradient.svg";

const faqKeys = ["seller", "missingTests", "international", "support", "duration", "sample"] as const;

export default function AboutFAQSection() {
  const { t } = useTranslation("about");

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
            {t("faq.heading")}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
            {t("faq.description")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion className="w-full" variant="surface">
            {faqKeys.map((key) => (
              <Accordion.Item key={key}>
                <Accordion.Heading>
                  <Accordion.Trigger className="font-semibold text-gray-900 text-left">
                    {t(`faq.items.${key}.question`)}
                    <Accordion.Indicator />
                  </Accordion.Trigger>
                </Accordion.Heading>
                <Accordion.Panel>
                  <Accordion.Body className="text-gray-500 leading-relaxed">
                    {t(`faq.items.${key}.answer`)}
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
