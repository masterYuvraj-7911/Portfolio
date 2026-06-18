import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aman Kumar",
    role: "Frontend Developer",
    text: "Working with him was amazing. He builds clean UI with great attention to detail and smooth animations.",
  },
  {
    name: "Rahul Verma",
    role: "Startup Founder",
    text: "Delivered my website on time with excellent performance and modern design. Highly recommended!",
  },
  {
    name: "Priya Sharma",
    role: "UI/UX Designer",
    text: "Very creative developer. He understands design deeply and converts it into perfect UI.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="min-h-screen w-full bg-black text-white px-4 sm:px-8 lg:px-12 py-20"
    >
      {/* HEADER */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold text-primary">
          Testimonials
        </h2>

        <p className="text-gray-400 mt-4">
          What people say about my work
        </p>
      </motion.div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            className="
              bg-secondary
              border border-border
              hover:border-border-hover
              backdrop-blur-xl
              rounded-2xl
              p-6
              shadow-[0_0_25px_rgba(128,17,255,0.08)]
              hover:shadow-[0_0_40px_rgba(128,17,255,0.2)]
              hover:scale-105
              transition-all
              duration-300
            "
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
          >
            {/* QUOTE ICON */}
            <div className="text-primary text-5xl mb-4">
              “
            </div>

            {/* TEXT */}
            <p className="text-gray-300 leading-relaxed">
              {item.text}
            </p>

            {/* NAME */}
            <div className="mt-6">
              <h3 className="text-xl font-bold">
                {item.name}
              </h3>

              <p className="text-gray-400 text-sm">
                {item.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;