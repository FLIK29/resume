import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Education from "./components/sections/Education";
import Subjects from "./components/sections/Subjects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Saltar al contenido principal
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Education />
        <Subjects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
