import Header from "../components/Header";
import About from "../components/About";
import Hero from "../components/HeroSection";

export default function LandingPage() {
  return (
    <div className="App text-white">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="about" className="scroll-mt-16">
        <About />
      </section>
    </div>
  );
}
