import React from 'react'
import { motion } from "framer-motion";
import Skill from './Skill'

export default function Skills({props}) {
  const skills = props;
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h1 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl leading-10">
          Technology I'm Using
      </h1>

      <div className="grid grid-cols-4">
        {skills.map(skill =>
            <Skill key={skill.id} props={skill}/>
        )}
      </div>
    </motion.div>
  )
}