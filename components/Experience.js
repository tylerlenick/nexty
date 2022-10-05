import React from 'react'
import XpCard from './XpCard'
import { motion } from "framer-motion"

export default function Experience({props}) {
  const posts = props;
  return (
    <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className="h-screen flex relative flex-col text-left md:text-left md:flex-row max-w-full px-10 min-h-screen justify-evenly xl:space-y-0 mx-auto items-center">
      <h1 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Experience
      </h1>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-gray-400/20 ">
      {posts.map(post =>
          <XpCard key={post.id} props={post}/>
      )}
      </div>
    </motion.div>
  )
}