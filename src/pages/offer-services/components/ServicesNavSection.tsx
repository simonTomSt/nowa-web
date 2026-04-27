import { useTranslation } from "react-i18next";
import Container from "../../../components/layout/Container";

const NAV_ITEMS = [
  { key: "labTests", id: "lab-tests" },
  { key: "audit", id: "audit" },
  { key: "production", id: "production" },
  { key: "machinery", id: "machinery" },
  { key: "rawMaterials", id: "raw-materials" },
] as const;

interface ServicesNavSectionProps {
  activeSection: string;
}

export default function ServicesNavSection({ activeSection }: ServicesNavSectionProps) {
  const { t } = useTranslation("services");

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }

  return (
    <div className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
      <Container>
        <nav aria-label={t("nav.ariaLabel")} className="overflow-x-auto">
          <ul className="flex items-center gap-1 py-3 min-w-max">
            {NAV_ITEMS.map(({ key, id }) => {
              const isActive = activeSection === id;
              return (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 whitespace-nowrap ${
                      isActive
                        ? "bg-accent text-white"
                        : "text-gray-600 hover:text-gray-900 hover:bg-slate-100"
                    }`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {t(`nav.${key}`)}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </div>
  );
}
