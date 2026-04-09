import {IconQuoteOpen} from "@tabler/icons-react"
import {IconQuote} from "@tabler/icons-react"
export default function Text() {
  return (
    <div  className='hidden lg:block w-fit mx-auto pt-10 pb-10'>
        <div className='flex flex-col max-w-4xl mx-auto '>
            <div className='w-fit relative border border-[#ABB2BF] p-8 '> 
                <span className="absolute -top-3 left-2 text-3xl text-[#ABB2BF] bg-[#282C33] px-1">
                    <IconQuoteOpen/>
                </span>
                <span className="absolute -bottom-3 right-2 text-3xl text-[#ABB2BF] bg-[#282C33] px-1">
                    <IconQuote/>
                </span>
                <h1 className='text-white text-2xl'>That’s not a bug, that’s an undocumented feature.</h1>
            </div>
            <div className='flex justify-end'>
            <div className='w-fit border border-[#ABB2BF] p-4'>
                <h1 className='text-white text-2xl'>- OreO</h1>
            </div>
            </div>
        </div>
    </div>
  )
}
