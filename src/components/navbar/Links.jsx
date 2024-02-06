import React from "react";
import NavLink from "./navLink";

export default function Links() {
  const allLink = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/contact",
      title: "Contact",
    },
    {
      path: "/portfolio",
      title: "Portfolio",
    },
  ];
  return (
    <div className="flex gap-5">
      {allLink.map((link) => (
        <NavLink href={link.path} title={link.title} key={link.title} />
      ))}
    </div>
  );
}
