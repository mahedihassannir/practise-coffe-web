//AVENGERS
//TOMA
//Customer section
import { HiRefresh } from "react-icons/hi";

const Customer = () => {
    return (
        <div className="mt-5 md:mt-0 md:flex items-center justify-between shadow-md px-6 py-6">
            <div>
                <h3 className="text-3xl md:text-5xl font-semibold">Customers</h3>
            </div>
            <div className="flex  mt-5 md:mt-0 gap-2">
                <p className="text-lg font-semibold">Data refresh</p>
                <HiRefresh className="w-7 h-7 text-[#035ECF]"></HiRefresh>
                <div className="ml-2">
                    <button className="px-10 py-1 border-2 border-[#E2E1E1] font-semibold text-lg rounded-md">August 22, 2023 08.49PM</button>
                </div>
            </div>
        </div>
    );
};

export default Customer;