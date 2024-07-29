import "./Introduction.scss";
import heroSvg from "../../assets/images/hero.png";

const Introduction = () => {
  return (
    <section className="section intro">
      <div className="intro__hero">
        <img className="intro__hero-img" src={heroSvg} alt="" />
      </div>
      <div className="intro__content">
        <p className="intro__name-text">👋 I am Nilufar</p>
        <p className="intro__text">
          a passionate full-stack software engineer, dedicated to transforming
          innovative ideas into dynamic digital solutions. I approach every
          project with enthusiasm and a commitment to excellence.
        </p>
        <div className="intro__buttons">
          <a href="/Nilufar_Shaikh_Resume.pdf" target="_blank">
            <button className="intro__button">Download Resume</button>
          </a>
          <a href="mailto:nilufarrehanshaikh@gmail.com">
            <button className="intro__button">Reach Out</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
