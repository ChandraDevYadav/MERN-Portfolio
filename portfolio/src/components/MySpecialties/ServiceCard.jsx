import React from 'react'
import { FaMobileAlt, FaPaintBrush, FaGlobe, FaCode, FaPalette, FaHandshake } from "react-icons/fa";
import { MdArrowUpward } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';


const ServiceCard = () => {
    const cardData = [
        { id: 1, title: "Mobile Apps", icon: <FaMobileAlt /> },
        { id: 2, title: "UI/UX Design", icon: <FaPaintBrush /> },
        { id: 3, title: "Website Design", icon: <FaGlobe /> },
        { id: 4, title: "Web Development", icon: <FaCode /> },
        { id: 5, title: "Brand Identity", icon: <FaPalette /> },
        { id: 6, title: "Interaction Design", icon: <FaHandshake /> }
    ];
    return (
        <div className='grid grid-cols-3 gap-4 mt-6'>
            <div className='col-span-2'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cardData.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-gray-100 px-6 py-10 rounded-lg shadow-md flex flex-col items-start justify-start transition-all duration-300 hover:bg-white hover:text-[#ff710b] cursor-pointer"
                        >
                            {/* Main Icon */}
                            <div className="text-4xl text-blue-500 mb-3 transition-all duration-300 group-hover:text-[#fb9043]">
                                {item.icon}
                            </div>
                            {/* Arrow with text */}
                            <Link to='/project' className="flex justify-between items-start gap-2 mt-3 text-gray-600 transition-all duration-300 group-hover:text-[#ff710b]">
                                <h3 className="text-lg font-semibold transition-all duration-300 group-hover:text-[#ff710b]">
                                    {item.title}
                                </h3>
                                <div className='flex justify-end items-end'>
                                    <MdArrowUpward className="text-2xl group-hover:text-{#fb9043}" />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative bg-black p-8 rounded-lg">
                {/* Arrow at the Top Right */}
                <div className="flex justify-end">
                    <GoArrowUpRight className="text-[#ff710b] text-7xl transition-transform duration-300 hover:rotate-45" />
                </div>

                {/* Text at the Bottom */}
                <div className="absolute bottom-8 left-8 text-white text-start">
                    <p className='text-lg text-[#ff710b]'>SAY HELLO!</p>
                    <Link to='mailto:yadavchandradev4@gmail.com' className='text-xl font-semibold'>yadavchandradev4@gmail.com</Link>
                </div>
            </div>

        </div>
    )
}

export default ServiceCard