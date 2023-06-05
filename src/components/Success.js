import React from 'react'
import SuccessCard from './SuccessCard'
import success1 from '../assets/success1.png'
import success2 from '../assets/success2.png'
import success3 from '../assets/success3.png'
import success4 from '../assets/success4.png'
import success5 from '../assets/success5.png'

const Success = () => {
    return (
        <div className='my-4 rounded-lg p-4 mx-6 bg-[#ACCBC7] shadow-lg shadow-gray-400'>
            <div className="px-2 py-4">
                <h2 className='font-bold text-center text-[#006d5b] text-4xl font-para'>Our Success</h2>
                <p className='text-sm text-center'>Journey of our success</p>
            </div>
            <div className="flex flex-wrap justify-evenly pt-8">
                <SuccessCard text="Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup India." imgLink={success1} />
                <SuccessCard text="Appreciation from Startup Bengal for our creative startup community" imgLink={success2} />
                <SuccessCard text="FliqaIndia got featured on Yourstory. Click here" imgLink={success3} />
                <SuccessCard text="Received awards from ImagesBazaar on leading creative industry" imgLink={success4} />
                <SuccessCard text="Top ten in Intuit Circle Codeathon, 2020" imgLink={success5} />
            </div>
        </div>
    )
}

export default Success