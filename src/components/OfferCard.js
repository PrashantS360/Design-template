import React from 'react'
import offerCard from '../assets/offerCard.png'

const OfferCard = ({ imgLink, title }) => {
  return (
    <div className='w-[200px] h-[300px] shadow-lg shadow-gray-400 rounded-xl m-2'>
      <div className='h-[86%] rounded-xl text-white' style={{ background: `url(${imgLink}) no-repeat center center / cover` }}>
        <div style={{background:'rgba(0,0,0,0.3)'}} className='h-full rounded-xl flex flex-col justify-around'>
        <h2 className='text-xl py-3 border-b-2 border-gray-300 mx-6 text-center'>{title}</h2>
        <div>
          <h3 className='text-lg px-4 -mb-3'>Discount</h3>
          <img className='w-[140px]' src={offerCard} alt="discount" />
        </div>
        </div>
      </div>
      <p className='p-2 text-center'>Book Now</p>
    </div>
  )
}

export default OfferCard