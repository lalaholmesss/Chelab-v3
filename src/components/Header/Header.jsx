import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <div className="max-w-[1720px] mx-4 sm:mx-6 md:mx-8 lg:mx-auto lg:px-8">
      <div className="flex justify-between items-center py-4 md:py-0">

        <div className="w-24 sm:w-28 md:w-32 flex-shrink-0">
          <img src={logo} alt="Logo" className="h-auto w-full object-contain" />
        </div>

        <div className="hidden md:block">
            <Navbar />
          </div>

        <div className="flex items-center gap-3">
          <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-5">
            <button className="text-main border border-main bg-transparent hover:bg-main hover:text-white py-1 px-2 sm:py-1.5 sm:px-3 md:py-2 md:px-4 rounded-[10px] transition-colors duration-200 cursor-pointer text-xs sm:text-sm md:text-base">
              <Link to="/login" className="no-underline text-inherit">Login</Link>
            </button>
            <button className="text-main border border-main bg-transparent hover:bg-main hover:text-white py-1 px-2 sm:py-1.5 sm:px-3 md:py-2 md:px-4 rounded-[10px] transition-colors duration-200 cursor-pointer text-xs sm:text-sm md:text-base">
              <Link to="/signup" className="no-underline text-inherit">Sign Up</Link>
            </button>
          </div>

          <div className="md:hidden">
            <Navbar />
          </div>
        </div>
      
      </div>
    </div>
  );
}