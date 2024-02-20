import { motion } from "framer-motion"
import Image from "next/image"
import Pic from "~/assets/aws.png"
import Ts from "~/assets/ts.png"

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10  bg-[#1f1f1f96] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.div
        initial={{ y:-100, opacity:0}}
        transition={{duration:1.2}}
        viewport={{once:true}}
        whileInView={{y:0,opacity:1}}
        >
            <Image src={Pic} className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center" alt="Company Profile"/>
        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">IT Manager in Daraz</h4>
            <p className="font-bold text-2xl mt-1">Daraz</p>
            <div className="flex space-x-2 my-2">
             <Image src={Ts} alt="tech" className="w-10 h-10 rounded-full object-cover object-center" />
             <Image src={Ts} alt="tech" className="w-10 h-10 rounded-full object-cover object-center" />
             <Image src={Ts} alt="tech" className="w-10 h-10 rounded-full object-cover object-center" />
             
            
            </div>
                <p className="uppercase text-gray-300">Started work... - Ended... </p>
                <ul className="list-disc space-y-4 ml-4 text-lg">
                  <li>Summary Points</li>
                  <li>Summary Points</li>
                  <li>Summary Points</li>
                  <li>Summary Points</li>
                  <li>Summary Points</li>
                </ul>
        </div>
        </motion.div>
    </article>
  )
}