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
    <footer className="bg-white border-t border-gray-200 py-6 px-4 lg:px-10">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Logo and description */}
        <div className="w-full lg:w-1/5 mb-6 lg:mb-0 text-center lg:text-left">
          <h2 className="text-2xl font-bold mb-2 flex justify-center lg:justify-start gap-2 items-center">
            <Image src={ColorLogoSvg} alt="svg" width={30} />
            Flexify
          </h2>
          <p className="text-[#62626A]">
            Representing our commitment to providing top-notch software solutions for your team's needs.
          </p>
          <div className="flex justify-center lg:justify-start mt-4 space-x-4 items-center">
            <Image src={youtubeImage} alt="youtube" width={30} />
            <Image src={twitterImage} alt="twitter" width={30} />
            <Image src={facebookImage} alt="facebook" width={30} />
            <Image src={instagramImage} alt="instagram" width={30} />
          </div>
        </div>

        {/* Column 1 */}
        <div className="w-full lg:w-1/5 mb-6 lg:mb-0 text-center lg:text-left">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Product Guide
          </h3>
          <ul className="text-[#62626A] space-y-2">
            <li>Jira Service Management</li>
            <li>Jira Work Management</li>
            <li>Jira Product Discovery</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="w-full lg:w-1/5 mb-6 lg:mb-0 text-center lg:text-left">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Resources
          </h3>
          <ul className="text-[#62626A] space-y-2">
            <li>Technical Support</li>
            <li>Atlassian Community</li>
            <li>Knowledge Base</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="w-full lg:w-1/5 mb-6 lg:mb-0 text-center lg:text-left">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Expand & Learn
          </h3>
          <ul className="text-[#62626A] space-y-2">
            <li>Partners</li>
            <li>Training & Certification</li>
            <li>Documentation</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="w-full lg:w-1/5 mb-6 lg:mb-0 text-center lg:text-left">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">About</h3>
          <ul className="text-[#62626A] space-y-2">
            <li>Atlassian Foundation</li>
            <li>Investor Relations</li>
            <li>Trust & Security</li>
          </ul>
        </div>
      </div>

      {/* Footer bottom section */}
      <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left mt-10 text-[#62626A] border-t border-gray-200 pt-4">
        <p className="mb-4 lg:mb-0">© 2023 Jira Software. All Rights Reserved</p>
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