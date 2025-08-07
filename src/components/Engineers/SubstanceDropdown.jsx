import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import chemicals from "../../data/chemicals";
import { useNavigate, useParams, useLocation } from "react-router-dom";

export default function Dropdown() {
  const [openSubstance, setOpenSubstance] = useState(false);
  const [selectedSubstance, setSelectedSubstance] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { substanceName } = useParams();

  const isEngineersPage = location.pathname.includes("/engineers");

  useEffect(() => {
    if (isEngineersPage) {
      const found = chemicals.find(
        (item) => item.name.toLowerCase() === substanceName?.toLowerCase()
      );

      if (found) {
        setSelectedSubstance(found);
      } else if (!selectedSubstance) {
        setSelectedSubstance(chemicals[0]);
        navigate(`/engineers/${chemicals[0].name}/pfd`);
      }
    }
  }, [isEngineersPage, substanceName, selectedSubstance, navigate]);

  useEffect(() => {
    if (
      selectedSubstance &&
      selectedSubstance.name.toLowerCase() !== substanceName?.toLowerCase()
    ) {
      navigate(`/engineers/${selectedSubstance.name}/pfd`);
    }
  }, [selectedSubstance, navigate, substanceName]);

  return (
    <div className={`bg-background pt-8 pb-20 ${isEngineersPage ? "h-screen" : ""}`}>
      <div className="relative mb-6">
        <button
          onClick={() => setOpenSubstance(!openSubstance)}
          className="border bg-white rounded-xl px-3 py-2 border-main text-sm text-main font-medium flex items-center justify-between gap-3 w-52 absolute right-8 cursor-pointer"
          aria-haspopup="listbox"
          aria-expanded={openSubstance}
        >
          <p>{selectedSubstance?.name || "Substance"}</p>
          <FontAwesomeIcon icon={openSubstance ? faAngleUp : faAngleDown} />
        </button>

        {openSubstance && (
          <div
            className="absolute mt-2 w-52 max-h-[300px] overflow-y-auto z-10 rounded-2xl bg-white border border-lightgray right-8 top-8 text-sm"
            role="listbox"
          >
            <ul>
              {chemicals.map((item) => (
                <li
                  key={item.name}
                  onClick={() => {
                    setSelectedSubstance(item);
                    setOpenSubstance(false);
                  }}
                  role="option"
                  aria-selected={selectedSubstance?.name === item.name}
                  className={`px-4 py-3 cursor-pointer hover:bg-main hover:text-white ${
                    selectedSubstance?.name === item.name
                      ? "bg-main text-white"
                      : ""
                  }`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
