import "./Projects.scss";
import project1 from "../../assets/images/projects/trippeo.png";
import project2 from "../../assets/images/projects/socialhive.png";
import { Link } from "react-router-dom";

const Projects = ({ projectsRef }) => {
  const viewProjects = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const projects = [
    {
      name: "Trippeo - Travel Social Media App",
      desc: "A social media app built using React JS, Node JS and MongoDB.",
      src: project1,
      features: [
        "Create and share travel stories with a vibrant community",
        "Follow fellow travelers and explore their journeys",
      ],
      link: "https://github.com/nilufarshaikh/trippeo-client",
    },
    {
      name: "Chat Application with Blog Posts",
      desc: "A blog with a real-time chat functionality built using Laravel, Node.js and Pusher for WebSocket-based communication.",
      src: project2,
      features: [
        "Blog posts CRUD (Create, Read, Update, Delete)",
        "Real-time chat functionality",
        "User authentication and authorization",
        "Access control for different user roles (e.g., admin, user)",
      ],
      link: "https://github.com/nilufarshaikh/laravel-chat-application",
    },
  ];
  return (
    <section className="section projects" ref={projectsRef}>
      <h2 className="projects__title">projects.</h2>
      <div className="projects__items">
        {projects.map((project, index) => (
          <article key={index} className="card">
            <div className="card__body">
              <h3 className="card__title">{project.name}</h3>
              <p>{project.desc}</p>
              <button
                onClick={() => viewProjects(project.link)}
                className="card__button"
              >
                Github Link
              </button>
            </div>
            <div className="card__img-wrapper">
              <img className="card__img" src={project.src} alt={project.name} />
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
