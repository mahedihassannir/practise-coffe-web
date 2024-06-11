//AVENGERS
//TOMA
//Segmentation Section

import React from 'react';
import { HiOutlineUserGroup } from "react-icons/hi";
import useCustomersInfo from '../../../../../Hooks/Avengers/useCustomersInfo/useCustomersInfo';

const SegmentationByGender = () => {
    const { customerInfo } = useCustomersInfo();
  const { gender, usersAge } = customerInfo;
//  console.log(gender?.[0]?.count)

    return (
        <div>
            <h4 className="text-2xl font-bold mt-5">Segmentation By Gender</h4>
            <div className='mt-5 flex gap-14'>
                <div>
                    <HiOutlineUserGroup className="mb-2 bg-[#035ECF] p-2 w-[40px] h-[40px] rounded text-white"></HiOutlineUserGroup>
                    <p className='text-xl font-bold'>{gender?.[0]?.count}</p>
                </div>
                <div>
                    <HiOutlineUserGroup className="mb-2 bg-[#035ECF] p-2 w-[40px] h-[40px] rounded text-white"></HiOutlineUserGroup>
                    <p className='text-xl font-bold'>{gender?.[1]?.count}</p>
                </div>
                <div>
                    <HiOutlineUserGroup className="mb-2 bg-[#035ECF] p-2 w-[40px] h-[40px] rounded text-white"></HiOutlineUserGroup>
                    <p className='text-xl font-bold'>3%</p>
                </div>
            </div>
            <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, iusto?</p>
        </div>
    );
};

export default SegmentationByGender;