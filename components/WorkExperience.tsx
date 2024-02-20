"use client"
import { motion } from "framer-motion"
import ExperienceCard from "./ExperienceCard"

type Props = {}

export default function WorkExperience({}: Props) {
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
     className="h-screen flex flex-col relative overflow-hidden text-left  md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute lg:font-semibold top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">Experience</h3>
       {/* All experience cards are dummy I am fresher Only purpose that card are listed to show my skills   */}
       <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0b53b3]/80">

          {/* Experience Card  */}
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
       </div>
      </motion.div>
  )
}