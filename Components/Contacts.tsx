import { IconBrandX, IconMailExclamation } from "@tabler/icons-react";


export default function Contacts() {
  return (
    <div  data-aos="fade-up" className="w-full flex flex-col mx-auto px-4  gap-6 max-w-7xl lg:px-20 lg:py-18 2xl:max-w-380 2xl:mx-auto">
        <div className="w-100 flex items-center gap-4">
            <h1 className="text-white font-medium text-3xl"><span className="text-[#C778DD]">#</span>contacts </h1>
            <div className="hidden lg:block lg:flex-1 h-px bg-[#C778DD] "></div>
        </div>
        <div className="flex flex-col gap-10 lg:flex-row justify-between">
            <div className="w-125">
                <p className="font-medium text-[#ABB2BF]">I’m interested in freelance opportunities. However, if you have other requests or questions, Please don’t hesitate to contact me.</p>
            </div>
            <div className="flex flex-col gap-4 border border-white p-4">
                <h2 className="text-white font-semibold">Message me here</h2>
                <div> 
                     <a href="https://x.com/oreomoyeni" target="_blank" rel="noopener noreferrer" className="flex gap-2.5 text-[#ABB2BF]"> <span><IconBrandX/></span>@oreomoyeni</a>
                    <a href="mailto:oreomoyeni01@gmail.com"  target="_blank" rel="noopener noreferrer" className="flex gap-2.5 text-[#ABB2BF]"> <span><IconMailExclamation/></span>oreomoyeni01@gmail.com</a>
                </div>

            </div>
        </div>
    </div>
  )
}
