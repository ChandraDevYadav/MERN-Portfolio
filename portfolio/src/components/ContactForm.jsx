import React from "react";
import { FaDiscord, FaEnvelope, FaGithub, FaLinkedinIn, FaLocationDot, FaPhone, FaPinterest, FaTwitter } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

const ContactForm = () => {
    return (
        <div className="container mx-auto px-24 py-6">
            <h2 className="text-4xl font-bold text-center mb-12"></h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-10 rounded-lg">
                {/* Left Side - Contact Info */}
                <div className="space-y-6">
                    <h3 className="text-xl text-[#ff832a] font-medium">Contact</h3>
                    <p className="text-6xl font-bold text-gray-800">Let’s <br /> Connect</p>

                    <div className="flex justify-start items-center gap-4 border-b pb-6 mr-16">
                        <div>
                            <FaEnvelope className="text-2xl" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold">Email us</h3>
                            <p className="text-lg text-gray-600">yadavchandradev4@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex justify-start items-center gap-4 border-b pb-6 mr-16">
                        <div>
                            <FaPhone className="text-2xl" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold">Call us</h3>
                            <p className="text-lg text-gray-600">+977-9805912060</p>
                        </div>
                    </div>
                    <div className="flex justify-start items-center gap-4 border-b pb-6 mr-16">
                        <div>
                            <FaLocationDot className="text-2xl" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold">Office address</h3>
                            <p className="text-lg text-gray-600">Hanumannagar-7 sapatri Nepal</p>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="" className="text-gray-500">Name*</label>
                                <input
                                    type="text"
                                    placeholder="Your Name*"
                                    className="w-full p-3 mt-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="" className="text-gray-500">Email*</label>
                                <input
                                    type="email"
                                    placeholder="Your Email*"
                                    className="w-full p-3 mt-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="" className="text-gray-500">Phone*</label>
                                <input
                                    type="tel"
                                    placeholder="Your Number"
                                    className="w-full p-3 mt-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="" className="text-gray-500">Subject*</label>
                                <input
                                    type="text"
                                    placeholder="Your Subject*"
                                    className="w-full p-3 mt-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="" className="text-gray-500">Message*</label>
                                <textarea
                                    rows="4"
                                    placeholder="Type your message"
                                    className="w-full p-3 mt-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                                ></textarea>
                            </div>
                        </div>
                        <button className="bg-black flex group justify-start items-center gap-2 text-white font-semibold py-4 px-6 rounded-lg hover:bg-white hover:text-black hover:border hover:border-black transition">
                            Submit <GoArrowUpRight className="text-white text-xl transition-transform duration-300 group-hover:rotate-45 group-hover:text-black" />
                        </button>
                    </form>
                    <div className="flex justify-start items-center gap-4 mt-20">
                        <div className="w-16 h-[2px] bg-gray-300"></div>
                        <div className="text-xl font-medium">Follow me</div>
                        <div className="flex justify-start items-center gap-3 text-xl">
                            <FaGithub className="hover:text-orange-500" />
                            <FaLinkedinIn className="hover:text-blue-500" />
                            <FaDiscord className="hover:text-pink-600" />
                            <FaTwitter className="hover:text-red-500" />
                            <FaPinterest className="hover:text-green-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
