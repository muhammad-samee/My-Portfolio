import React from "react";
// import { HERO_CONTENT } from "../constants";
import MyPic from "../assets/MyPic.jpg";
import { motion } from "framer-motion"
import Resume from "../assets/Resume.pdf"
// import MyLogo from "/public/My-Logo.png"


const container =(delay)=>({
  hidden: {x: -100, opacity: 0},
  visible:{
    x:0,
    opacity:1,
    transition: { duration: 0.5, delay: delay},
  },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:ml-24 lg:mb-35 lg:-mt-10 ">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start"></div>
          <motion.h1 
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
            Muhammad Samee
          </motion.h1>
          <motion.div
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
            Web Developer
          </motion.div>
          <motion.a
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1}}
            download='' 
            href={Resume}
            className=" flex hover:bg-slate-200 bg-neutral-950 text-purple-500 lg:w-1/3 justify-center lg:mt-24 mt-10 mb-24 text-2xl rounded-3xl py-4 hover:text-black border-purple-500 border-2">
            Resume
          </motion.a>
        </div>
     
       
          
        <div className="w-full  lg:w-1/2 lg:p-24">
          <div className="flex justify-center ">
            <motion.img
              initial={{x:100, opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:1, delay:1}}
              src={MyPic}
              alt="Muhammad Samee"
              className="rounded-2xl h-96  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
