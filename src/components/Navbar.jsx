import { FaLinkedin } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

import Links from "./navbar/Links";
import StickyHamburger from "./navbar/stickyHamburger";
const Navbar = () => {
  return (
    <div>
      <div className="sticky w-full z-999   backdrop-blur-sm">
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
          </div>
        </div>
        <div
          className="line w-[90%] h-[0.08px] m-auto
      bg-white"
        />
      </div>

      {/* hamburger */}
      <StickyHamburger />
      <Outlet />
    </div>
  );
};

export default Navbar;
