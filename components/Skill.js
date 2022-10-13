import React from 'react'
import { motion } from "framer-motion";

export default function Skill({props}){
  return (
    <div className="group relative flex cursor-points transition duration-500 hover:scale-125 md:m-2">
        <motion.img 
          initial={{
            y: props.directionLeft ? -200 : 200,
            opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          src={props.icon}
          alt={props.name}
          className="object-cover w-24 h-24 xl:w-32 xl:h-32 filter transition duration-300 group-hover:scale-125 ease-in-out"
        />
    </div>
  )
}