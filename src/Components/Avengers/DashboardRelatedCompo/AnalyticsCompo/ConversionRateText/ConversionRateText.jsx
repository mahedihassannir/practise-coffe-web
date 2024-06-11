import { BsCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';

const ConversionRateText = () => {
    return (
        <div>
            <div>
                <p className='text-[#878787] font-semibold'>Cart Abandonment</p>
                <p className='text-xl font-semibold'>73%</p>
                <div className="mt-1 flex gap-2 items-center text-[#00BA9D]">
                    <BsFillCaretUpFill></BsFillCaretUpFill>
                    <p className="font-semibold">+15%</p>
                </div>
            </div>

            <div className='mt-3'>
                <p className='text-[#878787] font-semibold'>Revenue Left</p>
                <p className='text-xl font-semibold'>$12,432</p>
                <div className="mt-1 flex gap-2 items-center text-[#00BA9D]">
                    <BsFillCaretUpFill></BsFillCaretUpFill>
                    <p className="font-semibold">+4%</p>
                </div>
            </div>
        </div>
    );
};

export default ConversionRateText;