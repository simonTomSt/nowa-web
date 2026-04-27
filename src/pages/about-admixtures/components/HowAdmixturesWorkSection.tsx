import { FlaskConical, Sparkles, Clock, Link2, Wind, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Container from "../../../components/layout/Container";
import bgBlobGradient from "../../../assets/bg-blob-gradient.svg";

interface WorkBlock {
  icon: LucideIcon;
  title: string;
  description: string;
}

const blocks: WorkBlock[] = [
  {
    icon: FlaskConical,
    title: "Plasticizers",
    description:
      "Plasticizers are chemical substances that are added to the concrete mix to improve its workability and consistency. They work by reducing the surface tension of water in the mix, allowing for better dispersion of cement particles. As a result, plasticizers allow the use of less water in the mix, while maintaining the workability and good properties of the concrete.",
  },
  {
    icon: Sparkles,
    title: "PCE Superplasticizers",
    description:
      "Polycarboxylate ether (PCE) superplasticizers are highly effective concrete plasticizers that are added in small amounts to improve the fluidity and workability of the concrete mix. Their chemical structure allows them to strongly bind to cement particles, which prevents them from sticking together and increases the flowability of concrete.",
  },
  {
    icon: Clock,
    title: "Retarding & Accelerating Admixtures",
    description:
      "Retarding admixtures delay the cement setting process, which is useful when more time is needed for laying, transportation or finishing the concrete surface. They work by adsorbing on the surface of the cement grains, slowing the hydration process. Accelerating admixtures, on the other hand, speed up the setting and hardening process of cement in concrete. They are useful in situations that require fast setting of the concrete.",
  },
  {
    icon: Link2,
    title: "Bonding Admixtures",
    description:
      "Bonding admixtures, also known as bonding agents or adhesion promoters, are substances added to concrete or mortar to improve their adhesion to other surfaces. They work by creating a chemical or mechanical bond between fresh concrete and an existing surface or material.",
  },
  {
    icon: Wind,
    title: "Air-Entraining Admixtures",
    description:
      "Air-entraining admixtures are chemical substances added to concrete to introduce a system of small air bubbles into the mixture. These bubbles are evenly distributed throughout the concrete mass and remain stable after the concrete hardens. The main purpose of these admixtures is to improve the frost resistance of concrete.",
  },
  {
    icon: Layers,
    title: "Complex Admixtures",
    description:
      "Complex admixtures are a type of concrete admixture that combine the functions of several different types of admixtures into one product. They can contain, for example, a combination of plasticizer, retarder, and air-entraining agent. They can be customized to specific needs and construction conditions. They simplify the concrete dosing process because only one admixture needs to be added instead of several separate ones.",
  },
];

export default function HowAdmixturesWorkSection() {
  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      <img
        src={bgBlobGradient}
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-24 w-[420px] opacity-35 select-none"
      />
      <Container className="relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center tracking-tight mb-14">
          How do concrete admixtures work?
        </h2>
        <div className="max-w-4xl mx-auto flex flex-col">
          {blocks.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className={`flex gap-6 px-6 py-10 rounded-2xl ${i % 2 !== 0 ? "bg-slate-50" : ""}`}
            >
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Icon className="text-accent" size={22} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
