import React from 'react'
import WeddingCard from './WeddingCard'
import wedding1 from '../assets/wedding1.png'
import wedding2 from '../assets/wedding2.png'
import wedding3 from '../assets/wedding3.jpg'
import wedding4 from '../assets/wedding4.jpg'

const Wedding = () => {
    return (
        <div className='px-8 my-4 py-4'>
            <div className="px-2 py-4">
                <h2 className='font-bold text-[#006d5b] text-4xl font-para'>Real Wedding</h2>
                <p className='text-sm'>List your wedding and browse portfolio</p>
            </div>
            <div className="flex justify-evenly flex-wrap">
                <WeddingCard imgLink={wedding1} background="bg-[#DDF8F3]" />
                <WeddingCard imgLink={wedding2} background="bg-[#FBDADA]" />
                <WeddingCard imgLink={wedding3} background="bg-[#FFF9D9]" />
                <WeddingCard imgLink={wedding4} background="bg-[#DDE4FF]" />
            </div>
            <button className='py-2 px-4 my-4 bg-[#DDF9FF] m-auto border-2 border-[#BADCDC] rounded-md flex items-center shadow-md'>View More Weddings <b className='ml-2 font-extrabold text-xl '> &#8594;</b></button>

        </div>
    )
}

export default Wedding