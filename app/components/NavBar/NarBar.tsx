"use client";
import {useEffect, useState} from "react";
import NavBarCards from "@/app/components/NavBar/Cards/NavBarCards";
import BoxComponent from "@/app/components/BoxComponent";
import FillText from "@/app/components/Elements/FillText";
import Image from "next/image";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [titleAnimated, setTitleAnimated] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTitleAnimated(true);
        }, 1200);

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
                                duration={0.7}
                                fillColor="text-[#DEF5FF]"
                                baseColor="text-gray-600"
                                chaos={1.6}
                            />
                    </h1>
                </div>


            </div>

            <div
                className={`flex justify-center items-start h-16 w-full fixed top-0 left-0 z-40  transition-opacity duration-1000 delay-500 ${
                    titleAnimated ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <BoxComponent style={`${isOpen ? 'h-70' : 'h-20'} bg-(--bg)`}>
                    <div>

                        <button
                            className="cursor-pointer hover:opacity-80 transition-opacity duration-300 -mt-2.25"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsOpen(!isOpen);
                            }}
                        >
                            <Image
                                src="equal.svg"
                                alt="Equal image"
                                width={70}
                                height={100}
                            />
                        </button>
                    </div>

                    <div className="mt-8 ml-14 text-[#9EB4CA] flex justify-center items-center gap-3">
                        {/* Placeholder für Layout */}
                        <div>18 years old</div>
                        <div>·</div>
                        <div className="">
                            <Image src="marker.svg" alt="Marker image" width={16} height={15} className="inline mx-1"/>
                            Porta Westfalica, Germany
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-4  mt-2">
                        <a href="https://github.com/marcg0128" target="_blank">
                            <Image src={"github.svg"} alt={"github"} width={37} height={37}/>
                        </a>
                        <a href="" target={"_blank"}>
                            <Image src={"linkedin-circle.svg"} alt={"linkedin"} width={37} height={37}/>
                        </a>
                        <a href="mailto:marcg0128@hotmail.com" target="_blank">
                            <Image src={"umschlag.svg"} alt={"email"} width={37} height={37}/>
                        </a>
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
                                    { label: "Website", href: "/offers" },
                                    { label: "Clients", href: "/offers" },
                                    { label: "Others", href: "/offers" }
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