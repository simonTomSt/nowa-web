import React from "react";
import { CheckCircle2, Layers, Mountain, BrickWall, Hammer } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Accordion } from "@heroui/react";
import type { Key } from "@heroui/react";
import { useTranslation } from "react-i18next";
import Container from "../../../components/layout/Container";
import blobGrad from "../../../assets/blob-grad.svg";

const categoryIcons: Record<string, LucideIcon> = {
  concrete: Layers,
  aggregates: Mountain,
  masonry: BrickWall,
  mortars: Hammer,
};

const categoryKeys = ["concrete", "aggregates", "masonry", "mortars"] as const;

interface TestItem {
  name: string;
  standard?: string;
}

export default function LabTestCategoriesSection() {
  const { t } = useTranslation("labTests");
  const prevKeys = React.useRef<Set<Key>>(new Set(["concrete"]));

  function handleExpandedChange(keys: Set<Key>) {
    const newlyOpened = [...keys].find((k) => !prevKeys.current.has(k));
    prevKeys.current = keys;

    if (newlyOpened) {
      setTimeout(() => {
        const el = document.getElementById(`accordion-heading-${newlyOpened}`);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 200);
    }
  }

  return (
    <section className="relative bg-slate-50 py-20 lg:py-28 overflow-hidden">
      <img
        src={blobGrad}
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-32 w-[460px] opacity-30 select-none"
      />
      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
            {t("categories.heading")}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
            {t("categories.description")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion
            className="w-full"
            variant="surface"
            defaultExpandedKeys={["concrete"]}
            onExpandedChange={handleExpandedChange}
          >
            {categoryKeys.map((catKey) => {
              const Icon = categoryIcons[catKey];
              const tests = t(`categories.${catKey}.tests`, { returnObjects: true }) as TestItem[];
              const label = t(`categories.${catKey}.label`);

              return (
                <Accordion.Item key={catKey} id={catKey}>
                  <Accordion.Heading id={`accordion-heading-${catKey}`}>
                    <Accordion.Trigger className="font-semibold text-gray-900 text-left">
                      <span className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                          <Icon size={16} />
                        </span>
                        {label}
                      </span>
                      <Accordion.Indicator />
                    </Accordion.Trigger>
                  </Accordion.Heading>
                  <Accordion.Panel>
                    <Accordion.Body>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 pb-2">
                        {tests.map((test, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 bg-white rounded-xl p-4 border border-slate-100 shadow-sm"
                          >
                            <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-accent" />
                            <div>
                              <p className="text-sm font-medium text-gray-800 leading-snug">{test.name}</p>
                              {test.standard && (
                                <p className="text-xs text-gray-400 mt-0.5">{test.standard}</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </Accordion.Body>
                  </Accordion.Panel>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
