import React from "react";
import { FaCode, FaRegEdit, FaRegUser } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { PiHamburger } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function StickyHamburger() {
  return (
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
  );
}
