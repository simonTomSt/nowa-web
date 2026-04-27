import React from "react";
import {
  CheckCircle2,
  Layers,
  Mountain,
  BrickWall,
  Hammer,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Accordion } from "@heroui/react";
import type { Key } from "@heroui/react";
import Container from "../../../components/layout/Container";
import blobGrad from "../../../assets/blob-grad.svg";

interface TestItem {
  name: string;
  standard?: string;
}

interface TestCategory {
  id: string;
  label: string;
  icon: LucideIcon;
  tests: TestItem[];
}

const categories: TestCategory[] = [
  {
    id: "concrete",
    label: "Concrete",
    icon: Layers,
    tests: [
      { name: "Consistency — Ve-Be method", standard: "PN-EN 12350-3" },
      { name: "Consistency — slump cone method", standard: "PN-EN 12350-2" },
      { name: "Consistency — flow table method", standard: "PN-EN 12350-5" },
      { name: "Density (fresh concrete)", standard: "PN-EN 12350-6" },
      { name: "Air content", standard: "PN-EN 12350-7" },
      { name: "Compressive strength — cubes supplied by client" },
      {
        name: "Compressive strength — making, curing & testing",
        standard: "PN-EN 12390-3",
      },
      { name: "Density (hardened concrete)", standard: "PN-EN 12390-7" },
      {
        name: "Depth of water penetration under pressure",
        standard: "PN-EN 12390-8",
      },
      { name: "Frost resistance", standard: "PN-EN 12390-9" },
    ],
  },
  {
    id: "aggregates",
    label: "Aggregates",
    icon: Mountain,
    tests: [
      {
        name: "Abbreviated petrographic description",
        standard: "PN-EN 932-3:1999",
      },
      {
        name: "Moisture content by drying in ventilated oven",
        standard: "PN-EN 1097-5:2001",
      },
      {
        name: "Particle size distribution (grading)",
        standard: "PN-EN 933-1:2000",
      },
      { name: "Fines content — dry sieving" },
      { name: "Fines content — wet sieving (fi 300 mm sieves)" },
      {
        name: "Flakiness index — full normative sieve set",
        standard: "PN-EN 933-3:2000",
      },
      { name: "Shape index (Schultz calliper)", standard: "PN-EN 933-4:2000" },
      {
        name: "Percentage of crushed and broken surfaces",
        standard: "PN-EN 933-5:2000",
      },
      { name: "Flow coefficient", standard: "PN-EN 933-6:2000" },
      { name: "Shell content", standard: "PN-EN 933-7:2000" },
      { name: "Sand equivalent SE", standard: "PN-EN 933-8:2000" },
      { name: "Methylene blue value MBF", standard: "PN-EN 933-9:2000" },
      { name: "Bulk density (loose & tapped)", standard: "PN-EN 1097-3:2000" },
      {
        name: "Particle density, voids, water absorption WA24",
        standard: "PN-EN 1097-6:2002",
      },
      {
        name: "Frost resistance — 10 cycles (water + 2% NaCl)",
        standard: "PN-EN 1367-1:2001",
      },
      {
        name: "Frost resistance — 10 cycles in magnesium sulphate",
        standard: "PN-EN 1367-2:2000",
      },
      { name: "Resistance to fragmentation LA", standard: "PN-EN 1097-2:2000" },
      { name: "Sulphur content", standard: "PN-EN 1744-1:2000" },
      { name: "Acid-soluble sulphates AS", standard: "PN-EN 1744-1:2000" },
      {
        name: "Components affecting setting & hardening (setting delay, relative compressive strength S)",
        standard: "PN-EN 1744-1:2000",
      },
      { name: "Organic impurities (humus)", standard: "PN-EN 1744-1:2000" },
      { name: "Water solubility", standard: "PN-EN 1744-1:2000" },
      { name: "Loss on ignition", standard: "PN-EN 1744-1:2000" },
    ],
  },
  {
    id: "masonry",
    label: "Masonry elements",
    icon: BrickWall,
    tests: [
      { name: "Compressive strength", standard: "PN-EN 772-1" },
      { name: "Net and gross dry density", standard: "PN-EN 772-13" },
      { name: "Water absorption", standard: "PN-EN 772-11" },
      { name: "Moisture movement (linear changes)", standard: "PN-EN 772-14" },
      { name: "Frost resistance (F10 or F25)", standard: "PN-B-19306:2004" },
      { name: "Dimensions", standard: "PN-EN 772-16" },
      { name: "Flatness of faces", standard: "PN-EN 772-20" },
      { name: "Flexural tensile strength", standard: "PN-EN 772-6" },
      { name: "Percentage area of holes", standard: "PN-EN 772-2" },
    ],
  },
  {
    id: "mortars",
    label: "Mortars",
    icon: Hammer,
    tests: [
      {
        name: "Consistency of fresh mortar",
        standard: "PN-EN 1015-3:2000/A1:2004",
      },
      {
        name: "Bulk density of fresh mortar",
        standard: "PN-EN 1015-6:2000/A1:2007",
      },
      {
        name: "Workable life / pot life",
        standard: "PN-EN 1015-9:2001/A1:2007 Method A",
      },
      { name: "Air content", standard: "PN-EN 1015-7:2000" },
      {
        name: "Water-soluble chloride content",
        standard: "PN-EN 1015-17:2002/A1:2005",
      },
      {
        name: "Dry bulk density of hardened mortar",
        standard: "PN-EN 1015-10:2001/A1:2007",
      },
      { name: "Compressive strength", standard: "PN-EN 1015-11:2001/A1:2007" },
      {
        name: "Water absorption by capillarity",
        standard: "PN-EN 1015-18:2003",
      },
      {
        name: "Durability — freeze-thaw resistance",
        standard: "PN-85/B-04500",
      },
    ],
  },
];

export default function LabTestCategoriesSection() {
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
            Performed Tests
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
            Select a category to explore the full scope of tests we carry out.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion
            className="w-full"
            variant="surface"
            defaultExpandedKeys={["concrete"]}
            onExpandedChange={handleExpandedChange}
          >
            {categories.map(({ id, label, icon: Icon, tests }) => (
              <Accordion.Item key={id} id={id}>
                <Accordion.Heading id={`accordion-heading-${id}`}>
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
                      {tests.map((test) => (
                        <div
                          key={test.name}
                          className="flex items-start gap-3 bg-white rounded-xl p-4 border border-slate-100 shadow-sm"
                        >
                          <CheckCircle2
                            size={16}
                            className="shrink-0 mt-0.5 text-accent"
                          />
                          <div>
                            <p className="text-sm font-medium text-gray-800 leading-snug">
                              {test.name}
                            </p>
                            {test.standard && (
                              <p className="text-xs text-gray-400 mt-0.5">
                                {test.standard}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Accordion.Body>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
