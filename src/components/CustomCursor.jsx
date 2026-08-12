import { useEffect, useRef } from "react";
import { TbUfo } from "react-icons/tb";
import "../CSS/cursor.css";

const MAX_PARTICLES = 20;
const PARTICLE_INTERVAL = 50;

const CustomCursor = () => {
  const cursorRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const frame = useRef(null);
  const lastParticle = useRef(0);
  const particles = useRef([]);

  useEffect(() => {
    const createParticle = (x, y) => {
      if (particles.current.length >= MAX_PARTICLES) {
        particles.current.shift()?.remove();
      }

      const smoke = document.createElement("div");

      smoke.className = "smoke-particle";
      smoke.style.left = `${x}px`;
      smoke.style.top = `${y + 16}px`;

      document.body.appendChild(smoke);
      particles.current.push(smoke);

      smoke.addEventListener(
        "animationend",
        () => {
          smoke.remove();

          const index = particles.current.indexOf(smoke);

          if (index !== -1) {
            particles.current.splice(index, 1);
          }
        },
        { once: true }
      );
    };

    const updateCursor = () => {
      frame.current = null;

      const { x, y } = mouse.current;

      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate3d(${x-20}px, ${y-20}px, 0)`;
      }

      const now = performance.now();

      if (now - lastParticle.current >= PARTICLE_INTERVAL) {
        createParticle(x, y);
        lastParticle.current = now;
      }
    };

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (!frame.current) {
        frame.current = requestAnimationFrame(updateCursor);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      if (frame.current) {
        cancelAnimationFrame(frame.current);
      }

      particles.current.forEach((particle) => {
        particle.remove();
      });

      particles.current = [];
    };
  }, []);

  return (
    <div ref={cursorRef} className="rocket-cursor">
      <TbUfo size={40} />
    </div>
  );
};

export default CustomCursor;