import React from "react";
import homepageHero from "../assets/homepageHero.mp4";

const HeroSection = () => (
  <div className="h-screen flex flex-col justify-end items-center lg:items-start relative overflow-hidden">
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src={homepageHero}
      autoPlay
      loop
      muted
    />

    <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-16 text-white mb-[2.083rem] sm:mb-[4.403rem]">
      <h1 className="text-5xl sm:text-[12.5rem] inter-semibold uppercase text-white lg:bg-text-gradient lg:text-transparent lg:bg-clip-text">
        Moby™
      </h1>
      {/* Mobile text */}
      <h2 className="text-[2rem] sm:text-7xl mt-2 inter-semibold lg:hidden">
        Medical Services to:
      </h2>
      {/* Desktop text */}
      <h2 className="text-[2rem] sm:text-7xl inter-semibold hidden lg:block">
        Medical Services
      </h2>
      <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 mt-2">
        <h3 className="text-2xl sm:text-[2.5rem] inter-italic">
          Restore Confidence
        </h3>
        <h3 className="text-2xl sm:text-[2.5rem] inter-italic">
          Boost Performance
        </h3>
        <h3 className="text-2xl sm:text-[2.5rem] inter-italic">
          Increase Pleasure
        </h3>
      </div>
    </div>
  </div>
);

export default HeroSection;
