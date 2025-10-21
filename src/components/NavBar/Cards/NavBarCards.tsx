type NavBarCardsProps = {
    color?: string;
    title: string;
    links: {
        label: string;
        href: string;
    }[];

};

export default function NavBarCards({ color = "#0F171F", title, links }: NavBarCardsProps) {
    return (
        <div
            className={`bg-[${color}] p-6 rounded-2xl w-64 h-40 flex flex-col transition-transform duration-300`}
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
