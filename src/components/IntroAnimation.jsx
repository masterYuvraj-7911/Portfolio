import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function IntroAnimation({ onFinish }) {
  const greetings = ["Hello", "नमस्ते", "Hola", "Bonjour", "Ciao", "Olá"];

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (index < greetings.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 200);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setVisible(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [index, greetings.length]);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-9999 bg-black flex items-center justify-center"
          exit={{ opacity: 0 }}
        >
          <motion.h1
            key={index}
            className="text-white text-6xl md:text-8xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {greetings[index]}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
