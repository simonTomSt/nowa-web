import { Target, ShieldCheck, Heart, TrendingUp, Users, Leaf } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Container from "../../../components/layout/Container";
import blobGrad from "../../../assets/blob-grad.svg";

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: Target,
    title: "Perfectionism",
    description:
      "Our absolute priority is to constantly improve the quality of our products and services.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    description: "We approach the tasks we perform with precision and accuracy.",
  },
  {
    icon: Heart,
    title: "Honesty",
    description:
      "Our operating principles are based on honesty and transparency towards our clients, which is the foundation of our professional business ethics.",
  },
  {
    icon: TrendingUp,
    title: "Development",
    description:
      "Our constant goal is not only to maintain our leading position in the industry, but also to constantly strive to develop and introduce the latest innovations into our production.",
  },
  {
    icon: Users,
    title: "Cooperation",
    description: "We are open to any proposals for cooperation.",
  },
  {
    icon: Leaf,
    title: "Ecology",
    description:
      "Our company is firmly committed to protecting the environment, taking numerous actions to minimize the impact of our activities on the planet.",
  },
];

export default function AboutValuesSection() {
  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      <img
        src={blobGrad}
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-40 w-[500px] opacity-30 select-none"
      />
      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
            Company Values
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
            For us, the company's values are the pursuit of excellence, innovation, honesty and a
            balanced approach.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 lg:p-8 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200"
            >
              <span className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <value.icon size={20} />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-gray-900">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
