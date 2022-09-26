import Reactn from 'react'
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion"

export default function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <motion.div 
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5,
            }}
            className="flex flex-row items-center"
        >
            {/* Social Icons */}
            <SocialIcon 
                url="https://github.com/tylerlenick" 
                fgColor="gray" 
                bgColor="transparent"
                className="transition duration-500 hover:scale-125" 
            />
             <SocialIcon 
                url="https://www.linkedin.com/in/tyler-lenick-069960ba/" 
                fgColor="gray" 
                bgColor="transparent"
                className="transition duration-500 hover:scale-125" 
            />
        </motion.div>

        <motion.div 
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5,
            }}
            className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
            <SocialIcon
                className="cursor-pointer"
                network="email" 
                //url="https://github.com/tylerlenick" 
                fgColor="gray" 
                bgColor="transparent" 
            />
            <p className="transition duration-500 hidden md:inline-flex text-sm text-gray-800">Email Me</p>
        </motion.div>
    </header>
  )
}