import React from 'react'
import verify from '../assets/verify.png'
const AssociateCard = ({ imgLink, verified }) => {
    return (
        <div className='m-2 shadow-lg shadow-black rounded-3xl max-w-[250px]'>
            <img src={imgLink} alt="profile" className='rounded-t-3xl '/>
            <div className="flex bg-gray-800 text-white justify-between px-2.5 rounded-b-3xl py-1 items-center h-[8vh]">
                <div>
                    <h2 className='font-light'>Name Title</h2>
                    <p className='text-sm font-light'>Location: </p>
                </div>
                {verified ? 
                <img src={verify} alt='assured' className='w-28'/>: 
                <span>5 &#9733;</span> }
            </div>
        </div>
    )
}

export default AssociateCard