import TopFiveProductsChart from "../TopFiveProductsChart/TopFiveProductsChart";
import TopFiveProductsText from "../TopFiveProductsText/TopFiveProductsText";


const TopFiveProducts = () => {

    return (
        <div className='p-5'>
            <h4 className='font-semibold text-lg '> Top Five Products</h4>
            <div className='flex justify-between items-center'>
                <div className="w-1/2 flex  items-center h-[200px]">
                    <TopFiveProductsChart />
                </div>
                <div className= " w-1/2">
                   <TopFiveProductsText/>
                </div>
            </div>

        </div>
    );
};

export default TopFiveProducts;