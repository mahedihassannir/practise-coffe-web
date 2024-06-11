//AVENGERS 
//TOMA 
//ConversionRateSide left section

import { HiOutlineUserGroup, HiUserAdd } from "react-icons/hi";
import useCustomersInfo from "../../../../../Hooks/Avengers/useCustomersInfo/useCustomersInfo";

const ConversionRateLeftSide = () => {
    const { customerInfo } = useCustomersInfo();
    const { allUsers, newUsers, regularUsers } = customerInfo;

    return (
        <div className=" w-full md:flex  gap-5 md:w-[48%] ">
            <div className="mt-10 md:mt-0">
                <div className="flex flex-col items-center justify-center w-full md:w-[220px] h-[200px] shadow-md rounded-md">
                    <div className="">
                        <HiOutlineUserGroup className="mb-2 bg-[#00BA9D] p-2  w-full md:w-[40px] h-[40px] rounded text-white"></HiOutlineUserGroup>
                    </div>

                    <h3 className="mb-3 text-4xl font-semibold">{allUsers}</h3>
                    <p className="text-xl font-semibold">All Customers</p>
                </div>

            </div>
            <div className="mt-10 md:mt-0">
                <div className="flex flex-col items-center justify-center w-full md:w-[220px] h-[200px] shadow-md rounded-md">
                    <div className="">
                        <HiUserAdd className="mb-2 bg-[#035ECF] p-2 w-[40px] h-[40px] rounded text-white"></HiUserAdd>
                    </div>

                    <h3 className="mb-3 text-4xl font-semibold">{newUsers}</h3>
                    <p className="text-xl font-semibold">New Customers</p>

                </div>

            </div>
            <div className="my-10  md:my-0">
                <div className="flex flex-col items-center justify-center w-full md:w-[220px] h-[200px] shadow-md rounded-md">
                    <div className="">
                        <HiOutlineUserGroup className="mb-2 bg-[#FF5470] p-2 w-[40px] h-[40px] rounded text-white"></HiOutlineUserGroup>
                    </div>

                    <h3 className="mb-3 text-4xl font-semibold">{regularUsers}</h3>
                    <p className="text-xl font-semibold">Regular Customers</p>

                </div>

            </div>
        </div>

    );
};

export default ConversionRateLeftSide;