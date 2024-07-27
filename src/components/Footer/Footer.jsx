import "./Footer.scss";
import emailIcon from "../../assets/icons/icons8-gmail.svg";
import githubIcon from "../../assets/icons/icons8-github.svg";
import linkedInIcon from "../../assets/icons/icons8-linked-in.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">Nilufar Shaikh</p>
      <div className="footer__socials">
        <img className="footer__icon" src={emailIcon} alt="" />
        <img className="footer__icon" src={githubIcon} alt="" />
        <img className="footer__icon" src={linkedInIcon} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
