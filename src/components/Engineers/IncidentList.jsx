import { useState } from "react";

export default function IncidentList() {
  const [input, setInput] = useState("");

  return (
    <div className="min-h-screen bg-[#F0F4FC] flex flex-col items-center px-4 sm:px-6 md:px-8 py-8 md:py-12 lg:py-20">
      
      <h2 className="text-main font-semibold text-xl sm:text-2xl lg:text-3xl mb-8 md:mb-10 text-center w-full">
        PFD Maker
      </h2>

      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl">
        
        <div className="relative mb-6 md:mb-8">
          <svg
            className="absolute left-3 sm:left-4 text-lightgray top-1/2 transform -translate-y-1/2 text-gray-400"
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>

          <input
            type="text"
            placeholder="Write process"
            className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 md:py-3 rounded-full border border-lightgray focus:border-main bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm sm:text-base transition-all duration-200"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <h2 className="text-main font-semibold mb-3 sm:mb-4 text-lg sm:text-xl md:text-2xl">
          Incident list :
        </h2>

        <ul className="space-y-3 sm:space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i} className="flex items-center gap-2 sm:gap-3">
              <span className="text-main text-lg sm:text-xl leading-none flex-shrink-0">•</span>
              <div className="border-b border-main flex-1 h-px"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}