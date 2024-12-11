import React from 'react'

const Education = () => {
    return (
        <div className='w-full text-neutral'>
            <div className='w-full px-14 py-16 sm:px-20 sm:py-16 md:px-24 md:py-32 lg:px-44 lg:py-40 flex flex-col justify-start'>
                <h1 className='text-md sm:text-lg md:text-xl font-poppins text-accent'>EDUCATION</h1>
                <div>
                    <div className='py-4'>
                        <p className='text-3xl sm:text-5xl md:text-7xl text-neutral_light font-oswald font-bold py-2'>
                            B.TECH
                        </p>
                        <p className='text-lg sm:text-xl md:text-2xl '>
                            SNIST
                        </p>
                    </div>
                    <p className='z-40 text-xl md:text-4xl lg:text-6xl font-space font-medium'>
                        Pursuing expertise in AI, software development, and user-centric design while building innovative projects combining technology and creativity.</p>
                </div>
            </div>
        </div>
    )
}

export default Education