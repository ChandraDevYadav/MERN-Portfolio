import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi"; // Importing icons from react-icons
import { GoArrowUpRight } from "react-icons/go";
import { FaDiscord, FaGithub, FaLinkedinIn, FaPinterest, FaTwitter } from 'react-icons/fa6';
import { HiMiniBars2 } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            {/* Navbar */}
            <nav className="text-white ml-16 flex justify-between items-center border-b border-black">
                {/* Logo */}
                <Link to='/' className="">
                    <img src="./logo2.png" alt="" className="w-32 h-20" />
                    {/* <h1 className="text-xl font-semibold text-black">KodeHustler</h1> */}
                </Link>

                <div className="flex justify-start items-center gap-4">
                    <Link to='/contact' className='flex justify-between items-center gap-2'>
                        <h1 className='text-[16px] font-semibold text-black'>Let's Talk</h1>
                        <FiArrowUpRight className="text-black text-2xl transition-transform duration-300 hover:rotate-45" />
                    </Link>
                    {/* Toggle Button */}
                    <button onClick={() => setIsSidebarOpen(true)} className="text-white bg-black py-7 px-8 focus:outline-none">
                        <HiMiniBars2 size={28} />
                    </button>
                </div>
            </nav>

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-96 bg-gray-800 z-50 text-white transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out shadow-lg`}
            >
                <div className="flex">
                    <img src="./logo2.png" alt="" className="w-20 h-24 absolute top-0 left-4 mt-2" />
                    {/* Close Button */}
                    <button onClick={() => setIsSidebarOpen(false)} className="absolute top-0 right-0 py-7 px-8 bg-[#ff964b] text-white">
                        <FiX size={28} />
                    </button>
                </div>

                {/* Sidebar Content */}
                <div className="mt-[5.2rem] border-t border-gray-400 ml-6 pt-12">
                    <ul className="space-y-4 pr-8">
                        <li className="flex justify-between items-center group font-medium border-b border-gray-600 pb-4"><Link to="/" className="block text-lg">Home</Link><GoArrowUpRight className="text-white text-2xl transition-transform duration-300 group-hover:rotate-45 group-hover:text-[#ff710b]" /></li>
                        <li className="flex justify-between items-center group font-medium border-b border-gray-600 pb-4"><Link to="/about" className="block text-lg">About</Link><GoArrowUpRight className="text-white text-2xl transition-transform duration-300 group-hover:rotate-45 group-hover:text-[#ff710b]" /></li>
                        <li className="flex justify-between items-center group font-medium border-b border-gray-600 pb-4"><Link to="/project" className="block text-lg">Project</Link><GoArrowUpRight className="text-white text-2xl transition-transform duration-300 group-hover:rotate-45 group-hover:text-[#ff710b]" /></li>
                        <li className="flex justify-between items-center group font-medium border-b border-gray-600 pb-4"><Link to="/project-detail" className="block text-lg">Project Details</Link><GoArrowUpRight className="text-white text-2xl transition-transform duration-300 group-hover:rotate-45 group-hover:text-[#ff710b]" /></li>
                        <li className="flex justify-between items-center group font-medium border-b border-gray-600 pb-4"><Link to="/blog" className="block text-lg">Blog</Link><GoArrowUpRight className="text-white text-2xl transition-transform duration-300 group-hover:rotate-45 group-hover:text-[#ff710b]" /></li>
                        <li className="flex justify-between items-center group font-medium border-b border-gray-600 pb-4"><Link to="/blog-detail" className="block text-lg">Blog Details</Link><GoArrowUpRight className="text-white text-2xl transition-transform duration-300 group-hover:rotate-45 group-hover:text-[#ff710b]" /></li>
                        <li className="flex justify-between items-center group font-medium border-b border-gray-600 pb-4"><Link to="/contact" className="block text-lg">Contact</Link><GoArrowUpRight className="text-white text-2xl transition-transform duration-300 group-hover:rotate-45 group-hover:text-[#ff710b]" /></li>
                    </ul>
                    <div className="flex justify-start items-center gap-4 mt-8 text-xl">
                        <FaGithub />
                        <FaLinkedinIn />
                        <FaDiscord />
                        <FaPinterest />
                        <FaTwitter />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
