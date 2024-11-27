import React from "react";
import Countdown from "./Countdown ";
import { Button } from "antd";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <div
      className="flex h-dvh flex-col items-start justify-center gap-5 bg-cover bg-center pl-10 md:pl-12 lg:pl-20 xl:pl-32"
      style={{ backgroundImage: "url('/hero.webp')" }}
    >
      <h1 className="text-xl sm:text-xl md:text-2xl lg:text-2xl">
        MGM COET NOIDA
      </h1>
      <h1 className="text-3xl font-bold text-accent sm:text-4xl">
        MGM CODECLASH
      </h1>
      <span className="text-2xl sm:text-3xl">2024</span>
      <Countdown />
      <Button className="rounded-full bg-accent py-3 font-mono font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-600 md:text-lg">
        <Link to="/register" className="w-full px-12">
          Register Now
        </Link>
      </Button>
    </div>
  );
};

export default HeroSection;
