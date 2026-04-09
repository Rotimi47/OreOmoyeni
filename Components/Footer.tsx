import { IconBrandGithub, IconBrandLinkedinFilled, IconBrandX } from "@tabler/icons-react";
import Link from "next/link";


export default function Footer() {
  return (
    <div className="w-full flex flex-col mx-auto px-4 mt-15 py-8 border-t border-t-[#ABB2BF] gap-6 lg:px-20  2xl:max-w-380 2xl:mx-auto">
        <div className="flex flex-col gap-12 max-w-7xl   ">
            <div className="flex lg:flex-row justify-between">
                <div className="flex flex-col gap-4">
                    <div className=" text-white text-xl font-semibold "><Link href="/">OreO</Link></div>
                    <p className="text-white">Frontend Developer </p>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-white font-medium text-2xl">Media</p>
                    <div className="flex gap-2 justify-center">
                        <a href="https://github.com/Rotimi47" target="_blank" rel="noopener noreferrer" className="text-[#ABB2BF]"> <IconBrandGithub/> </a>
                        <a href="https://www.linkedin.com/in/oluwadurotimi-omoyeni-4254a71b9/" target="_blank" rel="noopener noreferrer" className="text-[#ABB2BF]"> <IconBrandLinkedinFilled/> </a>
                        <a href="https://x.com/oreomoyeni" target="_blank" rel="noopener noreferrer" className="text-[#ABB2BF]"> <IconBrandX/> </a>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <p className="text-[#ABB2BF]">Copyright 2026. Code by OreO</p>
            </div>

        </div>

    </div>
  )
}
