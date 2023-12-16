import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div
        className="flex px:8 py-6 md:px-32 md:py-16 mx-9 my-4  flex-row justify-between items-center
    self-stretch text-white h-20 md:h-16"
      >
        <div className="logo font-bold ">
          <h3> J-Dev </h3>
        </div>
        <div className="flex justify-between gap-5">
          <div className="flex gap-5">
            <a href="#home">Home</a>
            <a href="#home">Blogs</a>
          </div>
          <div className="search flex  relative  pr-2 w-[204px]  max-sm:hidden">
            <input type="text" className="rounded-3xl " />
            <IoSearch className="icon absolute pt-1 text-black" />
          </div>
          <div className="media flex  gap-5">
            <a href="" className="flex items-center gap-2">
              <span className=" max-lg:hidden">Instagram</span>
              <FaInstagram />
            </a>
            <a href="" className="flex items-center gap-2">
              <span className=" max-lg:hidden">Telegram</span>
              <FaTelegramPlane />
            </a>
            <a href="" className="flex items-center gap-2">
              <span className=" max-lg:hidden">GitHub</span> <FaGithub />
            </a>
          </div>
        </div>
      </div>
      <div
        className="line w-[90%] h-[0.08px] m-auto
      bg-white"
      ></div>
    </>
  );
};

export default Navbar;
