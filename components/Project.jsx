import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Project = ({ image, title, description, technologies, link }) => {
    return (
        <div className='flex flex-col justify-start items-start border-2 border-neutral text-primary rounded-lg z-40  pb-6 lg:w-[49%] 2xl:w-[40%] md:h-auto bg-neutral-80'>
            <Link href={link} target="_blank" rel="noopener noreferrer">
                <Image
                    src={image}
                    alt={title}
                    className="rounded-t-md mb-4 w-full h-[300px]"
                    width={500}
                    height={300}
                    layout="responsive"
                />
                <div className='md:px-8 md:py-4 2xl:px-6 2xl:py-2 px-4 py-2'>
                    <h1 className='md:text-3xl   font-bold pb-2'>{title}</h1>
                    <p className='md:text-xl text-xs sm:text-base  pb-4 opacity-70'>{description}</p>
                    <p className='md:text-base sm:text-base text-xs'>{technologies}</p>
                </div>
            </Link>
        </div>
    )
}

export default Project