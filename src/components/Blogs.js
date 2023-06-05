import React from 'react'
import BlogCard from './BlogCard'
import blog1 from '../assets/blogs1.png'
import blog2 from '../assets/blogs2.png'
import blog3 from '../assets/blogs3.png'
import blog4 from '../assets/blogs4.png'
import blog5 from '../assets/blogs5.png'

const Blogs = () => {
    return (
        <div className='bg-[#DDF8F3] px-8 my-4 py-4'>
            <div className="px-2 py-4">
                    <h2 className='font-bold text-[#006d5b] text-4xl font-para'>Our Blogs</h2>
                    <p className='text-sm'>Check out our Latest Blog</p>
            </div>

            <div className="flex justify-evenly space-x-3 flex-wrap">
                <BlogCard imgLink={blog1} title="Wedding Photography at Goa"/>
                <BlogCard imgLink={blog2} title="Photography: Expectations vs. Reality"/>
                <div className="trending lg:w-[30%] text-sm">
                    <div className='flex justify-between'>
                        <h4 className='text-xl text-[#354547]'>Trending Now</h4>
                        <span className='text-sm'>View All</span>
                    </div>
                    <div className='flex justify-between items-center border-b-2 py-2 border-gray-500 space-x-2'>
                        <img src={blog3} alt="poster" className='w-20 shadow-lg rounded-lg'/>
                        <div>
                            <h3 className='text-[#354547]'>Creative industries are on the verge of depletion due to COVID-19</h3>
                            <p className='text-[#1e2729] text-xs'>In a period where many industries remain highly unclear, others want to grasp how COVID-19 impact</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center border-b-2 py-2 border-gray-500 space-x-2'>
                        <img src={blog4} alt="poster" className='w-20 shadow-lg rounded-lg'/>
                        <div>
                            <h3 className='text-[#354547]'>Photography: Expectations vs. Reality</h3>
                            <p className='text-[#1e2729] text-xs'>Most of the time without any hands-on experience in photography, professional and advanced photography acutally</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center border-b-2 py-2 border-gray-500 space-x-2'>
                        <img src={blog5} alt="poster" className='w-20 shadow-md rounded-lg'/>
                        <div>
                            <h3 className='text-[#354547]'>Wedding Photography at Goa</h3>
                            <p className='text-[#1e2729] text-xs'>Wedding Photography in Goa If not, every couple when they make their list of Pre-wedding shoot</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Blogs