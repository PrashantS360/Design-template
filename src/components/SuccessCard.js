import React from 'react'

const SuccessCard = ({imgLink,text}) => {
  return (
    <div className='w-[200px] flex flex-col items-center'>
        <div className='rounded-full bg-white w-40 h-40 flex items-center justify-center shadow-md shadow-gray-400'>
        <img className='w-full' src={imgLink} alt="success" />
        </div>
        <p className='text-center text-sm font-para p-2'>{text}</p>
    </div>
  )
}

export default SuccessCard