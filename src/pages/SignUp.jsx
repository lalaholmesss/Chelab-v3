import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png";

export default function SignUp() {
  return (
    <div className="h-screen flex items-center justify-center bg-white relative">
            <img src={logo} alt="Chelab logo" className="absolute top-2 left-2 w-[132px]"/>
      
      <div className="flex flex-col items-center absolute top-[180px]">
        
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-semibold">Create an account</h1>
        </div>

        <div className="flex flex-col w-[250px] pb-4">
          <label htmlFor="username" className="text-sm font-medium mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            className="px-4 py-3 rounded-lg border border-lightgray placeholder-lightgray focus:outline focus:outline-main  text-sm"
          />
        </div>

        <div className="flex flex-col w-[250px] pb-4">
          <label htmlFor="email" className="text-sm font-medium mb-2">
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="username@email.com"
            className="px-4 py-3 rounded-lg border border-lightgray placeholder-lightgray focus:outline focus:outline-main text-sm"
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
            className="px-4 focus:outline focus:outline-main py-3 rounded-lg border border-lightgray placeholder-lightgray text-sm"
          />
        </div>

        <button className="bg-main w-[250px] text-white text-base border-none font-semibold py-2.5 rounded-lg text-center cursor-pointer">
          Sign Up
        </button>

        <p className="text-center text-sm text-black mt-6">
          Already have an account?{" "}
          <Link to="/login" className="no-underline text-main hover:underline hover:underline-offset-1">Login</Link>
        </p>
      </div>
    </div>
  );
}