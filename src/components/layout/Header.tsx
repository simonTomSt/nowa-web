import { useState, useEffect } from "react";
import { Button, Dropdown, Label, Surface } from "@heroui/react";
import {
  Menu,
  X,
  ChevronDown,
  FlaskConical,
  Blocks,
  Wrench,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import nowaFullLogo from "../../assets/nowa_full_logo.svg";
import nowaFullLogoDark from "../../assets/nowa_full_logo_dark.svg";
import ueLogoFlag from "../../assets/ue-logo-flag.jpeg";
import Container from "./Container";
import { getRoute, type Lang } from "../../i18n/routes";

interface HeaderProps {
  lang: Lang;
}

export default function Header({ lang }: HeaderProps) {
  const { t } = useTranslation("common");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOfferOpen, setMobileOfferOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setCompact(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    {
      label: t("nav.aboutAdmixtures"),
      href: getRoute("aboutAdmixtures", lang),
    },
    { label: t("nav.aboutUs"), href: getRoute("aboutUs", lang) },
    { label: t("nav.contact"), href: getRoute("contact", lang) },
  ];

  const offerLinks = [
    {
      label: t("nav.offerLabTests"),
      href: getRoute("offerLabTests", lang),
      icon: FlaskConical,
      description: t("nav.offerLabTestsDesc"),
    },
    {
      label: t("nav.offerAdmixtures"),
      href: getRoute("offerAdmixtures", lang),
      icon: Blocks,
      description: t("nav.offerAdmixturesDesc"),
    },
    {
      label: t("nav.offerServices"),
      href: getRoute("offerServices", lang),
      icon: Wrench,
      description: t("nav.offerServicesDesc"),
    },
  ];

  const pathname = window.location.pathname;
  const isOfferActive = offerLinks.some((l) => l.href === pathname);

  const getLinkClass = (href: string) => {
    const isActive = href === pathname;
    if (scrolled) {
      return `relative px-4 py-2 text-base font-medium rounded-xl transition-all duration-150 ${
        isActive
          ? "text-accent bg-white shadow-sm"
          : "text-gray-600 hover:text-accent hover:bg-white"
      }`;
    }
    return `relative px-4 py-2 text-base font-medium rounded-xl transition-all duration-150 ${
      isActive
        ? "text-white bg-white/20 shadow-sm"
        : "text-white/90 hover:text-white hover:bg-white/15"
    }`;
  };

  const offerBtnClass = scrolled
    ? `flex items-center gap-1.5 px-4 py-2 text-base font-medium rounded-xl transition-all duration-150 group/offer ${isOfferActive ? "text-accent bg-white shadow-sm" : "text-gray-600 hover:text-accent hover:bg-white"}`
    : `flex items-center gap-1.5 px-4 py-2 text-base font-medium rounded-xl transition-all duration-150 group/offer ${isOfferActive ? "text-white bg-white/20 shadow-sm" : "text-white/90 hover:text-white hover:bg-white/15"}`;

  return (
    <>
      {/* ── Primary header: absolute, overlays hero ── */}
      <header className="absolute top-0 left-0 w-full z-50">
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5"
              : "bg-transparent"
          }`}
        >
          <Container>
            <div className="flex items-center justify-between h-20">
              <a href={getRoute("home", lang)} className="flex-shrink-0 group">
                <img
                  src={scrolled ? nowaFullLogoDark : nowaFullLogo}
                  alt="Nowa"
                  className="h-12 w-auto transition-all duration-200 group-hover:opacity-75 group-hover:scale-[0.98]"
                />
              </a>

              <nav className="hidden md:flex items-center">
                <div
                  className={`flex items-center gap-1 px-2 py-1.5 rounded-2xl transition-all duration-300 ${
                    scrolled
                      ? "bg-gray-100/80 border border-black/5 shadow-sm"
                      : "bg-white/10 border border-white/20 backdrop-blur-sm"
                  }`}
                >
                  {navLinks.map((link) => (
                    <a key={link.href} href={link.href} className={getLinkClass(link.href)}>
                      {link.label}
                    </a>
                  ))}

                  <Dropdown>
                    <Button variant="none" className={offerBtnClass}>
                      {t("nav.offer")}
                      <ChevronDown
                        size={14}
                        className="mt-px transition-transform duration-200 group-hover/offer:rotate-180"
                      />
                    </Button>
                    <Dropdown.Popover className="min-w-64">
                      <Dropdown.Menu className="p-1">
                        {offerLinks.map((link) => (
                          <Dropdown.Item
                            key={link.href}
                            id={link.href}
                            textValue={link.label}
                            className="rounded-lg"
                          >
                            <a
                              href={link.href}
                              className="w-full flex items-start gap-3 py-1"
                            >
                              <span className="mt-0.5 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                                <link.icon size={15} />
                              </span>
                              <span className="flex flex-col">
                                <Label className="font-medium text-gray-800">
                                  {link.label}
                                </Label>
                                <span className="text-xs text-gray-400 mt-0.5">
                                  {link.description}
                                </span>
                              </span>
                            </a>
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown.Popover>
                  </Dropdown>
                </div>
              </nav>

              <div className="hidden md:flex items-center gap-4">
                <a
                  href={getRoute("euProjects", lang)}
                  aria-label={t("euProjectsAriaLabel")}
                >
                  <img
                    src={ueLogoFlag}
                    alt=""
                    className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                </a>
              </div>

              <button
                className={`md:hidden w-10 h-10 flex items-center justify-center rounded-xl border transition-colors shadow-sm ${
                  scrolled
                    ? "border-gray-200 bg-white/80 text-gray-600 hover:border-accent hover:text-accent"
                    : "border-white/30 bg-white/10 text-white hover:bg-white/20"
                }`}
                aria-label={t("nav.toggleMenu")}
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>

            {mobileOpen && (
              <Surface
                variant="secondary"
                className="md:hidden rounded-2xl mx-1 mb-3 p-3 border border-black/5 shadow-lg flex flex-col gap-1"
              >
                {navLinks.map((link) => {
                  const isActive = link.href === pathname;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`px-4 py-3 text-base font-medium rounded-xl transition-all ${
                        isActive
                          ? "text-accent bg-white shadow-sm"
                          : "text-gray-700 hover:text-accent hover:bg-white"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  );
                })}
                <button
                  className={`w-full px-4 py-3 text-base font-medium rounded-xl transition-all text-left flex items-center justify-between ${
                    isOfferActive
                      ? "text-accent bg-white shadow-sm"
                      : "text-gray-700 hover:text-accent hover:bg-white"
                  }`}
                  onClick={() => setMobileOfferOpen((v) => !v)}
                >
                  {t("nav.offer")}
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${
                      mobileOfferOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileOfferOpen && (
                  <div className="mx-2 flex flex-col gap-1 border-l-2 border-accent/30 pl-3">
                    {offerLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="flex items-center gap-3 py-2.5 text-base text-gray-600 hover:text-accent transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        <link.icon size={15} className="shrink-0 text-accent" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
                <div className="mt-1 pt-3 border-t border-black/5 px-2">
                  <a
                    href={getRoute("euProjects", lang)}
                    aria-label={t("euProjectsAriaLabel")}
                  >
                    <img
                      src={ueLogoFlag}
                      alt="EU"
                      className="h-7 w-auto opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </a>
                </div>
              </Surface>
            )}
          </Container>
        </div>
      </header>

      {/* ── Compact sticky header: slides in after scrolling past hero ── */}
      <header
        aria-hidden={!compact}
        // @ts-expect-error inert is valid HTML but not yet in React's typings
        inert={!compact ? true : undefined}
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-out ${
          compact ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-b border-black/5 shadow-md shadow-black/5">
          <Container>
            <div className="flex items-center justify-between h-14">
              <a href={getRoute("home", lang)} className="flex-shrink-0 group">
                <img
                  src={nowaFullLogoDark}
                  alt="Nowa"
                  className="h-8 w-auto transition-all duration-200 group-hover:opacity-75"
                />
              </a>

              <nav className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => {
                  const isActive = link.href === pathname;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-150 ${
                        isActive
                          ? "text-accent bg-gray-100 shadow-sm"
                          : "text-gray-600 hover:text-accent hover:bg-gray-100"
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
                <Dropdown>
                  <Button
                    variant="plain"
                    className={`flex items-center gap-1 px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-150 group/offer ${
                      isOfferActive
                        ? "text-accent bg-gray-100 shadow-sm"
                        : "text-gray-600 hover:text-accent hover:bg-gray-100"
                    }`}
                  >
                    {t("nav.offer")}
                    <ChevronDown
                      size={12}
                      className="mt-px transition-transform duration-200 group-hover/offer:rotate-180"
                    />
                  </Button>
                  <Dropdown.Popover className="min-w-64">
                    <Dropdown.Menu className="p-1">
                      {offerLinks.map((link) => (
                        <Dropdown.Item
                          key={link.href}
                          id={link.href}
                          textValue={link.label}
                          className="rounded-lg"
                        >
                          <a
                            href={link.href}
                            className="w-full flex items-start gap-3 py-1"
                          >
                            <span className="mt-0.5 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                              <link.icon size={15} />
                            </span>
                            <span className="flex flex-col">
                              <Label className="font-medium text-gray-800">
                                {link.label}
                              </Label>
                              <span className="text-xs text-gray-400 mt-0.5">
                                {link.description}
                              </span>
                            </span>
                          </a>
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown.Popover>
                </Dropdown>
              </nav>

              <button
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:border-accent hover:text-accent transition-colors"
                aria-label={t("nav.toggleMenu")}
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
}
