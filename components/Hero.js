import React from 'react'
import Typical from 'react-typical'
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="justify-center items-center text-center">
        <Image
            priority
            src="/images/profile.jpg"
            className="relative rounded-full"
            height={244}
            width={244}
            alt=""
        />  
         <h1><Typical steps={["Hi, I'm Tyler", 1000, "Full Stack Developer, living in Atlanta.", 5000]}/></h1>
    </div>
  )
}