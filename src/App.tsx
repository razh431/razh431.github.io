import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Travel from "./components/Travel";
import Hobbies from "./components/Hobbies";
import Reading from "./components/Reading";
import Contact from "./components/Contact";
import { ShapeDivider } from "./components/Divider";

/* ── App ──
   Each section is separated by an organic shape divider
   using a different variant for visual rhythm. */

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ShapeDivider variant="a" />
        <About />
        <ShapeDivider variant="b" />
        <Experience />
        <ShapeDivider variant="c" />
        <Projects />
        <ShapeDivider variant="d" />
        <Travel />
        <ShapeDivider variant="a" />
        <Hobbies />
        <ShapeDivider variant="b" />
        <Reading />
        <ShapeDivider variant="c" />
        <Contact />
      </main>
    </>
  );
}
