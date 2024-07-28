import { useState, useEffect } from "react";
import "../../styles/themes.scss";
import Lamp from "../Lamp/Lamp";
import "./Header.scss";

const Header = ({
  scrollToSection,
  homeRef,
  aboutRef,
  projectsRef,
  contactRef,
}) => {
  const [theme, setTheme] = useState("light");
  const [toggleState, setToggleState] = useState(false);

  useEffect(() => {
    const initialState = localStorage.getItem("toggleState") === "true";
    setToggleState(initialState);
    setTheme(initialState ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.body.className = `${theme}-theme`;
  }, [theme]);

  const handleToggleChange = (event) => {
    const isChecked = event.target.checked;
    setToggleState(isChecked);
    localStorage.setItem("toggleState", isChecked);
    setTheme(isChecked ? "dark" : "light");
  };

  return (
    <header className="header" ref={homeRef}>
      <div className="logo">
        <p className="logo__text">Nilufar</p>
      </div>
      <Lamp isDarkMode={toggleState} />
      <nav className="nav">
        <div className="wrapper">
          <div className="toggle">
            <input
              className="toggle-input"
              type="checkbox"
              checked={toggleState}
              onChange={handleToggleChange}
            />
            <div className="toggle-bg"></div>
            <div className="toggle-switch">
              <div className="toggle-switch-figure"></div>
              <div className="toggle-switch-figureAlt"></div>
            </div>
          </div>
        </div>
        <ul className="nav__list">
          <li className="nav__item" onClick={() => scrollToSection(homeRef)}>
            home
          </li>
          <li className="nav__item" onClick={() => scrollToSection(aboutRef)}>
            about
          </li>
          <li
            className="nav__item"
            onClick={() => scrollToSection(projectsRef)}
          >
            projects
          </li>
          <li className="nav__item" onClick={() => scrollToSection(contactRef)}>
            contact
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
