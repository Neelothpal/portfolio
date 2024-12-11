"use client";

import Image from "next/image";
import { useRouter } from "next/compat/router";
import { useState, useEffect } from "react";
import Polygon1 from "../public/polygon1.svg";
import Polygon2 from "../public/polygon2.svg";
import CircleAnimation from "./CircleAnimation"; // Import the CircleAnimation component

const LoadingScreen = ({ onStartClick }) => {
    const [mounted, setMounted] = useState(false); // Track if the component is mounted
    const [count, setCount] = useState(0); // Counter to count from 1 to 100
    const router = useRouter(); // Next.js router

    useEffect(() => {
        setMounted(true); // Ensure the component is only rendered on the client-side

        // Start counting from 1 to 100
        const counterInterval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount < 100) {
                    return prevCount + 2;
                } else {
                    clearInterval(counterInterval); // Stop the counter when it reaches 100
                    return 100;
                }
            });
        }, 50); // Increment the counter every 50ms

        // Cleanup the interval on component unmount
        return () => clearInterval(counterInterval);
    }, []);

    const handleStartClick = () => {
        onStartClick(); // Call the passed function from ClientLayout to stop loading and show the page
    };

    if (!mounted) return null; // Avoid SSR issues by waiting for mounting

    return (
        <div className="fixed inset-0 flex items-center cursor-none justify-center z-50 bg-primary bg-cover bg-no-repeat bg-[url('/grain.svg')] min-h-screen">
            <div className="text-center flex flex-col items-center space-y-6">

                {/* Polygon Animation */}

                <div className="flex flex-row justify-center items-center w-16">
                    <Image src={Polygon1} alt="bottom" className="relative polygon12 size-12" />
                    <Image src={Polygon2} alt="top" className="relative polygon23 size-12" />
                </div>

                <div className="flex flex-col justify-center items-center">
                    {/* Circle Animation */}
                    <CircleAnimation progress={count} />

                    {/* Loading Text */}
                    <h1 className="text-md text-neutral mb-4">
                        {count}%
                    </h1>
                </div>



                {/* Start button (hidden until count reaches 100) */}
                <button
                    onClick={handleStartClick}
                    className={`px-10 py-2 border-accent border-2 text-neutral_light rounded-full font-semibold hover:bg-accent_dark transition duration-300 ease-in-out ${count < 100 ? "invisible" : "visible"
                        }`}
                >
                    Start
                </button>
            </div>
        </div>
    );
};

export default LoadingScreen;
