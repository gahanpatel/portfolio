import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Practices from "@/components/Practices";
import Contact from "@/components/Contact";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Practices />
        <Contact />
      </main>
      <MusicPlayer />
    </>
  );
}
