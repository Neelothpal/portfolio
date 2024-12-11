import React from 'react'

const Contact = () => {
    return (
        <div className='w-full h-64 bg-neutral'>
            <div className='w-full px-14 py-16 sm:px-20 sm:py-16 md:px-20 md:py-28 lg:px-40 lg:py-32 flex flex-col justify-evenly gap-4 text-primary bg-neutral'>
                <h1 className='sm:text-lg md:text-xl font-poppins '>CONNECT</h1>
                <div className='flex lg:flex-row flex-col md:gap-12 gap-6 justify-between'>
                    <div className='flex flex-col md:flex-row md:gap-24 z-40'>
                        <div className='flex justify-evenly flex-col md:gap-6 text-3xl md:text-5xl  font-oswald font-semibold'>
                            <p><a href="https://dribbble.com/Neelothpal" target="_blank" rel="noopener noreferrer">Dribble</a></p>
                            <p><a href="https://www.linkedin.com/in/neelothpal-samala/" target="_blank" rel="noopener noreferrer">Linkedin</a></p>
                        </div>
                        <div className='flex justify-between md:gap-6 flex-col text-3xl md:text-5xl   font-oswald font-semibold'>

                            <p><a href="https://www.behance.net/superatom" target="_blank" rel="noopener noreferrer">Behance</a></p>
                            <p><a href="https://github.com/Neelothpal" target="_blank" rel="noopener noreferrer">Github</a></p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-around'>
                        <div className='z-40'>
                            <p className='md:text-lg text-sm font-medium '>
                                Email
                            </p>
                            <p className='text-md  opacity-60'>
                                <a href="mailto:neelothpal.12@gmail.com">neelothpal.12@gmail.com</a>
                            </p>
                        </div>
                        <div className='z-40'>
                            <p className='md:text-lg  text-sm font-medium'>
                                Phone
                            </p>
                            <p className='text-md  opacity-60'>
                                <a href="tel:+917780566080">+91 7780566080</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact