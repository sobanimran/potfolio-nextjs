"use client"
import { motion } from "framer-motion"
import Pic from "~/assets/aa.png"
import Image from "next/image"

type Props = {}

export default function About({ }: Props) {
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
        <Image alt="profile" className="object-cover w-[100%] h-[100%]" width={434} height={575} src={Pic} />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Here is A <span className="underline decoration-[#F7AB0A]/50">little</span>  Background</h4>
        <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem nihil aliquid mollitia
           impedit perspiciatis quibusdam ut placeat architecto commodi! Nobis ipsam explicabo maxime illo
            magni? Expedita eveniet libero eaque aut odit laboriosam quo sequi nostrum, eius amet 
            accusantium dicta molestiae beatae itaque debitis. Consequatur incidunt facere ex, possimus 
            iusto dicta itaque quo voluptatem eveniet eligendi reprehenderit similique quibusdam consequuntur
             ab! Voluptas omnis alias iusto. Atque obcaecati perferendis quod saepe. Nesciunt inventore est 
             ab! Nihil suscipit sapiente, alias porro mollitia labore? Voluptas eveniet omnis vel! Vero 
             corrupti quibusdam reiciendis aut! Amet est totam eveniet hic, rem quo doloremque in dolorum 
             sunt blanditiis provident debitis dolor suscipit nulla voluptatum autem temporibus harum </p>
      </div>
    </motion.div>
  )
}