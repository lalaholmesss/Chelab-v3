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
    <div className="bg-background px-10 py-10 flex flex-col items-center gap-9">

      <div className="flex flex-row gap-[100px] justify-center max-w-[1720px] w-full">
        <div className="flex flex-col items-center w-[560px]">
          <p className="text-main text-5xl mb-6 font-semibold">Substance</p>
        </div>
        <div className="flex flex-col items-center w-[560px]">
          <p className="text-main text-5xl mb-6 font-semibold">Information</p>
        </div>
      </div>

      {filteredChemicals.length === 0 ? (
        <p className="text-xl text-gray-500">No results found for "{query}"</p>
      ) : (
        filteredChemicals.map((item, index) => (
          <div key={index} className="flex flex-row gap-[160px] justify-center max-w-[1720px] w-full items-stretch mb-16">
            <div className="flex flex-col items-center w-[480px]">
              <div className="flex flex-col bg-white py-10 px-12 rounded-3xl shadow-lg h-full w-full justify-between">
                <img
                  src={item.img}
                  alt={item.name}
                  className="rounded-xl h-60 object-cover"
                /> 
                <p className="text-2xl font-semibold pl-2 pt-8 pb-9">{item.name}</p>
                <div className="text-base text-black mt-4 pl-2 flex flex-col gap-3">
                  <p className="font-normal text-lightgray pr-6">
                    Type: <span className="text-black ml-16">{item.type}</span>
                  </p>
                  <p className="font-normal text-lightgray pr-6">
                    Prod: <span className="text-black ml-16">{item.prod}</span>
                  </p>
                  <p className="font-normal text-lightgray pr-6">
                    Cond: <span className="text-black ml-16">{item.cond}</span> 
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center w-[480px]">
              <div 
                className="border border-solid border-main bg-transparent p-8 rounded-3xl h-full w-full leading-7 flex flex-col justify-between cursor-pointer hover:bg-blue-50 transition-colors duration-200"
                onClick={() => toggleExpanded(index)}
              >
                <div>
                  <p className="text-base">
                    {expandedItems.has(index) 
                      ? item.description 
                      : truncateText(item.description)
                    }
                  </p>
                  {item.description.length > 150 && (
                    <p className="text-main text-sm mt-3 font-medium">
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