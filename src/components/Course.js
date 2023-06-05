import React from 'react'
import courseBg from '../assets/courseBg.png'
import course from '../assets/course.png'

const Course = () => {
    return (
        <div className='my-4 rounded-lg mx-6 shadow-lg shadow-gray-400 py-12' style={{ background: `url(${courseBg}) no-repeat center center/cover`, backgroundSize: '100vw 100vh' }}>
            <div className='flex flex-col sm:flex-row justify-around items-center text-white lg:w-[80%] m-auto'>
                <div className='px-6 uppercase'>
                    <h3 className='font-heading text-3xl py-3'>Ultimate <br /> course in</h3>
                    <h1 className='md:text-[4rem] text-4xl font-heading'>Photography</h1>
                </div>
                <img className='lg:w-[400px] w-[200px] m-4' src={course} alt="course" />
            </div>
        </div>
    )
}

export default Course