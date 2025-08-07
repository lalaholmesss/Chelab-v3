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
    <div className="bg-background py-15 px-20 py-20">
      <div className="max-w-screen-xl mb-12 mx-auto bg-white rounded-xl shadow-md border border-main">
        <h1 className="text-4xl font-semibold text-main text-center py-12 border-b border-b-gray-400">
          Articles and Scientific Research
        </h1>

        {filteredChemicals.length === 0 ? (
          <p className="text-xl text-center text-gray-500">
            No results found for "{query}"
          </p>
        ) : (
          <table className="w-full table-auto border-collapse">
            <tbody>
              {filteredChemicals.map((item, index) => (
                <tr key={index} className="border-b border-gray-400 last:border-none">
                  <td className="w-1/3 text-black text-2xl font-semibold px-6 py-15 text-center align-middle border-r border-gray-400">
                    {item.name}
                  </td>
                  <td className="w-2/3 px-24 py-4 space-y-2">
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
        )}
      </div>
    </div>
  );
}