"use client"
import { motion } from "framer-motion"
import Pic from "~/assets/aa.png"
import Image from "next/image"
import { PageInfo } from "~/typing"
import { urlForImage } from "~/sanity/lib/image"

interface Props { 
  pageInfo:PageInfo
}

export default function About({ pageInfo}: Props) {
  return (
    <motion.div   
    initial={{
   opacity: 0
    }}
    whileInView={{
      opacity: 1
    }}
    transition={{
      duration: 1.2
    }}
     className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute lg:font-semibold top-20 uppercase tracking-[20px] text-gray-500 text-2xl ">About</h3>
      <motion.div className="-mb-20 mt-10 md:mt-0
         md:mb-0 flex-shrink-0 rounded-full 
         w-56 h-56 md:rounded-lg md:w-64 md:h-96 xl:w-[434px] xl:h-[575px]"
        initial={{
          x: -200,
          opacity: 0
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        transition={{
          duration: 1.2
        }}
      >
        <Image alt="profile" className="object-cover w-[100%] h-[100%]" width={434} height={575} src={urlForImage(pageInfo?.profilePic)} />
      </motion.div>
      <div className="space-y-5 md:space-y-8 lg:space-y-10 px-0 md:px-8">
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Here is A <span className="underline decoration-[#F7AB0A]/50">little</span>  Background</h4>
        <p className="text-sm md:text-base ">{pageInfo?.bgInfo}
             </p>
      </div>
    </motion.div>
  )
}