import React from 'react'
import footer from '../assets/footer.png'
import { BsFacebook, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className='overflow-y-hidden overflow-x-hidden'>
      <div className='mt-4 min-h-[300px] py-12 flex items-center' style={{ background: `url(${footer}) no-repeat center center / cover` }}>
        <div className='flex flex-col sm:flex-row justify-between px-6 items-start w-[90%] m-auto'>
          <div className='text-white'>
            <h3 className='text-3xl font-bold'>
              Grow your freelancing <br />
              career with Fliqa Associate
            </h3>
            <p className='p-4'>Register yourself <br /> Verification & Quality Check <br /> Verified Associate at FliqaIndia</p>
          </div>
          <button className='text-[#00485E] bg-white px-16 py-1 rounded-md'>Join Now</button>
        </div>
      </div>
      <div className="bg-black text-white py-3 relative -z-20">
        <div className='flex md:flex-row flex-col justify-between px-8 z-10'>
          <div className="md:w-[55%] px-5 py-3">
            <i className='text-xl'>Never miss a thing.</i>
            <br />
            <div className='relative my-2 -mt-2'>
              <input type="text" className='outline-none border-2 border-black mt-5 px-5 py-1 rounded-full md:w-[350px] sm:w-[250px] w-[200px] italic text-sm' placeholder='Email Address' />
              <button className='pb-[5.5px] pt-[3px] mt-[1.5px] px-5 rounded-full bg-gray-300 text-gray-700 absolute text-sm top-5 left-[150px] sm:left-[200px] md:left-[280px]'>Subscribe</button>
            </div>
            <div className='flex space-x-1 text-xl py-1'>
              <BsFacebook />
              <IoLogoWhatsapp />
              <BsLinkedin />
              <BsYoutube />
              <AiFillInstagram />
            </div>
            <i className='text-lg'>Be in touch</i>
          </div>
          <div className="md:w-[30%] py-3">
            <h3 className='text-lg italic text-center mb-2 -ml-16'>Never miss a thing.</h3>
            <div className='flex flex-wrap justify-between text-sm'>
                <span className='py-0.5 w-[150px]'>Services</span>
                <span className='py-0.5 w-[150px]'>Tutorials</span>
                <span className='py-0.5 w-[150px]'>Blog</span>
                <span className='py-0.5 w-[150px]'>Careers</span>
                <span className='py-0.5 w-[150px]'>Portfolio</span>
                <span className='py-0.5 w-[150px]'>Film</span>
            </div>
          </div>
          <div className="md:w-[15%] py-3">
            <h3 className='text-lg italic '>Never miss a thing.</h3>
            <div className='flex text-sm flex-col'>
              <p>Contact us</p>
              <p>Feedback</p>
              <p>FAQ</p>
              <p>Terms and Conditions</p>
              <p>Privacy Policy</p>
              <p>Data Deletion Protocol</p>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 rounded-full w-[100px] h-[100px] bg-gray-300"></div>
          <div className="absolute -top-[200px] -right-[100px] rounded-full w-[300px] h-[300px] bg-gray-300 -z-10"></div>
        </div>
        <p className='text-center text-sm text-gray-300 pt-16'>
          2019-2021, FliqaIndia Pvt Ltd. - ALL RIGHT RESERVED <br />
          POWERED BY FLIQAINDIA PVT. LTD. <br />
          VERSION 5.1.5</p>
      </div>
    </footer>
  )
}

export default Footer