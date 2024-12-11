"use client";

import Image from "next/image";
import BackButton from "../../components/BackButton";

const CaseStudy = () => {


    return (
        <div>
            <BackButton />
            <div className="w-auto px-14 py-24 sm:px-20  md:px-24 lg:px-40 flex flex-col items-center  justify-start bg-primary bg-cover bg-no-repeat bg-[url('/grain.svg')] min-h-screen text-neutral">

                <div className=' flex flex-col w-auto h-auto '>

                    <Image
                        src="/banner.png"
                        alt="Delicieux"
                        className=" z-40"
                        width={500}
                        height={300}
                        layout="responsive"
                    />


                    <div className="columns-3 pt-12 pb-6 flex justify-around  border-b-2">
                        <div className="pr-2">
                            <h1 className="text-neutral_light font-oswald font-semibold texl-xl sm:text-2xl md:text-4xl ">
                                Role
                            </h1>
                            <p className="text-neutral font-space text-base sm:text-lg md:text-xl">
                                Product Designer
                            </p>
                        </div>
                        <div className="px-2">
                            <h1 className="text-neutral_light font-oswald font-semibold texl-xl sm:text-2xl md:text-4xl ">
                                Duration
                            </h1>
                            <p className="text-neutral font-space text-base sm:text-lg md:text-xl">
                                12 weeks
                            </p>
                        </div>
                        <div className="pl-4">
                            <h1 className="text-neutral_light font-oswald font-semibold texl-xl sm:text-2xl md:text-4xl ">
                                Tools
                            </h1>
                            <p className="text-neutral font-space text-base sm:text-lg md:text-xl">
                                Figma, Adobe XD
                            </p>
                        </div>

                    </div>
                    <div className="flex flex-col gap-20 pt-16 w-full">
                        <div className="flex flex-col md:flex-row flex-wrap">
                            <h1 className="font-oswald font-semibold text-5xl md:w-1/2 text-neutral_light">
                                Brief
                            </h1>
                            <p className="font-space text-lg md:w-1/2">
                                Delicieux is the first case study I worked on as part of the Google UX Design Certificate, where I designed an app for a French patisserie to create a seamless, visually appealing user experience.
                                <br />
                                <span className="font-space text-lg opacity-80 ">
                                    For this project, I conducted user research, crafted personas, and iterated on feedback to refine the design. The app features a homepage for featured pastries, a categorized menu, an easy ordering process, and a profile section for past orders. It was an excellent opportunity for me to sharpen my skills in UX research, wireframing, and usability testing.
                                </span></p>
                        </div>
                        <div className="flex flex-col md:flex-row flex-wrap">
                            <h1 className="font-oswald font-semibold text-5xl md:w-1/2 text-neutral_light">
                                Learning and Growth
                            </h1>
                            <p className="font-space text-lg md:w-1/2 ">
                                Working on Delicieux helped me grow as a designer by reinforcing the importance of user research, iteration, and attention to detail. It taught me how to create user-centered designs that balance functionality and aesthetics while building confidence in tackling complex design challenges.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row flex-wrap">
                            <h1 className="font-oswald font-semibold text-5xl md:w-1/2 text-neutral_light">
                                Takeaway
                            </h1>
                            <p className="font-space text-lg md:w-1/2">
                                I learned the importance of understanding user needs through research, the value of iteration in refining designs, and how small details can enhance usability and aesthetics. It also strengthened my ability to create user-centered solutions and tackle design challenges with confidence.
                            </p>
                        </div>

                    </div>
                    <p className="md:text-2xl sm:text-xl text-lg lg:pt-20 md:pt-16 pt-12 font-space" >
                        <span className="text-accent-80 hover:text-accent font-bold "><a href="https://www.figma.com/design/0eTj56js5gOSeqA1ITOYXa/Delicieux?node-id=493-650&t=bYyYDNjhtTZUKrLa-1" target="_blank" rel="noopener noreferrer">Click Here</a></span> to view the full case study and the design in Figma..
                    </p>
                </div>
            </div>
        </div >
    );
};

export default CaseStudy;
