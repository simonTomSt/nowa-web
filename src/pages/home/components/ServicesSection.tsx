import { FlaskConical, ClipboardCheck, Beaker, Cog, Wrench, Layers } from "lucide-react";
import Container from "../../../components/layout/Container";
import ServiceCard from "./ServiceCard";
import bgBlobGradient from "../../../assets/bg-blob-gradient.svg";
import blobGrad from "../../../assets/blob-grad.svg";

const services = [
  {
    icon: FlaskConical,
    title: "Laboratory Tests",
    description:
      "Comprehensive material testing and certification for building materials, ensuring compliance with industry standards.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit",
    description:
      "Professional auditing of concrete production processes, quality control systems, and plant operations.",
  },
  {
    icon: Beaker,
    title: "Admixtures",
    description:
      "High-performance chemical admixtures for aerated and ready-mix concrete tailored to your production needs.",
  },
  {
    icon: Cog,
    title: "Production Technology",
    description:
      "Technical consulting and process optimization for modern concrete manufacturing and aerated concrete plants.",
  },
  {
    icon: Wrench,
    title: "Machinery",
    description:
      "Supply and servicing of specialized equipment for concrete production, dosing systems, and lab instrumentation.",
  },
  {
    icon: Layers,
    title: "Raw Materials",
    description:
      "Sourcing and quality assessment of raw materials used in concrete production, including binders and aggregates.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative bg-gray-50 py-20 lg:py-28 overflow-hidden">
      {/* Decorative blob — top right */}
      <img
        src={bgBlobGradient}
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-32 w-[520px] opacity-70 select-none"
      />
      {/* Decorative blob — bottom left */}
      <img
        src={blobGrad}
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-36 w-[480px] opacity-60 select-none"
      />
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
              What do we do?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
              From chemical admixtures and raw materials to laboratory testing and production
              consulting — we cover every stage of modern concrete manufacturing.
            </p>
          </div>
          <a
            href="/offer"
            className="inline-flex items-center justify-center h-11 px-8 rounded-xl bg-accent text-accent-foreground font-semibold text-base shadow-sm hover:bg-accent/90 transition-colors duration-150 shrink-0"
          >
            Check Out Offer
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
