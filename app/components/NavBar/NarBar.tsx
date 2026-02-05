"use client";
import {useEffect, useState} from "react";
import NavBarCards from "@/app/components/NavBar/Cards/NavBarCards";
import BoxComponent from "@/app/components/BoxComponent";
import FillText from "@/app/components/Elements/FillText";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [titleAnimated, setTitleAnimated] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTitleAnimated(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div
                className={`fixed z-50 pointer-events-none transition-all duration-1000 w-full ease-in-out ${
                    titleAnimated 
                        ? 'top-6 left-1/2 -translate-x-1/2' 
                        : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                }`}
            >
                <div className="text-center mt-4">
                    <h1 className={`font-bold transition-all duration-1000 ${
                        titleAnimated ? 'text-3xl md:text-4xl' : 'text-6xl md:text-8xl'
                    }`}>
                        <FillText
                                text="Marcos Gomez Alvarez"
                                duration={1.5}
                                fillColor="text-[#DEF5FF]"
                                baseColor="text-gray-600"
                                chaos={1.6}
                            />
                    </h1>
                </div>


            </div>

            <div
                className={`flex justify-center items-start h-16 w-full fixed top-0 left-0 z-40 transition-opacity duration-1000 delay-500 ${
                    titleAnimated ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <BoxComponent style={`${isOpen ? 'h-70' : 'h-20'}`}>
                    <div>

                        <button
                            className="cursor-pointer hover:opacity-80 transition-opacity duration-300 -mt-2.25"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsOpen(!isOpen);
                            }}
                        >
                            <img
                                src="./equal.svg"
                                alt="Equal image"
                                width={70}
                                height={100}
                            />
                        </button>
                    </div>

                    <div className="mt-8 ml-10 text-[#9EB4CA]">
                        {/* Placeholder für Layout */}
                        <div>Developer · Innovator · Tech Enthusiast</div>
                    </div>

                    <div>
                        <button className="bg-[#0F171F] p-4 px-6 rounded-4xl cursor-pointer hover:bg-[#141E28] transition-colors duration-200">
                            Contact Me
                        </button>
                    </div>

                    {isOpen && (
                        <div className="absolute top-[25%] left-0 w-full rounded-b-4xl p-6 flex justify-start ml-10 gap-4">
                            <NavBarCards
                                title="About me"
                                links={[
                                    { label: "Me", href: "#portfolio" },
                                    { label: "Career", href: "https://github.com" },
                                ]}
                                delay={50}
                            />
                            <NavBarCards
                                title="Projects & Skills"
                                links={[
                                    { label: "Web Development", href: "#portfolio" },
                                    { label: "Software & Tools", href: "https://github.com" },
                                    { label: "Tech Stack", href: "#contact" },
                                ]}
                                delay={150}
                            />
                            <NavBarCards
                                title="Offers"
                                links={[
                                    { label: "Website", href: "https://github.com" },
                                    { label: "Clients", href: "#portfolio" },
                                    { label: "Others", href: "#portfolio" }
                                ]}
                                delay={250}
                            />
                        </div>
                    )}
                </BoxComponent>

                <BoxComponent w={"5%"} style="h-20 mt-0 absolute top-0 right-10 z-40">
                </BoxComponent>
            </div>
        </>
    );
}