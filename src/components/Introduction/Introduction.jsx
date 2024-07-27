import "./Introduction.scss";
import heroSvg from "../../assets/images/hero.png";
import Lamp from "../Lamp/Lamp";

const Introduction = () => {
  return (
    <section className="section intro">
      <Lamp />
      <div className="intro__hero">
        <img className="intro__hero-img" src={heroSvg} alt="" />
      </div>
      <div className="intro__content">
        <p className="intro__name-text">👋 I am Nilufar</p>
        <p className="intro__text">
          a passionate full stack engineer with a mission to turn tech dreams
          into reality. I strive to create seamless and intuitive solutions that
          make a difference.
        </p>
        <div className="intro__buttons">
          <a
            href="/Nilufar_Shaikh_Resume.pdf"
            download="Nilufar_Shaikh_Resume.pdf"
          >
            <button className="intro__button">Download Resume</button>
          </a>
          <button className="intro__button">Reach Out</button>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
