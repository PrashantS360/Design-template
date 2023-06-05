import React from 'react'

const ServiceCard = ({imgLink,start, event}) => {
  return (
    <div className='text-center shadow-lg m-[10px] h-[400px] w-[280px] rounded-2xl'>
        <div className='h-[65%] flex justify-center mb-3'>
        <img src={imgLink} alt="event" className='rounded-2xl h-full shadow-md shadow-red-300'/>
        </div>
        <div className='h-[30%] flex flex-col justify-between items-center'>
        <h2 className='text-center font-bold text-xl'>{event}</h2>
        <p className='border-[1px] border-gray-700 w-[90%]'></p>
        <p className='px-2 text-gray-600 text-sm text-center'><b>Starting at</b> {start}</p>
        <button className='bg-[#0a9880] text-white text-sm px-4 rounded-md py-1 m-2 w-fit'>Know More</button>
        </div>
    </div>
  )
}

export default ServiceCard