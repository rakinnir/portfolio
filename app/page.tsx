import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <main className=" bg-[rgb(36,36,36)] text-white">
      <title>Portfolio</title>
      <Header />

      <section id="hero" className="mt-32">
        <Hero />
      </section>

      <section id="about" className="mt-20">
        <About />
      </section>

      <section id="skills" className="mt-20">
        <Skills />
      </section>

      <section id="project" className="mt-20">
        <Project />
      </section>

      <section id="contact" className="mt-20">
        <ContactMe />
      </section>
    </main>
  );
}
