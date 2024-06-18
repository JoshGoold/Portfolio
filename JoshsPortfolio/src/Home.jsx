import Typewriter from "typewriter-effect";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

export const Home = () => {
  return (
   <div className="container mx-auto px-8">
    <NavBar/>
    <Hero/>
    <About/>
    <Technologies/>
    <Experience/>
    <Projects/>
    <Contact/>
   </div>
  );
};
