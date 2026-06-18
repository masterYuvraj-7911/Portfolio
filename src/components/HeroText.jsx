import Typewriter from "../components/Typeriter";
import { motion } from "framer-motion";
import astronaut from "../assets/home.PNG";
import HeroBtn from "./HeroBtn";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const HeroText = () => {
  return (
    <section className="min-h-screen text-white overflow-hidden max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-screen flex flex-row items-center justify-between">
      {/* LEFT */}
      <div className="flex-1 z-10 mt-8">
        <div className="text-2xl md:text-4xl font-bold mb-6">
          <Typewriter />
        </div>

        <motion.h2
          className="text-5xl md:text-5xl font-bold mb-2 text-primary"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Hello, I'm
        </motion.h2>

        <motion.h1
          className="max-[430px]:text-[14vw] text-[60px] lg:text-[70px] font-extrabold leading-18"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Yuvraj Kumar
        </motion.h1>

        <motion.p
          className="mt-4 text-gray-300 text-[16px] sm:text-lg max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          I turn complex ideas into seamless, high-impact web experiences —
          building modern, scalable, and lightning-fast applications that make a
          difference.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          className="flex gap-4 mt-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
             <a href="#contact">
                <HeroBtn>Contact me</HeroBtn>
              </a>
              <a href="#projects">
                <HeroBtn>Projects</HeroBtn>
              </a>
        </motion.div>

        {/* SOCIALS */}
        <motion.div
          className="
            flex gap-6 mt-12 text-4xl p-3 w-fit rounded-2xl
            bg-secondary
            backdrop-blur-xl
            border border-border
            hover:border-border-hover
            shadow-[0_0_25px_rgba(128,17,255,0.15)]
            hover:shadow-[0_0_40px_rgba(128,17,255,0.35)]
            transition-all duration-300
          "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 1.5,
            type: "spring",
          }}
        >
          <FaGithub className="text-white hover:text-primary hover:scale-110 transition-all cursor-pointer" />

          <FaLinkedin className="text-white hover:text-primary hover:scale-110 transition-all cursor-pointer" />

          <FaXTwitter className="text-white hover:text-primary hover:scale-110 transition-all cursor-pointer" />

          <FaYoutube className="text-white hover:text-primary hover:scale-110 transition-all cursor-pointer" />
        </motion.div>
      </div>

      {/* RIGHT */}
      <div>
        <motion.img
          src={astronaut}
          className="
            relative
            h-full
            max-h-[80vh]
            hidden
            min-[850px]:block
            max-w-125
            drop-shadow-[0_0_50px_rgba(128,17,255,0.35)]
          "
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        />
      </div>
    </section>
  );
};

export default HeroText;