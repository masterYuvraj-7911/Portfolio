import ProjectCard from "../components/ProjectsCard";

import project1Desktop from "../assets/project1-desktop.png";
import project2Desktop from "../assets/project2-desktop.png";
import project3Desktop from "../assets/project3-desktop.png";

const projects = [
  {
    title: "AI SaaS Platform",
    description:
      "Modern AI-powered SaaS dashboard with authentication, analytics, payments and subscription management.",
    image: project1Desktop,
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "E-Commerce Store",
    description:
      "Fast online shopping experience with cart, checkout, product filtering and admin dashboard.",
    image: project2Desktop,
    tech: ["React", "Redux", "Express"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Creative portfolio with advanced animations, smooth scrolling and modern UI design.",
    image: project3Desktop,
    tech: ["React", "Framer Motion", "Tailwind"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-black py-24 md:py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/10 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <span className="uppercase tracking-[0.4em] text-primary text-sm">
            Portfolio
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Selected Projects
          </h2>

          <p className="mt-6 text-gray-400 text-lg">
            A collection of projects focused on performance,
            scalability, clean user experiences and modern web
            technologies.
          </p>
        </div>

        {/* Projects */}
        <div>
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-b border-white/10 last:border-none"
            >
              <ProjectCard
                project={project}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}