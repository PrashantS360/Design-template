import React from 'react'
import discover1 from '../assets/discover1.png'
import discover2 from '../assets/discover2.png'
import discover3 from '../assets/discover3.png'
import discover4 from '../assets/discover4.png'
import discover5 from '../assets/discover5.png'

const Discover = () => {
    return (
        <div className='mb-8'>
        <div className='h-[300px] flex items-center px-4' style={{ background: `url(${discover1}) no-repeat center center / cover` }}>
            <div className="md:w-[40%] sm:w-[50%] w-full px-4 font-heading text-white z-10">
                <h2 className='uppercase text-4xl font-extralight'>Discover</h2>
                <h1 className='uppercase font-bold text-3xl'>
                    Graphic Design Ideas <br /> And Services
                </h1>
                <p className='uppercase text-xl font-extralight'>From Branding to Marketing</p>
                <input type="text" className='outline-none text-sm border-2 border-black mt-5 px-5 py-2 rounded-full w-full ' placeholder='what kind of design are you looking for?' />
                <button className='py-1.5 px-4 w-[25vw] sm:w-[15vw] border-2  border-black rounded-full xl:w-[200px] bg-black text-white relative -top-[2.5rem] float-right'>Search</button>
            </div>
            <div className="flex justify-between w-full md:w-[60%] max-w-[800px] right-0 absolute xl:relative">             
                <div className='flex justify-center'>
                    <div className='w-[1px] h-20 bg-gray-200 absolute -mt-14 text-center'>
                        <div className='w-10 h-3 -ml-[19px] absolute bottom-0 bg-gray-200 shadow-md'></div>
                    </div>
                    <img className='sm:w-40 sm:h-44 w-24 h-28 border-4 border-black mt-[8px]' src={discover2} alt="card" />
                </div>
                <div className='flex justify-center'>
                    <div className='w-[1px] h-10 bg-gray-200 absolute -mt-14 text-center'>
                        <div className='w-10 h-3 -ml-[19px] absolute bottom-0 bg-gray-200 shadow-md'></div>
                    </div>
                    <img className='sm:w-40 sm:h-44 w-24 h-28 border-4 border-black -mt-[32px]' src={discover3} alt="card" />
                </div>
                <div className='flex justify-center'>
                    <div className='w-[1px] h-[84px] bg-gray-200 absolute -mt-14 text-center'>
                        <div className='w-10 h-3 -ml-[19px] absolute bottom-0 bg-gray-200 shadow-md'></div>
                    </div>
                    <img className='sm:w-40 sm:h-44 w-24 h-28 border-4 border-black mt-[12px]' src={discover4} alt="card" />
                </div>
                <div className='flex justify-center'>
                    <div className='w-[1px] h-[74px] bg-gray-200 absolute -mt-14 text-center'>
                        <div className='w-10 h-3 -ml-[19px] absolute bottom-0 bg-gray-200 shadow-md'></div>
                    </div>
                    <img className='sm:w-40 sm:h-44 w-24 h-28 border-4 border-black mt-[2px]' src={discover5} alt="card" />
                </div>
            </div>
        </div>
        <div className='py-4 border-b-2 sm:w-[90%] m-auto'>
            <ul className='flex justify-evenly text-2xl font-heading px-4'>
                <li className='pr-3'>Popular:</li>
                <li className='text-[#1d914a]'>Website Design</li>
                <li className='text-[#1d914a]'>Logo Design</li>
                <li className='text-[#1d914a]'>Brochure</li>
                <li className='text-[#1d914a]'>Label Design</li>
            </ul>
        </div>
        </div>
    )
}

export default Discover