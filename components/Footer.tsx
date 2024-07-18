import React from "react";

import youtubeImage from "@/public/Youtube.png";
import twitterImage from "@/public/Twitter.png";
import facebookImage from "@/public/facebook.png";
import instagramImage from "@/public/instagram.png";
import Image from "next/image";
import ColorLogoSvg from "@/public/Svgs/ColorLogo.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white ml-10 border-gray-200 py-6">
      <div className="flex justify-between gap-10">
        <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
          <h2 className="text-2xl font-bold mb-2 flex gap-2 items-center">
            <Image src={ColorLogoSvg} alt="svg" width={30} />
            Flexify
          </h2>
          <p className="text-[#62626A]">
            Representing our commitment to providing top-notch software
            solutions for your team's needs
          </p>
          <div className="flex mt-4 space-x-4 justify-start items-center">
            <Image src={youtubeImage} alt="image" width={30} />
            <Image src={twitterImage} alt="image" width={30} />
            <Image src={facebookImage} alt="image" width={30} />
            <Image src={instagramImage} alt="image" width={30} />
          </div>
        </div>
        <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Product guide
          </h3>
          <ul className="text-[#62626A] space-y-2">
            <li>Jira Service Management</li>
            <li>Jira Work Management</li>
            <li>Jira Product Discovery</li>
          </ul>
        </div>
        <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Resources
          </h3>
          <ul className="text-[#62626A] space-y-2">
            <li>Technical Support</li>
            <li>Atlassian Community</li>
            <li>Knowledge base</li>
          </ul>
        </div>
        <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Expand & Learn
          </h3>
          <ul className="text-[#62626A] space-y-2">
            <li>Partners</li>
            <li>Training & Certification</li>
            <li>Documentation</li>
          </ul>
        </div>
        <div className="w-full lg:w-1/5">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">About</h3>
          <ul className="text-[#62626A] space-y-2">
            <li>Atlassian Foundation</li>
            <li>Investor Relations</li>
            <li>Trust & Security</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center px-4 mt-10 text-[#62626A] text-center border-t border-gray-200 pt-4">
        <p>© 2023 Jira Software. All Rights Reserved</p>
        <div className="flex justify-center space-x-4">
          <Link href="#" className="hover:underline">
            Terms of Use
          </Link>
          <Link href="/" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/" className="hover:underline">
            Service Agreement
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
