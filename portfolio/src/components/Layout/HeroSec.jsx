import React from 'react'
import RotatingTextButton from './RotatingTextButton'
import { MdArrowOutward } from "react-icons/md";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


const HeroSec = () => {
    return (
        <div className='px-32'>
            <div className='grid grid-cols-4 gap-4 py-24'>
                <div className='col-span-2'>
                    <div className='flex justify-start items-center gap-2'>
                        <div className='w-12 border-t-2 border-black'></div>
                        <h1 className='text-3xl font-semibold pl-3'>Hello, I’m</h1>
                        <img src="./victory.png" alt="" className='w-4 h-full object-fill' />
                    </div>
                    {/* <div className='w-24 h-24 rounded-full bg-orange-400 absolute top-32'></div> */}
                    <h1 className='text-8xl font-bold'>Chan Dra<br /> Dev Yadav</h1>

                    <div>
                        <h1 className='text-2xl font-medium text-gray-700'>MERN Stack Developer | Based in Nepal</h1>
                        <div className='flex justify-start items-center gap-4 mt-8'>
                            <div className="group w-fit">
                                <Link to='tel:+977-9805912060' className="bg-black text-white px-8 py-4 font-medium rounded-md flex justify-start items-center gap-2 group-hover:bg-transparent group-hover:border group-hover:border-black group-hover:text-black">
                                    Let's Talk
                                    <MdArrowOutward className="text-white text-xl group-hover:text-black transition-transform duration-300 group-hover:rotate-90" />
                                </Link>
                            </div>
                            <div className="group w-fit">
                                <Link to='/contact' className="text-black px-8 py-4 border border-black font-medium rounded-md flex justify-start items-center gap-2 group-hover:bg-black group-hover:border group-hover:border-black group-hover:text-white">
                                    My Work
                                    <MdArrowOutward className="text-black text-xl group-hover:text-white transition-transform duration-300 group-hover:rotate-90" />
                                </Link>
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-3 mt-20'>
                            <div className='pr-6'>
                                <h1 className='text-lg text-gray-700'><span className='text-3xl font-bold text-black'>1.2k+</span> Worldwide client</h1>
                            </div>
                            <div className='border-l border-black pl-12 text-xl flex justify-start items-center gap-4'>
                                <FaGithub />
                                <FaFacebookF />
                                <FaTwitter />
                                <FaLinkedinIn />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='col-span-2'>
                    <div className="relative">
                        <div className='rounded-lg'>
                            <img src="./1740720053392.jpg" alt="" className='w-full h-[500px] object-contain rounded-lg mix-blend-multiply' />
                        </div>
                        <div className='absolute right-[10%] bottom-5'>
                            <RotatingTextButton />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroSec