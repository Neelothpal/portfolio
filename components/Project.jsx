import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Project = ({ image, title, description, technologies, link }) => {
    return (
        <div className='flex flex-col justify-start items-start text-primary  z-30  pb-6 lg:w-[49%] 2xl:w-[40%] md:h-auto bg-neutral-80'>
            <Link href={link} target="_blank" rel="noopener noreferrer">
                <Image
                    src={image}
                    alt={title}
                    className="w-[300px] -z-20"
                    width={500}
                    height={300}
                    layout="responsive"
                />
                <div className='md:px-8 md:py-4 2xl:px-6 2xl:py-2 px-4 py-2'>
                    <h1 className='md:text-3xl font-inter tracking-wide font-bold pb-2'>{title}</h1>
                    <p className='md:text-lg text-xs sm:text-base text-inter tracking-wide pb-4 opacity-70'>{description}</p>
                    <p className='md:text-base sm:text-base text-inter tracking-wide text-xs'>{technologies}</p>
                </div>
            </Link>
        </div>
    )
}

export default Project