
import About from "~/components/About";
import ContactMe from "~/components/ContactMe";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import Projects from "~/components/Projects";
import Skills from "~/components/Skills";
import WorkExperience from "~/components/WorkExperience";

export default function Home() {
  return (
    <div className="bg-slate-900 text-white h-screen overflow-y-scroll snap-y snap-mandatory z-0" >
      {/* Header */}
        <Header />
      {/*  Hero  */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/*  About  */}
    <section id="about" className="snap-center">
      <About />
    </section>
      {/*  Experience  */}
      <section id="experience" className="snap-center">
      <WorkExperience />
    </section>
      {/*  Skills  */}
      <section id="skills" className="snap-start">
      <Skills />
    </section>
     
      {/* Projects  */}
      
      <section id="projects" className="snap-start">
      <Projects />
    </section>
      {/*  Contact Me  */}
      <section id="contact" className="snap-start">
      <ContactMe />
    </section>
    </div>
  );
}
