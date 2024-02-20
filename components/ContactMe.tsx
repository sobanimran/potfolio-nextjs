"use client"
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid"
import { motion } from "framer-motion"

type Props = {}

export default function ContactMe({ }: Props) {
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
            <h3 className="absolute lg:font-semibold top-20 uppercase tracking-[20px] text-gray-500 text-2xl ">Contact</h3>
            <div className="flex flex-col space-y-10">
                <h4 className="text-4xl font-semibold text-center">I have got just what you need<span className="underline decoration-[#0b53b3]/70 ">Lets Talk </span></h4>
                <div className="space-y-10">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-[#0b53b3] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">+92 349 2176207</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#0b53b3] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">soubansheikh163@gmail.com</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className="text-[#0b53b3] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">123 Developer lane</p>
                    </div>
                </div>
                <form className="flex flex-col space-y-2 w-fit mx-auto">
                    <div className="flex space-x-2">
                        <input placeholder="Name" className="contactInput" type="text" /><input placeholder="Email" className="contactInput" type="email" />
                    </div>
                    <input  placeholder="Subject" className="contactInput" type="text" />
                    <textarea  placeholder="Messsage" className="contactInput" />
                    <button className="bg-[#0b53b3] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
                </form>
            </div>
        </motion.div>
    )
}