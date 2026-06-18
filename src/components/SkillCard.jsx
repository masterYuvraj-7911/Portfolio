const SkillCard = ({ index, skill }) => {
  return (
    <div
      key={index}
      className="
        shrink-0
        px-8
        py-4
        rounded-xl
        border
        border-border
        bg-secondary
        backdrop-blur-sm
        hover:border-border-hover
        hover:shadow-[0_0_25px_rgba(128,17,255,0.15)]
        transition-all
        duration-300
      "
    >
      <span className="text-primary font-medium text-lg">
        {skill}
      </span>
    </div>
  );
};

export default SkillCard;