"use client"
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion" 
import Link from "next/link"
import { Social } from "~/typing"
interface Props {
  socials :Social[]
}

export default function Header({ socials}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-30 xl:items-center p-5" >
      

        <motion.div 
        initial={{
          x: -500,
          opacity :0,
          scale : 0.5,
        }}
        animate ={{
          x:0 ,
          opacity :1 ,
          scale :1,
        }}
        transition={{
          duration:1.5,
        }}
        className="flex flex-row items-center ">
          {/* Social Icons */}
          {socials.map((social)=>(
           <SocialIcon
           key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent" />
            ))}
           
         
        </motion.div>
     
        <motion.div 
        onClick={() => (window.location.href = "#contact")}
        initial={{
          x: 500,
          opacity :0,
          scale : 0.5,
        }}
        animate ={{
          x:0 ,
          opacity :1 ,
          scale :1,
        }}
        transition={{
          duration:1,
        }}
        className="flex flex-row items-center cursor-pointer text-gray-300">
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent" />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in touch</p>
        </motion.div>
           
     
    </header>
  )
}