import Logo from "@/public/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="container mx-auto flex justify-between items-center md:mt-4 mt-2 h-[57px] p-2">
      <Link href={"/"} className="flex justify-center items-center">
        <Image src={Logo} alt="Logo" width={55} height={55} className='h-10 w-10 md:h-[55px] md:w-[55px] ' />
        <h2 className="text-xl md:text-2xl text-[#454545] font-bold">Flexify</h2>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Features</Link>
        <Link href={"/"}>Product guide</Link>
        <Link href={"/"}>Templates</Link>
      </div>

      {/* Desktop Sign In/Sign Up */}
      <div className="hidden md:flex relative gap-2 items-center justify-center">
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link href="/login" className="">
          <button className="px-4 py-2 font-medium shadow-md hover:shadow-xl rounded-lg p-2">
            Log In
          </button>
          </Link>
         
        </div>
      </div>

      {/* Hamburger Button for Mobile */}
      <div className="md:hidden">
        <Link href={"/login"}
          className="active px-4 py-2 font-medium"
        >
          Log In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
