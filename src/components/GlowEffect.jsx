const GlowEffect = ({ style = "" }) => {
  return (
    <div
      className={`absolute w-[70vw] sm:w-[50vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] rounded-full bg-linear-to-r 
        from-[#6d28d9] via-[#8011ff] to-[#a855f7] opacity-30  sm:opacity-20  md:opacity-15 blur-[100px]  
        sm:blur-[130px]  md:blur-[180px]   animate-pulse
        ${style}
      `}
    />
  );
};

export default GlowEffect;
