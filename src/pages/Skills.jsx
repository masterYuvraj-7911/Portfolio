
import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import { useLenis } from "lenis/react";
import SkillCard from "../components/SkillCard";

const skills = [
  "Git & Github",
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "Lenis",
  "Framer motion",
  "GSAP",
  "MongoDB",
  "Express",
  "NodeJS",
  "ThreeJS",
];

const REPEAT = 6;

const speed = {
  normal: 200,
  initial: -300,
  smoothness: 0.006,
};

export default function Skills() {
  const x = useMotionValue(0);

  const currentSpeed = useRef(speed.initial);
  const targetSpeed = useRef(-speed.normal);

  const containerRef = useRef(null);
  const trackWidth = useRef(0);

  // Lenis changes direction only, not speed
  useLenis(({ direction }) => {
    if (direction === 1) {
      targetSpeed.current = -speed.normal;
    } else if (direction === -1) {
      targetSpeed.current = speed.normal;
    }
  });

  const items = Array.from(
    { length: REPEAT },
    () => skills
  ).flat();

  useEffect(() => {
    const calculateWidth = () => {
      if (containerRef.current) {
        trackWidth.current =
          containerRef.current.scrollWidth / REPEAT;
      }
    };

    calculateWidth();

    const observer = new ResizeObserver(calculateWidth);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    window.addEventListener("resize", calculateWidth);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", calculateWidth);
    };
  }, []);

  useAnimationFrame((_, delta) => {
    const width = trackWidth.current;

    if (!width) return;

    currentSpeed.current +=
      (targetSpeed.current - currentSpeed.current) *
      (1 - Math.exp(-speed.smoothness * delta));

    let nextX =
      x.get() + currentSpeed.current * (delta / 1000);

    // Seamless infinite loop
    if (nextX <= -width || nextX >= 0) {
      nextX = ((nextX % width) + width) % width;

      if (nextX > 0) {
        nextX -= width;
      }
    }

    x.set(nextX);
  });

  return (
    <section className="relative overflow-hidden bg-black py-16">
      <div className="mx-auto mb-10 max-w-7xl text-center">
        <h2 className="text-6xl font-bold text-primary">
          My Skills
        </h2>

        <p className="mt-2 text-gray-400">
          Modern Applications | Modern Technologies
        </p>
      </div>

      <div className="overflow-hidden">
        <motion.div
          ref={containerRef}
          style={{ x }}
          className="flex w-max gap-8"
        >
          {items.map((skill, index) => (
            <SkillCard
              skill={skill}
              index={index}
              key={`${skill}-${index}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
