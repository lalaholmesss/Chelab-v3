import { useLocation, useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFlask } from "@fortawesome/free-solid-svg-icons"

export default function InfoCard() {
    const {state} = useLocation();
    const item = state;
    return(
        <div className="h-screen max-w-[1720px] px-[54px] bg-[#EEFFF7] font-[Poppins] items-start py-[24px]">
            <h1 className="text-[35px] text-[#1AC2EA]"><FontAwesomeIcon icon={faFlask} className="pr-[12px]"/>Information about Substance</h1>
            <div className="flex flex-row gap-[80px] mt-[24px]">
                <div className="bg-white rounded-2xl shadow-lg w-72 p-4 hover:scale-[1.01] transition-all">
                <img
                src={item.img}
                alt={item.name}
                className="rounded-lg h-36 w-full object-cover"
                />
                <h3 className="text-lg font-semibold mt-4">{item.name}</h3>
                <div className="text-sm text-gray-600 mt-2 space-y-1">
                    <p>
                    <span className="font-medium text-black pr-[24px]">Type:</span> {item.type}
                    </p>
                    <p>
                    <span className="font-medium text-black pr-[24px]">Prod:</span> {item.prod}
                    </p>
                    <p>
                    <span className="font-medium text-black pr-[24px]">Cond:</span> {item.cond}
                    </p>
                </div>
            </div>
            <div >
                <div className="max-w-[500px] border-2 border-dashed border-[#00BF63] rounded-[30px] px-[40px] py-[32px] inline-block">
                    <p>{item.description}</p>
                </div>
            </div>
            </div>
        </div>
    )
}