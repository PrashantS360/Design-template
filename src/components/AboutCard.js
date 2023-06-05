import React from 'react'

const AboutCard = ({ imgLink, heading, para }) => {
  return (
    <div className='flex sm:flex-row flex-col space-x-3 px-3 py-3 w-[300px]'>
      <img src={imgLink} alt="card" className='h-32' />
      <div className='flex flex-col justify-center'>
        <h3 className='font-bold'>{heading}</h3>
        <p>{para}</p>
      </div>
    </div>
  )
}

export default AboutCard