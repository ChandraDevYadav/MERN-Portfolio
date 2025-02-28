import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { Link } from 'react-router-dom';

const Pricing = () => {

    const pricingPlans = [
        {
            name: "Basic",
            price: "$48/h",
            totalHours: "20 hrs",
            perWeek: "10 hours per week",
        },
        {
            name: "Premium",
            price: "$60/h",
            totalHours: "30 hrs",
            perWeek: "15 hours per week",
        },
        {
            name: "Platinum",
            price: "$60/h",
            totalHours: "20 hrs",
            perWeek: "80 hours per week",
        },
    ];

    return (
        <div className='px-24 py-16'>
            <div className='flex justify-between items-end'>
                <div>
                    <p className='text-xl text-[#ff710b] font-semibold'>Pricing</p>
                    <h1 className='text-6xl font-bold'>Stay chill and <br /> pick your plan</h1>
                </div>
                <div className='group'>
                    <Link to='/contact' className='flex justify-start bg-black text-white font-medium px-6 py-4 rounded-lg hover:border hover:border-black items-center gap-3 group-hover:text-black group-hover:bg-white'>Contact for Custom Project<GoArrowUpRight className="text-white text-xl transition-transform duration-300 hover:rotate-45 group-hover:text-black" /></Link>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 group pt-16">
                {pricingPlans.map((plan, index) => (
                    <div
                        key={index}
                        className="hover:bg-white bg-gray-200 px-6 py-6 rounded-lg transition-shadow duration-300"
                    >
                        <div className='flex justify-between items-center'>
                            <h2 className="text-lg text-gray-800">{plan.name}</h2>
                            <p className="text-xl font-bold text-orange-500 my-2">{plan.price}</p>
                        </div>
                        <div className='flex justify-between items-end pt-6'>
                            <div>
                                <p className="text-4xl text-gray-800 font-semibold">{plan.totalHours}</p>
                                <p className="text-lg text-gray-500">{plan.perWeek}</p>
                            </div>
                            <GoArrowUpRight className="text-black text-2xl transition-transform duration-300 group-hover:rotate-45 group-hover:text-[#ff710b]" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing