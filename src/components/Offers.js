import React from 'react'
import OfferCard from './OfferCard'
import offer1 from '../assets/offer1.jpg'
import offer2 from '../assets/offer2.jpg'
import offer3 from '../assets/offer3.jpg'

const Offers = () => {
  return (
    <div className=' py-2 my-5 px-6 m-auto'>
      <div className='border-b-2 border-t-2 relative border-gray-300 pb-5'>
        <div className="px-2 mx-4 py-4 ">
          <h2 className='font-bold text-center text-[#006d5b] text-4xl font-para'>Best Offers</h2>
          <p className='text-sm text-center'>Discover the best offers on our services</p>
        </div>
        <div className='w-full overflow-x-hidden box-shadow h-[350px] -mb-1 top-[-100px]  absolute -z-10'></div>
        <div className='w-full overflow-x-hidden box-shadow h-[350px] top-[250px] border-0 rotate-180 absolute -z-10 -mt-2'></div>
        <div className='flex justify-evenly flex-wrap'>
          <OfferCard title="Wedding Packages" imgLink={offer1} />
          <div className="w-[1.5px] mt-2 h-[300px] bg-gray-300"></div>
          <OfferCard title="Website Design" imgLink={offer2} />
          <div className="w-[1.5px] mt-2 h-[300px] bg-gray-300"></div>
          <OfferCard title="Beach Photography" imgLink={offer3} />
          <div className="w-[1.5px] mt-2 h-[300px] bg-gray-300"></div>
          <OfferCard title="Wedding Packages" imgLink={offer1} />
        </div>
      </div>
    </div>
  )
}

export default Offers