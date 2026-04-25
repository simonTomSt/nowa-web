import { Phone, Mail, Globe } from "lucide-react";
import nowaLogoWhite from "../../assets/nowa_logo_white.svg";
import Container from "./Container";

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

const footerNavLinks = [
  { label: "About admixtures", href: "/about-admixtures" },
  { label: "Offer", href: "/offer" },
  { label: "About us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy policy", href: "/privacy-policy" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white border-t-4 border-accent">
      <Container className="pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Col 1: Logo + contact + copyright */}
          <div className="flex flex-col gap-6">
            <img src={nowaLogoWhite} alt="Nowa" className="h-14 w-auto self-start" />

            <div className="flex flex-col gap-2.5 text-base text-white/70">
              <a
                href="tel:+48783366742"
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center group-hover:bg-accent transition-colors shrink-0">
                  <Phone size={15} />
                </span>
                +48 783 366 742
              </a>
              <a
                href="mailto:nowa@home.pl"
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center group-hover:bg-accent transition-colors shrink-0">
                  <Mail size={15} />
                </span>
                nowa@home.pl
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <span className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center shrink-0">
                  <Globe size={15} />
                </span>
                Polish
              </div>
            </div>

            <p className="text-sm text-white/40 mt-auto pt-4">
              © {year} Nowa. All rights reserved.
            </p>
          </div>

          {/* Col 2: Learn more navigation */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-lg font-bold text-white">Learn more</h3>
              <div className="mt-2 w-8 h-0.5 bg-accent rounded-full" />
            </div>
            <ul className="flex flex-col gap-1">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-base text-white/70 hover:text-white py-1.5 border-l-2 border-transparent hover:border-accent pl-3 transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Follow Us */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-lg font-bold text-white">Follow Us</h3>
              <div className="mt-2 w-8 h-0.5 bg-accent rounded-full" />
            </div>
            <p className="text-base text-white/70 leading-relaxed">
              Visit our social media profiles to stay up to date with our news and interesting content!
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-accent/30 transition-all"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
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
