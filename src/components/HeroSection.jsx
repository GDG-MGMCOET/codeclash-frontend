import React from "react";
import Countdown from "./Countdown ";

const HeroSection = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-start justify-center text-left pl-6 md:pl-12 lg:pl-20 xl:pl-32"
      style={{ backgroundImage: "url('/image.png')" }}
    >
      <h1 className="text-l sm:text-xl md:text-2xl text-white lg:text-2xl xl:text-2xl">
        MGM COET NOIDA
      </h1>
      <h1 className="text-3xl font-bold text-accent sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl">
        MGM CODE CLASH
      </h1>
      <span className="text-2xl text-white sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl">2024</span>
      <Countdown />
      <button className="mt-6 px-12 py-3 bg-accent text-white font-semibold rounded sm:text-base md:text-lg lg:text-xl xl:text-xl">
        Register Now
      </button>
    </div>
  );
};

export default HeroSection;
