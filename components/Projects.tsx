"use client"
import { motion } from "framer-motion"
import Image from "next/image"

type Props = {}

export default function Projects({ }: Props) {
    const projects = [1, 2, 3, 4, 5]
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
            className="h-screen flex flex-col relative text-left overflow-hidden  md:flex-row max-w-full px-10 justify-evenly mx-auto items-center z-0">
            <h3 className="absolute lg:font-semibold top-20 uppercase tracking-[20px] text-gray-500 text-2xl ">Projects</h3>
            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0b53b3]/80">
                {projects.map((project, i) => (
                    <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20  md:p-44 h-screen">
                       <motion.div 
                       initial={{
                        y:-300,
                        opacity:0
                       }}
                       whileInView={{opacity:1,y:0}}
                       transition={{duration:1.5}}
                       viewport={{once:true}}
                       >
                        <Image className="w-72 h-52 " src="https://assets.mspimages.in/gear/wp-content/uploads/2022/08/netflix-3.jpg" alt="project Image" width={800} height={800} />
                       </motion.div>
                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold text-center"><span className="underline decoration-[#0b53b3]/70 ">Case Study {i + 1} of {projects.length} : </span>Ecom-store</h4>
                            <p className="text-lg text-center md:text-left">Lorem .Consequatur nostrum quae cumque consequuntur dolor quod odit cum laboriosam,t eos temporibus sapiente ducimus consectetur suscipit. Consequuntur eos magni delectus dolor asperiores sed beatae inventore nobis ratione. Tempore illum, fugit assumenda ratione tenetur at ut perferendis quos modi quidem!</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute top-[30%] h-[500px] left-0 bg-[#164f91]/10 -skew-y-12 w-full"></div>
        </motion.div>
    )
}