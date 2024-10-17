import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

const Header = () => {
  return (
    <div className="max-w-7xl flex justify-between flex-col items-center mx-auto h-[370px] md:h-96">
      <Navbar />
      <div className="flex justify-center flex-col items-center">
        <Hero />
      </div>
    </div>
  );
};

export default Header;
