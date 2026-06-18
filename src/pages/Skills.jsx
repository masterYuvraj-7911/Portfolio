import { useEffect, useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import SkillCard from "../components/SkillCard";

const skills = [
  "Tailwind CSS",
  "REACT",
  "GIT",
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "GSAP",
  "THREE JS"
];

export default function Skills() {
  const x = useMotionValue(0);

  const speed = useRef(-40);
  const targetSpeed = useRef(-40);

  const containerRef = useRef(null);
  const trackWidth = useRef(0);

  const items = [...skills, ...skills];

  useEffect(() => {
    const calculateWidth = () => {
      if (containerRef.current) {
        trackWidth.current = containerRef.current.scrollWidth / 2;
      }
    };

    calculateWidth();
    window.addEventListener("resize", calculateWidth);

    return () => window.removeEventListener("resize", calculateWidth);
  }, []);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll) {
        targetSpeed.current = -80;
      } else {
        targetSpeed.current = 80;
      }

      lastScroll = current;

      clearTimeout(handleScroll.timeout);

      handleScroll.timeout = setTimeout(() => {
        targetSpeed.current = targetSpeed.current > 0 ? 40 : -40;
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useAnimationFrame((_, delta) => {
    speed.current += (targetSpeed.current - speed.current) * 0.05;

    let moveBy = speed.current * (delta / 1000);

    let nextX = x.get() + moveBy;

    const width = trackWidth.current;

    if (width > 0) {
      if (nextX <= -width) {
        nextX += width;
      }
      if (nextX >= 0) {
        nextX -= width;
      }
    }

    x.set(nextX);
  });

  return (
    <section className="relative overflow-hidden bg-black py-16">
      <div className="mx-auto max-w-7xl text-center mb-10">
        <h2 className="text-4xl font-bold text-primary">My Skills</h2>

        <p className="mt-2 text-gray-400">
          Modern Applications | Modern Technologies
        </p>
      </div>

      <div className="overflow-hidden">
        <motion.div
          ref={containerRef}
          style={{ x }}
          className="flex gap-8 w-max"
        >
          {items.map((skill, index) => (
            <SkillCard
              skill={skill}
              index={index}
              key={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}