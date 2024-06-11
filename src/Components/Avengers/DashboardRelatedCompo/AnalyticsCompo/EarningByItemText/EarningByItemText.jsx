import { GoDotFill } from "react-icons/go";

const EarningByItemText = () => {
    return (
        <div>
           <div className="flex items-center gap-2">
           <GoDotFill className="w-[30px] h-[30px] text-[#0088FE]"></GoDotFill>
           <p>Paleo Bars</p>
           </div>
           <div className="flex items-center gap-2">
           <GoDotFill className="w-[30px] h-[30px] text-[#00C49F]"></GoDotFill>
           <p>Paleo Bars</p>
           </div>
           <div className="flex items-center gap-2">
           <GoDotFill className="w-[30px] h-[30px] text-[#FFBB28]"></GoDotFill>
           <p>Paleo Bars</p>
           </div>
           <div className="flex items-center gap-2">
           <GoDotFill className="w-[30px] h-[30px] text-[#FF8042]"></GoDotFill>
           <p>Paleo Bars</p>
           </div>
        </div>
    );
};

export default EarningByItemText;