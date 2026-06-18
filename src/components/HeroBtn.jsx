const Button = ({ children = "Get Started" }) => {
  return (
    <button
      className="relative overflow-hidden px-8 py-3 text-primary font-semibold border border-border rounded-xl
       bg-secondary backdrop-blur-sm transition-all duration-300 hover:text-white hover:border-border-hover 
       hover:shadow-[0_0_30px_rgba(128,17,255,0.7)] hover:-translate-y-1 active:scale-95 group">

      <span className=" absolute inset-0 bg-gradient-to-r from-[#6d28d9] via-[#8011ff] to-[#a855f7] opacity-0 group-hover:opacity-20 transition-opacity duration-300"/>

      <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:left-full transition-all duration-700"/>

      <span className="relative z-10">
        {children}
      </span>
    </button>
  );
};

export default Button;