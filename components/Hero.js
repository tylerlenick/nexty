import React from 'react'
import Typical from 'react-typical'
import Image from 'next/image';
import Link from 'next/link';
import BackgroundCircles from './BackgroundCircles'

export default function Hero() {
  return (
    <div className="justify-center items-center text-center z-20">
        {/*<BackgroundCircles />*/}
        <h1 className="text-xl uppercase font-semibold pb-5 tracking-[10px]">Tyler Lenick</h1> 
        <Image
            priority
            src="/images/profile.jpg"
            className="relative rounded-full mx-auto object-cover"
            height={244}
            width={244}
            alt=""
        />
        <h1 className="py-5 text-3xl lg:text-4xl font-semibold scroll-px-10"><Typical steps={["Hi, I'm Tyler", 1000, "Full Stack Developer, living in Atlanta.", 5000]}/></h1>

        <div className="pt-5">
            <Link href="#about">
                <button className="px-5 uppercase font-semibold tracking-[10px]">About</button>
            </Link>
            <Link href="#skills">
                <button className="px-5 uppercase font-semibold tracking-[10px]">Skills</button>
            </Link>
            <Link href="#projects">
                <button className="px-5 uppercase font-semibold tracking-[10px]">Projects</button>
            </Link>
        </div>
    </div>
  )
}