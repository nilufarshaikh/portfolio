import "./Projects.scss";
import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";

const Projects = () => {
  return (
    <section className="section projects">
      <h2 className="projects__title">projects.</h2>
      <div className="projects__items">
        <article className="card card--one">
          <div className="card__body">
            <h3 className="card__title">
              Create a beautiful professional profile
            </h3>
            <p>
              An easy and simple way to create a beautiful profile to list all
              your skills, achievemnets, and more.
            </p>
            <button className="card__button">Github Link</button>
          </div>
          <div className="card__body">
            <img className="card__img" src={project1} alt="" />
          </div>
        </article>

        <article className="card card--two">
          <div className="card__body">
            <h3 className="card__title">
              Create a beautiful professional profile
            </h3>
            <p>
              An easy and simple way to create a beautiful profile to list all
              your skills, achievemnets, and more.
            </p>
            <button className="card__button">Github Link</button>
          </div>
          <div className="card__body">
            <img className="card__img" src={project2} alt="" />
          </div>
        </article>
        <article className="card card--two">
          <div className="card__body">
            <h3 className="card__title">
              Create a beautiful professional profile
            </h3>
            <p>
              An easy and simple way to create a beautiful profile to list all
              your skills, achievemnets, and more.
            </p>
            <button className="card__button">Github Link</button>
          </div>
          <div className="card__body">
            <img className="card__img" src={project2} alt="" />
          </div>
        </article>
        <article className="card card--two">
          <div className="card__body">
            <h3 className="card__title">
              Create a beautiful professional profile
            </h3>
            <p>
              An easy and simple way to create a beautiful profile to list all
              your skills, achievemnets, and more.
            </p>
            <button className="card__button">Github Link</button>
          </div>
          <div className="card__body">
            <img className="card__img" src={project2} alt="" />
          </div>
        </article>
      </div>
      <button className="projects__button">View More</button>
    </section>
  );
};

export default Projects;
