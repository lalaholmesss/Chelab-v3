import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <div className="max-w-[1720px] mx-8">
      <div className="flex justify-between items-center">

        <div className="w-32">
          <img src={logo} alt="Logo" className="h-auto object-contain" />
        </div>

        <div>
          <Navbar />
        </div>
        
        <div className="flex flex-row justify-between gap-5 my-5">
          <button className="text-main border border-main bg-transparent hover:bg-main hover:text-white py-2 px-4 rounded-[10px] no-underline transition-colors duration-200 cursor-pointer">
            <Link to="/login">Login</Link>
          </button>
          <button className="text-main border border-main bg-transparent hover:bg-main hover:text-white py-2 px-4 rounded-[10px] m-auto transition-colors duration-200 cursor-pointer">
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
      
      </div>
    </div>
  );
}