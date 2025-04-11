"use client";

import React, { useEffect, useRef } from "react";

const About = () => {
    const textLines = useRef([]);

    useEffect(() => {
        // Dynamically import GSAP and ScrollTrigger only on the client side
        const loadGSAP = async () => {
            const { gsap } = await import("gsap");
            const { ScrollTrigger } = await import("gsap/ScrollTrigger");
            gsap.registerPlugin(ScrollTrigger);

            const context = gsap.context(() => {
                textLines.current.forEach((line, index) => {
                    if (line) {
                        gsap.fromTo(
                            line,
                            { color: "#FFFFFF08" }, // Initial color (accent)
                            {
                                color: "#FFFFFFFF", // Final color (neutral)
                                scrollTrigger: {
                                    trigger: line,
                                    start: "top 80%", // Trigger when the line is near the viewport
                                    end: "top 50%", // End when scrolled past half the viewport
                                    scrub: true, // Smooth color transition while scrolling
                                },
                                duration: 1,
                                delay: index * 0.2, // Stagger effect
                            }
                        );
                    }
                });
            });

            return () => context.revert(); // Clean up GSAP animations
        };

        loadGSAP();
    }, []);

    return (
        <div className="w-auto px-14 py-16 sm:px-20 sm:py-16 md:px-24 md:py-32 lg:px-40 lg:py-40 flex flex-col items-start sm:justify-center text-neutral">
            <h1 className="text-xl md:text-xl font-literata text-accent">
                ABOUT ME
            </h1>
            <div className="text-3xl text-neutral md:text-6xl lg:text-8xl  font-title font-semibold font-oswald leading-tight">
                {[
                    "I'M A PURPOSE-DRIVEN",
                    "UI/UX DESIGNER AND DEVELOPER,",
                    "SPECIALIZING IN CREATING EXCEPTIONAL,",
                    "USER-FOCUSED DIGITAL EXPERIENCES.",
                ].map((line, index) => (
                    <p
                        key={index}
                        ref={(el) => (textLines.current[index] = el)}
                        className="opacity-100 text-white translate-y-5 transition-transform duration-500"
                    >
                        {line}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default About;
