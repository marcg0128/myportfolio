"use client";
import { useState, useEffect } from "react";

type NavBarCardsProps = {
    color?: string;
    title: string;
    links: {
        label: string;
        href: string;
    }[];
    delay?: number;
};

export default function NavBarCards({ color = "#0F171F", title, links, delay = 0 }: NavBarCardsProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div
            className={`bg-[${color}] p-6 rounded-2xl w-64 h-40 flex flex-col transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
        >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>

            {/* Container für Links, der immer unten bleibt */}
            <div className="mt-auto flex flex-col gap-1">
                {links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="flex items-center text-[#9EB4CA] hover:text-white transition-colors duration-300"
                    >
                        {/* Pfeil vor dem Link */}
                        <img src="/pfeil-oben-rechts.svg" alt="arrow" className="w-4 h-4 mr-2"/>
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    );
}


