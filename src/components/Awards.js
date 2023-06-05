import React from 'react'
import award1 from '../assets/award1.png'
import award2 from '../assets/award2.png'
import awardedBy1 from '../assets/awardedBy1.png'
import awardedBy2 from '../assets/awardedBy2.png'
import awardedBy3 from '../assets/awardedBy3.png'
import awardedBy4 from '../assets/awardedBy4.png'
import awardedBy5 from '../assets/awardedBy5.png'
import awardedBy6 from '../assets/awardedBy6.png'

const Awards = () => {
    return (
        <div className='my-4 rounded-lg bg-[#DDF8F3] p-8 mx-6 flex flex-col md:flex-row shadow-md shadow-gray-400'>
            <div className="md:w-[55%] flex justify-evenly flex-wrap bg-[#4E99A4] px-3 rounded-lg py-5">
                <img className='w-[300px] m-2' src={award1} alt="awards" />
                <img className='w-[300px] m-2' src={award2} alt="awards" />
            </div>
            <div className='md:w-[40%] justify-evenly flex flex-wrap font-para mx-3 p-3'>
                <div className="rounded-lg min-w-[200px] h-[60px] flex justify-between items-center bg-white px-3 m-2 shadow-md shadow-gray-400">
                    <img className='w-[100px] m-1' src={awardedBy1} alt="awardedBy" />
                    <p><b className='text-lg m-1'>4.9</b>/5</p>
                </div>
                <div className="rounded-lg min-w-[200px] h-[60px] flex justify-between items-center bg-white px-3 m-2 shadow-md shadow-gray-400">
                    <img className='w-[100px] m-1' src={awardedBy2} alt="awardedBy" />
                    <p><b className='text-lg m-1'>4.9</b>/5</p>
                </div>
                <div className="rounded-lg min-w-[200px] h-[60px] flex justify-between items-center bg-white px-3 m-2 shadow-md shadow-gray-400">
                    <img className='w-[100px] m-1' src={awardedBy3} alt="awardedBy" />
                    <p><b className='text-lg m-1'>4.9</b>/5</p>
                </div>
                <div className="rounded-lg min-w-[200px] h-[60px] flex justify-between items-center bg-white px-3 m-2 shadow-md shadow-gray-400">
                    <img className='w-[100px] m-1' src={awardedBy4} alt="awardedBy" />
                    <p><b className='text-lg m-1'>4.8</b>/5</p>
                </div>
                <div className="rounded-lg min-w-[200px] h-[60px] flex justify-between items-center bg-white px-3 m-2 shadow-md shadow-gray-400">
                    <img className='w-[100px] m-1' src={awardedBy5} alt="awardedBy" />
                    <p><b className='text-lg m-1'>5</b>/5</p>
                </div>
                <div className="rounded-lg min-w-[200px] h-[60px] flex justify-between items-center bg-white px-3 m-2 shadow-md shadow-gray-400">
                    <img className='w-[100px] m-1' src={awardedBy6} alt="awardedBy" />
                    <p><b className='text-lg m-1'>5</b>/5</p>
                </div>
            </div>
        </div>
    )
}

export default Awards