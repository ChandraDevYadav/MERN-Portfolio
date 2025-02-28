import React from 'react'
import { FaDiscord, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaTelegram, FaTwitter } from 'react-icons/fa6'

const BlogDetailCom = () => {
    return (
        <div className='relative'>
            <div className="px-4 h-[570px] bg-[#FFE9D9] w-full absolute -z-20"></div>
            <section className='px-52 pt-16'>
                <h1 className='text-5xl font-semibold'>Designing the perfect feature <br /> comparison table</h1>
                <div className='flex justify-center pt-16'>

                    <img src="./banner1.png" alt="banner" className='w-full h-full object-fill' />
                </div>
                <div className='flex justify-start items-center gap-20 py-10 border-b'>
                    <div className='flex justify-start items-start gap-4'>
                        <img src="./user.png" alt="" className='object-cover w-14 h-14' />
                        <div>
                            <p className='text-[16px] font-medium text-gray-600'>Written By</p>
                            <h1 className='text-[16px] font-bold pt-1'>Chan Dra Dev</h1>
                        </div>
                    </div>
                    <div>
                        <p className='text-[16px] font-medium text-gray-600'>Category</p>
                        <h1 className='text-[16px] font-bold pt-1'>User Experience</h1>
                    </div>
                    <div>
                        <p className='text-[16px] font-medium text-gray-600'>Date</p>
                        <h1 className='text-[16px] font-bold pt-1'>02/08/2023</h1>
                    </div>
                </div>
                <div className='py-12'>
                    <h1 className='font-semibold text-3xl pb-6'>About the position</h1>
                    <p className='text-lg text-gray-500'>Everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable.
                        Podcasting operational — change management inside of workflows. Completely synergize.</p>
                    <p className='text-lg text-gray-500 py-12'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and
                        I will give you a complete account of the system, and expound the actual teachings of the great explorer of
                        the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself</p>
                    <p className='text-lg text-gray-500'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized
                        by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble
                        that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will,
                        which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy
                        to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our
                        being able to do what we like best, every pleasure is to be welcomed and every pain avoided.</p>
                    <div className='flex justify-start items-start gap-6 py-12'>
                        <div className='w-full'>
                            <img src="./post3.png" alt="" className='object-fill' />
                        </div>
                        <div className='w-full'>
                            <img src="./post4.png" alt="" className='object-fill' />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'>1. Learning the basics</h1>
                    <p className='text-lg text-gray-500 py-10'>Everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable.
                        Podcasting operational — change management inside of workflows. Completely synergize.</p>
                    <p className='text-lg text-gray-500'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will
                        give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,
                        the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself</p>
                </div>
                <div className='pt-10'>
                    <h1 className='text-2xl font-semibold'>2. Learning the basics</h1>
                    <p className='text-lg text-gray-500 py-10'>Everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable.
                        Podcasting operational — change management inside of workflows. Completely synergize.</p>
                    <p className='text-lg text-gray-500'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will
                        give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,
                        the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself</p>
                </div>
                <div className='flex justify-between items-center py-10'>
                    <div className='flex justify-start items-center gap-6'>
                        <p className='text-lg font-medium'>Share:</p>
                        <div className='text-xl flex justify-start items-center gap-6'>
                            <FaFacebookF className='hover:text-blue-700 text-blue-500' />
                            <FaLinkedinIn className='hover:text-red-700 text-red-500' />
                            <FaInstagram className='hover:text-cyan-700 text-cyan-500' />
                            <FaTwitter className='hover:text-pink-700 text-pink-500' />
                            <FaPinterest className='hover:text-green-700 text-green-500' />
                            <FaDiscord className='hover:text-yellow-700 text-yellow-500' />
                            <FaTelegram className='hover:text-violet-700 text-violet-500' />
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-4'>
                        <button className='px-4 py-2 text-sm font-medium border border-black rounded-full'>App Development</button>
                        <button className='px-4 py-2 text-sm font-medium border border-black rounded-full'>Web Development</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogDetailCom