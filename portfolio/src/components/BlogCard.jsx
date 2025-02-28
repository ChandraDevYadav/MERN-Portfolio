import React from 'react'
import { GoArrowUpRight, GoDotFill } from 'react-icons/go'

const BlogCard = () => {
    return (
        <div className='px-28 pb-12'>
            <div className='text-center py-16'>
                <p className='text-xl font-medium text-[#ff832a]'>Blog</p>
                <h1 className='text-6xl font-bold'>My blog post</h1>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                <div>
                    <div className="overflow-hidden">
                        <img
                            src="./blog1.png"
                            alt="Blog Image"
                            className="transition-transform duration-300 hover:scale-110 hover:rounded-lg rounded-lg shadow-lg"
                        />
                    </div>
                    <div className='flex justify-start items-center gap-3'>
                        <p className='flex justify-start items-center gap-1 py-6'><GoDotFill className='text-black' />UI Design</p>
                        <p className='flex justify-start items-center gap-1 py-6'><GoDotFill className='text-[#ff710b]' />03 May 2019</p>
                    </div>
                    <div className="flex justify-start items-center pr-6 group">
                        <h1 className="text-2xl font-medium pr-8 transition-colors duration-300 group-hover:text-[#ff710b]">
                            Right-lo-left behind development in mobile web design
                        </h1>
                        <GoArrowUpRight className="text-black text-9xl transition-transform duration-300 group-hover:rotate-45 group-hover:text-[#ff710b]" />
                    </div>
                </div>
                <div className='mt-8'>
                    <div className="overflow-hidden">
                        <img
                            src="./blog2.png"
                            alt="Blog Image"
                            className="transition-transform duration-300 hover:scale-110 hover:rounded-lg rounded-lg shadow-lg"
                        />
                    </div>
                    <div className='flex justify-start items-center gap-3'>
                        <p className='flex justify-start items-center gap-1 py-6'><GoDotFill className='text-black' />UI Design</p>
                        <p className='flex justify-start items-center gap-1 py-6'><GoDotFill className='text-[#ff710b]' />03 May 2019</p>
                    </div>
                    <div className="flex justify-start items-center pr-6 group">
                        <h1 className="text-2xl font-medium pr-8 transition-colors duration-300 group-hover:text-[#ff710b]">
                            Right-lo-left behind development in mobile web design
                        </h1>
                        <GoArrowUpRight className="text-black text-9xl transition-transform duration-300 group-hover:rotate-45 group-hover:text-[#ff710b]" />
                    </div>
                </div>
                <div>
                    <div className="overflow-hidden">
                        <img
                            src="./blog3.png"
                            alt="Blog Image"
                            className="transition-transform duration-300 hover:scale-110 hover:rounded-lg rounded-lg shadow-lg"
                        />
                    </div>

                    <div className='flex justify-start items-center gap-3'>
                        <p className='flex justify-start items-center gap-1 py-6'><GoDotFill className='text-black' />UI Design</p>
                        <p className='flex justify-start items-center gap-1 py-6'><GoDotFill className='text-[#ff710b]' />03 May 2019</p>
                    </div>
                    <div className="flex justify-start items-center pr-6 group">
                        <h1 className="text-2xl font-medium pr-8 transition-colors duration-300 group-hover:text-[#ff710b]">
                            Right-lo-left behind development in mobile web design
                        </h1>
                        <GoArrowUpRight className="text-black text-9xl transition-transform duration-300 group-hover:rotate-45 group-hover:text-[#ff710b]" />
                    </div>
                </div>
                <div className='mt-8'>
                    <div className="overflow-hidden">
                        <img
                            src="./blog4.png"
                            alt="Blog Image"
                            className="transition-transform duration-300 hover:scale-110 hover:rounded-lg rounded-lg shadow-lg"
                        />
                    </div>
                    <div className='flex justify-start items-center gap-3'>
                        <p className='flex justify-start items-center gap-1 py-6'><GoDotFill className='text-black' />UI Design</p>
                        <p className='flex justify-start items-center gap-1 py-6'><GoDotFill className='text-[#ff710b]' />03 May 2019</p>
                    </div>
                    <div className="flex justify-start items-center pr-6 group">
                        <h1 className="text-2xl font-medium pr-8 transition-colors duration-300 group-hover:text-[#ff710b]">
                            Right-lo-left behind development in mobile web design
                        </h1>
                        <GoArrowUpRight className="text-black text-9xl transition-transform duration-300 group-hover:rotate-45 group-hover:text-[#ff710b]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard