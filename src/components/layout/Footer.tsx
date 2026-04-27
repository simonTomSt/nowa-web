import { Phone, Mail, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import nowaLogoWhite from "../../assets/nowa_logo_white.svg";
import Container from "./Container";
import { CONTACT } from "../../data/contact";
import { type Lang } from "../../i18n/routes";
import { useLocale } from "../../hooks/useLocale";

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

interface FooterProps {
  lang: Lang;
}

export default function Footer({ lang }: FooterProps) {
  const { t } = useTranslation("common");
  const { getRoute, switchLang } = useLocale();
  const year = new Date().getFullYear();

  const footerNavLinks = [
    { labelKey: "footer.links.aboutAdmixtures", href: getRoute("aboutAdmixtures") },
    { labelKey: "footer.links.offer", href: getRoute("offerLabTests") },
    { labelKey: "footer.links.aboutUs", href: getRoute("aboutUs") },
    { labelKey: "footer.links.contact", href: getRoute("contact") },
    { labelKey: "footer.links.euProjects", href: getRoute("euProjects") },
    { labelKey: "footer.links.privacyPolicy", href: "#" },
  ];

  return (
    <footer className="bg-secondary text-white border-t-4 border-accent">
      <Container className="pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Col 1: Logo + contact + language switcher + copyright */}
          <div className="flex flex-col gap-6">
            <img src={nowaLogoWhite} alt="Nowa" className="h-14 w-auto self-start" />

            <div className="flex flex-col gap-2.5 text-base text-white/70">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center group-hover:bg-accent transition-colors shrink-0">
                  <Phone size={15} />
                </span>
                {CONTACT.phone}
              </a>
              <a
                href={CONTACT.emailHref}
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center group-hover:bg-accent transition-colors shrink-0">
                  <Mail size={15} />
                </span>
                {CONTACT.email}
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <span className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center shrink-0">
                  <Globe size={15} />
                </span>
                <div className="relative">
                  <select
                    value={lang}
                    onChange={(e) => switchLang(e.target.value as Lang)}
                    className="appearance-none bg-white/10 hover:bg-white/15 text-white text-sm font-medium rounded-md pl-3 pr-7 py-1.5 cursor-pointer border border-white/10 hover:border-white/20 transition-colors outline-none focus:ring-2 focus:ring-accent/50"
                  >
                    <option value="pl" className="bg-secondary text-white">{t("footer.languages.pl")}</option>
                    <option value="en" className="bg-secondary text-white">{t("footer.languages.en")}</option>
                  </select>
                  <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-white/50 text-xs">▾</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-white/40 mt-auto pt-4">
              {t("footer.copyright", { year })}
            </p>
          </div>

          {/* Col 2: Learn more navigation */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-lg font-bold text-white">{t("footer.learnMore")}</h3>
              <div className="mt-2 w-8 h-0.5 bg-accent rounded-full" />
            </div>
            <ul className="flex flex-col gap-1">
              {footerNavLinks.map((link) => (
                <li key={link.labelKey}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-base text-white/70 hover:text-white py-1.5 border-l-2 border-transparent hover:border-accent pl-3 transition-all"
                  >
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Follow Us */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-lg font-bold text-white">{t("footer.followUs")}</h3>
              <div className="mt-2 w-8 h-0.5 bg-accent rounded-full" />
            </div>
            <p className="text-base text-white/70 leading-relaxed">
              {t("footer.followUsText")}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("footer.social.facebook")}
                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-accent/30 transition-all"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("footer.social.linkedin")}
                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-accent/30 transition-all"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

        </div>
      </Container>
    </footer>
  );
}
