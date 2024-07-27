import { useState, useEffect } from "react";
import "../../styles/themes.scss";
import "./Header.scss";

const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = `${theme}-theme`;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <header className="header">
      <div className="logo">
        <p className="logo__text">Nilufar</p>
      </div>
      {/* <button className="theme-mode" onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"}
      </button> */}
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">about</li>
          <li className="nav__item">skills</li>
          <li className="nav__item">projects</li>
          <li className="nav__item">contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
