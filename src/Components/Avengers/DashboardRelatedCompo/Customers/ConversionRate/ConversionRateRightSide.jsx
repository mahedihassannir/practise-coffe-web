//AVENGERS 
//TOMA 
//ConversionRateSide right section
import { BsFillCaretUpFill} from "react-icons/bs";
import useCustomersInfo from "../../../../../Hooks/Avengers/useCustomersInfo/useCustomersInfo";

const ConversionRateRightSide = () => {
    const { customerInfo } = useCustomersInfo();
    const {  newUsers, regularUsers } = customerInfo;

    return (
        <div className=" md:w-[48%]  md:h-[200px] shadow-md rounded-md p-5">
            <h4 className="font-semibold text-2xl mb-4">Conversion Rate</h4>

                <div className="w-full md:flex justify-between ">

                    <div >
                        <div className=" md:flex font-semibold gap-8 ">
                            <div>
                                <small className="text-[#8D8D99]">YEAR</small>
                                <p>2023</p>
                            </div>
                            <div>
                                <small className="text-[#8D8D99]">CUSTOMERS</small>
                                <p>3,234</p>
                            </div>
                            <div>
                                <small className="text-[#8D8D99]">TRENDS</small>
                                <p>$10%</p>
                            </div>
                            <div>
                                <small className="text-[#8D8D99]">REVENUE</small>
                                <p>$124k</p>
                            </div>
                        </div>
                        <div class="border-t border-gray-300 my-2"></div>
                        <div className="flex font-semibold gap-8">
                            <p>2023</p>
                            <p>12,345</p>
                            <p className="ml-6">$35%</p>
                            <p className="ml-3 ">$32k</p>
                        </div>
                    </div>
                    <div className="md:flex gap-6">
                        <div>
                            <h3 className="mb-3 text-4xl font-semibold">{regularUsers}</h3>
                            <p className="text-[#8195AC] font-semibold">Regular Customers</p>
                            <div className="mt-1 flex gap-2 items-center text-[#00BA9D]">
                            <BsFillCaretUpFill></BsFillCaretUpFill>
                            <p className="font-semibold">+14.08%</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-3 text-4xl font-semibold">{newUsers}</h3>
                            <p className="text-[#8195AC] font-semibold">New Customers</p>
                            <div className="mt-1 flex gap-2 items-center text-[#00BA9D]">
                            <BsFillCaretUpFill></BsFillCaretUpFill>
                            <p className="font-semibold">+23%</p>
                            </div>
                        </div>

                    </div>

                </div>



       



        </div>
    );
};

export default ConversionRateRightSide;