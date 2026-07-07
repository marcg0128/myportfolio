"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BoxComponent from "@/app/components/BoxComponent";
import FillText from "@/app/components/Elements/FillText";
import Aurora from "@/app/components/Elements/Aurora";

type Offer = {
    title: string;
    description: string;
    href: string;
};

const offers: Offer[] = [
    {
        title: "Website",
        description:
            "Custom, fast, and responsive websites built from scratch with modern tooling — from landing pages to full web apps.",
        href: "mailto:marcg0128@hotmail.com?subject=Website%20inquiry",
    },
    {
        title: "Clients",
        description:
            "Ongoing collaboration for businesses that need a reliable developer for ongoing features, maintenance, and support.",
        href: "mailto:marcg0128@hotmail.com?subject=Client%20work%20inquiry",
    },
    {
        title: "Others",
        description:
            "Automation scripts, tools, integrations, and anything else that doesn't fit neatly into a box — let's talk about it.",
        href: "mailto:marcg0128@hotmail.com?subject=Project%20inquiry",
    },
];

export default function OffersPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="theme-light min-h-screen w-full relative overflow-x-hidden">
            <div className="fixed inset-0 z-0 w-full h-[60vh] opacity-40">
                <Aurora
                    colorStops={["#C9BEFF", "#5227FF", "#C9BEFF"]}
                    amplitude={0.2}
                    blend={0.3}
                />
            </div>
            <div className="fixed inset-0 z-0 w-full h-full bg-gradient-to-b from-transparent via-(--bg)/70 to-(--bg)" />

            <div className="relative z-10 px-8 md:px-32 lg:px-48 py-10">
                <div
                    className={`transition-all duration-500 ${
                        mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                    }`}
                    style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-(--text-muted) hover:text-(--text) transition-colors duration-200 active:scale-95"
                        style={{ transitionTimingFunction: "ease-out" }}
                    >
                        <Image
                            src="/pfeil-oben-rechts.svg"
                            alt=""
                            width={12}
                            height={12}
                            className="rotate-180"
                        />
                        Back to home
                    </Link>
                </div>

                <div
                    className={`mt-14 md:mt-20 transition-all duration-500 delay-75 ${
                        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                    }`}
                    style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold">
                        <FillText
                            text="What I Offer"
                            duration={0.8}
                            fillColor="text-(--primary)"
                            baseColor="text-gray-300"
                            chaos={1.6}
                        />
                    </h1>
                    <p className="mt-4 text-base md:text-lg text-(--text-muted) max-w-xl">
                        A few ways we could work together. Pick whichever fits, or reach out
                        if you're not sure.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {offers.map((offer, i) => (
                        <div
                            key={offer.title}
                            className={`transition-all ${
                                mounted
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-4"
                            }`}
                            style={{
                                transitionDuration: "450ms",
                                transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
                                transitionDelay: mounted ? `${120 + i * 70}ms` : "0ms",
                            }}
                        >
                            <BoxComponent
                                w="full"
                                center={false}
                                style="offer-card flex-col py-8 h-full cursor-default"
                            >
                                <h2 className="text-2xl font-semibold">{offer.title}</h2>
                                <p className="mt-3 text-(--text-muted) leading-relaxed">
                                    {offer.description}
                                </p>
                                <a
                                    href={offer.href}
                                    className="mt-6 inline-flex items-center gap-2 text-(--primary) hover:gap-3 transition-all duration-200 active:scale-95 w-max"
                                    style={{ transitionTimingFunction: "ease-out" }}
                                >
                                    Get in touch
                                    <Image
                                        src="/pfeil-oben-rechts.svg"
                                        alt=""
                                        width={12}
                                        height={12}
                                    />
                                </a>
                            </BoxComponent>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
