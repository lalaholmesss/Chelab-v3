import { useState } from "react";

export default function IncidentList() {
  const [input, setInput] = useState("");

  return (
    <div className="min-h-screen bg-[#F0F4FC] flex items-start justify-center pt-20 ">
              <h2 className="absolute left-8 top-24  text-main font-semibold text-2xl">PFD Maker</h2>

      <div className="w-full max-w-2xl mt-10">
        <div className="relative mb-8">
          <svg
            className="absolute left-4 text-lightgray top-1/2 transform -translate-y-1/2 text-gray-400"
            width="16"
            height="16"
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
            className="w-full pl-10 pr-4 py-3 rounded-full border border-lightgray focus:border-main bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <h2 className="text-main font-semibold mb-4 text-2xl">Incident list :</h2>

        <ul className="space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-main text-xl leading-none">•</span>
              <div className="border-b border-main flex-1"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
