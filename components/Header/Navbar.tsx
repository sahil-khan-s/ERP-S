import Logo from "@/public/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

  const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    const handleMouseEnter = () => {
      setDropdownOpen(true);
    };
  
    const handleMouseLeave = () => {
      setDropdownOpen(false);
    };
  
    return (
      <nav className="container mx-auto flex justify-between items-center md:mt-4 mt-2 h-[57px] p-2">
        <Link href={"/"} className="flex justify-center items-center">
          <Image src={Logo} alt="Logo" width={55} height={55} className='h-10 w-10 md:h-[55px] md:w-[55px] '/>
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
            <Link href="#" className="px-4 py-2 font-medium shadow-md  rounded-lg p-2">
              Log In
            </Link>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                <Link href="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Log in
                </Link>
                <Link href="/register" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
          {/* <Link href={"/signup"} className="active px-4 py-2">Sign Up</Link> */}
  
        {/* Hamburger Button for Mobile */}
        <div className="md:hidden">
          <Link href={"/dashboard"}
            className="active px-4 py-2 font-medium"
          >
           Sign-In
          </Link>
        </div>     
      </nav>
    );
  };

export default Navbar;
