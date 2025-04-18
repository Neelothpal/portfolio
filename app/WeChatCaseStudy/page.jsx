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
                        src="/banner_2.png"
                        alt="Delicieux"
                        className=" z-40"
                        width={500}
                        height={300}
                        layout="responsive"
                    />


                    <div className="columns-3 pt-12 pb-6 flex justify-around  border-b-2">
                        <div className="pr-2">
                            <h1 className="text-neutral font-oswald font-semibold texl-xl sm:text-2xl md:text-4xl ">
                                Role
                            </h1>
                            <p className="text-neutral-60 font-space text-base sm:text-lg md:text-xl">
                                UI/UX Designer
                            </p>
                        </div>
                        <div className="px-2">
                            <h1 className="text-neutral font-oswald font-semibold texl-xl sm:text-2xl md:text-4xl ">
                                Duration
                            </h1>
                            <p className="text-neutral-60 font-space text-base sm:text-lg md:text-xl">
                                12 weeks
                            </p>
                        </div>
                        <div className="pl-4">
                            <h1 className="text-neutral font-oswald font-semibold texl-xl sm:text-2xl md:text-4xl ">
                                Tools
                            </h1>
                            <p className="text-neutral-60 font-space text-base sm:text-lg md:text-xl">
                                Figma, Adobe XD
                            </p>
                        </div>

                    </div>
                    <div className="flex flex-col gap-20 pt-16 w-full">
                        <div className="flex flex-col md:flex-row flex-wrap">
                            <h1 className="font-oswald font-semibold text-5xl md:w-1/2 text-neutral">
                                Brief
                            </h1>
                            <p className="font-space text-lg md:w-1/2">
                                This WeChat redesign case study was created as part of a personal UX project to explore how a super-app like WeChat could be adapted for Western audiences. The goal was to simplify the user experience while retaining core features such as messaging, payments, and mini-programs.
                                <br />
                                <span className="font-space text-lg opacity-80 ">
                                    Throughout the project, I conducted user interviews, created personas, empathy maps, user journeys, and a proposed user flow. I focused on solving pain points around app overload, privacy concerns, and poor cross-platform usability to deliver a more intuitive and secure experience.
                                </span></p>
                        </div>
                        <div className="flex flex-col md:flex-row flex-wrap">
                            <h1 className="font-oswald font-semibold text-5xl md:w-1/2 text-neutral">
                                Learning and Growth
                            </h1>
                            <p className="font-space text-lg md:w-1/2 ">
                                This project taught me how culture deeply influences user behavior and expectations. I learned to recognize how Western users value simplicity, transparency, and control, and how to adapt complex product ecosystems to feel more familiar and accessible.

                                It strengthened my ability to conduct research-driven design, and reminded me that understanding context is just as important as solving usability issues.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row flex-wrap">
                            <h1 className="font-oswald font-semibold text-5xl md:w-1/2 text-neutral">
                                Takeaway
                            </h1>
                            <p className="font-space text-lg md:w-1/2">
                                Designing for a different cultural audience pushed me to think more broadly about user needs, habits, and values. I learned to balance functionality with simplicity, and to question how design patterns are shaped by culture. This experience improved my skills in UX research, problem framing, and designing with empathy.
                            </p>
                        </div>

                    </div>
                    <p className="md:text-2xl hidden sm:text-xl text-lg lg:pt-20 md:pt-16 pt-12 font-space" >
                        <span className="text-accent-80 hover:text-accent font-bold "><a href="https://www.figma.com/design/0eTj56js5gOSeqA1ITOYXa/Delicieux?node-id=493-650&t=bYyYDNjhtTZUKrLa-1" target="_blank" rel="noopener noreferrer">Click Here</a></span> to view the full case study and the design in Figma..
                    </p>
                </div>

            </div>
        </div >
    );
};

export default CaseStudy;
