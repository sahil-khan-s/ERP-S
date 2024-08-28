import Logo from "@/public/Logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center mt-4 h-[57px] p-2">
      <Link href={"/"} className="flex justify-center items-center">
        <Image src={Logo} alt="Logo" width={55} height={55} />
        <h2 className="text-2xl text-[#454545]">Flexify</h2>
      </Link>
      <div className="flex gap-8">
        <Link href={"/"}>Home</Link>
        <Link href={"/features"}>Features</Link>
        <Link href={"/productguide"}>Product guide</Link>
        <Link href={"/templates"}>Templates</Link>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <Link href={"/login"} className="px-4 py-2">
          Sign In
        </Link>
        <Link href={"/signup"} className="active px-4 py-2">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
