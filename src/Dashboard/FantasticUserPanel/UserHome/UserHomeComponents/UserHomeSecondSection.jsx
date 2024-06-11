import React from 'react';
import video1 from '../../../../assets/videos/Leaves - 74233 (1080P)(2).mp4'
import { Link } from 'react-router-dom';
import UserDateAndTime from '../../UserDateAndTime/UserDateAndTime';
import { BsArrowRightShort } from 'react-icons/bs'
const UserHomeSecondSection = () => {
    return (
        <div className='w-full my-6 relative flex flex-col lg:flex-row gap-8'>
        <div className=''>
        <video style={{width: "40rem"}} className='h-40 object-cover' src={video1} autoPlay loop muted></video>

            <div className='absolute top-2 md:top-10 left-10 '>
                <p className='lg:text-2xl font-bold text-white overflow-hidden'>Bye and get your extraordinary products</p>
                <p className='text-white'>World fastest growing market</p>
                <div className='hidden md:block'>
                    <button className='bg-white py-2 px-3 rounded text-green-400 font-semibold'>Explore More</button>
                    <button className='py-2 px-3 mx-4 border text-white rounded font-semibold'>Top Products</button>
                </div>

            </div>
        </div>
        {/* ends video */}

        <div className='flex gap-2'>
            <div className='p-4 font-bold bg-gray-100' style={{ backgroundImage: "url(https://img.tukuppt.com/png_preview/00/04/81/Brh8sRTRlE.jpg!/fw/780)", backgroundSize: "contain", backgroundPosition: "right bottom", backgroundRepeat: "no-repeat", height: "160px", width: "260px" }}>
                <h1 className='text-2xl mb-3 hidden md:block'>My Stat</h1>
                <p className=''>Today &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; This Month</p>
                <p className='my-2 text-green-500'>4 Ordered&nbsp; &nbsp; 17 ordered</p>

                <Link to="/dashboard/userprogress"><p className='flex items-center gap-1'>Go to my orders <BsArrowRightShort className='mt-1' /></p></Link>
            </div>

            {/* date and time */}
            <div className='clock-back h-40 flex justify-center items-center' >
                {/* to do */}
            </div>
        </div>

    </div>
    );
};

export default UserHomeSecondSection;