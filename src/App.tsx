import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/home/HomePage";
import AboutAdmixturesPage from "./pages/about-admixtures/AboutAdmixturesPage";
import AboutUsPage from "./pages/about-us/AboutUsPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-admixtures" element={<AboutAdmixturesPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
