import { Handshake, Shield, Droplets, Microscope, BadgeCheck, ThumbsUp } from "lucide-react";
import SplitFeatureSection from "./SplitFeatureSection";
import labImage from "../../../assets/lab.jpg";
import measuringImage from "../../../assets/measuring.jpeg";
import blobGrad from "../../../assets/blob-grad.svg";
import bgBlobGradient from "../../../assets/bg-blob-gradient.svg";

export default function ValuePropositionSection() {
  return (
    <section className="bg-white">
      <SplitFeatureSection
        direction="right"
        heading="Why are our chemical admixtures for concrete the best choice?"
        description="If you are looking for effective and economical chemical admixtures for concrete, our company is the answer to your needs. We specialize in offering a new generation of lignosulfonate-based admixtures that guarantee higher quality concrete at competitive prices. Whether you need admixtures in liquid or solid form, our experienced team of specialists will tailor them to your expectations."
        features={[
          { icon: Shield, label: "Greater Endurance" },
          { icon: Droplets, label: "Water Reduction" },
        ]}
        ctaLabel="More properties"
        ctaHref="#"
        image={labImage}
        imageAlt="Chemistry lab with glassware and admixture samples"
        card={{
          icon: Handshake,
          title: "Individual Approach",
          description:
            "For each client, admixtures are selected and composed to precisely match their specific requirements.",
        }}
        blob={{ src: blobGrad, side: "left" }}
      />

      <SplitFeatureSection
        direction="left"
        heading="Laboratory tests of building materials"
        description="We collect samples of building materials regardless of location and transfer them to our advanced construction laboratory. As an expert in the field of materials testing and analysis, we offer aggregate manufacturers support not only in terms of Factory Production Control but also in preparing professional commercial documentation."
        features={[
          { icon: BadgeCheck, label: "Maintaining Standards And Norms" },
          { icon: ThumbsUp, label: "Product Quality Control" },
        ]}
        ctaLabel="Full offer of tests"
        ctaHref="#"
        image={measuringImage}
        imageAlt="Scientist measuring building material samples in a laboratory"
        card={{
          icon: Microscope,
          title: "Professional measuring equipment",
          description:
            "We have modern measuring equipment that meets all technical standards and norms.",
        }}
        blob={{ src: bgBlobGradient, side: "right" }}
      />
    </section>
  );
}
