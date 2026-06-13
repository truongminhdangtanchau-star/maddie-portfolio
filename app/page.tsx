import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0E0E0E] text-[#F7F1E8]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certificates />
      <Skills />
      <Contact />
    </main>
  );
}