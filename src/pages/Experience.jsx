import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "2024 - Present",
    description:
      "Built modern responsive web apps using React, Tailwind CSS and Framer Motion with a strong focus on performance and user experience.",
  },
  {
    role: "React Intern",
    company: "Tech Startup",
    period: "2023 - 2024",
    description:
      "Worked on dashboard UI, API integrations and reusable component systems using React and Redux.",
  },
  {
    role: "Web Developer",
    company: "Personal Projects",
    period: "2022 - 2023",
    description:
      "Created full-stack MERN applications, portfolios and interactive web experiences.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-black py-32 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[180px]" />

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="uppercase tracking-[0.4em] text-primary text-sm">
            Career Journey
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
            Experience
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Building modern web applications and continuously
            improving development, design and problem-solving skills.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          {experiences.map((exp, index) => {
            const reverse = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                className="
                  relative
                  mb-24
                  md:grid
                  md:grid-cols-2
                  md:gap-20
                  items-center
                "
              >
                {/* Left Side */}
                <div
                  className={`${
                    reverse ? "md:order-2" : ""
                  }`}
                >
                  <motion.div
                    whileHover={{
                      y: -6,
                    }}
                    className="
                      bg-white/[0.03]
                      border
                      border-border
                      rounded-3xl
                      p-8
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:border-primary/40
                    "
                  >
                    <span className="text-primary text-sm">
                      {exp.period}
                    </span>

                    <h3 className="text-2xl font-bold text-white mt-3">
                      {exp.role}
                    </h3>

                    <p className="text-gray-300 mt-2">
                      {exp.company}
                    </p>

                    <p className="text-gray-400 mt-5 leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                </div>

                {/* Empty Column */}
                <div className="hidden md:block" />

                {/* Timeline Dot */}
                <div
                  className="
                    hidden md:flex
                    absolute
                    left-1/2
                    top-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    items-center
                    justify-center
                  "
                >
                  <div className="relative">
                    <span className="absolute inset-0 bg-primary rounded-full blur-sm opacity-60" />

                    <div
                      className="
                        relative
                        w-5
                        h-5
                        rounded-full
                        bg-primary
                        border-4
                        border-black
                      "
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}