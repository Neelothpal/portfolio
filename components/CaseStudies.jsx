
import React from "react";
import CaseStudyCard from "./CaseStudyCard"; // Adjust path if needed
import image1 from "../public/case_study.png";
import image2 from "../public/case_study_2.png";
import image3 from "../public/case_study_3.png";

const caseStudies = [
    {
        title: "Delicieux",
        tags: ["PRODUCT DESIGN | CASE STUDY"],
        image: image1,
        link: "/DelicieuxCaseStudy",
        dates: [" DEC 2023 – FEB 2024"]
    },
    {
        title: "WeChat Redesign",
        tags: ["UX RESEARCH | CASE STUDY"],
        image: image2,
        link: "/WeChatCaseStudy",
        dates: ["NOV 2024 – JAN 2025"]
    },

];

const CaseStudies = () => {
    return (
        <div className="w-full z-50 bg-neutral bg-opacity-80 bg-blend-difference text-primary">
            <div className="w-full px-14 py-16 sm:px-20 sm:py-16 md:px-24 md:pt-32 lg:px-44 lg:pt-36 flex flex-col justify-start">
                <h1 className="text-md sm:text-lg md:text-xl font-literata text-accent">CASE STUDIES</h1>
                <div className="flex flex-col gap-8">
                    {caseStudies.map((study, index) => (
                        <CaseStudyCard
                            key={index}
                            title={study.title}
                            tags={study.tags}
                            dates={study.dates}
                            image={study.image}
                            link={study.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CaseStudies;
