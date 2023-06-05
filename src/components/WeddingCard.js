import React from 'react'
import wedding5 from '../assets/wedding5.jpg'
import wedding6 from '../assets/wedding6.jpg'

const WeddingCard = ({imgLink, background}) => {
  return (
    <div className={`${background} rounded-md w-[310px] p-2 shadow-lg m-2`}>
        <img src={imgLink} alt="wedding" className='rounded-t-md' />
        <div className='flex'>
            <img className='w-1/3' src={wedding5} alt="wedding" />
            <img className='w-1/3' src={wedding6} alt="wedding" />
            <img className='w-1/3' src={wedding6} alt="wedding" />
        </div>
        <div className='py-3'>
            <h3 className='font-bold font-para text-xl'>Danielle & Ronnie</h3>
            <p>38 photos. Kittery, Polland</p>
        </div>
    </div>
  )
}

export default WeddingCard