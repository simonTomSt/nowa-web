import { Handshake, Shield, Droplets, Microscope, BadgeCheck, ThumbsUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import SplitFeatureSection from "./SplitFeatureSection";
import labImage from "../../../assets/lab.jpg";
import measuringImage from "../../../assets/measuring.jpeg";
import blobGrad from "../../../assets/blob-grad.svg";
import bgBlobGradient from "../../../assets/bg-blob-gradient.svg";

export default function ValuePropositionSection() {
  const { t } = useTranslation("home");

  return (
    <section className="bg-white">
      <SplitFeatureSection
        direction="right"
        heading={t("valueProposition.admixtures.heading")}
        description={t("valueProposition.admixtures.description")}
        features={[
          { icon: Shield, label: t("valueProposition.admixtures.feature1") },
          { icon: Droplets, label: t("valueProposition.admixtures.feature2") },
        ]}
        ctaLabel={t("valueProposition.admixtures.cta")}
        ctaHref="#"
        image={labImage}
        imageAlt={t("valueProposition.admixtures.imageAlt")}
        card={{
          icon: Handshake,
          title: t("valueProposition.admixtures.card.title"),
          description: t("valueProposition.admixtures.card.description"),
        }}
        blob={{ src: blobGrad, side: "left" }}
      />

      <SplitFeatureSection
        direction="left"
        heading={t("valueProposition.labTests.heading")}
        description={t("valueProposition.labTests.description")}
        features={[
          { icon: BadgeCheck, label: t("valueProposition.labTests.feature1") },
          { icon: ThumbsUp, label: t("valueProposition.labTests.feature2") },
        ]}
        ctaLabel={t("valueProposition.labTests.cta")}
        ctaHref="#"
        image={measuringImage}
        imageAlt={t("valueProposition.labTests.imageAlt")}
        card={{
          icon: Microscope,
          title: t("valueProposition.labTests.card.title"),
          description: t("valueProposition.labTests.card.description"),
        }}
        blob={{ src: bgBlobGradient, side: "right" }}
      />
    </section>
  );
}
