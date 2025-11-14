import { About, Hero, Navbar, Projects, Contact, Footer, ScrollUpBtn, Experience } from "./components";
import { StarsCanvas } from "./components/canvas";

function App() {
  return (
    <div className="dark:bg-primary bg-primaryLight">
      <Navbar />
      <ScrollUpBtn />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <section id="contact" className="relative z-0">
        <Contact />
        <StarsCanvas />
      </section>
      <Footer />
    </div>
  );
}

export default App;
