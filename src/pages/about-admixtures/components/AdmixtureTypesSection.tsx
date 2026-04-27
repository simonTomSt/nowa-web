import {
  FlaskConical,
  Sparkles,
  Droplets,
  Wind,
  Timer,
  Zap,
  ShieldCheck,
  Layers,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Container from "../../../components/layout/Container";
import blobGrad from "../../../assets/blob-grad.svg";

interface AdmixtureType {
  number: number;
  icon: LucideIcon;
  name: string;
  description: string;
}

const types: AdmixtureType[] = [
  {
    number: 1,
    icon: FlaskConical,
    name: "Plasticizing admixtures (plasticizers)",
    description:
      "These additives improve the plasticity and consistency of the concrete mix, enabling its better shaping and distribution. They help reduce the amount of water needed to achieve the appropriate consistency, which improves the strength and quality of the concrete.",
  },
  {
    number: 2,
    icon: Sparkles,
    name: "Fluidizing admixtures (superplasticizers)",
    description:
      "Superplasticizers work similarly to plasticizers, but they are more effective and allow for achieving highly fluid concrete mixes with a minimal addition of water. They enable the production of concrete with exceptionally high fluidity.",
  },
  {
    number: 3,
    icon: Droplets,
    name: "Admixtures increasing water bonding (stabilizers)",
    description:
      "These substances increase the ability of the concrete mix to retain water, which improves the cohesiveness of the concrete. They are often used in the production of self-compacting concrete.",
  },
  {
    number: 4,
    icon: Wind,
    name: "Air-entraining additives",
    description:
      "These admixtures introduce air microbubbles into the concrete mixture. They help increase concrete's frost resistance by reducing internal stresses during the freezing and thawing process.",
  },
  {
    number: 5,
    icon: Timer,
    name: "Admixtures that accelerate setting",
    description:
      "These substances shorten the time needed to start the cement setting process in concrete. They are useful in situations where quick achievement of concrete strength is required.",
  },
  {
    number: 6,
    icon: Zap,
    name: "Admixtures that accelerate hardening",
    description:
      "These admixtures speed up the hardening process of concrete after the cement has bonded with the water. They are used to shorten the curing time of concrete.",
  },
  {
    number: 7,
    icon: ShieldCheck,
    name: "Sealing admixtures",
    description:
      "These substances are intended to increase the tightness of the concrete mixture, which is important in the case of structures that require resistance to water seepage.",
  },
  {
    number: 8,
    icon: Layers,
    name: "Complex admixtures",
    description:
      "These are special admixtures that combine the functions of two or more types of admixtures. For example, they can delay the setting of concrete, reduce the amount of water and at the same time plasticize the mixture.",
  },
];

export default function AdmixtureTypesSection() {
  return (
    <section className="relative bg-slate-50 py-20 lg:py-28 overflow-hidden">
      <img
        src={blobGrad}
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -left-28 w-[460px] opacity-40 select-none"
      />
      <Container className="relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center tracking-tight mb-12">
          Types of concrete admixtures
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {types.map(({ number, icon: Icon, name, description }) => (
            <div
              key={number}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex gap-5"
            >
              <div className="shrink-0 flex flex-col items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold">
                  {number}
                </span>
                <Icon className="text-accent opacity-70" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 leading-snug">{name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
