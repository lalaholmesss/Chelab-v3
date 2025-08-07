import { useParams } from "react-router-dom";
import chemicals from "../../data/chemicals";
import SubstanceDropdown from "./SubstanceDropdown";

export default function DisplayDiagram() {
  const { substance } = useParams();
  const currentChemical = chemicals.find((c) => c.name === substance);

  if (!currentChemical) {
    return (
      <div className="min-h-screen bg-background p-6 flex justify-center items-center">
        <p className="text-[20px] font-medium">Chemical not found.</p>
      </div>
    );
  }

  const { pfdName, youtubeLink } = currentChemical;

  return (
    <div className="min-h-screen bg-background">
      <SubstanceDropdown />

      <div className="flex flex-col mt-10 px-4 absolute top-16 mx-8">
        <h1 className="text-4xl font-semibold mb-10 text-main text-left">
          PFD of {substance}
        </h1>

        <div className="w-full rounded-2xl shadow-lg">
          <img
            src={`/pfds/${pfdName}-pfd.png`}
            alt={`${substance} PFD`}
            className="w-full h-auto rounded-xl"
          />
        </div>

        <a
          href={youtubeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[20px] text-main hover:underline mt-6 no-underline underline-offset-[6px]"
        >
          ▶ Watch video explanation
        </a>
      </div>
    </div>
  );
}
