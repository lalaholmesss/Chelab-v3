import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Comments() {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/discussion/create-post"); 
    };

    return (
        <div className="bg-[#F2F6FE] px-4 sm:px-6 md:px-8 py-6 md:py-8 relative min-h-screen">
            <button
                onClick={handleRedirect}
                className="bg-transparent absolute top-6 md:top-8 right-4 sm:right-6 md:right-8 border border-main rounded-full p-2 sm:p-2.5 cursor-pointer hover:bg-main hover:text-white transition-all duration-200 group z-10"
                aria-label="Create new post"
            >
                <FontAwesomeIcon 
                    icon={faPlus} 
                    className="text-main text-lg sm:text-xl group-hover:text-white transition-colors duration-200" 
                />
            </button>

            <div className="pt-16 sm:pt-20 md:pt-24 max-w-4xl mx-auto">
                <div className="flex flex-col p-4 sm:p-6 md:p-8 rounded-2xl border border-main bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h3 className="text-xl sm:text-2xl text-main font-semibold mb-3 sm:mb-4">
                        Topic name
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        Content
                    </p>
                </div>

                
            </div>
        </div>
    );
}