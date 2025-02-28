import React from 'react'
import { GoDotFill } from 'react-icons/go'

const Education = () => {
    return (
        <div>
            <h1 className='text-2xl font-medium mb-8'>Education</h1>
            <div className='flex justify-start items-start bg-gray-200 px-8 py-8 rounded-lg hover:bg-white'>
                <p className='text-sm font-medium'>03/2008 – 07/2011</p>
                <div className='pl-24'>
                    <p className='flex justify-start items-center gap-1 pb-5'><GoDotFill className='text-[#ff710b]' /> Axtra</p>
                    <h1 className='text-2xl font-semibold'>Bachelor In Computer Engineering</h1>
                </div>
            </div>
            <div className='flex justify-start items-start bg-gray-200 px-8 py-8 my-4 rounded-lg hover:bg-white'>
                <p className='text-sm font-medium'>03/2008 – 07/2011</p>
                <div className='pl-24'>
                    <p className='flex justify-start items-center gap-1 pb-5'><GoDotFill className='text-[#ff710b]' /> Axtra</p>
                    <h1 className='text-2xl font-semibold'>Bachelor In Computer Engineering</h1>
                </div>
            </div>
            <div className='flex justify-start items-start bg-gray-200 px-8 py-8 rounded-lg hover:bg-white'>
                <p className='text-sm font-medium'>03/2008 – 07/2011</p>
                <div className='pl-24'>
                    <p className='flex justify-start items-center gap-1 pb-5'><GoDotFill className='text-[#ff710b]' /> Axtra</p>
                    <h1 className='text-2xl font-semibold'>Bachelor In Computer Engineering</h1>
                </div>
            </div>
        </div>
    )
}

export default Education