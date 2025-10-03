import { useState } from "react";
import Avatar from "./Avatar.tsx";

function AppBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-white border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="text-2xl font-bold text-gray-800 cursor-pointer">
                        Blog<span className="text-green-400">App</span>
                    </div>

                    <div className="hidden md:flex items-center gap-6">
                        <button className="bg-green-400 text-white px-3 py-1 rounded-full hover:bg-green-700 transition-colors">
                            Publish
                        </button>

                        <Avatar />
                    </div>

                    <button
                        className="md:hidden flex items-center text-gray-700 hover:hover:text-green-600 focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {menuOpen && (
                    <div className="md:hidden flex flex-col gap-4 pb-4 border-t border-gray-200 mt-2">
                        <button className="bg-green-400 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
                            Publish
                        </button>

                        <div className="px-2">
                            <Avatar />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default AppBar;
