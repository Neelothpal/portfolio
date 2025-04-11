import React from 'react'
import Image from 'next/image'
import Neel from '../public/neel_icon.svg'
import Link from 'next/link'
import Dribbble from '../public/dribbble.svg'
import Github from '../public/github.svg'
import Linkedin from '../public/linkedin.svg'

const Navbar = () => {
    return (
        <div className='flex flex-col justify-between items-start md:w-auto w-full h-screen p-2 sm:p-5 text-neutral'>
            <div className='w-full flex justify-between'>
                <Link href="#hero" className="hover:text-accent transition-colors">
                    <Image src={Neel} alt='logo' className='size-8 sm:size-10 md:size-10 lg:size-12 '></Image>
                </Link>

                <div className='text-right sm:text-xs z-[600] text-[10px] md:text-sm font-inter tracking-wide font-medium'>
                    <ul>
                        <li>
                            <Link href="#about" className="hover:text-accent transition-colors">ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link href="#experience" className="hover:text-accent transition-colors">WORK
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact" className="hover:text-accent transition-colors">CONTACT
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col gap-4 xl:gap-6 ml-auto w-[2px] h-[65%] bg-neutral justify-center items-center'>

            </div>
            <div className='flex flex-col gap-4 xl:gap-6 w-full h-auto justify-end items-end'>
                <a href="https://dribbble.com/Neelothpal" target="_blank" rel="noopener noreferrer"><Image src={Dribbble} alt='dribbble' className='size-5 md:size-6' /></a>
                <a href="https://github.com/Neelothpal" target="_blank" rel="noopener noreferrer"><Image src={Github} alt='github' className='size-5 md:size-6' /></a>
                <a href="https://www.linkedin.com/in/neelothpal-samala/" target="_blank" rel="noopener noreferrer"><Image src={Linkedin} alt='linkedin' className='size-5 md:size-6' /></a>
            </div>
        </div>
    )
}

export default Navbar