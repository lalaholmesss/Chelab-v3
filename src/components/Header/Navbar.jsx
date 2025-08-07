import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="relative">
            <div className="max-w-7xl flex flex-row items-center content-center">
                <ul className="flex flex-row gap-x-12 list-none">
                    <li>
                        <NavLink to="/" className={({ isActive }) =>
                            isActive ? "text-main transition-all underline underline-offset-[6px] duration-300" : "hover:text-main text-black hover:underline no-underline transition-all duration-300 hover:underline-offset-[6px]"
                        }>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/researchers" className={({ isActive }) =>
                            isActive ? "text-main transition-all underline underline-offset-[6px] duration-300" : "hover:text-main text-black hover:underline no-underline transition-all duration-300 hover:underline-offset-[6px]"
                        }>Researchers</NavLink>
                    </li>
                    <li>
                        <NavLink to="/student" className={({ isActive }) =>
                            isActive ? "text-main transition-all underline underline-offset-[6px] duration-300" : "hover:text-main text-black hover:underline no-underline transition-all duration-300 hover:underline-offset-[6px]"
                        }>Students</NavLink>
                    </li>
                    <li>
                        <NavLink to="/engineers" className={({ isActive }) =>
                            isActive ? "text-main transition-all underline underline-offset-[6px] duration-300" : "hover:text-main text-black hover:underline no-underline transition-all duration-300 hover:underline-offset-[6px]"
                        }>Engineers</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}