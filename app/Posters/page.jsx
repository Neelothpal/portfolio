import React from "react";
import Image from "next/image";
import BackButton from "../../components/BackButton";

const Posters = () => {
    const images = [
        { src: "/Posters/1.png", alt: "Cancer Awareness Poster 1" },
        { src: "/Posters/6.png", alt: "Cancer Awareness Poster 2" },
        { src: "/Posters/3.png", alt: "Cancer Awareness Poster 3" },
        { src: "/Posters/4.png", alt: "Cancer Awareness Poster 4" },
        { src: "/Posters/7.png", alt: "Cancer Awareness Poster 5" },
        { src: "/Posters/2.png", alt: "Cancer Awareness Poster 6" },
        { src: "/Posters/5.png", alt: "Cancer Awareness Poster 7" },
    ];


    return (
        <div>
            <BackButton />
            <div className="px-16 py-20 w-full bg-primary bg-cover bg-no-repeat bg-[url('/grain.svg')] min-h-screen">
                <h1 className="text-xl w-full md:text-xl font-poppins text-accent">
                    MY DESIGNS
                </h1>
                <p className="text-neutral sm:text-2xl text-xl font-space pt-8 md:text-4xl pb-4">
                    Sreendihi Cancer Foundation <span className="text-neutral_light">(SCF)</span> is a Student run NGO based in SNIST. We work to create awareness about Cancer and AID those in need.
                </p>
                <div className="md:columns-[500px] lg:columns-[300px] w-full">
                    {images.map((image, index) => (
                        <div key={index} >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={500}
                                height={300}
                                layout="responsive"
                                className="rounded-lg py-4 shadow-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Posters;
