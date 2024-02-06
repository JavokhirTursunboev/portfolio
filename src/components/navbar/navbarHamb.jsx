import React, { useState } from "react";

export default function NavbarHamburger() {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 0,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  return (
    <div>
      <button
        className="w-10 h-8 flex justify-between z-50 relative"
        onClick={() => setOpen((prev) => !prev)}
      >
        <motion
          varianits={topVariants}
          animate={open ? "opened" : "closed"}
          className="w-10 h-1 bg-black rounded origin-left"
        ></motion>
        <motion
          varianits={centerVariants}
          animate={open ? "opened" : "closed"}
          className="w-10 h-1 bg-black rounded"
        ></motion>
        <motion
          varianits={bottomVariants}
          animate={open ? "opened" : "closed"}
          className="w-10 h-1 bg-black rounded origin-left"
        ></motion>
      </button>
    </div>
  );
}
