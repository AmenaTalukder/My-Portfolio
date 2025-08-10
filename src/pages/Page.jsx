import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="container">
      <Hero />
      <About />
      <Skills />
      <Services />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
