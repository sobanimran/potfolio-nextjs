"use client"
import { motion } from "framer-motion"

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0
    }}
    animate={{
        scale:[1,2,2,3,1],
        opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
        borderRadius:["20%","20%","50%","80%","20%",]
    }}
    transition={{
        duration:2.5
    }}
    
    className=" relative flex justify-center items-center ">
        <div className="absolute border rounded-full h-[200px] w-[200px] mt-52 border-gray-400  animate-ping "/>
        <div className="absolute border rounded-full h-[300px] w-[300px] mt-52 opacity-30 border-gray-700  "/>
        <div className="absolute border rounded-full h-[500px] w-[500px] mt-52 opacity-30  border-gray-800 "/>
        <div className="absolute opacity-20 border rounded-full h-[650px] w-[650px] mt-52 border-[#F7AB0A] animate-pulse "/>
        
        
        <div className="absolute border opacity-45 rounded-full h-[800px] w-[800px] mt-52 border-gray-800 "/>
    </motion.div>
  )
}