import React from 'react'

const Education = () => {
    return (
        <div className='w-full'>
            <div className='w-full px-14 py-16 sm:px-20 sm:py-16 md:px-24 md:py-16 lg:px-44 lg:py-24
             flex flex-col justify-start'>
                <h1 className='text-md sm:text-lg md:text-xl font-literata text-accent'>EDUCATION</h1>
                <div>
                    <div className='py-4'>
                        <p className='text-3xl sm:text-5xl md:text-7xl text-neutral font-oswald font-bold py-2'>
                            B.TECH
                        </p>
                        <p className='text-lg text-neutral-60 sm:text-xl md:text-2xl text-inter tracking-wide'>
                            SNIST
                        </p>
                    </div>
                    <p className="text-neutral-80 z-40 text-xl md:text-2xl lg:text-4xl font-space font-medium">
                        Pursuing expertise in <span className="italic font-serif">AI</span>, <span className="italic font-serif">software development</span>, and <span className="italic font-serif">user-centric design</span> while building innovative projects and designs that combining technology and creativity.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Education