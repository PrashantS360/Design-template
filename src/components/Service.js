import React from 'react'
import ServiceCard from './ServiceCard'
import service1 from '../assets/service1.jpg'
import service2 from '../assets/service2.jpg'
import service3 from '../assets/service3.jpg'
import service4 from '../assets/service4.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Service = () => {
    return (
        <div className='my-4 px-8 py-8'>
            <div>
                <h2 className='font-bold text-[#006d5b] text-4xl font-para'>Our Featured Services</h2>
                <p className='text-sm'>Discover the range of services provided by FliqaIndia</p>
            </div>
            <Carousel
            showThumbs={false}
            >
                <div className='flex justify-evenly flex-wrap items-center space-x-3 h-[420px]'>
                    <ServiceCard imgLink={service1} event="Pre Wedding Photoshoot" start="25,000(One Day)" />
                    <ServiceCard imgLink={service2} event="Wedding Photoshoot" start="65,000(Two Days)" />
                    <ServiceCard imgLink={service3} event="Portfolio Shoot" start="25,000(Standard Price for 6-8 hours)" />
                    <ServiceCard imgLink={service4} event="Birthday Baby Folio" start="15,000(One Day)" />
                </div>
                <div className='flex justify-evenly flex-wrap items-center space-x-3 h-[420px]'>
                    <ServiceCard imgLink={service3} event="Portfolio Shoot" start="25,000(Standard Price for 6-8 hours)" />
                    <ServiceCard imgLink={service1} event="Pre Wedding Photoshoot" start="25,000(One Day)" />
                    <ServiceCard imgLink={service2} event="Wedding Photoshoot" start="65,000(Two Days)" />
                </div>
            </Carousel>
        </div>
    )
}

export default Service