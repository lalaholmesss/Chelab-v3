import { Link } from "react-router-dom";

export default function Engineers() {
    return (
        <div className="bg-background min-h-screen flex items-center  flex-col py-24 px-4">
            <h1 className="text-main text-4xl font-medium mb-16 text-center">What do you need?</h1>
            
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
                {/*<Link to="/engineers/sizing">
                    <button className="w-48 h-24 border-2 border-main bg-transparent hover:bg-blue-50 rounded-2xl text-main text-lg font-medium transition-all duration-200 hover:shadow-lg">
                        Sizing
                    </button>
                </Link>*/}
                
                <Link to="/engineers/pfd-maker">
                    <button className="w-48 h-24 border-2 border-main bg-transparent hover:bg-blue-50 rounded-2xl text-main text-lg font-medium transition-all duration-200 hover:shadow-lg">
                        PFD Maker
                    </button>
                </Link>
                
                <Link to="/engineers/safety">
                    <button className="w-48 h-24 border-2 border-main bg-transparent hover:bg-blue-50 rounded-2xl text-main text-lg font-medium transition-all duration-200 hover:shadow-lg">
                        Safety
                    </button>
                </Link>
            </div>
        </div>
    );
}