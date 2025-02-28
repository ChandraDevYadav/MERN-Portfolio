import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { MdArrowOutward, MdArrowUpward } from 'react-icons/md'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='px-32'>
            <div className='grid grid-cols-2 gap-32 pt-24 pb-12'>
                <div className='relative'>
                    <img src="./1740720053414.jpg" alt="" className='w-full h-full object-cover' />
                    <div className='absolute right-0 bottom-16'>
                        <div className='relative bg-[#ff832a] w-28 h-28 rounded-full'>
                            <p className='text-7xl font-bold absolute top-4 left-3'>3+</p>
                        </div>
                        <h1 className='text-5xl font-bold text-white' style={{
                            textShadow: "1px 1px 0 rgba(8, 8, 8, 0.4), -1px -1px 0 rgba(8, 8, 8, 0.4), 1px -1px 0 rgba(8, 8, 8, 0.4), -1px 1px 0 rgba(8, 8, 8, 0.4), 1px 1px 0 rgba(8, 8, 8, 0.4)"
                        }}>Years of <br /> experience</h1>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-bold text-[#ff710b]'>Hello I’m</h1>
                    <h1 className='text-7xl font-bold'>Mark Henry, <br /> Product <br /> Designer</h1>
                    <p className='text-4xl py-6 font-semibold'>Based in German</p>
                    <p className='pr-16 text-lg text-gray-500'>That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not
                        only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and
                        making them .</p>
                    <div className='flex justify-start items-center gap-8 pt-8'>
                        <div>
                            <p className='text-3xl font-bold'>08</p>
                            <h1 className='text-gray-500 text-lg'>Award winner</h1>
                        </div>
                        <div>
                            <p className='text-3xl font-bold'>1.2k</p>
                            <h1 className='text-gray-500 text-lg'>Worldwide client</h1>
                        </div>
                        <div>
                            <p className='text-3xl font-bold'>3.5k</p>
                            <h1 className='text-gray-500 text-lg'>Job done successfully</h1>
                        </div>
                    </div>
                    <div className='flex justify-start'>
                        <Link
                            to="/resume.jpg"
                            download="resume.jpg"
                            className="flex justify-start items-center gap-2 bg-black px-6 py-4 rounded-lg text-white font-semibold mt-10"
                        >
                            Download my resume <MdArrowOutward />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About