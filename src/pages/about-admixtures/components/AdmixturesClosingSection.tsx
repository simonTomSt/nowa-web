import { useTranslation } from "react-i18next";
import Container from "../../../components/layout/Container";
import blobGrad from "../../../assets/blob-grad.svg";

export default function AdmixturesClosingSection() {
  const { t } = useTranslation("admixtures");

  return (
    <section className="relative bg-secondary py-20 lg:py-28 overflow-hidden">
      <img
        src={blobGrad}
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-24 w-[440px] opacity-10 select-none"
      />
      <img
        src={blobGrad}
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-20 w-[380px] opacity-10 select-none"
      />
      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl sm:text-2xl text-white leading-relaxed font-light">
            {t("closing")}
          </p>
        </div>
      </Container>
    </section>
  );
}
