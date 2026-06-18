import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
  const reverse = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative py-16 md:py-24"
    >
      <div
        className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* IMAGE */}
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="group relative"
        >
          {/* Glow */}
          <div className="absolute -inset-4 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

          {/* Browser Mockup */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-[#0b0b0b]">
            <div className="flex items-center gap-2 px-4 h-12 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            <motion.img
              src={project.image}
              alt={project.title}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.5 }}
              className="w-full object-cover"
            />
          </div>
        </motion.div>

        {/* CONTENT */}
        <div>
          <span className="text-primary uppercase tracking-[0.3em] text-sm">
            Featured Project
          </span>

          <h3 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {project.title}
          </h3>

          <p className="mt-6 text-gray-400 leading-relaxed text-lg">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mt-8">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-secondary 
                  border
                  border-border
                  text-gray-300
                  text-sm
                  hover:border-primary/40
                  transition
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}