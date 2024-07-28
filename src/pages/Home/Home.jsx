import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Introduction from "../../components/Introduction/Introduction";
import Projects from "../../components/Projects/Projects";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Introduction />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default Home;
