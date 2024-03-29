"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { urlForImage } from "~/sanity/lib/image"
import { Project } from "~/typing"

type Props = {
    projects: Project[]
}

export default function Projects({ projects }: Props) {

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
                                y: -300,
                                opacity: 0
                            }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: true }}
                        >
                            <Image className="w-72 h-52 " src={urlForImage(project.image)} alt={project.title} width={800} height={800} />
                        </motion.div>
                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold text-center"><span className="underline decoration-[#0b53b3]/70 ">Case Study {i + 1} of {projects.length} : </span>{project.title}</h4>
                        <div className="flex space-x-2 my-2 justify-center">
                            {project.techs.map(tech => (

                                <Image key={tech?._id} src={urlForImage(tech?.image)} alt={tech?.title} width={100} height={100} className="w-10 h-10 rounded-full object-cover object-center" />
                            ))}
                        </div>
                            <p className="text-lg text-center md:text-left">{project.summary}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute top-[30%] h-[500px] left-0 bg-[#164f91]/10 -skew-y-12 w-full"></div>
        </motion.div>
    )
}