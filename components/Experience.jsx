import React from 'react'
import Link from 'next/link'

const Experience = () => {
    return (
        <div className='w-full flex flex-col items-center '>
            <div className='w-full px-14 py-16 sm:px-20 sm:py-16 md:px-24 md:py-32 lg:px-44 lg:py-40  flex flex-col '>
                <h1 className='text-md sm:text-lg md:text-xl font-poppins text-accent'>EXPERIENCE</h1>
                <div className='z-10'>

                    <div className='py-4'>
                        <p className='text-3xl sm:text-5xl md:text-7xl  font-oswald text-neutral_light font-bold py-2'>
                            DESIGN HEAD:
                        </p>
                        <p className='text-md sm:text-xl  text-neutral-80 md:text-2xl'>
                            SREENIDHI CANCER FOUNDATION
                        </p>
                    </div>
                    <Link href='/Posters' className="hover:text-accent transition-colors">
                        <p className='font-medium font-space text-neutral opacity-95 hover:opacity-100 text-xl sm:text-3xl md:text-4xl lg:text-6xl'>
                            Led the design strategy, creating impactful campaigns and digital content to enhance cancer awareness and effectively communicate the organization's mission.</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Experience