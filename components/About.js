import React from 'react'
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h1 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          About
      </h1>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
      >
        <p className="text-2xl md:text-3xl lg:text-4xl px-5 font-semibold md:px-20">
          Hi I'm Tyler, a Full Stack Developer from Atlanta, GA.
        </p>
      </motion.div>
    </div>
  )
}