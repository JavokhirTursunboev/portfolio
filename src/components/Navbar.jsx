import React, { useEffect } from "react";
import { IoMailOutline, IoSearch } from "react-icons/io5";
import { FaCode, FaLinkedin, FaRegEdit, FaRegUser } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { PiHamburger } from "react-icons/pi";
import { FiMonitor } from "react-icons/fi";
import Links from "./navbar/Links";
const Navbar = () => {
  return (
    <div>
      <div className="fixed w-full z-999   backdrop-blur-sm">
        <div
          className="flex px:8 py-6 md:px-32 md:py-15 mx-9 my-5 
         flex-row justify-between items-center
     text-white h-20 md:h-16"
        >
          <div className="logo font-bold ">
            <Link href="/home"> J-Dev </Link>
          </div>
          <div className="flex justify-between gap-5">
            <div>
              <Links />
            </div>
            <div className=" flex gap-4 h-full px-[20px] py-[10px] rounded-3xl border-none bg-white   max-sm:hidden">
              <IoSearch className=" text-black m-auto" />
              <input type="text" className=" focus:outline-none	 text-black" />
            </div>
            <div className="media flex  gap-5">
              <a href="" className="flex items-center gap-2">
                <span className=" max-lg:hidden">LinkedIn</span>
                <FaLinkedin />
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
        />
      </div>

      {/* hamburger */}

      <div
        className="hidden md:inline-flex fixed border rounded-[2.5rem]
  py-[0.5rem] px-[0.75rem] mt-[10rem] ml-[4rem]
  flex-col  gap-[1.5rem]"
      >
        <Link to={`/`} className="px-1 py-1  ">
          <PiHamburger className="h-[1rem] w-[1rem] fill-white " />
        </Link>
        <Link to={`/about`} className=" px-1 py-1">
          <FaRegUser className="h-[1.5rem] w-[0.8rem] " color="white" />
        </Link>
        <div className=" px-1 py-1">
          <FaCode className="h-[1.5rem] w-[0.8rem] " color="white" />
        </div>
        <div className=" px-1 py-1">
          <FiMonitor className="h-[1.5rem] w-[0.8rem] " color="white" />
        </div>
        <div className=" px-1 py-1">
          <FaRegEdit className="h-[1.5rem] w-[0.8rem] " color="white" />
        </div>
        <div className=" px-1 py-1">
          <IoMailOutline className="h-[1.5rem] w-[0.8rem] " color="white" />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
