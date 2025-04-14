import React from "react";
import design1 from "../public/design1.png";
import design2 from "../public/design2.png";
import design3 from "../public/design3.png";
import Image from "next/image";

const Designs = () => {
    return (
        <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center overflow-hidden px-4 pt-4 pb-8 md:pb-40 lg:py-40 mt-0">
            {/* Image container */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 w-full max-w-6xl">
                {/* Image 1 with link */}
                <div className="w-[80%] md:w-[28%] transform -translate-y-2 rotate-[-4deg] md:-translate-y-6 shadow-xl z-10">
                    <a href="https://dribbble.com/shots/25804632-Syntax-A-Futuristic-Metaverse-Event-Experience" target="_blank" rel="noopener noreferrer">
                        <Image src={design1} alt="Design 1" className="rounded-2xl w-full h-auto" />
                    </a>
                </div>

                {/* Image 2 with link */}
                <div className="w-[80%] md:w-[28%] transform translate-y-2 rotate-[3deg] md:translate-y-4 shadow-lg z-20">
                    <a href="https://dribbble.com/shots/25746258-Torque-Luxury-Car-Rental-Website" target="_blank" rel="noopener noreferrer">
                        <Image src={design2} alt="Design 2" className="rounded-2xl w-full h-auto" />
                    </a>
                </div>

                {/* Image 3 with link */}
                <div className="w-[80%] md:w-[28%] transform -translate-y-1 rotate-[-2deg] md:-translate-y-2 shadow-md z-30">
                    <a href="https://dribbble.com/shots/25602217-Zenith-Health-Wellness-Dashboard" target="_blank" rel="noopener noreferrer">
                        <Image src={design3} alt="Design 3" className="rounded-2xl w-full h-auto" />
                    </a>
                </div>
            </div>
            {/* Caption */}
            <div className="mt-16 text-center px-6">
                <p className="text-xl md:text-2xl lg:text-4xl font-bold tracking-tight text-neutral-60 max-w-7xl mx-auto leading-snug">
                    “A great <span className="text-neutral italic font-serif">user experience</span> isn’t just a luxury—it’s a
                    <span className="text-neutral italic font-serif"> competitive advantage</span>.”
                </p>
            </div>
        </section>
    );
};

export default Designs;
