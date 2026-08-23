import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      <Header />
      <main id="main-content">
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  );
}
