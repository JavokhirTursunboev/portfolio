import React, { useEffect, useRef } from "react";
import img from "../assets/img.jpg";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

const Main = () => {
  const elementRef1 = useRef();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (elementRef1.current) {
        elementRef1.current.style.animation = "none";
      }
      return () => clearTimeout(timer);
    }, 5000);
  });

  return (
    <>
      <div className=" md:px-[8rem] px-5 py-[14rem] ">
        <h1 className="sm:text-brand-2 sm:text-[7.3rem] sm:visible invisible  text-center">Developer</h1>
        <div className="flex flex-col gap-[4rem]  lg:flex lg:flex-row lg:mt-[4rem]">
          {/* ! ========== box ========= */}
          <div
            className="flex flex-col 
         items-center gap-8 text-white
          border-4 mt-16 lg:mt-0 py-6 px-6 w-80  
          mx-auto rounded-tl-[50%] rounded-br-[50%]
           shadow-md shadow-white lg:min-w-[20rem] lg:min-h-[32.5rem] "
          >
            <div>
              <img src={img} alt="" className="w-24 h-24 rounded-[50%] m-6" />
              <p className="text-[2rem]">Javokhir</p>
              <p className="text-[0.875rem] font-[400] ">Full-stack developer</p>
            </div>

            {/* add mail  */}
            <div className="flex w-full flex-col items-start justify-start gap-5">
              <a href="" className="flex justify-center items-center gap-4">
                <MdEmail />
                <span>hijavokhir@gmail.com</span>
              </a>

              <a href="" className="flex justify-center items-center gap-4">
                <IoLocation />
                <span>South Korea</span>
              </a>

              <a href="" className="flex justify-center items-center gap-4">
                <PiShoppingBagOpenFill />
                <span>Full-time</span>
              </a>
              <a
                href=""
                ref={elementRef1}
                className="custom-bounce  px-7 py-3 bg-white text-black rounded-[2rem] flex items-center gap-4 "
              >
                Download CV <IoCloudDownloadOutline />
              </a>
            </div>
          </div>

          {/* about me */}
          <div className="flex flex-col  ml-10 ">
            <h1 className="text-[2rem] md:text-[4rem]  text-white"> Hey</h1>
            <h1 className="text-[2rem] md:text-[4rem]  text-white"> I'm Javokhir</h1>
            <h1 className="text-[2rem] md:text-[4rem]  text-white">Full-Stack Developer</h1>
            <p className="text-white  Para-M w-[80%]  py-[3rem]">
              I help busness grow by crafting amazing web experiences. If you're looking for a developer that
              likes to get stuff done.
            </p>
          </div>

          {/* about me box */}
          <div className="flex flex-col   justify-center  py-[3rem] px-[2rem] w-[14rem] mx-auto rounded-[5rem] text-white bg-bg-2 gap-[3rem]   ">
            <div className="flex flex-col gap-[1rem] items-start">
              <h2 className="text-[2rem] flex gap-6 items-center text-[#12F7D6]">Let's Talk</h2>

              <a href="mailto:hijavokhir@gmail.com" className="flex items-center gap-2">
                <MdEmail />
                <span className="">Email</span>
              </a>
              <a href="https://www.linkedin.com/in/javokhir-tursunboev/" className="flex items-center gap-2">
                <FaLinkedin />
                <span className="">LinkedIn</span>
              </a>
              <a href="https://t.me/Javohirengineer" className="flex items-center gap-2">
                <FaTelegramPlane />
                <span className="">Telegram</span>
              </a>
              <a href="https://github.com/JavokhirTursunboev" className="flex items-center gap-2">
                <FaGithub />
                <span className="">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
