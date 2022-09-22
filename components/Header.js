import Reactn from 'react'
import { SocialIcon } from "react-social-icons";

export default function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <div className="flex flex-row items-center">
            {/* Social Icons */}
            <SocialIcon 
                url="https://twitter.com/tylenick" 
                fgColor="gray" 
                bgColor="transparent" 
            />
            <SocialIcon 
                url="https://github.com/tylerlenick" 
                fgColor="gray" 
                bgColor="transparent" 
            />
            
        </div>

        <div className="flex flex-row items-center text-gray-300 cursor-pointer">
            <SocialIcon
                className="cursor-pointer"
                network="email" 
                //url="https://github.com/tylerlenick" 
                fgColor="gray" 
                bgColor="transparent" 
            />
            <p className="hidden md:inline-flex text-sm text-gray-400">Email Me</p>
        </div>
    </header>
  )
}