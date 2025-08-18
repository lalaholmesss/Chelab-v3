import chemicals from "../../data/chemicals";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function DisplayInfo() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q")?.toLowerCase() || "";
  const [expandedItems, setExpandedItems] = useState(new Set());

  const filteredChemicals = query
    ? chemicals.filter((item) => item.name.toLowerCase().includes(query))
    : chemicals;

  const toggleExpanded = (index) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div className="bg-background px-4 py-6 md:px-6 lg:px-10 lg:py-10 flex flex-col items-center gap-6 lg:gap-9">

      <div className="hidden md:flex flex-row gap-8 lg:gap-[100px] justify-center max-w-[1720px] w-full">
        <div className="flex flex-col items-center flex-1 max-w-[560px]">
          <p className="text-main text-3xl lg:text-5xl mb-6 font-semibold">Substance</p>
        </div>
        <div className="flex flex-col items-center flex-1 max-w-[560px]">
          <p className="text-main text-3xl lg:text-5xl mb-6 font-semibold">Information</p>
        </div>
      </div>

      {filteredChemicals.length === 0 ? (
        <p className="text-lg md:text-xl text-gray-500 text-center px-4">No results found for "{query}"</p>
      ) : (
        filteredChemicals.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-[160px] justify-center max-w-[1720px] w-full items-stretch mb-8 md:mb-12 lg:mb-16">
            
            <div className="flex flex-col items-center w-full md:w-[480px] md:flex-1 max-w-[480px]">
              <div className="flex flex-col bg-white py-6 px-6 md:py-8 md:px-8 lg:py-10 lg:px-12 rounded-2xl lg:rounded-3xl shadow-lg h-full w-full justify-between">
                <img
                  src={item.img}
                  alt={item.name}
                  className="rounded-xl h-48 md:h-52 lg:h-60 object-cover w-full"
                /> 
                <p className="text-xl md:text-2xl font-semibold pl-2 pt-6 lg:pt-8 pb-6 lg:pb-9 text-center md:text-left">{item.name}</p>
                <div className="text-sm md:text-base text-black mt-2 md:mt-4 pl-2 flex flex-col gap-2 md:gap-3">
                  <p className="font-normal text-lightgray pr-2 md:pr-6 flex flex-col sm:flex-row">
                    <span className="min-w-[60px]">Type:</span> 
                    <span className="text-black sm:ml-4 md:ml-16">{item.type}</span>
                  </p>
                  <p className="font-normal text-lightgray pr-2 md:pr-6 flex flex-col sm:flex-row">
                    <span className="min-w-[60px]">Prod:</span> 
                    <span className="text-black sm:ml-4 md:ml-16">{item.prod}</span>
                  </p>
                  <p className="font-normal text-lightgray pr-2 md:pr-6 flex flex-col sm:flex-row">
                    <span className="min-w-[60px]">Cond:</span> 
                    <span className="text-black sm:ml-4 md:ml-16">{item.cond}</span> 
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center w-full md:w-[480px] md:flex-1 max-w-[480px]">
              <div className="md:hidden mb-4">
                <p className="text-main text-2xl font-semibold text-center">Information</p>
              </div>
              <div 
                className="border border-solid border-main bg-transparent p-6 md:p-8 rounded-2xl lg:rounded-3xl h-full w-full leading-6 md:leading-7 flex flex-col justify-between cursor-pointer hover:bg-blue-50 transition-colors duration-200"
                onClick={() => toggleExpanded(index)}
              >
                <div>
                  <p className="text-sm md:text-base">
                    {expandedItems.has(index) 
                      ? item.description 
                      : truncateText(item.description, window.innerWidth < 768 ? 100 : 150)
                    }
                  </p>
                  {item.description.length > (window.innerWidth < 768 ? 100 : 150) && (
                    <p className="text-main text-xs md:text-sm mt-2 md:mt-3 font-medium">
                      {expandedItems.has(index) ? "Click to show less" : "Click to read more"}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}