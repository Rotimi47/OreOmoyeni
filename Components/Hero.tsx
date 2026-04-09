'use client';
import { motion } from 'framer-motion';
import Image from "next/image";
import TextReveal from './TextReveal';


export default function Hero() {
  return (
    
    <div className=' px-4 py-10 lg:px-20 lg:py-25  2xl:max-w-380 2xl:mx-auto'>
        <div className='max-w-6xl  flex flex-col lg:flex-row items-center gap-10 justify-between'>
            <div className='flex flex-col gap-8 text-start lg:text-left lg:items-start items-center max-w-xl'>
                <TextReveal text="Hi i am, Ore.Omoyeni a [frontend-developer ]"/>
                <motion.div
                 initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0, duration: 1.5 }}
                 className="flex flex-col gap-4 items-start"> 
                    <p className='text-[#ABB2BF] '>I build responsive React apps that are dynamic, mobile-friendly, and visually captivating. I love turning ideas into responsive, interactive web and mobile experiences.</p> 
                    <div className="border border-[#C778DD] px-4 py-2"> 
                        <motion.button 
                         whileHover={{ 
                        scale: 1.1, 
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                         }}
                         className="text-white"
                        >
                            <a href="mailto:oreomoyeni01@gmail.com"> Contact me!!</a>
                        </motion.button>
                    </div> 
                </motion.div>
            </div>
            <div className='flex justify-center'> 
                <div> 
                    <Image src="/HeroImage.svg" alt='hero-image' width={350} height={350} priority />
                </div>
            </div> 
        </div>
    </div>

  )
}
