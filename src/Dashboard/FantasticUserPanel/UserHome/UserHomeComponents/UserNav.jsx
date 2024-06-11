import React from 'react';
import { BiSearchAlt } from 'react-icons/bi'
import { BsChatDots } from 'react-icons/bs'
import { IoMdNotificationsOutline } from 'react-icons/io'
import UserDateAndTime from '../../UserDateAndTime/UserDateAndTime';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ContexM } from '../../../../Authentication/AuthProvider/AuthProvider';
import useUserProfile from '../../../../Hooks/user/userProfile';

const UserNav = () => {

    const { user } = useContext(ContexM);
    const authToken = localStorage.getItem("userToken")
    const userProfile = useUserProfile(authToken);

    return (
        <div className='flex flex-col lg:flex-row md:flex-row justify-between items-center gap-4'>
            <div className='hidden lg:block'>
                <p className='text-2xl font-bold' style={{ color: "#19D895" }}>Welcome To Small Shop</p>
                <p className=''>hello {userProfile?.sanitizedResult?.name}, Welcome back!</p>
            </div>
            <div>
                <div className='flex items-center justify-end rounded'>
                    <UserDateAndTime />
                </div>
            </div>
            <div className='flex items-center'>
                <div className='border border-black h-9 w-9 flex justify-center items-center relative rounded-full'>
                    <BsChatDots className='text-2xl' />
                    <div className='flex items-center justify-center absolute rounded-full h-3 w-3 top-0 left-1 bg-red-500 text-white'>
                        <p className=''>1</p>
                    </div>
                </div>
                <div className='border border-black h-9 w-9 flex justify-center items-center mx-2 relative rounded-full'>
                    <IoMdNotificationsOutline className='w-8 text-2xl' />
                    <div className='flex items-center justify-center absolute rounded-full h-3 w-3 top-0 left-1 bg-red-500 text-white'>
                        <p className=''>1</p>
                    </div>
                </div>
                <div className='dropdown dropdown-end'>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-36">
                        <Link to="userorderedproducts"><li><a>Settings</a></li>
                        </Link>
                        <li><a >Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserNav;