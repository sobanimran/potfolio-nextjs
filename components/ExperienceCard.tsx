import { motion } from "framer-motion"
import Image from "next/image"
import Pic from "~/assets/aws.png"
import Ts from "~/assets/ts.png"
import { urlForImage } from "~/sanity/lib/image"
import { Experience } from "~/typing"

type Props = {
  experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-6 flex-shrink-0
    w-[400px] md:w-[500px] xl:w-[800px] snap-center p-10  bg-[#1f1f1f96] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        <div  className="flex justify-center">

        <Image src={urlForImage(experience?.companyImage)} width={250} height={250} className="w-32 h-32 rounded-full  xl:w-[200px] xl:h-[200px] object-cover object-center" alt="Company Profile" />
        </div>
        <div className="px-0 md:px-10">
          <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
          <p className="font-bold text-2xl mt-1">{experience?.companyName}</p>
          <div className="flex space-x-2 my-2">
            {experience.techs.map(tech => (

              <Image key={tech?._id} src={urlForImage(tech?.image)} alt={tech?.title} width={100} height={100} className="w-10 h-10 rounded-full object-cover object-center" />
            ))}



          </div>
          <p className="uppercase text-gray-300"
          >{new Date(experience.dateStarted).toDateString()} - {" "}{
              experience.isWorking ? "Present" : new Date(experience.dateEnded).toDateString()
            }
          </p>
          <ul className="list-disc space-y-3 ml-4 text-lg">
            {experience.points.map((point, i) => (
              <li key={i}>
                {point}
              </li>
            ))}

          </ul>
        </div>
      </motion.div>
    </article>
  )
}