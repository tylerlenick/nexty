import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';

export default function XpCard({props}) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
         <motion.img
            initial={{opacity: 0}}
            transition={{duration: 1.2}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{ once: true }}
            className="w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover object-center" 
            src={props.logo}
        />

        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">{props.title}</h4>
            <p className="font-bold text-2xl mt-1">{props.company}</p>
            <div className="flex space-x-2 my-2">
                <br/>
                {props.skillIcons.map(skill =>
                    <img
                        className="h-10 w-10"
                        src={skill}
                       
                        alt=""
                    />
                )}
            </div>
            <p className="uppercase py-5 text-gray-300">{props.dates}</p>
        </div>
    </article>
  )
}

