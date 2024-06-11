import { GoSquareFill } from "react-icons/go";

const TopFiveProductsText = () => {
    return (
        <div>
            <div className="flex justify-center items-center">
                <GoSquareFill className="w-[20px] h-[20px] text-[#F5C900]" />
                <h4>Paleu Bars</h4>
            </div>
            <div className="flex justify-center items-center">
                <GoSquareFill className="w-[20px] h-[20px] text-[#F5C900]" />
                <h4>Paleu Bars</h4>
            </div>
            <div className="flex justify-center items-center">
                <GoSquareFill className="w-[20px] h-[20px] text-[#FF8042]" />
                <h4>Paleu Bars</h4>
            </div>
            <div className="flex justify-center items-center">
                <GoSquareFill className="w-[20px] h-[20px] text-[#0088FE]" />
                <h4>Paleu Bars</h4>
            </div>
            <div className="flex justify-center items-center">
                <GoSquareFill className="w-[20px] h-[20px] text-[#00C49F]" />
                <h4>Paleu Bars</h4>
            </div>
        </div>
    );
};

export default TopFiveProductsText;