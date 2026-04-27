import { Microscope, ShieldCheck, FileText } from "lucide-react";
import Container from "../../../components/layout/Container";
import bgBlobGradient from "../../../assets/bg-blob-gradient.svg";

const pillars = [
  { icon: Microscope, label: "High precision", description: "Calibrated equipment and rigorous methodology" },
  { icon: ShieldCheck, label: "Certified methods", description: "Tests performed to PN-EN and PN-B standards" },
  { icon: FileText, label: "Full documentation", description: "Detailed reports, certificates, and analyses" },
];

export default function LabTestsIntroSection() {
  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      <img
        src={bgBlobGradient}
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-40 w-[480px] opacity-20 select-none"
      />
      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
            Precision Testing for Modern Construction
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-500 leading-relaxed">
            Our accredited laboratory provides comprehensive material testing services for concrete,
            aggregates, masonry elements, and mortars — giving you the data you need to ensure
            quality, compliance, and confidence in every project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pillars.map(({ icon: Icon, label, description }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center gap-4 bg-white rounded-2xl shadow-sm border border-slate-100 p-7"
            >
              <span className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <Icon size={22} />
              </span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{label}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
