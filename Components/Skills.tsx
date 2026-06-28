import Image from 'next/image'
import React from 'react'

export default function Skills() {
  return (
    <div   data-aos="fade-up" className='w-full flex flex-col mx-auto px-4 py-15 gap-8 max-w-7xl lg:px-20 lg:py-18 2xl:max-w-380 2xl:mx-auto'>
        <div className='w-100 flex items-center gap-4'>
            <h1 className="text-white font-medium text-3xl"><span className="text-[#C778DD]">#</span>skills </h1>
            <div className="hidden lg:block lg:flex-1 h-px bg-[#C778DD] "></div>
        </div>
        <div className='flex justify-between'>
            <div className='hidden lg:block'>
                <Image src="/skillsImage.svg" alt="project thumbnail" width={350} height={350} priority/>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4  justify-items-center'>
                    <div className='w-full max-w-60 '>
                        <div className='border border-white p-2'> 
                            <p className='text-white font-semibold'>Languages</p>
                        </div>
                        <div className='border border-white p-2'>
                            <p className='text-[#ABB2BF]'>
                               HTML CSS Javascript Typescript Python
                            </p>
                        </div>
                    </div>
                    <div className='w-full max-w-60'>
                        <div className='border border-white p-2'> 
                            <p className='text-white font-semibold'>Databases</p>
                        </div>
                        <div className='border border-white p-2'>
                            <p className='text-[#ABB2BF]'>
                                FirebaseDB  MongoDB Apache CouchDB
                            </p>
                        </div>
                    </div>
                    <div className='w-full max-w-60'>
                        <div className='border border-white p-2'> 
                            <p className='text-white font-semibold'>Tools</p>
                        </div>
                        <div className='border border-white p-2'>
                            <p className='text-[#ABB2BF]'>
                                VSCode GitHub Figma Linux 
                            </p>
                        </div>
                    </div>
                    <div className='w-full max-w-60 lg:col-start-2'>
                        <div className='border border-white p-2'> 
                            <p className='text-white font-semibold'>Frameworks</p>
                        </div>
                        <div className='border border-white p-2'>
                            <p className='text-[#ABB2BF]'>
                                REACT NEXT.js NODE.js
                            </p>
                        </div>
                    </div>
                    <div className='w-full max-w-60'>
                        <div className='border border-white p-2'> 
                            <p className='text-white font-semibold'>Libraries</p>
                        </div>
                        <div className='border border-white p-2'>
                            <p className='text-[#ABB2BF]'>
                                Framer Motion Gsap Axios Zustand Zod Headless UI
                            </p>
                        </div>
                    </div>
                
                
            </div>
        </div>
    </div>
  )
}
