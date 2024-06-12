import { Link } from "react-router-dom";
import { FaAngleRight, FaDollarSign, FaGreaterThan, FaKorvue, FaRocket, FaStar } from 'react-icons/fa';
import { useEffect, useState } from "react";
import axios from "axios";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
const CustommerReview = () => {
    const [reviews, setReview] = useState();
    const id = localStorage.getItem("sId");
    // console.log(id);
    const sellerAuthToken = localStorage.getItem("sellerToken");
    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await axios.get(`https://api.ecom-bd.com/api/v1/seller/review?sellerId=${id}`, {
                    headers: { Authorization: `Bearer ${sellerAuthToken}` }
                });
                const sellerData = response.data;
                setReview(sellerData);
                // console.log({ sellerData });
                // console.log(sellerData);

                // Set sellerData in your component state or context for rendering.
            } catch (error) {
                console.error('Error fetching seller data:', error);
            };
        };

        fetchData();

    }, []);

    const review = reviews?.data?.result?.reviews;
    // console.log(review);
    return (
        <div className="w-[98%] lg:w-11/12 mx-auto">

            <section>
                {/* this is for teh alert */}
                <div className=" p-3 rounded-sm bg-[#e2efff] flex items-center gap-2">
                    <span className="">
                        <FaAngleRight></FaAngleRight>
                    </span>
                    {/* gap */}
                    <span className="">
                        E-Com Seller Center is able to generate a report for review.
                    </span>
                </div>
                {/* this is for the alert // ends */}
                {/* //------------------------------------------------------// */}
                {/* this is for the filter section */}
                <section className="w-full  bg-white mt-4 lg:mt-16 rounded-md py-2">
                    {/* this is for teh sub hedding */}
                    <div className="">
                        <span className="py-2 pl-2">Key Summary</span>
                    </div>
                    {/* this is for teh sub hedding ends */}

                    {/* this is for the cards */}
                    <section className="flex gap-4 pl-4 mt-2 mb-2">
                        <div className="box-border w-40 h-32 flex items-center  bg-[#f8f8f8]">
                            <div className="  ">
                                <div className="flex items-center gap-1">
                                    <p className="">
                                        Orders under  review
                                    </p>
                                </div>
                                <h3 className="text-3xl font-bold text-[#dd6161]">0</h3>
                            </div>
                        </div>
                        <div className="box-border w-40 h-32 flex items-center  bg-[#f8f8f8]">
                            <div className="pl-2 ">
                                <p className="">
                                    Orders under  review
                                </p>
                                <h3 className="text-3xl font-bold text-[#dd6161]">0</h3>
                            </div>
                        </div>
                    </section>
                    {/* this is for the cards ends */}
                </section>

                {/* this is for the payment related starts */}

                <section className="w-full rounded-md bg-white h-20  mt-5 lg:mt-10">

                    <div className="">




                    </div>

                </section>

                {/* this is for the payment related ends */}

                {/* --------------------------------------------------------------------- */}

                {/* this is for order return  */}

                <section className="w-full  flex justify-center items-center bg-white mt-10">
                    <div className="">
                        {
                            review?.length > 0 ? (
                                review.map((res, index) => (
                                    <div key={index} className="">

                                        <div className="md:w-[1300px] w-full md:h-96 mt-2 bg-white border-2 border-black rounded-md md:flex md:m-10">
                                            {/* design */}
                                            <div className="md:w-[350px] border-2 h-96 rounded-md block">
                                                <div className="mt-3 pl-3">
                                                    <h1 className="flex gap-2">Review: <span className="text-red-400 font-semibold">{res.comment}</span></h1>
                                                    <p className="flex items-center gap-2"><FaKorvue></FaKorvue> Verified Buyer</p>
                                                    <img className="mt-5 ml-3 w-[300px] h-[190px]" src={res?.product[0]?.product_images[0]} alt="" />
                                                </div>

                                            </div>
                                            {/* design ends */}

                                            {/* infos */}
                                            <div className="md:w-[800px] bg-white p-2 rounded-md">
                                                <div className="mt-4 ml-4">
                                                    <div className="flex">
                                                        <FaStar className="text-orange-500"></FaStar>
                                                        <FaStar className="text-orange-500"></FaStar>
                                                        <FaStar className="text-orange-500"></FaStar>
                                                        <FaStar className="text-orange-500"></FaStar>
                                                        <FaStar className="text-orange-500"></FaStar>
                                                    </div>
                                                    {/* title */}
                                                    <div>
                                                        <h2 className="text-2xl font-semibold">
                                                            {res?.product[0]?.product_name}
                                                        </h2>

                                                        <h2 className="flex items-center text-2xl font-semibold text-red-500">
                                                            {res?.product[0]?.price}
                                                            <span className="pl-1">টাকা</span>
                                                            <FaDollarSign></FaDollarSign>

                                                        </h2>

                                                    </div>
                                                    {/* description */}
                                                    <div className="w-11/12 mt-3">
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quae et aspernatur pariatur voluptas rem est cum, minus optio a nulla, id ipsam sed molestias libero fugiat amet? Repellendus, at!</p>
                                                    </div>

                                                    <Link to={""}>
                                                        <button className="mt-3 underline text-md font-semibold">read more</button>
                                                    </Link>

                                                </div>

                                            </div>
                                            {/* infos ends */}


                                        </div>

                                    </div>
                                ))
                            ) : (
                                <div>
                                    <img className="" src="https://lzd-img-global.slatic.net/g/tps/imgextra/i3/O1CN01937XJc1v1nr0pZgrg_!!6000000006113-55-tps-179-153.svg" alt="" />
                                    <h3 className="text-center test-2xl font-semibold mt-4">No return order under this status or filter</h3>
                                </div>
                            )

                        }

                    </div>
                </section>



                {/* this is for order return ends */}

                {/* --------------------------------------------------------------------- */}



            </section>


        </div >
    );
};

