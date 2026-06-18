import { FiX } from "react-icons/fi";

const OverlayMenu = ({
  isOpen,
  setIsOpen,
  active,
  setActive,
}) => {
  const links = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "projects", label: "PROJECTS" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`
          fixed
          inset-0
          bg-black/60
          backdrop-blur-md
          z-40
          transition-opacity
          duration-300
          ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      />

      {/* Menu */}
      <div
        className={`
          fixed
          top-0
          right-0
          h-screen
          w-[90vw]
          bg-black/95
          backdrop-blur-2xl

          border-l
          border-border

          shadow-[-10px_0_40px_rgba(128,17,255,0.2)]

          z-50
          flex
          flex-col
          items-center
          justify-center

          transition-transform
          duration-500

          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* Glow */}
        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-72
            h-72
            bg-primary/20
            blur-[120px]
            rounded-full
            pointer-events-none
          "
        />

        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 left-6"
        >
          <FiX className="text-4xl text-primary hover:text-primary-hover transition-colors" />
        </button>

        <div className="flex flex-col items-center gap-8 text-3xl font-semibold relative z-10">
          {links.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => {
                setActive(item.id);
                setIsOpen(false);
              }}
              className={`
                relative
                uppercase
                transition-all
                duration-300
                hover:text-primary
                hover:scale-105
                ${
                  active === item.id
                    ? "text-primary"
                    : "text-white"
                }
              `}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default OverlayMenu;