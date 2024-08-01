import ButtonGradient from "./assets/svg/ButtonGradient";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Navbar />
        <Home />
        <Experience />
        {/* <Skills /> */}
        <Projects />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
