import Header from "../components/Header";
import About from "../components/About";
import Hero from "../components/HeroSection";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}
