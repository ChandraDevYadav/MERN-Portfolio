import React from 'react'

const AboutHero = () => {
    return (
        <div className='p-24 bg-[#FFE9D9]'>
            <div className="grid grid-cols-2 gap-8">
                <div className='px-4 pb-6'>
                    <img src="./about2.png" alt="" className='object-fill' />
                </div>
                <div>
                    <div className='pr-16'>
                        <h5 className='text-[#ff710b] text-xl font-medium'>About me</h5>
                        <h1 className='text-7xl font-bold pt-4'>Chan Dra Yadav</h1>
                        <h4 className='text-2xl font-medium py-8'>MERN Stack Developer</h4>
                        <p className='text-xl font-medium pb-6'>A App & Web Designer and Developer, I am in the game for over 3+ years. I am proud of my works and ready to face the next challenge</p>
                        <p className='text-lg text-gray-600'>That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them .</p>
                        <img
                            src="./signature.png"
                            alt="Signature"
                            className="w-auto h-auto object-contain float-left mix-blend-darken relative right-16"
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutHero