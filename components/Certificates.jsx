import React from 'react';

const Certificates = () => {
    return (
        <div className="w-full text-neutral">
            <div className="w-full px-14 py-16 sm:px-20 sm:py-16 md:px-24 md:py-32 lg:px-40 lg:py-40 flex flex-col justify-start">
                <h1 className="text-md sm:text-lg md:text-xl font-poppins text-accent">
                    CERTIFICATES
                </h1>
                <div className="lg:py-4 z-40 py-0">
                    <div className="text-lg sm:text-xl  md:text-4xl  lg:text-5xl font-bold py-2 font-oswald">
                        Google UX Design Certificate -{' '}
                        <a
                            href="https://coursera.org/share/fb7a251f339ca2088572e21b47938274"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm sm:text-lg md:text-xl text-neutral_light font-normal font-space lg:text-3xl  "
                        >
                            Coursera
                        </a>
                    </div>
                </div>
                <div className="lg:py-4 z-40 py-0">
                    <p className="text-lg sm:text-xl md:text-4xl lg:text-5xl font-bold font-oswald py-2">
                        Responsive Web Design -{' '}
                        <a
                            href="https://freecodecamp.org/certification/fcc2a6bc83f-9707-4627-8372-06159dded74a/responsive-web-design"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm sm:text-lg md:text-xl text-neutral_light font-normal font-space lg:text-3xl  "
                        >
                            FreeCodeCamp
                        </a>
                    </p>
                </div>
                <div className="lg:py-4 z-40 py-0">
                    <p className="text-lg sm:text-xl md:text-4xl lg:text-5xl font-bold py-2 font-oswald">
                        JavaScript Algorithms and Data Structures -{' '}
                        <a
                            href="https://freecodecamp.org/certification/fcc2a6bc83f-9707-4627-8372-06159dded74a/javascript-algorithms-and-data-structures-v8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm sm:text-lg md:text-xl text-neutral_light font-normal font-space lg:text-3xl  "
                        >
                            FreeCodeCamp
                        </a>
                    </p>
                </div>
                <div className="lg:py-4 z-40 py-0">
                    <p className="text-lg sm:text-xl md:text-4xl lg:text-5xl font-bold py-2 font-oswald">
                        UX Fundamentals -{' '}
                        <a
                            href="https://www.credential.net/2e7a54f5-674f-47d4-80bc-3cdcb5183f26"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm sm:text-lg md:text-xl text-neutral_light font-normal font-space lg:text-3xl  "
                        >
                            Gymnasium
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Certificates;