export default CustommerReview;

// Account Statement

// import React from 'react';
// import {FaExclamationCircle, FaGreaterThan, FaToggleOn, } from 'react-icons/fa';
// const CustommerReview = () => {
//     return (
//         <div className='bg-base-100 pb-10 px-5'>
// <h2 className='text-2xl font-bold pt-4'>Account Statement</h2>
//            <div className='flex gap-10'>
// <div>
// <h2 className='text-xl font-bold py-4'>Payment Method</h2>
// <div className=' bg-base-200 border-2 border-gray-400 rounded-lg border-rounded space-y-4'>
// <div className='flex justify-between p-3'>
// <div className='relative'>
// <button className="px-5 py-3 rounded-md bg-blue-700 text-white font-semibold border">PRE PAID</button>
// <p className='text-xl absolute bottom-2'>Auto-top-up</p>
// </div>
// <div className='space-y-3'>
// <p className='text-xl '>Available Credit</p>
// <h2 className='text-xl font-semibold'>BDT 0</h2>
// <button className='px-3 py-1 text-white rounded-lg font-bold text-center bg-orange-500 text-xl'>Top Up</button>
// <p className='w-12 h-10'><FaToggleOn className='w-12 h-12 text-orange-600'></FaToggleOn></p>
// </div>
// </div>
// <hr className='px-3 h-0.5'/>
// <div className='flex justify-between px-4 py-4'>
// <p className='text-xl'>Promotional credit balance</p>
// <p className='flex gap-x-3 font-semibold items-center text-xl'>BDT 2,500 <span> <FaExclamationCircle className='text-orange-600'></FaExclamationCircle> </span></p>
// </div>
// </div>
// </div>

// <div>
// <h2 className='text-xl font-bold p-4'>Monthly Summary</h2>
// <div className=' bg-base-200 border-2 border-gray-400 rounded-lg border-rounded'>
// <div className='bg-base-300 flex justify-between items-center gap-x-8 p-4'>
//  <p className='text-xl'>Available Credit</p>
// <p className='text-xl font-semibold'>BDT 30</p>
// </div>
// <div className='flex justify-between items-center gap-x-8  p-4'>
//  <p className='text-xl'>Opening Credit</p>
// <p className='text-xl font-semibold'>BDT 40</p>
// </div>
// <div className='flex justify-between items-center gap-x-8 p-4'>
//  <p className='text-xl'>Add-Top Up-Store Earning</p>
// <p className='text-xl font-semibold'>BDT 10</p>
// </div>
// <div className='flex justify-between items-center gap-x-8 p-4'>
//  <p className='text-xl'>Less:Net Ad spend this month</p>
// <p className='text-xl font-semibold'>BDT 20</p>
// </div>
// <div className='flex justify-between items-center gap-x-8 p-4'>
//  <p className='text-xl'>Less:Tax dedication</p>
// <p className='text-xl font-semibold'>BDT 70</p>
// </div>
// <div className='flex justify-between items-center gap-x-8 p-4'>
//  <p className='text-xl'>Available Credit</p>
// <p className='text-xl font-semibold'>BDT 80</p>
// </div>

// </div>
// </div>
// </div>

// <div className='flex gap-6 items-center mt-10'>
// <p className='text-xl text-orange-600'>Transaction History</p>
// <p className='text-xl'>Invoices</p>
// </div>
// <hr  className='h-1.5 mt-2  w- bg-orange-600'/>

// {/* 2 input field create */}
// <div className='flex justify-end gap-5 mt-8 pb-5'>
// <select name="" className=" border-2 border-gray-500 px-2 w-1/3 text-lg font-semibold  text-gray-600" id="">
// <option value="">Transaction Type</option>
// <option value="Bkash">Bkash</option>
// <option value="Nagad">Nagad</option>
// <option value="Rocket">Rocket</option>
// </select>
// <div className='border-2 border-gray-500 flex gap-5'>
// <span className='font-semibold'>Start date:</span>
// <input type="date" name="" id="" />
// <span className='font-semibold'>End date:</span>
// <input type="date" name="" id="" />
// </div>
// </div>

// <div className="overflow-x-auto my-5 w-full border rounded-xl">
//   <table className="table w-full">
//     {/* head */}
//     <thead className=''>
//       <tr className='grid grid-cols-5'>
// <th>Transaction Date</th>
// <th>Ad Tpe</th>
// <th>Transaction Type</th>
// <th>Transaction Number</th>
// <th>Amount</th>
//       </tr>
//     </thead>
//     <tbody>
//       {/* row 1 */}
//       <tr className='grid grid-cols-5 text-lg'>
// <td>06/09/2023</td>
// <td>search</td>
// <td>Promo Credit</td>
// <td>PA000000454253</td>
// <td>BDT 2,500</td>
//       </tr>
//     </tbody>
//   </table>
// </div>
// </div>
//     );
// };

// export default CustommerReview;

