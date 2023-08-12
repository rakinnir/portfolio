import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="z-0 h-screen   overflow-scroll bg-[rgb(36,36,36)] text-white">
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

      {/* projects */}
      {/* contact me */}
    </main>
  );
}
