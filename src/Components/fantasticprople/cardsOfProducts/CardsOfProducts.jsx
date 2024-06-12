import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ContexM } from '../../../Authentication/AuthProvider/AuthProvider';

const CardsOfProducts = ({ singleProduct, handle }) => {
  // console.log(singleProduct);

  const { user } = useContext(ContexM);

  const email = user?.email;


  // use this arrow function we make the recent view system
  const handleProductClick = (product) => {

    // console.log("productId", product);

    fetch("http://localhost:5000/recent_views", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ product, email })
    })
  }
  // use this arrow function we make the recent view system ends

  // const name = singleProduct.name.length < 10

  return <div onClick={() => handleProductClick(singleProduct)} className=""> <div onClick={handle} key={singleProduct._id}>
    <Link to={`/products/${singleProduct._id}`}>
      <div className=' relative lg:w-64 lg:h-[430px] w-[178px] h-[430px]  bg-white hover:shadow-md hover:border-2 hover:duration-300 cursor-pointer gap-2'>
        <img className='w-full h-56' src={singleProduct.product_images[0]} alt="bag" />
        <div className='p-4 bg-white'>
          {/* name */}
          <p className='font-bold pb-2'>{singleProduct?.product_name?.slice(0, 30)}</p>
          {/* name ends */}

          {/* price sec */}
          <p className='text-[#FC9E66] text-lg font-bold'><span className='font-extrabold'>৳</span>{singleProduct.price}</p>
          {/* price sec ends */}

          <p><del>{singleProduct.price+20}</del> -2.8%</p>
          <div className='flex gap-2'>
            <div className='flex justify-center items-center'>
              <span className='text-yellow-600'><FaStar></FaStar></span>
              <span className='text-yellow-600'><FaStar></FaStar></span>
              <span className='text-yellow-600'><FaStar></FaStar></span>
              <span className='text-yellow-600'><FaStar></FaStar></span>
              <span className='text-yellow-600'><FaStar></FaStar></span>
            </div>
            <p>({singleProduct?.review?.length})</p>
          </div>

          <div className=' absolute bottom-0 w-full left-0 '>
            <Link to={`/products/${singleProduct._id}`}>
              <button className="  bg-orange-500 w-full py-1 rounded  text-white font-extrabold">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
    </Link>
    {/* <div className=' hover:shadow-md hover:border-2 hover:border-gray-300 hover:ease-in-out cursor-pointer rounded-lg '>
      <div className='relative'>
        <img className='rounded-t-lg' src={singleProduct.image} alt="" />
        <p className='absolute top-0 rounded-t-lg right-0 bg-orange-500  rounded-l-full text-white font-bold px-1'>-10%</p>
        {singleProduct.sold && <p className='absolute top-0  left-2 bg-orange-100 opacity-100 rounded-full text-orange-500 font-semibold px-1'>0 Sold</p>}
        {
          singleProduct.hot && <p className='absolute bottom-0  left-0 bg-orange-500 text-white font-bold px-1 flex items-center'><FaStar />HOT</p>
        }
      </div>
      <div className='pl-2'>
        <div className='h-14 overflow-hidden'>
          <p className='font-bold my-2 overflow-hidden'>{singleProduct.name}</p>
        </div>
        <p className='font-bold mt-8 text-orange-500'><span className='font-extrabold'>৳</span>{singleProduct.price}</p>
      </div>
      <div className='text-center'>
        <Link to={`/products/${singleProduct._id}`}>
          <button className=" mt-4 bg-orange-500 w-full py-1 rounded  text-white font-extrabold">Shop Now</button>
        </Link>
      </div>
    </div> */}
  </div >
  </div>
};

export default CardsOfProducts;