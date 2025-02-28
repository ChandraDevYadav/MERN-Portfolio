import React from 'react'
import { FaQuoteRight } from "react-icons/fa6";

const Testimonial = () => {
    return (
        <div className='px-24 py-24'>
            <div className='grid grid-cols-4 gap-8'>
                <div className=''>
                    <h1 className='text-2xl font-semibold text-[#ff832a]'>Testimonial</h1>
                    <p className='text-7xl font-bold'>Client feedback</p>
                </div>
                <div className='px-4'>
                    <FaQuoteRight className='text-5xl' />
                    <p className='text-xl font-medium py-4'>“Energistically build alternative scenarios via cross-unit applications. Credibly exploit one-to-one strategic
                        theme areas and clicks-and-mortar services”</p>
                    <div className='flex justify-start items-center gap-2'>
                        <div className='w-12 h-[2px] bg-black'></div>
                        <h1 className='text-xl font-bold'>Chan Dra Dev</h1>
                    </div>
                </div>
                <div className='px-4'>
                    <FaQuoteRight className='text-5xl' />
                    <p className='text-xl font-medium py-4'>“Energistically build alternative scenarios via cross-unit applications. Credibly exploit one-to-one strategic
                        theme areas and clicks-and-mortar services”</p>
                    <div className='flex justify-start items-center gap-2'>
                        <div className='w-12 h-[2px] bg-black'></div>
                        <h1 className='text-xl font-bold'>Chan Dra Dev</h1>
                    </div>
                </div>
                <div className='px-4'>
                    <FaQuoteRight className='text-5xl' />
                    <p className='text-xl font-medium py-4'>“Energistically build alternative scenarios via cross-unit applications. Credibly exploit one-to-one strategic
                        theme areas and clicks-and-mortar services”</p>
                    <div className='flex justify-start items-center gap-2'>
                        <div className='w-12 h-[2px] bg-black'></div>
                        <h1 className='text-xl font-bold'>Chan Dra Dev</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial