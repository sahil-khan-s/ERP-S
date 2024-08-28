"use client";

import logo from "@/public/register/logo.png";
import circle from "@/public/register/circle.png";
import circle2 from "@/public/register/circle2.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    try {
      await axios.post("/api/handleAuth", data);
      router.push("/");
    } catch (error) {
      setError(true);
      setErrorMessage("Wrong credentials please try again!");
    }
  };

  return (
    <main className="min-h-screen bg-gray-500">
      <div
        className="grid grid-cols-2 justify-center"
        style={{ gridTemplateColumns: "40% 60%" }}
      >
        <div className="bg-black h-screen">
          <div className="flex justify-center mr-20 mt-10">
            <Image src={logo} alt="Logo" width={200} />
          </div>
          <div className="overflow-hidden h-[82%] flex justify-start items-center">
            <div className="relative ">
              <div className="bg-[#DDFF8F] p-4 rounded-full w-fit absolute top-[50px] left-[120px]"></div>
              <Image src={circle} alt="circle" height={300} />
              <Image
                src={circle2}
                alt="circle"
                height={230}
                className="absolute top-9"
              />
              <div className="bg-[#DDFF8F] p-20 rounded-full w-fit absolute bottom-[-180px] right-[-450px]"></div>
            </div>
          </div>
        </div>
        <div className="bg-white flex items-center justify-center">
          <div className="w-[70%]">
            <h2 className="text-5xl font-bold text-center mb-4">
              Welcome Back!
            </h2>
            <p className="text-center">Sign in to access your account.</p>
            <hr className="my-10 bg-[#8E8E8E]" />
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border rounded-lg bg-[#E3E3E3] focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="xyz@gmail.com"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  required
                  min={6}
                  className="w-full px-4 py-3 border rounded-lg bg-[#E3E3E3] focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <input
                    type="checkbox"
                    id="remember"
                    className="mr-2"
                    checked={rememberPassword}
                    onChange={(e) => setRememberPassword(e.target.checked)}
                  />
                  <label htmlFor="remember" className="text-[#5F5F5F]">
                    Remember Password
                  </label>
                </div>
                <Link href="#">Forgot Password?</Link>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-[#DDFF8F] py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                Sign In
              </button>
            </form>
            {error && (
              <p className="text-red-500 text-center mt-4">{errorMessage}</p>
            )}
            <p className="text-center mt-6">
              Don’t have an account?{" "}
              <Link href="/signup" className="font-bold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
