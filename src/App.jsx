import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Associations from "./pages/Associations";
import PressMediaPage from "./pages/PressMediaPage";
import NriCornerPage from "./pages/NriCornerPage";
import Contact from "./pages/Contact";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ScrollProgress />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/associations" element={<Associations />} />
        <Route path="/press-media" element={<PressMediaPage />} />
        <Route path="/nri-corner" element={<NriCornerPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <BackToTop />
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;