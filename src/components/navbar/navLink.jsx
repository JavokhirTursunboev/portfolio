import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavLink(item) {
  let location = useLocation();
  return (
    <Link
      to={item.href}
      className={`min-w-[70px] p-[10px] rounded-[20px] text-center 
  ${location.pathname === item.href ? "bg-white text-[#292f36]" : ""}`}
    >
      {item.title}
    </Link>
  );
}
