import logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-white text-black pt-6 md:pt-8">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-4">
          
          <div className="w-48 sm:w-52 md:w-60 flex-shrink-0">
            <img src={logo} alt="Company Logo" className="h-auto w-full object-contain" />
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-base sm:text-lg text-gray-900 font-medium">Contact</h4>
            <ul className="list-none flex flex-col gap-1">
              <li>
                <a 
                  href="https://www.linkedin.com/company/chelab/posts/?feedView=all" 
                  rel="noopener noreferrer" 
                  target="_blank" 
                  className="hover:text-main text-black transition-colors no-underline duration-200 text-sm sm:text-base"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/chelab.aze/" 
                  rel="noopener noreferrer" 
                  target="_blank" 
                  className="hover:text-main text-black transition-colors no-underline duration-200 text-sm sm:text-base"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          
        </div>
      </div>

      <div className="mt-6 md:mt-8 py-3 md:py-4 border-t border-gray-300 text-center">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <p className="text-xs sm:text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Chelab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}