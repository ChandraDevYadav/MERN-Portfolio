import React from 'react'
import { GoDotFill } from 'react-icons/go'

const Awards = () => {
    return (
        <div>
            <h1 className='text-2xl font-medium mb-8'>Skills</h1><div className='grid grid-cols-2 gap-4'>
                <div className='bg-gray-200 rounded-lg hover:bg-white px-6 py-8'>
                    <div className='flex justify-between items-center'>
                        <img src="./fr.png" alt="" className='w-16 h-16' />
                        <p>2022</p>
                    </div>
                    <p className='flex justify-start items-center gap-1 py-5'><GoDotFill className='text-[#ff710b]' /> Winner</p>
                    <div>
                        <h1 className='text-2xl font-semibold'>Frontend Developer</h1>
                    </div>
                </div>
                <div className='bg-gray-200 rounded-lg hover:bg-white px-6 py-8'>
                    <div className='flex justify-between items-center'>
                        <img src="./ba.png" alt="" className='w-16 h-16' />
                        <p>2022</p>
                    </div>
                    <p className='flex justify-start items-center gap-1 py-5'><GoDotFill className='text-[#ff710b]' /> Winner</p>
                    <div>
                        <h1 className='text-2xl font-semibold'>Backend Developer</h1>
                    </div>
                </div>
                <div className='bg-gray-200 rounded-lg hover:bg-white px-6 py-8'>
                    <div className='flex justify-between items-center'>
                        <img src="./ui1.png" alt="" className='w-16 h-16' />
                        <p>2022</p>
                    </div>
                    <p className='flex justify-start items-center gap-1 py-5'><GoDotFill className='text-[#ff710b]' /> Winner</p>
                    <div>
                        <h1 className='text-2xl font-semibold'>Graphic Designer</h1>
                    </div>
                </div>
                <div className='bg-gray-200 rounded-lg hover:bg-white px-6 py-8'>
                    <div className='flex justify-between items-center'>
                        <img src="./to.png" alt="" className='w-16 h-16' />
                        <p>2022</p>
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold'>Dev Toolkit</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Awards