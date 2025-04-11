import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import CaseStudies from "@/components/CaseStudies";
import Designs from "@/components/Designs"

export default function Home() {
  return (
    <main className="bg-primary bg-cover bg-no-repeat bg-[url('/grain.svg')] min-h-screen">
      <div className='w-full h-full'>
        <div className="w-full z-10 mix-blend-difference fixed">
          <Navbar />
        </div>
      </div>
      <div className="z-[999999]">
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <CaseStudies />
        </div>
        <Projects />
        <Experience />
        <Certificates />
        <Designs />
        <div id="contact">
          <Contact />
        </div>

      </div>
    </main>
  );
}
