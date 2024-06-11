import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs'
import { FaDollarSign, FaHeart, FaRegHeart } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import axios from 'axios';
import { useContext } from 'react';
import { ContexM } from '../../../../Authentication/AuthProvider/AuthProvider';
import UseRecentAcivity from '../../../../Hooks/RecentAcivity/RecentAcivity';
import { ToastContainer, toast } from 'react-toastify';
import useUserProfile from '../../../../Hooks/user/userProfile';
const UserHomeThirdSection = () => {

    const authToken = localStorage.getItem("userToken")
    const userProfile = useUserProfile(authToken);
    // console.log(userProfile);
    return (
        <div className='grid grid-cols lg:grid-cols-2 gap-x-10'>
            <div className=''>
                <ToastContainer></ToastContainer>
                <div className='flex justify-between px-2 my-7'>
                    <p className='font-bold'>My Listings</p>
                    <Link to="mylisting">
                        <p className='flex items-center gap-x-2'>See All <BsArrowRightShort /></p>
                    </Link>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 my-2'>
                    <div className='relative'>
                        <img className='h-40 rounded-xl w-full' src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        <FaHeart className='absolute top-3 right-3 text-green-400' />
                        <p className='absolute bottom-1 left-6 font-bold text-slate-400'>Annual vince</p>
                    </div>
                    <div className='relative'>
                        <img className='h-40 rounded-xl w-fill' src="https://images.unsplash.com/photo-1505236273191-1dce886b01e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHxwcm9kdWN0JTIwc2FtbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        <FaRegHeart className='absolute top-3 right-3 text-green-400' />
                        <p className='absolute bottom-1 left-8 font-bold text-slate-400'>AirPods</p>
                    </div>
                    <div className='relative'>
                        <img className='h-40 rounded-xl w-full' src="https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3QlMjBzYW1sbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        <FaRegHeart className='absolute top-3 right-3 text-green-400' />
                        <p className='absolute bottom-1  font-bold text-slate-400'>Gaming Consol</p>
                    </div>
                    <div className='relative'>
                        <img className='h-40 rounded-xl w-full' src="https://images.unsplash.com/photo-1607663612361-c0b9406725df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                        <FaHeart className='absolute top-3 right-3 text-green-400' />
                        <p className='absolute bottom-1 left-2 font-bold text-slate-600'>Robotic Drone</p>
                    </div>
                </div>
                {/* third section Listing Ends here */}

                {/* third section TopProducts,Featured Products start*/}
                <div className='grid grid-cols gap-3 md:grid-cols-2 mt-6'>
                    <div>
                        <div className='flex justify-between mt-8 mb-6'>
                            <p className='font-bold'>Top Products</p>
                            <p className='flex items-center gap-x-2 mr-4'>See All <BsArrowRightShort /></p>
                        </div>
                        <div>
                            <div className='flex items-center bg-white py-2 rounded-lg px-2'>
                                <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                <img className='w-10 h-10  rounded-full' src="https://images.unsplash.com/photo-1505236273191-1dce886b01e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHxwcm9kdWN0JTIwc2FtbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3QlMjBzYW1sbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1607663612361-c0b9406725df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                <p className='text-4xl mb-2 mx-2'>|</p>
                                <div>
                                    <p>2K Reviews</p>
                                    <p className='flex items-center text-yellow-500'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between mt-8 mb-6'>
                            <p className='font-bold'>Featured Products</p>
                            <p className='flex items-center gap-x-2 mr-4'>See All <BsArrowRightShort /></p>
                        </div>
                        <div>
                            <div className='flex items-center bg-white py-2 rounded-lg px-2'>
                                <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                <img className='w-10 h-10  rounded-full' src="https://images.unsplash.com/photo-1505236273191-1dce886b01e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHxwcm9kdWN0JTIwc2FtbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3QlMjBzYW1sbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                                <img className='w-10 h-10 rounded-full' src="https://images.unsplash.com/photo-1607663612361-c0b9406725df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                                <p className='text-4xl mb-2 mx-2'>|</p>
                                <div>
                                    <p>2K Reviews</p>
                                    <p className='flex items-center text-yellow-500'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* third section TopProducts,Featured Products start ends*/}

            {/* third section recent activity start */}
            <div className=''>
                <div className='flex justify-between my-7'>
                    <p className='font-bold'>Activity</p>
                    <p className='flex items-center gap-x-2 mr-4'>See All <BsArrowRightShort /></p>

                </div>

                <div className='w-full h-auto border-2 shadow-md'>

                    <div className='text-center pt-2 text-pretty font-semibold text-lg'>
                        Refer Balance: {userProfile?.sanitizedResult?.balance} Taka
                    </div>

                    <hr className='border-2 mt-2' />

                    <div>
                        <div className='flex items-center p-2 justify-between w-11/12 h-20 rounded-md shadow-md mx-auto mt-2 mb-4'>

                            <div>
                                <img className='h-fit w-10 rounded-md' src={userProfile?.sanitizedResult?.profileImage} alt="" />
                            </div>
                            <div>
                                <div>
                                    name: {userProfile?.sanitizedResult?.referredBy?.name}
                                </div>

                                <span className='flex pr-2'>
                                    email: {userProfile?.sanitizedResult?.referredBy?.email}
                                </span>

                            </div>
                            <div>
                                Rafered
                            </div>

                        </div>
                    </div>





                </div>
                {/* third section recent activity Ends */}
            </div>
        </div>
    );
};

export default UserHomeThirdSection;