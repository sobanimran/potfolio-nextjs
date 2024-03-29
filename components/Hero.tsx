"use client"
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Pic from "~/assets/PS-photo.jpeg"
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "~/typing";
import { urlForImage } from "~/sanity/lib/image";
interface Props { 
    pageInfo:PageInfo
}

const Hero = ({pageInfo}: Props) => {
    const [text, count] = useTypewriter({
        words: [`Hi, The Name's ${pageInfo?.name}`, "Guy-who-love-money.tsx", "<ButLoveToCodeMore />"],
        delaySpeed: 2000,
        loop: true
    })
    return (
        <div className="h-screen flex flex-col space-y-8 items-center text-center overflow-hidden justify-center">
            <BackgroundCircles />
            <Image src={urlForImage(pageInfo?.heroImage)} width={250} height={250} alt="Souban Profile Image" className="rounded-full relative h-32 w-32 mx-auto object-cover" />
            <div className="z-20">
                <h3 className="uppercase text-gray-500 text-sm pb-2 tracking-[15px] z-10">{pageInfo?.role}</h3>
                <h2 className="flex text-5xl lg:text-6xl font-semibold px-10">
                    <p className="mr-3">{text}</p>
                    <Cursor cursorColor="red" />
                </h2>
                <div className="pt-5">
                   <Link  href="#about"> <button className="heroButton">About</button></Link>
                   <Link href="#experience"> <button className="heroButton">Experience</button></Link>
                   <Link href="#skills"><button className="heroButton">Skills</button></Link>
                   <Link href="#projects"> <button className="heroButton">Projects</button></Link>
                </div>
            </div>
        </div>
    )
}
export default Hero;