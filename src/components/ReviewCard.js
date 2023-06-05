import React from 'react'
import review1 from '../assets/review1.png'

const ReviewCard = () => {
  return (
    <div className='m-2 h-[210px] text-white mt-12 relative rounded-xl bg-[#416F75] w-[150px]'>
        <img src={review1} alt="user" className='w-20 absolute -top-4 -right-4' />
        <div className='absolute top-[55px]'>
        <p className='text-xs p-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta veritatis incidunt, recusandae molestias provident quibusdam </p>
        <span className='font-bold px-3 text-center'>~Random Name</span>
        </div>
    </div>
  )
}

export default ReviewCard