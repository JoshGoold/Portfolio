import React from "react";
import profile from "../assets/pic1.jpeg";
import { motion } from "framer-motion";
import { Tilt } from 'react-tilt'
import Typewriter  from "typewriter-effect";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});



const Hero = () => {
const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.   // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Joshua Goold
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500
                     to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              <Typewriter options={{autoStart: true, delay: 80, strings: ["Full Stack Developer", "Game Developer", "Data Engineer"], loop: true}}/>
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              I am a passionate full stack developer who loves making scalable and helpful
               applications and thrive in situations when a problem needs solving. My 
               strengths lie in JavaScript, Java, and Python. However I have recently developed 
               a love for Bash scripting and C. Im hardworking and passionate about the work I do 
               which makes me reliable and dependable. I look forward to joining a team to help build 
               helpful and reliable applications for the world!
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex mx-8 justify-center">
          <Tilt options={defaultOptions}>
            <motion.img
            initial={{x:100, opacity: 0}}  animate={{x: 0, opacity: 1}} transition={{duration: 1, delay: 1.2}} src={profile} alt="profile" />
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
