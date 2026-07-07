"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Offer = {
    title: string;
    description: string;
    href: string;
};

const offers: Offer[] = [
    {
        title: "Website",
        description:
            "A custom website built from scratch, fast and easy to maintain long after launch.",
        href: "mailto:marcg0128@hotmail.com?subject=Website%20inquiry",
    },
    {
        title: "Clients",
        description:
            "Ongoing help for businesses that need a developer on call for new features, fixes, and updates.",
        href: "mailto:marcg0128@hotmail.com?subject=Client%20work%20inquiry",
    },
    {
        title: "Others",
        description:
            "Automation scripts, integrations, and anything else that doesn't fit a neat category.",
        href: "mailto:marcg0128@hotmail.com?subject=Project%20inquiry",
    },
];

const steps = [
    { title: "Reach out", body: "Tell me what you need, roughly is fine." },
    { title: "Scope the work", body: "We agree on what's built and by when." },
    { title: "Build & ship", body: "I code it, you see progress along the way." },
    { title: "Stay in touch", body: "Fixes and follow-ups after launch, no drama." },
];

export default function OffersPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 50);
        return () => clearTimeout(timer);
    }, []);

    const reveal = (delayMs: number) => ({
        className: `transition-all duration-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`,
        style: {
            transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
            transitionDelay: mounted ? `${delayMs}ms` : "0ms",
        },
    });

    return (
        <div className="theme-light offers-site min-h-screen w-full relative overflow-x-hidden flex flex-col">
            {/* Nav: this page is its own site, not the portfolio's global nav */}
            <header className="sticky top-0 z-30 offers-nav">
                <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded-full bg-(--primary) text-white flex items-center justify-center text-sm font-bold shrink-0">
                            M
                        </span>
                        <span className="font-semibold">
                            Marcos <span className="text-(--text-muted) font-normal">offers</span>
                        </span>
                    </div>
                    <nav className="flex items-center gap-5">
                        <Link
                            href="/"
                            className="hidden sm:inline text-sm text-(--text-muted) hover:text-(--text) transition-colors duration-200"
                        >
                            Back to portfolio
                        </Link>
                        <a
                            href="mailto:marcg0128@hotmail.com?subject=Project%20inquiry"
                            className="offers-pill-btn text-sm"
                        >
                            Get in touch
                        </a>
                    </nav>
                </div>
            </header>

            <main className="flex-1">
                {/* Hero */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 pt-14 md:pt-20 pb-16 md:pb-24 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 items-center">
                    <div {...reveal(0)}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                            Freelance web development, done properly.
                        </h1>
                        <p className="mt-5 text-base md:text-lg text-(--text-muted) max-w-md leading-relaxed">
                            Websites, ongoing client work, and everything in between. I handle
                            the code so you don&apos;t have to think about it.
                        </p>
                        <div className="mt-8 flex items-center gap-4">
                            <a
                                href="mailto:marcg0128@hotmail.com?subject=Project%20inquiry"
                                className="offers-pill-btn"
                            >
                                Get in touch
                            </a>
                            <a
                                href="#services"
                                className="inline-flex items-center gap-2 text-(--text) hover:gap-3 transition-all duration-200"
                                style={{ transitionTimingFunction: "ease-out" }}
                            >
                                View services
                                <Image src="/pfeil-oben-rechts.svg" alt="" width={11} height={11} />
                            </a>
                        </div>
                    </div>

                    <div {...reveal(120)} className={`${reveal(120).className} relative aspect-[4/5] md:aspect-[3/4]`}>
                        <div className="relative w-full h-full rounded-4xl overflow-hidden outline outline-[#606060]/20">
                            <Image
                                src="https://picsum.photos/seed/marcos-dev-workspace-clean/900/1100"
                                alt="Clean developer workspace"
                                fill
                                sizes="(min-width: 768px) 40vw, 90vw"
                                className="object-cover"
                                priority
                                unoptimized
                            />
                        </div>
                    </div>
                </section>

                {/* Services */}
                <section id="services" className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
                    <h2 {...reveal(0)} className={`${reveal(0).className} text-2xl md:text-3xl font-semibold`}>
                        What I can do for you
                    </h2>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-5 md:gap-6">
                        <div
                            {...reveal(80)}
                            className={`${reveal(80).className} md:col-span-2 md:row-span-2`}
                        >
                            <a
                                href={offers[0].href}
                                className="service-card service-card--photo group relative block rounded-4xl overflow-hidden h-full min-h-[320px]"
                            >
                                <Image
                                    src="https://picsum.photos/seed/web-development-code-screen/1200/900"
                                    alt=""
                                    fill
                                    sizes="(min-width: 768px) 55vw, 90vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                                <div className="relative h-full flex flex-col justify-end p-8">
                                    <h3 className="text-2xl font-semibold text-white">
                                        {offers[0].title}
                                    </h3>
                                    <p className="mt-2 text-white/80 leading-relaxed max-w-sm">
                                        {offers[0].description}
                                    </p>
                                    <span className="mt-4 inline-flex items-center gap-2 text-white w-max">
                                        Get in touch
                                        <Image src="/pfeil-oben-rechts.svg" alt="" width={11} height={11} className="invert" />
                                    </span>
                                </div>
                            </a>
                        </div>

                        {offers.slice(1).map((offer, i) => (
                            <div key={offer.title} {...reveal(160 + i * 70)}>
                                <a
                                    href={offer.href}
                                    className="service-card group flex flex-col rounded-4xl p-7 h-full bg-(--bg-light) outline outline-[#606060]/20 backdrop-blur-lg"
                                >
                                    <h3 className="text-xl font-semibold">{offer.title}</h3>
                                    <p className="mt-2 text-(--text-muted) leading-relaxed">
                                        {offer.description}
                                    </p>
                                    <span className="mt-auto pt-4 inline-flex items-center gap-2 text-(--primary) group-hover:gap-3 transition-all duration-200 w-max">
                                        Get in touch
                                        <Image src="/pfeil-oben-rechts.svg" alt="" width={11} height={11} />
                                    </span>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Process */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 border-t border-(--border-muted)">
                    <h2 {...reveal(0)} className={`${reveal(0).className} text-2xl md:text-3xl font-semibold`}>
                        How we&apos;d work together
                    </h2>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, i) => (
                            <div
                                key={step.title}
                                {...reveal(60 + i * 70)}
                                className={`${reveal(60 + i * 70).className} pt-5 border-t-2 border-(--primary)`}
                            >
                                <h3 className="font-semibold">{step.title}</h3>
                                <p className="mt-1.5 text-sm text-(--text-muted) leading-relaxed">
                                    {step.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="border-t border-(--border-muted)">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-2.5">
                            <span className="w-8 h-8 rounded-full bg-(--primary) text-white flex items-center justify-center text-sm font-bold shrink-0">
                                M
                            </span>
                            <span className="font-semibold">Marcos Gomez Alvarez</span>
                        </div>
                        <a
                            href="mailto:marcg0128@hotmail.com"
                            className="mt-2 inline-block text-sm text-(--text-muted) hover:text-(--text) transition-colors duration-200"
                        >
                            marcg0128@hotmail.com
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="https://github.com/marcg0128" target="_blank" rel="noreferrer" className="opacity-70 hover:opacity-100 transition-opacity duration-200">
                            <Image src="/github.svg" alt="GitHub" width={26} height={26} />
                        </a>
                        <a href="mailto:marcg0128@hotmail.com" className="opacity-70 hover:opacity-100 transition-opacity duration-200">
                            <Image src="/umschlag.svg" alt="Email" width={26} height={26} />
                        </a>
                        <Link href="/" className="text-sm text-(--text-muted) hover:text-(--text) transition-colors duration-200 ml-2">
                            Back to portfolio
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
