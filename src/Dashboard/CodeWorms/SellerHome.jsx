import React from 'react';
import { MdPendingActions } from 'react-icons/md';
import { FaShippingFast, FaListOl, FaCartArrowDown, FaFirstOrderAlt, FaDollarSign } from 'react-icons/fa';
import { BsArrowReturnLeft, BsChatRight } from 'react-icons/bs';
import { GoCodeReview } from 'react-icons/go';
import { MdDashboardCustomize } from 'react-icons/md';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import UseSellerOrders from '../../Hooks/UseSellerOrders/UseSellerOrders';
import UseSellerDeliveredData from '../../Hooks/UsesellerdeliveredData/UsesellerdeliveredData';
import { Link } from 'react-router-dom';


const SellerHome = () => {

  const [seller, SetSeller] = useState(null);
  const [order, refetch] = UseSellerOrders(null)
  const [deliveredData] = UseSellerDeliveredData();


  useEffect(() => {

    const fetchData = async () => {

      const sellerAuthToken = localStorage.getItem("sellerToken")


      try {
        const response = await axios.get(`https://api.ecom-bd.com/api/v1/seller/profile`, {
          headers: { Authorization: `Bearer ${sellerAuthToken}` }
        });
        const sellerData = response.data;
        SetSeller(sellerData);
        // console.log({ sellerData });
        // console.log(sellerData);

        // Set sellerData in your component state or context for rendering.
      } catch (error) {
        console.error('Error fetching seller data:', error);
      };
    };

    fetchData();

  }, [])
  // console.log(seller);
  // console.log(seller.result.sellerProfile._id);

  // refetch()

  return (
    <div className=''>
      <div className='flex items-center gap-2'>
        <MdDashboardCustomize></MdDashboardCustomize>
        <h2 className='text-2xl font-bold flex gap-2'> <span > welcome  </span><span className='text-red-500'>{seller?.result?.sellerProfile?.name}</span></h2>
      </div>

      <div className='flex items-center gap-2'>
        <MdDashboardCustomize></MdDashboardCustomize>
        <h2 className='text-2xl font-bold flex gap-2'> <span > Your Balance IS </span><span className='text-red-500 flex items-center'>{seller?.result?.sellerProfile?.sellerBalance}<FaDollarSign></FaDollarSign></span></h2>
      </div>

      <hr className='mt-6 shadow border border-green-900' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>
        <Link to={"/dashboard/ordermanage"} className='w-25 bg-slate-50 shadow-2xl p-8'><span className=''><MdPendingActions className='text-3xl border-2 rounded-full'></MdPendingActions></span><br /><p className='font-bold text-lg'>Pending Orders<br /><u>{""}</u></p></Link>

        <Link to={"/dashboard/deliveredorders"} className='w-25 bg-slate-50 shadow-2xl p-8'><span><FaShippingFast className='text-3xl border rounded-full'></FaShippingFast> </span><br /><p className='font-bold text-lg'>Delivered Product<br /><u>{deliveredData?.length}</u></p></Link>


        <Link to={"/dashboard/orderresuns"} className='w-25 bg-slate-50 shadow-2xl p-8'><span><BsArrowReturnLeft className='text-3xl border rounded-full'></BsArrowReturnLeft> </span><br /><p className='font-bold text-lg'>Return<br /><u>{seller?.result?.sellerProfile?.returns?.length}</u></p></Link>

        <Link to={"/dashboard/custommerreview"} className='w-25 bg-slate-50 shadow-2xl p-8'><span><GoCodeReview className='text-3xl border rounded-full'></GoCodeReview> </span><br /><p className='font-bold text-lg'>Reviews<br /><u>{seller?.result?.sellerProfile?.reviews?.length}</u></p></Link>
      </div>

      <div className='text-center mt-8'>
        <button className='font-bold rounded-lg px-20 py-2 bg-[#0A1727] text-white text-center'>See More</button>
      </div>

      <div className='shadow-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
        <div className='shadow-2xl bg-[#2083C2] p-8 flex items-center gap-6'><span className='text-4xl text-white'><FaListOl></FaListOl></span>
          <h2 className='text-2xl font-bold text-white'> Products {seller?.result?.sellerProfile?.products?.length}</h2></div>
        <div className='bg-[#5CE85B] p-8 flex items-center gap-6'><span className='text-4xl text-white'><BsChatRight></BsChatRight></span>
          <h2 className='shadow-2xl text-2xl font-bold text-white'>Customers</h2></div>
        <div className='shadow-2xl bg-[#FFB64B] p-8 flex items-center gap-6'><span className='text-4xl text-white'><FaCartArrowDown></FaCartArrowDown></span>
          <h2 className='text-2xl font-bold text-white'> Product Categories</h2></div>
        <div className='shadow-2xl bg-[#E34D4E] p-8 flex items-center gap-6'><span className='text-4xl text-white'><FaFirstOrderAlt></FaFirstOrderAlt></span>
          <h2 className='text-2xl font-bold text-white'>Order List</h2></div>
      </div>

      <div>
        <h2>New Orders</h2>
      </div>

    </div>
  );
};

export default SellerHome;
