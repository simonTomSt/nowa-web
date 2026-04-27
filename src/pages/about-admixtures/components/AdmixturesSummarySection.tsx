import { useTranslation } from "react-i18next";
import Container from "../../../components/layout/Container";

export default function AdmixturesSummarySection() {
  const { t } = useTranslation("admixtures");

  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <div className="max-w-3xl mx-auto border-l-4 border-accent pl-8 py-2">
          <p className="text-lg text-gray-700 leading-relaxed">{t("summary")}</p>
        </div>
      </Container>
    </section>
  );
}
