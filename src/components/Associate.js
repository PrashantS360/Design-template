import React from 'react'
import associate1 from '../assets/associate1.jpg'
import associate2 from '../assets/associate2.jpg'
import associate3 from '../assets/associate3.jpg'
import associate4 from '../assets/associate4.jpg'
import associate5 from '../assets/associate5.jpg'
import AssociateCard from './AssociateCard'

const Associate = () => {
  return (
    <div className='bg-[#A1E3D8] px-8 my-4 py-4'>
        <div className="flex flex-col sm:flex-row justify-between px-2 py-4">
            <div>
                <h2 className='font-bold text-[#006d5b] text-4xl font-para'>Find Trusted Associate</h2>
                <p className='text-sm'>Find the best Fliqa Associate fo ryour special day.</p>
            </div>
            <div>
                <span className='text-[#155c50] text-lg'>See More 	&gt;&gt;</span>
            </div>
        </div>
        <div className="flex justify-evenly flex-wrap">
            <AssociateCard verified={true} imgLink={associate1}/>
            <AssociateCard verified={true} imgLink={associate2}/>
            <AssociateCard verified={false} imgLink={associate3}/>
            <AssociateCard verified={true} imgLink={associate4}/>
            <AssociateCard verified={false} imgLink={associate5}/>
        </div>
    </div>
  )
}

export default Associate