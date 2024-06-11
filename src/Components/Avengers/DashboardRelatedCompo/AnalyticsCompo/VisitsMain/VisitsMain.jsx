import { GoDotFill } from "react-icons/go";
import TotalSalesChart from "../TotalSalesChart/TotalSalesChart";

const VisitsMain = () => {
    return (
        <div className=' p-5 w-[480px] bg-[#FFFFFF] h-[300px] shadow-md'>
            <h4 className='font-semibold text-lg mb-2'> Total Sales</h4>
            <div className="flex items-center gap-4 mb-2">
                <div className="flex items-center gap-2">
                    <GoDotFill className="w-[30px] h-[30px] text-[#00C49F]"></GoDotFill>
                    <p className="font-semibold">Offline Sales</p>
                </div>
                <div className="flex items-center gap-2">
                    <GoDotFill className="w-[30px] h-[30px] text-[#8AC1F4]"></GoDotFill>
                    <p className="font-semibold">Online Sales</p>
                </div>
            </div>
            <TotalSalesChart />
        </div>
    );
};

export default VisitsMain;