import React from 'react'
import reviews from '../assets/reviews.png'
import ReviewCard from './ReviewCard'

const Reviews = () => {
    return (
        <div className='z-10 bg-white my-4 px-6'>
            <div className='border-b-2 flex flex-col md:flex-row py-8 border-gray-300'>
                <div className='md:w-[40%]'>
                    <img src={reviews} alt="poster" />
                </div>
                <div className='md:w-[60%] w-full px-4'>
                    <div className='flex flex-col sm:flex-row justify-between items-center'>
                        <div className=''>
                            <h3 className='text-[#006d5b] font-bold text-4xl font para'>Testimonials</h3>
                            <p className='text-sm pl-2'>Words from our clients</p>
                        </div>
                        <div className='flex space-x-2 flex-wrap'>
                            <button className='m-2 rounded-md px-3 py-1 border-[1px] border-black bg-[#4E99A4] text-sm font-bold text-white'>Google</button>
                            <button className='m-2 rounded-md px-3 py-1 border-[1px] border-black text-sm font-bold'>Facebook</button>
                            <button className='m-2 rounded-md px-3 py-1 border-[1px] border-black text-sm font-bold'>WeddingWire</button>
                            <button className='m-2 rounded-md px-3 py-1 border-[1px] border-black text-sm font-bold'>WedmeGoode</button>
                        </div>
                    </div>
                    <div className="flex justify-evenly flex-wrap">
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews