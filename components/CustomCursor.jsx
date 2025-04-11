"use client";

import { useEffect } from "react";
import gsap from "gsap";

const CustomCursor = () => {
    useEffect(() => {
        const cursor = document.getElementById("custom-cursor");
        const cursorText = document.getElementById("cursor-text");

        // Function to move the cursor
        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power3.out",
            });
            gsap.to(cursorText, {
                x: e.clientX,
                y: e.clientY - 50, // Position above the cursor
                duration: 0.1,
                ease: "power3.out",
            });
        };

        // Function to enlarge the cursor and show text
        const enlargeCursor = () => {
            gsap.to(cursor, {
                scale: 2,
                rotation: "-=90",
                duration: 0.2,
                ease: "power3.out",
            });
            gsap.to(cursorText, {
                opacity: 1, // Show the text
                duration: 0.2,
                ease: "power3.out",
            });
        };

        // Function to shrink the cursor and hide text
        const shrinkCursor = () => {
            gsap.to(cursor, {
                scale: 1,
                rotation: "90",
                duration: 0.2,
                ease: "power3.out",
            });
            gsap.to(cursorText, {
                opacity: 0, // Hide the text
                duration: 0.2,
                ease: "power3.out",
            });
        };

        // Add mousemove event listener
        document.addEventListener("mousemove", moveCursor);

        // Event delegation for hover effects
        const handleMouseOver = (e) => {
            const link = e.target.closest("a"); // Check if the target or its parent is an <a> tag
            if (link) {
                enlargeCursor();
            }
        };

        const handleMouseOut = (e) => {
            const link = e.target.closest("a"); // Check if the target or its parent is an <a> tag
            if (link) {
                shrinkCursor();
            }
        };

        document.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseout", handleMouseOut);

        // Cleanup event listeners
        return () => {
            document.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseout", handleMouseOut);
        };
    }, []);

    return (
        <>
            <div
                id="custom-cursor"
                className="fixed pointer-events-none rounded-full bg-neutral-80 z-[9999] md:flex hidden"
                style={{
                    transform: "translate(-50%, -50%)",
                    filter: "contrast(100%)",
                    width: "2.5rem",
                    height: "2.5rem",
                    backgroundColor: "white", // or black, depending on your design
                    mixBlendMode: "difference",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }}
            />
        </>
    );
};

export default CustomCursor;
