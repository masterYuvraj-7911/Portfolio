import { motion } from "framer-motion";
import avatar from "../assets/avator.png";
import HeroBtn from "../components/HeroBtn";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 px-6 text-white min-h-screen"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 blur-[120px] rounded-full" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={item}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          About <span className="text-primary">Me</span>
        </motion.h2>

        <div className="flex items-center justify-between gap-16">
          <motion.div
            variants={item}
            className="hidden md:flex justify-center shrink-0"
          >
            <img
              src={avatar}
              alt="profile"
              className="
                w-80
                rounded-3xl
                border border-border
                shadow-[0_0_40px_rgba(128,17,255,0.2)]
                hover:border-border-hover
                transition-all duration-300
              "
            />
          </motion.div>

          <div className="flex-1 max-w-3xl">
            <motion.h3
              variants={item}
              className="text-3xl md:text-4xl font-bold text-primary"
            >
              Yuvraj Kumar
            </motion.h3>

            <motion.p
              variants={item}
              className="text-lg md:text-xl text-gray-300 mt-2"
            >
              Full Stack Developer
            </motion.p>

            <motion.p
              variants={item}
              className="mt-6 text-gray-400 leading-relaxed text-base md:text-lg"
            >
              I build scalable, modern web applications with a strong focus on
              performance, clean architecture, and exceptional user experiences.
              My goal is to create products that are fast, beautiful, and
              impactful.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4 mt-8">
              {[
                { a: "10+", b: "Projects" },
                { b: "Mastery in", a: "JAVASCRIPT" },
                { b: "Experience", a: "2+ years" },
              ].map((e) => {
                return (
                  <div
                    className="
                      bg-secondary
                      backdrop-blur-xl
                      border border-border
                      hover:border-border-hover
                      rounded-2xl
                      p-5
                      text-center
                      w-50
                      transition-all duration-300
                      hover:shadow-[0_0_25px_rgba(128,17,255,0.2)]
                    "
                    key={e.a}
                  >
                    <p className="text-sm text-gray-400">{e.b}</p>
                    <h4 className="text-primary text-2xl font-bold">{e.a}</h4>
                  </div>
                );
              })}
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-4 mt-8">
              <a href="#contact">
                <HeroBtn>Contact me</HeroBtn>
              </a>
              <a href="#projects">
                <HeroBtn>Projects</HeroBtn>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
