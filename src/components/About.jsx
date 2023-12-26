import React, { useState } from "react";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div className=" bg-about-img   flex flex-col gap-10 justify-center px-[1.5rem] py-[4rem]">
      <button
        onClick={() => setShow(!show)}
        className=" H2-U text-white px-[2.5rem] py-[1rem]  bg-bg-1 mx-auto border-[#12F7D6] border-[4px] flex items-center justify-center rounded-tl-[2.5rem] rounded-br-[2.5rem]"
      >
        About me
      </button>
      {show && (
        <div className="transition-all duration-500 rounded-[2.5rem] bg-bg-1 px-[1.5rem] py-[1.5rem] max-w-[55rem] min-w-[21.5rem]">
          <h2 className="text-[#12F7D6] font=['IBM Plex Mono']  text-[2rem]">Hello!</h2>
          <p className="text-[#12F7D6] font=['IBM Plex Mono']  text-[1rem]">
            My name is Javokhir and I specialize in web developement that utilizes HTML, CSS, JS, and REACT
            etc. I am a highly motivated individual and eternal optimist dedicated to writing clear, concise,
            robust code that works. Striving to never stop learning and improving. When I'm not coding, I am
            writing bolgs, reading, or picking up some new hands-on art project like photography. I like to
            have my perspective and belief systems challenged so that I see the world through new eyes.
          </p>
        </div>
      )}
    </div>
  );
};

export default About;
