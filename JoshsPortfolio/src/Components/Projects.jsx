import React from 'react'
import { PROJECTS } from '../Data'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { TbView360 } from "react-icons/tb";
const Projects = () => {

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
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 0.5}} className='my-20 text-center text-4xl'>Projects</motion.h1>
        <div className="">{PROJECTS.map((project, index)=>(
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div className="w-full lg:w-1/4">
                <Tilt options={defaultOptions}>
                    <img
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 1}} 
                    width={250} height={150} className='mb-6 rounded' src={project.image} alt={project.title} />
                    </Tilt>
                    <motion.div
                className='text-green-600'
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 1}}>
                    {project.live && (<a className='text-sm px-2 mx-3 bg-neutral-800 bg-opacity-65 cursor-pointer rounded' href={project.live}>Live Preview</a>)}
                    
                    <a className='text-sm bg-neutral-800 px-2 cursor-pointer bg-opacity-65 rounded' href={project.git}>Github</a>
                </motion.div>
                </motion.div>
                <motion.div
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 1}}
                 className="w-full max-w-xl lg:w-3/4">
                    <h6 className='mb-2 font-semibold'>{project.title}</h6>
                    <p className='mb-4 text-neutral-400'>{project.description}</p>
                    {project.technologies.map((tech, index)=>(
                        <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>
                            {tech}
                        </span>
                    ))}
                </motion.div>
                
            </div>
        ))}</div>
    </div>
  )
}

export default Projects
