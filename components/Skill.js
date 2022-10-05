import React from 'react'
import { motion } from "framer-motion";

export default function Skill({ directionLeft, img }) {
  return (
    <div className="group relative flex cursor-points">
      <motion.img 
        initial={{
          y: directionLeft ? -200 : 200,
          opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        src={img}
        className="rounded-full object-cover w-24 h-24 xl:w-32 xl:h-32 filter transition duration-300 group-hover:scale-125 ease-in-out"
      />
    </div>
  )
}