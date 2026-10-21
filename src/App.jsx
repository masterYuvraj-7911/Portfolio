
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
// import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

// Assets
import HomeImg from "./assets/HomeImg.png";
import AboutImg from "./assets/AboutImg.png";
import ContactImg from "./assets/ContactImg.png";
import Logo from "./assets/Logo.png";

import project1 from "./assets/project1-desktop.jpg";
import project2 from "./assets/project2-desktop.jpg";
import project3 from "./assets/project3-desktop.jpg";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const assets = [
      HomeImg,
      AboutImg,
      ContactImg,
      Logo,
      project1,
      project2,
      project3,
    ];

    Promise.all(
      assets.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();

            img.onload = resolve;
            img.onerror = resolve;

            img.src = src;
          })
      )
    ).then(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black">
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          LOADING...
        </h1>
      </div>
    );
  }

  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <div className="relative text-white gradient">
        <CustomCursor />

        <Navbar />

        <Home />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <About />
        </motion.div>

        <Skills />

        {/* <Projects /> */}

        <Experience />

        <Contact />

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default App;
