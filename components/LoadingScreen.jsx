"use client";

import { useState, useEffect } from "react";
import Neel from '../public/neel_icon.svg'
import Image from "next/image";


const LoadingScreen = ({ onStartClick }) => {
    const [mounted, setMounted] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setMounted(true);

        const counterInterval = setInterval(() => {
            setCount((prevCount) => {
                const newCount = prevCount + 2;
                if (newCount >= 100) {
                    clearInterval(counterInterval);
                }
                return Math.min(newCount, 100);
            });
        }, 50);

        return () => clearInterval(counterInterval);
    }, []);

    useEffect(() => {
        if (count === 100) {
            onStartClick();
        }
    }, [count, onStartClick]);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 z-50 bg-neutral bg-cover bg-no-repeat bg-[url('/grain.svg')] min-h-screen flex items-center justify-center cursor-none">
            {/* Full-width loading bar at top */}
            <div className="fixed top-0 left-0 h-1 w-full bg-neutral-200 z-50">
                <div
                    className="h-full bg-accent transition-all duration-100 ease-in-out"
                    style={{ width: `${count}%` }}
                />
            </div>

            {/* Center content */}
            <div className="text-center flex flex-col items-center space-y-6 z-40">
                {/* Circle animation and count */}
                <div className="flex flex-col justify-center items-center">
                    <Image src={Neel} alt='logo' className='size-8 sm:size-10 md:size-10 lg:size-36 '></Image>

                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
