import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-between items-center flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-black text-center text-5xl">
          Simplified Project Managment <br /> manual effort your workflow
        </h1>
        <p className="text-center font-light">
          Flexify facilitates seamless connections for over 250,000 teams,
          reducing <br /> the manual effort in work processes.
        </p>
      </div>
      <Link href={"/"} className="active px-4 py-4">
        Get started it’s free
      </Link>
    </div>
  );
};

export default Hero;
