

const Hero = () => {
    return (

        <div className="w-full h-screen">
            <div className='flex flex-col justify-center p-2 items-center h-full'>
                <h1 className='  font-bold text-neutral md:text-5xl text-4xl lg:text-6xl  text-center'>NEELOTHPAL SAMALA</h1>
                <p className=' mt-4   text-neutral opacity-80 md:text-3xl lg:text-4xl font-mono text-center'>Design and Develop</p>
                <a href="./resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-accent rounded-md z-40 px-6 py-3 text-xl mt-8 text-primary hover:bg-accent_dark hover:text-neutral">Resume</a>
            </div>
        </div >
    )
}

export default Hero