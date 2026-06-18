import { useEffect, useRef } from "react";
import { TbUfo } from "react-icons/tb";
import "../CSS/cursor.css"

const CustomCursor = () => {
  const cursorRef = useRef(null);

 useEffect(() => {
  let ticking = false;

  const handleMouseMove = (e) => {
    if (ticking) return;

    ticking = true;

    requestAnimationFrame(() => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }

      const smoke = document.createElement("div");

      smoke.className = "smoke-particle";
      smoke.style.left = `${e.clientX}px`;
      smoke.style.top = `${e.clientY + 16}px`;

      document.body.appendChild(smoke);

      setTimeout(() => smoke.remove(), 800);

      ticking = false;
    });
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);

  return (
    <div ref={cursorRef} className="rocket-cursor">
      <TbUfo size={40} />
    </div>
  );
};

export default CustomCursor;