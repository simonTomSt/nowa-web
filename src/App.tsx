import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/home/HomePage";
import AboutAdmixturesPage from "./pages/about-admixtures/AboutAdmixturesPage";
import AboutUsPage from "./pages/about-us/AboutUsPage";
import LabTestsPage from "./pages/lab-tests/LabTestsPage";
import OfferAdmixturesPage from "./pages/offer-admixtures/OfferAdmixturesPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-admixtures" element={<AboutAdmixturesPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/offer" element={<Navigate to="/offer/laboratory-tests" replace />} />
          <Route path="/offer/laboratory-tests" element={<LabTestsPage />} />
          <Route path="/offer/concrete-admixtures" element={<OfferAdmixturesPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
