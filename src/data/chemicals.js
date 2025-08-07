import PEImg from '../assets/images/PE.png';
import PPImg from '../assets/images/PP.jpg';
import NylonImg from '../assets/images/Nylon.jpg';
import PETImg from '../assets/images/PET.png';
import PCImg from '../assets/images/PC.png';

 const chemicals = [
  {
    name: "Polyethylene (PE)",
    img: PEImg,
    type: "Free Radical",
    prod: "110 Mt",
    cond: "70–90°C, 1–2 MPa",
    description:
      "Polyethylene (PE), light, versatile synthetic resin made from the polymerization of ethylene...",
    links: [
      { label: "Article", url: "https://doi.org/10.1016/B978-0-323-35824-8.00010-4" },
      { label: "Article", url: "https://doi.org/10.1016/j.ecoenv.2022.113933" },
      { label: "Article", url: "https://doi.org/10.1016/S0142-9418(01)00214-6" }
    ],
    pfdName: "pe",
    youtubeLink: "https://www.youtube.com/watch?v=U6d_F1jcKzI"
  },
  {
    name: "PET",
    img: PETImg,
    type: "Condensation",
    prod: "79 Mt",
    cond: "50–70°C, 1–3 atm",
    description:
      "Polyethylene terephthalate (PET) belongs to the family of polyesters...",
    links: [
      { label: "Article", url: "https://pubs.acs.org/doi/10.1021/acscatal.3c02922" },
      { label: "Article", url: "https://pubs.acs.org/doi/10.1021/acs.biochem.3c00554" }
    ],
    pfdName: "pet",
    youtubeLink: "https://www.youtube.com/watch?v=rLOUxxwaXuA"
  },
  {
    name: "Polycarbonate (PC)",
    img: PCImg,
    type: "Free Radical",
    prod: "110 Mt",
    cond: "70–90°C, 1–2 MPa",
    description:
      "Polycarbonates are strong, stiff, hard, tough, transparent engineering thermoplastics...",
    links: [
      { label: "Article", url: "https://doi.org/10.1002/pol.20220118" },
      { label: "Article", url: "https://doi.org/10.3390/en15103686" }
    ],
    pfdName: "pc",
    youtubeLink: "https://www.youtube.com/watch?v=yzAXVF7-hjw"
  },
  {
    name: "Nylon-6,6",
    img: NylonImg,
    type: "Condensation",
    prod: "1.4 Mt",
    cond: "80–300°C",
    description:
      "Nylon 66 (or nylon 6,6) is a type of polyamide used in textile and plastic industries...",
    links: [
      { label: "Article", url: "https://doi.org/10.1002/app.1319" },
      { label: "Article", url: "https://doi.org/10.1016/S0032-3861(98)00079-2" }
    ],
    pfdName: "nylon",
    youtubeLink: "https://www.youtube.com/watch?v=4GxeSO7DyaE"
  },
  {
    name: "Polypropylene (PP)",
    img: PPImg,
    type: "Ziegler–Natta",
    prod: "79 Mt",
    cond: "50–70°C, 1–3 atm",
    description:
      "Polypropylene (PP) is a thermoplastic linear hydrocarbon polymer resin...",
    links: [
      { label: "Article", url: "https://doi.org/10.1002/polc.5070710106" },
      { label: "Article", url: "https://doi.org/10.1016/S0141-3910(03)00179-4" }
    ],
    pfdName: "pp",
    youtubeLink: "https://www.youtube.com/watch?v=CHivlQ41QxM"
  }
];


  export default chemicals;