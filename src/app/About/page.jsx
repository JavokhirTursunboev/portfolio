'use client'
import { motion, useScroll, useInView } from 'framer-motion';
import Brain from './../../components/brain';
import { useRef,  } from 'react';

export default function About() {

  const containerRef = useRef()
  const { scrollYProgress } = useScroll({ container: containerRef });  


const skillRef = useRef()
const isSkillRefInView = useInView(skillRef,  {once:true})
const experienceRef = useRef()
const isExperienceRef = useInView(experienceRef,  {once:true})

  return  <motion.div
  className='h-full'
  initial={{y:'-200vh'}}
  animate={{y:'0%'}}
  transition={{duration:1}}
  >
    {/* container */}
    <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
      {/* text container */}
      <div className="p-4 sm:p-8 md:p-12 lg:p-20  flex flex-col gap-24 md:gap-32 lg:gap-48  lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
        <div className="flex flex-col gap-12 justify-center">
          <h1 className='font-bold text-2xl' >Software Engineer</h1>
          <p className='text-lg'>I`m Javokhir, a recent engineering graduate from Korea in 2024, specializes in the JavaScript/TypeScript ecosystem. Explore my stacks, projects, and experiences further or connect via LinkedIn or GitHub for more details. </p>
      
      {/* quote */}
<span className='italic' >Live to leave a lasting mark of benevolence, even beyond this life.</span>
        {/*!========= signiture ========== */}
        <div className="self-end">
        <svg width="144" height="77" viewBox="0 0 443 121" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.99999 11C5.51116 16.3362 8.26756 21.4636 15 21.9444C21.2493 22.3908 43.011 26.7557 46.5555 19.6667C47.6365 17.5048 53.1057 -1.32428 49.1111 2.11111C36.8668 12.6412 40 32.7105 40 47C40 62.277 40.6936 77.7707 42.5 92.9444C43.2412 99.1707 44.2362 106.723 41.5 112.5C39.9576 115.756 33.2023 120.303 29.4444 118.556C17.0945 112.811 6.49386 98.0372 2.22221 85.2222C-2.11135 72.2215 33.1109 63.1245 40.1111 60.1667C44.6139 58.2641 49.08 56 54.0555 56C56.0264 56 59.7359 54.3525 61.5 55.1667C65.0454 56.803 67.6251 68.3626 69.2222 72.2222C72.0034 78.9434 79.9039 83.6346 86.3333 85.7778C97.0216 89.3405 108.805 89.339 119.944 88.8889C125.057 88.6823 139.889 86.9557 139.889 79.2222C139.889 60.7957 119.595 46.3977 103.889 42C96.9465 40.0561 82.9296 36.8348 82 48.2222C81.5553 53.6693 82.5768 57.853 86.7778 61.5556C88.538 63.107 92.0403 64.0805 93 66" stroke="black" stroke-width="3" strokeLinecap="round"/>
<path d="M122 50C128.924 63.0786 137.283 81 154.056 81C157.717 81 159.962 81.6307 161.778 78C163.048 75.4587 164 71.817 164 69C164 61.1731 158.396 56.0602 154.5 50C154.101 49.3799 151.482 45.9431 152.778 48.8889C155.062 54.0807 157.956 59.1614 161 63.9444C164.452 69.3694 168.295 74.4296 171.778 79.7778C173.864 82.9815 178.356 86.1102 182.056 83.8333C187.517 80.4725 198.122 70.5329 198 63.5556C197.805 52.4251 187.308 47.3372 179.111 42.5556C175.528 40.4655 165.558 32.8288 166 41C166.553 51.2327 184.356 50.0353 190.722 49.7222C214.508 48.5524 238.974 39.8105 261 31" stroke="black" stroke-width="3" strokeLinecap="round"/>
<path d="M223 42C225.123 54.0279 233.4 63.3236 242.778 70.7778C249.823 76.3782 255.584 83 265 83C277.043 83 281.378 73.8177 281 63.2222C280.665 53.8285 267.866 43.5776 259.778 40.7778C252.931 38.4079 246.637 38 239.444 38C235.501 38 231.383 37.6119 227.667 39.2222C225.064 40.35 223.352 42.8241 221 44" stroke="black" stroke-width="3" strokeLinecap="round"/>
<path d="M253 7C259.156 20.6802 267.457 33.3285 272.944 47.3889C276.795 57.2553 282.454 66.1189 287.778 75.3333C288.471 76.5328 289.829 78.6288 290 80C290.038 80.3057 289.308 68.6989 288.556 65.2778C287.567 60.7864 286 56.13 286 51.5C286 48.4476 287.611 48.2305 289.222 46C296.474 35.9588 315.06 48.5844 297.222 53.5556C294.253 54.3832 290.834 54 287.778 54C285.819 54 278.286 52.7787 276.667 54.1667C274.323 56.1759 300.073 73.4476 301.556 74.5C309.938 80.4511 318.609 86.1051 326.667 92.5C329.178 94.493 330.855 96.138 332 99" stroke="black" stroke-width="3" strokeLinecap="round"/>
<path d="M298 11C306.029 32.4111 316.41 53.9632 322.5 75.8889C322.532 76.0057 324.064 79.6835 324.333 79.0556C324.878 77.7843 322.972 72.648 322.778 71.8889C321.455 66.7293 319.9 61.5206 319.222 56.2222C318.712 52.2297 317.882 47.0047 321.5 44.5C334.804 35.2897 341.832 49.2073 349.778 57.3333C353.419 61.0576 357.631 64.2584 361.056 68.1111C362.429 69.6568 371.663 77 367 77" stroke="black" stroke-width="3" strokeLinecap="round"/>
<path d="M355 34C364.685 48.2723 375.948 62.1881 388.944 73.5C390.388 74.7564 396.349 78.4725 396.944 80.5556C397.977 84.1685 391.069 78.0551 391 78" stroke="black" stroke-width="3" strokeLinecap="round"/>
<path d="M346 26V25" stroke="black" stroke-width="3" strokeLinecap="round"/>
<path d="M376 41C390.069 49.4688 401.823 59.7616 412.889 71.8333C420.211 79.8215 413.07 74.4307 409.056 69.9444C399.562 59.3335 397.069 42.4132 412.111 36.6111C417.985 34.3455 423.921 33.3473 430 31.9444C432.305 31.4125 436.015 29.5034 438.5 30.0555C439.377 30.2505 440.434 31.1653 440.778 32C441.446 33.6218 434.309 33 433.778 33C423.764 33 414.116 32.0263 404.778 36C403.567 36.5153 387.664 43.3318 395 47" stroke="black" stroke-width="3" strokeLinecap="round"/>
</svg>


</div>
        </div>
       
        {/* skills */}
        <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
          {/* skill title */}
          <motion.h1 initial={{x:'-300px'}}
          animate={isSkillRefInView ? {x:0} : {}}
          transition={{delay:0.2}}
          className="font-bold text-2xl">SKILLS</motion.h1>
          {/* skill list */}
          <motion.div initial={{x:'-300px'}}
          animate={isSkillRefInView ? {x:0} : {}}
          transition={{delay:0.2}} className="flex gap-4 flex-wrap">
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">TypeScript</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Next.js</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Redux</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Prisma</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">React Router</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Framer Motion</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">SCSS</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Tailwind CSS</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">CSS</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Boostrap</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">NextUI</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Shadcn</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Git & GitHub</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Figma</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Zod</div>
            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">NextAuth</div>
          </motion.div>
          {/* skill scroll */}
          
        <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
        </div>
          {/* experience */}
          <div className="flex flex-col justify-center pb-48" ref={experienceRef}>
            {/* experience title */}
            <motion.h1 initial={{x:'-300px'}}
          animate={isExperienceRef ? {x:0} : {}}
          transition={{delay:0.2}}
          className="font-bold text-2xl "> EXPERIENCE</motion.h1>
            {/* experience list */}
            <motion.div initial={{x:'-300px'}}
          animate={isExperienceRef ? {x:0} : {}}
          transition={{delay:0.2}} className="mt-20">
           
            {/* experience list item */}
            <div className="flex flex-col md:flex-row justify-between h-58 gap-5">
              {/* LEFT */}
              <div className="md:w-1/3">
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Fullstack Web Developer</div>
               {/* job description */}
               <div className="p-3 text-sm italic">
        Experience a comprehensive showcase of my Fullstack Web Developer skills through my project with AdSwift, an Advertisement Startup. This endeavor exhibits proficiency in Next.js, TypeScript, Prisma, Swiper.js, and more, delivering a visually captivating application. Visit <a href='https://adswift.me' className='text-lg font-bold' target='_blank'> adswift.me</a> for further details.
    </div>
                {/* job date */}
                <div className='text-red-400 text-sm font-semibold'> 2023 - 2024 March</div>
                {/* job company */}
                <div className='bg-white text-sm font-semibold w-fit rounded'>AdSwift Advertisment Startup </div>
              </div>
              {/* CENTER */}
              <div className="hidden md:block w-1/6">
                {/* line */}
                <div className="w-1 h-full bg-gray-600 rounded relative ">
                  {/* line circle */}
                  <div className='absolute w-5 h-5 ring-4 ring-red-400 bg-white -left-2 rounded-full '></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className='w-1/3'>
                <div></div>
              </div>
            </div>

             {/* experience list item */}
             <div className="flex flex-col md:flex-row justify-between mb-5 md:mb-0 md:h-48">
              {/* LEFT */}
              <div className=" md:w-1/3">
                <div className=""></div>
              </div>
              {/* CENTER */}
              <div className="hidden md:block w-1/6">
                {/* line */}
                <div className="w-1 h-full bg-gray-600 rounded relative ">
                  {/* line circle */}
                  <div className='absolute w-5 h-5 ring-4 ring-red-400 bg-white -left-2 rounded-full '></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className='md:w-1/3'>
              <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Jeonbuk National University</div>
               {/* job description */}
                <div className="p-3 text-sm italic">
                I graduated with an International Engineering Bachelor`s degree from Jeonbuk National University. This program provided me with a comprehensive understanding of engineering principles on a global scale, equipping me with the skills necessary to excel in a diverse and dynamic field.
                </div>
                {/* job date */}
                <div className='text-red-400 text-sm font-semibold'> 2019 - 2023 December </div>
                {/* job company */}
                <div className='bg-white text-sm font-semibold w-fit rounded'>3.68 / 4 GPA </div>
              </div>
            </div>

             {/* experience list item */}
             <div className="flex flex-col md:flex-row justify-between h-48 gap-5">
              {/* LEFT */}
              <div className="md:w-1/3">
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Inernship</div>
               {/* job description */}
                <div className="p-3 text-sm italic">
                 I worked remotely as an intern front-end developer on an online IT education website. The website was built using Vue.js and JavaScript. For further details about my role and contributions, you can visit <a href='https://kadirov.dev/' className='text-lg font-bold' target='_blank'> kadirov.dev </a> further details.
                </div>
                {/* job date */}
                <div className='text-red-400 text-sm font-semibold'> 2023 - 2024 March</div>
                {/* job company */}
                <div className='bg-white text-sm font-semibold w-fit rounded'>Kadirov.Dev </div>
              </div>
              {/* CENTER */}
              <div className="hidden md:block w-1/6">
                {/* line */}
                <div className="w-1 h-full bg-gray-600 rounded relative ">
                  {/* line circle */}
                  <div className='absolute w-5 h-5 ring-4 ring-red-400 bg-white -left-2 rounded-full '></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className='w-1/3'>
                <div></div>
              </div>
            </div>
            </motion.div>
          </div>
        
      </div>
      {/* svg container */}
      <div className="hidden lg:block w-1/3 xl:w-1/2 top-0 z-30 sticky ">
        <Brain  scrollYProgress={scrollYProgress} />
      </div>
    </div>
  </motion.div>
}
