import { useState } from "react";

import CustomCursor from "./components/CustomCursor";
import IntroAnimation from "./components/IntroAnimation";
import Navbar from "./components/Navbar";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Testimonials from "./pages/Testimonials";
import { motion } from "framer-motion";
const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative text-white gradient">
      <CustomCursor />

      {loading ? (
        <IntroAnimation onFinish={() => setLoading(false)} />
      ) : (
        <>
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
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
