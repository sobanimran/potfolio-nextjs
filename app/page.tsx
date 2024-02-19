
import About from "~/components/About";
import Header from "~/components/Header";
import Hero from "~/components/Hero";

export default function Home() {
  return (
    <section className="bg-slate-900 text-white h-screen overflow-y-scroll snap-y snap-mandatory z-0" >
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

      {/*  Skills  */}

      {/* Projects  */}
      
      {/*  Contact Me  */}
      
    </section>
  );
}
