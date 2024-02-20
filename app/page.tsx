
import Link from "next/link";
import About from "~/components/About";
import ContactMe from "~/components/ContactMe";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import Projects from "~/components/Projects";
import Skills from "~/components/Skills";
import WorkExperience from "~/components/WorkExperience";

export default function Home() {
  return (
    <div className="bg-slate-900 text-white h-screen overflow-y-scroll snap-y snap-mandatory z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#0b53b3]/80 overflow-x-hidden" >
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
        <footer className="sticky bottom-5 ">
      <Link href='#hero'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 hover:text-[#0b53b3]/80 mx-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
          </svg>

      </Link>
        </footer>
    </div>
  );
}
