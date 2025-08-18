import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const linkClasses = ({ isActive }) =>
        isActive 
            ? "text-main transition-all underline underline-offset-[6px] duration-300" 
            : "hover:text-main text-black hover:underline no-underline transition-all duration-300 hover:underline-offset-[6px]";

    return (
        <nav className="relative">
            <div className="hidden md:flex max-w-7xl flex-row items-center content-center">
                <ul className="flex flex-row gap-x-6 lg:gap-x-8 xl:gap-x-12 list-none">
                    <li>
                        <NavLink to="/" className={linkClasses}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/researchers" className={linkClasses}>
                            Researchers
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/student" className={linkClasses}>
                            Students
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/engineers" className={linkClasses}>
                            Engineers
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/discussion" className={linkClasses}>
                            Discussion
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="md:hidden">
                <button
                    onClick={toggleMenu}
                    className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            <div className={`md:hidden absolute top-12 right-0 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[200px] z-50 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <ul className="flex flex-col py-2 list-none">
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => `${linkClasses({ isActive })} block px-4 py-2 hover:bg-gray-50`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/researchers" 
                            className={({ isActive }) => `${linkClasses({ isActive })} block px-4 py-2 hover:bg-gray-50`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Researchers
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/student" 
                            className={({ isActive }) => `${linkClasses({ isActive })} block px-4 py-2 hover:bg-gray-50`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Students
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/engineers" 
                            className={({ isActive }) => `${linkClasses({ isActive })} block px-4 py-2 hover:bg-gray-50`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Engineers
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}