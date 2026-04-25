import { useState, useEffect } from "react";
import { Dropdown, Label, Surface } from "@heroui/react";
import { Menu, X, ChevronDown, FlaskConical, Blocks } from "lucide-react";
import nowaFullLogo from "../../assets/nowa_full_logo.svg";
import ueLogoFlag from "../../assets/ue-logo-flag.jpeg";
import Container from "./Container";

const navLinks = [
  { label: "About admixtures", href: "/about-admixtures" },
  { label: "About us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

const offerLinks = [
  { label: "Laboratory tests", href: "/offer/laboratory-tests", icon: FlaskConical, description: "Material testing & certification" },
  { label: "Concrete admixtures", href: "/offer/concrete-admixtures", icon: Blocks, description: "Aerated & ready-mix solutions" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOfferOpen, setMobileOfferOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5"
            : "bg-white/60 backdrop-blur-md"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <a href="/" className="flex-shrink-0 group">
              <img
                src={nowaFullLogo}
                alt="Nowa"
                className="h-12 w-auto transition-all duration-200 group-hover:opacity-75 group-hover:scale-[0.98]"
              />
            </a>

            {/* Desktop nav — floating pill */}
            <nav className="hidden md:flex items-center">
              <Surface
                variant="secondary"
                className="flex items-center gap-1 px-2 py-1.5 rounded-2xl border border-black/5 shadow-sm"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="relative px-4 py-2 text-base font-medium text-gray-600 hover:text-accent rounded-xl hover:bg-white transition-all duration-150"
                  >
                    {link.label}
                  </a>
                ))}

                <Dropdown>
                  <button className="flex items-center gap-1.5 px-4 py-2 text-base font-medium text-gray-600 hover:text-accent rounded-xl hover:bg-white transition-all duration-150 group/offer">
                    Offer
                    <ChevronDown
                      size={14}
                      className="mt-px transition-transform duration-200 group-hover/offer:rotate-180"
                    />
                  </button>
                  <Dropdown.Popover className="min-w-64">
                    <Dropdown.Menu className="p-1">
                      {offerLinks.map((link) => (
                        <Dropdown.Item
                          key={link.href}
                          id={link.href}
                          textValue={link.label}
                          className="rounded-lg"
                        >
                          <a href={link.href} className="w-full flex items-start gap-3 py-1">
                            <span className="mt-0.5 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                              <link.icon size={15} />
                            </span>
                            <span className="flex flex-col">
                              <Label className="font-medium text-gray-800">{link.label}</Label>
                              <span className="text-xs text-gray-400 mt-0.5">{link.description}</span>
                            </span>
                          </a>
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown.Popover>
                </Dropdown>
              </Surface>
            </nav>

            {/* Right side */}
            <div className="hidden md:flex items-center gap-4">
              <img src={ueLogoFlag} alt="EU" className="h-8 w-auto opacity-80" />
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 bg-white/80 text-gray-600 hover:border-accent hover:text-accent transition-colors shadow-sm"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <Surface variant="secondary" className="md:hidden rounded-2xl mx-1 mb-3 p-3 border border-black/5 shadow-lg flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-base font-medium text-gray-700 hover:text-accent hover:bg-white rounded-xl transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <button
                className="w-full px-4 py-3 text-base font-medium text-gray-700 hover:text-accent hover:bg-white rounded-xl transition-all text-left flex items-center justify-between"
                onClick={() => setMobileOfferOpen((v) => !v)}
              >
                Offer
                <ChevronDown size={15} className={`transition-transform duration-200 ${mobileOfferOpen ? "rotate-180" : ""}`} />
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
                <img src={ueLogoFlag} alt="EU" className="h-7 w-auto opacity-80" />
              </div>
            </Surface>
          )}
        </Container>
      </div>
    </header>
  );
}
