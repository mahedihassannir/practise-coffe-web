import React from 'react';
import TopFiveProducts from '../TopFiveProducts/TopFiveProducts';
import SalesAnalyticsDiv from '../SalesAnalyticsDiv/SalesAnalyticsDiv';
import ConversionRateDiv from '../ConversionRateDiv/ConversionRateDiv';
import EarningMain from '../EarningMain/EarningMain';


const SalesAnalyticsMain = () => {
    return (
        <div className="mt-6 md:ml-5">
            <div className="w-full md:flex justify-center gap-10 ">
                <div className="w-full md:w-[65%] rounded-sm bg-[#FFFFFF] h-[600px] shadow-md">
                    <SalesAnalyticsDiv/>
                </div>
                <div className="w-full md:w-[30%] rounded-sm">
                    <div className="mb-12 h-[270px] bg-[#FFFFFF]">
                        <TopFiveProducts></TopFiveProducts>
                    </div>
                    <div className="w-full rounded-sm">
                        <div className="mb-12 h-[280px] bg-[#FFFFFF]">
                            <ConversionRateDiv />
                        </div>
                    </div>
                </div>

            </div>
            <div className='md:ml-5'>
                <EarningMain />
            </div>
        </div>
    );
};

export default SalesAnalyticsMain;