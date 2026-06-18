import { motion } from "framer-motion";

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
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="relative overflow-hidden border-t border-border bg-black py-16"
    >
      {/* Animated Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-100
          h-100
          bg-primary/20
          blur-[120px]
          rounded-full
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div variants={item} className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Yuvraj Kumar
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Full Stack Developer crafting modern web experiences
            with React, Node.js and creative animations.
          </p>
        </motion.div>

        {/* Socials */}
        <motion.div
          variants={item}
          className="flex justify-center gap-6 mt-10"
        >
          {[
            {
              name: "GitHub",
              link: "https://github.com/",
            },
            {
              name: "LinkedIn",
              link: "https://linkedin.com/",
            },
            {
              name: "Email",
              link: "mailto:your@email.com",
            },
          ].map((social) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -6,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                px-5 py-2
                rounded-full
                border border-border
                bg-secondary
                text-gray-300
                hover:border-border-hover
                transition-all
              "
            >
              {social.name}
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={item}
          className="w-full h-px bg-border/30 my-10"
        />

        {/* Bottom */}
        <motion.div
          variants={item}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <motion.p
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
             whileHover={{
              color: "#8011ff",
            }}
            className="text-gray-500 text-sm"
          >
            © {year} Yuvraj Kumar. All rights reserved.
          </motion.p>

          <motion.p
            className="text-gray-500 text-sm"
            whileHover={{
              color: "#8011ff",
            }}
          >
            Designed & Developed by Yuvraj
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
}