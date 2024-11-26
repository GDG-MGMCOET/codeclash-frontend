import Header from "../components/Header";
import About from "../components/About";
import Hero from "../components/HeroSection";

export default function LandingPage() {
  return (
    <div className="App">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
    </div>
  );
}
