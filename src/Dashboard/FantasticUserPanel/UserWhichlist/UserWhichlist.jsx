import { useEffect, useState } from "react";
import useUserProfile from "../../../Hooks/user/userProfile";
import UseWishList from "../../../Hooks/wishList/UseWishList";
import { FaBan, FaBinoculars, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { TbDeselect } from "react-icons/tb";
import Rating from "react-rating";
import { GiLoveHowl, GiLoveLetter } from "react-icons/gi";

const UserWhichlist = () => {
    const authToken = localStorage.getItem("userToken")
    const userProfile = useUserProfile(authToken);
    // console.log(userProfile?.sanitizedResult?._id);
    const [wishList, setWishListData] = useState(null);
    useEffect(() => {
        const fetchUserProfileData = async () => {
            try {
                const response = await fetch(`https://api.ecom-bd.com/api/v1/user/wish_list?userId=${userProfile?.sanitizedResult?._id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${authToken}`
                    }
                });
                const data = await response.json();
                setWishListData(data);
            } catch (error) {
                console.error('Error fetching user profile data:', error);
            };
        };

        if (authToken) {
            fetchUserProfileData();
        };
    }, [authToken]);
    // console.log(wishList);
    return (
        <div>
            <section>

                <div className="w-1/2 mx-auto  mb-10">

                    <div className="grid justify-center">
                        <GiLoveLetter className="text-6xl  "></GiLoveLetter>

                        <h1 className="text-4xl  font-bold">Wishlist</h1>

                    </div>

                </div>
                <div className='min-w-[900px] bg-white px-2 rounded-md '>

                    <table className='text-[11px]  w-full'>
                        {/* order table head  */}
                        <thead>
                            <tr className='uppercase   py-5 text-blue-600'>
                                <th className='w-[8%] '>#Order</th>
                                <th className='w-[20%] '>Product</th>
                                <th className='w-[20%]'>Category</th>
                                <th className='w-[20%]'>Payment</th>
                                <th className='w-[20%]'>Order Status</th>
                                <th className='w-[12%]'>Rate</th>
                            </tr>
                        </thead>

                        {/* order tabel body  */}
                        <tbody className='font-bold '>
                            <tr className=' '>
                                {/* id col  */}
                                <td className='text-blue-600 w-[8%] '>
                                    #<span>1254</span>
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
                                        <p>Electronics</p>
                                    </div>
                                </td>

                                {/* payment */}
                                <td className=' w-[20%] flex-col items-start'>
                                    <p className=''>
                                        $<span>600</span>
                                    </p>
                                    <small>
                                        <p className='text-gray-500'>Fully Paid</p>
                                    </small>
                                </td>

                                {/* order status  */}
                                <td className=' w-[20%]'>
                                    <div className='uppercase py-1 px-3 bg-[#035ECF] text-white rounded-md'>
                                        Completed
                                    </div>
                                </td>
                                {/* rating  */}
                                <td className=' w-[12%]'>
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
                                </td>
                            </tr>

                            <tr className=' '>
                                {/* id col  */}
                                <td className='text-blue-600 w-[8%] '>
                                    #<span>1254</span>
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
                                        <div className='w-[25px] h-[25px] bg-[#FF5470] rounded'></div>
                                        <p>Electronics</p>
                                    </div>
                                </td>

                                {/* payment */}
                                <td className=' w-[20%] flex-col items-start'>
                                    <p className=''>
                                        $<span>600</span>
                                    </p>
                                    <small>
                                        <p className='text-gray-500'>Unpaid</p>
                                    </small>
                                </td>

                                {/* order status  */}
                                <td className=' w-[20%]'>
                                    <div className='uppercase py-1 px-3 bg-[#FF5470] text-white rounded-md'>
                                        Cancelled
                                    </div>
                                </td>
                                {/* rating  */}
                                <td className=' w-[12%]'>
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
                                </td>
                            </tr>
                            <tr className=' '>
                                {/* id col  */}
                                <td className='text-blue-600 w-[8%] '>
                                    #<span>1254</span>
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
                                        <div className='w-[25px] h-[25px] bg-[#F8D518] rounded'></div>
                                        <p>Services</p>
                                    </div>
                                </td>

                                {/* payment */}
                                <td className=' w-[20%] flex-col items-start'>
                                    <p className=''>
                                        $<span>600</span>
                                    </p>
                                    <small>
                                        <p className='text-gray-500'>Unpaid</p>
                                    </small>
                                </td>

                                {/* order status  */}
                                <td className=' w-[20%]'>
                                    <div className='uppercase py-1 px-3 bg-[#00BA9D] text-white rounded-md'>
                                        Confirmed
                                    </div>
                                </td>
                                {/* rating  */}
                                <td className=' w-[12%]'>
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
                                </td>
                            </tr>
                            <tr className=' '>
                                {/* id col  */}
                                <td className='text-blue-600 w-[8%] '>
                                    #<span>1254</span>
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
                                        <div className='w-[25px] h-[25px] bg-[#00193B] rounded'></div>
                                        <p>Groceries</p>
                                    </div>
                                </td>

                                {/* payment */}
                                <td className=' w-[20%] flex-col items-start'>
                                    <p className=''>
                                        $<span>600</span>
                                    </p>
                                    <small>
                                        <p className='text-gray-500'>Unpaid</p>
                                    </small>
                                </td>

                                {/* order status  */}
                                <td className=' w-[20%]'>
                                    <div className='uppercase py-1 px-3 bg-[#515C6B] text-white rounded-md'>
                                        Refunded
                                    </div>
                                </td>
                                {/* rating  */}
                                <td className=' w-[12%]'>
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
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>


    );
};

export default UserWhichlist;