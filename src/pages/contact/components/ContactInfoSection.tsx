import { MapPin, Phone, Mail, Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import Container from "../../../components/layout/Container";
import bgBlobGradient from "../../../assets/bg-blob-gradient.svg";
import { CONTACT } from "../../../data/contact";

export default function ContactInfoSection() {
  const { t } = useTranslation("contact");

  const cards = [
    {
      icon: MapPin,
      label: t("info.address"),
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
    { icon: Phone, label: t("info.phone"), value: CONTACT.phone, href: CONTACT.phoneHref },
    { icon: Mail, label: t("info.email"), value: CONTACT.email, href: CONTACT.emailHref },
    { icon: Building2, label: t("info.nip"), value: CONTACT.nip },
  ];

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
            {t("info.heading")}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
            {t("info.description")}
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
              <a key={label} href={href} className={baseClass}>{inner}</a>
            ) : (
              <div key={label} className={baseClass}>{inner}</div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
