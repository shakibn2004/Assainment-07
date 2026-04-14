import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <header className="bg-[#244D3F] text-center py-20">
      <div className="space-y-3 max-w-277.5 w-[70%] mx-auto border-b border-[#1A8862]/50 pb-8">
        <h1 className="text-5xl font-extrabold text-white">KeenKeeper</h1>
        <p className="text-white">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <div className="socials grid justify-center gap-2">
          <h3 className="text-[20px] font-medium text-white">Socials Links</h3>
          <ul className="icons flex gap-2">
            <li className="bg-white p-2 rounded-full">
              <RiInstagramFill />
            </li>
            <li className="bg-white p-2 rounded-full">
              <FaFacebook />
            </li>
            <li className="bg-white p-2 rounded-full">
              <FaXTwitter />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="copy-write flex justify-between max-w-277.5 w-[70%] mx-auto mt-10 text-[#FAFAFA]">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <ul className="other flex gap-4 ">
            <li>Privacy Policy </li>
            <li>Terms of Service </li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Footer;
