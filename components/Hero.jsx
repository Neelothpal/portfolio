

const Hero = () => {
    return (

        <div className="w-full h-screen">
            <div className='flex flex-col justify-center p-2 items-center h-full'>
                <h1 className=' font-literata font-black text-neutral md:text-5xl text-4xl lg:text-8xl  text-center'>NEELOTHPAL  SAMALA</h1>
                <p className=' mt-0 md:mt-2 text-neutral-60 md:text-3xl lg:text-3xl font-inter tracking-wider text-center'>Better UX. Smoother Journeys.</p>
                <div className="mt-8 md:mt-12">
                    <a href="./resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-accent  z-40 px-4 py-2 md:px-6 md:py-3 text-base md:text-xl border-2 border-accent text-primary hover:bg-accent_dark hover:text-neutral">RESUME</a>
                </div>
            </div>
        </div >
    )
}

export default Hero