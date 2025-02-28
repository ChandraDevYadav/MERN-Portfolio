import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import PlayButtonImage from './PlayButtonImage'

const MyVision = () => {
    return (
        <div className='p-24'>
            <div className='grid grid-cols-2 gap-6 items-end'>
                <div>
                    <h1 className='text-7xl font-bold'>My vision is to <br /> create happy <br /> my clients</h1>
                    <p className='text-lg text-gray-600 font-medium py-8 pr-16'>That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are
                        and what you stand for, but words that truly land with those that read them, calling your audience in and making them want
                        more.</p>
                    <div className='flex justify-start items-center gap-12'>
                        <div>
                            <h1 className='text-3xl font-bold'>05</h1>
                            <p className='text-lg font-medium text-gray-500'>Award winner</p>
                        </div>
                        <div>
                            <h1 className='text-3xl font-bold'>50+</h1>
                            <p className='text-lg font-medium text-gray-500'>Worldwide client</p>
                        </div>
                        <div>
                            <h1 className='text-3xl font-bold'>100+</h1>
                            <p className='text-lg font-medium text-gray-500'>Job done successfully</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-7xl font-bold'>3+</h1>
                    <h1 className='text-5xl font-bold text-white py-6' style={{
                        textShadow: "1px 1px 0 rgba(8, 8, 8, 0.4), -1px -1px 0 rgba(8, 8, 8, 0.4), 1px -1px 0 rgba(8, 8, 8, 0.4), -1px 1px 0 rgba(8, 8, 8, 0.4), 1px 1px 0 rgba(8, 8, 8, 0.4)"
                    }}>Years of <br /> experience</h1>
                    <div className='bg-black p-6 flex justify-between items-center rounded-lg group mt-4'>
                        <div>
                            <p className='text-lg text-[#ff710b]'>SAY HELLO!</p>
                            <h1 className='text-white text-2xl font-medium'>hello@henry.com</h1>
                        </div>
                        <div>
                            <GoArrowUpRight className="text-[#ff710b] text-5xl transition-transform duration-300 group-hover:rotate-45" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-24'>
                <PlayButtonImage />
            </div>
        </div>
    )
}

export default MyVision