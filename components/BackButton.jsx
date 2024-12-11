"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
    const router = useRouter();

    const handleBack = () => {
        router.back(); // Navigates to the previous page
    };

    return (
        <button
            onClick={handleBack}
            className="absolute top-4 left-4 bg-accent-60 text-neutral_light border-2 border-accent px-4 py-2 rounded-full shadow-md hover:bg-neutral_light hover:text-primary transition-all"
        >
            Back
        </button>
    );
};

export default BackButton;
