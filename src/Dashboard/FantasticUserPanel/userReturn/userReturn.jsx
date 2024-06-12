import React, { useEffect, useState } from 'react';
import useUserProfile from '../../../Hooks/user/userProfile';

const UserReturn = () => {
    const authToken = localStorage.getItem("userToken")
    const [returns, setReturn] = useState(null);
    useEffect(() => {
        const fetchUserProfileData = async () => {
            try {
                const response = await fetch(`http://api.ecom-bd.com/api/v1/user/return`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${authToken}`
                    }
                });
                const data = await response.json();
                setReturn(data);
            } catch (error) {
                console.error('Error fetching user return data:', error);
            };
        };

        if (authToken) {
            fetchUserProfileData();
        };
    }, [authToken]);
    // console.log(returns);
    return (
        <div>
            <div className='min-w-[900px] bg-white px-2 rounded-md'>
                <table className='text-[11px]  w-full'>
                    {/* order table head  */}
                    <thead>
                        <tr className='uppercase   py-5 text-blue-600'>
                            <th className='w-[8%] '>#Order</th>
                            <th className='w-[20%] '>Product</th>
                            <th className='w-[20%]'>Category</th>
                            <th className='w-[20%]'>Payment</th>
                            <th className='w-[20%]'>Order Status</th>
                            <th className='w-[12%]'>products</th>
                        </tr>
                    </thead>

                    {
                        returns?.result?.map(data => <tbody className='font-bold '>
                            <tr className=' '>
                                {/* id col  */}
                                <td className='text-blue-600 w-[8%] '>
                                    #<span></span>
                                </td>

                                {/* product and product image  */}
                                <td className=' w-[20%]'>
                                    <div className='flex items-center'>
                                        <div>
                                            <img
                                                src=''
                                                alt=''
                                            />
                                        </div>
                                        <div>
                                            <p>Oculus Quest 2 VR Headset 64GB</p>
                                            <div className='text-[10px] text-gray-400'>
                                                <p>Regular Price: 870</p>
                                                <p>Sale Price: 600</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                {/* category  */}
                                <td className=' w-[20%]'>
                                    <div className='flex items-center gap-4'>
                                        <div className='w-[25px] h-[25px] bg-[#035ECF] rounded'></div>
                                    </div>
                                </td>

                                {/* payment */}
                                <td className=' w-[20%] flex-col items-start'>
                                    <p className=''>
                                        $<span>{data?.totalPrice}</span>
                                    </p>
                                    <small>
                                        <p className='text-gray-500'></p>
                                    </small>
                                </td>

                                {/* order status  */}
                                <td className=' w-[20%]'>
                                    <div className='uppercase py-1 px-3 bg-[#035ECF] text-white rounded-md'>
                                        {data?.status}
                                    </div>
                                </td>
                                {/* rating  */}
                                {/* <td className=' w-[12%]'>
                        <Rating
                            readonly
                            placeholderRating={3.5}
                            emptySymbol={
                                <FaStarHalfAlt className='text-yellow-500' />
                            }
                            placeholderSymbol={
                                <FaStar className='text-yellow-500' />
                            }
                        />
                    </td> */}
                                <td className=' w-[12%]'>
                                    <p>{data.products.length}</p>
                                </td>
                            </tr>



                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default UserReturn;