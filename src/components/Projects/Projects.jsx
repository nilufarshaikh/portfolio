import "./Projects.scss";
import p11 from "../../assets/images/projects/portfolio-1.png";
import p12 from "../../assets/images/projects/portfolio-2.png";
import p21 from "../../assets/images/projects/trippeo-1.png";
import p31 from "../../assets/images/projects/brainflix-1.png";
import p32 from "../../assets/images/projects/brainflix-2.png";
import p33 from "../../assets/images/projects/brainflix-3.png";
import p41 from "../../assets/images/projects/bandsite-1.png";
import p51 from "../../assets/images/projects/socialhive-1.png";
import p52 from "../../assets/images/projects/socialhive-2.png";
import p53 from "../../assets/images/projects/socialhive-3.png";
import p71 from "../../assets/images/projects/instock-1.png";
import p72 from "../../assets/images/projects/instock-2.png";
import p73 from "../../assets/images/projects/instock-3.png";
import p74 from "../../assets/images/projects/instock-4.png";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

const Projects = ({ projectsRef }) => {
  const viewProjects = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const projects = [
    {
      name: "My Portfolio Website",
      desc: "A single page portfolio website that has a light and dark mode.",
      images: [p12, p11],
      features: [],
      link: "https://github.com/nilufarshaikh/portfolio",
      techStack: ["HTML", "CSS", "SASS", "React JS"],
    },
    {
      name: "Trippeo - Social Media App",
      desc: "A social media app for travelers to share their adventures",
      images: [p21],
      link: "https://github.com/nilufarshaikh/trippeo-client",
      techStack: ["HTML", "SASS", "React.js", "Node.js", "Mongo DB"],
    },
    {
      name: "InStock - Inventory System",
      desc: "A software to keep track of warehouses and inventory list.",
      images: [p71, p72, p73, p74],
      link: "https://github.com/laura-nguyen/red-eyed-tree-frog-instock-client",
      techStack: ["React JS", "Node JS", "Mongo DB"],
    },
    {
      name: "BandSite",
      desc: "A website for a band which comment section and shows list.",
      images: [p41],
      link: "https://github.com/nilufarshaikh/nilufar-shaikh-bandsite",
      techStack: ["React JS", "Node JS", "Mongo DB"],
    },
    {
      name: "Social Hive",
      desc: "A blog site with a real-time chat functionality.",
      images: [p51, p52, p53],
      link: "https://github.com/nilufarshaikh/laravel-chat-application",
      techStack: ["Laravel", "NodeJS", "MySQL"],
    },
    {
      name: "BrainFlix",
      desc: "A video streaming website that has videos list and upload.",
      images: [p31, p32, p33],
      link: "https://github.com/nilufarshaikh/nilufar-shaikh-brainflix",
      techStack: ["React JS", "Node JS", "Mongo DB"],
    },
  ];
  return (
    <section className="section projects" ref={projectsRef}>
      <h2 className="projects__title">projects.</h2>
      <div className="projects__items">
        {projects.map((project, index) => (
          <article key={index} className="card">
            <div className="card__header">
              <h3 className="card__title">{project.name}</h3>
              <p className="card__info">{project.desc}</p>
            </div>
            <div className="card_body">
              <p className="card__subtitle">Tech Stack</p>
              <div className="card__tech-stack">
                {project.techStack.map((tech, i) => (
                  <span className="tech" key={i}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="card__scroller">
              <ImageCarousel images={project.images} />
            </div>
            <div className="card__footer">
              <button
                onClick={() => viewProjects(project.link)}
                className="card__button"
              >
                Source Code
              </button>
            </div>
          </article>
        ))}
      </div>
      <button
        className="projects__button"
        onClick={() =>
          viewProjects("https://github.com/nilufarshaikh?tab=repositories")
        }
      >
        View More
      </button>
    </section>
  );
};

export default Projects;
