import React from 'react'
import logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center py-3 bg-black text-white px-4'>
        <div className='flex items-center flex-col md:flex-row'>
            <img src={logo} alt="logo" className='w-40 mx-4'/>
            <ul className='flex space-x-4'>
                <li>Home</li>
                <li>Service</li>
                <li>Portfolio</li>
                <li>Community</li>
                <li>Blog</li>
            </ul>
        </div>
        <div className='flex space-x-3'>
            <button className='gradient-button1 my-2 rounded-full text-white px-4 pt-1 pb-2'>Sign Up</button>
            <button className='gradient-button2 my-2 rounded-full text-white px-4 pt-1 pb-2'>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar   