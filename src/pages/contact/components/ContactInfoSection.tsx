import { MapPin, Phone, Mail, Building2 } from "lucide-react";
import Container from "../../../components/layout/Container";
import bgBlobGradient from "../../../assets/bg-blob-gradient.svg";
import { CONTACT } from "../../../data/contact";

const cards = [
  {
    icon: MapPin,
    label: "Address",
    value: (
      <>
        {CONTACT.address.street}
        <br />
        {CONTACT.address.city}
        <br />
        {CONTACT.address.country}
      </>
    ),
  },
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: CONTACT.emailHref,
  },
  {
    icon: Building2,
    label: "NIP",
    value: CONTACT.nip,
  },
];

export default function ContactInfoSection() {
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
            Contact Details
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
            Reach out to us directly — we're ready to answer your questions and support your projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <>
                <span className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Icon size={22} />
                </span>
                <div className="mt-4">
                  <p className="font-semibold text-gray-900 mb-1">{label}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{value}</p>
                </div>
              </>
            );

            const baseClass =
              "flex flex-col items-center text-center p-7 rounded-2xl border border-slate-100 shadow-sm bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-md";

            return href ? (
              <a key={label} href={href} className={baseClass}>
                {inner}
              </a>
            ) : (
              <div key={label} className={baseClass}>
                {inner}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
