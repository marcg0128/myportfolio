import BoxComponent from "@/app/components/BoxComponent";
import Image from "next/image";

export default function Me() {
    const techStack = [
        {
            cat: "Languages",
            list: [
                { name: "HTML", iconClass: "devicon-html5-plain" },
                { name: "CSS", iconClass: "devicon-css3-plain" },
                { name: "JavaScript", iconClass: "devicon-javascript-plain" },
                { name: "Python", iconClass: "devicon-python-plain" },
                { name: "Lua", iconClass: "devicon-lua-plain" },

            ]
        },
        {
            cat: "Frameworks & Libraries",
            list: [
                { name: "React", iconClass: "devicon-react-plain" },
                { name: "Next.js", iconClass: "devicon-nextjs-plain" },
                { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-plain" },
                { name: "FastAPI", iconClass: "devicon-fastapi-plain" }
            ]
        },
        {
            cat: "Tools & Databases",
            list: [
                { name: "MySQL", iconClass: "devicon-mysql-plain" },
                { name: "MongoDB", iconClass: "devicon-mongodb-plain" },
                { name: "Docker", iconClass: "devicon-docker-plain" },
                { name: "Git", iconClass: "devicon-git-plain" },
                { name: "JetBrains IDEs", iconClass: "devicon-jetbrains-plain" },
                { name: "Figma", iconClass: "devicon-figma-plain" }
            ]
        }


    ];

    const projects = [
        {
            name: "Project 1",
            description: "A web application that allows users to track their fitness goals and progress",
            techStack: ["Next.js", "Python", "MySQL"]
        }
    ];

    return (
        <div className="w-full min-h-screen px-8 md:px-80 mt-[15vh] sm:mt-[20vh] ">
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
            />
            <div className="grid h-auto grid-cols-1 md:grid-cols-2 auto-rows-auto gap-4 md:gap-7">
                <BoxComponent style="md:row-span-3 py-6 py-8 md:py-10 flex-col" center={false}>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl">Tech Stack</h1>
                    <div className="">
                        {techStack.map((item, j) => (
                            <div key={j}>
                                <h2 className={"text-2xl text-(--text)/70 mt-4"}>{item.cat}</h2>
                                <div className={"grid grid-cols-2 sm:grid-cols-3 md:auto-cols-auto gap-4 mt-2"}>
                                    {item.list.map((tech, i) => (
                                        //bg-[#0D151BFF]/60
                                        //bg-(--bg-light)
                                        <div key={j} className="flex flex-col items-center gap-3 p-2  bg-(--bg-light) outline outline-[#606060]/20 rounded-2xl">
                                            <i className={`${tech.iconClass} text-3xl mt-1`}></i>
                                            <span className="text-lg md:text-md">{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>


                        ))}
                    </div>

                </BoxComponent>

                <BoxComponent style="py-6 sm:py-8 md:py-10 flex-col h-auto" center={false}>
                    <h1 className="text-xl md:text-4xl mb-3">About</h1>
                    <p className="text-base md:text-xl leading-relaxed">
                        I&#39;m a 18-year-old full stack developer from Spain, now living in Germany.
                        <br/>
                        I started coding in 2020 with Python and have since worked on web and game development
                        projects, satisfying several clients.
                    </p>
                </BoxComponent>

                <BoxComponent style="py-8 md:py-10 min-h-[400px] row-span-2 flex-col" center={false}>
                    <h1 className="text-3xl md:text-4xl">Projects</h1>
                    <div className="mt-4 flex flex-col gap-6">
                        {projects.map((project, i) => (

                            <div className="rounded-4xl px-6 py-3 bg-(--bg)/40  outline-[#606060]
                                        transition-all duration-500  outline backdrop-blur-lg"
                            key={i}>
                                <h2 className="text-2xl">{project.name}</h2>
                                <p className="text-base md:text-lg mt-2">
                                    {project.description}
                                </p>
                                <div>
                                    {project.techStack.map((tech, j) => (
                                        <span key={j} className="inline-block bg-(--bg-light) text-(--text-muted) px-3 py-1 rounded-full text-sm mt-3 mr-2">
                                            {tech}
                                        </span>
                                    ))}

                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-5 bg-(--bg-light) outline-[#606060] outline  px-7 py-4 rounded-full w-max text-sm text-(--text-muted) cursor-pointer transition-colors duration-300 hover:bg-(--primary)/30">
                        See more <Image src={"/pfeil-oben-rechts.svg"} alt={"arrow icon"} width={12} height={12} className="inline-block ml-1"/>
                    </div>

                </BoxComponent>
            </div>
        </div>
    );
}