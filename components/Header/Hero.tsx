import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-between items-center flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h1 className=" md:px-0 font-bold md:font-semibold text-black text-center text-2xl md:text-5xl">
          Simplified Project Managment <br /> manual effort your workflow
        </h1>
        <p className="tet-sm md:text-base text-center md:font-light">
          Flexify facilitates seamless connections for over 250,000 teams,
          reducing <br /> the manual effort in work processes.
        </p>
      </div>
      <Link href={"/"} className="active px-4 py-4 text-sm">
        Get started it’s free
      </Link>
    </div>
  );
};

export default Hero;
