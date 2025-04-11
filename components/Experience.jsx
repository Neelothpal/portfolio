import React from 'react'
import Link from 'next/link'

const Experience = () => {
    return (
        <div className='w-full flex flex-col items-center '>
            <div className='w-full px-14 py-16 sm:px-20 sm:py-16 md:px-24 md:py-32 lg:px-44 lg:pb-16 lg:pt-32  flex flex-col '>
                <h1 className='text-md sm:text-lg md:text-xl font-literata text-accent'>EXPERIENCE</h1>
                <div className='flex flex-col gap-10'>
                    <div className='z-10'>

                        <div className='py-4'>
                            <p className='text-3xl sm:text-5xl md:text-7xl  font-oswald text-neutral font-bold py-2'>
                                FREELANCING:
                            </p>
                            <p className='text-md sm:text-xl text-inter tracking-wide text-neutral-80 md:text-2xl'>
                                UPWORK
                            </p>
                        </div>
                        <Link href='/Posters' className="hover:text-accent transition-colors">
                            <p className="text-neutral-80 z-40 text-xl md:text-2xl lg:text-4xl font-space font-medium">
                                Designed <span className="italic font-serif">clean</span>, <span className="italic font-serif">functional</span> visuals based on client input, ensuring <span className="italic font-serif">clarity</span> and <span className="italic font-serif">usability</span> while delivering a smooth collaboration experience that resulted in a <span className="italic font-serif">5-star review</span>.
                            </p>


                        </Link>
                    </div>
                    <div className='z-10'>

                        <div className='py-4'>
                            <p className='text-3xl sm:text-5xl md:text-7xl  font-oswald text-neutral font-bold py-2'>
                                DESIGN HEAD:
                            </p>
                            <p className='text-md sm:text-xl text-inter tracking-wide text-neutral-80 md:text-2xl'>
                                SREENIDHI CANCER FOUNDATION
                            </p>
                        </div>
                        <Link href='/Posters' className="hover:text-accent transition-colors">
                            <p className='font-medium font-space text-neutral-80 opacity-95 hover:opacity-100 text-xl sm:text-xl md:text-2xl lg:text-4xl'>
                                Led the <span className="italic font-serif">design strategy</span>, creating <span className="italic font-serif">impactful campaigns</span> and <span className="italic font-serif">digital content</span> to enhance <span className="italic font-serif">cancer awareness</span> and effectively communicate the organization's mission.
                            </p>

                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience