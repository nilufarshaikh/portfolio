import "./About.scss";
import profile from "../../assets/images/nilufar.png";
import html from "../../assets/icons/icons8-html5.svg";
import css from "../../assets/icons/icons8-css3.svg";
import javascript from "../../assets/icons/icons8-javascript.svg";
import bootstrap from "../../assets/icons/icons8-bootstrap.svg";
import express from "../../assets/icons/icons8-express-js.svg";
import mongo from "../../assets/icons/mongodb.svg";
import mysql from "../../assets/icons/icons8-mysql.svg";
import nodejs from "../../assets/icons/icons8-nodejs.svg";
import sass from "../../assets/icons/icons8-sass.svg";
import reactjs from "../../assets/icons/icons8-react-js.svg";
import laravel from "../../assets/icons/laravel.svg";
import phpunit from "../../assets/icons/phpunit.svg";
import python from "../../assets/icons/icons8-python.svg";
import php from "../../assets/icons/icons8-php.svg";
import canva from "../../assets/icons/icons8-canva.svg";

const skills = [
  { src: html, alt: "HTML" },
  { src: css, alt: "CSS" },
  { src: bootstrap, alt: "Bootstrap" },
  { src: sass, alt: "SASS" },
  { src: canva, alt: "Canva" },
  { src: javascript, alt: "JavaScript" },
  { src: express, alt: "Express JS" },
  { src: reactjs, alt: "React JS" },
  { src: nodejs, alt: "Node JS" },
  { src: php, alt: "PHP" },
  { src: laravel, alt: "Laravel" },
  { src: phpunit, alt: "PHPUnit" },
  { src: python, alt: "Python" },
  { src: mysql, alt: "MySQL" },
  { src: mongo, alt: "Mongo DB" },
];

const About = ({ aboutRef }) => {
  return (
    <section className="about" ref={aboutRef}>
      <h2 className="about__title">about me.</h2>
      <div className="about__wrapper">
        <article className="about__left">
          <ul className="about__content">
            <li className="about__content-item">
              ✔️ a<span className="about__cursive-text">passionate</span>
              full stack software engineer with over 6 years of experience 👩‍💻
            </li>
            <li className="about__content-item">
              ✔️ have
              <span className="about__cursive-text">Masters</span>
              degree in Computer Applications from St. Aloysius College, India
              👩🏽‍🎓
            </li>
            <li className="about__content-item">
              ✔️ also, have a
              <span className="about__cursive-text">Diploma</span>
              in Software Engineering from BrainStation, Canada 👩🏽‍🎓
            </li>
            <li className="about__content-item">
              ✔️ thrive on solving
              <span className="about__cursive-text">complex problems</span>with
              elegant code solutions 💻
            </li>
            <li className="about__content-item">
              ✔️ Beyond the code, I'm a lifelong learner, a travel-enthusiast,
              and a<span className="about__cursive-text">Kdrama</span>fan 🫰
            </li>
            <li className="about__content-item">
              ✔️ My<span className="about__cursive-text">skills</span>include 👇
            </li>
          </ul>
          <div className="skills">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skills__wrapper tooltip fade"
                data-title={skill.alt}
              >
                <img className="skills__icon" src={skill.src} alt={skill.alt} />
              </div>
            ))}
          </div>
        </article>
        <article className="about__right">
          <div className="profile">
            <img
              className="profile__img"
              src={profile}
              alt="Nilufar Shaikh profile"
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;

// @todo: Looks amazing @Nilufar ! I'm struggling to come up with any critique really, I absolutely love the style and especially the nightmode toggle button (is that an extension or did you hand-craft it?)
// Only thing I can think of really is the site could use maybe a few small adjustments in tablet/mobile view?  I.e. I would center the section titles in mobile view and either shift the "view more" and "github link" buttons to the right-hand side or make them full-width for easy thumb tapping

// @todo Love the vibes so much, and the light/dark mode toggle is very cool!

// Not sure if this was an issue for anyone else looking but getting the full initial page render (images and such) took about 30 seconds. I tested a few other websites just to make sure it wasn't my connection acting up, and the lighthouse stats seemed to be reflective of a slower load up. It might just be a matter of the the images/media being of a larger size? Here's the checker I ran it through https://lighthouse-metrics.com/

// Also the designs for your projects look very clean. I think putting a high res screenshot of the mobile/Desktop layouts into the github readme could really help to show that off!

// Overall though I love the portfolio, very distinct and it has a ton of personality. I love the little shaking micro interaction you put on the different technology/skill icons
