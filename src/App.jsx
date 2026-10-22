import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

import {Navbar, CustomCursor} from "./components";

import { HomeImg,DeveloperImg, ContactImg, Logo} from "./assets"
import { About,Contact,Footer,Experience,Skills, Home} from "./pages"

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const assets = [HomeImg,DeveloperImg,ContactImg,Logo];

    Promise.all(
      assets.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = resolve;
            img.src = src;
          })
      )).then(() => setLoading(false));
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
        <About />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default App;