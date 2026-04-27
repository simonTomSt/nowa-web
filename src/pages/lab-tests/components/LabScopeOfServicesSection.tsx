import {
  ClipboardCheck,
  FlaskConical,
  Settings2,
  TestTube2,
  BarChart3,
  FileText,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Container from "../../../components/layout/Container";
import bgBlobGradient from "../../../assets/bg-blob-gradient.svg";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: ClipboardCheck,
    title: "Raw material evaluation",
    description:
      "Assessment of the quality of raw materials used in concrete and mortar production.",
  },
  {
    icon: FlaskConical,
    title: "Recipe analysis & optimisation",
    description:
      "Analysis and optimisation of concrete, mortar, and CBGM mix compositions.",
  },
  {
    icon: Settings2,
    title: "Admixture selection",
    description:
      "Selection of appropriate concrete admixtures based on the raw materials used by the client.",
  },
  {
    icon: TestTube2,
    title: "Laboratory & field testing",
    description:
      "Verification of admixture effectiveness through both laboratory and on-site tests.",
  },
  {
    icon: BarChart3,
    title: "Ongoing quality control",
    description:
      "Continuous quality and durability monitoring of concretes and dry mixes in line with standards and internal QC procedures.",
  },
  {
    icon: FileText,
    title: "Full documentation",
    description:
      "Preparation of comprehensive documentation including test results, reports, and analyses.",
  },
];

export default function LabScopeOfServicesSection() {
  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      <img
        src={bgBlobGradient}
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-32 w-[480px] opacity-20 select-none"
      />
      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
            Scope of Activity
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
            We provide comprehensive technical and technological solutions for concrete and mortar
            producers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 lg:p-8 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200"
            >
              <span className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <service.icon size={20} />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-gray-900">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
