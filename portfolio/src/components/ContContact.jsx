import React, { useEffect, useState } from 'react'
import { FaArrowUp, FaDiscord, FaGithub, FaLinkedinIn, FaPinterest } from 'react-icons/fa6'
import { GoArrowUpRight } from 'react-icons/go'

const ContContact = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when scrolling down
    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 200);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div className='bg-black px-24 py-16'>
            <div className='grid grid-cols-3 gap-6'>
                <div className='text-white'>
                    <p className='text-7xl font-bold'>Le t’s work together</p>
                    <div className='flex justify-start items-center gap-6 text-white pt-8'>
                        <h1 className='text-xl font-semibold'>Based in Germany |</h1>
                        <div className='flex justify-start items-center text-xl gap-2'>
                            <FaGithub />
                            <FaLinkedinIn />
                            <FaDiscord />
                            <FaPinterest />
                        </div>
                    </div>
                </div>
                <div className='border border-white rounded-lg p-6 group text-white'>
                    <h1 className='text-2xl font-bold'>Looking for a hectic <br /> designer?</h1>
                    <div className='flex justify-between items-center mt-16'>
                        <h1 className='text-xl font-semibold text-[#ff710b]'>yadavchandradev4@gmail.com</h1>
                        <GoArrowUpRight className="text-white text-4xl transition-transform duration-300 group-hover:rotate-45 group-hover:text-[#ff710b]" />
                    </div>
                </div>
                <div className='border border-white rounded-lg p-6 group text-white'>
                    <h1 className='text-2xl font-bold'>Want a more in-depth <br /> look at my history?</h1>
                    <div className='flex justify-between items-center mt-16'>
                        <h1 className='text-xl font-semibold text-[#ff710b]'>+977-9805912060</h1>
                        <GoArrowUpRight className="text-white text-4xl transition-transform duration-300 group-hover:rotate-45 group-hover:text-[#ff710b]" />
                    </div>
                </div>
            </div>
            <h1 className='text-center pt-12 text-9xl font-bold text-orange-100 w-full tracking-wide'>Chan Dra Dev Yadav</h1>
            <div className='flex justify-center items-center mt-16 border-t border-white pt-6'>
                <p className='text-white font-medium text-lg'>©2023 Mark Henry, All Rights Reserved</p>
            </div>
        </div>
    )
}

export default ContContact