"use client"
import { motion } from "framer-motion"
import Pic from "~/assets/aa.png"
import Image from "next/image"

type Props = {}

export default function About({}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute lg:font-semibold top-20 uppercase tracking-[20px] text-gray-500 text-2xl ">About</h3>
        <motion.div className="-mb-20
         md:mb-0 flex-shrink-0 rounded-full 
         w-56 h-56 md:rounded-lg md:w-64 md:h-96 xl:w-[434px] xl:h-[575px]" 
        initial={{
            x:-200,
            opacity:0
        }}
        whileInView={{
            x:0,
            opacity:1
        }}
        transition={{
            duration:1.2
        }}
        >
        <Image alt="profile" className="object-cover w-[100%] h-[100%]"  width={434} height={575} src={Pic} />
        </motion.div>
    </div>
  )
}