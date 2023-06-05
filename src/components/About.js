import React from 'react'
import about from '../assets/about.jpg';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
import AboutCard from './AboutCard';

const About = () => {
    return (
        <div className='flex flex-col items-center'>
            <img src={about} alt="background" className='w-full' />
            <h2 className='font-bold text-center text-5xl font-heading mt-5 mb-2'>India&#39;s Leading Creative Platform</h2>
            <p className='font-para text-lg text-center font-extralight text-gray-600'>Experience hassle free bookings, Trusted by 2500+ Customers</p>
            <input type="text" className='outline-none border-2 border-black mt-5 px-5 py-2 rounded-full min-w-[55vw] text-center sm:-ml-28' placeholder='Search service, blog and many more...' />
            <button className='py-2 px-5 min-w-[17vw] border-2 border-black rounded-full max-w-[165px] bg-black text-white relative -top-[2.7rem] left-[24vw] '>Search</button>

            <div className='flex justify-evenly flex-wrap'>
                <AboutCard imgLink={card1} heading={"Verified Reviews"} para={"For verified reviews"} />
                <AboutCard imgLink={card2} heading={"Top Articles"} para={"Helps you decide"} />
                <AboutCard imgLink={card3} heading={"Write Share Win Contest"} para={"Earn cash for reviews"} />
                <AboutCard imgLink={card4} heading={"MouthShut for Brands"} para={"Request a Demo"} />
            </div>
        </div>
    )
}

export default About