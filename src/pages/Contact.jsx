import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import ParticlesBackground from "../components/ParticleBackground";
import Input from "../components/Input";

import float from "../assets/Astra.png";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_name: form.name,
          user_email: form.email,
          user_phone: form.phone,
          message: form.message,
        },
        PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);

        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        alert("Failed to send message.");
      });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full overflow-hidden bg-black text-white"
    >
      <ParticlesBackground />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-20">
        <div className="grid w-full max-w-6xl gap-12 md:grid-cols-2 items-center">
          {/* LEFT SIDE */}
          <div>
            <h2 className="mb-8 text-5xl font-bold text-primary">
              Contact Me
            </h2>

            <form
              onSubmit={handleSubmit}
              className="
                space-y-5
                rounded-3xl
                border
                border-border
                hover:border-border-hover
                bg-secondary
                p-6
                md:p-10
                backdrop-blur-2xl
                shadow-[0_0_40px_rgba(128,17,255,0.15)]
                transition-all
                duration-300
              "
            >
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
              />

              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
              />

              <Input
                type="tel"
                name="phone"
                placeholder="Your Mobile Number"
                value={form.phone}
                onChange={handleChange}
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-border
                  bg-black/40
                  p-3
                  outline-none
                  focus:border-border-hover
                  transition-all
                "
              />

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  rounded-xl
                  bg-primary
                  py-3
                  font-semibold
                  text-white
                  transition-all
                  hover:bg-primary-hover
                  disabled:opacity-70
                "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-center text-green-400">
                  Message sent successfully 🚀
                </p>
              )}
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative hidden md:flex items-center justify-center">
            <motion.h1
              animate={{ y: [0, -70, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 text-7xl font-extrabold text-primary/20 select-none"
            >
              YUVRAJ
            </motion.h1>

            <motion.h1
              animate={{ y: [0, 60, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-0 text-7xl font-extrabold text-primary/20 select-none"
            >
              KUMAR
            </motion.h1>

            <motion.img
              src={float}
              alt="Astronaut"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
                w-80
                lg:w-108
                drop-shadow-[0_0_50px_rgba(128,17,255,0.35)]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}