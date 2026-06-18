import { useEffect, useState } from "react";

const texts = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "GSAP",
  "Three.js",
];

export default function Typewriter() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(
            currentText.slice(0, displayText.length + 1)
          );
        } else {
          setIsDeleting(true);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(
            currentText.slice(0, displayText.length - 1)
          );
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting
      ? 50
      : displayText.length === currentText.length
      ? 1200
      : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <div className="flex items-center text-4xl font-bold text-white">
      <span>{displayText}</span>

      <span
        className="
          ml-1
          inline-block
          w-[3px]
          h-10
          bg-primary
          animate-pulse
          shadow-[0_0_12px_rgba(128,17,255,0.7)]
        "
      />
    </div>
  );
}