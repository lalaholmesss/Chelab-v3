import logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-white text-black pt-8">
      <div className="max-w-[1720px] px-16 flex flex-row relative">

        <div className="w-60">
          <img src={logo} alt="Company Logo" className="h-auto object-contain" />
        </div>

        <div className="flex flex-col absolute right-[200px] gap-2">
          <h4 className="text-lg text-gray-900">Contact</h4>
          <ul className="list-none">
            <li>
              <a href="https://www.linkedin.com/company/chelab/posts/?feedView=all" rel="noopener noreferrer" target="_blank" className="hover:text-main text-black transition-colors no-underline duration-200">LinkedIn</a>
            </li>
            <li>
              <a href="https://www.instagram.com/chelab.aze/" rel="noopener noreferrer" target="_blank" className="hover:text-main text-black transition-colors no-underline duration-200">Instagram</a>
            </li>
            
          </ul>
        </div>

       
      </div>

      <div className="mt-3 py-3 border-t w-[90%] m-auto items-center text-sm border-gray-300 text-center">
        &copy; {new Date().getFullYear()} Chelab. All rights reserved.
      </div>
    </footer>
  );
}