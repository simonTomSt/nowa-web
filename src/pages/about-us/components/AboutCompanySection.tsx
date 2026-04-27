import { useTranslation } from "react-i18next";
import Container from "../../../components/layout/Container";
import halaImg from "../../../assets/hala.jpg";

export default function AboutCompanySection() {
  const { t } = useTranslation("about");

  return (
    <section className="relative bg-slate-50 py-20 lg:py-28 overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-md border border-slate-100 overflow-hidden">
          <div className="p-6 lg:p-8 pb-0">
            <img
              src={halaImg}
              alt={t("company.imageAlt")}
              className="w-full h-72 lg:h-96 object-cover rounded-2xl"
            />
          </div>
          <div className="p-8 lg:p-12 flex flex-col gap-5">
            <p className="text-base text-gray-600 leading-relaxed">{t("company.p1")}</p>
            <p className="text-base text-gray-600 leading-relaxed">{t("company.p2")}</p>
            <p className="text-base text-gray-600 leading-relaxed">{t("company.p3")}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
