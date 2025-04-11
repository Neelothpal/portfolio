
import Project from './Project'

const Projects = () => {

    const projectData = [
        {
            image: "/HashGuard.png",
            title: "Hash Guard",
            description: "A secure cryptography tool to learn and implement cryptographic algorithms.",
            technologies: ["C ", "Docker ", "MbedTLS "],
            link: "https://github.com/Neelothpal/Intel_Unnati-2024"
        },
        {
            image: "/StudySquad.png",
            title: "Study Squad",
            description: "A platform for students to collaborate and summarize YouTube videos.",
            technologies: ["Javascript ", "Firebase ", "Python ", "Flask "],
            link: "https://devpost.com/software/study-squad-k37rba"
        },

    ];

    return (
        <div className='w-full bg-neutral bg-opacity-80 flex items-center justify-center'>
            <div className='w-full px-14 py-16 sm:px-20 sm:py-16 md:px-24 md:py-16 lg:px-44 lg:py-24 flex flex-col justify-center'>
                <h1 className='text-md sm:text-lg md:text-xl  pb-4 md:pb-8 font-literata text-accent'>FEATURED PROJECTS</h1>
                <div className='flex flex-col lg:flex-row justify-start gap-6 md:gap-2 lg:gap-2 xl:gap-4 xl:justify-start pt-4'>
                    {projectData.map((project, index) => (
                        <Project
                            key={index}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects