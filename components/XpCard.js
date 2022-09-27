import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';

export default function XpCard() {
  return (
    <article className="flex flex-col rounder-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
         <motion.img
            initial={{opacity: 0}}
            transition={{duration: 1.2}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full"
            src="/images/brandmovers.jpg"
        />

        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Full Stack Developer</h4>
            <p className="font-bold text-2xl mt-1">BrandMovers Inc.</p>
            <div className="flex space-x-2 my-2">
                TECH USED
                <img
                    className="rounded-full"
                    src="/images/profile.jpg"
                    height={20}
                    width={50}
                    alt=""
                />
                 <img
                    className="rounded-full"
                    src="/images/profile.jpg"
                    height={20}
                    width={50}
                    alt=""
                />
                 <img
                    className="rounded-full"
                    src="/images/profile.jpg"
                    height={20}
                    width={50}
                    alt=""
                />
                 <img
                    className="rounded-full"
                    src="/images/profile.jpg"
                    height={20}
                    width={50}
                    alt=""
                />
            </div>
            <p className="uppercase py-5 text-gray-300">started worked X - Y...</p>

            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>did this</li>
                <li>did that</li>
                <li>did this</li>
            </ul>
        </div>

    </article>
  )
}

