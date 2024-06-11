import React from 'react';
import { BsCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';
import SalesAnalyticsChart from '../SalesAnalyticsChart/SalesAnalyticsChart';

const SalesAnalyticsDiv = () => {
    return (
        <div className='p-5'>
            <p className='text-lg font-semibold'> Sales Analytics </p>
            <div className='mt-6 px-5'>
                <div className='flex gap-10'>
                    <div>
                        <p className='text-[#9F9F9F] font-medium '>Traffic</p>
                        <p className='mt-1 text-xl font-medium '>332,222</p>
                        <div className="mt-1 flex gap-2 items-center text-[#00BA9D]">
                            <BsFillCaretUpFill></BsFillCaretUpFill>
                            <p className="font-semibold">+15%</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-[#9F9F9F] font-medium '>Traffic</p>
                        <p className='mt-1 text-xl font-medium '>332,222</p>
                        <div className="mt-1 flex gap-2 items-center text-[#00BA9D]">
                            <BsFillCaretUpFill></BsFillCaretUpFill>
                            <p className="font-semibold">+4%</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-[#9F9F9F] font-medium '>Traffic</p>
                        <p className='mt-1 text-xl font-medium '>332,222</p>

                        <div className="mt-1 flex gap-2 items-center text-[#FD6545]">
                            <BsCaretDownFill></BsCaretDownFill>
                            <p className="font-semibold">+5%</p>
                        </div>
                    </div>
                </div>

            </div>

            <SalesAnalyticsChart/>
        </div>
    );
};

export default SalesAnalyticsDiv;