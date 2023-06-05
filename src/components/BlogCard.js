import React from 'react'

const BlogCard = ({imgLink, title}) => {
  return (
    <div className='w-[450px] h-[300px] rounded-xl' style={{ background: `url(${imgLink}) no-repeat center center / cover` }}>
        <div className='w-[75%] rounded-xl z-40 h-[96%] text-white py-12 px-8' style={{background:'rgba(0,0,0,0.6)'}}>
            <div className='opacity-[5]'>
            <h4 className='font-heading'>Featured on : Sep 15, 2021</h4>
            <h1 className='text-4xl font-heading font-extralight'>{title}</h1>
            </div>
        </div>
    </div>
  )
}

export default BlogCard