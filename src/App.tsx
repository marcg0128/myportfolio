import './App.css'
import NavBar from "./components/navbar.tsx";

import {useState, useEffect} from "react";


function App() {
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            // Sehr schnelles Kleinerwerden – scale sinkt schnell
            const newScale = Math.max(0.3, 1 - scrollY / 400);
            setScale(newScale);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <NavBar hidden={scale !== 0.3}/>

            <div
                className="flex justify-center w-full h-full mt-[15%] absolute"
                style={{
                        position: "sticky",
                        top: 38,
                        transform: `scale(${scale})`,
                        transformOrigin: "top center",
                    }}
            >
                <h1
                    className="text-3xl md:text-9xl "

                >
                    Marcos Gomez Alvarez
                </h1>
            </div>
            <p className="mt-[1300px]">
                asdasd
            </p>
        </>
    );
}

export default App;
