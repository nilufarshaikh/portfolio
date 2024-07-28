import { useRef } from "react";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Introduction from "../../components/Introduction/Introduction";
import Projects from "../../components/Projects/Projects";
import "./Home.scss";

const Home = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Header
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <main className="main">
        <Introduction homeRef={homeRef} />
        <About aboutRef={aboutRef} />
        <Projects projectsRef={projectsRef} />
      </main>
      <Footer contactRef={contactRef} />
    </>
  );
};

export default Home;
