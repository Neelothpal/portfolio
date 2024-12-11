"use client";


const CircleAnimation = ({ progress }) => {
    return (
        <div className=" w-80 h-8">
            <svg
                className="w-80 h-8" // Adjust width and height as needed
                viewBox="0 0 100 10" // Set the coordinate system for the line
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Background Line */}
                <line
                    x1="0"
                    y1="5"
                    x2="100"
                    y2="5"
                    stroke="currentColor"
                    strokeWidth="0"
                />

                {/* Animated Progress Line */}
                <line
                    x1="0"
                    y1="5"
                    x2="100"
                    y2="5"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-accent"
                    strokeDasharray="100" // Total length of the line
                    strokeDashoffset={100 - progress} // Progress-dependent offset
                />
            </svg>
        </div>
    );
};

export default CircleAnimation;
