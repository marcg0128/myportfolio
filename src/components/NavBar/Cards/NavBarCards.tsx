export default function NavBarCards(
    hidden: boolean = true,
    title: string = "Card Title",
    description: string = "This is a description for the card."
) {

    return (
        <div
            className={`bg-[#1E2A38] p-6 rounded-2xl w-64 h-40 flex flex-col justify-between hover:scale-105 transition-transform duration-300 ${
                hidden ? "hidden" : ""
            }`}
        >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-[#9EB4CA]">{description}</p>
        </div>
    );
}