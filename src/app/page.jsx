import Image from 'next/image';
const Homepage = () => {
  return <div className="px-4 h-full sm:px-8 md:px-12 lg:px-20 xl:px-48 flex flex-col md:flex-row items-center justify-evenly ">
    {/* image container */}
    <div className="md:h-1/2 mb-5 flex md:flex-1 items-center justify-center -z-1 ">
       <div className=" h-[200px] w-[200px] md:h-[300px] md:w-[300px]  relative border rounded-full border-1 border-black flex justify-center items-center overflow-hidden bg-[#FEFEFE]">

        <Image src="/myself.png" alt="" fill className="object-contain " />
       </div>
    </div>

    {/* TEXT CONTAINER */}
    <div className="md:h-1/2 flex md:flex-1 flex-col gap-8 items-center md:items-start justify-center">
  <p className='text-3xl md:text-4xl lg:text-6xl font-bold text-center md:text-start ' >Welcome, Digital Adventurer!</p>
  <p className='md:text-xl' >As a junior full-stack developer, I`m on a quest to craft tomorrow`s digital experiences. Join me on this exciting journey as we explore, learn, and create together!</p>
  {/* BUTTONS */}
  <div className=" flex gap-4">

  <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white ">View My Work</button>
  <button className="p-4 rounded-lg ring-1 ring-black  ">Contact Me</button>
  </div>
</div>
  </div>
};

export default Homepage;
