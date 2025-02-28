import React from 'react'
import { FaDiscord, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaTelegram, FaTwitter } from 'react-icons/fa6'
import { GoDotFill } from 'react-icons/go'

const ProjectDetailCom = () => {
    return (
        <div className='relative'>
            <div className="px-4 h-[570px] bg-[#FFE9D9] w-full absolute -z-20"></div>
            <section className='px-52 pt-16'>
                <div className='flex justify-start items-start gap-36'>
                    <div>
                        <ul className='flex justify-start items-center gap-4'>
                            <li className='flex justify-start items-center gap-2 text-[16px] font-medium'><GoDotFill />UI Design</li>
                            <li className='flex justify-start items-center gap-2 text-[16px] font-medium text-[#ff710b]'><GoDotFill />03 May 2019</li>
                        </ul>
                        <h1 className='text-5xl font-semibold py-4'>Mendero fintech <br /> dashboard design</h1>
                    </div>
                    <div>
                        <div className='flex justify-center items-center gap-16'>
                            <div>
                                <p className='text-[15px] font-medium text-gray-500'>Client</p>
                                <h1 className='text-[16px] font-semibold'>Mashorom</h1>
                            </div>
                            <div>
                                <p className='text-[15px] font-medium text-gray-500'>Category</p>
                                <h1 className='text-[16px] font-semibold'>User Experience</h1>
                            </div>
                            <div>
                                <p className='text-[15px] font-medium text-gray-500'>Tools</p>
                                <h1 className='text-[16px] font-semibold'>Figma, Webflow</h1>
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-6 pt-8'>
                            <div>
                                <p className='text-[15px] font-medium text-gray-500'>Start date</p>
                                <h1 className='text-[16px] font-semibold'>09/01/ 2020</h1>
                            </div>
                            <div>
                                <p className='text-[15px] font-medium text-gray-500'>End date</p>
                                <h1 className='text-[16px] font-semibold'>09/01/ 2020</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center pt-12'>

                    <img src="./banner.png" alt="banner" className='w-full h-full object-fill' />
                </div>
                <div className='pt-12'>
                    <h1 className='font-semibold text-4xl pb-6'>Overview</h1>
                    <p className='text-lg text-gray-500'>Minimalism combined with elements of french typography and brutalism helped us to
                        realize the site exactly as we imagined with the client at the beginning: visually restrained, but stylish. Informative
                        and pleasant to use, with an elegant aftertaste of a serious financial institution. Combined with elements of french
                        typography and visually restrained, but stylish. Informative and pleasant to use, with an elegant aftertaste of
                        a serious financial institutional client, and close collaboration.</p>
                    <p className='text-lg text-gray-500 py-12'>That is where I come in. A lover of words, a wrangler of copy. Here to create copy
                        that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your
                        audience in and making them want more.</p>
                    <ul className='text-xl font-semibold ml-8 list-disc'>
                        <li>Advantage</li>
                        <li>Accomplished</li>
                        <li>Marketplace startups</li>
                        <li>SaaS startups</li>
                    </ul>
                    <h1 className='font-semibold text-4xl pb-6 pt-14'>Typography</h1>
                    <p className='text-lg text-gray-500'>The basic idea was to find a balance between the thin, wispy sans-serif used
                        to indicate a ‘futuristic‘ tone, and a bold, masculine font synonymous with ‘construction‘. We came up with something
                        in the middle, leaning towards lighter-weighted fonts, but still with a hint of that blocky ‘construction’ vibe.
                        We use Chaney for general display and when we want to drive attention to the content, and the technical and geometric
                        Sora font for the body copy and paste overall hierachy.</p>
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
                    <h1 className='font-semibold text-4xl pb-6'>Conclusion</h1>
                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                            <p className='text-lg text-gray-500 pr-6'>The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a ‘futuristic‘ tone, and
                                a bold, masculine font synonymous with ‘construction‘. We came up with something in the middle, leaning towards
                                lighter-weighted fonts, but still with a hint of that blocky ‘construction’ vibe. We use Chaney for general display
                                and when we want to drive attention to the content, and the technical and geometric Sora font for the body copy
                                and paste overall hierachy.</p>
                        </div>
                        <div>
                            <p className='text-lg text-gray-500 pr-6'>The basic idea was to find a balance between the thin, wispy sans-serif used to indicate a ‘futuristic‘ tone, and a
                                bold, masculine font synonymous with ‘construction‘. We came up with something in the middle, leaning towards
                                lighter-weighted fonts, but still with a hint of that blocky ‘construction’ vibe.</p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default ProjectDetailCom