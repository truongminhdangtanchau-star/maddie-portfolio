import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fdebf4] text-[#24151d]">
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Certificates />
      <Skills />
      <Contact />
    </main>
  );
}