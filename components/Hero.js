import React from 'react'
import Typical from 'react-typical'
import Image from 'next/image';
import Link from 'next/link';
import BackgroundCircles from './BackgroundCircles'
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden z-20">
        <BackgroundCircles />

        <motion.div 
            initial={{
                //x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                //x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5,
            }}
        >
            <h1 className="text-xl uppercase font-semibold pb-5 tracking-[10px]">Tyler Lenick</h1> 
            <Image
                priority
                src="/images/profile.jpg"
                className="relative rounded-full mx-auto object-cover"
                height={200}
                width={200}
                alt=""
            />
        </motion.div>
        <h1 className="py-5 text-2xl font-semibold scroll-px-10 tracking-[5px]"><Typical steps={["Hi, I'm Tyler", 1000, "Full Stack Developer", 5000]}/></h1>
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
        <p className="text-1xl md:text-2xl px-5 font-semibold md:px-auto md:mx-auto">
          Hi I'm <span className="text-red-700">Tyler</span>, a Full Stack Developer from Atlanta, GA. 
          I'm always learning and applying those skills to craft great application experiences. 
          When I'm not writing code, I'm usually trying to improve my home chef skills or exploring new places on the weekends.  
        </p>
      </motion.div>
        
    </div>
  )
}