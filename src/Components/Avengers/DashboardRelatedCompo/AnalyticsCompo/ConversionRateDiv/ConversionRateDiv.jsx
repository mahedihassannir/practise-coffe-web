import React from 'react';
import ConversionRateChart from '../ConversionRateChart/ConversionRateChart';
import ConversionRateText from '../ConversionRateText/ConversionRateText';

const ConversionRateDiv = () => {
    const progressPercentage = 100;

    return (
        <div className='p-5'>
            <h4 className='font-semibold text-lg '> Conversion Rate</h4>
            <div className='mt-4 flex items-center justify-center gap-8'>
               

               <div>
                <ConversionRateChart></ConversionRateChart>
               </div>

                <div>
                    <ConversionRateText />
                </div>
            </div>

        </div>
    );
};

export default ConversionRateDiv;