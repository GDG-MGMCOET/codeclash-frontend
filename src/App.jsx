import React from "react";
import Header from "./components/Header";
import Hero from "./components/HeroSection";
import About from "./components/About";

function App() {
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

export default App;
