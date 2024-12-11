
import Project from './Project'
import HashGuard from '@public/hashguard.png'
import StudySquard from '@public/studysquad.png'

const Projects = () => {

    const projectData = [
        {
            image: HashGuard,
            title: "Hash Guard",
            description: "A secure cryptography tool to learn and implement cryptographic algorithms.",
            technologies: ["C ", "Docker ", "MbedTLS "],
            link: "https://github.com/Neelothpal/Intel_Unnati-2024"
        },
        {
            image: StudySquard,
            title: "Study Squad",
            description: "A collaborative platform for students to study together and summarize youtube videos.",
            technologies: ["Javascript ", "Firebase ", "Python ", "Flask "],
            link: "https://devpost.com/software/study-squad-k37rba"
        },
    ];

    return (
        <div className='w-full flex items-center justify-center'>
            <div className='w-full px-14 py-16 sm:px-20 sm:py-16 md:px-24 md:py-32 lg:px-44 lg:py-40 flex flex-col justify-center'>
                <h1 className='text-md sm:text-lg md:text-xl  pb-4 md:pb-8 font-poppins text-accent'>FEATURED PROJECTS</h1>
                <div className='flex flex-row flex-wrap justify-between gap-6 md:gap-2 lg:gap-2 xl:gap-4 xl:justify-start pt-4'>
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