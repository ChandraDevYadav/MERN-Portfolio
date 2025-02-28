import React from 'react'
import Layout from '../components/Layout/Layout'
import ProjectDetailCom from '../components/ProjectDetailCom'
import Portfolio from '../components/Portfolio'
import { GoArrowUpRight } from 'react-icons/go'
import Contact from '../components/Contact'

const ProjectDetail = () => {
    return (
        <Layout>
            <div>
                <ProjectDetailCom />
                <div className='px-24 pt-12 pb-24'>
                    <div className='text-center py-16'>
                        <p className='text-2xl font-medium text-[#ff710b]'>Portfolio</p>
                        <h1 className='text-7xl font-semibold'>My recent work</h1>
                    </div>
                    <div className="grid grid-cols-2 gap-6 px-12">
                        <div>
                            <img src="./pd2.png" alt="" className='w-full' />
                            <div className='flex justify-start items-center gap-4 mt-6'>
                                <button className='border border-black px-6 py-1 rounded-full'>APP</button>
                                <button className='border border-black px-6 py-1 rounded-full'>Website</button>
                            </div>
                            <div className='flex justify-between items-center pr-8 mt-6'>
                                <h1 className='text-3xl font-semibold'>Basinik Finance App</h1>
                                <GoArrowUpRight className="text-black text-3xl transition-transform duration-300 hover:rotate-45" />
                            </div>
                        </div>
                        <div>
                            <img src="./pd1.png" alt="" className='w-full' />
                            <div className='flex justify-start items-center gap-4 mt-6'>
                                <button className='border border-black px-6 py-1 rounded-full'>APP</button>
                                <button className='border border-black px-6 py-1 rounded-full'>Website</button>
                            </div>
                            <div className='flex justify-between items-center pr-8 mt-6'>
                                <h1 className='text-3xl font-semibold'>Oxilex Dashboard design</h1>
                                <GoArrowUpRight className="text-black text-3xl transition-transform duration-300 hover:rotate-45" />
                            </div>
                        </div>
                    </div>
                </div>
                <Contact />
            </div>
        </Layout>
    )
}

export default ProjectDetail