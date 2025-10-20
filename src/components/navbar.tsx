

export default function NavBar({ hidden = false }) {
    return (
        <div
            className={`flex justify-center items-center align-top h-16 w-full fixed top-0 left-0 z-50 animate-fade ${
                hidden ? 'hidden' : ''
            }`}
        >
            <nav className="w-1/2 flex items-center justify-evenly gap-x-28 h-20 mt-20 rounded-4xl px-16 py-12 outline-1 outline-[#606060]">
                <div>
                    <button className="cursor-pointer hover:opacity-80 transition-opacity duration-300">
                        <img
                            src="./equal.svg"
                            alt="Equal image"
                            width={70}
                            height={100}

                        />
                    </button>


                </div>
                <div className="mt-11 opacity-80 text-[#9EB4CA]">
                    <div>Developer · Innovator · Tech Enthusiast</div>
                </div>
                <div>
                    <button className="bg-[#0F171F] p-4 px-6 rounded-4xl">
                        Contact Me
                    </button>
                </div>
            </nav>
        </div>

    );
}