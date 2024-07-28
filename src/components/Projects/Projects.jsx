import "./Projects.scss";
import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";
import { Link } from "react-router-dom";

const Projects = ({ projectsRef }) => {
  const projects = [
    {
      name: "Trippeo - Travel Social Media App",
      desc: "A fully featured social media app built using React JS, Node JS and MongoDB.",
      src: project2,
      features: [
        "Create and share travel stories with a vibrant community",
        "Follow fellow travelers and explore their journeys",
      ],
      link: "https://github.com/nilufarshaikh/trippeo-client",
    },
    {
      name: "Chat App with Blog Posts CRUD",
      desc: "A simple Blog with a real-time chat functionality built using Laravel, Node.js and Pusher for WebSocket-based communication.",
      src: project1,
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
          <article key={index} className="card card--one">
            <div className="card__body">
              <h3 className="card__title">{project.name}</h3>
              <p>{project.desc}</p>
              <Link to={project.link} target="_blank" rel="noopener noreferrer">
                <button className="card__button">Github Link</button>
              </Link>
            </div>
            <div className="card__img-wrapper">
              <img className="card__img" src={project.src} alt={project.name} />
            </div>
          </article>
        ))}
      </div>
      <Link
        to="https://github.com/nilufarshaikh?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="projects__btn-link"
      >
        <button className="projects__button">View More</button>
      </Link>
    </section>
  );
};

export default Projects;
