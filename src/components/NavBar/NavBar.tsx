import {useState} from "react";
import NavBarCards from "@/components/NavBar/Cards/NavBarCards.tsx";

export default function NavBar({ hidden = false }) {
    const [isOpen, setIsOpen] = useState(false);
    // @ts-ignore
    return (
        <div
    className={`flex justify-center items-start h-16 w-full fixed top-0 left-0 z-49 animate-fade ${
        hidden ? "hidden" : ""
    }`}
>

            <nav
                className={`w-1/2 flex items-start justify-evenly gap-x-28 mt-8 rounded-4xl px-16 py-3  outline-[#606060]
                transition-all duration-500  outline backdrop-blur-lg
                ${isOpen ? 'h-70' : 'h-20'}`}
            >
                <div>
                    <button
                        className="cursor-pointer hover:opacity-80 transition-opacity duration-300 mt-[-9px]"
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
                <div className="mt-8 ml-10 opacity-80 text-[#9EB4CA]">
                    <div>Developer · Innovator · Tech Enthusiast</div>
                </div>
                <div>
                    <button className="bg-[#0F171F] p-4 px-6 rounded-4xl cursor-pointer  hover:bg-[#141E28] transition-colors duration-200">
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
                        />
                        <NavBarCards

                            title="Projects"
                            links={[
                                { label: "Discord", href: "#portfolio" },
                                { label: "Websites", href: "https://github.com" },
                                { label: "FiveM", href: "#contact" },
                            ]}
                        />
                        <NavBarCards
                            title="Skills"
                            links={[
                                { label: "Tools", href: "https://github.com" },
                                { label: "Programming Languages", href: "#portfolio" }
                            ]}
                        />
                    </div>
                )}
            </nav>
        </div>

    );
}