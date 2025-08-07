import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png";

export default function Login() {
  return (
    <div className="h-screen flex items-center justify-center bg-white relative">
      <img src={logo} alt="Chelab logo" className="absolute top-2 left-2 w-[132px]"/>
      <div className="flex flex-col items-center absolute top-[180px]">
        
        <div className="w-[250px] mb-6 text-center">
          <h1 className="text-3xl font-semibold">Welcome back</h1>
        </div>

        <div className="flex flex-col w-[250px] pb-4">
          <label htmlFor="email" className="text-sm font-semibold mb-2">
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="username@email.com"
            className="px-4 py-3 focus:outline focus:outline-main rounded-lg border border-lightgray placeholder-lightgray text-sm"
          />
        </div>

        <div className="flex flex-col w-[250px] pb-10">
          <label htmlFor="password" className="text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            minLength="8"
            className="px-4 py-3 rounded-lg focus:outline focus:outline-main border border-lightgray placeholder-lightgray text-sm"
          />
        </div>

        <button className="bg-main hover:bg-blue-700 w-[250px] text-white text-base font-semibold border-none py-2.5 rounded-lg text-center cursor-pointer">
          Login
        </button>

        
        <p className="text-center text-sm text-black mt-6">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="no-underline duration-300 text-main hover:underline hover:underline-offset-1">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}