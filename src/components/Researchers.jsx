import chemicals from "../data/chemicals";
import { useLocation } from "react-router-dom";

export default function ChemicalTable() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q")?.toLowerCase() || "";

  const filteredChemicals = query
    ? chemicals.filter((item) => item.name.toLowerCase().includes(query))
    : chemicals;

  return (
    <div className="bg-background py-4 px-4 md:py-15 md:px-20 lg:py-20 mx-auto">
      <div className="max-w-screen-xl mb-12 mx-auto bg-white rounded-xl shadow-md border border-main">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-main text-center py-6 md:py-8 lg:py-12 border-b border-b-gray-400 px-4">
          Articles and Scientific Research
        </h1>

        {filteredChemicals.length === 0 ? (
          <p className="text-lg md:text-xl text-center text-gray-500 py-8 px-4">
            No results found for "{query}"
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="hidden md:table w-full table-auto border-collapse">
              <tbody>
                {filteredChemicals.map((item, index) => (
                  <tr key={index} className="border-b border-gray-400 last:border-none">
                    <td className="w-1/3 text-black text-xl lg:text-2xl font-semibold px-4 lg:px-6 py-8 lg:py-15 text-center align-middle border-r border-gray-400">
                      {item.name}
                    </td>
                    <td className="w-2/3 px-6 lg:px-24 py-4 space-y-2">
                      {item.links.map((link, i) => (
                        <div key={i}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-main hover:underline break-all list-item no-underline mb-3 underline-offset-[6px]"
                          > 
                            {link.label}
                          </a>
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="md:hidden">
              {filteredChemicals.map((item, index) => (
                <div key={index} className="border-b border-gray-400 last:border-none p-4 text-center">
                  <h2 className="text-xl font-semibold text-black mb-4 text-center">
                    {item.name}
                  </h2>
                  <div className="space-y-3">
                    {item.links.map((link, i) => (
                      <div key={i}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-main hover:underline break-all block mb-2 underline-offset-[6px] text-sm leading-relaxed"
                        > 
                          {link.label}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}