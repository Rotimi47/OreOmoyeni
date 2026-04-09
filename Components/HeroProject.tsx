'use client';
import Link from "next/link";
import { motion } from 'framer-motion';
import {IconArrowMoveRight, IconArrowRightCircle} from "@tabler/icons-react"
import Image from "next/image";


export default function HeroProject() {
  return (
    <div   data-aos="fade-up" className="w-full flex flex-col mx-auto px-4 gap-8 max-w-7xl lg:px-20 lg:py-25 2xl:max-w-380 2xl:mx-auto">
            <div className="flex justify-between items-center ">
                <div className="w-176 flex items-center gap-4"> 
                    <h1 className="text-white font-medium text-3xl"><span className="text-[#C778DD]">#</span>projects </h1>
                     <div className="hidden lg:block lg:flex-1 h-px bg-[#C778DD] "></div> 
                </div>
                <div className=" hidden lg:block text-white">
                    <Link href="/projects" className="flex gap-1.5">View all<IconArrowRightCircle/> </Link>
                </div>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row">
                <div className="w-fit border border-[#ABB2BF]">
                    <div>
                        <Image src="/paenote.svg" alt="project thumbnail" width={500} height={200} priority/>
                    </div>
                    <div className="p-2 border border-[#ABB2BF]">
                        <p className="text-[#ABB2BF]">HTML CSS Javascript React</p>
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                        <h1 className="text-white font-medium text-2xl">Paenote</h1>
                        <p className="text-[#ABB2BF]">Onboarding website platform </p>
                        <div className=" border border-[#C778DD] px-4 py-2 w-fit"> 
                         <motion.button 
                          whileHover={{ 
                            scale: 1.1, 
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                         }}
                         className="text-white"
                         ><a href="https://paenote.com/" target="_blank" rel="noopener noreferrer" className="flex gap-2">LIVE <IconArrowMoveRight/></a></motion.button>
                        </div>
                    </div>
                </div>
                <div className="w-fit border border-[#ABB2BF]">
                    <div>
                        <Image src="/estatein.svg" alt="project thumbnail" width={500} height={200} priority/>
                    </div>
                    <div className="p-2 border border-[#ABB2BF]">
                        <p className="text-[#ABB2BF]">React Node.jS Firebase Tailwind CSS</p>
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                        <h1 className="text-white font-medium text-2xl">Estatein</h1>
                        <p className="text-[#ABB2BF]">Web application for booking and renting apartments</p>
                         <div className=" border border-[#C778DD] px-4 py-2 w-fit"> 
                         <motion.button 
                         whileHover={{ 
                            scale: 1.1, 
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                         }}
                         className="text-white"><a href="https://estatein-web-appx.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex gap-2">LIVE <IconArrowMoveRight/></a></motion.button>
                        </div>
                    </div>
                </div>
                <div className="w-fit border border-[#ABB2BF]">
                    <div>
                        <Image src="/apex.svg" alt="project thumbnail" width={500} height={200} priority/>
                    </div>
                    <div className="p-2 border border-[#ABB2BF]">
                        <p className="text-[#ABB2BF]">Tailwind CSS Typescript NEXT.js Gemini AI API</p>
                    </div>
                    <div className="p-4 flex flex-col gap-4">
                        <h1 className="text-white font-medium text-2xl">Apex Finances</h1>
                        <p className="text-[#ABB2BF]">For all Tax Filings and IRS Audits </p>
                        <div className=" border border-[#C778DD] px-4 py-2 w-fit"> 
                         <motion.button 
                         whileHover={{ 
                            scale: 1.1, 
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                         }}
                         
                         
                         className="text-white"><a href="https://apex-finances.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex gap-2">LIVE <IconArrowMoveRight/></a></motion.button>
                        </div>
                    </div>
                </div>
            </div>
       
    </div>
  )
}
