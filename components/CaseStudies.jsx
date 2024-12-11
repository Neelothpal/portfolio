import React from 'react'
import Image from 'next/image'
import image from '../public/case_study.png'
import Link from 'next/link'

const CaseStudies = () => {
    return (

        <div className='w-full z-50  text-neutral'>
            <div className='w-full px-14 py-16 sm:px-20 sm:py-16 md:px-24 md:py-32 lg:px-44 lg:py-40 flex flex-col justify-start'>
                <h1 className='text-md sm:text-lg md:text-xl font-poppins text-accent'>CASE STUDIES</h1>
                <div>
                    <div className='py-4'>
                        <p className='text-2xl sm:text-2xl md:text-5xl 2xl:text-8xl text-neutral_light font-bold font-oswald pb-3'>
                            Delicieux
                        </p>
                        <div className='flex gap-2'>
                            <h1 className='w-28 sm:w-32 md:w-36 px-1 py-2 text-center rounded-sm md:rounded-md border-accent border-2 text-xs sm:text-xs md:text-sm text-neutral'>
                                PRODUCT DESIGN
                            </h1>
                            <h1 className='w-28 sm:w-32 md:w-36 px-1 py-2 text-center rounded-sm md:rounded-md border-accent border-2 text-xs sm:text-xs md:text-sm text-neutral'>
                                CASE STUDY
                            </h1>
                        </div>
                    </div>
                    <Link href='/CaseStudy' >
                        <div className=' rounded-lg border-accent-80 hover:border-neutral border-2 w-auto h-auto'>

                            <Image
                                src={image}
                                alt="Delicieux"
                                className="rounded-t-md rounded-lg z-40"
                                width={500}
                                height={300}
                                layout="responsive"
                            />

                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CaseStudies