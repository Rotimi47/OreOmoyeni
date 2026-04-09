"use client";
import Link from "next/link";
import {useState} from "react";
import { IconMenu3 } from "@tabler/icons-react";
import {IconBrandGithub} from "@tabler/icons-react"
import {IconBrandLinkedinFilled} from "@tabler/icons-react"
import {IconBrandX} from "@tabler/icons-react"
import { IconX } from "@tabler/icons-react";
import { useEffect } from "react";


export default function Navbar() {
  
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

     useEffect(() => {
    const handleScroll = () => {
      setMobileDrawerOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <div className=" "> 
        <nav className="relative flex justify-between  gap-4 px-4 pt-4 pb-2 items-center lg:px-20 lg:pt-8 lg:pb-2 2xl:max-w-380 2xl:mx-auto">
          
            <div className=" text-white text-xl font-semibold "><Link href="/">OreO</Link></div>
            <div className="hidden lg:flex gap-8 items-center"> 
              <Link className="text-[#ABB2BF] hover:text-white" href="/"><span className="text-[#C778DD]">#</span>home</Link>
              <Link className="text-[#ABB2BF] hover:text-white" href="/projects"> <span className="text-[#C778DD]">#</span>works</Link>
              <Link className="text-[#ABB2BF] hover:text-white" href="/contact"> <span className="text-[#C778DD]">#</span>contacts</Link>
              <a href="/resume-x.pdf" target="_blank" rel="noopener noreferrer" className="text-[#ABB2BF] hover:text-white"><span className="text-[#C778DD]">#</span>resume</a>
            </div>
          
          <div className='lg:hidden'>
                <button onClick={toggleNavbar} className=''> 
                    {mobileDrawerOpen ?<IconX className="text-white"/> : <IconMenu3 className="text-white"/>}
                </button>
          </div>
           
                  <div 
                    className={ `lg:hidden absolute top-16 left-0  w-full z-50 transition-all duration-300 ${
                      mobileDrawerOpen 
                       ? "opacity-100  pointer-events-auto"
                        : "opacity-0  pointer-events-none" 
                    }`}
                  >
                    <div className="bg-[#282C33]  rounded-md shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-5 flex flex-col gap-12 border border-white/10">
                      <div className="items-start"> 
                        <ul className="flex flex-col gap-6">
                          <li className="text-[#ABB2BF] text-3xl"> <Link href="/" onClick={() => setMobileDrawerOpen(false)}><span className="text-[#C778DD]">#</span>home</Link></li>
                          <li className="text-[#ABB2BF] text-3xl"><Link  href="/projects" onClick={() => setMobileDrawerOpen(false)}> <span className="text-[#C778DD]">#</span>works</Link></li>  
                          <li className="text-[#ABB2BF] text-3xl"><Link  href="/contact" onClick={() => setMobileDrawerOpen(false)}> <span className="text-[#C778DD]">#</span>contact</Link></li> 
                          <li className="text-[#ABB2BF] text-3xl"><a href="/resume-x.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setMobileDrawerOpen(false)}> <span className="text-[#C778DD]">#</span>resume </a></li>  
                        </ul>
                      </div>
                      <div className="flex gap-2 justify-center">
                        <a href="https://github.com/Rotimi47" target="_blank" rel="noopener noreferrer" className="text-[#ABB2BF]"> <IconBrandGithub/> </a>
                        <a href="https://www.linkedin.com/in/oluwadurotimi-omoyeni-4254a71b9/" target="_blank" rel="noopener noreferrer" className="text-[#ABB2BF]"> <IconBrandLinkedinFilled/> </a>
                        <a href="https://x.com/oreomoyeni" target="_blank" rel="noopener noreferrer" className="text-[#ABB2BF]"> <IconBrandX/> </a>
                      </div>
                    </div>
                    
                  </div> 
        </nav>
    </div>
  );
}