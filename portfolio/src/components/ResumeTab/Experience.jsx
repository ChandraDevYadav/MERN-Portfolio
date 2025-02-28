import React from 'react'
import { GoDotFill } from 'react-icons/go'

const Experience = () => {
    return (
        <>
            <h1 className='text-2xl font-medium mb-8'>Skills</h1>
            <div className='grid grid-cols-2 gap-4'>
                <div className='bg-gray-200 px-8 py-8 rounded-lg hover:bg-white'>
                    <p className='text-sm text-gray-600 font-medium'>03/2016 – Running</p>
                    <p className='flex justify-start items-center gap-1 py-6'><GoDotFill className='text-[#ff710b]' /> Axtra</p>
                    <h1 className='font-semibold text-2xl'>MERN Stack Developer</h1>
                </div>
                <div className='bg-gray-200 px-8 py-8 rounded-lg hover:bg-white'>
                    <p className='text-sm text-gray-600 font-medium'>03/2016 – Running</p>
                    <p className='flex justify-start items-center gap-1 py-6'><GoDotFill className='text-[#ff710b]' /> Axtra</p>
                    <h1 className='font-semibold text-2xl'>Frontend Developer</h1>
                </div>
                <div className='bg-gray-200 px-8 py-8 rounded-lg hover:bg-white'>
                    <p className='text-sm text-gray-600 font-medium'>03/2016 – Running</p>
                    <p className='flex justify-start items-center gap-1 py-6'><GoDotFill className='text-[#ff710b]' /> Axtra</p>
                    <h1 className='font-semibold text-2xl'>Graphic Developer</h1>
                </div>
                <div className='bg-gray-200 px-8 py-8 rounded-lg hover:bg-white'>
                    <p className='text-sm text-gray-600 font-medium'>03/2016 – Running</p>
                    <p className='flex justify-start items-center gap-1 py-6'><GoDotFill className='text-[#ff710b]' /> Axtra</p>
                    <h1 className='font-semibold text-2xl'>Product designer</h1>
                </div>
            </div>
            <div className='flex justify-end items-center mt-24'>
                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.5625 0C27.5625 23.1273 9.1875 28.5455 0 27.8182C16.875 31.0909 25.3125 34.3636 27 54C27 40.3636 34.875 30.5455 54 27.8182C46.125 28.3636 29.8125 24 27.5625 0Z" fill="#FFB646"></path>
                </svg>
            </div>
        </>
    )
}

export default Experience