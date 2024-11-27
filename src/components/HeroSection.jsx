import React from "react";
import Countdown from "./Countdown ";
import { Button, ConfigProvider } from "antd";
import { Link } from "react-router-dom";

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
      <Link to="/register" className="rounded-full">
        <ConfigProvider
          theme={{
            token: { colorPrimary: "#FFC854" },
            components: { Button: { defaultHoverBg: "#000" } },
          }}
        >
          <Button className="rounded-full border-none bg-accent px-12 py-6 font-mono font-bold text-black md:text-lg">
            Register Now
          </Button>
        </ConfigProvider>
      </Link>
    </div>
  );
};

export default HeroSection;
