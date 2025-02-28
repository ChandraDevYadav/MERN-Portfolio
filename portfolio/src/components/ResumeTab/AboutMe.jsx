import React from 'react'

const AboutMe = () => {
    return (
        <div className='grid grid-cols-2 justify-start items-center gap-6'>
            <div className='p-12'>
                <img src="./1740719608736.jpg" alt="" className='object-cover h-[400px] w-full' />
            </div>
            <div className=''>
                <div>
                    <p className='text-2xl font-medium'>Based in Nepal</p>
                    <div>
                        <p className='text-lg text-gray-600 py-6'>Chan Dra Dev, MERN Stack Developer, based in Nepal. That is where I come in. A lover of words, a wrangler of copy.
                            Here to create copy that not only reflects who you are and what you stand for.</p>
                        <p className='text-lg text-gray-600 pb-6'> but words that truly land with those that read them, calling your audience in and making them want more</p>
                    </div>
                    <table className="w-full text-left">
                        <tbody>
                            <tr className="">
                                <td className="px-4 py-2 text-gray-600">Name</td>
                                <td className="px-4 py-2 text-2xl font-semibold">Chan Dra Dev</td>
                            </tr>
                            <tr className="">
                                <td className="px-4 py-2 text-gray-600">Nationality</td>
                                <td className="px-4 py-2 text-2xl font-semibold">Nepal</td>
                            </tr>
                            <tr className="">
                                <td className="px-4 py-2 text-gray-600">Phone</td>
                                <td className="px-4 py-2 text-2xl font-semibold">+(977) 9805912060</td>
                            </tr>
                            <tr className="">
                                <td className="px-4 py-2 text-gray-600">Email</td>
                                <td className="px-4 py-2 text-2xl font-semibold">yadavchandradev4@gmail.com</td>
                            </tr>
                            <tr className="">
                                <td className="px-4 py-2 text-gray-600">Experience</td>
                                <td className="px-4 py-2 text-2xl font-semibold">3+ years</td>
                            </tr>
                            <tr className="">
                                <td className="px-4 py-2 text-gray-600">Freelance</td>
                                <td className="px-4 py-2 text-2xl font-semibold">Available</td>
                            </tr>
                            <tr className="">
                                <td className="px-4 py-2 text-gray-600">LinkedIn</td>
                                <td className="px-4 py-2 text-2xl font-semibold">Chandra Dev Yadav</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 text-gray-600">Languages</td>
                                <td className="px-4 py-2 text-2xl font-semibold">Nepali, English, Hindi</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default AboutMe