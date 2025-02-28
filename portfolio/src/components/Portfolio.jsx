import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { Link } from 'react-router-dom'

const Portfolio = () => {
    return (
        <div className='px-24 pb-24'>
            <div className='text-center py-16'>
                <p className='text-2xl font-medium text-[#ff710b]'>Portfolio</p>
                <h1 className='text-7xl font-semibold'>My recent work</h1>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <div className="overflow-hidden rounded-lg">
                        <img
                            src="./mypro2.png"
                            alt=""
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>


                    <div className='flex justify-start items-center gap-4 mt-6'>
                        <button className='border border-black px-6 py-1 rounded-full'>APP</button>
                        <button className='border border-black px-6 py-1 rounded-full'>Website</button>
                    </div>
                    <Link to='https://gyan-sagar-education.onrender.com' className='flex justify-between items-center pr-8 mt-6'>
                        <h1 className='text-3xl font-semibold'>Gyan-Sagar Education App</h1>
                        <GoArrowUpRight className="text-black text-3xl transition-transform duration-300 hover:rotate-45" />
                    </Link>
                </div>
                <div>
                    <div className="overflow-hidden rounded-lg">
                        <img
                            src="./mypro3.png"
                            alt=""
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    <div className='flex justify-start items-center gap-4 mt-6'>
                        <button className='border border-black px-6 py-1 rounded-full'>APP</button>
                        <button className='border border-black px-6 py-1 rounded-full'>Website</button>
                    </div>
                    <Link to='https://milanbindu-dating-app.onrender.com' className='flex justify-between items-center pr-8 mt-6'>
                        <h1 className='text-3xl font-semibold'>Milan-Bindu Dating App</h1>
                        <GoArrowUpRight className="text-black text-3xl transition-transform duration-300 hover:rotate-45" />
                    </Link>
                </div>
            </div>
            <Link to='/project' className='w-full py-4 rounded-lg mt-12 bg-black text-white text-[16px] font-semibold flex justify-center items-center gap-4'>View All Projects <GoArrowUpRight className="text-white text-2xl transition-transform duration-300 hover:rotate-45" /></Link>
        </div>
    )
}

export default Portfolio