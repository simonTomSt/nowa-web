import { useEffect } from "react";
import { createBrowserRouter, RouterProvider, Navigate, Outlet, useParams, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "./layouts/Layout";
import HomePage from "./pages/home/HomePage";
import AboutAdmixturesPage from "./pages/about-admixtures/AboutAdmixturesPage";
import AboutUsPage from "./pages/about-us/AboutUsPage";
import LabTestsPage from "./pages/lab-tests/LabTestsPage";
import OfferAdmixturesPage from "./pages/offer-admixtures/OfferAdmixturesPage";
import ContactPage from "./pages/contact/ContactPage";
import EUProjectsPage from "./pages/eu-projects/EUProjectsPage";
import OfferServicesPage from "./pages/offer-services/OfferServicesPage";
import {
  SUPPORTED_LANGS,
  DEFAULT_LANG,
  type Lang,
  getLangRoot,
  getOfferLandingRoute,
  getRouteSegment,
} from "./i18n/routes";

function LangRedirect() {
  const stored = localStorage.getItem("lang") as Lang | null;
  const browserLang = navigator.language.slice(0, 2) as Lang;
  const target =
    stored && SUPPORTED_LANGS.includes(stored)
      ? stored
      : SUPPORTED_LANGS.includes(browserLang)
        ? browserLang
        : DEFAULT_LANG;
  return <Navigate to={`/${target}`} replace />;
}

function LangLayout() {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const location = useLocation();
  const isSupportedLang = !!lang && SUPPORTED_LANGS.includes(lang as Lang);

  useEffect(() => {
    if (!isSupportedLang || !lang) {
      return;
    }

    void i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [i18n, isSupportedLang, lang]);

  if (!isSupportedLang || !lang) {
    return <Navigate to={getLangRoot(DEFAULT_LANG)} replace />;
  }

  return (
    <Layout lang={lang as Lang} currentPath={location.pathname}>
      <Outlet />
    </Layout>
  );
}

const router = createBrowserRouter([
  { path: "/", element: <LangRedirect /> },
  {
    path: "/:lang",
    element: <LangLayout />,
    children: [
      { index: true, element: <HomePage /> },
      // Polish
      { path: getRouteSegment("aboutUs", "pl"), element: <AboutUsPage /> },
      { path: "o-domieszzkach", element: <Navigate to={getRouteSegment("aboutAdmixtures", "pl")} replace /> },
      { path: getRouteSegment("aboutAdmixtures", "pl"), element: <AboutAdmixturesPage /> },
      { path: getRouteSegment("contact", "pl"), element: <ContactPage /> },
      { path: getRouteSegment("euProjects", "pl"), element: <EUProjectsPage /> },
      { path: "oferta", element: <Navigate to={getOfferLandingRoute("pl")} replace /> },
      { path: getRouteSegment("offerLabTests", "pl"), element: <LabTestsPage /> },
      { path: getRouteSegment("offerAdmixtures", "pl"), element: <OfferAdmixturesPage /> },
      { path: getRouteSegment("offerServices", "pl"), element: <OfferServicesPage /> },
      // English
      { path: getRouteSegment("aboutUs", "en"), element: <AboutUsPage /> },
      { path: getRouteSegment("aboutAdmixtures", "en"), element: <AboutAdmixturesPage /> },
      { path: getRouteSegment("contact", "en"), element: <ContactPage /> },
      { path: getRouteSegment("euProjects", "en"), element: <EUProjectsPage /> },
      { path: "offer", element: <Navigate to={getOfferLandingRoute("en")} replace /> },
      { path: getRouteSegment("offerLabTests", "en"), element: <LabTestsPage /> },
      { path: getRouteSegment("offerAdmixtures", "en"), element: <OfferAdmixturesPage /> },
      { path: getRouteSegment("offerServices", "en"), element: <OfferServicesPage /> },
    ],
  },
  { path: "*", element: <LangRedirect /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
