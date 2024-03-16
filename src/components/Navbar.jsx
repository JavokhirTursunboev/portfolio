"use client";

import { useState } from "react";
import Link from "next/link";
import NavLink from "./navLink";
import { motion } from "framer-motion"
const links = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/about",
    title: "About",
  },
  {
    url: "/portfolio",
    title: "Portfolio",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  
  const topVariants={
    closed:{
      rotate:0,
    },
    opened:{
      rotate:45,
      backgroundColor:"rgb(255,255,255)"
    }
  }
   const centerVariants={
    closed:{
     opacitiy:1,
    },
    opened:{
     opacitiy:0
    }
  }
    const bottomVariants={
      closed:{
        rotate:0,
      },
      opened:{
        rotate:-45,
        backgroundColor:"rgb(255,255,255)"
      }
    }

    const listVariants ={
      closed:{
        x:'100vw',
      },
      opened:{
        x:0,
        transition:{
          when:'beforeChildren',
          staggerChildren:0.2
        }
      }

    }

    const listItemVariants={
      closed:{
        x:-10,
        opacity:0,
      },
      opened:{
        x: 0,
        opacity: 1,
      },
    }
  return (
    <div
      className="h-full flex items-center justify-between
     px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48"
    >
      {/* ======= NAVBAR FOR LARGE ========== */}
      <div className=" hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
         <NavLink link={link} key={link.title}/>
        ))}
      </div>

      {/* ==== LOGO ==== */}
      <div className="md:hidden lg:flex  xl:justify-center w-[120px]">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1
           font-semibold flex items-center justify-center "
        >
          <span className="text-white mr-1">Javokhir</span>
          <span
            className="text-black bg-white rounded
           w-12 h-8 flex items-center  justify-center "
          >
            .dev
          </span>
        </Link>
      </div>

      {/* ======== SOCIAL MEDIA ======= */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="#">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
          </svg>
        </Link>
        <Link href="#">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
            <path
              fill="#0288D1"
              d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
            ></path>
            <path
              fill="#FFF"
              d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
            ></path>
          </svg>
        </Link>
        <Link href="#">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
            <path fill="#29b6f6" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"></path>
            <path
              fill="#fff"
              d="M34,15l-3.7,19.1c0,0-0.2,0.9-1.2,0.9c-0.6,0-0.9-0.3-0.9-0.3L20,28l-4-2l-5.1-1.4c0,0-0.9-0.3-0.9-1	c0-0.6,0.9-0.9,0.9-0.9l21.3-8.5c0,0,0.7-0.2,1.1-0.2c0.3,0,0.6,0.1,0.6,0.5C34,14.8,34,15,34,15z"
            ></path>
            <path
              fill="#b0bec5"
              d="M23,30.5l-3.4,3.4c0,0-0.1,0.1-0.3,0.1c-0.1,0-0.1,0-0.2,0l1-6L23,30.5z"
            ></path>
            <path
              fill="#cfd8dc"
              d="M29.9,18.2c-0.2-0.2-0.5-0.3-0.7-0.1L16,26c0,0,2.1,5.9,2.4,6.9c0.3,1,0.6,1,0.6,1l1-6l9.8-9.1	C30,18.7,30.1,18.4,29.9,18.2z"
            ></path>
          </svg>
        </Link>
        <Link href="#">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
            <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path>
            <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path>
            <polygon
              fill="#e53935"
              points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
            ></polygon>
            <path
              fill="#c62828"
              d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
            ></path>
            <path
              fill="#fbc02d"
              d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
            ></path>
          </svg>
        </Link>
      </div>
      {/* ===== RESPONSIVE BUTTON ===================== */}

      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(()=>(!open))}
        >
          <motion.div animate={open ? 'opened': 'closed'} variants={topVariants}   className="w-10 h-1 bg-black rounded origin-left "></motion.div>
          <motion.div animate={open ? 'opened': 'closed'} variants={centerVariants} className="w-10 h-1 bg-black rounded"></motion.div>
          <motion.div animate={open ? 'opened': 'closed'} variants={bottomVariants} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
        </button>

        {/* ===== MENU LIST ======  */}
        {open && (
          <motion.div variants={listVariants} initial='closed' animate='opened'
            className=" absolute top-0 left-0 w-screen h-screen bg-black
         text-white flex flex-col items-center justify-center gap-8 text-4xl z-40 "
          >
            {links.map((link) => (
             <motion.div className="" variants={listItemVariants} key={link.title}>
             <Link href={link.url} >
                {link.title}
              </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
      {/* ======== RESPONSIVE BUTTON END ============= */}
    </div>
  );
}
