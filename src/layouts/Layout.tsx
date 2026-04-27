import { useEffect } from "react";
import { Header, Footer, BrandingStrip } from "../components/layout";
import { getAlternateRoutes, type Lang } from "../i18n/routes";
import { SITE_URL } from "../seo/config";

interface LayoutProps {
  children: React.ReactNode;
  lang: Lang;
  currentPath: string;
}

export default function Layout({ children, lang, currentPath }: LayoutProps) {
  const alternates = getAlternateRoutes(currentPath);

  useEffect(() => {
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
    alternates.forEach(({ lang: altLang, href }) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.setAttribute("hreflang", altLang);
      link.href = `${SITE_URL}${href}`;
      document.head.appendChild(link);
    });
  }, [alternates]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header lang={lang} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} />
      <BrandingStrip lang={lang} />
    </div>
  );
}
