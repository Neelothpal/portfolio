import React from "react";
import Image from "next/image";
import Link from "next/link";

const CaseStudyCard = ({ title, tags, image, link, dates }) => {
    return (
        <div>
            <p className="text-2xl mt-4 sm:text-2xl md:text-4xl 2xl:text-5xl text-primary font-bold font-inter pb-1 md:pb-3">
                {title}
            </p>
            <div className="flex flex-col md:flex-row md:justify-between">
                <div className="flex gap-2">
                    {tags.map((tag, idx) => (
                        <h1
                            key={idx}
                            className=" text-xs sm:text-xs md:text-sm text-primary"
                        >
                            {tag}
                        </h1>
                    ))}
                </div><div className="flex gap-2">
                    {dates.map((date, idx) => (
                        <h1
                            key={idx}
                            className=" text-xs sm:text-xs md:text-sm text-primary"
                        >
                            {date}
                        </h1>
                    ))}
                </div>
            </div>
            <Link href={link}>
                <div className=" mt-4">
                    <Image
                        src={image}
                        alt={title}
                        className=" z-40"
                        width={500}
                        height={300}
                        layout="responsive"
                    />
                </div>
            </Link>

        </div>
    );
};

export default CaseStudyCard;
